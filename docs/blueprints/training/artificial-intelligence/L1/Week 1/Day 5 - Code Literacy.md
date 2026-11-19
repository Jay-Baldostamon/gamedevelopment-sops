# Day 5: Code Literacy

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 5](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-5--design-and-build-a-level).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Read an existing C# MonoBehaviour and trace input, Update/FixedUpdate, movement state, collision callbacks, and serialized Inspector fields in plain language.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 5 - Code Literacy |
| Track | training |
| Level | day |
| Owner | Direct Supervisor |
| Last Updated | 2026-07-29 |
| Review Cycle | Every 30 days |
| Status | archived |

The goal is to understand a small piece of code well enough to explain how it works.

This day is lane-aligned:

* **Unity gameplay lane:** function-level code literacy walkthrough in application code.
* **game data lane:** player-save contract and approved mock-fixture literacy walkthrough with evidence-oriented reasoning.

### Session: Preparation

#### Prerequisites

Before starting, ensure the Engineer has:

* Local project setup running in VS Code

#### Things to Avoid (Hard Rules)

* Do **not** chase imported methods/functions.  
  Scope must remain the selected 50–100 line function.

#### Internal Learning Principles

* Mistakes are valid work; document them internally.
* Over time, mistakes often produce stronger learning than clean successes.
* Use VS Code Copilot **Explain** capability to help verify your understanding against the code.

### Session: Core Execution

#### Tooling Split: [Unity gameplay] vs [game data]

##### [Unity gameplay]

- Follow the workflow below as written.

##### [game data]

- Apply the same structure to one game-data workflow unit (query, player-save contract, or verification routine) with equivalent scope discipline.
- Identify the approved mock fixture and where the routine or contract is used.
- Explain each important logic block line-by-line with intent, constraints, and data-safety reasoning.

#### Step-by-Step Checklist

### Phase 1: Select Scope (Strict Limits)

1. Select **only 1 file**.
2. Select **only 1 function** from that file.
3. Function length must be **50–100 lines**.
4. Do not include imported function deep-dives in scope.

### Phase 2: Explain and Check

1. Find where the function is called and identify its parameters and return value.
2. Explain the selected function line by line in your own words, including the intent of any calls it makes.
3. Check uncertain explanations against the source, debugger, or a focused test. Repeat the exercise if needed; no recording or submission is required.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Explaining multiple files/functions | Restrict to exactly 1 file + 1 function |
| Choosing function too short/long | Enforce 50–100 line range |
| Starting with code internals only | First identify usage location + parameters |
| Going into imported method internals | Stop at call intent; do not deep dive imports |

#### Standards & Governance

* This is a comprehension evaluation, not a feature demo.
* Scope control keeps the exercise focused.
* Use local self-checks and repeat the exercise when needed.

#### Auxiliary Tasks (Optional)

* Continue Skool classroom video progression.
* Continue AI habit progression: from ~5 daily chats toward ~50 over time.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Scope | 1 file, 1 function, 50–100 lines |
| Intro section | Identify where the function is used and its parameters |
| Main content | Line-by-line explanation of selected function |
| Scope boundary | Do not deep-dive into imported functions |

- Milestone: explain the selected function and check uncertain reasoning locally.

## Implementation Examples (if needed)

- No additional implementation example is required for this day. Use the session checklist directly.

## End-of-Day Checklist

- [ ] Exactly 1 file and 1 function (50–100 lines) were selected
- [ ] Function usage location and parameters were identified
- [ ] Full line-by-line walkthrough was completed
- [ ] Subfunction reasoning was explained where relevant
- [ ] No imported-method deep-dive was included
