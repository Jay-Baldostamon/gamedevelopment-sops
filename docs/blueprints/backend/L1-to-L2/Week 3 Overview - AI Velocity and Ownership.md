# Week 3 Overview — AI Velocity & Ownership

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Blueprint Name | Week 3 Overview — AI Velocity & Ownership                          |
| Track          | backend                                                           |
| Level          | week                                                             |
| Owner          | Engineering Manager / Senior Engineer (L3)                        |
| Last Updated   | 2026-09-14                                                        |
| Review Cycle   | Every 30 days                                                     |
| Status         | active                                                            |
| Gate focus     | G3 (full-stack delivery), G2 preview                              |

Week 3 raises AI-assisted development from autocomplete to genuine velocity, while holding the L1→L2 comprehension bar: **you own every accepted suggestion and you can tell when AI output is suboptimal.**

## What to Expect This Week

- **Day 1:** Scaffolding. Use Copilot/Flicka to generate a component tree with props interfaces, data-fetching logic, and test harness stubs. Review every line.
- **Day 2:** Test generation. Generate unit/integration/e2e-stub suites from component signatures and API contracts; fix what the generator missed (especially edge cases).
- **Day 3:** Schema prototyping. Prototype a Prisma schema change and a migration file for review using AI, then validate the migration is nondestructive (G2 preview).
- **Day 4:** Suboptimal-pattern hunting. Scan AI-generated code from Days 1–3 and identify patterns an L2 would refactor (overwrought components, wrong state location, unvalidated boundaries). Refactor them.
- **Day 5:** Velocity + quality review. Clean up the generated code to team standards, confirm the comprehension bar (trace each path line-by-line), and submit for review.

## Week 3 Success Criteria

- [ ] Generated and owned a full component tree with test harnesses
- [ ] Identified and refactored ≥1 suboptimal AI-generated pattern, with the reasoning documented (L2 signal)
- [ ] Prototyped and validated ≥1 migration as nondestructive
- [ ] Can trace the execution path of generated code and articulate why each pattern was chosen (L1 comprehension standard held)

## Guiding Principle

AI is a multiplier, not a source of truth. The measurable L2 move is recognizing when the AI pattern is wrong and correcting it with justification.