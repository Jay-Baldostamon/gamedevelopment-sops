import { describe, expect, it } from 'vitest'
import { curriculumFiles, parseActiveL1 } from './curriculum'
import activePlan from '../../Tools-Only 80-Day Learning Plan.md?raw'

describe('L1 curriculum index', () => {
  it('indexes exactly the 20 active L1 days in week order', () => {
    expect(curriculumFiles).toHaveLength(20)
    expect(curriculumFiles.map((day) => day.dayNumber)).toEqual(Array.from({ length: 20 }, (_, index) => index + 1))
    for (const day of curriculumFiles) {
      expect(day.weekNumber).toBe(Math.ceil(day.dayNumber / 5))
      expect(day.sourcePath).toBe('Tools-Only 80-Day Learning Plan.md')
    }
  })

  it('keeps day ids stable for saved progress', () => {
    expect(curriculumFiles[0].id).toBe('l1-1-1-shared')
    expect(curriculumFiles[19].id).toBe('l1-4-20-shared')
    expect(new Set(curriculumFiles.map((day) => day.id)).size).toBe(20)
  })

  it('loads every lesson from the active plan instead of retired instructions', () => {
    const active = parseActiveL1(activePlan)
    for (const day of curriculumFiles) {
      const lesson = active.get(day.dayNumber)
      expect(lesson, day.id).toBeDefined()
      expect(day.title).toBe(lesson?.title)
      expect(day.content).toBe(lesson?.content)
      expect(day.checklist).toEqual(lesson?.checklist)
      expect(day.checklist.length).toBeGreaterThan(0)
      expect(day.content).not.toContain('### L1 entry expectations')
      expect(day.content).not.toContain('### Approved tools and boundaries')
      expect(day.content).not.toContain('Retired lesson')
      expect(day.content).not.toContain('- [ ]')
    }
  })

  it('uses the current plan headings as day titles', () => {
    expect(curriculumFiles[17].title).toBe('Review 2 and the QA pass')
    expect(curriculumFiles[17].content).toContain('QA checklist')
    expect(curriculumFiles[18].content).toContain('problem statement')
    expect(curriculumFiles[19].content).toContain('retrospective')
  })

  it('rejects malformed active L1 sections instead of using legacy lessons', () => {
    const invalidPlans = [
      activePlan.replace('## Level 1', '## Missing Level'),
      `${activePlan}\n${activePlan}`,
      activePlan.replace('#### Day 20', '#### Missing day 20'),
      activePlan.replace('#### Day 2 —', '#### Day 1 —'),
      activePlan.replace('#### Day 2 —', '#### Day 3 —'),
      activePlan.replace('### Entry expectations and safe practice', '### Missing entry'),
      activePlan.replace('## Approved Tools and Boundaries', '## Missing tools'),
      activePlan.replace(/(#### Day 3 —[\s\S]*?)(?=#### Day 4)/, (day) => day.replace(/^- \[ \].*$/gm, '')),
      activePlan.replace('### Week 2 —', '#### Week 2 —'),
    ]
    for (const invalid of invalidPlans) expect(() => parseActiveL1(invalid)).toThrow()
    expect([...parseActiveL1(activePlan).keys()]).toEqual(Array.from({ length: 20 }, (_, index) => index + 1))
  })

  it('keeps active L1 lessons task-only while preserving scope and recovery practice', () => {
    const active = parseActiveL1(activePlan)
    expect(active.get(1)?.content).toContain('five separate chats')
    expect(active.get(2)?.content).toContain('eight prompt cycles')
    expect(active.get(3)?.content).toContain('one-page pitch')
    expect(active.get(4)?.content).toContain('click-by-click steps')
    expect(active.get(5)?.content).toContain('50\u2013100 line section')
    expect(active.get(6)?.content).toContain('Force Text')
    expect(active.get(7)?.content).toContain('feature/day7-upgrade-N')
    expect(active.get(8)?.content).toContain('Must-Have')
    expect(active.get(9)?.content).toContain('ScriptableObject')
    expect(active.get(10)?.content).toContain('Restore both files from Git')
    expect(active.get(12)?.content).toContain('Game Shell Ticket')
    expect(active.get(20)?.content).toContain('post-launch list')
    expect(active.get(5)?.checklist.length).toBe(8)
    expect(active.get(10)?.checklist.length).toBe(9)
    for (const lesson of active.values()) {
      expect(lesson.content).not.toContain('### L1 entry expectations')
      expect(lesson.content).not.toContain('### AI collaboration habit')
      expect(lesson.content).not.toContain('### Approved tools and boundaries')
    }
  })
})