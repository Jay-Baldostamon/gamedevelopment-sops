# Days 36-40: Weekly QA Operating Cadence and Release Gate Stewardship

Days 36-40 start the weekly operating phase for QA Team Lead trainees in Simplabots.

This blueprint intentionally consolidates the full week into one operating document to support the cadence transition:

- Dailies: Days 1-10
- Bi-weeklies: Days 11-35
- Weeklies: Days 36-85
- Bi-monthlies: next phase
- Monthlies: mature governance phase

The execution goal for Week 8 is to shift from tactical test-building rhythms into repeatable weekly quality leadership rhythms while preserving Month 2 gate reliability.

### Session: Weekly Planning and Scope Lock

At the start of the week, define what quality outcomes must be protected for active release scope.

Plan inputs:

- sprint commitments and release-note items
- open Severity 1 and Severity 2 risks
- unstable tests and quarantine inventory
- PR gate runtime and flake trends

Plan outputs:

- weekly QA priority list
- coverage additions planned for this week
- promoted versus advisory test candidates
- risk acceptance list with owners

### Session: Mid-Week Gate Health Review

Run one structured gate health checkpoint during the week.

Review focus:

- PR gate pass/fail trends
- new Severity 2 failures and classification quality
- runtime drift and retry inflation
- noisy tests requiring demotion or quarantine
- unresolved blockers in critical Simplabots areas:
  - account/profile
  - billing/payment
  - Chattie
  - knowledge-base
  - bot configuration paths

### Session: Weekly Severity Council

Hold one QA-Engineering triage council to keep blocker decisions consistent.

Required outcomes:

- confirm Severity 1 vs Severity 2 vs non-blocking debt labels
- confirm fix owner and ETA for each blocking item
- define ship/no-ship recommendation for unresolved items
- identify where additional deterministic coverage is required

Policy reminder:

- Keep feasibility-only routes out of blocking release scope:
  src/app/(authenticated)/(superadmin)/feasibility/\*\*

### Session: Weekly Coverage and Reliability Promotion

Promote only tests that prove stable under normal CI conditions.

Promotion requirements:

- mapped to core user promise or release-note commitment
- low flake behavior across repeated runs
- acceptable runtime cost for PR gate
- clear failure signal with actionable diagnosis

Demotion requirements:

- frequent non-product flakes
- ambiguous assertions
- chronic environment coupling

### Session: End-of-Week Executive QA Summary

Produce one weekly summary for leadership and release stakeholders.

Minimum summary sections:

- blocking incidents
- severity breakdown and trends
- coverage promotion and demotion decisions
- quality debt accepted versus resolved
- gate reliability metrics
- release confidence statement

## Deliverables and Milestones

By the end of Day 40, the trainee should have:

- One weekly QA operating plan aligned to current release scope
- One mid-week gate health checkpoint with decisions logged
- One severity council record with owner and ETA for blockers
- One coverage promotion/demotion decision log
- One executive weekly QA summary with release confidence recommendation

## Implementation Examples

Example weekly QA operating board columns:

- To Verify This Week
- Blocking Risks (Sev1/Sev2)
- Advisory Risks
- Promoted Coverage
- Quarantine Candidates
- Ready for Release Review

Example weekly severity decision table:

| Item                                         | Severity          | Blocking Status | Owner | ETA         | Decision                           |
| -------------------------------------------- | ----------------- | --------------- | ----- | ----------- | ---------------------------------- |
| Profile save intermittently fails to persist | Sev2              | Blocking        | FE    | 2 days      | Hold release-note item until fixed |
| Billing success toast text mismatch          | Non-blocking debt | Non-blocking    | FE    | Next sprint | Log debt, continue                 |
| Cross-account data visibility regression     | Sev1              | Blocking        | BE    | Immediate   | Stop-ship until resolved           |

Example weekly KPI set:

- PR gate median runtime
- PR gate flake rate
- first-run pass rate for promoted Sev2 tests
- mean time to acknowledge Sev2 blocker
- unresolved blocker count at week close

## End-of-Week Checklist

- [ ] Weekly plan exists and is aligned to release commitments
- [ ] Mid-week gate health review completed with actions assigned
- [ ] Severity council completed with decisions recorded
- [ ] Coverage promotion/demotion decisions were evidence-based
- [ ] Executive weekly summary published
- [ ] Release confidence recommendation issued
- [ ] Feasibility-only scope remained excluded from blocking gate decisions
