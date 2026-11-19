# Week 2 Overview: Repository Ownership and Scope Control

> **Retired overview:** Do not follow the historical instructions below. Use [active L1 Week 2](../../Tools-Only%2080-Day%20Learning%20Plan.md#week-2--build-a-small-unity-feature).

## Unity Game-Development Track Context

This level or week uses the same desktop 2D C# action-platformer on the current Unity LTS release. The Unity gameplay lane covers scripts, scenes, prefabs, assets, tests, and builds. The former DB lane is now the game data lane for player profiles, save slots, checkpoints, collectibles, unlocks, and leaderboard contracts.

For L3/L4, scheduling, agents, and cloud workers support the Unity repository and build/test pipeline. Use only approved mock or game-specific data, not CRM or unrelated production systems. If a fixture is unavailable, identify the blocker locally and keep the work design-only. Preserve authorization, independent review for actual PRs, and secret-handling controls; no training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Week 2 Overview - Repository Ownership and Scope Control |
| Track | training |
| Level | week |
| Owner | Direct Supervisor / Training Team |
| Last Updated | 2026-07-29 |
| Review Cycle | Every 30 days |
| Status | archived |

Week 2 transitions Engineers from guided execution into lane-specific project stewardship with scope discipline and recoverability.

## What to Expect This Week

- Day 6: Publish and configure lane workspace continuity (App repo continuity or DB repository/query workspace continuity)
- Day 7: Execute six scoped upgrades in your lane workflow
- Day 8: Apply MVP filtering to control scope creep in lane backlog
- Day 9: Practice separation of concerns (Unity presentation vs gameplay logic, or mock-data display vs data rules)
- Day 10: Complete lane capstone and restore from intentional breakage/failure evidence

## Week 2 Success Criteria

- [ ] Repository ownership and any access needed for actual collaboration are established
- [ ] Feature/query upgrades are implemented through isolated, traceable workflows
- [ ] MVP scope decisions are documented for current vs later work
- [ ] Presentation/output changes and logic changes remain cleanly separated
- [ ] Day 10 capstone verifies safe rollback and recovery behavior in the selected lane

## Optional Self-Check

If you already know the material, use the [local Version Control self-check](../Skippable%20Weeks%20and%20Exit%20Gates.md) instead of repeating practice unnecessarily.

## Guiding Principle

Week 2 prioritizes control, traceability, and safe iteration over rapid feature accumulation.