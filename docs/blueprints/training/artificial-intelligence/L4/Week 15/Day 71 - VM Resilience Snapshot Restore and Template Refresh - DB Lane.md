---
name: "Day 71 - VM Resilience Snapshot Restore and Template Refresh - Game Data Lane"
about: "Rehearsed single-VM restore, periodic EBS snapshots, and a refreshed base AMI (Game Data Lane)."
title: "Day 71: VM Resilience Snapshot Restore and Template Refresh (Game Data Lane) - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 71: VM Resilience Snapshot Restore and Template Refresh (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Test snapshot/restore and worker-template refresh for the Unity build environment; confirm the editor/package baseline and project data remain recoverable.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Week 15 works with **one VM** (the multi-instance network was deferred — see `../L6/NOTES - The Network (deferred from L4).md`). Make the single VM **survivable**: periodic EBS snapshots with bounded retention, a **rehearsed** (not merely documented) single-VM restore, a refreshed base AMI carrying the current proven state, and a real cost number for one instance.

game-data-lane specifics: the restored copy is verified at the **configuration level** (DB connection settings present, boot-time credential injection intact). The restore is never exercised against a live schema; DB verification on the restored copy is read-only `approved game-data MCP tools` evidence reads at most. Snapshots are for crash/fault recovery only and reconcile with wipe-on-leave — never engineer-retain. No schema mutation, no DDL; execution stays human-owned via approved game-data sandbox.

## Variables to Change in the AI Prompt Before Sending

Same variables as the main lane (instance name/ID, current AMI ID, backup schedule, snapshot retention, skills monorepo URL + pinned revision, relay URL).

## AI Prompt

```text
Instance Name: YOUR-INSTANCE-NAME
Instance ID: YOUR-INSTANCE-ID
Current AMI ID: YOUR-AMI-CURRENT-ID
Backup Schedule: YOUR-BACKUP-SCHEDULE
Snapshot Retention: YOUR-SNAPSHOT-RETENTION
Skills Monorepo URL: YOUR-SKILLS-MONOREPO-URL
Skills Pinned Revision: YOUR-SKILLS-PINNED-REVISION
Relay URL: YOUR-RELAY-URL

Make my single VM survivable: snapshots, a rehearsed restore, and a refreshed base AMI (Game Data Lane).

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Take an initial EBS snapshot of MY-INSTANCE-ID's root volume, tagged Owner=Engineering. Note snapshot ID, volume ID, size.
2. Stand up periodic snapshots on YOUR-BACKUP-SCHEDULE with YOUR-SNAPSHOT-RETENTION retention (delete-on-expiry). Confirm the schedule survives a reboot and state where its state lives.
3. REHEARSE the restore: from the newest snapshot, create a throwaway instance (no engineer identity, no live relay key beyond read-only checks). Boot it and verify: (a) reachable the same way mine is; (b) skills checkout exists and `git rev-parse HEAD` equals YOUR-SKILLS-PINNED-REVISION; (c) the Day-61 systemd user service is present and starts; (d) DB connection configuration is INTACT (settings present, boot-time credential injection works) but NEVER exercised against a live schema; (e) if game-data evidence access exists on the restored copy, at most read-only `approved game-data MCP tools` evidence reads — nothing more.
4. Destroy the throwaway instance and its volume. Confirm destruction by ID.
5. Refresh the template: build a new AMI from MY-INSTANCE-ID's current state including the current watcher, systemd service, and boot secret-injection setup. Record old AMI ID (YOUR-AMI-CURRENT-ID) and new AMI ID. Do not delete the old AMI.
6. Report the actual month-to-date cost of MY-INSTANCE-ID from the AWS API and the projected monthly run rate for ONE instance.

Show me: snapshot ID + schedule evidence, the restore rehearsal's verification outputs (pin, service, DB-config intact without live-schema contact), throwaway destruction by ID, old/new AMI IDs, and the real cost number.

No schema mutation, no DDL, no staging changes; execution stays human-owned via approved game-data sandbox. Backups exist for crash/fault recovery only. Do not expose anything publicly. Do not take destructive action against MY-INSTANCE-ID. Secrets stay out of chat and out of logs.
```

## Game Data Lane Variant

This document IS the game data lane variant of Day 71. game data engineers complete this day using the **`day-71-db.md`** issue template (label `training,db-lane`).
