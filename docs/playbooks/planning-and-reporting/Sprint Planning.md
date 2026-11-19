# 🚀 Sprint Planning & GitHub Projects Flow Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Sprint Planning & GitHub Projects Flow Playbook |
| Purpose | Standardize sprint intake, prioritization, execution, and handoff using the current GitHub Projects workflow so engineering and product teams can route work consistently from planning to completion. |
| Owner | Edgar Juntilla Jr. |
| Last Updated | 2026-07-29 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] GitHub Project board is active and visible to Engineering and Product
- [ ] Required project fields exist: `Status`, `Priority`, `Team`, and `Iteration` (if sprinted)
- [ ] Team has reviewed and understands the [GitHub Issue Priority Levels](GitHub%20Issue%20Priority%20Levels.md) playbook (P1–P10 system)
- [ ] Team agrees to use the `Team` project field for ownership routing
- [ ] Team agrees labels are only indicators (for example: `duplicate`, `data`, `automation-test`)
- [ ] Engineering Manager (EM), Product Manager (PM), Scrum Master, and Product QA responsibilities are assigned
- [ ] Pull request and issue templates are available in the repository

**IF any required project field is missing, THEN stop and add the field before using this playbook.**

**IF the team is unfamiliar with priority levels, THEN review the [GitHub Issue Priority Levels](GitHub%20Issue%20Priority%20Levels.md) playbook before continuing.**

## Step-by-Step Checklist
### Phase 1: Set the Board Workflow
1. **Use** these statuses in the board workflow: `No Status`, `Future`, `Inbox`, `In Progress`, `For Review`, `Project Manager`, `QA Testing`, `Completed`.
2. **Treat** `No Status` as Scrum Master (Product Department) working space.
3. **Treat** `Future` as planned but not prioritized work.
4. **Treat** `Inbox` as the engineer-ready pull queue for unassigned tasks.
5. **Treat** `In Progress` as active execution work.
6. **Treat** `For Review` as EM review when a PR is ready or, for work that does not require a PR (for example, database engineering or AI training), when the completed work is documented in the issue comments.
7. **Treat** `Project Manager` as PM validation of fix accuracy and rollout context.
8. **Treat** `QA Testing` as Product QA UAT validation.
9. **Treat** `Completed` as closed issues only.
- [ ] All required statuses are present
- [ ] `QA Testing` status is present

**IF an issue is closed, THEN move it to `Completed`.**

---

### Phase 2: Apply Priority and Team Rules
1. **Set** `Priority` on every issue using P1 through P10 (see [GitHub Issue Priority Levels](GitHub%20Issue%20Priority%20Levels.md) playbook).
2. **Use** P1 as top priority (incidents) and P10 as lowest priority (backlog ideas).
3. **Focus** active work on P1–P6 (Incidents and Live Work), keeping P7–P10 (Future Work) in `Future` status.
4. **Treat** `Priority` as the override for pull order across `Future` and `Inbox`.
5. **Set** `Team` project field for ownership (for example: Backend, Frontend, Eng QA).
6. **Stop** using team labels for ownership routing.
7. **Use** labels only as indicators (for example: `duplicate`, `data`, `automation-test`).
- [ ] Every active item has `Priority` (P1–P10)
- [ ] Every active item has `Team`
- [ ] No team-routing decision relies on labels

**IF two tasks compete for the same engineer, THEN pull the highest priority (P1 highest) regardless of previous queue order.**

---

### Phase 3: Intake and Pull from Future to Inbox
1. **Keep** planned, not-yet-prioritized issues in `Future`.
2. **Allow** EMs to pull from `Future` into `Inbox` when priority-ready tasks are running low.
3. **Confirm** pulled items have `Priority`, `Team`, and clear acceptance criteria before engineers start.
- [ ] `Future` only contains planned items
- [ ] Pulled items are fully prioritized before `Inbox`
- [ ] Inbox items are execution-ready

**IF an item in `Future` has no priority, THEN assign `Priority` before moving it to `Inbox`.**

---

### Phase 4: Engineer Execution Rules
1. **Pull** work from `Inbox` when unassigned or when current work is complete.
2. **Move** the issue to `In Progress` when coding starts.
3. **Keep** engineer WIP at one active issue whenever possible.
4. **Allow** a maximum of two `In Progress` issues only for priority interrupts or emergencies.
5. **Open** a PR and move the issue to `For Review` when implementation is ready for EM review. For work that does not require a PR (for example, database engineering or AI training), document the completed work in the issue comments and move the issue to `For Review` for EM review.
- [ ] Engineers primarily run one `In Progress` item
- [ ] Any second `In Progress` item has a documented priority reason
- [ ] PR-ready work, and no-PR work documented in issue comments, is moved to `For Review`

**IF a higher-priority issue interrupts current work, THEN keep the previous issue visible and limited so active WIP remains at two or fewer.**

---

### Phase 5: EM Review and Routing Decisions
1. **Review** PR quality and issue alignment in `For Review`. For work that does not require a PR (for example, database engineering or AI training), review the completed-work documentation in the issue comments against the issue requirements and acceptance criteria.
2. **Assign yourself** as an assignee on every issue you review so Product can identify that it is being reviewed and may be merged and rolled out soon.
3. **Keep the currently assigned engineer assigned** together with the EM when the EM is not the engineer implementing the issue.
4. **Move** back to `Inbox` when an engineer must switch to a higher-priority in-progress task.
5. **Move** back to `In Progress` when immediate engineering rework is required.
6. **Move** to `Project Manager` when PR quality and engineering expectations are met, or when no-PR work is sufficiently documented in issue comments and meets engineering expectations.
7. **Apply** the special automation path: when issue has label `automation-test` and EM passes review, set `Team` to `Eng QA` and move directly to `QA Testing`.
- [ ] EM is assigned to every issue under review
- [ ] The implementing engineer remains assigned when the EM is not the implementer
- [ ] EM decision is explicit for each reviewed item, including no-PR work documented in issue comments
- [ ] Rework routes are visible (`Inbox` or `In Progress`)
- [ ] `automation-test` items route directly to `QA Testing` with `Team = Eng QA`

**IF the EM is not the engineer implementing the issue, THEN assign both the EM and the currently assigned engineer to the issue during review.**

**IF work does not require a PR, THEN document the completed work in the issue comments before moving the item to `For Review`; EM review remains required.**

**IF an item is labeled `automation-test` and EM approves it, THEN bypass `Project Manager` and move it to `QA Testing` with `Team` updated to `Eng QA`.**

---

### Phase 6: PM Validation and Cross-Team Handoff
1. **Validate** in `Project Manager` whether the fix description matches issue comments and, when applicable, the PR description.
2. **Return** to `For Review` when PM finds mismatch or unclear fix narrative.
3. **Change** the `Team` field when additional work must be done by another team (for example: Backend to Frontend).
4. **Move** cross-team follow-up items back to `Inbox` after team reassignment.
5. **Move** to `QA Testing` once fix is complete and rolled out to staging (beta).
- [ ] PM validated fix narrative
- [ ] Team handoffs used `Team` field (not labels)
- [ ] Staging-ready items moved to `QA Testing`

**IF PM determines another team must continue the work, THEN update `Team` and return the issue to `Inbox`.**

---

### Phase 7: Product QA UAT and Closeout
1. **Run** Product QA UAT in `QA Testing`.
2. **Move** failing items to `For Review` for EM reassessment.
3. **Move** passing items to `Completed`.
4. **Close** the issue after completion criteria are met.
- [ ] UAT result is recorded
- [ ] Failed UAT returns to `For Review`
- [ ] Passed UAT moves to `Completed`

**IF UAT fails, THEN return the item to `For Review` for EM triage and rerouting.**

## Common Mistakes & Fixes
| Common Mistake | Fix |
| :-- | :-- |
| Engineers pull work without priority | Require `Priority` (P1–P10) before any item leaves `Future` or `Inbox` — refer to [GitHub Issue Priority Levels](GitHub%20Issue%20Priority%20Levels.md) |
| Team routing still uses labels | Route ownership only through the `Team` project field |
| Too many active issues per engineer | Enforce one `In Progress` item by default; cap at two only for emergency interrupts |
| EM approvals sit in `For Review` without routing | Require explicit EM route: `Inbox`, `In Progress`, `Project Manager`, or `QA Testing` (automation case); review issue-comment documentation when no PR is required |
| `automation-test` issue goes through normal PM path | From EM pass, set `Team = Eng QA` and move directly to `QA Testing` |
| PM finds mismatch but item stays with PM | Send back to `For Review` for EM handling and correction |
| QA failures move directly to `Inbox` | Always return failed UAT to `For Review` first for EM reassessment |
| `QA Testing` status missing from board | Add `QA Testing` immediately and do not run UAT in other statuses |
| P7–P10 items are pulled into active work | Confirm with Project Manager before moving Future Work into `Inbox`; P7–P10 should stay in `Future` |

## Success Criteria
- [ ] Every active issue has `Priority` (P1–P10) and `Team`
- [ ] Pull order follows priority before any other local preference
- [ ] Engineers maintain one active `In Progress` item by default
- [ ] EM review produces explicit routing outcomes for PR and no-PR work
- [ ] PM checks fix narrative before QA unless `automation-test` bypass applies
- [ ] All Product QA UAT is executed in `QA Testing`
- [ ] Failed UAT items return to `For Review`
- [ ] Completed items are closed and moved to `Completed`
- [ ] P7–P10 items remain in `Future` status until Project Manager actively promotes them

## Storage & Access
Store this playbook in the team playbook library where Engineering, Product, Scrum Master, EM, PM, and QA can all access it.

**Always Open Policy:** Keep this playbook visible while triaging, pulling, reviewing, routing, validating, and closing issues in GitHub Projects.

## Next review date
2026-10-27
