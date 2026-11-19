# Week 2 Overview: Advanced Patterns, State Control, and Pipeline Promotion

Week 2 is about moving beyond basic Playwright interactions and preparing the QA automation suite for reliable, repeatable execution outside a single local machine.
The team will focus on authentication reuse, controlled test data, debugging artifacts, visual confidence, and the first step toward CI/CD execution.

## What to Expect This Week

### Day 6 — Authentication State Sharing

We improve test speed by avoiding repeated login steps before every test.
The team learns how to authenticate once, save browser session state, and reuse that state across multiple tests using Playwright storage state.

The key outcome is faster, cleaner tests that start from an already-authenticated SimplaBots session when login itself is not the subject of the test.

### Day 7 — Test Data Management & API Mocking

We introduce control over data and network behavior.
The team learns how fixtures, seed data, and API mocking can reduce flaky failures caused by unpredictable database state or unreliable external services.

The key outcome is a repeatable testing pattern where tests do not depend on random live data or third-party uptime.

### Day 8 — Visual Regression & Component Isolation

We explore visual confidence through snapshot-style testing.
The team learns how screenshots and visual comparisons can detect unintended UI regressions that normal functional assertions may miss.

The key outcome is understanding when visual testing is valuable, when it is too noisy, and which SimplaBots screens/components are good candidates.

### Day 9 — Reporting & Debugging Artifacts

We focus on making failures easy to diagnose.
The team learns how to use Playwright HTML reports, screenshots, videos, traces, and retries to understand what happened during a failing run.

The key outcome is that QA can debug failures with evidence instead of guessing from terminal output alone.

### Day 10 — CI/CD Quality Gates & Nightly Runs

We promote the local smoke suite toward automated cloud execution.
The team learns how Playwright can run headlessly in a CI/CD pipeline and how nightly runs can validate preview or staging environments without blocking day-to-day development.

The key outcome is a first pipeline-ready automation plan for running SimplaBots smoke tests outside local machines.

## Week 2 Success Criteria

By the end of Week 2, QA should have:

- [ ] A reusable authentication/session state strategy

- [ ] Test data rules that reduce dependency on unstable live data

- [ ] Initial API mocking or fixture patterns for controlled scenarios

- [ ] A basic understanding of visual regression testing and where it fits

- [ ] Playwright reports, traces, screenshots, and failure artifacts configured

- [ ] A CI/CD-ready smoke suite plan for nightly or staging validation

- [ ] Clear distinction between blocking quality gates and non-blocking monitoring runs

## Guiding Principle

Make tests repeatable before making them global.
Week 2 is not just about running tests in CI — it is about making sure the tests are stable, debuggable, and controlled enough to trust when they leave the local sandbox.
