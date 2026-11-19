# Day 10: Version Control

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 10](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-10--gameplay-versus-presentation).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Create a safe Unity Git workflow: commit Assets, Packages, ProjectSettings, and required .meta files; ignore Library, Temp, Obj, Logs, UserSettings, and generated builds; document large-file handling.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 10 - Version Control |
| Track | training |
| Level | day |
| Owner | Direct Supervisor |
| Last Updated | 2026-07-29 |
| Review Cycle | Every 30 days |
| Status | archived |

Polish your lane workflow into final Week 2 Capstone quality, then demonstrate recovery competency by:

### Session: Preparation

#### Prerequisites

Before starting, ensure the Engineer has:

* Same continuous micro-project from prior days (Day 3 → Day 10)
* Local environment working
* Git installed (CLI or GitHub Desktop workflow available)
* VS Code access

### Session: Core Execution

#### Directions (Core Activity)

1. Finalize your lane workflow into a working **Capstone** state:
   * UI updates from Day 9 integrated
   * Feature prioritization from Day 8 integrated
   * Unity project runs correctly in Play Mode
2. Initialize or confirm local Git repository for this project.
3. Ask AI to guide you through:
   * staging files
   * writing commits
   * reviewing commit history
4. Create your first series of local commits with clear descriptions.
5. Run intentional failure drill:
   * Unity gameplay lane: delete main entry file (a disposable Unity C# script or scene in a test branch)
   * game data lane: intentionally apply a known-bad query/change artifact in a safe non-production context
6. Ask AI how to restore your workflow to last known good state using Git/evidence rollback.
7. Revert successfully and confirm workflow still passes validation.

#### Step-by-Step Checklist

### Phase 1: Capstone Stabilization

1. Open project and verify final integrated state.
2. Confirm no blocking runtime errors before Git exercise begins.

### Phase 2: Commit Workflow

1. Initialize Git repo if not initialized:
   * git init (if needed)
2. Stage and commit in logical increments (not one giant commit).
3. Produce at least **5 clear, descriptive commits**.

### Phase 3: Recovery Drill (Intentional Failure + Revert)

1. Trigger intentional broken state in lane context.
2. Observe and document broken state.
3. Use AI guidance + Git commands (or GitHub Desktop equivalent) to restore last working state.
4. Verify restored workflow succeeds:
   * Unity gameplay lane: Play Mode check
   * game data lane: evidence/query validation check

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| One huge commit for all work | Break into logical commit units |
| Commit messages are vague | Use action + scope format (feat/fix/docs/...) |
| Skipping intentional deletion drill | Recovery drill is mandatory for pass |
| Restoring files without verifying the project | Reopen the scene and confirm Play Mode works after the revert |

#### Standards & Governance

* Practice saving and recovering work safely before using the workflow on a real project.
* Perform the intentional failure only on a disposable file or fixture in a safe test branch.

### Auxiliary Research (Optional)

* What is Version Control, and why is it mandatory for development teams?
* What is the difference between Git (engine) and GitHub (platform)?
* What makes a good vs bad commit message?
* What do git add, git commit, git push, and git pull do?
* What is a merge conflict and why does it happen?

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Capstone state | Final integrated UI + features working |
| Commit count | Minimum 5 descriptive commits |
| Recovery drill | Delete main file, then restore via Git |

- Milestone: verify the project works after the local recovery drill.

## Implementation Examples (if needed)

- No additional implementation example is required for this day. Use the session checklist directly.

## End-of-Day Checklist

- [ ] Capstone project is finalized and working
- [ ] Local Git workflow is demonstrated
- [ ] At least 5 descriptive commits are present
- [ ] Intentional main-file deletion drill is performed
- [ ] Project is successfully restored via Git
- [ ] Recovery is verified by reopening the scene and running Play Mode
