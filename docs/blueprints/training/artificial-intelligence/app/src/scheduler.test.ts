import { describe, expect, it } from 'vitest'
import { getActiveIndex, getScheduledDate, normalizeStartDate } from './scheduler'

describe('weekday scheduling', () => {
  it('moves a weekend start to Monday and never schedules a weekend', () => {
    expect(normalizeStartDate('2026-11-07')).toBe('2026-11-09')
    expect(getScheduledDate('2026-11-08', 0)).toBe('2026-11-09')
    expect(getScheduledDate('2026-11-06', 1)).toBe('2026-11-09')
  })

  it('holds the active assignment at the first incomplete day', () => {
    expect(getActiveIndex('2026-11-02', '2026-11-06', 2, 80)).toBe(2)
    expect(getActiveIndex('2026-11-02', '2026-11-03', 80, 80)).toBeNull()
    expect(getActiveIndex('2026-11-02', '2026-11-02', 3, 80)).toBe(0)
    expect(getActiveIndex('2026-11-09', '2026-11-06', 0, 80)).toBeNull()
  })
})
