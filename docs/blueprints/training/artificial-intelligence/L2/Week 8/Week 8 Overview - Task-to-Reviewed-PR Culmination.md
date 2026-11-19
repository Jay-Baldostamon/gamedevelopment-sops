# Week 8 Overview: Task-to-Reviewed-PR Culmination

## Unity Game-Development Track Context

This level or week uses the same desktop 2D C# action-platformer on the current Unity LTS release. The Unity gameplay lane covers scripts, scenes, prefabs, assets, tests, and builds. The former DB lane is now the game data lane for player profiles, save slots, checkpoints, collectibles, unlocks, and leaderboard contracts.

For L3/L4, scheduling, agents, and cloud workers support the Unity repository and build/test pipeline. Use only approved mock or game-specific data, not CRM or unrelated production systems. If a fixture is unavailable, identify the blocker locally and keep the work design-only. Preserve authorization, independent review for actual PRs, and secret-handling controls; no training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Week 8 Overview - Task-to-Reviewed-PR Culmination |
| Track | training |
| Level | week |
| Owner | Direct Supervisor / Training Team |
| Last Updated | 2026-08-21 |
| Review Cycle | Every 30 days |
| Status | active |

Week 8 culminates the L2 workflow by taking a scoped Unity task from requirements through implementation, local validation, and review practice.

## Project Assignment Rule

- Use an assigned repository and a Scrum Master-created issue with clear requirements and acceptance criteria.
- The issue body remains authoritative; the generated handoff and all AI work must remain within its scope.
- The workflow may create the handoff, branch, commit, PR, review request, `ai-automation` label, and `For Review` Project status.
- The workflow never merges, self-approves, bypasses CI, or replaces the independent human review required for an actual PR.

## What to Expect This Week

- Day 36: Check the project, task, and local tooling without changing them
- Day 37: Work through a scoped task interactively with authorization checkpoints
- Day 38: Dry-run the implementation and validation plan without mutations
- Day 39: Practice a read-only Unity change review
- Day 40: Implement and validate a scoped task; use an authorized PR when applicable

## Week 8 Success Criteria

- [ ] The issue has authoritative requirements and acceptance criteria before orchestration starts
- [ ] Local tooling and the task's acceptance criteria are understood
- [ ] The dry run makes no file or remote changes
- [ ] Implementation stays within scope and actual validation results are inspected
- [ ] If a real PR is used, it is linked and independently reviewed under the project rules
- [ ] AI review findings are verified and do not substitute for human review

## Guiding Principle

Week 8 is successful when a scoped task is implemented and checked locally, with normal project review controls retained wherever a real PR is used.

## Game Data Lane

**Game Data Lane.** Apply these shared lessons to approved mock player-save or progression data. Validate locally and do not execute DDL or mutate a live schema.
