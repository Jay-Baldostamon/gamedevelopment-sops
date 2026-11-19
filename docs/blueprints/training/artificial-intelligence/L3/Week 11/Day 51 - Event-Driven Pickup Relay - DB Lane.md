---
name: "Day 51 - Event-Driven Pickup Relay (Game Data Lane)"
about: "Verify the event-driven pickup relay for a game data engineer."
title: "Day 51: Event-Driven Pickup Relay - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 51: Event-Driven Pickup Relay (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Relay an approved Unity issue event to the local pickup workflow and retain traceable identifiers without sending code or secrets through notifications.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Understand and verify the **event-driven pickup relay** for a game data engineer. The server receives a GitHub `projects_v2_item` webhook, records a per-engineer pickup fact when an assigned issue's Status becomes an Inbox-style pool status, and exposes a cheap per-engineer read endpoint. Your local Hermes polls it for a task *ref*, then fetches the referenced objects **read-only via MCP** (`approved game-data MCP tools`). Same relay as the standard lane; the difference is what "fetch the detail" means. This day proves the relay works for you before you build the local poll on Day 52. Schema/DBA execution stays human-owned via approved game-data sandbox.

> Authenticate with your own server-to-server key. You may only ever read **your own** handle from the relay; never fabricate or share a key that could read another engineer's pending pickups.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-RELAY-URL` (e.g. `https://<your-org-server>/api/pending-tasks`)
- `YOUR-PENDING-TASKS-API-KEY` (your scoped key held in local Hermes secrets, never in the prompt body)
- `YOUR-GITHUB-HANDLE`

## AI Prompt

```text
Relay URL: YOUR-RELAY-URL
Pending Tasks API Key: (held in my local Hermes secrets — do NOT print or paste a value)
GitHub Handle: YOUR-GITHUB-HANDLE

Help me verify the event-driven pickup relay end-to-end for my own handle, read-only, without taking any inbound connection.

First, repeat the relay URL and GitHub handle. If either still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Explain to me, in two sentences of plain language, how a GitHub `projects_v2_item` webhook becomes a pickup I can poll — GitHub → server conscribes → my local poll reads the ref.
2. Confirm the pickups endpoint returns: (a) 401 without a key, (b) 401 with a wrong key, (c) MY pending pickups only with the correct key. For (c), pass `?engineer=YOUR-GITHUB-HANDLE`, using the key from my local secret store and never printing it.
3. Verify the fields returned are cheap refs only — project, issue number, repo, title, status — with no board scan or issue body.
4. If I have a pending pickup, confirm the referenced objects exist **read-only via MCP** (`approved game-data schema-description tool`, `approved game-data schema-definition tool`, `approved game-data read-only query tool`). If the endpoint is empty, confirm that is consistent with no assigned issue having recently transitioned into Inbox.
5. Confirm to me the exact read-only MCP calls I will use on Day 52 to fetch the full detail of the conscribed task.

Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets. Do not open any inbound port or tunnel. No schema mutation, no DDL; execution stays human-owned via approved game-data sandbox. If your local Hermes is not yet configured with the relay key, stop and tell me exactly what secret variable to set (name only) before proceeding.
```

## Game Data Lane Note

This is the game-data-lane variant of Day 51. The relay read is identical to the standard lane; only the detail-fetch differs (MCP read-only vs GitHub CLI).