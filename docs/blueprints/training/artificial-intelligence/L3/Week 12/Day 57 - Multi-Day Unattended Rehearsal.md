---
name: "Day 57 - Multi-Day Unattended Rehearsal"
about: "Run the assembled orchestrator unattended over several days."
title: "Day 57: Multi-Day Unattended Rehearsal - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 57: Multi-Day Unattended Rehearsal

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Rehearse unattended Unity issue processing over multiple days using test/sandbox tasks; verify build capacity, logs, deduplication, and escalation.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Prove the **assembled orchestrator runs unattended** for multiple days with **zero human touch**. Set the Day 56 orchestrator going on its cadence and leave it. Over the rehearsal window it should: claim+deliver every pickup that flows to you, handle every review queued to you, page only on genuine novel/blocked/recovery events — and otherwise stay silent. At the end, walk through the run log to confirm it actually ran the whole loop unattended. This is the trust exercise: the machine proves it can be left alone.

> This is a rehearsal, but it exercises the real orchestrator against real queues. Do NOT disable or fake anything — run it genuinely and review the evidence honestly. If it pages on nothing and delivers everything, that is the pass.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-ORCHESTRATOR-JOB` (the Day 56 job, by ID or name)
- `YOUR-GITHUB-HANDLE`
- `YOUR-REHEARSAL-DURATION` (e.g. `3 days`)
- `YOUR-RUN-LOG-PATH` (the orchestrator's single run log from Day 56)
- `YOUR-REVIEW-DURATION` (how long after the rehearsal you'll inspect it, e.g. `the next morning`)

## AI Prompt

```text
Orchestrator Job: YOUR-ORCHESTRATOR-JOB
GitHub Handle: YOUR-GITHUB-HANDLE
Rehearsal Duration: YOUR-REHEARSAL-DURATION
Run Log Path: YOUR-RUN-LOG-PATH

Help me run a multi-day UNATTENDED rehearsal of my assembled orchestrator and verify it held without me.

First, repeat the orchestrator job, rehearsal duration, and run log path. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the orchestrator (Day 56) is scheduled on its cadence and enabled. Report its schedule and last-run status.
2. Confirm the rehearsal window (YOUR-REHEARSAL-DURATION, starting now) has clean coverage: if the cadence leaves gaps (e.g. I am away on a day the cascade should run), confirm it is not a blocking gap given the backstop (Day 54).
3. Run the rehearsal on the real loop. Throughout, do NOT page a human for routine work; the only pages allowed are genuine novel/blocked/recovery escalations. Record each run's action in the run log.
4. AFTER the rehearsal window (at YOUR-REVIEW-DURATION), open the run log and REPLAY it: for every entry, state the timestamp, which stream (delivery or review), what the orchestrator did, and the classification. Confirm that: (a) every delivery-stream pickup was claimed and delivered (or escalated per Day 50), (b) every review-stream item was classified and either approved/changes-requested quietly or paged if novel/blocked, and (c) nothing stalled silently.
5. Produce a rehearsal verdict: PASS (all held, no human touch required, every item handled or escalated) or FAIL (something stalled silently or required you to intervene). If FAIL, list exactly which item and what to fix.
6. Tell me the total counts: deliveries completed, reviews handled, novel pages, blocked pages, and any silent-stall count (target zero).

Do not take destructive action, do not retire any job, do not merge or self-approve. This is observation and honest verification of the unattended run. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane

Use the [game-data variant](Day%2057%20-%20Multi-Day%20Unattended%20Rehearsal%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

