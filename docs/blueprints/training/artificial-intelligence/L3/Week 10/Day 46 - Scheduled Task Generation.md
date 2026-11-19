---
name: "Day 46 - Scheduled Task Generation"
about: "Have Hermes generate development tasks from a queue on a schedule."
title: "Day 46: Scheduled Task Generation - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 46: Scheduled Task Generation

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Generate scheduled Unity project tasks from approved backlog themes such as movement, checkpoints, accessibility, and build reliability; do not invent requirements.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Set up Hermes to **generate your next development task on a schedule** from your unclaimed, in-domain pool — a GitHub project's **Inbox** column, filtered to items already assigned to you — so work flows to you without anyone summoning it by hand. The **assignee filter keeps the task in your domain**: Hermes only ever surfaces tasks already assigned to this engineer and never pulls unassigned or out-of-domain issues, so you stay familiar with what you're picking up and can guide the AI on novel cases. This is the first scheduled-delivery step: Hermes picks the next *unclaimed* task deterministically, checks it is genuinely ready (has requirements and acceptance criteria, not already started or covered), and records the choice — it does **not** transition the issue's status (that is Day 47's claim). Do not create branches or begin implementation yet; the deliverable of this day is a repeatable, deterministic task-selection job you can watch run.

The queue condition is **Status = "Inbox"** (the unclaimed pool), not "In Progress" (already claimed). Claiming is a separate step.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-PROJECT-NUMBER` (the GitHub project your tasks live in, e.g. `5`)
- `YOUR-GITHUB-ORG` (e.g. `hurdman`)
- `YOUR-SCHEDULE` (e.g. `weekdays 09:30`)

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Project: PROJECT-NUMBER (URL)
Schedule: YOUR-SCHEDULE
Engineer = the current Hermes GitHub identity (e.g. gh api user -> .login).

Set up a scheduled job that picks my next development task deterministically from my UNCLAIMED, in-domain pool, and prove it works.

My queue condition is the GitHub project's Status single-select field == "Inbox" (the unclaimed pool) AND Assignees contains the current engineer (this Hermes user). The assignee filter is what keeps the task in my domain: only surface tasks already assigned to me, never unassigned or out-of-domain issues. I stay familiar with what I pick up so I can guide the AI on novel cases.

IMPORTANT: selection is separate from claiming. Do NOT transition any issue's status in this job; claiming (Inbox -> In Progress) is Day 47.

First, repeat the repository folder, project, and schedule. If any value still contains a YOUR- or PROJECT- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the local Hermes scheduling (cron) capability is available in a scheduled session (Day 42 foundation).
2. Define the deterministic selection rule explicitly with me: from My Project's Inbox, assigned to me, prefer issues with explicit requirements and acceptance criteria, in a stable order (lowest issue number / oldest first), skipping any already covered by an open branch/PR. Show me the rule.
3. Create ONE scheduled job on YOUR-SCHEDULE that: (a) reads the project via the GitHub GraphQL API and lists candidate issues where Status == "Inbox" AND Assignees contains the current engineer, (b) applies the selection rule, (c) classifies the chosen issue CLEAR or BLOCKED (missing baseline, already covered, duplicate), and (d) records the chosen issue URL, classification, and reason to a local run log. It must not transition status, create branches, start implementation, or edit issues.
4. Run the job once on demand now and show me the real selected task and its classification.
5. Confirm where the run log lives and that the job fires unattended on YOUR-SCHEDULE, ready for the Day 47 claim.

Do not modify the worktree, create branches, commit, push, merge, alter CI, change permissions, or modify issues. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane

Use the [game-data variant](Day%2046%20-%20Scheduled%20Task%20Generation%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

