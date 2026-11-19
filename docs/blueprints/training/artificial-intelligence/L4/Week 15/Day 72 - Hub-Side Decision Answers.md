---
name: "Day 72 - Hub-Side Decision Answers"
about: "Answer orchestrator decisions on the hub from any device."
title: "Day 72: Hub-Side Decision Answers - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 72: Hub-Side Decision Answers

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Route ambiguous Unity design, compatibility, licensing, or platform decisions to a human decision inbox with concise context and no secrets.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Make **decision answers truly hub-side**: answer on the EngineeringMCP hub page from any device/phone with NO VM access. From the resolved L4 plan (Decision 8):

- The VM orchestrator, on a novel/vague fork, writes its local decision file (L3 A+B unchanged) AND **syncs the question OUTBOUND** to the hub.
- You answer on a hub page ("Agents needing your decision" box **below** the IP-tracked allow-list) — a **plain textbox, NO LLM in the decision path** (a human answer is typed straight to the file, never rephrased/drifted by a model).
- The next orchestrator run polls the answer back OUTBOUND, posts it as the issue comment, and resumes.
- **Two separate channels:** (1) desktop workbench → VM goes through the VM's security group (IP-locked); (2) decision answers → hub page need NO VM access (hub auth only). The IP-tracker tracks **workbench machines ONLY**, never phone/mobile IPs (a mobile session answers questions only and never writes to the SG).
- **Manual work feedback loop (v1 policy, plugged in this day):** rare manual work on a VM gets a reachable, TTL'd DNS name provisioned by request through the Decision Inbox — see the **Manual Work DNS Sessions (v1)** section below.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-DECISION-INBOX` (local orchestrator-decisions folder)
- `YOUR-DECISION-HUB-URL` (the hub answer page/endpoint)
- `YOUR-IP-TRACKER-URL`
- `YOUR-MOBILE-IP` (your current mobile/phone IP, for the negative check)
- `YOUR-WORKBENCH-IP` (your current workbench IP)

## AI Prompt

```text
Decision Inbox: YOUR-DECISION-INBOX
Decision Hub URL: YOUR-DECISION-HUB-URL
IP Tracker URL: YOUR-IP-TRACKER-URL
Mobile IP: YOUR-MOBILE-IP
Workbench IP: YOUR-WORKBENCH-IP

Make decision answers hub-side and prove the two-channel model.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the outbound path: on a novel/vague fork the VM orchestrator writes its local file to YOUR-DECISION-INBOX AND syncs the question OUTBOUND to YOUR-DECISION-HUB-URL. Do NOT add an LLM to the decision path — answers are typed straight into a plain textbox and stored verbatim.
2. Demonstrate answering from a phone/any-device: from YOUR-MOBILE-IP (or a context with NO access to the VM), open YOUR-DECISION-HUB-URL, see the pending question, and answer it using HUB AUTH ONLY. Confirm this required NO VM access.
3. Prove the two-channel separation: the decision-answer channel needs NO VM access (hub auth only), while the desktop workbench → VM channel goes through the VM's security group (IP-locked to YOUR-WORKBENCH-IP).
4. Prove the IP-tracker is workbench-only: YOUR-WORKBENCH-IP is tracked as a WORKBENCH machine and updates the SG; YOUR-MOBILE-IP is NOT written to the security group (a mobile/phone session answers questions only, never writes to the SG). Confirm ≤5 past IPs retained.
5. Confirm the next orchestrator run polls the answer back OUTBOUND, posts it as the issue comment (`Decision: <question> - Engineer: <answer>`), moves the file to `./answered/`, and resumes.
6. Plug in the Manual Work DNS (v1) policy (section below) and prove ONE full manual-session lifecycle: a session requested via the Decision Inbox; the owner-provisioned record `engineering-<engineer>-<repo>.hurdman.com` with a 7-day TTL; the session registered in the run log AND `~/.hermes/manual-sessions/<repo>.md`; a delivery that would race the session's shared infra deferred (worktree-isolated deliveries unaffected); and teardown (stop server, delete record, remove note, run-log confirmation).

Show me: the pending question on the hub, the phone-side answer (hub auth only, no VM access), the workbench-only IP-tracker behavior (mobile IP NOT in the SG), and the poll-back + issue-comment + resume.

Do not expose secrets. Do not add an LLM to the decision path. Do not take destructive action.
```

## Manual Work DNS Sessions (v1)

Manual work is rare, but its feedback loop is the slowest link in the pipeline: a human
exercising a running app on a VM has no reachable DNS name. v1 fixes that with a
request-only, TTL'd lease — deliberately **not** a return of per-repo serialization
(automated delivery concurrency via worktrees is untouched; the one-at-a-time limit exists
because manual work races on infra worktrees cannot isolate: DNS, staging DBs, hub services,
long-running dev servers).

**Rules:**

- **Name** — one record per engineer per repo: `engineering-<engineer>-<repo>.hurdman.com`
  (e.g. `engineering-alanoutrank-bpc-crm.hurdman.com`). No hash suffix is deliberate: the
  name itself enforces one live session per engineer per repo without extra machinery.
- **Provisioning** — request-only via the Decision Inbox (*"manual session requested for
  \<repo\> on \<VM\>, reason: \<one line\>"*); the network owner (in v1, the only engineer
  with Route53 access to the apex zone) creates the record. No self-serve, no shared
  credentials, no IAM grants.
- **TTL** — 7 days from creation, with an expiry reminder set at creation. Renewal is a
  fresh request (or a renewal request before expiry that updates the reminder, not the record).
- **Registration** — run-log entry plus a local note `~/.hermes/manual-sessions/<repo>.md`
  (engineer, repo, record name, VM, expiry, reason). A repo with an active manual session is
  **busy for manual overlap only**: a delivery that would touch the same shared infra the
  session is exercising defers (noted in the run log); worktree-isolated code deliveries
  proceed normally.
- **Teardown** — a blueprint step, not a hope: stop the dev server, delete the record,
  remove the note, append a run-log confirmation. The owner's expiry reminder plus a weekly
  zone sweep are the backstops if a session dies first.
- **Collision accounting** — any session-related collision (double provisioning, an automated
  job racing the session, a stale record found by the sweep) is logged to the run log /
  collision log. Target stays **ZERO**; the collision log is also the signal that v2
  self-serve provisioning is needed before L5 scales manual work up.

**Deferred to L5 (v2):** delegated sub-zone (e.g. `manual.hurdman.com` hosted zone + one NS
delegation record in the apex zone), per-engineer IAM scoped to that zone, automated
provisioning/teardown driven by the hub decision API (TTL enforced by automation, not
reminders), and hash-suffixed short-lived names.

## Game Data Lane

Use the [game-data variant](Day%2072%20-%20Hub-Side%20Decision%20Answers%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

