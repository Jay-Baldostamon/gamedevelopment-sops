---
name: "Day 49 - Scheduled Game-Data Validation"
about: "Validate a claimed mock game-data task on a schedule."
title: "Day 49: Scheduled Game-Data Validation - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 49: Scheduled Game-Data Validation (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Schedule or dry-run validation of a bounded mock player-save or progression contract and inspect the results locally.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Use the claimed task as scope for a scheduled, read-only mock-data validation. Keep diagnostics local; do not post training evidence or create a schema-change record. If the fixture or scheduler is unavailable, state the blocker and keep the work design-only.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-DB-TASK-ISSUE-URL`
- `YOUR-MOCK-FIXTURE-PATH`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
DB Task Issue: YOUR-DB-TASK-ISSUE-URL
Mock Fixture: YOUR-MOCK-FIXTURE-PATH

Schedule or dry-run read-only validation for this claimed game-data task.

First, validate all placeholders, confirm the task is claimed and has clear acceptance criteria, and verify that the fixture is approved. If any prerequisite is unavailable, stop and identify the blocker.

Then:
1. Inspect the fixture's player-save or progression fields and the expected version and compatibility rules.
2. Run the available read-only contract checks and, where supported, a mock save/load round trip. Inspect actual results against the acceptance criteria.
3. Configure the scheduled invocation only if authorized; otherwise dry-run it locally. Surface failed, blocked, and unrun checks without claiming success.

Do not post comments or training evidence, write a training report, execute DDL, mutate a live schema, or expose secrets. Any actual repository change requires separate authorization, CI, and independent human review.
```
