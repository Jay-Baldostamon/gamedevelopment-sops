---
name: "Day 64 - Secret Injection at Boot"
about: "Protect Unity build-worker credentials and player artifacts."
title: "Day 64: Secret Injection at Boot - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 64: Secret Injection at Boot

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Inject CI/build credentials through the approved secret store for Unity jobs; verify logs and artifacts do not reveal tokens, signing keys, or license data.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Inspect how an authorized Unity build worker obtains only the credentials it needs from the approved secret store. Keep privileged keys, signing material, and license data out of source control, player builds, and logs. A local project that does not require credentials does not need a new secret store.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-BUILD-WORKER` (or `none` for a local-only project)
- `YOUR-APPROVED-SECRET-STORE` (or `not applicable`)
- `YOUR-BUILD-ARTIFACT-PATH` (or `none`)

## AI Prompt

```text
Build Worker: YOUR-BUILD-WORKER
Approved Secret Store: YOUR-APPROVED-SECRET-STORE
Build Artifact Path: YOUR-BUILD-ARTIFACT-PATH

Verify Unity build-worker secret handling without revealing credential values.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. If an authorized build worker exists, inspect its approved secret-store integration, least-privilege access, environment separation, and credential rotation policy without displaying secret values.
2. Where a Linux worker writes an environment file, verify ownership and mode 0600 or stricter. Do not copy credentials into worktrees or bake them into an image.
3. Use a non-sensitive test marker and the project's approved checks to inspect build logs and player artifacts for accidental inclusion. Never search by printing real secret values; state the limits of the checks performed.
4. If there is no worker, secret store, license, or build artifact, mark the corresponding checks not applicable or blocked. Keep the exercise local and design-only where necessary.

Inspect actual access, permission, and marker-check outcomes locally. Do not create a training report.

Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets. Do not take destructive action.
```

## Game Data Lane

Use the [game-data variant](Day%2064%20-%20Secret%20Injection%20at%20Boot%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.
