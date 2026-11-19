---
name: "Day 54 - Missed Events and Backstop"
about: "Detect and reconcile a missed webhook or stale relay."
title: "Day 54: Missed Events and Backstop - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 54: Missed Events and Backstop

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Reconcile missed Unity issue events with a safe backstop; prove no duplicate work, lost task, or unauthorized repository mutation.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Make the event-driven pipeline robust to the failure that matters most: **a missed event**. A webhook can fail to land (server down, delivery error, lost payload) or the relay can go stale — and if the event-driven poll is the only trigger, a missed webhook silently strands work. This day adds the backstop and reconciliation: keep the **scheduled poll** (Day 46 cadence) running as an independent safety net, detect when the relay is missing something it should have seen, and apply Day 50's **escalate, don't stall**. Event-driven is primary; the schedule is insurance, never the crutch.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-RELAY-URL`
- `YOUR-PENDING-TASKS-API-KEY` (held in local Hermes secrets, never in the prompt body)
- `YOUR-GITHUB-HANDLE`
- `YOUR-BACKSTOP-SCHEDULE` (e.g. `every 3 hours`, or keep the Day 46 cadence)
- `YOUR-GITHUB-FOLDER-PATH`

## AI Prompt

```text
Relay URL: YOUR-RELAY-URL
Backstop Schedule: YOUR-BACKSTOP-SCHEDULE
GitHub Handle: YOUR-GITHUB-HANDLE
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Pending Tasks API Key: (held in my local Hermes secrets — do NOT print or paste a value)

Harden the event-driven pipeline against missed events and stale pickups, with a backstop and an escalation path.

First, repeat the relay URL, backstop schedule, GitHub handle, and repository folder. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm with me the failure model: (a) webhook lost before it reaches the server → the relay never gets a pickup; (b) relay row written but my poll missed it → pickup sits pending; (c) relay stale/down → poll errors or returns empty. Explain in plain language how each is detected.
2. Implement the BACKSTOP: keep (or create if not running) ONE scheduled task scan on YOUR-BACKSTOP-SCHEDULE that queries the project boards directly (the Day 46 queue rule: Inbox + assigned to me) and reconciles against the relay — surfacing any in-domain Inbox task that should have a pickup but does not. This is the independent safety net for missed webhooks.
3. Add reconciliation: when a backstop scan finds an in-domain Inbox task that the relay has no open pickup for, re-consribe it (create the pickup) so the event path picks it up; record that it was a backstop re-consribe, not a webhook.
4. Add staleness detection: if the relay is unreachable or returns errors across two consecutive poll ticks, page me `RELAY is UNREACHABLE — reason` and escalate rather than silently passing (Day 50 "escalate, don't stall" applied to the trigger itself).
5. Prove it: run the backstop scan once now against my real boards and show (a) the in-domain Inbox tasks found, (b) which already had relay pickups, (c) which needed re-consribing, (d) the result of each classification.
6. Confirm the backstop repeats on YOUR-BACKSTOP-SCHEDULE and writes its findings to the run log.

Do not claim, transition, or start delivery in this day — it is detection, reconciliation, and escalation only. Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane

Use the [game-data variant](Day%2054%20-%20Missed%20Events%20and%20Backstop%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

