# Day 9: Test Reporting & Debugging Artifacts


Day 9 is about making Playwright failures easy to investigate.

For hurdman/simplabots, this is especially important because many failures may come from a mix of frontend state, authenticated session state, API responses, agent workflows, credit-sensitive behavior, S3/media loading, or third-party service timing.

The goal is not just to know that a test failed.
The goal is to know where, why, and what the browser saw at the moment of failure.

### Session: Understand Playwright’s Debugging Artifacts

The team studies the main diagnostic tools Playwright provides.

| Artifact | Purpose | Best Used For |
| --- | --- | --- |
| HTML Report | Human-readable test result dashboard | Reviewing failed/passed tests after a run |
| Trace Viewer | Step-by-step execution timeline | Root-causing UI, network, console, and DOM state issues |
| Screenshots | Final visual state at failure | Quickly seeing what broke |
| Videos | Recording of test execution | Understanding timing/flow problems |
| Console Logs | Browser-side warnings/errors | Debugging client-side React/Next.js issues |
| Network Logs | Requests/responses during execution | Debugging failed API calls or mocked routes |

For Simplabots, the Trace Viewer is especially useful when diagnosing:

- auth redirects

- protected route failures

- agent response timing

- failed API calls

- missing account/profile context

- credit-flow failures

- UI state that changed before an assertion completed

### Session: Artifact Hygiene Strategy

The team adopts a strict artifact policy.

Capturing screenshots, videos, and traces for every single passing test creates unnecessary overhead and storage bloat.

Team standard:

- Save screenshots only on failure

- Save videos only on failure

- Save traces on retry

- Keep passing test runs lightweight

- Use full tracing intentionally only during focused debugging

This keeps the Simplabots suite fast while still preserving evidence when something breaks.

### Session: Configure Playwright Reports, Retries, and Artifacts

Update playwright.config.ts to include reporting and artifact behavior.

Example baseline configuration:

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

testDir: './tests',

retries: process.env.CI ? 2 : 1,

reporter: [

['list'],

['html', { open: 'never' }],

],

use: {

baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',

screenshot: 'only-on-failure',

video: 'retain-on-failure',

trace: 'on-first-retry',

},

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



If the team wants cleaner local runs while preserving stronger CI evidence, they can later split behavior by environment.

Example:

const isCI = !!process.env.CI;

export default defineConfig({

retries: isCI ? 2 : 1,

use: {

screenshot: 'only-on-failure',

video: isCI ? 'retain-on-failure' : 'off',

trace: isCI ? 'on-first-retry' : 'retain-on-failure',

},

});



### Session: Understand Retries Without Hiding Real Bugs

Retries help with transient failures, but they should not be used to ignore flaky tests.

Team rule:

A test that only passes on retry is not healthy.
It should be investigated and stabilized.

For Simplabots, retry-related failures may indicate:

- missing wait condition

- unstable locator

- auth state expiration

- race condition after route navigation

- backend/API slowness

- shared user/account/profile collision

- mocked route registered too late

- agent response timing issue

Retries are a diagnostic safety net, not a substitute for stable test design.

### Session: Intentional Failure Drill

The team intentionally breaks one working test to practice debugging.

Recommended failure drills:

#### Option 1 — Invalid Login Credential

Temporarily change the password in the auth setup or test env value.

Expected result:

- login fails

- protected route is never reached

- trace shows login form state and failed redirect

#### Option 2 — Wrong Locator

Temporarily change a locator name.

Example:

await page.getByRole('button', { name: /this button does not exist/i }).click();



Expected result:

- locator timeout

- trace shows the DOM snapshot

- report shows which element was missing

#### Option 3 — Broken Mock

Mock an endpoint with a bad response shape.

Expected result:

- UI error/blank state appears

- trace/network tab shows mocked response

- console may reveal client-side error

### Session: Run the Broken Test and Open the Report

Run the suite:

pnpm playwright test



Open the HTML report:

pnpm playwright show-report



The team should inspect:

- failed test title

- error message

- screenshot

- video, if available

- trace attachment

- retry behavior

- exact failing step

### Session: Trace Viewer Walkthrough

Every QA engineer should practice reading the trace.

In the Trace Viewer, inspect:

- Timeline

- What action happened before failure?

- Did navigation complete?

- Did the click actually happen?

- DOM Snapshot

- Was the expected element present?

- Was it hidden, disabled, detached, or renamed?

- Network

- Did the API call succeed?

- Was it intercepted by a mock?

- Did it return 401, 403, 500, or unexpected JSON?

- Console

- Did React/Next.js throw an error?

- Were there hydration warnings?

- Were there unhandled promise rejections?

- Source Step

- Which exact line in the test failed?

- Was the wait/assertion too weak?

### Session: Simplabots Failure Categories

The team creates a simple failure triage map.

| Failure Type | Likely Cause | First Place to Check |
| --- | --- | --- |
| Redirected to login | Auth state expired or setup failed | Trace URL timeline, cookies/storage |
| Button not found | Locator mismatch or UI changed | DOM snapshot, accessibility tree |
| Agent output missing | API delay, backend failure, weak wait | Network tab, final DOM snapshot |
| Credit state wrong | Shared test account collision | Test data/user assignment |
| Empty widget/page | API error or bad mock payload | Network response body |
| Visual diff failure | Dynamic data or environment rendering | Screenshot diff, masks, threshold |
| Random pass on retry | Race condition/flaky wait | Trace comparison between first run/retry |

### Session: Attach Debug Notes to Defects

When QA opens a defect from a failed Playwright run, they should include enough evidence for engineering.

Minimum defect evidence:

- test name

- environment

- branch/commit if available

- command used

- expected result

- actual result

- screenshot or trace attachment

- relevant API failure if visible

- whether it passed on retry

Example defect note:

## Playwright Failure Evidence

**Test:** `Smoke 2: user can execute core agent action`

**Environment:** Local WSL / Chromium

**Command:** `pnpm playwright test tests/smoke/core-agent-flow.spec.ts`

**Expected:** Agent response should render after valid prompt submission.

**Actual:** Response panel stayed empty and assertion timed out.

**Artifacts Reviewed:**

- HTML report

- Trace Viewer

- Screenshot on failure

- Network tab

**Observed in Trace:**

- POST request returned 500

- UI displayed no user-facing error message

- Console logged failed request error

**Retry Result:** Failed again on retry



### Session: Debugging Commands

Normal run:

pnpm playwright test



Open report:

pnpm playwright show-report



Run one spec:

pnpm playwright test tests/smoke/auth.spec.ts



Run headed:

pnpm playwright test --headed



Run with UI mode:

pnpm playwright test --ui



Force trace collection for a focused local debug session:

pnpm playwright test tests/smoke/auth.spec.ts --trace on



Debug one test interactively:

pnpm playwright test tests/smoke/auth.spec.ts --debug



### Day 9 Deliverable

By the end of Day 9, the team should have:

- playwright.config.ts configured for HTML reporting

- screenshots captured only on failure

- videos retained only on failure or disabled locally by policy

- traces captured on retry or focused debugging

- retries configured differently for local vs CI if needed

- one intentional failure drill completed

- every QA engineer able to open and read the HTML report

- every QA engineer able to inspect Trace Viewer timeline, DOM, network, and console panels

- a documented defect evidence template for Playwright failures

### Advisor Checklist for You (Leader) at EOD

- [ ] Did the team intentionally break a test and inspect the failure in the HTML report?

- [ ] Is Playwright configured to avoid saving heavy artifacts for every passing test?

- [ ] Are screenshots configured as only-on-failure?

- [ ] Are videos configured as retain-on-failure or intentionally disabled locally?

- [ ] Are traces configured as on-first-retry, retain-on-failure, or intentionally enabled only for debugging?

- [ ] Can each QA engineer open the report with pnpm playwright show-report?

- [ ] Can each QA engineer use Trace Viewer to inspect DOM snapshots, network requests, and console errors?

- [ ] Did the team document a standard defect report format that includes Playwright artifacts?

