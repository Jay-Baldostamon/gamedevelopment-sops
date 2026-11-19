# 👋 Offboarding & Deprovisioning Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | HR Offboarding & Deprovisioning Playbook |
| Purpose | Standardize how HR coordinates respectful employee, contractor, developer, and OJT offboarding while ensuring knowledge transfer, system access revocation, GitHub/Copilot cleanup, asset recovery, exit communication, and cooldown tracking are completed without security gaps. |
| Owner | HR Department |
| Last Updated | 2026-05-27 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] HR has received written confirmation of resignation, termination, contract end, or OJT completion  
- [ ] Departing team member’s full name is confirmed  
- [ ] Departing team member’s role, team, and manager are confirmed  
- [ ] Final working day is confirmed  
- [ ] Notice period timeline is confirmed  
- [ ] HR contact is confirmed as Joseph at `joseph@hurdman.net`  
- [ ] Team Lead or Engineering Lead is identified  
- [ ] System Architect or technical access owner is identified  
- [ ] Departing team member’s `@hurdman.net` email account is identified  
- [ ] Departing team member’s Slack account is identified  
- [ ] Departing team member’s GitHub account is identified  
- [ ] Departing team member’s GitHub Copilot, Spaces, or private agent access is identified  
- [ ] Company-issued hardware or assets are listed  
- [ ] Target notification channel is confirmed as `#onboarding-offboarding`  
- [ ] HR record is ready to receive cooldown and offboarding status updates

## Step-by-Step Checklist
### Phase 1: Open the Offboarding Case

1. **Create** an offboarding case in the HR tracking system.  
2. **Record** the departing team member’s full name.  
3. **Record** the departing team member’s role.  
4. **Record** the departing team member’s team.  
5. **Record** the departing team member’s Team Lead.  
6. **Record** the final working day.  
7. **Record** the offboarding reason using the approved HR category.  
8. **Notify** the Team Lead that offboarding tracking has started.  
9. **Notify** the Engineering Lead or System Architect that technical cleanup will be required.  
10. **Confirm** whether the departure is voluntary, involuntary, contract end, or OJT completion.  
- [ ] Offboarding case is created  
- [ ] Final working day is recorded  
- [ ] Team Lead is notified  
- [ ] Engineering Lead or System Architect is notified  
- [ ] HR record is updated

**IF the final working day is not confirmed, THEN pause access revocation scheduling until HR receives the official date.**

**IF the departure is involuntary or security-sensitive, THEN escalate immediately to HR leadership and Engineering Leadership for same-day access review.**

---

### Phase 2: Coordinate Knowledge Transfer During the Notice Period

1. **Ask** the Team Lead to confirm the employee’s active sprint work.  
2. **Ask** the Team Lead to confirm whether the employee has open pull requests.  
3. **Ask** the Team Lead to confirm whether the employee owns any undocumented workflows, architecture decisions, research spikes, or operational responsibilities.  
4. **Instruct** the Team Lead to stop assigning new sprint tasks or epics to the departing team member during the final week.  
5. **Request** a handover plan from the Team Lead.  
6. **Request** confirmation that incomplete tasks are reassigned.  
7. **Request** confirmation that incomplete pull requests are reassigned or closed according to engineering policy.  
8. **Request** confirmation that documentation is captured in the correct team knowledge base.  
9. **Schedule** a role handover meeting if the departing team member holds an auxiliary or stacked role.  
10. **Record** Team Lead confirmation in the HR offboarding case.

```
Subject: Offboarding Knowledge Transfer Request — [Employee Name]

Hi [Team Lead Name],

HR has opened the offboarding case for [Employee Name], whose final working day is [YYYY-MM-DD].

Please confirm the following before the final 48 hours:

1. Active sprint tasks have been completed or reassigned.
2. Open pull requests have been merged, closed, or reassigned.
3. No new tasks or epics will be assigned during the final week.
4. Architecture notes, research spikes, and operational patterns are documented.
5. Any auxiliary or stacked role responsibilities have been handed off.
6. The replacement owner for each open responsibility is listed.

Please reply with the handover status and any blockers.

Thank you.
```

- [ ] Active sprint work is reviewed  
- [ ] Open pull requests are reviewed  
- [ ] New final-week work is blocked  
- [ ] Documentation capture is confirmed  
- [ ] Role handover is completed if needed  
- [ ] Team Lead confirmation is saved

**IF the departing team member has open pull requests, THEN the Team Lead must either merge them through normal review or formally reassign them to an engineering peer.**

**IF the departing team member owns undocumented knowledge, THEN the Team Lead must ensure that knowledge is documented before the final working day.**

---

### Phase 3: Start Technical Cleanup in the Final 48 Hours

1. **Send** a technical cleanup request to the System Architect or Engineering Lead.  
2. **Request** confirmation that GitHub organization access will be removed.  
3. **Request** confirmation that private repository access will be revoked.  
4. **Request** confirmation that GitHub Copilot workspace access will be removed.  
5. **Request** confirmation that `.github-private` cloud agent seats will be deprovisioned.  
6. **Request** confirmation that GitHub Copilot Spaces access will be reviewed or removed.  
7. **Request** confirmation that shared credentials, SSH keys, environment variables, or secrets exposed to the departing user are audited.  
8. **Request** confirmation that required shared credentials are rotated.  
9. **Request** confirmation that auxiliary engineering tools are reviewed.  
10. **Save** the technical cleanup confirmation in the HR offboarding case.

```
Subject: Final 48-Hour Technical Cleanup Request — [Employee Name]

Hi [Engineering Lead / System Architect Name],

[Employee Name] is scheduled for offboarding on [YYYY-MM-DD].

Please complete and confirm the following technical cleanup items:

1. Remove GitHub organization access.
2. Revoke private repository access.
3. Deprovision GitHub Copilot workspace access.
4. Deprovision `.github-private` cloud agent seat access.
5. Review and remove GitHub Copilot Spaces access where applicable.
6. Audit shared credentials, SSH keys, environment variables, and secrets.
7. Rotate shared credentials where required.
8. Confirm any remaining engineering tool access requiring HR follow-up.

Please reply with confirmation once completed or send blockers immediately.

Thank you.
```

- [ ] Technical cleanup request is sent  
- [ ] GitHub access removal is confirmed  
- [ ] Private repository access revocation is confirmed  
- [ ] Copilot workspace cleanup is confirmed  
- [ ] Private agent seat cleanup is confirmed  
- [ ] Credential audit is confirmed  
- [ ] Required credential rotation is confirmed

**IF technical cleanup is not confirmed before the final day, THEN escalate to Engineering Leadership and HR leadership immediately.**

**IF shared credentials cannot be rotated before the final day, THEN document the risk and require Engineering Leadership approval for the temporary exception.**

---

### Phase 4: Recover Company Assets

1. **Confirm** whether the departing team member has a company-issued laptop.  
2. **Confirm** whether the departing team member has a company-issued phone.  
3. **Confirm** whether the departing team member has access cards, security keys, hardware tokens, or other physical assets.  
4. **Send** return instructions to the departing team member.  
5. **Schedule** pickup, drop-off, or shipping return.  
6. **Confirm** asset return tracking details.  
7. **Request** remote wipe from IT if the asset is company-managed.  
8. **Record** the remote wipe status.  
9. **Record** the physical return status.  
10. **Update** the HR offboarding case.

```
Subject: Company Asset Return Instructions — [Employee Name]

Hi [Employee Name],

As part of your offboarding process, please return the following company assets:

- [Asset 1]
- [Asset 2]
- [Asset 3]

Return method:
[Pickup / Drop-off / Shipping instructions]

Return deadline:
[YYYY-MM-DD HH:MM TZ]

Please confirm once the assets are ready for return or shipped.

Thank you.
```

- [ ] Asset list is confirmed  
- [ ] Return instructions are sent  
- [ ] Return method is confirmed  
- [ ] Remote wipe is requested if applicable  
- [ ] Asset return is recorded

**IF the departing team member has a company-issued machine, THEN request certified remote wipe or arrange immediate hardware collection.**

**IF company hardware is not returned by the deadline, THEN escalate to HR leadership for recovery action.**

---

### Phase 5: Revoke Primary System Access on the Final Day

1. **Confirm** the final working day.  
2. **Confirm** the 5:00 PM local deadline for primary access revocation.  
3. **Disable** the departing team member’s `@hurdman.net` email account at the deadline.  
4. **Configure** temporary email forwarding only if client-facing continuity is required.  
5. **Limit** email forwarding to 14 days if approved.  
6. **Deactivate** the departing team member’s Slack account immediately after email termination.  
7. **Confirm** Slack deactivation logs the user out of active desktop and mobile sessions.  
8. **Revoke** auxiliary software access.  
9. **Confirm** access revocation with the Team Lead.  
10. **Update** the HR offboarding case.

```
Final Day Access Revocation — [Employee Name]

Final working day: [YYYY-MM-DD]
Access revocation deadline: 5:00 PM local time

Accounts to revoke:
- Corporate email: [employee@hurdman.net]
- Slack: [Slack username/email]
- Jira / Linear: [Account]
- Vercel: [Account]
- AWS: [Account]
- Internal dashboards: [Accounts]
- Other: [Accounts]

Email forwarding:
- Required: [Yes/No]
- Forward to: [Manager Name / Email]
- End date: [YYYY-MM-DD]
```

- [ ] Email account is disabled  
- [ ] Email forwarding is configured only if approved  
- [ ] Slack account is deactivated  
- [ ] Auxiliary software access is revoked  
- [ ] Team Lead is notified  
- [ ] HR record is updated

**IF client-facing continuity requires email forwarding, THEN configure forwarding to the approved manager for no more than 14 days.**

**IF the employee is terminated for cause or security risk, THEN revoke email, Slack, GitHub, and auxiliary access immediately according to HR leadership direction.**

---

### Phase 6: Confirm Engineering Access Closure

1. **Request** final confirmation from the Engineering Lead or System Architect.  
2. **Confirm** GitHub organization access is removed.  
3. **Confirm** private repository access is revoked.  
4. **Confirm** Copilot workspace seats are deprovisioned.  
5. **Confirm** `.github-private` cloud agent seats are deprovisioned.  
6. **Confirm** GitHub Copilot Spaces access is removed or downgraded as required.  
7. **Confirm** credentials requiring rotation were rotated.  
8. **Confirm** no active pull requests remain assigned to the departed user.  
9. **Confirm** no critical tasks remain assigned to the departed user.  
10. **Save** the final engineering access closure confirmation.

```
Subject: Final Engineering Access Closure Confirmation — [Employee Name]

Hi [Engineering Lead / System Architect Name],

Please confirm final closure for [Employee Name]:

- GitHub organization access removed: [Yes/No]
- Private repository access revoked: [Yes/No]
- GitHub Copilot workspace seats deprovisioned: [Yes/No]
- `.github-private` cloud agent seats deprovisioned: [Yes/No]
- GitHub Copilot Spaces access reviewed/removed: [Yes/No]
- Required credential rotations completed: [Yes/No]
- Open PRs reassigned or resolved: [Yes/No]
- Open tasks reassigned or resolved: [Yes/No]

Please reply with any unresolved blockers.

Thank you.
```

- [ ] GitHub removal is confirmed  
- [ ] Private repository removal is confirmed  
- [ ] Copilot cleanup is confirmed  
- [ ] Credential rotation is confirmed  
- [ ] Open PRs are reassigned or resolved  
- [ ] Open tasks are reassigned or resolved

**IF any engineering access remains open after the final day, THEN escalate to Engineering Leadership and HR leadership immediately.**

---

### Phase 7: Post the Exit Announcement

1. **Confirm** Phases 1 through 6 are complete.  
2. **Confirm** the announcement tone with HR leadership if needed.  
3. **Prepare** the exit announcement.  
4. **Post** the announcement in `#onboarding-offboarding`.  
5. **Confirm** the announcement was posted successfully.  
6. **Save** a copy of the announcement in the HR offboarding case.

```
📢 **Offboarding Update**

Today marks the official final day for **[Employee Name]**, who is moving on to their next chapter.

We want to thank **[Employee Name]** for their contributions to the team and their dedication to building out our engineering engine room.

All technical handovers have been successfully completed, and primary communications channels have been closed out.

Please join us in wishing them the absolute best in their future endeavors! 🚀
```

- [ ] Handover is complete  
- [ ] Access revocation is complete  
- [ ] Announcement is approved if needed  
- [ ] Announcement is posted  
- [ ] Announcement copy is saved

**IF access revocation or technical cleanup is not complete, THEN do not state that all handovers and channels have been closed out.**

**IF the departure is sensitive, THEN use the HR-approved announcement wording instead of the standard template.**

---

### Phase 8: Apply the 6-Month Cooldown Policy

1. **Add** a 6-month cooldown flag to the HR record.  
2. **Record** the cooldown start date as the final working day.  
3. **Record** the cooldown end date as 180 days after the final working day.  
4. **Mark** the departed team member as ineligible for re-hire during the cooldown window.  
5. **Mark** the departed team member as ineligible for contract extension during the cooldown window.  
6. **Mark** the departed team member as ineligible for auxiliary consulting assignments during the cooldown window.  
7. **Notify** management that the cooldown has been applied.  
8. **Confirm** system log archival has been requested or completed.  
9. **Confirm** identity quarantine has been applied where applicable.  
10. **Save** cooldown confirmation in the HR offboarding case.

```
Cooldown Record — [Employee Name]

Final working day:
[YYYY-MM-DD]

Cooldown start date:
[YYYY-MM-DD]

Cooldown end date:
[YYYY-MM-DD]

Cooldown restrictions:
- Re-hire: Not eligible during cooldown
- Contract extension: Not eligible during cooldown
- Auxiliary consulting: Not eligible during cooldown

System log archival:
[Completed / Requested / TBD]

Identity quarantine:
[Completed / Requested / Not applicable]

Recorded by:
[HR Name]
```

- [ ] Cooldown flag is added  
- [ ] Cooldown start date is recorded  
- [ ] Cooldown end date is recorded  
- [ ] Management is notified  
- [ ] Log archival is confirmed or requested  
- [ ] Identity quarantine is confirmed or requested

**IF management requests an exception to the cooldown policy, THEN require written HR leadership approval before changing the HR record.**

---

### Phase 9: Close the HR Offboarding Case

1. **Review** the HR verification checklist.  
2. **Confirm** notice receipt is logged.  
3. **Confirm** Team Lead handover confirmation is saved.  
4. **Confirm** technical cleanup confirmation is saved.  
5. **Confirm** email access is disabled.  
6. **Confirm** Slack access is disabled.  
7. **Confirm** auxiliary software access is revoked.  
8. **Confirm** company assets are returned or recovery action is active.  
9. **Confirm** the exit announcement is posted.  
10. **Confirm** the cooldown flag is applied.  
11. **Close** the HR offboarding case.  
12. **Archive** the completed offboarding record.  
- [ ] Notice received and tracking timeline logged  
- [ ] Knowledge transfer completed or exceptions documented  
- [ ] GitHub and Copilot workspace cleanup confirmed  
- [ ] `@hurdman.net` email account disabled  
- [ ] Slack account deactivated  
- [ ] Auxiliary software access revoked  
- [ ] Company assets collected or recovery action started  
- [ ] Announcement posted in `#onboarding-offboarding`  
- [ ] Cooldown flag appended to HR record  
- [ ] Offboarding case closed and archived

**IF any required checklist item is incomplete, THEN keep the HR offboarding case open until the item is resolved or formally excepted by HR leadership.**

---

## Common Mistakes & Fixes
| Common Mistake | Fix |
| :---- | :---- |
| HR waits until the final day to notify Engineering | Notify the Team Lead and Engineering Lead as soon as the offboarding case opens |
| Departing employee keeps pulling new sprint work | Require Team Lead to stop assigning new tasks or epics during the final week |
| Open PRs remain assigned to the departing employee | Require Team Lead to merge, close, or reassign every open PR before departure |
| GitHub access is removed but Copilot or private agent seats remain active | Explicitly verify GitHub Copilot, Spaces, and `.github-private` cloud agent cleanup |
| HR disables email before preserving client continuity | Confirm whether temporary 14-day forwarding is needed before disabling email |
| Slack is deactivated before exit communication is coordinated | Confirm announcement timing before final communication where appropriate |
| Shared credentials are not rotated | Require Engineering Lead to audit and rotate shared credentials exposed to the departing user |
| Company laptop recovery is handled informally | Track asset return method, deadline, and remote wipe status in the HR case |
| Exit announcement says cleanup is complete before it is verified | Post the standard announcement only after handover and access closure are confirmed |
| Cooldown policy is forgotten | Add the 6-month cooldown flag before closing the HR case |
| Identity or custom prompt configurations are reassigned too quickly | Quarantine the user’s identities and custom configurations during the cooldown period |

## Success Criteria
- [ ] HR opened and tracked the offboarding case  
- [ ] Team Lead completed knowledge transfer and code stewardship  
- [ ] No new sprint work was assigned during the departing team member’s final week  
- [ ] Open pull requests were merged, closed, or reassigned  
- [ ] GitHub organization and private repository access were revoked  
- [ ] GitHub Copilot, Spaces, and private agent seats were deprovisioned  
- [ ] Shared credentials, SSH keys, environment variables, and secrets were audited  
- [ ] Required credential rotations were completed  
- [ ] Corporate email access was disabled  
- [ ] Slack access was deactivated  
- [ ] Auxiliary software access was revoked  
- [ ] Company assets were returned, wiped, or placed into recovery action  
- [ ] Exit announcement was posted in `#onboarding-offboarding`  
- [ ] 6-month cooldown flag was added to the HR record  
- [ ] System logs and identity quarantine requirements were archived or requested  
- [ ] HR offboarding case was closed with supporting evidence

## Storage & Access
Store this playbook in the HR operations library, internal company wiki, or shared HR documentation folder where HR, Engineering Leadership, Team Leads, and System Architects can access it during offboarding.

**Always Open Policy:** Keep this playbook open during every offboarding case. HR should not rely on memory for access revocation, announcement timing, asset recovery, GitHub/Copilot cleanup coordination, or cooldown tracking. Use the checklist live to prevent security gaps, missed handoffs, and incomplete records.

Use this playbook for:

- Employee offboarding  
- Contractor offboarding  
- Developer offboarding  
- OJT offboarding  
- Involuntary departure coordination  
- End-of-contract access cleanup  
- HR and Engineering offboarding handoffs

## Next review date
2026-07-01
