---
name: "Day 50 - Stale and Blocked Task Recovery (Game Data Lane)"
about: "Detect and recover stale/blocked game-data tasks (game data lane)."
title: "Day 50: Stale and Blocked Task Recovery - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 50: Stale and Blocked Task Recovery (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Recover stale or blocked Unity work caused by missing assets, editor/package mismatch, scene conflicts, licensing, or unclear gameplay requirements; escalate instead of guessing.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Add a recovery pass for the scheduled game-data task pipeline so a stalled or blocked game-data task never silently dies. Define stale/blocked, detect them on a schedule, and route each case to the right outcome (re-page, reassign, or escalate). Escalate, don't stall. Recovery stays inform-only: no mutation, no DDL.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-RECOVERY-SCHEDULE`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Recovery Schedule: YOUR-RECOVERY-SCHEDULE

Set up a recovery pass for my scheduled game-data task pipeline and prove it detects and resolves stale/blocked game-data tasks.

First, repeat the repository folder and recovery schedule. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Define "stale" and "blocked" for game-data tasks with me: STALE = claimed (Day 47) with no activity for N days; BLOCKED = missing scope, unknown object confirmed via MCP, dependency on an unmerged PR, or repeated evidence-gathering failure.
2. Enumerate outcomes in a table before building: STALE → re-page owner or reassign after a threshold; BLOCKED_missing_scope → page "needs requirements/objects"; BLOCKED_on_dependency → note dependency, do not duplicate; repeated failure → escalate to human with evidence.
3. Implement the recovery pass on YOUR-RECOVERY-SCHEDULE: scan the game-data task log + issue state, classify each task, apply the outcome (page/reassign/escalate).
4. Run it once now and show real classifications and any pages/escalations.
5. Confirm decisions record to the run log and the pass repeats unattended.

Recovery is inform-only: no schema mutation, no DDL; execution stays human-owned via approved game-data sandbox. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```
