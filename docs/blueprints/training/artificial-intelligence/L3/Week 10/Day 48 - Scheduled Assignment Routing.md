---
name: "Day 48 - Scheduled Assignment Routing"
about: "Route generated tasks to the right engineer/cohort automatically."
title: "Day 48: Scheduled Assignment Routing - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 48: Scheduled Assignment Routing

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Route game tasks by skill area (gameplay C#, Unity scenes/assets, game data, or build pipeline) while preserving ownership and authorization boundaries.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Wire the scheduled task job to route each generated task to the **right engineer or cohort** automatically. Define how a task maps to an assignee, then verify the routing with an authorized test task. No training report is involved.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-ROUTING-RULE` (e.g. by label, stack lane, cohort, or availability)
- `YOUR-ASSIGNEE-SLACK-USER-ID` (your own, for verification)

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Routing Rule: YOUR-ROUTING-RULE
Assignee Slack User ID: YOUR-ASSIGNEE-SLACK-USER-ID

Set up automatic assignment routing for my scheduled task pipeline and prove it routes correctly.

First, repeat the repository folder, routing rule, and assignee Slack user ID. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Define the routing rule explicitly and show it to me for confirmation before building anything. The rule maps a generated task to the correct assignee: e.g. by stack/lane label, by cohort or level focus, or by availability/load. It must be deterministic and auditable (a reason for each assignment).
2. Identify how the scheduled task job from Day 46 can read an assignment hint for each candidate task (for example a label, assignee field, or configured cohort mapping). If no hint exists, define whether to skip the task or use an explicit default.
3. Extend or create the routing step so that each Day 46 selected task is also assigned one owner with a recorded reason, and the owner's Slack user ID is resolved for pager delivery.
4. Verify end-to-end with a real Day 46 candidate: confirm the routing step resolves YOUR-ASSIGNEE-SLACK-USER-ID correctly and that a conforming pager one-liner (Day 43/47 discipline) could be delivered to that ID. Do not send a needless page if none is due.
5. Confirm the routing decisions are recorded to the same local run log as Day 46/47, with assignee + reason per task, and that the whole pipeline (select → assign → deliver) runs on the schedule without manual triage.

Do not modify the worktree, create branches, commit, push, merge, alter CI, or change permissions. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane

Use the [game-data variant](Day%2048%20-%20Scheduled%20Assignment%20Routing%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.
