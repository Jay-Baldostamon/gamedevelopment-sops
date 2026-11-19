---
name: "Day 57 - Multi-Day Unattended Rehearsal (Game Data Lane)"
about: "Run the assembled DB orchestrator unattended over several days."
title: "Day 57: Multi-Day Unattended Rehearsal - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 57: Multi-Day Unattended Rehearsal (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Rehearse unattended Unity issue processing over multiple days using test/sandbox tasks; verify build capacity, logs, deduplication, and escalation.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Rehearse the **assembled game-data orchestrator** over an authorized window. It should validate approved mock pickups locally, inspect eligible reviews, and page only for genuine novel or blocked cases. Review the operational log locally; do not submit evidence or a training report.

Use approved test pickups. A routine run may finish without contact; genuine decisions still require a human.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-ORCHESTRATOR-JOB` (the Day 56 DB job, by ID or name)
- `YOUR-GITHUB-HANDLE`
- `YOUR-REHEARSAL-DURATION`
- `YOUR-RUN-LOG-PATH`
- `YOUR-REVIEW-DURATION`

## AI Prompt

```text
Orchestrator Job: YOUR-ORCHESTRATOR-JOB
GitHub Handle: YOUR-GITHUB-HANDLE
Rehearsal Duration: YOUR-REHEARSAL-DURATION
Run Log Path: YOUR-RUN-LOG-PATH

Help me run a multi-day UNATTENDED rehearsal of my assembled DB orchestrator and verify it held without me, read-only.

First, repeat the orchestrator job, rehearsal duration, and run log path. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the Day 56 DB orchestrator is scheduled, enabled, and covered for the rehearsal window (backstop per Day 54).
2. Run the rehearsal on the real loop. Routine work does NOT page; only genuine novel/blocked/recovery escalations page. Record each run's action.
3. After the window (at YOUR-REVIEW-DURATION), inspect the run log: verify each approved pickup was locally validated or escalated, eligible reviews were handled read-only, and nothing stalled silently.
4. Inspect the actual pass/fail results, blocked items, and available counts locally. Do not invent missing observations.

Do not post training evidence, create a training report, execute DDL, mutate schema, or stage a change. Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane Note

This is the game-data-lane variant of Day 57.