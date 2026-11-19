---
name: "Day 56 - Assembled Multi-Stage Workflow (Game Data Lane)"
about: "Build one game-data orchestrator for local validation and review."
title: "Day 56: Assembled Multi-Stage Workflow - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 56: Assembled Multi-Stage Workflow (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Assemble the scheduled Unity review, issue pickup, implementation, validation, PR, and review stages into one bounded workflow with explicit failure stops.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Assemble the DB streams into **one orchestrating loop**:

- **Delivery stream:** authorized Week 11 relay pickup → claim → local read-only mock-contract validation → recover per Day 50.
- **Review stream:** another engineer's authorized work when available; inspect findings locally without posting training evidence or mutating the work.

Same single-loop orchestration as the standard lane; read-only throughout; no schema mutation, no DDL — execution stays human-owned via approved game-data sandbox. Consolidation also applies: the DB orchestrator replaces the earlier separate DB scheduled-selection and DB relay-poll jobs, so each engineer runs exactly one game-data L3 job.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-RELAY-URL`
- `YOUR-PENDING-TASKS-API-KEY` (held in local Hermes secrets, never in the prompt body)
- `YOUR-GITHUB-HANDLE`
- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-ORCHESTRATOR-SCHEDULE`
- `YOUR-DELIVERY-RULES` (the Day 53 local mock-data validation mode)
- `YOUR-REVIEW-RULES` (the Days 41-45 inform-only DB review routing)

## AI Prompt

```text
Relay URL: YOUR-RELAY-URL
GitHub Handle: YOUR-GITHUB-HANDLE
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Orchestrator Schedule: YOUR-ORCHESTRATOR-SCHEDULE
Delivery Rules: YOUR-DELIVERY-RULES
Review Rules: YOUR-REVIEW-RULES
Pending Tasks API Key: (held in my local Hermes secrets — do NOT print or paste a value)

Build ONE assembled game-data orchestrator that runs local validation and authorized review streams in a single loop, read-only.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it. Confirm the separation of duties invariant: never review or approve my own delivered evidence.

Then build ONE scheduled job on YOUR-ORCHESTRATOR-SCHEDULE that, on every run:

DELIVERY STREAM (authored game-data work):
1. Call `GET <YOUR-RELAY-URL>?engineer=YOUR-GITHUB-HANDLE` with my key; take the oldest open pickup.
2. If an authorized test pickup exists: claim it (Inbox -> In Progress), verify, then validate the approved mock player-data contract locally per Day 53. Do not post training evidence to the issue. Recover per Day 50 on stale/blocked work.

REVIEW STREAM (review queue — other engineers' game-data evidence):
3. Discover queued DB review work assigned to me (other engineers' evidence, never my own).
4. For each, classify routine vs novel (Day 45). Inspect routine findings locally without submitting a review; novel/blocked follows the configured operational escalation.

GATE AND PAGE DISCIPLINE:
5. Page only on: a pickup to deliver (claim), a novel or blocked review, or a recovery escalation. Routine stays quiet. `<IDENTIFIER> is <STATUS> — reason` to my DM.
6. Everything records to ONE run log (timestamp, stream, action, evidence, classification).

Then verify: review stream picks up (or cleanly empties) my DB review queue and it is not my own work; delivery stream reads the relay correctly; show the single run log; confirm it repeats on YOUR-ORCHESTRATOR-SCHEDULE.

Do not execute DDL, mutate schema, or stage a change. An inform-only reviewer MUST NOT mutate. Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane Note

This is the game-data-lane variant of Day 56.