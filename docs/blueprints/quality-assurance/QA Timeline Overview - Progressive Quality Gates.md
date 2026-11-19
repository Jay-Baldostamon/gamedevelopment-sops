# QA Timeline Overview: Progressive Quality Gates


This QA timeline uses a progressive quality-gate strategy to build automation trust before tightening release standards.

The purpose is to avoid blocking developers too aggressively at the beginning while still moving the team toward a mature, high-confidence release process.
Each month increases the strictness of what can block a release, while lower-priority issues are logged, tracked, and resolved through normal sprint planning.

## Timeline Summary

### Month 1 — 50% Strainer: Fatal Errors Only

Month 1 focuses on trust, speed, and determinism.

Only the most severe failures block pull requests or releases. These include app crashes, broken authentication, broken core user journeys, database corruption, and failures that directly threaten revenue, access, or critical user workflows.

Lower-priority defects are still logged, but they do not block delivery.

The key outcome is that developers learn the QA gate is high-signal and will not stop the line for minor issues.

### Month 2 — 60% Strainer: Functional Blocks

Month 2 expands the gate from fatal failures to major functional failures.

If a core feature is included in a release, it must structurally work. A feature that cannot save, load, submit, search, generate, authenticate, or complete its intended business function can now block release.

Minor validation issues, edge cases, copy inconsistencies, and visual polish issues are still tracked as tech debt unless they break the main workflow.

The key outcome is that engineering becomes accountable for delivering working feature functionality, not just avoiding catastrophic failures.

### Months 3–4 — 70–80% Strainer: Edge Cases & Logic Flaws

Months 3 and 4 focus on deeper stability and broader coverage.

The automation suite expands beyond basic happy paths into complex workflows, secondary features, boundary cases, data-state handling, visual regression candidates, and cross-browser or viewport coverage.

At this stage, logic flaws and broken secondary workflows can block releases. Pure cosmetic issues may still be logged instead of blocking, unless they materially affect usability.

The key outcome is that the product becomes resilient across more real-world user conditions.

### Month 5 — 100% Strainer: Zero Tolerance Definition of Done

Month 5 represents the mature quality gate.

By this point, the team should have stable automation, reliable test data, trusted CI signals, strong debugging artifacts, and a shared Definition of Done. All ticket requirements must pass before release, including functional behavior, validation, copy, layout, and acceptance criteria.

The gate is strict, but it should not feel chaotic because the team has been trained gradually over the previous months.

The key outcome is a culture where high-quality delivery is normal, not exceptional.

## Progressive Gate Matrix

| Timeline | Gate Level | Blocks Release | Logged as Tech Debt | Main Objective |
| --- | --- | --- | --- | --- |
| Month 1 | 50% Strainer | Severity 1 failures: app crashes, auth failure, data loss, broken critical flow | Severity 2–3 issues, secondary feature bugs, minor UI issues | Build trust in QA signals |
| Month 2 | 60% Strainer | Major functional failures in core/released features | Minor validations, edge cases, cosmetic polish | Enforce working functionality |
| Months 3–4 | 70–80% Strainer | Logic flaws, broken secondary workflows, major cross-browser issues | Minor visual/copy issues | Stabilize deeper product behavior |
| Month 5 | 100% Strainer | Any unmet acceptance criteria or Definition of Done failure | Nothing | Achieve release excellence |

## Month-by-Month Focus

### Month 1 Focus

QA should prioritize:

- critical smoke paths

- auth and protected route access

- core product value flow

- credit-sensitive or business-critical flow

- stable Playwright execution

- flake removal

- reliable CI smoke gate

- failure-only ChatOps alerts

Success means the team trusts that a red build represents a real critical issue.

### Month 2 Focus

QA should prioritize:

- expanding Page Object coverage

- validating tier-2 core features

- API mocking for controlled edge states

- stronger functional assertions

- clear bug severity mapping

- release-note feature verification

Success means core features cannot ship if they are structurally broken.

### Months 3–4 Focus

QA should prioritize:

- deeper regression coverage

- boundary-value testing

- multi-step user journeys

- multi-browser and viewport coverage

- visual regression baselines

- parallel execution optimization

- nightly regression stability

- defect trend analysis

Success means the suite catches deeper logic defects before users do.

### Month 5 Focus

QA should prioritize:

- complete acceptance-criteria enforcement

- visual and copy correctness

- full Definition of Done validation

- mature branch protection

- low-flake CI enforcement

- strong release confidence

- continuous QA improvement

Success means releases are clean, predictable, and fully aligned with product expectations.

## Guiding Principle

Tighten the gate only after the signal is trusted.

A strict gate introduced too early creates frustration and bypass behavior.
A progressive gate builds credibility first, then raises expectations month by month.

The long-term goal is not just more tests.
The goal is a culture where engineers, QA, and product all share the same release-quality standard.

