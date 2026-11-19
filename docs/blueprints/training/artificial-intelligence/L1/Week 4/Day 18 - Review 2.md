# Day 18: Review 2

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 18](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-18--challenge-the-level-and-ending-design).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Review a second Unity change for gameplay correctness, scene/prefab references, serialized data compatibility, test quality, and accidental generated-file changes.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 18 - Review 2 |
| Track | training |
| Level | day |
| Owner | Direct Supervisor / Training Team |
| Last Updated | 2026-07-29 |
| Review Cycle | Every 30 days |
| Status | archived |

Review a Week 4 Unity gameplay PR or game-data task and verify findings against the actual project or mock fixture.

### Session: Preparation

- Confirm repository and tooling access before execution.

### Session: Core Execution

#### Execution Reference

Refer to instructions in [Day 13: AI-Assisted Code Review](../Week%203/Day%2013%20-%20AI-Assisted%20Code%20Review.md). For **[game data]** teams, follow the Day 13 issue-verification path on the GitHub issue itself rather than the PR merge flow.

#### Unity Gameplay and Game Data Review

##### Unity gameplay PR review

- Follow the Day 13 PR review workflow for an assigned Unity change.
- Check gameplay behavior, C# correctness, scene/prefab references, `.meta` integrity, tests, and build evidence.
- Require passing checks and an independent approval before merge; do not approve your own work.

##### Game data issue review

- Follow the Day 13 local verification path for an assigned player-save/progression contract.
- Verify each acceptance criterion against an approved local/mock game-data fixture.
- Do not query CRM or unrelated production systems or mutate a live schema. If the fixture is unavailable, identify the blocker instead of marking the task verified.

### Session: Quality and Reflection

- Review quality gates and document key lessons learned for the day.

## Deliverables and Milestone

- Milestone: review the change locally and retain independent approval and CI requirements for actual PRs.

## Implementation Examples (if needed)

- No additional implementation example is required for this day. Use the session checklist directly.

## End-of-Day Checklist

- [ ] Core execution steps are completed.
