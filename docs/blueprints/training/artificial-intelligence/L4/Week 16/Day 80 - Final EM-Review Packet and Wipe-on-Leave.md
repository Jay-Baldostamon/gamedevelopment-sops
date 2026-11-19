---
name: "Day 80 - Final Unity Validation and Safe Offboarding"
about: "Validate the game locally and inspect safe offboarding boundaries."
title: "Day 80: Final Unity Validation and Safe Offboarding"
labels: "training"
assignees: ''
---

# Day 80: Final Unity Validation and Safe Offboarding

## Unity Game-Development Assignment

Finish the desktop 2D C# action-platformer exercise using the current Unity LTS release. Validate the playable slice locally and review the project's safe offboarding procedure without creating a final review packet.

## Exercise

1. Open the configured main scene and play through movement, jumping, a hazard, a checkpoint or restart, and any relevant HUD feedback. Check the Unity Console for new errors.
2. Run the available Edit Mode and Play Mode tests. Create and launch a desktop build when the configured platform, assets, and license permit it; identify unavailable checks as blocked.
3. Inspect the project diff for unintended generated files, missing `.meta` references, private assets, or secrets. Do not print or copy credential values.
4. Review the applicable access-retirement and backup policy in read-only mode. Distinguish crash-recovery backups from an authorized offboarding procedure; do not assume that a snapshot or retention is permitted.
5. No wipe, credential revocation, instance deletion, access change, or other destructive operation is part of this exercise. Real offboarding requires explicit authorization and the applicable security procedure.

Inspect results locally; no management report, training handout, or supervisor sign-off is required. Actual PRs still require the appropriate authorization, CI checks, and independent human review.

## Game Data Lane

Use the [game-data variant](Day%2080%20-%20Final%20EM-Review%20Packet%20and%20Wipe-on-Leave%20-%20DB%20Lane.md) for mock player-save and progression validation.
