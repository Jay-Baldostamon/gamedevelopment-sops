import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { type TrainingDay } from './curriculum'
import {
  createInitialProgress,
  isDayFinished,
  legacyChecklistIndexes,
  loadProgress,
  saveProgress,
} from './progress'

const storageKey = 'weekday-training-todo-v1'
const previousLengths = [8, 7, 8, 7, 9, 10, 6, 6, 9, 8, 8, 12, 6, 8, 12, 3, 3, 3, 5, 7]
const day5: TrainingDay = {
  id: 'l1-1-5-shared',
  level: 1,
  weekNumber: 1,
  dayNumber: 5,
  title: 'Code Literacy',
  sourcePath: 'Tools-Only 80-Day Learning Plan.md',
  content: '',
  checklist: ['Complete the exercise'],
}

beforeEach(() => {
  const values = new Map<string, string>()
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => values.set(key, value),
    removeItem: (key: string) => values.delete(key),
  })
})

afterEach(() => vi.unstubAllGlobals())

describe('self-paced completion', () => {
  it('finishes Days 5 and 10 without recorded supervisor reviews', () => {
    const day10 = { ...day5, id: 'l1-2-10-shared', weekNumber: 2, dayNumber: 10 }
    const progress = {
      ...createInitialProgress(),
      completed: { [day5.id]: true, [day10.id]: true },
    }

    expect(isDayFinished(day5, progress)).toBe(true)
    expect(isDayFinished(day10, progress)).toBe(true)
    expect(isDayFinished(day5, createInitialProgress())).toBe(false)
  })
})

describe('legacy checklist migration', () => {
  it('preserves relevant checks, completed days, notes, reviews, and retired checks', () => {
    const legacy = {
      startDate: '2026-10-12',
      lane: 'db',
      checks: {
        'l1-1-1-shared': [true, false, true, true, false, false, false, false],
        'l1-1-2-shared': [true, true, false, false, true, false, false],
        'l1-1-3-shared': [true, true, true, false, false, false, false, false],
        'l1-4-20-shared': [true, true, true, true, true, true, false],
      },
      completed: { 'l1-1-1-shared': false, 'l1-4-20-shared': true },
      notes: { 'l1-1-1-shared': 'Private note' },
      reviews: { [day5.id]: { reviewer: 'Previous reviewer', reviewedAt: '2026-10-16' } },
    }
    localStorage.setItem(storageKey, JSON.stringify(legacy))

    const migrated = loadProgress()

    expect(migrated.checklistVersion).toBe(4)
    expect(migrated.startDate).toBe(legacy.startDate)
    expect(migrated).not.toHaveProperty('lane')
    expect(migrated.retiredChecks['l1-1-1-shared']).toEqual([true, true, true])
    expect(migrated.checks['l1-1-1-shared']).toBeUndefined()
    expect(migrated.completed['l1-1-1-shared']).toBe(true)
    expect(migrated.retiredChecks['l1-1-2-shared']).toEqual([false, true, false, true])
    expect(migrated.retiredChecks['l1-1-3-shared']).toEqual([false, true, false])
    expect(migrated.retiredChecks['l1-4-20-shared']).toEqual([false, false])
    expect(migrated.completed['l1-4-20-shared']).toBe(true)
    expect(migrated.legacyChecks['l1-1-1-shared']).toEqual(legacy.checks['l1-1-1-shared'])
    expect(migrated.notes).toEqual(legacy.notes)
    expect(migrated.reviews).toEqual(legacy.reviews)

    saveProgress(migrated)
    expect(loadProgress()).toEqual(migrated)
  })

  it('keeps new human-review checks incomplete rather than reusing an old AI-review check', () => {
    localStorage.setItem(storageKey, JSON.stringify({
      checks: {
        'l1-3-12-shared': Array(12).fill(true),
        'l1-3-15-shared': Array(12).fill(true),
      },
      completed: {},
    }))

    const migrated = loadProgress()
    expect(migrated.retiredChecks['l1-3-12-shared'][7]).toBe(false)
    expect(migrated.retiredChecks['l1-3-15-shared'][8]).toBe(false)
    expect(migrated.completed['l1-3-12-shared']).not.toBe(true)
    expect(migrated.completed['l1-3-15-shared']).not.toBe(true)
  })

  it('preserves the historical positional mapping independently of revised lessons', () => {
    const historicalMappings = [
      [0, 2, 3], [null, 1, 2, 4], [null, 1, null], [0, 1, 2, 3, 4], [0, 1, 2, 3, 6],
      [0, 4, 5, 6], [0, 1, 2, null], [0, 1, 2], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4, 5],
      [0, 1, 2, 3, 4], [0, 1, 2, 3, 4, 5, 6, null, 8, 9], [0, 1, 2, 3, 4],
      [0, 1, 2, 3, 4, 5, 6], [0, 1, 2, 3, 4, 5, 6, 7, null],
      [0], [0], [0], [0, 1, 2, 3], [null, null],
    ]
    const ids = Object.keys(legacyChecklistIndexes).sort()

    expect(ids).toHaveLength(20)
    for (const id of ids) {
      const dayNumber = Number(id.split('-')[2])
      const indexes = legacyChecklistIndexes[id]
      const previousIndexes = indexes.filter((index): index is number => index !== null)
      expect(indexes).toEqual(historicalMappings[dayNumber - 1])
      expect(new Set(previousIndexes).size).toBe(previousIndexes.length)
      for (const index of previousIndexes) {
        expect(index).toBeGreaterThanOrEqual(0)
        expect(index).toBeLessThan(previousLengths[dayNumber - 1])
      }
    }
  })

  it('applies every positional mapping and archives its source', () => {
    const checks: Record<string, boolean[]> = {}
    for (const id of Object.keys(legacyChecklistIndexes)) {
      const dayNumber = Number(id.split('-')[2])
      checks[id] = Array.from({ length: previousLengths[dayNumber - 1] }, (_, index) => index % 2 === 0)
    }
    localStorage.setItem(storageKey, JSON.stringify({ checks }))

    const migrated = loadProgress()
    for (const [id, indexes] of Object.entries(legacyChecklistIndexes)) {
      expect(migrated.legacyChecks[id]).toEqual(checks[id])
      expect(migrated.retiredChecks[id]).toEqual(indexes.map((index) => index !== null && checks[id][index]))
      expect(migrated.checks[id]).toBeUndefined()
    }
  })

  it('rejects malformed or future data without overwriting the stored value', () => {
    const invalidStates = [
      '',
      '{broken',
      JSON.stringify({ checklistVersion: 5 }),
      JSON.stringify({ checks: [] }),
      JSON.stringify({ checks: { day: [true, 'yes'] } }),
      JSON.stringify({ legacyChecks: { day: [null] } }),
      JSON.stringify({ retiredChecks: { day: [null] } }),
      JSON.stringify({ completed: { day: 'yes' } }),
      JSON.stringify({ notes: { day: 42 } }),
      JSON.stringify({ reviews: { day: { reviewer: null, reviewedAt: '2026-10-16' } } }),
      JSON.stringify({ startDate: '2026-02-31' }),
    ]
    for (const stored of invalidStates) {
      localStorage.setItem(storageKey, stored)
      expect(() => loadProgress()).toThrow()
      expect(localStorage.getItem(storageKey)).toBe(stored)
    }
  })

  it('archives version 2 L1 checks without granting new evidence or losing other progress', () => {
    const stored = {
      ...createInitialProgress(),
      checklistVersion: 2,
      checks: { [day5.id]: [true, false] },
      legacyChecks: { [day5.id]: [false, true] },
      completed: { [day5.id]: true },
      notes: { [day5.id]: 'Earlier learning' },
    }
    localStorage.setItem(storageKey, JSON.stringify(stored))
    const migrated = loadProgress()
    expect(migrated.checklistVersion).toBe(4)
    expect(migrated.checks[day5.id]).toBeUndefined()
    expect(migrated.retiredChecks[day5.id]).toEqual([true, false])
    expect(migrated.completed).toEqual(stored.completed)
    expect(migrated.legacyChecks).toEqual(stored.legacyChecks)
    expect(migrated.notes).toEqual(stored.notes)
    expect(migrated.startDate).toBe(stored.startDate)
    saveProgress(migrated)
    expect(loadProgress()).toEqual(migrated)
  })

  it('archives version 3 checks when the revised L1 checklists arrive', () => {
    const stored = {
      ...createInitialProgress(),
      checklistVersion: 3,
      checks: { [day5.id]: [true], 'l1-2-6-shared': [true, false, true] },
      completed: { [day5.id]: true },
      notes: { [day5.id]: 'Earlier learning' },
    }
    localStorage.setItem(storageKey, JSON.stringify(stored))
    const migrated = loadProgress()
    expect(migrated.checklistVersion).toBe(4)
    expect(migrated.checks[day5.id]).toBeUndefined()
    expect(migrated.checks['l1-2-6-shared']).toBeUndefined()
    expect(migrated.retiredChecks[day5.id]).toEqual([true])
    expect(migrated.retiredChecks['l1-2-6-shared']).toEqual([true, false, true])
    expect(migrated.completed).toEqual(stored.completed)
    expect(migrated.notes).toEqual(stored.notes)
  })

  it('surfaces browser storage write failures', () => {
    vi.stubGlobal('localStorage', {
      setItem: () => { throw new Error('Storage unavailable') },
    })
    expect(() => saveProgress(createInitialProgress())).toThrow('Storage unavailable')
  })
})
