# Days 19–20: Month 1 Audit, Trust Scorecard, and 60 Percent Strainer Promotion


Days 19 and 20 close out Month 1 by proving whether the QA automation gate earned developer trust.

The goal is not just to say “we wrote tests.”
The goal is to prove, with evidence, that the Playwright pipeline blocked only true Severity 1 risks, avoided unnecessary developer disruption, and created a clean path for tightening the quality gate in Month 2.

By the end of Day 20, the team should have a published Month 1 Sign-Off Memo and a documented promotion plan from the 50% Strainer to the 60% Strainer.

## Day 19: Forensic Analysis & Scorecard Assembly

Day 19 is an internal QA audit day.

The team gathers CI data, failure reasons, flake records, technical debt tickets, and No-Fly Zone findings into one evidence-backed scorecard.

The tone is forensic, not emotional.

### Session: Gather GitHub Actions Evidence

The QA team reviews all relevant GitHub Actions runs from Month 1.

For Simplabots, this means reviewing the Playwright workflow runs from:

.github/workflows/playwright.yml



The team records every failed run with:

- run date

- GitHub run URL

- event type: PR, push, schedule, manual

- branch

- commit SHA

- PR number, if applicable

- author/actor

- failed test name

- failure reason

- classification

- whether the failure was legitimate

- whether the run produced artifacts/traces

- whether Slack/Teams alert fired

Recommended table:

| Field | Description |
| --- | --- |
| Run URL | Direct GitHub Actions run link |
| Date | Date/time of failure |
| Trigger | PR, push, nightly, manual |
| Branch | Branch under test |
| Commit | Triggering commit SHA |
| Actor | User who triggered run |
| Failed Test | Test/spec that failed |
| Reason | Actual root cause |
| Classification | Sev 1, flake, infra, config, advisory |
| Blocked PR? | Yes/No |
| Correctly Blocked? | Yes/No |
| Artifact Link | Report/trace/test-results link |

### Session: Classify Red Builds

Every red pipeline must be categorized.

Recommended classifications:

| Classification | Meaning | Month 1 Expected Action |
| --- | --- | --- |
| True Fatal Block | Real Severity 1 issue | Block PR/release |
| False Alarm / Flake | Test or environment instability | Quarantine/deflake |
| Infrastructure Failure | CI setup/secrets/dependency issue | Fix pipeline, do not blame product |
| Advisory Failure | Non-blocking nightly/quarantine signal | Log and track |
| Expected Failure Drill | Intentional alert/CI failure test | Exclude from signal purity or mark separately |

Important rule:

Do not mix intentional failure drills into real quality metrics unless clearly labeled.

### Session: Cross-Reference Yellow Passes

The team reviews all Severity 2 and Severity 3 issues that QA found but did not block during Month 1.

These are the “Yellow Passes.”

Examples:

- secondary feature bug

- minor validation issue

- copy mismatch

- non-critical UI bug

- cosmetic visual regression

- edge-case state not included in Month 1 gate

- lower-priority broken interaction that does not affect critical business flow

Each Yellow Pass must have a corresponding tracking item.

Recommended labels:

technical-debt

qa-yellow-pass

month-1-accepted-risk

severity-2

severity-3



Minimum ticket fields:

- title

- severity

- affected area

- reproduction steps

- expected result

- actual result

- why it did not block Month 1

- proposed Month 2 status: blocking or still non-blocking

- owner

- target sprint

### Session: Calculate Signal Purity

The core Month 1 trust metric is:

Signal Purity % = (True Fatal Blocks / Total Unplanned Red Pipelines) x 100



Recommended distinction:

- Include real red pipelines that interrupted development.

- Exclude intentional failure drills if they were planned.

- Track flakes separately.

- Track infra failures separately.

Example:

| Pipeline Event | Count | Action Taken | Operational Classification | Legitimate 50% Block? |
| --- | --- | --- | --- | --- |
| True Fatal Block | TBD | PR blocked / alert fired | Severity 1 | Yes |
| False Alarm / Flake | TBD | Blocked incorrectly / retried | Test instability | No |
| Infrastructure Failure | TBD | Pipeline failed before app test | CI/config issue | No |
| Yellow Pass | TBD | Ticket logged / merge allowed | Severity 2/3 | Yes, non-blocking by policy |

Formula:

Signal Purity % =

(True Fatal Blocks / (True Fatal Blocks + False Alarms + Infrastructure Failures)) x 100



Month 1 target:

> 90%



If Signal Purity is below target, the team must determine why:

- Are tests flaky?

- Are gates too strict too early?

- Are Severity 2/3 issues being mislabeled as Sev 1?

- Are CI setup failures polluting the quality signal?

- Are test data collisions causing false failures?

- Are No-Fly Zone tests insufficiently isolated?

### Session: Build the Month 1 Engineering Trust Scorecard

Recommended scorecard structure:

# Month 1 Engineering Trust Scorecard — Simplabots

## Reporting Window

Start Date:

End Date:

Repository: `hurdman/simplabots`

Workflow: `.github/workflows/playwright.yml`

## Executive Summary

- Total Playwright CI runs:

- Total red pipelines:

- True Severity 1 blocks:

- False alarms/flakes:

- Infrastructure/config failures:

- Yellow Passes logged:

- Signal Purity:

- Recommendation: Promote / Do Not Promote to 60% Strainer

## Pipeline Accuracy

| Pipeline Event | Count | Action Taken | Operational Classification | Legitimate 50% Block? |

| --- | ---: | --- | --- | --- |

| True Fatal Block | TBD | PR blocked / ChatOps alert fired | Severity 1 | Yes |

| False Alarm / Flake | TBD | Quarantined / Deflake required | Test instability | No |

| Infrastructure Failure | TBD | Pipeline repair required | CI/config issue | No |

| Yellow Pass | TBD | GitHub issue logged / merge allowed | Severity 2/3 | Yes, non-blocking by policy |

## Signal Purity

Formula:

`(True Fatal Blocks / Total Unplanned Red Pipelines) x 100`

Result:

`TBD%`

Target:

`> 90%`

## True Fatal Blocks

| Date | PR/Branch | Commit | Test | Failure Reason | Business Risk | Fix |

| --- | --- | --- | --- | --- | --- | --- |

| TBD | TBD | TBD | TBD | TBD | TBD | TBD |

## False Alarms / Flakes

| Date | Test | Failure Pattern | Root Cause | Quarantine Status | Fix Owner |

| --- | --- | --- | --- | --- | --- |

| TBD | TBD | TBD | TBD | TBD | TBD |

## Yellow Passes

| Ticket | Severity | Area | Reason It Did Not Block Month 1 | Month 2 Decision |

| --- | --- | --- | --- | --- |

| TBD | Sev 2/3 | TBD | Not a 50% Strainer blocker | Promote / Keep advisory |

## Recommendation

QA recommends:

- [ ] Promote to Month 2 / 60% Strainer

- [ ] Delay promotion until flakes are reduced

- [ ] Delay promotion until CI infrastructure stabilizes

## Notes

TBD



### Day 19 Deliverable

By end of Day 19, QA should have:

- all Month 1 Playwright red runs classified

- all false alarms/flakes identified

- Signal Purity calculated

- Yellow Passes cross-referenced to GitHub issues/project items

- Month 1 Engineering Trust Scorecard drafted

- recommendation prepared for Day 20 audit meeting

## Day 20: Dev–QA Coalition Audit Meeting

Day 20 is the formal Month 1 quality gate review.

This is where QA, engineering, and leadership decide whether the Simplabots gate has earned enough trust to tighten from the 50% Strainer to the 60% Strainer.

### Session: Present the Scorecard

Attendees:

- QA automation lead

- QA engineers

- frontend engineering lead

- backend engineering lead

- product/engineering leader

- release owner, if applicable

QA presents:

- total runs

- total red builds

- true Severity 1 blocks

- false alarms/flakes

- Yellow Passes

- Signal Purity

- recommendation for Month 2

Most important message:

QA protected the release line from fatal issues while deliberately allowing non-fatal bugs to ship as tracked technical debt.

This proves QA is not trying to block velocity.
QA is protecting business-critical paths.

### Session: Review True Fatal Blocks

For every true block, the team asks:

- Was this a real Severity 1 issue?

- Would this have caused a hotfix, customer-impacting failure, data loss, or revenue risk?

- Did the Playwright failure provide enough forensic evidence?

- Did the ChatOps alert help or create noise?

- Was the fix clear from the report/trace?

- Should this test remain in the blocking PR gate?

The leader should ask engineering directly:

If this bug had reached production, would it have caused an emergency response?

If yes, the Month 1 gate is validated.

### Session: Review False Alarms and Flakes

The team reviews every incorrect red build.

For each one:

- identify why it failed

- check if it was quarantined

- confirm if it has an owner

- decide if the test needs rewrite, better data isolation, or removal from blocking gate

- confirm whether it passed the 50-zero graduation rule before returning

Rule:

No flaky test should remain in the blocking PR gate.

### Session: Review Yellow Passes

The team reviews Severity 2/3 issues that QA found but did not block.

The purpose is to decide which issue types graduate into Month 2 blocking criteria.

For each Yellow Pass:

- Was it truly non-fatal?

- Did shipping it create support pain?

- Did it affect a core feature?

- Was it visible to customers?

- Was it mentioned in release notes?

- Should it block starting Month 2?

## Month 2 Blocking Rule Adjustments

By the end of Day 20, the team should publish the new Month 2 gate rules.

Example:

# Month 2 Blocking Rule Adjustments — 60% Strainer

Effective Date:

Starting on this date, the Simplabots Playwright PR gate may block for both Severity 1 issues and selected Severity 2 core feature failures.

## Always Blocking

1. Severity 1 issues:

- app crash on critical path

- broken login/authentication

- protected route access failure

- data corruption

- duplicate payment/credit mutation

- cross-account data exposure

- unrecoverable infinite loading state

- broken core agent path

- broken credit-sensitive path

2. Severity 2 core feature failures:

- core feature cannot save

- core feature cannot submit

- core feature cannot load required data

- primary search/filter returns invalid result state for valid input

- required dropdown/menu does not open or render options

- profile/account update fails for valid input

- user cannot complete release-note feature workflow

## Still Non-Blocking

These remain logged as technical debt unless they prevent task completion:

- minor validation boundary mismatches

- minor copy mismatch

- cosmetic spacing/padding issues

- non-critical visual differences

- unsupported browser cosmetic differences

- edge cases not tied to core user workflow

- advisory visual regression failures

## Required Labels

Blocking test additions should use one or more of:

- `@smoke`

- `@sev1`

- `@sev2`

- `@nofly`

- `@core-feature`

Non-blocking checks should use:

- `@advisory`

- `@nightly`

- `@visual`

- `@regression`



### Session: Promote Selected Tests into the PR Gate

Tests that verify Month 2 blocking functionality should move from advisory/nightly into the PR smoke gate.

Before:

test(

'profile update saves valid text input',

{ tag: ['@advisory', '@sev2'] },

async ({ page }) => {

// test body

},

);



After:

test(

'profile update saves valid text input',

{ tag: ['@smoke', '@sev2', '@core-feature'] },

async ({ page }) => {

// test body

},

);



The PR command should still exclude quarantine:

pnpm exec playwright test --grep @smoke --grep-invert @quarantine



Optional Month 2 PR gate if using severity tags:

pnpm exec playwright test --grep "@smoke|@sev2" --grep-invert @quarantine



Simpler recommendation:

Keep @smoke as the single PR-gate inclusion tag.
Promote Month 2 blocking tests into @smoke only after review.

### Session: Publish the Month 1 Sign-Off Memo

By 5:00 PM, publish the final memo to the engineering channel.

Template:

# Month 1 QA Gate Sign-Off — Simplabots

## Summary

Month 1 operated under the 50% Strainer model.

The Playwright quality gate blocked only Severity 1 risks while allowing lower-severity issues to proceed as tracked technical debt.

## Reporting Window

Start:

End:

Repository: `hurdman/simplabots`

Workflow: `.github/workflows/playwright.yml`

## Month 1 Results

- Total Playwright CI runs:

- Total red pipelines:

- True Severity 1 blocks:

- False alarms/flakes:

- Infrastructure/config failures:

- Yellow Passes:

- Signal Purity:

## True Blocks Reviewed

The following failures were confirmed as legitimate 50% Strainer blocks:

| Date | PR/Branch | Failure | Risk | Resolution |

| --- | --- | --- | --- | --- |

| TBD | TBD | TBD | TBD | TBD |

## Yellow Passes Accepted

The following lower-severity issues were intentionally allowed through as technical debt:

| Ticket | Severity | Area | Month 2 Decision |

| --- | --- | --- | --- |

| TBD | TBD | TBD | TBD |

## Flake / Noise Review

| Test | Issue | Status | Owner |

| --- | --- | --- | --- |

| TBD | TBD | TBD | TBD |

## Decision

QA and Engineering agree to:

- [ ] Promote to Month 2 / 60% Strainer

- [ ] Delay promotion pending fixes

## Month 2 Gate Expansion

Effective next Monday, the PR quality gate may block on selected Severity 2 core feature failures, including:

- core feature save failures

- core feature submit failures

- primary search/filter failures

- required dropdown/menu failures

- profile/account update failures

- release-note feature workflow failures

Still non-blocking:

- minor copy issues

- minor validation boundary mismatches

- minor visual/padding/style issues

- advisory visual regression failures

## Final Note

The Month 1 goal was trust.

The Month 2 goal is functional accountability.



## Days 19–20 Success Criteria

By end of Day 20, QA should have:

- [ ] Month 1 Engineering Trust Scorecard completed

- [ ] Signal Purity calculated

- [ ] false alarms/flakes reviewed

- [ ] Yellow Passes tied to GitHub issues/project items

- [ ] true Severity 1 blocks reviewed with engineering

- [ ] decision made on whether to promote to 60% Strainer

- [ ] Month 2 blocking rules published

- [ ] selected Severity 2 tests promoted into the PR gate

- [ ] Month 1 Sign-Off Memo published to the engineering channel

## Advisor Checklist for You

- [ ] Did QA classify every red Playwright run from Month 1?

- [ ] Did QA separate true product failures from flakes and infrastructure failures?

- [ ] Is Signal Purity above 90%?

- [ ] Are all Yellow Passes tracked as technical debt?

- [ ] Did Engineering agree the true blocks were legitimate business risks?

- [ ] Were flaky tests quarantined instead of left in the blocking gate?

- [ ] Did the team agree on Month 2 Severity 2 blocking boundaries?

- [ ] Were Month 2 blocking tests tagged/promoted into the PR gate?

- [ ] Was the Month 1 Sign-Off Memo published?

- [ ] Does the whole team know when the 60% Strainer starts?

## Milestone: Month 1 Trust Earned

By the end of Day 20, Simplabots should have a trusted quality gate.

Month 1 proved that QA could block catastrophic failures without slowing engineering for minor issues.
Month 2 now builds on that trust by expanding the definition of “release-blocking” to include core functional failures.

The culture shift begins here:

QA is no longer a police force.
QA is the safety system that lets engineering move faster with confidence.

