---
name: "Day 70 - Concurrent Issue Development End-to-End"
about: "Exercise two authorized Unity tasks with isolated worktrees."
title: "Day 70: Concurrent Issue Development End-to-End - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 70: Concurrent Issue Development End-to-End

## Unity Game-Development Assignment

Continue the desktop 2D C# action-platformer using the current Unity LTS release. Exercise the Week 14 worktree workflow with at least two bounded Unity tasks.

## Exercise

1. Confirm two authorized tasks have separate branches, Git indexes, Unity caches, build outputs, and any mock fixture state. Retain the Day 69 concurrency guard unless an owner has explicitly approved a change.
2. Run both jobs concurrently only when the Editor license, machine capacity, and project rules allow it. Inspect the actual scene and `.meta` changes, tests, builds, and collision signals; mark unavailable checks blocked.
3. If an authorized peer and independent instance are available, test cross-engineer isolation as well. If not, mark that portion unverified; separate clones alone do not prove the full workflow.
4. When actual project code changes and PRs are explicitly authorized, create separate issue-linked PRs, request independent human review, and leave merging to the repository's normal controls. Do not self-review or bypass CI.

Inspect outcomes locally without a training report or evidence submission. Do not expose secrets, commit generated Unity caches, execute DDL, mutate a live schema, or take destructive action.

## Game Data Lane

Use the [game-data variant](Day%2070%20-%20Concurrent%20Issue%20Development%20End-to-End%20-%20DB%20Lane.md) for approved mock player-data tasks.
