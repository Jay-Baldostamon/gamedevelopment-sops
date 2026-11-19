# 🏗️ Backend Architecture Standards Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Backend Architecture Standards |
| Purpose | Define the required architectural standards for all backend systems so engineers build features consistently, safely, and scalably, and so code review enforces those standards uniformly. |
| Owner | Chief Architect / Backend Engineering Lead |
| Last Updated | 2026-05-18 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] Confirm this playbook applies to a backend system or backend-facing feature  
- [ ] Confirm the engineering team understands these are target-state standards  
- [ ] Confirm Engineering Managers and Senior Engineers are responsible for enforcing these standards in code review  
- [ ] Confirm the system type is identified as `[ALL]`, `[NODE]`, `[LARAVEL]`, or `[CRM]`  
- [ ] Confirm exceptions, if needed, will be requested through an ADR or approved Jira ticket type  
- [ ] Confirm the team knows the approved storage location for this playbook

## Step-by-Step Checklist
### Phase 1: Define Scope and Enforcement

1. **Name** the standard as `Backend Architecture Standards`.  
2. **State** the purpose as the required architectural baseline for all backend systems.  
3. **Confirm** that these standards are normative, not optional guidance.  
4. **Declare** that these standards are the baseline for code review enforcement.  
5. **Assign** enforcement responsibility to Engineering Managers and Senior Engineers.  
6. **Block** any pull request that violates these standards unless a formal exception is approved.  
7. **Verify** the applicable rule markers before reviewing implementation details.  
- [ ] The standard has a clear owner  
- [ ] The standard has a last updated date  
- [ ] The standard has a quarterly review cycle  
- [ ] Code review enforcement responsibility is explicit

### Phase 2: Apply Applicability Markers

1. **Read** the rule marker on each standard before applying it.  
2. **Apply** `[ALL]` rules to every backend system.  
3. **Apply** `[NODE]` rules only to full Node.js / TypeScript backend systems.  
4. **Apply** `[LARAVEL]` rules only to Laravel backend systems.  
5. **Apply** `[CRM]` rules only to CRM backends with dynamic mergequery-driven database architecture.  
6. **Reject** any attempt to skip `[ALL]` rules because of framework preference.

**IF** a rule is marked `[ALL]`, **THEN** enforce it regardless of framework.

- [ ] The system type is identified correctly  
- [ ] All relevant markers are applied  
- [ ] No mandatory rule is skipped

### Phase 3: Enforce Non-Negotiable Principles

1. **Keep** the transport layer thin.  
2. **Allow** controllers, route handlers, server actions, and entrypoints to parse input.  
3. **Allow** controllers, route handlers, server actions, and entrypoints to invoke validation.  
4. **Allow** controllers, route handlers, server actions, and entrypoints to resolve auth context.  
5. **Allow** controllers, route handlers, server actions, and entrypoints to invoke authorization.  
6. **Allow** controllers, route handlers, server actions, and entrypoints to call services.  
7. **Allow** controllers, route handlers, server actions, and entrypoints to translate service results into HTTP or API responses.  
8. **Reject** business logic in transport code.  
9. **Reject** complex inline queries in transport code.  
10. **Reject** multi-step domain workflow coordination in transport code.  
11. **Reject** direct provider integration in transport code.  
12. **Reject** ad hoc cross-cutting policy enforcement in transport code.  
13. **Place** business logic in services or equivalent orchestration layers.  
14. **Use** intentional data access patterns only.  
15. **Explain** every backend feature through these six layers: entrypoint, authorization/validation, service orchestration, data access, side effects, response.

**IF** an engineer cannot clearly explain a feature through those six layers, **THEN** treat the architecture as unacceptable.

- [ ] Transport code is thin  
- [ ] Business logic is in services  
- [ ] Data access is intentional  
- [ ] The feature can be explained through the required layers

### Phase 4: Implement Standard Backend Layers

#### Phase 4.1: Transport Layer

1. **Use** the transport layer for request and event entrypoints only.  
2. **Receive** input in the transport layer.  
3. **Normalize** transport concerns in the transport layer.  
4. **Authenticate** at the boundary.  
5. **Authorize** at the boundary or invoke approved authorization checks.  
6. **Validate** request shape before business workflow execution.  
7. **Call** the service layer.  
8. **Return** standardized response objects.  
9. **Prevent** transport code from becoming the home of business policy.

Examples:

- Laravel controllers  
- Node API route handlers  
- Next.js route handlers or server actions acting as backend entrypoints  
- webhook handlers  
- worker entrypoints

#### Phase 4.2: Service Layer

1. **Use** the service layer as the primary owner of backend behavior.  
2. **Put** business rules in services.  
3. **Put** domain orchestration in services.  
4. **Put** workflow sequencing in services.  
5. **Put** transaction coordination in services.  
6. **Put** tenant scoping enforcement in services where required.  
7. **Invoke** infrastructure providers through adapters from services.  
8. **Define** failure handling strategy in services.  
9. **Treat** a feature as incomplete until its service boundary is clear.  
10. **Move** long conditional business workflows out of controllers and into services.

**IF** your controller is 400 lines long and contains 6 `if/else` blocks checking database states, **THEN** move that logic into a Service.

#### Phase 4.3: Data Access Layer

1. **Use** the data access layer for persistence operations.  
2. **Reuse** queries through repositories, query modules, models, or approved abstractions.  
3. **Hide** storage implementation details from upper layers.  
4. **Tell** upper layers what data is needed.  
5. **Prevent** upper layers from defining how storage retrieves data.

#### Phase 4.4: Infrastructure Layer

1. **Isolate** external integrations behind internal adapters or modules.  
2. **Use** the infrastructure layer for file storage.  
3. **Use** the infrastructure layer for queues.  
4. **Use** the infrastructure layer for search engines.  
5. **Use** the infrastructure layer for external APIs.  
6. **Use** the infrastructure layer for AI providers.  
7. **Use** the infrastructure layer for email, payments, webhooks, vector databases, and cache systems.  
- [ ] Transport responsibilities are limited  
- [ ] Service boundaries are explicit  
- [ ] Data access is abstracted appropriately  
- [ ] Infrastructure integrations are isolated

### Phase 5: Apply Stack-Specific Rules

1. **Use** the preferred Node structure for Node / TypeScript backends:

```
route handler / server action / API endpoint
validation/auth layer
service
repository/model/data module
infrastructure adapter(s)
```

2. **Prevent** Node frameworks from collapsing business logic into handlers because of convenience.  
3. **Use** the preferred Laravel structure for Laravel backends:

```
route
middleware
controller
service
model / query service / repository-equivalent
database
```

4. **Prevent** Laravel controllers from becoming fat controllers.  
5. **Allow** CRM backends to use mergequery and dynamic query engines only where explicitly sanctioned.  
6. **Centralize** raw or dynamic SQL in CRM systems.  
7. **Treat** metadata-driven forms, reports, and query systems as platform infrastructure in CRM systems.  
8. **Prevent** engineers from forcing Prisma-style schema-managed persistence into CRM architectures where it conflicts with the approved model.  
9. **Use** schema-managed or ORM-based persistence for non-CRM systems.

**IF** the system is a CRM backend, **THEN** use specialized query services and centralized dynamic query infrastructure.

- [ ] The correct implementation pattern is selected for the stack  
- [ ] No prohibited stack shortcut is used  
- [ ] CRM exceptions are centralized, not scattered

### Phase 6: Enforce API Contract Standards

1. **Treat** API contracts as durable agreements.  
2. **Reject** silent response-shape changes.  
3. **Reject** field renames without migration planning.  
4. **Reject** inconsistent error structure changes.  
5. **Reject** breaking behavior without versioning or rollout planning.  
6. **Define** one standard success envelope per system.  
7. **Include** at minimum a success indicator, returned data, and optional metadata in success responses.  
8. **Define** one standard error envelope per system.  
9. **Include** at minimum a stable error code or type, a human-readable message, optional details, and a correlation or request identifier where applicable.  
10. **Prevent** raw exception messages from reaching clients in production unless intentionally safe.  
11. **Define** pagination, sorting, filtering, default limits, and maximum limits for collection endpoints.  
12. **Reject** unbounded list endpoints.  
13. **Define** idempotency behavior for retry-risk write endpoints that can create duplicate harmful side effects.

Mandatory idempotency examples:

- payment-related actions  
    
- external order creation  
    
- job-triggering endpoints  
    
- webhook processing  
    
- expensive async generation requests  
    
- [ ] Success responses are standardized  
        
- [ ] Error responses are standardized  
        
- [ ] Unbounded collections are prohibited  
        
- [ ] Idempotency rules exist where needed

### Phase 7: Enforce Validation, Authorization, and Tenant Scope

1. **Validate** all inbound data before business workflow execution.  
2. **Check** required fields.  
3. **Check** types.  
4. **Check** formats.  
5. **Check** allowed enum values.  
6. **Check** structural constraints.  
7. **Check** size limits.  
8. **Check** security-sensitive content where relevant.  
9. **Separate** validation from authorization.  
10. **Authorize** before protected operations execute.  
11. **Re-check** critical invariants in services where necessary.  
12. **Use** approved authorization mechanisms such as middleware, policies, guards, permission services, or service-layer invariants.  
13. **Enforce** explicit tenant scoping for every multi-tenant request.  
14. **Derive** tenant context through approved server-side mechanisms.  
15. **Reject** tenant context trusted directly from the client.  
16. **Deny** cross-tenant access by default.  
17. **Log** and audit elevated cross-tenant actions.

**IF** the system is multi-tenant, **THEN** require an explicit tenant scope on every read and write.

- [ ] Validation occurs before workflows start  
- [ ] Authorization is distinct from validation  
- [ ] Tenant scope is explicit  
- [ ] Cross-tenant access is auditable

### Phase 8: Enforce Data Access Standards

1. **Use** schema-managed or model-managed persistence for standard applications.  
2. **Use** Prisma or equivalent schema-managed ORM for Node systems where appropriate.  
3. **Use** Eloquent or equivalent model-managed access for Laravel systems where appropriate.  
4. **Use** repositories or query modules when complexity justifies separation.  
5. **Allow** dynamic mergequery-driven persistence only in approved CRM systems.  
6. **Centralize** dynamic queries in CRM systems.  
7. **Enforce** permissions before query execution in CRM systems.  
8. **Prevent** feature teams from reimplementing reporting or form engines per feature.  
9. **Use** raw SQL only when justified by approved reasons.  
10. **Reject** raw SQL used as a convenience shortcut.  
11. **Place** complex queries in repositories, query services, reporting engines, model-layer abstractions, or platform data modules.  
12. **Reject** complex queries in controllers or ad hoc handlers.

Approved raw SQL reasons:

- dynamic CRM architecture  
    
- reporting or query-engine infrastructure  
    
- performance-critical paths  
    
- storage-specific capabilities unavailable through the primary abstraction  
    
- [ ] Persistence pattern matches system type  
        
- [ ] Complex queries are owned in approved layers  
        
- [ ] Raw SQL usage is justified and centralized

### Phase 9: Define Transactions and Workflow Boundaries

1. **Define** transaction boundaries in the service layer.  
2. **Prevent** controllers and handlers from managing multi-step transaction logic.  
3. **Wrap** related writes in an explicit transactional strategy when they must succeed or fail together.  
4. **Define** sequencing rules whenever persistence and external side effects both exist.  
5. **Document** what happens first.  
6. **Document** the source of truth.  
7. **Document** retry behavior.  
8. **Document** partial failure handling.  
9. **Document** compensation behavior where needed.  
10. **Document** idempotency behavior where needed.

Critical examples:

- payment processing  
    
- email sending  
    
- file storage  
    
- AI generation  
    
- webhook-driven workflows  
    
- queue-enqueued actions  
    
- [ ] Service owns transaction boundaries  
        
- [ ] Multi-step writes are deliberate  
        
- [ ] Side-effect sequencing is explicit

### Phase 10: Use Background Jobs and Async Processing Correctly

1. **Move** slow, retryable, or operationally decoupled work to background processing.  
2. **Queue** file processing jobs.  
3. **Queue** report generation jobs.  
4. **Queue** search indexing jobs.  
5. **Queue** import and export jobs.  
6. **Queue** notification fanout jobs.  
7. **Queue** email delivery jobs.  
8. **Queue** non-trivial AI generation jobs.  
9. **Queue** webhook retry jobs.  
10. **Make** every background job safe to retry.  
11. **Add** structured logs to every job.  
12. **Provide** failure visibility for every job.  
13. **Provide** retry visibility for every job.  
14. **Correlate** each job to the originating request, user, or tenant where applicable.  
15. **Return** user-facing HTTP responses as soon as the synchronous contract is complete.  
- [ ] Long-running work is queued  
- [ ] Jobs are idempotent  
- [ ] Jobs are observable  
- [ ] HTTP requests do not hold unnecessary work

### Phase 11: Isolate External Providers and AI Systems

1. **Wrap** every third-party provider behind an internal adapter or module.  
2. **Prevent** direct third-party provider calls from controllers, route handlers, or scattered business code.  
3. **Keep** provider-specific payload mapping inside adapters.  
4. **Keep** provider-specific error handling inside adapters.  
5. **Keep** provider-specific retry behavior inside adapters.  
6. **Normalize** provider responses inside adapters.  
7. **Define** explicit operational rules for AI-backed workflows.  
8. **Define** provider abstraction boundaries for AI workflows.  
9. **Define** timeout behavior for AI workflows.  
10. **Define** retry policy for AI workflows.  
11. **Define** failure handling for AI workflows.  
12. **Define** usage metering for AI workflows.  
13. **Define** cost-impact rules for AI workflows.  
14. **Define** logging and traceability for AI workflows.  
15. **Define** asynchronous execution rules where latency is high.  
16. **Define** billing and credit semantics before implementing billable AI features.  
17. **Define** when usage is recorded.  
18. **Define** when credits are deducted.  
19. **Define** what happens on provider failure.  
20. **Define** whether deductions happen before or after success.  
21. **Define** how retries avoid double-charging.  
- [ ] Providers are abstracted  
- [ ] Adapter boundaries are respected  
- [ ] AI operational rules are explicit  
- [ ] Billing semantics are defined before implementation

### Phase 12: Enforce Security, Error Handling, and Observability

1. **Assume** all incoming requests are untrusted.  
2. **Validate** and sanitize input for the system context.  
3. **Protect** against injection.  
4. **Protect** against malicious file uploads.  
5. **Protect** against invalid payload shapes.  
6. **Protect** against oversized payloads.  
7. **Protect** against untrusted rich text or content where relevant.  
8. **Store** secrets outside source code.  
9. **Prevent** secrets from being committed to repositories.  
10. **Verify** webhook authenticity before processing.  
11. **Centralize** RBAC and permission checks.  
12. **Reject** swallowed exceptions.  
13. **Handle**, **translate**, **log**, **retry**, **rethrow**, or **intentionally resolve** every caught exception.  
14. **Use** structured logs for diagnosable backend workflows.  
15. **Include** request ID, user ID, tenant ID, service name, operation name, provider name, error type, and retry count or job ID where applicable.  
16. **Separate** validation failures from authorization failures.  
17. **Separate** business rule failures from dependency failures.  
18. **Separate** unexpected system failures from expected application failures.  
19. **Audit** billing changes, credit usage, admin actions, permission changes, cross-tenant access, imports, exports, and sensitive data operations.  
- [ ] Secure-by-default boundaries are in place  
- [ ] Error handling is intentional  
- [ ] Logging is structured  
- [ ] Critical operations are auditable

### Phase 13: Protect Performance, Scalability, and Reuse

1. **Define** pagination for large datasets.  
2. **Define** batching where necessary.  
3. **Define** cache strategy where justified.  
4. **Define** query optimization for expensive reads.  
5. **Define** async boundaries for heavy tasks.  
6. **Reject** caching without invalidation rules.  
7. **Minimize** synchronous fan-out to many downstream systems.  
8. **Centralize** shared domain logic.  
9. **Prevent** repeated reimplementation of shared platform capabilities.  
10. **Consume** shared platform capabilities through approved interfaces.  
11. **Allow** extension of shared platform systems through approved interfaces only.

Shared platform capabilities include:

- permissions  
    
- mergequery and report engines  
    
- AI provider orchestration  
    
- billing and credits  
    
- notifications  
    
- file storage  
    
- search integration  
    
- [ ] Scale behavior is accounted for  
        
- [ ] Cache invalidation is defined  
        
- [ ] Shared domain logic is centralized  
        
- [ ] Platform capabilities are not forked ad hoc

### Phase 14: Validate Testing and Definition of Done

1. **Write** tests that cover architectural guarantees, not only happy paths.  
2. **Test** authorization behavior.  
3. **Test** tenant isolation.  
4. **Test** failure handling.  
5. **Test** transaction behavior.  
6. **Test** retry and idempotency behavior.  
7. **Test** external provider integration boundaries.  
8. **Test** queue and job behavior.  
9. **Test** contract stability.  
10. **Add** failure-path coverage for workflows involving money, credits, providers, or durable side effects.  
11. **Confirm** a backend feature is not done until all architectural requirements are satisfied.

Definition of done requires:

- layer boundaries are respected  
    
- business logic lives in services  
    
- tenant boundaries are enforced  
    
- authorization is implemented  
    
- data access follows approved patterns  
    
- side effects are sequenced intentionally  
    
- external providers are abstracted  
    
- logging and error handling are sufficient  
    
- async work is queued where appropriate  
    
- API contracts are stable  
    
- tests cover architectural risk  
    
- [ ] Architecture-relevant tests exist  
        
- [ ] Failure-path coverage exists for critical workflows  
        
- [ ] Definition of done is satisfied

### Phase 15: Enforce Explicit Prohibitions and Exception Requests

1. **Reject** fat controllers or route handlers.  
2. **Reject** business logic in transport code.  
3. **Reject** direct provider calls from controllers or handlers.  
4. **Reject** unscoped multi-tenant queries.  
5. **Reject** silent response-shape drift.  
6. **Reject** swallowed exceptions.  
7. **Reject** unbounded list endpoints.  
8. **Reject** ad hoc raw SQL in standard application code.  
9. **Reject** duplicate implementations of shared platform concerns.  
10. **Reject** retry-unsafe jobs.  
11. **Reject** billable side effects without idempotency and failure semantics.  
12. **Require** formal exception documentation for any approved deviation.  
13. **Submit** exception requests through an Architecture Decision Record (ADR) or the approved Jira ticket type.  
14. **Document** the exact standard being broken.  
15. **Document** why the exception is necessary.  
16. **Document** why the standard approach is insufficient.  
17. **Document** the operational risks.  
18. **Document** the mitigation plan.  
19. **Document** whether the exception is temporary or permanent.  
20. **Route** the request to the Chief Architect or Feasibility Lead for review and approval.  
21. **Reject** the reason `Faster to implement` as a valid exception basis.

**IF** a pull request violates a standard and no approved ADR or Jira exception exists, **THEN** block the pull request.

Exception request template:

```
### Architecture Exception Request

## Common Mistakes & Fixes
| Common Mistake | Fix |
| :---- | :---- |
| Controller contains business workflows and database decisions | Move orchestration, conditionals, and workflow rules into a service |
| Route handler calls Stripe, OpenAI, or another provider directly | Create or reuse an internal provider adapter and call it from a service |
| Multi-tenant query relies on client-supplied tenant ID without server validation | Derive tenant scope from approved server-side context and enforce it before querying |
| Collection endpoint returns all records without limits | Add pagination, default limits, maximum limits, sorting, and filtering |
| Raw SQL is added in a controller for convenience | Move the query into an approved repository, query service, or centralized CRM query engine |
| Job retries can create duplicate charges or notifications | Add idempotency keys, deduplication logic, and retry-safe workflow design |
| Team changes response shape without rollout planning | Define contract migration steps and versioning or rollout plan before merging |
| Engineers ask for Slack approval to break a standard | Require an ADR or approved Jira exception request and formal approval |
| Controller grows to hundreds of lines with branching on database state | Split the workflow into a service boundary and keep the controller thin |
| Caching is added with no invalidation plan | Define explicit invalidation triggers before enabling the cache |

## Success Criteria
- [ ] Every backend feature can be explained as entrypoint, authorization/validation, service orchestration, data access, side effects, and response  
- [ ] Controllers and handlers remain thin  
- [ ] Business logic lives in services  
- [ ] Data access follows approved patterns  
- [ ] Provider integrations are abstracted behind adapters  
- [ ] Multi-tenant boundaries are explicit and enforced  
- [ ] Unbounded endpoints do not exist  
- [ ] Async work is queued where appropriate  
- [ ] Jobs are idempotent and observable  
- [ ] Error handling is intentional and structured  
- [ ] Critical operations are auditable  
- [ ] Code review enforcement is active  
- [ ] Exceptions are formal, documented, and approved through the required path  
- [ ] Engineers do not rely on one person as the “human runtime” for architecture decisions

## Storage & Access
Store this playbook in the company’s central playbook library in a single accessible digital location.

**Always Open Policy** Keep this playbook open and visible during:

- architecture reviews  
- pull request reviews  
- backend feature implementation  
- onboarding and training  
- exception review discussions

Use this playbook for:

- training new backend engineers  
- cross-training senior and junior engineers  
- code review calibration  
- architecture consistency checks  
- post-incident process correction

After any architecture violation, review this playbook and ask:

1. Do we already have a playbook for this?  
2. Was the playbook followed?  
3. Is the playbook outdated?  
4. Does the playbook need to be updated before the next review cycle?

**Next review date:** 2026-07-01

## Next review date
2026-09-24

## Standard Being Broken
[Insert exact section and rule]

## Why This Exception Is Necessary
[Insert reason]

## Why the Standard Approach Is Insufficient
[Insert reason]

## Operational Risks
[Insert risks]

## Mitigation Plan
[Insert controls]

## Duration
[Temporary or Permanent]

## Approval
Chief Architect / Feasibility Lead
```

- [ ] Prohibitions are enforced in review  
- [ ] Exception path is documented  
- [ ] Approval authority is explicit  
- [ ] Invalid shortcut reasoning is rejected
