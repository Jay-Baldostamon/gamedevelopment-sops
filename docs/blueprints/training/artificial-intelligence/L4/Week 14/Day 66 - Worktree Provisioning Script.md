---
name: "Day 66 - Worktree Provisioning Script"
about: "Provision isolated Unity worktrees safely."
title: "Day 66: Worktree Provisioning Script - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 66: Worktree Provisioning Script

## Unity Game-Development Assignment

Continue the desktop 2D C# action-platformer using the current Unity LTS release. Provision separate worktrees for Unity tasks without sharing mutable Editor state or creating a training report.

## Exercise

1. Select the authorized Unity repository, a confirmed base revision, a worktree root, and a practical disk budget. Inspect the primary worktree for uncommitted changes before starting.
2. With explicit authorization, create a small provisioning script that creates at least two uniquely named branches and worktrees beneath the selected root. Validate names and paths, refuse existing destinations, and stop on Git errors; never force, overwrite, prune, or remove existing work.
3. Use `git worktree list` and Git's per-worktree paths to verify that each tree has its own checkout and index. A worktree's `.git` entry can be a file, not a directory; verify that a second run refuses existing destinations without changing them.
4. Ensure each Unity project uses its own `Library`, `Temp`, and build-output locations. Do not copy credentials, private assets, real player saves, or another tree's generated caches. Confirm generated files are excluded from commits.
5. If the licensed Editor and machine capacity are available, open or test the projects using the isolated paths and measure actual disk use. Otherwise identify the blocked checks. Preserve scene, prefab, and `.meta` references.

Do not delete worktrees or branches, execute DDL, or mutate a live schema as part of this exercise. Actual project changes require authorization, CI, and independent human review.

## Game Data Lane

Use the [game-data variant](Day%2066%20-%20Worktree%20Provisioning%20Script%20-%20DB%20Lane.md) for isolated mock-save fixtures.
