---
name: "Day 58 - Live Unattended Operation"
about: "Run the orchestrator live with escalation-only human contact."
title: "Day 58: Live Unattended Operation - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 58: Live Unattended Operation

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Operate the approved unattended Unity workflow and confirm routine jobs complete with evidence while ambiguous or risky changes page a human.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Move the orchestrator from **rehearsal to live operation** — running against real delivery and review queues with **escalation-only human contact**. The orchestrator now works real tasks and reviews real PRs of other engineers, autonomously, and a human hears from it only when an event is **novel** (Day 45) or **blocked** (Day 50). This is L3's end state: the engineer supervises rather than operates; the machine delivers and reviews on their behalf and pages only what genuinely needs a person.

> Same machine as Day 56/57 — the change is intent and separation, not new code. A routine delivery or a routine approve/changes-requested review must complete silently; only novel/blocked escalations page.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-ORCHESTRATOR-JOB`
- `YOUR-GITHUB-HANDLE`
- `YOUR-RUN-LOG-PATH`
- `YOUR-OPERATION-WINDOW` (e.g. `7 days`)
- `YOUR-REVIEW-DURATION` (when you'll inspect, e.g. `the end of the window`)

## AI Prompt

```text
Orchestrator Job: YOUR-ORCHESTRATOR-JOB
GitHub Handle: YOUR-GITHUB-HANDLE
Run Log Path: YOUR-RUN-LOG-PATH
Operation Window: YOUR-OPERATION-WINDOW

Help me run the orchestrator LIVE for the operation window, with escalation-only human contact, and verify the boundary held.

First, repeat the orchestrator job, run log path, and operation window. If any value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the orchestrator is scheduled and enabled for YOUR-OPERATION-WINDOW, and confirm the boundary it must respect: routine delivery and routine review complete silently; ONLY novel (Day 45) or blocked (Day 50) events page a human.
2. Run it live. Throughout: deliver every delivery pickup; review every queued review (report-only, never mutating); page ONLY on novel/blocked. Keep working without human instruction during the window.
3. At YOUR-REVIEW-DURATION, replay the run log and measure the boundary:
   - Unattended-to-escalation ratio (deliveries+reviews handled silently vs pages sent).
   - For every page sent: was it genuinely novel or blocked? Was any routine item incorrectly escalated (false positive)?
   - For every silent completion: was any of them actually novel (false negative/under-escalation)?
4. Report an OPERATIONS VERDICT: GOOD (boundary held, escalation-only worked) or ADJUST (list the specific threshold/rule to tune from Day 59).
5. Confirm separation of duties held: no authored PR was self-reviewed/self-merged; no inform-only review mutated code.

Do not take destructive action, do not retire jobs live, do not merge or self-approve. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane

Use the [game-data variant](Day%2058%20-%20Live%20Unattended%20Operation%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

