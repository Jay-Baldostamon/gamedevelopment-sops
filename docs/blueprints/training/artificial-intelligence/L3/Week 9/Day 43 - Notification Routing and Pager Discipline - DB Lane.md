---
name: "Day 43 - Notification Routing and Pager Discipline (Game Data Lane)"
about: "Define what may be sent to your Artemis pager versus kept local (game data lane)."
title: "Day 43: Notification Routing and Pager Discipline - Game Data Lane - <Engineer Name> - <YYYY-MM-DD>"
labels: "training,db-lane"
assignees: ''
---

# Day 43: Notification Routing and Pager Discipline (Game Data Lane)

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Define notification routing for routine versus novel Unity findings; keep pager messages minimal and put details only in the authorized local run record.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.


**Game data lane:** Model player profiles, save slots, checkpoints, collectibles, unlocks, or leaderboard contracts for this platformer. Use only an approved local/mock fixture or game-specific sandbox; do not query CRM or unrelated production systems, execute DDL, or mutate a live schema. If an approved fixture is unavailable, identify the blocker locally and keep the work design-only.

## Description

Same discipline as the standard Day 43: your Artemis pager is a triage page (`<IDENTIFIER> is <STATUS> — <one-line reason>`), not a report channel. The game data lane adds two hard rows to the truth table — raw database values and schema objects/connection details are **Stay Local** — and confirms the pager never carries schema or connection information; evidence resolves locally via the MCP-driven run log.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH

Help me define and verify the notification-routing discipline for my shared Artemis Slack pager (game data lane).

Step 1 — TRUTH TABLE. Produce a markdown decision table with exactly these rows, each with "DM allowed?" (Yes/No) and "Reason":
  - Routine game-data evidence-gathering completion summary
  - Novel/escalation page (identifier + one-line why)
  - A raw database value
  - Schema object DDL or schema details
  - Connection/DSN/host details
  - A secret value (API key, token, password, cookie, SSH private key)
  - A full diff or large excerpt
  - A link/path to the local run log
  - A table or column name (identifier only)

For each "No" row the Rule is: the payload contains a pointer (run ID, log path, object name) that resolves locally, never the content. The pager message shape is always `<IDENTIFIER> is <STATUS> — <one-line reason>`.

Step 2 — VERIFY the shared Artemis pager is routed to DM me only, with only chat:write + im:write scopes, no event subscriptions, no reading, no channels. If misconfigured, return the exact Day 41 remediation.

Step 3 — PROVE using the Day 42 DB run log: show one conforming pager message and one counter-example that MUST NOT be sent. Do not actually send either to Slack.

Do not send any Slack message this session. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets. Schema and DBA execution remain human-owned via approved game-data sandbox; the pager only notifies.
```
