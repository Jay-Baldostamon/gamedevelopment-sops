---
name: "Day 64 - Secret Injection at Boot (Game Data Lane)"
about: "Protect Unity build-worker credentials and mock game-data access."
title: "Day 64: Secret Injection at Boot - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 64: Secret Injection at Boot (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Inject CI/build credentials through the approved secret store for Unity jobs; verify logs and artifacts do not reveal tokens, signing keys, or license data.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Inspect how an authorized Unity build worker protects its credentials and any access to approved mock game-data fixtures. Local mock fixtures need no production or relay credentials. Keep privileged keys, signing material, and license data out of player builds, source control, and logs.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-BUILD-WORKER` (or `none` for a local-only project)
- `YOUR-APPROVED-SECRET-STORE` (or `not applicable`)
- `YOUR-MOCK-FIXTURE-PATH` (or `none`)
- `YOUR-BUILD-ARTIFACT-PATH` (or `none`)

## AI Prompt

```text
Build Worker: YOUR-BUILD-WORKER
Approved Secret Store: YOUR-APPROVED-SECRET-STORE
Mock Fixture: YOUR-MOCK-FIXTURE-PATH
Build Artifact Path: YOUR-BUILD-ARTIFACT-PATH

Verify Unity build-worker secret handling and approved mock-fixture access without revealing credentials.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Verify YOUR-MOCK-FIXTURE-PATH is an approved mock fixture. If unavailable, identify the blocker and keep data checks design-only.
2. If an authorized build worker or game-data sandbox exists, inspect its approved secret-store integration and least-privilege access without displaying values. Do not create credentials for a local fixture.
3. Where a Linux worker writes an environment file, verify ownership and mode 0600 or stricter. Do not copy credentials into worktrees or bake them into an image.
4. Use a non-sensitive test marker and approved checks to inspect build logs and player artifacts for accidental inclusion. State the limits of the checks performed; do not print real secret values.
5. Mark absent worker, sandbox, license, or artifact checks not applicable or blocked. Inspect actual results locally without posting training evidence.

Do not create a training report.

Do not execute DDL, mutate schema, or stage a change. Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane Note

This is the game-data-lane variant of Day 64.
