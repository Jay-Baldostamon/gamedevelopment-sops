import { describe, expect, it } from 'vitest'
import { curriculumFiles, levelDefinitions, parseActiveL1, parseActiveL2 } from './curriculum'
import activePlan from '../../Tools-Only 80-Day Learning Plan.md?raw'

describe('active curriculum index', () => {
  it('indexes the 40 active days across Levels 1 and 2 in week order', () => {
    expect(curriculumFiles).toHaveLength(40)
    expect(curriculumFiles.map((day) => day.dayNumber)).toEqual(Array.from({ length: 40 }, (_, index) => index + 1))
    for (const day of curriculumFiles) {
      expect(day.level).toBe(day.dayNumber <= 20 ? 1 : 2)
      expect(day.weekNumber).toBe(Math.ceil(day.dayNumber / 5))
      expect(day.sourcePath).toBe('Tools-Only 80-Day Learning Plan.md')
    }
  })

  it('keeps day ids stable for saved progress', () => {
    expect(curriculumFiles[0].id).toBe('l1-1-1-shared')
    expect(curriculumFiles[19].id).toBe('l1-4-20-shared')
    expect(curriculumFiles[20].id).toBe('l2-5-21-shared')
    expect(curriculumFiles[39].id).toBe('l2-8-40-shared')
    expect(new Set(curriculumFiles.map((day) => day.id)).size).toBe(40)
  })

  it('loads every L1 lesson from the active plan instead of retired instructions', () => {
    const active = parseActiveL1(activePlan)
    for (const day of curriculumFiles.filter((entry) => entry.level === 1)) {
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

  it('loads every L2 lesson with its copyable prompt and checklist', () => {
    const active = parseActiveL2(activePlan)
    for (const day of curriculumFiles.filter((entry) => entry.level === 2)) {
      const lesson = active.get(day.dayNumber)
      expect(lesson, day.id).toBeDefined()
      expect(day.title).toBe(lesson?.title)
      expect(day.content).toBe(lesson?.content)
      expect(day.checklist).toEqual(lesson?.checklist)
      expect(day.checklist.length).toBeGreaterThan(0)
      expect(day.content).toContain('##### Copyable prompt')
      expect(day.content).not.toContain('### Entry expectations and safety rules')
      expect(day.content).not.toContain('- [ ]')
    }
  })

  it('uses the current plan headings as day titles', () => {
    expect(curriculumFiles[17].title).toBe('Review 2 and the QA pass')
    expect(curriculumFiles[17].content).toContain('QA checklist')
    expect(curriculumFiles[18].content).toContain('problem statement')
    expect(curriculumFiles[19].content).toContain('retrospective')
    expect(curriculumFiles[20].title).toBe('Hermes setup')
    expect(curriculumFiles[20].content).toContain('Hermes')
    expect(curriculumFiles[39].title).toBe('Level 2 capstone')
    expect(curriculumFiles[39].content).toContain('final review packet')
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

describe('L2 curriculum documentation', () => {
  const level2 = activePlan.match(/^## Level 2\b[^\r\n]*\r?\n[\s\S]*?(?=^## |$(?![\s\S]))/m)?.[0] ?? ''

  it('parses exactly 20 ordered L2 lessons inside weeks 5 to 8', () => {
    const lessons = parseActiveL2(activePlan)
    expect([...lessons.keys()]).toEqual(Array.from({ length: 20 }, (_, index) => index + 21))
    for (const [dayNumber, lesson] of lessons) {
      expect(lesson.weekNumber).toBe(Math.ceil(dayNumber / 5))
      expect(lesson.content.length).toBeGreaterThan(0)
      expect(lesson.checklist.length).toBeGreaterThan(0)
    }
  })

  it('keeps every L2 lesson complete with a prompt, deliverables, and a checklist', () => {
    const lessons = parseActiveL2(activePlan)
    for (const [dayNumber, lesson] of lessons) {
      expect(lesson.content, `Day ${dayNumber}`).toContain('##### Copyable prompt')
      expect(lesson.content, `Day ${dayNumber}`).toContain('**Deliverables:**')
      expect(lesson.checklist.length, `Day ${dayNumber}`).toBeGreaterThan(0)
    }
  })

  it('rejects malformed active L2 sections instead of hiding them', () => {
    const invalidPlans = [
      activePlan.replace('## Level 2', '## Missing Level'),
      activePlan.replace('#### Day 40', '#### Missing day 40'),
      activePlan.replace('#### Day 22 —', '#### Day 21 —'),
      activePlan.replace('#### Day 22 —', '#### Day 23 —'),
      activePlan.replace('### Entry expectations and safety rules', '### Missing entry'),
      activePlan.replace('### Interaction modes', '### Missing modes'),
      activePlan.replace(/(#### Day 25 —[\s\S]*?)(?=#### Day 26)/, (day) => day.replace(/^- \[ \].*$/gm, '')),
      activePlan.replace('### Week 6 —', '#### Week 6 —'),
    ]
    for (const invalid of invalidPlans) expect(() => parseActiveL2(invalid)).toThrow()
    expect([...parseActiveL2(activePlan).keys()]).toEqual(Array.from({ length: 20 }, (_, index) => index + 21))
  })

  it('marks the four L2 gates as blocking', () => {
    expect(level2.match(/\*\*Gate:\*\* blocking/g) ?? []).toHaveLength(4)
    for (const dayNumber of [25, 30, 35, 40]) {
      const lesson = parseActiveL2(activePlan).get(dayNumber)
      expect(lesson, `Day ${dayNumber}`).toBeDefined()
      expect(lesson?.content).toContain('**Gate:** blocking')
    }
  })

  it('keeps L2 work on the game repository instead of inventing assigned projects', () => {
    expect(level2).toContain('the game repository is the assigned repository')
    expect(level2).toContain('post-launch issues are the authoritative tasks')
    expect(level2).not.toContain('assigned repository and pull request that the engineer is authorized to inspect')
  })

  it('publishes the level definitions the tracker renders', () => {
    expect(levelDefinitions).toEqual([
      { level: 1, name: 'Foundations', firstDay: 1, lastDay: 20 },
      { level: 2, name: 'Controlled delivery', firstDay: 21, lastDay: 40 },
    ])
  })
})