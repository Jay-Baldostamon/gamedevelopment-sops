# Days 86-90: Visual, Copy, and Layout Correctness Enforcement

Days 86-90 enforce visual, copy, and layout correctness as blocking Month 5 release requirements for SimplaBots (`hurdman/simplabots`), removing cosmetic defects from the "logged as tech debt" category.

The execution goal is to make design and content expectations machine-verified at release so everything visible and readable matches product intent.

### Session: Day 86 - Promote Visual Regression to the Blocking Gate

Move visual checks from advisory to release-blocking:

- run visual regression against baselines for all released core workflows
- define the threshold for a blocking visual diff vs. accepted noise
- wire visual check status into the merge and release pipeline
- ensure a visual failure surfaces an actionable diff artifact

Signal requirement:

- every visual failure identifies the affected page, region, and expected baseline

### Session: Day 87 - Automate Copy and Label Correctness

Validate user-facing text against an approved source of truth:

- define the copy source of truth and its ownership
- check labels, buttons, messages, and empty/error states against it
- flag untranslated, truncated, or placeholder text as blocking
- route copy changes through a controlled review before baseline updates

Decision objective:

- define which copy mismatches block release vs. which are deferred to next sprint

### Session: Day 88 - Enforce Layout Across Viewports and Browsers

Harden layout verification across supported environments:

- cover target browsers, viewports, and zoom levels
- check for overflow, overlap, and clipped content
- verify responsive breakpoints on core user journeys
- treat layout-breaking regressions as release blockers

Coverage requirement:

- every released core workflow is layout-checked in its supported environments

### Session: Day 89 - Control Baseline Updates and Design Changes

Keep visual standards trustworthy:

- require explicit sign-off for intentional design changes
- route baseline updates through review rather than silent auto-approval
- log every baseline change with reason and owner
- monitor baseline churn to detect fragile or noisy tests

Governance requirement:

- no baseline update is silent; each is reviewable and attributable

### Session: Day 90 - Measure Visual Quality and Publish Actions

Close Week 18 with measurable outcomes:

- record blocking vs. advisory visual/copy/layout findings
- track baseline churn and false-positive rate
- summarize defects caught by the gate before release vs. after
- publish recommendations for any remaining coverage gaps

## Deliverables and Milestones

By the end of Day 90, the trainee should have:

- visual regression checks active in the blocking release gate
- copy correctness validated against an approved source of truth
- layout checks covering supported browsers, viewports, and zoom levels
- a controlled baseline update with review and audit trail
- one Week 18 visual-quality report with next-step recommendations

## Implementation Examples

Example blocking visual/layout findings:

1. core journey element overflows at a supported viewport
2. button label differs from approved copy source of truth
3. responsive layout breaks at a supported breakpoint
4. placeholder or untranslated text appears in a released workflow

Example visual quality record:

- workflow or page identifier
- check type (visual, copy, layout)
- finding and severity
- status, verifier, timestamp, and exception owner if applicable

## End-of-Week Checklist

- [ ] Visual regression checks block release on real diffs
- [ ] Copy correctness validated for all released user-facing text
- [ ] Layout checks cover supported browsers, viewports, and zoom levels
- [ ] Baseline updates reviewed and logged with ownership
- [ ] Week 18 report shows defects caught pre-release and gap actions
- [ ] Remaining visual/copy/layout gaps owned with ETA
