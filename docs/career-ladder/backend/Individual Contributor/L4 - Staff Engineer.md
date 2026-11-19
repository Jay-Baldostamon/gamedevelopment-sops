## Staff Engineer (L4-IC) — Technical Specification of Role

### 1\. Technical Execution

**Cross-Domain Capability Architecture** The L4-IC is **removed from the standard ticket queue**. They do not pull work from the sprint backlog. Their output is measured in **platforms, libraries, and systemic improvements** that reduce the cost-per-ticket for every other engineer on the team. Examples include:

- Rebuilding the shared Prisma schema library (`@vanguard/db`) into a versioned, multi-project package: extracting common models (`User`, `Organization`, `Session`, `AuditLog`), shared middleware (soft-delete, multi-tenancy row-level security, audit trail injection), and a unified authentication flow (session validation, JWT refresh, RBAC permission resolution) — consumable by Simplabots, BPC-CRM, Trust Monitor, and all future Project Units via a single dependency.  
- Designing cross-project event contracts: defining a canonical event schema (CloudEvents spec or internal equivalent), publishing shared TypeScript type definitions for event payloads, and building a standardized event bus adapter (SNS/SQS, EventBridge) that any Project Unit can publish to or subscribe from without implementing its own serialization, retry, or dead-letter logic.  
- Building internal developer tooling: CLI scaffolding generators (`@vanguard/create-service`), local development environment orchestration (`docker compose` profiles with seeded databases and mocked external services), and custom ESLint/Prettier rule packages that encode Vanguard architectural conventions as automated enforcement.

The L4-IC's work is upstream of features. If they are writing application-level business logic on a regular cadence, they are operating below level.

**The "Fire Jumper" (Escalation Ceiling for Technical Incidents)** When a critical production incident exceeds L3 diagnostic capability, the L4-IC is the **terminal escalation point** on the IC track. Engagement protocol:

1. L3 declares escalation in `#vanguard-ops` with: incident timeline, diagnostic steps already taken, hypotheses eliminated, and current system state.  
2. L4-IC engages directly — bypassing normal ticket workflow — with full authority to access any system, any environment, and any log source.  
3. Executes deep-systems diagnosis that L3s are not expected to perform:  
   - Memory profiling (`--inspect`, Chrome DevTools heap snapshots, `process.memoryUsage()`) to isolate leaks in long-running processes (e.g., headless browser clusters where Puppeteer `Page` instances are not being properly destroyed).  
   - Thread/event-loop analysis: identifying event loop starvation, blocked I/O, or unresolved promise chains causing backpressure in Node.js services.  
   - Infrastructure-layer debugging: VPC flow logs, ENI-level packet analysis, NAT Gateway throughput limits, RDS connection pool exhaustion, or ECS task OOM-kill patterns.  
4. Authors and deploys the hotfix (or directs the L3 to deploy it), then **immediately** converts the incident into a systemic prevention artifact: a new automated check, a circuit breaker, a resource limit, or an architectural change that eliminates the failure class permanently.

The L4-IC is not a firefighter by default — they are a firefighter of **last resort**. If they are routinely engaged for P2/P3 incidents, it signals an L3 capability gap that must be addressed through mentorship, not escalation dependency.

**AI Tooling Ownership & Governance** The L4-IC holds **organizational authority** over the team's AI-assisted development stack. This is not advisory — it is ownership with enforcement power:

- **Custom template authorship:** Designs and maintains GitHub Copilot custom instructions, workspace-level `.github/copilot-instructions.md` files, and Flicka system prompts — tuned to Vanguard's architectural patterns, naming conventions, security boundaries, and framework idioms.  
- **CLI integration:** Builds and maintains Flicka's integration into the Vanguard developer CLI — enabling context-aware code generation, migration scaffolding, and test stub creation from the terminal without context-switching to a browser-based interface.  
- **Security boundary enforcement:** Defines and enforces a **formal policy** governing what AI tooling is permitted to generate:

| AI Generation — Permitted | AI Generation — Restricted (Manual Authorship Required) |
| :---- | :---- |
| CRUD route scaffolding | Authentication / authorization logic |
| Component boilerplate & props interfaces | Payment processing and financial calculations |
| Test file structure & assertion scaffolding | Data migration scripts touching production data |
| Documentation drafts & JSDoc stubs | IAM policies, security group rules, secrets management |
| Prisma model scaffolding (reviewed pre-migration) | Cryptographic operations, token generation |

- **Tool evaluation pipeline:** When a new AI coding tool enters the market, the L4-IC conducts a structured evaluation: accuracy benchmarking against the Vanguard codebase, hallucination rate measurement, security audit of data handling (does the tool transmit proprietary code to external servers?), and integration cost analysis — publishing findings as an internal RFC before any team-wide adoption.

---

### 2\. System & Architecture

**Cost Architecture & Unit Economics Ownership** The L4-IC is **directly accountable** for the AWS Unit Economics scorecard metric. This is a standing responsibility, not a periodic review:

- **Continuous monitoring:** Maintains dashboards (AWS Cost Explorer, CloudWatch custom metrics, or Datadog cost allocation views) tracking Cost-per-Project-Unit and Cost-per-User at weekly granularity, segmented by service (compute, storage, data transfer, managed services).  
- **Threshold enforcement:** When Cost-per-Project-Unit trends above the target threshold ("Dark Green" → "Yellow"), the L4-IC initiates a cost remediation workstream:  
  - Root-cause the cost driver: over-provisioned compute, unoptimized queries triggering excessive RDS IOPS, S3 egress from misconfigured CDN caching, or idle resources from stale environments.  
  - Produce a costed migration proposal with projected savings. Example: migrating the Trust Monitor's 65,000-user scraping workload from persistent EC2 instances (`m5.xlarge` running 24/7) to event-driven Lambda functions (invoked per-scrape-batch via SQS, with concurrency limits and provisioned concurrency for cold-start mitigation) — targeting **≥40% monthly compute cost reduction** with quantified trade-offs (cold start latency, execution time limits, state management complexity).  
- **Reserved capacity strategy:** Manages the organization's Reserved Instance and Savings Plan portfolio — balancing commitment coverage against flexibility for workload migration.  
- **Reporting cadence:** Presents Unit Economics scorecard to the CTO monthly, with trend analysis, anomaly explanations, and forward-looking optimization roadmap.

**CI/CD Pipeline Innovation ("Faraday Cage" v.Next)** The L4-IC is the **architect of the next generation** of the deployment safety net. They do not merely add individual checks — they design systemic pipeline capabilities:

- **Automated load testing integration:** Embedding performance regression detection directly into the CI/CD flow. Pre-merge or pre-deploy, a load test suite (k6, Artillery, or custom harness) executes against a staging environment, comparing p50/p95/p99 latency and throughput against established baselines. Regressions beyond threshold automatically block the deployment.  
- **Security vulnerability scanning:** Integrating SAST (static analysis), DAST (dynamic analysis), dependency vulnerability scanning (`npm audit`, Snyk, Trivy for container images), and secrets detection (TruffleHog, git-secrets) as **mandatory, non-bypassable pipeline stages**. Critical/High findings block merge; Medium findings generate tracking tickets automatically.  
- **Canary deployment automation:** Evolving the CodeDeploy strategy from manual traffic-shift monitoring to automated canary analysis — deploying to a small traffic percentage, comparing error rates and latency against the baseline cohort via CloudWatch Anomaly Detection, and auto-promoting or auto-rolling-back without human intervention.  
- **Pipeline performance optimization:** The pipeline itself is a system the L4-IC optimizes. Targets include: CI execution time (parallelization, caching, selective test execution based on changed file paths), flaky test detection and quarantine, and build artifact caching strategy.

The L4-IC's north star: **drive rollback frequency asymptotically toward zero** through prevention, not detection.

**Macro-Level Architectural Context (10+ Project Units)** The L4-IC is not an active daily contributor to 10+ projects. They are the **architectural memory and cross-project dependency oracle** for the entire Vanguard portfolio:

- Maintains a mental (and documented) model of **inter-project coupling surfaces**: shared database schemas, event bus topics, API contracts, shared library versions, and infrastructure resource dependencies across all active Project Units.  
- Can identify **transitive impact** before it manifests: *"If you add a `NOT NULL` constraint to the `Organization.billingTier` column in BPC-CRM, the Simplabots webhook consumer will start throwing `PrismaClientValidationError` because it creates `Organization` records without that field during its onboarding flow."*  
- Reviews and approves all **cross-project schema changes, shared library major version bumps, and infrastructure topology modifications** — serving as the single point of architectural coherence across the portfolio.  
- Maintains a living **Vanguard System Map**: a dependency graph documenting every Project Unit, its infrastructure footprint, its data flow relationships, and its integration points — updated as part of every architectural change.

---

### 3\. Process & Communication

**Architecture Decision Records (ADRs)** The L4-IC authors **formal ADRs** for every significant technical decision that affects the Vanguard platform. An ADR is mandatory before the team adopts any:

- New framework, library, or external service dependency.  
- Architectural pattern change (e.g., REST → GraphQL, monolith → microservice extraction, relational → document store for a specific domain).  
- Infrastructure topology change (new AWS service adoption, region expansion, compute paradigm shift).

ADR structure (enforced):

```
# ADR-{NNN}: {Title}

## Status
Proposed | Accepted | Deprecated | Superseded by ADR-{NNN}

## Context
What is the technical or business problem forcing this decision?

## Decision
What is the change being proposed? Describe the solution precisely.

## Alternatives Considered
| Alternative | Pros | Cons | Reason Rejected |
|-------------|------|------|-----------------|
| ...         | ...  | ...  | ...             |

## Consequences
- Positive: What does this unlock?
- Negative: What debt, risk, or constraint does this introduce?
- Migration cost: What is the effort to adopt this change?

## Impact on Vanguard Team
- Which Project Units are affected?
- What changes to developer workflow are required?
- What training or documentation is needed?

## Review Date
When should this decision be re-evaluated?
```

ADRs are stored in version control (`/docs/adrs/`), reviewed by the CTO, and serve as the **canonical record** of why the system is the way it is.

**Executive-Level Technical Translation** The L4-IC operates as the **technical interpreter between engineering and executive leadership**. In strategic planning sessions with the CTO and executive stakeholders, the L4-IC:

- Listens to 1–3 year business objectives and maps them against the **current infrastructure's capacity envelope**: *"This growth target implies 200k concurrent users on Trust Monitor by Q4. Our current EC2 auto-scaling group tops out at \~80k before RDS connection pool exhaustion becomes the bottleneck. We need to implement connection pooling (PgBouncer or RDS Proxy) and re-architect the read path to use read replicas before we hit that ceiling — estimated 6-week workstream."*  
- Identifies **infrastructure inflection points**: the specific user counts, data volumes, or request rates at which the current architecture will degrade non-linearly — and proposes preemptive mitigation timelines.  
- Translates technical debt into business risk using executive-legible language: cost exposure, time-to-market impact, incident probability, and customer experience degradation.

**L3 Technical Mentorship** The L4-IC is the **direct technical mentor to Senior Engineers (L3s)**, focused on elevating their architectural thinking beyond single-project scope:

- **Distributed systems reasoning:** Teaching L3s to think about failure modes that span service boundaries — network partitions, eventual consistency windows, distributed transaction coordination, and the CAP theorem trade-offs in their specific infrastructure.  
- **Database scaling patterns:** Guiding L3s through read replica strategies, connection pooling, query plan analysis at scale, partitioning/sharding decision frameworks, and the operational implications of each approach.  
- **Fault tolerance design:** Training L3s to design for degradation — circuit breakers, bulkhead isolation, graceful fallbacks, retry budgets, and timeout hierarchies — so that a single dependency failure doesn't cascade into a platform-wide outage.  
- **Architectural review pairing:** Co-reviewing L3-authored design docs and technical proposals, challenging assumptions, and identifying blind spots — building the L3's capacity to eventually produce L4-quality architectural work independently.

---

## The "Definition of Done" for an L4 Staff Engineer

The L4-IC is operating at full capacity when the engineering organization can launch cross-project initiatives and absorb critical incidents without architectural drift because the platform guardrails, shared capabilities, and decision records already exist.

In practical terms, this means platform-level standards are adopted across Project Units, rollback rates trend down through preventive pipeline hardening, and L3 engineers are independently making high-quality architectural decisions that no longer depend on day-to-day L4 intervention.

---

## Promotion Criteria → Principal Engineer (L5)

Promotion is indicated when the L4-IC's operating posture shifts from **reactive optimization of the current system** to **proactive definition of the system that doesn't exist yet**:

| Capability | Evidence |
| :---- | :---- |
| **Technical vision ownership** | Authors and drives the **1–3 year technical roadmap** for the entire engineering organization — not as a wishlist, but as a sequenced, dependency-aware execution plan with defined milestones, resource requirements, and decision gates. |
| **Preventive architecture** | Consistently identifies and mitigates **future** technical debt and scaling bottlenecks — 6–12 months before they manifest as incidents or delivery slowdowns. The organization's architectural trajectory changes because of their foresight, not their firefighting. |
| **CTO-adjacent operation** | Functions as a **co-strategist with the CTO** on technology decisions: vendor selection, build-vs-buy evaluation, platform bets, and organizational technical standards. Their input materially shapes company-level technical direction. |
| **Cross-organizational influence** | Their architectural decisions, standards, and tooling are adopted beyond the Vanguard team — influencing engineering practices across the entire company. |
| **Succession depth** | Has developed at least one L3 to the point where that L3 can independently fulfill the L4-IC's current operational responsibilities — proving the L4-IC's impact is systemic, not personal. |

The L4-IC → L5 transition is fundamentally a shift from **optimizing the present architecture** to **authoring the future one** — operating as the technical conscience and strategic compass for the entire engineering organization alongside the CTO.  
