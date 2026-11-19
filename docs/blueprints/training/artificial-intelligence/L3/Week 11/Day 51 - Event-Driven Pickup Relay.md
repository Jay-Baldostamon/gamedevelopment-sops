---
name: "Day 51 - Event-Driven Pickup Relay"
about: "Verify and understand the event-driven pickup relay."
title: "Day 51: Event-Driven Pickup Relay - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 51: Event-Driven Pickup Relay

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Relay an approved Unity issue event to the local pickup workflow and retain traceable identifiers without sending code or secrets through notifications.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Understand and verify the **event-driven pickup relay** — the bridge that lets a GitHub `projects_v2_item` webhook reach your local Hermes without an inbound connection to your dynamic-IP machine. The server (the always-up host that already handles `For Review` reviewer auto-assignment) receives the webhook, records a **per-engineer pickup fact** when an assigned issue's Status becomes an Inbox-style pool status, and exposes a cheap per-engineer read endpoint. Your local Hermes polls that endpoint for a task *ref*, then fetches the full issue from GitHub directly. This day is about proving the relay works for **you** before building the local poll on Day 52.

> Authenticate with your own server-to-server key. You may only ever read **your own** handle from the relay; never fabricate or share a key that could read another engineer's pending pickups. Your key is **provisioned by your supervisor** on the admin form (`/admin/pending-tasks` — one per engineer, `ptk_…`, shown once, SHA-256 hashed at rest) and held in your local Hermes `.env` as `PENDING_TASKS_API_KEY`. If you do not have one yet, ask your supervisor to issue it before starting this day.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-RELAY-URL` (e.g. `https://<your-org-server>/api/pending-tasks`)
- `YOUR-PENDING-TASKS-API-KEY` (your scoped server-to-server key held in your local Hermes secrets, never in the prompt body)
- `YOUR-GITHUB-HANDLE`

## AI Prompt

```text
Relay URL: YOUR-RELAY-URL
Pending Tasks API Key: (held in my local Hermes secrets — do NOT print or paste a value)
GitHub Handle: YOUR-GITHUB-HANDLE

Help me verify the event-driven pickup relay end-to-end for my own handle, without taking any inbound connection.

First, repeat the relay URL and GitHub handle. If either still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Explain to me, in two sentences of plain language, how a GitHub `projects_v2_item` webhook becomes a pickup I can poll — name the three hops (GitHub → server conscribes → my local poll reads the ref).
2. Confirm the pickups endpoint returns: (a) 401 without a key, (b) 401 with a wrong key, (c) MY pending pickups only with the correct key. Use the key only from my local secret store, never printing it. For (c), pass `?engineer=YOUR-GITHUB-HANDLE`.
3. Verify the fields returned are cheap refs only — project, issue number, repo, title, status — and that NO full board scan or issue body is included.
4. If I have a pending pickup, show it (issue number + title) and confirm it matches an assigned issue currently sitting in Inbox on the board. If the endpoint is empty, confirm that is consistent with "no issue I am assigned to has *recently transitioned into* Inbox" (pickups are written on transition, not on snapshot).
5. Confirm to me, with the exact command, how I will fetch the FULL issue on Day 52 using the gitHub CLI — a single `gh` call for that one issue — so I never scan the whole project from my machine.

Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets. Do not open any inbound port or tunnel. If your local Hermes is not yet configured with the relay key, stop and tell me exactly what secret variable to set (name only) before proceeding.
```

## Game Data Lane

Use the [game-data variant](Day%2051%20-%20Event-Driven%20Pickup%20Relay%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

