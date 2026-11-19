---
name: "Day 73 - Fleet-Health Dashboard"
about: "Surface each instance's poll signal as a passive dashboard on EngineeringMCP."
title: "Day 73: Fleet-Health Dashboard - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 73: Fleet-Health Dashboard

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Build a passive health view for Unity automation: worker availability, Editor/test/build outcomes, queue age, failure rates, and stale runs.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Stand up the **fleet-health dashboard** on EngineeringMCP: a passive, login-viewable report of each instance's last-polled signal. From the resolved L4 plan (Decision 12): the always-up relay already sees each engineer's polling (pickups / pager enqueue). Keep it there and expose a "fleet health / last polled" report dashboard that anyone who can log in may view. It is NOT realtime paging — a report gauge is enough. A reasonable concern threshold: **~1 week without a poll** — signals either something is broken or there is no remaining work (both worth a human look), not a minutes-level alarm.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-FLEET-DASHBOARD-URL` (the EngineeringMCP fleet-health page)
- `YOUR-RELAY-URL` (the hub endpoint that already sees each instance's polling)
- `YOUR-CONCERN-WINDOW-DAYS` (default 7)
- `YOUR-INSTANCE-LIST` (the instances/engineers to show, e.g. comma-separated handles)

## AI Prompt

```text
Fleet Dashboard URL: YOUR-FLEET-DASHBOARD-URL
Relay URL: YOUR-RELAY-URL
Concern Window Days: YOUR-CONCERN-WINDOW-DAYS
Instance List: YOUR-INSTANCE-LIST

Surface each instance's poll signal as a passive fleet-health dashboard on EngineeringMCP.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the poll signal already exists: the always-up relay (YOUR-RELAY-URL) already records each instance's polling (pickups / pager enqueue). Do not build a new signal from scratch — reuse the existing one.
2. Build/expose a PASSIVE dashboard at YOUR-FLEET-DASHBOARD-URL showing, per instance in YOUR-INSTANCE-LIST, the last-polled timestamp and a health gauge. Any user who can log in may view it.
3. Confirm it is NOT realtime paging — it is a login-viewable report gauge, no minutes-level alarm.
4. Encode the concern rule: an instance with no poll for >= YOUR-CONCERN-WINDOW-DAYS (default 7) days is flagged as a concern — it signals either something is broken or there is no remaining work (both worth a human look). Confirm the flag is a report entry, not a page.
5. Verify against the live relay behavior that a recently-polling instance shows healthy and a simulated stale window would flag.

Show me: the dashboard page, the per-instance last-polled gauges, the concern-window rule implemented, and confirmation it is passive (no realtime paging).

Do not build realtime paging or alarms. Do not take destructive action. Do not expose secrets.
```

## Game Data Lane

Use the [game-data variant](Day%2073%20-%20Fleet-Health%20Dashboard%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

