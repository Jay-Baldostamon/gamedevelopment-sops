---
name: "Day 68 - Two Concurrent Delivery Jobs via Worktrees (Game Data Lane)"
about: "Run two concurrent mock game-data validations with isolated Unity worktrees."
title: "Day 68: Two Concurrent Delivery Jobs via Worktrees - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 68: Two Concurrent Delivery Jobs via Worktrees (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Run two concurrent Unity delivery jobs in isolated worktrees and verify scene, .meta, Library, and build-output changes cannot leak across tasks.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Run **two authorized mock game-data validation jobs on the same VM and repository** via separate worktrees. Isolate fixture state and each Unity project's generated `Library` and `Temp` directories; do not commit generated files, post training evidence, execute DDL, or mutate a live schema.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-WORKTREE-ROOT` (from Day 66)
- `YOUR-REPO-NAME`
- `YOUR-GITHUB-HANDLE`
- `YOUR-RELAY-URL`
- `YOUR-PENDING-TASKS-API-KEY` (held in VM secrets, never in the prompt body)
- `YOUR-DELIVERY-RULES` (local mock game-data validation)
- `YOUR-ORCHESTRATOR-SCHEDULE`

## AI Prompt

```text
Worktree Root: YOUR-WORKTREE-ROOT
Repo Name: YOUR-REPO-NAME
GitHub Handle: YOUR-GITHUB-HANDLE
Relay URL: YOUR-RELAY-URL
Delivery Rules: YOUR-DELIVERY-RULES
Orchestrator Schedule: YOUR-ORCHESTRATOR-SCHEDULE
Pending Tasks API Key (YOUR-PENDING-TASKS-API-KEY): (held in my VM secrets — do NOT print or paste a value)

Run two concurrent mock game-data validation jobs on the same VM and repo via worktrees, and check fixture and Unity-cache isolation.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm at least two worktrees under YOUR-WORKTREE-ROOT, each with its own branch, approved mock fixture state, and isolated Unity `Library` and `Temp` directories.
2. Use two explicitly authorized test pickups or local mock tasks. If authorized pickups are unavailable, do not claim real issues; keep the relay portion unverified.
3. Work BOTH concurrently across tree A and tree B, validating approved mock player-data contracts locally with read-only tools. Do not post training evidence to either issue.
4. Check per-worktree isolation: the mock contract in tree A does not interfere with tree B; fixture state and Unity caches do not leak; no `.git/index` contention occurs.
5. Inspect the configured per-VM guard and whether it fired; do not claim a result that was not observed.
6. Inspect the local validation results and both run-log entries.

Inspect the two worktrees, any authorized test pickups or local mock tasks, local validation results, and each per-resource isolation check. Mark unavailable checks as blocked.

Do not post training evidence, create a training report, execute DDL, mutate a live schema, or stage a change. Do not self-approve project work. Do not expose secrets.
```

## Game Data Lane Note

This is the game-data-lane variant of Day 68.
