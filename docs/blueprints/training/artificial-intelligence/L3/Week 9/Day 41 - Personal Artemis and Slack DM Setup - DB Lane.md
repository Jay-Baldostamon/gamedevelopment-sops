---
name: "Day 41 - Shared Artemis Pager and Slack DM Routing (Game Data Lane)"
about: "Register for the org's shared inform-only Artemis pager (game data lane variant)."
title: "Day 41: Shared Artemis Pager and Slack DM Routing - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 41: Shared Artemis Pager and Slack DM Routing (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Route scheduled review notifications for Unity gameplay work; ensure pages identify the task and never include source diffs, secrets, or private assets.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Same setup as the standard Day 41: L3 pages you through the **org's single, org-wide inform-only Artemis pager**, not a per-engineer bot. A Slack bot is not 1:1 with a user — one install DMs any engineer by Slack member ID, so the org runs one shared Artemis and adds each engineer's member ID to its routing table instead of provisioning a bot per engineer (workspace app install is admin-gated, so engineers cannot self-serve). The game-data-lane variant adds a verification that the page reaches the game data engineer's DM specifically (not any channel), and a reminder that schema / DBA execution remains human-owned — the pager never drives MCP-based mutations. You hold no bot token; isolation is by self-only enqueue, not bot-per-engineer.

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

Help me register and verify my routing on the org's shared inform-only Artemis pager for the L3 AI training (game data lane).

First, repeat the repository folder, full name, Slack member ID, pager endpoint, and relay key. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. EXPLAIN THE MODEL. Confirm the shared-pager design: one org-wide Artemis bot DMs every engineer; a page sent by my Hermes to YOUR-PAGER-ENQUEUE-ENDPOINT is authenticated by my per-engineer key (YOUR-RELAY-KEY) and is only ever delivered to the member ID bound to that key (401 no-key / 403 if the target does not match the key's owner). State back in one sentence why the shared bot does NOT leak my isolation.
2. CONFIRM REGISTRATION. Check whether my Slack member ID (YOUR-SLACK-MEMBER-ID) is present in the pager's routing table (per-engineer read, keyed like the enqueue). If it is not registered, produce the exact one-line request to send my supervisor to register it — do not send it yourself.
3. PROVE DM-ONLY DELIVERY. Craft the exact conforming test one-liner: `TEST-41 is routing-verified — <my member ID>`. Send it to YOUR-PAGER-ENQUEUE-ENDPOINT to my DM and verify it was delivered to me and to no other member or channel.
4. VERIFY THE CONTRACT. Confirm the shared pager holds ONLY `chat:write` + `im:write` scopes: no event subscriptions, no reading, no channels, no socket mode, no slash commands (Day 41 discipline). If any part differs, report it as a blocker to be fixed centrally — not per-engineer. Remind me once that schema and DBA execution stay human-owned: the pager only notifies me; it never runs mutations.
5. RECORD. Tell me where this routing verification is recorded in my local run log, so when I sit down I can open the run the pager points to.

Do not create, name, or request a new Slack bot; do not request any bot token — the shared pager has none to hand out per engineer. Do not call any Slack API directly. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Supervisor Note (not sent to the engineer)

Same as the standard lane: no per-engineer bot — ensure the game data engineer's Slack member ID is present in the shared pager's routing table (member ID → relay-key owner) and a test page to that exact member ID resolves. Onboarding a game data engineer = add a member ID → key mapping to the routing table (hub-admin), never a new app install. The shared pager must remain inform-only; explicitly decline any request to wire MCP or schema-mutation capabilities through the bot.
