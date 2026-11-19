# 🚧 Cross-Team Escalation & Unblocking Protocol

## DEFINE

| Field | Value |
| --- | --- |
| Playbook Name | Cross-Team Escalation & Unblocking Protocol |
| Purpose | Prevent uncoordinated cross-team task hijacking and context switching while resolving valid delivery blockers with clear ownership, priority control, and minimal latency. |
| Owner | Engineering Department Leadership |
| Last Updated | 2026-08-26 |
| Review Cycle | Every 90 days |

## Scope

Use this playbook when an engineer is blocked by work, access, information, a decision, or execution support owned by another functional team.

Do **not** use this playbook for production incidents, security events, or emergency customer-impacting outages. Use the [Incident Response](../incident-response/Incident%20Response.md) playbook for those events.

```text
                  [ JUNIOR HAS BLOCKER ]
                            |
            Is Primary Team Lead Online?
                 /                     \
              (YES)                    (NO)
               /                         \
    [Contact Primary Lead]     Is Target Team Lead Online?
                                    /                 \
                                 (YES)                (NO)
                                  /                     \
                      [Contact Target Lead]  [Contact Target Junior Direct]
```

## Core Principle: Lead-to-Lead Routing

Junior engineers must not directly task-hijack, reprioritize, or request execution support from junior engineers on another functional team during normal operations. Cross-team dependencies are routed through Team Leads so they can protect sprint priorities, manage capacity, confirm accountability, and shield engineers from avoidable context switching.

Direct junior-to-junior contact is permitted only through the Tier 3 emergency override in this playbook.

## Prerequisites

Before escalating, the initiating engineer must have:

- [ ] Confirmed the blocker cannot be resolved within their own assigned work, documentation, or team context
- [ ] Identified the ticket, PR, task, or deliverable affected
- [ ] Identified the Primary Team Lead and Target Team Lead
- [ ] Prepared the specific unblock needed, business/delivery impact, and deadline or next decision point
- [ ] Checked the applicable team coverage plan if either Team Lead is known to be absent
- [ ] Identified the shared cross-team channel for a Tier 3 audit notification

**IF a published Slack `Coverage Plan` names a trained backup for an absent Team Lead, THEN treat that backup as the relevant Team Lead for this routing flow.** See [Team Lead Absence Coverage](Team%20Lead%20Absence%20Coverage.md).

## Step-by-Step Checklist

### Phase 1: Prepare a Complete Blocker Request

1. **Pause** before contacting another team; do not interrupt an individual contributor on the target team yet.
2. **Capture** the blocker in writing with:
   - Ticket, PR, or task reference
   - What is blocked and the current work state
   - The exact decision, access, information, or execution support needed
   - Why the target team owns or is best positioned to resolve it
   - Delivery impact and deadline/next decision point
   - What troubleshooting or self-service steps have already been attempted
3. **Verify** that the request does not silently change the target team's sprint priority or assign work without lead approval.
4. **State** whether the request is a dependency, a request for clarification, a request for access, or a request for execution support.

```markdown
Cross-Team Blocker

Ticket / PR: [LINK OR #]
Initiating Team: [TEAM]
Target Team: [TEAM]
Blocked Work: [WHAT CANNOT PROCEED]
Unblock Needed: [SPECIFIC DECISION / ACCESS / INFORMATION / SUPPORT]
Impact: [DELIVERY, CUSTOMER, OR SPRINT IMPACT]
Deadline / Next Decision Point: [DATE, TIME, TIME ZONE]
Already Tried: [STEPS]
```

- [ ] The blocker is written and specific
- [ ] The affected work and owner team are identified
- [ ] The requested unblock and impact are explicit
- [ ] No target-team work has been reassigned or reprioritized directly

**IF the initiating engineer can continue with another assigned task while waiting, THEN they should do so after posting the blocker rather than remaining idle.**

---

### Phase 2: Tier 1 — Route Through the Primary Team Lead

5. **Check** whether the Primary Team Lead, or their named coverage backup, is online and available for the needed decision window.
6. **Contact** the Primary Team Lead with the complete blocker request.
7. **Ask** the Primary Team Lead to assess urgency, validate the dependency, and coordinate directly with the Target Team Lead.
8. **Wait** for lead-to-lead routing before requesting action from a target-team junior engineer.
9. **Record** the decision, owner, and next update time in the ticket, Slack thread, or other agreed work record.

- [ ] Primary Team Lead or coverage backup was checked first
- [ ] Primary Team Lead received the complete blocker context
- [ ] Lead-to-lead ownership and next update time are documented

**IF the Primary Team Lead is online, THEN the initiating engineer must use Tier 1 even when they know the target junior engineer personally.**

---

### Phase 3: Tier 2 — Route Through the Target Team Lead

10. **Use Tier 2 only** when the Primary Team Lead and any named coverage backup are offline or unavailable for the required decision window.
11. **Check** whether the Target Team Lead, or their named coverage backup, is online and available.
12. **Contact** the Target Team Lead with the complete blocker request and state that the Primary Team Lead is unavailable.
13. **Allow** the Target Team Lead to assess bandwidth, priority, and assignment within their team.
14. **Record** the Target Team Lead's decision, assigned owner if any, and next update time.

```markdown
Primary lead unavailable. Requesting Target Team Lead review for:
[Ticket / PR reference] — [specific unblock needed]
Impact: [impact]
Deadline / next decision point: [date, time, time zone]
Already tried: [steps]
```

- [ ] Primary Team Lead availability was checked first
- [ ] Target Team Lead or coverage backup received full context
- [ ] The Target Team Lead retained assignment and priority control
- [ ] Decision, owner, and next update time are documented

**IF the Target Team Lead declines or defers the request because of capacity or priority, THEN document the decision and return the dependency to the Primary Team Lead when available; do not pressure or directly retask the target junior engineer.**

---

### Phase 4: Tier 3 — Emergency Override

15. **Use Tier 3 only** when both the Primary Team Lead and Target Team Lead, including any named coverage backups, are offline or unavailable and waiting would create avoidable idle blocking time.
16. **Contact** the Target Junior Engineer directly with the minimum context needed to unblock the work.
17. **Do not** assign sprint priority, change scope, promise deadlines on behalf of the target team, or require work that exceeds a reasonable emergency unblock.
18. **Post** the required audit notification immediately in the shared cross-team channel and tag both Team Leads.
19. **Link** the audit notification to the affected ticket, PR, or work record.
20. **Update** both Team Leads when either becomes available with the current status, action taken, and any follow-up ownership decision needed.

```markdown
Bypassing lead sync due to offline availability: [@PrimaryTeamLead] [@TargetTeamLead]
— Syncing directly with [@TargetJuniorEngineer] to unblock [Ticket #].

Blocker: [specific blocker]
Minimum support requested: [specific ask]
Impact if delayed: [impact]
```

- [ ] Both Team Leads and named coverage backups were unavailable
- [ ] Direct contact is limited to the immediate unblock
- [ ] Both Team Leads were tagged in the shared cross-team channel
- [ ] The ticket or work record is linked
- [ ] Leads receive a status update when available

**IF either Team Lead or named coverage backup becomes available during Tier 3, THEN immediately return routing, priority, and assignment decisions to that lead.**

---

### Phase 5: Close the Blocker and Learn From It

21. **Confirm** the blocker is actually resolved, or explicitly record the remaining dependency and owner.
22. **Update** the ticket, PR, or Slack thread with the outcome, the responsible owner, and next step.
23. **Restore** normal lead-to-lead routing for any follow-up work.
24. **Escalate** recurring cross-team blockers to Team Leads for sprint planning, ownership clarification, documentation, or access/process improvements.
25. **Reference** the blocker in the daily standup if it remains active or materially affected delivery.

- [ ] Resolution or remaining dependency is documented
- [ ] Follow-up owner and deadline are explicit
- [ ] Normal routing is restored
- [ ] Recurring patterns are surfaced to Team Leads

**IF a Tier 3 contact created new work beyond the immediate unblock, THEN the relevant Team Lead must explicitly accept, reprioritize, or decline that work before it continues.**

## Common Mistakes & Fixes

| Common Mistake | Fix |
| --- | --- |
| Asking a target-team junior engineer for help before checking lead availability | Start with the Primary Team Lead; use Tier 2 or Tier 3 only when their conditions apply. |
| Calling every request “urgent” to bypass routing | State the concrete delivery impact and decision deadline; urgency does not remove lead ownership. |
| Giving the target junior engineer a new task during Tier 3 | Request only the minimum immediate unblock; return new work to lead assignment when a lead is available. |
| Failing to check a named absence backup | Treat the published Slack `Coverage Plan` backup as the relevant Team Lead before escalating further. |
| Using direct messages with no audit trail | Post the required Tier 3 notification in the shared cross-team channel and link the work record. |
| Recording “blocked” without stating what is needed | Use the blocker template and name the exact decision, access, information, or support required. |
| Continuing direct cross-team coordination after a lead returns | Hand routing and priority decisions back to the available lead immediately. |

## Success Criteria

This protocol is successfully followed when:

- [ ] Cross-team blockers have a written ticket/task reference, specific unblock request, impact, and next decision point
- [ ] Normal cross-team requests are routed through the Primary Team Lead
- [ ] A Target Team Lead retains capacity and assignment control when Tier 2 is used
- [ ] Tier 3 is used only when both relevant leads and their named backups are unavailable
- [ ] Every Tier 3 use has an immediate shared-channel audit notification tagging both Team Leads
- [ ] No junior engineer is directly tasked, reprioritized, or sprint-committed across teams outside the Tier 3 minimum-unblock exception
- [ ] Resolutions, remaining dependencies, and follow-up owners are documented
- [ ] Recurring blockers are fed into planning or process improvement rather than repeatedly bypassed

## Storage & Access

- **Location:** `docs/playbooks/planning-and-reporting/Cross-Team Escalation and Unblocking.md`
- **Who needs access:** All engineers, Team Leads, trained Team Lead backups, Engineering Department Leadership, and engineering operations
- **Related playbooks:**
  - [Engineering Standups via Slack](Engineering%20Standups%20via%20Slack.md) — daily blocker visibility and Team Lead tagging
  - [Team Lead Absence Coverage](Team%20Lead%20Absence%20Coverage.md) — named coverage backups and absence routing
  - [Sprint Planning](Sprint%20Planning.md) — cross-team handoff and priority management
  - [Incident Response](../incident-response/Incident%20Response.md) — production and security incident escalation

Always Open Policy: Keep this playbook visible while routing a cross-team blocker, deciding whether an override applies, or auditing a Tier 3 exception.

## Next review date

2026-11-24
