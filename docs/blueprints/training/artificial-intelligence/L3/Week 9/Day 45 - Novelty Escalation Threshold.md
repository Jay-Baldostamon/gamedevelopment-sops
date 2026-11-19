---
name: "Day 45 - Novelty Escalation Threshold"
about: "Make Hermes page you only when a review is novel, not routine."
title: "Day 45: Novelty Escalation Threshold - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 45: Novelty Escalation Threshold

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Tune the novelty threshold using Unity review examples, paging on ambiguous gameplay regressions or unsafe project changes while keeping routine results quiet.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Teach Hermes the central L3 distinction: **routine vs novel**, and page you **only** when a review is novel. A **routine** result is one that fits patterns and skills you have handled before — Hermes completes it and stays quiet (Day 44). A **novel** result is one that does not match what the review skills and prior run history cover — that is when the pager fires: `REV-<ID> is weird, help me`, a bare conforming one-liner that points you to the local run log, nothing more.

You will classify the current review, confirm the threshold logic with Hermes, and verify the escalation reaches your Artemis DM in a conforming shape. This is the interaction you described at the start of L3: Hermes does the work itself, and only checks in when it genuinely needs you.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-PR-NUMBER-OR-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Pull Request: YOUR-PR-NUMBER-OR-URL

Help me make my daily review page me only when the result is NOVEL, and stay quiet on ROUTINE results.

First, repeat the repository folder and pull request. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Define the routine-vs-novel rule with me explicitly. Start with this: a result is ROUTINE when the installed review skills and prior run history provide a directly applicable, already-handled pattern for every finding (verdict is well-supported, or a known gap type with an established handling path). A result is NOVEL when the review needs a decision, judgement, or pattern not already covered — e.g. a new gap type, an ambiguous requirement, a conflict between the issue and the diff, or something outside what the skills describe. Show me the rule you will apply.
2. Run the inform-only review for YOUR-PR-NUMBER-OR-URL (or reuse today's Day 44 run).
3. Classify the result ROUTINE or NOVEL and justify the classification against the rule. Note that novelty is about the *handling* needing me, not about the presence or absence of a bug.
4. Apply the pager rule:
   - If ROUTINE: send NO escalation. Confirm what was kept local and that no DM fired.
   - If NOVEL: send the exact conforming one-liner to my Artemis DM (via the shared pager's self-only enqueue): `REV-<ISSUE-OR-RUN-ID> is different from what we've handled — help me`. The message must contain only the identifier and the one-line reason; no secret, no diff, no full findings. Verify the DM was delivered to me and to no one else, and record the run ID I should look up locally.
5. Tell me where to find this run in the local log when I sit down, so the page is actionable.

Do not modify the review skills. Do not submit a GitHub review, merge, push, change CI, or change permissions. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane

Use the [game-data variant](Day%2045%20-%20Novelty%20Escalation%20Threshold%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

