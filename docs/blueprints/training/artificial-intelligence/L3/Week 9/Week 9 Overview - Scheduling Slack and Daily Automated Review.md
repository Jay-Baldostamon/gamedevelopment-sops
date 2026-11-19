# Week 9 Overview: Scheduling, Slack Access, and Daily Automated Review

## Unity Game-Development Track Context

This level or week uses the same desktop 2D C# action-platformer on the current Unity LTS release. The Unity gameplay lane covers scripts, scenes, prefabs, assets, tests, and builds. The former DB lane is now the game data lane for player profiles, save slots, checkpoints, collectibles, unlocks, and leaderboard contracts.

For L3/L4, scheduling, agents, and cloud workers support the Unity repository and build/test pipeline. Use only approved mock or game-specific data, not CRM or unrelated production systems. If a fixture is unavailable, identify the blocker locally and keep the work design-only. Preserve authorization, independent review for actual PRs, and secret-handling controls; no training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Week 9 Overview - Scheduling, Slack Access, and Daily Automated Review |
| Track | training |
| Level | week |
| Owner | Direct Supervisor / Training Team |
| Last Updated | 2026-09-29 |
| Review Cycle | Every 30 days |
| Status | draft |

Week 9 opens L3 by inverting who initiates the work. Where L2 had the engineer launch Hermes, L3 has Hermes run **on a schedule** and page the engineer **only when the result is novel**. The week establishes routing onto the org's shared inform-only Artemis Slack pager, local scheduling, notification-routing discipline, the unattended daily review, and the routine-vs-novel escalation threshold.

## What to Expect This Week

- Day 41: Register for the org's shared inform-only Artemis pager and verify pages reach your DM only (self-only enqueue on the `ssh EngineeringMCP` pager endpoint; no per-engineer bot). It never listens, reads, or joins a channel.
- Day 42: Configure local Hermes scheduling so a review/evidence job runs on a recurring cadence without being launched by hand, and confirm each run records a run log.
- Day 43: Define the routing truth table — what may reach the pager vs what stays local. The pager is a triage page (`IDENTIFIER is STATUS — reason`), never a report channel; secrets never cross the wire.
- Day 44: Run the daily automated inform-only review on schedule, unattended; routine results stay quiet or minimal, evidence records locally.
- Day 45: Apply the routine-vs-novel threshold — page the engineer **only** on novel results; routine runs complete and stay quiet.

## Project Assignment Rule

- Use an assigned review target (pull request or DB scope) the engineer is authorized to inspect.
- The inform-only discipline from L2 Day 24 carries throughout: schedule and review may report, never mutate.
- Day 45 escalation is a **page to act, not a request to act from Slack**: the engineer returns to their local Hermes to open the indexed run.

## Week 9 Success Criteria

- [ ] The engineer is routed on the org's shared Artemis pager so pages DM them specifically, with only `chat:write` and `im:write` scopes and no input/read/listen surface.
- [ ] The engineer can start a scheduled Hermes job and locate its run log without launching Hermes by hand.
- [ ] The engineer can articulate the routing truth table and prove a conforming pager message from a real run.
- [ ] A daily automated inform-only review runs unattended and records real evidence.
- [ ] The routine-vs-novel threshold is defined and applied; a novel result produced a conforming escalation DM, or the engineer documented why none fired.
- [ ] No secret, diff, schema detail, or full finding ever reached the pager during the week.
- [ ] No review changed code, worktree, commits, CI, permissions, or DDL.

## Guiding Principle

Week 9 is successful when the engineer can hand the *initiation* of review work to a schedule and the *escalation* decision to a novelty threshold — such that routine work runs unattended and only genuinely novel work spends the engineer's attention.

## Game Data Lane

**Week 9 (Game Data Lane).** Use the provided variants to schedule read-only checks of approved mock player-save or progression data. Keep routine results local, preserve operational escalation for genuinely novel or blocked work, and do not post training evidence, execute DDL, or mutate a live schema.
