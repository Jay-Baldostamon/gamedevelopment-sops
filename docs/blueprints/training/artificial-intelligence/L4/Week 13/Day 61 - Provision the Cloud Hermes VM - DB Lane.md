---
name: "Day 61 - Provision the Cloud Hermes VM (Game Data Lane)"
about: "Provision instance 1 and verify read-only MCP relay reachability."
title: "Day 61: Provision the Cloud Hermes VM - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 61: Provision the Cloud Hermes VM (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Provision an approved build/automation worker for the Unity project, documenting editor-version availability, disk/cache needs, license handling, and safe teardown.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Provision your **first cloud Hermes VM** from the org's standard template and supervise it with a single systemd user service — identical to the standard lane — and additionally verify the VM can reach the DB **MCP relays read-only**. Read-only throughout; no schema mutation, no DDL; execution stays human-owned via approved game-data sandbox. Key facts: `t3.large` per engineer, no public ingress, ONE `systemd` **user** service runs `hermes serve` + the cron ticker as the engineer's OS account, and the desktop app authenticates over the trusted tailnet only.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-INSTANCE-NAME`
- `YOUR-AMI-ID` (the org's standard L4 template AMI)
- `YOUR-SG-NAME`
- `YOUR-VM-HOST`
- `YOUR-ENGINEER-OS-USER`
- `YOUR-HERMES-CONFIG-PATH`
- `YOUR-GATEWAY-PORT` (e.g. `9119`)
- `YOUR-CHEAP-VISION-MODEL` (cheap vision-capable OpenRouter model id for side-task image analysis, e.g. `xiaomi/mimo-v2.6-flash` $0.12/$0.28 — see the standard lane's gotcha 9)

## AI Prompt

```text
Instance Name: YOUR-INSTANCE-NAME
AMI ID: YOUR-AMI-ID
Security Group: YOUR-SG-NAME
VM Host: YOUR-VM-HOST
Engineer OS User: YOUR-ENGINEER-OS-USER
Hermes Config Path: YOUR-HERMES-CONFIG-PATH
Gateway Port: YOUR-GATEWAY-PORT
Vision Model: YOUR-CHEAP-VISION-MODEL

Provision my first cloud Hermes VM from the org's standard L4 template, supervise it with one systemd user service, and verify it can reach the DB MCP relays read-only.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Provision the instance: launch YOUR-INSTANCE-NAME from YOUR-AMI-ID as a t3.large, no public IP / no EIP, tagged Owner=Engineering; confirm running.
2. Confirm only minimal private/Tailscale ports are open; NO public ingress.
3. Install/verify Hermes using the current official Hermes documentation; configure YOUR-HERMES-CONFIG-PATH for the remote-gateway role.
4. Create ONE systemd USER service (as YOUR-ENGINEER-OS-USER) that starts `hermes serve` on YOUR-GATEWAY-PORT AND your cron ticker on boot, restarts on crash, not root. Enable at boot.
5. Verify the service is active and `hermes serve` is listening only on the private/Tailscale interface.
6. Verify the VM can reach the `approved game-data MCP tools` MCP relays READ-ONLY: run a harmless schema-describe / metadata read against one table and confirm it succeeds and returns metadata. Do NOT run any write, insert, update, or DDL statement.
7. From my desktop workbench, add the VM as a remote gateway (YOUR-VM-HOST:YOUR-GATEWAY-PORT) and confirm I can reach the agent over the trusted tailnet only.
8. **Pin the auxiliary vision route to a cheap vision-capable model so `vision_analyze` works** (`hermes config set auxiliary.vision.provider openrouter` + `hermes config set auxiliary.vision.model YOUR-CHEAP-VISION-MODEL`) — the main model is text-only and the default `provider: auto` fails side-task vision with `RuntimeError: No LLM provider configured for task=vision provider=auto` (see the standard lane's gotcha 9). Verify by actually calling `vision_analyze` on a real image.

Show me: instance launch metadata, the systemd unit, the listening socket, the read-only MCP metadata result, the gateway connection, and a successful `vision_analyze` call result on a real image.

Do not execute DDL, mutate schema, or stage a change. Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets. Do not expose any backend to the public internet.
```

## Gotchas (proven on the supervisor's live test — same as the standard lane)

The identical Day 61 pitfalls apply here, most importantly: **the gateway rejects the desktop's public Host unless `dashboard.public_url` is set** — when the desktop connects at the public IP, `/api/status` and `/login` return `400 Invalid Host header` (a `GET /` 302 is a false positive), until `hermes config set dashboard.public_url "http://<PUBLIC_IP>:<PORT>"` + a user-authorized `hermes.service` restart. Verify password auth via `POST /auth/password-login` → 200 + cookie, then `GET /api/auth/me`. A service restart does NOT change the instance's public IP (it's AWS-assigned at the ENI, moving only on instance stop/start). Full detail: items 1–9 of the standard lane's gotchas (item 9 covers aux vision routing — `auxiliary.vision` must be pinned to a vision-capable model or `vision_analyze` fails with `provider=auto` on a text-only main model).

## Game Data Lane Note

This is the game-data-lane variant of Day 61.
