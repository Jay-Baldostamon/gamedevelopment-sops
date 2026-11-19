---
name: "Day 65 - Decision-Inbox Sync and First Unattended Run"
about: "Sync orchestrator decisions hub-side and prove one full unattended loop on the cloud."
title: "Day 65: Decision-Inbox Sync and First Unattended Run - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 65: Decision-Inbox Sync and First Unattended Run

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Run the first unattended Unity validation/build on a safe branch and record the exact editor, package, test, and build outcomes.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Close Week 13 by proving the L3 orchestrator runs **unattended on the cloud**, with its decision-inbox answers now answered **hub-side**. From the resolved L4 plan (Decision 8):

- **The answer surface moves to the hub.** On a novel/vague fork, the VM orchestrator writes its local decision file (L3 A+B unchanged) AND **syncs the question OUTBOUND** to the EngineeringMCP hub. You answer on a hub page ("Agents needing your decision" box **below** the IP-tracked allow-list) — a **plain textbox, NO LLM in the decision path** (a human answer is typed straight to the file, never rephrased/drifted by a model). The next run polls the answer back OUTBOUND, posts it as the issue comment, and resumes.
- **Two separate channels.** (1) The desktop workbench → VM goes through the VM's security group (IP-locked). (2) Decision answers → hub page need NO VM access and work from any device/phone (hub auth only). The IP-tracker tracks workbench machines ONLY, never phone/mobile IPs.
- **A blank answer re-pages a reminder but never re-runs the task.**
- The L3 orchestrator itself is unchanged in behavior — this week only changes *where* it runs and *where* decisions get answered.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-DECISION-INBOX` (the local orchestrator-decisions folder on the VM)
- `YOUR-DECISION-HUB-URL` (the EngineeringMCP hub-side answer endpoint)
- `YOUR-PENDING-TASKS-API-KEY` (held in VM secrets, never in the prompt body)
- `YOUR-RELAY-URL` (the Week-11-style pickup relay)
- `YOUR-GITHUB-HANDLE`
- `YOUR-ORCHESTRATOR-SCHEDULE`

## AI Prompt

```text
Decision Inbox: YOUR-DECISION-INBOX
Decision Hub URL: YOUR-DECISION-HUB-URL
Relay URL: YOUR-RELAY-URL
GitHub Handle: YOUR-GITHUB-HANDLE
Orchestrator Schedule: YOUR-ORCHESTRATOR-SCHEDULE
Pending Tasks API Key (YOUR-PENDING-TASKS-API-KEY): (held in my VM secrets — do NOT print or paste a value)

Close Week 13: make my cloud orchestrator's decision inbox hub-side and prove one full loop runs unattended.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the orchestrator on the VM runs on YOUR-ORCHESTRATOR-SCHEDULE under the Day-61 systemd service, one loop, one run log.
2. Verify the DECISION INBOX path YOUR-DECISION-INBOX (local `<issue>.md` files, L3 A+B unchanged) exists on the VM.
3. Wire the HUB-SIDE answer surface: on a novel/vague fork, the orchestrator writes the local file AND syncs the question OUTBOUND to YOUR-DECISION-HUB-URL. Do NOT add an LLM to the decision path — a human answer is typed straight into the hub textbox and stored verbatim.
4. Demonstrate the round trip with a synthetic pending decision in an approved test environment: sync the local question to the hub, answer it from a different device, and confirm the next run polls the answer back, moves the file to `./answered/`, and resumes. Do not post the synthetic answer to a real issue. A real project decision may be recorded on its issue only when authorized.
5. Confirm a blank answer re-pages a reminder but the task never re-runs while pended.
6. Prove the delivery stream: `GET <YOUR-RELAY-URL>?engineer=YOUR-GITHUB-HANDLE` with my key returns a pickup (or a clean empty queue); a pickup is claimed (Inbox → In Progress) and worked autonomously — never a page asking whether to start. (Claiming mechanics evolved later in L4: from Week 14 the transition is done by the deterministic hub-side claimer on EngineeringMCP, not inline by the VM orchestrator — the day's principle, autonomous pickup-to-work with no permission page, is unchanged.)

Inspect the hub answer round trip, operational log, and authorized delivery loop locally without submitting training evidence.

Do not expose secrets or add an LLM to the decision path. Do not take destructive action.
```

## Game Data Lane

Use the [game-data variant](Day%2065%20-%20Decision-Inbox%20Sync%20and%20First%20Unattended%20Run%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.
