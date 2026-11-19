# 🧪 Technical Feasibility Assessment Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Technical Feasibility Assessment |
| Purpose | Evaluate incoming ideas before engineering work begins so the team can quickly decide whether to proceed, reject, or investigate further. This playbook reduces unscoped requests, prevents technical surprises, and creates consistent routing between the Product Foundry and Core Engineering teams. |
| Owner | Alan Baldelobar |
| Last Updated | 2026-05-18 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] The requestor has submitted the business reason for the request.  
- [ ] The requestor has submitted the core user story or workflow.  
- [ ] The requestor has provided an expected scope, budget, or investment range.  
- [ ] A request record exists in the team’s intake system.  
- [ ] The assigned Feasibility Engineer is identified.  
- [ ] The reviewer has access to required systems, documents, APIs, and architecture notes.  
- [ ] The corresponding playbook is open during execution under the Always Open Policy.

## Step-by-Step Checklist
### Phase 1: Intake — No Unscoped Ideas

1. **Create** a feasibility assessment record in the team intake tracker.  
2. **Record** the request title using a clear business-facing name.  
3. **Capture** the business value in one sentence.  
4. **Document** the exact “Why” using measurable language.  
5. **List** the core user stories as click-by-click actions.  
6. **Record** the expected budget range or delivery class.  
7. **Verify** that the request includes enough detail for technical review.  
- [ ] The “Why” includes business impact such as revenue, retention, efficiency, or strategic value.  
- [ ] The “What” describes what the user clicks, enters, sees, and expects.  
- [ ] The budget or scope indicates whether this is a small experiment or a large integration.  
- [ ] The request is specific enough for triage.  
8. **IF** the request is missing business value, **THEN** return it to the requestor for clarification.  
9. **IF** the request is missing user stories, **THEN** return it to the requestor and request step-by-step workflow details.  
10. **IF** the request is missing scope or budget context, **THEN** pause the assessment until the requestor provides it.

Use this intake template when sending the request back for clarification:

```
Subject: Technical Feasibility Intake Needs More Detail

Your request cannot move to engineering review yet.

Please reply with:
1. Business value: What exact outcome does this create?
2. Core user story: What does the user click, enter, and expect to happen?
3. Budget/scope: Is this a small experiment, a medium feature, or a major integration?

Once these three items are complete, the feasibility review can begin.
```

### Phase 2: Triage — Feasibility Engineer Review

1. **Assign** the intake to Eliseo A for initial triage.  
2. **Review** whether the required data exists to support the request.  
3. **Confirm** whether internal systems already store the required inputs.  
4. **Check** whether third-party APIs expose the required fields or actions.  
5. **Evaluate** likely rate limits across Twilio, AWS, OpenAI, and any other required vendor.  
6. **Identify** whether the request introduces new PII, regulated data, or compliance exposure.  
7. **Document** all blockers, unknowns, and assumptions in the assessment record.  
- [ ] Required source data exists.  
- [ ] Required third-party endpoints are available.  
- [ ] Third-party usage limits are acceptable.  
- [ ] No new security or compliance issues are introduced without escalation.  
- [ ] Unknowns are explicitly written down.  
8. **IF** the required data does not exist, **THEN** mark the request as **No-Go** unless a new data source can be added.  
9. **IF** a third-party platform does not expose the required capability, **THEN** mark the request as **Needs a Technical Spike** or **No-Go** based on severity.  
10. **IF** the request introduces new PII or compliance risk, **THEN** escalate to the appropriate security or compliance reviewer before continuing.  
11. **Forward** all triaged requests that pass review to Alan for architectural assessment.

### Phase 3: Architectural Deep Dive — Feasibility Lead Review

1. **Review** the triage notes before starting architectural analysis.  
2. **Determine** whether the request affects the core database schema.  
3. **Determine** whether the request can be built as a standalone service, side-product, or isolated workflow.  
4. **Estimate** system impact across backend services, frontend applications, data models, and operations.  
5. **Evaluate** AI dependency if the request uses LLMs or Foundry workflows.  
6. **Estimate** token cost per user if AI is involved.  
7. **Select** the best-fit model class for the use case.  
8. **Compare** implementation options against available SaaS tools.  
9. **Document** whether the team should build internally or buy externally.  
10. **Record** the major technical assumptions, dependencies, and constraints.  
- [ ] Core system impact is clearly identified.  
- [ ] AI cost assumptions are documented if applicable.  
- [ ] The recommended model or AI approach is documented if applicable.  
- [ ] Build-vs-buy analysis is written in plain language.  
- [ ] The architectural path is clear enough for a go/no-go decision.  
11. **IF** the feature requires major core schema changes, **THEN** flag it for Core Engineering review.  
12. **IF** the feature can run as a standalone experiment or side-product, **THEN** evaluate it for Product Foundry routing.  
13. **IF** token cost makes the unit economics unworkable, **THEN** recommend **No-Go** or a narrower scope.  
14. **IF** a SaaS product solves the problem at acceptable cost and risk, **THEN** recommend **Buy** instead of building.

### Phase 4: Output & Handoff

1. **Select** one final verdict: **Go**, **No-Go**, or **Needs a Technical Spike**.  
2. **Assign** a T-shirt size estimate: **Small**, **Medium**, or **Large**.  
3. **Route** the request to the correct delivery path.  
4. **Write** the final recommendation in the assessment record.  
5. **Send** the decision summary to the business requestor.  
6. **Store** the completed assessment in the central playbook or project system.

Use these sizing definitions:

- **Small** \= Days  
- **Medium** \= Weeks  
- **Large** \= Months

Use these routing definitions:

- **Product Foundry** \= 14-hour Copilot sprint, rapid prototype, experiment, or side-product  
- **Core EMs** \= core product, CRM integration, database-impacting work, or multi-team engineering effort

Use this final handoff template:

```
Technical Feasibility Assessment Result

Request:
[Insert request name]

Verdict:
[Go / No-Go / Needs a Technical Spike]

Reason:
[Insert 1-3 sentence summary]

Estimated Size:
[Small / Medium / Large]

Recommended Route:
[Product Foundry / Core EMs / Buy Existing SaaS]

Key Risks or Assumptions:
- [Risk 1]
- [Risk 2]
- [Risk 3]

Next Step:
[Insert exact next action]
```

7. **IF** the verdict is **Go**, **THEN** assign the request to the appropriate delivery lane.  
8. **IF** the verdict is **Needs a Technical Spike**, **THEN** define the spike owner, scope, and deadline before handoff.  
9. **IF** the verdict is **No-Go**, **THEN** document the reason in clear business language and close the request.  
10. **Verify** that the business team has received the final recommendation.  
- [ ] Verdict is documented.  
- [ ] Estimate is documented.  
- [ ] Route is documented.  
- [ ] Risks and assumptions are documented.  
- [ ] Next action has an owner.

## Common Mistakes & Fixes
| Common Mistake | Fix |
| :---- | :---- |
| Engineering reviews a vague idea without business context. | Require the Why, What, and Budget before triage begins. |
| User stories are written too broadly. | Rewrite them into exact user clicks, inputs, and expected outcomes. |
| The team assumes required data exists. | Verify the source system and field availability during triage. |
| API or vendor limits are discovered too late. | Check rate limits and vendor constraints before architectural review. |
| Compliance risk is ignored because the feature seems small. | Review all requests for PII, regulated data, and boundary changes. |
| Alan reviews every request too early. | Require Eliseo A to complete triage before escalation. |
| AI features are approved without cost modeling. | Estimate token cost per user and confirm unit economics before approval. |
| The team builds custom software when SaaS would solve it faster. | Run a mandatory build-vs-buy comparison in the architectural review. |
| Requests are routed to the wrong team. | Use the routing definitions for Product Foundry vs Core EMs. |
| The final decision is verbal and undocumented. | Send the handoff template and save the record centrally. |

## Success Criteria
- [ ] Every request enters engineering through a documented intake.  
- [ ] No request reaches engineering review without Why, What, and Budget.  
- [ ] Eliseo A completes triage before Alan performs architectural review.  
- [ ] Data, API, security, and compliance risks are checked before approval.  
- [ ] Every request receives a verdict of Go, No-Go, or Needs a Technical Spike.  
- [ ] Every request receives a T-shirt size estimate.  
- [ ] Every approved request is routed to Product Foundry, Core EMs, or Buy Existing SaaS.  
- [ ] The final recommendation is stored in a central system.  
- [ ] The playbook is open during execution.

## Storage & Access
Store this playbook in the team’s central playbook library, project wiki, or shared documentation hub where Business, Product, and Engineering can all access it.

**Always Open Policy:** Keep this playbook open and visible every time a feasibility assessment is performed. Do not rely on memory. Use the checklist live to reduce interruptions, prevent missed steps, and eliminate knowledge hoarding.

Use this playbook for:

- New request intake training  
- Cross-training feasibility reviewers  
- Decision consistency across Product Foundry and Core Engineering  
- Post-mortem updates when an assessment missed something

## Next review date
2026-07-01
