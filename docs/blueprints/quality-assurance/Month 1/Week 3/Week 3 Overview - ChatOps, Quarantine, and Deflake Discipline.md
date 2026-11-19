# Week 3 Overview: ChatOps, Quarantine, and Deflake Discipline


Week 3 is about turning the Playwright framework into a trusted engineering system.

The team will focus on making failures visible, actionable, and low-noise while protecting the pull request pipeline from flaky tests.
By the end of the week, the QA automation suite should not only run in CI/CD, but also report failures clearly, isolate unstable tests, and enforce a strict standard before any test is allowed to block developers.

## What to Expect This Week

### Day 11 — Alert Architecture & Webhook Provisioning

We design the notification strategy for Playwright CI failures.

The team defines where alerts should go, when they should fire, and what information developers need when a quality gate fails.
The key principle is Silent Pass: successful runs should not spam Slack or Teams.

The key outcome is a secure ChatOps plan where only meaningful failures generate alerts.

### Day 12 — Payload Engineering & False Alarm Filtering

We connect the CI workflow to Slack or Teams and build structured failure messages.

The team adds failure-only notification steps to the GitHub Actions workflow. Alerts should include the repository, branch, actor, workflow run link, and Playwright report or artifact links.

The key outcome is that failed Playwright runs become immediately visible and actionable without creating notification fatigue.

### Day 13 — Flake Detection & Stress Testing

We define what a flaky test is and begin actively hunting for instability.

The team uses Playwright retries, reports, traces, and --repeat-each=50 stress runs to expose timing issues, shared data collisions, weak locators, and environment-sensitive failures.

The key outcome is a clear flake log and a shared understanding that “passed on retry” does not mean healthy.

### Day 14 — Quarantine Protocol

We protect the pull request quality gate from unstable tests.

The team adopts an @quarantine tag and updates the CI workflow so quarantined tests are excluded from blocking PR runs. These tests are not deleted or ignored; they are moved into a monitored advisory lane.

The key outcome is a trusted PR smoke gate that developers can rely on.

### Day 15 — Flake Eradication & Graduation Standard

We refactor unstable tests and define the rule for returning them to the blocking suite.

The team removes timing hacks, improves waits, anchors actions to real network responses, fixes shared data problems, and enforces the 50-zero rule: a quarantined test must pass 50 consecutive runs with zero failures before it can block PRs again.

The key outcome is a disciplined path from flaky → quarantined → fixed → trusted.

## Week 3 Success Criteria

By the end of Week 3, QA should have:

- [ ] A documented ChatOps alerting policy

- [ ] Silent Pass behavior for successful CI runs

- [ ] Failure-only Slack or Teams notifications

- [ ] Secure webhook storage through GitHub Secrets

- [ ] Alerts that include direct GitHub Actions and artifact/report links

- [ ] A documented definition of flaky test behavior

- [ ] A working --repeat-each=50 flake detection process

- [ ] A tests/quarantine/FLAKE_LOG.md or equivalent flake tracking log

- [ ] An adopted @quarantine tagging standard

- [ ] CI configured to exclude quarantined tests from blocking PR gates

- [ ] Nightly or advisory runs for quarantined tests

- [ ] A formal 50-zero graduation rule

- [ ] A code review checklist for deflaking and reintroducing tests into the smoke suite

## Guiding Principle

Protect trust in the quality gate.

Week 3 is not about adding more tests as fast as possible.
It is about making sure the tests that block developers are stable, meaningful, and supported by clear diagnostics when they fail.

A noisy test suite gets ignored.
A deterministic test suite becomes part of the engineering culture.

