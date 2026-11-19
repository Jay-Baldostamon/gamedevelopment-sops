# Day 12: First Issue Ticket

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 12](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-12--coins-a-counter-and-the-task-brief).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Write the first implementation issue for a small player-control improvement, with reproduction steps, acceptance criteria, affected Unity assets, and an in-scope test plan.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 12 - First Issue Ticket |
| Track | training |
| Level | day |
| Owner | Direct Supervisor |
| Last Updated | 2026-07-29 |
| Review Cycle | Every 30 days |
| Status | archived |

Complete your first Week 3 issue in the continuing Unity platformer using the appropriate gameplay or game-data workflow, with clear evidence that acceptance criteria are met.

### Session: Preparation

#### Prerequisites

Before starting, ensure the Engineer has:

* Access to repository + project board
* Assigned issue available in Backlog
* Local environment running
* Git + GitHub auth configured

### Session: Core Execution

#### Directions (Core Activity)

#### Tooling Split: [Unity gameplay] vs [game data]

##### [Unity gameplay] (issue-to-PR path)

- Follow the full branch + PR workflow below as written.

##### [game data] (local contract-validation path)

- Define and verify a player-save/progression contract using only an approved local/mock game-data fixture.
- PR creation is required only when repository code changes are part of the issue; otherwise, validate the contract locally.
- Do not query CRM or unrelated production systems. If no approved fixture exists, identify the blocker locally and keep the issue design-only.

### 1) Claim & Branch

1. Open your repository’s GitHub Project board.
2. Locate your assigned issue in **Backlog** and claim it.
3. Assign yourself to the issue in GitHub (**Assignees** panel).
4. Review Pull Request SOP in the repository:
   `docs/playbooks/delivery-and-quality/GitHub Pull Request.md`
5. If repository code changes are in scope, create a local branch using the required naming convention from the SOP.

### 2) Document Baseline (“Before”)

1. Observe the current gameplay behavior or approved mock save/progression contract before coding.

### 3) AI Planning Phase (Before Coding)

1. Open your Unity gameplay or approved game-data AI workspace.
2. Paste exact issue details from GitHub markdown:
   * Summary
   * Example
   * Acceptance Criteria
   * Files Involved
3. Ask AI to generate a **step-by-step implementation plan first** (no coding yet).

### 4) Execute & Debug

1. Implement changes following AI plan.
2. If errors occur, use AI to debug systematically.
3. Keep scope aligned to acceptance criteria; avoid unrelated refactors.

### 5) Document Fix (“After”)

1. Recheck the gameplay behavior or mock-data contract after the change.

### 6) Pull Request & AI Review

When repository code changes require a PR:

1. Push branch to remote.
2. Open Pull Request.
3. Assign yourself to the PR in GitHub (**Assignees** panel).
4. Link PR to the issue in PR description using one of:

* Closes #<issue-number>
* Fixes #<issue-number>
* Resolves #<issue-number>

1. Assign GitHub Copilot to review the PR.
2. Paste original issue details into Copilot PR review prompt so it checks acceptance criteria compliance.
3. Keep the PR open for the independent human review required by the project.

##### [game data] Completion variant

1. Validate the game-data contract locally for the assigned issue:
   * identify the approved local/mock fixture and its version
   * inspect the relevant player-save/progression fields
   * generate or refine the player-save contract and compatibility rules
   * compare actual before/after results locally
2. Check the game-data contract against each acceptance criterion locally, including unverified cases.
3. If repository code changed, follow the PR steps above and retain the actual project review requirements.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Coding before reading AC fully | Extract AC into checklist first |
| Creating non-compliant branch name | Follow SOP naming convention exactly |
| Skipping before-state artifact | Capture baseline before first code change |
| PR opened without AC validation | Paste issue details into Copilot review prompt and verify |
| PR not linked to issue | Add Closes #<issue-number> (or Fixes / Resolves) in PR description |
| Missing self-assignment | Assign yourself on both issue and PR before requesting review |

#### Standards & Governance

* Day 12 is a **blocking workflow competency** day.
* Engineer must demonstrate full lane lifecycle ownership, not just isolated edits.
* Evidence quality and acceptance-criteria traceability are mandatory.
* PR readability is part of evaluation quality.
* Issue ownership must always be explicit; PR ownership is required when PR path is used.

### Auxiliary Research (Optional)

Research and summarize:

* Standard branch naming conventions (feat/, bugfix/, chore/) and why they matter for collaboration
* What is string interpolation/token substitution in programming?
* Purpose of PR review and what makes PRs easy for seniors to review
* Copilot planning vs inline editing differences
* What is CI/CD and how it relates to opening PRs

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Issue selection | Claim assigned backlog issue |
| Ownership | Assign yourself to issue |
| Branching | Use SOP-compliant naming |
| Planning | AI plan first, before code |
| Implementation | Execute + debug against AC |
| Evidence | Before + After artifact |
| Completion path | Unity gameplay: open a linked PR for review; game data: validate locally and use a PR when code changes |
| Type | Blocking |

- Milestone: validate the issue's acceptance criteria locally and follow the real PR review process when applicable.

## Implementation Examples (if needed)

- No additional implementation example is required for this day. Use the session checklist directly.

## End-of-Day Checklist

- [ ] Assigned issue is claimed and worked from backlog
- [ ] Engineer is assigned to the issue
- [ ] An SOP-compliant branch is created when repository code changes require it
- [ ] Before-state behavior is checked locally
- [ ] AI implementation plan is created before coding
- [ ] Issue changes are implemented and debugged
- [ ] After-state behavior is checked locally
- [ ] A linked PR and independent human review are requested when repository code changes require them
- [ ] Engineer is assigned to the PR when applicable
- [ ] The PR is linked to the correct issue when applicable (Closes/Fixes/Resolves #...)
