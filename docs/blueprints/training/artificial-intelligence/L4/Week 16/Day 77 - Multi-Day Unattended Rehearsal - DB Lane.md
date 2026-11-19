---
name: "Day 77 - Multi-Day Unattended Rehearsal (Game Data Lane)"
about: "Rehearse authorized mock game-data validation on one VM."
title: "Day 77: Multi-Day Unattended Rehearsal - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 77: Multi-Day Unattended Rehearsal (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Rehearse multi-day Unity build and update operations, checking package/editor compatibility, failure recovery, artifact integrity, and escalation behavior.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Rehearse the **single authorized VM** over a multi-day window using approved mock player-save or progression tasks. Routine validation may run unattended; genuine novel or blocked work must pause for a human. Inspect actual results locally without posting evidence or creating a training report.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-REHEARSAL-DURATION` (e.g. `72 hours` / `3 days`)
- `YOUR-REHEARSAL-THREAD`
- `YOUR-RUN-LOG-PATH`
- `YOUR-INSTANCE-NAME`
- `YOUR-NOVELTY-THRESHOLD`

## AI Prompt

```text
Rehearsal Duration: YOUR-REHEARSAL-DURATION
Rehearsal Thread: YOUR-REHEARSAL-THREAD
Run Log Path: YOUR-RUN-LOG-PATH
Instance: YOUR-INSTANCE-NAME
Novelty Threshold: YOUR-NOVELTY-THRESHOLD

Rehearse read-only mock game-data validation on the authorized VM for YOUR-REHEARSAL-DURATION.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the VM runs the orchestrator with YOUR-NOVELTY-THRESHOLD and that the rehearsal is authorized.
2. Observe local mock-data validation and eligible read-only reviews. For a synthetic decision, use an approved test answer; genuine novel or blocked work must wait for a human.
3. Inspect actual completions, escalations, stalls, and measured collisions in YOUR-RUN-LOG-PATH. Mark missing or multi-instance observations unverified.

Do not post evidence, create a training report, execute DDL, mutate schema, stage a change, take destructive action, or expose secrets.
```

## Game Data Lane Note

This is the game-data-lane variant of Day 77.
