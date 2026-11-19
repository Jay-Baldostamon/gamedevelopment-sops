## Mid-Level Frontend Engineer (L2) — Technical Specification of Role

### 1\. Technical Execution

**Autonomous Feature Delivery** Independently translates high-level Product Requirements Documents (PRDs) and complex Figma files into production-ready frontend systems. The L2 is expected to decompose their own work. Examples include:

* Architecting a multi-step, form-heavy user onboarding flow, deciding between local state, global state (e.g., Zustand/Redux), or URL-driven state based on specific UX requirements.  
* Implementing complex data grids with client-side sorting, filtering, and pagination, including optimistic UI updates during data mutations.

Acceptance criteria are provided by Product, but the L2 is expected to identify edge cases, missing design states (e.g., empty, loading, error, offline), and accessibility requirements before writing code.

**Robust Component Architecture** Moves beyond basic component implementation to systemic UI design.  
   
The L2 must:

* Extract reusable logic into custom React hooks (e.g., useDebounce, usePagination).  
* Author components that strictly adhere to the Single Responsibility Principle and are highly composable.  
* Ensure all new features meet WCAG AA accessibility standards (proper ARIA roles, keyboard navigation, screen-reader testing) without being explicitly prompted.

**Comprehensive Test Engineering** Takes ownership of feature stability. Commits must include an appropriate mix of unit, integration, and end-to-end (E2E) testing. 

The L2 must:

1. Write integration tests (@testing-library/react) that mock network requests (e.g., MSW) to verify entire user flows, not just isolated components.  
2. Implement E2E tests (Playwright/Cypress) for critical path user journeys (e.g., authentication, checkout).  
3. Actively monitor and maintain test suite health, addressing flaky tests promptly.

### 2\. System & Architecture

**Frontend System Design & Performance** Must maintain a deep understanding of browser rendering pipelines, the React reconciliation process, and network optimization. The L2 is responsible for:

* **Bundle Optimization:** Proactively managing bundle sizes using dynamic imports (React.lazy), route-level code splitting, and analyzing Webpack/Vite bundle outputs.  
* **Core Web Vitals:** Ensuring new features do not regress LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), or INP (Interaction to Next Paint).  
* **Caching Strategies:** Designing effective client-side caching mechanisms (via React Query/Apollo) to minimize redundant network requests and improve perceived performance.

**Technical Design Documentation (RFCs)** Before executing features spanning multiple domains or introducing new libraries to the bundle, the L2 must draft a lightweight Request for Comments (RFC) document outlining:

* The proposed architecture and state tree.  
* Evaluated alternatives and why they were rejected.  
* Security and performance implications.

**Domain Load & Incident Ownership** Reliably manages **3–4 complex UI domains** (e.g., the primary user dashboard, the checkout flow, and the authentication system). The L2 acts as the primary technical point of contact for these areas, triaging bugs, managing technical debt, and participating in the on-call rotation for frontend-related alerts (e.g., Sentry spike anomalies).

### 3\. Process & Communication

**The "Rabbit Hole" Protocol (2-Hour Timebox)** While L2s are expected to be highly autonomous, they must guard against unproductive thrashing. Upon encountering a severe architectural blocker or obscure framework bug:

1. **0–1 hour:** Deep debugging, source code inspection of third-party modules, and isolating the reproduction case.  
2. **1–2 hours:** Drafting a minimal reproducible example (CodeSandbox) or a technical summary of the blocker and attempted solutions.  
3. **At T+2 hours:** Escalation to an L3 (Senior) or Staff Engineer is mandatory.

**Code Review Leadership** Acts as a mandatory approver for L1 and peer PRs. The L2's review focus shifts from syntax to architecture and UX:

* Identifying unnecessary re-renders (useCallback/useMemo optimizations).  
* Challenging brittle CSS selectors or non-responsive layouts.  
* Coaching L1s on defensive programming and better testing strategies.

**Incident Response & Post-Mortems** If the L2 introduces or discovers a critical production defect:

1. Executes the immediate rollback or hotfix in coordination with operations.  
2. Authors a blameless Post-Mortem document within 48 hours detailing the *Root Cause*, *Impact*, and *Action Items* (e.g., adding a specific ESLint rule or Playwright test to prevent recurrence).

## Promotion Criteria → Senior Frontend Engineer (L3)

Promotion is indicated when the L2 consistently demonstrates the following, transitioning from *feature delivery* to *organizational impact and system architecture*:

| Capability | Evidence |
| :---- | :---- |
| **Cross-Domain Architecture** | Designs frontend systems that span the entire application ecosystem, anticipating product needs 6–12 months out. Successfully drives major refactors (e.g., migrating a legacy state management system). |
| **Tooling & Infrastructure** | Authors internal tooling that accelerates the entire team. Configures advanced CI/CD pipelines, optimizes the bundler (Vite/Turbopack), and sets up organization-wide linting/testing standards. |
| **Mentorship & Multiplier** | Measurably elevates the output of L1s and L2s. Regularly leads pair-programming sessions, hosts tech-talks, and unblocks peers before they hit their timebox limits. |
| **Stakeholder Negotiation** | Pushes back on Product/Design when requirements introduce unacceptable technical debt or UX degradation, proposing pragmatic alternatives that balance business needs with system health. |
| **Systemic Quality** | Achieves and maintains strict adherence to error budgets. Consistently drives down client-side latency and reduces the aggregate volume of user-reported frontend bugs across the platform. |

**The L2→L3 transition is fundamentally a shift from building the application to building the *systems, tools, and teams* that build the application.**  
