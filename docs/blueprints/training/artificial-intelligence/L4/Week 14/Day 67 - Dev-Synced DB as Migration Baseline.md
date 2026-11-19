---
name: "Day 67 - Unity Project Baseline and Compatibility"
about: "Verify a reproducible Unity editor, package, and project baseline."
title: "Day 67: Unity Project Baseline and Compatibility - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 67: Unity Project Baseline and Compatibility

## Unity Game-Development Assignment

Continue the desktop 2D C# action-platformer using the current Unity LTS release. Establish a reproducible project baseline for the worktrees created on Day 66.

## Exercise

1. Identify the repository's actual default branch and an authorized reference revision; do not assume the branch is named `dev`. Verify each worktree starts from or includes that revision, and inspect any intentional differences.
2. Compare `ProjectSettings/ProjectVersion.txt`, `Packages/manifest.json`, and `Packages/packages-lock.json` when present. Confirm each worktree uses the intended Editor version and package baseline.
3. With the appropriate Editor and license available, import each project using its own `Library` and `Temp` paths. Run available Edit Mode and Play Mode tests and a desktop build when relevant; inspect actual results locally.
4. Check that scene, prefab, asset, and `.meta` references remain intact. If a package lock, Editor, test, or build is unavailable, identify the specific blocker and leave it unverified.

Do not query unrelated production systems, execute DDL, mutate a live schema, or generate a training report. Any actual PR still requires the project's CI and independent human review.

## Game Data Lane

Use the [game-data variant](Day%2067%20-%20Dev-Synced%20DB%20as%20Migration%20Baseline%20-%20DB%20Lane.md) for mock-save compatibility.
