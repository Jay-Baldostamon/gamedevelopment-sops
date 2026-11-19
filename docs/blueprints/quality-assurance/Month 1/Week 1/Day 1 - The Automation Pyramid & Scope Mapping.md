# Day 1: The Automation Pyramid & Scope Mapping


### Core Concept Mastery (Simplabots Context)

Before writing Playwright tests, align on testing economics for this stack:

- Unit tests should own pure logic and rules (credit calculations, validation, helper transforms).

- Component/integration tests should own isolated UI/state behavior and service boundaries.

- Playwright E2E should cover only cross-system, high-value user journeys across auth, tenancy, and core bot outcomes.

For Simplabots, this means:

- Don’t use E2E to re-test logic already covered in TypeScript unit/component tests.

- Use E2E to validate critical journeys across:

- Session/auth state

- Multi-tenant context (User → Account → AccountGroup → Profile)

- Agent execution flow and visible user outcomes

- Credit/billing-impacting actions

### Dev–QA Alignment Sync (What Not to Duplicate)

QA + Engineering define what is already covered in dev-level tests and what Playwright should skip.

Questions to settle:

- Which validation/business rules are already reliable in unit/component tests?

- Which service-layer behaviors (src/lib/service/*, packages/modules/src/*) are already tested via integration scripts?

- Which routes/UI flows are brittle or low-value for browser automation?

Expected “out-of-scope for Playwright” candidates in this repo:

- Pure utility transformations and formatter logic

- Provider-specific edge handling already validated at module level

- Non-critical static pages/content checks

- Cosmetic style/animation assertions

### Risk-Based Scope Mapping for Simplabots

Apply Value vs. Flakiness to features likely in this platform:

Automate first if failure would:

- Block user access

- Break tenant/profile isolation

- Prevent core AI value delivery

- Incorrectly consume or block credits/revenue events

Likely high-value areas:

- Authenticated entry + correct workspace context

- Core bot interaction flow (prompt → response shown to correct tenant/profile)

- Credit-sensitive flow (action that should deduct/track credits)

- Critical success confirmation/state persistence for user work

Likely deprioritized areas:

- Static/legal/info pages

- Non-critical preference toggles

- Visual-only layout checks with low business risk

### Define the First 3 Simplabots E2E Smoke Tests

#### Test 1: Authentication + Tenant Context Smoke

- Sign in with valid account.

- Land in authenticated area.

- Verify expected account/group/profile context is present.

- Confirm user can access a bot route only within authorized tenant context.

#### Test 2: Core Bot Value Flow Smoke

- Navigate to one primary agent route (e.g., Navi/Chattie path used in production).

- Submit a valid prompt/input.

- Verify successful response render and no hard failure state.

- Verify output is tied to the active profile/workspace context.

#### Test 3: Credit/Billing-Sensitive Action Smoke

- Start from known credit/account state test fixture.

- Execute a credit-consuming core action.

- Verify action succeeds and user-visible completion state appears.

- Verify expected credit usage indicator/state change is reflected (UI/API-visible).

### Day 1 Deliverable: QA Automation Scope Matrix (hurdman/simplabots)

Rule of Day 1 (Simplabots):
If a flow is not marked as a Critical Happy Path in the Scope Matrix, no Playwright script gets created for it.

| Feature/Module | Risk Level | Dev Test Coverage? | Playwright Action |
| --- | --- | --- | --- |
| Sign-In + Authenticated Route Access | 🔥 Critical | Partial (API/unit focused) | Automate First (Smoke Suite) |
| Account/Group/Profile Context Enforcement | 🔥 Critical | Partial (service-level checks) | Automate First (Smoke Suite) |
| Primary Bot Prompt → Response Flow | 🔥 Critical | Limited end-to-end coverage | Automate First (Smoke Suite) |
| Credit-Consuming Core Action | 🔥 Critical | Unit/integration for logic only | Automate First (Smoke Suite) |
| Profile Image/Minor Settings UX | 🟡 Medium | Covered by component + manual checks | Do Not Automate (initially) |
| Static Legal/Info Pages | 🟢 Low | N/A | Do Not Automate |
| Pure Utility/Formatting Logic | 🟢 Low | Strong unit coverage | Do Not Automate |

### End-of-Day Leader Checklist (Repo-Specific)

- [ ] We finalized exactly 3 smoke tests mapped to Simplabots critical paths.

- [ ] At least 3 explicit “do not automate” items are documented.

- [ ] At least one smoke test validates tenant context correctness.

- [ ] At least one smoke test validates a credit-sensitive workflow.

- [ ] Scope Matrix is published and agreed by QA + Engineering for hurdman/simplabots.

