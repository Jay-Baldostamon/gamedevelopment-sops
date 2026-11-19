---
name: "Day 74 - Unity Save/Load Profiling (Game Data Lane)"
about: "Profile a mock player-data serialization path locally."
title: "Day 74: Unity Save/Load Profiling - Game Data Lane"
labels: "training,db-lane"
assignees: ''
---

# Day 74: Unity Save/Load Profiling (Game Data Lane)

## Unity Game-Development Assignment

Continue the desktop 2D C# action-platformer using the current Unity LTS release. Profile player-save serialization with an approved local/mock fixture instead of generating management reports.

## Exercise

1. Select one representative versioned save fixture with a player profile, checkpoint, and collectibles. Use only an approved mock fixture; if none is available, identify the blocker and keep the exercise design-only.
2. Warm up the save/load path, then run at least 100 round trips against the same fixture. Inspect elapsed time and managed allocations with the available Unity Profiler or test tooling.
3. Verify every round trip preserves the expected values and version. Include a malformed or unsupported-version case and confirm it is rejected or handled by the project's explicit policy.
4. Make one small, authorized optimization and repeat the same workload. Compare the observed timing and allocations while rerunning the correctness checks; do not trade correctness for speed.
5. Treat missing profiler or test results as unverified. Local notes are optional; do not send a performance report.

Do not access unrelated production data, execute DDL, mutate a live schema, or expose secrets. Actual PRs retain the project's required CI and independent review controls.
