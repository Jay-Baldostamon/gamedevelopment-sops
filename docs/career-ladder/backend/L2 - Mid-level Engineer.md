## Mid-Level Engineer (L2) — Technical Specification of Role

### 1\. Technical Execution

**End-to-End Feature Delivery** Translates moderate-to-complex product requirements into production-ready, shipped code across the full Vanguard stack. The L2 operates beyond isolated bug fixes — they own entire user flows from data model through UI. Examples include:

- Implementing a complete Stripe integration for Simplabots: defining `Subscription`, `Invoice`, and `PaymentMethod` Prisma models, building Next.js API route handlers for checkout session creation, and wiring Stripe webhook endpoints (`checkout.session.completed`, `invoice.payment_failed`) with idempotent event processing and signature verification (`stripe.webhooks.constructEvent()`).  
- Designing and delivering a multi-step onboarding wizard: schema design, server-side validation, client-side state management (`useReducer` / Zustand), and transactional persistence — including error recovery and partial-save semantics.

The L2 receives a product brief, not a pre-decomposed ticket list. They are responsible for their own task breakdown, estimation, and sequencing.

**Advanced AI-Assisted Development** Leverages GitHub Copilot and internal tooling (e.g., Flicka) beyond line-level autocompletion — specifically for:

- Scaffolding entire component trees, including props interfaces, data-fetching logic (`useQuery` / server actions), and associated test harnesses.  
- Generating comprehensive test suites (unit, integration, e2e stubs) from component signatures and API contracts.  
- Rapid prototyping of Prisma schema changes and migration files for review.

The L2 is expected to measurably optimize their own velocity using these tools. AI-assisted output remains subject to the same ownership and comprehension standards as L1, but the L2 is additionally expected to identify when AI-generated patterns are suboptimal and refactor them proactively.

**Code Quality Gatekeeping & PR Approvals** Serves as a **primary reviewer and approver** for all L1-authored Pull Requests. Review responsibilities include:

1. **Faraday Cage enforcement:** Verify no pipeline bypasses, no direct pushes to `main`, no disabled lint rules (`// eslint-disable` without justification), and no modifications to CI/CD configuration files without L3+ sign-off.  
2. **Security surface review:** Check for common vulnerability patterns — unsanitized user input in database queries, missing `zod` validation on API route inputs, exposed secrets in client bundles, improper CORS configuration, and overly permissive Prisma `select`/`include` exposing sensitive fields.  
3. **Architectural consistency:** Ensure new code adheres to established project conventions (file structure, naming patterns, separation of concerns between service layer and route handlers).

The L2 is the first line of defense; defects that pass their review and subsequently reach production are a shared accountability signal.

---

### 2\. System & Architecture

**Database & Schema Ownership** Independently designs and evolves the PostgreSQL data layer:

- Authors new Prisma `model` definitions with correct relational mappings (`@relation`, `@unique`, `@@index`, `@@map`), cascade behaviors, and default values.  
- Writes and validates **non-destructive migrations** (`prisma migrate dev` / `prisma migrate deploy`), ensuring backward compatibility with existing data. Migration PRs must include:  
  - A rollback strategy (or proof of reversibility).  
  - Confirmation that no existing rows violate new constraints (`NOT NULL`, `UNIQUE`).  
- Enforces strict `zod` validation schemas at the API boundary to guarantee that malformed or adversarial input never reaches the ORM layer.  
- Can perform complex query optimization: analyzing `EXPLAIN ANALYZE` output, adding composite indexes, and refactoring N+1 query patterns in Prisma (`include` / `select` tuning).

**Infrastructure Load** Manages and monitors **3–4 Project Units** concurrently. Operational scope includes:

- Provisioning and configuring standard BPC-CRM instances or spinning up new isolated client environments (ECS task definitions, RDS parameter groups, environment-specific `.env` injection via SSM Parameter Store or Secrets Manager).  
- Capacity planning for assigned units: monitoring CPU/memory utilization trends and proactively scaling before threshold breaches.  
- Owning uptime and incident response for assigned Project Units without requiring L3 escalation for standard operational issues.

**Production Debugging** When an alert fires in `#vanguard-ops`, the L2 executes a structured diagnostic workflow:

```
Alert received (CloudWatch / Datadog / PagerDuty)
  → Identify affected service and environment
    → Access CloudWatch Log Groups or Fleet Manager session
      → Correlate error timestamps with recent deployments (commit SHA / deploy ID)
        → Isolate root cause to specific file, function, and line
          → Author, test, and push hotfix via standard CI/CD pipeline
            → Verify fix in production logs + confirm alert resolution
```

The L2 is expected to resolve P2/P3 production incidents independently and to provide a preliminary root-cause assessment for P1 incidents before L3 engagement.

---

### 3\. Process & Communication

**The "Unblocker" (L1 Mentorship)** Serves as the **primary escalation point** for L1 engineers who have exhausted their 30-Minute Timeout Rule. Mentorship protocol:

1. Join a synchronous screen share within **15 minutes** of the L1's escalation message.  
2. **Diagnose collaboratively** — guide the L1 through the debugging process rather than solving it silently. The goal is to transfer the diagnostic pattern, not just deliver the answer.  
3. Explain the *why* behind the resolution: which system behavior caused the issue, what mental model the L1 was missing, and how to recognize similar failures independently in the future.  
4. If the blocker reveals a documentation gap, file a follow-up ticket to update internal docs (Notion/Confluence/`README.md`).

Mentorship effectiveness is a **measured L2 competency** — consistent failure to unblock L1s or defaulting to "just writing the code for them" is a performance signal.

**Deployment Ownership** Trusted to initiate and oversee **scheduled production deployments**, including Friday CodeDeploy rollouts. Deployment responsibilities:

- Pre-deploy: Verify all CI checks green on `main`, confirm no outstanding P1/P2 incidents, and notify `#vanguard-ops` of the deployment window.  
- During deploy: Monitor the ALB target group traffic shift (e.g., CodeDeploy `AllAtOnce` / `Linear10PercentEvery1Minute` / `Canary` strategy), watching for 5xx spike, latency degradation, or health check failures in real time.  
- Post-deploy: Confirm CloudWatch metrics stabilize within expected baselines for a minimum of **15 minutes** post-cutover.  
- Rollback authority: If automated rollback triggers fail or metrics degrade outside acceptable thresholds, the L2 is authorized to **manually initiate a rollback** via the CodeDeploy console or CLI (`aws deploy stop-deployment`) without waiting for L3 approval.

**Technical Pushback on Product Requirements** Expected to critically evaluate PM feature requests against implementation cost, architectural impact, and existing system capabilities. The L2 should:

- Quantify trade-offs in concrete terms: *"This approach requires a new junction table, a custom migration backfill across \~500k rows, and a new webhook consumer — estimated 3 weeks with elevated regression risk."*  
- Propose alternatives that leverage existing infrastructure: *"If we scope the requirement to \[adjusted spec\], we can reuse the existing `NotificationPreference` model and the shared webhook dispatcher — shipping in 3 days with no schema migration."*  
- Document the trade-off analysis in the ticket/spec for PM and L3 visibility.

**Standing expectation:** Silently accepting requirements the L2 knows to be architecturally harmful — in order to avoid conflict — is a performance deficiency. Constructive pushback with data is a core L2 competency.

---

## Promotion Criteria → Senior Engineer (L3)

Promotion is indicated when the L2 consistently demonstrates a shift from **building features within existing systems** to **designing and owning the systems themselves**:

| Capability | Evidence |
| :---- | :---- |
| **System architecture** | Independently architects cross-project, cross-service solutions from scratch (e.g., a 65,000-user Trust Monitor platform): defining service boundaries, data flow contracts, persistence strategy, caching layers, and failure modes — producing a technical design doc before writing code. |
| **Infrastructure load** | Reliably manages **5+ Project Units** concurrently with minimal operational overhead — demonstrating that additional units do not degrade quality or response time on existing ones. |
| **Code quality bar** | Authored code requires **near-zero rework** post-review. PRs are consistently approved with minor or no revisions, reflecting deep internalization of the team's architectural standards and edge-case awareness. |
| **Technical anchor** | Acts as the de facto technical authority for the Vanguard team: other engineers (L1 and L2) route architectural questions, design ambiguities, and incident escalations through the candidate as a natural default. |
| **Force multiplier** | Measurably improves the output of the broader team — through tooling contributions, documentation, mentorship, and architectural decisions that reduce complexity and accelerate delivery for everyone, not just themselves. |

The L2→L3 transition is fundamentally a shift from **delivering features autonomously** to **defining the technical direction and quality ceiling for the entire engineering organization**.  
