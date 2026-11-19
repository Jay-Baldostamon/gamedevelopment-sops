# Week 13 Overview: Changelog and Release-Note Automation for AI-Driven Delivery

Week 13 upgrades the earlier release-note verification pattern from SimplaBots issue `#3083` into a stricter automation model for both `hurdman/simplabots` and QA operating workflows.

The objective is to ensure AI-driven development output remains release-auditable: agent instruction files (for example, `copilot-instructions.md`) must require changelog/release-note updates, and QA automation must validate and synchronize those updates with gate behavior.

## What to Expect This Week

### Days 61-65 - Changelog and Release-Note Automation for AI-Driven Delivery

This week focuses on closing the loop between generated code changes, release communication, and QA enforcement.

Core execution focus:

- convert Day 31-33 release-note verification practice into stronger automation controls
- enforce changelog/update expectations in agent instruction surfaces
- align QA automation so release-note coverage remains in sync with shipped behavior
- detect and escalate missing or incomplete release-note entries for high-impact changes
- maintain deterministic gating without creating noisy process-only blockers

SimplaBots and QA integration scope:

- SimplaBots changelog/release-note generation and update paths
- QA blueprint and automation guardrails that validate release-note completeness
- instruction-level governance for AI contributors and coding agents

## Week 13 Success Criteria

By the end of Week 13, QA should have:

- [ ] A documented upgrade path from Day 31-33 (`#3083`) to automated changelog governance
- [ ] Agent instruction requirements that explicitly enforce changelog/release-note updates
- [ ] QA automation checks that detect missing release-note/changelog updates
- [ ] Severity policy for when documentation gaps become release-blocking
- [ ] Evidence that release-note entries stay synchronized with high-impact functional changes
- [ ] Weekly summary showing reduced release-communication drift

## Guiding Principle

In AI-driven delivery, quality includes communication integrity.

Week 13 ensures SimplaBots can trust that what is built, what is tested, and what is announced in release notes remain continuously synchronized.
