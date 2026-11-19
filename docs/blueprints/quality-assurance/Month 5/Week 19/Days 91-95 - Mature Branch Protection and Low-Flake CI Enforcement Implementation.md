# Days 91-95: Mature Branch Protection and Low-Flake CI Enforcement

Days 91-95 mature SimplaBots (`hurdman/simplabots`) pipeline governance for Month 5, enforcing branch protection and low-flake CI so green status reliably signals release readiness.

The execution goal is to make the merge and release path structurally safe and to quantify release confidence instead of assuming it.

### Session: Day 91 - Configure Mature Branch Protection

Harden protected and release branches:

- require all required status checks to pass before merge
- enforce required reviews and linear or governed history where appropriate
- restrict direct pushes to protected and release branches
- document who may merge and under what conditions

Required output:

- one branch-protection configuration covering protected and release branches

### Session: Day 92 - Enforce Zero-Tolerance Flake Handling

Remove flakiness from the signal:

- define the flake classification and quarantine trigger
- quarantine flaky tests immediately on failure
- require a root-cause fix before a quarantined test re-enters the suite
- track flake count and quarantine-to-fix time

Governance requirement:

- a flaky test never silently bypasses the gate or re-enters without a fix

### Session: Day 93 - Stabilize the Pipeline Signal

Reduce noise and re-running:

- confirm the required-check set is necessary, sufficient, and reliable
- remove redundant or unstable checks that erode trust in green
- tune retry and timeout policy so stability is real, not masked
- measure success rate and duration stability across runs

Signal requirement:

- a green run predictably reflects a release-ready state

### Session: Day 94 - Build the Release-Confidence Score

Quantify go/no-go readiness:

- define the score inputs (gate, coverage, stability, DoD, visual, drift)
- weight and compute a single confidence value per release
- set the threshold that requires escalation before release
- surface score breakdown so leaders see what drives confidence

Decision objective:

- every release carries an explicit, explainable confidence number

### Session: Day 95 - Define Emergency and Rollback Paths and Publish

Close Week 19 with safe operating bounds:

- document emergency release and rollback procedures
- keep emergency overrides auditable and time-boxed
- record Week 19 flake, stability, and confidence results
- publish recommendations for Week 20 consolidation

## Deliverables and Milestones

By the end of Day 95, the trainee should have:

- one live branch-protection configuration for protected and release branches
- a zero-tolerance flake quarantine and fix-before-re-entry protocol
- a stabilized pipeline signal with monitored success and duration
- one documented release-confidence score and threshold
- emergency and rollback paths defined without gate bypass

## Implementation Examples

Example release-confidence inputs:

- gate pass rate across required checks
- coverage of released core workflows
- flake and stability metrics
- DoD and visual/copy compliance status

Example emergency release record:

- release and ticket identifiers
- override justification and approver
- time-boxed window and rollback trigger
- confirmation that gate integrity is preserved

## End-of-Week Checklist

- [ ] Branch protection enforced on protected and release branches
- [ ] Flaky tests quarantined and fixed before re-entry
- [ ] Green pipeline signal reliably maps to release readiness
- [ ] Release-confidence score documented and computed per release
- [ ] Emergency and rollback procedures defined and reviewed
- [ ] Week 19 stability and confidence results published
