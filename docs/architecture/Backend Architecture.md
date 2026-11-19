# Backend Architecture Standards

**Status:** Target State  
**Audience:** Backend Engineers  
**Purpose:** Define the required architectural standards for all backend systems so that features are built consistently, safely, and scalably across the company.

## 1\. Philosophy

Backend architecture standards are not style preferences. They are the operational rules that keep our systems maintainable, secure, and scalable as multiple engineers build in parallel.

These standards exist to ensure that:

- backend systems remain understandable across teams,  
- features are implemented with consistent boundaries,  
- infrastructure and data access patterns remain predictable,  
- production failures are diagnosable,  
- multi-developer delivery does not degrade system quality over time.

These standards are **normative**. They describe the target state engineers are expected to build toward.

---

## 2\. Applicability Markers

Each rule may include one or more of the following markers:

- **\[ALL\]** — applies to every backend system  
- **\[NODE\]** — applies to full Node.js / TypeScript backend systems  
- **\[LARAVEL\]** — applies to Laravel backend systems  
- **\[CRM\]** — applies specifically to CRM backends with dynamic mergequery-driven database architecture

If a rule is marked **\[ALL\]**, it is mandatory regardless of framework.

---

## 3\. Non-Negotiable Principles

### 3.1 Thin transport layer

**\[ALL\]**

Controllers, route handlers, server actions, and other transport-facing entrypoints must remain thin.

They may:

- parse request input,  
- invoke validation,  
- resolve auth context,  
- invoke authorization,  
- call services,  
- translate service results into HTTP/API responses.

They must not:

- contain core business logic,  
- build complex queries inline,  
- coordinate multi-step domain workflows,  
- directly integrate with external providers,  
- enforce cross-cutting policies ad hoc.

### 3.2 Business logic belongs in services

**\[ALL\]**

Business logic must live in service-layer code or equivalent domain/application orchestration layers.

Services are responsible for:

- enforcing business rules,  
- coordinating domain workflows,  
- defining transaction boundaries,  
- calling repositories/models/query services,  
- calling infrastructure adapters,  
- handling side effects in the correct order.

### 3.3 Data access must be intentional

**\[ALL\]**

Data access must occur through approved backend patterns, not opportunistic inline queries scattered across the codebase.

Approved patterns:

- ORM/repository/model abstractions for standard applications,  
- specialized query services where reporting or dynamic query systems require it,  
- dynamic mergequery-based access only where explicitly allowed.

### 3.4 Architecture must be explicit

**\[ALL\]**

Every backend feature must be explainable as:

1. entrypoint,  
2. authorization/validation,  
3. service orchestration,  
4. data access,  
5. side effects,  
6. response.

If an engineer cannot clearly describe a feature through those layers, the architecture is not acceptable.

---

## 4\. Standard Backend Layers

## 4.1 Transport layer

**\[ALL\]**

Examples:

- Laravel controllers  
- Node API route handlers  
- Next.js route handlers/server actions when acting as backend entrypoints  
- webhook handlers  
- worker entrypoints

Responsibilities:

- receive input,  
- normalize transport concerns,  
- authenticate,  
- authorize or invoke authorization checks,  
- validate request shape,  
- call service layer,  
- return standardized response objects.

Transport layer code must not become the home of business policy.

## 4.2 Service layer

**\[ALL\]**

The service layer is the primary owner of backend behavior.

Responsibilities:

- business rules,  
- domain orchestration,  
- workflow sequencing,  
- transaction coordination,  
- tenant scoping enforcement,  
- infrastructure/provider invocation through adapters,  
- failure handling strategy.

A feature is not complete until its service boundary is clear.

## 4.3 Data access layer

**\[ALL\]**

Responsibilities:

- persistence operations,  
- query reuse,  
- model/repository access,  
- storage-specific optimization,  
- hiding storage implementation details from upper layers.

Upper layers should know **what** data they need, not **how** the storage engine retrieves it.

## 4.4 Infrastructure layer

**\[ALL\]**

Responsibilities:

- file storage,  
- queues,  
- search engines,  
- external APIs,  
- AI providers,  
- email,  
- payments,  
- webhooks,  
- vector databases,  
- cache systems.

Infrastructure integrations must be isolated behind internal adapters/modules.

---

## 5\. Stack-Specific Implementation Guidance

### 5.1 Node / TypeScript backends

**\[NODE\]**

The preferred structure is:

- route handler / server action / API endpoint  
- validation/auth layer  
- service  
- repository/model/data module  
- infrastructure adapter(s)

Node backend code must not collapse application logic into route handlers or server actions simply because the framework makes it convenient.

### 5.2 Laravel API backends

**\[LARAVEL\]**

The preferred structure is:

- route  
- middleware  
- controller  
- service  
- model / query service / repository-equivalent  
- database

Laravel controllers must remain orchestration-focused and must not become “fat controllers.”

### 5.3 CRM dynamic database systems

**\[CRM\]**

CRM systems with mergequery-driven/dynamic data architecture are a sanctioned exception to schema-managed persistence.

For CRM backends:

- mergequeries and dynamic query engines are allowed,  
- specialized query services are required,  
- raw/dynamic SQL must remain centralized,  
- metadata-driven form/report/query systems must be treated as platform infrastructure, not ad hoc feature code.

For CRM systems, engineers must not attempt to force Prisma-style schema-managed persistence where it conflicts with the existing dynamic architecture.

For non-CRM systems, schema managers/ORM-based models remain the standard.

---

## 6\. API Contracts and Interface Standards

### 6.1 Contract stability

**\[ALL\]**

API contracts must be treated as durable agreements.

Engineers must not:

- silently change response shapes,  
- rename fields without migration planning,  
- alter error structure inconsistently,  
- introduce breaking behavior without versioning or explicit rollout planning.

### 6.2 Success responses

**\[ALL\]**

Success responses must follow a consistent structure per product/system. Each backend must define one standard envelope and use it consistently.

At minimum:

- success indicator,  
- returned data,  
- optional metadata.

### 6.3 Error responses

**\[ALL\]**

Error responses must follow a standardized structure.

At minimum:

- stable error code or type,  
- human-readable message,  
- optional validation/details payload,  
- correlation/request identifier where applicable.

Raw exception messages must not be exposed to clients in production unless explicitly intended and safe.

### 6.4 Pagination, filtering, sorting

**\[ALL\]**

Every endpoint returning unbounded collections must define:

- pagination approach,  
- sort behavior,  
- filter format,  
- default limits,  
- maximum limits.

Unbounded list endpoints are prohibited.

### 6.5 Idempotency

**\[ALL\]**

Any write endpoint exposed to retry risk and capable of creating duplicate financial, communication, or workflow side effects must define idempotency behavior.

Mandatory examples include:

- payment-related actions,  
- external order creation,  
- job-triggering endpoints,  
- webhook processing,  
- expensive async generation requests where duplicate processing is harmful.

---

## 7\. Validation and Authorization

### 7.1 Validation is mandatory

**\[ALL\]**

All inbound data must be validated before entering business workflows.

Validation must cover:

- required fields,  
- types,  
- formats,  
- allowed enum values,  
- structural constraints,  
- size limits,  
- security-sensitive content where relevant.

### 7.2 Authorization is separate from validation

**\[ALL\]**

Validation confirms payload shape. Authorization confirms permission.

These are separate concerns and must not be conflated.

### 7.3 Authorization location

**\[ALL\]**

Authorization must happen at the boundary before protected operations execute, and services may re-check critical invariants where necessary.

Approved locations include:

- middleware/policies/guards,  
- controller/handler-level checks,  
- dedicated permission services,  
- service-layer invariant checks for sensitive operations.

### 7.4 Tenant scoping is mandatory

**\[ALL\]**

Every request must operate inside an explicitly defined tenant scope where the system is multi-tenant.

Tenant context must not be inferred loosely or trusted directly from the client.

---

## 8\. Multi-Tenancy and Data Boundaries

### 8.1 Tenant context must be explicit

**\[ALL\]**

All reads and writes must declare or derive their tenant scope through approved server-side mechanisms.

Examples:

- account,  
- company,  
- office,  
- profile group,  
- organization.

### 8.2 Cross-tenant access is denied by default

**\[ALL\]**

No service may read or mutate cross-tenant data unless the behavior is explicitly designed as privileged system/admin behavior.

### 8.3 Elevated access must be auditable

**\[ALL\]**

Admin/system-level cross-tenant actions must be logged and auditable.

---

## 9\. Data Access Standards

### 9.1 Standard applications

**\[NODE\] \[LARAVEL\]**

For standard applications, engineers must use schema-managed or model-managed persistence patterns.

Preferred approaches:

- Prisma or equivalent schema-managed ORM for Node systems,  
- Eloquent or equivalent model-managed access for Laravel systems,  
- repositories/query modules when complexity justifies separation.

### 9.2 CRM exception

**\[CRM\]**

CRM systems are permitted to use dynamic mergequery-driven persistence and metadata-derived query systems.

However:

- dynamic queries must be centralized,  
- shared query engines must be reused,  
- permission enforcement must occur before query execution,  
- reporting/form engines must not be reimplemented per feature.

### 9.3 Raw SQL usage

**\[ALL\]**

Raw SQL is allowed only when justified by one of the following:

- dynamic CRM architecture,  
- reporting/query-engine infrastructure,  
- performance-critical paths,  
- storage-specific capabilities unavailable via the primary abstraction.

Raw SQL must not be used as a convenience shortcut around established data access standards.

### 9.4 Query ownership

**\[ALL\]**

Complex queries belong in:

- repositories,  
- query services,  
- reporting engines,  
- model-layer abstractions,  
- platform data modules.

They do not belong in controllers or ad hoc handlers.

---

## 10\. Transactions and Workflow Boundaries

### 10.1 Services own transaction boundaries

**\[ALL\]**

Transactions must be defined at the service layer, where the full business workflow is understood.

Controllers/handlers must not manage multi-step transaction logic.

### 10.2 Multi-step writes must be deliberate

**\[ALL\]**

If multiple writes must succeed or fail together, they must be wrapped in an explicit transactional strategy.

### 10.3 External side effects require sequencing rules

**\[ALL\]**

Whenever a workflow includes both persistence and external side effects, engineers must explicitly define:

- what happens first,  
- what is the source of truth,  
- what is retried,  
- what happens on partial failure,  
- whether compensation is needed,  
- whether idempotency is required.

This is especially critical for:

- payment processing,  
- email sending,  
- file storage,  
- AI generation,  
- webhook-driven workflows,  
- queue-enqueued actions.

---

## 11\. Background Jobs and Async Processing

### 11.1 Use queues for long-running work

**\[ALL\]**

Any task that is slow, retryable, or operationally decoupled from the immediate user response must be moved to background processing.

Examples:

- file processing,  
- report generation,  
- search indexing,  
- imports/exports,  
- notification fanout,  
- email delivery,  
- AI generation when latency is non-trivial,  
- webhook retries.

### 11.2 Jobs must be idempotent

**\[ALL\]**

Background jobs must be safe to retry.

### 11.3 Jobs must be observable

**\[ALL\]**

Every job must support:

- structured logs,  
- failure visibility,  
- retry visibility,  
- correlation to originating request/user/tenant where applicable.

### 11.4 HTTP requests must not hold unnecessary work

**\[ALL\]**

User-facing requests should return as soon as the synchronous contract is complete.

---

## 12\. External Providers and AI Systems

### 12.1 Provider abstraction is mandatory

**\[ALL\]**

No backend feature may directly integrate with a third-party provider from a controller, route handler, or scattered business code.

Providers must be wrapped behind internal modules/adapters.

Examples:

- OpenAI,  
- Anthropic,  
- Google Gemini,  
- Stripe,  
- S3,  
- SES,  
- SQS,  
- Typesense,  
- Pinecone,  
- SMS/calling providers.

### 12.2 Provider-specific details stay inside adapters

**\[ALL\]**

Mapping provider-specific payloads, errors, retries, and response normalization belongs inside adapter layers.

### 12.3 AI workflows require explicit operational rules

**\[ALL\]**

Any AI-backed workflow must define:

- provider abstraction boundary,  
- timeout behavior,  
- retry policy,  
- failure handling,  
- usage metering,  
- cost-impact rules,  
- logging/traceability,  
- asynchronous execution rules where latency is high.

### 12.4 Credits, billing, and AI side effects

**\[ALL\]**

If AI workflows consume credits or trigger billable behavior, the system must explicitly define:

- when usage is recorded,  
- when credits are deducted,  
- what happens on provider failure,  
- whether deductions happen before or after success,  
- how retries avoid double-charging.

No engineer may implement billable AI workflows without defining these semantics.

---

## 13\. Security Standards

### 13.1 Secure-by-default boundaries

**\[ALL\]**

All backend code must assume that incoming requests are untrusted.

### 13.2 Input hardening

**\[ALL\]**

Systems must validate and sanitize inputs appropriate to their context, including protection against:

- injection,  
- malicious file uploads,  
- invalid payload shapes,  
- oversized payloads,  
- untrusted rich text/content.

### 13.3 Secret management

**\[ALL\]**

Secrets must not be hardcoded in source code or committed to repositories.

### 13.4 Webhook authenticity

**\[ALL\]**

All webhook consumers must verify origin/authenticity before processing.

### 13.5 Role and permission enforcement

**\[ALL\]**

RBAC and permission checks must be centralized and reusable, not re-authored inconsistently per endpoint.

---

## 14\. Error Handling and Observability

### 14.1 No swallowed exceptions

**\[ALL\]**

Catching errors and doing nothing is prohibited.

Every caught exception must be:

- handled,  
- translated,  
- logged,  
- retried,  
- rethrown, or otherwise intentionally resolved.

### 14.2 Structured logging

**\[ALL\]**

Logs for backend workflows must be structured enough to support diagnosis.

At minimum where applicable:

- request ID,  
- user ID,  
- tenant ID,  
- service name,  
- operation name,  
- provider name,  
- error type,  
- retry count/job ID.

### 14.3 Distinguish failure classes

**\[ALL\]**

Systems must clearly separate:

- validation failures,  
- authorization failures,  
- business rule failures,  
- dependency/provider failures,  
- unexpected system failures.

### 14.4 Audit critical operations

**\[ALL\]**

Critical state changes must be auditable, especially:

- billing changes,  
- credit usage,  
- admin actions,  
- permission changes,  
- cross-tenant access,  
- imports/exports,  
- sensitive data operations.

---

## 15\. Performance and Scalability

### 15.1 No unbounded growth paths

**\[ALL\]**

Every backend feature must account for scale behavior.

Engineers must define:

- pagination for large datasets,  
- batching where necessary,  
- cache strategy where justified,  
- query optimization for expensive reads,  
- async boundaries for heavy tasks.

### 15.2 Caching must have invalidation rules

**\[ALL\]**

Caching is not allowed without an invalidation strategy.

### 15.3 Synchronous fan-out should be minimized

**\[ALL\]**

A single request should not synchronously depend on many downstream systems unless there is a strong, deliberate reason.

---

## 16\. Domain Boundaries and Reuse

### 16.1 Shared domain logic must be centralized

**\[ALL\]**

If multiple features rely on the same business rules, that logic must be centralized in shared domain/service code.

### 16.2 Platform capabilities must not be reimplemented ad hoc

**\[ALL\]**

This includes systems such as:

- permissions,  
- mergequery/report engines,  
- AI provider orchestration,  
- billing/credits,  
- notifications,  
- file storage,  
- search integration.

### 16.3 Feature code must consume platform capabilities through approved interfaces

**\[ALL\]**

Engineers may extend shared platform systems, but they may not fork architecture patterns inside isolated features.

---

## 17\. Testing Requirements

### 17.1 Architecture-relevant tests are mandatory

**\[ALL\]**

Tests must cover not only happy-path correctness, but also architectural guarantees.

Required coverage should include, as applicable:

- authorization,  
- tenant isolation,  
- failure handling,  
- transaction behavior,  
- retry/idempotency behavior,  
- external provider integration boundaries,  
- queue/job behavior,  
- contract stability.

### 17.2 Critical workflows need failure-path coverage

**\[ALL\]**

Any workflow involving money, credits, external providers, or durable side effects must include tests for partial failure conditions.

---

## 18\. Definition of Done for Backend Work

A backend feature is not done unless:

- layer boundaries are respected,  
- business logic lives in services,  
- tenant boundaries are enforced,  
- authorization is implemented,  
- data access follows approved patterns,  
- side effects are sequenced intentionally,  
- external providers are abstracted,  
- logging/error handling is sufficient,  
- async work is queued where appropriate,  
- API contracts are stable,  
- tests cover architectural risk.

---

## 19\. Explicit Prohibitions

The following are prohibited unless formally approved as an exception:

- fat controllers or route handlers,  
- business logic in transport code,  
- direct provider calls from controllers/handlers,  
- unscoped multi-tenant queries,  
- silent response-shape drift,  
- swallowed exceptions,  
- unbounded list endpoints,  
- ad hoc raw SQL in standard app code,  
- duplicate implementations of shared platform concerns,  
- retry-unsafe jobs,  
- billable side effects without idempotency/failure semantics.

---

## 20\. Exceptions Process

Exceptions to these standards must be explicit, documented, and limited.

A valid exception must state:

- the standard being broken,  
- why the exception is necessary,  
- why the standard approach is insufficient,  
- operational risks,  
- mitigation plan,  
- whether the exception is temporary or permanent.

“Faster to implement” is not a valid architectural exception.

---

## 21\. Implementation Notes by System Type

### Standard application backends

**\[NODE\] \[LARAVEL\]**

- Use schema-managed/model-managed persistence.  
- Favor clear service boundaries.  
- Keep provider integrations abstracted.  
- Use queues for heavy side effects.

### CRM backends

**\[CRM\]**

- Dynamic mergequery architecture is approved.  
- Dynamic query systems must remain centralized and permission-aware.  
- Metadata-driven forms/reports are platform architecture, not one-off patterns.  
- Engineers must preserve the integrity of the mergequery/query-service model rather than bypassing it with scattered direct access.

---

## 22\. Final Standard

The backend must be engineered so that no single lead or architect is required as the “human runtime” for architectural decisions.

If a feature can only be implemented correctly after asking one specific person how the backend works, the architecture is not sufficiently standardized yet.  
