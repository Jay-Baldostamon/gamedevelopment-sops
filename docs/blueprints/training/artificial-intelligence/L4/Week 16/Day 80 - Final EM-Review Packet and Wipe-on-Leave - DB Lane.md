---
name: "Day 80 - Final Unity Validation and Safe Offboarding (Game Data Lane)"
about: "Validate mock save data and inspect safe offboarding boundaries."
title: "Day 80: Final Unity Validation and Safe Offboarding - Game Data Lane"
labels: "training,db-lane"
assignees: ''
---

# Day 80: Final Unity Validation and Safe Offboarding (Game Data Lane)

## Unity Game-Development Assignment

Finish the desktop 2D C# action-platformer exercise using the current Unity LTS release. Validate the player-save and progression path against an approved local/mock fixture without creating a final review packet.

## Exercise

1. Exercise save/load for a player profile, checkpoint, and collectible state using an approved mock fixture. Verify the values and supported version survive a round trip.
2. Exercise a malformed or unsupported-version fixture and confirm the behavior follows the project's explicit error or recovery policy. Do not mark the case passed if the fixture or policy is unavailable.
3. Run available focused Unity tests and inspect Console output. Inspect the project diff for generated files, accidental private data, or secrets without printing credential values.
4. Review the applicable access-retirement and backup policy read-only. Distinguish crash-recovery backups from authorized offboarding and do not assume retention or snapshots are permitted.
5. No wipe, credential revocation, instance deletion, access change, DDL, or live schema mutation is part of this exercise. Real offboarding requires explicit authorization and the applicable security procedure.

Use only approved mock or game-specific sandbox data, never unrelated production systems. No training report, handout, or supervisor sign-off is required; actual PR review requirements remain in force.
