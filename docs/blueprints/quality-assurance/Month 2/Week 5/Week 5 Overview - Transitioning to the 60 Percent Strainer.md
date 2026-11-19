# Week 5 Overview: Transitioning to the 60 Percent Strainer


Week 5 begins Month 2.

By now, the Simplabots team should already trust the Playwright pipeline to block only meaningful failures.
That trust is what allows the quality gate to tighten.

The focus of Week 5 is shifting from Severity 1 protection only to Severity 2 functional accountability.
The app may still load, users may still log in, and the database may still be safe—but if a core feature is unusable, the release can now be blocked.

## What to Expect This Week

### Days 21–23 — Scope Mapping the Core Feature Matrix

We define what counts as a core functional promise in Simplabots.

The team maps tier-2 workflows that are not catastrophic system failures, but are still essential to product value. These are the features users expect to work if they are surfaced in the UI, mentioned in release notes, or central to daily usage.

For Simplabots, likely examples include:

- profile/account updates saving correctly

- search/filter interactions working

- dropdowns rendering selectable options

- Chattie thread actions functioning

- knowledge-base forms saving correctly

- billing/settings actions completing correctly

- widget or bot configuration flows loading and applying data

- key agent configuration panels accepting and persisting valid input

The key outcome is a documented Core Feature Matrix that separates:

- Severity 1 blockers

- new Severity 2 functional blockers

- still-non-blocking tech-debt issues

### Days 24–25 — Writing the First Functional Block Automation

We begin enforcing the new 60% Strainer with tests.

The team writes the first batch of functional-block Playwright tests for core features that must now work reliably. These tests will often benefit from the mocking and fixture patterns established earlier, because the goal is to verify that the UI behaves correctly for valid inputs, state transitions, and controlled feature data.

Examples of Month 2-style failures:

- a dropdown does not open

- a save button does nothing

- a text field accepts input but fails to persist it

- a filter UI renders but never changes results

- a configuration panel loads without usable options

- a feature-specific action returns no visible success/error state

The key outcome is that selected Severity 2 feature tests are promoted into the PR gate and begin blocking merges when core functionality is broken.

## Week 5 Success Criteria

By the end of Week 5, QA should have:

- [ ] A documented Core Feature Matrix for Simplabots

- [ ] A reviewed list of which feature failures now count as Severity 2 blockers

- [ ] Agreement from QA + Engineering on which tier-2 workflows are now part of the PR gate

- [ ] At least one new batch of functional Playwright tests for Month 2 blocking features

- [ ] Clear tagging or classification for new Month 2 tests, such as:

- [ ] @smoke

- [ ] @sev2

- [ ] @core-feature

- [ ] Day 7 mocking/fixture strategy reused where appropriate for deterministic feature validation

- [ ] New functional-block tests added without reintroducing flake into the trusted gate

- [ ] A clear list of issues that are still non-blocking, such as:

- [ ] cosmetic visual defects

- [ ] minor copy issues

- [ ] minor validation-boundary mismatches

- [ ] non-core edge cases

## Month 2 Quality Standard

Week 5 operates under the new 60% Strainer standard.

### Still Blocking from Month 1

These remain blocking:

- broken authentication

- app crash on critical path

- duplicate critical writes

- payment or credit corruption

- cross-account data exposure

- unrecoverable infinite loading state

- broken core value smoke flow

### Newly Blocking in Month 2

These can now block if they affect a core feature:

- a required dropdown/menu does not open

- a valid save/update action fails

- a key form does not persist valid input

- a feature-specific filter/search control is unusable

- a primary configuration flow fails to render or apply options

- a release-note feature is visibly broken for normal user input

### Still Non-Blocking

These are still logged as tech debt unless they materially break usage:

- minor padding/alignment issues

- copy inconsistencies

- minor validation edge mismatches

- advisory visual regression findings

- low-priority secondary polish issues

## Simplabots-Specific Framing

Because Simplabots is a multi-tenant AI platform, Week 5 should focus on feature usability in the areas that create daily user value.

Likely Month 2 candidate areas include:

- account/profile settings

- group/user management flows

- Chattie thread actions

- knowledge-base save/update behavior

- billing UI interactions

- Paige/Revvy/other bot configuration panels

- widget configuration and preview flows

- search, filter, or categorization controls where present

The key question for every candidate feature is:

If this feature appears available to the user, and it fails during normal usage, does that break a core product promise?

If yes, it is a strong candidate for Month 2 blocking coverage.

## Guiding Principle

A feature that exists in the product must function as promised.

Week 5 is not about blocking for polish.
It is about moving from “the app must not catastrophically fail” to “core functionality must actually work.”

Month 1 proved the gate could be trusted.
Week 5 begins proving that the gate can now enforce product reliability at the feature level.

