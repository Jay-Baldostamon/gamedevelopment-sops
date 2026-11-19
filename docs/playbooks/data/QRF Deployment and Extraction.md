# 📘 QRF Deployment & Extraction Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Vanguard Internal Deployment QRF (Quick Reaction Force) Playbook |
| Purpose | Standardize how Vanguard specialists are temporarily inserted into internal teams to accelerate delivery velocity, enforce measurable ROI, maintain task execution continuity, protect deployed engineers from competing feasibility-team obligations, and complete structured post-deployment financial reconciliation. |
| Owner | Alan Baldelobar |
| Last Updated | 2026-05-29 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] Target team is clearly identified  
- [ ] Deployment objective is clearly identified  
- [ ] Accepting Team Lead has acknowledged the deployment in the designated Slack channel  
- [ ] Accepting Team Lead has stated the intended objective of the deployment  
- [ ] Financial alignment is confirmed as a velocity acceleration model, not a cost-cutting substitute  
- [ ] Baseline sprint costing or work unit backlog metrics are captured before deployment  
- [ ] Vanguard member availability is confirmed without blocking critical internal R\&D priorities  
- [ ] Vanguard Lead is named for ROI audit and financial reconciliation  
- [ ] Daily telemetry reporting channel is confirmed   
- [ ] Project-specific workflows, engineering rules, testing expectations, and special handling instructions are prepared for Day 1 onboarding  
- [ ] Access to the target team’s issue tracker, backlog, inbox, and future queue is confirmed  
- [ ] Access to the AI Task Creation Playbook or GitHub Issue Task Creator process is available for issue detail expansion when required  
- [ ] Feasibility Team Lead has been notified that the deployed engineer is exempt from feasibility-team operating tasks during active QRF deployment  
- [ ] Any feasibility-team tasks previously assigned to the deployed engineer are paused, reassigned, or explicitly deferred before deployment begins

## Step-by-Step Checklist
### Phase 1: Define the Deployment Contract

1. **Capture** the deployment acknowledgment in the designated Slack channel.  
2. **Require** the accepting Team Lead to explicitly approve the deployment.  
3. **Require** the accepting Team Lead to state the intended deployment objective.  
4. **Confirm** the deployment is a velocity accelerator and not a headcount replacement or cost-reduction tactic.  
5. **Confirm** the budget equivalent of throughput gained or time saved is eligible for transfer from target team P\&L to Vanguard P\&L.  
6. **Collect** the current sprint costing and work unit backlog baseline from the target team.  
7. **Record** the baseline before Vanguard work begins.  
8. **Run** the availability gate check for the assigned Vanguard member.  
9. **Confirm** the assigned Vanguard member can focus fully on the QRF deployment.  
10. **Defer** the deployment if no qualified Vanguard member is available.  
- [ ] Team Lead approval is recorded  
- [ ] Deployment objective is recorded  
- [ ] Financial model is acknowledged  
- [ ] Baseline is recorded before work starts  
- [ ] Availability gate is passed  
- [ ] Assigned Vanguard member is cleared for focused deployment

**IF no qualified Vanguard member is available, THEN defer the deployment until availability is confirmed.**

**IF the target team cannot provide measurable baseline data, THEN do not start deployment until baseline sprint costing or work unit metrics are captured.**

---

### Phase 2: Release the Engineer From Feasibility-Team Operating Tasks

1. **Notify** the Feasibility Team Lead that the engineer is entering active QRF deployment.  
2. **Record** the QRF deployment start date.  
3. **Record** the expected QRF deployment end date.  
4. **Pause** feasibility-project assignments owned by the deployed engineer.  
5. **Reassign** urgent feasibility-project work to another owner if it cannot wait.  
6. **Remove** the deployed engineer from daily AI chat quantity requirements during the active QRF deployment.  
7. **Remove** the deployed engineer from Skool review requirements during the active QRF deployment.  
8. **Remove** the deployed engineer from feasibility-team recurring task quotas during the active QRF deployment.  
9. **Document** all paused, reassigned, or deferred feasibility responsibilities.  
10. **Confirm** that QRF deployment work is the engineer’s primary active responsibility.

```
Hi [Feasibility Team Lead] — [Engineer Name] is entering active QRF deployment for [Target Team / Project] starting [YYYY-MM-DD].

During the active deployment window, [Engineer Name] is exempt from feasibility-team operating tasks, including:
- Feasibility project work
- Daily AI chat quantity requirements
- Skool review requirements
- Recurring feasibility-team task quotas
- Other feasibility operating duties unless explicitly approved by the Vanguard Lead

Please pause, reassign, or defer any active feasibility responsibilities assigned to [Engineer Name] before deployment begins.

Expected deployment end date: [YYYY-MM-DD]
Vanguard Lead: [Name]
```

- [ ] Feasibility Team Lead is notified  
- [ ] Deployment start date is recorded  
- [ ] Expected deployment end date is recorded  
- [ ] Feasibility project tasks are paused, reassigned, or deferred  
- [ ] Daily AI chat quantity requirement is suspended  
- [ ] Skool review requirement is suspended  
- [ ] Feasibility recurring task quotas are suspended  
- [ ] QRF deployment is confirmed as the primary responsibility

**IF a feasibility task is urgent and cannot wait, THEN the Feasibility Team Lead must reassign it to another available owner.**

**IF anyone requests feasibility-team work from the deployed engineer during active QRF deployment, THEN the engineer must redirect the request to the Vanguard Lead and Feasibility Team Lead.**

**IF an exception is required for the deployed engineer to perform feasibility work, THEN the Vanguard Lead must approve the exception in writing before the engineer performs the work.**

---

### Phase 3: Conduct Day 1 Insertion and Orientation

1. **Introduce** all project-specific instructions to the QRF member on the first day of insertion.  
2. **Review** project-specific workflows with the QRF member.  
3. **Review** component-specific engineering rules with the QRF member.  
4. **Review** testing expectations with the QRF member.  
5. **Review** any repository-specific handling instructions with the QRF member.  
6. **Call out** examples of special rules, such as BPC CRM workflows for components that use `/tests`.  
7. **Confirm** the QRF member knows where backlog, inbox, future, and active sprint tasks are located.  
8. **Confirm** the QRF member knows who the accepting Team Lead is.  
9. **Confirm** the QRF member knows who the Vanguard Lead is.  
10. **Verify** the QRF member has all required access on Day 1\.  
- [ ] Project-specific instructions were delivered on Day 1  
- [ ] Testing and workflow expectations were explained  
- [ ] Special repository rules were explained  
- [ ] Backlog and queue locations are known  
- [ ] Lead contacts are known  
- [ ] Access is confirmed

**IF project-specific instructions are not available on Day 1, THEN pause task execution until the accepting Team Lead or delegate provides them.**

**IF the QRF member does not have required access on Day 1, THEN escalate access blockers to the accepting Team Lead and Vanguard Lead immediately.**

---

### Phase 4: Enforce Rules of Engagement During Active Deployment

1. **Assign** the QRF member to one target project only during active deployment.  
2. **Maintain** a minimum deployment duration of two weeks or one full sprint.  
3. **Treat** QRF work as the deployed engineer’s primary responsibility during the active deployment window.  
4. **Block** feasibility-team operating tasks from being assigned to the deployed engineer during active deployment.  
5. **Start** the daily telemetry reporting cadence on the first active day.  
6. **Require** the QRF member to report delegated issues or tickets daily.  
7. **Require** the QRF member to report fixes implemented or work units cleared daily.  
8. **Require** the QRF member to report blockers encountered daily.  
9. **Escalate** repeated SOP failures in the target team to the accepting Team Lead and Vanguard Lead.  
10. **Re-approve** scope if scope expansion is requested mid-sprint.  
- [ ] One QRF member is assigned to one target project  
- [ ] Minimum duration is maintained  
- [ ] QRF work is treated as the primary active responsibility  
- [ ] Feasibility-team operating tasks are blocked during deployment  
- [ ] Daily telemetry is active  
- [ ] Blockers are escalated when needed  
- [ ] Scope changes are re-approved

**IF blockers show repeated SOP failure, THEN escalate immediately to the accepting Team Lead and Vanguard Lead.**

**IF scope expands mid-sprint, THEN re-approve the scope before continuing.**

**IF the Feasibility Team Lead assigns feasibility work during active QRF deployment, THEN the QRF member must not accept the work until the Vanguard Lead approves the exception.**

---

### Phase 5: Manage Task Flow and Idle Time

1. **Monitor** the completion time of each assigned task.  
2. **Send** a message to the accepting Team Lead if no new task is assigned within 15 minutes of the last task being completed.  
3. **Wait** 15 minutes for the accepting Team Lead to respond.  
4. **Pull** the next task from inbox or future if the accepting Team Lead does not respond within 15 minutes.  
5. **Choose** the next task using professional judgment if multiple valid tasks are available.  
6. **Escalate** task selection to the Vanguard Lead if the QRF member cannot find a task or has difficulty choosing the next task.  
7. **Document** the idle-time message and any self-selected task in the daily telemetry record.  
8. **Do not** fill idle time with feasibility-team operating tasks unless the Vanguard Lead explicitly approves an exception.

```
Hi [Accepting Team Lead] — I completed my last assigned task at [HH:MM TZ].
I do not currently have a new assigned task.

Please assign the next task within 15 minutes.
If I do not hear back, I will pull the next available task from Inbox or Future per QRF SOP.

Thank you.
```

- [ ] Last task completion time was tracked  
- [ ] Idle-time message was sent after 15 minutes without assignment  
- [ ] Team Lead response window was observed  
- [ ] Self-selection was documented when used  
- [ ] Vanguard Lead stepped in if needed  
- [ ] Idle time was not redirected to feasibility-team obligations

**IF no new task is assigned within 15 minutes of last task completion, THEN send the required message to the accepting Team Lead.**

**IF the accepting Team Lead does not respond within 15 minutes after the message is sent, THEN the QRF member may pull any task from Inbox or Future at their own choosing.**

**IF the QRF member cannot find a suitable task or has difficulty choosing, THEN the Vanguard Lead must decide the next task.**

**IF the QRF member has no QRF task available, THEN the QRF member must escalate task selection instead of returning to feasibility-team work by default.**

---

### Phase 6: Expand Incomplete Tasks Before Execution

1. **Review** each assigned task before starting implementation.  
2. **Check** whether the task includes a description.  
3. **Check** whether the task includes requirements.  
4. **Check** whether the task includes acceptance criteria.  
5. **Assume** missing details based on the sparse information provided if one or more required sections are missing.  
6. **Follow** the AI Task Creation Playbook or GitHub Issue Task Creator process to generate the missing task details.  
7. **Add** the generated description, requirements, and acceptance criteria into the assigned issue before implementation begins.  
8. **Keep** the added details aligned with the intent of the originally assigned task.  
9. **Document** that the issue was expanded by the QRF member.  
- [ ] Description was present or added  
- [ ] Requirements were present or added  
- [ ] Acceptance criteria were present or added  
- [ ] AI Task Creation or GitHub Issue Task Creator process was followed  
- [ ] Issue was updated before implementation

**IF an assigned task lacks a description, requirements, or acceptance criteria, THEN the QRF member may assume the missing details from the sparse information available.**

**IF required task details are missing, THEN the QRF member must follow the AI Task Creation Playbook or GitHub Issue Task Creator process to generate and add those missing details into the assigned issue before implementation begins.**

---

### Phase 7: Execute and Report During Deployment

1. **Complete** assigned or self-selected tasks according to project rules.  
2. **Follow** repository-specific workflows and testing requirements.  
3. **Update** the issue status as work progresses.  
4. **Record** blockers, assumptions, and SOP gaps as they appear.  
5. **Submit** daily telemetry to the Vanguard Lead.  
6. **Include** delegated tasks, completed work units, blockers, issue expansions, and self-selected tasks in the telemetry update.  
7. **Include** any attempted feasibility-team assignment in the telemetry update.  
8. **Confirm** that feasibility-team operating tasks were not performed during the deployment day unless an exception was approved.

```
Date: [YYYY-MM-DD]
QRF Member: [Name]
Target Team: [Team Name]
Project: [Project Name]

Tasks Delegated:
- [Issue ID] [Title]

Tasks Completed:
- [Issue ID] [Title]

Work Units Cleared:
- [Count or estimate]

Issue Expansions Performed:
- [Issue ID] Added description / requirements / acceptance criteria

Self-Selected Tasks:
- [Issue ID] [Title]

Feasibility-Team Work Requests During Deployment:
- [None / Request details]
- Approved Exception: [Yes/No]
- Approved By: [Name or N/A]

Blockers:
- [Blocker description]

SOP or Process Failures Observed:
- [Description]

Notes:
- [Additional context]
```

- [ ] Tasks are executed using project rules  
- [ ] Status is updated  
- [ ] Telemetry includes all required fields  
- [ ] Issue expansions are reported  
- [ ] Self-selected tasks are reported  
- [ ] Feasibility-team work requests are reported  
- [ ] Approved exceptions are documented

**IF a task was self-selected due to lead non-response, THEN record that fact in the daily telemetry.**

**IF a feasibility-team task was requested during deployment, THEN record the request and whether a Vanguard Lead exception was approved.**

---

### Phase 8: Execute Extraction and Financial Reconciliation

1. **Run** the end-of-deployment ROI audit on the final deployment day.  
2. **Translate** cleared work units into financial throughput.  
3. **Measure** time saved or capacity added.  
4. **Validate** whether the minimum proof target of 3x ROI was met.  
5. **Review** whether feasibility-team exemption improved QRF focus and throughput.  
6. **Transfer** the agreed budget margin from the target team ledger to the Vanguard Squad ledger or P\&L.  
7. **Distribute** deployment profit according to policy.  
8. **Allocate** 60 percent to the direct contributor bonus.  
9. **Allocate** 20 percent to the shield bonus for non-deployed Vanguard members who maintained baseline operations.  
10. **Allocate** 20 percent to the Vanguard War Chest for tooling and team upskilling or health initiatives only.  
11. **Archive** the deployment closeout record.  
- [ ] ROI audit is completed  
- [ ] Throughput is translated into financial terms  
- [ ] Feasibility-team exemption impact is reviewed  
- [ ] Ledger transfer is completed  
- [ ] Profit distribution follows 60/20/20 policy  
- [ ] Closeout record is archived

**IF ROI cannot be proven from the baseline, THEN record the deployment as operationally completed but financially non-validated and flag the baseline failure for process correction.**

**IF feasibility-team obligations interfered with QRF execution, THEN document the interference as a deployment process failure.**

---

### Phase 9: Restore or Reassign Feasibility-Team Responsibilities After Extraction

1. **Confirm** the QRF deployment end date.  
2. **Notify** the Feasibility Team Lead that active QRF deployment has ended.  
3. **Review** paused feasibility-project responsibilities.  
4. **Decide** whether paused responsibilities return to the engineer or remain reassigned.  
5. **Restore** feasibility-team operating requirements only after deployment closure.  
6. **Restore** daily AI chat quantity requirements only after deployment closure.  
7. **Restore** Skool review requirements only after deployment closure.  
8. **Update** feasibility-team tracking records.  
9. **Document** the responsibility restoration decision.

```
Hi [Feasibility Team Lead] — [Engineer Name] has completed active QRF deployment for [Target Team / Project] as of [YYYY-MM-DD].

Please review the paused or reassigned feasibility responsibilities and confirm which items should return to [Engineer Name].

Feasibility operating requirements may resume after deployment closure, including:
- Feasibility project work
- Daily AI chat quantity requirements
- Skool review requirements
- Recurring feasibility-team task quotas

Please confirm the restored responsibilities and effective date.
```

- [ ] Deployment end date is confirmed  
- [ ] Feasibility Team Lead is notified  
- [ ] Paused responsibilities are reviewed  
- [ ] Restored responsibilities are documented  
- [ ] Daily AI chat quantity requirement is restored if applicable  
- [ ] Skool review requirement is restored if applicable  
- [ ] Feasibility project ownership is updated

**IF the engineer immediately enters another QRF deployment, THEN continue the feasibility-team exemption until the next deployment closes.**

**IF feasibility responsibilities were permanently reassigned during QRF deployment, THEN do not return them automatically without Feasibility Team Lead confirmation.**

---

### Phase 10: Store Records and Keep the SOP Usable

1. **Save** approvals, baseline records, telemetry summaries, ROI calculations, ledger transfer confirmation, and bonus distribution records in the designated SOP repository.  
2. **Save** evidence of project-specific instructions delivered on Day 1\.  
3. **Save** issue expansion examples where the QRF member added missing details.  
4. **Save** evidence that feasibility-team obligations were paused, reassigned, or deferred.  
5. **Save** any Vanguard Lead-approved exception for feasibility work during deployment.  
6. **Review** whether the accepting Team Lead repeatedly failed to feed work within the required response window.  
7. **Review** whether feasibility-team obligations interfered with QRF deployment.  
8. **Capture** repeat process failures for future SOP improvement.  
- [ ] All records are saved centrally  
- [ ] Day 1 instruction evidence is saved  
- [ ] Issue expansion evidence is saved  
- [ ] Feasibility exemption evidence is saved  
- [ ] Feasibility exception evidence is saved if applicable  
- [ ] Task flow failures are documented  
- [ ] SOP improvement items are captured

**IF a repeated failure pattern is identified, THEN add it to the SOP improvement backlog.**

**IF feasibility-team work was assigned during active QRF deployment without approval, THEN document it as a process breach and escalate it to the Vanguard Lead.**

## Common Mistakes & Fixes
| Common Mistake | Fix |
| :---- | :---- |
| Starting deployment without Team Lead acknowledgment | Require explicit Slack approval with stated objective before any work begins |
| Treating QRF as headcount replacement or cost-cutting | Re-state that QRF is a velocity accelerator tied to measurable ROI and financial transfer |
| Deploying without a baseline snapshot | Never begin without pre-deployment sprint costing or work unit baseline |
| Failing to onboard the QRF member on project-specific rules on Day 1 | Require Day 1 orientation covering workflows, testing rules, and repo-specific instructions |
| Leaving a QRF member idle after task completion | Enforce the 15-minute assignment rule, message the accepting Team Lead, and allow controlled self-selection if no response arrives |
| Filling QRF idle time with feasibility-team tasks | Escalate to the Vanguard Lead for next-task selection instead of returning to feasibility work by default |
| Assigned issue lacks description, requirements, or acceptance criteria | Expand the issue using the AI Task Creation Playbook or GitHub Issue Task Creator before implementation |
| Splitting one QRF member across projects | Enforce strict one-member-to-one-project assignment |
| Assigning feasibility projects during active QRF deployment | Pause, reassign, or defer feasibility work until QRF extraction is complete |
| Requiring daily AI chat quantity during active QRF deployment | Suspend daily AI chat quantity requirements during the active deployment window |
| Requiring Skool reviews during active QRF deployment | Suspend Skool review requirements during the active deployment window |
| Ending engagement early due to familiarity with the codebase | Maintain the minimum two-week deployment duration |
| Irregular or vague telemetry reporting | Use the required telemetry template and include delegated tasks, completions, blockers, expansions, self-selected work, and feasibility-work requests |
| Skipping the ROI audit at extraction | Require Vanguard Lead to complete and document the audit on the final day |
| Using War Chest funds outside approved purposes | Restrict War Chest spending to tooling and team upskilling or health initiatives |

## Success Criteria
- [ ] Deployment was approved with objective and financial acknowledgment  
- [ ] Pre-deployment baseline was captured and preserved  
- [ ] Feasibility Team Lead was notified of the active QRF deployment  
- [ ] Deployed engineer was exempted from feasibility-team operating tasks during active deployment  
- [ ] Feasibility projects, daily AI chat quantity requirements, Skool reviews, and recurring feasibility quotas were paused, reassigned, or deferred  
- [ ] Project-specific instructions were delivered on Day 1  
- [ ] Active deployment followed one-project assignment and minimum duration rules  
- [ ] Idle-time escalation was handled according to the 15-minute rule  
- [ ] Incomplete tasks were expanded before implementation  
- [ ] Daily telemetry was consistently submitted with full reporting fields  
- [ ] Feasibility-team work requests during deployment were documented  
- [ ] Post-deployment ROI audit demonstrated measurable impact or clearly documented baseline failure  
- [ ] Budget transfer from target team to Vanguard ledger was completed  
- [ ] Bonus distribution followed the 60/20/20 policy  
- [ ] Feasibility-team responsibilities were restored, reassigned, or deferred after extraction  
- [ ] Closeout documentation was archived for auditability and reuse

## Storage & Access
Store this playbook in the central SOP repository, team wiki, or shared operations folder where Vanguard members, Team Leads, Feasibility Team Leads, and finance stakeholders can access it without delay.

**Always Open Policy:** Keep this playbook open during pre-deployment approval, feasibility-task exemption, Day 1 insertion, active task execution, idle-time handling, issue expansion, ROI extraction, feasibility responsibility restoration, and financial closeout. Do not rely on memory during QRF operations. Use the document live to reduce process drift, prevent trust breakers, and preserve auditability.

Use this playbook for:

- Vanguard specialist internal deployments  
- Temporary velocity acceleration assignments  
- Mid-sprint reinforcement engagements  
- QRF financial reconciliation  
- Feasibility-team capacity protection during QRF deployment  
- Training new Vanguard members, accepting Team Leads, and Feasibility Team Leads

## Next review date
2026-07-01
