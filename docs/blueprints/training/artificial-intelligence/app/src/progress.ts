import type { TrainingDay } from './curriculum'
import { localDateString, normalizeStartDate } from './scheduler'

export interface ProgressState {
  checklistVersion: number
  startDate: string
  checks: Record<string, boolean[]>
  legacyChecks: Record<string, boolean[]>
  retiredChecks: Record<string, boolean[]>
  completed: Record<string, boolean>
  notes: Record<string, string>
  reviews: Record<string, { reviewer: string; reviewedAt: string }>
}

const storageKey = 'weekday-training-todo-v1'
const checklistVersion = 4

export const legacyChecklistIndexes: Record<string, readonly (number | null)[]> = {
  'l1-1-1-shared': [0, 2, 3],
  'l1-1-2-shared': [null, 1, 2, 4],
  'l1-1-3-shared': [null, 1, null],
  'l1-1-4-shared': [0, 1, 2, 3, 4],
  'l1-1-5-shared': [0, 1, 2, 3, 6],
  'l1-2-6-shared': [0, 4, 5, 6],
  'l1-2-7-shared': [0, 1, 2, null],
  'l1-2-8-shared': [0, 1, 2],
  'l1-2-9-shared': [0, 1, 2, 3, 4],
  'l1-2-10-shared': [0, 1, 2, 3, 4, 5],
  'l1-3-11-shared': [0, 1, 2, 3, 4],
  'l1-3-12-shared': [0, 1, 2, 3, 4, 5, 6, null, 8, 9],
  'l1-3-13-shared': [0, 1, 2, 3, 4],
  'l1-3-14-shared': [0, 1, 2, 3, 4, 5, 6],
  'l1-3-15-shared': [0, 1, 2, 3, 4, 5, 6, 7, null],
  'l1-4-16-shared': [0],
  'l1-4-17-shared': [0],
  'l1-4-18-shared': [0],
  'l1-4-19-shared': [0, 1, 2, 3],
  'l1-4-20-shared': [null, null],
}

export function createInitialProgress(): ProgressState {
  return {
    checklistVersion,
    startDate: normalizeStartDate(localDateString()),
    checks: {},
    legacyChecks: {},
    retiredChecks: {},
    completed: {},
    notes: {},
    reviews: {},
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function isChecklistRecord(value: unknown): value is Record<string, boolean[]> {
  return isRecord(value) && Object.values(value).every(
    (checks) => Array.isArray(checks) && checks.every((checked) => typeof checked === 'boolean'),
  )
}

function isCompletedRecord(value: unknown): value is Record<string, boolean> {
  return isRecord(value) && Object.values(value).every((completed) => typeof completed === 'boolean')
}

function isNotesRecord(value: unknown): value is Record<string, string> {
  return isRecord(value) && Object.values(value).every((note) => typeof note === 'string')
}

function isReviewsRecord(value: unknown): value is ProgressState['reviews'] {
  return isRecord(value) && Object.values(value).every(
    (review) => isRecord(review) && typeof review.reviewer === 'string' && typeof review.reviewedAt === 'string',
  )
}

function isValidStartDate(value: unknown): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value) || Number(value.slice(0, 4)) < 100) {
    return false
  }
  const date = new Date(`${value}T00:00:00Z`)
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
}

export function loadProgress(): ProgressState {
  const stored = localStorage.getItem(storageKey)
  if (stored === null) return createInitialProgress()
  const value: unknown = JSON.parse(stored)
  if (!isRecord(value)) {
    throw new Error('Stored training progress is not an object.')
  }
  const { checklistVersion: version, startDate, checks, legacyChecks, retiredChecks, completed, notes, reviews } = value
  const supportedVersions = [1, 2, 3, checklistVersion]
  if (version !== undefined && (typeof version !== 'number' || !supportedVersions.includes(version))) {
    throw new Error('Stored training progress uses an unsupported checklist version.')
  }
  if (startDate !== undefined && !isValidStartDate(startDate)) {
    throw new Error('Stored training progress has an invalid start date.')
  }
  if (checks !== undefined && !isChecklistRecord(checks)) {
    throw new Error('Stored training progress has an invalid checklist.')
  }
  if (legacyChecks !== undefined && !isChecklistRecord(legacyChecks)) {
    throw new Error('Stored training progress has invalid archived checklists.')
  }
  if (retiredChecks !== undefined && !isChecklistRecord(retiredChecks)) {
    throw new Error('Stored training progress has invalid retired checklists.')
  }
  if (completed !== undefined && !isCompletedRecord(completed)) {
    throw new Error('Stored training progress has invalid completion data.')
  }
  if (notes !== undefined && !isNotesRecord(notes)) {
    throw new Error('Stored training progress has invalid notes.')
  }
  if (reviews !== undefined && !isReviewsRecord(reviews)) {
    throw new Error('Stored training progress has invalid historical reviews.')
  }
  const initial = createInitialProgress()
  const progress: ProgressState = {
    checklistVersion: version ?? 1,
    startDate: startDate ?? initial.startDate,
    checks: checks ?? {},
    legacyChecks: legacyChecks ?? {},
    retiredChecks: retiredChecks ?? {},
    completed: completed ?? {},
    notes: notes ?? {},
    reviews: reviews ?? {},
  }
  if (version === undefined || version === 1) {
    progress.checks = { ...progress.checks }
    progress.legacyChecks = { ...progress.legacyChecks }
    progress.completed = { ...progress.completed }
    for (const [dayId, indexes] of Object.entries(legacyChecklistIndexes)) {
      const previousChecks = progress.checks[dayId]
      if (!previousChecks) continue
      progress.legacyChecks[dayId] = [...previousChecks]
      const migratedChecks = indexes.map((index) => index !== null && previousChecks[index] === true)
      progress.checks[dayId] = migratedChecks
      if (migratedChecks.every(Boolean)) progress.completed[dayId] = true
    }
    progress.checklistVersion = 2
  }
  if (progress.checklistVersion === 2) {
    progress.checks = { ...progress.checks }
    progress.retiredChecks = { ...progress.retiredChecks }
    for (const dayId of Object.keys(legacyChecklistIndexes)) {
      progress.retiredChecks[dayId] = [...(progress.checks[dayId] ?? [])]
      delete progress.checks[dayId]
    }
    progress.checklistVersion = 3
  }
  if (progress.checklistVersion === 3) {
    progress.checks = { ...progress.checks }
    progress.retiredChecks = { ...progress.retiredChecks }
    for (const dayId of Object.keys(legacyChecklistIndexes)) {
      const previousChecks = progress.checks[dayId]
      if (!previousChecks?.length) continue
      if (!Object.hasOwn(progress.retiredChecks, dayId)) progress.retiredChecks[dayId] = [...previousChecks]
      delete progress.checks[dayId]
    }
    progress.checklistVersion = checklistVersion
  }
  return progress
}

export function saveProgress(progress: ProgressState): void {
  localStorage.setItem(storageKey, JSON.stringify(progress))
}

export function clearProgress(): void {
  localStorage.removeItem(storageKey)
}

export function isDayFinished(day: TrainingDay, progress: ProgressState): boolean {
  return Boolean(progress.completed[day.id])
}
