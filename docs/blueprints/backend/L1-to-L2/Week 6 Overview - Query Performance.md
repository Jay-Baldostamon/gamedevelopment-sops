# Week 6 Overview — Query Performance

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Blueprint Name | Week 6 Overview — Query Performance                                |
| Track          | backend                                                           |
| Level          | week                                                             |
| Owner          | Engineering Manager / Senior Engineer (L3)                        |
| Last Updated   | 2026-09-14                                                        |
| Review Cycle   | Every 30 days                                                     |
| Status         | active                                                            |
| Gate focus     | G2 (schema design), G3 (delivery quality)                         |

Week 6 turns schema skill into production-speed query skill: reading execution plans, choosing indexes, and eliminating N+1 patterns. This permanently lifts the quality of every future G3 delivery.

## What to Expect This Week

- **Day 1:** `EXPLAIN ANALYZE`. Run it on representative queries; interpret scan types, row estimates, and index usage.
- **Day 2:** Composite indexes. Choose indexes for real query shapes; understand column order and coverage; validate the choice with `EXPLAIN ANALYZE`.
- **Day 3:** N+1 refactoring. Find N+1 patterns in `include`/`select` usage and refactor them; measure the query count before/after.
- **Day 4:** `select`/`include` tuning. Restrict over-inclusion (which also reduces the G2/G3 security surface) and tighten boundary validation with zod.
- **Day 5:** Verification. Apply one index and one N+1 refactor to a real table; record before/after metrics in the PR.

## Week 6 Success Criteria

- [ ] Interpreted `EXPLAIN ANALYZE` output for ≥3 real query shapes
- [ ] Chose and justified ≥1 composite index with measured improvement
- [ ] Refactored ≥1 N+1 pattern with query-count before/after logged
- [ ] Tightened ≥1 `select`/`include` to avoid over-inclusion
- [ ] Enforced zod validation at ≥1 API boundary that was previously unvalidated

## Guiding Principle

A schema is only as good as the queries it supports. Measured improvement is the proof, not the intention.