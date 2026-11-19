---
name: "Day 44 - Daily Automated Review (Game Data Lane)"
about: "Run scheduled mock game-data validation unattended."
title: "Day 44: Daily Automated Review - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 44: Daily Automated Review (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Run the scheduled read-only check of a mock player-save or progression fixture and verify it creates no repository mutations.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Run the authorized Day 42 scheduled mock-data validation and inspect actual results locally. Routine checks remain quiet under Day 43 routing. No training report, evidence posting, schema mutation, or DDL is required.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-MOCK-FIXTURE-PATH`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Mock Fixture: YOUR-MOCK-FIXTURE-PATH

Help me run the scheduled read-only game-data validation for YOUR-MOCK-FIXTURE-PATH and inspect its actual output.

First, repeat the repository folder and fixture path. If either still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the Day 42 scheduled mock-data job is authorized and enabled. If unavailable, identify the blocker instead of claiming an unattended run.
2. Run one authorized instance or local dry run and inspect the real output.
3. If an operational log exists, locate it and inspect actual fixture-validation results.
4. Apply Day 43 routing: for a ROUTINE result, keep it minimal — no DM, or only a conforming one-liner. No schema details, no connection info, no raw values, no secrets.
5. If the schedule is active, inspect its next run and explain how to locate its operational output.

Do not post evidence, create a training report, mutate schema, or execute DDL. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```
