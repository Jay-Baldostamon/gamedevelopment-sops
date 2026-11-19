---
name: "Day 75 - Per-Engineer Isolation Verification (Game Data Lane)"
about: "Prove isolation within the single VM: worktree DB pairs, secrets hygiene, engineer-scoped MCP, relay ownership."
title: "Day 75: Per-Engineer Isolation Verification - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 75: Per-Engineer Isolation Verification (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Verify engineer isolation across Unity repository access, private notes, credentials, worktrees, caches, artifacts, and game-data test fixtures.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Close Week 15 by **verifying isolation** within the single VM. Inspect separate worktree indexes, Unity caches, approved mock fixture paths, secrets hygiene, and authorized relay ownership. Verify actual behavior rather than claiming isolation; cross-instance checks remain deferred when no peer is available.

The cross-instance checks (a peer's connection string or evidence readable from my VM) are deferred with the network.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-INSTANCE-NAME`
- `YOUR-HERMES-HOME` (e.g. `/home/ubuntu/<user>/.hermes`)
- `YOUR-WORKTREE-ROOT`
- `YOUR-RELAY-URL`

## AI Prompt

```text
Instance Name: YOUR-INSTANCE-NAME
Hermes Home: YOUR-HERMES-HOME
Worktree Root: YOUR-WORKTREE-ROOT
Relay URL: YOUR-RELAY-URL

Verify mock game-data and worktree isolation within my single VM using authorized checks.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Worktree isolation: verify distinct Git indexes, Unity caches, build outputs, and approved mock fixture scratch paths. Confirm one tree's test state does not alter the other.
2. Secrets hygiene: where `.env` files exist, confirm they are mode 600 or stricter and no secret values appear in logs or chat. If none exist, mark the check not applicable; do not create or copy credentials.
3. If an authorized game-data sandbox has owner-scoped access controls, test those controls read-only. Otherwise mark that separate sandbox check not applicable or unverified.
4. Relay ownership: call YOUR-RELAY-URL with (a) no key — expect 401; (b) a deliberately wrong key string — expect 403 or equivalent denial; (c) my key — expect my queue only. Record all three outcomes.
5. Delivery-guard isolation: confirm the collision log exists-or-is-empty semantics and that the double-spawn guard would fire on a duplicate issue (inspect the watcher's guard logic; no need to trigger a real collision).
6. Profile isolation: if more than one Hermes profile exists on this VM, from the non-default profile attempt to list the default profile's memories and cron jobs; confirm the default's private content is not reachable. If only one profile exists, report cross-profile isolation as N/A (state it, don't fake it).

Inspect the per-boundary observations, permission audit, available sandbox and relay outcomes, and failed or unavailable checks locally. Do not create a training report.

Do not weaken any boundary to make a test pass. Do not execute DDL, mutate schema, or stage a change. Do not expose secrets.
```

## Game Data Lane Note

This is the game-data-lane variant of Day 75.
