# 🧪 Development Engineer QA Issue Intake Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Development Engineer QA Issue Intake |
| Purpose | Standardize how engineers intake QA-reported issues, reproduce failures, apply the smallest safe fix, and hand validated results back to QA with clear evidence. |
| Owner | Engineering Team |
| Last Updated | 2026-07-09 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] Access to the SimplaBots repository, target branch, and local dependencies
- [ ] Access to the QA issue tracker, linked artifacts, and any related issue or PR context
- [ ] Access to the test users, auth state, and test data needed to match the QA scenario
- [ ] Ability to open Playwright artifacts such as trace, screenshot, and HTML report
- [ ] Confirmation that no secrets are copied into tickets, logs, screenshots, or commit messages
- [ ] IF issue details are incomplete, THEN request missing repro steps or environment notes before implementation begins

## Step-by-Step Checklist
### Phase 1: Intake the QA Ticket
1. **Open** the QA ticket and read the expected behavior, actual behavior, severity, and linked evidence.
2. **Follow** [QA Failure Evidence Review](QA%20Failure%20Evidence%20Review.md) to review the artifacts and note whether the issue appears deterministic, flaky, or environment-specific.
3. **Confirm** the exact environment where QA saw the issue, including local or CI context, browser or project, and OS when relevant.
4. **Determine** whether the issue is user-facing, release-blocking, or likely isolated to test drift or setup.
5. **Write** a one-sentence reproduction target before starting any local debugging work.

Post-Phase Validation

- [ ] The ticket has enough detail to attempt reproduction
- [ ] Severity and impact are understood
- [ ] The reproduction target is written clearly

### Phase 2: Prepare Local Reproduction
1. **Sync** code on the fix branch and confirm the working tree is clean before debugging.
2. **Start** the local app server and confirm it is reachable at the expected port — the PR gate CI pipeline boots an isolated server instance automatically before tests run; local reproduction must replicate this explicitly.
3. **Run** the build or baseline health checks needed to trust local results.
4. **Prepare** the test data, account state, and environment variables that match the QA scenario.
5. **Reuse** the exact QA or CI command when that command is available.
6. **Save** your own baseline evidence before changing code or test coverage.

Post-Phase Validation

- [ ] Local app server is running and reachable at the expected port
- [ ] Local setup matches the QA scenario
- [ ] Build or baseline health checks pass
- [ ] Baseline evidence is saved before implementation

### Phase 3: Reproduce and Debug the Failure
1. **Follow** [Playwright Reproduction and Debugging](Playwright%20Reproduction%20and%20Debugging.md) for focused runs, headed mode, trace capture, debug mode, and repeat checks.
2. **Start** with the narrowest spec or smoke path that matches the reproduction target.
3. **Document** the exact reproduction command, browser or project, and retry behavior in the ticket.
4. **Escalate** environment or artifact gaps if the failure remains non-repro after the shared debugging workflow.
5. **Decide** whether the issue is ready for a code fix, a test update, or a return to QA for missing context.

Post-Phase Validation

- [ ] Reproduction is confirmed or clearly documented as non-repro
- [ ] Exact commands and retry outcomes are captured
- [ ] The next action is explicit before implementation starts

### Phase 4: Implement the Fix and Verify
1. **Apply** the smallest safe code change that addresses the root cause.
2. **Add** or update regression coverage when the failure should be prevented in future runs.
3. **Re-run** the focused path using the shared Playwright workflow until the result is stable enough to trust.
4. **Run** nearby smoke coverage after the targeted fix is stable.
5. **Capture** before-and-after evidence and note any residual risks or known limitations.

Post-Phase Validation

- [ ] Root cause is addressed
- [ ] Regression coverage is added or updated when needed
- [ ] Targeted and nearby smoke validation pass

### Phase 5: Hand the Issue Back to QA
1. **Update** the ticket with the root cause summary and the fix that was applied.
2. **Include** the exact commands used, the final pass results, and any repeat-check outcome.
3. **Attach** report, trace, screenshot, or log references that help QA verify quickly.
4. **Request** QA re-test with a clear validation scope and expected outcome.
5. **Flag** residual risks, known limitations, or follow-up work before closing the engineer handoff.

Post-Phase Validation

- [ ] QA has everything needed to verify quickly
- [ ] Commands and artifacts are included in the handoff
- [ ] Residual risk is explicitly stated

## Common Mistakes & Fixes
| Common Mistake | Fix |
| --- | --- |
| Starting to code before reproduction is confirmed | Reproduce first and save baseline evidence before making changes. |
| Repeating artifact review steps ad hoc in every ticket | Use the shared failure evidence review playbook to classify the issue before debugging. |
| Running broad suites too early | Use the shared Playwright workflow to start narrow, then broaden after targeted stability. |
| Marking a flaky issue fixed after one pass | Use repeat checks and document retry behavior before handoff. |
| Updating Playwright selectors without the team standard | Follow the shared Playwright workflow's locator priority before changing coverage. |
| Sending QA a handoff without commands or artifacts | Include the exact commands, pass results, and artifact references in every re-test request. |

## Success Criteria
- [ ] QA-reported issues are reproducible or clearly documented as non-repro with evidence
- [ ] Root cause is identified and explained in the ticket
- [ ] Focused and nearby smoke validation support the fix before handoff
- [ ] Reproduction and verification commands are documented
- [ ] QA receives artifact-backed re-test guidance with any residual risks called out

## Storage & Access
- Store this playbook under `docs/playbooks/quality-assurance/` for Engineering and QA collaboration on issue resolution.
- Provide edit access to Engineering leads and QA leads, with read access for engineers, QA, Product, and release stakeholders.
- Always Open Policy: keep this playbook visible while triaging and resolving QA-reported issues so evidence and handoff details are not skipped.

## Next review date
2026-10-07
