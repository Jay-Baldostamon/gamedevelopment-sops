# Day 13: AI-Assisted Code Review

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 13](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-13--hud-lives-and-a-review-you-verify).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Review a proposed Unity change across C# scripts, scenes, prefabs, serialized references, and .meta files; report only evidence-backed correctness or regression risks.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 13 - AI-Assisted Code Review |
| Track | training |
| Level | day |
| Owner | Direct Supervisor |
| Last Updated | 2026-07-29 |
| Review Cycle | Every 30 days |
| Status | archived |

Complete one full Unity project review cycle by validating gameplay or player-data acceptance criteria with AI assistance, then verify every finding against the project or approved mock fixture.

### Session: Preparation

#### Prerequisites

Before starting, ensure the Engineer has:

* Repository access
* Unity gameplay PR access and an assigned PR available
* Linked Unity issue present under the PR Development sidebar
* Game data: assigned player-save/progression issue and approved mock fixture available
* Game data: repository, issue, and authorized mock-fixture details available; otherwise report the blocker

### Session: Core Execution

#### Unity Gameplay Lane (GitHub PR Review)

1. Open the assigned Unity PR and linked issue. Capture the issue requirements and acceptance criteria.
2. Review C# changes, scene/prefab references, `.meta` files, package changes, tests, and build evidence. Ask Copilot to identify risks, but verify every finding against the diff and Unity project.
3. If a fix is explicitly in scope, make only the approved change, rerun focused Play Mode/tests, and inspect the final diff.
4. Wait for required CI checks and an independent human approval before merge. Never self-approve or bypass a failed check.

#### Game Data Lane (Issue-Level Contract Review)

1. Open the assigned player-save/progression issue and capture its acceptance criteria.
2. Use only an approved local/mock game-data fixture to verify player profile, save-slot, checkpoint, collectible, or unlock behavior and compatibility.
3. Use only the approved mock game-data fixture; do not query CRM or unrelated production systems. Do not execute DDL or mutate a live schema.
4. If no approved fixture is available, document the intended contract and report the access blocker; do not claim verification passed.
5. Check the covered and uncovered criteria, blockers, and next actions locally. This path does not create or merge a PR.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Reviewing a PR or issue without issue context | Always pull the full issue details first |
| Blindly accepting Copilot suggestions | Validate each suggestion against acceptance criteria |
| Claiming a game-data issue is resolved without evidence | Require a game-data contract review verdict with cited evidence and uncovered criteria |
| Merging before pipeline completes | Wait for all required checks to pass on **[Unity gameplay]** reviews |
| Trusting an unverified finding | Reproduce it or mark it unverified |
| Ignoring unexpected diff changes | Inspect final diff before merge |

#### Standards & Governance

* Day 13 is a **blocking review-quality gate**.
* **[Unity gameplay]** uses the normal PR-quality gate path.
* **[game data]** checks the contract locally against the approved fixture.
* Engineer must demonstrate review discipline, not just merge action.
* AI assistance is a reviewer aid, not a substitute for AC verification.
* CI/CD status is mandatory merge criteria for **[Unity gameplay]**; evidence-backed verifier output is mandatory completion criteria for **[game data]**.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Work item selection | **[Unity gameplay]** Assigned PR from repository; **[game data]** assigned player-data GitHub issue |
| Review context | **[Unity gameplay]** Linked issue (Summary, Example, AC, Files); **[game data]** issue itself plus approved mock game-data fixture |
| Copilot trigger | **[Unity gameplay]** `@copilot` + required prompt header; **[game data]** game-data contract review + verifier prompt |
| Fix / follow-up action | **[Unity gameplay]** Use fix batch / implement suggestion; **[game data]** document uncovered criteria, blockers, and next actions |
| QA gate | **[Unity gameplay]** All required CI/CD checks passing; **[game data]** evidence-backed verifier verdict + confidence |
| Completion action | **[Unity gameplay]** Merge only after checks + independent approval; **[game data]** verify the contract locally |
| Type | Blocking |

- Milestone: validate the review findings locally and respect the independent review and CI rules for actual PRs.

## Implementation Examples (if needed)

- No additional implementation example is required for this day. Use the session checklist directly.

## End-of-Day Checklist

- [ ] **[Unity gameplay]** Assigned PR was located and issue context extracted, or **[game data]** assigned game-data issue was opened with verification context captured
- [ ] **[Unity gameplay]** Copilot review was triggered with required prompt format, or **[game data]** game-data contract review was run against the issue itself
- [ ] **[Unity gameplay]** Suggested fixes were applied (if needed), or **[game data]** uncovered criteria and blockers were documented
- [ ] **[Unity gameplay]** CI/CD checks passed on updated commits, or **[game data]** evidence-backed verdict and confidence were recorded
- [ ] **[Unity gameplay]** PR approval requirements were met and PR was merged, or **[game data]** final contract verification was completed locally
