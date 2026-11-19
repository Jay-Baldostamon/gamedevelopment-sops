# Days 21–23: Scope Mapping the Core Feature Matrix


Days 21–23 begin the transition from the 50% Strainer to the 60% Strainer.

Month 1 proved that the Playwright gate could block catastrophic failures without overwhelming developers.
Now the team expands the definition of “release-blocking” to include core feature failures.

These are not app-crash scenarios.
These are “the app loads, the user logs in, but a primary feature is unusable” scenarios.

The goal of Days 21–23 is to define a Core Feature Matrix for Simplabots so that QA and Engineering agree on which tier-2 workflows now count as Severity 2 functional blockers.

### Why This Matters

At the 60% Strainer level, the quality gate is no longer asking only:

“Will this crash the business?”

It is also asking:

“Does this feature still do the job users expect it to do?”

For Simplabots, this matters because many product experiences are workflow-driven:

- configure something

- save something

- filter something

- share something

- load a thread

- apply bot settings

- update account/profile state

- manipulate billing/payment settings

- complete a guided AI or workspace setup step

If those features appear usable in the UI but fail during normal use, they should no longer be treated as harmless tech debt.

## Day 21: Define the Core Feature Standard

Day 21 is about agreeing on what qualifies as a core functional promise.

A core feature is one that meets one or more of these criteria:

- surfaced prominently in the UI

- used frequently in normal workflows

- mentioned in release notes or demos

- essential to account/profile/team management

- essential to agent usage or configuration

- essential to billing or subscription management

- expected by the customer as part of the product’s main value

### Team Rule

A feature becomes a Month 2 blocker when:

- the feature is visible and available to the user

- the user provides valid input

- the UI still fails to complete the expected action

- the failure materially breaks the usefulness of the feature

### Not Yet a Blocker

A feature issue does not automatically become a Month 2 blocker if it is only:

- cosmetic

- copy-related

- minor boundary validation mismatch

- low-priority edge behavior

- present only in non-core proof-of-concept or internal-only areas

- a secondary polish issue that does not stop task completion

## Day 22: Map Simplabots Tier-2 Workflows

Day 22 focuses on identifying real Simplabots workflows that belong in the matrix.

These are likely candidates for Severity 2 functional blocking coverage:

### 1. Profile / Account Updates

If users can edit account or profile information, valid saves must actually persist.

Examples:

- changing account information

- updating profile/workspace settings

- saving business details

- changing group/account-level configuration

### 2. Search / Filter / Dropdown Interactions

If a user relies on a selector, dropdown, filter, or search box to use the app, it must function.

Examples:

- filter dropdown opens but renders no options

- valid filter selection does not change displayed data

- search box accepts input but produces unusable behavior

- menu/select components are visible but non-interactive

### 3. Chattie Thread Actions

Thread management is a visible feature and likely central to chat workflow usability.

Examples:

- thread history fails to load

- thread rename does not persist

- thread delete fails silently

- share-to-team action appears available but does nothing

### 4. Knowledge Base Save Flows

If Simplabots exposes structured forms or unified response saving, those saves must work.

Examples:

- form accepts valid input but does not save

- successful response is not reflected in the UI

- partial save silently fails

- “save” action completes with no confirmation and no persistence

### 5. Billing / Settings Actions

If billing and settings actions are available to users, they must work safely and clearly.

Examples:

- delete payment method action does nothing

- billing UI fails to remove or update state

- settings save action returns no usable result

- required account-setting flow becomes non-functional

### 6. Widget / Bot Configuration Flows

If a user can configure a bot, widget, or agent behavior, the controls must load and apply correctly.

Examples:

- widget config fails to load

- provider options fail to render

- voice/config dropdowns do not populate

- preview/configuration pane accepts input but does not apply changes

### 7. Agent Configuration Panels

For agent-specific admin/configuration panels, valid inputs must be accepted and persisted.

Examples:

- Revvy/Paige/other bot config panels refuse valid changes

- toggles do not persist

- option groups load but are unusable

- action buttons are visible but functionally dead

## Day 23: Build the Core Feature Matrix

By Day 23, the team consolidates all reviewed workflows into a single classification matrix.

The purpose of the matrix is to separate:

- Severity 1 blockers

- New Severity 2 functional blockers

- Still non-blocking tech debt

## Simplabots Core Feature Matrix

| Area | Example Workflow | Severity 1 Blocker | Severity 2 Functional Blocker | Still Non-Blocking Tech Debt |
| --- | --- | --- | --- | --- |
| Auth / Access | user cannot log in or reach authenticated routes | Yes | No | No |
| Profile / Account Settings | valid profile/account update fails to save | No | Yes | minor copy/spacing in form |
| Search / Filter Controls | filter dropdown will not open or render options | No | Yes | slight label wording issue |
| Dropdown / Select Inputs | user cannot select required option to continue flow | No | Yes | non-critical placeholder text issue |
| Chattie Thread Management | rename/delete/share/load thread fails during normal use | No | Yes | thread icon alignment issue |
| Knowledge Base Forms | valid form input does not persist | No | Yes | helper text mismatch |
| Billing / Payment UI | payment or credit corruption | Yes | No | minor receipt copy issue |
| Billing / Settings UI | visible settings or payment action does nothing | No | Yes | cosmetic button styling issue |
| Widget / Bot Config | configuration panel fails to load/apply usable options | No | Yes | preview spacing issue |
| Agent Config Panels | valid config change cannot be saved/applied | No | Yes | label capitalization issue |
| Multi-Tenant Security | User B can access User A data | Yes | No | No |
| Recoverability | user trapped in infinite spinner/no escape | Yes | No | slightly delayed success toast |

## Severity Classification Guidance

### Severity 1 Blockers

These remain hard blockers because they threaten business continuity, trust, money, or security.

Examples:

- broken login

- protected route failure

- duplicate critical writes

- payment or credit corruption

- cross-account data exposure

- infinite unrecoverable loading state

- broken core agent or credit-sensitive smoke path

### Severity 2 Functional Blockers

These are the new Month 2 additions.

Examples:

- valid save action does not persist

- required dropdown does not open

- visible feature is unusable in normal workflow

- filter/search control fails functionally

- config panel loads but user cannot complete core action

- release-note feature cannot be used successfully

### Still Non-Blocking Tech Debt

These remain tracked but do not block during early Month 2.

Examples:

- minor validation edge mismatch

- visual alignment issue

- copy issue

- spacing/padding inconsistency

- advisory visual regression

- non-core edge case not affecting primary workflow

## Required Output: Core Feature Decision Log

By the end of Day 23, the team should publish a decision log.

Example:

# Simplabots Core Feature Matrix

## Purpose

This document defines which Simplabots workflows count as:

- Severity 1 blockers

- Severity 2 functional blockers

- Non-blocking tech debt

## Severity 1 Blockers

- authentication/access failure

- data corruption / duplicate critical writes

- payment/credit corruption

- cross-account data exposure

- unrecoverable infinite loading states

- broken core smoke value flow

## Severity 2 Functional Blockers

- profile/account updates fail to save valid input

- required dropdowns/selects fail to open or populate

- search/filter interactions fail during normal use

- Chattie thread actions fail during standard workflow

- knowledge-base save/update flow fails

- billing/settings feature action appears available but does not function

- widget/bot configuration panels fail to load/apply usable state

- key agent configuration panels fail to persist valid changes

## Still Non-Blocking

- cosmetic visual issues

- copy-only issues

- minor validation boundary mismatches

- advisory visual differences

- low-priority polish defects

## Notes

TBD



## Team Discussion Prompts for Days 21–23

To keep classification aligned, the team should ask these questions for every candidate feature:

- Is this feature central to product value?

- Would a user reasonably expect it to work if shown in the UI?

- Does failure of this feature stop meaningful task completion?

- Is it a normal workflow, not just a rare edge case?

- Is it worth blocking a PR for in Month 2?

- Can we automate it reliably without introducing flake?

- Does it belong in @smoke, @sev2, or remain @advisory for now?

## Days 21–23 Deliverable

By the end of Day 23, the team should have:

- A documented Core Feature Matrix

- A reviewed list of candidate Month 2 blockers

- Clear separation between Severity 1, Severity 2, and tech debt issues

- Agreement between QA and Engineering on which workflows are core

- A shortlist of first automation targets for Days 24–25

- A tagging strategy for new Month 2 functional-block tests

## Advisor Checklist for You

- [ ] Did the team define what a “core functional promise” means in Simplabots?

- [ ] Did they identify workflows that are visible, central, and expected by users?

- [ ] Did they separate catastrophic failures from functional failures clearly?

- [ ] Did they avoid promoting cosmetic/polish issues into blockers too early?

- [ ] Did QA and Engineering agree on the first set of Severity 2 functional blockers?

- [ ] Did the team publish the Core Feature Matrix in a shared document?

- [ ] Is there a clear handoff list for Day 24–25 automation work?

## Guiding Principle

If the user can see it, and the product depends on it, it must work.

Days 21–23 are about defining that promise clearly.

The 60% Strainer is not about blocking for polish.
It is about holding Simplabots accountable for core functionality that users rely on every day.

