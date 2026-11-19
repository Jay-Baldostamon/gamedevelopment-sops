---
name: "Day 60 - Local Unity Workflow Validation (Game Data Lane)"
about: "Validate mock game-data delivery, review, and recovery locally."
title: "Day 60: Local Unity Workflow Validation - Game Data Lane"
labels: "training,db-lane"
assignees: ''
---

# Day 60: Local Unity Workflow Validation (Game Data Lane)

## Unity Game-Development Assignment

Continue the desktop 2D C# action-platformer using the current Unity LTS release. Validate the L3 game-data workflow against approved mock player-save or progression data, without creating a close-out packet.

## Exercise

1. Run a disposable clear task through pickup, one claim, and local validation of a versioned save-slot or checkpoint fixture. Replay the event and verify that it does not duplicate work.
2. Test an invalid or unavailable fixture. Confirm that validation stops with a visible blocker and that no live data is changed; exercise the configured retry only after the fixture is safe.
3. Check separation of duties with two fixture items: reject self-review and inspect another author's example read-only.
4. Run the relevant Unity tests or local fixture checks, including a save/load round trip and a malformed-input case where supported. Inspect actual results and mark unavailable checks as blocked.

Use only approved mock or game-specific sandbox data. Do not query unrelated production systems, execute DDL, mutate a live schema, expose secrets, or submit a training report.
