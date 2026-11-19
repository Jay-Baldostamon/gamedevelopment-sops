# Team Lead Absence Coverage Playbook

## DEFINE

| Field | Value |
| --- | --- |
| Playbook Name | Team Lead Absence Coverage Playbook |
| Purpose | Ensure each Team Lead has trained, clearly communicated meeting coverage during planned and emergency absences. |
| Owner | Engineering Department Leadership |
| Last Updated | 2026-08-18 |
| Review Cycle | Every 90 days |

## Prerequisites

- [ ] The Team Lead has identified at least one trained backup from their own team who can attend required meetings.
- [ ] The Team Lead and backup have Slack access, calendar access, and access to the relevant project, Copilot, and reporting context.
- [ ] The backup knows the current priorities, risks, blockers, and meeting cadence for the team.
- [ ] The Team Lead can post in `#leave-absence-tracker-pto-vacation`.
- [ ] The Team Lead has a handoff checklist ready for the absence period.

IF a Team Lead has no trained backup from their own team, THEN the Team Lead must train and confirm a backup before planned leave begins.

## Step-by-Step Checklist

### Phase 1: Pre-absence preparation

1. **Select a backup** from the Team Lead's own team for all required meetings during the absence.
2. **Train the backup** on meeting responsibilities, current team priorities, open risks, escalation paths, and required Copilot prompts.
3. **Prepare the handoff checklist** with meeting schedule, current work status, blockers, decision log, stakeholder contacts, and escalation contacts.
4. **Confirm availability** with the backup for the full absence window.
5. **Review the Coverage Plan** with the backup before posting leave notice.

IF the selected backup cannot cover every required meeting, THEN select an additional trained backup from the same team and name each person's meeting scope in the Coverage Plan.

- [ ] A trained same-team backup is confirmed.
- [ ] The handoff checklist is complete and shared with the backup.
- [ ] Meeting coverage and escalation responsibilities are understood.

### Phase 2: Slack leave post

6. **Post the leave notice** in `#leave-absence-tracker-pto-vacation` before planned leave begins.
7. **Include the required fields**: Team Lead name, absence dates and time window, reason category as appropriate, backup handle(s), meetings covered, handoff location, escalation contact, and a `Coverage Plan` line.
8. **Write the `Coverage Plan` line** as the complete override source of truth for who covers which meetings and responsibilities.
9. **Tag the backup** and request acknowledgement in the leave-post thread.

```markdown
OUT OF OFFICE NOTICE
Who: [TEAM_LEAD_NAME]
Date: [DATE]
Duration: [DURATION]
Coverage Plan: [ENGINEER_HANDLES] for [AGENTS_OR_MODULES].
Reason: [REASON]
```

IF the leave post does not include a `Coverage Plan` line, THEN the Team Lead must add or correct the line before the absence starts.

IF a calendar invitation, prior message, or emergency auto-assignment conflicts with the Slack `Coverage Plan` line, THEN follow the Slack `Coverage Plan` line and notify the conflicting assignees.

- [ ] Leave notice is posted in `#leave-absence-tracker-pto-vacation`.
- [ ] The `Coverage Plan` line names the backup and scope.
- [ ] The backup has acknowledged the plan.

### Phase 3: Backup execution

10. **Run the applicable Copilot prompt** before each covered reporting or standup review window.
11. **Attend the assigned meetings** and represent the Team Lead's team using the handoff checklist.
12. **Post concise summaries** of decisions, blockers, ownership changes, and follow-up actions in the appropriate Slack thread or channel.
13. **Tag each engineer** whose update, blocker, decision, or action requires attention.
14. **Escalate material risks** to the named escalation contact when they cannot wait for the Team Lead's return.

#### Simplabots Copilot prompt template

```markdown
Review Simplabots updates for [TIME_WINDOW]. Group updates by agent in [AGENTS_OR_MODULES]. For each agent, summarize progress, blockers, decisions needed, and next actions. Tag the responsible engineers from [ENGINEER_HANDLES] next to their relevant updates. Identify items requiring Team Lead escalation.
```

#### BPC CRM Copilot prompt template

```markdown
Review BPC CRM updates for [TIME_WINDOW]. Group updates by module in [AGENTS_OR_MODULES]. For each module, summarize progress, blockers, decisions needed, and next actions. Tag the responsible engineers from [ENGINEER_HANDLES] next to their relevant updates. Identify items requiring Team Lead escalation.
```

IF the backup identifies a blocker that needs a decision before the Team Lead returns, THEN tag the escalation contact and include the decision needed, impact, owner, and deadline.

- [ ] Covered meetings were attended or explicitly reassigned in the Coverage Plan.
- [ ] Summaries and action owners were posted.
- [ ] Relevant engineers were tagged.

### Phase 4: Emergency path

15. **Use emergency auto-assignment only as a fallback** for unplanned blackout, storm, earthquake, or comparable emergency absence when no pre-posted coverage exists.
16. **Auto-assign the available trained same-team backup** using the current team roster and meeting ownership context.
17. **Post an emergency notice** in `#leave-absence-tracker-pto-vacation` with the absence trigger, assigned backup, covered meetings, and temporary Coverage Plan.
18. **Escalate immediately** to Engineering Department Leadership if no trained same-team backup is available or if coverage is disputed.
19. **Replace the temporary plan** with a Team Lead-authored Slack `Coverage Plan` line when the Team Lead is able to respond.

IF an emergency unplanned absence occurs and no pre-posted leave notice exists, THEN emergency auto-assignment may assign the available trained same-team backup and must post the temporary Coverage Plan.

IF no trained same-team backup is available after emergency auto-assignment, THEN escalate to Engineering Department Leadership for an explicit coverage decision.

- [ ] Emergency assignment was used only because no pre-posted plan existed.
- [ ] An emergency notice and temporary Coverage Plan were posted.
- [ ] Required escalation occurred when coverage was unavailable or disputed.

## Common Mistakes & Fixes

| Common Mistake | Fix |
| --- | --- |
| Selecting a backup outside the Team Lead's team for planned meeting coverage | Select and train a backup from the Team Lead's own team before leave begins. |
| Posting leave without a `Coverage Plan` line | Add the `Coverage Plan` line before leave starts; it is the override source of truth. |
| Treating an auto-assignment as equal to a posted plan | Follow the Slack `Coverage Plan` line whenever it exists; use auto-assignment only as an emergency fallback. |
| Leaving the backup without current context | Complete and share the handoff checklist before the absence. |
| Posting generic summaries without engineer accountability | Tag the responsible engineer next to each relevant update, blocker, decision, or action. |

## Success Criteria

- [ ] Every Team Lead has a trained backup from their own team for required meetings.
- [ ] Every planned absence has a leave notice in `#leave-absence-tracker-pto-vacation` with a complete `Coverage Plan` line.
- [ ] Slack `Coverage Plan` lines resolve all conflicting coverage assignments.
- [ ] Backups attend covered meetings and post summaries with accountable engineer tags.
- [ ] Emergency auto-assignment is used only for unplanned emergencies without a pre-posted plan.
- [ ] Unavailable or disputed emergency coverage is escalated to Engineering Department Leadership.

## Storage & Access

Store this active playbook at:

- `docs/playbooks/planning-and-reporting/Team Lead Absence Coverage.md`

Provide access to all Team Leads, their trained backups, Engineering Department Leadership, and engineering operations. Always Open Policy: Keep this playbook visible while preparing leave coverage, posting a leave notice, or acting as a backup.

## Next review date

2026-11-16
