# 🧪 Rollout Regression Alert Triage Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Rollout Regression Alert Triage |
| Purpose | Standardize how Development Engineers and QA Automation Engineers coordinate when the bug tracker posts a rollout regression failure to Slack so ownership, classification, and closeout actions are explicit. |
| Owner | Engineering + QA Team Leads |
| Last Updated | 2026-09-01 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] Access to the bug tracking Slack channel and the posted rollout regression alert
- [ ] Access to the linked GitHub Actions workflow run, job logs, and Playwright artifacts
- [ ] Identified Development Engineer and QA Automation Engineer for the affected scope
- [ ] Access to the related issue, rollout PR, or expected-behavior context for the failing flow
- [ ] IF alert links, logs, or artifacts are inaccessible, THEN escalate to the team lead before ownership or classification continues

## Step-by-Step Checklist
### Phase 1: Intake the Alert and Assign Owners
1. **Open** the rollout regression alert in the bug tracking Slack channel.
2. **Identify** the failing suite, test name, and affected feature, module, or user flow.
3. **Link** the likely related issue, change request, or rollout PR in the same thread.
4. **Assign** one Development Engineer and one QA Automation Engineer to the alert.
5. **Post** a triage update in the thread with the failing run, related issue or PR, assigned owners, and next update ETA.

Post-Phase Validation

- [ ] The alert thread names a Dev owner and a QA owner
- [ ] The failing scope and related issue or PR are linked
- [ ] The team has a visible next-update commitment

### Phase 2: Review Shared Evidence and Classify the Failure
1. **Follow** [QA Failure Evidence Review](QA%20Failure%20Evidence%20Review.md) for artifact collection and classification, and use [Playwright Reproduction and Debugging](Playwright%20Reproduction%20and%20Debugging.md) for focused reruns when you need deeper reproduction.
2. **Review** the resulting evidence together in a Slack huddle, thread, or quick call.
3. **Choose** one action path after classification.
4. **Route** expected product changes or test drift to QA test updates with Development support on acceptance criteria.
5. **Route** legitimate regressions to Development for a code fix, with QA validating coverage and rerun stability.

Post-Phase Validation

- [ ] The failure is classified with supporting evidence
- [ ] The owning execution path is explicit
- [ ] The alert thread reflects the current decision

### Phase 3: Coordinate Playwright Coverage Availability
1. **Confirm** whether the Playwright test that reproduces or guards the reported issue exists on a QA branch or PR, and link that branch or PR in the alert thread.
2. **Ensure** QA's Playwright coverage is available to Development by rolling it out to the base `dev` branch, or by making the QA branch or PR explicitly available for the Development Engineer to use while the rollout is pending.
3. **State** the coverage availability status in the thread: already on `dev`, available from the linked QA branch or PR, or blocked with the owner and expected rollout action.
4. **Do not** ask Development to create replacement Playwright coverage to compensate for QA coverage that is missing from `dev` or unavailable on a linked QA branch or PR; QA owns making its existing coverage available.
5. **Escalate** to both team leads if the QA coverage cannot be made available in time to resolve the issue safely.

Post-Phase Validation

- [ ] The relevant QA test branch or PR is linked, or its absence is explicitly documented
- [ ] The Playwright coverage is on `dev` or is available to the Development Engineer from a linked QA branch or PR
- [ ] Development is not creating substitute Playwright tests because QA coverage is unavailable
- [ ] Any rollout blocker has a named owner and escalation path

### Phase 4: Escalate Deadlocks
1. **Escalate** to both team leads in the same thread if the Development Engineer and QA Automation Engineer cannot agree on classification.
2. **Review** the evidence with the leads and obtain a final ruling on test update versus code fix.
3. **Pass** the decision back to the engineer and QA pair for execution.

Post-Phase Validation

- [ ] Any deadlock has a lead-owned ruling
- [ ] The execution pair has a clear final decision
- [ ] Escalation history remains in the same thread

### Phase 5: Close the Alert
1. **Confirm** the selected action is merged or otherwise completed and the rollout regression suite reruns successfully.
2. **Post** a closeout update in the Slack thread with the root cause, final classification, resolution PRs, and verification run link.
3. **Record** follow-up items if the alert exposed a process, coverage, or ownership gap.

Post-Phase Validation

- [ ] Resolution and verification links are posted in the alert thread
- [ ] Root cause and final decision are documented
- [ ] Follow-up gaps are captured when needed

## Common Mistakes & Fixes
| Common Mistake | Fix |
| --- | --- |
| Starting ownership discussions before linking the related issue or PR | Link the rollout context in the alert thread before assigning next actions. |
| Repeating full artifact-review or rerun steps inside every alert thread | Use the shared failure evidence and Playwright debugging playbooks, then keep the alert thread focused on ownership and decisions. |
| Letting Dev and QA work in parallel without a shared classification | Review evidence together first, then route work based on one agreed path. |
| Leaving QA Playwright coverage isolated on an unshared branch or PR | QA must roll the coverage out to `dev` or link the QA branch or PR and make it available to Development before the engineer relies on it. |
| Asking Development to write replacement Playwright tests because QA coverage is unavailable | QA owns making its existing coverage available; escalate the availability blocker instead of creating compensating Development tests. |
| Escalating too late when Dev and QA disagree | Bring in both team leads as soon as classification stalls. |
| Closing the thread without verification evidence | Post the rerun link and final resolution details before marking triage complete. |

## Success Criteria
- [ ] Every rollout regression alert gets a named Dev and QA owner pair
- [ ] Classification is explicitly documented using the shared evidence review process
- [ ] QA Playwright coverage is available on `dev` or from a linked QA branch or PR before Development relies on it
- [ ] Development does not create compensating Playwright tests for QA coverage that has not been made available
- [ ] Deadlocks are escalated to both team leads and resolved in the same thread
- [ ] Resolution and verification links are posted before triage is closed

## Storage & Access
- Store this playbook under `docs/playbooks/quality-assurance/` and keep it accessible to Engineering and QA.
- Keep read access open for everyone expected to respond to rollout alerts or approve the final classification.
- Always Open Policy: keep this playbook visible while the Slack alert is being triaged so ownership and escalation steps are not skipped.

## Next review date
2026-10-07
