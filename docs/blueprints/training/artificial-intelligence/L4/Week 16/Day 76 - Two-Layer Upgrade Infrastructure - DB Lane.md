---
name: "Day 76 - Two-Layer Upgrade Infrastructure - Game Data Lane"
about: "Rehearse a stable update path and verify mock-save compatibility."
title: "Day 76: Two-Layer Upgrade Infrastructure (Game Data Lane) - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 76: Two-Layer Upgrade Infrastructure (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Define a two-layer upgrade policy for the Unity editor/package baseline and build-worker tooling, with a stable tested baseline and a reversible update path.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Week 16 works with **one VM** (the multi-instance network was deferred — see `../L6/NOTES - The Network (deferred from L4).md`). Build the machinery behind Day 78's two-layer upgrade policy (Decision 16) at fleet-of-one scale: a stamped stable baseline, a scripted update path (dry-run, apply, service restart, report), and a rehearsed breaking-change process with a demonstrated failure path.

For the game-data lane, the stable baseline also identifies an approved mock fixture and its supported save-format version. Verify the same local compatibility checks before and after the rehearsal. The hub stability table (`YOUR-HUB-STABILITY-URL`) remains the update arbiter: fail safe on unreachable or malformed responses, and never upgrade a revision not marked `stable`. No schema mutation or DDL.

Honest scope note: at fleet-of-one the VM is already on the latest version, so the poll → decide → upgrade happy path is rehearsed via the sample change only, not exercised against a real newer release.

## Variables to Change in the AI Prompt Before Sending

Same variables as the main lane (instance name, skills monorepo URL, stable baseline revision, baseline AMI ID, sample change, hub stability URL, Hermes service unit), plus `YOUR-MOCK-FIXTURE-PATH` and `YOUR-SAVE-FORMAT-VERSION`.

## AI Prompt

```text
Instance Name: YOUR-INSTANCE-NAME
Skills Monorepo URL: YOUR-SKILLS-MONOREPO-URL
Stable Baseline Revision: YOUR-SKILLS-PINNED-REVISION
Baseline AMI ID: YOUR-BASELINE-AMI-ID
Mock Fixture: YOUR-MOCK-FIXTURE-PATH
Save Format Version: YOUR-SAVE-FORMAT-VERSION
Sample Change: YOUR-SAMPLE-CHANGE
Hub Stability URL: YOUR-HUB-STABILITY-URL
Hermes Service Unit: YOUR-HERMES-SERVICE-UNIT

Build the two-layer upgrade infrastructure for my VM (fleet of one, Game Data Lane).

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Verify the operational baseline: YOUR-SKILLS-PINNED-REVISION, YOUR-BASELINE-AMI-ID, and the approved mock fixture's supported YOUR-SAVE-FORMAT-VERSION. Confirm the local skills checkout HEAD equals the pin. If the fixture or its compatibility policy is unavailable, stop and identify the blocker.
2. The hub stability table is the arbiter: YOUR-HUB-STABILITY-URL serves revision → status. Do NOT decide locally — the update script polls it and upgrades only when the target revision is marked stable; on unreachable/malformed responses it must fail SAFE (refuse, report, stay on baseline).
3. Write the update script to poll the stability table, compare the pinned revision, and default to a dry run. Apply an update only with explicit authorization; verify service status and run the same mock save/load compatibility checks without changing the source fixture.
4. Service revival semantics: the unit uses Restart=on-failure, so crash loops self-heal; the common post-upgrade failure is instead a start-rate-limited unit sitting in `failed` state. The script's restart step must use `systemctl --user reset-failed YOUR-HERMES-SERVICE-UNIT && systemctl --user start YOUR-HERMES-SERVICE-UNIT` and log pre/post unit state. No standalone watchdog timer; the hub's fleet-health polls already detect a down service. Document these semantics in the run log — inspect-only, no timer.
5. Test dry-run against the current state — verify by output, not claim.
6. With explicit authorization, rehearse YOUR-SAMPLE-CHANGE in an approved environment, verify the service restarted and the mock save/load checks still pass, then record the new operational baseline. Label the notice period simulated rather than claiming advance notice occurred. A real breaking change still requires the actual notice period. Note that the current-release path is a rehearsal, not proof of an upgrade to a newer release.
7. Show the autonomy layer is intact: one per-engineer-private skill or memory file, untouched by the update, still readable and still private.
8. Demonstrate the failure path once: what the script does when the fetch fails, the table is unreachable/marks the revision not-stable, or the service fails to restart (rollback or clear failure state — pick one, implement it, demonstrate it).

Inspect the baseline, table-poll verdict, dry-run output, actual mock compatibility results, private-layer isolation, and demonstrated failure path locally. Do not create a training report.

No schema mutation, no DDL, no staging changes; execution stays human-owned via approved game-data sandbox. Do not force-push or rewrite shared history. Do not push per-engineer private content to the shared repo. Do not take destructive action.
```

## Game Data Lane Variant

This document is the game-data variant of Day 76.
