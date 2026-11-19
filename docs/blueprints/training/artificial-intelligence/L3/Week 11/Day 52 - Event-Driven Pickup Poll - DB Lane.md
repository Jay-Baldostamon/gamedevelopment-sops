---
name: "Day 52 - Event-Driven Pickup Poll (Game Data Lane)"
about: "Build the DB-engineer local poll that reacts to a pickup."
title: "Day 52: Event-Driven Pickup Poll - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 52: Event-Driven Pickup Poll (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Poll for Unity project work, detect new versus already-claimed issues, and prove repeated polls do not duplicate assignment or delivery.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Build the **"drink of water"** poll for a game data engineer: a local Hermes cron that checks the relay (`GET /pending-tasks?engineer=<you>`) on an interval and reacts the moment a pickup appears — fetching the conscribed task's objects **read-only via MCP** (`approved game-data MCP tools`) and paging you the conforming one-liner (Day 43 discipline). Same poll shape as the standard lane; the detail step is a read-only MCP lookup rather than a GitHub code fetch. No inbound connection, no board scan, no schema mutation.

> Polling reads DB metadata with read-only MCP tools only. This day never executes DDL, never mutates schema, and never stages a change — that is human-owned via approved game-data sandbox.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-RELAY-URL`
- `YOUR-PENDING-TASKS-API-KEY` (held in local Hermes secrets, never in the prompt body)
- `YOUR-GITHUB-HANDLE`
- `YOUR-POLL-INTERVAL` (e.g. `every 5 minutes`)
- `YOUR-GITHUB-FOLDER-PATH`

## AI Prompt

```text
Relay URL: YOUR-RELAY-URL
Poll Interval: YOUR-POLL-INTERVAL
GitHub Handle: YOUR-GITHUB-HANDLE
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Pending Tasks API Key: (held in my local Hermes secrets — do NOT print or paste a value)

Build and prove the local event-driven pickup poll — my "drink of water" — for game-data work, read-only.

First, repeat the relay URL, poll interval, GitHub handle, and repository folder. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the relay is reachable and I can authenticate to it with my own key, read-only, returning MY pending refs only.
2. Create ONE scheduled poll job on YOUR-POLL-INTERVAL that:
   - Calls `GET <YOUR-RELAY-URL>?engineer=YOUR-GITHUB-HANDLE` with my key.
   - NO pending pickups → stays completely quiet (no output, no page).
   - Pending pickups → for EACH ref: fetch the referenced objects read-only via MCP (`approved game-data schema-description tool`, `approved game-data schema-definition tool`, `approved game-data read-only query tool`), classify CLEAR vs BLOCKED, and apply Day 43 pager discipline — page the conforming one-liner and nothing else. Record to the local run log.
3. Prove it works live: if you have a pending pickup, run the job once now and show me the page. If none, demonstrate the classification + one-liner path against a task currently in Inbox on a project you are assigned to (read-only; do not claim).
4. Confirm to me: (a) refs only, no board scan; (b) no inbound connection; (c) pages only on a real pickup; (d) run-log path; (e) every MCP call was read-only.

Do not claim, transition, modify schema, execute DDL, or stage any change. Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets. If the relay is unreachable or auth fails, do NOT silently pass — stop and report the exact error.
```

## Game Data Lane Note

This is the game-data-lane variant of Day 52.