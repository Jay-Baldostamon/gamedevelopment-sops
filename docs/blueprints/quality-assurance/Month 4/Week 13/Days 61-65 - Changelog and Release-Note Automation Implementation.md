# Days 61-65: Changelog and Release-Note Automation Implementation

Days 61-65 operationalize Week 13 by extending the Day 31-33 release-note strategy (`hurdman/simplabots#3083`) into AI-era automation governance across SimplaBots and QA workflows.

The execution goal is to make changelog and release-note updates deterministic, instruction-backed, and validation-ready in CI so release communication keeps pace with agent-driven code changes.

### Session: Day 61 - Define Upgrade Contract from Day 31-33

Establish the Week 13 upgrade contract:

- identify what Day 31-33 verified manually or semi-manually
- define what now becomes enforced by automation
- map change categories that require release-note/changelog entries
- align blocking rules with current strainer level and severity policy

Required output:

- one upgrade contract document linking prior Day 31-33 controls to Week 13 automated controls

### Session: Day 62 - Enforce Agent Instruction Requirements

Update AI contribution instructions and governance surfaces:

- ensure instruction files explicitly require changelog/release-note updates
- define exceptions and allowed skip cases with rationale
- require change summaries to reference affected user-facing behavior
- align instructions across repositories where QA expectations apply

Minimum instruction policy:

- if change is user-visible, release-note/changelog update is required unless approved exception exists

### Session: Day 63 - Wire QA Automation Checks for Release Communication

Implement or tune automation checks that validate release-note completeness:

- detect high-impact code changes lacking release-note/changelog updates
- verify release-note entries reference the affected feature area
- ensure checks work with AI-generated PR workflows and branch patterns
- route failures into actionable QA/engineering feedback

Required behavior:

- failure messaging explains missing artifact and expected remediation path

### Session: Day 64 - Synchronize Feature Verification and Notes

Ensure release-note automation and QA execution stay coupled:

- map release-note items to existing or planned Playwright verification coverage
- flag release-note entries that have no corresponding QA verification path
- flag major feature changes with test updates but no release-note update
- resolve drift through owner assignment and ETA

Sync objective:

- eliminate mismatch between delivered behavior, tested behavior, and documented behavior

### Session: Day 65 - Run Validation Scenarios and Publish Governance Summary

Validate the automation lifecycle with practical scenarios:

1. user-visible change + missing changelog entry -> check fails with clear guidance
2. valid changelog/release-note update + matching QA coverage -> check passes
3. approved exception path -> check passes with explicit traceability note

Closeout requirements:

- publish governance summary with adoption status, failure trends, and policy adjustments

## Deliverables and Milestones

By the end of Day 65, the trainee should have:

- one documented Day 31-33 to Week 13 automation upgrade contract
- instruction-level changelog/release-note policy updates for AI-driven development
- QA automation checks enforcing release communication completeness
- release-note to QA-coverage synchronization map with drift actions
- one Week 13 governance summary with scenario evidence

## Implementation Examples

Example release-communication policy rule:

- user-facing feature behavior changed -> changelog/release-note update required

Example automation failure message structure:

1. missing artifact (`changelog` or `release-note`)
2. detected change area
3. required remediation action
4. policy reference

## End-of-Week Checklist

- [ ] Upgrade contract from Day 31-33 (`#3083`) is documented and approved
- [ ] Agent instruction files require changelog/release-note updates
- [ ] QA automation detects missing release communication for high-impact changes
- [ ] Release-note entries are mapped to QA verification coverage
- [ ] Drift cases have owner, ETA, and resolution path
- [ ] Validation scenarios completed with evidence
- [ ] Week 13 governance summary published
