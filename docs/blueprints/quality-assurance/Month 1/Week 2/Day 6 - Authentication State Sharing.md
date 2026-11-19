# Day 6: Authentication State Sharing


Day 6 focuses on eliminating one of the biggest sources of E2E test slowdown: repeated login flows.

For hurdman/simplabots, we still need one dedicated authentication smoke test that proves login works.
But every other authenticated test should not waste time typing credentials through the UI again and again.

The goal is to log in once, save the authenticated browser state locally, and reuse it across smoke tests that begin inside the authenticated Simplabots experience.

### Session: Understand How Simplabots Stores Browser Auth State

Before implementing session reuse, the team investigates how Simplabots remembers authenticated users.

- Determine whether auth state is stored through:

- cookies

- localStorage

- sessionStorage

- server-managed session cookies

- auth provider tokens

- Study Playwright’s storageState feature:

- captures cookies and local storage from an authenticated browser context

- writes them to a JSON file

- reuses that state in future tests

- allows tests to start already logged in

Important distinction:
Session reuse is not a replacement for testing login.
It is an optimization for tests where login is not the behavior under test.

### Session: Dev–QA Security Check

Because Simplabots has authenticated routes under src/app/(authenticated)/, the team must confirm test-session behavior before relying on saved auth state.

Key questions to answer:

- Does the test environment use MFA?

- Are test users exempt from MFA?

- How long do test sessions remain valid?

- Are tokens refreshed automatically?

- Does logging out in one test invalidate the shared state for other tests?

- Are account/group/profile selections stored in auth/session state?

The team should document session lifetime so QA knows when the saved auth file needs to be regenerated.

### Session: Build the Global Auth Setup File

Create a dedicated setup file that performs login once and saves the authenticated state.

Recommended path:

tests/auth.setup.ts



The setup should:

- use the existing LoginPage Page Object from Day 3

- read credentials from .env

- navigate through the real login flow

- verify successful entry into the authenticated app

- save storage state to a local ignored file

Example:

import { test as setup, expect } from '@playwright/test';

import { LoginPage } from './pages/auth/LoginPage';

const authFile = 'playwright/.auth/user.json';

setup('authenticate as standard Simplabots test user', async ({ page }) => {

const loginPage = new LoginPage(page);

await loginPage.navigateTo();

await loginPage.executeLogin(

process.env.E2E_USER_EMAIL as string,

process.env.E2E_USER_PASSWORD as string

);

// Guardrail: confirm we are truly past login before saving state.

await expect(page).toHaveURL(/\/(dashboard|home|app)/i);

await page.context().storageState({ path: authFile });

});



### Session: Protect the Saved Auth State

The generated auth file is sensitive.

It can contain cookies or tokens that grant access to the test environment, so it must never be committed.

Add this to .gitignore:

playwright/.auth/



Also consider adding a placeholder file if the folder needs to exist locally:

playwright/.auth/.gitkeep



But do not commit generated files like:

playwright/.auth/user.json



### Session: Configure Playwright Project Dependencies

Update playwright.config.ts so the auth setup runs before authenticated tests.

Example:

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

testDir: './tests',

projects: [

{

name: 'setup',

testMatch: /auth\.setup\.ts/,

},

{

name: 'chromium',

use: {

...devices['Desktop Chrome'],

storageState: 'playwright/.auth/user.json',

},

dependencies: ['setup'],

},

],

});



This means:

- the setup project logs in first

- Playwright saves auth state

- the chromium project reuses that state

- authenticated tests can navigate directly to protected Simplabots routes

### Session: The Parallel Execution Trap

Session reuse is powerful, but shared users can create flaky tests if multiple tests mutate the same account state.

For Simplabots, this matters because tests may touch:

- account context

- account group context

- profile context

- agent conversations

- credit usage

- user settings

- workspace state

Team rule:

Shared auth state is safe for read-only or low-mutation tests.
Any test that changes important user/account/profile/credit state must use isolated test data, a dedicated user, or a reset strategy.

Recommended account categories:

| Account Type | Use Case |
| --- | --- |
| Shared read-only user | dashboard access, navigation checks, viewing stable data |
| Agent test user | prompt/response smoke tests |
| Credit-flow test user | credit-sensitive actions |
| Destructive test user | settings changes, deletes, cleanup-required workflows |

### Session: Prove the “Authenticated Dashboard Jump”

Write a test that starts directly on a protected Simplabots route.

Example:

import { test, expect } from '@playwright/test';

test('authenticated user can access protected Simplabots area without logging in again', async ({ page }) => {

await page.goto('/dashboard');

await expect(page).toHaveURL(/\/(dashboard|home|app)/i);

await expect(page.getByRole('navigation')).toBeVisible();

});



If this works, the browser should skip the login page entirely because Playwright injected the saved session state.

### Session: Execution Commands

Run the authenticated smoke suite using pnpm:

pnpm playwright test



Run visually if debugging session reuse:

pnpm playwright test --headed



Open the report:

pnpm playwright show-report



If auth state becomes stale, delete and regenerate:

rm -rf playwright/.auth

pnpm playwright test



### Day 6 Deliverable

By the end of Day 6, the team should have:

- tests/auth.setup.ts implemented

- playwright/.auth/ added to .gitignore

- playwright.config.ts configured with a setup dependency

- authenticated smoke tests skipping repeated login

- documented rules for shared vs isolated test accounts

- clear understanding of when session state must be regenerated

### Advisor Checklist for You (Leader) at EOD

- [ ] Is playwright/.auth/ ignored by git?

- [ ] Does tests/auth.setup.ts successfully create playwright/.auth/user.json locally?

- [ ] Can authenticated tests navigate directly into Simplabots without manually logging in?

- [ ] Does the dedicated login smoke test still exist separately?

- [ ] Did the team document session lifetime, MFA behavior, and token refresh behavior?

- [ ] Are shared read-only tests separated from destructive or credit-mutating tests?

- [ ] Did the team confirm parallel tests will not collide against the same account/profile/credit state?

