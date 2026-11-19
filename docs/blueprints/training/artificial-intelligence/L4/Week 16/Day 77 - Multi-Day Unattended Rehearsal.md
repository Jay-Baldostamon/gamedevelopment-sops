---
name: "Day 77 - Multi-Day Unattended Rehearsal"
about: "Rehearse authorized Unity operations on one VM."
title: "Day 77: Multi-Day Unattended Rehearsal - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 77: Multi-Day Unattended Rehearsal

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Rehearse multi-day Unity build and update operations, checking package/editor compatibility, failure recovery, artifact integrity, and escalation behavior.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Rehearse the **single authorized VM** over a multi-day window using safe Unity tasks. Routine work may run unattended; genuine novel or blocked work must pause and page a human. Inspect actual operational results locally without generating a training report. Multi-instance claims remain unverified unless independently tested.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-REHEARSAL-DURATION` (e.g. `72 hours` / `3 days`)
- `YOUR-REHEARSAL-THREAD` (the quiet/staging thread to rehearse on)
- `YOUR-RUN-LOG-PATH` (existing operational log)
- `YOUR-INSTANCE-NAME` (the authorized VM)
- `YOUR-NOVELTY-THRESHOLD` (the Day-45 routine-vs-novel rule, unchanged)

## AI Prompt

```text
Rehearsal Duration: YOUR-REHEARSAL-DURATION
Rehearsal Thread: YOUR-REHEARSAL-THREAD
Run Log Path: YOUR-RUN-LOG-PATH
Instance: YOUR-INSTANCE-NAME
Novelty Threshold: YOUR-NOVELTY-THRESHOLD

Rehearse the authorized VM for YOUR-REHEARSAL-DURATION using safe Unity tasks.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the VM runs the orchestrator on its schedule with YOUR-NOVELTY-THRESHOLD, and that this rehearsal is authorized.
2. Observe routine Unity validation and eligible review tasks. For a synthetic decision, use an approved test answer; for a genuine novel or blocked case, verify the task pauses until a human responds.
3. Inspect the operational log for actual completions, conforming escalations, stalls, and measured collisions.
4. Inspect the available health signal. Mark any untested multi-instance isolation or missing observation unverified.

Do not post training evidence, create a training report, take destructive action, or expose secrets.
```

## Game Data Lane

Use the [game-data variant](Day%2077%20-%20Multi-Day%20Unattended%20Rehearsal%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.
