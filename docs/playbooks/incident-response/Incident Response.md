# 🚨 Incident Response Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Incident Response Playbook |
| Purpose | Ensure rapid, coordinated response to production incidents with clear communication, minimal impact, and systematic learning through post-incident review |
| Owner | Alan Francis Baldelobar |
| Last Updated | 2026-02-09 |
| Review Cycle | Every 90 days (Next: 2026-05-10) |

## Prerequisites
Before an incident occurs, ensure:

- [ ] Severity definitions (SEV1–SEV3) are documented and accessible  
- [ ] On-call rotation is configured with current contacts  
- [ ] Incident ticket template exists in project management tool  
- [ ] Incident Slack channel (e.g., `#incidents`) is set up  
- [ ] Status page access credentials are available  
- [ ] Post-incident review template is ready  
- [ ] Team has been trained on incident roles (Commander, Communicator, Investigator)

---

## Step-by-Step Checklist
### Phase 1: Detection & Classification

**1\. Detect the incident**

- Monitor alerts, customer reports, or automated system warnings  
- Note the exact time detected

**2\. Classify severity using the matrix**

| Severity | Definition | Examples |
| :---- | :---- | :---- |
| **SEV1** | Critical impact; service down or major data loss | Full outage, payment processing failure, security breach |
| **SEV2** | Significant degradation; core feature impacted | Slow API responses (\>5s), login issues affecting \>10% users |
| **SEV3** | Minor impact; non-critical feature affected | Broken UI element, email delays, minor visual bugs |

**3\. Declare the incident**

- **IF SEV1 or SEV2**, immediately page the on-call Incident Commander  
- **IF SEV3**, create a ticket and notify during business hours

---

### Phase 2: Mobilize Response Team

**4\. Page/notify the Incident Commander**

- Use PagerDuty/Opsgenie/on-call tool to page  
- **IF no response within 5 minutes**, escalate to secondary on-call

**5\. Open an incident ticket**

- Use incident template in Jira/Linear/GitHub Issues  
- Include: Severity, time detected, initial symptoms, reporter name  
- **Ticket ID example**: `INC-2026-001`

**6\. Post incident announcement in `#incidents` Slack channel**

```
🚨 INCIDENT DECLARED 🚨
Severity: [SEV1/SEV2/SEV3]
Ticket: [Link to INC-2026-XXX]
Commander: @[name]
Summary: [One-sentence description]
Status: Investigating
```

**7\. Assign incident roles**

- [ ] **Incident Commander**: Coordinates response, makes decisions  
- [ ] **Communicator**: Handles internal/external updates  
- [ ] **Investigators** (1-3): Debug and implement fixes

---

### Phase 3: Stabilize & Mitigate

**8\. Prioritize stabilization over root cause**

- Focus on stopping the bleeding first  
- Possible actions:  
  - [ ] Disable problematic feature flag  
  - [ ] Roll back recent deployment (use Hotfix Playbook if applicable)  
  - [ ] Apply rate limiting  
  - [ ] Scale up infrastructure  
  - [ ] Enable maintenance mode

**9\. Update incident ticket with mitigation steps taken**

- Document every action with timestamp

**10\. Verify mitigation effectiveness**

- [ ] Check metrics/dashboards  
- [ ] Test critical user flows manually  
- **IF issue persists**, return to step 8 with new approach

---

### Phase 4: Communication

**11\. Internal updates (Incident Commander → Communicator)**

- Post updates in `#incidents` every **15 minutes** for SEV1  
- Post updates every **30 minutes** for SEV2  
- Use this template:

```
⏱️ UPDATE [HH:MM UTC]
Status: [Investigating / Mitigating / Monitoring / Resolved]
Impact: [Brief description]
Actions: [What we're doing]
Next update: [Time]
```

**12\. External updates (Communicator only)**

- **IF SEV1 or SEV2**, update status page within **10 minutes**  
- Use customer-friendly language (no internal jargon)  
- Template:

```
We are currently experiencing [brief issue description].
Our team is actively working on a fix.
Updates will be posted here every [interval].
```

**13\. Stakeholder communication**

- Communicator is the **single point of contact**  
- **IF C-level asks for update**, Communicator responds (not Investigators)  
- Redirect all questions to `#incidents` or Communicator

---

### Phase 5: Resolution

**14\. Confirm system stability**

- [ ] All critical metrics returned to normal  
- [ ] No new error spikes for **15 minutes** (SEV1) or **10 minutes** (SEV2/3)  
- [ ] Users can complete core workflows

**15\. Mark incident as resolved**

- Post resolution message in `#incidents`:

```
✅ INCIDENT RESOLVED
Severity: [SEV1/SEV2/SEV3]
Duration: [Start time – End time] ([X hours/minutes])
Resolution: [What fixed it]
Next steps: Post-incident review scheduled for [date]
```

**16\. Update status page (if applicable)**

- Mark as resolved  
- Provide brief summary of resolution

**17\. Document resolution in incident ticket**

- Timeline of key events  
- What was done to resolve  
- Who was involved

---

### Phase 6: Post-Incident Review (Within 48 Hours for SEV1/2, Within 1 Week for SEV3)

**18\. Schedule blameless RCA meeting**

- **Required attendees**: Incident Commander, all Investigators, Engineering Manager  
- **Optional**: Communicator, Product Owner, CTO (for SEV1)  
- Scheduled within **48 hours** for SEV1/SEV2, **1 week** for SEV3

**19\. Complete post-incident review document**

Use this structure:

```
### Post-Incident Review: [INC-2026-XXX]

## Common Mistakes & Fixes
| Mistake | Fix |
| :---- | :---- |
| Investigating root cause before stabilizing | Always mitigate impact first; investigate after |
| Too many people trying to fix at once | Incident Commander assigns clear roles; others stay out of the way |
| Irregular or missing communication updates | Set a timer; Communicator owns strict update cadence |
| Using technical jargon in customer updates | Communicator translates technical details into user-friendly language |
| Skipping post-incident review | Make review meeting non-negotiable; block calendar within 24 hours |
| Creating action items but not tracking them | Add all follow-ups to sprint backlog with `incident-followup` tag |
| Blaming individuals in post-mortem | Reinforce blameless culture; focus on system improvements |

---

## Success Criteria
This playbook worked if:

- [ ] Incident severity was correctly classified within 5 minutes  
- [ ] Incident Commander was paged and responded promptly  
- [ ] System was stabilized before root cause investigation began  
- [ ] Internal updates were posted at regular intervals  
- [ ] External status page (if applicable) was updated within 10 minutes  
- [ ] Incident was fully documented in ticket with timeline  
- [ ] Post-incident review was completed within required timeframe  
- [ ] All action items were assigned, tracked, and completed  
- [ ] Team learned from the incident and updated systems/playbooks accordingly

---

**Next Review Date**: 2026-05-10

---

## Storage & Access
Store this playbook in `docs/playbooks` within the engineering repository.
Access is required for all engineers, team leads, and operations stakeholders involved in execution.
Always Open policy: keep this playbook visible while running the workflow.

## Next review date
2026-09-24

## Incident Summary
- **Severity**: [SEV1/2/3]
- **Duration**: [X hours/minutes]
- **Impact**: [Number of users affected, revenue impact, etc.]
- **Detected by**: [Alert/Customer/Team member]

## Timeline
| Time (UTC) | Event |
|------------|-------|
| HH:MM | Issue first detected |
| HH:MM | Incident declared |
| HH:MM | [Key action] |
| HH:MM | Resolved |

## Root Cause
[Technical explanation of why this happened]

## What Went Well
- [Positive aspect 1]
- [Positive aspect 2]

## What Went Wrong
- [Area for improvement 1]
- [Area for improvement 2]

## Action Items
| Task | Owner | Due Date | Status |
|------|-------|----------|--------|
| [Prevention task 1] | @person | YYYY-MM-DD | Open |
| [Monitoring improvement] | @person | YYYY-MM-DD | Open |
```

**20\. Extract action items and create tracking tickets**

- Each action item \= separate ticket in backlog  
- Tag with `incident-followup` label  
- Assign owners and due dates

**21\. Track follow-up items to completion**

- [ ] Review status in weekly engineering sync  
- [ ] **IF overdue**, escalate to Engineering Manager  
- [ ] Close post-incident review only when all action items are complete or explicitly deferred

---
