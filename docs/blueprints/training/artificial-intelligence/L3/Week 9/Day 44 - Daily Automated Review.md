---
name: "Day 44 - Daily Automated Review"
about: "Let Hermes review automatically on a schedule; only surface what needs you."
title: "Day 44: Daily Automated Review - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 44: Daily Automated Review

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Run the scheduled inform-only review against Unity C#, scene/prefab, and build changes; verify it creates no repository mutations.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Turn on the daily inform-only review from Day 42/24 and let it run **by itself on the schedule** — no prompt from you each day. On routine findings Hermes completes the review, writes evidence to the local run log, and stays quiet (per the Day 43 routing rule, a routine summary either stays local or is a minimal digest at most). The value of this day is that the work *happens without you initiating it* and that you can trust the routine path needs no eyes.

You will schedule the daily job if not already scheduled, let it fire naturally (and once on demand to observe), confirm its evidence, and check the page discipline holds: nothing non-conforming reaches the pager.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-PR-NUMBER-OR-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Pull Request: YOUR-PR-NUMBER-OR-URL

Help me run my daily automated inform-only review for the pull request above and verify it works unattended.

First, repeat the repository folder and pull request. If either still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the Day 42 scheduled inform-only review job is enabled and set to run daily on my chosen schedule. If it is not yet scheduled, create it now per the Day 42 discipline.
2. Run one instance on demand now and show me the real output, so we both see today's review result.
3. Confirm the run wrote evidence to the local run log (same location as Day 42) and tell me exactly where.
4. Apply Day 43 routing: for a ROUTINE result (the review completed with no verified blocking gap requiring me), keep the notification minimal — confirm that either no DM is sent or only the conforming `IDENTIFIER is <STATUS> — reason` one-liner is sent. It must not contain secrets, diffs, or full findings.
5. Walk me through how to read tomorrow's unattended run from the log without launching Hermes by hand, so I can check the daily result each morning.
6. Confirm the daily cadence will continue without me starting it: list the schedule, the job's enabled state, and where its runs accumulate.

The review remains inform-only: no code changes, no worktree changes, no commits, no pushes, no merges, no CI changes, no permission changes. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane

Use the [game-data variant](Day%2044%20-%20Daily%20Automated%20Review%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

