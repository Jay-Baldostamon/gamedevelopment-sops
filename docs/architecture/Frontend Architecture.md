# Frontend Architecture Standards

**Status:** Target State  
**Audience:** Frontend Engineers  
**Purpose:** Define the required architectural standards for all frontend systems so that interfaces are built consistently, predictably, and scalably across the company.

## 1\. Philosophy

Frontend architecture standards are not visual preferences. They are the structural rules that keep interfaces maintainable, extensible, and coherent as multiple engineers build simultaneously across multiple products.

These standards exist to ensure that:

- frontend systems remain understandable across teams,  
- UI behavior is implemented with consistent boundaries,  
- business workflows do not get trapped inside components,  
- data-fetching and state patterns remain predictable,  
- user experience remains stable under loading, failure, and scale,  
- multiple engineers can safely build in parallel without degrading the product.

These standards are **normative**. They describe the target state engineers are expected to build toward.

---

## 2\. Applicability Markers

Each rule may include one or more of the following markers:

- **\[ALL\]** — applies to every frontend system  
- **\[REACT\]** — applies to React-based frontends  
- **\[NEXT\]** — applies to Next.js applications  
- **\[VITE\]** — applies to Vite-based frontend applications  
- **\[SPA\]** — applies to single-page applications  
- **\[LARAVEL+SPA\]** — applies to separated Laravel backend \+ SPA frontend systems

If a rule is marked **\[ALL\]**, it is mandatory regardless of framework.

---

## 3\. Non-Negotiable Principles

### 3.1 UI is not the business layer

**\[ALL\]**

Components, pages, and views must not become the primary home of business logic.

Frontend code may:

- render data,  
- collect input,  
- manage UI state,  
- invoke application actions,  
- transform data for presentation.

Frontend code must not:

- duplicate backend business rules,  
- bury workflow orchestration across unrelated components,  
- encode authorization assumptions that only the backend can guarantee,  
- scatter data mutation logic across the tree,  
- directly integrate third-party providers from arbitrary UI surfaces.

### 3.2 Components must be composable and predictable

**\[ALL\]**

A component must have a clear purpose, predictable inputs, and minimal hidden behavior.

Components should be easy to:

- understand,  
- reuse,  
- test,  
- compose,  
- replace.

### 3.3 State must be intentional

**\[ALL\]**

Frontend state must be categorized and handled according to its purpose.

Engineers must distinguish between:

- server state,  
- local UI state,  
- form state,  
- session/auth state,  
- persisted client state,  
- cross-page application state.

Unstructured state sprawl is prohibited.

### 3.4 Data flow must be clear

**\[ALL\]**

Every feature must have an explainable frontend flow:

1. route/page entry,  
2. data loading,  
3. state ownership,  
4. user interaction,  
5. mutation/action,  
6. loading/error handling,  
7. UI update.

If a feature’s behavior cannot be explained through those layers, the architecture is not acceptable.

---

## 4\. Standard Frontend Layers

## 4.1 Route / page layer

**\[ALL\]**

Examples:

- Next.js pages/routes  
- SPA route screens  
- dashboard pages  
- settings pages  
- authenticated workspace pages

Responsibilities:

- define page-level composition,  
- trigger page-level data loading,  
- establish auth/tenant context,  
- compose feature modules,  
- define page-level loading/error/empty states.

Pages must not become giant implementation files that own all behavior directly.

## 4.2 Feature / module layer

**\[ALL\]**

Responsibilities:

- own a coherent user-facing workflow or domain,  
- coordinate UI sections within that feature,  
- define feature-specific actions, hooks, forms, and state boundaries,  
- mediate between pages and reusable UI primitives.

A feature module is the preferred home for non-trivial frontend behavior.

## 4.3 Component layer

**\[ALL\]**

Responsibilities:

- presentation,  
- controlled interaction,  
- rendering composition,  
- event emission,  
- local UI behavior.

Components should be narrow in purpose and not own unrelated workflows.

## 4.4 Shared platform layer

**\[ALL\]**

Responsibilities:

- API client configuration,  
- authentication/session helpers,  
- design system primitives,  
- shared hooks,  
- app-wide providers,  
- shared validation schemas,  
- logging/telemetry utilities,  
- permissions helpers,  
- feature flag helpers.

Cross-cutting frontend infrastructure must be centralized here.

---

## 5\. Stack-Specific Implementation Guidance

### 5.1 React frontends

**\[REACT\]**

The preferred structure is:

- route/page  
- feature module  
- hooks/actions/view-model helpers  
- presentational components  
- shared platform utilities

React code must not place all logic directly in JSX-heavy page files simply because hooks make it possible.

### 5.2 Next.js frontends

**\[NEXT\]**

For Next.js systems:

- keep routing and page composition close to the app router/page boundary,  
- isolate server-side and client-side responsibilities clearly,  
- do not use server actions or route handlers as an excuse to skip architectural layering,  
- keep client components focused on interactivity and rendering,  
- keep domain/workflow logic in dedicated modules/services/actions.

### 5.3 Vite SPAs

**\[VITE\] \[SPA\]**

For Vite-based SPAs:

- route definitions must remain separate from feature implementation details,  
- data-fetching and mutation logic must not be spread across raw page components,  
- application state and server-state access patterns must be standardized.

### 5.4 Laravel backend \+ SPA frontend systems

**\[LARAVEL+SPA\]**

For separated Laravel API \+ React/Vite frontend systems:

- the frontend must treat the backend as a true API boundary,  
- business rules must not be reimplemented casually on the client,  
- client-side validation may improve UX but never replaces backend enforcement,  
- API contract stability is required because the frontend and backend evolve independently.

---

## 6\. Component Architecture Standards

### 6.1 Components must have one clear role

**\[ALL\]**

Components should generally fall into one of these categories:

- presentational UI primitives,  
- composed feature components,  
- form components,  
- data-bound container components,  
- layout components.

A component that mixes all of these roles without clear need should be split.

### 6.2 Prefer composition over monolith components

**\[ALL\]**

Large components with deeply interleaved rendering, data access, mutations, and conditional workflows must be broken into smaller units.

### 6.3 Props and interfaces must be explicit

**\[ALL\]**

Component APIs must be explicit and stable.

Avoid:

- unclear prop bags,  
- pass-through “everything” objects,  
- components that depend on hidden ambient assumptions,  
- mutation side effects triggered by render-time ambiguity.

### 6.4 Shared UI primitives belong in a design-system layer

**\[ALL\]**

Buttons, inputs, modals, tables, cards, badges, alerts, form primitives, and layout primitives must be standardized where reused across the application.

Feature teams must not repeatedly rebuild foundational UI primitives.

### 6.5 Feature-specific UI stays in the feature

**\[ALL\]**

Not everything belongs in shared components.

If a component is tightly coupled to one workflow or domain, it should remain inside that feature module.

---

## 7\. State Management Standards

### 7.1 State categories must be separated

**\[ALL\]**

Engineers must explicitly distinguish between:

- **Server state** — data loaded from APIs/backend systems  
- **UI state** — modal open/close, tabs, local toggles, selection state  
- **Form state** — user-entered inputs and validation state  
- **Session/auth state** — current user, role, token/session, tenant context  
- **Shared app state** — cross-screen state that genuinely belongs at app level  
- **Persisted client state** — local storage/session storage preferences only where justified

These state types must not be mixed casually.

### 7.2 Server state is not local component state

**\[ALL\]**

Fetched backend data must be handled with standardized server-state patterns, not arbitrary `useState` copies unless there is a deliberate reason.

### 7.3 Global state is a last resort

**\[ALL\]**

Global/shared state stores must only be used when state truly needs cross-feature or cross-route coordination.

Do not move state global simply because prop passing is inconvenient.

### 7.4 Form state must be isolated

**\[ALL\]**

Forms must use standardized form patterns and must not scatter field state logic across many unrelated components.

### 7.5 Persisted browser state must be minimal

**\[ALL\]**

Local storage/session storage should be limited to:

- safe user preferences,  
- draft-preservation where intentionally designed,  
- non-sensitive convenience state.

Sensitive or authoritative application state must not depend on client persistence.

---

## 8\. Data Fetching and API Consumption

### 8.1 API access must be centralized

**\[ALL\]**

Frontend code must use approved API clients, service modules, or query hooks rather than ad hoc fetch logic scattered throughout the component tree.

### 8.2 Data loading belongs close to feature boundaries

**\[ALL\]**

Data loading should happen at page, feature, or dedicated hook/query boundaries — not buried deep inside random leaf components unless that component is intentionally self-contained.

### 8.3 Contract assumptions must remain explicit

**\[ALL\]**

Frontend code must not make undocumented assumptions about:

- field names,  
- response shape,  
- auth failure behavior,  
- pagination structure,  
- enum semantics,  
- nullability.

Shared types/schemas should be used where available.

### 8.4 Mutation patterns must be standardized

**\[ALL\]**

Create/update/delete actions must follow standard mutation patterns:

- initiate action,  
- show pending state,  
- handle success predictably,  
- handle failure predictably,  
- revalidate or update relevant state consistently.

### 8.5 Do not duplicate backend business rules

**\[ALL\]**

The frontend may reflect or guide business behavior, but it must not become the source of truth for business enforcement.

---

## 9\. Forms and User Input

### 9.1 Forms are architecture, not just UI

**\[ALL\]**

Forms must be implemented using standardized patterns for:

- field registration,  
- validation,  
- submission,  
- pending state,  
- error presentation,  
- reset behavior,  
- draft preservation where applicable.

### 9.2 Client validation is for UX, not authority

**\[ALL\]**

Client-side validation exists to improve speed and clarity for the user.

It does not replace backend validation.

### 9.3 Form submission behavior must be explicit

**\[ALL\]**

Every form must define:

- what happens on submit,  
- what is disabled during submit,  
- how errors are surfaced,  
- whether retries are supported,  
- what success looks like,  
- whether optimistic UI is allowed.

### 9.4 Dynamic forms require shared infrastructure

**\[ALL\]**

Any metadata-driven or dynamic form system must be implemented through shared infrastructure, not recreated uniquely per feature.

This is especially important in systems interacting with backend-driven dynamic forms.

---

## 10\. Authentication, Authorization, and Tenant Context

### 10.1 Auth context must be centralized

**\[ALL\]**

Current user/session/auth context must be managed through standardized application mechanisms.

### 10.2 Frontend authorization is advisory, not authoritative

**\[ALL\]**

The frontend may hide or show UI based on permissions, but backend authorization remains the source of truth.

### 10.3 Tenant context must be respected in the UI

**\[ALL\]**

In multi-tenant systems, the frontend must clearly respect active tenant/account/company/workspace context when:

- loading data,  
- showing navigation,  
- rendering settings,  
- issuing mutations.

### 10.4 Sensitive UI actions require clear confirmation patterns

**\[ALL\]**

Destructive, billable, or cross-tenant-affecting actions must use clear confirmation UX.

---

## 11\. UX State Standards

### 11.1 Every async view must define all core states

**\[ALL\]**

For data-driven screens and components, engineers must intentionally design:

- loading state,  
- empty state,  
- error state,  
- success/content state.

### 11.2 Pending actions must be visible

**\[ALL\]**

When the user triggers a mutation or expensive action, the UI must make pending status obvious.

### 11.3 Errors must be useful

**\[ALL\]**

Errors shown to users must be understandable and actionable where possible.

Generic silent failure is prohibited.

### 11.4 Success feedback must be proportionate

**\[ALL\]**

The UI must confirm important successful actions without overloading the interface with unnecessary notifications.

---

## 12\. Design System and Consistency

### 12.1 Shared visual primitives must be reused

**\[ALL\]**

Repeated visual patterns must be abstracted into shared components or design tokens.

### 12.2 Design consistency outranks local convenience

**\[ALL\]**

Engineers must not introduce one-off visual behaviors, spacing systems, or interaction patterns where standardized options exist.

### 12.3 Accessibility is part of architecture

**\[ALL\]**

Accessibility is a structural requirement, not a finishing pass.

Frontend systems must support:

- semantic structure,  
- keyboard interaction,  
- focus visibility,  
- appropriate labeling,  
- color/contrast compliance where relevant,  
- non-mouse accessibility for major workflows.

---

## 13\. Performance Standards

### 13.1 Rendering cost must be intentional

**\[ALL\]**

Frontend code must avoid unnecessary re-renders, oversized component trees, and wasteful state coupling.

### 13.2 Bundle growth must be controlled

**\[ALL\]**

Large dependencies, repeated libraries, and feature bloat must be scrutinized.

### 13.3 Lazy loading must be used where justified

**\[ALL\]**

Large, infrequent, or admin-only sections should be lazy-loaded where it improves performance meaningfully.

### 13.4 Data loading patterns must scale

**\[ALL\]**

Frontend engineers must account for:

- pagination,  
- virtualization where needed,  
- search/filter cost,  
- large-table rendering,  
- repeated polling/subscription costs.

---

## 14\. External Integrations and AI-Driven UI

### 14.1 Provider integrations must be abstracted on the frontend too

**\[ALL\]**

Even if the backend owns provider truth, frontend integrations with external systems must still be mediated through internal abstractions or shared feature modules.

### 14.2 AI-enabled UX must define behavioral boundaries

**\[ALL\]**

Any AI-driven UI must explicitly define:

- when requests are initiated,  
- what model/provider state is visible to users,  
- loading behavior,  
- retry behavior,  
- failure behavior,  
- usage/cost visibility where relevant,  
- streaming behavior where applicable,  
- content safety and fallback UX expectations.

### 14.3 Billable/generative actions require explicit UX

**\[ALL\]**

If a user action may consume credits, trigger billing, or start expensive generation:

- the UI must communicate that clearly,  
- pending/progress state must be visible,  
- duplicate triggering must be controlled,  
- success/failure handling must be explicit.

---

## 15\. Error Handling and Frontend Observability

### 15.1 Silent failures are prohibited

**\[ALL\]**

Frontend code must not swallow errors and leave users or developers without signal.

### 15.2 Error boundaries and fallback mechanisms must be deliberate

**\[ALL\]**

Critical application surfaces should use appropriate boundary/fallback patterns so that one feature failure does not collapse the entire interface.

### 15.3 Logging/telemetry must be standardized

**\[ALL\]**

Where frontend telemetry exists, it must use approved logging/analytics/error-reporting pathways rather than ad hoc console-only debugging.

### 15.4 Console noise is not observability

**\[ALL\]**

Console logging may assist development, but it is not a substitute for structured frontend error tracking.

---

## 16\. Testing Requirements

### 16.1 Frontend architecture-relevant tests are mandatory

**\[ALL\]**

Tests must cover not only rendering correctness, but also:

- state behavior,  
- interaction flows,  
- error states,  
- permission-based rendering,  
- form behavior,  
- async transitions,  
- critical workflow integrity.

### 16.2 Test at the right level

**\[ALL\]**

Use the appropriate level for each concern:

- unit tests for utilities and pure logic,  
- component tests for isolated rendering and interaction,  
- feature/integration tests for workflows,  
- end-to-end tests for critical user journeys.

### 16.3 Complex workflows require integration coverage

**\[ALL\]**

Any multi-step form, billing flow, AI-generation flow, or tenant-sensitive workflow requires integration-level testing.

---

## 17\. Definition of Done for Frontend Work

A frontend feature is not done unless:

- page/feature/component boundaries are clear,  
- state ownership is intentional,  
- server-state handling follows approved patterns,  
- forms follow standardized structure,  
- loading/error/empty/success states are implemented,  
- auth/tenant context is respected,  
- accessibility expectations are met,  
- design system usage is consistent,  
- performance implications are reasonable,  
- tests cover the architectural risk of the feature.

---

## 18\. Explicit Prohibitions

The following are prohibited unless formally approved as an exception:

- giant page components that own all logic directly,  
- business logic buried in UI components,  
- ad hoc fetch logic throughout the component tree,  
- duplicated permission logic across screens,  
- unstructured global state sprawl,  
- silent loading failures,  
- missing loading/error/empty states for async surfaces,  
- custom visual primitives where shared ones exist,  
- direct duplication of backend rules as client authority,  
- one-off AI/generative workflows without shared UX patterns,  
- inaccessible interaction patterns,  
- form behavior implemented differently in every feature.

---

## 19\. Exceptions Process

Exceptions to these standards must be explicit, documented, and limited.

A valid exception must state:

- the standard being broken,  
- why the exception is necessary,  
- why the standard approach is insufficient,  
- user/product impact,  
- technical risk,  
- mitigation plan,  
- whether the exception is temporary or permanent.

“Faster to ship” is not a valid architectural exception by itself.

---

## 20\. Implementation Notes by System Type

### Next.js applications

**\[NEXT\]**

- keep page routing boundaries clean,  
- clearly separate server and client responsibilities,  
- avoid collapsing architecture into app-router convenience,  
- keep shared modules reusable across routes.

### React \+ Vite SPAs

**\[REACT\] \[VITE\] \[SPA\]**

- keep routing, data loading, and feature orchestration separate,  
- treat backend APIs as durable contracts,  
- centralize API clients, auth, and shared UI patterns.

### Laravel API \+ SPA applications

**\[LARAVEL+SPA\]**

- the frontend is a true client of the backend,  
- frontend code must assume API boundaries are real,  
- contract drift between backend and frontend must be treated as an architectural failure, not a minor inconvenience.

---

## 21\. Final Standard

The frontend must be engineered so that no single lead, designer, or senior frontend engineer is required as the living architecture document for every major UI decision.

If a feature can only be implemented correctly after asking one specific person how the frontend is “supposed to work,” the frontend architecture is not sufficiently standardized yet.  
