# 📘 CI/CD Deployment Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | CI/CD Deployment Playbook |
| Purpose | Standardize the AI-assisted engineering workflow for code review, pull request documentation, staging deployment from `dev` to `beta`, and basic post-deployment UAT so deployments are traceable, repeatable, and less error-prone. |
| Owner | Alan Baldelobar |
| Last Updated | 2026-05-18 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] Confirm you are working on a feature or fix branch created from `dev`
- [ ] Confirm you have repository access and required GitHub permissions
- [ ] Confirm you can open pull requests and merge according to team policy
- [ ] Confirm you have access to the AI tooling used for code assistance and run summaries
- [ ] Confirm you can run local validation checks
- [ ] Confirm you understand branch roles:  
       - [ ] `dev` \= active development  
       - [ ] `beta` \= staging  
       - [ ] `main` \= live production
- [ ] Confirm you have access to GitHub Actions workflows for:  
       - [ ] `deploy beta`  
       - [ ] deployment status verification
- [ ] Confirm you know the beta migration failure recovery path and have the related playbook ready if the throwaway DB clone gate fails
- [ ] Confirm you know the minimum UAT flow:  
       - [ ] Login works  
       - [ ] Dashboard loads correctly
- [ ] Confirm you know the escalation contact for deployment or UAT failures: Alan Baldelobar
- [ ] Confirm the relevant playbook is open before starting work

## Step-by-Step Checklist
### Phase 1: Prepare and Validate Changes Locally

1. **Create** a working branch from `dev`.
2. **Implement** the feature or fix on that branch.
3. **Review** all AI-generated code before keeping it.
4. **Verify** business logic matches the intended outcome.
5. **Check** for unintended side effects in related files and flows.
6. **Run** TypeScript validation.
7. **Run** ESLint.
8. **Run** formatting checks.
9. **Run** project-required tests.
10. **Record** important implementation notes while the context is fresh.

**IF local validation fails, THEN fix the issue before opening a pull request.**

**IF AI-generated output is unclear, THEN rewrite or validate it manually before proceeding.**

Verification checklist:

- [ ] Branch is based on `dev`
- [ ] TypeScript passes
- [ ] Lint passes
- [ ] Formatting passes
- [ ] Required tests pass
- [ ] Logic has been manually reviewed
- [ ] Implementation notes have been captured

Example local validation commands:

```shell
npm run typecheck
npm run lint
npm run format:check
npm test
```

Implementation notes to capture:

```
Gotchas:
-

Assumptions:
-

Risks / watchouts:
-

Follow-up items:
-
```

### Phase 2: Open PR and Complete Documentation

1. **Open** a pull request from your feature branch into `dev`.
2. **Write** a complete PR title that clearly states the change.
3. **Add** a PR description with what changed.
4. **Add** a PR description with why the change was made.
5. **Add** a PR description with local validation performed.
6. **Add** a PR description with expected CI behavior.
7. **Add** AI-assisted notes, including gotchas, risks, assumptions, and edge cases.
8. **Request** review from at least one partner reviewer.
9. **Monitor** CI checks after the PR opens.
10. **Respond** to review comments one at a time.
11. **Update** code when changes are requested.
12. **Update** PR documentation when implementation changes.
13. **Merge** the PR into `dev` only after approval and green checks.

**IF CI checks fail, THEN fix the failures and re-run checks until all required checks are green.**

**IF a reviewer requests changes, THEN update both the code and the PR description before re-requesting review.**

PR description template:

```

## Common Mistakes & Fixes
| Mistake                                               | Fix                                                                                                      |
| :---------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| Submitting a PR without AI context                    | Add what changed, why it changed, validation performed, and AI-discovered notes before requesting review |
| Trusting AI output without verification               | Run local checks and manually review logic, side effects, and expected behavior                          |
| Skipping local checks and relying on CI               | Run TypeScript, lint, formatting, and required tests before opening the PR                               |
| Opening an unclear deployment PR                      | Use explicit `dev` → `beta` promotion language and include `deploy beta` in the title                    |
| Merging a deployment PR but forgetting the workflow   | Run the `deploy beta` GitHub Actions workflow immediately after merge                                    |
| Declaring deployment complete without checking status | Capture the deployment identifier and verify rollout status explicitly                                   |
| Declaring deployment complete without UAT             | Wait 5–10 minutes and perform login plus dashboard validation on `beta`                                  |
| Reporting a failure without enough detail             | Include logs, exact error text, timestamps, screenshots, and reproduction steps                          |
| Confusing `dev`, `beta`, and `main`                   | Follow the branch contract strictly: `dev` \= development, `beta` \= staging, `main` \= production       |
| Letting the SOP go stale                              | Review every 90 days and update after process changes or avoidable mistakes                              |

## Success Criteria
- [ ] Engineers run local validation before PR submission
- [ ] PRs contain complete change context and AI-assisted notes
- [ ] At least one partner review is completed before merge
- [ ] Changes merge into `dev` only after approvals and passing checks
- [ ] Staging promotion always uses an explicit `dev` → `beta` deployment PR
- [ ] The `deploy beta` workflow is triggered for every staging rollout
- [ ] Deployment status is checked and documented
- [ ] Basic UAT is completed after each rollout
- [ ] Failures are escalated to Alan Baldelobar with actionable details
- [ ] Deployment records remain searchable, traceable, and auditable
- [ ] Playbook updates are made when new gaps, errors, or process changes are found

## Storage & Access
Store this playbook in the team’s central playbook library in a single shared location used for training and execution.

**Always Open Policy:** Keep this playbook open and visible whenever performing PR review, deployment promotion, or post-deployment UAT. Do not rely on memory for critical release steps.

Recommended usage:

- [ ] Store centrally with other operational playbooks
- [ ] Use during onboarding and cross-training
- [ ] Link it inside deployment-related pull requests when relevant
- [ ] Review it every 90 days
- [ ] Update it immediately after process drift, recurring mistakes, or tooling changes

**Next review date:** 2026-07-01

## Next review date
2026-09-24

## What changed
-

## Why this changed
-

## Validation performed
- Ran local type checks
- Ran lint
- Ran formatting checks
- Ran tests
- Reviewed expected CI behavior

## AI-assisted implementation notes
-

## Gotchas / risks / edge cases
-

## Follow-up items
-
```

Verification checklist:

- [ ] PR targets `dev`
- [ ] PR description is complete
- [ ] AI run context is included
- [ ] At least 1 reviewer has been requested
- [ ] Required CI checks are passing
- [ ] Review comments are resolved
- [ ] PR is merged into `dev`

### Phase 3: Promote `dev` to `beta`

1. **Create** a deployment pull request from `dev` into `beta`.
2. **Include** searchable deployment wording in the PR title.
3. **Include** searchable deployment wording in the PR description.
4. **Verify** the PR clearly represents a staging promotion.
5. **Review** checks and branch conditions on the deployment PR.
6. **Merge** the deployment PR after required conditions are satisfied.
7. **Open** GitHub Actions.
8. **Run** the `deploy beta` workflow.
9. **Capture** the deployment identifier, run number, or status reference.
10. **Run** or **check** the deployment status workflow.
11. **Confirm** the rollout completed successfully.

**IF the deployment PR has failing checks, THEN do not merge it until the failures are resolved.**

**IF the deployment workflow fails, THEN collect logs and escalate immediately.**

**IF the `test-migrations` gate fails on the throwaway DB clone, THEN stop the rollout and follow [Beta Migration DB Failure](Beta%20Migration%20DB%20Failure.md) before retrying deployment.**

Deployment PR title example:

```
deploy beta: promote dev to beta
```

Deployment note template:

```

## Deployment Summary
- Source branch: dev
- Target branch: beta
- Deployment workflow: deploy beta
- Deployment identifier:
- Deployment start time:
- Deployment completion time:

## Status Check
- Result:
- Notes:
```

Verification checklist:

- [ ] Deployment PR is `dev` → `beta`
- [ ] PR title includes `deploy beta`
- [ ] Branch protection requirements are satisfied
- [ ] Deployment PR is merged
- [ ] `deploy beta` workflow was run
- [ ] Deployment identifier was captured
- [ ] Deployment status was checked
- [ ] Rollout completed successfully
- [ ] Migration gate failures were routed through the beta migration failure playbook when applicable

### Phase 4: Perform Post-Deploy UAT

1. **Wait** 5 to 10 minutes after rollout completion.
2. **Open** the `beta` environment.
3. **Test** the login flow.
4. **Verify** you can successfully sign in.
5. **Open** the dashboard after login.
6. **Verify** the dashboard loads correctly.
7. **Record** the UAT result in deployment notes or the related PR.
8. **Capture** exact failure details if any step does not work.
9. **Escalate** failures to Alan Baldelobar immediately.

**IF login fails, THEN stop the validation flow and report the failure immediately.**

**IF the dashboard does not load correctly, THEN capture screenshots, logs, timestamps, and reproduction steps before escalating.**

UAT result template:

```

## Basic UAT Result
- Environment: beta
- Date:
- Tester:
- Login flow: Pass / Fail
- Dashboard load: Pass / Fail
- Overall result: Pass / Fail

## Observed behavior
-

## Errors captured
-

## Reproduction steps
1.
2.
3.
```

Verification checklist:

- [ ] Waited 5–10 minutes after rollout
- [ ] Login was tested
- [ ] Dashboard was tested
- [ ] Result was recorded
- [ ] Failures were escalated immediately if found

### Phase 5: Close Out the Deployment

1. **Confirm** all PR documentation is complete.
2. **Confirm** deployment notes are complete.
3. **Confirm** UAT results are recorded.
4. **Verify** staging is stable before starting new rollout work.
5. **Share** repeatable learnings with the team.
6. **Add** any new gaps or missing steps to the playbook backlog.
7. **Update** this playbook if the process changed during execution.

**IF a mistake happened and no playbook exists for that scenario, THEN add it to the backlog for documentation.**

**IF this playbook was followed and still failed, THEN update the playbook to remove the gap.**

Closeout checklist:

- [ ] PR documentation is complete
- [ ] Deployment record is complete
- [ ] UAT result is documented
- [ ] Staging is stable
- [ ] Team learnings were shared
- [ ] Backlog items were created if needed
- [ ] SOP was updated if process drift was found
