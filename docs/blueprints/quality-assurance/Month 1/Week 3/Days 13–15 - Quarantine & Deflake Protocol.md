# Days 13–15: Quarantine & Deflake Protocol


Days 13–15 establish the stability rules for the Simplabots Playwright suite.

At this stage, the team should already have:

- local smoke tests

- reusable auth state

- controlled test data/mocking patterns

- visual regression candidates

- Playwright reporting/artifacts

- CI quality gates

- ChatOps failure alerts

Now the focus shifts to protecting trust.

The goal is simple:

The PR-blocking smoke suite must stay deterministic.
A flaky test is not “mostly passing” — it is untrusted until fixed.

## Day 13: Spotting the Impostors — Flake Logging Mechanics

Day 13 teaches the team how to detect unreliable tests before they poison the CI gate.

A flaky Playwright test is one that fails on its first attempt but passes on retry.
That does not count as healthy behavior.

For Simplabots, likely flake sources include:

- auth/session timing

- shared QA accounts

- account/profile context switching

- agent response timing

- credit-sensitive state changes

- slow third-party services

- unmocked AI/S3/provider calls

- UI loading overlays

- weak assertions after navigation

### Session: Define “Flaky” Clearly

The team adopts this definition:

A test is flaky if it does not produce the same result across repeated runs against the same code and environment.

Examples:

| Result | Meaning |
| --- | --- |
| Fails every time | likely real defect or broken test |
| Passes every time | healthy |
| Fails once, passes on retry | flaky |
| Passes locally, fails in CI | environment-sensitive/flaky until proven otherwise |
| Passes 49/50 times | flaky |

Team mindset:

A flaky test is not a pass.
It is a broken test that happened to recover.

### Session: Identify the Top Simplabots Flake Culprits

The team reviews test code and failure reports for common patterns.

#### 1. Race Conditions

Example symptoms:

- button is visible but not ready

- click happens before route transition finishes

- modal exists but overlay is still blocking it

- assertion runs before agent output finishes rendering

Bad pattern:

await page.getByRole('button', { name: /submit/i }).click();

await expect(page.getByText(/success/i)).toBeVisible();



Better pattern:

const submitButton = page.getByRole('button', { name: /submit/i });

await expect(submitButton).toBeEnabled();

await submitButton.click();

await expect(page.getByRole('status')).toContainText(/success/i);



#### 2. Leaky Test Data

Example symptoms:

- one test changes profile/account state

- another test expects the original value

- shared user credit balance changes unpredictably

- chat thread/history tests collide

Team rule:

Shared auth users are allowed for read-only tests only.
Mutating tests need isolated users, seeded data, cleanup, or mocks.

#### 3. Unstable Network Dependencies

Example symptoms:

- external provider times out

- S3 URL resolution is slow

- AI response takes too long

- voice provider/API returns intermittent error

- analytics or non-critical scripts delay the page

Team rule:

Smoke tests use live backend only where integration confidence matters.
Edge cases and provider instability should be mocked.

### Session: Run the Flake Finder Drill

The team stress-tests the smoke suite repeatedly.

Use pnpm:

pnpm exec playwright test --project=chromium --repeat-each=50



If smoke tests are tagged:

pnpm exec playwright test --project=chromium --grep @smoke --repeat-each=50



If smoke tests live under tests/smoke/:

pnpm exec playwright test tests/smoke --project=chromium --repeat-each=50



The goal is to catch:

- timing bugs

- auth reuse issues

- shared data collisions

- slow network assumptions

- locator instability

### Session: Analyze Any Failures

For every failure, the team reviews:

- HTML report

- trace viewer

- screenshot

- video, if retained

- network tab

- console errors

- retry result

Every flaky test gets logged.

Recommended flake log:

# Simplabots Flake Log

## Template

### Test Name

- File:

- Tag:

- First observed:

- Environment:

- Command:

- Failure rate:

- Failed run number:

- Failure category:

- Suspected cause:

- Trace/report link:

- Owner:

- Status:

- Fix notes:

- Graduation result:



Example entry:

## Core agent response renders after prompt submit

- File: `tests/smoke/core-agent-flow.spec.ts`

- Tag: `@smoke`

- First observed: 2026-06-04

- Environment: GitHub Actions / Chromium

- Command: `pnpm exec playwright test --grep @smoke --repeat-each=50`

- Failure rate: 1/50

- Failed run number: 37

- Failure category: race condition / async response timing

- Suspected cause: assertion checks output before backend response has completed

- Trace/report link: GitHub Actions artifact

- Owner: QA

- Status: quarantined

- Fix notes: waiting for specific network response and stable output container

- Graduation result: pending



### Day 13 Deliverable

By end of Day 13, the team should have:

- a clear definition of flaky behavior

- at least one --repeat-each=50 drill completed

- a flake log created

- known flaky tests identified

- likely causes categorized

- agreement that flaky tests cannot remain in the blocking PR path

## Day 14: The Quarantine Protocol — Protecting the PR Line

Day 14 creates a safe place for unstable tests.

The goal is not to delete flaky tests.
The goal is to remove them from the blocking PR gate while keeping them visible and monitored.

### Session: Add the @quarantine Tag

The team adopts Playwright tags.

Healthy PR smoke test:

import { test, expect } from '@playwright/test';

test(

'user can access authenticated Simplabots area',

{ tag: ['@smoke'] },

async ({ page }) => {

await page.goto('/dashboard');

await expect(page).toHaveURL(/\/(dashboard|home|app)/i);

await expect(page.getByRole('navigation')).toBeVisible();

},

);



Quarantined smoke test:

import { test, expect } from '@playwright/test';

test(

'core agent response renders after prompt submit',

{ tag: ['@smoke', '@quarantine'] },

async ({ page }) => {

await page.goto('/chattie');

await page.getByRole('textbox', { name: /message|prompt/i }).fill('Summarize today in one sentence.');

await page.getByRole('button', { name: /send|submit/i }).click();

await expect(page.getByTestId('agent-response')).toBeVisible();

},

);



Meaning:

- @smoke says the test belongs to smoke coverage

- @quarantine says it is temporarily excluded from blocking gates

### Session: Update PR Gate to Exclude Quarantine

The PR gate should run smoke tests but skip quarantined ones.

Recommended command:

pnpm exec playwright test --grep @smoke --grep-invert @quarantine



In GitHub Actions:

- name: Run Pull Request smoke gate

if: github.event_name == 'pull_request'

run: pnpm exec playwright test --grep @smoke --grep-invert @quarantine



For pushes to protected branches:

- name: Run main branch smoke gate

if: github.event_name == 'push'

run: pnpm exec playwright test --grep @smoke --grep-invert @quarantine



This ensures flaky tests do not block developers while the QA team works on repairs.

### Session: Run Quarantine Tests as Advisory

Quarantined tests should still run somewhere.

Recommended nightly behavior:

- name: Run quarantined tests as advisory

if: github.event_name == 'schedule' || github.event_name == 'workflow_dispatch'

continue-on-error: true

run: pnpm exec playwright test --grep @quarantine



Why continue-on-error: true?

Because quarantined tests are known unstable.
They should create visibility and artifacts, but they should not mark the whole nightly run as a full system failure.

Recommended nightly split:

- name: Run nightly stable regression suite

if: github.event_name == 'schedule' || github.event_name == 'workflow_dispatch'

run: pnpm exec playwright test --grep-invert @quarantine

- name: Run quarantined tests as advisory

if: github.event_name == 'schedule' || github.event_name == 'workflow_dispatch'

continue-on-error: true

run: pnpm exec playwright test --grep @quarantine



### Session: Optional Folder Structure

The team can keep quarantined tests in place with tags, or move them into a quarantine folder.

Recommended first approach:

tests/

├── smoke/

│   ├── auth.spec.ts

│   ├── authenticated-entry.spec.ts

│   └── core-agent-flow.spec.ts       # may contain @quarantine tag

├── visual/

├── fixtures/

├── pages/

└── quarantine/

└── FLAKE_LOG.md



Avoid moving tests too early if it makes ownership unclear.

Tagging is usually enough.

### Session: Quarantine Entry Requirements

A test may be quarantined only if:

- it has failed inconsistently

- artifacts were reviewed

- a flake log entry exists

- the suspected category is documented

- an owner is assigned

- the team agrees it should not block PRs temporarily

Quarantine should never be used as a trash bin.

Team rule:

Every quarantined test needs an owner and an exit plan.

### Day 14 Deliverable

By end of Day 14, the team should have:

- @quarantine tagging standard documented

- PR smoke command updated to exclude quarantine

- nightly advisory command added for quarantined tests

- flake log entries for every quarantined test

- owner assigned to each quarantined test

- agreement that quarantined tests are visible, not forgotten

## Day 15: Flake Eradication & The Code Review Pact

Day 15 focuses on fixing quarantined tests and defining when they are allowed back into the blocking suite.

The goal is not to make a flaky test “pass once.”
The goal is to prove it is deterministic.

### Session: Refactor for Stable UI State

The team reviews quarantined tests and removes weak timing assumptions.

Bad patterns:

await page.waitForTimeout(3000);

await page.getByText('Save').click();

await page.locator('.button').click();

await expect(page.getByText('Done')).toBeVisible();



Better patterns:

await expect(page.getByRole('button', { name: /save/i })).toBeEnabled();

await page.getByRole('button', { name: /save/i }).click();

await expect(page.getByRole('status')).toContainText(/saved/i);



If a loading overlay exists:

const loadingOverlay = page.getByTestId('loading-overlay');

await expect(loadingOverlay).toBeHidden();

await page.getByRole('button', { name: /continue/i }).click();



If the overlay detaches from the DOM:

await expect(page.getByTestId('loading-overlay')).toBeHidden();



or:

await page.getByTestId('loading-overlay').waitFor({ state: 'detached' });



Use the version that matches the app behavior.

### Session: Anchor Actions to Network Responses

For workflows that depend on API completion, wait for the specific response.

Example for a Simplabots save-style action:

const saveResponse = page.waitForResponse((response) =>

response.url().includes('/api/knowledge-base-responses') &&

response.request().method() === 'POST' &&

response.status() === 200,

);

await page.getByRole('button', { name: /save/i }).click();

await saveResponse;

await expect(page.getByRole('status')).toContainText(/saved/i);



Example for Chattie thread loading:

const threadResponse = page.waitForResponse((response) =>

/\/api\/chattie\/threads\/\d+/.test(response.url()) &&

response.status() === 200,

);

await page.getByRole('button', { name: /open thread/i }).click();

await threadResponse;

await expect(page.getByTestId('chat-thread-messages')).toBeVisible();



Example for Paige/widget config:

const widgetConfigResponse = page.waitForResponse((response) =>

response.url().includes('/api/widget/paige') &&

response.status() === 200,

);

await page.goto('/paige');

await widgetConfigResponse;

await expect(page.getByTestId('paige-widget-config')).toBeVisible();



Assumption: routes and test ids should be adjusted to match the actual Simplabots UI.

### Session: Fix Data Collisions

If a flaky test mutates shared state, the fix is usually not a better wait.

It needs better data isolation.

Options:

| Problem | Fix |
| --- | --- |
| Shared user profile changes | dedicated user per test group |
| Credit balance changes | isolated credit test user |
| Chat history collisions | create unique thread per test |
| Account/profile context changes | reset context before/after test |
| Destructive settings changes | use cleanup API or separate account |
| Third-party instability | mock provider for non-smoke checks |

Rule:

If two tests can change the same data at the same time, they can flake in parallel.

### Session: Fix Locator Instability

If flakes come from locators:

Use:

- getByRole

- getByLabel

- getByText

- getByTestId

Avoid:

- raw CSS

- XPath

- dynamic class names

- nth-child selectors

- text that changes based on AI output

- selectors tied to visual position

Example:

await page.getByRole('button', { name: /send/i }).click();



Instead of:

await page.locator('.flex > div:nth-child(2) button').click();



### Session: The 50-Zero Graduation Standard

Before removing @quarantine, a test must pass the graduation drill.

Standard:

A quarantined test must pass 50 consecutive runs with zero failures before it can return to the blocking PR suite.

Local graduation command:

pnpm exec playwright test --grep "core agent response renders" --repeat-each=50



Cloud graduation command:

pnpm exec playwright test --grep "core agent response renders" --repeat-each=50 --project=chromium



If using the tag:

pnpm exec playwright test --grep @quarantine --repeat-each=50 --project=chromium



Graduation rule:

- 50/50 = eligible for review

- 49/50 = still quarantined

- any failure resets the count

- trace reviewed before declaring stable

### Session: Code Review Pact

Before a quarantined test can return to the PR gate, code review must confirm:

- no page.waitForTimeout

- deterministic data setup

- no shared destructive state

- locators follow team rules

- network waits are specific where needed

- assertions check real user-facing outcomes

- test passed 50-zero

- flake log is updated with fix notes

- owner agrees to remove @quarantine

Example removal:

test(

'core agent response renders after prompt submit',

{ tag: ['@smoke'] },

async ({ page }) => {

// stabilized test body

},

);



### Session: Final Week 3 Structure

By the end of Day 15, the suite should have a visible split:

tests/

├── smoke/                 # deterministic, blocks PRs

├── visual/                # visual checks, likely nightly/non-blocking at first

├── fixtures/              # mock data and test fixtures

├── pages/                 # Page Objects

└── quarantine/            # flake log, notes, temporary quarantine tracking



The important separation is behavioral:

| Category | Blocks PR? | Runs Nightly? | Owner Required? |
| --- | --- | --- | --- |
| @smoke | Yes | Yes | Yes |
| @smoke + @quarantine | No | Yes, advisory | Yes |
| @visual | Not initially | Yes | Yes |
| @regression | Optional | Yes | Yes |

## Recommended Workflow Update

Here is the relevant CI command pattern for the Simplabots workflow.

- name: Run Pull Request smoke gate

if: github.event_name == 'pull_request'

run: pnpm exec playwright test --grep @smoke --grep-invert @quarantine

- name: Run main branch smoke gate

if: github.event_name == 'push'

run: pnpm exec playwright test --grep @smoke --grep-invert @quarantine

- name: Run nightly stable regression suite

if: github.event_name == 'schedule' || github.event_name == 'workflow_dispatch'

run: pnpm exec playwright test --grep-invert @quarantine

- name: Run quarantined tests as advisory

if: github.event_name == 'schedule' || github.event_name == 'workflow_dispatch'

continue-on-error: true

run: pnpm exec playwright test --grep @quarantine



## Days 13–15 Deliverables

By end of Day 15, the team should have:

- a written definition of flaky behavior

- --repeat-each=50 stress test process documented

- tests/quarantine/FLAKE_LOG.md created

- @quarantine tag standard adopted

- PR gate updated to skip quarantined tests

- nightly advisory run added for quarantined tests

- at least one flake drill completed

- at least one quarantined test refactored or triaged

- 50-zero graduation rule established

- code review checklist for deflaking established

## Advisor Checklist for You (Leader) at EOD

- [ ] Did the team run a smoke test stress drill with pnpm exec playwright test --repeat-each=50?

- [ ] Did the team identify whether failures are real defects, test issues, data collisions, or environment flakes?

- [ ] Is every flaky test logged in tests/quarantine/FLAKE_LOG.md?

- [ ] Does every quarantined test have an owner?

- [ ] Are quarantined tests tagged with @quarantine?

- [ ] Does the PR gate exclude quarantined tests using --grep-invert @quarantine?

- [ ] Do quarantined tests still run in a non-blocking nightly/advisory job?

- [ ] Is page.waitForTimeout() still banned?

- [ ] Did the team practice network anchoring with page.waitForResponse() where appropriate?

- [ ] Has the 50-zero graduation rule been formally adopted?

- [ ] Are tests prohibited from returning to the blocking suite until they pass 50 consecutive cloud runs?

- [ ] Did the team document the final deterministic vs quarantined suite split?

## Milestone: Trusted PR Gate Protected

By the end of Day 15, Simplabots has a practical deflaking system:

- deterministic smoke tests block PRs

- flaky tests are visible but isolated

- nightly runs monitor quarantined coverage

- failures produce useful artifacts

- tests must earn their way back through 50-zero proof

This keeps the team’s quality gate trusted by developers and useful to QA.

