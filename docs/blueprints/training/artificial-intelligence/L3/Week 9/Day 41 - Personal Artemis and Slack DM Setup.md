---
name: "Day 41 - Shared Artemis Pager and Slack DM Routing"
about: "Register for the org's shared inform-only Artemis pager and verify pages reach your DM only."
title: "Day 41: Shared Artemis Pager and Slack DM Routing - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 41: Shared Artemis Pager and Slack DM Routing

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Route scheduled review notifications for Unity gameplay work; ensure pages identify the task and never include source diffs, secrets, or private assets.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

L3 pages you through the **org's single, org-wide inform-only Artemis pager**, not a per-engineer bot. Artemis is a write-only Slack app that DMs an engineer when their Hermes finds a review or task it cannot resolve alone. It never listens, never reads a channel, and is never added to any channel — and one install serves every engineer, because a Slack bot is not 1:1 with a user: it DMs anyone by Slack member ID. Per-engineer bots would mean the supervisor provisioning and maintaining one Slack app per engineer; workspace app install is admin-gated, so engineers cannot self-serve anyway. One shared bot is simpler and central changes update everyone at once.

In this session you (1) confirm your **Slack member ID** is registered in the pager's routing table so pages reach *your* DM, (2) understand how the shared pager keeps isolation **without** a per-engineer bot — by self-only enqueue, not bot-per-engineer — and (3) prove a conforming test page arrives at your DM and no one else's. Your local Hermes pages through the org's per-engineer-keyed enqueue endpoint, so a page can only ever be directed at the engineer whose key sent it. You hold no bot token, because there is no per-engineer bot.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-FULL-NAME`
- `YOUR-SLACK-MEMBER-ID` (find it in the Slack app: profile -> ... -> Copy member ID)
- `YOUR-PAGER-ENQUEUE-ENDPOINT` (the org's per-engineer-keyed pager delivery endpoint on `ssh EngineeringMCP`)
- `YOUR-RELAY-KEY` (name of your existing per-engineer relay key, `ptk_...` — reuses the L3 relay key issuance; no new credential)

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Full Name: YOUR-FULL-NAME
Slack Member ID: YOUR-SLACK-MEMBER-ID
Pager Enqueue Endpoint: YOUR-PAGER-ENQUEUE-ENDPOINT
Relay Key: YOUR-RELAY-KEY

Help me register and verify my routing on the org's shared inform-only Artemis pager for the L3 AI training.

First, repeat the repository folder, full name, Slack member ID, pager endpoint, and relay key. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. EXPLAIN THE MODEL. Confirm the shared-pager design: one org-wide Artemis bot DMs every engineer; a page sent by my Hermes to YOUR-PAGER-ENQUEUE-ENDPOINT is authenticated by my per-engineer key (YOUR-RELAY-KEY) and is only ever delivered to the member ID bound to that key (401 no-key / 403 if the target does not match the key's owner). State back in one sentence why the shared bot does NOT leak my isolation.
2. CONFIRM REGISTRATION. Check whether my Slack member ID (YOUR-SLACK-MEMBER-ID) is present in the pager's routing table (per-engineer read, keyed like the enqueue). If it is not registered, produce the exact one-line request to send my supervisor to register it — do not send it yourself.
3. PROVE DM-ONLY DELIVERY. Craft the exact conforming test one-liner: `TEST-41 is routing-verified — <my member ID>`. Send it to YOUR-PAGER-ENQUEUE-ENDPOINT to my DM and verify it was delivered to me and to no other member or channel.
4. VERIFY THE CONTRACT. Confirm the shared pager holds ONLY `chat:write` + `im:write` scopes: no event subscriptions, no reading, no channels, no socket mode, no slash commands (Day 41 discipline). If any part differs, report it as a blocker to be fixed centrally — not per-engineer.
5. RECORD. Tell me where this routing verification is recorded in my local run log, so when I sit down I can open the run the pager points to.

Do not create, name, or request a new Slack bot; do not request any bot token — the shared pager has none to hand out per engineer. Do not call any Slack API directly. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Supervisor Note (not sent to the engineer)

No per-engineer bot is created. The single org-wide Artemis pager (installed from `Resources/artemis-inform-only-app-manifest.json`) is the one delivery surface. On this day, ensure the engineer's Slack member ID is present in the pager's routing table (member ID → relay-key owner) and that a test page to that exact member ID resolves. Onboarding a new engineer = add a member ID → key mapping to the routing table (hub-admin), never a new app install. Keep the two scopes only; central changes propagate to all engineers automatically. The engineer never holds a bot token because there is no per-engineer bot.

## Game Data Lane

Use the [game-data variant](Day%2041%20-%20Personal%20Artemis%20and%20Slack%20DM%20Setup%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

