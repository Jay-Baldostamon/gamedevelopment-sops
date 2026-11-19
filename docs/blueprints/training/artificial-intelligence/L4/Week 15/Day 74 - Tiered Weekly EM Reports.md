---
name: "Day 74 - Unity Performance Profiling"
about: "Profile and improve a representative Unity gameplay path locally."
title: "Day 74: Unity Performance Profiling"
labels: "training"
assignees: ''
---

# Day 74: Unity Performance Profiling

## Unity Game-Development Assignment

Continue the desktop 2D C# action-platformer using the current Unity LTS release. Profile a repeatable gameplay path instead of generating management reports.

## Exercise

1. Choose one representative scene and a repeatable path involving movement, a hazard, and restart or checkpoint behavior. Use the project's existing frame-time target; if none exists, choose a local target before measuring and treat it as an exercise assumption.
2. In the Unity Profiler, warm up the same configuration for 10 seconds, then inspect three separate 30-second runs. Compare CPU frame time and managed allocations using the same Editor or development-build target each time.
3. Identify one measured hotspot. Make one small, authorized change, then repeat the same warm-up and three runs under the same conditions.
4. Compare the observed frame timing and allocations with the baseline and chosen target. Keep the change only if the measurements support it and the same gameplay path and available focused tests still pass.
5. If the Profiler, build, or tests are unavailable, identify the specific blocker and leave the corresponding result unverified. Local notes are optional; do not send a performance report.

Preserve scene, prefab, and `.meta` references. Do not commit generated build or `Library` output, licensed private assets, or secrets. Actual PRs retain the required CI and independent review controls.

## Game Data Lane

Use the [game-data variant](Day%2074%20-%20Tiered%20Weekly%20EM%20Reports%20-%20DB%20Lane.md) to profile a mock save/load path.
