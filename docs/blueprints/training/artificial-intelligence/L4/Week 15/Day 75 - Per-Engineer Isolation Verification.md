---
name: "Day 75 - Per-Engineer Isolation Verification"
about: "Prove isolation holds within the single VM: profiles, worktrees, DB pairs, keys, and relay ownership."
title: "Day 75: Per-Engineer Isolation Verification - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 75: Per-Engineer Isolation Verification

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Verify engineer isolation across Unity repository access, private notes, credentials, worktrees, caches, artifacts, and game-data test fixtures.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Close Week 15 by **verifying isolation** — now within the single VM, since the multi-instance network was deferred (see `../L6/NOTES - The Network (deferred from L4).md`; the cross-instance half of this day moved there). What remains is still real: the VM already carries several isolation boundaries that were *built* in Weeks 13–14 but never systematically *attacked*. This day attacks them. Isolation is verified by attempting the read, not by claim.

The boundaries on one VM:

1. **Hermes profiles** — the engine supports multiple profiles (`<hermes-home>/profiles/<name>/`), each with its own skills, plugins, cron, and memories. Verify profile A cannot see profile B's private memory or cron jobs.
2. **Per-tree worktree isolation** — verify separate Git indexes, Unity caches, build outputs, and approved mock fixture scratch paths. Do not assume worktrees isolate shared services or licenses.
3. **Secrets hygiene** — where `.env` files exist, verify their permissions and ensure secrets never appear in logs or chat. Do not create or copy credentials for this exercise.
4. **Relay ownership** — the relay's 401 no-key / 403 wrong-owner semantics hold even in a fleet of one: no key gets nothing, a wrong/foreign key gets nothing.

The cross-instance checks (instance A cannot read instance B's memory, keys, or diffs) are NOT performed here — they move to the deferred network level, where they have an actual second instance to test against.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-INSTANCE-NAME`
- `YOUR-HERMES-HOME` (e.g. `/home/ubuntu/<user>/.hermes`)
- `YOUR-WORKTREE-ROOT`
- `YOUR-RELAY-URL`

## AI Prompt

```text
Instance Name: YOUR-INSTANCE-NAME
Hermes Home: YOUR-HERMES-HOME
Worktree Root: YOUR-WORKTREE-ROOT
Relay URL: YOUR-RELAY-URL

Verify isolation WITHIN my single VM by attacking each boundary. Verify by attempting the read and observing the result, not by claim.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Profile isolation: if more than one Hermes profile exists on this VM, from the non-default profile attempt to list the default profile's memories and cron jobs; confirm the default's private content is not reachable. If only one profile exists, verify the profile directory structure and report that cross-profile isolation is N/A (state it, don't fake it).
2. Worktree isolation: verify each tree has its own Git index, Unity `Library`/`Temp`, build output, and approved mock scratch path. Inspect actual cross-tree checks without modifying another tree's state.
3. Secrets hygiene: where `.env` files exist, confirm they are mode 600 or stricter and no secret values appear in logs or chat. If none exist, mark that check not applicable; do not create or copy credentials.
4. Relay ownership: call YOUR-RELAY-URL with (a) no key — expect 401; (b) a deliberately wrong key string — expect 403 or equivalent denial; (c) my key — expect my queue only. Record all three outcomes.
5. Delivery-guard isolation: confirm the collision log exists-or-is-empty semantics and that the double-spawn guard would fire on a duplicate issue (inspect the watcher's guard logic; no need to trigger a real collision).

Inspect the per-boundary observations, permission audit, relay outcomes, and any failed or unavailable check locally. Do not create a training report.

Do not weaken any boundary to make a test pass. Do not expose secrets. Do not take destructive action.
```

## Game Data Lane

Use the [game-data variant](Day%2075%20-%20Per-Engineer%20Isolation%20Verification%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.
