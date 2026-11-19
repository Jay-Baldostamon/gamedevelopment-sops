---
name: "Day 69 - Worktree Isolation and Safe Concurrency"
about: "Verify Unity worktree isolation before changing concurrency controls."
title: "Day 69: Worktree Isolation and Safe Concurrency - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 69: Worktree Isolation and Safe Concurrency

## Unity Game-Development Assignment

Continue the desktop 2D C# action-platformer using the current Unity LTS release. Evaluate whether the worktrees support safe concurrent Unity jobs.

## Exercise

1. Inspect the existing orchestration guard and the Day 68 results. Identify which resources are per worktree and which are shared, including Git indexes, Unity caches, build outputs, licenses, and any shared service.
2. With authorized test jobs, verify that changes and generated state in one worktree do not leak into the other. Inspect actual collision and error signals locally; mark untested resources unverified.
3. If any collision occurs or isolation cannot be established, retain the guard and identify the blocker. Propose a narrower guard only where observed tests justify it.
4. Change an orchestration policy only with explicit owner authorization and the project's normal change controls. Keep the existing guard until that approval; never assume separate Git worktrees isolate every shared resource.

No training report is required. Do not expose secrets, execute DDL, mutate a live schema, or bypass CI or independent human review.

## Game Data Lane

Use the [game-data variant](Day%2069%20-%20Migration%20Isolation%20and%20Retire%20Per-Repo%20Serialization%20-%20DB%20Lane.md) for mock-save isolation.
