# Month 2 Overview — Data Layer & Full Stack

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Blueprint Name | Month 2 Overview — Data Layer & Full Stack                         |
| Track          | backend                                                           |
| Level          | month                                                            |
| Owner          | Engineering Manager / Senior Engineer (L3)                        |
| Last Updated   | 2026-09-14                                                        |
| Review Cycle   | Every 30 days                                                     |
| Status         | active                                                            |

Month 2 makes the data layer a deliberate, defensible part of the engineer's craft rather than an afterthought. It builds the schema-design and query-performance skill that promotion gate G2 measures, and deepens full-stack delivery quality (G3).

## What to Expect This Month

- **Week 5 — Schema Design & Non-Destructive Migration (G2):** Author Prisma `model` definitions with correct relations (`@relation`, `@@index`, `@@map`), constraints, and cascade behavior. Write non-destructive migrations with a stated rollback strategy. G2 evidence: migration PR #1 (practice) and #2 (real).
- **Week 6 — Query Performance (G2, G3):** Read `EXPLAIN ANALYZE` output, choose composite indexes, refactor N+1 patterns in `include`/`select`, and enforce zod validation at the API boundary.
- **Week 7 — Multi-Step Transactional Flow (G3):** Deliver an onboarding-wizard-class feature: schema, server-side validation, client-side state, transactional persistence, error recovery, and partial-save semantics. This is G3 feature #2.
- **Week 8 — Consolidation & Data-Layer Re-Run (G2, G3):** Re-run or refactor an early feature to the now-correct data-layer patterns, reducing G3 rework and internalizing G2 approach.

## Month 2 Success Criteria

- [ ] ≥2 migration PRs merged with correct relations, indexes, and constraints (G2, in progress)
- [ ] 0 destructive or rollback-blocked migrations within the window (G2)
- [ ] Ability to defend every schema relation choice in review, recorded in PR threads (G2)
- [ ] ≥2 full-stack features delivered end-to-end with tests (G3, feature #2 added this month)
- [ ] Can interpret `EXPLAIN ANALYZE` and justify index choices (G2 practice)

## Month 2 Quality Gate Standard

- Blocking:
  - Two nondestructive migration PRs merged and defensible in review
  - Second full-stack feature (multi-step transactional) delivered with tests
- Non-blocking:
  - Optional query-benchmark write-ups beyond required refactors
  - Optional composite-index experimentation on non-critical tables

## Month 2 Operating Metrics

- Migration PR acceptance and rollback-block rate (G2)
- Composite-index / N+1 refactors applied and verified (G2)
- Full-stack feature delivery with test coverage (G3)
- Review rework rate trend on delivered features (G3 soft signal)

## Guiding Principle

A schema is a contract, not a side effect. Delivered and defensible data-layer work is the proof of G2 readiness.