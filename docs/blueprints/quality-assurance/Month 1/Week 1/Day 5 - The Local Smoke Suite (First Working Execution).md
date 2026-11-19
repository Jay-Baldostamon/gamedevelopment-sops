# Day 5: The Local Smoke Suite (First Working Execution)


Today the team completes Week 1 by producing a reliable, local-only smoke suite for hurdman/simplabots.
This is where strategy (Day 1), environment setup (Day 2), POM structure (Day 3), and locator rules (Day 4) become working tests.

### Session: Lifecycle Discipline & Assertion Strategy

Before final coding, the team standardizes execution behavior.

- Lifecycle Hooks (beforeEach, afterEach)

- Use beforeEach for repeated setup (base navigation, auth/session bootstrap).

- Use afterEach for cleanup (state reset, optional debug attachments).

- Keep tests independent: no chaining or hidden dependencies.

- Hard vs. Soft Assertions

- Hard (expect) for critical gates:

- login success

- authenticated route access

- primary agent action completion

- credit-sensitive completion state

- Soft (expect.soft) for non-blocking UI checks:

- minor banners

- secondary labels

- non-critical helper text

Example pattern:

await expect.soft(page.getByText(/tips|helper/i)).toBeVisible(); // non-blocking

await page.getByRole('button', { name: /send|submit/i }).click();

await expect(page.getByTestId('action-success-state')).toBeVisible(); // blocking



### Session: Implement the 3 Core Simplabots Smoke Tests

Use the agreed folder layout and POM classes under tests/pages/**.

#### Smoke Test 1 — Authentication + Authenticated Landing

- Navigate to login

- Authenticate with env-backed QA credentials

- Verify successful entry into authenticated app context

- Verify stable post-login marker (URL or authenticated navigation element)

#### Smoke Test 2 — Core Agent Value Action

- Navigate to primary agent flow used by business

- Submit valid prompt/input

- Verify output renders successfully

- Assert result appears in correct active workspace/profile context

#### Smoke Test 3 — Credit-Sensitive Core Flow

- Start from predictable test account state

- Perform known credit-consuming action

- Verify completion succeeds

- Verify expected credit-impact indicator/state updates as designed

### Session: Flakiness Control (Async Stability Rules)

Simplabots is dynamic (auth redirects, async agent responses), so synchronization must be explicit and resilient.

- Banned: page.waitForTimeout(...) in committed tests

- Required patterns:

- locator-based waiting (toBeVisible, toHaveText, toBeEnabled)

- URL/state assertions for route transitions

- deterministic test data and tenant context

- Ensure tests tolerate real async behavior without arbitrary sleeps.

### Session: First Full Local Green Run

Execute full smoke suite locally:

pnpm playwright test



Inspect HTML report:

pnpm playwright show-report



Definition of done:

- all 3 smoke tests pass locally

- failures (if any) include actionable traces/screenshots

- no fragile selector regressions

- no timeout-based waiting hacks

### End of Week 1 Milestone (Simplabots)

By end of Day 5, the team has:

- a stable local smoke suite for critical Simplabots flows

- tenant/auth-aware test patterns for authenticated routes

- assertion discipline (hard vs. soft)

- resilient selector strategy

- a branch-ready automation baseline for Week 2 pipeline expansion

### Example Smoke Suite Skeleton (Simplabots)

import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/auth/LoginPage';

test.describe('Simplabots Local Smoke Suite', () => {

test.beforeEach(async ({ page }) => {

await page.goto('/');

});

test('Smoke 1: user can authenticate and reach authenticated area', async ({ page }) => {

const loginPage = new LoginPage(page);

await loginPage.navigateTo();

await loginPage.executeLogin(

process.env.E2E_USER_EMAIL as string,

process.env.E2E_USER_PASSWORD as string

);

await expect(page).toHaveURL(/\/(dashboard|home|app)/i);

});

test('Smoke 2: user can execute core agent action', async ({ page }) => {

// Use agent page object + resilient locators

// Assert successful output state

await expect(true).toBeTruthy();

});

test('Smoke 3: user can complete credit-sensitive core flow', async ({ page }) => {

// Execute credit-impacting flow

// Soft assert non-critical UI, hard assert completion gate

await expect.soft(page.getByText(/notice|tip/i)).toBeVisible();

await expect(true).toBeTruthy();

});

});



### Advisor Checklist for You (Leader) at EOD

- [ ] All 3 Simplabots smoke tests pass locally on each QA machine.

- [ ] Test code contains zero page.waitForTimeout() usage.

- [ ] Soft assertions are used only for non-critical UI checks.

- [ ] Critical gates use hard assertions.

- [ ] Tests are committed to branch and ready for Week 2 CI/CD expansion.

- [ ] At least one smoke test validates authenticated route behavior under Simplabots context.

