# Week 5 Overview: Hermes Setup and Automated Review Practice

## Unity Game-Development Track Context

This level or week uses the same desktop 2D C# action-platformer on the current Unity LTS release. The Unity gameplay lane covers scripts, scenes, prefabs, assets, tests, and builds. The former DB lane is now the game data lane for player profiles, save slots, checkpoints, collectibles, unlocks, and leaderboard contracts.

For L3/L4, scheduling, agents, and cloud workers support the Unity repository and build/test pipeline. Use only approved mock or game-specific data, not CRM or unrelated production systems. If a fixture is unavailable, identify the blocker locally and keep the work design-only. Preserve authorization, independent review for actual PRs, and secret-handling controls; no training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Week 5 Overview - Hermes Setup and Automated Review Practice |
| Track | training |
| Level | week |
| Owner | Direct Supervisor / Training Team |
| Last Updated | 2026-08-21 |
| Review Cycle | Every 30 days |
| Status | active |

Week 5 establishes a safe, repeatable local Hermes review workflow. Engineers set up Hermes, verify GitHub review access, install the public and internal review skills, then practice the same review discipline in guided and automated modes.

## Project Assignment Rule

- Use an assigned repository and pull request that the engineer is authorized to inspect.
- Day 23 follows the repository's normal routing from `engineering-sops-pr-review` and runs interactively with learner approval at every checkpoint.
- Day 24 treats the assigned repository as **inform-only** for that one training review, regardless of its normal routing.
- Day 25 treats the assigned repository as **gap-resolve** for that one training review, regardless of its normal routing.
- These training overrides change only the single review interaction; they do not modify the installed review skills or the standing repository-routing policy.

## What to Expect This Week

- Day 21: Install Hermes locally, launch the Hermes UI, and retain a reliable launch method
- Day 22: Confirm least-privilege GitHub review access and install/verify `github-code-review` and `engineering-sops-pr-review`
- Day 23: Conduct one interactive, checkpoint-by-checkpoint review with explicit learner approval before each next step
- Day 24: Conduct one fully automated inform-only review with no local code changes
- Day 25: Conduct one fully automated gap-resolve review with the smallest validated remediation when a verified gap exists

## Week 5 Success Criteria

- [ ] Hermes is installed locally and the engineer can launch the UI again without assistance
- [ ] The engineer has verified GitHub access to inspect PR metadata, linked issues, source/branches, and check results, or has escalated a specific blocker
- [ ] Both baseline and internal review skills are installed and loadable in a fresh Hermes session
- [ ] The Day 23 interactive review respects every learner approval checkpoint
- [ ] The Day 24 inform-only review makes no worktree, commit, push, CI, permission, merge, or review-submission changes
- [ ] The Day 25 gap-resolve review changes only verified gaps, validates its work, and commits/pushes only when a validated remediation is needed
- [ ] Every review outcome is grounded in requirements, acceptance criteria, source code, diffs, and real validation output

## Guiding Principle

Week 5 is successful when an engineer can use Hermes to review with the right level of control: learn the workflow interactively, report safely without mutation, and remediate minimally when the assigned review mode permits it.

## Game Data Lane

**Hermes Setup and Automated Review Practice (Game Data Lane).** DB-lane engineers run Days 21-25 with `day-2X-db.md` templates: Hermes + BPC CRM MCP configuration, DB access/skills, and interactive/automated DB gap-detection. Day 25's DB variant is **inform-only** (draft schema-change record), NOT the gap-resolve lane.
