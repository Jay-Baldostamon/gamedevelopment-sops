# Day 14: Task Creation 1

> **Retired lesson:** Do not follow the historical instructions below. Use [active L1 Day 14](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-14--checkpoint-and-respawn).

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Create a bounded implementation task for a checkpoint-and-respawn loop, breaking it into scene setup, trigger behavior, respawn state, and acceptance tests.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Day 14 - Task Creation 1 |
| Track | training |
| Level | day |
| Owner | Direct Supervisor |
| Last Updated | 2026-07-29 |
| Review Cycle | Every 30 days |
| Status | archived |

Convert a raw stakeholder request into a clear, actionable Week 3 GitHub issue in your current team's project with proper summary, acceptance criteria, and files-involved context using a reconverged AI-assisted task creation workflow.

### Session: Preparation

#### Prerequisites

Before starting, ensure the Engineer has:

* Active repo access (owner/repo known)
* A raw platformer feature request or a suitable assigned task
* VS Code + Copilot access (Unity gameplay lane) or GitHub Copilot Desktop access (game data lane)
* MCP GitHub integration installed/active

### Session: Core Execution

#### Directions (Core Activity)

### 1) Receive & Refine

1. Start with a raw player-facing feature request.  
   Example: “The player should respawn at the last checkpoint after touching a hazard.”
2. Identify unclear terms and goals before asking AI to draft the task.
3. Refine the raw note into a clean, contextualized task statement **before** asking AI to generate issue.

### 2) Workspace Prep

1. Open your lane workspace:
   * Unity gameplay lane: VS Code + project folder
   * game data lane: GitHub Copilot Desktop + approved game-data tooling-connected context
2. Open any project context references (domain glossary, architecture notes, prior issue patterns).
3. Confirm GitHub MCP server integration is installed and active for repository interactions.  
   Reference: <https://github.com/github/github-mcp-server?tab=readme-ov-file#local-github-mcp-server>

### 3) Plan Mode (Mandatory)

1. Open Copilot in **Plan** mode in your selected lane toolchain.
2. Paste your refined notes with this exact prompt:

I'm going to send an issue and related details. Before generating the GitHub issue, ask me for any details you need to clarify to generate a Summary, Acceptance Criteria, and Files Involved.



1. Do not skip Plan mode.

### 4) Clarify

1. Answer AI follow-up questions precisely (implementation intent, boundaries, behavior expectations, exclusions).
2. Ensure ambiguity is removed before execution.

### 5) Agent Mode Execution

1. After confirming the plan, switch Copilot to **Agent** mode.
2. Instruct AI:  
   “Initiate task creation for [owner/repo]”
3. **Model selection note:** use an OpenAI GPT model for this step.
4. If the issue is player-data, include approved game-data tooling context in the issue draft:
   * expected source (`connection`, `database`)
   * expected verification evidence approach
   * expected player-save contract/report validation notes

### 6) Verify

1. Open GitHub repository and confirm:

* issue was created successfully
* issue appears with expected structure
* issue is moved to Backlog (if automated workflow exists)

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Feeding raw vague task directly to AI | Always refine first with domain context |
| Skipping Plan mode | Use mandatory Plan → Clarify → Agent sequence |
| Accepting vague AI clarifying questions | Push for concrete behavior + scope details |
| Missing files-involved section | Force AI to include probable touchpoints |
| Issue created but not validated | Verify final issue content + backlog placement |

#### Standards & Governance

* Day 14 emphasizes **task-definition quality**, not coding output.
* Engineer must demonstrate translation from business language to engineering-ready issue format.
* Plan-first workflow is mandatory for consistency and risk reduction.
* The project issue should be clear and actionable for an independent reviewer.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Input | Raw platformer feature request |
| Prep | Context refinement + MCP check |
| Planning | Copilot Plan mode first (mandatory) |
| Clarification | Resolve AI questions before execution |
| Execution | Copilot Agent mode issue creation |
| Verification | Confirm issue + backlog placement |
| Type | Open |

- Milestone: the scoped project issue has clear acceptance criteria and affected files.

## Implementation Examples (if needed)

- No additional implementation example is required for this day. Use the session checklist directly.

## End-of-Day Checklist

- [ ] Raw stakeholder task is captured
- [ ] Task is cleaned/refined with business context
- [ ] Copilot Plan mode is used with required prompt
- [ ] Clarification Q&A is completed
- [ ] Agent mode creates issue in correct repository
- [ ] Issue structure includes Summary + Acceptance Criteria + Files Involved
- [ ] Issue appears in Backlog (if workflow-enabled)
