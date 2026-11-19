# Day 11: Project Exposure (Feasibility)

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 11](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-11--map-the-build-and-add-a-spike-hazard).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Clone and open the project with its recorded Unity LTS version, resolve package/import setup from project files, run the main scene, and produce a reproducible desktop test build.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 11 - Project Exposure (Feasibility) |
| Track | training |
| Level | day |
| Owner | Direct Supervisor |
| Last Updated | 2026-07-29 |
| Review Cycle | Every 30 days |
| Status | archived |

Access the assigned Unity project's GitHub repository for Week 3, request access only if missing, and open/run the project through **AI-assisted setup discovery**, not a generic web-stack setup guide.

### Session: Preparation

#### Prerequisites

Before starting, ensure the Engineer has:

* Repository access verified (or access request submitted if missing)
* Git installed and authenticated
* Local terminal access
* Unity Hub and the project's recorded Unity LTS Editor version available (or a documented request for access/license)

### Session: Core Execution

#### Instructions (Core Activity)

1. Access the assigned Unity game project's GitHub repository for Week 3; request access only if you do not already have it.
2. Clone it to your local machine.
3. Do **not** ask for a generic step-by-step install guide.
4. Instead, inspect Unity project markers and feed relevant non-secret files to AI:
   * `ProjectSettings/ProjectVersion.txt`
   * `Packages/manifest.json` and `Packages/packages-lock.json`
   * `Assets/` structure, scene names, and any project README
   * build settings and test assembly definitions, if present
5. Ask AI to infer:
   * exact Unity Editor version and target platform
   * required packages and safe import/open steps
   * main scene, input setup, and project-specific run instructions
   * available Unity Test Framework and build validation steps
6. Execute the commands and run the project locally.

#### Step-by-Step Checklist

### Phase 1: Access and Clone

1. Confirm repository access; request it only if missing.
2. Clone repository locally.
3. Open repository in VS Code.

### Phase 2: AI-Based Unity Project Detection

1. Gather setup-relevant files from repo root and share to AI.
2. Ask AI to identify:
   * Unity Editor version and platform targets
   * Unity packages and any version constraints
   * main scene, assembly definitions, and test assemblies
   * external services only if the Unity project explicitly uses them
3. Save the inferred project setup and any assumptions in notes.

### Phase 3: Unity Open and Validation Plan

1. Ask AI for the exact Unity Hub/Editor steps and any project-specific terminal commands needed to:
   * open with the recorded Editor version
   * resolve declared Unity packages
   * select and launch the main scene in Play Mode
   * run available Edit Mode/Play Mode tests
   * create a desktop build only when build settings and license access permit
2. Review commands before running them; do not generate or commit secrets.
3. Run each step and record its actual result. Do not invent missing scenes, packages, services, or credentials.

### Phase 4: Lane Verification

#### Unity Gameplay Lane

1. Open the main scene and verify the platformer runs in Play Mode.
2. Inspect the Game view and relevant Console output.
3. Run available tests and, if feasible, create and launch a desktop build.
4. If blocked by Editor access, license, packages, or missing assets, document the exact blocker rather than switching to a web stack.

#### Game Data Lane

1. Use only an approved mock/game-specific save-data fixture or explicitly authorized sandbox.
2. Identify the data contract for player profiles, save slots, checkpoints, or collectibles.
3. Validate the contract with a local fixture or read-only query where authorized; do not access CRM or unrelated production data.
4. If no approved data fixture/tool is available, document the intended contract and the access blocker; do not substitute a live database.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Asking for generic tutorial setup | Use repository config files as primary source for AI inference |
| Running commands without understanding order | Ask AI for strict command sequence and follow it exactly |
| Opening with an unrecorded Editor version | Use the version in `ProjectVersion.txt` and document any mismatch |
| Treating a package/import error as a code bug | Inspect package versions and import/Console evidence first |
| Relying on an unreproducible setup | Use the recorded Editor version and ordered open/test/build steps |
| Using an unrelated live database for game data | Stop; use an approved mock fixture or report the blocker |

#### Standards & Governance

* Day 11 emphasizes independent setup reasoning, not copy-paste tutorials.
* Keep setup steps reproducible; personal notes are optional.
* Unity version and package setup must be reproducible.
* Secrets must never be committed or pasted into AI prompts.
* Completion requires a successful local Play Mode run, or a clearly evidenced environment blocker.

### Auxiliary Research (Optional)

Research and summarize:

* How do Unity scenes, GameObjects, and prefabs work together?
* How do Unity packages and `Packages/manifest.json` affect project reproducibility?
* What is the difference between Edit Mode and Play Mode testing?
* How do build settings determine a desktop player build?
* How should a Unity game represent versioned player-save data safely?

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Repository onboarding | Access and clone the assigned Unity game repository |
| Setup method | AI inference from Unity project markers |
| Execution | Open the recorded Editor version, resolve packages, run scene/tests, build if feasible |

- Milestone: open and validate the Unity project locally, or identify the exact environment blocker.

## Implementation Examples (if needed)

#### Prompting Tips (Quick)

* Ask AI using Unity project files as context:
  + “Based on `ProjectVersion.txt`, the package manifest, and the project structure, explain how to open and validate this Unity project.”
* Ask for ordered Editor/test/build steps, and ask it to mark assumptions and missing access explicitly.

## End-of-Day Checklist

- [ ] Current team's Week 3 project repo is accessed (or access is requested if missing) and cloned
- [ ] Unity Editor version and packages are inferred from project files
- [ ] AI-provided Unity setup steps are reviewed and executed
- [ ] Main scene runs in Play Mode or the blocker is documented
- [ ] Tests/build are run where available and feasible
