---
name: "Day 78 - Live Unattended Operation and Two-Layer Upgrades"
about: "Run live escalation-only and apply the two-layer upgrade policy."
title: "Day 78: Live Unattended Operation and Two-Layer Upgrades - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 78: Live Unattended Operation and Two-Layer Upgrades

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Run the approved unattended Unity workflow against the stable baseline; stage upgrades and require human review for breaking project/editor changes.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Switch the network to **live unattended operation** — escalation-only contact, novel page only — and apply the **two-layer upgrade policy**. From the resolved L4 plan (Decision 16): config management (Ansible-style, idempotent/declarative) drives a **stable baseline** — a pinned Hermes version and OS baseline the head of engineering advances deliberately. At fleet-of-one scale the arbiter for what counts as "stable" is the **hub-hosted stability table** (`engineering.hurdman.com`, built on Day 76): VMs poll it and upgrade only when their revision is marked stable. Engineers keep **full control over their own VM above that baseline**: run whatever version they want, install anything, update freely — the fleet playbook never stamps over their private customizations (mirroring Decision 1 autonomy). Skill/process rollouts are NOT force-pushed. The ONLY forced-coordination event is a **breaking / non-backwards-compatible** change: announced ~1 week ahead so every engineer scans their own VM for custom functionality that might break, then triggered centrally via config management after the window.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-ORCHESTRATOR-SCHEDULE`
- `YOUR-RUN-LOG-PATH` (fleet run log)
- `YOUR-CONFIG-MANAGEMENT-PLAYBOOK` (the fleet baseline playbook, e.g. Ansible)
- `YOUR-BASELINE-VERSION` (the pinned Hermes/OS baseline)
- `YOUR-BREAKING-CHANGE-IF-ANY` (a breaking change to coordinate, or `none this cycle`)

## AI Prompt

```text
Orchestrator Schedule: YOUR-ORCHESTRATOR-SCHEDULE
Run Log Path: YOUR-RUN-LOG-PATH
Config Management Playbook: YOUR-CONFIG-MANAGEMENT-PLAYBOOK
Baseline Version: YOUR-BASELINE-VERSION
Breaking Change: YOUR-BREAKING-CHANGE-IF-ANY

Run the network live, escalation-only, and apply the two-layer upgrade policy.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm every instance runs its orchestrator on YOUR-ORCHESTRATOR-SCHEDULE in LIVE unattended mode — escalation-only contact, routine silent, novel (Day 45) / blocked (Day 50) pages only. Log to YOUR-RUN-LOG-PATH.
2. Confirm the two-layer model: YOUR-CONFIG-MANAGEMENT-PLAYBOOK stamps YOUR-BASELINE-VERSION (pinned Hermes/OS) as the stable baseline. Confirm my VM keeps full control ABOVE the baseline (I can run my own version/installs; the fleet playbook does NOT stamp over my private customizations). Skills/process rollouts are NOT force-pushed.
3. Demonstrate the breaking-change rule: for YOUR-BREAKING-CHANGE-IF-ANY, announce it ~1 week ahead so every engineer scans their own VM for custom functionality that might break, then trigger centrally via config management after the window. If `none this cycle`, confirm no non-backwards-compatible change is being forced.
4. Confirm the division of labor: the head of engineering (and EMs, per the capability-transfer goal) run the playbook — the kernel stays consistent without a single bus factor.
5. Confirm isolation, collision rate zero, and fleet-health all-healthy across the live run.

Show me: the live run log, the two-layer model in action (baseline stamped + my autonomy preserved), the breaking-change coordination (or none), and the fleet-health view.

Do not stamp over an engineer's private customizations. Do not take destructive action. Do not expose secrets.
```

## Game Data Lane

Use the [game-data variant](Day%2078%20-%20Live%20Unattended%20Operation%20and%20Two-Layer%20Upgrades%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

