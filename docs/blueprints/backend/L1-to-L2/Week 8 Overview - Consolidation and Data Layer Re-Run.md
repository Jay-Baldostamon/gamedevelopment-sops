# Week 8 Overview — Consolidation & Data-Layer Re-Run

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Blueprint Name | Week 8 Overview — Consolidation & Data-Layer Re-Run                 |
| Track          | backend                                                           |
| Level          | week                                                             |
| Owner          | Engineering Manager / Senior Engineer (L3)                        |
| Last Updated   | 2026-09-14                                                        |
| Review Cycle   | Every 30 days                                                     |
| Status         | active                                                            |
| Gate focus     | G2 (schema design), G3 (delivery quality)                         |

Week 8 consolidates Month 2 by re-running an early feature (or refactoring an existing one) to the now-correct data-layer patterns. The goal is internalizing the G2 approach — not just learning it — and visibly reducing G3 review rework.

## What to Expect This Week

- **Day 1:** Selection + gap analysis. Pick an early feature where schema/query patterns were weak; list the specific G2/G3 deficits (missing indexes, N+1, over-inclusion, unvalidated boundary).
- **Day 2:** Schema + query refactor. Apply correct indexes, relations, and `include`/`select` tuning; add zod validation at the boundary.
- **Day 3:** Data-contract hardening. Make sure the refactor is nondestructive (a rollback-safe migration if the schema changed).
- **Day 4:** Re-review prep. Prepare to defend every choice in the PR; anticipate the Senior reviewer's questions.
- **Day 5:** Submit + rework. Open the refactor PR; log the before/after quality metric (e.g. query count, row scans, review rework expected).

## Week 8 Success Criteria

- [ ] ≥1 early feature re-run or refactored to correct data-layer patterns
- [ ] Every migration in the refactor is nondestructive with a stated rollback strategy
- [ ] Query-count or scan improvement measured and logged
- [ ] zod validation added at the feature's boundary
- [ ] G3 rework trend at or below prior weeks (soft signal confirmed)

## Guiding Principle

Returning to old work with new skill is how craft sticks. If the refactor ships with fewer review red lines than the original, G2/G3 readiness is real.