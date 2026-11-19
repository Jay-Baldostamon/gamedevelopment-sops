# Day 17: Second Issue Ticket

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 17](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-17--level-progression).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Write a second issue for a reproducible collision, hazard, or checkpoint bug, including scene/setup details, expected versus actual behavior, and regression coverage.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 17 - Second Issue Ticket |
| Track | training |
| Level | day |
| Owner | Direct Supervisor / Training Team |
| Last Updated | 2026-07-29 |
| Review Cycle | Every 30 days |
| Status | archived |

Create a second scoped issue for the continuing Unity game project, with testable requirements and acceptance criteria.

### Session: Preparation

- Confirm repository and tooling access before execution.

### Session: Core Execution

#### Execution Reference

Refer to instructions in [Day 12: First Issue Ticket](../Week%203/Day%2012%20-%20First%20Issue%20Ticket.md)

#### Unity Gameplay and Game Data Issue Creation

##### Unity gameplay issue

- Follow the Day 12 issue workflow in VS Code for a second reproducible platformer bug or improvement.
- Include scene/setup, expected versus actual behavior, acceptance criteria, affected C# scripts/scenes/prefabs, and a focused Play Mode/test plan.
- Keep the issue small enough for one scoped PR and independent review.

##### Game data issue

- Define a player-save/progression contract task (for example save-slot version compatibility or checkpoint persistence) against an approved local/mock fixture.
- Include sample input/output, versioning expectations, acceptance criteria, and read-only evidence steps.
- Do not use legacy CRM/BPC tools or unrelated production data; if no approved fixture exists, record a blocker and keep the task design-only.

### Session: Quality and Reflection

- Review quality gates and document key lessons learned for the day.

## Deliverables and Milestone

- Milestone: the second project issue has clear scope and a local validation plan.

## Implementation Examples (if needed)

- No additional implementation example is required for this day. Use the session checklist directly.

## End-of-Day Checklist

- [ ] Core execution steps are completed.
