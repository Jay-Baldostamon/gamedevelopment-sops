# Week 6 Overview: Issue Development Handoff

## Unity Game-Development Track Context

This level or week uses the same desktop 2D C# action-platformer on the current Unity LTS release. The Unity gameplay lane covers scripts, scenes, prefabs, assets, tests, and builds. The former DB lane is now the game data lane for player profiles, save slots, checkpoints, collectibles, unlocks, and leaderboard contracts.

For L3/L4, scheduling, agents, and cloud workers support the Unity repository and build/test pipeline. Use only approved mock or game-specific data, not CRM or unrelated production systems. If a fixture is unavailable, identify the blocker locally and keep the work design-only. Preserve authorization, independent review for actual PRs, and secret-handling controls; no training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Week 6 Overview - Issue Development Handoff |
| Track | training |
| Level | week |
| Owner | Direct Supervisor / Training Team |
| Last Updated | 2026-08-21 |
| Review Cycle | Every 30 days |
| Status | active |

Week 6 converts completed GitHub issues into bounded AI development handoffs. Engineers verify access, install the internal handoff skill, then progress from interactive drafting to automated issue-comment posting and a plan-only IDE dry run for Week 7 readiness.

## Project Assignment Rule

- Use an assigned repository and a completed, implementation-ready GitHub issue that the engineer is authorized to read and comment on.
- The issue body remains authoritative for business intent, requirements, scope, and acceptance criteria.
- The generated handoff comment is an execution aid; it does not replace or rewrite the issue.
- Do not use Week 6 to create/split issues, edit issue bodies, write application code, or mutate repository configuration.
- Day 30 is a plan-only IDE dry run. Code changes, branches, commits, pushes, pull requests, merges, CI changes, and permission changes remain out of scope.

## What to Expect This Week

- Day 26: Confirm issue/comment access and install/verify `engineering-sops-issue-development-handoff`
- Day 27: Create one issue development handoff interactively with learner approval at each checkpoint, including the Dedup/Overlap Preflight classification as part of preflight
- Day 28: Generate one complete handoff comment in echo mode for the trainee to paste manually
- Day 29: Generate and auto-post one non-duplicate handoff comment
- Day 30: Auto-post a handoff, then run its copy-pasteable prompt in the local IDE for a plan-only dry run

## Week 6 Success Criteria

- [ ] The engineer can read the assigned issue, issue comments, and repository context and can comment on the issue, or has escalated a specific least-privilege blocker
- [ ] The internal handoff skill is installed and loadable in a fresh Hermes session
- [ ] Every handoff separates issue-supported facts from clarification gaps and repository evidence
- [ ] Every handoff records a Dedup/Overlap Preflight classification (MERGED / OPEN-OVERLAP / DEPENDENCY / CLEAR) and a confirmed base branch; already-merged or otherwise-covered work is reported, not re-planned
- [ ] The Day 27 interactive run requires approval at each checkpoint
- [ ] The Day 28 echo run produces a complete comment that the trainee manually posts
- [ ] The Day 29 auto-post run posts at most one non-duplicate handoff comment and returns its URL
- [ ] The Day 30 IDE dry run produces a bounded implementation plan without repository mutation
- [ ] No handoff invents requirements, acceptance criteria, APIs, schemas, file paths, architecture decisions, or dependencies

## Guiding Principle

Week 6 is successful when an engineer can turn an authoritative issue into a safe, evidence-based AI development handoff that records its Dedup/Overlap classification and confirmed base branch, prove the prompt is useful in plan-only mode, and preserve the issue as the source of truth for Week 7 execution.

## Game Data Lane

**Game Data Lane.** Apply the shared Days 26-30 to approved mock player-save or progression tasks. Inspect the contract and plan locally; any actual project handoff must be authorized. Do not submit training evidence, create a schema-change record, or mutate a live schema.
