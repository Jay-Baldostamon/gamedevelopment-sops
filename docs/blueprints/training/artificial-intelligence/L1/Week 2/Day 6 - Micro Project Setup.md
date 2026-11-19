# Day 6: Micro Project Setup

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 6](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-6--camera-that-follows-the-player).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Create the continuing Unity 2D project and repository, establish the first scene and minimal player, select the current Unity LTS editor, and document open/run steps.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 6 - Micro Project Setup |
| Track | training |
| Level | day |
| Owner | Direct Supervisor |
| Last Updated | 2026-07-29 |
| Review Cycle | Every 30 days |
| Status | archived |

Practice repository ownership, GitHub interface literacy, and useful project documentation.

### Session: Preparation

#### Opening Note

Day 6 shifts focus from local-only work into **GitHub-based project workflow**.

#### Prerequisites

Before starting, ensure the Engineer has:

* A GitHub account (active and verified email)
* The Unity game concept from **Day 3** and local project from **Day 4** ready for GitHub upload
* VS Code with Copilot access

#### Scope Clarification (Project Continuity Rule)

* The repository uploaded on Day 6 must be the **same project**:
  + pitched on **Day 3 (Decomposition)**, and
  + set up locally on **Day 4 (Debugging)**.
* Do **not** create a new/unrelated project for Day 6.
* Goal: maintain continuity of learning across Days 3 → 4 → 6.

#### Lane Clarification

* **Unity gameplay lane:** continue with the same Day 3/Day 4 Unity project and repository.
* **Game data lane:** continue with the same game and use an approved local/mock player-data fixture; no business database access is assumed.

### Session: Core Execution

#### Tooling Split: [Unity gameplay] vs [game data]

##### [Unity gameplay]

- Follow the workflow below as written.

##### [game data]

- Follow the same ownership and documentation workflow using the Unity game repository.
- Document the player-save/progression contract using an approved local/mock fixture. If one is unavailable, record the blocker and keep the work design-only.

#### Step-by-Step Checklist

### Phase 1: Repository Setup

1. Create or use your GitHub repository for the Day 3/Day 4 project.
2. Push your current local project code to that repository.
3. Grant repository access only when authorized and needed for actual collaboration.

### Phase 2: README Generation with Copilot

1. Open project in VS Code.
2. Use VS Code Copilot to generate a starter README.md for your repository.
3. Ensure README includes at minimum:
   * Project name
   * Purpose/overview
   * Setup steps
   * Run instructions
   * Current status/scope
4. Commit and push README to repository.

### Phase 3: GitHub Desktop Installation (Windows)

1. If on Windows, install GitHub Desktop:  
   <https://desktop.github.com/download/>
2. Sign in with your GitHub account.
3. Clone your repository locally via GitHub Desktop.
4. Make a small test change, commit, and push to verify workflow.

#### GitHub Desktop Quick Tips

* **Current Repository (top bar):** confirms which repo you’re editing.
* **Changes tab:** shows modified files before commit.
* **Commit message box:** use clear messages (docs: add initial README).
* **Push origin button:** uploads local commits to GitHub.
* **Fetch origin button:** checks for remote updates.
* **Branch selector:** switch/create branches safely.
* **History tab:** review commit timeline and changed files.
* If push fails, check:
  + internet connection
  + repo permissions
  + authentication status in app settings

### Phase 4: GitHub Tab Exploration Task

1. Explore these repository tabs and learn what each one does:

* Code
* Issues
* Pull requests
* Agents
* Actions
* Projects
* Security
* Insights
* Settings

2. Explain each tab's purpose to yourself; personal notes are optional.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Uploading a different project than Day 3/4 | Use only the same Day 3 pitched + Day 4 local setup project |
| README too vague or missing setup instructions | Include purpose, setup, and run steps at minimum |
| Installing GitHub Desktop but not testing push flow | Perform one test commit + push to validate setup |

#### Standards & Governance

* Day 6 emphasizes ownership and visibility of project work in GitHub.
* Keep the project README useful for opening and running the game.
* Engineers should prioritize practical understanding over memorization.
* Project continuity across Days 3, 4, and 6 is mandatory.

### Auxiliary Research (Optional)

1. Research via AI and document short findings:

* What is GitHub?
* Why should I use GitHub?
* What is GitHub Desktop?
* Why GitHub over other code repository platforms?
* Why do GitHub and VS Code work so well together?

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Project scope | Must be same Day 3 + Day 4 project |
| README creation | Required using VS Code Copilot |
| GitHub Desktop (Windows) | Install + test commit/push |
| Tab exploration | Required for all listed tabs |

- Milestone: the continuing project can be opened from its repository and its README explains how to run it.

## Implementation Examples (if needed)

- No additional implementation example is required for this day. Use the session checklist directly.

## End-of-Day Checklist

- [ ] Day 3/Day 4 project is pushed to GitHub repository
- [ ] README has been generated via Copilot, committed, and pushed
- [ ] (Windows) GitHub Desktop is installed and test push is completed
- [ ] All required GitHub tabs were explored
