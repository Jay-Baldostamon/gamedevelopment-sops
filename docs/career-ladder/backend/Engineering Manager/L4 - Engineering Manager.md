## Engineering Manager (L4-EM) — Technical Specification of Role

### 1\. Delivery & Execution

**Scorecard Accountability** The L4-EM holds **direct, personal accountability** for the team's operational output metrics. These are not aspirational targets — they are standing performance obligations measured and reported at defined cadences:

| Metric | Target | Measurement Cadence | Accountability |
| :---- | :---- | :---- | :---- |
| **Deployment frequency** | ≥75 production deployments / month | Weekly trending, monthly reporting | L4-EM owns the number. Deviation triggers root-cause analysis authored by the EM — not the individual contributors. |
| **Innovation / Maintenance ratio** | \>80% Innovation / \<20% Maintenance | Per-sprint classification of completed tickets | L4-EM is responsible for backlog composition. If maintenance work (bug fixes, dependency updates, tech debt) exceeds 20%, the EM must identify the systemic cause and present a remediation plan. |
| **Mean Time to Recovery (MTTR)** | Defined per service tier (P1: \<1hr, P2: \<4hr) | Per-incident measurement | L4-EM ensures on-call rotations, runbooks, and escalation paths are functioning. MTTR degradation is an EM process failure, not an IC skill failure. |
| **Rollback rate** | Trending toward 0% | Per-deployment tracking | Elevated rollback rates signal gaps in the testing/review pipeline that the EM must escalate to the L4-IC/L3 for CI/CD hardening. |

When any metric misses target, the EM presents a **written variance analysis** to the CTO: what happened, which systemic factor caused it (capacity, process, tooling, skill gap), and a corrective action plan with a defined recovery timeline. The EM does not attribute metric misses to individual developers — metric ownership is non-delegable.

**Sprint & Capacity Planning** The L4-EM owns the **operational mechanics of the Agile execution framework** — Jira/Linear board management, sprint cadence, and resource allocation:

- **Load balancing via Project Units:** Maintains a real-time view of each engineer's active Project Unit allocation. Enforces equitable distribution within level-appropriate bands:


| Level | Target PU Range | Maximum Before Overload Review |
| :---- | :---- | :---- |
| L1 | 1–2 PU | 3 PU |
| L2 | 3–4 PU | 5 PU |
| L3 | 5–6 PU | 7 PU |


  If any engineer's allocation deviates significantly from their band (e.g., an L2 carrying 7 PU while another L2 carries 2 PU), the EM **rebalances immediately** — not at the next sprint boundary. Chronic imbalance is a leading indicator of burnout and is treated as an EM process failure.


- **Sprint planning rigor:**  
    
  - Backlog grooming occurs **before** sprint planning — not during. Tickets entering a sprint must have: defined acceptance criteria, estimated complexity (story points or t-shirt sizing calibrated to team velocity), and identified dependencies.  
  - Capacity is calculated based on **available engineering hours** (accounting for PTO, on-call rotations, meeting load, and mentorship obligations) — not headcount.  
  - The EM maintains a **rolling 3-sprint forward view** of planned work, enabling early detection of resource conflicts, dependency bottlenecks, and scope risks.


- **Burnout prevention protocol:** The EM monitors leading indicators — sustained overtime, declining PR quality, increased cycle time on previously routine tasks, disengagement in standups — and intervenes proactively. Intervention is not optional; it is a core EM responsibility.

**Technical Context Retention (Non-Executing)** The L4-EM does not write production code on the critical path. However, they must maintain **sufficient architectural fluency** to perform the following functions:

- **Estimate validation:** When an L2 estimates a webhook integration at 3 weeks, the EM has enough context to challenge the estimate constructively: *"The L4-IC shipped `@vanguard/webhook-consumer` last month with generic signature verification and retry logic. Have you evaluated whether this can be extended rather than building from scratch? If so, this should be a 3-day integration, not a 3-week build."*  
- **Dependency awareness:** Understands the Vanguard system map well enough to identify when a proposed change in one Project Unit will create integration risk for another — and routes the concern to the appropriate L3/L4-IC for architectural review.  
- **Technical debt triage:** Can distinguish between tech debt that is actively degrading delivery velocity (and therefore warrants immediate sprint allocation) vs. theoretical debt that can be safely deferred — preventing both over-investment and under-investment in maintenance work.  
- **PR awareness (not approval):** Reads high-impact PRs (schema changes, shared library updates, infrastructure modifications) for organizational context — not as a code reviewer, but to maintain situational awareness of what is changing in the system and how it affects team capacity and risk.

The EM's technical knowledge is a **management instrument**, not a delivery instrument. If the EM is routinely debugging code or pair-programming on feature work, they are operating below level and neglecting their primary responsibilities.

---

### 2\. People & Process

**1-on-1 Program (The "Maestro" Function)** The L4-EM conducts **structured, recurring 1-on-1s** with every direct report (L1, L2, and L3 engineers). This is the EM's highest-leverage people activity and is treated as **non-cancellable, non-delegable calendar time**:

- **Cadence:** Weekly for L1s (high-development phase). Biweekly for L2s and L3s (established performers). Increased to weekly during performance improvement plans, promotion preparation, or high-stress project phases.  
    
- **Structure (enforced):**

```
1-on-1 Agenda Framework
─────────────────────────────────────────
1. BLOCKERS (5 min)
   → "What is actively preventing you from making progress right now?"
   → EM commits to a resolution action and timeline before the meeting ends.

2. GROWTH & PROMOTION TRAJECTORY (10 min)
   → "What specific competency gap separates you from the next level?"
   → Review progress against the level-specific competency matrix.
   → Identify a concrete action item for the next cycle
     (e.g., "Lead the next sprint's architectural review" or
     "Author an ADR for the caching layer decision").

3. FEEDBACK (bidirectional) (5 min)
   → EM provides specific, evidence-based feedback on recent work.
   → EM explicitly solicits feedback on their own management:
     "What should I be doing differently to support you?"

4. WELLBEING & LOAD (5 min)
   → Assess workload sustainability, engagement level,
     and any non-work factors the report chooses to share.
```

- **Documentation:** The EM maintains private, running 1-on-1 notes for each report — tracking commitments made, promotion progress, recurring themes, and action items. These notes are the evidentiary basis for performance reviews, promotion cases, and (if necessary) performance improvement plans.

Status updates are **explicitly prohibited** as a 1-on-1 topic. Status is tracked asynchronously via Jira/Linear and standups. 1-on-1 time is reserved for growth, blockers, and human-level concerns.

**Performance Management & AI Adoption Monitoring** The L4-EM is responsible for diagnosing and addressing individual performance issues with precision:

- **AI tool adoption tracking:** Monitors the team's utilization of Copilot, Flicka, and other sanctioned AI tooling — not as a surveillance function, but as a **diagnostic signal**. When an engineer's output or velocity is below expectations, the EM differentiates between root causes:


| Symptom | Possible Root Cause A | Possible Root Cause B | EM Intervention |
| :---- | :---- | :---- | :---- |
| L1 producing low-quality code despite AI tooling | Fundamental knowledge gap — accepting AI output without comprehension | Insufficient onboarding to codebase conventions and patterns | Pair with L2/L3 mentor for fundamentals reinforcement; increase PR review depth |
| L2 delivering slowly despite available scaffolding tools | Poor AI tool utilization — manually writing boilerplate that Copilot/Flicka can generate | Overloaded with Project Units; context-switching cost exceeding productivity gains | If tooling: conduct AI workflow coaching session. If load: rebalance PU allocation |
| L3 code requiring unusual rework volume | Potential burnout or disengagement — declining attention to edge cases | Architectural ambiguity — insufficient design doc clarity before implementation | If burnout: reduce load, adjust sprint commitment. If process: mandate design review gate |


- **Performance improvement plans (PIPs):** When sustained underperformance is identified, the EM initiates a **structured, time-bounded improvement plan** with: specific measurable objectives, defined support resources, weekly check-ins, and a clear success/failure timeline. PIPs are documented, reviewed by the CTO, and executed with fairness and transparency.

**Blameless Post-Mortem Facilitation** When a deployment failure, production incident, or rollback occurs, the L4-EM owns and facilitates the **blameless post-mortem process**:

- **Timing:** Post-mortem is conducted within **48 hours** of incident resolution — while context is fresh, but after the immediate stress has dissipated.  
- **Facilitation rules (enforced by the EM):**  
  1. **No individual blame.** Discussion is restricted to **systemic factors**: what process, tooling, or pipeline gap allowed this failure to reach production? The question is never *"Who pushed the bad code?"* — it is always *"Why did our system allow bad code to be pushed?"*  
  2. **Contributing factors, not root causes.** Complex failures have multiple contributing factors. The EM ensures the team maps the full causal chain, not just the most visible trigger.  
  3. **Mandatory action items.** Every post-mortem must produce at least one **concrete, assignable, time-bounded remediation** — a new automated test, a pipeline check, a monitoring alert, a runbook update, or an architectural change. Post-mortems without action items are procedural failures.  
- **Documentation:** Post-mortem reports are stored in a shared, searchable repository (`/docs/post-mortems/`) and referenced in future sprint planning to ensure remediation items are not deprioritized.  
- **Cultural enforcement:** The EM actively protects the engineer who triggered the incident from informal blame or social pressure. If the EM detects blame-oriented language in Slack, standups, or casual conversation, they correct it immediately and publicly: *"We don't blame people here. We fix systems."*

---

### 3\. Communication & The Shield

**The PM/Stakeholder Shield Function** The L4-EM serves as the **organizational buffer** between the engineering team and all sources of unplanned interruption. This is an active, continuous function — not a passive stance:

- **Interruption absorption protocol:** When a PM, stakeholder, or executive approaches the team with an unscheduled request mid-sprint:  
    
  1. The EM **intercepts the request** before it reaches any individual contributor. Direct requests to L1/L2 engineers that bypass the EM are treated as a process violation — the EM coaches the requester to route through them.  
  2. The EM logs the request in the backlog with: requester, business justification, estimated priority, and rough sizing.  
  3. The EM responds to the requester with a **commitment to prioritization, not a commitment to immediate action**: *"Understood. This is logged and will be evaluated in our next sprint planning cycle on \[date\]. If you believe this is P0-urgent, let's escalate to the CTO together to discuss reprioritization trade-offs."*  
  4. The engineers **never learn about the interruption** unless and until it is formally prioritized into a sprint.


- **Deep work protection:** The EM actively manages the team's calendar hygiene:  
    
  - Enforces **meeting-free blocks** (minimum 4 consecutive hours per day) for all ICs.  
  - Audits recurring meeting load quarterly — eliminating meetings that lack a clear owner, agenda, or decision output.  
  - Attends cross-functional meetings **on behalf of** the engineering team whenever possible, distributing relevant outcomes asynchronously.

**Technical Debt Translation & Negotiation** The L4-EM serves as the **translator between engineering reality and product/business priorities** when technical investment competes with feature delivery:

- When L4-IC or L3 engineers identify critical technical debt requiring dedicated sprint allocation, the EM translates the technical justification into **business-impact language** for PM and leadership consumption:


| Engineering Language (Input) | Business Language (EM Translation) |
| :---- | :---- |
| *"The database query layer needs refactoring — N+1 queries are causing O(n²) response times on the dashboard endpoint."* | *"If we don't invest 2 weeks in database optimization now, dashboard load times will exceed 5 seconds by next quarter at projected user growth — which directly impacts our retention metrics and will eventually require a 6-week emergency rewrite."* |
| *"We need to migrate from the legacy authentication middleware to the shared `@vanguard/auth` package."* | *"Two of our five products are running authentication code that hasn't been security-patched in 8 months. A 1-week migration eliminates this liability. Deferring it means we're accepting increasing security exposure with every week of delay."* |


- The EM **negotiates the allocation** with PMs: proposing specific sprint percentages for tech debt work, defending the investment with projected ROI (reduced incident rate, faster future delivery, lower operational cost), and securing explicit product-side agreement before committing engineering capacity.

**Hiring & Team Composition** The L4-EM owns the **full lifecycle of engineering hiring** for their team:

- **Job description authorship:** Writes technically precise role descriptions that accurately reflect the level expectations, tech stack requirements, and team culture — avoiding generic boilerplate. Descriptions are calibrated against the L1–L3 competency matrix to ensure candidate expectations are aligned from first contact.  
- **Interview process design:**  
  - Defines the interview pipeline: resume screen → technical phone screen → behavioral interview (EM-led) → technical assessment (IC-led, L3 or L4-IC) → culture/team-fit conversation → offer decision.  
  - The EM **personally conducts** the behavioral interview: assessing communication style, collaboration patterns, response to failure, growth mindset, and alignment with the team's blameless culture.  
  - The EM coordinates with the L3/L4-IC who conducts the technical assessment — ensuring evaluation criteria are calibrated to the target level and the assessment reflects real Vanguard work (not abstract algorithm puzzles).  
- **Hiring decision authority:** The EM makes the **final hire/no-hire call** for their team — incorporating input from all interviewers but retaining decision authority. The EM is accountable for the quality of every hire: a pattern of mis-hires (early attrition, persistent underperformance) is a direct reflection of EM judgment.  
- **Termination decisions:** When an engineer has exhausted a performance improvement plan without meeting the defined objectives, the EM initiates and owns the termination process — with CTO and HR alignment. This is executed with professionalism, documentation, and respect, but it is not deferred or delegated.

---

## The "Definition of Done" for an L4 Engineering Manager

The L4-EM is operating at full capacity when the following conditions are simultaneously true:

1. Engineers are consistently meeting or exceeding their **Units-per-Engineer** targets at every level.  
2. **Voluntary attrition is at or near zero** — engineers are growing, engaged, and actively progressing toward their next promotion milestone.  
3. Product Managers report **full visibility** into the engineering roadmap, sprint progress, and capacity constraints — with no surprises, no missed commitments, and no unresolved prioritization conflicts.  
4. The CTO has **not needed to open Jira/Linear, intervene in a sprint, mediate a PM-engineering conflict, or manage an individual contributor's performance** in the last 90 days.

If any of these conditions are not met, the EM has an identified gap in their execution that requires remediation.

---

## Promotion Criteria → Director of Engineering (L5-EM)

Promotion is indicated when the L4-EM's operating posture shifts from **managing individual engineers** to **managing the engineering function as a business unit**:

| Capability | Evidence |
| :---- | :---- |
| **Management of managers** | No longer directly manages ICs day-to-day. Instead, develops and oversees other L4-EMs or team leads — coaching them on the same people/process/shield competencies the candidate has mastered. |
| **Roadmap co-authorship** | No longer just executes the product roadmap handed to them. Actively shapes the roadmap alongside Product and the CTO — advocating for technical investment, sequencing trade-offs, and aligning engineering capacity with business strategy. |
| **P\&L awareness** | Understands and influences the engineering department's budget: headcount planning, tooling spend, infrastructure cost allocation, and contractor/vendor budgets. Can defend engineering investment to the CFO in financial terms, not just technical terms. |
| **Departmental strategy** | Defines hiring plans, team topology, promotion pipelines, and organizational rituals (on-call rotations, post-mortem culture, knowledge-sharing programs) at the **department level** — not just for a single team. |
| **Cross-functional leadership** | Operates as a peer to Product, Design, and Sales leadership — representing Engineering's perspective in company-level strategic discussions and ensuring technical reality is factored into business commitments. |

The L4-EM → L5-EM transition is fundamentally a shift from **optimizing a single team's output** to **owning the engineering organization's contribution to the company's P\&L, strategy, and competitive position**.  
