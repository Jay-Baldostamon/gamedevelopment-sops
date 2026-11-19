# Week 2 Overview — Scoped Full-Stack Sprint

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Blueprint Name | Week 2 Overview — Scoped Full-Stack Sprint                         |
| Track          | backend                                                           |
| Level          | week                                                             |
| Owner          | Engineering Manager / Senior Engineer (L3)                        |
| Last Updated   | 2026-09-14                                                        |
| Review Cycle   | Every 30 days                                                     |
| Status         | active                                                            |
| Gate focus     | G3 (full-stack delivery)                                          |

Week 2 delivers a complete feature end-to-end from a brief, with its own test coverage, **without pair programming or step-by-step guidance**. This is the first concrete G3 evidence.

## What to Expect This Week

- **Day 1:** Scope the sprint. Pick one moderate feature from the backlog you have not been given as a ticket. Write its decomposition in the five-part format and confirm scope with the Senior.
- **Day 2:** Schema + API. Implement the data model and route handlers with zod validation at the boundary.
- **Day 3:** Persistence + service layer. Implement the business logic connecting routes to the ORM.
- **Day 4:** Frontend + state. Wire the component tree to the API and manage state.
- **Day 5:** Tests + polish. Add unit tests (primary path + ≥1 boundary/edge case) and integration coverage; run lint/format/type-check; open the PR.
- **Skill-polish days (Days 6–7, optional):** If the feature landed early, deepen any weak area (e.g. validation edge cases, state management, test coverage).

## Week 2 Success Criteria

- [ ] 1 feature delivered end-to-end from a brief with no step-by-step guidance (G3 feature #1)
- [ ] Tests cover the primary path and ≥1 boundary/edge case
- [ ] Lint, format, and type-check pass; PR opened through the standard pipeline (B1 discipline from day one)
- [ ] ≤1 feature instance required pair programming (G3 hard bar in progress)

## Guiding Principle

The skill being proven is self-sufficiency on a bounded problem. If the feature reuses existing patterns and ships clean, that is success — not cleverness.