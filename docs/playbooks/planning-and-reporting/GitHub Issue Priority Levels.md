# 🎯 GitHub Issue Priority Levels Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | GitHub Issue Priority Levels |
| Purpose | Standardize how to assign priority levels (P1 through P10) to GitHub issues so the team has a consistent, shared understanding of urgency, impact, and current relevance across all tickets. |
| Owner | Edgar Juntilla Jr. |
| Last Updated | 2026-08-11 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] GitHub Project board is active and has a `Priority` field
- [ ] Team has reviewed and agreed to the P1-P10 system
- [ ] All team members have access to this playbook during issue intake and prioritization
- [ ] Issues are created in a repository with `Priority` as a project field

**IF the Priority field is missing from the project board, THEN add it before assigning any issues.**

## Priority Level Definitions

### P1: System Down
**Urgency:** Immediate response required.

The whole system, a major service, or a critical function is unavailable. Customers or users cannot use the system.

**When to use:** Service outage, complete feature breakage, authentication down, critical infrastructure failure.

---

### P2: System Impaired
**Urgency:** Urgent response needed.

Part of the system is broken or severely degraded. The issue slows down or creates problems for a user or customer, but they can still use the system.

**When to use:** Major feature slow-down, partial service loss, critical bug affecting core workflow but not total outage.

---

### P3: Critical Live Issue
**Urgency:** Address very quickly.

A live system issue that needs to be addressed very quickly. The system is still operational, but the issue has a major business, customer, or operational impact.

**When to use:** Data loss risk, security exposure, significant customer impact, regulatory compliance risk.

---

### P4: High Live Priority
**Urgency:** Work ahead of normal priority.

Important work needed in the live system with a clear impact and should be worked ahead of normal live requests.

**When to use:** Notable bugs affecting key features, performance degradation, important customer request, operational improvements.

---

### P5: Normal Live Priority
**Urgency:** Standard work timeline.

Standard live system work. The issue or change matters, but there is no significant urgency.

**When to use:** Regular bug fixes, routine feature improvements, standard maintenance, normal workflow enhancements.

---

### P6: Low Live Priority
**Urgency:** After P1-P5 work.

A minor live system issue, improvement, cleanup, or change. It should be completed, but P1 through P5 work comes first.

**When to use:** Nice-to-have improvements, minor polish, code cleanup, low-impact edge cases, documentation updates.

---

### P7: Near Future
**Urgency:** Coming soon but not active.

Future work that is likely coming soon but is not currently part of the Project Manager's active plan.

**When to use:** Planned features for next sprint/cycle, anticipated work based on roadmap, upcoming customer requirements.

---

### P8: Planned Future
**Urgency:** Keep visible but not active.

A known future need that should be kept visible but does not require planning or development yet.

**When to use:** Confirmed future initiatives, items on the product roadmap, strategic work for future quarters.

---

### P9: Future Consideration
**Urgency:** No commitment or timeline.

Something we believe may be useful or necessary later. There is no current commitment or timeline.

**When to use:** Exploratory ideas, potential improvements, possible future needs, options worth preserving.

---

### P10: Idea / Backlog
**Urgency:** No current action expected.

Long term ideas, possible improvements, wish list items, or concepts worth saving.

**When to use:** Brainstorm items, "someday" improvements, exploratory concepts, low-conviction ideas.

---

## Priority Groups

### Incidents (P1–P2)
Something is actively wrong with the live system and is affecting users or customers.
- **Action:** Address immediately
- **WIP Limit:** No limit (emergency response)
- **Review:** Post-incident retrospective required

### Live Work (P3–P6)
These are things we want changed, fixed, or improved in the current production system.
- **Action:** Pull into active sprint/work queue
- **WIP Limit:** Prioritize P3 before P6
- **Review:** Standard engineering process applies

### Future Work (P7–P10)
These items are not currently part of the active project plan. They should not compete with active production work until the Project Manager moves them into the active queue.
- **Action:** Keep visible; do not actively work
- **WIP Limit:** Not included in current sprint capacity
- **Review:** Revisit during planning cycles

---

## Step-by-Step Checklist

### Phase 1: Assign Priority at Issue Creation

1. **Read** the issue title, description, and any acceptance criteria.
2. **Determine** whether the issue affects the live system right now (Incidents or Live Work) or is planned for the future (Future Work).
3. **Identify** the specific impact: system down, user slowdown, business impact, or routine improvement.
4. **Assign** the appropriate priority level (P1–P10) using the definitions above.
5. **Document** your reasoning in a comment if the priority is not obvious (for example: "P3 because this affects customer logins").
6. **Confirm** the priority is visible on the project board.
- [ ] Issue has a `Priority` value assigned
- [ ] Priority matches the issue's urgency and impact
- [ ] Reasoning is documented when priority is non-obvious

**IF an issue's priority is ambiguous, THEN discuss with the Project Manager or team before assigning.**

---

### Phase 2: Review Priority During Sprint Planning

1. **List** all issues in the sprint board.
2. **Compare** P1–P2 issues first; ensure they are on track to be addressed immediately.
3. **Verify** P3–P6 issues are ordered by priority within the live work group.
4. **Confirm** P7–P10 issues are only in the `Future` status and not competing with active work.
5. **Adjust** priorities if circumstances have changed since issue creation (for example: a P8 feature just became a P5 due to customer escalation).
6. **Record** any priority changes in the issue comments.
- [ ] All P1–P2 issues are being actively addressed or escalated
- [ ] P3–P6 issues are prioritized relative to each other
- [ ] P7–P10 issues are in `Future` status
- [ ] Priority changes are documented

**IF a P7–P10 issue suddenly needs to be worked, THEN update its priority, move it to `Inbox`, and document the reason.**

---

### Phase 3: Enforce Priority During Execution

1. **When pulling work**, check the priority of available issues in the Inbox.
2. **Always pull higher-priority work first** (P1 before P2, P2 before P3, etc.).
3. **If a higher-priority issue arrives mid-sprint**, consider pausing lower-priority work to address it.
4. **Document interrupts** with a comment linking the interrupting issue to the paused work.
5. **Reconcile capacity** so that two or fewer issues are `In Progress` at any time.
- [ ] Work is pulled in priority order
- [ ] Higher-priority arrivals are documented
- [ ] WIP limits are respected

**IF a high-priority issue arrives, THEN discuss with EM whether current work should be paused or if it can wait for the next pull.**

---

## Common Mistakes & Fixes

| Common Mistake | Fix |
| :-- | :-- |
| Assigning P1 to minor issues | Use P1 only for system outages or total feature unavailability. Use P3 for impactful but operational issues. |
| Using P1–P10 inconsistently across the team | Refer to this playbook during issue intake. Document reasoning in issue comments when in doubt. |
| P7–P10 issues are pulled into active work unintentionally | Move P7–P10 items to `Future` status. Only move to `Inbox` when Project Manager explicitly prioritizes them. |
| Priority is set but never reviewed | Review priorities during sprint planning (Phase 2). Adjust if circumstances change. |
| All live issues are P1 or P2 | Use P3–P6 for operational issues. Reserve P1–P2 only for active outages or critical emergencies. |
| Confusion about when P3 vs P4 applies | P3 = major business/customer impact or immediate risk. P4 = clear impact but not emergency. Discuss with PM if unsure. |
| Priority is changed retroactively after work starts | Assign priority carefully at creation. Changes are OK but should be documented and re-communicated. |
| Future work (P7–P10) mixes with live work in the sprint | Apply strict WIP limits to live work. Do not pull P7–P10 unless explicitly approved by Project Manager. |

---

## Success Criteria

- [ ] All issues have a `Priority` value (P1–P10)
- [ ] P1–P2 issues are being addressed immediately or escalated
- [ ] P3–P6 issues are ordered and executed in priority sequence
- [ ] P7–P10 issues remain in `Future` status until explicitly promoted by Project Manager
- [ ] Priority reasoning is documented in issue comments when assignment is non-obvious
- [ ] Team consistently uses the same definitions and priority groups
- [ ] Priorities are reviewed during sprint planning and updated when circumstances change
- [ ] WIP limits are respected (live work only, no competing future work)

---

## Storage & Access

Store this playbook in the team playbook library where the entire team can access it during issue creation, sprint planning, and execution.

**Always Open Policy:** Keep this playbook visible during:
- Issue intake and creation
- Sprint planning and backlog refinement
- Priority discussions or escalations
- Work execution (when prioritizing what to pull)

---

## Next review date
2026-11-11
