# Days 24–25: Writing the First Functional Block Automation


Days 24–25 are where Month 2 becomes real.

The team now takes the Core Feature Matrix from Days 21–23 and turns the first set of Severity 2 functional promises into blocking Playwright tests.

These are not No-Fly Zone catastrophic failures.
These are “the user can reach the feature, but the feature does not actually work” failures.

The goal is to promote a carefully selected batch of reliable functional tests into the pull request gate so that Simplabots now blocks merges when core feature behavior is broken.

## Why Days 24–25 Matter

Month 1 proved:

- the pipeline could be trusted

- the smoke gate could stay high-signal

- flakes could be quarantined

- CI/CD and ChatOps were stable enough to support enforcement

Now the team begins enforcing the 60% Strainer:

If a core feature is visible, available, and central to user value, it must function correctly.

This means the PR gate will now block for issues such as:

- a dropdown that does not open

- a save button that does nothing

- a valid form that never persists

- a filter/search control that never changes results

- a configuration panel with unusable options

- a visible action with no success or failure feedback

## Day 24: Select and Scaffold the First Severity 2 Tests

Day 24 is about choosing the right first tests.

The first Month 2 functional blockers should be:

- high-value

- common user workflows

- deterministic

- not overly dependent on unstable live data

- not likely to reintroduce flake into the PR gate

### Recommended First Test Categories for Simplabots

Based on the earlier Core Feature Matrix, strong initial candidates include:

- Dropdown / select inputs must open and render usable options

- Profile/account save flows must persist valid input

- Knowledge-base form save flows must visibly succeed

- Chattie thread rename/share/delete actions must produce usable results

- Widget / bot configuration panels must load options and accept valid changes

- Search/filter UI must produce a visible state change when used correctly

### Recommended Rule for First Batch

For Days 24–25, the team should prioritize 3–5 strong functional-block tests, not 20 weak ones.

The first set should be reliable enough to trust in PR blocking.

## Day 24: Reuse the Mocking and Fixture Strategy

These functional tests should reuse the Day 7 patterns where appropriate.

Use live backend when the goal is to prove true persistence or a critical integration path.

Use mocked responses when the goal is to prove that the UI correctly:

- renders valid options

- handles valid/empty/error states

- reacts to controlled feature data

- displays the right success/failure feedback

### Decision Rule

| Test Type | Use Live Backend | Use Mocking |
| --- | --- | --- |
| True persistence verification | Yes | Sometimes no |
| Dropdown option rendering | Optional | Yes |
| Filter behavior driven by dataset shape | Optional | Yes |
| Success/error message handling | Optional | Yes |
| Core “save actually persisted” path | Yes | No, or hybrid |
| Loading/error boundary for config panels | No | Yes |

## Day 24: Suggested Test Structure

Recommended folder organization:

tests/

├── smoke/

│   ├── auth/

│   ├── severity1/

│   └── severity2/

│       ├── dropdowns/

│       ├── saves/

│       ├── filters/

│       ├── chattie/

│       └── config/

├── fixtures/

├── pages/

└── quarantine/



If the team wants to keep the existing tests/smoke/** layout simpler, use:

tests/

├── smoke/

│   ├── auth.spec.ts

│   ├── core-agent-flow.spec.ts

│   ├── credit-flow.spec.ts

│   ├── functional-dropdowns.spec.ts

│   ├── functional-profile-save.spec.ts

│   ├── functional-knowledge-base-save.spec.ts

│   └── functional-widget-config.spec.ts

├── fixtures/

├── pages/

└── quarantine/



## Day 24: Tagging Strategy

Month 2 tests should be tagged clearly.

Recommended tags:

- @smoke → included in PR gate

- @sev2 → functional-block classification

- @core-feature → feature is central to product value

Example:

test(

'profile update saves valid input',

{ tag: ['@smoke', '@sev2', '@core-feature'] },

async ({ page }) => {

// test body

},

);



If a test is still under evaluation, keep it advisory first:

test(

'widget configuration loads usable options',

{ tag: ['@advisory', '@sev2', '@core-feature'] },

async ({ page }) => {

// test body

},

);



Then promote it to @smoke after it proves stable.

## Day 25: Implement the First Functional Block Tests

Below are recommended Simplabots-aligned examples.

These examples use assumptions and should be adjusted to match actual routes, labels, and test IDs.

## Functional Block Test 1: Dropdown Must Open and Render Options

This checks a visible feature control that must be usable.

import { test, expect } from '@playwright/test';

test(

'Severity 2: configuration dropdown opens and displays selectable options',

{ tag: ['@smoke', '@sev2', '@core-feature'] },

async ({ page }) => {

await page.goto('/paige/create');

const dropdownTrigger = page.getByRole('button', { name: /voice|provider|model/i });

await expect(dropdownTrigger).toBeVisible();

await dropdownTrigger.click();

await expect(

page.getByRole('option').or(page.getByText(/openai|elevenlabs/i)),

).toBeVisible();

},

);

### What It Catches

- dropdown does not open

- options fail to render

- panel appears empty

- user cannot continue the feature flow

### Good Candidate for Mocking

Yes — mock the provider/options response if needed for determinism.

## Functional Block Test 2: Save Button Must Persist Valid Input

This checks that a valid edit/save flow actually works.

import { test, expect } from '@playwright/test';

test(

'Severity 2: valid profile input saves successfully',

{ tag: ['@smoke', '@sev2', '@core-feature'] },

async ({ page }) => {

await page.goto('/settings/profile');

const nameField = page.getByRole('textbox', { name: /name|full name/i });

const saveButton = page.getByRole('button', { name: /save|update/i });

await expect(nameField).toBeVisible();

await nameField.fill('QA Functional Save Test');

const saveResponse = page.waitForResponse((response) =>

response.request().method() === 'PATCH' ||

response.request().method() === 'POST'

);

await saveButton.click();

await saveResponse;

await expect(

page.getByText(/saved|updated successfully|changes saved/i),

).toBeVisible();

},

);

### What It Catches

- save button is clickable but inert

- request is never sent

- request succeeds but UI shows no confirmation

- input does not persist visibly

### Better Follow-Up Version

Revisit/reload the page and verify the saved value remains.

## Functional Block Test 3: Knowledge Base Form Save Must Work

This validates structured form behavior, which is a strong Month 2 candidate.

import { test, expect } from '@playwright/test';

test(

'Severity 2: knowledge-base form accepts valid input and saves',

{ tag: ['@smoke', '@sev2', '@core-feature'] },

async ({ page }) => {

await page.goto('/knowledge-base');

const input = page.getByRole('textbox', { name: /full name|company name|email/i });

const saveButton = page.getByRole('button', { name: /save|continue|submit/i });

await expect(input).toBeVisible();

await input.fill('Functional Save Value');

const saveResponse = page.waitForResponse((response) =>

response.url().includes('/api/knowledge-base-responses') &&

response.request().method() === 'POST'

);

await saveButton.click();

await saveResponse;

await expect(

page.getByText(/saved|updated|success/i),

).toBeVisible();

},

);

### What It Catches

- form interaction works visually but save fails

- valid input goes nowhere

- response is returned but no user-facing success exists

## Functional Block Test 4: Filter or Search Must Change Visible Results

This verifies that controls are not decorative.

import { test, expect } from '@playwright/test';

test(

'Severity 2: filter interaction changes visible result state',

{ tag: ['@smoke', '@sev2', '@core-feature'] },

async ({ page }) => {

await page.goto('/feasibility/hunter/jobs');

const searchBox = page.getByPlaceholder(/search jobs/i);

await expect(searchBox).toBeVisible();

await searchBox.fill('Engineer');

await expect(

page.getByText(/engineer/i),

).toBeVisible();

},

);

### Better Mocked Version

Use a mocked dataset so the team controls the filtered result set exactly.

import { test, expect } from '@playwright/test';

test(

'Severity 2: job filter shows matching results for valid search input',

{ tag: ['@smoke', '@sev2', '@core-feature'] },

async ({ page }) => {

await page.route('**/feasibility/hunter/api/jobs**', async (route) => {

await route.fulfill({

status: 200,

contentType: 'application/json',

body: JSON.stringify({

jobs: [

{ id: 1, title: 'Frontend Engineer', location: 'Remote', createdAt: new Date().toISOString() },

{ id: 2, title: 'Backend Engineer', location: 'Austin', createdAt: new Date().toISOString() },

],

totalPages: 1,

}),

});

});

await page.goto('/feasibility/hunter/jobs');

const searchBox = page.getByPlaceholder(/search jobs/i);

await searchBox.fill('Frontend');

await expect(page.getByText('Frontend Engineer')).toBeVisible();

await expect(page.getByText('Backend Engineer')).not.toBeVisible();

},

);

### What It Catches

- search box input does nothing

- filtering logic is broken

- UI updates fail after valid user input

## Functional Block Test 5: Feature Action Must Return Visible Success or Failure State

This test ensures the user is never left guessing.

import { test, expect } from '@playwright/test';

test(

'Severity 2: feature action returns visible user feedback',

{ tag: ['@smoke', '@sev2', '@core-feature'] },

async ({ page }) => {

await page.goto('/navi/billing/cards');

const actionButton = page.getByRole('button', { name: /delete payment method|update|save/i }).first();

await expect(actionButton).toBeVisible();

await actionButton.click();

await expect(

page.getByText(/success|saved|updated|failed|error/i),

).toBeVisible();

},

);

### What It Catches

- visible action triggers no feedback

- success path is silent

- failure path is silent

- user cannot tell whether the feature worked

## AI / Copilot Strategy for Days 24–25

The team should use Copilot for test variation generation, not for deciding standards.

Good prompt example:

Copilot Prompt:
“Write a Playwright test for a Simplabots configuration dropdown that must open, render options, and allow selection of a valid option. Use getByRole first, wait for visible option state, and tag the test with @smoke, @sev2, and @core-feature. Do not use CSS selectors or waitForTimeout.”

Another:

Copilot Prompt:
“Generate three deterministic Playwright tests for a knowledge-base save flow: one success case, one empty-state validation case, and one API error-state case using page.route() and fixtures. Keep assertions outside Page Objects.”

And another:

Copilot Prompt:
“Create a Playwright test that mocks a jobs API response and verifies that typing a valid search term filters the visible list correctly. Use realistic fixture data and no raw JSON inside the spec file.”

## Promotion Rule: Advisory First, PR Gate Second

Not every new functional test should enter the PR gate immediately.

Recommended promotion path:

- Write the test.

- Run locally repeatedly.

- Run in CI as advisory if needed.

- Review traces and stability.

- Promote to @smoke only after confidence is established.

### Promotion Checklist

A new Month 2 functional test can join the blocking gate only if:

- it validates a true core feature

- it is deterministic

- it does not rely on brittle selectors

- it avoids waitForTimeout

- it passes repeated runs

- it does not collide with shared state

- it has clear success/failure assertions

- it has agreed QA/Engineering support as a blocking rule

## PR Gate Command for Month 2

Once promoted, these new functional tests join the trusted gate.

Recommended command:

pnpm exec playwright test --grep @smoke --grep-invert @quarantine



That means newly promoted @sev2 tests block merges only when they are also marked @smoke.

## Days 24–25 Deliverable

By the end of Day 25, the team should have:

- the first batch of Month 2 functional-block tests written

- at least 3–5 core feature tests implemented

- reusable fixtures or mocks for deterministic feature behavior

- agreed tagging for new functional tests

- at least one test covering:

- dropdown usability

- valid save persistence

- filter/search behavior

- configuration panel option rendering

- user-facing success/failure feedback

- selected stable tests promoted into the PR gate

## Advisor Checklist for You

- [ ] Did the team choose high-value, deterministic feature tests first?

- [ ] Are the new tests aligned with the Core Feature Matrix from Days 21–23?

- [ ] Did the team avoid flooding the PR gate with too many new blockers at once?

- [ ] Are mocking and fixtures used where they improve determinism?

- [ ] Are new tests tagged consistently with @smoke, @sev2, and @core-feature?

- [ ] Did the team verify that promoted tests are stable enough to block merges?

- [ ] Does the Month 2 PR gate still exclude quarantined tests?

## Guiding Principle

Core features must be functionally real, not visually present.

Days 24–25 turn the 60% Strainer from a policy into an enforcement mechanism.

If the control appears in the UI, accepts valid input, and represents a real product promise, it must now work well enough to survive the PR gate.

