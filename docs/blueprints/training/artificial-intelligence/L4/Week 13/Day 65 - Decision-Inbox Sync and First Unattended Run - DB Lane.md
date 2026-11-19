---
name: "Day 65 - Decision-Inbox Sync and First Unattended Run (Game Data Lane)"
about: "Sync DB orchestrator decisions hub-side and prove one unattended loop."
title: "Day 65: Decision-Inbox Sync and First Unattended Run - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 65: Decision-Inbox Sync and First Unattended Run (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Run the first unattended Unity validation/build on a safe branch and record the exact editor, package, test, and build outcomes.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Run the game-data orchestrator on an authorized cloud VM with decision answers on the hub. Its delivery stream validates approved mock player data locally. Keep synthetic answers out of real issues; authorized project decisions may use the normal issue handoff. No schema mutation or DDL.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-DECISION-INBOX`
- `YOUR-DECISION-HUB-URL`
- `YOUR-PENDING-TASKS-API-KEY` (held in VM secrets, never in the prompt body)
- `YOUR-RELAY-URL`
- `YOUR-GITHUB-HANDLE`
- `YOUR-ORCHESTRATOR-SCHEDULE`

## AI Prompt

```text
Decision Inbox: YOUR-DECISION-INBOX
Decision Hub URL: YOUR-DECISION-HUB-URL
Relay URL: YOUR-RELAY-URL
GitHub Handle: YOUR-GITHUB-HANDLE
Orchestrator Schedule: YOUR-ORCHESTRATOR-SCHEDULE
Pending Tasks API Key (YOUR-PENDING-TASKS-API-KEY): (held in my VM secrets — do NOT print or paste a value)

Close Week 13: make my cloud DB orchestrator's decision inbox hub-side and prove one full loop runs unattended, read-only.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the DB orchestrator runs on YOUR-ORCHESTRATOR-SCHEDULE under the Day-61 systemd service, one loop, one run log.
2. Verify the local decision inbox YOUR-DECISION-INBOX exists on the VM.
3. Wire the hub-side answer surface: on a novel/vague fork, write the local `<issue>.md` AND sync OUTBOUND to YOUR-DECISION-HUB-URL. NO LLM in the decision path.
4. Demonstrate the round trip with a synthetic decision in an approved test environment: local file → hub → human answer → outbound poll → `./answered/` → resume. Do not post the synthetic answer to a real issue.
5. Confirm a blank answer re-pages a reminder but never re-runs the task.
6. Inspect the relay result (pickup or clean empty). If an authorized test pickup is available, claim it using the configured path and validate the approved mock player-data contract locally. Do not post training evidence or create a schema-change record.

Inspect the hub answer round trip, operational log, and any authorized local validation result. Mark unavailable checks as blocked.

Do not execute DDL, mutate schema, or stage a change. Do not expose secrets or add an LLM to the decision path.
```

## Game Data Lane Note

This is the game-data-lane variant of Day 65.
