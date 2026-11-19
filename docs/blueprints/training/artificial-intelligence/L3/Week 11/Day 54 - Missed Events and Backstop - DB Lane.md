---
name: "Day 54 - Missed Events and Backstop (Game Data Lane)"
about: "Detect and reconcile a missed webhook or stale relay (game data lane)."
title: "Day 54: Missed Events and Backstop - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 54: Missed Events and Backstop (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Reconcile missed Unity issue events with a safe backstop; prove no duplicate work, lost task, or unauthorized repository mutation.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Harden the DB event-driven pipeline against **missed events**: a lost webhook, a stale relay, or a poll that skipped a pickup. Keeps a scheduled backstop scan (read-only) as an independent safety net and reconciles so a missed webhook can never silently strand game-data work. Applies Day 50's **escalate, don't stall** to the trigger itself. Read-only throughout; no schema mutation, no DDL — execution stays human-owned via approved game-data sandbox.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-RELAY-URL`
- `YOUR-PENDING-TASKS-API-KEY` (held in local Hermes secrets, never in the prompt body)
- `YOUR-GITHUB-HANDLE`
- `YOUR-BACKSTOP-SCHEDULE`
- `YOUR-GITHUB-FOLDER-PATH`

## AI Prompt

```text
Relay URL: YOUR-RELAY-URL
Backstop Schedule: YOUR-BACKSTOP-SCHEDULE
GitHub Handle: YOUR-GITHUB-HANDLE
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Pending Tasks API Key: (held in my local Hermes secrets — do NOT print or paste a value)

Harden the DB event-driven pipeline against missed events and stale pickups, read-only.

First, repeat the relay URL, backstop schedule, GitHub handle, and repository folder. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the failure model with me: lost webhook → no pickup; missed poll → pickup stays pending; stale relay → errors/empty. Explain each in plain language.
2. Implement the BACKSTOP: keep or create ONE scheduled scan on YOUR-BACKSTOP-SCHEDULE that queries the game-data task pool boards read-only via MCP (Inbox + assigned to me) and reconciles against the relay, surfacing any in-domain Inbox task that should have a pickup but does not.
3. Add reconciliation: when the backstop finds an in-domain Inbox task with no open pickup, re-consribe it (create the pickup) and record it as a backstop re-consribe.
4. Add staleness detection: if the relay is unreachable or errors across two consecutive ticks, page me `RELAY is UNREACHABLE — reason` and escalate.
5. Prove it: run the backstop scan once now and show which in-domain Inbox tasks were found, which already had pickups, which needed re-consribing, and each classification.
6. Confirm the backstop repeats on YOUR-BACKSTOP-SCHEDULE and writes findings to the run log.

Do not claim, transition, mutate schema, or execute DDL. Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane Note

This is the game-data-lane variant of Day 54.