# Day 4: Resilient Locator Strategy


Today is about making selector strategy stable enough to survive frequent UI changes.
For hurdman/simplabots (Next.js App Router + authenticated surfaces + agent UIs), fragile selectors will create false failures and slow the team down.
The objective is to enforce a strict locator hierarchy and align QA + Engineering on testability contracts.

### Session: Ban Fragile Selectors, Adopt Semantic Targeting

Deep CSS chains and XPath are prohibited for normal test development.

- Team aligns on why semantic locators are more stable:

- They map to the accessibility tree and user-visible intent.

- They are less sensitive to className/layout churn.

- They improve readability and maintenance.

- In Simplabots context:

- Authenticated pages under src/app/(authenticated)/ can evolve quickly.

- Agent UI structures may change while behavior remains the same.

- Selector strategy must survive refactors without rewriting entire smoke specs.

### Session: Locator Priority Hierarchy (Team Standard)

Adopt and enforce this priority order for all new Playwright code:

| Priority | Locator Method | Example | When to Use It |
| --- | --- | --- | --- |
| 1. Best | getByRole() | page.getByRole('button', { name: /sign in/i }) | Default for interactive controls (buttons, links, menus, tabs, inputs). |
| 2. Excellent | getByLabel() / getByText() | page.getByLabel(/email/i) | Form controls and user-visible copy assertions. |
| 3. Fallback | getByTestId() | page.getByTestId('agent-send-button') | When semantic hooks are not available/reliable. |
| 4. Banned | Raw CSS / XPath | page.locator('div > form > ...') | Prohibited except explicit legacy/3rd-party exceptions. |

Team Rule: Any PR introducing raw CSS/XPath locators must justify why semantic/testid options were impossible.

### Session: Use Playwright Codegen for Discovery (Not Final Test Authoring)

Use codegen to inspect how Playwright naturally identifies elements in Simplabots flows.

pnpm playwright codegen http://localhost:3000



Guidelines:

- Use codegen to discover strong selectors.

- Refactor generated output into your POM structure (tests/pages/**).

- Remove brittle selectors before committing.

- Validate key surfaces:

- login form

- authenticated navigation

- one agent interaction path (send prompt / run action)

### Session: QA–Dev Test ID Pact for Simplabots

When semantic locators are insufficient (icon-only buttons, abstract cards, dynamic widgets), use data-testid as a stable contract.

Define a naming convention (example):

- auth-login-submit

- agent-send-button

- tenant-switcher-trigger

- credits-balance-value

Protocol:

- QA requests test ids for hard-to-target elements.

- Devs add ids during feature work or QA opens targeted PRs.

- Test ids remain stable unless behavior meaning changes.

Example:

<button data-testid="agent-send-button">Send</button>



### Session: Guardrail for AI-Generated Test Code

Because the team uses Copilot heavily, enforce locator rules in shared guidance so AI does not reintroduce bad patterns.

Add/update team instructions (for example in .github/copilot-instructions.md) with:

Always generate Playwright locators using this hierarchy:

1) page.getByRole()

2) page.getByLabel() / page.getByText()

3) page.getByTestId() only as fallback

Never generate raw CSS selectors, class-chain selectors, or XPath

unless explicitly requested for legacy third-party integration cases.



Team validation step:

- Pick one real Simplabots form or agent panel.

- Document the final chosen resilient locators in a short markdown note.

- Confirm none rely on deep CSS or XPath.

### Day 4 Deliverable

Publish a Locator Strategy Standard document that includes:

- the enforced hierarchy

- banned patterns

- data-testid naming convention

- examples from actual Simplabots pages

- AI prompt/instruction guardrail text

This becomes the mandatory standard before Day 5 smoke implementation.

### Advisor Checklist for You (Leader) at EOD

- [ ] Team ran pnpm playwright codegen against local Simplabots.

- [ ] Locator hierarchy is documented and accepted by QA + Engineering.

- [ ] data-testid naming convention is agreed and published.

- [ ] Copilot/team AI instructions explicitly ban raw CSS/XPath by default.

- [ ] At least one authenticated flow and one agent UI area now have approved resilient locator mappings.

