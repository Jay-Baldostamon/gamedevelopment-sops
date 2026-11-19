# Day 2: Environment Provisioning & Tool Configuration


Today is about building a consistent, secure local automation environment for hurdman/simplabots (Next.js + TypeScript, multi-tenant context, authenticated agent routes).
The goal is to make every QA machine behave the same way and prepare for reliable local Playwright execution.

### Session: The Engine Room Setup

Before writing tests, the team standardizes runtime and tooling to eliminate environment drift.

- Node.js + Editor Standardization

- Confirm all QA engineers use the same Node.js LTS version.

- Use Visual Studio Code with the official Playwright Test for VS Code extension.

- Verify local project boot works (pnpm install, pnpm dev) so tests run against a healthy app instance.

- Playwright Initialization + Browser Engine Understanding

- Initialize Playwright in the repo (if not already present): pnpm create playwright@latest.

- Team aligns on browser engine behavior:

- Chromium for fast default local development

- WebKit for Safari-parity issues (important for UI/rendering differences)

- Firefox for cross-engine validation

- For Simplabots, note that authenticated app-router flows and dynamic agent UIs can render differently across engines, especially in WebKit.

### Session: Configuring the Control Center (playwright.config.ts)

The team configures Playwright for local productivity and future CI expansion.

- Local Optimization Strategy

- Default local execution to Chromium-only to keep iteration fast.

- Reserve full multi-browser matrix (Chromium/Firefox/WebKit) for Week 2 pipeline execution.

- Keep retries/timeouts/reporter settings explicit and documented.

- Simplabots-Aware Base Configuration

- Set baseURL for local app host (e.g., http://localhost:3000).

- Ensure test project structure supports authenticated routes under src/app/(authenticated)/.

- Add clear naming for smoke test tags/groups to support focused local runs.

### Session: Secret Management & Test Identity via Environment Variables

Because Simplabots relies on authenticated multi-tenant flows, test credentials and context must be securely managed.

- Install and use dotenv-based env loading for tests:

- pnpm add -D dotenv

- Create local .env values for QA test identity (example categories):

- test user credentials

- tenant/account identifiers (where required for stable fixtures)

- any non-production keys used for local testing

- Critical Security Rule

- Ensure .env is listed in .gitignore.

- Provide .env.example with placeholder keys only (no secrets).

- Data Isolation Rule

- Use dedicated QA seed/test users to avoid polluting real account/profile data.

- Keep one predictable tenant path for smoke tests so assertions stay stable.

### Session: Execution Drill (Mode Switching Mastery)

The team practices the three core execution modes and documents when to use each.

### 1) Pure Speed Mode (headless)

pnpm playwright test

### 2) Visual Debug Mode (headed browser)

pnpm playwright test --headed

### 3) Interactive Investigation Mode (UI mode)

pnpm playwright test --ui



For Simplabots-specific debugging, validate that each mode can complete:

- login/auth redirect handling

- navigation into an authenticated agent route

- one basic assertion on rendered post-login state

### Day 2 Deliverable

Team produces a Local QA Runtime Baseline document in the repo/wiki including:

- Node version standard

- Required VS Code extensions

- Playwright install status

- playwright.config.ts local conventions (Chromium-first)

- .env / .env.example policy

- Execution command quick reference

- Known local prerequisites (pnpm dev, seed/test account notes)

### Advisor Checklist for You (Leader) at EOD

- [ ] Every QA engineer can run Simplabots locally and execute Playwright tests.

- [ ] Playwright VS Code extension is installed across the team.

- [ ] playwright.config.ts is optimized for Chromium-first local runs.

- [ ] .env is ignored by git, and .env.example exists with placeholders.

- [ ] Team can run tests in default, --headed, and --ui modes successfully.

- [ ] At least one authenticated Simplabots route is validated in a local smoke check.

