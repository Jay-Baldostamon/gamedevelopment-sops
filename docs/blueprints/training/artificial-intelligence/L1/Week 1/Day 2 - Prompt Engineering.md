# Day 2: Prompt Engineering

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 2](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-2--set-up-unity-and-build-the-player-controller).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Use the game concept and movement ideas from Day 1 to prompt and refine a written player-movement specification. This is prompt-design practice, not a request to generate or implement a C# script.

**Validation and scope:** No Unity project, editor, code, tests, or build is required today. Review the AI's written specification against the requested scope and acceptance criteria. If you implement it on a later day, follow that task's local validation and project-safety requirements. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 2 - Prompt Engineering |
| Track | training |
| Level | day |
| Owner | Direct Supervisor |
| Last Updated | 2026-07-06 |
| Review Cycle | Every 30 days |
| Status | archived |

To train Engineers in prompt engineering by focusing on iteration quality, expectation-vs-output analysis, and reflective improvement using Gemini.

### Session: Preparation

#### Prerequisites

Before starting, ensure the Engineer has:

* Company email account access
* Gemini access: <https://gemini.google.com/app>
* Notes from Day 1 describing the player's fantasy, desired movement feel, or first playable room. If those notes are incomplete, use the starter context below and label any assumptions.
* No Unity project, repository, scene, or existing player script is needed.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Establish the Brief and Prompt

1. Use this shared project context: a desktop, 2D side-view action-platformer made with C# in the current Unity LTS release. Use the concept and movement feel you explored on Day 1.
2. Keep this exercise to player movement: moving left and right, one jump that starts while grounded, and the transition between grounded and airborne. Use A/D or the arrow keys for horizontal movement and Space to jump unless your Day 1 notes suggest another control scheme.
3. Ask Gemini to write a **behavior specification**, not code. It should cover controls, movement states and transitions, jump behavior, constraints, assumptions, and at least five observable acceptance criteria.
4. Ask Gemini to identify unanswered design decisions instead of silently inventing details such as movement speed, acceleration, coyote time, or jump buffering. Refine your prompt at least once using its first response.

### Phase 2: Compare the Responses

1. Save your initial prompt and its response, then save the refined prompt and response.
2. Check both responses against the brief: Is the output a specification rather than a script? Does it stay focused on movement? Are assumptions labeled and acceptance criteria observable?
3. Record one thing the first response missed and the exact prompt change that improved it.

### Phase 3: Reflect on Prompt Quality

1. Ask Gemini to reflect on your prompt iteration, using your notes from Phase 2:

* Which part of the brief was initially ambiguous?
* Which prompt change most improved the response, and why?
* What would you ask or specify earlier next time?

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Asking for a script when the exercise is about prompt design | Ask for a written behavior specification; do not implement code today |
| Leaving the game context implicit | Include the Day 1 concept and the shared Unity platformer baseline in the prompt |
| Letting the AI invent movement rules | Ask it to list unknowns and label assumptions before specifying behavior |
| Vague “what's missing” notes | Compare the response against the brief and name the missing rule or criterion |

#### Standards & Governance

* Process quality is prioritized over final polish.
* Reflection and expected-vs-actual comparison build prompt engineering judgment.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Practice task | Refine a behavior specification for a desktop 2D platformer's player movement |
| Required output | Controls, states, jump behavior, constraints, labeled assumptions, and at least five observable acceptance criteria |
| Primary objective | Improve the prompt; do not generate or implement production code |
| Reflection | Use Gemini to review the prompt changes and their effect |

- Milestone: refine the specification and identify how to improve the prompts.

## Starter Prompt

Copy this prompt into Gemini, then replace the bracketed text with your Day 1 notes:

> I am planning a desktop, 2D side-view action-platformer in C# using the current Unity LTS release. The player concept and desired movement feel are: [paste your Day 1 notes]. For this exercise, cover only left/right movement and one jump that starts while grounded. Use [A/D or arrow keys] to move and Space to jump. Do not write a C# script. First list any important unknowns and label reasonable assumptions. Then write a concise behavior specification covering controls, grounded/airborne states and transitions, jump behavior, constraints, and at least five observable acceptance criteria that a person could check in Play Mode. Exclude combat, hazards, collectibles, menus, and unrelated systems.

## End-of-Day Checklist

- [ ] Day 1 game context was included in the prompt
- [ ] A written movement specification was prompted and refined (no script or implementation)
- [ ] The output includes labeled assumptions and at least five observable acceptance criteria
- [ ] The initial and refined responses were compared, and one effective prompt change was recorded
- [ ] Gemini reflection on prompt quality was completed
