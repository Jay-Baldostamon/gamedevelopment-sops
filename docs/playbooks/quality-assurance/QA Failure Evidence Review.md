# 🧪 QA Failure Evidence Review Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | QA Failure Evidence Review |
| Purpose | Standardize how QA and Engineering collect artifacts, review failure evidence, classify outcomes, and package next actions before deciding whether to update tests, fix product code, or address environment drift. |
| Owner | Engineering + QA Team Leads |
| Last Updated | 2026-07-09 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] Access to the relevant GitHub Actions workflow run, failed job logs, and artifact downloads
- [ ] Access to open Playwright HTML reports, traces, screenshots, and console output
- [ ] Access to the related issue tracker, PR, or rollout context for expected behavior
- [ ] Ability to rerun the failing spec or suite in a focused way when local validation is needed
- [ ] Access to the flake log and defect reporting workflow used by the team
- [ ] IF run links, artifacts, or trace files are inaccessible, THEN escalate to the team lead before continuing classification

## Step-by-Step Checklist
### Phase 1: Collect Failure Evidence
1. **Open** the failed workflow run and the specific failed job.
2. **Capture** the failing test names, tags, browser/project, and the first meaningful error snippet from the logs.
3. **Download** the relevant Playwright report artifact and **extract** it locally.
4. **Open** the extracted `index.html` report and **review** the failing step timeline, screenshot, trace, console output, and retry history.
5. **Record** the exact run link, job name, artifact name, and any environment notes that could affect reproduction — for PR gate failures, note whether any tests ran at all or whether the failure occurred during server startup before tests could execute.

Post-Phase Validation

- [ ] Run, job, and failing test references are captured
- [ ] Report and artifact evidence are accessible
- [ ] Reviewer notes identify where the failure occurred in the flow

### Phase 2: Classify the Failure
1. **Compare** the observed behavior against the expected product behavior, acceptance criteria, and current rollout scope.
2. **Use** [Playwright Reproduction and Debugging](Playwright%20Reproduction%20and%20Debugging.md) to rerun the failing spec in focused mode when classification is still unclear.
3. **Determine** whether the failure is deterministic, flaky, or environment-specific.
4. **Classify** the failure into one primary category: legitimate regression, expected product change/test drift, test data/setup issue, locator or timing issue, server startup failure (the CI server did not start successfully before tests ran — inspect webServer output, build errors, or port conflicts), or infrastructure/environment issue.
5. **Escalate** to the Dev Lead and QA Lead if the engineer and QA reviewer cannot agree on the classification.

Post-Phase Validation

- [ ] Expected versus actual behavior is written down
- [ ] Flaky versus deterministic behavior is identified
- [ ] One clear classification is assigned or escalated

### Phase 3: Package the Outcome
1. **Document** the reproducible command, browser/project, branch or workflow context, and retry outcome.
2. **Link** the supporting artifacts, including logs, report, trace, screenshot, and related issue or PR.
3. **Route** the next action to one of these paths: test update, code fix, test data correction, or infrastructure follow-up.
4. **Create** or update the defect, flake log, or rollout thread with the final classification and evidence summary.
5. **Call out** severity immediately if the failure affects critical write, delete, auth, or release-blocking flows.

Post-Phase Validation

- [ ] The next owner and next action are explicit
- [ ] Artifact links are attached to the record of work
- [ ] Severity and escalation path are clear when impact is high

## Common Mistakes & Fixes
| Common Mistake | Fix |
| --- | --- |
| Filing a bug from the first log snippet only | Open the Playwright report and inspect trace, screenshot, and retry evidence before classifying the failure. |
| Treating every failed run as a product regression | Compare against expected behavior and separate test drift, data/setup issues, and environment failures first. |
| Skipping focused reruns when the failure is unclear | Use the shared Playwright workflow before escalating or assigning ownership. |
| Logging a flaky failure as deterministic | Capture retry outcomes and note whether the issue reproduces consistently. |
| Posting a conclusion without artifact links | Attach the run, report, trace, and related issue or PR in the final update. |
| Leaving severity implicit for destructive or auth-related failures | Call out release risk and escalate immediately when critical flows are affected. |

## Success Criteria
- [ ] Every reviewed failure has a run link, artifact evidence, and a written expected-versus-actual summary
- [ ] Each failure is classified as regression, test drift, flake, data/setup issue, or environment issue
- [ ] Ownership and next action are explicit before the reviewer closes the triage step
- [ ] High-severity failures are escalated immediately with supporting evidence

## Storage & Access
- Store this playbook under `docs/playbooks/quality-assurance/` as the shared reference for failure review and classification.
- Provide read access to QA, Engineering, and team leads who participate in rollout or daily test triage.
- Always Open Policy: keep this playbook visible whenever a failure is being reviewed so evidence capture and classification stay consistent.

## Next review date
2026-10-07
