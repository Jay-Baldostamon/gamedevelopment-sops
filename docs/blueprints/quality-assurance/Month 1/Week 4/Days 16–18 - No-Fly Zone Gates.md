# Days 16–18: No-Fly Zone Gates


Days 16–18 focus on Severity 1 threats: data corruption, cross-account data leakage, and unrecoverable user states.

At this point, the Playwright suite should already have smoke coverage, CI/CD gates, ChatOps alerts, quarantine rules, and flake discipline. Now QA expands from “does the happy path work?” to “can hostile or chaotic user behavior break the system?”

The goal is to define Simplabots’ No-Fly Zone: critical safety checks that must never silently pass into production.

## Day 16: Defending Against Data Corruption

Day 16 focuses on write operations.

Data corruption often happens when users behave impatiently:

- double-clicking submit buttons

- refreshing during saves

- navigating away mid-request

- clicking delete twice

- submitting duplicate payment/credit actions

- retrying after unclear loading states

For Simplabots, this is especially important around:

- billing and payment methods

- credit purchases

- account/profile/group management

- user deletion

- location deletion

- Chattie thread updates/deletes

- notification mutation

- knowledge-base form saves

- AI asset generation or worker-triggered jobs

### Session: Map Destructive UI Vectors

The team identifies all UI actions that write, mutate, delete, or charge.

Initial Simplabots candidates found from repo search:

| Area | Endpoint / Behavior | Risk |
| --- | --- | --- |
| Billing cards | DELETE /api/navi/api/payment-methods | duplicate delete, unclear failure state |
| Billing confirm payment | POST /api/billing/confirm-payment | duplicate credit addition risk |
| Account update | PATCH /api/account/[accountId] | cross-account mutation / unsafe update risk |
| Revvy locations | DELETE /api/revvy/business/delete-business?locationId=... | duplicate delete or silent failure |
| Profile groups | DELETE /api/profile-group/delete-group?groupId=... | group deletion collision |
| Profile users | DELETE /api/profile-user | destructive user removal |
| Chattie threads | DELETE/PATCH /api/chattie/threads/:threadId | duplicate delete/rename race |
| Chattie sharing | POST /api/chattie/threads/share | repeated share/unshare state collision |
| Notifications | PATCH/DELETE /api/notification/** | duplicate mutation, optimistic UI mismatch |
| Emmy labels/categories | DELETE /api/emmy/labels/delete, category delete/resync | external provider + local state mismatch |
| Worker asset processing | /api/workers/image, /api/workers/video | credit transaction/logging consistency |

Assumption: not every endpoint above is exposed to every user or critical path. The team should classify each by product severity and user role.

### Session: Define Submit Safety Rules

The team adopts these rules for any critical write button:

- Button disables immediately after first click.

- UI shows a loading state.

- Duplicate API calls are prevented.

- User receives success or failure feedback.

- Failure returns the UI to a recoverable state.

- Server-side endpoint should be idempotent where duplicate requests are dangerous.

Frontend-only disabling is helpful, but not enough for truly critical flows like payments or credits. The backend must also protect against duplicate processing.

### Session: “Impatient User” Simulation

The team writes tests that intentionally hammer write buttons.

Example pattern:

import { test, expect } from '@playwright/test';

test(

'Severity 1: destructive action disables submit button after first click',

{ tag: ['@nofly', '@sev1'] },

async ({ page }) => {

await page.goto('/navi/billing/cards');

// Navigate/open the delete confirmation modal using the real UI flow.

// Replace locator names after confirming actual accessible labels/test ids.

await page.getByRole('button', { name: /remove|delete payment method/i }).click();

const deleteButton = page.getByRole('button', {

name: /delete payment method/i,

});

await expect(deleteButton).toBeEnabled();

await deleteButton.click({ clickCount: 2, delay: 50 });

await expect(deleteButton).toBeDisabled();

},

);



Assumption: the current payment-method delete button may need an explicit isDeleting state if it does not already disable during the request.

### Session: Verify Only One API Call Fires

Button-disabled checks are useful, but the stronger test is verifying only one request is sent.

import { test, expect } from '@playwright/test';

test(

'Severity 1: payment method delete must not send duplicate DELETE requests',

{ tag: ['@nofly', '@sev1'] },

async ({ page }) => {

let deleteRequestCount = 0;

await page.route('**/api/navi/api/payment-methods', async (route) => {

if (route.request().method() === 'DELETE') {

deleteRequestCount += 1;

}

await route.fulfill({

status: 200,

contentType: 'application/json',

body: JSON.stringify({

success: true,

message: 'Payment method removed successfully',

}),

});

});

await page.goto('/navi/billing/cards');

// Replace with verified modal-opening step.

await page.getByRole('button', { name: /remove|delete payment method/i }).click();

const deleteButton = page.getByRole('button', {

name: /delete payment method/i,

});

await deleteButton.click({ clickCount: 2, delay: 50 });

await expect.poll(() => deleteRequestCount).toBe(1);

},

);



### Day 16 Deliverable

By end of Day 16, the team should have:

- a list of Simplabots destructive/write operations

- duplicate-submit tests for at least one critical write path

- confirmed button disabling/loading rules

- at least one test asserting duplicate API calls are prevented

- Sev 1 risk tickets for any critical write operation that allows duplicate submission

- backend idempotency review started for payment/credit-related endpoints

## Day 17: Multi-Tenant Security & Context Isolation

Day 17 focuses on access control boundaries.

Simplabots appears to use account/profile/user context heavily. That makes multi-tenant isolation a No-Fly Zone concern.

The core question:

Can User B access or mutate User A’s private account/profile/thread/resource by guessing or reusing an ID?

If yes, that is a Severity 1 security issue.

### Session: Identify High-Risk Resource IDs

The team maps URLs and API routes containing resource IDs.

Initial Simplabots candidates:

| Route / Area | Risk Type |
| --- | --- |
| /api/account/[accountId] | account read/update by ID |
| /api/chattie/threads/:threadId | private chat history exposure |
| /api/profile-user | user deletion by body ID |
| /api/profile-group/delete-group?groupId=... | group deletion by ID |
| /api/revvy/business/delete-business?locationId=... | location deletion by ID |
| /api/navi/api/payment-methods | payment method mutation |
| /api/knowledge-base-responses | profile/account data writes |
| invite/token accept routes | invite/account linking abuse |
| worker image/video asset IDs | unauthorized processing or credit logging |

Important finding to verify:

src/app/api/account/[accountId]/route.ts exposes GET and PATCH by accountId. In the visible route code, no session/account authorization check is obvious. This does not prove a vulnerability because auth may be enforced elsewhere through middleware, wrappers, or database methods. But it is a strong candidate for explicit IDOR review.

### Session: Prepare Two Authenticated Users

To test multi-tenant isolation, QA needs two distinct test accounts:

| User | Purpose |
| --- | --- |
| User A / Victim | owns the private resource |
| User B / Attacker | should not access User A’s resource |

Required auth files:

playwright/.auth/userA.json

playwright/.auth/userB.json



Assumption: if seeded accounts do not exist yet, QA will need developers to provision them or create seed scripts.

Recommended policy:

- User A and User B must belong to different accounts/tenants.

- They should not share profile groups.

- They should not share active account/profile IDs.

- Both should have stable credentials stored as GitHub Secrets for CI.

### Session: Multi-Context IDOR Test

Example for account resource isolation:

import { test, expect } from '@playwright/test';

test(

'Severity 1: User B must not access User A account details by accountId',

{ tag: ['@nofly', '@sev1', '@security'] },

async ({ browser }) => {

const userAContext = await browser.newContext({

storageState: 'playwright/.auth/userA.json',

});

const userBContext = await browser.newContext({

storageState: 'playwright/.auth/userB.json',

});

const pageA = await userAContext.newPage();

const pageB = await userBContext.newPage();

// Replace with a safe known User A account ID from seeded test data.

const userAAccountId = process.env.E2E_USER_A_ACCOUNT_ID;

const responseA = await pageA.request.get(`/api/account/${userAAccountId}`);

expect(responseA.ok()).toBeTruthy();

const responseB = await pageB.request.get(`/api/account/${userAAccountId}`);

expect([403, 404]).toContain(responseB.status());

await userAContext.close();

await userBContext.close();

},

);



This uses APIRequestContext through the authenticated browser contexts. It is faster and more direct than relying only on UI pages.

### Session: UI-Level Cross-Tenant Test

API checks are important, but QA should also verify user-facing behavior.

import { test, expect } from '@playwright/test';

test(

'Severity 1: attacker cannot open another user private Chattie thread URL',

{ tag: ['@nofly', '@sev1', '@security'] },

async ({ browser }) => {

const userAContext = await browser.newContext({

storageState: 'playwright/.auth/userA.json',

});

const userBContext = await browser.newContext({

storageState: 'playwright/.auth/userB.json',

});

const pageA = await userAContext.newPage();

const pageB = await userBContext.newPage();

// Replace with real flow that opens or creates a private User A thread.

await pageA.goto('/chattie');

const privateThreadUrl = pageA.url();

await pageB.goto(privateThreadUrl);

await expect(

pageB.getByRole('heading', {

name: /access denied|unauthorized|not found|page not found/i,

}),

).toBeVisible();

await userAContext.close();

await userBContext.close();

},

);



Assumption: /chattie and the private URL shape need verification against the actual app.

### Day 17 Deliverable

By end of Day 17, the team should have:

- a list of ID-based private resources

- two isolated test users/accounts

- userA.json and userB.json auth states generated locally

- at least one API-level IDOR test

- at least one UI-level unauthorized-access test

- documented expected behavior: 403, 404, or access-denied screen

- Sev 1 tickets for any cross-account data exposure

## Day 18: Account Lockouts & Infinite Spinners

Day 18 focuses on recoverability.

A user should never be trapped in an infinite loading state with no error, no retry, and no escape route.

This applies especially to:

- delete flows

- billing/payment flows

- account/profile updates

- AI/agent generation flows

- invite acceptance

- Chattie thread loading

- widget config loading

- S3/media loading

- notification mutation

- external provider actions

### Session: Map Infinite Loading Risks

The team audits all areas where UI enters a loading state after an API call.

Initial Simplabots observations from code search:

| Area | Observed Pattern | Risk to Verify |
| --- | --- | --- |
| Chattie thread load | setIsLoadingHistory(true) then fetch thread | should show recoverable error if load fails |
| Delete location | catches error with console.error | user may not see failure |
| Delete group | shows toast on failure | likely better recoverability |
| Delete label | uses isDeleting and error message | good candidate pattern |
| Payment method delete | catches and shows notification | verify button/loading recovery |
| Widget config load | sets error state | verify UI renders error visibly |
| Notifications | shows destructive toasts | verify no infinite optimistic mismatch |

The team should promote good patterns, such as isDeleting guards and visible error messages, across all destructive modals.

### Session: Simulate Stalled APIs

Use page.route() to stall or fail a request.

Example: Chattie thread load should not spin forever.

import { test, expect } from '@playwright/test';

test(

'Severity 1: Chattie thread load failure must show recoverable error state',

{ tag: ['@nofly', '@sev1', '@recoverability'] },

async ({ page }) => {

await page.route('**/api/chattie/threads/**', async (route) => {

await route.fulfill({

status: 500,

contentType: 'application/json',

body: JSON.stringify({ error: 'Failed to load thread' }),

});

});

await page.goto('/chattie');

await expect(

page.getByRole('alert').or(page.getByText(/failed|try again|unable to load/i)),

).toBeVisible();

},

);



Assumption: if there is no visible error state today, QA should file a Sev 1/Sev 2 risk depending on whether the user is trapped or can continue.

### Session: Simulate Hanging Deletes

Example: destructive modal must recover from a stalled request.

import { test, expect } from '@playwright/test';

test(

'Severity 1: delete location flow must not trap user if API hangs',

{ tag: ['@nofly', '@sev1', '@recoverability'] },

async ({ page }) => {

await page.route('**/api/revvy/business/delete-business**', async () => {

// Intentionally leave unresolved to simulate a hung request.

});

await page.goto('/revvy/locations');

// Replace with verified UI steps to open the delete modal.

await page.getByRole('button', { name: /delete/i }).first().click();

const confirmDelete = page.getByRole('button', {

name: /delete business location|delete/i,

});

await confirmDelete.click();

await expect(

page.getByRole('button', { name: /cancel|close/i }),

).toBeVisible();

await expect(

page.getByText(/timeout|try again|still working|check your connection/i),

).toBeVisible({ timeout: 15000 });

},

);



Assumption: the current UI may not show a timeout message. If not, the expected outcome becomes a product requirement.

### Session: Define Recoverability Rules

The team adopts a rule for all critical async states:

- Show loading state immediately.

- Disable duplicate action if destructive.

- Time out or fail gracefully.

- Show a human-readable error.

- Provide retry, cancel, or close.

- Never leave the user trapped.

- Never hide the error only in console logs.

For No-Fly Zone flows:

console.error alone is not acceptable user recovery.

### Day 18 Deliverable

By end of Day 18, the team should have:

- a list of loading/spinner states

- one stalled-request test

- one failed-request test

- at least one destructive modal recoverability test

- clear UI requirements for timeout/error/retry behavior

- tickets for flows that log errors silently or trap users

- No-Fly Zone status report drafted

## No-Fly Zone Status Report

By the end of Day 18, QA should publish this report.

# Simplabots No-Fly Zone Status Report

## Scope

This report covers Severity 1 automation checks for:

- data corruption

- duplicate writes

- payment/credit safety

- cross-account data isolation

- private resource access control

- infinite loading states

- unrecoverable destructive flows

## Day 16: Data Corruption

### Audited Write Operations

- Billing/payment methods

- Credit purchase confirmation

- Account/profile updates

- User/group/location deletion

- Chattie thread mutation

- Notification mutation

- Knowledge-base saves

### Tests Added

- Duplicate-submit prevention:

- Duplicate API request prevention:

- Critical button disable/loading behavior:

### Open Risks

- TBD

## Day 17: Multi-Tenant Security

### High-Risk Resource IDs

- Account IDs

- Profile IDs

- Group IDs

- Thread IDs

- Location IDs

- Payment method IDs

- Asset IDs

### Tests Added

- API-level IDOR test:

- UI-level unauthorized resource test:

### Open Risks

- TBD

## Day 18: Recoverability

### Audited Loading States

- Chattie loading

- Billing/payment action loading

- Delete modals

- Widget config loading

- Invite acceptance

- AI/asset generation states

### Tests Added

- Stalled request test:

- Failed request test:

- Destructive modal recovery test:

### Open Risks

- TBD

## Required Test Data

- User A account:

- User B account:

- Credit test account:

- Destructive test account:

- Read-only test account:

## Severity 1 Block Criteria

A release is blocked if:

- duplicate critical writes can occur

- credit/payment state can be duplicated or corrupted

- User B can access User A private data

- a protected resource returns `200` for the wrong tenant

- a critical flow traps the user indefinitely

- destructive actions fail silently with no user recovery path



## Days 16–18 Success Criteria

By the end of Day 18, QA should have:

- [ ] tests/no-fly-zone/** structure created

- [ ] @nofly and @sev1 tags adopted

- [ ] duplicate-submit prevention tests started

- [ ] IDOR/multi-user tests started

- [ ] stalled/failing API recoverability tests started

- [ ] required multi-user test data documented

- [ ] at least one Sev 1 security/corruption test ready for CI

- [ ] No-Fly Zone status report published

- [ ] clear list of unresolved risks requiring Engineering input

## Advisor Checklist for You

- [ ] Did QA identify all high-risk write/delete/payment/credit flows?

- [ ] Did QA verify critical buttons disable after first click?

- [ ] Did QA test that duplicate clicks do not send duplicate API requests?

- [ ] Did the team review credit/payment endpoints for idempotency?

- [ ] Do User A and User B exist as separate test accounts in separate tenants?

- [ ] Did QA run at least one multi-context Playwright test?

- [ ] Are private ID-based resources returning 403 or 404 for the wrong user?

- [ ] Did QA simulate at least one failed API response?

- [ ] Did QA simulate at least one hanging/stalled API response?

- [ ] Does the UI provide retry/cancel/close instead of infinite spinners?

- [ ] Are console-only errors treated as insufficient for critical flows?

- [ ] Is the No-Fly Zone status report published?

