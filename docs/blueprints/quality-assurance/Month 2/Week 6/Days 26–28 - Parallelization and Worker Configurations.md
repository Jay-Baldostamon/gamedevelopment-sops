# Days 26–28: Parallelization and Worker Configurations


Days 26–28 focus on execution speed.

By this point, the Simplabots Playwright suite is no longer just a few smoke tests.
Month 2 has started adding Severity 2 functional blockers, which means the PR gate can quickly grow from a lightweight safety check into a slow-moving bottleneck if concurrency is not tuned carefully.

The goal of Days 26–28 is to build a balanced execution strategy:

- fast enough to preserve developer momentum

- stable enough to avoid introducing flake

- safe enough not to overload staging or preview environments

- disciplined enough to keep destructive or shared-state tests from colliding

## Why This Matters

As test count rises, the default “just run more workers” instinct becomes dangerous.

For Simplabots, parallel test execution can create real problems:

- shared authenticated users colliding in account/profile state

- multiple tests mutating the same billing/configuration/resource data

- Chattie/agent flows competing for the same session or thread state

- staging services slowing down under burst traffic

- AI/provider-backed routes responding slower under concurrency

- preview/staging environments failing in ways that look like product bugs but are really load artifacts

The team must tune for speed with control, not raw concurrency.

## Day 26: Establish the Parallel Execution Model

Day 26 is about defining how the suite should think about concurrency.

Not every test should run the same way.

### Three Execution Categories

The team should classify tests into these categories:

| Category | Description | Parallel Friendly? |
| --- | --- | --- |
| Read-Only | tests that view data, navigate pages, read lists, verify rendering | Yes |
| Controlled Functional | tests that use mocks/fixtures or limited state changes | Usually yes |
| Destructive / Shared-State | tests that mutate, delete, change billing/settings, or compete for same account/profile state | No, or limited |

### Simplabots Examples

#### Safe for Parallel

- navigation checks

- authenticated route access

- read-only dashboard visibility

- dropdown option rendering with mocked data

- empty/error state rendering tests

- visual checks on isolated components

- mocked widget/provider/config loading tests

#### Risky in Parallel

- billing/payment method changes

- profile/account updates on shared users

- Chattie thread create/delete/rename on shared account

- group/user deletion

- destructive settings changes

- credit-sensitive flows

- multi-user security tests using the same resource set

- tests that depend on unique thread/group/account state

### Team Rule

Parallelism is the default only for tests that are proven safe.
Shared-state mutation is opt-out from parallelism by design.

## Day 26: Define Initial Worker Targets

The team should not jump directly to a large worker count.

Recommended progression:

### Local Development

- 2 workers for normal QA runs

- 1 worker when debugging flaky/stateful tests

### PR Gate in CI

- Start with 2–4 workers

- Increase only after observing environment stability

### Nightly / Broader Regression

- 4 workers as a likely starting point

- Possibly 6–8 workers only if staging proves it can handle the load consistently

### Simplabots Recommendation

For early Month 2:

| Environment | Recommended Starting Workers |
| --- | --- |
| Local QA machine | 2 |
| CI PR smoke gate | 2 or 4 |
| Nightly regression | 4 |
| Destructive or quarantine reruns | 1 |

The team should validate worker increases by data, not optimism.

## Day 26: Configure Playwright Worker Strategy

Recommended base pattern in playwright.config.ts:

import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({

testDir: './tests',

workers: isCI ? 4 : 2,

fullyParallel: true,

retries: isCI ? 2 : 1,

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

### Important Note

fullyParallel: true should only remain enabled if the test suite has been properly categorized and isolated.

If too many stateful tests still share the same account or data, the team may need to disable fullyParallel globally and opt into parallel behavior more selectively.

Alternative safer approach:

export default defineConfig({

workers: process.env.CI ? 4 : 2,

fullyParallel: false,

});



That makes files run in parallel across workers, but keeps tests inside each file serialized unless explicitly overridden.

For Simplabots, this safer model may be preferable early on.

## Day 27: Group Tests by Parallel Safety

Day 27 is about structuring the suite to support concurrency intentionally.

### Recommended Parallel Grouping

tests/

├── smoke/

│   ├── read-only/

│   ├── functional-mocked/

│   ├── stateful/

│   └── destructive/

├── visual/

├── no-fly-zone/

└── quarantine/

### Meaning

#### read-only/

- navigation

- rendering

- auth shell

- dashboard visibility

- list loading

- mocked provider/config option rendering

#### functional-mocked/

- filter/search behaviors with fixtures

- dropdown data states

- widget config options

- error/success feedback with mocked routes

#### stateful/

- account/profile update save flows

- thread rename/share actions

- configuration persistence tests

#### destructive/

- deletes

- billing mutations

- credit-sensitive tests

- account/group/user destructive changes

- anything requiring single-user control

## Day 27: Use File-Level Serialization for Risky Areas

For stateful or destructive areas, the team should use either:

- dedicated isolated test accounts

- workers: 1 via a dedicated project

- test.describe.configure({ mode: 'serial' })

- file-level grouping to avoid cross-test collisions

Example:

import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

test.describe('Billing mutations', () => {

test('user can remove a payment method', async ({ page }) => {

// destructive test

});

test('user can update billing setting', async ({ page }) => {

// destructive test

});

});

### Why

This ensures these tests do not fight over the same shared state while the rest of the suite still benefits from parallel execution.

## Day 27: Consider Dedicated Projects for Isolated Tests

If certain groups should always run with tighter isolation, create separate projects.

Example:

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

projects: [

{

name: 'setup',

testMatch: /auth\.setup\.ts/,

},

{

name: 'chromium-smoke',

testMatch: /tests\/smoke\/(read-only|functional-mocked)\/.*\.spec\.ts/,

use: {

...devices['Desktop Chrome'],

storageState: 'playwright/.auth/user.json',

},

dependencies: ['setup'],

},

{

name: 'chromium-stateful',

testMatch: /tests\/smoke\/(stateful|destructive)\/.*\.spec\.ts/,

use: {

...devices['Desktop Chrome'],

storageState: 'playwright/.auth/user.json',

},

dependencies: ['setup'],

},

],

});



If needed, run the chromium-stateful project with fewer workers using a separate workflow command.

## Day 27: Measure Runtime, Not Just Pass Rate

The team should begin tracking:

- average PR gate runtime

- longest spec file runtime

- slowest 5 tests

- runtime delta after adding workers

- runtime delta after enabling/disabling mocks

- runtime impact of retries

- failure rate under higher concurrency

### Suggested Targets

| Metric | Target |
| --- | --- |
| PR smoke gate runtime | under 5 minutes preferred |
| Nightly regression runtime | under 15–20 minutes initially |
| Flake increase after parallelization | zero or near-zero |
| Shared-state collision failures | zero |

If runtime improves but flake rises, the change is not successful.

## Day 28: Stress-Test the Worker Strategy

Day 28 validates the tuning decisions.

The team should run the PR-gate suite under increasing concurrency levels and observe behavior.

### Example Commands

Run with 1 worker:

pnpm exec playwright test --grep @smoke --workers=1



Run with 2 workers:

pnpm exec playwright test --grep @smoke --workers=2



Run with 4 workers:

pnpm exec playwright test --grep @smoke --workers=4



Optional higher test:

pnpm exec playwright test --grep @smoke --workers=6

### What to Compare

For each run, track:

- total runtime

- failed tests

- retries triggered

- server slowdowns

- network timeouts

- shared data collisions

- CI stability

- artifact frequency

## Day 28: Find the Simplabots “Safe Ceiling”

The team should determine the maximum useful worker count for the current environment.

There is always a point where adding workers no longer helps.

Common signs the suite passed the safe ceiling:

- runtime stops improving meaningfully

- staging becomes noticeably slower

- retries increase

- thread/config/billing tests start colliding

- API responses become inconsistent

- false failures increase

### Expected Outcome

The final answer may be something like:

- 2 workers for PR gate

- 4 workers for nightly

- 1 worker for destructive suites

- advisory/quarantine tests run separately

That is a success if it is stable.

## Recommended Simplabots Parallel Execution Policy

By the end of Day 28, the team should aim to publish something like this:

# Simplabots Parallel Execution Policy

## Local Defaults

- Standard local runs: 2 workers

- Debugging runs: 1 worker

## CI Defaults

- Pull Request smoke gate: 4 workers

- Nightly regression: 4 workers

- Destructive/stateful suites: 1 worker or serial mode

## Parallel-Safe Categories

- read-only smoke tests

- mocked functional tests

- visual tests on isolated surfaces

## Restricted Categories

- billing mutations

- profile/account mutation on shared users

- thread create/delete/rename on shared data

- destructive deletes

- credit-sensitive tests

- multi-user security tests that share resources

## Rules

- No shared destructive tests in uncontrolled parallel mode

- Use serial mode for risky stateful suites

- Increase workers only after measured stability

- Runtime improvements do not justify added flake



## CI Workflow Considerations

The PR gate may eventually split into separate commands if needed.

Example:

- name: Run parallel-safe PR smoke tests

if: github.event_name == 'pull_request'

run: pnpm exec playwright test tests/smoke/read-only tests/smoke/functional-mocked --grep @smoke --grep-invert @quarantine --workers=4

- name: Run stateful PR smoke tests

if: github.event_name == 'pull_request'

run: pnpm exec playwright test tests/smoke/stateful --grep @smoke --grep-invert @quarantine --workers=1



This is more complex, so the team should only adopt it if the suite truly needs it.

A single PR command is still preferable if it stays stable.

## Days 26–28 Deliverable

By the end of Day 28, the team should have:

- a documented test categorization model for parallel safety

- a safe default worker count for local runs

- a safe default worker count for CI PR runs

- a tested worker ceiling for nightly/staging execution

- risky destructive/stateful suites isolated or serialized

- runtime benchmarks comparing 1, 2, 4, and optionally higher workers

- evidence that runtime improved without creating flake

- a published Simplabots Parallel Execution Policy

## Advisor Checklist for You

- [ ] Did the team classify tests into read-only, functional-mocked, stateful, and destructive categories?

- [ ] Did they avoid blindly increasing worker count?

- [ ] Did they benchmark runtime at multiple worker levels?

- [ ] Did they identify the safe concurrency ceiling for staging/preview?

- [ ] Are destructive or shared-state tests isolated or run serially?

- [ ] Is the PR gate faster now without added false failures?

- [ ] Did the team publish a worker and concurrency policy for Simplabots?

## Guiding Principle

Parallelize what is safe. Serialize what is risky.

Days 26–28 are about keeping the growing Month 2 suite fast enough to support engineering velocity without sacrificing trust in the Playwright signal.

If the suite becomes fast but noisy, it fails.
If it stays stable and gets faster, the 60% Strainer remains sustainable.

