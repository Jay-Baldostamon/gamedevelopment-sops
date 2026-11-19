# Day 10: CI/CD Quality Gates & Nightly Runs

Day 10 moves the Playwright suite from local QA machines into GitHub Actions.

For hurdman/simplabots, this step matters because the repo already uses pnpm, already has @playwright/test installed, and already contains a .github/workflows/playwright.yml workflow. The Day 10 work is not starting from zero — it is hardening the existing workflow into a real quality gate strategy.

The goal is to run fast, reliable smoke checks on pull requests and prepare deeper scheduled/nightly coverage without slowing developers down.

### Session: Understand CI/CD Runner Mechanics

The team reviews how GitHub Actions executes Playwright:

- GitHub provisions a clean ubuntu-latest runner

- the repository is checked out fresh

- Node and pnpm are installed

- dependencies are installed from the lockfile

- Playwright browsers and Linux dependencies are installed

- tests run headlessly

- reports/artifacts are uploaded for debugging

For Simplabots, the existing workflow already follows this general pattern:

name: Playwright Tests

on:

push:

branches: [main, master]

pull_request:

branches: [main, master]

jobs:

test:

timeout-minutes: 60

runs-on: ubuntu-latest

It also already installs pnpm, installs dependencies with a frozen lockfile, installs Playwright browsers with Linux dependencies, runs tests, and uploads the Playwright report.

### Session: Confirm Simplabots Package Setup

The repo is already Playwright-ready from a dependency perspective.

@playwright/test exists in devDependencies, and the repo uses pnpm workspace-style dependencies.

Relevant package details:

"devDependencies": {

"@playwright/test": "^1.60.0",

"@types/node": "20.19.9",

"typescript": "5.8.3"

}

The existing workflow currently installs with:

- name: Install dependencies

run: npm install -g pnpm && pnpm install --frozen-lockfile

- name: Install Playwright Browsers

run: pnpm exec playwright install --with-deps

- name: Run Playwright tests

run: pnpm exec playwright test

Day 10 should keep the pnpm-based workflow rather than reverting to npm ci.

### Session: Secret Injection Strategy

The team confirms that CI has no local .env file.

All test credentials and runtime values must come from GitHub Secrets or GitHub Environment Secrets.

Required secret categories:

| Secret                       | Purpose                                       |
| ---------------------------- | --------------------------------------------- |
| E2E_USER_EMAIL               | Standard QA login user                        |
| E2E_USER_PASSWORD            | Standard QA login password                    |
| PLAYWRIGHT_BASE_URL          | Preview/staging URL                           |
| CI_TEST_ACCOUNT_ID           | Optional account context                      |
| CI_TEST_PROFILE_ID           | Optional profile context                      |
| CI_CREDIT_TEST_USER_EMAIL    | Optional isolated credit-flow user            |
| CI_CREDIT_TEST_USER_PASSWORD | Optional isolated credit-flow password        |
| FONTAWESOME_NPM_AUTH_TOKEN   | Required for Font Awesome Pro package install |

The existing workflow already uses a Font Awesome Pro secret:

- name: Configure Font Awesome Pro registry

run: |

echo "@fortawesome:registry=https://npm.fontawesome.com/" >> ~/.npmrc

echo "//npm.fontawesome.com/:\_authToken=${{ secrets.FONTAWESOME_NPM_AUTH_TOKEN }}" >> ~/.npmrc

Security rule:

No .env, tokens, auth-state files, or generated .npmrc files should be committed.

This is already supported by .gitignore, which ignores .env, .npmrc, Playwright reports, test results, and playwright/.auth/.

.env

.env.development.local

.env.local

.env.local.new

.env.production.local

.env.test.local

.npmrc

# Playwright

/test-results/

/playwright-report/

/blob-report/

/playwright/.cache/

/playwright/.auth/

### Session: Adopt the Split-Gate Strategy

The team defines two CI layers.

#### Gate 1: Pull Request Smoke Gate

Purpose:

- fast

- reliable

- developer-friendly

- blocks merge only on high-signal failures

Runs:

- authentication smoke

- authenticated entry

- one core agent smoke path

- one credit-sensitive smoke path only if deterministic and isolated

Recommended command:

pnpm exec playwright test --grep @smoke

Alternative if smoke tests live under tests/smoke/:

pnpm exec playwright test tests/smoke

#### Gate 2: Nightly Regression Run

Purpose:

- broader coverage

- slower checks

- visual tests

- mocked edge cases

- optional multi-browser coverage

Runs:

- full smoke suite

- mocked data/error state tests

- visual tests

- broader authenticated regression

- optional browser matrix

Recommended command:

pnpm exec playwright test

Team rule:

PR checks should protect merge confidence without becoming a developer bottleneck.
Nightly checks should detect broader regressions without blocking every commit.

### Session: Update Workflow Triggers

The current workflow runs on push and pull request to main and master.

Day 10 should add a scheduled nightly run and optionally narrow PR execution to smoke tests.

Recommended trigger block:

name: Playwright Quality Gates

on:

pull_request:

branches: [main, master]

push:

branches: [main, master]

schedule:

- cron: '0 6 \* \* \*'

workflow_dispatch:

Note: GitHub cron uses UTC.
0 6 \* \* \* means 6:00 AM UTC, not local time.

### Session: Recommended Simplabots Workflow Blueprint

This version keeps the existing Simplabots realities:

- pnpm, not npm ci

- Font Awesome Pro secret setup

- Playwright install with Linux deps

- artifact upload

- split PR vs nightly command

- CI environment variables passed securely

name: Playwright Quality Gates

on:

pull_request:

branches: [main, master]

push:

branches: [main, master]

schedule:

- cron: '0 6 \* \* \*'

workflow_dispatch:

jobs:

playwright:

timeout-minutes: 60

runs-on: ubuntu-latest

env:

PLAYWRIGHT_BASE_URL: ${{ secrets.PLAYWRIGHT_BASE_URL }}

E2E_USER_EMAIL: ${{ secrets.E2E_USER_EMAIL }}

E2E_USER_PASSWORD: ${{ secrets.E2E_USER_PASSWORD }}

CI_TEST_ACCOUNT_ID: ${{ secrets.CI_TEST_ACCOUNT_ID }}

CI_TEST_PROFILE_ID: ${{ secrets.CI_TEST_PROFILE_ID }}

steps:

- name: Checkout repository

uses: actions/checkout@v4

- name: Setup Node.js

uses: actions/setup-node@v4

with:

node-version: '20'

cache: 'pnpm'

- name: Setup pnpm

uses: pnpm/action-setup@v4

with:

version: 10

- name: Configure Font Awesome Pro registry

run: |

echo "@fortawesome:registry=https://npm.fontawesome.com/" >> ~/.npmrc

echo "//npm.fontawesome.com/:\_authToken=${{ secrets.FONTAWESOME_NPM_AUTH_TOKEN }}" >> ~/.npmrc

- name: Install dependencies

run: pnpm install --frozen-lockfile

- name: Install Playwright browsers and Linux dependencies

run: pnpm exec playwright install --with-deps

- name: Run Pull Request smoke gate

if: github.event_name == 'pull_request'

run: pnpm exec playwright test --grep @smoke

- name: Run main branch smoke gate

if: github.event_name == 'push'

run: pnpm exec playwright test --grep @smoke

- name: Run nightly regression suite

if: github.event_name == 'schedule' || github.event_name == 'workflow_dispatch'

run: pnpm exec playwright test

- name: Upload Playwright report

if: ${{ !cancelled() }}

uses: actions/upload-artifact@v4

with:

name: playwright-report-${{ github.run_id }}

path: playwright-report/

retention-days: 7

- name: Upload Playwright test results

if: ${{ failure() }}

uses: actions/upload-artifact@v4

with:

name: playwright-test-results-${{ github.run_id }}

path: test-results/

retention-days: 7

### Session: Branch Protection Decision

The team decides which CI job blocks PR merges.

Recommended Day 10 policy:

- PR smoke gate: blocking

- nightly regression: non-blocking notification

- visual regression: non-blocking until CI baselines are stable

- broad multi-browser runs: non-blocking until flake rate is acceptable

Once the PR smoke job is stable, enable branch protection:

- require the Playwright smoke check before merge

- require status checks to pass

- prevent bypass for protected branches if desired

### Session: Artifact Salvaging

Day 9 configured artifacts inside Playwright.

Day 10 ensures those files survive cloud execution.

The workflow should upload:

- playwright-report/

- test-results/

- trace zips

- screenshots

- videos, if retained on failure

Recommended retention:

- 7 days for normal PR artifacts

- 14–30 days if nightly debugging history is needed

- avoid long retention for heavy videos unless there is a compliance need

### Session: Deliberate CI Failure Drill

Before calling the pipeline complete, the team intentionally creates a temporary test branch with a known failing test.

The drill proves:

- GitHub Actions runs the suite

- secrets inject correctly

- the failure blocks the PR check

- the HTML report uploads

- trace/screenshot/video artifacts are downloadable

- the team can diagnose failure from GitHub without rerunning locally

After the drill:

- revert the intentional failure

- rerun the pipeline

- confirm green status

### Session: CI Readiness Risks for Simplabots

The team documents known risks before enforcing strict gates.

Likely risk areas:

| Risk                          | Why It Matters                             | Mitigation                                 |
| ----------------------------- | ------------------------------------------ | ------------------------------------------ |
| Missing CI secrets            | Tests fail before reaching app             | Create required GitHub Secrets             |
| Font Awesome Pro auth missing | pnpm install can fail                      | Confirm FONTAWESOME_NPM_AUTH_TOKEN         |
| Auth session expiry           | Setup project fails                        | Recreate auth state per CI run             |
| Shared test user collision    | Parallel tests mutate same account/profile | Separate read-only and destructive users   |
| Credit-sensitive tests        | Can create nondeterministic state          | Dedicated credit test user or seeded state |
| Visual baselines              | Local screenshots may not match Linux CI   | Generate baselines in CI-like environment  |
| External AI providers         | Slow/costly/flaky                          | Mock non-smoke edge cases                  |
| Preview URL instability       | Tests fail due to deployment timing        | Run against stable staging URL first       |

### Day 10 Deliverable

By the end of Day 10, the team should have:

- a reviewed .github/workflows/playwright.yml

- pnpm-based CI installation

- secure GitHub Secrets documented

- Font Awesome Pro registry setup preserved

- PR smoke gate defined

- nightly/full regression trigger defined

- Playwright artifacts uploaded on failure

- a successful deliberate failure drill

- a documented branch protection recommendation

- a clear Week 3 stabilization backlog

### Advisor Checklist for You (Leader) at EOD

- [ ] Is the workflow committed under .github/workflows/?

- [ ] Does the workflow use pnpm, matching Simplabots?

- [ ] Does CI run pnpm exec playwright install --with-deps?

- [ ] Are E2E_USER_EMAIL, E2E_USER_PASSWORD, and PLAYWRIGHT_BASE_URL stored in GitHub Secrets?

- [ ] Is FONTAWESOME_NPM_AUTH_TOKEN configured for dependency installation?

- [ ] Are secrets referenced only through GitHub Actions, never hardcoded?

- [ ] Does the PR workflow run the fast smoke gate only?

- [ ] Does a scheduled or manual workflow run the broader suite?

- [ ] Are playwright-report/ and test-results/ uploaded as artifacts?

- [ ] Did the team intentionally fail a branch and confirm reports/artifacts were uploaded?

- [ ] Is branch protection ready to require the smoke gate once stable?

### Milestone Achieved: Sprint Complete

By the end of Day 10, the team has moved from local-only QA automation to a pipeline-ready quality system.

Simplabots now has the foundation for:

- local Playwright development

- reusable authenticated state

- controlled test data and mocking

- visual regression candidates

- debugging artifacts

- CI smoke gates

- nightly regression runs

The automation framework is now ready to move into stabilization, coverage expansion, and long-term CI enforcement.
