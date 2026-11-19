# Day 3: Decomposition

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 3](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-3--build-a-patrolling-enemy).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Decompose the first playable slice into Unity-sized tasks for a scene, player controller, collision, one hazard, one collectible, and a restart path.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 3 - Decomposition |
| Track | training |
| Level | day |
| Owner | Direct Supervisor |
| Last Updated | 2026-07-06 |
| Review Cycle | Every 30 days |
| Status | archived |

Practice decomposing the platformer idea into small, testable Unity tasks and prompts.

### Session: Preparation

#### Prerequisites

Before starting, ensure the Engineer has:

* Day 2 outputs reviewed (pain points + findings)
* Gemini access: <https://gemini.google.com/app>

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Idea Generation (Timeboxed)

1. Define the first playable room for the platformer.
2. **Hard limit:** maximum **4 hours** for idea generation.
   * Purpose: prevent scope creep and analysis paralysis.
3. Use Day 2 pain points/findings as constraints to shape your idea and approach.

### Phase 2: Prompt Decomposition and Build

1. Create an initial AI prompt for the playable slice using your Day 2 lessons.
2. Break the work into scene setup, player movement, collision, one hazard, one collectible, and restart.
3. Add a clear local test or acceptance criterion for each task. Refine the prompt until the tasks are small enough to implement independently.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Spending too long choosing an idea | Enforce the 4-hour idea-generation cutoff |
| Building without applying Day 2 lessons | Reuse pain points/findings to guide prompt design |
| Combining several systems into one vague task | Split the work and give each task a focused test |

#### Standards & Governance

* Timeboxing is mandatory for idea generation to prevent scope creep.
* Decomposition quality and testable implementation steps are the core Day 3 objective.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Idea generation | First playable Unity room, max 4 hours |
| Prompt basis | Day 2 pain points/findings |
| Decomposition | Small scene, gameplay, and validation tasks |

- Milestone: the first playable slice has a bounded, testable task breakdown.

## Implementation Examples (if needed)

- No additional implementation example is required for this day. Use the session checklist directly.

## End-of-Day Checklist

- [ ] The first playable room was defined within the 4-hour timebox
- [ ] An initial build prompt was prepared
- [ ] The playable slice was decomposed into testable Unity tasks
