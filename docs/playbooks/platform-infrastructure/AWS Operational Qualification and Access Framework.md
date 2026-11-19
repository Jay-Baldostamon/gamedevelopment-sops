# AWS Operational Qualification and Access Framework Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | AWS Operational Qualification and Access Framework |
| Purpose | Define a repeatable process to separate engineering career level, AWS operational qualification, and granted AWS access so production authority is approved by competence, business need, and least privilege. |
| Owner | Head of Engineering |
| Last Updated | 2026-07-16 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] Confirm the candidate's current engineering career level is documented in HRIS or the career ladder tracker.
- [ ] Confirm the requested AWS work scope is documented (application, environment, services, and required actions).
- [ ] Confirm the candidate completed required AWS/server administration training for the target qualification level.
- [ ] Confirm a practical assessment session is scheduled or completed with an authorized evaluator.
- [ ] Confirm the candidate has an individual company identity and required MFA enrollment.
- [ ] Confirm the candidate uses a company-approved endpoint that meets engineering security baseline controls.
- [ ] Confirm a named approver exists (Head of Engineering or delegated infrastructure owner).
- [ ] Confirm a review/expiry date is proposed for any AWS-A2+ authorization.
- [ ] IF the candidate has less than 12 months tenure, THEN document exception justification and supervision plan before approval.

---

## Step-by-Step Checklist
### Phase 1: Define role, risk, and requested scope
1. **Confirm** the candidate's career level and current role responsibilities.
2. **Review** the business need and map it to exact AWS tasks required.
3. **Select** the minimum access target (AWS-A0 to AWS-A4, or AWS-BG only for emergency governance).
4. **Enter** explicit scope details: account, environment, application, services, operations, and review date.

- [ ] Career level and role responsibility are recorded
- [ ] Access request includes explicit scope and business reason
- [ ] Requested level is least-privilege for the stated outcome

### Phase 2: Validate operational qualification
1. **Review** the candidate's completed training against qualification bands:
   - AWS-Q1: operational foundations
   - AWS-Q2: deployment operations
   - AWS-Q3: service administration
   - AWS-Q4: platform administration
2. **Validate** practical assessment evidence for the requested responsibility.
3. **Escalate** to a higher assessor when the requested scope includes cross-service or platform-wide impact.
4. **Apply** qualification outcomes without auto-granting access.

- [ ] Qualification level is assigned from assessment evidence
- [ ] Qualification and access are stored as separate records
- [ ] Escalation decision is documented when applicable

### Phase 3: Verify security and identity compliance
1. **Confirm** endpoint controls: EDR, disk encryption, patching, firewall, screen lock, and secure credential storage.
2. **Validate** identity controls: individual account, MFA, and role-assumption workflow.
3. **Review** credential handling restrictions with the candidate (no shared creds, no plaintext secrets, no repo/Slack leakage).
4. **Block** privileged access issuance until all mandatory controls pass.

- [ ] Endpoint baseline is compliant
- [ ] Identity baseline is compliant
- [ ] Credential policy acknowledgement is recorded

### Phase 4: Approve and grant scoped access
1. **Submit** the finalized request package to the authorized approver.
2. **Grant** only the approved AWS access level and only within approved scope.
3. **Record** authorization metadata: level, scope, approver, grant date, and review/expiry date.
4. **Supervise** initial production operations for new AWS-A2+ operators when risk warrants oversight.
5. **Apply** break-glass controls separately (strong MFA, immediate alerting, post-incident review) and prohibit routine use.

- [ ] Access is granted at minimum required level
- [ ] Authorization record is complete and auditable
- [ ] Break-glass path is documented and separately controlled

### Phase 5: Review, reduce, or revoke access
1. **Run** an initial review 30 to 90 days after new AWS-A2+ access is granted.
2. **Run** quarterly reviews for all privileged access.
3. **Reduce** access when scope is broader than current need.
4. **Revoke** access on role change, endpoint noncompliance, suspected compromise, policy breach, or separation.
5. **Retain** qualification status independently unless qualification suspension/expiry criteria are met.
6. **Escalate** incidents requiring emergency privilege to post-incident governance review.

- [ ] Initial review completed for new privileged operators
- [ ] Quarterly review cadence is active
- [ ] Revocation triggers are enforced without delay

Decision rules:
- IF qualification exceeds current business need, THEN grant lower access than qualification.
- IF no operational need exists, THEN set authorization to AWS-A0 or remove direct AWS access.
- IF break-glass access is used, THEN create an incident record and perform post-use control review.

---

## Common Mistakes & Fixes
| Common Mistake | Fix |
| --- | --- |
| Granting production access because of senior title alone | Require qualification evidence, explicit business need, and scoped approval before granting access. |
| Treating qualification as automatic authorization | Maintain separate fields for qualification and authorization, and approve access independently. |
| Requesting "AWS access" without scope details | Reject request until account, environment, application, services, operations, and review date are specified. |
| Keeping standing admin privileges after responsibility changes | Run immediate access reduction/revocation on role or scope changes. |
| Using shared or unmanaged credentials for privileged actions | Enforce individual identity, MFA, temporary credentials, and no shared administrator accounts. |
| Using break-glass paths for routine operations | Restrict break-glass to exceptional incidents, require alerting, and complete post-incident review. |

## Success Criteria
- [ ] Every AWS access grant records level, scope, approver, and review date.
- [ ] Qualification level is documented separately from authorization level for each operator.
- [ ] All AWS-A2+ operators pass endpoint and identity compliance checks before grant.
- [ ] Initial (30-90 day) and quarterly access reviews are completed on schedule.
- [ ] Access is reduced or revoked immediately when operational need or compliance status changes.
- [ ] At least one backup qualified operator and one platform escalation path exist for each production application.

## Storage & Access
- Store this playbook in: `docs/playbooks/platform-infrastructure/AWS Operational Qualification and Access Framework.md`
- Required access: Head of Engineering, infrastructure owners, engineering managers, and authorized security/compliance reviewers.
- Always Open policy: Keep this playbook visible during access request review, approval, and quarterly audit workflows to prevent ad-hoc exceptions.

## Next review date
2026-10-14
