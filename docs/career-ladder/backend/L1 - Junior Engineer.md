## Junior Engineer (L1) — Technical Specification of Role

### 1\. Technical Execution

**Scoped Ticket Delivery** Independently resolves well-defined, pre-decomposed JIRA/Linear tickets scoped to a single domain boundary. Examples include:

- Implementing a new `zod` validation schema (e.g., `z.object({...}).refine(...)`) and wiring it to a React Hook Form resolver on a specified form component.
- Diagnosing and patching a CSS `overflow` / `max-width` rendering defect isolated to a specific viewport breakpoint on the mobile dashboard layout.

Acceptance criteria, affected files, and expected behavior are provided in the ticket. The L1 is not expected to author these artifacts.

**Responsible AI-Assisted Development** Authorized to use GitHub Copilot for code generation and autocompletion. However, the L1 assumes full ownership of all accepted suggestions. During PR review, the L1 must be able to:

- Trace the execution path of any generated code line-by-line.
- Articulate _why_ a specific pattern was used over an alternative (e.g., why a `.flatMap()` vs. a nested `.map().filter()`).
- Identify potential failure modes or edge cases the generated code does not handle.

Accepting Copilot output without comprehension is treated as a code quality violation.

**Regression Test Coverage** Every bug-fix commit must be accompanied by a corresponding test (unit via `vitest`/`jest` or integration via `@testing-library/react` / Playwright, as appropriate to the defect's scope). The test must:

1. Reproduce the original failure state (red).
2. Pass against the fix (green).
3. Cover at minimum one boundary/edge case adjacent to the original defect.

This enforces defensive thinking and builds regression safety nets over time.

---

### 2\. System & Architecture

**Codebase Orienteering** Must develop and demonstrate a working mental model of the Vanguard request lifecycle:

```
Client (Browser)
  → Next.js Route Handler / Server Action
    → Service Layer (business logic)
      → Prisma ORM (query builder / model layer)
        → PostgreSQL (persistence)
          → Response serialization → Client
```

The L1 should be able to, given any feature, identify which layer owns the relevant logic and locate the corresponding source files in the monorepo without assistance.

**CI/CD Safeguard Adherence ("Faraday Cage" Protocol)** All code changes must transit the established pipeline:

```
feature branch → PR → automated checks (lint, type-check, test suite) → code review approval → merge to main → AWS CodeDeploy
```

**Strictly prohibited:** force-pushing to `main`, merging with failing checks, skipping `eslint`/`prettier` enforcement, manually deploying artifacts outside the CodeDeploy pipeline, or modifying pipeline configuration (`buildspec.yml`, `appspec.yml`, GitHub Actions workflows) without L3+ approval.

**Infrastructure Load** Manages and monitors **1–2 Project Units** (e.g., a non-production EC2/ECS instance running a staging environment, or a low-traffic internal tool). Responsibilities include: monitoring health checks, responding to CloudWatch alarms, and performing basic triage — all under direct supervision of an L2 or L3 who retains escalation ownership.

---

### 3\. Process & Communication

**The 30-Minute Timeout Rule** Upon encountering a blocker, the L1 must execute the following triage sequence before escalating:

1. **0–10 min:** Search internal docs (Notion/Confluence), `README.md`, and inline code comments.
2. **10–20 min:** Query Copilot Chat / LLM tooling with the specific error message or stack trace.
3. **20–30 min:** Review application logs (`stdout`, CloudWatch, or local `docker compose logs`) for diagnostic context.

If unresolved at T+30 minutes, escalation to an L2/L3 is **mandatory** — continued solo debugging beyond this threshold without escalation is a process violation.

**PR Review Participation (Read-Only)** Required to review a minimum of **2 Senior-authored PRs per sprint** — not as an approver, but as a learning exercise. The L1 should leave at least one substantive comment or question per review to demonstrate active reading (e.g., _"Why was `useMemo` chosen here over `useCallback`?"_).

**Loud Failure Protocol** If a commit authored by the L1 triggers a production incident, failed deployment, or rollback:

1. Immediately post in `#vanguard-ops` with: the commit SHA, a one-line description of the suspected defect, and the rollback status.
2. Do **not** attempt a solo hotfix in production without L3+ authorization.

**Standing policy:** Concealing a failure or delaying incident reporting is a terminable offense. Breaking things visibly and promptly is an expected part of the L1 learning curve.

---

## Promotion Criteria → Mid-Level Engineer (L2)

Promotion is indicated when the L1 consistently demonstrates the following without requiring task decomposition from a PM or Senior Engineer:

| Capability                | Evidence                                                                                                                                                                                                                                           |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Feature decomposition** | Given a product requirement (e.g., _"Build a user notification preferences page"_), independently produces a technical breakdown: required DB schema changes (Prisma migrations), API route design, component tree, and state management approach. |
| **Schema design**         | Authors Prisma `model` definitions with correct relations (`@relation`), indexes (`@@index`), and constraints — and defends those choices in review.                                                                                               |
| **Full-stack delivery**   | Delivers end-to-end features spanning frontend (React/Next.js), API layer (route handlers/server actions), and persistence (Prisma \+ Postgres) — including test coverage — without requiring pair programming or step-by-step guidance.           |
| **Autonomous deployment** | Merges and deploys features through the full CI/CD pipeline, monitors the rollout via CloudWatch/Datadog, and can independently initiate a rollback if post-deploy metrics degrade.                                                                |
| **Infrastructure load**   | Reliably manages **3–4 Project Units** concurrently, including capacity planning and uptime ownership for those services.                                                                                                                          |

The L1→L2 transition is fundamentally a shift from **executing pre-defined tasks** to **autonomously scoping and delivering solutions** within a bounded problem domain.
