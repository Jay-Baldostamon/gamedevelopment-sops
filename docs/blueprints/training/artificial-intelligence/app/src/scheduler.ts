function parseIsoDate(value: string): Date {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, day))
}

function toIsoDate(value: Date): string {
  return `${value.getUTCFullYear()}-${String(value.getUTCMonth() + 1).padStart(2, '0')}-${String(value.getUTCDate()).padStart(2, '0')}`
}

function isWeekend(value: Date): boolean {
  const weekday = value.getUTCDay()
  return weekday === 0 || weekday === 6
}

export function localDateString(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export function normalizeStartDate(startDate: string): string {
  const normalized = parseIsoDate(startDate)
  while (isWeekend(normalized)) normalized.setUTCDate(normalized.getUTCDate() + 1)
  return toIsoDate(normalized)
}

export function getScheduledDate(startDate: string, index: number): string {
  const date = parseIsoDate(normalizeStartDate(startDate))
  let remaining = Math.max(0, index)
  while (remaining > 0) {
    date.setUTCDate(date.getUTCDate() + 1)
    if (!isWeekend(date)) remaining -= 1
  }
  return toIsoDate(date)
}

export function getActiveIndex(
  startDate: string,
  today: string,
  firstIncompleteIndex: number,
  totalDays: number,
): number | null {
  const normalizedStart = normalizeStartDate(startDate)
  const target = parseIsoDate(today)
  let scheduledIndex = 0
  const cursor = parseIsoDate(normalizedStart)

  if (target < cursor || firstIncompleteIndex >= totalDays) return null
  while (cursor < target) {
    cursor.setUTCDate(cursor.getUTCDate() + 1)
    if (!isWeekend(cursor)) scheduledIndex += 1
  }

  return Math.min(scheduledIndex, firstIncompleteIndex, totalDays - 1)
}

export function formatDate(value: string, options: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat('en', { ...options, timeZone: 'UTC' }).format(parseIsoDate(value))
}
