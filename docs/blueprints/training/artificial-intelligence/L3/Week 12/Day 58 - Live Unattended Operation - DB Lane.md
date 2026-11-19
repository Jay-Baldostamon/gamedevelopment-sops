---
name: "Day 58 - Live Unattended Operation (Game Data Lane)"
about: "Run the DB orchestrator live with escalation-only human contact."
title: "Day 58: Live Unattended Operation - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 58: Live Unattended Operation (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Operate the approved unattended Unity workflow and confirm routine jobs complete with evidence while ambiguous or risky changes page a human.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Run the **assembled game-data orchestrator** against authorized mock validation tasks and eligible review work. Inspect actual results locally; novel or blocked cases still require operational escalation. Do not submit training evidence, execute DDL, or mutate a live schema.

> Routine local validation stays quiet; novel or blocked work pages the responsible human.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-ORCHESTRATOR-JOB`
- `YOUR-GITHUB-HANDLE`
- `YOUR-RUN-LOG-PATH`
- `YOUR-OPERATION-WINDOW`
- `YOUR-REVIEW-DURATION`

## AI Prompt

```text
Orchestrator Job: YOUR-ORCHESTRATOR-JOB
GitHub Handle: YOUR-GITHUB-HANDLE
Run Log Path: YOUR-RUN-LOG-PATH
Operation Window: YOUR-OPERATION-WINDOW

Help me run the assembled DB orchestrator LIVE for the operation window with escalation-only human contact, and verify the boundary held, read-only.

First, repeat the orchestrator job, run log path, and operation window. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the orchestrator is authorized and enabled for the window: routine mock validation stays local and quiet; only novel/blocked work pages.
2. Run authorized pickups through local mock-data validation and inspect eligible reviews read-only. Pause for a human on novel or blocked work.
3. At YOUR-REVIEW-DURATION, replay the run log and measure the boundary: unattended-to-escalation ratio; for each page, was it genuinely novel/blocked; for each silent completion, was any actually novel (false negative).
4. Inspect locally whether the threshold needs adjustment, including any specific blocked or unmeasured checks.
5. Confirm separation of duties held.

Do not post training evidence, create a training report, execute DDL, mutate schema, or stage a change. An inform-only reviewer MUST NOT mutate. Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane Note

This is the game-data-lane variant of Day 58.