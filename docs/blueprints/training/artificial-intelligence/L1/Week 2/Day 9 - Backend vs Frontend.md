# Day 9: Presentation vs Gameplay Logic

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 9](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-9--control-feature-creep).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Separate presentation changes (sprite palette, camera framing, HUD layout) from gameplay logic changes (movement or state); verify the same input and collision behavior after each pass.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 9 - Presentation vs Gameplay Logic |
| Track | training |
| Level | day |
| Owner | Direct Supervisor |
| Last Updated | 2026-07-29 |
| Review Cycle | Every 30 days |
| Status | archived |

Using the Day 8 Unity MVP, practice changing presentation and gameplay logic independently.

### Session: Preparation

#### Prerequisites

Before starting, ensure the Engineer has:

* Day 8 Unity MVP baseline available and runnable in Play Mode
* Access to AI tools used in prior days (Gemini / Copilot / AI Studio as applicable)
* Local project environment working

### Session: Core Execution

#### Instructions (Core Activity)

Take the same Unity project and scene from Day 8.

#### Unity Gameplay and Game Data Scope

##### Unity gameplay

- Presentation includes sprites, colors, camera framing, and HUD layout. Gameplay logic includes movement, collision, and state transitions.

##### Game data

- Apply the same separation discipline to a local/mock player-save or score display: first change presentation only, then change data rules only while preserving the display shape. Do not query unrelated production databases.

1. First, ask your AI to **completely redesign the visual appearance** of the Unity scene  
   (e.g., “pixel-art,” “high contrast,” or “storybook”) **without changing gameplay functionality**.
2. Next, write a separate prompt asking AI to **change or optimize one gameplay rule**  
   (such as jump buffering or checkpoint state) **without changing the new presentation**.

#### Step-by-Step Checklist

### Phase 1: Baseline Lock

1. Confirm the Day 8 Unity MVP baseline in Play Mode.
2. Write one sentence describing current gameplay behavior and visual style.

### Phase 2: Design-Only Change

1. Submit a prompt that changes **only** Unity presentation (sprites, colors, camera, or HUD).
2. Apply a full visual theme transformation (Theme A).
3. Verify movement, collision, and restart behavior remain unchanged in Play Mode.

### Phase 3: Second Visual Theme (Same Logic)

1. Apply a second, clearly different presentation theme (Theme B), still with unchanged gameplay logic.
2. Verify the same player controls and interactions remain intact.

### Phase 4: Logic-Only Change

1. Submit a separate prompt to modify/optimize gameplay logic only  
   (e.g., jump buffering, checkpoint state, or collectible rules).
2. Keep the chosen presentation intact.
3. Verify:

* Presentation remains intact
* Updated gameplay logic works as expected

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Combining design + logic in one prompt | Split into two explicit prompts with constraints |
| Theme changes also altering behavior | Re-run with “no logic changes” guardrail and verify |
| Logic optimization accidentally breaking UI | Use “no design changes” guardrail and re-test |
| Presentations are too similar to compare | Choose clearly different themes and test the same behaviors |

#### Standards & Governance

* Day 9 evaluates scope discipline more than output aesthetics.
* Separation of concerns is mandatory in both prompting and implementation mindset.
* Check controlled changes locally rather than relying on random variation.

### Auxiliary Research (Optional)

1. Research and summarize:

* How do Unity scenes, GameObjects, and components divide presentation from behavior?
* What is the difference between visual readability and gameplay feedback?
* Why should a movement rule change not also alter the HUD or sprite setup?
* When should a Unity event or interface connect gameplay systems without tightly coupling them?

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Source baseline | Day 8 Unity MVP |
| Visual step | 2 distinct Unity presentations, same gameplay |
| Logic step | Gameplay-rule change, presentation preserved |
| Research | Unity components, scene/prefab presentation, gameplay state, and separation of concerns |

- Milestone: both presentations and the separate logic change work in local validation.

## Implementation Examples (if needed)

#### Prompting Tips (Quick)

* Use explicit constraints:
  + “Change Unity presentation only; do not alter gameplay behavior.”
  + “Modify the named gameplay rule only; do not change sprites, HUD, or camera.”
* Ask AI to list changed files after each step.
* Validate after every change cycle before proceeding.

## End-of-Day Checklist

- [ ] Day 8 Unity MVP was used as baseline
- [ ] Two clearly different Unity presentations were produced
- [ ] Both presentations preserve the same gameplay logic
- [ ] A separate logic-only prompt was executed
- [ ] Logic update was implemented without breaking chosen design
