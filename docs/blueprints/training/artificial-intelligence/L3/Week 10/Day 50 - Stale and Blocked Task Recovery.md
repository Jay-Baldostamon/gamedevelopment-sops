---
name: "Day 50 - Stale and Blocked Task Recovery"
about: "Detect and recover tasks that stalled or got blocked."
title: "Day 50: Stale and Blocked Task Recovery - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 50: Stale and Blocked Task Recovery

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Recover stale or blocked Unity work caused by missing assets, editor/package mismatch, scene conflicts, licensing, or unclear gameplay requirements; escalate instead of guessing.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Add a **recovery pass** to the scheduled pipeline so a task that stalled or got blocked never silently dies. Define what "stale" and "blocked" mean, have Hermes detect them on the schedule, and route each case to the right outcome — re-run, reassign, page the owner, or escalate. The principle for L3: **escalate, don't stall.** A stuck task must become a visible, paged decision, not a quiet dead-end.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-SCHEDULE` (recovery cadence, e.g. `every day at 17:00`)

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Recovery Schedule: YOUR-SCHEDULE

Set up a recovery pass for my scheduled task pipeline and prove it detects and resolves stale/blocked tasks.

First, repeat the repository folder and recovery schedule. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Define "stale" and "blocked" explicitly with me. Suggested baseline (adjust as we agree): a task is STALE when it has been claimed (Day 47) but shows no activity for N days; BLOCKED when it carries an explicit blocker — a missing requirement, an unavailable dependency, a repeated failure, or a dependency on an unmerged PR.
2. Enumerate the recovery outcomes and their triggers clearly: STALE → re-page the owner (conforming one-liner, Day 47 discipline) or auto-reassign after a set threshold; BLOCKED_with_missing_baseline → page "needs requirements"; BLOCKED_on_dependency → note the dependency and do not duplicate; repeated failure → escalate to a human with evidence. Show me the outcome table before building.
3. Implement the recovery pass as a scheduled job on YOUR-SCHEDULE that scans the pipeline's task log + issue state, classifies each open task stale/blocked/healthy, and applies the agreed outcome (page, reassign, or escalate).
4. Run it once now against the current task queue and show the real classifications and any pages/escalations it produces.
5. Confirm the recovery decisions record to the run log and that the pass repeats unattended on YOUR-SCHEDULE.

Recovery never mutates the worktree or issues destructively; reassignment and paging are the allowed actions. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane

Use the [game-data variant](Day%2050%20-%20Stale%20and%20Blocked%20Task%20Recovery%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

