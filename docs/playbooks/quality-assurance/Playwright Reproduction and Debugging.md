# 🧪 Playwright Reproduction and Debugging Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Playwright Reproduction and Debugging |
| Purpose | Standardize how QA and Engineering reproduce failures, run focused and broader Playwright coverage, collect debugging artifacts, and distinguish deterministic failures from flaky behavior. |
| Owner | Engineering + QA Team Leads |
| Last Updated | 2026-07-09 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] Access to the SimplaBots repository, local dependencies, and the target branch or failing workflow context
- [ ] Access to the relevant failing spec, issue, or rollout alert that defines the reproduction target
- [ ] Access to required test users, auth state, and test data for the affected flow
- [ ] Ability to open the Playwright HTML report, trace, screenshots, and console output
- [ ] A known browser or project target, such as `chromium`, that matches the reported failure
- [ ] IF the reproduction target is still vague, THEN stop and write one clear repro statement before running commands
- [ ] IF reproducing a PR gate CI failure locally, THEN confirm whether the local app server is running — CI boots and tears down its own isolated server instance automatically via the `webServer` configuration; local reproduction requires an explicit server process before test commands are executed

## Step-by-Step Checklist
### Phase 1: Set the Reproduction Target
1. **Open** the issue, alert, or ticket that describes the failure.
2. **Identify** the narrowest spec, test, or user flow that matches the reported problem.
3. **Confirm** the browser or project, auth state, data setup, and server environment needed to match the reported scenario — PR gate CI failures run against a local server (`localhost`) not the beta environment; local reproduction must match this setup.
4. **Choose** the first focused command you will run before any broader suite execution.
5. **Write** the repro target in one sentence so every rerun stays aligned to the same goal.

Post-Phase Validation

- [ ] The failing flow and target spec are identified
- [ ] Browser or project and data setup are known
- [ ] A focused starting command is selected

### Phase 2: Run Focused Reproduction First
1. **Run** one focused test first, such as `pnpm playwright test tests/smoke/auth.spec.ts --project=chromium`.
2. **Run** the exact failing spec from QA or CI when that path is known, such as `pnpm playwright test tests/smoke/<failing-spec>.spec.ts --project=chromium`.
3. **Capture** the exact command, browser or project, and initial result before changing code or test logic.
4. **Save** baseline evidence from the first meaningful failure, including report, trace, screenshot, or console output.
5. **Avoid** broader suite runs until the focused path is either reproducible or clearly documented as non-repro.

Post-Phase Validation

- [ ] A focused command has been run before any broader suite
- [ ] Baseline evidence is saved from the targeted path
- [ ] The reproduction result is documented

**IF reproducing a PR gate CI failure locally, THEN start the local app server before running any test command — CI automatically builds, boots, and tears down an isolated server instance; your local run must replicate this by having the server running at the expected port before Playwright executes.**

**IF the CI failure log shows an error before any test ran, THEN check whether the failure is a server startup failure rather than a test failure — inspect the webServer output in the CI log before opening the Playwright report.**

### Phase 3: Expand Debugging Modes When Needed
1. **Run** the failing spec in headed mode when visual behavior is needed, such as `pnpm playwright test tests/smoke/<failing-spec>.spec.ts --headed --project=chromium`.
2. **Force** trace collection for deeper debugging, such as `pnpm playwright test tests/smoke/<failing-spec>.spec.ts --trace on --project=chromium`.
3. **Use** interactive debug mode when step-by-step inspection is needed, such as `pnpm playwright test tests/smoke/<failing-spec>.spec.ts --debug --project=chromium`.
4. **Open** the Playwright HTML report after failures with `pnpm playwright show-report`.
5. **Follow** locator priority in this order when test updates are required: role, then label or text, then test id.

Post-Phase Validation

- [ ] The right debugging mode was used for the failure type
- [ ] The report and artifacts were inspected
- [ ] Any selector changes follow the team locator standard

### Phase 4: Confirm Stability and Broaden Coverage
1. **Re-run** the focused test until the result is stable enough to trust.
2. **Use** repeat checks for flaky behavior, such as `pnpm playwright test tests/smoke/<failing-spec>.spec.ts --project=chromium --repeat-each=10`.
3. **Run** nearby smoke coverage only after focused stability is confirmed, such as `pnpm playwright test tests/smoke --project=chromium`.
4. **Escalate** environment or data problems if the failure remains non-repro after focused, headed, trace, and debug passes.
5. **Record** retry counts, pass rate, and any residual uncertainty in the issue, ticket, or handoff note.

Post-Phase Validation

- [ ] Focused stability is confirmed or explicitly documented as unresolved
- [ ] Flaky versus deterministic behavior is identified
- [ ] Broader suite coverage was only run after targeted validation

## Common Mistakes & Fixes
| Common Mistake | Fix |
| --- | --- |
| Running full suites before a focused repro attempt | Start with the narrowest spec or smoke path that matches the reported failure. |
| Changing code before saving baseline evidence | Capture the first meaningful failure artifacts before implementation starts. |
| Treating headed, trace, and debug modes as interchangeable | Pick the mode that matches the problem: visual flow, deep artifact capture, or step-through inspection. |
| Updating selectors without the team hierarchy | Use role first, then label or text, and only use test id when needed. |
| Calling an issue fixed after one passing rerun | Re-run until stable and use repeat checks for flaky paths. |
| Logging results without the exact command | Paste the command, browser or project, and retry outcome in every update. |
| Running Playwright locally without starting the app server | PR gate CI boots the server automatically; local runs do not — start the server at the expected port before executing any test commands. |
| Treating a CI server startup failure as a test failure | Check the webServer output in the CI log first — if no tests ran, the failure is a build or startup issue, not a Playwright test regression. |

## Success Criteria
- [ ] Every debugging session starts with a clear reproduction target and a focused command
- [ ] Report, trace, screenshot, or console artifacts are captured from meaningful failures
- [ ] Locator changes follow the team standard when test updates are required
- [ ] Flaky behavior is separated from deterministic failures before closure or escalation
- [ ] Broader suite coverage happens only after focused stability is established

## Storage & Access
- Store this playbook under `docs/playbooks/quality-assurance/` as the shared command and debugging reference for QA and Engineering.
- Provide read access to engineers, QA, and team leads who reproduce or validate Playwright failures.
- Always Open Policy: keep this playbook visible whenever a failure is being reproduced or debugged so run order and artifact capture stay consistent.

## Next review date
2026-10-07
