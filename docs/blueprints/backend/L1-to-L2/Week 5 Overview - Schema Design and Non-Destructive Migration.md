# Week 5 Overview — Schema Design & Non-Destructive Migration

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Blueprint Name | Week 5 Overview — Schema Design & Non-Destructive Migration        |
| Track          | backend                                                           |
| Level          | week                                                             |
| Owner          | Engineering Manager / Senior Engineer (L3)                        |
| Last Updated   | 2026-09-14                                                        |
| Review Cycle   | Every 30 days                                                     |
| Status         | active                                                            |
| Gate focus     | G2 (schema design)                                               |

Week 5 makes the engineer a deliberate data-layer owner: correct Prisma relations, indexes, and constraints, and non-destructive migrations with a stated rollback strategy. This produces the first G2 evidence.

## What to Expect This Week

- **Day 1:** Prisma model fundamentals. Relations (`@relation`, `@@index`, `@@map`), `@unique`, cascade behavior, default values. Practice on a scratch schema.
- **Day 2:** Migration authoring. Write `prisma migrate dev` and `prisma migrate deploy` flows; back up the "non-destructive migration" rule: verify no existing rows violate new `NOT NULL` / `UNIQUE` constraints.
- **Day 3:** Rollback strategy. For every migration, write a rollback plan (or prove reversibility). Create migration PR #1 (practice/tooling, clearly labeled).
- **Day 4:** Real schema feature. Apply the learnings to a real brief requiring a schema change; author migration PR #2 with relations, constraints, and a documented rollback strategy.
- **Day 5:** Defense + review. Prepare to defend every relation and constraint choice in the PR thread; submit both PRs for Senior review.

## Week 5 Success Criteria

- [ ] Migration PR #1 (practice) and #2 (real) opened (G2 evidence, first two)
- [ ] 0 destructive or rollback-blocked migrations authored
- [ ] Every new constraint validated against existing rows (non-destructive proof)
- [ ] Rollback strategy stated in each migration PR
- [ ] Can explain each `@relation` / `@@index` / `@@map` choice in review

## Guiding Principle

A migration that can't be rolled back safely is not shippable. Non-destructive, defensible schema work is the G2 bar.