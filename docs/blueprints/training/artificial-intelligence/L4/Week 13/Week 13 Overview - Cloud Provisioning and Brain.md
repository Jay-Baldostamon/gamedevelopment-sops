---
name: "Week 13 Overview: Cloud Provisioning and Brain"
about: "Provision the first cloud Hermes VM, mount the shared brain, and run it unattended."
title: "Week 13: Cloud Provisioning and Brain"
labels: "training"
assignees: ''
---

# Week 13 Overview: Cloud Provisioning and Brain

## Unity Game-Development Track Context

This level or week uses the same desktop 2D C# action-platformer on the current Unity LTS release. The Unity gameplay lane covers scripts, scenes, prefabs, assets, tests, and builds. The former DB lane is now the game data lane for player profiles, save slots, checkpoints, collectibles, unlocks, and leaderboard contracts.

For L3/L4, scheduling, agents, and cloud workers support the Unity repository and build/test pipeline. Use only approved mock or game-specific data, not CRM or unrelated production systems. If a fixture is unavailable, identify the blocker locally and keep the work design-only. Preserve authorization, independent review for actual PRs, and secret-handling controls; no training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Week 13 Overview - Cloud Provisioning and Brain |
| Track | training |
| Level | week |
| Owner | Direct Supervisor / Training Team |
| Last Updated | 2026-10-10 |
| Review Cycle | Every 30 days |
| Status | draft |

Week 13 is the **infrastructure opening** of L4: take the L3 orchestrator and move it, unchanged in behavior, onto a **cloud VM that acts as the engineer**. One VM per engineer, provisioned from a standard template, running the same orchestrator that proved itself locally in L3 — now unattended, always-up, and reachable from the desktop workbench.

The week is about **provisioning, identity, the shared brain, and secrets** — the four things that make "~10 instances sharing one org brain" possible without leaking memory or credentials between engineers:

1. **Provision instance 1** — one `t3.large` (2 vCPU / 8 GB) from the standard template, no public ingress, and a single `systemd` **user** service that supervises both `hermes serve` (the remote gateway backend) and the cron ticker (the L3 orchestrator) as the engineer's OS account.
2. **Per-engineer identity** — `gh` OAuth (device flow) so the VM acts exactly as the engineer, plus the **IP-tracker** page on EngineeringMCP as the authoritative inbound allow-list (heartbeat → security group).
3. **The shared brain** — check out the **skills monorepo** (version-pinned pull at provision + deploy schedule) as the single source of truth for org skills, and mount the **private per-engineer memory repo** that only this instance can read.
4. **Secrets, hygienically** — SSM → `.env` (0600) at first boot (never in the AMI), each engineer's own OpenRouter key (never shared), and no secret ever reaching the browser (backend proxy).

By Friday the engineer's orchestrator is running unattended on the cloud, is its own GitHub identity, shares the org brain, and keeps its memory and keys private.

## What to Expect This Week

- Day 61: **Provision the VM** from the standard template; stand up the single `systemd` user service running `hermes serve` + the cron ticker as you; verify the gateway is reachable from the desktop app; pin the model AND the auxiliary vision route (`auxiliary.vision`) to cheap picks so `vision_analyze` works on the box.
- Day 62: **Per-engineer GitHub identity** via `gh` device flow; configure the **IP-tracker** so the VM's security group allow-lists only your live workbench IP.
- Day 63: **The shared brain** — check out the skills monorepo (version-pinned), mount your private memory repo, and confirm org skills are readable while your memory stays private.
- Day 64: **Secret injection** at boot (SSM → `.env` 0600); wire your own OpenRouter key; confirm no secret can reach the browser (backend proxy).
- Day 65: **Decision-inbox sync** — the orchestrator's novel-fork questions sync outbound to the hub, you answer on any device, the next run posts the answer as an issue comment and resumes; prove the orchestrator runs one full loop unattended on the cloud.

## Week 13 Success Criteria

- [ ] One `t3.large` VM is provisioned from the standard template with no EIP / no public ingress.
- [ ] A single `systemd` **user** service runs `hermes serve` + the cron ticker as the engineer's OS account, starts at boot, and restarts on crash.
- [ ] The desktop workbench connects to the VM gateway as a remote agent; the L3 orchestrator runs on the cloud.
- [ ] `model.default` and `auxiliary.vision` are pinned to cheap picks; `vision_analyze` succeeds on a real image (a text-only main model fails side-task vision under `provider: auto`).
- [ ] The VM is its own GitHub identity via `gh` device flow; the IP-tracker is the authoritative SG allow-list.
- [ ] Skills monorepo checked out at a pinned revision; private memory repo mounted; org skills readable, memory private (verified by diff/ACL, not by claim).
- [ ] Secrets arrive via SSM → `.env` 0600 at first boot, never baked into the AMI; no secret reaches the browser.
- [ ] Decision questions sync outbound to the hub, get answered on any device, post back as issue comments, and the task resumes — with no inbound VM access from the hub.

## Guiding Principle

Week 13 succeeds when one cloud Hermes runs the **exact L3 orchestrator** on the engineer's behalf, unattended, with the shared org brain behind it and per-engineer isolation in front of it. The engineer keeps the familiar desktop workbench; the VM is the always-up actor. Isolation is by construction: identity, memory, and keys are per-engineer; skills and policy are shared.

## Game Data Lane

**Week 13 (Game Data Lane).** Use the provided variants to provision the same authorized VM and shared tools while validating approved mock player-save or progression contracts locally. Keep review read-only, do not post training evidence, and never execute DDL or mutate a live schema.
