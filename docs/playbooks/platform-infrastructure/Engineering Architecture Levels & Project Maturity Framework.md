# 🏗️ Engineering Architecture Levels & Project Maturity Framework

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Engineering Architecture Levels & Project Maturity Framework |
| Purpose | Map engineering infrastructure, release rigor, and deployment complexity to validated project viability and P&L performance, so architectural tier progression is gated by financial and stakeholder outcomes rather than technical ambition. |
| Owner | Head of Engineering |
| Last Updated | 2026-07-16 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] Confirm the project has an identified tier (Tier 1 through Tier 4)
- [ ] Confirm the approving stakeholders for the current tier gate are available and briefed
- [ ] Confirm the Head of Engineering is aware of any tier progression proposal
- [ ] Confirm the team understands that tier gates block infrastructure spend, not feature work
- [ ] Confirm net profit thresholds are calibrated to the current quarter's cash flow model before enforcing the Tier 4 gate

---

## Maturity Tiers at a Glance

```txt
[ Tier 1: Local Sandbox ] ──(Demo Approval)──> [ Tier 2: Hosted Beta ]
 │
 (Sales-Ready Sign-off)
 │
 ▼
[ Tier 4: Enterprise Parity ] <──($1K Profit)─── [ Tier 3: Production ]
```

| Tier | Focus | Environment | Release Method | Key Infrastructure | Next Gate Trigger |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Tier 1** | Proof of Concept | Local Engine | `pnpm run dev` | Local Dev Machine | Stakeholder demo approval |
| **Tier 2** | Sales Readiness | Web Beta | Git Pull + Restart | Low-cost VM (EC2) | Stakeholder "Sales Ready" sign-off |
| **Tier 3** | Robust Delivery | Production Core | CodeDeploy Artifact | AWS RDS, Managed services | **$1,000 Net Profit** (including COGS/Infra) |
| **Tier 4** | Enterprise Parity | Release Staging | Parallel CodeDeploy | Production duplicate environment | N/A (Continuous optimization) |

---

## Step-by-Step Checklist

### Phase 1: Identify Current Tier and Constraints

1. **Confirm** the project's current maturity tier with the Head of Engineering.
2. **Review** the hard constraints for the current tier before proposing any infrastructure changes.
3. **Reject** any infrastructure additions that exceed the current tier's scope without a formal tier progression approval.
4. **Document** the current tier in the project's engineering log or README.

- [ ] Current tier is confirmed and documented
- [ ] All team members are aware of the current tier's hard constraints
- [ ] No out-of-tier infrastructure has been provisioned

---

### Phase 2: Operate Within Tier 1 — Local Sandbox (Proof of Concept)

> **Enter when:** A new product or feature needs feasibility verification and architectural prototyping.

**Hard Constraints**
- Zero external cloud hosting.
- No multi-region deployments, external auth tenants, or high-availability setups.
- Security and environment variables are hardcoded or local `.env` only.

**Steps**

1. **Run** the application locally using standard package manager configs (`pnpm run dev`, Docker Compose, etc.).
2. **Verify** the proof of concept compile-checks successfully on a local machine.
3. **Demonstrate** that core outcomes specified in the project brief are met in a local walkthrough.
4. **Prepare** a demo for the stakeholder and Head of Engineering.

- [ ] Application runs locally without errors
- [ ] Core outcomes are demonstrably met in the local environment
- [ ] No external cloud resources have been provisioned

**Gate to Tier 2: Demo Approval**

1. **Schedule** a demo walkthrough with the Stakeholder (Product/CEO) and Head of Engineering.
2. **Present** the functional proof of concept covering all specified core outcomes.
3. **Obtain** explicit written approval from both approvers before provisioning any external infrastructure.

**IF** the demo is approved by both the Stakeholder and Head of Engineering, **THEN** proceed to Tier 2.  
**IF** the demo is not approved, **THEN** iterate on the proof of concept and re-schedule.

- [ ] Demo walkthrough is complete
- [ ] Stakeholder approval is documented
- [ ] Head of Engineering approval is documented

---

### Phase 3: Operate Within Tier 2 — Hosted Beta (UX Iteration & Validation)

> **Enter when:** Demo Gate is passed. Focus shifts to UX evaluation, user-testing, and sales readiness.

**Infrastructure**

1. **Provision** a single, web-accessible low-resource instance (e.g., a simple EC2 instance).
2. **Use** a low-cost database: local SQLite, Postgres, or a minimal shared sandbox DB instance.
3. **Configure** a shared or lower-tier Auth0 developer tenant.
4. **Keep** all infrastructure minimal; iteration speed is the priority.

- [ ] EC2 instance (or equivalent low-cost VM) is provisioned
- [ ] Low-cost database is configured
- [ ] Auth0 developer tenant is connected

**Deployment / Orchestration**

1. **Deploy** using lightweight SSH or webhook trigger only:
   ```
   git pull && pnpm install && pnpm build && pm2 restart app
   ```
2. **Avoid** S3 artifact generation and CodeDeploy pipelines at this tier.
3. **Justify** any deviation from the lightweight deploy method with written approval from the Head of Engineering.

- [ ] Deployment method is confirmed as `git pull` + restart
- [ ] No S3 artifact pipeline is active for this environment
- [ ] Deployment is verified end-to-end after each release

**Gate to Tier 3: Production Launch Gate**

1. **Resolve** all initial integration anomalies surfaced during beta user-testing.
2. **Present** the application to the Stakeholder for formal "Sales-Ready" declaration.
3. **Obtain** written sign-off from the Stakeholder and Head of Engineering.

**IF** the Stakeholder formally declares the application "Sales-Ready" and the Head of Engineering concurs, **THEN** proceed to Tier 3.  
**IF** anomalies remain unresolved, **THEN** continue UX iteration and re-present.

- [ ] All known integration anomalies are resolved
- [ ] Stakeholder "Sales-Ready" declaration is documented
- [ ] Head of Engineering sign-off is documented

---

### Phase 4: Operate Within Tier 3 — Production Core (Live & Robust)

> **Enter when:** Production Launch Gate is passed. Focus shifts to availability, security, and initial monetization.

**Infrastructure**

1. **Provision** managed database hosting (AWS RDS) with scheduled backups enabled.
2. **Configure** a production Auth0 Tenant with isolated credentials and CORS/domain-restricted callback paths.
3. **Set up** production-grade domain, TLS termination, and ingress routing.
4. **Confirm** all secrets are removed from version control and stored in a secrets manager.

- [ ] AWS RDS is provisioned with scheduled backups
- [ ] Production Auth0 Tenant is isolated from beta tenants
- [ ] TLS is terminated at the production domain
- [ ] All secrets are managed outside version control

**Deployment / Orchestration**

1. **Package** every release as an immutable S3 build artifact.
2. **Deploy** using AWS CodeDeploy rolling deployment from the packaged S3 artifact.
3. **Configure** automatic rollback alarms so any deployment error reverts to the last known stable artifact.
4. **Verify** rollback alarms are active before marking a release as complete.

- [ ] S3 build artifact packaging pipeline is operational
- [ ] CodeDeploy rolling deployment is configured
- [ ] Automatic rollback alarms are active and tested
- [ ] Last known stable artifact is verified before each deployment

**Gate to Tier 4: Enterprise Parity Gate**

1. **Track** revenue, API costs, compute/infra costs, and COGS in the project P&L.
2. **Calculate** net profit as: `Revenue − API Costs − Compute/Infra Costs − COGS`.
3. **Confirm** the product has generated **$1,000 in net profit** (current threshold; recalibrate quarterly).
4. **Obtain** approval from the Head of Engineering to begin Tier 4 provisioning.

> **Note:** The $1,000 threshold is a placeholder calibrated quarterly to match cash flows. Verify the current threshold with the Head of Engineering before enforcement.

**IF** $1,000 net profit is confirmed and the Head of Engineering approves, **THEN** proceed to Tier 4.  
**IF** the profit threshold is not met, **THEN** continue optimizing monetization in Tier 3.

- [ ] Net profit calculation is documented and verified
- [ ] $1,000 net profit threshold (or current quarter equivalent) is met
- [ ] Head of Engineering approval for Tier 4 provisioning is documented

---

### Phase 5: Operate Within Tier 4 — Enterprise Parity (Continuous Delivery Stability)

> **Enter when:** Enterprise Parity Gate is passed. Focus shifts to zero-impact deployments, automated regression mitigation, and scaling confidence.

**Infrastructure**

1. **Provision** a full-scale Release Staging Environment that is a 100% configuration, deployment, and performance duplicate of the Production tier.
2. **Configure** an isolated mock or replica staging database matching production schema volumes.
3. **Set up** a Continuous Integration pipeline that builds shared release candidates for both Staging and Production.

- [ ] Release Staging Environment matches Production configuration exactly
- [ ] Staging database isolates data from production while matching schema and volume profile
- [ ] CI pipeline produces shared release candidates consumed by both environments

**Deployment / Orchestration (Twin-Track Deployment)**

1. **Ensure** Staging and Production share identical build-packaging pipelines, CodeDeploy routes, and system topology.
2. **Validate** every change on Staging under production-level loads before promoting to active customer nodes.
3. **Block** any promotion to Production that has not passed the Staging validation gate.
4. **Continuously optimize** deployment pipelines, performance profiles, and scaling configurations.

- [ ] Twin-track deployment pipeline is operational for both environments
- [ ] Staging validation gate is enforced before every Production promotion
- [ ] Performance and scaling configurations are reviewed on a regular cadence
- [ ] No Production deployment bypasses the Staging promotion gate

---

## Reference: Tier Decision Rules

| Situation | Rule |
| :--- | :--- |
| New project, no external hosting yet | Start at Tier 1. Do not provision external infrastructure. |
| Demo passed, no stakeholder sign-off yet | Remain at Tier 1. Block Tier 2 provisioning. |
| Beta live, not yet "Sales-Ready" | Remain at Tier 2. Do not configure RDS or CodeDeploy. |
| Sales-Ready, but no $1K net profit | Remain at Tier 3. Do not provision staging environment. |
| $1K net profit met, no HoE approval | Do not begin Tier 4 provisioning without written approval. |
| Profit threshold recalibration due | Verify updated threshold with HoE before next quarterly gate review. |
