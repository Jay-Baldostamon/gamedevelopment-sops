---
name: "Day 63 - The Shared Brain: Skills Monorepo and Private Memory (Game Data Lane)"
about: "Mount the org skills monorepo and your private memory repo."
title: "Day 63: The Shared Brain - Skills Monorepo and Private Memory - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 63: The Shared Brain - Skills Monorepo and Private Memory (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Organize shared agent skills around Unity conventions (C#, scene/prefab safety, .meta files, tests, builds) while keeping private notes and licensed assets private.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Mount the **shared org brain** and keep your **private memory** private. Confirm the available shared tooling supports local mock game-data validation while personal learning stays private. Do not execute DDL or mutate a live schema.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-SKILLS-MONOREPO-URL`
- `YOUR-SKILLS-PINNED-REVISION`
- `YOUR-SKILLS-CHECKOUT-PATH`
- `YOUR-PRIVATE-MEMORY-REPO-URL`
- `YOUR-PRIVATE-MEMORY-PATH`
- `YOUR-HERMES-MEMORY-PATH`
- `YOUR-PROMOTION-GATE` (who may promote today, e.g. `head-of-engineering`)

## AI Prompt

```text
Skills Monorepo URL: YOUR-SKILLS-MONOREPO-URL
Skills Pinned Revision: YOUR-SKILLS-PINNED-REVISION
Skills Checkout Path: YOUR-SKILLS-CHECKOUT-PATH
Private Memory Repo URL: YOUR-PRIVATE-MEMORY-REPO-URL
Private Memory Path: YOUR-PRIVATE-MEMORY-PATH
Hermes Memory Path: YOUR-HERMES-MEMORY-PATH
Promotion Gate: YOUR-PROMOTION-GATE

Mount the shared org brain on my VM, keep my private memory private, and inspect available mock game-data validation tooling.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Check out YOUR-SKILLS-MONOREPO-URL at YOUR-SKILLS-PINNED-REVISION into YOUR-SKILLS-CHECKOUT-PATH; confirm `git rev-parse HEAD` equals the pin.
2. Mount YOUR-PRIVATE-MEMORY-REPO-URL at YOUR-PRIVATE-MEMORY-PATH so Hermes reads my memory from there.
3. Verify the split: shared skills readable; my private memory readable only by this instance; my private memory NOT tracked in the shared monorepo.
4. Identify available shared tools for read-only mock player-save or progression validation; surface missing tooling as a blocker. Keep personal learning in the private repo.
5. Demonstrate the promotion gate: pushes back to the shared monorepo are BLOCKED unless by YOUR-PROMOTION-GATE. No unauthorized promotion attempt.
6. State the deploy schedule so future pulls re-check out the same pinned revision.
7. Enable mem0 as the persistent-memory backend (same as the standard lane, step 7): `hermes plugins install mem0`, `hermes config set memory.provider mem0`, and `$HERMES_HOME/mem0.json` in OSS mode — LLM + embedder both via OpenRouter (`openai_base_url: https://openrouter.ai/api/v1`, embedder `openai/text-embedding-3-small`, 1536 dims), qdrant embedded-local store at `<hermes_home>/mem0-qdrant`. Verify with `hermes memory status` and a mem0_add → mem0_search → delete smoke test. mem0's store belongs to the private per-engineer memory — never promoted to the shared monorepo.

Inspect pinned-revision equality, memory mount resolution, skills-readable/memory-private verification, available mock-validation tools, the promotion-gate guard, and the mem0 smoke-test result locally.

Do not push private or experimental content into the shared monorepo. Do not execute DDL, mutate schema, or stage a change. Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane Note

This is the game-data-lane variant of Day 63.
