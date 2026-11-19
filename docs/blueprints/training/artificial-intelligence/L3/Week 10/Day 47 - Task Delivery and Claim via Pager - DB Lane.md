---
name: "Day 47 - Task Delivery and Claim via Pager (Game Data Lane)"
about: "Receive the day's game-data task on your pager and claim it locally (game data lane)."
title: "Day 47: Task Delivery and Claim via Pager - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 47: Task Delivery and Claim via Pager (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Deliver and claim a scheduled Unity issue through the approved workflow, then verify the local project and acceptance criteria before implementation.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Close the game-data delivery-and-claim loop: Hermes delivers the day's game-data task to you on the Artemis pager as a conforming one-liner, and you claim it back at your local Hermes after confirming the referenced objects are ready via MCP (read-only). Schema/DBA execution remains human-owned via approved game-data sandbox.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-DB-TASK-ISSUE-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
DB Task Issue: YOUR-DB-TASK-ISSUE-URL

Help me close the delivery-and-claim loop for my Day 46 game-data task over the shared Artemis pager (game data lane).

First, repeat the repository folder and issue URL. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the shared Artemis pager routes to my DM only, chat:write + im:write scopes, no event subscriptions, no channels (Day 41 discipline). If misconfigured, return the exact Day 41 remediation.
2. Apply Day 43 routing: produce the exact conforming pager one-liner `<IDENTIFIER> is ready — help me start`. No schema, no connection info, no raw values, no secrets.
3. Send it to my Artemis DM (via the shared pager's self-only enqueue) and verify it delivered to me only.
4. Claim-back step: confirm the game-data task issue still matches Day 46 selection; confirm the referenced objects exist via MCP (read-only) (`approved game-data schema-description tool`, `approved game-data schema-definition tool`, `approved game-data read-only query tool`); record the claim in the local run log (issue URL, claimed-by, timestamp, run location).
5. Tell me the local log path where the claim is recorded.
6. Do NOT begin any schema change or gather evidence beyond readiness.

The task stays inform-only: no schema mutation, no DDL; execution is human-owned via approved game-data sandbox. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```
