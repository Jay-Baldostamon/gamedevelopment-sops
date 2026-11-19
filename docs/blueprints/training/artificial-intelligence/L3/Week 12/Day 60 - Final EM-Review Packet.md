---
name: "Day 60 - Local Unity Workflow Validation"
about: "Validate the delivery, review, and recovery paths locally."
title: "Day 60: Local Unity Workflow Validation"
labels: "training"
assignees: ''
---

# Day 60: Local Unity Workflow Validation

## Unity Game-Development Assignment

Continue the desktop 2D C# action-platformer using the current Unity LTS release. Validate the L3 workflow hands-on without assembling or submitting a close-out packet.

## Exercise

1. With an authorized local test fixture, run a clear task through pickup, one claim, simulated delivery, and the relevant Unity tests. Replay the event and verify that it does not duplicate the claim or delivery.
2. Run a blocked or missing-input case. Confirm that it stops with a visible error and makes no unrelated changes; then exercise the configured recovery or retry path.
3. Test the review boundary with two fixture items: reject self-review of an authored change, and inspect a different author's change in read-only mode. Do not submit a review during the exercise.
4. Open the platformer's main scene, run a representative Play Mode path and available focused tests, and inspect Console output. Build the desktop player only if the configured tooling and license permit it.
5. Inspect the actual local results, including any unrun checks. Repeat a failed case after correcting its cause; do not represent a blocked check as passed.

Use disposable fixtures only. Do not expose secrets, run destructive commands, bypass CI, self-approve, or merge your own work. Real PRs remain subject to the project's authorization and independent review requirements.

## Game Data Lane

Use the [game-data variant](Day%2060%20-%20Final%20EM-Review%20Packet%20-%20DB%20Lane.md) for approved mock player-save and progression data.
