---
name: "Day 69 - Worktree Isolation and Safe Concurrency (Game Data Lane)"
about: "Verify mock-save isolation before changing concurrency controls."
title: "Day 69: Worktree Isolation and Safe Concurrency - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 69: Worktree Isolation and Safe Concurrency (Game Data Lane)

## Unity Game-Development Assignment

Continue the desktop 2D C# action-platformer using the current Unity LTS release. Evaluate whether separate worktrees isolate approved mock player-save and progression tests.

## Exercise

1. Inspect the existing orchestration guard, approved fixture paths, and Day 68 results. Identify shared resources as well as each tree's separate Git index, Unity caches, and scratch output.
2. Run authorized read-only contract checks and, where supported, save/load tests using separate mock scratch files. Verify a change to one test's scratch state cannot alter the other fixture or its source.
3. Inspect actual collision and error signals locally. If any fixture, test, or isolation check is unavailable, mark it blocked or unverified rather than claiming a clean run.
4. Retain the existing concurrency guard when isolation is incomplete or a collision occurs. Propose any narrower guard only from observed results, and change project policy only with explicit owner authorization.

Do not post training evidence, create a training report, access unrelated production data, execute DDL, or mutate a live schema. Actual PRs require independent human review and CI.
