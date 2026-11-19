# ✅ Engineering Approval Escalation Playbook

## DEFINE

| Field | Value |
| --- | --- |
| Playbook Name | Engineering Approval Escalation Playbook |
| Purpose | Standardize the approval intake, routing, decision logging, and resubmission process for Engineering spend exceptions, budget exceptions, and promotion decision disputes so decisions are explicit, documented, and traceable regardless of the originating request type. |
| Owner | Alan Baldelobar |
| Last Updated | 2026-07-20 |
| Review Cycle | Every 90 days |

> **Referenced by:**
> - [Engineering Spend Control Playbook](./Engineering%20Spend%20Control.md) — general non-routine spend
> - [AI Budget and Credit Control Playbook](./AI%20Budget%20and%20Credit%20Control.md) — Copilot AI credit budget exceptions
> - [Engineer Promotion Process Playbook](../people-operations/Engineer%20Promotion%20Process.md) — promotion criteria dispute appeals

## Prerequisites

- [ ] The request type and originating playbook are identified before escalation begins
- [ ] The requester has prepared a written justification (see Phase 1)
- [ ] The direct supervisor or budget owner for the request is reachable
- [ ] A procurement tracker or decision log exists where the outcome will be recorded
- [ ] If the requester is also the primary beneficiary, an independent reviewer is available

## Step-by-Step Checklist

### Phase 1: Intake and Validate the Justification

1. **Receive** the request in writing — verbal requests are not valid input for this process.
2. **Confirm** the request includes:
   - What is being requested (tool, subscription, budget increase, exception)
   - Who is requesting it and who will benefit
   - Why it is needed now (specific business reason)
   - How long the increase or exception is needed (duration or event boundary)
   - What the requester will do when the exception expires
3. **Check** the request against the approved justification categories defined in the originating playbook:
   - For general spend: refer to the tier classification in the Engineering Spend Control Playbook
   - For AI budget increases: refer to the approved categories in the AI Budget and Credit Control Playbook
   - For promotion criteria disputes: the justification must include the promotion level being disputed, the supervisor's stated reason for "does not meet criteria," and the compiled documentary proof that the engineer meets the criteria — the standard spend fields (duration, expiry plan) do not apply
4. **Reject** at intake and return to requester if the justification is missing any required field — do not route an incomplete request for approval.

- [ ] Request is in writing
- [ ] All required justification fields are present
- [ ] Request maps to an approved category in the originating playbook

**IF the requester is the primary beneficiary of the request, THEN require an independent reviewer at the approval step before any decision is recorded.**

**IF the request does not map to an approved category, THEN return it to the requester with a written note explaining which category was missing and what evidence would be needed for resubmission.**

---

### Phase 2: Route to the Correct Approver

1. **Identify** the approval tier based on the originating playbook:

   | Request Type | Approver |
   | --- | --- |
   | General spend — Tier 1 (small, reversible) | Team lead or designated budget delegate |
   | General spend — Tier 2 (material or recurring) | Budget owner, with a review checkpoint date |
   | General spend — Tier 3 (strategic, high-cost, or hard to reverse) | Budget owner plus finance or executive review; add security/legal review when applicable |
   | AI budget — temporary increase | Direct supervisor of the requesting user |
   | AI budget — permanent limit change | Engineering Lead (handled during the 3-month review cycle) |
   | Promotion criteria dispute | Direct supervisor receives and forwards compiled proof to their own superior (one level up); the layer-above reviewer makes the final decision — the direct superior may not be the sole decision-maker on disputes |

2. **Assign** the approver before forwarding the request — do not send to multiple approvers simultaneously without establishing a clear primary decision owner.
3. **Set** a decision deadline and communicate it to the approver and requester.
4. **Escalate** to the Engineering Lead if the assigned approver is unavailable before the decision deadline.

- [ ] Approver is identified and assigned
- [ ] Decision deadline is set and communicated
- [ ] Escalation path is clear if the approver is unavailable

**IF no approver can be reached before the deadline, THEN escalate to the Engineering Lead and document the escalation reason.**

**IF the request type is a promotion criteria dispute, THEN the direct superior is required to forward the compiled proof to their own superior — they cannot act as the sole decision-maker for the dispute.**

**IF the layer-above reviewer for a promotion criteria dispute has not responded within one week, THEN the disputing engineer may contact the reviewer directly.**

**IF the layer-above reviewer's decision on a promotion criteria dispute is unfavorable, THEN it is final — there is no further appeal level for promotion criteria disputes.**

---

### Phase 3: Record the Decision

1. **Collect** the approver's explicit decision — one of the following:

   | Outcome | Meaning | Required Follow-up |
   | --- | --- | --- |
   | Approved | Full approval within the stated scope | Activate; record owner and review date |
   | Approved as limited pilot | Approval for a time-boxed or spend-capped trial only | Set stop conditions and go/no-go date |
   | Approved with conditions | Approval contingent on specific constraints being met | Document each condition and its deadline |
   | Deferred | Decision postponed pending additional information | Record what information is required and by when |
   | Rejected | Request denied | Record the specific reason; document resubmission criteria |

2. **Document** the decision immediately, including:
   - Date of decision
   - Decision outcome (from the table above)
   - Name of approver
   - Any conditions, constraints, expiry dates, or stop conditions
   - Resubmission requirements if deferred or rejected
3. **Publish** the recorded decision to the team's procurement tracker or decision log.
4. **Set** an expiry reminder or review checkpoint for any conditional or time-limited approval.

- [ ] Decision outcome is one of the five valid states
- [ ] Decision is dated and attributed to a named approver
- [ ] Conditions, expiry dates, or resubmission criteria are documented
- [ ] Procurement tracker or decision log is updated
- [ ] Expiry reminder or checkpoint is scheduled if applicable

**IF the decision is Deferred, THEN record the specific evidence or information required for resubmission so the requester is not blocked by ambiguity.**

**IF the decision is Approved with conditions or Approved as limited pilot, THEN set a calendar reminder to review the conditions or stop conditions before the expiry date arrives.**

---

### Phase 4: Communicate and Activate

1. **Notify** the requester of the decision outcome in writing.
2. **Include** in the notification:
   - The decision outcome
   - Any conditions, expiry dates, or constraints
   - What the requester must do when the approval expires (for temporary approvals)
   - Resubmission criteria if rejected or deferred
3. **Activate** the approved change following the steps in the originating playbook:
   - For general spend: proceed to purchase execution per the Engineering Spend Control Playbook
   - For AI budget increases: set the temporary limit in GitHub Budgets and Alerts per the AI Budget and Credit Control Playbook
4. **Do not activate** any change before the decision is recorded in the tracker.

- [ ] Requester notified in writing
- [ ] Conditions and expiry communicated clearly
- [ ] Change activated only after decision is logged
- [ ] Originating playbook's activation steps are followed

---

### Phase 5: Close Out the Approval

1. **Monitor** the expiry date or review checkpoint for any conditional or temporary approval.
2. **Remove** the temporary exception when the qualifying condition ends or the expiry date arrives — do not allow temporary approvals to become permanent by default.
3. **Confirm** removal or expiry with the requester in writing.
4. **Return** to the originating playbook for any post-approval validation steps (post-purchase review, 3-month budget review, etc.).

- [ ] Expiry or review checkpoint reached and acted on
- [ ] Temporary exception removed or converted through a new approval cycle
- [ ] Requester notified of close-out
- [ ] Post-approval steps in the originating playbook are completed

**IF a temporary approval is not removed by its expiry date, THEN treat continued use above the baseline as an unauthorised exception requiring immediate retroactive review.**

## Common Mistakes & Fixes

| Common Mistake | Fix |
| --- | --- |
| Routing a verbal or incomplete justification for approval | Return at intake; require all written justification fields before routing |
| Allowing the requester to approve their own high-benefit request | Enforce independent review whenever requester is the primary beneficiary |
| Recording an ambiguous decision outcome ("looks okay", "probably fine") | Use only the five valid outcomes from Phase 3; ambiguous decisions are not logged |
| Sending a request to multiple approvers without a primary decision owner | Assign exactly one primary approver before routing |
| Approving a temporary exception without an expiry date | Always set an explicit expiry date or review checkpoint before activating |
| Letting a temporary approval expire unnoticed | Set a calendar reminder at approval time; do not rely on memory |
| Failing to document resubmission criteria for rejected or deferred requests | Write the specific evidence or gap that blocked approval so the requester can resubmit with the right information |

## Success Criteria

- [ ] Every escalated request has a written justification on file before routing
- [ ] Every decision is attributed to a named approver with a recorded date
- [ ] Every decision outcome uses one of the five valid states
- [ ] Every conditional or time-limited approval has an expiry date and a scheduled reminder
- [ ] Every rejected or deferred request has documented resubmission criteria
- [ ] No temporary exception has been allowed to persist beyond its expiry without a new approval cycle
- [ ] The procurement tracker or decision log is current and auditable

## Storage & Access

- **Location:** `docs/playbooks/governance/Engineering Approval Escalation.md`
- **Who needs access:** Engineering Lead, all direct supervisors, budget owners, finance reviewers, and any team member who may initiate or approve a spend or budget exception
- **Always Open policy:** Keep this playbook open during any approval conversation to ensure the correct routing, documentation, and outcome recording are followed

## Next review date

2026-10-20
