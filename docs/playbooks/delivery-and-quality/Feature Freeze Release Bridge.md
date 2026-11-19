# 🧊 Feature Freeze Release Bridge Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Feature Freeze Release Bridge |
| Purpose | Keep `dev` and `beta` aligned during a temporary feature freeze caused by a large foundation change, while reducing branch drift and merge-conflict risk at freeze exit. |
| Owner | Engineering Manager on Duty |
| Last Updated | 2026-07-15 |
| Review Cycle | Every 90 days |

## When to Use This
Use this playbook when a major change (for example platform, infrastructure, or architecture work) must run in `dev` for at least a week before broad promotion, and regular updates must continue with controlled rollout to `beta`.

This playbook is **not** a production incident hotfix workflow.

## Branch Roles During Freeze
- `dev` = source of truth during freeze window
- `beta` = compatibility-only staging mirror
- short-lived branch = per-change implementation branch created from `dev`

## Prerequisites
- [ ] Freeze control issue exists in GitHub (single thread for the freeze window)
- [ ] Freeze control issue has label `feature-freeze`
- [ ] Engineering manager on duty is assigned as decision owner for beta compatibility
- [ ] Team understands allowed change scope:
      - [ ] Hotfixes
      - [ ] Small low-risk improvements
      - [ ] No normal feature delivery during freeze
- [ ] CI checks for `dev` and `beta` are available and passing baseline
- [ ] Team can deploy to `dev` and `beta`

---

## Step-by-Step Checklist
### Phase 1: Open and Announce Freeze Window

1. **Create or update** the freeze control issue with:
   - Start date/time
   - Triggering major change summary
   - Expected freeze duration
   - Decision owner (engineering manager on duty)
2. **Announce** freeze window and allowed change types in engineering channels.
3. **Link** this playbook in the freeze control issue.

Freeze issue minimum template:

```md
## Freeze Window
- Start:
- Expected end:
- Decision owner:
- Triggering major change:

## Scope Rules
- Allowed: hotfixes, small low-risk improvements
- Blocked: standard feature work

## PR Tracking
- (add linked PRs here)
```

### Phase 2: Intake and Classify Candidate Change

1. **Open** a candidate PR/issue and add label `feature-freeze`.
2. **Confirm** the change fits allowed scope (hotfix or small low-risk improvement).
3. **Request** beta-compatibility decision from engineering manager on duty.
4. **Record** decision in PR and freeze control issue:
   - `beta-compatible: yes` or
   - `beta-compatible: no (dev-only during freeze)`

**IF change is out of scope, THEN defer until freeze ends.**

### Phase 3: Implement and Merge to `dev`

1. **Create** short-lived branch from `dev`.
2. **Implement** minimal scoped change.
3. **Run** required CI checks.
4. **Perform** targeted manual verification on `dev` for impacted flow.
5. **Open and merge** PR into `dev` after required approvals/checks.
6. **Add** merged PR link to freeze control issue.

Example branch flow:

```shell
git checkout dev
git pull origin dev
git checkout -b freeze/<short-change-name>
# implement change
git push -u origin freeze/<short-change-name>
```

### Phase 4: Promote Compatible Changes to `beta`

1. **Proceed only if** change is marked `beta-compatible: yes`.
2. **Cherry-pick** the `dev` merge commit(s) into a beta promotion branch.
3. **Open PR** into `beta` with title prefix `freeze beta:`.
4. **Run** CI and execute targeted beta sanity checks.
5. **Merge** PR to `beta`.
6. **Log** beta rollout status in freeze control issue.

Example promotion flow:

```shell
git checkout beta
git pull origin beta
git checkout -b freeze-beta/<short-change-name>
git cherry-pick <dev-merge-commit-sha>
git push -u origin freeze-beta/<short-change-name>
```

### Phase 5: Handle Beta Regressions Without Blocking Dev Progress

1. **IF beta regression appears, THEN revert in `beta` immediately.**
2. **Keep** fix lineage in `dev` and patch forward there.
3. **Open** follow-up beta-compatible PR once corrected.
4. **Document** regression, revert PR, and follow-up PR in freeze control issue.

### Phase 6: Close Freeze Window

1. **Validate** freeze exit conditions:
   - Major change is stable in `dev`
   - No open Sev1/Sev2 issues related to freeze scope
2. **Post** freeze close-out summary in freeze control issue.
3. **List** any deferred items returning to normal delivery flow.
4. **Remove** temporary freeze communication banner/status.

Close-out summary template:

```md
## Freeze Close-Out
- End date:
- Exit criteria met:
  - [ ] Major change stable in dev
  - [ ] No open Sev1/Sev2

## Outcomes
- Total dev merges:
- Total beta promotions:
- Beta reverts:
- Deferred items:
```

---

## Common Mistakes & Fixes
| Mistake | Fix |
| --- | --- |
| Promoting all `dev` changes to `beta` by default | Promote only manager-approved `beta-compatible` changes |
| Skipping centralized tracking | Require every freeze PR linked in one freeze control issue |
| Letting scope creep in as “small” work | Enforce strict intake classification before implementation |
| Waiting too long to revert on beta | Revert immediately on beta, then patch forward via dev |
| Ending freeze by date only | End only when stability criteria are explicitly met |

## Success Criteria
- [ ] `dev` remained source of truth for freeze-period changes
- [ ] `beta` received only approved compatible updates
- [ ] Every freeze change is traceable through one control issue
- [ ] Beta regressions were reverted quickly and documented
- [ ] Freeze ended only after stability + Sev1/Sev2 criteria were met

## Storage & Access
Store this playbook in `docs/playbooks/delivery-and-quality`.
Keep it open while executing freeze-window updates.

## Next review date
2026-10-13
