---
name: "Day 53 - Event-Driven Claim and Delivery"
about: "Drive a pickup into claim and delivery on the event, not a schedule."
title: "Day 53: Event-Driven Claim and Delivery - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 53: Event-Driven Claim and Delivery

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Claim and deliver a scoped Unity issue from the event path, validating project changes with the Editor/test runner and a desktop build where applicable.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Drive a pickup **the rest of the way** on the event, instead of waiting for a fixed time. When Day 52's poll surfaces a pickup, this day makes the pipeline claim it (Inbox → In Progress, the Day 47 transition) and run delivery (the Day 49 issue-to-PR path) — all triggered by the pickup rather than by the schedule. The event becomes the clock: new water flows through immediately. This is the first day the full autonomous path runs from a triggering event rather than a timer. Separation of duties is unchanged and non-negotiable: the Hermes that delivers the work must not review or approve its own PR.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-RELAY-URL`
- `YOUR-PENDING-TASKS-API-KEY` (held in local Hermes secrets, never in the prompt body)
- `YOUR-GITHUB-HANDLE`
- `YOUR-GITHUB-FOLDER-PATH`

## AI Prompt

```text
Relay URL: YOUR-RELAY-URL
GitHub Handle: YOUR-GITHUB-HANDLE
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Pending Tasks API Key: (held in my local Hermes secrets — do NOT print or paste a value)

Have the pickup flow all the way to a delivered PR for real, triggered by the event and not a schedule.

First, repeat the relay URL, GitHub handle, and repository folder. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Driver: call `GET <YOUR-RELAY-URL>?engineer=YOUR-GITHUB-HANDLE`. Take the OLDEST open pickup (lowest issue number / earliest createdAt). If there is none, page me exactly `[SILENT]` and stop — the event-driven path must not invent work.
2. Fetch the selected issue in full with one `gh issue view <number> --repo <repo>`. Classify CLEAR / BLOCKED (Day 46). If BLOCKED, page the conforming reason and do not proceed.
3. Claim it: confirm it is unclaimed (issue is not already covered by an open branch/PR, project Status is Inbox), transition the project Status Inbox → In Progress (Day 47 GraphQL mutation), verify the transition stuck, record the claim to the local run log.
4. Deliver it: run the Day 49 issue-to-PR path — generate/reuse a handoff, scope to the acceptance criteria, build and validate (typecheck, lint, focused tests, git diff --check), commit to a scoped branch, open a linked PR with `Closes #<number>`, request review, and set the project item to `For Review` only after the PR exists and is verified.
5. Separation of duties: do NOT review or approve the PR you just authored. Leave it OPEN for another engineer's reviewer, a manual reviewer, or guided human review. Report the exact PR URL, validation results, and the base-branch decision.
6. Record the whole event → claim → deliver sequence in the run log with timestamps, and confirm the issue's Status is now `For Review`.

APPROVAL MODE: this run executes under `approvals.cron_mode: deny`. Non-destructive delivery (branch, commit, push, gh pr create/review, typecheck, lint) is allowed. DO NOT use `git push --force`, `git reset --hard`, force branch deletion, or other destructive commands — they are blocked and must never be attempted or bypassed. If the repo genuinely needs a force-push, stop and report the exact blocked command and reason.

Do not merge, self-approve, review your own PR, bypass CI, rewrite the issue body, or expose secrets. A scheduled run may expose its actual operational result and blockers locally; do not create a training report.
```

## Game Data Lane

Use the [game-data variant](Day%2053%20-%20Event-Driven%20Claim%20and%20Delivery%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.
