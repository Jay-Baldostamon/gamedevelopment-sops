# Days 31-33: Release-Note Feature Verification and Gate Expansion

Days 31-33 establish a repeatable release-note verification workflow for Simplabots so the QA gate enforces real product commitments, not just generic smoke signals.

The execution goal is to map committed features to explicit tests, decide blocking level per feature, and promote only stable checks into the PR gate.

### Session: Build the Release-Note Verification Matrix

Gather the current sprint/release commitments and map each item to an observable user behavior.

Minimum matrix fields:

- release item
- user-visible behavior
- owning route/API area
- current coverage
- target coverage level (blocking, advisory, deferred)
- owner
- due date

Suggested Simplabots areas for Week 7 mapping:

- account/profile updates: src/app/(authenticated)/api/account, src/app/(authenticated)/api/profile
- billing and payment behavior: src/app/(authenticated)/billing, src/app/(authenticated)/api/payment-method
- Chattie functional paths: src/app/(authenticated)/chattie, src/app/(authenticated)/api/chattie
- knowledge-base save/update flows: src/app/(authenticated)/api/knowledge-base-response, src/app/(authenticated)/api/knowledge-base-responses
- agent configuration experiences: src/app/(authenticated)/paige, src/app/(authenticated)/revvy, src/app/(authenticated)/navi

Scope rule:

- Exclude feasibility-only routes from blocking scope:
  src/app/(authenticated)/(superadmin)/feasibility/\*\*

### Session: Define Promotion Criteria for Blocking Severity 2 Tests

Before promoting a new test into the PR gate, require evidence that it is:

- tied to a release-note or core feature promise
- deterministic with stable fixtures/mocks where needed
- resilient to normal async timing variation
- runnable under current worker strategy without cross-test collisions

Promotion decision states:

- promote now: add @smoke + @sev2 + @core-feature
- hold advisory: keep @advisory + @sev2 and observe in nightly
- defer: track as debt with explicit owner and sprint target

### Session: Implement First Wave of Week 7 Coverage

Select 3-5 release-note mapped scenarios and implement/upgrade tests.

Priority order:

1. save/persist behavior in account or profile settings
2. one billing interaction with visible state confirmation
3. one Chattie user action with end-to-end UI feedback
4. one knowledge-base save path with confirmed success and visible persisted state
5. one agent configuration interaction where options load and valid changes apply

### Session: Enforce Coverage-to-Commitment Traceability

For each promoted test, capture a traceability record in PR description or QA notes:

- feature commitment ID/title
- test file/spec name
- blocking level
- observed runtime impact
- known dependencies or mocked services

## Deliverables and Milestones

By the end of Day 33, the team should have:

- A release-note verification matrix for in-scope Simplabots features
- Clear promote/hold/defer decisions for candidate Week 7 tests
- 3-5 implemented or upgraded Week 7 functional tests mapped to release commitments
- Updated tags and classification for newly promoted tests
- A short runtime report comparing PR gate impact before/after promotion

## Implementation Examples

Example Playwright tag structure for promoted tests:

```ts
test(
  "profile settings save persists valid update",
  { tag: ["@smoke", "@sev2", "@core-feature", "@release-note"] },
  async ({ page }) => {
    // core functional behavior assertion
  },
);
```

Example advisory hold pattern:

```ts
test(
  "agent configuration advanced option ordering",
  { tag: ["@advisory", "@sev2", "@release-note"] },
  async ({ page }) => {
    // verify behavior while collecting stability evidence
  },
);
```

Example release-note coverage table format:

| Release Item             | Behavior Promise                          | Test Spec                                   | Gate Level           | Owner |
| ------------------------ | ----------------------------------------- | ------------------------------------------- | -------------------- | ----- |
| Profile settings refresh | Valid save persists and survives reload   | tests/smoke/functional-profile-save.spec.ts | Blocking             | QA    |
| Chattie thread rename    | Rename succeeds with visible confirmation | tests/smoke/chattie/thread-rename.spec.ts   | Blocking             | QA    |
| Knowledge-base save UX   | Save gives success feedback and persists  | tests/smoke/knowledge-base/save.spec.ts     | Advisory -> Blocking | QA    |

## End-of-Day Checklist

- [ ] Every mapped release item has an explicit coverage decision
- [ ] Promoted tests are tied to a core feature promise
- [ ] Blocking tests were run in CI-like conditions before promotion
- [ ] Runtime impact was measured and recorded
- [ ] Deferred or advisory items have owner and target sprint
- [ ] Feasibility-only routes remain outside blocking scope
