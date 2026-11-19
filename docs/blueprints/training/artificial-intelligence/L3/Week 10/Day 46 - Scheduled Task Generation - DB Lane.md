---
name: "Day 46 - Scheduled Task Generation (Game Data Lane)"
about: "Generate the next game-data task from a queue on a schedule (game data lane)."
title: "Day 46: Scheduled Task Generation - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 46: Scheduled Task Generation (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Generate scheduled Unity project tasks from approved backlog themes such as movement, checkpoints, accessibility, and build reliability; do not invent requirements.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Set up Hermes to pick the next **game-data task** deterministically from the approved player-save or progression issue queue and verify the referenced mock fixture is available. The job only selects and classifies; it creates no training report, executes no DDL, and does not mutate a live schema.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-DB-QUEUE-LABEL` (the label defining your game-data task pool)
- `YOUR-SCHEDULE`
- `YOUR-MOCK-FIXTURE-PATH`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
DB Queue Label: YOUR-DB-QUEUE-LABEL
Schedule: YOUR-SCHEDULE
Mock Fixture: YOUR-MOCK-FIXTURE-PATH

Set up a scheduled job that picks my next game-data task deterministically from the issue queue (label YOUR-DB-QUEUE-LABEL), verifies its approved mock fixture, and demonstrates the selection locally.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm local Hermes scheduling and the approved mock fixture are available in a scheduled session. If either is unavailable, stop and identify the blocker.
2. Define the deterministic selection rule: prefer unassigned game-data issues with a clear scope and acceptance criteria, in stable order, skipping any already covered by an open branch/PR or already claimed.
3. If authorized, create ONE scheduled job on YOUR-SCHEDULE that lists candidates, applies the rule, checks the relevant fixture fields read-only, classifies CLEAR or BLOCKED, and records the operational result locally. Otherwise dry-run the selection.
4. Run the job once on demand now and show the real selected task and classification.
5. If a scheduled job was created, confirm its log location and unattended cadence for Day 47; otherwise identify the schedule as unconfigured.

The job is inform-only: no training report, schema mutation, or DDL. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```
