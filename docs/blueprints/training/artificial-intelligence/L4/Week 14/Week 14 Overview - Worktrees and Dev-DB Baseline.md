---
name: "Week 14 Overview: Unity Worktrees and Project Baselines"
about: "Provision isolated Unity worktrees and evaluate safe concurrent work."
title: "Week 14: Unity Worktrees and Project Baselines"
labels: "training"
assignees: ''
---

# Week 14 Overview: Unity Worktrees and Project Baselines

## Unity Game-Development Track Context

Continue the desktop 2D C# action-platformer using the current Unity LTS release. The gameplay lane covers scripts, scenes, prefabs, tests, and builds; the game-data lane uses approved mock player-save and progression fixtures. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Week 14 Overview - Unity Worktrees and Project Baselines |
| Track | training |
| Level | week |
| Owner | Training Team |
| Status | draft |

Use authorized Git worktrees to isolate Unity tasks, generated Editor state, build outputs, and mock fixture state. Separate worktrees do not automatically isolate licenses or shared services: retain existing concurrency guards until actual tests and owner approval justify any change.

## What to Expect This Week

- Day 66: Provision two safe worktrees with isolated Unity caches and mock fixture paths.
- Day 67: Verify the Editor, packages, reference revision, and mock-save compatibility baseline.
- Day 68: Run two authorized Unity or mock-data jobs concurrently where the environment permits.
- Day 69: Inspect actual isolation and retain or propose concurrency guards based on measured results.
- Day 70: Exercise the end-to-end workflow; test cross-engineer isolation only when an authorized peer is available.

## Week 14 Success Criteria

- [ ] Worktree names and destinations are validated; existing work is not overwritten or removed.
- [ ] Git indexes, Unity `Library`/`Temp`, build outputs, and mock scratch data are isolated.
- [ ] The actual Editor, package, revision, test, and build results are inspected locally; unavailable checks are marked blocked.
- [ ] Concurrent jobs do not claim unobserved results, and any collision or unverified shared resource keeps the existing guard in place.
- [ ] Actual project PRs retain authorization, CI, and independent human review.

Use only approved mock game data. Do not post training evidence, execute DDL, mutate a live schema, expose secrets, or take destructive action.
