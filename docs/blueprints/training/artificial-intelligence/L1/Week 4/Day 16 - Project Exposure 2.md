# Day 16: Project Exposure 2

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 16](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-16--build-level-2).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Map the project's scenes, prefabs, scripts, input actions, and asset references; identify one gameplay-system boundary and explain how a change can be tested safely.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field          | Value                             |
| -------------- | --------------------------------- |
| Blueprint Name | Day 16 - Project Exposure 2       |
| Track          | training                          |
| Level          | day                               |
| Owner          | Direct Supervisor / Training Team |
| Last Updated | 2026-07-29 |
| Review Cycle   | Every 30 days                     |
| Status         | archived                          |

Explore the continuing Unity game's repository and validate one gameplay path locally.

### Session: Preparation

- Confirm repository and tooling access before execution.

### Session: Core Execution

#### Execution Reference

Refer to the Unity project setup and validation workflow in [Day 11: Project Exposure (Feasibility)](../Week%203/Day%2011%20-%20Project%20Exposure%20%28Feasibility%29.md).

#### Step-by-Step Checklist

### Phase 1: Repository and Editor Context

1. Confirm the same Unity repository and assigned issue are being used.
2. Record the Unity Editor version from `ProjectSettings/ProjectVersion.txt`.
3. Use AI to map the main scenes, player prefab, movement scripts, input actions, and package dependencies.

### Phase 2: Game-System Map

1. Trace one gameplay path (input → player movement → collision/state → HUD or checkpoint feedback).
2. Identify scene/prefab references and any `.meta` files required by that path.
3. For the game data lane, map only an approved mock save-data contract; do not query CRM or unrelated production systems.

### Phase 3: Safe Validation

1. Open the main scene and run the existing gameplay path in Play Mode.
2. Run an available focused test or describe a repeatable manual test if no test exists.
3. Inspect the Game view and relevant Unity Console output.
4. Propose one small, testable improvement without implementing it unless the assigned issue explicitly authorizes implementation.

### Session: Quality and Reflection

- Review quality gates and document key lessons learned for the day.

## Deliverables and Milestone

- Milestone: map and locally exercise one gameplay path.

## Implementation Examples (if needed)

- No additional implementation example is required for this day. Use the session checklist directly.

## End-of-Day Checklist

- [ ] Core execution steps are completed.
