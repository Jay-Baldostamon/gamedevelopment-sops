---
name: "Day 70 - Concurrent Issue Development End-to-End (Game Data Lane)"
about: "Prove per-worktree and per-engineer schema isolation end-to-end."
title: "Day 70: Concurrent Issue Development End-to-End - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 70: Concurrent Issue Development End-to-End (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Deliver two independent Unity issues concurrently from assignment through separate worktrees, validation, linked PRs, and reviewer handoff.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Exercise two authorized mock game-data jobs across isolated Unity worktrees. Verify within-VM fixture isolation; test cross-engineer isolation only when an authorized peer is actually available. Keep the existing guard unless a project owner explicitly approves a change.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-WORKTREE-ROOT` (from Day 66)
- `YOUR-REPO-NAME`
- `YOUR-GITHUB-HANDLE`
- `YOUR-RELAY-URL`
- `YOUR-PENDING-TASKS-API-KEY` (held in VM secrets, never in the prompt body)
- `YOUR-DELIVERY-RULES` (local mock game-data validation)
- `YOUR-PEER-INSTANCE` (or `none available`)
- `YOUR-ORCHESTRATOR-SCHEDULE`

## AI Prompt

```text
Worktree Root: YOUR-WORKTREE-ROOT
Repo Name: YOUR-REPO-NAME
GitHub Handle: YOUR-GITHUB-HANDLE
Relay URL: YOUR-RELAY-URL
Delivery Rules: YOUR-DELIVERY-RULES
Peer Instance: YOUR-PEER-INSTANCE
Orchestrator Schedule: YOUR-ORCHESTRATOR-SCHEDULE
Pending Tasks API Key (YOUR-PENDING-TASKS-API-KEY): (held in my VM secrets — do NOT print or paste a value)

Exercise concurrent mock game-data development using isolated Unity worktrees.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the worktree model: my VM's own clone; each job gets its own branch, mock fixture state, and Unity `Library` and `Temp` directories.
2. Run at least two authorized concurrent mock game-data jobs across worktrees on my VM when the Editor license and capacity permit. Use authorized test pickups or local mock tasks, and validate each contract locally; do not post training evidence.
3. Check cross-engineer isolation with an authorized peer instance if available. If no peer is available, verify within-VM worktree isolation and mark cross-engineer isolation unverified.
4. Inspect within-VM fixture, build-output, and shared-resource isolation; leave any unobserved checks unverified.
5. Inspect the measured collision count and guard behavior; mark either unverified if it was not observed.

Show the local validation results, within-VM isolation, any actually tested cross-engineer isolation, and the measured collision result.

Do not create a training report, execute DDL, mutate a live schema, or stage a change. Do not self-approve project work or expose secrets.
```

## Game Data Lane Note

This is the game-data-lane variant of Day 70.
