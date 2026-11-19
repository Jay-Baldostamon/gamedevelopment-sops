## Senior Engineer (L3) — Technical Specification of Role

### 1\. Technical Execution

**System-Level Engineering** The L3 operates above the feature boundary. Primary output is **reusable, cross-project infrastructure** — shared libraries, internal packages, and abstraction layers that eliminate duplicated logic across the Vanguard portfolio. Examples include:

- Extracting the Next.js authentication flow (session management, JWT validation, RBAC middleware, OAuth provider configuration) into a versioned internal package (`@vanguard/auth`) consumable by Simplabots, BPC-CRM, and Trust Monitor via a shared monorepo package or private npm registry.  
- Designing a unified webhook ingestion framework: signature verification, idempotent event processing, dead-letter queue routing, and retry semantics — abstracted behind a generic interface that any project can implement against a specific provider (Stripe, Twilio, SendGrid).  
- Building shared Prisma client extensions, utility layers, or middleware (e.g., audit logging, soft-delete, multi-tenancy row-level filtering) that standardize data access patterns across all Project Units.

The L3's code is measured not by the features it ships, but by the **leverage it creates** — how many future tickets it eliminates for L1s and L2s.

**Defining AI-Assisted Development Standards** The L3 is responsible for **establishing and governing the team's AI tooling strategy**, not merely consuming it. Scope includes:

- Authoring and maintaining custom system prompts and instruction sets for Flicka and internal Copilot configurations — optimized for the Vanguard stack's conventions, naming patterns, and architectural idioms.  
- Evaluating emerging AI coding tools (code generation, test generation, PR summarization, documentation synthesis) against measurable criteria: output accuracy, hallucination rate, integration cost, and security surface.  
- Defining the team's **boilerplate and scaffolding standards**: canonical templates for new API routes, Prisma models, React components, and test files — which AI tools then use as few-shot examples or seed context.  
- Publishing internal guidelines on AI tool usage boundaries: what classes of code are safe to generate (CRUD scaffolding, test boilerplate) vs. what requires manual authorship (authentication logic, financial calculations, data migration scripts).

**Zero-Rework Code Quality** The L3 maintains a **\>80% innovation / \<20% remediation** time allocation, achieved through:

- Pre-deployment edge-case analysis: systematically enumerating failure modes (null states, race conditions, partial writes, network timeouts, malformed input) *before* implementation, not after.  
- Comprehensive automated test coverage authored *alongside* the implementation (not retrofitted): unit tests for pure logic, integration tests for service-layer orchestration, and e2e smoke tests for critical user paths.  
- Defensive API contract design: strict `zod` schemas at every boundary, explicit error types, and graceful degradation paths — such that downstream consumers cannot trigger unhandled exceptions.

PRs authored by the L3 are consistently approved with **zero or cosmetic-only revisions**. Substantive rework requests on L3-authored code are treated as an anomaly warranting retrospective analysis.

---

### 2\. System & Architecture

**Monolith & Tier 4 System Ownership** Trusted to assume **sole technical ownership** of the highest-complexity systems in the Vanguard portfolio. For a Tier 4 monolith such as the 65,000-user Trust Monitor (Weight: 30), the L3 is accountable for:

- **Cron job reliability:** Ensuring all scheduled tasks (`node-cron`, AWS EventBridge rules, or ECS Scheduled Tasks) execute within their defined windows, handle failures gracefully (retry logic, dead-letter alerting), and do not overlap or deadlock under load.  
- **Headless browser scraper stability:** Maintaining Puppeteer/Playwright-based scraping pipelines — managing browser instance lifecycle, memory leak prevention (`page.close()`, context isolation), proxy rotation, and rate-limit compliance.  
- **Operational continuity:** The system must not degrade during the L3's normal absence (PTO, weekends). This requires comprehensive runbooks, health-check dashboards, and escalation documentation sufficient for an L2 to triage P2/P3 incidents independently.

**Infrastructure Load & Cost Optimization** Comfortably manages **5+ Project Units** concurrently. Beyond operational monitoring, the L3 owns infrastructure provisioning and optimization:

- Spinning up new AWS environments end-to-end: VPC/subnet configuration, ECS service/task definitions, ALB target group routing rules, RDS instance provisioning (instance class selection, parameter group tuning, read replica strategy).  
- **Cost-per-User optimization:** Continuously monitors AWS Cost Explorer and Compute Optimizer recommendations. Targets and maintains a **"Dark Green"** Cost-per-User metric through: right-sizing instances, Reserved Instance / Savings Plan utilization, S3 lifecycle policies, and eliminating orphaned resources (unused EBS volumes, idle NAT Gateways, over-provisioned RDS).  
- Authoring and maintaining Infrastructure-as-Code (CloudFormation / CDK / Terraform) for all provisioned resources — no manually configured ("ClickOps") infrastructure permitted at L3.

**CI/CD Pipeline Evolution ("Faraday Cage" Hardening)** The L3 does not merely operate within the Faraday Cage — they **strengthen it**. When a deployment failure is caught by the existing safety net:

1. Perform root-cause analysis on the failure.  
2. Author a new automated check (lint rule, unit test, integration test, or pipeline validation step) that **deterministically prevents that specific failure class from ever being mergeable again**.  
3. Update the pipeline configuration (`buildspec.yml`, GitHub Actions workflows, custom CodeDeploy lifecycle hooks) and document the change in an ADR.

The L3's goal is to make the CI/CD pipeline **monotonically more strict** over time — every production incident results in a permanently tighter safety net.

---

### 3\. Process & Communication

**The Final Reviewer (Production Gatekeeper)** Serves as the **terminal approval authority** for all high-complexity PRs and any PR touching critical system paths (authentication, payment processing, data migrations, infrastructure configuration). Review authority includes:

- **Rejection rights:** The L3 can unilaterally reject PRs that introduce unacceptable technical debt, violate AWS security policies (overly permissive IAM roles, unencrypted data at rest, public S3 buckets), or degrade architectural coherence — regardless of PM priority or sprint deadlines.  
- **Merge-blocking scope:** Changes to shared libraries (`@vanguard/*`), Prisma schema files, CI/CD pipeline configuration, and IAM/security group definitions **require L3 approval** via CODEOWNERS enforcement.

**Business-to-Technical Translation** Capable of real-time technical design synthesis in cross-functional settings. When presented with an ambiguous or aspirational product requirement by leadership or PMs, the L3 can:

- Decompose the requirement into domain entities and their relationships on a whiteboard within minutes.  
- Produce a preliminary Prisma schema (`model` definitions, relations, indexes) that maps to the business domain.  
- Identify technical risks, external dependencies, and open questions — surfacing them immediately rather than discovering them mid-implementation.  
- Provide rough order-of-magnitude effort estimates grounded in the current system's architecture, not abstract story points.

**Passive Mentorship & Knowledge Architecture** The L3 scales their expertise through **artifacts, not availability**:

- **Architecture Decision Records (ADRs):** Every significant technical decision (library selection, schema design choice, infrastructure trade-off) is documented in a structured ADR: context, decision, alternatives considered, consequences, and review date.  
- **Immaculate documentation:** Internal READMEs, runbooks, and onboarding guides authored by the L3 are comprehensive enough that a new L1 can onboard to a Project Unit without synchronous hand-holding.  
- **Technical talks:** Hosts periodic knowledge-transfer sessions for the Vanguard team — covering architectural deep-dives, post-incident retrospectives, or emerging technology evaluations.  
- **Code as teaching material:** The L3's committed code (naming, structure, comments, test design) serves as the de facto reference implementation for team conventions.

---

### The Vanguard "Definition of Done" for an L3

An L3 is operating at full capacity when the following scenario executes successfully:

The CTO is unreachable for one full week. During that window, leadership initiates a major new initiative. The L3 independently: (1) architects the technical solution and produces a design doc, (2) decomposes the work into scoped tickets and delegates to L2s and L1s with clear acceptance criteria, (3) reviews and approves all resulting PRs, (4) deploys the feature to production through the standard pipeline, and (5) confirms operational stability — **with zero escalations to the CTO**.

This is the benchmark. If the L3 cannot operate as the autonomous technical authority in the CTO's absence, they are not yet fulfilling the role.

---

---

## The L4 Promotion Split — Two Paths, Equal Standing

At L3 mastery, the engineer reaches a **career bifurcation point**. Two distinct L4 tracks diverge — one scaling impact through **systems**, the other through **people**.

**Organizational policy (non-negotiable):** Both paths carry **identical salary bands, title seniority, and executive-level standing**. Neither path is a promotion over the other. Neither is a consolation prize. The choice is one of *aptitude and energy*, not prestige.

---

### Path A: Staff Engineer (L4-IC) — Technical Track

**Orientation:** The engineer's highest-leverage contribution comes from solving problems **no one else on the team can solve**, and from making architectural decisions that compound across the entire engineering organization.

**Primary Objective:** Scale **system leverage** — multiply the team's output ceiling through technical infrastructure, not through direct feature delivery.

**Core Responsibilities:**

**Multi-Year Technical Roadmap Ownership** The L4-IC defines and drives the **long-horizon technical strategy** for the Vanguard platform. This is not sprint-level planning — it is 6–24 month architectural vision:

- Identifying systemic bottlenecks, scaling limits, and cost inefficiencies that will become critical at projected growth trajectories.  
- Producing formal technical proposals (RFCs/design docs) for platform-level transformations — evaluated against build-vs-buy analysis, migration risk, and total cost of ownership.  
- Example initiative: Researching and executing a migration of the Trust Monitor from EC2-hosted monolith to a serverless architecture (AWS Lambda \+ API Gateway \+ DynamoDB/Aurora Serverless), with a quantified target of **≥40% reduction in monthly AWS spend** — including a phased rollout plan, rollback strategy, and performance benchmarking framework.

**Capability Engineering (Not Feature Engineering)** The L4-IC stops building features and starts building **the platforms that features are built on**:

- Internal developer tooling (CLI scaffolding tools, local development environment orchestration, custom lint rules, code generation pipelines).  
- Cross-cutting infrastructure: observability frameworks (structured logging, distributed tracing, metric aggregation), shared caching layers, event-driven architectures (SNS/SQS, EventBridge).  
- Performance and reliability engineering: load testing frameworks, chaos engineering practices, SLO/SLI definition and monitoring.

**Solving L3-Intractable Problems** The L4-IC is the escalation ceiling for technical problems that exceed L3 scope:

- Cross-service data consistency issues, distributed transaction design, and eventual consistency reconciliation.  
- Infrastructure-level debugging: kernel-level performance analysis, network topology issues, DNS resolution failures, TLS/certificate chain problems.  
- Vendor and open-source evaluation requiring deep systems knowledge (database engine selection, message broker comparison, CDN architecture).

**Output Measurement:** The L4-IC's performance is **not** measured by lines of code or tickets closed. It is measured by:

- Reduction in platform-wide incident rate attributable to architectural improvements.  
- Measurable cost savings from infrastructure optimization.  
- Developer experience improvements (reduced onboarding time, faster CI pipeline execution, fewer environment-related blockers).  
- Adoption rate of internal platforms and libraries across Project Units.

---

### Path B: Engineering Manager (L4-EM) — Management Track

**Orientation:** The engineer's highest-leverage contribution comes from **removing obstacles from other engineers' paths** and maximizing the aggregate output of the team as a unit.

**Primary Objective:** Scale **human leverage** — multiply the team's delivery capacity through process optimization, people development, and organizational shielding.

**Core Responsibilities:**

**Sprint & Delivery Ownership** The L4-EM owns the Agile execution framework for the Vanguard engineering team:

- Sprint planning, backlog grooming, capacity allocation, and velocity tracking — managed through Jira/Linear with clear acceptance criteria and priority rankings.  
- Daily standups, sprint retrospectives, and cross-functional sync ceremonies with PM and design stakeholders.  
- Identifying and resolving delivery bottlenecks: dependency conflicts between Project Units, resource contention, and scope creep.

**1-on-1s & Career Development** The L4-EM is directly accountable for the professional growth trajectory of every engineer on the team:

- Conducting **weekly or biweekly 1-on-1s** with each direct report — focused on blockers, career goals, skill gaps, and feedback (both directions).  
- Owning the promotion pipeline: tracking each engineer's progress against their level's competency matrix, providing explicit gap analysis, and sponsoring promotion cases to leadership.  
- Managing performance issues early and directly — not waiting for quarterly reviews to surface concerns.

**The Multiplier Metric** The L4-EM's performance is evaluated on a single core metric: **did they measurably increase the team's "Units per Engineer" output?**

- Baseline the team's delivery throughput (Project Units managed, features shipped per sprint, mean time to resolution) at the start of each quarter.  
- Implement process improvements, tooling investments, and team structure changes aimed at increasing that throughput.  
- Report quantified results: *"Team delivery velocity increased 25% quarter-over-quarter while maintaining zero P1 incidents."*

**The Shield Function** The L4-EM acts as the **organizational buffer** between the engineering team and external disruption:

- Intercepting ad-hoc requests from PMs, leadership, and stakeholders — triaging them through the backlog rather than allowing them to interrupt active sprint work.  
- Protecting L1 and L2 focus time: unscheduled meetings, context-switching requests, and "quick favors" from other departments are routed through the L4-EM, not directly to individual contributors.  
- Negotiating scope and timelines with product leadership on behalf of the team — using data (velocity, capacity, technical debt load) rather than capitulating to pressure.

**Relationship to Codebase:** The L4-EM **steps away from the critical path of production code** (mostly). They may still:

- Review architectural PRs for organizational awareness.  
- Contribute to internal tooling, documentation, or developer experience improvements.  
- Prototype or spike on exploratory work during dedicated maker-time blocks.

However, they **must not** be a bottleneck on any active feature delivery. If the team's output depends on the L4-EM writing code, the team is understaffed or the L4-EM has not delegated effectively.

**Output Measurement:** The L4-EM's performance is **never** measured by their personal code output. It is measured by:

- Team velocity and Units-per-Engineer trends (quarter-over-quarter).  
- Retention and promotion rate of direct reports.  
- Reduction in mean-time-to-unblock for L1/L2 engineers.  
- Team health survey scores and 1-on-1 feedback signals.  
- Stakeholder satisfaction with delivery predictability and communication quality.

---

### Path Selection Criteria — Summary

| Signal | → L4-IC (Staff Engineer) | → L4-EM (Engineering Manager) |
| :---- | :---- | :---- |
| **Energy source** | Solving deeply complex technical problems in isolation or small groups | Unblocking 5 engineers in a single afternoon |
| **Highest-leverage output** | A system that eliminates an entire class of future work | A team that ships 30% faster than last quarter |
| **Relationship to code** | Deep in the codebase — but at the platform/infrastructure layer, not the feature layer | Steps back from the codebase — impact flows through people, not commits |
| **Measures of success** | Incident reduction, cost savings, platform adoption, architectural longevity | Team velocity, retention, engineer growth, delivery predictability |
| **Failure mode** | Hoarding complexity; building systems only they can maintain | Writing code instead of delegating; becoming a delivery bottleneck |

**Standing policy:** An engineer who selects one path is never locked out of the other. A Staff Engineer who discovers management aptitude at year two, or an EM who wants to return to deep technical work, can transition laterally — provided they meet the competency bar of the target role. The split is a starting direction, not a permanent commitment.  
