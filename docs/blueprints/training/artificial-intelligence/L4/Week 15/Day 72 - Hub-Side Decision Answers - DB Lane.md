---
name: "Day 72 - Hub-Side Decision Answers (Game Data Lane)"
about: "Answer game-data evidence-arc decisions on the hub from any device."
title: "Day 72: Hub-Side Decision Answers - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 72: Hub-Side Decision Answers (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Route ambiguous Unity design, compatibility, licensing, or platform decisions to a human decision inbox with concise context and no secrets.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Make **game-data decision answers hub-side** for authorized mock-validation work. Answers use a plain textbox with no LLM in the decision path; the VM polls them outbound. Keep synthetic rehearsal answers out of real issues, and post actual project decisions only when authorized. Preserve workbench-only IP restrictions and the Manual Work DNS Sessions policy.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-DECISION-INBOX`
- `YOUR-DECISION-HUB-URL`
- `YOUR-IP-TRACKER-URL`
- `YOUR-MOBILE-IP`
- `YOUR-WORKBENCH-IP`

## AI Prompt

```text
Decision Inbox: YOUR-DECISION-INBOX
Decision Hub URL: YOUR-DECISION-HUB-URL
IP Tracker URL: YOUR-IP-TRACKER-URL
Mobile IP: YOUR-MOBILE-IP
Workbench IP: YOUR-WORKBENCH-IP

Make DB decision answers hub-side and prove the two-channel model, read-only.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the outbound path: on a mock-data validation fork, the orchestrator writes its local file to YOUR-DECISION-INBOX AND syncs OUTBOUND to YOUR-DECISION-HUB-URL. NO LLM in the decision path — answers are typed into a plain textbox and stored verbatim.
2. Demonstrate answering from a phone/any-device (hub auth only, NO VM access): see the pending question and answer it.
3. Prove the two-channel separation: decision answers need NO VM access; the desktop workbench → VM channel goes through the SG (IP-locked to YOUR-WORKBENCH-IP).
4. Prove the IP-tracker is workbench-only: YOUR-WORKBENCH-IP is tracked and updates the SG; YOUR-MOBILE-IP is NOT written to the SG; ≤5 past IPs retained.
5. Confirm the next run polls the answer back OUTBOUND, moves the file to `./answered/`, and resumes local validation. Do not post synthetic answers to a real issue.
6. In an explicitly authorized test environment, exercise the Manual Work DNS (v1) lifecycle: owner-provisioned TTL'd record, session registration, deferral of any job that would race shared fixture infrastructure, and scoped teardown. No DDL or schema mutation.

Inspect the pending question, phone-side answer, workbench-only IP-tracker behavior, and poll-back plus resume locally.

Do not execute DDL, mutate schema, or stage a change. Do not expose secrets. Do not add an LLM to the decision path.
```

## Manual Work DNS Sessions (v1) — DB flavor

Same lease rules as the main-lane section in **Day 72 - Hub-Side Decision Answers** (name
`engineering-<engineer>-<repo>.hurdman.com`, request-only via Decision Inbox, owner-provisioned,
7-day TTL, run-log + `~/.hermes/manual-sessions/<repo>.md` registration, mandatory teardown,
collision log). game-data-specific points:

- A manual session may race on **shared fixture infrastructure**. A validation job touching the
  same shared resource defers while the session is active; worktree-isolated checks may proceed.
- Read-only discipline is unchanged: the manual-session record describes access; it grants no
  DDL, no schema mutation, no staged changes. Manual execution stays human-owned (approved game-data sandbox).
- Teardown also confirms in the run log that no schema state was left behind by the session.

## Game Data Lane Note

This is the game-data-lane variant of Day 72.
