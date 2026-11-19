# 🧪 QA Daily Testing Process Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | QA Daily Testing Process |
| Purpose | Standardize the daily QA workflow from scope planning through execution, evidence capture, defect routing, and end-of-day handoff. |
| Owner | QA Team |
| Last Updated | 2026-07-09 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] Access to the SimplaBots repository, required branches, and local project dependencies
- [ ] Access to QA test accounts, required test data, and any approved mocks needed for the planned scope
- [ ] Access to Playwright commands, report artifacts, and trace viewer
- [ ] Access to the issue tracker, flake log, and QA reference docs in `tests/` and `docs/`
- [ ] Confirmation that no production credentials, tokens, or secrets are being stored in screenshots or notes
- [ ] IF the local environment is unstable or the build is failing, THEN pause test execution and fix the environment before starting QA coverage
- [ ] IF running Playwright tests against the local server (matching PR gate mode), THEN confirm the local app server is running and reachable at the expected port before executing any test commands — in CI the server is booted automatically; local runs require an explicit server process

## Step-by-Step Checklist
### Phase 1: Plan the Daily Scope
1. **Confirm** what features, fixes, or rollout items must be tested today.
2. **Review** the previous day's failed tests, open bugs, and unresolved release risks.
3. **Classify** each target as smoke, regression, integration, or exploratory coverage.
4. **Decide** whether each target requires live backend data, seeded test data, or approved mocks.
5. **Write** a short daily scope list with expected outcomes for each target.

Post-Phase Validation

- [ ] The daily QA scope is documented and prioritized
- [ ] Risk-heavy user flows are included in the first execution pass
- [ ] Must-test items are clearly separated from nice-to-test items

### Phase 2: Prepare the Environment and Data
1. **Open** the project on the correct branch for the work being validated.
2. **Start** the local app server and confirm it is reachable before running any Playwright commands — the PR gate CI pipeline boots its own isolated server instance automatically, so local runs must replicate this by having the server up at the expected port.
3. **Run** a quick health check such as a focused smoke command after the server is confirmed healthy.
4. **Validate** required environment variables, auth state, and service dependencies.
5. **Confirm** shared and isolated test users are available for the planned cases.
6. **Check** the database records or fixtures required for the feature under test.

Post-Phase Validation

- [ ] The local app server is running and reachable at the expected port
- [ ] The environment is healthy and reproducible
- [ ] Required accounts and data are ready
- [ ] Session and auth state are valid for planned tests

### Phase 3: Design the Tests Before Execution
1. **Define** what pass and fail mean for each target before running the suite.
2. **Follow** [Playwright Reproduction and Debugging](Playwright%20Reproduction%20and%20Debugging.md) for locator priority, focused-first execution, and repeat-check guidance.
3. **Add** assertions for visible UI outcomes and backend state changes when the flow writes data.
4. **Plan** evidence capture for failures, including report, trace, screenshot, and retry results.
5. **Add** duplicate-submit and recovery checks for write or delete flows.
6. **Identify** which flows need focused dry runs before broader execution starts.

Post-Phase Validation

- [ ] Each planned test has clear expected behavior
- [ ] Locator and assertion strategy follow team standards
- [ ] Evidence expectations are defined before execution starts

### Phase 4: Execute and Stabilize Coverage
1. **Start** with the focused command selected through [Playwright Reproduction and Debugging](Playwright%20Reproduction%20and%20Debugging.md).
2. **Fix** selector, wait, or setup issues discovered in the focused run before scaling out.
3. **Re-run** the focused test until the result is stable enough to trust.
4. **Run** the broader smoke or regression scope after focused stability is confirmed.
5. **Record** the command, browser/project, and retry count for the executed scope.

Post-Phase Validation

- [ ] New or updated tests pass in focused mode
- [ ] No unstable locator anti-patterns were introduced
- [ ] Broader suite results are recorded with reproducible commands

### Phase 5: Triage Failures and Route Defects
1. **Follow** [QA Failure Evidence Review](QA%20Failure%20Evidence%20Review.md) for artifact inspection, focused reruns, and classification before filing or escalating anything.
2. **Create** a defect for deterministic product issues with expected-versus-actual behavior and artifact links.
3. **Update** the flake log for intermittent failures with suspected cause and retry behavior.
4. **Escalate** Sev 1 submit-safety, auth, or release-blocking failures immediately after classification.
5. **Route** test drift items to QA coverage updates and legitimate regressions to engineering fixes.

Post-Phase Validation

- [ ] Each failure has evidence and one clear classification
- [ ] Each defect includes reproducible context and artifact references
- [ ] Flaky behavior is tracked separately from deterministic defects

### Phase 6: Publish the End-of-Day Handoff
1. **Compare** completed testing against the morning scope list.
2. **Publish** a short QA status update with pass, fail, blocked, and deferred items.
3. **Call out** Sev 1 and Sev 2 issues, release risks, and blocked dependencies.
4. **Share** links to reports, traces, defects, and rerun results.
5. **List** the next-day priorities based on objective outcomes from the day.

Post-Phase Validation

- [ ] The daily QA summary is published and actionable
- [ ] Risks and blockers are visible to engineering and product owners
- [ ] The next-day plan is prepared from objective results

## Common Mistakes & Fixes
| Common Mistake | Fix |
| --- | --- |
| Running full suites before validating the environment | Start the local server, confirm it is reachable, then run one focused smoke test before scaling to larger coverage. |
| Adding unstable selectors in new Playwright tests | Follow the shared Playwright workflow's locator priority before changing coverage. |
| Treating the first failure as a product bug | Use the shared evidence review playbook before classifying or filing a defect. |
| Mixing flaky and deterministic failures together | Capture retry outcomes and log intermittent behavior separately in the flake log. |
| Skipping duplicate-submit checks on destructive flows | Add submit-safety assertions for disable state, loading state, retry behavior, and no-duplicate side effects. |
| Publishing a vague end-of-day update | Include pass, fail, blocked, deferred, risk, and next-day priorities in the handoff. |
| Running Playwright without starting the local server first | PR gate CI boots the server automatically; local runs require an explicit server process at the expected port before any test commands execute. |

## Success Criteria
- [ ] Daily QA scope is documented and risk-prioritized before execution
- [ ] Environment and test data are validated before broader suite execution
- [ ] New or updated tests follow locator and structure standards
- [ ] Failures are reviewed through the shared evidence process before defects are filed
- [ ] Flaky behavior is tracked separately from deterministic defects
- [ ] The daily handoff includes status, risks, blockers, and next actions

## Storage & Access
- Store this playbook under `docs/playbooks/quality-assurance/` as the team standard for daily QA execution.
- Provide edit access to QA leads and read access to QA, Engineering, and Product stakeholders.
- Always Open Policy: QA engineers should keep this playbook visible during daily execution and handoff.

## Next review date
2026-10-07
