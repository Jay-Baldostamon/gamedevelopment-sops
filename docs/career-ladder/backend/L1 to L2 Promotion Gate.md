# L1 → L2 Promotion Gate — Mid-Level Engineer

| Field          | Value                                                                 |
| -------------- | --------------------------------------------------------------------- |
| Ladder         | Backend IC (Foundational Ladder)                                      |
| Level          | Gate document (L1 → L2)                                               |
| Owner          | Engineering Manager (L4-EM) / Senior Engineer (L3)                    |
| Applies to     | L1 candidates pursuing promotion to L2                                |
| Last Updated   | 2026-09-11                                                            |
| Review Cycle   | Every 90 days                                                         |
| Status         | draft                                                                 |

This is the **decision document** that materializes the L1 → L2 promotion criteria from `L1 - Junior Engineer.md` into measurable, reviewer-decidable gates. It conforms to `schemas/Career Ladder Schema.md` → "Promotion Gate & Measurability Requirements".

The transition is a shift from **executing pre-defined tasks** to **autonomously scoping and delivering solutions** within a bounded problem domain. Every gate below proves that shift with documented evidence; no gate is decidable by judgment or recency alone.

## Promotion Gate Matrix

| Gate | Capability | Evidence (artifact) | Hard bar (pass threshold) | Soft signal | Measurement source |
| :-- | :-- | :-- | :-- | :-- | :-- |
| G1 | Feature decomposition | Decomposition doc per feature (schema changes, API route design, component tree, state-management approach), reviewed by a Senior | ≥3 features with a completed decomposition doc accepted without Senior re-decomposition; zero feature delivered from a ticket that the candidate did not decompose | Decomposition effort estimates trend more accurate over the observation window | GitHub PR review history; decomposition docs linked in the review record |
| G2 | Schema design | Prisma `model` / migration PRs | ≥3 migration PRs merged with correct relations (`@relation`, `@@index`, `@@map`), indexes, and constraints; 0 destructive or rollback-blocked migrations; candidate can defend every relation choice in review (recorded in PR thread) | Reviewer approval of schema choices without follow-up corrections | GitHub migration PR history; migration review comments |
| G3 | Full-stack delivery | End-to-end feature PRs (frontend + API layer + persistence) with test coverage | ≥3 features delivered end-to-end with tests covering the primary path and ≥1 boundary/edge case each; ≤1 feature required pair-programming or step-by-step guidance | Red-line / review-rework rate declines week over week | GitHub PR history; review comments and rework count |
| G4 | Autonomous deployment | Deployment records (CodeDeploy event history) | ≥2 production deployments initiated and overseen independently, monitored via CloudWatch, with correct post-deploy stabilization; 1 clean, documented rollback performed when metrics degraded (see blocking gate B3) | MTTR for the candidate's rollouts improves over the window | AWS CodeDeploy event history; CloudWatch; deployment log entries |
| G5 | Infrastructure load | Project-unit operational log / on-call log | Manages 3–4 Project Units concurrently for ≥4 consecutive weeks within the observation window; 0 missed or un-escalated P2+ incident on an assigned unit | Health-check response time and mean-time-to-triage improve per unit | Assignment log; CloudWatch alarm history; incident log |

## Blocking (hard) gates — non-negotiable

These are automatic deny conditions. They override the gate matrix regardless of G1–G5 status.

| Gate | Condition | Evidence (vetting record) |
| :-- | :-- | :-- |
| B1 | **Pipeline integrity ("Faraday Cage").** No force-push to `main`, no merge with failing checks, no skipped `eslint`/`prettier` enforcement, no manual deployment outside CodeDeploy, no pipeline-config (`buildspec.yml`, `appspec.yml`, Actions workflow) change without L3+ approval | GitHub push/merge history, Actions run history, CodeDeploy event history |
| B2 | **Incident honesty.** No concealed or delayed reporting of a candidate-authored production incident, failed deployment, or rollback within the observation window. Concealment is a terminable offense and a permanent promotion deny | `#vanguard-ops` incident posts, incident-review records, timestamps |
| B3 | **Operational competence (rollback).** For deployment authority, at least one documented clean rollback or equivalent recovery execution, performed within the window | Deployment / rollback record with timestamps and outcome |

## Decision Process

1. **Observation window:** ≥8 consecutive weeks of evidence collected before evaluation, finalized in the last 2 weeks of that window. A shorter window is not eligible for review.
2. **Evaluator(s):** Assessed jointly by a Senior Engineer (L3) applying these gates plus the Engineering Manager (L4-EM). The candidate's primary L2 mentor may provide input but is not the sole evaluator. Self-assessment is not sufficient.
3. **Evidence sources:** GitHub PR review history, migration PR history, CodeDeploy event history, CloudWatch alarm history, the Project-Unit operational log, the on-call/incident log, and `#vanguard-ops` incident records.
4. **Decision rule:** Promotion is approved only when **every** gate G1–G5 is met **and** all blocking gates B1–B3 are clear over the observation window. A single failed hard gate denies promotion; the candidate may re-prove that gate in the following window and re-submit. A single blocked B1/B2/B3 denies promotion for that window and escalates per the incident/honesty policies.
5. **Vetting record:** The Engineering Manager logs the decision, the completed gate matrix, and linked evidence in the promotion review record (hiring/people process), retained for review visibility.

## Success Criteria (for this gate document)

- [ ] Every L2 promotion criterion from `L1 - Junior Engineer.md` maps to at least one gate (G1–G5).
- [ ] Each gate defines a concrete evidence artifact, a numerical/threshold hard bar with a counting unit and qualifying period, and a measurement source.
- [ ] Blocking gates (B1–B3) are explicitly non-negotiable and override the matrix.
- [ ] Decision process (window, evaluators, sources, rule, vetting record) is stated and reviewable.
- [ ] No criterion is left decidable by "consistently," "reliably," or "independently" alone.

## Storage & Access

Store this document in `docs/career-ladder/backend/L1 to L2 Promotion Gate.md`.

Access: required for Senior Engineers and the Engineering Manager who evaluate promotion; visible to L1 candidates and their mentors for gap-targeting. Always Open policy: reference this document during every 1-on-1 growth check and promotion review.

## Next review date

2026-12-10
