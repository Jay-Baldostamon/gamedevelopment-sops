---
name: "Day 45 - Novelty Escalation Threshold (Game Data Lane)"
about: "Page only when a game-data evidence run is novel, not routine (game data lane)."
title: "Day 45: Novelty Escalation Threshold - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 45: Novelty Escalation Threshold (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Tune the novelty threshold using Unity review examples, paging on ambiguous gameplay regressions or unsafe project changes while keeping routine results quiet.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

The game-data-lane application of the L3 novelty threshold: page you **only** when an automated game-data evidence run is novel, using the same routine-vs-novel rule as the standard lane, but classified against MCP-derived schema contracts and validation evidence. ROUTINE → stay quiet (evidence stays local). NOVEL → fire a conforming one-liner pointing to the local evidence run.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-DB-SCOPE`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
DB Scope: YOUR-DB-SCOPE

Help me make the scheduled mock game-data validation job page me only when the result is NOVEL, and stay quiet on ROUTINE results.

First, repeat the repository folder and DB scope. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Define the routine-vs-novel rule with me explicitly. ROUTINE: schema contract and validation evidence fully match an already-handled shape covered by the game data lane skills and prior runs. NOVEL: the gathering or classification needs a human decision — e.g. unexpected schema drift, an unfamiliar object, ambiguous reference data, or evidence that can't be validated automatically. Show me the rule.
2. Run the inform-only game-data evidence job for YOUR-DB-SCOPE (or reuse today's Day 44 run).
3. Classify the result ROUTINE or NOVEL and justify against the rule (novelty is about the handling needing me, not the mere presence of change).
4. Apply the pager rule:
   - ROUTINE → send NO escalation; confirm evidence stayed local and no DM fired.
   - NOVEL → send the conforming one-liner to my Artemis DM (via the shared pager's self-only enqueue): `<EVIDENCE-RUN-ID> is different from what we've handled — help me`. Identifier + one-line reason only; no schema, no connection info, no raw values, no secrets. Verify DM delivered to me and no one else.
5. Tell me where to find this run in the local evidence log.

The job remains inform-only: no schema mutation, no DDL; execution is human-owned via approved game-data sandbox. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```
