import { describe, expect, it } from 'vitest'
import { curriculumFiles, parseActiveL1 } from './curriculum'
import activePlan from '../../Tools-Only 80-Day Learning Plan.md?raw'

const l1References = import.meta.glob<string>('../../L1/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const planAnchors = [...activePlan.matchAll(/^#{2,4} (.+)$/gm)].map((match) =>
  match[1].toLowerCase().replace(/[^\p{L}\p{N}_\- ]/gu, '').replaceAll(' ', '-'),
)

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
      expect(day.checklist).toHaveLength(1)
      expect(day.content).not.toContain('### L1 entry expectations')
      expect(day.content).not.toContain('### Approved tools and boundaries')
      expect(day.content).not.toContain('Retired lesson')
      expect(day.content).not.toContain('- [ ]')
    }
  })

  it('uses the current plan headings as day titles', () => {
    expect(curriculumFiles[17].title).toBe('Challenge the level and ending design')
    expect(curriculumFiles[18].content).toContain('Implement Task B')
    expect(curriculumFiles[19].content).toContain('before claiming the two-task outcome')
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
      activePlan.replace(/^- \[ \] .+\r?\n/m, ''),
      activePlan.replace('### Week 2 —', '#### Week 2 —'),
    ]
    for (const invalid of invalidPlans) expect(() => parseActiveL1(invalid)).toThrow()
    expect([...parseActiveL1(activePlan).keys()]).toEqual(Array.from({ length: 20 }, (_, index) => index + 1))
  })

  it('keeps active L1 lessons task-only while preserving scope and recovery practice', () => {
    const active = parseActiveL1(activePlan)
    expect(active.get(1)?.content).toContain('one-page game-design brief')
    expect(active.get(6)?.content).toContain('camera script')
    expect(active.get(7)?.content).toContain('Level complete')
    expect(active.get(8)?.content).toContain('variable jump height')
    expect(active.get(9)?.content).toContain('out-of-scope')
    expect(active.get(10)?.content).toContain('verified no-code solution is valid')
    expect(active.get(11)?.content).toContain('spike trigger script')
    expect(active.get(20)?.content).toContain('Reuse one effective prompt')
    for (const lesson of active.values()) {
      expect(lesson.content).not.toContain('### L1 entry expectations')
      expect(lesson.content).not.toContain('### AI collaboration habit')
      expect(lesson.content).not.toContain('### Approved tools and boundaries')
    }
  })

  it('marks all legacy L1 material as retired with valid active-plan anchors', () => {
    expect(Object.keys(l1References)).toHaveLength(27)
    for (const [path, content] of Object.entries(l1References)) {
      expect(content, path).toMatch(/^> \*\*Retired (lesson|overview|reference):\*\*/m)
      expect(content, path).toMatch(/^\| Status\s*\| archived\s*\|$/m)
      expect(content, path).not.toMatch(/^\| Status\s*\| active\s*\|$/m)
      const href = content.match(/\[active L1[^]*?\]\(([^)]+)\)/)?.[1]
      if (!href) throw new Error(`Missing active L1 link in ${path}`)
      expect(planAnchors, path).toContain(href.split('#')[1])
    }
  })
})