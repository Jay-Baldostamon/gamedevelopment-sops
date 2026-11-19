# 💸 Engineering Spend Control Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Engineering Spend Control Playbook |
| Purpose | Standardize how Engineering requests, reviews, approves, and validates non-routine spend so purchases are tied to measurable outcomes, proportionate to need, and accountable after approval. |
| Owner | Alan Baldelobar |
| Last Updated | 2026-07-14 |
| Review Cycle | Every 90 days |

> **Related playbook:** For approval routing, decision logging, expiry scheduling, and resubmission handling, follow the [Engineering Approval Escalation Playbook](./Engineering%20Approval%20Escalation.md). Phase 3 of this playbook delegates to it.

## Prerequisites
- [ ] Department budget guardrails and approval thresholds are documented and accessible
- [ ] Requester has identified whether the spend is one-time, recurring, or contractual
- [ ] Requester can provide baseline evidence (cost, usage, incident, delivery, or risk data)
- [ ] Procurement and legal/security review paths are known for higher-risk purchases
- [ ] Named owner is assigned for the asset or subscription after approval
- [ ] Renewal and cancellation mechanism is known for recurring spend

## Step-by-Step Checklist
### Phase 1: Intake and Classification
1. **Capture** the request details: item or service, vendor, users, one-time cost, recurring cost, contract term, and requested decision date.
2. **Classify** the request into a tier before review:
   - Tier 0: routine and pre-approved
   - Tier 1: small and reversible
   - Tier 2: material or recurring
   - Tier 3: strategic, high-cost, or difficult to reverse
3. **Confirm** whether the requester is also the primary beneficiary.
4. **Assign** the review owner and decision deadline.
- [ ] Tier is recorded
- [ ] Cost model is recorded
- [ ] Review owner is assigned
- [ ] Decision date is set

**IF the requester is the primary beneficiary, THEN require an independent reviewer before approval.**

---

### Phase 2: Run the Engineering Investment Review
1. **Define** the problem in observable terms (bottleneck, risk, or opportunity) and document who is affected.
2. **Specify** expected outcomes with measurable targets (speed, reliability, cost, quality, compliance, or delivery impact).
3. **Validate** that the proposed option is the smallest sufficient solution for the current need.
4. **Compare** at least one realistic alternative (existing tool, workflow change, cloud/rental, smaller scope, or delay).
5. **Pilot** uncertain assumptions when practical with a time box, spend cap, and exit criteria.
6. **Calculate** total economics, including implementation, maintenance, support, and exit costs.
7. **Assign** an accountable owner for implementation, access control, usage tracking, and lifecycle decisions.
8. **Collect** independent review confirmation for proportionality, alternatives, and financial plausibility.
- [ ] Problem statement has evidence
- [ ] Outcomes are measurable
- [ ] Alternatives are documented
- [ ] Total economics are documented
- [ ] Ownership is assigned
- [ ] Independent review is complete when required

**IF assumptions cannot be validated up front, THEN approve only as a limited pilot with explicit stop conditions.**

---

### Phase 3: Approvals and Decision Logging

> **Follow the [Engineering Approval Escalation Playbook](./Engineering%20Approval%20Escalation.md)** for all intake validation, approval routing, decision recording, communication, and close-out steps.

The escalation playbook handles: written justification requirements, approver assignment, the five valid decision outcomes, expiry scheduling, and resubmission criteria.

**Spend-specific routing rules for this playbook:**
- Tier 1 requests: team lead or designated budget delegate
- Tier 2 requests: budget owner plus a scheduled review checkpoint date
- Tier 3 requests: budget owner plus finance or executive review; add security/legal review when applicable

- [ ] Escalation playbook steps are followed
- [ ] Spend tier is passed to the escalation playbook as the routing input
- [ ] Decision is recorded in the procurement tracker per the escalation playbook

**IF a request is deferred or rejected, THEN document resubmission criteria per the Engineering Approval Escalation Playbook before closing the request.**

---

### Phase 4: Purchase Execution and Onboarding
1. **Execute** procurement only after approved decision is logged.
2. **Provision** access to named users and enforce least-privilege controls.
3. **Store** invoice, contract, warranty/support terms, and ownership metadata in the procurement record.
4. **Schedule** post-purchase review date at 30, 90, or 180 days based on risk and spend level.
5. **Set** renewal reminders for recurring expenses at least 30 days before renewal date.
- [ ] Purchase is linked to an approved decision
- [ ] Access controls are configured
- [ ] Contract and billing records are stored
- [ ] Post-purchase review is scheduled
- [ ] Renewal reminders are set

**IF an emergency purchase bypasses pre-approval, THEN complete retroactive review and decision logging within 3 business days.**

---

### Phase 5: Post-Purchase Validation and Subscription Hygiene
1. **Review** whether expected outcomes were achieved using the original success criteria.
2. **Measure** actual usage against forecasted usage.
3. **Compare** actual total cost versus estimated total cost.
4. **Decide** to retain, expand, reduce, reassign, or cancel based on evidence.
5. **Audit** recurring subscriptions quarterly for owner, active usage, seat fit, overlap, and cancellation readiness.
- [ ] Outcome achievement is assessed
- [ ] Usage is measured
- [ ] Cost variance is documented
- [ ] Lifecycle decision is recorded
- [ ] Quarterly subscription audit is complete

**IF a recurring tool has no active owner or meaningful usage, THEN cancel or reassign it before renewal.**

## Common Mistakes & Fixes
| Common Mistake | Fix |
| :-- | :-- |
| Purchase is justified only by enthusiasm or trend interest | Require measurable problem statement and expected outcomes before any approval |
| Requester approves their own high-benefit purchase | Enforce independent review whenever requester is primary beneficiary |
| Team compares only sticker price | Include implementation, support, maintenance, and exit costs in total economics |
| Large commitment is approved without a pilot | Use limited pilot with a spend cap and explicit go/no-go criteria |
| Approved purchase has no accountable owner | Assign owner before procurement and track responsibilities in the decision log |
| Recurring subscriptions auto-renew without review | Set renewal reminders and run quarterly owner-and-usage audits |
| Emergency purchases become permanent by default | Require retroactive review and route any continued spend through normal approval flow |

## Success Criteria
- [ ] Every non-routine spend request is tiered and decision-logged
- [ ] Every material request includes measurable outcomes and total economics
- [ ] Independent review is documented for conflict-sensitive requests
- [ ] Every approved purchase has a named owner and scheduled review date
- [ ] Recurring spend has renewal reminders and quarterly usage/ownership audits
- [ ] Deferred or rejected requests include explicit resubmission requirements

## Storage & Access
Store this playbook in `docs/playbooks/governance/` and link it from the playbook guide so Engineering leads, budget owners, and reviewers can execute the process consistently.

Always Open Policy: Keep this playbook visible while reviewing, approving, or renewing non-routine engineering spend to prevent ad hoc approvals and undocumented exceptions.

## Next review date
2026-10-12
