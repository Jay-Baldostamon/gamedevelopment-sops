# Days 34-35: Severity 2 Triage and Promotion Readiness

Days 34-35 operationalize Week 7 by tightening how Simplabots handles functional failures in day-to-day delivery.

The execution goal is to make Severity 2 triage consistent, fast, and evidence-based so the 60% Strainer can scale without confusion or gate fatigue.

### Session: Standardize Severity 2 Failure Classification

Create one triage rubric used by QA and Engineering in PR reviews and nightly analysis.

Classification rule set:

- Severity 1: access, security, data integrity, payment/credit corruption, or critical flow failure
- Severity 2 blocker: core feature visible to users but functionally broken for valid input
- Non-blocking debt: copy, cosmetic, minor edge validation, or non-core polish issues

Required ticket metadata for Severity 2 blockers:

- affected workflow
- reproduction steps
- expected result
- actual result
- user impact statement
- release impact status
- owner and ETA

### Session: Define Severity 2 SLA and Escalation Paths

Set concrete response expectations for blocking failures.

Recommended operating targets:

- PR-blocking Severity 2 failure acknowledged in less than 2 business hours
- owner assigned same day
- fix, rollback, or temporary feature guard decision before release cut

Escalate immediately when:

- same Severity 2 failure appears in 2 or more PRs
- failure affects billing/account trust paths
- failure is tied to release-note commitments with no safe workaround

### Session: Build Week 7 Promotion-Readiness Packet

Assemble end-of-week evidence for Month 2 maturity review.

Packet should include:

- release-note coverage matrix status
- list of promoted @smoke @sev2 tests
- list of advisory @sev2 tests with stabilization plan
- flake rate and retry patterns for promoted tests
- PR gate median runtime and change delta
- unresolved Severity 2 blockers with owner and risk

### Session: Run Controlled Dry-Run Gate Review

Perform one dry-run review on a recent PR batch and answer:

- did severity labels match rubric?
- were block/non-block decisions consistent?
- did escalations trigger correctly?
- did gate outcome align with user-facing risk?

Capture decisions and adjust rubric wording if ambiguity appears.

## Deliverables and Milestones

By the end of Day 35, the team should have:

- A published Severity 2 triage rubric
- Defined owner and SLA expectations for functional blockers
- A Week 7 promotion-readiness packet prepared for Month 2 closeout
- A dry-run gate review with findings and follow-up actions
- A clean list of unresolved blockers and accepted non-blocking debt

## Implementation Examples

Example triage decision table:

| Failure Case                                             | Classification     | Blocks PR | Action                 |
| -------------------------------------------------------- | ------------------ | --------- | ---------------------- |
| Save button returns 200 but no state persists in profile | Severity 2 blocker | Yes       | Fix before merge       |
| Dropdown label typo in non-critical panel                | Non-blocking debt  | No        | Log for sprint backlog |
| Cross-account access to private profile route            | Severity 1         | Yes       | Immediate stop-ship    |

Example release decision note template:

```md
## QA Gate Decision

- PR: <link>
- Severity: Sev2 Functional Blocker
- Feature Area: Chattie Thread Rename
- Release Impact: Blocking (release-note commitment)
- Owner: <name>
- Decision: Block until fix verified in CI
```

Example CI summary metrics to track:

- median PR gate runtime
- 95th percentile test duration
- % promoted Sev2 tests passing first run
- flake rate for promoted Sev2 tests

## End-of-Day Checklist

- [ ] Severity rubric is published and shared with engineering reviewers
- [ ] SLA and escalation expectations are documented
- [ ] Week 7 readiness packet includes runtime and reliability evidence
- [ ] Dry-run gate review was completed and recorded
- [ ] Unresolved blockers have owner, ETA, and release decision
- [ ] Non-blocking debt is separated from release blockers
