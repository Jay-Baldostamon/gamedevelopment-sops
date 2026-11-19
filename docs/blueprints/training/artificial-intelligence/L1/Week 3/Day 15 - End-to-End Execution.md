# Day 15: End-to-End Execution

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 15](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-15--task-a-delivery).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Take one approved platformer issue from understanding through implementation, Unity Test Framework or Play Mode validation, a desktop build check, and evidence.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 15 - End-to-End Execution |
| Track | training |
| Level | day |
| Owner | Direct Supervisor |
| Last Updated | 2026-07-29 |
| Review Cycle | Every 30 days |
| Status | archived |

Execute the Week 3 GitHub issue you created on Day 14 in your current team's project and complete a full lane execution cycle with QA discipline and AC-based review.

### Session: Preparation

#### Prerequisites

Before starting, ensure the Engineer has:

* Day 14 issue created and available
* Local repo setup working
* PR SOP familiarity from Day 12

### Session: Core Execution

#### Directions (Core Activity)

Take the issue you generated/refined on Day 14 and execute it using the same PR SOP pattern from Day 12.

#### Tooling Split: [Unity gameplay] vs [game data]

##### [Unity gameplay] (issue-to-PR path)

- Follow the Day 12 PR SOP pattern as written.

##### [game data] (local contract-validation path)

- Use GitHub Copilot Desktop + approved game-data tooling for planning, execution, and evidence verification.
- Validate the mock-data contract locally against the acceptance criteria.
- If repository code changes are part of scope, follow the actual PR workflow.

### 1) Create Branch

1. Ensure the Day 14 issue is assigned to you in GitHub (**Assignees** panel).
2. If repository code changes are in scope, create a branch using the required naming conventions (per team SOP).

### 2) Plan Mode First

1. Open Copilot Chat in **Plan** mode.
2. Ask for implementation architecture for your issue:
   * approach
   * file changes
   * edge cases
   * validation checklist mapped to acceptance criteria

### 3) Implement + Debug Locally

1. Write/generate code per plan.
2. Debug errors locally until feature works as intended.
3. Validate explicitly against each acceptance criterion.

### 4) Push + Open PR

When repository code changes require a PR:

1. Push branch to remote.
2. Open Pull Request with clear issue linkage and summary.
3. Assign yourself to the PR in GitHub (**Assignees** panel).
4. Link PR to your Day 14 issue using one of:
   * Closes #<issue-number>
   * Fixes #<issue-number>
   * Resolves #<issue-number>

### 4b) Local Game-Data Validation

1. Verify the approved mock player-save or progression fixture:
   * identify the fixture and its version
   * inspect fields and compatibility rules when needed
   * compare actual save/load results with the acceptance criteria
2. Run a game-data contract review-style final check locally.
3. If repository code changed, complete PR steps in section 4 as well.

### 5) Review Against Your AC

1. Review the change against the Acceptance Criteria with AI assistance.
2. For a real PR, request the independent human review required by the repository and address its feedback.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Skipping Plan mode and coding immediately | Use Plan mode first for architecture and AC mapping |
| Implementing beyond issue scope | Enforce AC checklist; defer extras |
| PR opened without before/after proof | Capture evidence before requesting review |
| Ignoring AC in review | Validate every PR change against your own AC |
| Forgetting issue/PR self-assignment | Assign yourself immediately after claiming issue/opening PR |
| PR opens but doesn’t close issue | Use Closes #<issue-number> (or Fixes / Resolves) in PR description |

#### Standards & Governance

* Day 15 is a **blocking ownership milestone**.
* Engineer must demonstrate end-to-end lane execution, not isolated coding.
* Validate each acceptance criterion against the implementation or approved mock fixture.
* Explicit ownership and issue linkage are required for review clarity and auditability.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Source issue | Must be Day 14 self-created issue |
| Ownership | Assign yourself to issue; assign PR when PR path is used |
| Branching | SOP-compliant branch name |
| Planning | Copilot Plan mode (mandatory) |
| Implementation | Local code + debug + AC validation |
| Completion path | Unity gameplay: linked PR and independent review; game data: local contract validation and a PR when code changes |
| Type | Blocking |

- Milestone: the implementation meets the scoped acceptance criteria and follows actual PR review rules when applicable.

## Implementation Examples (if needed)

- No additional implementation example is required for this day. Use the session checklist directly.

## End-of-Day Checklist

- [ ] Day 14 issue is used as execution source
- [ ] Engineer is assigned to Day 14 issue
- [ ] An SOP-compliant branch is created when repository code changes require it
- [ ] Copilot Plan mode is used before coding
- [ ] Feature is implemented and debugged locally
- [ ] A PR is opened when the scoped project change requires one
- [ ] Engineer is assigned to the PR when applicable
- [ ] The PR is linked to the Day 14 issue when applicable (Closes/Fixes/Resolves #...)
- [ ] Independent review is requested when a real PR is used
