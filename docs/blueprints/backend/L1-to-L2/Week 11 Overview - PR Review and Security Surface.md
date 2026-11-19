# Week 11 Overview — PR Review & Security Surface

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Blueprint Name | Week 11 Overview — PR Review & Security Surface                    |
| Track          | backend                                                           |
| Level          | week                                                             |
| Owner          | Engineering Manager / Senior Engineer (L3)                        |
| Last Updated   | 2026-09-14                                                        |
| Review Cycle   | Every 30 days                                                     |
| Status         | active                                                            |
| Gate focus     | G2 (schema design), B1 (pipeline integrity / Faraday Cage)        |

Week 11 makes the engineer a review authority — the L2 first line of defense. Reviewing well is both a G2 strengthening activity and the primary habit that keeps blocking gate B1 (Faraday Cage) intact.

## What to Expect This Week

The L2 review checklist (from the ladder spec):

1. **Faraday Cage enforcement:** no pipeline bypasses, no direct pushes to `main`, no disabled lint rules without justification, no CI/CD config changes without L3+ sign-off.
2. **Security surface review:** unsanitized user input in queries, missing zod validation on API inputs, exposed secrets in client bundles, improper CORS, overly permissive Prisma `select`/`include` exposing sensitive fields.
3. **Architectural consistency:** new code follows project conventions (file structure, naming, separation between service layer and route handlers).

- **Day 1:** Review checklist intake. Internalize the three-part checklist; study 2–3 recent PRs annotated by a Senior to see it applied.
- **Day 2:** Shadow review. Review one L1-authored PR alongside a Senior; compare your findings with theirs and note what you missed (especially security surface).
- **Day 3:** Security-surface hunt. On the same or another PR, deliberately hunt for the security patterns (unvalidated input, secrets, CORS, over-inclusion) and log each finding.
- **Day 4:** Independent review. Review a real PR independently using the full checklist and leave substantive, justified comments (practicing toward the L2 primary-reviewer role).
- **Day 5:** Review retrospective. Review evidence of the B1 discipline you practiced — one PR where you caught a Faraday Cage concern — and link it in your gate evidence.

## Week 11 Success Criteria

- [ ] Applied the three-part review checklist to ≥3 PRs (shadow + independent)
- [ ] Identified ≥1 security-pattern finding (unsanitized input, exposed secret, CORS, over-inclusion)
- [ ] Reviewed ≥1 PR independently with substantive, justified comments (L2 reviewer)
- [ ] Caught or confirmed ≥1 Faraday Cage concern (B1 reinforcement)
- [ ] Commentary distinguishes blocking issues from nits

## Guiding Principle

Review is where schema and security knowledge turns into organizational protection. Catching a defect at review beats fixing it in production — every time.