---
name: "Week 12 Overview: Full Integration and Culmination"
about: "Assemble the L3 pipeline into one orchestrator, rehearse it, and close out."
title: "Week 12: Full Integration and Culmination"
labels: "training"
assignees: ''
---

# Week 12 Overview: Full Integration and Culmination

## Unity Game-Development Track Context

This level or week uses the same desktop 2D C# action-platformer on the current Unity LTS release. The Unity gameplay lane covers scripts, scenes, prefabs, assets, tests, and builds. The former DB lane is now the game data lane for player profiles, save slots, checkpoints, collectibles, unlocks, and leaderboard contracts.

For L3/L4, scheduling, agents, and cloud workers support the Unity repository and build/test pipeline. Use only approved mock or game-specific data, not CRM or unrelated production systems. If a fixture is unavailable, identify the blocker locally and keep the work design-only. Preserve authorization, independent review for actual PRs, and secret-handling controls; no training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Week 12 Overview - Full Integration and Culmination |
| Track | training |
| Level | week |
| Owner | Direct Supervisor / Training Team |
| Last Updated | 2026-10-01 |
| Review Cycle | Every 30 days |
| Status | draft |

Week 12 culminates L3 by assembling the workflows, rehearsing them, and validating delivery, review, and recovery locally.

The orchestrator runs **two streams in one loop** — this is the key change and the whole point of the week:

1. **Delivery stream (your authored work).** The Week 10/11 pickup relay → claim → deliver → recover path. Tasks that flow to *you* to build.
2. **Review stream (your review queue).** Open PRs from **other engineers** for which GitHub has **requested review from you** (the `reviewers` field on the PR, not issue assignees). Your Hermes reviews that work it did not author — this is the separation-of-duties counterpart that makes an autonomous review loop possible.

The Week 12 orchestrator is the machine that lets L3's vision run at full automation: your Hermes both **delivers** its own assigned work and **reviews** others' delivered work — never its own. It also **consolidates all earlier L3 jobs** (Week 10 scheduled selection, Week 11 relay poll, the pre-L3 review-queue check) into this one loop, so each engineer runs exactly one L3 job. It watches only your **active GitHub identity** — decommissioned aliases are retired, not watched.

## What to Expect This Week

- Day 56: Build the **assembled multi-stage orchestrator** that walks both streams (delivery + review) in one scheduled loop, emitting pages at each gate.
- Day 57: Run a **multi-day unattended rehearsal** on the quiet/staging thread; prove the whole loop runs with no human touch.
- Day 58: Switch to **live unattended operation** — escalation-only contact; page only on novel (Day 45) or blocked (Day 50); measure the unattended-to-escalation ratio.
- Day 59: **Retrospective** — compute escalation precision/recall, judge what a person should have been paged for, tune the novelty threshold.
- Day 60: Validate delivery, independent review boundaries, recovery, and the Unity project locally.

## The Orchestrator Contract (authoritative)

- **One loop**, one run log, one set of gates. It internally sequences pickup → claim → deliver → recover for the delivery stream, and discover → classify → review → page for the review stream.
- **Delivery stream**: driven by the Week 11 relay (`/api/pending-tasks?engineer=<you>`), claiming via the Inbox→In Progress transition, delivering through Day 49, recovering per Day 50. The poll **claims fast and offloads** heavy implement/validate/PR work to a **durable one-shot cron job** (its own scheduler-owned process, not bound by the poll's watchdog, auto-removed after one run); it never runs long builds inline and never uses `terminal(background=true)` for delivery (those children are SIGTERM'd on poll exit).
- **Review stream**: driven by open PRs requesting review from you (`pr review-queue` / open PRs where `reviewers` includes you). Each is reviewed inform-only — report (approve / request changes), never mutate — and routine stays quiet while novel pages (Day 45), blocked escalates (Day 50).
- **Decision Inbox (the only way an engineer answers a decision):** when delivery hits a genuinely novel/vague fork (Day 45), the orchestrator writes a `<issue>.md` file to the local `orchestrator-decisions/` folder with the question, pages the engineer a one-liner pointing there, and pauses that task. The engineer answers in the file (terminal/editor — Slack stays a read-only pager); on the next run the orchestrator posts the decision as a GitHub issue comment for trackability, moves the file to `./answered/`, and resumes the task using that direction. A blank answer re-pages as a reminder but never re-runs the task.
- **Separation of duties (invariant):** never review or approve a PR you authored; never claim/self-review your own delivered work. The orchestrator routes authored work to *other* engineers' reviewers and reviews only what it did not write.
- `approvals.cron_mode: deny` holds: non-destructive delivery and inform-only review are allowed; destructive commands (force-push, reset --hard) are blocked and reported, never bypassed.

## Week 12 Success Criteria

- [ ] One assembled orchestrator runs both the delivery and the review stream in a single loop with one run log.
- [ ] The review stream only ever picks up PRs whose `reviewers` include me (other engineers' work) and never my own.
- [ ] A multi-day unattended rehearsal completes with every pickup claimed+delivered and every queued review handled — zero human touch required.
- [ ] Live unattended operation kept human contact escalation-only; routineruns stayed quiet, novel/blocked paged conformingly.
- [ ] Decision points round-trip through the local `orchestrator-decisions/` inbox and land on the issue as a comment; a blank answer re-pages but never re-runs the task.
- [ ] Escalation precision and recall are inspected locally, and any proposed threshold change is justified.
- [ ] The local culmination exercises delivery, review boundaries, and recovery without a training submission.
- [ ] Separation of duties held throughout: no self-review, no self-merge, no mutation by an inform-only reviewer.

## Guiding Principle

Week 12 is successful when delivery and review paths are tested safely, with clear blockers and separation of duties. Actual project work remains subject to authorization, independent review, and CI.

## Game Data Lane

**Week 12 (Game Data Lane).** Use the provided variants to orchestrate local validation of approved mock player-save or progression data. Review another engineer's authorized work only when available; do not post training evidence, execute DDL, or mutate a live schema. Keep the same separation-of-duties boundary.