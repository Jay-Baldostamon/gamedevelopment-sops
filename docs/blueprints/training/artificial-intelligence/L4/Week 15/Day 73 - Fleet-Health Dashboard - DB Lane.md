---
name: "Day 73 - Fleet-Health Dashboard (Game Data Lane)"
about: "Surface DB instance poll signals as a passive fleet-health dashboard."
title: "Day 73: Fleet-Health Dashboard - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 73: Fleet-Health Dashboard (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Build a passive health view for Unity automation: worker availability, Editor/test/build outcomes, queue age, failure rates, and stale runs.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Stand up the **fleet-health dashboard** for DB instances — identical to the standard lane, where the concern window applies to game-data evidence-arc polling too. Read-only for the agent; no schema mutation, no DDL; execution stays human-owned via approved game-data sandbox. Key facts: the always-up relay already records each instance's polling; expose it as a passive login-viewable gauge (NOT realtime paging); ~1 week without a poll = concern (broken or no remaining work, worth a human look).

## Variables to Change in the AI Prompt Before Sending

- `YOUR-FLEET-DASHBOARD-URL`
- `YOUR-RELAY-URL`
- `YOUR-CONCERN-WINDOW-DAYS` (default 7)
- `YOUR-INSTANCE-LIST` (the DB instances/engineers to show)

## AI Prompt

```text
Fleet Dashboard URL: YOUR-FLEET-DASHBOARD-URL
Relay URL: YOUR-RELAY-URL
Concern Window Days: YOUR-CONCERN-WINDOW-DAYS
Instance List: YOUR-INSTANCE-LIST

Surface each DB instance's poll signal as a passive fleet-health dashboard on EngineeringMCP.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the poll signal already exists at YOUR-RELAY-URL (each DB instance's evidence-arc polling / pager enqueue) — reuse it, do not build a new signal.
2. Build/expose a PASSIVE dashboard at YOUR-FLEET-DASHBOARD-URL showing per DB instance in YOUR-INSTANCE-LIST the last-polled timestamp and a health gauge, viewable by any logged-in user.
3. Confirm it is NOT realtime paging — a login-viewable report gauge, no minutes-level alarm.
4. Encode the concern rule: no poll for >= YOUR-CONCERN-WINDOW-DAYS (default 7) = flagged concern (broken or no game-data work left — worth a human look); flag is a report entry, not a page.
5. Verify a recently-polling DB instance shows healthy and a simulated stale window would flag.

Show me: the dashboard, per-instance gauges, the concern-window rule, and confirmation it is passive.

Do not build realtime paging or alarms. Do not execute DDL, mutate schema, or stage a change. Do not expose secrets.
```

## Game Data Lane Note

This is the game-data-lane variant of Day 73.
