---
name: "Day 66 - Worktree Provisioning Script (Game Data Lane)"
about: "Provision isolated Unity worktrees and mock-save fixtures."
title: "Day 66: Worktree Provisioning Script - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 66: Worktree Provisioning Script (Game Data Lane)

## Unity Game-Development Assignment

Continue the desktop 2D C# action-platformer using the current Unity LTS release. Isolate approved mock player-save or progression fixtures across separate Unity worktrees.

## Exercise

1. Select an authorized repository, a confirmed base revision, a worktree root, and an approved mock fixture. If the fixture is unavailable, identify the blocker locally and keep the data exercise design-only.
2. With explicit authorization, create a provisioning script for at least two uniquely named worktrees. Validate all names and destinations, refuse existing paths, surface Git failures, and never force, overwrite, prune, or remove work.
3. Verify distinct Git indexes and separate Unity `Library`, `Temp`, and build-output paths. A worktree's `.git` entry can be a file; verify that a second run refuses existing destinations without changing them.
4. Use only approved mock fixture copies or per-tree scratch paths. Verify that a test write in one scratch location does not change the other fixture or the source. Never copy real player saves, credentials, or private assets.
5. Inspect actual local test results and disk usage. If the Editor, fixture, or tools are unavailable, mark the corresponding check blocked rather than claiming success.

Do not post training evidence, create a training report, delete worktrees, execute DDL, or mutate a live schema. Actual PRs retain the required CI and independent review controls.
