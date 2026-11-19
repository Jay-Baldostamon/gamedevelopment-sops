---
name: "Day 42 - Hermes Scheduling Setup"
about: "Configure local Hermes to run a review on a recurring schedule."
title: "Day 42: Hermes Scheduling Setup - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 42: Hermes Scheduling Setup

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Schedule local agent runs that inspect assigned Unity issues/PRs and record their run evidence without launching Unity builds outside the approved environment.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Set up local Hermes automated scheduling so a review can run on a recurring cadence **without being launched by hand**, and confirm every run records to a run log you can inspect later. This is the first L3 step that changes who initiates the work: instead of you typing a prompt, the schedule starts the job. You will verify your local Hermes has a scheduling (cron) capability, create your first scheduled automated review job, run it once to prove the pipeline, and confirm it wrote a run record.

The scheduled job runs the inform-only review discipline from Day 24 against the assigned target. It must not modify code, change the worktree, commit, push, merge, alter CI, or change permissions. It records real validation output as evidence.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-PR-NUMBER-OR-URL` (the assigned review target)
- `YOUR-SCHEDULE` (e.g. `daily 09:00` or `weekdays 08:00`)

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Pull Request: YOUR-PR-NUMBER-OR-URL
Schedule: YOUR-SCHEDULE

Help me configure this local Hermes to run an automated, evidence-based, inform-only review of the pull request above on the schedule I specify — automatically, without me launching it by hand.

First, repeat the repository folder, pull request, and schedule. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Verify this local Hermes has a scheduling/cron capability and describe how it stores jobs and where it records run output/logs. If scheduling is not available, stop and return the exact remediation needed.
2. Confirm the inform-only review skills (Day 24 discipline) are installed and loadable in a scheduled session. If unavailable, stop and return the required remediation.
3. Create ONE scheduled job that runs the inform-only review against YOUR-PR-NUMBER-OR-URL on YOUR-SCHEDULE. The job must enforce inform-only behavior: inspect, validate, and report only; it must not modify code, change the worktree, commit, push, merge, alter CI, or change permissions.
4. Run the scheduled job once now (manually trigger that single instance) to prove the pipeline works, and show me the real output.
5. Confirm the run recorded to the run log and tell me exactly where to find that log for Day 44 and Day 45.

Do not send any notification to my Slack pager yet; that is covered on Day 43 and Day 44. Do not modify the installed review skills. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane

Use the [game-data variant](Day%2042%20-%20Hermes%20Scheduling%20Setup%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

