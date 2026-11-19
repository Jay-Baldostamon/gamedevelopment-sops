# Days 29–30: Introducing Strict UI Logic Checks


Days 29–30 focus on improving assertion quality.

At this stage, the Simplabots Playwright suite already has:

- Severity 1 blocking coverage

- Month 2 Severity 2 functional blockers entering the PR gate

- mocking and fixtures

- flake controls

- CI/CD quality gates

- worker tuning

Now the next improvement is not necessarily more tests.
It is better tests.

The goal is to stop accepting shallow confidence from assertions like:

- “the button is visible”

- “the modal opened”

- “the field exists”

- “the page rendered”

and start verifying actual UI logic:

- the button becomes disabled while loading

- the loader appears and then clears

- the selected value changes after interaction

- duplicate submission is prevented

- success/error feedback appears when expected

- the user can tell what happened

- controls are not just visible, but functionally correct

## Why This Matters

A visible element is not the same as a working feature.

A form can render and still fail to save.
A dropdown can appear and still never populate options.
A button can be clickable and still send duplicate requests.
A modal can open and still trap the user with no recovery path.

Days 29–30 improve the suite’s behavioral signal by asserting actual state changes and user feedback.

## Day 29: Upgrade Assertions from Presence to Behavior

Day 29 is about changing the team’s assertion mindset.

### Old Pattern

await expect(page.getByRole('button', { name: /save/i })).toBeVisible();



This proves almost nothing.

### Better Pattern

const saveButton = page.getByRole('button', { name: /save/i });

await expect(saveButton).toBeEnabled();

await saveButton.click();

await expect(saveButton).toBeDisabled();

await expect(page.getByText(/saved successfully/i)).toBeVisible();



This proves real UX behavior.

### Team Rule

For every important control, ask:

- What should happen before interaction?

- What should happen during interaction?

- What should happen after success?

- What should happen after failure?

- What should the user see if the operation hangs?

## Day 29: Strict Assertion Categories

The team should start writing assertions in these categories.

### 1. Enabled / Disabled State

Use when a control should become unavailable during async work or when prerequisites are not met.

Examples:

- save/update button disables during request

- submit button stays disabled until required fields are valid

- delete button disables after first click

- retry button becomes enabled after error state

### 2. Loading State Transition

Use when the UI enters and exits a loading state.

Examples:

- spinner appears while fetching

- skeleton state disappears after load

- submit action shows “Saving…” then returns to normal

- loading overlay clears before next interaction

### 3. Selection / Value Transition

Use when the user changes a dropdown, input, toggle, tab, or filter.

Examples:

- selected option actually changes

- textbox keeps the entered value

- toggle changes checked state

- tab switch changes visible content

- filter changes visible results

### 4. Success / Error Feedback

Use when the user needs confirmation or failure messaging.

Examples:

- success toast appears after valid save

- error alert appears after failed action

- destructive action shows a visible result

- field-level validation appears when input is invalid

### 5. Duplicate-Submission Prevention

Use when the same action must not fire twice.

Examples:

- confirm button disables after first click

- only one request fires for duplicate input

- save button cannot be re-clicked during in-flight request

## Day 29: Recommended Assertion APIs

The team should begin preferring assertions like:

- toBeEnabled()

- toBeDisabled()

- toHaveValue()

- toHaveText()

- toContainText()

- toHaveAttribute()

- toHaveClass() when meaningful and stable

- toBeChecked()

- toHaveURL()

- toBeHidden()

- toBeVisible()

- expect.poll(...) for deterministic state observation

- response-aware waits plus final state assertions

### Example

const nameInput = page.getByRole('textbox', { name: /name/i });

await nameInput.fill('Simplabots QA');

await expect(nameInput).toHaveValue('Simplabots QA');



## Day 29: Simplabots Assertion Upgrade Targets

Good candidates for stricter checks in Simplabots include:

- billing/settings save buttons

- payment method delete confirmation

- profile/account update actions

- knowledge-base save/update workflows

- dropdown/provider selectors in Paige/config flows

- Chattie thread rename/delete/share controls

- search/filter boxes

- widget config load/apply flows

- destructive modals with confirm/cancel logic

- notification mutation actions

- invite/account-linking state transitions

## Day 30: Implement Strict UI Logic Tests

Below are example Simplabots-aligned patterns.

Routes, labels, and test IDs may need adjustment to match the actual app.

## Strict Logic Test 1: Submit Button Disables During Save

import { test, expect } from '@playwright/test';

test(

'save button disables while profile update request is in progress',

{ tag: ['@smoke', '@sev2', '@core-feature'] },

async ({ page }) => {

await page.route('**/api/account/**', async (route) => {

await new Promise((resolve) => setTimeout(resolve, 2000));

await route.fulfill({

status: 200,

contentType: 'application/json',

body: JSON.stringify({ account: { id: 1, name: 'Updated Name' } }),

});

});

await page.goto('/settings/profile');

const nameInput = page.getByRole('textbox', { name: /name|account name/i });

const saveButton = page.getByRole('button', { name: /save|update/i });

await nameInput.fill('Updated Name');

await expect(saveButton).toBeEnabled();

await saveButton.click();

await expect(saveButton).toBeDisabled();

await expect(

page.getByText(/saved|updated successfully|changes saved/i),

).toBeVisible();

},

);

### What It Verifies

- valid save button starts enabled

- clicking triggers disabled state

- user gets completion feedback

## Strict Logic Test 2: Loader Appears and Clears Correctly

import { test, expect } from '@playwright/test';

test(

'loading indicator appears during thread fetch and clears after success',

{ tag: ['@smoke', '@sev2', '@core-feature'] },

async ({ page }) => {

await page.route('**/api/chattie/threads/**', async (route) => {

await new Promise((resolve) => setTimeout(resolve, 1500));

await route.fulfill({

status: 200,

contentType: 'application/json',

body: JSON.stringify({

thread: {

chats: [

{ role: 'user', content: 'Hello' },

{ role: 'assistant', content: 'Hi there' },

],

},

}),

});

});

await page.goto('/chattie');

await expect(

page.getByText(/loading|fetching|please wait/i),

).toBeVisible();

await expect(

page.getByText(/loading|fetching|please wait/i),

).toBeHidden();

await expect(page.getByText('Hi there')).toBeVisible();

},

);

### What It Verifies

- loading state is shown during fetch

- loading state clears after response

- loaded content becomes visible

## Strict Logic Test 3: Dropdown Changes Actual Selected State

import { test, expect } from '@playwright/test';

test(

'provider dropdown selection changes visible state',

{ tag: ['@smoke', '@sev2', '@core-feature'] },

async ({ page }) => {

await page.route('**/api/elevenlabs/voices', async (route) => {

await route.fulfill({

status: 200,

contentType: 'application/json',

body: JSON.stringify({

voices: [

{

voice_id: 'voice_1',

name: 'Sarah',

category: 'Professional',

preview_url: 'https://example.com/sarah.mp3',

labels: { gender: 'female', languages: ['English'] },

},

],

}),

});

});

await page.goto('/paige/create');

const dropdownTrigger = page.getByRole('button', {

name: /voice|provider|model/i,

});

await dropdownTrigger.click();

await page.getByText('Sarah').click();

await expect(dropdownTrigger).toContainText('Sarah');

},

);

### What It Verifies

- dropdown opens

- option is selectable

- selected state actually changes

## Strict Logic Test 4: Prevent Duplicate Submission

import { test, expect } from '@playwright/test';

test(

'delete confirmation prevents duplicate submission',

{ tag: ['@smoke', '@sev2', '@core-feature'] },

async ({ page }) => {

let deleteCallCount = 0;

await page.route('**/api/navi/api/payment-methods', async (route) => {

if (route.request().method() === 'DELETE') {

deleteCallCount += 1;

}

await new Promise((resolve) => setTimeout(resolve, 1000));

await route.fulfill({

status: 200,

contentType: 'application/json',

body: JSON.stringify({ success: true, message: 'Deleted' }),

});

});

await page.goto('/navi/billing/cards');

await page.getByRole('button', { name: /remove|delete payment method/i }).click();

const confirmDelete = page.getByRole('button', {

name: /delete payment method|delete/i,

});

await confirmDelete.click({ clickCount: 2, delay: 50 });

await expect(confirmDelete).toBeDisabled();

await expect.poll(() => deleteCallCount).toBe(1);

},

);

### What It Verifies

- duplicate click is neutralized

- confirm button disables during request

- only one request fires

## Strict Logic Test 5: Success and Error Feedback Must Be Visible

import { test, expect } from '@playwright/test';

test(

'feature action shows visible error feedback when request fails',

{ tag: ['@smoke', '@sev2', '@core-feature'] },

async ({ page }) => {

await page.route('**/api/knowledge-base-responses', async (route) => {

await route.fulfill({

status: 500,

contentType: 'application/json',

body: JSON.stringify({ error: 'Save failed' }),

});

});

await page.goto('/knowledge-base');

const input = page.getByRole('textbox').first();

const saveButton = page.getByRole('button', { name: /save|submit|continue/i });

await input.fill('Failure-path test');

await saveButton.click();

await expect(

page.getByRole('alert').or(page.getByText(/failed|error|try again/i)),

).toBeVisible();

},

);

### What It Verifies

- failed action is visible to user

- UI does not fail silently

- user gets clear feedback

## Day 30: Assertion Review Rules

Before approving a new UI test, reviewers should ask:

- Does this assertion verify behavior or only presence?

- Does it check state before, during, and after the action?

- Would this test still pass if the feature were visually present but broken?

- Does it verify actual user-facing feedback?

- Does it avoid fragile implementation details?

- Does it rely on stable, semantic locators?

- Does it avoid waitForTimeout?

- Does it help catch a real regression that matters?

## Good vs Weak Assertions

### Weak

await expect(page.getByRole('button', { name: /save/i })).toBeVisible();

### Stronger

const saveButton = page.getByRole('button', { name: /save/i });

await expect(saveButton).toBeEnabled();

await saveButton.click();

await expect(saveButton).toBeDisabled();

await expect(page.getByText(/saved successfully/i)).toBeVisible();

### Weak

await expect(page.getByText('Sarah')).toBeVisible();

### Stronger

await dropdown.click();

await page.getByText('Sarah').click();

await expect(dropdown).toContainText('Sarah');



## Suggested Team Standard

The team should publish a short assertion policy.

Example:

# Strict UI Assertion Standard

## Prefer Assertions That Verify

- enabled/disabled state

- loading transition

- selected value change

- persisted value

- success/error feedback

- request-result-linked UI state

- duplicate-action prevention

## Avoid Over-Relying On

- visibility-only checks

- raw implementation details

- CSS-based status assumptions

- `waitForTimeout`

- assertions that would still pass if the feature were broken

## Review Question

Would this test fail if the feature were visible but functionally dead?



## Days 29–30 Deliverable

By the end of Day 30, the team should have:

- upgraded assertion standards for the Playwright suite

- at least several Month 2 tests rewritten with stricter logic checks

- new tests verifying:

- disabled states

- loading transitions

- selected value changes

- duplicate-submit prevention

- visible success/error feedback

- a published strict UI assertion standard

- stronger confidence that PR-gate tests catch real regressions, not just missing DOM elements

## Advisor Checklist for You

- [ ] Did the team move beyond visibility-only checks?

- [ ] Are important actions now verified before, during, and after state transition?

- [ ] Do tests check disabled states for async and destructive actions?

- [ ] Do loader assertions](#)

