---
name: "Week 16 Overview: Unattended Operation and Local Validation"
about: "Build upgrade machinery, rehearse unattended operation, and validate locally."
title: "Week 16: Unattended Operation and Local Validation"
labels: "training"
assignees: ''
---

# Week 16 Overview: Unattended Operation and Local Validation

## Unity Game-Development Track Context

This level or week uses the same desktop 2D C# action-platformer on the current Unity LTS release. The Unity gameplay lane covers scripts, scenes, prefabs, assets, tests, and builds. The former DB lane is now the game data lane for player profiles, save slots, checkpoints, collectibles, unlocks, and leaderboard contracts.

For L3/L4, scheduling, agents, and cloud workers support the Unity repository and build/test pipeline. Use only approved mock or game-specific data, not CRM or unrelated production systems. If a fixture is unavailable, identify the blocker locally and keep the work design-only. Preserve authorization, independent review for actual PRs, and secret-handling controls; no training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Week 16 Overview - Unattended Operation and Local Validation |
| Track | training |
| Level | week |
| Owner | Direct Supervisor / Training Team |
| Last Updated | 2026-10-20 |
| Review Cycle | Every 30 days |
| Status | draft |

> **Scope change (2026-10-20).** Multi-instance work was deferred to a later level (~L6). This week retains the single-VM upgrade and unattended-operation exercises, followed by local Unity validation and a read-only offboarding-policy review.

Week 16 is the **culmination of L4**. From the resolved L4 plan:

- **Upgrades (Decision 16):** two-layer — a fleet-stamped stable baseline via config management + per-engineer autonomy above it; breaking changes are the ONLY forced-coordination point (~1 week notice, then central rollout). Day 76 builds the machinery (including the hub stability table as the upgrade arbiter and failed-state service revival in the update script); Day 78 operates under the policy.
- **Backup (Decision 15):** already stood up in Day 71 (snapshots + rehearsed restore); this week verifies it holds under real unattended operation.
- **Retire/rebuild on leave (Decision 14):** inspect the applicable policy read-only; any actual retirement requires explicit authorization.
- **Retrospective (Decision 2B):** on the worktree-vs-throughput tradeoff and the throughput it bought.

## What to Expect This Week

- Day 76: **Two-layer upgrade infrastructure** — the stamped stable baseline, hub stability table, scripted update path, rehearsed breaking-change process, and demonstrated failure path.
- Day 77: **Multi-day unattended rehearsal** — routine work silent, novel paging only; zero human touch.
- Day 78: **Live unattended operation** — escalation-only contact; two-layer upgrade policy in effect.
- Day 79: **Retrospective** — worktree-vs-throughput tradeoff, instance metrics, isolation + collision rates, with a concrete decision.
- Day 80: **Final Unity validation** and a read-only review of safe offboarding boundaries.

## Week 16 Success Criteria

- [ ] The operational baseline identifies the skills revision and AMI, plus the approved mock-save format when relevant. The update script's dry-run and failure paths are demonstrated; an apply path is exercised only with explicit authorization. The table-poll verdict fails safe unless the revision is `stable`.
- [ ] Routine jobs run unattended during an authorized rehearsal; genuine novel or blocked work pauses for a human, and collisions are measured rather than assumed.
- [ ] Live unattended operation runs with escalation-only contact; the two-layer upgrade policy is in effect.
- [ ] Snapshots + rehearsed restore hold under real unattended operation.
- [ ] The Unity project and available tests/build are checked locally; offboarding policy is reviewed without destructive action.
- [ ] Worktree throughput, available isolation and collision measurements, and possible adjustments are inspected locally.

## Guiding Principle

Week 16 succeeds when the single instance operates within its safety boundaries and the Unity project is checked locally. The inform-only boundary, isolation, and human/CI controls for actual PRs remain intact.

## Game Data Lane

**Week 16 (Game Data Lane).** Use the provided variants for unattended mock-data work, isolation checks, and final local save/load validation. Do not execute DDL or mutate a live schema.
