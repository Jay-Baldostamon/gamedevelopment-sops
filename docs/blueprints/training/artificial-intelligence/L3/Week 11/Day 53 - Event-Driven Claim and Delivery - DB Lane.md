---
name: "Day 53 - Event-Driven Claim and Delivery (Game Data Lane)"
about: "Drive a pickup into claim and evidence delivery (game data lane)."
title: "Day 53: Event-Driven Claim and Delivery - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 53: Event-Driven Claim and Delivery (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Claim and deliver a scoped Unity issue from the event path, validating project changes with the Editor/test runner and a desktop build where applicable.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Drive a game-data pickup through claim and local validation on an event rather than a schedule. Use an authorized test task and approved mock data. Days 41-45 separation of duties still applies to any actual review: the reviewer must not be the author.

> This day validates locally, never executes DDL, never mutates a live schema, and never approves its own output.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-RELAY-URL`
- `YOUR-PENDING-TASKS-API-KEY` (held in local Hermes secrets, never in the prompt body)
- `YOUR-GITHUB-HANDLE`
- `YOUR-GITHUB-FOLDER-PATH`

## AI Prompt

```text
Relay URL: YOUR-RELAY-URL
GitHub Handle: YOUR-GITHUB-HANDLE
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Pending Tasks API Key: (held in my local Hermes secrets — do NOT print or paste a value)

Have an authorized game-data test pickup flow through claim and local validation, triggered by the event and not a schedule.

First, repeat the relay URL, GitHub handle, and repository folder. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Driver: call `GET <YOUR-RELAY-URL>?engineer=YOUR-GITHUB-HANDLE`. Take the OLDEST open pickup. If none, page me exactly `[SILENT]` and stop — the event-driven path must not invent work.
2. Fetch the referenced objects read-only via MCP (`approved game-data schema-description tool`, `approved game-data schema-definition tool`, `approved game-data read-only query tool`). Classify CLEAR / BLOCKED (Day 46). If BLOCKED (especially a schema dependency), page the conforming reason and do not race.
3. Claim it: confirm unclaimed, transition the project Status Inbox → In Progress (Day 47 GraphQL mutation), verify the transition stuck, record the claim.
4. Validate the mock player-data contract read-only and inspect the actual results locally. Do not post evidence to an issue.
5. Separation of duties: do not self-approve. Identify any blocked checks locally.
6. Record the whole sequence in the run log with timestamps, and confirm the project Status is updated.

Do not execute DDL, mutate schema, or stage a change. Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets. If the relay is unreachable or auth fails, stop and report the exact error.
```

## Game Data Lane Note

This is the game-data-lane variant of Day 53.