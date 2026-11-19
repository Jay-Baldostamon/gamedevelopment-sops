# Day 8: Visual Regression & Component Isolation


Day 8 introduces visual confidence testing.

For hurdman/simplabots, this is useful because many product areas are UI-heavy and user-facing: authenticated navigation, agent pages like Chattie/Paige/Navi, widget configuration, modals, profile/account setup, and dynamic AI/chat output areas.

The goal is not to visually test the entire application.
The goal is to identify a few stable UI surfaces where visual regressions would matter and where screenshots will not create constant false alarms.

### Session: Understand Snapshot Testing

The team studies how Playwright visual comparisons work.

Playwright can:

- take a screenshot of a page or element

- save it as the approved baseline image

- take a new screenshot on later runs

- compare the new screenshot against the baseline

- generate a visual diff when the UI changes

Key concepts to understand:

- Golden Master / Baseline: the approved screenshot

- Diff image: the visual output showing what changed

- Pixel threshold: allowed variance before a test fails

- Anti-aliasing: small rendering differences around fonts/edges

- Dynamic UI: content that changes between runs and causes noisy failures

### Session: Cross-Platform Rendering Risk

Visual tests are sensitive to environment differences.

A screenshot created on one machine can differ slightly from a screenshot created on another machine because of:

- operating system font rendering

- browser version

- device scale factor

- GPU/graphics differences

- installed fonts

- viewport size

This matters for Simplabots because Week 2 is moving toward Linux-based CI execution.

Team protocol:

- Local visual tests allow small variance

- Use relaxed thresholds such as maxDiffPixelRatio: 0.02

- This prevents false failures from tiny local rendering differences

- Strict visual gates wait for CI consistency

- Strict baseline enforcement should happen only once CI environment is standardized

- Ideally screenshots should be generated and validated in the same Linux/browser environment

### Session: Choose Stable Simplabots Visual Candidates

The team identifies UI surfaces that are worth snapshotting.

Good candidates:

| Candidate | Why It Works |
| --- | --- |
| Authenticated navigation/sidebar | Stable layout, high user impact |
| Login form container | Important and mostly static |
| Paige widget configuration panel | Visual regressions can break customer-facing setup |
| Settings/profile header | Important layout, limited dynamic content if masked |
| Empty state panels | Stable and easy to verify |
| Modal layout | Good component-level visual target |

Risky candidates:

| Candidate | Why It Is Risky |
| --- | --- |
| Full Chattie conversation page | AI responses and timestamps can change |
| Credit balance areas | Values may change between runs |
| Full dashboard screenshots | Too much dynamic content |
| Pages with live avatars/files | S3 URLs and images may vary |
| Charts/analytics | Data changes cause noisy diffs |

Team rule:

Prefer element-level screenshots over full-page screenshots.

### Session: Element-Level Visual Testing

Instead of snapshotting an entire page, target one stable element.

Examples:

- login card

- sidebar

- modal

- widget preview

- empty-state container

- settings header

Example:

import { test, expect } from '@playwright/test';

test.describe('Simplabots Visual Regression', () => {

test('login card matches visual baseline', async ({ page }) => {

await page.goto('/login');

const loginCard = page.getByTestId('auth-login-card');

await expect(loginCard).toBeVisible();

await expect(loginCard).toHaveScreenshot('auth-login-card.png', {

animations: 'disabled',

maxDiffPixelRatio: 0.02,

});

});

});



Assumption: data-testid="auth-login-card" exists.
If it does not, the team should either use a strong semantic locator or request/add a stable data-testid.

### Session: Mask Dynamic Data

When an element contains changing data, mask the dynamic sections.

Dynamic Simplabots data may include:

- user name

- account name

- profile name

- credit balance

- timestamps

- generated chat output

- random IDs

- avatar images

- S3-loaded media

- agent response text

Example:

import { test, expect } from '@playwright/test';

test.describe('Simplabots Authenticated Shell Visuals', () => {

test('authenticated layout shell matches baseline', async ({ page }) => {

await page.goto('/dashboard');

const shell = page.getByTestId('authenticated-shell');

await expect(shell).toBeVisible();

await expect(shell).toHaveScreenshot('authenticated-shell.png', {

mask: [

page.getByTestId('user-profile-name'),

page.getByTestId('credits-balance-value'),

],

animations: 'disabled',

maxDiffPixelRatio: 0.02,

});

});

});



Assumptions:

- /dashboard is the correct authenticated landing route

- authenticated-shell, user-profile-name, and credits-balance-value test ids exist

If those test ids do not exist, this becomes a QA–Dev testability request.

### Session: Component Isolation Strategy

Visual regression should not only happen at full route level.

For Simplabots, component-level or element-level testing is usually safer for:

- modals

- cards

- headers

- forms

- empty states

- widget previews

- agent input panels

The team should avoid visual tests that depend on:

- unpredictable AI text

- live backend data

- current date/time

- random generated IDs

- third-party images

- unstable animation timing

Recommended structure:

tests/

├── visual/

│   ├── auth-login-card.visual.spec.ts

│   ├── authenticated-shell.visual.spec.ts

│   ├── paige-widget-config.visual.spec.ts

│   └── empty-states.visual.spec.ts

├── pages/

├── fixtures/

└── smoke/



### Session: First Visual Test Candidate for Simplabots

A good first candidate is a stable login or authenticated shell component.

Recommended first test:

- Login card, if unauthenticated route is visually stable

- Authenticated sidebar/navigation, if session reuse from Day 6 is working

- Paige widget config panel, if route and data are stable

Example using authenticated state:

import { test, expect } from '@playwright/test';

test.describe('Simplabots Navigation Visuals', () => {

test('authenticated sidebar matches baseline', async ({ page }) => {

await page.goto('/dashboard');

const sidebar = page.getByRole('navigation');

await expect(sidebar).toBeVisible();

await expect(sidebar).toHaveScreenshot('authenticated-sidebar.png', {

animations: 'disabled',

maxDiffPixelRatio: 0.02,

});

});

});



If multiple navigation landmarks exist, replace with a stable test id:

const sidebar = page.getByTestId('authenticated-sidebar');



### Session: AI Prompting for Visual Assertions

The team uses Copilot to generate visual test scaffolding, but keeps the same locator and masking standards from Days 4 and 7.

Prompt template:

Copilot Prompt:
"Write a Playwright visual regression test for a Simplabots authenticated sidebar component. Use accessibility-first locators where possible, fall back to getByTestId only if needed, disable animations, set maxDiffPixelRatio to 0.02, and mask dynamic user/account/credit fields. Do not use raw CSS or XPath selectors."

Another useful prompt:

Copilot Prompt:
"Create a Playwright visual test for a Paige widget configuration panel. Snapshot only the widget preview container, disable animations, mask dynamic IDs or timestamps, and use a deterministic mocked /api/widget/paige response from a fixture."

### Session: Generate the First Golden Master

Run the visual test once to create the initial baseline images.

pnpm playwright test tests/visual --update-snapshots



Then run normally:

pnpm playwright test tests/visual



Open the HTML report:

pnpm playwright show-report



If a real design change is approved, update snapshots intentionally:

pnpm playwright test tests/visual --update-snapshots



Important rule:

Never update snapshots blindly.
A changed screenshot should be reviewed before the baseline is accepted.

### Session: Purposefully Trigger and Review a Diff

To make sure the team understands visual failures:

- Generate a baseline.

- Temporarily change a visible UI label/style locally.

- Re-run the visual test.

- Open the Playwright report.

- Inspect:

- expected screenshot

- actual screenshot

- diff screenshot

- Revert the temporary UI change.

- Re-run the test to confirm green status.

This teaches the team how visual failures will look in real work.

### Day 8 Deliverable

By the end of Day 8, the team should have:

- one working Simplabots visual regression test

- one generated local baseline screenshot

- clear rules for when to use visual testing

- dynamic masking examples documented

- agreement that full-page visual tests are avoided unless justified

- a documented command for updating snapshots

- at least one reviewed visual diff from a purposeful failure

### Advisor Checklist for You (Leader) at EOD

- [ ] Did the team create at least one visual test under tests/visual/?

- [ ] Did the team generate a baseline using pnpm playwright test --update-snapshots?

- [ ] Did they avoid full-page screenshots unless justified?

- [ ] Are dynamic fields masked, especially user/account/profile/credit/timestamp values?

- [ ] Are animations disabled in visual assertions?

- [ ] Is maxDiffPixelRatio or another threshold configured for local tolerance?

- [ ] Did the team review an actual visual diff in the Playwright report?

- [ ] Does everyone understand that snapshot updates require review, not automatic acceptance?

