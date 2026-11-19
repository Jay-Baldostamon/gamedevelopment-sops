---
name: "Week 11 Overview: Event-Driven Pickup and Delivery"
about: "Move from fixed schedules to event-driven task pickup and delivery."
title: "Week 11: Event-Driven Pickup and Delivery"
labels: "training"
assignees: ''
---

# Week 11 Overview: Event-Driven Pickup and Delivery

## Unity Game-Development Track Context

This level or week uses the same desktop 2D C# action-platformer on the current Unity LTS release. The Unity gameplay lane covers scripts, scenes, prefabs, assets, tests, and builds. The former DB lane is now the game data lane for player profiles, save slots, checkpoints, collectibles, unlocks, and leaderboard contracts.

For L3/L4, scheduling, agents, and cloud workers support the Unity repository and build/test pipeline. Use only approved mock or game-specific data, not CRM or unrelated production systems. If a fixture is unavailable, identify the blocker locally and keep the work design-only. Preserve authorization, independent review for actual PRs, and secret-handling controls; no training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Week 11 Overview - Event-Driven Pickup and Delivery |
| Track | training |
| Level | week |
| Owner | Direct Supervisor / Training Team |
| Last Updated | 2026-09-30 |
| Review Cycle | Every 30 days |
| Status | draft |

Week 11 turns Week 10's *fixed-schedule* delivery into **event-driven delivery**: work no longer waits for a 09:30 poll — the moment an assigned issue lands in an Inbox column, the trigger fires and the pipeline reacts. The mental model: Week 9 proved the pipes work; Week 10 turned them on at a set time; Week 11 makes them react the moment there is water.

The mechanism is the **pickup relay**, not a direct webhook into your laptop. GitHub doesn't (and on a dynamic-IP machine can't) reach your local Hermes directly. Instead:

1. GitHub fires a `projects_v2_item` webhook to the always-up server (the same one that already handles `For Review` reviewer auto-assignment). The webhook records a **per-engineer pickup fact** (engineer, issue ref) when an assigned issue's Status becomes an Inbox-style pool status.
2. Your local Hermes **polls that server** with a cheap endpoint (`GET /pending-tasks?engineer=<you>`) — this is the "drink of water" — getting back only task *refs*, not scans.
3. On any pending ref, your Hermes fetches the **one** full issue from GitHub directly (`gh`), then runs the established claim → deliver → review flow (Days 46-49).

This preserves everything Week 10 built while removing the "wait for the schedule" latency, and it solves dynamic-IP inbound and duplicate board scans in one move.

## What to Expect This Week

- Day 51: Verify and understand the event-driven pickup relay — how the server conscribes a pickup from a GitHub webhook and how your local Hermes reads it without taking an inbound connection.
- Day 52: Build the local "drink of water" poll — a cron that checks `pending-tasks?engineer=you` on an interval and pages the conforming one-liner the instant a pickup appears.
- Day 53: Drive a pickup straight into the claim and delivery path — event-triggered instead of time-triggered — preserving separation of duties.
- Day 54: Detect and reconcile **missed events** — a webhook that didn't land or a relay that went stale — using the scheduled backstop and Day 50's "escalate, don't stall".
- Day 55: Rehearse pickup, duplicate-event handling, recovery, and Unity validation locally.

## The Relay Contract (authoritative)

- **Conscribe**: the server records a pickup when a GitHub project item (any project using an Inbox column) transitions to an Inbox status and has an assignee. Written by the webhook; project-agnostic.
- **Read**: `GET /pending-tasks?engineer=<github-handle>` returns only open pickups (`pickedUpAt IS NULL`) as cheap refs (project, issue number, repo, title, status). Auth: `x-api-key` / `Bearer` (server-to-server key; an engineer can only read their own handle).
- **Retain**: when the item leaves Inbox, the server sets `pickedUpAt` (it does **not** delete the row) — an audit of what was conscribed and when it was picked up.
- **Detail**: the local Hermes fetches the full issue from GitHub with `gh`, never from the relay.
- **Backstop**: the scheduled poll (Day 46 cadence) remains as a safety net so a missed/lost webhook never strands a task; Week 11 makes the relay primary and the schedule the backstop.

## Week 11 Success Criteria

- [ ] Engineer can explain the relay in one minute: GitHub hooks the server; the server conscribes a pickup; local Hermes polls a cheap ref and fetches details from GitHub.
- [ ] The local poll checks `pending-tasks?engineer=<me>` on an interval and pages me the instant a pickup appears (conforming one-liner, DM-only).
- [ ] A pickup flows straight into claim (Inbox → In Progress) and delivery (Day 49 path) without waiting for a fixed schedule.
- [ ] No inbound connection is opened on the local machine; no full board scan runs per engineer; secrets never cross the wire.
- [ ] Missed events are detected and reconciled via the scheduled backstop or escalate (no silent stalls).
- [ ] The local event-driven rehearsal checks delivery, duplicate handling, and recovery without a training submission.
- [ ] Separation of duties holds: no authored PR is reviewed or approved by the Hermes (or engineer) that wrote it.

## Guiding Principle

Week 11 is successful when the engineer turns "pick up my next task at 09:30" into "react the moment an in-domain task becomes available" — safely, on a dynamic-IP machine, without an inbound hole, and with the schedule kept as a backstop rather than a crutch.

## Game Data Lane

**Week 11 (Game Data Lane).** Use the provided game-data variants and approved mock fixtures to practice the same pickup, local validation, and recovery behavior. Do not query unrelated production systems, execute DDL, or mutate a live schema.