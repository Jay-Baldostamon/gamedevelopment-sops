---
name: "Week 15 Overview: One VM, Hardened and Observable"
about: "Make the single cloud VM survivable and observable; decisions hub-side; verify within-VM isolation."
title: "Week 15: One VM, Hardened and Observable"
labels: "training"
assignees: ''
---

# Week 15 Overview: One VM, Hardened and Observable

## Unity Game-Development Track Context

This level or week uses the same desktop 2D C# action-platformer on the current Unity LTS release. The Unity gameplay lane covers scripts, scenes, prefabs, assets, tests, and builds. The former DB lane is now the game data lane for player profiles, save slots, checkpoints, collectibles, unlocks, and leaderboard contracts.

For L3/L4, scheduling, agents, and cloud workers support the Unity repository and build/test pipeline. Use only approved mock or game-specific data, not CRM or unrelated production systems. If a fixture is unavailable, identify the blocker locally and keep the work design-only. Preserve authorization, independent review for actual PRs, and secret-handling controls; no training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Week 15 Overview - One VM, Hardened and Observable |
| Track | training |
| Level | week |
| Owner | Direct Supervisor / Training Team |
| Last Updated | 2026-10-20 |
| Review Cycle | Every 30 days |
| Status | draft |

> **Scope change (2026-10-20).** This week was originally "The Network" — spin instances 2 and 3 and verify cross-engineer isolation. The multi-instance theme was **deferred to a later level (~L6)** so engineers get real usage time on a single cloud VM first. See `../L6/NOTES - The Network (deferred from L4).md` for the deferred content and the thinking. What stays is the part that makes **one** VM trustworthy: survivable, observable, with its decision and supervision flows running through the hub.

Week 15 hardens the single VM from Weeks 13–14 and moves its control surfaces outward to the hub:

1. **Resilience (Decision 15, plus the cost line from Decision 9):** periodic EBS snapshots with bounded retention, a **rehearsed** single-VM restore, a refreshed base AMI carrying the current proven state, and a real cost number for one instance.
2. **Hub-side decision answers (Decision 8):** answers live on the EngineeringMCP hub page — work from any device/phone with NO VM access; the IP-tracker is workbench-only.
3. **Health visibility (Decision 12):** a passive, login-viewable dashboard on EngineeringMCP surfaces the instance's poll signal; ~1 week without a poll = a concern worth a human look (not realtime paging). Built fleet-ready even though the fleet is one.
4. **Local performance validation:** profile and improve a representative Unity gameplay or mock save/load path without generating management reports.

The week closes by **verifying isolation within the VM** (Decision 1/Decision 5, single-VM scope): profiles, worktree/DB-pair isolation, secrets hygiene, and relay ownership semantics — attacked, not claimed.

## What to Expect This Week

- Day 71: **VM resilience** — snapshot schedule, rehearsed restore to a throwaway instance, refreshed base AMI, and local cost inspection.
- Day 72: **Hub-side decision answers** — the two-channel model in action: workbench → SG, answers → hub (any device, no VM access).
- Day 73: **Instance-health dashboard** on EngineeringMCP — passive, login-viewable, ~1 wk no-poll = concern; schema ready for more instances later.
- Day 74: **Unity performance profiling** — measure a repeatable gameplay or mock save/load path and validate one bounded improvement.
- Day 75: **Isolation verification (within-VM)** — profiles, worktree/DB pairs, secrets hygiene, relay 401/403, delivery-guard semantics.

## Week 15 Success Criteria

- [ ] Snapshots run on a schedule with bounded retention; a restore has been REHEARSED (booted, skills pin verified, service verified, relay reachable) and the throwaway destroyed by ID.
- [ ] A refreshed base AMI exists and is recorded (old + new IDs); the skills pin is verifiable on both.
- [ ] The instance's actual month-to-date cost is inspected from the AWS API when access is authorized.
- [ ] Decision answers work from any device/phone via the hub page with NO VM access; the IP-tracker tracks workbench machines only (≤5 past IPs).
- [ ] A passive instance-health dashboard on EngineeringMCP surfaces last-polled; ~1 wk without a poll = concern.
- [ ] The Unity performance exercise compares repeatable local measurements and checks correctness after a change.
- [ ] Within-VM isolation verified by attempted reads: profiles/worktrees/DB pairs, secrets hygiene, relay 401/403 semantics.

## Guiding Principle

Week 15 succeeds when the single VM is something you're not afraid to touch: backups are rehearsed, decisions and health visibility work through the hub, local Unity performance is checked, and isolation boundaries are exercised safely. Multi-instance work comes later.

## Game Data Lane

**Week 15 (Game Data Lane).** Use the provided variants for resilience, hub-side decisions, local mock save/load profiling, and within-VM isolation. No unrelated production data, schema mutation, or DDL is permitted.
