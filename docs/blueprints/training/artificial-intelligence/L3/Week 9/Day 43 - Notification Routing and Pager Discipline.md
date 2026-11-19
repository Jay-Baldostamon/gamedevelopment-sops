---
name: "Day 43 - Notification Routing and Pager Discipline"
about: "Define exactly what may be sent to your Artemis pager versus kept local."
title: "Day 43: Notification Routing and Pager Discipline - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 43: Notification Routing and Pager Discipline

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Define notification routing for routine versus novel Unity findings; keep pager messages minimal and put details only in the authorized local run record.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Define the standing rule for what information may ever reach your Artemis Slack pager versus what must remain local. Your Artemis pager is a **triage page, not a report channel**: it exists to tell you *which* review needs your eyes and *why*, nothing more. The payload stays minimal — an identifier plus a one-line reason — and every sensitive detail (diffs, secrets, full findings, credentials) must stay in the local Hermes run log, where you go look when paged.

The deliverable is a decision table ("routing truth table") you keep alongside the pager setup, mapping each kind of content to Allowed in DM vs Stay Local, with the reason. This discipline is what keeps the write-only pager truly write-only and gives you the guarantee that nothing sensitive ever crosses the wire.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH

Help me define and verify the notification-routing discipline for my shared Artemis Slack pager.

Step 1 — TRUTH TABLE. Produce a markdown decision table with exactly these rows, each with a column for "DM allowed?" (Yes/No) and "Reason":
  - Routine review completion summary
  - Novel/escalation page (identifier + one-line why)
  - A secret value (API key, token, password, cookie, SSH private key)
  - A full PR diff or large code excerpt
  - A link/path to the local run log
  - A GitHub issue or PR URL
  - A credential filename or path
  - A raw database value (if applicable)

For each "No" row, the Rule must be explicit: the payload must contain a pointer (run ID, log path, issue/PR URL) that resolves locally, not the content itself. The pager message shape is always: `<IDENTIFIER> is <STATUS> — <one-line reason>`, e.g. `REV-2325 is weird — acceptance criteria don't match the issue`.

Step 2 — VERIFY. Confirm the shared Artemis pager routes to my DM only and carries exactly the two scopes (chat:write, im:write) — no event subscriptions, no reading, no channels. If anything is misconfigured, stop and return the exact remediation from Day 41.

Step 3 — PROVE. Using the run log from Day 42, show me one example of what a conforming pager message would look like for that run, and one counter-example that MUST NOT be sent (containing a secret or full detail). Do not actually send either to Slack.

Do not send any Slack message during this session. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane

Use the [game-data variant](Day%2043%20-%20Notification%20Routing%20and%20Pager%20Discipline%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

