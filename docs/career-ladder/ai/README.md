# AI Career Ladder (Practical Maturity Model)

This ladder defines AI maturity from **advisory usage** to **bounded autonomous software delivery**.  
Each level changes two things: the engineer's operating posture and the reliability requirements of the surrounding system.

## Maturity Table

| Level | Name | Human Primary Role | AI Primary Role | Typical Tooling |
|---:|---|---|---|---|
| 0 | AI as Search/Explainer | asks and validates | explains and suggests | ChatGPT, Claude, Gemini, Perplexity |
| 1 | AI Autocomplete | authors and reviews | accelerates local code writing | Copilot, Codeium, Supermaven |
| 2 | Repo Assistant | investigator/planner | cross-file analyzer | Copilot Chat, Cursor Chat, Cody |
| 3 | Agentic IDE | task framer/reviewer | bounded multi-file executor | Copilot Desktop, Cursor Agent, Claude Code |
| 4 | Multi-Repo Coordinator | standards owner | migration/sop copilot | GitHub CLI, worktrees, repo search |
| 5 | Workflow Agent Runtime | workflow designer/operator | repeatable guarded execution | LangGraph, CrewAI, OpenHands, GitHub API |
| 6 | Internal AI Platform | platform owner | routed, policy-governed capability layer | LiteLLM, internal orchestration, vector stores |
| 7 | Bounded Autonomous SDLC | objective and policy governor | autonomous constrained delivery loops | custom agents, eval systems, CI/CD policy gates |

## How to Use This Ladder

1. Assess your current level based on observable operating behavior, not tool access.
2. Adopt the level's required controls before expanding autonomy.
3. Promote only when outcomes are reliable, repeatable, and auditable at the current level.

## Promotion Logic

Movement between levels is not driven by novelty. It is driven by demonstrated control:

- **L0 -> L2:** quality prompting, critical filtering, and better technical analysis.
- **L3 -> L5:** repeatable execution patterns with clear constraints and guardrails.
- **L6 -> L7:** organization-grade governance, reliability, and risk control that make autonomy safe.

## File Index

- `L0 - AI as Search-Explainer.md`
- `L1 - AI Autocomplete.md`
- `L2 - Repo Assistant.md`
- `L3 - Agentic IDE.md`
- `L4 - Multi-Repo Coordinator.md`
- `L5 - Workflow Agent Runtime.md`
- `L6 - Internal AI Platform.md`
- `L7 - Autonomous SDLC.md`
