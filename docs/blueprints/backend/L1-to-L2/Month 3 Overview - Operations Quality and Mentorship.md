# Month 3 Overview — Operations, Quality, Mentorship

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Blueprint Name | Month 3 Overview — Operations, Quality, Mentorship                 |
| Track          | backend                                                           |
| Level          | month                                                            |
| Owner          | Engineering Manager / Senior Engineer (L3)                        |
| Last Updated   | 2026-09-14                                                        |
| Review Cycle   | Every 30 days                                                     |
| Status         | active                                                            |

Month 3 moves the engineer from doing delivery well to **owning uptime, deployments, review quality, and other people's progress** — the operational core of the L2 role. It targets promotion gates G4 (autonomous deployment), G5 (infrastructure load), and the blocking gates B1–B3 (pipeline integrity, incident honesty, rollback competence).

## What to Expect This Month

- **Week 9 — Production Debugging (G4, B3):** Execute the alert → identify → correlate-with-deploy → isolate → hotfix → verify → confirm workflow. Resolve P2/P3 independently, provide preliminary P1 RCA.
- **Week 10 — Deployment Ownership & Rollback (G4, B3):** Run pre-deploy checks, monitor traffic shift, confirm 15-minute post-deploy stabilization, and execute an authorized rollback when metrics degrade. G4 rollouts #1–#2 and rollback #1.
- **Week 11 — PR Review & Security Surface (G2, B1):** Enforce the Faraday Cage, review the security surface (unsanitized input, exposed secrets, CORS, Prisma over-inclusion), and check architectural consistency. Solidifies B1 habit.
- **Week 12 — Technical Pushback & Mentorship (B2):** Quantify trade-offs ("3 weeks + elevated risk" vs. a scoped alternative), document the analysis in the ticket, and execute the L1 unblocking protocol (join within 15 minutes, teach-don't-solve).
- **Week 13 — Ownership Capstone (all gates):** One independent decomposition → feature → deployment, one documented P2 resolution or rollback, one mentorship, and a final self-gate audit against the promotion gate document.

## Month 3 Success Criteria

- [ ] ≥2 production rollouts initiated and overseen independently, monitored via CloudWatch (G4)
- [ ] ≥1 documented clean rollback executed when metrics degraded (B3)
- [ ] ≥4 consecutive weeks managing 3–4 Project Units with no missed or un-escalated P2+ (G5)
- [ ] 0 pipeline-integrity violations and 0 concealed/delayed incident reports within the window (B1, B2)
- [ ] Demonstrated trade-off pushback with a documented analysis (L2 process competency)
- [ ] Executed the L1 unblocking protocol at least once, teaching rather than solving (B2 culture)

## Month 3 Quality Gate Standard

- Blocking:
  - Two rollouts owned + one clean rollback (G4/B3)
  - Four consecutive weeks of ≥3–4 Project Units with zero missed P2+ (G5)
  - Zero B1/B2 violations across the window
- Non-blocking:
  - Optional runbook or ADR contributions
  - Optional production-incident root-cause write-ups beyond the required minimum

## Month 3 Operating Metrics

- Deployments owned and rollback rate (G4)
- Mean time to resolve / triage P2+ incidents on assigned units (G5)
- Unit-load consistency (3–4 Project Units across 4 weeks) (G5)
- Number of pipeline-integrity and incident-honesty violations (B1/B2) — target zero
- Mentorship and unblocking throughput (B2)

## Guiding Principle

L2 competence is measured in ownership. Month 3 is complete when the engineer can independently own a deployment, debug it in production, review and protect the pipeline, and unblock an L1 — all at once.