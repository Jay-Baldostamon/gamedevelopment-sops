# Day 7: Micro Project Upgrades

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 7](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-7--add-a-goal-and-a-win-state).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Upgrade the player controller with one bounded movement improvement (for example jump buffering or coyote time), with an Inspector-configurable value and a repeatable test.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 7 - Micro Project Upgrades |
| Track | training |
| Level | day |
| Owner | Direct Supervisor |
| Last Updated | 2026-07-29 |
| Review Cycle | Every 30 days |
| Status | archived |

Day 7 is focused on **upgrading your existing lane workflow project/context** using orchestration workflow in GitHub Copilot.

### Session: Preparation

#### Prerequisites

Before starting, ensure the Engineer has:

* Day 6 repository setup completed (same Day 3/Day 4/Day 6 project)
* Access to <https://github.com/copilot>
* Repository visible in Copilot repository selector (All Repositories)
* Local environment ready for testing/debugging fixes from changes

### Session: Core Execution

#### Tooling Split: [Unity gameplay] vs [game data]

##### [Unity gameplay]

- Follow the workflow below as written.

##### [game data]

- Apply the same structure using mock game-data contract or verification improvements instead of UI feature upgrades.
- Use GitHub Copilot Desktop + approved game-data tooling-connected workflow for planning and execution.
- Preserve branch/evidence traceability per upgrade.

#### Step-by-Step Checklist

### Phase 1: Open Copilot and Scope to Repo

1. Open: <https://github.com/copilot>
2. In the repository selector (All Repositories), choose your micro project repository.
3. Confirm your prompts and actions are scoped to that single repository.

### Phase 2: Orchestrate 6 Upgrades (Branch-Isolated)

1. Plan and execute **6 upgrades** (new features or improvements).
2. For each upgrade, create and use a **separate branch**.
   * Recommended naming pattern:
     + feature/day7-upgrade-1-<short-name>
     + feature/day7-upgrade-2-<short-name>
     + feature/day7-upgrade-3-<short-name>
3. Keep each upgrade scoped and testable. Avoid massive multi-feature prompts in one step.
4. After each branch-based upgrade:
   * Pull/update code locally if needed
   * Unity gameplay lane: run app and test
   * game data lane: run validation query/evidence checks
   * Fix issues before moving to next upgrade

### Phase 3: Final Stability Pass

1. Perform final validation pass after all 6 upgrades:

* Check VS Code terminal output
* Check the Unity Console
* Run key feature paths in Play Mode and available focused tests

2. Resolve regressions found by these checks; do not claim unrun checks passed.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Prompting without selecting the correct repo | Verify repo selection in All Repositories first |
| Implementing all upgrades in one branch | Create one branch per upgrade/new feature |
| Bundling all upgrades in one vague request | Split into 6 scoped, testable upgrade cycles |
| Skipping validation after each upgrade | Test incrementally to avoid stacked debugging debt |
| Declaring success with relevant Console errors still present | Investigate failures and rerun the affected checks |

#### Standards & Governance

* Project continuity remains mandatory (same micro project track).
* Branch isolation is mandatory for each Day 7 upgrade.
* Orchestration quality is measured by scoped execution + clean validation.
* Check the resulting behavior locally and surface any remaining blocker.

#### Auxiliary Research (Optional)

1. Research and summarize in notes:

* In VS Code Copilot, what is **Agent mode**?
* In VS Code Copilot, what is **Plan mode**?
* In VS Code Copilot, what is **Ask mode**?
* What is a **repository branch**?

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Copilot entry point | <https://github.com/copilot> |
| Repo selection | Must select your micro project from All Repositories |
| Upgrade count | 6 total (new features and/or upgrades) |
| Branch rule | 1 separate branch per upgrade/new feature |
| Validation | Test each change and check the integrated Unity project |
| Research | Agent mode, Plan mode, Ask mode, and repository branch concept |

- Milestone: the scoped upgrades have been exercised locally.

## Implementation Examples (if needed)

- No additional implementation example is required for this day. Use the session checklist directly.

## End-of-Day Checklist

- [ ] Correct repository was selected in GitHub Copilot
- [ ] 6 feature upgrades/new features were orchestrated and implemented
- [ ] Each upgrade was implemented in a separate branch
- [ ] Final validation was completed in Unity and available focused tests
