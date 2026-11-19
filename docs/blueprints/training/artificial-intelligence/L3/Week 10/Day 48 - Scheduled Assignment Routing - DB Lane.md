---
name: "Day 48 - Scheduled Assignment Routing (Game Data Lane)"
about: "Route game-data tasks to the right game data engineer automatically (game data lane)."
title: "Day 48: Scheduled Assignment Routing - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 48: Scheduled Assignment Routing (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Route game tasks by skill area (gameplay C#, Unity scenes/assets, game data, or build pipeline) while preserving ownership and authorization boundaries.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Wire the scheduled game-data task job to route each generated game-data task to the correct game data engineer automatically (by `db-lane` label and engineer identity), resolve the owner's Slack user ID for pager delivery, and record assignee + reason per task. Schema/DBA execution stays human-owned via approved game-data sandbox.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-ROUTING-RULE`
- `YOUR-ASSIGNEE-SLACK-USER-ID`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Routing Rule: YOUR-ROUTING-RULE
Assignee Slack User ID: YOUR-ASSIGNEE-SLACK-USER-ID

Set up automatic assignment routing for my scheduled game-data task pipeline and prove it routes correctly (game data lane).

First, repeat the repository folder, routing rule, and assignee Slack user ID. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Define the routing rule explicitly and confirm it before building: game-data tasks map to the correct game data engineer by the `db-lane` label, stack/lane, or cohort/level. Deterministic and auditable (a reason per assignment).
2. Identify how the Day 46 game-data task job reads an assignment hint (label, assignee field, or cohort/level mapping). If none exists, skip or fall back to an explicit default — state which.
3. Extend or create the routing step so each selected game-data task is assigned one owner with a recorded reason, resolving the owner's Slack user ID for pager delivery.
4. Verify with a real Day 46 DB candidate: routing resolves YOUR-ASSIGNEE-SLACK-USER-ID and a conforming pager one-liner (Day 43/47) can be delivered. Do not send a needless page.
5. Confirm routing decisions record to the local run log (assignee + reason per task) and the select → assign → deliver pipeline runs on schedule without manual triage.

The task stays inform-only: no schema mutation, no DDL. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```
