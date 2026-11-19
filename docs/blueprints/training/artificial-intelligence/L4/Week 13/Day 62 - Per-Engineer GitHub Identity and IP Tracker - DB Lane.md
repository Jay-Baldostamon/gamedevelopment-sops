---
name: "Day 62 - Per-Engineer GitHub Identity and IP Tracker (Game Data Lane)"
about: "Authenticate the VM as yourself and lock egress to your live IP."
title: "Day 62: Per-Engineer GitHub Identity and IP Tracker - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 62: Per-Engineer GitHub Identity and IP Tracker (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Set up per-engineer identities and access records for the Unity repository and build services; grant only the permissions needed for assigned work.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Give the VM **your** GitHub identity via `gh` device flow, restrict inbound workbench access to your approved IP, and verify that the VM user can read an approved mock game-data fixture. Key facts: the OAuth device flow uses your own identity without exposing secrets; the IP tracker maintains the security-group allow-list for workbench machines.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-HANDLE`
- `YOUR-VM-HOST`
- `YOUR-IP-TRACKER-URL`
- `YOUR-WORKBENCH-CURRENT-IP`
- `YOUR-PAST-IP-LIMIT` (default 5)

## AI Prompt

```text
GitHub Handle: YOUR-GITHUB-HANDLE
VM Host: YOUR-VM-HOST
IP Tracker URL: YOUR-IP-TRACKER-URL
Current Workbench IP: YOUR-WORKBENCH-CURRENT-IP
Past IP Limit: YOUR-PAST-IP-LIMIT

Make my cloud VM act as me on GitHub, restrict inbound workbench access to my approved IP, and confirm read-only access to the approved mock fixture.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. On the VM, run `gh auth login` and complete the DEVICE/BROWSER flow yourself (my interactive OAuth identity; never paste or log a token). Confirm `gh auth status` shows MY handle YOUR-GITHUB-HANDLE with repo + read:org scope. No Classic PAT, no GitHub App/token.
2. Do not print, log, or commit `~/.config/gh/hosts.yml`.
3. Register YOUR-WORKBENCH-CURRENT-IP in the IP-tracker and confirm it updates the VM's security group to allow-list that IP. Keep at most YOUR-PAST-IP-LIMIT past IPs (default 5). Confirm the tracker marks my IP as a WORKBENCH machine, not phone/mobile.
4. Verify `gh api user --jq .login` returns YOUR-GITHUB-HANDLE.
5. Confirm the VM user can read the approved mock fixture without changing it. If access requires a separate authorized sandbox identity, verify that access without exposing credentials.
6. Verify inbound access is restricted to the approved workbench IPs; do not claim the inbound allow-list restricts GitHub egress.

Inspect locally: `gh auth status` (handle + scopes, token redacted), the IP-tracker entry, the SG allow-list, `gh api user`, and the read-only fixture check.

Do not execute DDL, mutate schema, or stage a change. Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets. Do not widen the SG beyond my workbench IPs.
```

## Game Data Lane Note

This is the game-data-lane variant of Day 62.
