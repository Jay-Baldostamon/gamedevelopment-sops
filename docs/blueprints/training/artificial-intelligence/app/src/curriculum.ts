import activePlan from '../../Tools-Only 80-Day Learning Plan.md?raw'

export type TrainingLevel = 1 | 2

export interface TrainingDay {
  id: string
  level: TrainingLevel
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

export interface LevelLesson extends LessonContent {
  weekNumber: number
}

export type L1Lesson = LevelLesson

export interface LevelDefinition {
  level: TrainingLevel
  name: string
  firstDay: number
  lastDay: number
}

export const activePlanPath = 'Tools-Only 80-Day Learning Plan.md'

export const levelDefinitions: readonly LevelDefinition[] = [
  { level: 1, name: 'Foundations', firstDay: 1, lastDay: 20 },
  { level: 2, name: 'Controlled delivery', firstDay: 21, lastDay: 40 },
]

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

function definitionFor(level: TrainingLevel): LevelDefinition {
  const definition = levelDefinitions.find((entry) => entry.level === level)
  if (!definition) throw new Error(`Unknown training level ${level}.`)
  return definition
}

function extractLevelSection(rawContent: string, level: TrainingLevel): string {
  const sections = rawContent.match(
    new RegExp(`^## Level ${level}\\b[^\\r\\n]*\\r?\\n[\\s\\S]*?(?=^## |$(?![\\s\\S]))`, 'gm'),
  )
  if (sections?.length !== 1) throw new Error(`Active curriculum must contain exactly one Level ${level} section.`)
  return sections[0]
}

function parseLevelDays(rawContent: string, level: TrainingLevel): Map<number, LevelLesson> {
  const section = extractLevelSection(rawContent, level)
  const { firstDay, lastDay } = definitionFor(level)

  const matches = [...section.matchAll(/^### Week (\d+)[^\r\n]*\r?\n([\s\S]*?)(?=^### Week |$(?![\s\S]))/gm)]
    .flatMap(([, week, body]) => [...body.matchAll(/^#### Day (\d+) [—–-] ([^\r\n]+)\r?\n([\s\S]*?)(?=^#{2,4} |$(?![\s\S]))/gm)]
      .map((match) => ({ weekNumber: Number(week), match })))

  if (matches.length !== lastDay - firstDay + 1) {
    throw new Error(`Active L${level} must contain exactly ${lastDay - firstDay + 1} daily lessons.`)
  }

  const lessons = new Map<number, LevelLesson>()
  for (const [index, { weekNumber, match }] of matches.entries()) {
    const dayNumber = firstDay + index
    if (Number(match[1]) !== dayNumber) {
      throw new Error(`Active L${level} days must be unique and ordered from ${firstDay} to ${lastDay}.`)
    }
    if (Math.ceil(dayNumber / 5) !== weekNumber) throw new Error(`Active L${level} days must sit inside their numbered week.`)
    const lesson = parseLesson(match[3], match[2].trim())
    if (!lesson.content || !lesson.checklist.length) {
      throw new Error(`Active L${level} Day ${dayNumber} is missing content or completion criteria.`)
    }
    lessons.set(dayNumber, { ...lesson, weekNumber })
  }
  return lessons
}

export function parseActiveL1(rawContent: string): Map<number, L1Lesson> {
  const section = extractLevelSection(rawContent, 1)
  const boundaries = rawContent.match(/^## Approved Tools and Boundaries\r?\n([\s\S]*?)(?=^## )/m)?.[1]?.trim()
  const entry = section.match(/^### Entry expectations and safe practice\r?\n([\s\S]*?)(?=^### Week )/m)?.[1]?.trim()
  if (!boundaries || !entry) throw new Error('Active L1 prerequisites or tool boundaries are missing.')
  return parseLevelDays(rawContent, 1)
}

export function parseActiveL2(rawContent: string): Map<number, LevelLesson> {
  const section = extractLevelSection(rawContent, 2)
  if (!/^### Entry expectations and safety rules\s*$/m.test(section)) {
    throw new Error('Active L2 entry expectations and safety rules are missing.')
  }
  if (!/^### Interaction modes\s*$/m.test(section)) throw new Error('Active L2 interaction modes are missing.')
  return parseLevelDays(rawContent, 2)
}

const activeL1Lessons = parseActiveL1(activePlan)
const activeL2Lessons = parseActiveL2(activePlan)

// Saved progress is keyed by the lane-suffixed day ids used by earlier versions.
function dayId(level: TrainingLevel, weekNumber: number, dayNumber: number): string {
  return `l${level}-${weekNumber}-${dayNumber}-shared`
}

function toTrainingDays(level: TrainingLevel, lessons: Map<number, LevelLesson>): TrainingDay[] {
  return [...lessons.entries()]
    .sort(([left], [right]) => left - right)
    .map(([dayNumber, lesson]) => ({
      id: dayId(level, lesson.weekNumber, dayNumber),
      level,
      weekNumber: lesson.weekNumber,
      dayNumber,
      title: lesson.title,
      sourcePath: activePlanPath,
      content: lesson.content,
      checklist: lesson.checklist,
    }))
}

export const curriculumFiles: TrainingDay[] = [
  ...toTrainingDays(1, activeL1Lessons),
  ...toTrainingDays(2, activeL2Lessons),
]

export function levelNameFor(level: TrainingLevel): string {
  return definitionFor(level).name
}