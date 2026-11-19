# Week 9 Overview: Playwright Failure Issue Lifecycle Automation

Week 9 establishes deterministic Playwright failure issue lifecycle automation for SimplaBots (`hurdman/simplabots`) so QA and engineering can track real regressions without duplicate issue noise.

The objective is to enforce one stable test identity model, create missing failure issues with `automation-test`, and only auto-close issues when the exact same test key is observed and passed in a later run.

This blueprint is intentionally delivered as one week-level artifact to match the current one-week training cadence.

## What to Expect This Week

### Day 41 - Align Workflow Contract and Permissions

Confirm the workflow contract in `.github/workflows/playwright.yml`:

- workflow permissions include:
  - `contents: read`
  - `issues: write`
- Playwright gates emit JSON to one shared directory:
  - `PLAYWRIGHT_JSON_OUTPUT_DIR=test-results/json`
  - unique names per gate (`smoke.json`, `idor.json`, `regression.json`, `quarantine.json`)
- reporter includes JSON output (`--reporter=html,json` or `--reporter=json`)

Key SimplaBots context for this week:

- PR/push quality gates: smoke + IDOR
- schedule/manual quality gates: regression + quarantine advisory
- branch targets include `beta` and `playwright/**`

### Day 42 - Implement Deterministic Test Identity and Parsing

Use one stable issue title format as the dedupe and lifecycle key:

`[Playwright Failure] {project} :: {file} :: {full test title}`

Automation step expectations:

- parse every JSON file in `test-results/json`
- skip unreadable or broken JSON with warning logs
- extract failed tests using both signals:
  - `test.status === "unexpected"`
  - result statuses include `failed`, `timedOut`, or `interrupted`
- collect lifecycle sets:
  - `failures`
  - `observedTitles`
  - `observedPassedTitles`

### Day 43 - Create Missing Automation Issues Without Duplicates

After report parsing:

- ensure the `automation-test` label exists; create it if missing
- query open repo issues labeled `automation-test`
- build `openByTitle` keyed by issue title
- create only missing issues for current failed keys

Issue body should include:

1. failing test context (project, file:line, full title)
2. failure details block (error text truncated to safe size)
3. CI context (event, branch, commit SHA, run URL)

### Day 44 - Auto-Close Only on Observed Pass

Close an open `automation-test` issue only when all conditions are true:

1. key is not currently failing
2. key was observed in this run
3. key was observed as passed in this run

Hardening outcome:

- no false closure when tests are filtered out, skipped by gate conditions, or not executed

### Day 45 - Validate Scenarios and Operationalize

Validate the Week 9 lifecycle behavior with three required scenarios:

1. new failing test creates one issue
2. repeated failure for same key does not create duplicates
3. later observed pass for same key auto-closes the open issue

Document operational caveat for SimplaBots:

- on fork-origin pull requests, token restrictions may block issue writes depending on repository security settings

## Week 9 Success Criteria

By the end of Week 9, QA should have:

- [ ] A live `actions/github-script` automation step running with `if: always()` after Playwright execution
- [ ] Deterministic title-based dedupe using `[Playwright Failure] {project} :: {file} :: {full test title}`
- [ ] Automatic creation of missing `automation-test` issues for current unexpected failures
- [ ] Automatic closure guarded by observed-and-passed conditions only
- [ ] Label bootstrap logic that creates `automation-test` when absent
- [ ] Broken-report resilience that skips invalid JSON and continues processing
- [ ] Evidence from the three required lifecycle scenarios
- [ ] Repo notes documenting fork PR token-write constraints

## Guiding Principle

Automate issue lifecycle as evidence, not noise.

In SimplaBots, the Playwright signal is trusted only when failure identity is stable, duplicate creation is prevented, and closure is based on observed recovery of the exact same test key.
