# Day 3: Folder Structure & Page Object Model (POM)


Today is about preventing test chaos before it starts.
For hurdman/simplabots, we want clean separation between:

- Page Objects (selectors + actions)

- Test Specs (assertions + scenario intent)

Because Simplabots uses Next.js App Router and authenticated routes under src/app/(authenticated)/, our test structure must mirror real product navigation and tenancy-aware flows.

### Session: Structural Decoupling & Directory Layout

If structure is not enforced now, tests become large, duplicated, and fragile.

- POM + DRY Alignment

- Team reviews why Page Objects exist:

- UI selector changes should be updated once, not across many specs.

- Tests remain readable and business-focused.

- Rule: Page Objects model interactions; test specs validate outcomes.

- Simplabots-Aware Directory Blueprint

- Keep Playwright automation code separate from app source.

- Introduce route-aware naming that reflects authenticated agent surfaces.

Use this baseline layout:

├── playwright.config.ts

├── package.json

├── tests/

│   ├── pages/                         # Page Objects only (locators + actions)

│   │   ├── auth/

│   │   │   └── LoginPage.ts

│   │   ├── authenticated/

│   │   │   ├── DashboardPage.ts

│   │   │   └── agents/

│   │   │       ├── NaviPage.ts

│   │   │       └── ChattiePage.ts

│   │   └── shared/

│   │       ├── Navbar.ts

│   │       └── Sidebar.ts

│   ├── smoke/                         # Critical Day 5 smoke specs

│   │   ├── auth.spec.ts

│   │   ├── core-agent-flow.spec.ts

│   │   └── credit-sensitive-flow.spec.ts

│   ├── fixtures/                      # Auth state, test users, tenant helpers

│   │   └── session.ts

│   └── utils/                         # Reusable test helpers (non-assertion helpers)

│       └── testData.ts

└── .env.example



### Session: Coding the First Simplabots Page Object (TypeScript)

Team builds first Page Object for login + authenticated handoff flow.

- Create tests/pages/auth/LoginPage.ts

- Include:

- semantic locators (getByRole, getByLabel)

- navigation method

- action method for submitting credentials

- Keep methods small and reusable for future account/group/profile-aware tests.

Golden Rule (enforced):
No expect() inside any tests/pages/** file.
Assertions belong only in tests/**/*.spec.ts.

Example pattern:

import { Locator, Page } from '@playwright/test';

export class LoginPage {

readonly page: Page;

readonly emailInput: Locator;

readonly passwordInput: Locator;

readonly loginButton: Locator;

constructor(page: Page) {

this.page = page;

this.emailInput = page.getByRole('textbox', { name: /email/i });

this.passwordInput = page.getByLabel(/password/i);

this.loginButton = page.getByRole('button', { name: /log in|sign in/i });

}

async navigateTo() {

await this.page.goto('/login');

}

async executeLogin(email: string, password: string) {

await this.emailInput.fill(email);

await this.passwordInput.fill(password);

await this.loginButton.click();

}

}



### Session: Copilot Prompting Standard for Simplabots POMs

Since your team uses AI-assisted development, standardize Copilot prompts so generated code matches your architecture.

Use this prompt template:

Copilot Prompt:
"Using Playwright and TypeScript, generate a Page Object Model class for this Simplabots UI snippet. Follow our standards: use accessibility-first locators (getByRole, getByLabel) where possible, do not include assertions, keep tenant/authenticated-route awareness in method naming, and create an async action method called execute<ActionName>."

Examples:

- executeLogin

- executeCreateProject

- executeSendPromptToAgent

### Session: Connect POM to First Real Smoke Spec

Team wires page object into a spec under tests/smoke/.

- Create tests/smoke/auth.spec.ts

- Import LoginPage

- Perform login with env-backed test credentials

- Assert successful authenticated landing (URL or reliable post-login marker)

Example shell:

import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/auth/LoginPage';

test('User can log in and reach authenticated Simplabots area', async ({ page }) => {

const loginPage = new LoginPage(page);

await loginPage.navigateTo();

await loginPage.executeLogin(

process.env.E2E_USER_EMAIL as string,

process.env.E2E_USER_PASSWORD as string

);

// Assertion stays in spec file, not in page object

await expect(page).toHaveURL(/\/(dashboard|home|app)/i);

});



### Day 3 Deliverable

Commit the initial automation scaffold as the reusable team blueprint:

- tests/pages/** with first real Page Object(s)

- tests/smoke/auth.spec.ts connected to POM

- fixtures and utils skeletons for future tenant/session reuse

- documented team rule: no assertions inside Page Objects

This becomes the canonical pattern for all remaining Week 1–2 test creation.

### Advisor Checklist for You (Leader) at EOD

- [ ] Is automation code cleanly separated into tests/pages/ (POM) and tests/smoke/ (specs)?

- [ ] Did you verify there are zero expect() assertions in any Page Object file?

- [ ] Does at least one spec successfully exercise login into an authenticated Simplabots route?

- [ ] Did the team use Copilot with your standardized POM prompt?

- [ ] Are naming conventions aligned with Simplabots route context (including authenticated surfaces and agent flows)?

