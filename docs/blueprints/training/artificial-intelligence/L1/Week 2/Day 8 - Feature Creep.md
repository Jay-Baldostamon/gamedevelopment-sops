# Day 8: Feature Creep

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 8](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-8--first-movement-improvement).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Lock the MVP to one playable room, movement, a jump, one hazard, and restart; separate deferred ideas such as inventory, multiple levels, and online features.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 8 - Feature Creep |
| Track | training |
| Level | day |
| Owner | Direct Supervisor |
| Last Updated | 2026-07-06 |
| Review Cycle | Every 30 days |
| Status | archived |

Day 8 focuses on reducing scope drift by reviewing your **6 Day 7 upgrades** and classifying what belongs in the core product vs optional enhancements.

### Session: Preparation

#### Prerequisites

Before starting, ensure the Engineer has:

* Day 7 completed with **6 upgrades/features**
* Project context available (README, branches, and feature notes)

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Review and Inventory

1. List all **6 implemented upgrades/features** from Day 7.
2. For each feature, capture:
   * Feature name
   * What problem it solves
   * User impact
   * Dependency/risk (if any)

### Phase 2: Define Core Purpose

1. Write a one-sentence **Core Purpose Statement** for your app:
   * Format: “This app exists to help [target user] accomplish [primary outcome].”
2. Validate each of the 6 features against this purpose statement.

### Phase 3: Categorize Features

1. Classify each feature into one of two buckets:

* **Must-Have**  
  Required for app to deliver its core purpose.
* **Nice-to-Have**  
  Useful or impressive, but not required for core purpose.

1. Avoid “maybe” category. Every feature must be explicitly categorized.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Labeling everything as Must-Have | Force each feature to justify direct connection to core purpose |
| Writing vague core purpose | Use target user + primary outcome format |
| No rationale in lists | Add 1-line reason for every categorized feature |
| Keeping a “maybe” pile | Enforce binary categorization: Must-Have or Nice-to-Have |
| Prioritizing based on effort only | Prioritize based on user value and core outcome first |

#### Standards & Governance

* Day 8 is a product-thinking day, not a coding output day.
* Core-purpose alignment is the primary evaluation criterion.
* Simple, clear classification is preferred over long explanations.
* Use the classification to keep the playable slice focused; personal notes are optional.

### Auxiliary Research (Optional)

1. Research and summarize:

* What is Feature Creep?
* What is a Minimum Viable Product (MVP)?
* How do agile teams prioritize features?

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Review set | All 6 Day 7 features |
| Core definition | 1-sentence purpose statement |
| Categorization | Must-Have vs Nice-to-Have |
| Research | Feature Creep, MVP, Agile prioritization |

- Milestone: all six features have a clear scope classification.

## Implementation Examples (if needed)

- No additional implementation example is required for this day. Use the session checklist directly.

## End-of-Day Checklist

- [ ] All 6 Day 7 features are reviewed
- [ ] Core Purpose Statement is defined
- [ ] Each feature is categorized as Must-Have or Nice-to-Have
