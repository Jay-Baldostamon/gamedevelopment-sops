# :mega: Engineering Standups via Slack Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Engineering Standups via Slack Playbook |
| Purpose | Replace legacy reporting meetings with daily async Slack standups, ensure blocker visibility, and maintain objective activity tracking through Engineering MCP ingestion and GitHub comparison. |
| Owner | Engineering Department Leadership |
| Last Updated | 2026-08-11 |
| Review Cycle | Every 90 days |

## Prerequisites
Before executing this playbook, ensure:

- [ ] You are assigned to one standup channel based on project/team
- [ ] You have Slack access to your assigned standup channel
- [ ] You know your Team Lead handle for blocker escalation
- [ ] You understand the required post deadline: anytime before 8:00 AM daily
- [ ] You understand graveyard/flexible shift expectations: complete your shift obligations, maintain required stateside overlap (minimum 2 hours), and stay online during assignment-specific meeting windows
- [ ] You have links or references ready for completed work (ticket, PR, commit, deployment, or equivalent)
- [ ] You understand sprint/project priorities using the [GitHub Issue Priority Levels](GitHub%20Issue%20Priority%20Levels.md) playbook when identifying tomorrow's tasks

Standup channels currently in use:

- `simplabots-standups`
- `bpc-crm-standups`
- `feasibility-standups`
- `eng-qa-standups`

IF you are unsure which channel to use, THEN ask your Team Lead before your next shift ends.

---

## Step-by-Step Checklist
### Phase 1: Daily Post Preparation

1. **Confirm your assigned standup channel** and post in that channel only unless instructed otherwise.
2. **Collect work evidence** from your shift (tickets, PR links, commit links, rollout references, or QA artifacts).
3. **Identify tomorrow's highest-priority tasks** based on your assignment and active sprint priorities.
4. **List blockers clearly** and include owner/context when waiting on access, decisions, or dependencies.

- [ ] Channel is correct
- [ ] Work evidence is prepared
- [ ] Next-day plan is clear
- [ ] Blocker status is accurate

### Phase 2: Post Async Standup (Mandatory)

5. **Post one standup update** in your assigned channel before 8:00 AM daily.
6. **Use the required standup format** exactly:

```markdown
:white_check_mark: Finished:
Implemented [Feature X]
Fixed bug [Link to Ticket/PR]

:date: Planned (Tomorrow):
Connecting [Feature X] to Database
Reviewing PR #123

:no_entry_sign: Blockers:
None / Waiting for AWS creds / Need clarification on UI @TeamLead
```

7. **Keep updates concise and relevant** to work completed, next actions, and active blockers.
8. **Tag your Team Lead immediately** when blocked and include the specific unblock needed.

- [ ] Post is submitted before deadline
- [ ] Format sections are complete
- [ ] Team Lead is tagged when blocked

### Phase 3: MCP Capture and Validation

9. **Allow Engineering MCP to ingest standup posts daily** from standup channels into the engineering database.
10. **Include PR links whenever applicable** so MCP can compare standup claims with GitHub commit/PR activity.
11. **Review Team Lead follow-ups** if MCP flags missing posts, missing evidence links, or mismatch signals.
12. **Correct incomplete posts quickly** by replying in thread with missing links/context when requested.

IF a post is missing for the day, THEN Engineering MCP auto-tags the missing post event and it counts against engineer performance tracking.

IF a standup includes deliverables but no verifiable link, THEN update the post or thread with the missing reference when prompted.

- [ ] MCP has enough context to ingest the post
- [ ] Evidence links are included when applicable
- [ ] Follow-ups are resolved within the same day

### Phase 4: Team Lead Oversight

13. **Monitor daily channel completion** and identify missing posters before handoff windows.
14. **Escalate unresolved blockers** that can affect delivery timelines or cross-team dependencies.
15. **Use MCP summaries** to spot recurring issues: frequent missing posts, repeated blockers, or delivery/evidence mismatch patterns.
16. **Feed patterns into coaching/performance reviews** with documented examples.

- [ ] Daily completion is tracked
- [ ] Escalations are logged when needed
- [ ] Recurring issues are documented for follow-up

---

## Common Mistakes & Fixes
| Common Mistake                                         | Fix                                                                                               |
| :----------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| Posting in the wrong standup channel                   | Confirm project assignment and use only the mapped standup channel unless reassigned by Team Lead |
| Posting late or skipping a day                         | Post before 8:00 AM daily; set personal reminders at shift end to prevent misses                  |
| Writing vague updates with no proof                    | Add ticket/PR/commit/deployment links whenever deliverables are mentioned                         |
| Listing a blocker without tagging a lead               | Tag Team Lead in the blocker line and state exactly what unblock is needed                        |
| Copy/pasting old updates without real progress context | Update all three sections with current shift outcomes and next actions                            |
| Treating standups as optional because work is flexible | Flexible hours do not remove mandatory daily posting and overlap expectations                     |

---

## Success Criteria
This playbook is successfully executed when:

- [ ] 100% of engineers submit one standup update per day before 8:00 AM
- [ ] Posts consistently follow the required three-section format
- [ ] Blockers are tagged to Team Leads immediately when they occur
- [ ] MCP ingests daily standup data without missing required fields
- [ ] PR-linked updates can be compared against GitHub activity through MCP
- [ ] Missing-post events trend downward over time
- [ ] Team Leads can use standup and MCP records as reliable performance evidence

---

## Storage & Access
Central location for active playbook:

- `docs/playbooks/planning-and-reporting/Reporting.md`

Historical archived reporting playbook:

- `archive/playbooks/planning-and-reporting/Reporting.md`

Related playbooks:

- [GitHub Issue Priority Levels](GitHub%20Issue%20Priority%20Levels.md) — Use this to understand sprint priorities when planning daily standup updates
- [Cross-Team Escalation & Unblocking Protocol](Cross-Team%20Escalation%20and%20Unblocking.md) — Use this when a blocker requires support, access, a decision, or execution from another team
- [Team Lead Absence Coverage](Team%20Lead%20Absence%20Coverage.md) — Use this for Team Lead leave notices, backup meeting coverage, and emergency absence escalation

Always Open Policy: Keep this playbook visible while posting daily updates or reviewing standup compliance so format and escalation rules are consistently followed.

Use this playbook for:

- All engineers posting daily async standups
- Team Leads monitoring standup compliance and blockers
- Engineering operations reviewing MCP-captured standup data

---

## Next review date
2026-11-11
