# Week 7 Overview: Issue-to-PR Delivery

## Unity Game-Development Track Context

This level or week uses the same desktop 2D C# action-platformer on the current Unity LTS release. The Unity gameplay lane covers scripts, scenes, prefabs, assets, tests, and builds. The former DB lane is now the game data lane for player profiles, save slots, checkpoints, collectibles, unlocks, and leaderboard contracts.

For L3/L4, scheduling, agents, and cloud workers support the Unity repository and build/test pipeline. Use only approved mock or game-specific data, not CRM or unrelated production systems. If a fixture is unavailable, identify the blocker locally and keep the work design-only. Preserve authorization, independent review for actual PRs, and secret-handling controls; no training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Week 7 Overview - Issue-to-PR Delivery |
| Track | training |
| Level | week |
| Owner | Direct Supervisor / Training Team |
| Last Updated | 2026-08-21 |
| Review Cycle | Every 30 days |
| Status | active |

Week 7 turns a validated Week 6 handoff into a controlled issue-to-PR delivery flow. Engineers verify delivery access, install the internal delivery skill, then progress from interactive execution to automated delivery and automated AI review.

## Project Assignment Rule

- Use an assigned repository and an implementation-ready issue with a valid Week 6 `## AI Development Handoff` comment.
- The issue body remains authoritative; the handoff is the bounded execution translation.
- The issue must be labeled `ai-automation` before implementation begins; the delivery skill adds it only when missing.
- A created PR must contain `Closes #<issue-number>`, request review, and move the linked issue's existing Project item to `For Review` when access and the project option are available.
- No Week 7 workflow merges a PR, approves its own PR, bypasses CI, edits the issue body, or exposes secrets.

## What to Expect This Week

- Day 31: Confirm issue-to-PR delivery access and install/verify `engineering-sops-issue-to-pr`
- Day 32: Deliver one issue interactively with approval at every delivery stage
- Day 33: Deliver one issue fully automatically, then manually run the AI review workflow
- Day 34: Deliver one issue fully automatically and receive an AI review recommendation and next prompt
- Day 35: Deliver one issue fully automatically, then automatically run the AI review workflow against the new PR

## Week 7 Success Criteria

- [ ] The engineer can read the issue/handoff, create branches and PRs, request review, add `ai-automation`, and update the connected Project item to `For Review`, or has escalated a specific blocker
- [ ] The internal issue-to-PR skill is installed and loadable in a fresh Hermes session
- [ ] Delivery begins only after a valid Week 6 handoff is confirmed
- [ ] The final implementation maps to confirmed acceptance criteria and remains within issue scope
- [ ] Delivery honors the handoff's Dedup/Overlap classification when choosing the branch base — MERGED: stop and report; OPEN-OVERLAP: no parallel PR (supersede redundant newer PR); DEPENDENCY: child of the sibling branch; CLEAR: confirmed base
- [ ] PRs include a verified `Closes #<issue-number>` link and an explicit review request
- [ ] Project status is verified as `For Review`, or the exact project blocker is reported
- [ ] Day 33 returns delivery evidence for a trainee-run AI review
- [ ] Day 34 recommends, but does not run, the repository-routed AI review workflow
- [ ] Day 35 runs the AI review workflow and reports its evidence-backed verdict without merging or self-approving

## Guiding Principle

Week 7 is successful when an engineer can turn an authoritative issue and validated handoff into a traceable, reviewed pull request while preserving scope, human review, CI gates, and honest evidence at every external mutation.

## Game Data Lane

**Game Data Lane.** Apply the shared Days 31-35 to approved mock player-save or progression data. Inspect validation results locally, and open a PR only when authorized repository code changes are in scope. Do not post training evidence or mutate a live schema.
