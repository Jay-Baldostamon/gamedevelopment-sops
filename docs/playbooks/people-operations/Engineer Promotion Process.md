# 📝 Engineer Promotion Process Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | "Level Up: Engineer Promotion & Certification Process" |
| Purpose | To standardize the process by which engineers request, qualify for, and are promoted to the next level in their career ladder, ensuring consistency, transparency, and traceability across all promotions. |
| Owner | Alan Baldelobar |
| Last Updated | 2026-04-18 |
| Review Cycle | Every 90 days |

## Prerequisites
Before starting, ensure:

- [ ] The engineer has been performing work at their current level for **at least 6 months**, as defined by the [Technical Specification of Role](?tab=t.rbxp4c5d7xsz)  
- [ ] The engineer has access to the promotion criteria checklist for their target level  
- [ ] The engineer's direct superior has access to the Technical Specification of Role document, the promotion criteria checklist, and a "Promotion Documents" folder in their work Google Drive  
- [ ] The engineer has a Slack account and knows who their direct superior is  
- [ ] The [Certified Queue List](?tab=t.izmxprzclep9) is accessible and up to date

---

> **Related playbook:** For dispute routing, decision recording, and escalation rules when a promotion criteria assessment is appealed, follow the [Engineering Approval Escalation Playbook](../governance/Engineering%20Approval%20Escalation.md). Phase 2 of this playbook delegates the appeal process to it.

## Step-by-Step Checklist
### Phase 1: Declaration of Intent

1. **The engineer must have completed at least 6 months** of work consistent with their current level's Technical Specification of Role.  
     
   - **Note:** Time alone is not sufficient — the work performed must align with the level's defined responsibilities and expectations.

   

2. **The engineer declares their promotion intent** by sending a **direct Slack message** to their direct superior (the person they report to).  
     
   - The message should state: the target promotion level, and that they wish to begin the promotion process.  
   - **IF** the intent was initially communicated during a meeting, **THEN** the engineer must still send a formal Slack DM to their direct superior to officially initiate the process.  
   - **Tip:** Keep the message concise — e.g., *"I'd like to formally begin the promotion process for L2 Mid-Level Engineer."*

   

3. **The direct superior documents the request:**  
     
   - Take a **screenshot of the Slack message** on the day of the request.  
   - Save it to their **"Promotion Documents"** folder in their work Google Drive.

---

### Phase 2: Criteria Evaluation

4. **Within the same week**, the direct superior reviews the promotion criteria checklist for the requested target level against the applicant's demonstrated work.  
     
   - Reference: [Technical Specification of Role — Promotion Criteria](?tab=t.rbxp4c5d7xsz)  
       
   - **IF** the applicant **meets** the promotion criteria → proceed to Phase 3\.  
       
   - **IF** the applicant **does not meet** the promotion criteria:  
       
     - The direct superior identifies the gaps and proposes a senior staff member for targeted training (refer to **Training SOP**).  
     - Communicate the gaps clearly to the applicant with specific areas for improvement.  
     - **The process stops here.** The applicant may re-initiate after addressing the identified gaps (no cooldown for initial criteria rejection — cooldown only applies to vetting period failures).

#### Appeal / Dispute Process

5. **IF** the applicant disagrees with the "does not meet criteria" decision, **THEN** they may appeal by following the [Engineering Approval Escalation Playbook](../governance/Engineering%20Approval%20Escalation.md) using the **"Promotion criteria dispute"** routing type:
   - The applicant compiles documented proof that they meet the promotion criteria.
   - The applicant submits the compiled proof to their direct superior.
   - The direct superior is **required** to forward the proof to their own superior (one level up) — they cannot be the sole decision-maker on the dispute.
   - The layer-above reviewer's decision is **final**.

---

### Phase 3: Position Availability Check

6. **Within one week**, the direct superior responds to the applicant regarding whether the company has a position available at the target level **within the next 90 days**.  
     
   - **IF** the direct superior has no open positions within their own area of responsibility, **THEN** they may:  
     - Ask horizontally (co-leaders at the same level) for open slots  
     - Escalate to their own direct superior for open slots  
     - This escalation continues upward recursively until a position is found or exhausted

   

7. **Communicate the result to the promotion applicant.**  
     
   - **IF** a position is available → proceed to Phase 4\.  
   - **IF** no position is available → inform the applicant. The applicant **may still choose** to proceed with the 90-day vetting period and certification process at their own discretion. Proceeding without an open position means the applicant will be certified and queued, but will not receive a role change or salary increase until a position opens.

---

### Phase 4: 90-Day Vetting Period

8. **The applicant enters a 90-day vetting period** during which they must consistently perform at both:  
     
   - The **promotion criteria** for the target level, AND  
       
   - The **Technical Specification of Role** skills for their current level  
       
   - **Purpose:** To measure consistency of performance at the target level, not just a one-time demonstration.

   

9. **The direct superior documents the start date** of the vetting period in the **"Promotion Documents"** folder.  
     
10. **Mandatory check-ins occur at Day 30, Day 60, and Day 90\.**  
      
    - The **direct superior** conducts and evaluates each check-in.  
    - Each check-in result (pass/needs improvement/fail) is documented and saved to the **"Promotion Documents"** folder.  
    - **IF** performance issues are identified at a check-in, **THEN** the direct superior communicates specific areas where consistency is lacking so the applicant can course-correct before the next check-in.

    

11. **At the Day 90 check-in, a final pass/fail determination is made.**  
      
    - **IF** the applicant **passes** → proceed to Phase 5\.  
    - **IF** the applicant **does not pass**:  
      - The direct superior communicates specific areas where consistency was lacking.  
      - Refer to the **Training SOP** for remediation.  
      - A **1-month cooldown period** applies before the applicant may re-initiate the promotion process from Phase 1\.

---

### Phase 5: Internal Certification

12. **Within one week of passing the vetting period**, the company issues an **internal certification** to the applicant.  
      
    - The certification attests to all capabilities of the **requested promotion level and all lower levels** in the same career ladder.  
    - Example: An L2 certification covers L2 and L1 capabilities; an L3 certification covers L3, L2, and L1.  
    - The certification is **dated and signed**.  
    - The **Department Head holds all original certifications.**  
    - The **promotion applicant receives a dated and signed copy** within one week of passing.  
    - **Note:** Any future certification-related requests must go through the direct superior → Department Head chain, with a **1-month cooling period** between requests.

---

### Phase 6: Queue Placement

13. **The certified staff member is placed at the end of the [Certified Queue List](?tab=t.izmxprzclep9)** for their certified level of workload.  
      
    - The queue is **public** and ordered by **certification date** (first certified \= first in line).  
    - **IF** multiple staff are certified on the same date, **THEN** order is determined by vetting period start date (earlier start \= higher priority).

#### Queue Behavior Rules

14. **When a position opens**, the staff member at the front of the queue is **asked if they still want the promotion.**  
      
    - **IF yes** → proceed to Phase 7\.  
    - **IF no** → the staff member moves **one position down** in the queue. The next person in line is asked.

    

15. **IF** a certified staff member wishes to **hold off on future promotions** (e.g., personal/family reasons):  
      
    - They declare this to their direct superior.  
    - They are moved to a **backup queue** and will not be offered positions.  
    - When they are ready to re-enter, they declare their intent to their direct superior.  
    - A **1-week cooldown** applies before they are placed back into the active queue (at the position they left, or the end if the queue has shifted past them).

---

### Phase 7: Position Assignment & Onboarding

16. **Within one week**, initiate the following when a position is available and the staff member is at the front of the queue:  
      
    - [ ] **Orientation** on new job responsibilities for the target level  
    - [ ] **Salary increase request** submitted to:  
          - **HR** (if before September 1, 2026\)  
          - **Department Head** (if on or after September 1, 2026\)  
    - [ ] **Responsibility start date** is communicated and documented

---

## Common Mistakes & Fixes
| Mistake | Fix |
| :---- | :---- |
| Declaring intent verbally in a meeting without a Slack DM | Always formalize with a direct Slack message to your direct superior — verbal declarations do not initiate the process |
| Applying before 6 months of demonstrated work at current level | Ensure 6 months of level-appropriate work is completed first — time in seat alone is insufficient |
| Direct superior not responding within one week on position availability | Escalate to the direct superior's manager if no response is received within 7 business days |
| Skipping the vetting period because the applicant "clearly qualifies" | The 90-day vetting period is mandatory — it measures consistency, not capability at a single point in time |
| Assuming certification equals immediate promotion | Certification places you in the queue — promotion only occurs when a position is available and you are at the front of the list |
| Not documenting gaps when an applicant does not meet criteria | Always provide specific, written feedback referencing the promotion criteria checklist — vague rejections are not actionable |
| Sending salary increase to wrong party | Check the date: HR before Sept 1, 2026; Department Head on or after Sept 1, 2026 |
| Direct superior not forwarding appeal proof to their superior | Forwarding is mandatory — the direct superior cannot be the sole decision-maker on disputes |
| Not documenting check-in results during the vetting period | All three check-ins (Day 30, 60, 90\) must be documented in the "Promotion Documents" folder — undocumented evaluations are not valid |
| Re-applying during a cooldown period | Vetting failure \= 1-month cooldown; backup queue re-entry \= 1-week cooldown. Applications submitted during cooldown are not processed |
| Attempting to skip a level (e.g., L1 → L3) | Promotions must be sequential — no level skipping is permitted |
| Not screenshotting the original Slack declaration | Direct superiors must capture and file the screenshot on the day of request — this is the formal record of process initiation |

---

## Success Criteria
This playbook is complete when:

- [ ] The engineer has formally declared intent via Slack DM  
- [ ] The direct superior has screenshotted and filed the request  
- [ ] The direct superior has evaluated the applicant against the promotion criteria checklist within the same week  
- [ ] Any appeals have been resolved through the layer-above review process  
- [ ] Position availability has been communicated within one week  
- [ ] The 90-day vetting period has been completed with documented check-ins at Day 30, 60, and 90  
- [ ] Internal certification has been issued and a signed copy provided to the applicant within one week  
- [ ] The engineer has been placed in the public Certified Queue List  
- [ ] Upon position availability: orientation completed, salary request submitted to the correct party, and start date communicated — all within one week

---

*Next review date: 2026-07-17*

## Storage & Access
Store this playbook in `docs/playbooks` within the engineering repository.
Access is required for all engineers, team leads, and operations stakeholders involved in execution.
Always Open policy: keep this playbook visible while running the workflow.

## Next review date
2026-09-24

## Documentation Requirements
| Artifact | Owner | Storage Location |
| :---- | :---- | :---- |
| Screenshot of Slack declaration message (day of request) | Direct Superior | "Promotion Documents" folder in work Google Drive |
| Vetting period start date | Direct Superior | "Promotion Documents" folder in work Google Drive |
| Day 30 check-in results | Direct Superior | "Promotion Documents" folder in work Google Drive |
| Day 60 check-in results | Direct Superior | "Promotion Documents" folder in work Google Drive |
| Day 90 check-in results | Direct Superior | "Promotion Documents" folder in work Google Drive |
| Original signed certification | Department Head | Department Head's records |
| Dated & signed certification copy | Promotion Applicant | Provided within 1 week of passing |
| Queue placement record | Direct Superior | [Public Certified Queue List](?tab=t.izmxprzclep9) |

---

## Quick Reference: Process Flow
| Step | Action | Owner | SLA |
| :---- | :---- | :---- | :---- |
| 1 | Complete 6 months at current level | Engineer | — |
| 2 | Declare intent via Slack DM | Engineer | — |
| 3 | Screenshot and file the request | Direct Superior | Same day |
| 4 | Review promotion criteria checklist | Direct Superior | Same week |
| 5 | Appeal (if criteria not met and disputed) | Engineer → Direct Superior → Layer Above | 1 week for layer-above response |
| 6 | Respond on position availability | Direct Superior | 1 week |
| 7 | Communicate result to applicant | Direct Superior | Same day as decision |
| 8 | 90-day vetting period begins | Engineer \+ Direct Superior | 90 days |
| 9–10 | Check-ins at Day 30, 60, 90 | Direct Superior | On schedule |
| 11 | Final pass/fail determination | Direct Superior | Day 90 |
| 12 | Issue internal certification | Department Head \+ Direct Superior | 1 week after passing |
| 13 | Place in certified queue | Direct Superior | Same day as certification |
| 14–15 | Queue management (accept/decline/hold) | Engineer \+ Direct Superior | As positions open |
| 16 | Orientation \+ salary request \+ start date | Direct Superior \+ HR/Dept Head | 1 week |

---

## Cooldown Periods Summary
| Scenario | Cooldown | Re-entry Point |
| :---- | :---- | :---- |
| Vetting period failure (Day 90 fail) | **1 month** | Re-initiate from Phase 1 (Declaration of Intent) |
| Declining a position offer in the queue | **None** | Move 1 position down in the queue |
| Opting into backup queue (hold on promotions) | **1 week** after declaring re-entry | Return to active queue |
| Certification-related requests to Department Head | **1 month** between requests | Via direct superior → Department Head chain |

---

## Standards & Governance
- **Promotions must be sequential** — engineers cannot skip levels (e.g., L1 → L3 is not permitted).  
- **The 90-day vetting period cannot be shortened or waived**, regardless of perceived readiness.  
- **All promotion decisions must reference the published promotion criteria checklist** — subjective assessments without checklist evidence are not valid.  
- **Certified queue position is non-transferable** — an engineer's place in the queue cannot be given to another staff member.  
- **Career track switches** (e.g., IC → EM) are a separate process and are not covered by this playbook.  
- **The Certified Queue List is public** — all staff may view current queue positions at any time.  
- **Direct superiors are responsible for maintaining all promotion documentation** in their "Promotion Documents" Google Drive folder.  
- **The Department Head is the custodian of all original certifications.**

---
