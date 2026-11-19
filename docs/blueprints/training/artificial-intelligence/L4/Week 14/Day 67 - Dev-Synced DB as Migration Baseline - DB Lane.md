---
name: "Day 67 - Game-Data Baseline and Save Compatibility"
about: "Verify mock player-save compatibility across isolated Unity worktrees."
title: "Day 67: Game-Data Baseline and Save Compatibility - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 67: Game-Data Baseline and Save Compatibility (Game Data Lane)

## Unity Game-Development Assignment

Continue the desktop 2D C# action-platformer using the current Unity LTS release. Establish a shared reference for mock player-save data without using a live database.

## Exercise

1. Choose an authorized reference revision and an approved versioned mock fixture containing player, checkpoint, and progression fields. If the fixture or its compatibility policy is unavailable, identify the blocker and keep the work design-only.
2. Verify each Day 66 worktree starts from or includes the reference revision and uses the intended Unity Editor and package baseline. Inspect any intentional differences.
3. Run the available mock save/load or contract checks in each tree using separate scratch paths. Confirm the expected values and supported version survive a round trip without altering the source fixture.
4. Exercise a malformed or unsupported-version fixture according to the project's explicit error or recovery policy. Do not mark an unavailable test or policy as passed.
5. Inspect actual results locally and confirm one tree's scratch data cannot alter the other tree's fixture.

Do not post training evidence, write a training report, access unrelated production data, execute DDL, or mutate a live schema. Actual PRs require the project's CI and independent human review.
