# Day 20: Retrospective

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 20](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-20--full-playthrough-and-retrospective).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Retrospect on the playable slice: compare planned and delivered gameplay, validation evidence, AI assistance, scope changes, and the next highest-value game improvement.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 20 - Retrospective |
| Track | training |
| Level | day |
| Owner | Direct Supervisor / Training Team |
| Last Updated | 2026-07-29 |
| Review Cycle | Every 30 days |
| Status | archived |

Reflect privately on the playable slice and choose the next useful improvement.

### Session: Preparation

#### Prerequisites

Before starting, ensure the Engineer has:

* Completed prior training flow (Days 1–19)

### Session: Core Execution

#### Directions (Core Activity)

1. Revisit the playable room and run the local checks available for movement, hazards, restart, and relevant mock player data.
2. Compare the planned behavior with what actually works, and identify any unrun checks or blockers.
3. Consider which AI suggestions helped and which needed correction against the project.
4. Choose one small, testable next improvement. Personal notes are optional; no retrospective document or meeting is required.

#### Tooling Reference by Lane

- **Unity gameplay lane**: continue using VS Code workflow conventions from prior execution days.
- **game data lane**: use an approved local/mock player-data fixture. If the fixture is unavailable, identify the blocker instead of connecting to an unrelated system.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Assuming the feature works without testing | Re-run the available local checks |
| Choosing an oversized next task | Pick one bounded improvement with a testable outcome |

#### Standards & Governance

* Be honest about checks that were unavailable or failed.

### Auxiliary Research (Optional)

Research and summarize:

* What is **Kaizen (Continuous Improvement)** and how does it apply to agile engineering teams?
* What is **Psychological Safety** and why does it matter for upward feedback?
* How does the **Dunning-Kruger effect** apply to learning a new stack, and where do you think you are on that curve after 4 weeks?

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Focus | Playable-slice behavior and local validation |
| Next step | One bounded Unity improvement |

- Milestone: understand the current game state and identify the next improvement.

## Implementation Examples (if needed)

- No additional implementation example is required for this day. Use the session checklist directly.

## End-of-Day Checklist

- [ ] The playable slice and available local checks were reviewed
- [ ] One bounded, testable next improvement was selected
