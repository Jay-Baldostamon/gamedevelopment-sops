# 🔁 Internal Mobility & Cross-Track Transition Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Internal Mobility & Cross-Track Transition Playbook |
| Purpose | Standardize how active team members request, assess, bridge, and complete a permanent move from one core discipline to another while protecting product velocity, maintaining fair salary-band alignment, and preventing capacity gaps in the departing department. |
| Owner | Engineering Leadership / HR |
| Last Updated | 2026-05-27 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] Employee is currently active with the company  
- [ ] Employee is requesting a permanent change in core discipline  
- [ ] Departing discipline is identified  
- [ ] Destination discipline is identified  
- [ ] Departing Team Lead is identified  
- [ ] Receiving Team Lead is identified  
- [ ] HR contact is confirmed as Joseph at `joseph@hurdman.net`  
- [ ] Employee has at least 6 months of continuous tenure in their current role  
- [ ] Employee’s current performance rating is available  
- [ ] Destination track rubric or leveling guide is available  
- [ ] Destination technical assessment is prepared  
- [ ] Current assigned epics, milestones, or critical tasks are listed  
- [ ] 30-day bridge period can be scheduled  
- [ ] AI competency rules for the destination track are available  
- [ ] `#onboarding-offboarding` channel is available for transition announcement

## Step-by-Step Checklist
### Phase 1: Open the Internal Mobility Request

1. **Receive** the employee’s internal mobility request.  
2. **Record** the employee’s current role.  
3. **Record** the requested destination role.  
4. **Record** the current team.  
5. **Record** the requested destination team.  
6. **Identify** the Departing Team Lead.  
7. **Identify** the Receiving Team Lead.  
8. **Notify** HR that an internal mobility request has been opened.  
9. **Create** a transition record in the HR or people operations tracker.  
10. **Confirm** that the request is for a permanent discipline change.

```
Internal Mobility Request

Employee Name:
[Employee Name]

Current Role:
[Current Role]

Current Team:
[Current Team]

Requested Destination Role:
[Destination Role]

Requested Destination Team:
[Destination Team]

Departing Team Lead:
[Name]

Receiving Team Lead:
[Name]

Reason for Request:
[Employee-provided reason]

Requested Effective Date:
[YYYY-MM-DD or TBD]
```

- [ ] Employee request is recorded  
- [ ] Current role is recorded  
- [ ] Destination role is recorded  
- [ ] Departing Team Lead is identified  
- [ ] Receiving Team Lead is identified  
- [ ] HR is notified

**IF the request is temporary support instead of a permanent track change, THEN do not use this playbook and route the request through the appropriate temporary assignment or QRF process.**

**IF either Team Lead is not identified, THEN pause the process until ownership is clear.**

---

### Phase 2: Run the Eligibility & Performance Gateway

1. **Verify** the employee has at least 6 months of continuous tenure in their current role.  
2. **Review** the employee’s current performance rating.  
3. **Confirm** the employee is rated `Meets Expectations` or higher.  
4. **Check** whether the employee is currently on a performance improvement plan.  
5. **Check** whether the employee has unresolved primary-role performance issues.  
6. **Document** the eligibility decision.  
7. **Notify** the employee of the eligibility outcome.

```
Internal Mobility Eligibility Review

Employee Name:
[Employee Name]

Current Role:
[Current Role]

Tenure in Current Role:
[Number of months]

Current Performance Rating:
[Rating]

Performance Improvement Plan Active:
[Yes/No]

Eligibility Decision:
[Approved for assessment / Denied / Deferred]

Reason:
[Brief explanation]

Reviewed By:
[HR / Engineering Leadership Name]

Review Date:
[YYYY-MM-DD]
```

- [ ] Tenure is verified  
- [ ] Performance rating is reviewed  
- [ ] PIP status is checked  
- [ ] Eligibility decision is documented  
- [ ] Employee is notified

**IF the employee has less than 6 months of continuous tenure in the current role, THEN deny or defer the transfer request until the tenure requirement is met.**

**IF the employee is below `Meets Expectations`, THEN deny the transfer until primary-role metrics stabilize.**

**IF the employee is attempting to use transfer to escape poor performance, THEN deny the transfer and route the employee back to current-role performance management.**

---

### Phase 3: Prepare the Destination Technical Assessment

1. **Ask** the Receiving Team Lead to define the destination assessment.  
2. **Align** the assessment to the destination track’s real work.  
3. **Use** a practical evaluation instead of a purely theoretical interview.  
4. **Select** an isolated sandbox task or assessment ticket.  
5. **Define** the expected deliverable.  
6. **Define** the evaluation criteria.  
7. **Define** the submission deadline.  
8. **Define** the permitted tools and AI assistance level.  
9. **Confirm** which destination standards apply.  
10. **Send** the assessment instructions to the employee.

```
Destination Technical Assessment

Employee Name:
[Employee Name]

Destination Track:
[Frontend / Backend / QA / EM / PM / Other]

Assessment Task:
[Assessment description]

Expected Deliverable:
[Specific output]

Applicable Standards:
- [Architecture standard]
- [Testing standard]
- [Documentation standard]
- [Code quality standard]

Permitted Tools:
- [Allowed tools]

AI Assistance Level:
[Allowed / Restricted / Inline only / Other]

Submission Deadline:
[YYYY-MM-DD HH:MM TZ]

Evaluator:
[Receiving Team Lead Name]
```

- [ ] Assessment is created by Receiving Team Lead  
- [ ] Assessment matches destination work  
- [ ] Evaluation criteria are clear  
- [ ] Deadline is clear  
- [ ] AI/tooling rules are clear  
- [ ] Employee receives instructions

**IF the employee is moving from QA to Frontend, THEN the assessment should validate practical frontend execution such as component structure, state separation, custom hooks, styling standards, and testing expectations.**

**IF the destination assessment is vague, THEN the Receiving Team Lead must rewrite it before the employee starts.**

---

### Phase 4: Evaluate the Assessment and Decide Gateway Outcome

1. **Receive** the completed assessment.  
2. **Review** the assessment against destination track standards.  
3. **Score** the assessment using the destination rubric.  
4. **Identify** technical strengths.  
5. **Identify** technical gaps.  
6. **Determine** whether the employee passes the destination gateway.  
7. **Determine** preliminary destination level placement.  
8. **Document** assessment results.  
9. **Send** results to HR.  
10. **Notify** the employee of the outcome.

```
Destination Assessment Results

Employee Name:
[Employee Name]

Destination Track:
[Track]

Assessment Result:
[Passed / Failed / Deferred]

Preliminary Level Placement:
[L1 / L2 / L3 / L4 / L5 / TBD]

Strengths:
- [Strength 1]
- [Strength 2]

Gaps:
- [Gap 1]
- [Gap 2]

Required Follow-Up:
- [Follow-up action or None]

Evaluator:
[Receiving Team Lead Name]

Date:
[YYYY-MM-DD]
```

- [ ] Assessment is reviewed  
- [ ] Destination rubric is applied  
- [ ] Pass/fail/defer outcome is documented  
- [ ] Preliminary level is identified  
- [ ] HR receives the results  
- [ ] Employee is notified

**IF the employee fails the destination assessment, THEN deny or defer the transition and provide specific development actions.**

**IF the employee passes the assessment, THEN proceed to the 30-day bridge period.**

---

### Phase 5: Start the 30-Day Bridge Period

1. **Create** a 30-day bridge schedule.  
2. **Set** the bridge period to exactly 4 weeks.  
3. **Split** the employee’s weekly capacity into 20 hours for the departing role.  
4. **Split** the employee’s weekly capacity into 20 hours for the destination role.  
5. **List** departing-role responsibilities for the bridge period.  
6. **List** destination-role onboarding responsibilities for the bridge period.  
7. **Share** the bridge schedule with both Team Leads.  
8. **Confirm** both Team Leads accept the allocation.  
9. **Record** the bridge start date.  
10. **Record** the bridge end date.

```
30-Day Bridge Period Plan

Employee Name:
[Employee Name]

Bridge Start Date:
[YYYY-MM-DD]

Bridge End Date:
[YYYY-MM-DD]

Weekly Capacity Split:
- 20 hours: Departing Role
- 20 hours: Destination Role

Departing Role Focus:
- Regression suites
- Outstanding bugs
- Knowledge transfer
- Documentation
- Epic closeout

Destination Role Focus:
- Triage tickets
- Shadow programming
- Local workspace onboarding
- Destination standards review
- Initial low-risk tasks

Departing Team Lead:
[Name]

Receiving Team Lead:
[Name]
```

- [ ] Bridge period is scheduled  
- [ ] 50/50 capacity split is documented  
- [ ] Departing role responsibilities are listed  
- [ ] Destination role responsibilities are listed  
- [ ] Both Team Leads accept the schedule  
- [ ] HR record is updated

**IF the departing team cannot absorb the 20-hour reduction, THEN Engineering Leadership must resolve the capacity gap before the bridge starts.**

**IF the receiving team cannot provide structured onboarding work, THEN delay the bridge start until onboarding tasks are ready.**

---

### Phase 6: Execute Departing Role Closeout

1. **List** all critical milestones assigned to the employee.  
2. **List** all active epics assigned to the employee.  
3. **List** all open bugs assigned to the employee.  
4. **List** all open pull requests assigned to the employee.  
5. **Resolve** assigned critical milestones where possible.  
6. **Merge** completed work after normal review.  
7. **Reassign** incomplete work to a named owner.  
8. **Document** knowledge transfer for unresolved work.  
9. **Hold** a handoff meeting with the Departing Team Lead.  
10. **Request** Departing Team Lead closeout certification.

```
Departing Role Closeout

Employee Name:
[Employee Name]

Departing Team:
[Team]

Critical Milestones:
- [Milestone / Status / New Owner]

Open Epics:
- [Epic / Status / New Owner]

Open Bugs:
- [Bug / Status / New Owner]

Open Pull Requests:
- [PR / Status / New Owner]

Knowledge Transfer Location:
[Link]

Departing Team Lead Certification:
[Approved / Blocked]

Notes:
[Notes]
```

- [ ] Critical milestones are listed  
- [ ] Epics are listed  
- [ ] Bugs are listed  
- [ ] PRs are listed  
- [ ] Incomplete work is reassigned  
- [ ] Knowledge transfer is documented  
- [ ] Departing Team Lead certification is received

**IF the employee has unresolved critical milestones, THEN the employee cannot fully migrate until the milestones are resolved, peer-reviewed, merged, or formally reassigned.**

**IF no replacement owner is named for incomplete work, THEN the Departing Team Lead must assign one before transition closure.**

---

### Phase 7: Execute Destination Role Onboarding During Bridge

1. **Add** the employee to destination-team onboarding channels.  
2. **Grant** only the minimum required destination access.  
3. **Assign** low-risk destination triage tasks.  
4. **Assign** shadow programming sessions.  
5. **Review** destination architecture standards.  
6. **Review** destination testing standards.  
7. **Review** destination repository workflow.  
8. **Review** destination code review expectations.  
9. **Track** completion of onboarding tasks.  
10. **Collect** Receiving Team Lead feedback weekly.  
- [ ] Destination channels are joined  
- [ ] Minimum required access is granted  
- [ ] Triage tasks are assigned  
- [ ] Shadow sessions are scheduled  
- [ ] Destination standards are reviewed  
- [ ] Weekly feedback is collected

**IF the employee needs access to higher-risk systems, THEN the Receiving Team Lead must approve the access before it is granted.**

**IF the employee struggles with destination fundamentals during the bridge, THEN the Receiving Team Lead must document the gap and recommend remediation before final placement.**

---

### Phase 8: Calibrate Level and Salary Band

1. **Compare** the employee’s assessment output against the destination track rubric.  
2. **Compare** bridge-period performance against destination expectations.  
3. **Identify** the employee’s destination-track competence level.  
4. **Assign** destination placement from L1 to L5.  
5. **Document** the difference between source-track level and destination-track level.  
6. **Confirm** that lateral movement does not guarantee identical level matching.  
7. **Review** the destination salary band.  
8. **Align** compensation to the calibrated destination level.  
9. **Send** the level and band recommendation to HR.  
10. **Require** HR approval before communicating compensation changes.

```
Leveling and Salary Band Calibration

Employee Name:
[Employee Name]

Source Track:
[Current discipline]

Source Level:
[L1 / L2 / L3 / L4 / L5]

Destination Track:
[New discipline]

Calibrated Destination Level:
[L1 / L2 / L3 / L4 / L5]

Calibration Rationale:
[Why this level is appropriate]

Compensation Band Impact:
[No change / Increase / Decrease / Realignment required]

Receiving Team Lead Recommendation:
[Recommendation]

HR Review:
[Approved / Blocked / Needs discussion]

Date:
[YYYY-MM-DD]
```

- [ ] Destination rubric is applied  
- [ ] Destination level is assigned  
- [ ] Source level and destination level are compared  
- [ ] Salary band impact is documented  
- [ ] HR reviews the recommendation  
- [ ] Compensation communication is approved

**IF an employee is L4 in their old discipline but calibrates as L2 in the destination discipline, THEN HR must realign the compensation structure to the L2 destination salary band before final transfer.**

**IF compensation changes are disputed, THEN pause administrative closure until HR and Engineering Leadership resolve the calibration decision.**

---

### Phase 9: Reset AI Competency Funnel

1. **Treat** the cross-track transition as a destination-domain competence reset.  
2. **Assign** the employee to `Phase 1: The Trenches` for the destination track.  
3. **Restrict** AI usage to VS Code Copilot or inline chat only during the reset period.  
4. **Block** access to higher-level agents or cloud orchestration frameworks unless explicitly approved.  
5. **Set** the minimum reset period to 3 months.  
6. **Record** the reset start date.  
7. **Record** the reset review date.  
8. **Define** criteria for graduating from the reset period.  
9. **Schedule** monthly destination competence reviews.  
10. **Document** progress against destination repository intuition and stack-specific execution.

```
AI Competency Funnel Reset

Employee Name:
[Employee Name]

Destination Team:
[Team]

Reset Stage:
Phase 1: The Trenches

Permitted AI Tools:
- VS Code Copilot
- Inline Chat

Restricted AI Tools:
- Higher-level agents
- Cloud orchestration frameworks
- Other: [List]

Reset Start Date:
[YYYY-MM-DD]

Minimum Reset Duration:
3 months

First Review Date:
[YYYY-MM-DD]

Graduation Criteria:
- [Criterion 1]
- [Criterion 2]
- [Criterion 3]
```

- [ ] AI funnel reset is documented  
- [ ] Permitted AI tools are listed  
- [ ] Restricted AI tools are listed  
- [ ] 3-month minimum reset period is recorded  
- [ ] Review date is scheduled  
- [ ] Graduation criteria are documented

**IF the employee previously had advanced AI orchestration access in the old role, THEN do not automatically transfer that access to the new destination role.**

**IF the Receiving Team Lead wants to shorten the reset period, THEN Engineering Leadership must approve the exception in writing.**

---

### Phase 10: Complete Administrative Sign-Off

1. **Collect** Departing Team Lead certification.  
2. **Collect** Receiving Team Lead certification.  
3. **Collect** HR certification.  
4. **Confirm** knowledge transfer is complete.  
5. **Confirm** epic closeout is complete.  
6. **Confirm** technical assessment is passed.  
7. **Confirm** destination L1–L5 placement is approved.  
8. **Confirm** compensation band realignment is approved.  
9. **Prepare** updated employment addendum.  
10. **Send** the addendum to the employee for acknowledgment or signature.

```
Internal Mobility Final Sign-Off

Employee Name:
[Employee Name]

Current Role:
[Current Role]

New Role:
[New Role]

Effective Date:
[YYYY-MM-DD]

Departing Team Lead Sign-Off:
[Approved / Blocked]
Notes:
[Notes]

Receiving Team Lead Sign-Off:
[Approved / Blocked]
Destination Level:
[L1 / L2 / L3 / L4 / L5]
Notes:
[Notes]

HR Sign-Off:
[Approved / Blocked]
Compensation Band:
[Band]
Notes:
[Notes]

Employment Addendum Issued:
[Yes/No]

Final Status:
[Approved / Blocked / Deferred]
```

- [ ] Departing Team Lead signs off  
- [ ] Receiving Team Lead signs off  
- [ ] HR signs off  
- [ ] Updated role is confirmed  
- [ ] Destination level is confirmed  
- [ ] Compensation band is confirmed  
- [ ] Employment addendum is issued

**IF any of the three sign-off nodes blocks the transition, THEN the transfer is not official.**

**IF the employee does not acknowledge the updated employment addendum, THEN pause the effective transition date until HR resolves the issue.**

---

### Phase 11: Announce the Transition

1. **Confirm** the final effective date.  
2. **Confirm** the employee has signed or acknowledged the employment addendum.  
3. **Confirm** all access changes are completed or scheduled.  
4. **Prepare** the transition announcement.  
5. **Post** the announcement in `#onboarding-offboarding`.  
6. **Notify** the departing team.  
7. **Notify** the destination team.  
8. **Update** HR records.  
9. **Update** team roster records.  
10. **Archive** the transition record.

```
📢 **Internal Mobility Update**

Effective **[YYYY-MM-DD]**, **[Employee Name]** will transition from **[Current Role / Team]** to **[New Role / Team]**.

This transition has completed the required eligibility review, destination assessment, bridge period, team handoff, and HR calibration process.

Please join us in supporting **[Employee Name]** as they begin this next chapter with **[Destination Team]**.
```

- [ ] Effective date is confirmed  
- [ ] Addendum is acknowledged  
- [ ] Announcement is posted  
- [ ] Departing team is notified  
- [ ] Destination team is notified  
- [ ] HR records are updated  
- [ ] Transition record is archived

**IF the transition is sensitive, THEN use HR-approved wording instead of the standard announcement template.**

**IF the bridge period or sign-off is incomplete, THEN do not announce the transition as final.**

---

## Common Mistakes & Fixes
| Common Mistake | Fix |
| :---- | :---- |
| Allowing transfer before tenure or performance eligibility is confirmed | Verify 6-month tenure and `Meets Expectations` rating before assessment |
| Using transfer to avoid poor performance management | Deny or defer transfer until current-role performance stabilizes |
| Giving an easy or vague destination assessment | Require a practical assessment based on real destination-track standards |
| Skipping the 30-day bridge period | Enforce the 4-week 50/50 capacity split before full migration |
| Letting the departing team lose capacity suddenly | Keep 20 hours per week assigned to departing-role closeout during the bridge |
| Allowing migration before epic closeout | Require critical work to be resolved, peer-reviewed, merged, or formally reassigned |
| Assuming source-track seniority equals destination-track seniority | Recalibrate L1–L5 placement against the destination rubric |
| Preserving the old salary band automatically | Align compensation to the destination-track level and approved salary band |
| Carrying over advanced AI agent permissions | Reset the employee to destination-track AI onboarding restrictions |
| Skipping HR documentation | Require updated employment addendum before final announcement |
| Announcing transition before all sign-offs | Collect Departing Lead, Receiving Lead, and HR sign-off before announcing |
| Leaving access and roster records outdated | Update team rosters, HR records, and destination access records immediately after approval |

## Success Criteria
- [ ] Employee request is recorded and reviewed  
- [ ] Employee meets tenure and performance eligibility requirements  
- [ ] Receiving Team Lead issued a practical destination assessment  
- [ ] Employee passed the destination assessment  
- [ ] 30-day bridge period was scheduled and completed  
- [ ] Departing role received 20 hours per week during the bridge  
- [ ] Destination role received 20 hours per week during the bridge  
- [ ] Critical milestones, epics, bugs, and pull requests were resolved or reassigned  
- [ ] Knowledge transfer was documented  
- [ ] Destination level was calibrated against the destination rubric  
- [ ] Salary band alignment was reviewed and approved by HR  
- [ ] AI competency funnel was reset for the destination track  
- [ ] Departing Team Lead signed off  
- [ ] Receiving Team Lead signed off  
- [ ] HR signed off  
- [ ] Updated employment addendum was issued  
- [ ] Transition announcement was posted in `#onboarding-offboarding`  
- [ ] HR and team records were updated

## Storage & Access
Store this playbook in the central HR and Engineering Leadership playbook library, internal wiki, or shared operations folder where HR, Departing Team Leads, Receiving Team Leads, and Engineering Leadership can access it during every internal mobility request.

**Always Open Policy:** Keep this playbook open during every internal mobility request, assessment, bridge period, leveling calibration, AI competency reset, and final sign-off. Do not rely on memory. Use the playbook live to prevent unfair transfers, salary-band drift, hidden capacity loss, and unclear ownership.

Use this playbook for:

- QA to Frontend transitions  
- Backend to Engineering Management transitions  
- Product Management to QA transitions  
- Frontend to Backend transitions  
- Engineering to Product transitions  
- Permanent cross-track moves  
- Discipline-level recalibration  
- Internal career mobility planning

## Next review date
2026-07-01
