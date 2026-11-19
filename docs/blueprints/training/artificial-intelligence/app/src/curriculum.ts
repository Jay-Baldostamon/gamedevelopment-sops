import activePlan from '../../Tools-Only 80-Day Learning Plan.md?raw'

export interface TrainingDay {
  id: string
  weekNumber: number
  dayNumber: number
  title: string
  sourcePath: string
  content: string
  checklist: string[]
}

export interface LessonContent {
  title: string
  content: string
  checklist: string[]
}

export interface L1Lesson extends LessonContent {
  weekNumber: number
}

export const activePlanPath = 'Tools-Only 80-Day Learning Plan.md'

const checkboxPattern = /^\s*[-*]\s+\[([ xX])\]\s+(.+)\s*$/gm

function parseLesson(rawContent: string, fallbackTitle: string): LessonContent {
  const withoutFrontmatter = rawContent.replace(/^---\s*\r?\n[\s\S]*?\r?\n---\s*\r?\n/, '')
  const heading = withoutFrontmatter.match(/^#\s+Day\s+\d+\s*[:\-–—]\s*(.+)$/m)
  const checklist = [...withoutFrontmatter.matchAll(checkboxPattern)].map((item) => item[2].trim())
  const content = withoutFrontmatter
    .replace(/^#\s+Day\s+\d+.*(?:\r?\n)+/m, '')
    .replace(checkboxPattern, '')
    .trim()

  return { title: heading?.[1]?.trim() ?? fallbackTitle, content, checklist }
}

export function parseActiveL1(rawContent: string): Map<number, L1Lesson> {
  const sections = rawContent.match(/^## Level 1\b[^\r\n]*\r?\n[\s\S]*?(?=^## |$(?![\s\S]))/gm)
  if (sections?.length !== 1) throw new Error('Active curriculum must contain exactly one Level 1 section.')
  const section = sections[0]
  const boundaries = rawContent.match(/^## Approved Tools and Boundaries\r?\n([\s\S]*?)(?=^## )/m)?.[1]?.trim()
  const entry = section.match(/^### Entry expectations and safe practice\r?\n([\s\S]*?)(?=^### Week )/m)?.[1]?.trim()
  if (!boundaries || !entry) throw new Error('Active L1 prerequisites or tool boundaries are missing.')

  const matches = [...section.matchAll(/^### Week (\d+)[^\r\n]*\r?\n([\s\S]*?)(?=^### Week |$(?![\s\S]))/gm)]
    .flatMap(([, week, body]) => [...body.matchAll(/^#### Day (\d+) [—–-] ([^\r\n]+)\r?\n([\s\S]*?)(?=^#{2,4} |$(?![\s\S]))/gm)]
      .map((match) => ({ weekNumber: Number(week), match })))

  if (matches.length !== 20) throw new Error('Active L1 must contain exactly 20 daily lessons.')

  const lessons = new Map<number, L1Lesson>()
  for (const [index, { weekNumber, match }] of matches.entries()) {
    const dayNumber = Number(match[1])
    if (dayNumber !== index + 1) throw new Error('Active L1 days must be unique and ordered from 1 to 20.')
    if (Math.ceil(dayNumber / 5) !== weekNumber) throw new Error('Active L1 days must sit inside their numbered week.')
    const lesson = parseLesson(match[3], match[2].trim())
    if (!lesson.content || !lesson.checklist.length) throw new Error(`Active L1 Day ${dayNumber} is missing content or completion criteria.`)
    lessons.set(dayNumber, { ...lesson, weekNumber })
  }
  return lessons
}

const activeL1Lessons = parseActiveL1(activePlan)

// Saved progress is keyed by the lane-suffixed day ids used by earlier versions.
function dayId(weekNumber: number, dayNumber: number): string {
  return `l1-${weekNumber}-${dayNumber}-shared`
}

export const curriculumFiles: TrainingDay[] = [...activeL1Lessons.entries()]
  .sort(([left], [right]) => left - right)
  .map(([dayNumber, lesson]) => ({
    id: dayId(lesson.weekNumber, dayNumber),
    weekNumber: lesson.weekNumber,
    dayNumber,
    title: lesson.title,
    sourcePath: activePlanPath,
    content: lesson.content,
    checklist: lesson.checklist,
  }))