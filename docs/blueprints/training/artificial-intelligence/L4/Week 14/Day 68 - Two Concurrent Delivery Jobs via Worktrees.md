---
name: "Day 68 - Two Concurrent Delivery Jobs via Worktrees"
about: "Run two authorized Unity jobs with isolated worktrees."
title: "Day 68: Two Concurrent Delivery Jobs via Worktrees - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 68: Two Concurrent Delivery Jobs via Worktrees

## Unity Game-Development Assignment

Continue the desktop 2D C# action-platformer using the current Unity LTS release. Exercise two independent Unity tasks in the isolated worktrees from Days 66-67.

## Exercise

1. Select two bounded, authorized tasks and confirm each has its own branch, Git index, Unity `Library` and `Temp` directories, and build-output path. Do not share mutable Editor or fixture state.
2. Run the jobs concurrently only when the Editor license, machine capacity, and project rules permit it. Otherwise rehearse the isolation locally and mark actual concurrent execution blocked.
3. Inspect the resulting diffs, scene and `.meta` references, focused tests, and any available builds. Check for cross-tree asset, cache, index, or output collisions; record no zero-collision claim without observing the run.
4. If real project PRs are explicitly authorized and code changes require them, create separate linked PRs and request the independent human review required by the repository. Do not review or approve your own work.

Keep actual diagnostics local; no training report or evidence posting is required. Do not expose secrets, commit generated Unity caches, execute DDL, mutate a live schema, or take destructive action.

## Game Data Lane

Use the [game-data variant](Day%2068%20-%20Two%20Concurrent%20Delivery%20Jobs%20via%20Worktrees%20-%20DB%20Lane.md) for approved mock-save contract checks.
