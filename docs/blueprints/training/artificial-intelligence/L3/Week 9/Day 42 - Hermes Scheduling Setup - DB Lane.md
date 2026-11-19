---
name: "Day 42 - Hermes Scheduling Setup (Game Data Lane)"
about: "Schedule local mock game-data validation on a cadence."
title: "Day 42: Hermes Scheduling Setup - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 42: Hermes Scheduling Setup (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Schedule local validation of an approved player-save or progression fixture without launching Unity builds outside the approved environment.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Configure local Hermes to validate an approved mock game-data fixture **on a recurring schedule**, and inspect the actual run output locally. The job is read-only and creates no training report or schema-change record.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-MOCK-FIXTURE-PATH` (approved player-save or progression fixture)
- `YOUR-SCHEDULE` (e.g. `daily 09:00` or `weekdays 08:00`)

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Mock Fixture: YOUR-MOCK-FIXTURE-PATH
Schedule: YOUR-SCHEDULE

Help me configure this local Hermes to run a read-only mock game-data validation job on YOUR-SCHEDULE, without me launching it by hand.

First, repeat the repository folder, fixture path, and schedule. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Verify this local Hermes has a scheduling/cron capability and describe where it stores jobs and run output. If unavailable, stop and return the exact remediation.
2. Confirm the fixture is approved and the available local validation tools are reachable in a scheduled session. If not, stop with the specific blocker.
3. If authorized, create ONE scheduled job to inspect the fixture's fields, version, and compatibility rules on YOUR-SCHEDULE. Otherwise dry-run the job locally. Never mutate a live schema or execute DDL.
4. Run the authorized job once or execute the local dry run, and inspect its actual output.
5. If a scheduled job was created, confirm its operational log location; otherwise identify the schedule as unconfigured.

Do not post evidence, create a training report or schema-change record, or send a Slack notification. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```
