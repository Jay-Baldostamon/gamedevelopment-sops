# QA Automation Scope Matrix


Date: 2026-05-29
Owner: QA + Engineering

| Feature / Module | Risk Level | Existing Dev Coverage | Playwright Action | Why |
| --- | --- | --- | --- | --- |
| Sign-in + authenticated route access | 🔥Critical | Partial (auth and API checks, limited browser coverage) | Automate First (Smoke) | Access failure blocks all product value |
| Account/group/profile context enforcement (User -> Account -> AccountGroup -> Profile) | 🔥Critical | Partial (service/model checks) | Automate First (Smoke) | Tenant isolation and data correctness are business-critical |
| Primary bot prompt -> response flow (production route) | 🔥Critical | Limited end-to-end | Automate First (Smoke) | Core AI outcome must be verifiable by user in browser |
| Credit-consuming core action and visible usage state | 🔥Critical | Unit/integration for logic, limited UI linkage | Automate First (Smoke) | Revenue and trust impact if credits are wrong |
| Protected API guard behavior (401/403 semantics) | 🔴High | Strong API-level coverage | Defer (integration first) | Better ROI in API tests than browser checks |
| Provider-specific edge fallback behavior | 🟡Medium | Existing integration scripts and module tests | Do Not Automate (E2E) | High flake potential, lower browser-value |
| Profile image and minor preferences UX | 🟡Medium | Component/manual coverage | Do Not Automate (initial wave) | Not a critical happy path |
| Static legal/info/help pages | 🟢Low | N/A | Do Not Automate | No material business risk for E2E suite |
| Pure utilities/formatting/helpers | 🟢Low | Strong unit coverage | Do Not Automate | Duplicate coverage; slows pipeline |
| Cosmetic animation/layout assertions | 🟢Low | Visual/manual checks | Do Not Automate | Brittle and low business signal |

