---
name: "Day 52 - Event-Driven Pickup Poll"
about: "Build and prove the local poll that reacts to a pickup."
title: "Day 52: Event-Driven Pickup Poll - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 52: Event-Driven Pickup Poll

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Poll for Unity project work, detect new versus already-claimed issues, and prove repeated polls do not duplicate assignment or delivery.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Build the **"drink of water"** poll: a local Hermes cron that checks the relay (`GET /pending-tasks?engineer=<you>`) on an interval and reacts **the moment** a pickup appears — by fetching the full issue from GitHub with a single `gh` call and paging you the conforming one-liner (Day 43 discipline). This is the event-driven replacement for the fixed 09:30 poll: instead of waiting for a schedule, your local Hermes learns about new in-domain work within the poll interval. The poll is cheap (one request to the server your organization controls, returning refs, never a board scan) and takes no inbound connection.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-RELAY-URL` (e.g. `https://<your-org-server>/api/pending-tasks`)
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

Build and prove the local event-driven pickup poll — my "drink of water" — that reacts the moment work lands for me.

First, repeat the relay URL, poll interval, GitHub handle, and repository folder. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the relay is reachable and I can authenticate to it with my own key, read-only, returning MY pending refs only.
2. Create ONE scheduled poll job on YOUR-POLL-INTERVAL that:
   - Calls `GET <YOUR-RELAY-URL>?engineer=YOUR-GITHUB-HANDLE` with my key.
   - If there are NO pending pickups, stays fully quiet (no output, no page) — report nothing.
   - If there ARE pending pickups, for EACH ref: fetch the ONE full issue from GitHub with `gh issue view <number> --repo <repo>`, run the Day 46/47 classification (CLEAR vs BLOCKED), and apply Day 43 pager discipline — page me the conforming one-liner `<IDENTIFIER> is <STATUS> — <one-line reason>` and nothing else. Record the fetch + classification to the local run log.
3. Prove it works live: if you have a pending pickup, run the job once now and show me the page it produces. If you have none, simulate a pickup by reading a task currently in Inbox on a project you are assigned to and demonstrate the classification+fetch path produces the exact one-liner (without claiming it — claiming is Day 53).
4. Confirm to me: (a) the poll uses refs only and never scans a full project, (b) it takes no inbound connection, (c) it pages only on a real pickup, (d) the run log path where each pickup check is recorded.

Do not claim, transition, modify, or commit anything — this day is detection and page only. Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets. If the relay is unreachable or auth fails, do NOT silently pass — stop and report the exact error so I can fix the server or key.
```

## Game Data Lane

Use the [game-data variant](Day%2052%20-%20Event-Driven%20Pickup%20Poll%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

