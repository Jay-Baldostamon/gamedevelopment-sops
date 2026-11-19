---
name: "Day 56 - Assembled Multi-Stage Workflow"
about: "Build one orchestrator that runs both the delivery and review streams."
title: "Day 56: Assembled Multi-Stage Workflow - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 56: Assembled Multi-Stage Workflow

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Assemble the scheduled Unity review, issue pickup, implementation, validation, PR, and review stages into one bounded workflow with explicit failure stops.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Assemble every stage built across Weeks 9–11 into **one orchestrating, multi-stage workflow** that runs two streams in a single loop:

- **Delivery stream (authored work):** Week 11 relay pickup → **claim (Inbox → In Progress)** → **offload heavy work to a durable one-shot cron job (delivery worker)** → deliver (Day 49 issue-to-PR path) → `For Review` (auto-assigns the supervisor as reviewer) → recover (Day 50). Tasks that flow to *you* to build. **The decision to work a task is made at assignment time** (with the engineer's consent, in meetings) — so once a task is assigned and sitting in Inbox it has already been decided, and the orchestrator works it autonomously from there, paging only at a genuinely novel/vague fork (Day 45) that changes the outcome. It does **not** page to ask whether to start.
- **Review stream (review queue):** open PRs from **other engineers** whose `reviewers` field includes you. Your Hermes reviews that work inform-only (never your own). Routine stays quiet; novel (Day 45) and blocked (Day 50) page.

**The poll never runs heavy work inline.** Cron runs are under an inactivity watchdog (`HERMES_CRON_TIMEOUT`, default 600s — a long blocking build with no API activity is killed if it outruns the limit). Delivery therefore uses the **claim → offload** pattern: the poll claims fast (Inbox→In Progress), then schedules a **durable one-shot delivery cron job** (`hermes cron create "in 1m" … --repeat 1`): the delivery runs in its own scheduler-owned process with its own watchdog budget, survives the poll's teardown, and auto-removes after one run. The poll returns immediately after scheduling; the worker delivers to completion and reports the PR URL back. Proven caveat: **do NOT offload with `terminal(background=true)`** — a background `hermes chat -q` spawned from a cron run is a child of that run and is SIGTERM'd (`exit_code -15, killed`) by `agent_close` when the poll exits. `delegate_task` and background terminal both fail here; the scheduler-owned one-shot cron job is the durable mechanism. To give deliveries more headroom even in the claim step, `HERMES_CRON_TIMEOUT` is raised on the local machine.

This is the machine that makes L3's full-autonomy vision real: one Hermes both delivers its own assigned work and reviews others' delivered work — never its own. The whole loop shares one run log and one set of gates.

> **Consolidation is part of this day.** The orchestrator *replaces* the earlier separate jobs — the Week 10 scheduled task-selection job, the Week 11 relay poll, and the pre-L3 `pr_review_queue_check` review schedule — folding them all into one loop. Replace nothing destructively: this day *creates* the orchestrator and points it at all streams, verifies each is covered, and **only then** retires the superseded jobs so every engineer runs exactly one L3 job. Your review watch covers only **your active GitHub identity** (retire any decommissioned aliases you no longer use).

## Variables to Change in the AI Prompt Before Sending

- `YOUR-RELAY-URL`
- `YOUR-PENDING-TASKS-API-KEY` (held in local Hermes secrets, never in the prompt body)
- `YOUR-GITHUB-HANDLE`
- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-ORCHESTRATOR-SCHEDULE` (e.g. `every 10 minutes`)
- `YOUR-DELIVERY-RULES` (the Day 49 delivery mode + repo routing for how you deliver work)
- `YOUR-REVIEW-RULES` (the Days 41-45 inform-only review routing: which repos you review, report-only)
- `YOUR-DECISION-INBOX` (the local folder engineers answer decisions in, e.g. `C:\Users\<user>\AppData\Local\hermes\orchestrator-decisions\`)

## AI Prompt

```text
Relay URL: YOUR-RELAY-URL
GitHub Handle: YOUR-GITHUB-HANDLE
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Orchestrator Schedule: YOUR-ORCHESTRATOR-SCHEDULE
Delivery Rules: YOUR-DELIVERY-RULES
Review Rules: YOUR-REVIEW-RULES
Pending Tasks API Key: (held in my local Hermes secrets — do NOT print or paste a value)

Build ONE assembled multi-stage orchestrator that runs both my delivery stream and my review stream in a single loop, and verify it.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it. Confirm the separation-of-duties invariant: this orchestrator must NEVER review or approve a PR it authored, and must NEVER claim/self-review its own delivered work.

Then build ONE scheduled job on YOUR-ORCHESTRATOR-SCHEDULE that, on every run:

**Decision model:** the decision to work a task is made at assignment time, with the engineer's consent, in meetings. A task assigned to the engineer and sitting in Inbox is already decided — the orchestrator works it autonomously from there, consulting the engineer ONLY at a genuinely novel/vague fork (Day 45) through the Decision Inbox below. It never pages to ask whether to start.

DELIVERY STREAM (authored work — autonomous):
1. Call `GET <YOUR-RELAY-URL>?engineer=YOUR-GITHUB-HANDLE` with my key; take the oldest open pickup. If none: quiet.
2. If a pickup exists: CLAIM it (Inbox -> In Progress, Day 47 transition), verify the transition, then work it autonomously via the Day 49 path (dedup/overlap preflight -> scope to AC -> implement -> build/validate -> scoped branch). At a novel/vague fork, use the DECISION INBOX (write file + page + stop). On completion: open a linked PR `Closes #<n>`, request review, set `For Review` (auto-assigns supervisor as reviewer), report the PR URL. Never review or approve the authored PR yourself.

REVIEW STREAM (review queue — other engineers' work):
3. Discover open PRs where a `reviewer`/`review requests` includes YOUR-GITHUB-HANDLE (command active identity only; decommissioned aliases are retired). Each is others' work assigned to you to review — verify author != the engineer (separation of duties).
4. For each, load the review routing (Day 41-45 inform-only): classify routine vs novel (Day 45). Routine -> approve or request changes (report-only, no code mutation). Novel or blocked -> page a conforming one-liner.

DECISION INBOX (the ONLY way the engineer answers a decision):
5. Path: `YOUR-DECISION-INBOX` (e.g. `C:\Users\<user>\AppData\Local\hermes\orchestrator-decisions\`), one file per pended issue `<issue-number>.md`.
   - On a novel/vague fork mid-delivery: WRITE the file (`"Decision needed for issue <N>: <question>\nEngineer answer:\n"`), page `<N> has a decision point - <question> - answer in <decision-inbox>\<N>.md`, then STOP this run.
   - At the start of each run FIRST scan the inbox: a file whose `Engineer answer:` is blank = still awaited -> page a reminder (do not re-produce the question, do not proceed on that task). A file whose answer is filled = answered -> POST it as a GitHub issue comment for trackability (`gh issue comment <N> --repo <repo> --body "Decision: <question> - Engineer: <answer>"`), move the file to `./answered/`, then PROCEED on that task using the answer as the direction.
   - This keeps Slack a read-only pager: the answer channel is the local file (terminal/editor), and the audit trail is the GitHub issue comment.

GATE AND PAGE DISCIPLINE:
6. Page only on: a decision point (Decision Inbox), a reminder that an answer is still awaited, a novel (Day 45) or blocked (Day 50) review, a recovery escalation, or a completed delivery (PR URL). Routine work stays quiet. A pickup being available is NEVER a page by itself — it is claimed and worked. Messages are `<IDENTIFIER> is <STATUS> — <one-line reason>` to my DM only.
7. Everything records to ONE run log (timestamp, which stream, action taken, evidence, classification).

Then verify:
- Prove the review stream picks up a real open PR requesting review from me (or, if none today, list an empty queue cleanly) and that it is NOT my own work.
- Prove the delivery stream reads the relay correctly (empty-or-pickup, both handled).
- Show me the single run log location and confirm the orchestrator repeats on YOUR-ORCHESTRATOR-SCHEDULE.

APPROVAL MODE: `approvals.cron_mode: deny`. Non-destructive delivery + inform-only review allowed. DO NOT use `git push --force`, `git reset --hard`, force branch deletion or any destructive command. An inform-only reviewer MUST NOT mutate code (report only). Do NOT retire the old `pr_review_queue_check` job until this orchestrator is verified to cover the review stream.

Do not merge, self-approve, review your own PR, bypass CI, rewrite the issue body, or expose secrets.
```

## Game Data Lane

Use the [game-data variant](Day%2056%20-%20Assembled%20Multi-Stage%20Workflow%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

