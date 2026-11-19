---
name: "Day 63 - The Shared Brain: Skills Monorepo and Private Memory"
about: "Check out the org skills monorepo and mount your private memory repo."
title: "Day 63: The Shared Brain - Skills Monorepo and Private Memory - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 63: The Shared Brain - Skills Monorepo and Private Memory

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Organize shared agent skills around Unity conventions (C#, scene/prefab safety, .meta files, tests, builds) while keeping private notes and licensed assets private.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Mount the **shared org brain** and keep your **private memory** private. This is how ~10 instances share one organizational brain without leaking learned facts between engineers. From the resolved L4 plan (Decision 1, Decision 13):

- **Skills monorepo = single source of truth.** Org skills, procedures, policy, and config live in one git repo (engineering-sops is the proof). Every instance pulls it **version-pinned** at provision and on a deploy schedule, so all instances boot from the same revision (verify by diff, not by claim). No bespoke sync daemon.
- **Per-engineer memory repo = private.** Your `MEMORY.md`, `USER.md`, and learned domain facts stay in your own private git config repo that ONLY your instance mounts. Never force-merged into the shared repo.
- **Autonomy is preserved by design:** you may pull the shared baseline and build on it; you are never forced to push a customization back, and nothing private/experimental is folded into the shared repo without your opt-in.
- **Promotion is gated:** initially only the head of engineering promotes to the shared repo; later (on explicit go-ahead) the QA automation team. The promote-able set is skills the Levelled trainings themselves generate (e.g. L3 and L4 skills) — durable, org-general procedures, not experiments or personal facts.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-SKILLS-MONOREPO-URL` (the org skills/config git repo, e.g. engineering-sops)
- `YOUR-SKILLS-PINNED-REVISION` (the version to pin at provision)
- `YOUR-SKILLS-CHECKOUT-PATH` (where the monorepo is checked out on the VM)
- `YOUR-PRIVATE-MEMORY-REPO-URL` (your private per-engineer memory repo)
- `YOUR-PRIVATE-MEMORY-PATH` (where your private memory repo mounts on the VM)
- `YOUR-HERMES-MEMORY-PATH` (Hermes' expected memory location, e.g. `MEMORY.md`/`USER.md`)
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

Mount the shared org brain on my VM and keep my private memory private.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Check out YOUR-SKILLS-MONOREPO-URL at YOUR-SKILLS-PINNED-REVISION into YOUR-SKILLS-CHECKOUT-PATH. Confirm the checked-out revision EXACTLY equals the pin (verify by `git rev-parse HEAD`, not by claim).
2. Mount YOUR-PRIVATE-MEMORY-REPO-URL (my private per-engineer memory repo) at YOUR-PRIVATE-MEMORY-PATH so that Hermes reads my memory from there (e.g. MEMORY.md/USER.md at YOUR-HERMES-MEMORY-PATH resolves to it).
3. Verify the split: org skills from the monorepo are READABLE, and my private memory repo is readable ONLY by this instance. Confirm my private memory is NOT part of the shared monorepo (it must not be tracked there).
4. Demonstrate the promotion gate: show that any push of a customization back to the shared monorepo is BLOCKED by default unless done by YOUR-PROMOTION-GATE. Do not attempt an unauthorized promotion.
5. Confirm the version-pin mechanism: a future `git pull`/deploy on schedule must re-check out the SAME pinned revision (state the deploy schedule you will use).

6. **Seed the engineer's established personal context** (do this so the fresh VM is NOT worse than the workstation): (a) copy the workstation's `MEMORY.md` + `USER.md` into YOUR-PRIVATE-MEMORY-REPO so the VM boots with its owner's situational awareness; (b) copy the engineer's **personal** skills (present on their workstation, NOT in the bundled Hermes catalog and NOT in the org monorepo) into the VM's local skills dir `~/.hermes/skills/<category>/`; (c) wire the org monorepo skills so Hermes actually reads them — `hermes config set skills.external_dirs '["<YOUR-SKILLS-CHECKOUT-PATH>/.github/skills"]'` (org skills load from the shared repo; personal from the local dir). Do NOT bulk-copy session history (state.db / transcripts) — the VM starts clean, and no private/experimental skill is pushed to the shared monorepo (promotion-gated).

7. **Enable mem0 as the persistent-memory backend** (this VM has no GPU, so nothing is hosted locally at the model layer): run `hermes plugins install mem0`, then `hermes config set memory.provider mem0`, then write `$HERMES_HOME/mem0.json` in OSS mode — LLM and embedder both routed through OpenRouter (`openai_base_url: https://openrouter.ai/api/v1`, credential = the existing `OPENROUTER_API_KEY`, embedder model `openai/text-embedding-3-small` at 1536 dims) with a local qdrant embedded store at `<hermes_home>/mem0-qdrant` (no docker, no qdrant server process). Verify with `hermes memory status` (Provider: mem0, Status: available) plus a write/read smoke test in a fresh session (`mem0_add` then `mem0_search`, then delete the smoke-test entry). mem0's store belongs to the private per-engineer memory — never promoted to the shared monorepo. NOTE: mem0ai ≥2.0.10 `search()` requires `filters={"user_id": ...}` instead of a top-level `user_id` arg.

Show me: the pinned revision equality (`git rev-parse HEAD` vs pin), the memory mount resolution, the skills-readable/memory-private verification, the promotion-gate guard, the seeded personal-memory/skill list on the VM, and the mem0 smoke-test write/read evidence.

Do not push private or experimental content into the shared monorepo. Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets. Do not take destructive action.
```

## Game Data Lane

Use the [game-data variant](Day%2063%20-%20The%20Shared%20Brain%20Skills%20Monorepo%20and%20Private%20Memory%20-%20DB%20Lane.md) for approved mock player-save and progression validation.
