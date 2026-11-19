# Week 7 Overview: Release-Note Verification and Severity 2 Gate Discipline

Week 7 turns Month 2 from test growth into release discipline for Simplabots.

The objective is to make sure every feature called out in sprint scope or release notes is functionally verifiable in automation and correctly mapped to blocking Severity 2 behavior when it fails in normal usage.

## What to Expect This Week

### Days 31-33 - Release-Note Feature Verification and Gate Expansion

The team builds a release-note verification lane for core Simplabots workflows and promotes stable checks into the pull request gate.

Focus areas should include real authenticated product paths such as account/profile settings, billing flows, Chattie behavior, knowledge-base save behavior, and bot configuration experiences under Paige/Revvy/Navi where applicable.

The key outcome is a documented mapping between release-note commitments and Playwright coverage status:

- blocking in PR gate
- advisory in nightly
- deferred with owner and due sprint

### Days 34-35 - Severity 2 Triage and Promotion Readiness

The team applies stricter triage rules so functional failures are classified consistently and escalated quickly.

Every new failure should be labeled as Severity 1, Severity 2 functional blocker, or non-blocking debt, with an explicit decision and owner. This includes clear exclusion of feasibility-only routes from blocking quality scope.

The key outcome is a promotion-readiness packet for end-of-Month-2 review that proves the 60% Strainer is stable, actionable, and trusted.

## Week 7 Success Criteria

By the end of Week 7, QA should have:

- [ ] A release-note to test-coverage matrix for current Simplabots scope

- [ ] At least one verified blocking test per high-value release-note feature area

- [ ] A consistent labeling strategy for Severity 2 failures across PR and nightly runs

- [ ] Clear escalation rules for failures in account/profile, billing, Chattie, and knowledge-base user workflows

- [ ] A documented out-of-scope statement confirming feasibility-only routes are non-blocking for release quality gates

- [ ] Updated triage workflow with owner and SLA expectations for Severity 2 blockers

- [ ] Evidence that newly promoted tests remain deterministic and do not significantly degrade PR runtime

- [ ] A Week 7 promotion-readiness summary prepared for Week 8/month-close decisions

## Guiding Principle

If a feature is promised to users, it must be provably working before release.

Week 7 reinforces that Month 2 quality is not just about having tests. It is about making release promises measurable, enforceable, and operationally reliable.
