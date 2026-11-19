# Day 7: Test Data Management & API Mocking


Day 7 is about making tests more controlled and less dependent on unstable external state.

For hurdman/simplabots, this matters because many core workflows rely on live APIs, authenticated account/profile context, AI services, S3 assets, chat threads, widgets, notifications, and database-backed responses.

The goal is not to mock everything.
The goal is to decide when Simplabots tests should use real backend behavior and when they should safely simulate specific states.

### Session: Understand the Data Dilemma

The team starts by comparing two approaches:

| Strategy | Meaning | Best For |
| --- | --- | --- |
| Live Data / Seeded Data | The app talks to the real backend/database | Smoke tests, auth, core integration confidence |
| API Mocking | Playwright intercepts a browser request and returns controlled data | Edge cases, empty states, error states, slow responses, third-party instability |

For Simplabots, this distinction is important because some tests must prove the frontend and backend actually work together, while others only need to verify that the UI handles a specific response correctly.

### Session: Establish the Hybrid Strategy

The team agrees on this boundary:

#### Use Live Data For

- Authentication smoke tests

- Main authenticated route access

- One core agent flow

- One credit-sensitive success flow

- Anything that must prove real frontend/backend integration

#### Use Mocked Data For

- Empty states

- Loading states

- API error states

- Slow network responses

- External service instability

- Large AI/service payloads

- S3/media fallback behavior

- Widget configuration edge cases

Important rule:
Do not over-mock the Day 5 smoke suite.
The smoke suite should still prove Simplabots works as a real system.

### Session: Identify SimplaBots Mocking Candidates

Based on available code references, the team can use these real Simplabots surfaces as mock training targets.

| Area | Example Endpoint | Why It Is Useful For Mocking |
| --- | --- | --- |
| Voice Providers | /api/elevenlabs/voices | Mock voice lists, empty lists, provider failure |
| Voice Providers | /api/openai/voices | Mock alternate voice provider data |
| Speech Generation | /api/elevenlabs/speech | Avoid real external generation cost/time |
| S3 Files | /api/s3/file?key=... | Mock expired/missing image or file URLs |
| Paige Widget | /api/widget/paige?paigeBotId=... | Mock widget config states |
| Chattie Threads | /api/chattie/threads/:threadId | Mock chat history, empty thread, failed load |
| Chattie Sharing | /api/chattie/threads/share | Mock success/failure sharing behavior |
| Knowledge Base | /api/knowledge-base-responses | Mock successful/partial/error form save behavior |

These are better Simplabots examples than generic ecommerce examples like /api/v1/orders.

### Session: Learn Playwright Network Interception

The team studies page.route().

page.route() allows Playwright to intercept browser network requests before they reach the real backend.

Example concept:

await page.route('**/api/example', async (route) => {

await route.fulfill({

status: 200,

contentType: 'application/json',

body: JSON.stringify({ ok: true }),

});

});



Important rule:

Register the route before navigating to the page that triggers the request.

If the page loads first, the request may already be gone before Playwright has a chance to intercept it.

### Session: Store Mock Data in Fixtures, Not Inline Strings

The team should avoid large hardcoded JSON blobs inside .spec.ts files.

Recommended structure:

tests/

├── fixtures/

│   ├── voices/

│   │   ├── elevenlabsVoices.ts

│   │   └── openaiVoices.ts

│   ├── chattie/

│   │   └── threads.ts

│   ├── paige/

│   │   └── widgetConfig.ts

│   └── knowledge-base/

│       └── responses.ts

├── pages/

└── smoke/



This keeps tests readable and makes mock data reusable.

### Session: Create First Mock Fixture

Example fixture for ElevenLabs voices:

export const mockElevenLabsVoices = {

voices: [

{

voice_id: 'voice_sarah',

id: 'voice_sarah',

name: 'Sarah',

category: 'Professional',

preview_url: 'https://example.com/sarah-preview.mp3',

labels: {

gender: 'female',

languages: ['English'],

specialties: ['Customer Support'],

accent: 'US',

},

},

{

voice_id: 'voice_james',

id: 'voice_james',

name: 'James',

category: 'General',

preview_url: 'https://example.com/james-preview.mp3',

labels: {

gender: 'male',

languages: ['English'],

specialties: ['Sales'],

accent: 'UK',

},

},

],

};



### Session: Mock a Successful API Response

The team writes a test that intercepts a Simplabots API call and returns controlled data.

Example using /api/elevenlabs/voices:

import { test, expect } from '@playwright/test';

import { mockElevenLabsVoices } from '../fixtures/voices/elevenlabsVoices';

test('voice selection UI displays mocked ElevenLabs voices', async ({ page }) => {

await page.route('**/api/elevenlabs/voices', async (route) => {

await route.fulfill({

status: 200,

contentType: 'application/json',

body: JSON.stringify(mockElevenLabsVoices),

});

});

// Replace this with the actual Simplabots route that loads voice selection.

await page.goto('/paige/create');

await expect(page.getByText('Sarah')).toBeVisible();

await expect(page.getByText('James')).toBeVisible();

});



Assumption: /paige/create or a similar Paige creation route loads ElevenLabs voice data.
The exact route should be verified against the current Simplabots UI.

### Session: Mock an Empty State

The team writes one empty-state test.

Example:

import { test, expect } from '@playwright/test';

test('voice selection UI handles empty provider response', async ({ page }) => {

await page.route('**/api/elevenlabs/voices', async (route) => {

await route.fulfill({

status: 200,

contentType: 'application/json',

body: JSON.stringify({ voices: [] }),

});

});

// Replace with verified Simplabots route for voice selection.

await page.goto('/paige/create');

await expect(

page.getByText(/no voices|no voice options|unable to find voices/i),

).toBeVisible();

});



Assumption: the UI exposes a user-facing empty-state message.
If it does not, this becomes a good QA/dev improvement request.

### Session: Mock a Backend Error

The team writes an error-state test to ensure the UI does not fail silently.

Example using /api/widget/paige:

import { test, expect } from '@playwright/test';

test('Paige widget UI handles failed widget config load', async ({ page }) => {

await page.route('**/api/widget/paige**', async (route) => {

await route.fulfill({

status: 500,

contentType: 'application/json',

body: JSON.stringify({ error: 'Failed to load widget config' }),

});

});

// Replace with the actual page that loads a Paige widget config.

await page.goto('/paige');

await expect(

page.getByText(/failed to load|something went wrong|try again/i),

).toBeVisible();

});



Assumption: the target UI renders an error message when widget config fails.
If the UI only logs the error silently, QA should raise that as a resilience gap.

### Session: Simulate Slow Network Responses

The team practices latency simulation.

This verifies that Simplabots shows loading UI instead of freezing or rendering blank content.

Example:

import { test, expect } from '@playwright/test';

import { mockElevenLabsVoices } from '../fixtures/voices/elevenlabsVoices';

test('voice selection UI shows loading state while voices are delayed', async ({ page }) => {

await page.route('**/api/elevenlabs/voices', async (route) => {

await new Promise((resolve) => setTimeout(resolve, 3000));

await route.fulfill({

status: 200,

contentType: 'application/json',

body: JSON.stringify(mockElevenLabsVoices),

});

});

// Replace with verified Simplabots route for voice selection.

await page.goto('/paige/create');

await expect(

page.getByText(/loading|fetching|please wait/i),

).toBeVisible();

await expect(page.getByText('Sarah')).toBeVisible();

});



Important distinction:

- Artificial delay inside a route mock is acceptable for testing loading UI.

- Random page.waitForTimeout(...) in normal tests remains banned.

### Session: AI-Powered Mock Generation

The team uses Copilot to generate mock fixtures based on real Simplabots response shapes.

Prompt template:

Copilot Prompt:
"Based on this Simplabots endpoint response shape for /api/elevenlabs/voices, generate a TypeScript fixture named mockElevenLabsVoices with 3 realistic voice objects. Include voice_id, name, category, preview_url, and labels with gender, languages, specialties, and accent. Keep it deterministic and suitable for Playwright tests."

Another example:

Copilot Prompt:
"Generate a Playwright fixture for a mocked /api/chattie/threads/:threadId response. Include one thread with 3 chats: a user message, an assistant response, and an assistant response with an asset key. Use deterministic IDs and timestamps."

### Session: Live Data vs Mocked Data Decision Log

The team creates a small decision log.

Example:

# Simplabots Mocking Strategy

## Live Backend Required

- Authentication smoke test

- Authenticated route entry smoke test

- Core agent success flow

- Credit-sensitive success flow

## Mocking Allowed

- Empty states

- Error banners

- Loading indicators

- Third-party voice provider responses

- S3 presigned URL fallback behavior

- Widget config edge cases

- Chat thread display states

## Mocking Not Allowed Without Approval

- Entire Day 5 smoke suite

- Credit deduction success path

- Login success path

- Any test claiming full system integration coverage



### Day 7 Deliverable

By the end of Day 7, the team should have:

- At least one working page.route() test

- At least one mock fixture stored under tests/fixtures/**

- One success-state mock test

- One empty-state or error-state mock test

- A documented Simplabots live-vs-mocked data boundary

- A rule prohibiting large raw JSON payloads inside spec files

- A list of endpoints that are safe candidates for future mocking

### Advisor Checklist for You (Leader) at EOD

- [ ] Did the team successfully intercept at least one Simplabots API request using page.route()?

- [ ] Did they register routes before page navigation?

- [ ] Are large mock payloads stored under tests/fixtures/** instead of inline in spec files?

- [ ] Did they test at least one success state and one empty/error state?

- [ ] Did the team document when Simplabots tests must use live backend data?

- [ ] Did the team avoid over-mocking the core smoke suite?

- [ ] Are assumptions about routes and UI messages clearly marked for verification?

