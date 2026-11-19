# Week 10 Overview: Scheduled Task Delivery

## Unity Game-Development Track Context

This level or week uses the same desktop 2D C# action-platformer on the current Unity LTS release. The Unity gameplay lane covers scripts, scenes, prefabs, assets, tests, and builds. The former DB lane is now the game data lane for player profiles, save slots, checkpoints, collectibles, unlocks, and leaderboard contracts.

For L3/L4, scheduling, agents, and cloud workers support the Unity repository and build/test pipeline. Use only approved mock or game-specific data, not CRM or unrelated production systems. If a fixture is unavailable, identify the blocker locally and keep the work design-only. Preserve authorization, independent review for actual PRs, and secret-handling controls; no training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Week 10 Overview - Scheduled Task Delivery |
| Track | training |
| Level | week |
| Owner | Direct Supervisor / Training Team |
| Last Updated | 2026-09-30 |
| Review Cycle | Every 30 days |
| Status | draft |

Week 10 takes Week 9's scheduling foundation and turns it into **scheduled, routed task delivery**. Where Week 9 automated *review* on a schedule, Week 10 automates the *task lifecycle*: generating tasks from a queue, delivering them to the right engineer over the pager, assigning them deterministically, delivering the work through to a reviewed PR, and recovering tasks that stall or block.

## What to Expect This Week

- Day 46: Hermes generates the next development task from a queue on a schedule, deterministically and with evidence.
- Day 47: The pager (Artemis DM) delivers the day's task as a conforming one-liner; the engineer claims it back at their local Hermes.
- Day 48: Generated tasks route to the right engineer/cohort automatically by an auditable assignment rule.
- Day 49: A claimed task follows scheduled Unity delivery or local mock game-data validation, preserving actual PR merge gates.
- Day 50: A recovery pass detects stale/blocked tasks and routes each to re-page, reassign, or escalate — **escalate, don't stall**.

## Project Assignment Rule

- Use an assigned repository and an implementation-ready issue with requirements/acceptance criteria and a claimed state (Day 47).
- The issue body remains authoritative; the pager is a triage page, never a report channel.
- The gameplay lane may implement an explicitly authorized project change and open a real PR. The game-data lane validates an approved mock contract locally and needs a PR only if authorized code changes are in scope. Review remains inform-only.
- **Separation of duties (invariant):** the Hermes (or engineer) that authors Days 46-49 work must NOT review or approve the resulting PR. Review is performed only by another engineer's reviewer (their Days 41-45), by a manual reviewer, or by guided human review. The `For Review` project status transitions trigger this external gate.
- Invariant from L2 carries forward: no workflow merges, self-approves, reviews its own PR, bypasses CI, or rewrites issue bodies; human review and CI remain merge gates.

## Week 10 Success Criteria

- [ ] Hermes selects the next task deterministically from the queue on a schedule, with an auditable reason.
- [ ] The pager delivers a conforming one-liner to the correct engineer's DM; the engineer claims the task at their local Hermes.
- [ ] Assignment routing resolves the right owner deterministically; routing decisions are recorded.
- [ ] A claimed task completes scheduled Unity delivery or local mock-data validation; any actual PR has the required independent review request.
- [ ] Stale/blocked tasks are detected and routed to re-page, reassign, or escalate — none stall silently.
- [ ] Inform-only review changes no project state; no action bypasses CI or permissions, and game-data validation executes no DDL or schema mutation.

## Guiding Principle

Week 10 is successful when the engineer can hand the whole pre-delivery lifecycle to a schedule — generate, route, deliver, recover — while the pager stays a triage pointer, and human review and CI remain the merge gates.

## Game Data Lane

**Week 10 (Game Data Lane).** Use the provided variants to schedule and recover authorized mock player-data tasks. Validate against approved fixtures locally; do not query unrelated production systems, execute DDL, or mutate a live schema.
