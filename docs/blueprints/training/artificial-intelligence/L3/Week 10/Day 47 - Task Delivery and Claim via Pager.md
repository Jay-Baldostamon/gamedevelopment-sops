---
name: "Day 47 - Task Delivery and Claim via Pager"
about: "Receive the day's task on your pager and claim it back at local Hermes."
title: "Day 47: Task Delivery and Claim via Pager - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 47: Task Delivery and Claim via Pager

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Deliver and claim a scheduled Unity issue through the approved workflow, then verify the local project and acceptance criteria before implementation.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Have Hermes **deliver the day's generated task to you over the pager** (Artemis DM) and teach you the claim-back loop: the pager tells you *which* task is ready and *why*; you then return to your local Hermes, open the indexed run, and formally **claim** the task by transitioning its project Status from **Inbox → In Progress** and recording the claim. This is the L3 interaction pattern in full: the schedule picked it (Day 46), the pager surfaced it, and the claim — an actual, visual board transition — happens at your local Hermes, never from Slack.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-ISSUE-URL` (the task generated on Day 46)

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Issue: YOUR-GITHUB-ISSUE-URL

Help me close the delivery-and-claim loop for my Day 46 task over the shared Artemis pager.

First, repeat the repository folder and issue URL. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the shared Artemis pager routes to my DM only, with only chat:write + im:write scopes, no event subscriptions, no channels (Day 41 discipline). If misconfigured, stop and return the exact Day 41 remediation.
2. Apply Day 43 routing: craft the exact conforming pager one-liner for the Day 46 task: `<IDENTIFIER> is ready — help me start`. The identifier is the issue or run ID; the one-liner contains only the identifier and a short reason, no secret, no diff, no full detail.
3. Send that one-liner to my Artemis DM (via the shared pager's self-only enqueue) and verify it was delivered to me and to no one else.
4. Now act as the claim-back step: confirm the task (YOUR-GITHUB-ISSUE-URL) still matches the Day 46 selection (requirements/acceptance criteria present, not already covered by an open branch/PR, and its project Status is still Inbox). Then CLAIM it: transition its project Status from **Inbox → In Progress** via the GitHub GraphQL API, verify the transition stuck (re-read the Status field), and record the claim in the local run log — issue URL, claimed-by (me), claim timestamp, and the exact run location. This Inbox → In Progress transition IS the claim: paged → found locally → claimed.
5. Tell me the exact local log path where this claim is recorded, so when I sit down I can open the run that the pager pointed to.
6. Do NOT begin implementation, create branches, commit, push, or open PRs — the claim is the deliverable of this day.

Do not submit a GitHub review, merge, push, change CI, or change permissions. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane

Use the [game-data variant](Day%2047%20-%20Task%20Delivery%20and%20Claim%20via%20Pager%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

