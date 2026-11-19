# Day 19: Project Meeting

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 19](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-19--scoreboard-and-task-b-delivery).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Run a game-feature planning discussion that resolves player-facing behavior, controls, edge cases, acceptance criteria, and scope before implementation.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 19 - Project Meeting |
| Track | training |
| Level | day |
| Owner | Direct Supervisor |
| Last Updated | 2026-07-29 |
| Review Cycle | Every 30 days |
| Status | archived |

Translate a player-facing game feature discussion into a scoped Unity task. Use an authorized project discussion if one is available; otherwise hold a short simulated design discussion yourself and clearly treat it as a simulation.

### Session: Preparation

#### Prerequisites

Before starting, ensure the Engineer has:

* A real or simulated game-feature discussion
* A private notetaking tool
* Copilot access for Plan mode
* Day 14 task creation format familiarity

### Session: Core Execution

#### Directions (Core Activity)

### 1) Observe the Dynamic

During the real or simulated design discussion, pay attention to:

* The desired player experience and the current platformer behavior
* How a game designer and a Unity developer might describe the same feature differently
* Player controls, edge cases, and constraints

Distinguish a player-facing goal from an assumed technical solution.

### 2) Raw Intake (Live Call Behavior)

Do **not** try to write a perfect task while capturing the discussion.

Instead:

* Take brief private notes from the real or simulated discussion
* Capture:
  + player goals and gameplay pain points
  + requested behavior or feature
  + scene, control, performance, and scope constraints
* Mark unclear points with ?? for later clarification

### 3) AI Compensation (Post-Meeting, Reconverged)

After the discussion:

1. Open your lane toolchain in **Plan mode**:
   * Unity gameplay lane: VS Code + Copilot
   * game data lane: GitHub Copilot Desktop + approved game-data tooling-enabled workflow
2. Share only approved, non-sensitive notes with the tool.
3. Ask AI to transform the notes into a Unity game-development task using Day 14 style:
   * Summary
   * Acceptance Criteria
   * Unity scripts, scenes, prefabs, and assets involved (best estimate)
4. For game-data player-save contract tasks, plan local validation with an approved mock fixture:
   * identify the approved fixture and its version
   * identify player-save fields and compatibility checks
   * plan a local mock save/load or contract test
5. Review output and correct hallucinations or incorrect assumptions before finalizing tasks.

Use these references while executing:

* [GitHub Copilot Desktop Installation and Setup](../../../../../playbooks/ai-enablement/github-copilot-desktop/GitHub%20Copilot%20Desktop%20Installation%20and%20Setup.md)
* approved mock game-data fixture instructions

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Trying to create polished tickets live in-call | Take raw notes first; structure post-meeting |
| Capturing only implementation requests | Log player goal + pain point + desired behavior |
| Letting AI over-assume missing details | Mark unknowns clearly and retain open questions |
| Rewriting raw notes too cleanly | Preserve original phrasing and uncertainty markers |
| Conflating “what” vs “how” | Keep stakeholder problem statement separate from engineering implementation |

#### Standards & Governance

* Day 19 evaluates communication translation skill, not coding output.
* Raw note fidelity is important; don’t sanitize context away.
* AI-generated plans must remain grounded in the actual or explicitly simulated discussion.
* Unknowns must be preserved as clarifications, not hidden by assumptions.

### Auxiliary Research (Optional)

Research and summarize:

* What is a Sprint in Agile, and what is Sprint Planning for?
* How can game designers and Unity developers describe the same player-facing feature differently?
* How can AI be used as a translator from vague requirements to technical tasks?
* Why is it risky when non-technical stakeholders dictate implementation details instead of problem outcomes?

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Real or simulated discussion | Capture private notes about the game feature |
| Observation task | Compare design and engineering perspectives |
| Post-processing | Copilot Plan mode translation |
| Structured output | Summary + AC + Files Involved |
| Type | Open |

- Milestone: convert the real or simulated discussion into a scoped, testable Unity feature plan.

## Implementation Examples (if needed)

- No additional implementation example is required for this day. Use the session checklist directly.

## End-of-Day Checklist

- [ ] Raw meeting notes were captured
- [ ] Reflection on cross-functional communication dynamic is completed
- [ ] AI-generated structured plan was produced from raw notes
- [ ] Structured plan includes Summary, AC, and Files Involved
