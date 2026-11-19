## Junior Engineer (L1) — Technical Specification of Role

### 1\. Technical Execution

**Scoped Ticket Delivery** Independently resolves well-defined, pre-decomposed Github/Linear tickets scoped to the client-side application or component library. Examples include:

- Translating a specific Figma frame into a responsive React component using your team's styling solution (e.g., Tailwind CSS, Styled Components) matching exact design specifications.
- Wiring a pre-existing UI component to an established API endpoint using an existing data-fetching pattern (e.g., React Query, SWR, or Apollo) and rendering loading/error states.

Acceptance criteria, target Figma links, and required data payloads are provided in the ticket. The L1 is not expected to architect the state management for complex, multi-step flows yet.

**Responsible AI-Assisted Development** Authorized to use GitHub Copilot or similar tools for code generation, boilerplate reduction, and autocompletion. However, the L1 assumes full ownership of all accepted suggestions. During PR review, the L1 must be able to:

- Explain the lifecycle and render implications of any generated React hooks.
- Articulate _why_ a specific pattern was used (e.g., why a value was derived during render instead of being synced via useEffect).
- Identify potential accessibility (a11y) or cross-browser edge cases the generated code might have missed.

Accepting Copilot output without comprehending its impact on the component render cycle is treated as a code quality violation.

**Component & Regression Test Coverage** Every bug-fix or new component commit must be accompanied by appropriate testing (unit via vitest/jest, component testing via @testing-library/react, or visual regression via Storybook). The test must:

1. Verify the component renders correctly with standard props.
2. Simulate user interaction (e.g., userEvent.click) and assert the correct callback or state change occurs.
3. Cover at minimum one boundary/error state (e.g., how the UI behaves when the data array is empty).

This enforces user-centric defensive thinking and prevents UI regressions over time.

### 2\. System & Architecture

**Codebase Orienteering** Must develop and demonstrate a working mental model of the client-side render and state lifecycle:

```
User Interaction (Browser DOM)
  → React Synthetic Event Handler
    → State Management Layer (Local useState / Global Zustand/Redux)
      → Async Data Mutation (React Query / Fetch API)
        → Component Reconciliation & Re-render
          → DOM Paint

```

The L1 should be able to, given a UI bug, identify whether the issue originates in the CSS/layout, the local component state, or the data payload received from the backend, and locate the corresponding source files in the repository.

**CI/CD Safeguard Adherence ("Faraday Cage" Protocol)** All code changes must transit the established frontend pipeline:

```
feature branch → PR → automated checks (lint, type-check, bundle size limit, test suite) → Vercel/Netlify Preview Deployment → code review approval → merge to main → Production Build
```

**Strictly prohibited:** force-pushing to main, bypassing bundle-size warnings, ignoring ESLint react-hooks/exhaustive-deps rules without a documented and approved eslint-disable comment, or deploying unreviewed code to production.

**App / Component Load** Manages and maintains 1–2 bounded UI domains (e.g., owning the internal admin dashboard's UI components, or maintaining a specific feature module like the "User Settings" view). Responsibilities include monitoring for console errors, ensuring responsiveness across standard breakpoints, and addressing layout shifts, under the direct supervision of an L2 or L3.

### 3\. Process & Communication

**The 30-Minute Timeout Rule** Upon encountering a blocker (e.g., an incomprehensible hydration error or a stubborn CSS layout issue), the L1 must execute the following triage sequence before escalating:

1. **0–10 min:** Inspect the DOM/Network tab in Chrome DevTools, check the React Developer Tools extension, and review inline code comments.
2. **10–20 min:** Query Copilot Chat / LLM tooling with the specific console error or React warning.
3. **20–30 min:** Review the component's recent git history or internal documentation to understand original intent.

If unresolved at T+30 minutes, escalation to an L2/L3 is mandatory — continued solo debugging beyond this threshold without escalation is a process violation.

**PR Review Participation (Read-Only)** Required to review a minimum of **1-2 Senior-authored** frontend PRs per sprint — not as an approver, but as a learning exercise. The L1 should leave at least one substantive comment or question per review to demonstrate active reading (e.g., _"Can you explain why we used useMemo for this data transformation instead of letting it recalculate on render?"_).

**Loud Failure Protocol** If a commit authored by the L1 triggers a production UI incident (e.g., a "White Screen of Death", broken checkout button, or massive layout break on mobile):

1. Immediately post in the relevant ops/dev channel with: the commit SHA, a description of the broken user journey, and the rollback status in the deployment platform (e.g., Vercel).
2. Do **not** attempt a solo hotfix in production without L3+ authorization.

**Standing policy:** Concealing a failure or delaying incident reporting is a terminable offense. Breaking things visibly and promptly is an expected part of the L1 learning curve.

## Promotion Criteria → Mid-Level Frontend Engineer (L2)

Promotion is indicated when the L1 consistently demonstrates the following without requiring task decomposition from a PM or Senior Engineer:

| Capability | Evidence |
| :--------- | :------- |
| **Feature decomposition**      | Given a product requirement (e.g., _"Build a multi-step onboarding flow"_), independently produces a technical breakdown: component hierarchy, global vs. local state architecture, routing strategy, and loading/error states. |
| **Performance & UX**           | Proactively identifies and resolves performance bottlenecks (e.g., unnecessary re-renders, layout thrashing, large bundle sizes) and ensures adherence to Core Web Vitals and WCAG accessibility standards.                     |
| **End-to-End Client Delivery** | Delivers complete client-side features spanning routing, complex state management, data-fetching, and pixel-perfect responsive styling—including comprehensive test coverage—without requiring step-by-step guidance.           |
| **Autonomous Deployment**      | Merges and deploys features through the pipeline, monitors frontend error tracking tools (e.g., Sentry, LogRocket) post-deployment, and independently requests a rollback if client-side error rates spike.                     |
| **Domain Load**                | Reliably manages 3–4 complex UI domains concurrently, acting as the primary point of contact for the frontend implementation of those product areas.                                                                            |
