# Week 7 Overview — Multi-Step Transactional Flow

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Blueprint Name | Week 7 Overview — Multi-Step Transactional Flow                    |
| Track          | backend                                                           |
| Level          | week                                                             |
| Owner          | Engineering Manager / Senior Engineer (L3)                        |
| Last Updated   | 2026-09-14                                                        |
| Review Cycle   | Every 30 days                                                     |
| Status         | active                                                            |
| Gate focus     | G3 (full-stack delivery)                                          |

Week 7 delivers the most demanding full-stack feature of the program: a multi-step, transactional user flow (onboarding-wizard class) that exercises schema design, server-side validation, client-side state, transactional persistence, error recovery, and partial-save semantics. This is G3 feature #2.

## What to Expect This Week

- **Day 1:** Decompose the flow. Choose a multi-step wizard feature and write the five-part decomposition. Identify the transaction boundaries and the partial-save semantics (what is saved, when, and what happens on failure).
- **Day 2:** Schema + transactional persistence. Author the schema (G2 applies) and the service-layer logic; wrap multi-write operations in a transaction with rollback on failure.
- **Day 3:** Server-side validation. Add zod validation at every API boundary the wizard hits.
- **Day 4:** Client-side state + error recovery. Implement state management (useReducer/Zustand or the team default), plus recovery when a step fails mid-way (resume/discard semantics).
- **Day 5:** Tests + polish. Add unit + integration tests for the state machine and the transactional writes (including the failure rollback path); open the PR.

## Week 7 Success Criteria

- [ ] G3 feature #2 delivered end-to-end with tests (multi-step, transactional)
- [ ] Transactional writes wrap in an atomic operation with a rollback path tested
- [ ] Partial-save semantics defined and implemented (what a user can resume)
- [ ] zod validation at every boundary the flow touches
- [ ] Tests cover the happy path, ≥1 boundary, and the failure/rollback path
- [ ] Estimated vs. actual effort logged (G1 estimation signal maintained)

## Guiding Principle

A wizard is the L2 proving ground: it compresses every part of the stack into one flow, and correctness on the failure paths is what separates L1 from L2 delivery.