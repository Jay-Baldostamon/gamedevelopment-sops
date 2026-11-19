# 🤖 GitHub Copilot Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | GitHub Copilot Playbook |
| Purpose | Standardize how engineers adopt and use GitHub Copilot effectively across environments by combining core onboarding, feature selection, and quality/safety practices into one repeatable workflow. |
| Owner | AI Enablement Team |
| Last Updated | 2026-07-22 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] You have a GitHub account with Copilot access (Free, Pro, Pro+, Max, Business, or Enterprise)
- [ ] You know your organization policy constraints (chat, CLI, and agent permissions)
- [ ] You have at least one active repository for practice or production work
- [ ] You have a target environment ready (IDE, GitHub web, CLI, mobile, or desktop app)
- [ ] You can run local validation checks (tests, lint, type checks) in your project

## Step-by-Step Checklist
### Phase 1: Confirm Access and Environment
1. **Confirm** the active Copilot plan and available features for your account type.
2. **Confirm** organization policy settings that may restrict chat, CLI, or agentic features.
3. **Select** the primary environment for this workflow run (IDE, GitHub web, CLI, or mobile).
4. **Open** a repository where you will run your first Copilot-assisted task.

- [ ] Plan access confirmed
- [ ] Policy constraints known
- [ ] Primary environment selected
- [ ] Repository opened

**Desktop overlap citation:** For GitHub Copilot Desktop installation and sign-in details, use `github-copilot-desktop/GitHub Copilot Desktop Installation and Setup.md` → **Phase 1: Install the GitHub Copilot Desktop App** and **Phase 2: Sign In and Connect Your GitHub Account**.

---

### Phase 2: Start with a Quick, Scoped First Task
1. **Open** Copilot Chat in your selected environment.
2. **Ask** one scoped first prompt about the current file, issue, or bug.
3. **Follow up** with one clarifying prompt that narrows output format or constraints.
4. **Capture** the accepted output in code, notes, or an issue draft.

Prompt examples:

```text
Explain this file and list the top 3 risks.
```

```text
Generate unit tests for this function and include edge cases for null/empty input.
```

- [ ] First prompt was scoped
- [ ] Follow-up prompt refined the result
- [ ] Output was captured for implementation/review

---

### Phase 3: Choose the Right Copilot Feature per Task
1. **Use** inline suggestions for repetitive or low-friction code completion.
2. **Use** Copilot Chat for explanations, refactors, larger generation, and guided iteration.
3. **Use** agentic features (CLI, cloud agent, agent mode, code review) for bounded tasks that benefit from autonomous execution.
4. **Use** customization features (Spaces, custom instructions, prompt files, MCP, skills, custom agents) when task context is broad or recurring.
5. **Use** admin features (policy, access, usage, audit, exclusions) for governance and rollout decisions.

- [ ] Feature choice matched task type
- [ ] Agentic features were used only when scope was clear
- [ ] Context/customization was added when needed

**IF the task is simple and local, THEN start with inline suggestions or chat before using agentic flows.**

**Desktop overlap citation:** For desktop session mode and runtime-location behavior, use `github-copilot-desktop/GitHub Copilot Desktop Installation and Setup.md` → **Phase 4: Start a Chat or Session** and **Session Mode Differences**.

---

### Phase 4: Apply Prompting and Context Best Practices
1. **Break** complex work into smaller prompts with one clear intent each.
2. **Specify** requirements, constraints, and expected output shape in every prompt.
3. **Provide** concrete context (file paths, symbols, sample input/output, acceptance criteria).
4. **Revise** the prompt when output quality is low instead of repeating the same request.
5. **Start** a fresh thread/session when prior context is now misleading.

- [ ] Prompts were specific and constraint-based
- [ ] Relevant context was provided
- [ ] Prompt iteration improved response quality

---

### Phase 5: Validate, Review, and Safely Adopt Output
1. **Review** Copilot output for correctness, readability, maintainability, and security impact.
2. **Run** project validation checks before accepting substantive code changes.
3. **Ask** Copilot to explain unclear logic before adoption.
4. **Prefer** maintainable patterns already used in your repository.
5. **Capture** unresolved risks as follow-up issues or tasks.

- [ ] Output was reviewed before acceptance
- [ ] Validation checks were run for changed behavior
- [ ] Unresolved risks were tracked

**IF you cannot explain a generated change, THEN do not merge it until the behavior and risk are understood.**

---

### Phase 6: Expand into Team-Level Usage
1. **Share** proven prompts and reusable context patterns with the team.
2. **Track** which Copilot features are producing measurable speed or quality gains.
3. **Collect** feedback on failure modes and update team prompting standards.
4. **Use** organization policy and access controls to scale responsibly.

- [ ] Reusable patterns documented
- [ ] Feature impact tracked
- [ ] Team standards updated from real usage

**Desktop overlap citation:** For Desktop MCP and specialized-agent workflows, use:
- `github-copilot-desktop/GitHub Copilot Desktop MCP Server Connection.md` → **Phase 1-3**
- `github-copilot-desktop/GitHub Issue Task Creator Agent.md` → **Phase 1-6**
- `github-copilot-desktop/DB Issue Verifier Agent.md` → **Phase 1-5**
- `github-copilot-desktop/BPC CRM Mergequery Builder Skill.md` → **Phase 1-5**

## Common Mistakes & Fixes
| Common Mistake | Fix |
| --- | --- |
| Using Copilot without clear scope | Start each prompt with one objective, constraints, and expected output. |
| Using the wrong feature for the task | Use inline for completion, chat for reasoning, and agentic flows for bounded autonomous work. |
| Accepting generated code without understanding it | Require explanation, run checks, and review for security and maintainability. |
| Keeping stale or noisy chat context | Start a new conversation when old context reduces response quality. |
| Treating Copilot as a decision-maker | Keep human ownership for design, risk, and merge decisions. |
| Duplicating desktop-specific instructions in generic docs | Reference desktop playbook sections instead of rewriting implementation details. |

## Success Criteria
- [ ] Engineer can access Copilot and identify policy constraints
- [ ] Engineer can complete a scoped first task with Copilot Chat or inline suggestions
- [ ] Engineer consistently chooses the correct Copilot feature for the task type
- [ ] Engineer uses prompt/context best practices and iterates when output is weak
- [ ] Engineer reviews and validates Copilot output before adoption
- [ ] Team has references to desktop-specific playbooks for platform-specific execution

## Storage & Access
Store this playbook in `docs/playbooks/ai-enablement` within the engineering repository.

Access is required for all engineers, team leads, and AI enablement stakeholders who use or govern Copilot workflows.

**Always Open Policy:** Keep this playbook visible when onboarding new users, selecting Copilot features for a task, or reviewing AI-assisted output quality.

## Next review date
2026-10-20
