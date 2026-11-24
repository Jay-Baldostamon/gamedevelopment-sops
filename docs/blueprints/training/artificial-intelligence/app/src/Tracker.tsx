import { useEffect, useMemo, useState, type CSSProperties } from 'react'
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import {
  BookOpen,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Layers3,
  RotateCcw,
} from 'lucide-react'
import { curriculumFiles, type TrainingDay } from './curriculum'
import {
  formatDate,
  getActiveIndex,
  getScheduledDate,
  localDateString,
  normalizeStartDate,
} from './scheduler'
import {
  clearProgress,
  createInitialProgress,
  isDayFinished,
  loadProgress,
  saveProgress,
  type ProgressState,
} from './progress'
import './Tracker.css'

const levelName = 'Foundations'

function MarkdownContent({ source, className }: { source: string; className: string }) {
  const html = useMemo(() => DOMPurify.sanitize(marked.parse(source, { async: false })), [source])
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
}

function Tracker() {
  const [initialProgress] = useState(() => {
    try {
      return { progress: loadProgress(), error: null }
    } catch (error) {
      console.error('Unable to load training progress.', error)
      return {
        progress: createInitialProgress(),
        error: 'Saved progress could not be loaded. It has not been overwritten; reload or explicitly reset it before continuing.',
      }
    }
  })
  const [progress, setProgress] = useState<ProgressState>(initialProgress.progress)
  const [storageError, setStorageError] = useState<string | null>(initialProgress.error)
  const [view, setView] = useState<'today' | 'curriculum'>('today')
  const [selectedDayId, setSelectedDayId] = useState<string | null>(null)
  const [todayIndex, setTodayIndex] = useState<number | null>(null)

  useEffect(() => {
    if (storageError) return
    try {
      saveProgress(progress)
    } catch (error) {
      console.error('Unable to save training progress.', error)
      // Storage synchronization can fail independently of a user event.
      // oxlint-disable-next-line react/set-state-in-effect
      setStorageError('Progress could not be saved in this browser. Reload or explicitly reset it before continuing.')
    }
  }, [progress, storageError])

  const days = curriculumFiles
  const firstIncompleteIndex = days.findIndex((day) => !isDayFinished(day, progress))
  const trackComplete = firstIncompleteIndex === -1
  const activeIndex = getActiveIndex(
    progress.startDate,
    localDateString(),
    firstIncompleteIndex === -1 ? days.length : firstIncompleteIndex,
    days.length,
  )
  const activeDay = activeIndex === null ? null : days[activeIndex]
  const browsingToday = todayIndex !== null
  const todayPosition = Math.min(Math.max(todayIndex ?? activeIndex ?? 0, 0), days.length - 1)
  const todayDay = days[todayPosition]
  const showTodayDay = todayDay != null && (!trackComplete || browsingToday)
  const selectedDay = selectedDayId ? days.find((day) => day.id === selectedDayId) : undefined
  const displayedDay = view === 'today' ? (showTodayDay ? todayDay : null) : (selectedDay ?? activeDay)
  const displayedIndex = displayedDay ? days.indexOf(displayedDay) : -1
  const isActionable = !storageError && displayedDay != null
  const checklist = displayedDay?.checklist ?? []
  const taskCount = Math.max(checklist.length, 1)
  const checkedTasks = displayedDay
    ? (progress.checks[displayedDay.id] ?? Array(taskCount).fill(false))
    : []
  const checkedCount = displayedDay ? checkedTasks.slice(0, taskCount).filter(Boolean).length : 0
  const tasksComplete = displayedDay != null && checkedTasks.length >= taskCount && checkedTasks.slice(0, taskCount).every(Boolean)
  const progressCount = days.filter((day) => isDayFinished(day, progress)).length
  const progressPercent = Math.round((progressCount / days.length) * 100)
  const dueIndex = Math.max(
    getActiveIndex(progress.startDate, localDateString(), days.length, days.length) ?? 0,
    0,
  )
  const upcoming = displayedIndex < 0 ? [] : days.slice(displayedIndex + 1, displayedIndex + 6)
  const sourcePath = displayedDay?.sourcePath ?? ''
  const scheduleState = activeIndex === null
    ? null
    : todayPosition < activeIndex
      ? 'earlier'
      : todayPosition > activeIndex
        ? 'ahead'
        : todayPosition < dueIndex
          ? 'carryover'
          : null

  function updateProgress(change: (current: ProgressState) => ProgressState) {
    if (storageError) return
    setProgress(change)
  }

  function toggleTask(index: number) {
    if (!displayedDay || !isActionable) return
    updateProgress((current) => {
      const storedChecks = current.checks[displayedDay.id] ?? []
      const nextChecks = Array.from({ length: taskCount }, (_, taskIndex) => storedChecks[taskIndex] === true)
      nextChecks[index] = !nextChecks[index]
      const completed = nextChecks.every(Boolean)
      return {
        ...current,
        checks: { ...current.checks, [displayedDay.id]: nextChecks },
        completed: { ...current.completed, [displayedDay.id]: completed },
      }
    })
  }

  function resetProgress() {
    if (!window.confirm('Clear this browser’s training progress and settings?')) return
    try {
      clearProgress()
      setProgress(createInitialProgress())
      setStorageError(null)
      setSelectedDayId(null)
    } catch (error) {
      console.error('Unable to clear training progress.', error)
      setStorageError('Progress could not be cleared in this browser.')
    }
  }

  function openCurriculumDay(day: TrainingDay) {
    setSelectedDayId(day.id)
    setView('curriculum')
  }

  function shiftTodayDay(offset: number) {
    const from = todayIndex ?? activeIndex ?? 0
    setTodayIndex(Math.min(Math.max(from + offset, 0), days.length - 1))
  }

  function renderLessonContent(className: string) {
    if (!displayedDay) return null
    return (
      <>
        {Object.hasOwn(progress.retiredChecks, displayedDay.id) && (
          <p className="read-only-hint">
            Earlier L1 checks are archived. Saved completion is historical, not verification of these revised exercises.
            Revised checks were initially unchecked; dates and private notes are preserved.
          </p>
        )}
        <MarkdownContent className={className} source={displayedDay.content} />
      </>
    )
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#today" onClick={() => { setView('today'); setSelectedDayId(null); setTodayIndex(null) }}>
          <span className="brand-mark"><Layers3 size={20} strokeWidth={2.2} /></span>
          <span className="brand-copy">
            <strong>Fieldwork</strong>
            <small>UNITY GAME TRAINING</small>
          </span>
        </a>

        <div className="sidebar-label">WORKSPACE</div>
        <nav className="primary-nav" aria-label="Main navigation">
          <button className={view === 'today' ? 'nav-item active' : 'nav-item'} onClick={() => { setView('today'); setSelectedDayId(null); setTodayIndex(null) }}>
            <CalendarDays size={17} />
            <span>Today</span>
            {activeDay && <span className="nav-count">{activeDay.dayNumber}</span>}
          </button>
          <button className={view === 'curriculum' ? 'nav-item active' : 'nav-item'} onClick={() => { setView('curriculum'); setSelectedDayId(null) }}>
            <BookOpen size={17} />
            <span>Curriculum</span>
          </button>
        </nav>

        <div className="sidebar-label level-label">YOUR TRACK</div>
        <div className="level-list">
          <button
            className={`level-item ${view === 'curriculum' ? 'level-selected' : ''}`}
            onClick={() => { setSelectedDayId(null); setView('curriculum') }}
          >
            <span className="level-dot" />
            <span className="level-name"><strong>L1</strong><small>{levelName}</small></span>
            <span className="level-progress">{progressCount}/{days.length}</span>
          </button>
        </div>

        <div className="sidebar-bottom">
          <label className="start-date-label" htmlFor="start-date">START DATE</label>
          <input
            id="start-date"
            className="date-input"
            type="date"
            value={progress.startDate}
            disabled={Boolean(storageError)}
            onChange={(event) => {
              if (!event.target.value) return
              updateProgress((current) => ({ ...current, startDate: normalizeStartDate(event.target.value) }))
            }}
          />
          <p className="date-hint">Weekdays only. Weekend starts move to Monday.</p>
          <button className="reset-button" onClick={resetProgress} title="Clear local progress">
            <RotateCcw size={14} /> Reset progress
          </button>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumbs"><span>Training</span><ChevronRight size={14} /><strong>{view === 'today' ? 'Daily plan' : 'Curriculum'}</strong></div>
          <div className="topbar-tools">
            <span className="level-tag">L1 · {levelName}</span>
          </div>
        </header>

        <div className="content-wrap">
          {storageError && <div className="storage-alert" role="alert">{storageError}</div>}
          {view === 'today' ? (
            <>
              <section className="page-heading">
                <div>
                  <div className="eyebrow"><span className="eyebrow-dot" /> WEEKDAY PLAN</div>
                  <h1>{formatDate(localDateString(), { weekday: 'long', month: 'long', day: 'numeric' })}</h1>
                  <p className="subheading">One focused training day at a time.</p>
                </div>
                <div className="overall-progress" aria-label={`${progressPercent}% curriculum complete`}>
                  <div className="progress-ring" style={{ '--progress': `${progressPercent}%` } as CSSProperties}>
                    <span>{progressPercent}<small>%</small></span>
                  </div>
                  <div><strong>{progressCount} of {days.length}</strong><small>days completed</small></div>
                </div>
              </section>

              {showTodayDay ? (
                <div className="today-grid">
                  <section className="assignment-column">
                    <div className="day-pager">
                      <button
                        className="pager-button"
                        onClick={() => shiftTodayDay(-1)}
                        disabled={todayPosition === 0}
                        title="Go to the previous day"
                      >
                        <ChevronLeft size={15} /> Previous
                      </button>
                      <span className="pager-position">Day {todayDay.dayNumber} of {days.length}</span>
                      <button
                        className="pager-button"
                        onClick={() => shiftTodayDay(1)}
                        disabled={todayPosition === days.length - 1}
                        title="Skip to the next day"
                      >
                        Next <ChevronRight size={15} />
                      </button>
                      {browsingToday && activeIndex !== null && todayPosition !== activeIndex && (
                        <button className="pager-button pager-return" onClick={() => setTodayIndex(null)}>
                          Back to today
                        </button>
                      )}
                    </div>
                    <div className="assignment-meta">
                      <span className="level-tag">L1 · {levelName}</span>
                      <span className="meta-divider">/</span>
                      <span>Week {todayDay.weekNumber}</span>
                      <span className="meta-divider">/</span>
                      <span>Day {todayDay.dayNumber}</span>
                      {scheduleState === 'carryover' && <span className="overdue-tag">CARRYOVER</span>}
                      {scheduleState === 'earlier' && <span className="overdue-tag">EARLIER DAY</span>}
                      {scheduleState === 'ahead' && <span className="ahead-tag">AHEAD OF SCHEDULE</span>}
                    </div>
                    <h2 className="assignment-title">{todayDay.title}</h2>
                    <div className="assignment-date"><Clock3 size={14} /> Scheduled {formatDate(getScheduledDate(progress.startDate, todayPosition), { month: 'short', day: 'numeric' })}</div>

                    <div className="lesson-panel">
                      <div className="panel-heading">
                        <div><span className="panel-kicker">TODAY’S BRIEF</span><h3>Lesson notes</h3></div>
                      </div>
                      <div className="source-path">{sourcePath}</div>
                      {renderLessonContent('markdown-body')}
                    </div>

                    {upcoming.length > 0 && (
                      <section className="upcoming-section">
                        <div className="section-title-row"><div><span className="panel-kicker">COMING UP</span><h3>Next on the calendar</h3></div><span className="small-count">{upcoming.length} days</span></div>
                        <div className="upcoming-list">
                          {upcoming.map((day) => {
                            const dayIndex = days.indexOf(day)
                            return (
                              <button className="upcoming-row" key={day.id} onClick={() => openCurriculumDay(day)}>
                                <span className="upcoming-date">{formatDate(getScheduledDate(progress.startDate, dayIndex), { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                                <strong>{day.title}</strong>
                                <ChevronRight size={16} />
                              </button>
                            )
                          })}
                        </div>
                      </section>
                    )}
                  </section>

                  <aside className="task-column">
                    <section className="task-panel">
                      <div className="task-panel-heading">
                        <div className="task-heading-icon"><Check size={18} /></div>
                        <div><span className="panel-kicker">DAILY CHECKLIST</span><h3>Finish the work</h3></div>
                      </div>
                      <div className="task-progress-line"><span>{checkedCount} / {taskCount} complete</span><span>{Math.round((checkedCount / taskCount) * 100)}%</span></div>
                      <div className="task-progress-track"><span style={{ width: `${(checkedCount / taskCount) * 100}%` }} /></div>
                      <div className="checklist">
                        {(checklist.length ? checklist : ['Mark this training day complete']).map((task, index) => (
                          <label className={`checklist-item ${checkedTasks[index] ? 'checked' : ''} ${!isActionable ? 'read-only' : ''}`} key={`${index}-${task}`}>
                            <input type="checkbox" checked={Boolean(checkedTasks[index])} disabled={!isActionable} onChange={() => toggleTask(index)} />
                            <span className="custom-check"><Check size={13} /></span>
                            <span>{task}</span>
                          </label>
                        ))}
                      </div>

                      {tasksComplete && (
                        <div className="completion-note"><span className="completion-check"><Check size={14} /></span><span><strong>Day complete</strong><small>Progress is saved in this browser.</small></span></div>
                      )}
                      {!isActionable && <p className="read-only-hint">{storageError ? 'Resolve the storage error before changing progress.' : 'This day cannot be edited in this browser.'}</p>}
                    </section>

                    <section className="evidence-panel">
                      <label className="panel-kicker" htmlFor="day-note">PRIVATE NOTES</label>
                      <textarea
                        id="day-note"
                        value={displayedDay ? progress.notes[displayedDay.id] ?? '' : ''}
                        disabled={!isActionable}
                        placeholder="Add an optional personal note…"
                        onChange={(event) => {
                          if (!displayedDay) return
                          updateProgress((current) => ({ ...current, notes: { ...current.notes, [displayedDay.id]: event.target.value } }))
                        }}
                      />
                      <small>Private to this browser. Do not store secrets here.</small>
                    </section>
                  </aside>
                </div>
              ) : trackComplete ? (
                <section className="all-done-panel">
                  <div className="all-done-mark"><Check size={26} /></div>
                  <span className="panel-kicker">TRACK COMPLETE</span>
                  <h2>You’ve finished the L1 curriculum.</h2>
                  <p>All {days.length} weekday assignments are complete.</p>
                  <button className="secondary-action" onClick={() => setView('curriculum')}>Review curriculum <ChevronRight size={16} /></button>
                </section>
              ) : (
                <section className="all-done-panel">
                  <div className="all-done-mark"><CalendarDays size={24} /></div>
                  <span className="panel-kicker">SCHEDULED TO BEGIN</span>
                  <h2>Your first weekday is {formatDate(progress.startDate, { weekday: 'long', month: 'long', day: 'numeric' })}.</h2>
                  <p>Assignments begin on the selected date and continue Monday through Friday.</p>
                </section>
              )}
            </>
          ) : (
            <>
              <section className="page-heading curriculum-heading">
                <div>
                  <div className="eyebrow"><span className="eyebrow-dot blue-dot" /> CURRICULUM LIBRARY</div>
                  <h1>L1 <span>{levelName}</span></h1>
                  <p className="subheading">Browse the {days.length} L1 training days. Only the scheduled day can be checked off.</p>
                </div>
                <div className="level-completion"><strong>{progressCount}<small> / {days.length}</small></strong><span>days complete</span></div>
              </section>

              <div className="curriculum-layout">
                <div className="curriculum-list">
                  <div className="curriculum-list-head"><strong>L1 · {levelName}</strong><span>{days.length} weekdays</span></div>
                  {days.map((day) => {
                    const dayIndex = days.indexOf(day)
                    const isFinished = isDayFinished(day, progress)
                    const isCurrent = activeDay?.id === day.id
                    return (
                      <button className={`curriculum-row ${selectedDay?.id === day.id ? 'chosen' : ''} ${isCurrent ? 'is-current' : ''}`} key={day.id} onClick={() => setSelectedDayId(day.id)}>
                        <span className={`curriculum-status ${isFinished ? 'status-done' : isCurrent ? 'status-current' : ''}`}>{isFinished ? <Check size={13} /> : day.dayNumber}</span>
                        <span className="curriculum-day-copy"><small>WEEK {day.weekNumber} · DAY {day.dayNumber}</small><strong>{day.title}</strong></span>
                        <span className="curriculum-row-date">{formatDate(getScheduledDate(progress.startDate, dayIndex), { month: 'short', day: 'numeric' })}</span>
                        <ChevronRight size={15} />
                      </button>
                    )
                  })}
                </div>
                {displayedDay && selectedDayId && (
                  <aside className="curriculum-preview">
                    <div className="preview-topline"><span className="level-tag">L1 · WEEK {displayedDay.weekNumber}</span></div>
                    <h2>{displayedDay.title}</h2>
                    <p className="preview-day">Day {displayedDay.dayNumber} · Scheduled {formatDate(getScheduledDate(progress.startDate, displayedIndex), { month: 'long', day: 'numeric' })}</p>
                    <div className="preview-source">{sourcePath}</div>
                    {renderLessonContent('markdown-body preview-markdown')}
                    {displayedDay.id === activeDay?.id && <span className="active-day-note"><Check size={14} /> This is your current assignment</span>}
                  </aside>
                )}
              </div>
            </>
          )}

          <footer className="app-footer"><span>FIELDWORK / TRAINING TRACKER</span><span>Progress stays on this device</span></footer>
        </div>
      </main>
    </div>
  )
}

export default Tracker