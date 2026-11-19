---
name: "Day 71 - VM Resilience Snapshot Restore and Template Refresh"
about: "Rehearsed single-VM restore, periodic EBS snapshots, and a refreshed base AMI."
title: "Day 71: VM Resilience Snapshot Restore and Template Refresh - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 71: VM Resilience Snapshot Restore and Template Refresh

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Test snapshot/restore and worker-template refresh for the Unity build environment; confirm the editor/package baseline and project data remain recoverable.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Week 15 now works with **one VM** (the multi-instance network was deferred to a later level — see `../L6/NOTES - The Network (deferred from L4).md`). That makes this the right day to make the single VM **survivable**. Three moves, from the resolved L4 plan (Decision 15, plus the cost line kept from Decision 9):

1. **Periodic EBS snapshots** of the instance volume on a schedule, with bounded retention. Snapshots are for crash/fault recovery only — they reconcile with the wipe-on-leave policy later in the month (a backup is never a way to keep an engineer's data after they leave).
2. **A rehearsed restore, not a documented one.** Restore the latest snapshot to a throwaway instance, boot it, and verify the restored copy actually works: skills pin, systemd user service, relay connectivity. Then destroy the throwaway. "Documented restore" without a rehearsal is a claim, not a capability.
3. **Template refresh.** The base AMI (`hermes-l4-base`) predates the Week 14 watcher/worktree work. Bake the current proven state (watcher with worktree allocation, Day-61 service, secrets-injection at boot) into a refreshed AMI so the machine someone provisions tomorrow — engineer or future fleet — boots from today's verified configuration, not last month's.

Also inspect the single instance's actual month-to-date cost locally, when authorized and available, rather than inventing a projected value.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-INSTANCE-NAME` (your VM)
- `YOUR-INSTANCE-ID`
- `YOUR-AMI-CURRENT-ID` (the base AMI as provisioned)
- `YOUR-BACKUP-SCHEDULE` (e.g. `daily`)
- `YOUR-SNAPSHOT-RETENTION` (e.g. `7 days`)
- `YOUR-SKILLS-MONOREPO-URL`
- `YOUR-SKILLS-PINNED-REVISION`
- `YOUR-RELAY-URL`

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

Make my single VM survivable: snapshots, a rehearsed restore, and a refreshed base AMI.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Take an initial EBS snapshot of MY-INSTANCE-ID's root volume, tagged Owner=Engineering. Note the snapshot ID, volume ID, and volume size.
2. Stand up periodic snapshots on YOUR-BACKUP-SCHEDULE with YOUR-SNAPSHOT-RETENTION retention (delete-on-expiry so retention is real, not aspirational). Preferred mechanism: **AWS Data Lifecycle Manager (DLM)** — scoped to the volume's `Name`/`Owner` tags, with the `AWSDataLifecycleManagerDefaultRole` execution role. Do NOT test reboot-surviving of the mechanism; record the policy ID and where its state lives.
3. REHEARSE the restore: from the newest snapshot, create a throwaway instance (do NOT attach any engineer identity or relay key to it beyond read-only checks). Boot it and verify: (a) the instance is reachable the same way mine is; (b) the skills checkout exists and `git rev-parse HEAD` equals YOUR-SKILLS-PINNED-REVISION; (c) the Day-61 systemd user service is present and starts; (d) a relay GET with MY key from the restored copy returns a valid response. Verify each by command output, not claim.
4. Destroy the throwaway instance and any volume it created. Confirm destruction by ID.
5. Refresh the template: build a new AMI from MY-INSTANCE-ID's current state (stopped if required) that includes the current watcher, systemd service, and boot secret-injection setup. Record old AMI ID (YOUR-AMI-CURRENT-ID) and new AMI ID. Do not delete the old AMI.
6. Report the actual month-to-date cost of MY-INSTANCE-ID from the AWS API and the projected monthly run rate for ONE instance.

Show me: snapshot ID + schedule evidence, the restore rehearsal's verification outputs (pin, service, relay), throwaway destruction by ID, old/new AMI IDs, and the real cost number.

Backups exist for crash/fault recovery only. Do not expose anything publicly. Do not take destructive action against MY-INSTANCE-ID. Secrets stay out of chat and out of logs.
```

## Game Data Lane

Use the [game-data variant](Day%2071%20-%20VM%20Resilience%20Snapshot%20Restore%20and%20Template%20Refresh%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

## Documented Deviation

Documented deviation: no stop-based build — I run on instance 1, a stop would kill this session with nobody left to restart the VM. Registered from today's completed snapshot instead (same consistency point, zero downtime). Watch-item: crash-consistent, not stopped-fs-consistent.
