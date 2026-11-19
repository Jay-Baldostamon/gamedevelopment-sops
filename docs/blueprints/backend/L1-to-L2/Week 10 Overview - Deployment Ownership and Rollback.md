# Week 10 Overview — Deployment Ownership & Rollback

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Blueprint Name | Week 10 Overview — Deployment Ownership & Rollback                  |
| Track          | backend                                                           |
| Level          | week                                                             |
| Owner          | Engineering Manager / Senior Engineer (L3)                        |
| Last Updated   | 2026-09-14                                                        |
| Review Cycle   | Every 30 days                                                     |
| Status         | active                                                            |
| Gate focus     | G4 (autonomous deployment), B3 (rollback competence)              |

Week 10 gives the engineer real deployment ownership: the pre-deploy checks, live monitoring, post-deploy stabilization, and authorized rollback that gate G4 and blocking gate B3 measure.

## What to Expect This Week

- **Day 1:** Pre-deploy readiness. Learn the pre-deploy checklist: all CI checks green on `main`, no outstanding P1/P2, deployment window notified to `#vanguard-ops`.
- **Day 2:** Deployment mechanics. Understand CodeDeploy strategies (`AllAtOnce`, `Linear10PercentEvery1Minute`, `Canary`), ALB target-group traffic shift, and how to read the deployment in the console/CLI.
- **Day 3:** Rollout #1. Initiate and oversee a real deployment (under L2/L3 authority per repo policy), watching for 5xx spikes, latency degradation, and health-check failures in real time.
- **Day 4:** Post-deploy stabilization + Rollout #2. Confirm CloudWatch metrics stabilize for ≥15 minutes post-cutover; run a second rollout independently. Practice `aws deploy stop-deployment` in a sandbox.
- **Day 5:** Rollback drill + record. Perform a documented rollback drill (or real rollback if metrics degraded); log the full event for the G4/B3 record.

## Week 10 Success Criteria

- [ ] ≥2 production rollouts initiated and overseen independently, monitored via CloudWatch (G4)
- [ ] ≥1 documented clean rollback or confirmed rollback execution (B3)
- [ ] Pre-deploy checklist followed and logged each time
- [ ] Post-deploy stabilization confirmed ≥15 minutes post-cutover
- [ ] Pipeline integrity maintained throughout (B1 — no bypasses, no unauthorized config changes)

## Guiding Principle

Deployment ownership means you decide to ship and you own the outcome — including knowing exactly when and how to undo it.