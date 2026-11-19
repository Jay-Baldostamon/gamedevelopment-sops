# Week 9 Overview — Production Debugging

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Blueprint Name | Week 9 Overview — Production Debugging                             |
| Track          | backend                                                           |
| Level          | week                                                             |
| Owner          | Engineering Manager / Senior Engineer (L3)                        |
| Last Updated   | 2026-09-14                                                        |
| Review Cycle   | Every 30 days                                                     |
| Status         | active                                                            |
| Gate focus     | G4 (autonomous deployment), B3 (rollback competence)              |

Week 9 introduces the L2 production-debugging workflow: from a firing alert to a verified hotfix, resolving P2/P3 independently and providing preliminary P1 root-cause assessment.

## What to Expect This Week

The L2 diagnostic workflow (from the ladder spec):

```
Alert received (CloudWatch / Datadog / PagerDuty)
  → Identify affected service and environment
    → Access CloudWatch Log Groups or Fleet Manager session
      → Correlate error timestamps with recent deployments (commit SHA / deploy ID)
        → Isolate root cause to specific file, function, and line
          → Author, test, and push hotfix via standard CI/CD pipeline
            → Verify fix in production logs + confirm alert resolution
```

- **Day 1:** Workflow walkthrough. Reproduce the steps on a past incident with a Senior; note every evidence source used.
- **Day 2:** Correlation skills. Practice correlating errors with deployments using CloudWatch + CodeDeploy history (you must be able to pin the deploy that introduced a regression).
- **Day 3:** Live P2/P3 triage. Take ownership of a current P2/P3 on an assigned unit and drive it through isolation to a hotfix (under Senior/L2 escalation ownership).
- **Day 4:** Root-cause write-up. Produce a preliminary RCA for the incident, and practice the P1 preliminary assessment format under L3.
- **Day 5:** Incident-honesty review (B2). Verify you posted the incident/rollback timeline to `#vanguard-ops` promptly and completely; confirm the documentation and any follow-up ticket.

## Week 9 Success Criteria

- [ ] Reproduced the diagnostic workflow on ≥1 real incident and drove it to resolution
- [ ] Correlated ≥1 error spike with a deployment (commit SHA / deploy ID) from logs
- [ ] Resolved ≥1 P2/P3 independently or with minimal guidance (G4 evidence in progress)
- [ ] Produced a root-cause write-up for the incident
- [ ] 0 delayed or concealed incident reports (B2 — target zero)

## Guiding Principle

Production debugging is a discipline of evidence correlation, not heroics. The workflow is non-negotiable and a 15-minute response expectation governs P2/P3 triage.