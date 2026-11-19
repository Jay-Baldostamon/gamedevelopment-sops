# Day 4: Debugging

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 4](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-4--add-two-power-ups).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Investigate one reproducible Unity gameplay bug (such as a double jump or a missed landing) from observations, Console output, and a minimal test scene; document the verified cause.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 4 - Debugging |
| Track | training |
| Level | day |
| Owner | Direct Supervisor |
| Last Updated | 2026-07-29 |
| Review Cycle | Every 30 days |
| Status | archived |

Practice a repeatable Unity debugging loop: reproduce a player-control or collision bug, inspect runtime evidence, form a cause hypothesis, and verify a bounded fix or diagnosis.

### Session: Preparation

#### Prerequisites

Before starting, ensure the Engineer has:

* Access to the assigned Unity game repository
* Git installed and authenticated
* Unity Hub and the project's recorded Unity LTS Editor version available, or a documented access/license request
* VS Code or the team's approved C# IDE
* The main scene and a reproducible gameplay bug or approved game-data fixture
* Copilot/Gemini access as approved by the supervisor

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Establish a Unity Baseline

1. Open the assigned repository in the IDE and Unity Hub.
2. Confirm the Editor version from `ProjectSettings/ProjectVersion.txt` and inspect the package manifest.
3. Open the main scene, capture a before-state Game view, and note relevant Console messages.

### Phase 2: Reproduce One Defect

1. Write exact steps to reproduce one small player-movement, jump, collision, or checkpoint bug.
2. Record expected versus actual behavior, scene/prefab involved, and whether the issue reproduces every time.
3. For game-data exercises, use only a local/mock save fixture; never query unrelated production systems.

### Phase 3: Diagnose with Evidence

1. Ask AI to explain the Unity Console output and relevant C# code; provide only the smallest necessary, non-secret context.
2. Inspect the affected GameObject, components, Inspector values, serialized references, and input/collision settings.
3. Use a breakpoint or focused test when useful. Ask AI for multiple possible causes and a test that can distinguish them.
4. Record the verified cause; do not treat an untested suggestion as a diagnosis.

### Phase 4: Verify a Bounded Resolution

1. If the assigned issue authorizes a fix, make the smallest in-scope change. Otherwise, identify a diagnosis and proposed fix without changing the project.
2. Re-run the reproduction steps in Play Mode and run a focused Unity test if available.
3. Confirm the Console has no new relevant errors and compare the before/after behavior.
4. Keep `.meta` files and scene/prefab references intact; do not commit generated `Library`, `Temp`, or build output.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| Mistake | Fix |
| --- | --- |
| Changing code before reproducing the bug | Capture exact Play Mode steps and a baseline first |
| Treating every Console warning as the cause | Link the relevant message or test to the reproduced behavior |
| Guessing at Inspector or physics settings | Inspect the actual GameObject, component, and serialized values |
| Accepting an AI explanation without testing | Verify the proposed cause with a minimal test or repeated reproduction |
| Changing multiple systems at once | Make one bounded change and rerun the same reproduction steps |
| Sharing licensed assets or secrets with AI | Share minimal code/log context and use approved assets only |

#### Standards & Governance

* Reproduction and evidence come before code changes.
* A diagnosis must distinguish observed facts from hypotheses.
* Only implement a fix when the assigned issue authorizes it.
* Inspect Unity Editor, Play Mode, test, and Console outcomes honestly; treat unavailable checks as blocked.

## Deliverables and Milestone

- Milestone: the bug is reproduced and its cause verified, or the remaining blocker is identified locally.

## Implementation Examples (if needed)

#### Recommended Debug Log

```text
Unity version:
Scene / GameObject:
Reproduction steps:
Expected / actual:
Relevant Console or test evidence:
Cause (verified / still a hypothesis):
Fix authorized? (yes/no):
Validation result:
Remaining blocker:
```

## End-of-Day Checklist

- [ ] Project opened with the recorded Unity Editor version
- [ ] A gameplay bug or approved mock-data defect was reproduced
- [ ] Evidence was collected before changing code
- [ ] Root cause was verified or clearly marked as a hypothesis
- [ ] Any fix stayed within authorized scope and passed the same reproduction/test