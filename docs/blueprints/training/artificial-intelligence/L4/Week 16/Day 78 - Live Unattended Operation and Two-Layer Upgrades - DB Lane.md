---
name: "Day 78 - Live Unattended Operation and Two-Layer Upgrades (Game Data Lane)"
about: "Run the DB network live escalation-only and apply two-layer upgrades."
title: "Day 78: Live Unattended Operation and Two-Layer Upgrades - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 78: Live Unattended Operation and Two-Layer Upgrades (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Run the approved unattended Unity workflow against the stable baseline; stage upgrades and require human review for breaking project/editor changes.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Operate the authorized single-VM workflow with escalation-only contact and the two-layer upgrade policy. Use Day 76's stable revision and approved mock-save compatibility baseline; preserve private customizations, actual advance notice for breaking changes, and fail-safe behavior. No live schema mutation or DDL.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-ORCHESTRATOR-SCHEDULE`
- `YOUR-RUN-LOG-PATH`
- `YOUR-CONFIG-MANAGEMENT-PLAYBOOK`
- `YOUR-BASELINE-VERSION`
- `YOUR-BREAKING-CHANGE-IF-ANY` (or `none this cycle`)

## AI Prompt

```text
Orchestrator Schedule: YOUR-ORCHESTRATOR-SCHEDULE
Run Log Path: YOUR-RUN-LOG-PATH
Config Management Playbook: YOUR-CONFIG-MANAGEMENT-PLAYBOOK
Baseline Version: YOUR-BASELINE-VERSION
Breaking Change: YOUR-BREAKING-CHANGE-IF-ANY

Run the authorized game-data workflow with escalation-only contact and inspect the two-layer upgrade policy.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the authorized VM runs its orchestrator on YOUR-ORCHESTRATOR-SCHEDULE with routine work quiet and genuine novel/blocked work escalated. Inspect YOUR-RUN-LOG-PATH.
2. Confirm the two-layer model: YOUR-CONFIG-MANAGEMENT-PLAYBOOK stamps YOUR-BASELINE-VERSION as the stable baseline; my VM keeps full control above it; skills/process rollouts not force-pushed.
3. For YOUR-BREAKING-CHANGE-IF-ANY, verify the real advance-notice requirement and inspect any affected Unity packages or mock-save compatibility rules. Trigger a real rollout only after the actual notice window and explicit authorization; if none exists, confirm no breaking change is forced.
4. Confirm the head of engineering / EMs run the playbook (no single bus factor).
5. Inspect the isolation, collision, and health signals that were actually measured; mark unavailable or multi-instance checks unverified.

Inspect the live run log, the two-layer model, any real breaking-change coordination, and the available health view locally. Do not create a training report.

Do not execute DDL, mutate schema, or stage a change. Do not stamp over an engineer's private customizations. Do not take destructive action.
```

## Game Data Lane Note

This is the game-data-lane variant of Day 78.
