## Agentic IDE / Local Code Modifier (L3-AI) — Technical Specification of Role

### 1. Technical Execution

**Scoped Multi-File Execution** AI agents are now used to implement bounded tasks directly in the repository:

- Pattern rollouts across multiple files.
- Targeted module refactors with API compatibility constraints.
- Test updates aligned to code changes.
- Dependency and config adjustments required by refactors.

The engineer defines constraints precisely (scope, excluded files, acceptance criteria, and invariants).

**Constraint-Driven Prompting** Effective L3 prompts include:

1. Objective and non-goals.
2. Files/directories in scope.
3. Behavior that must not change.
4. Required tests and validation conditions.
5. Output format (diff summary, migration notes, risks).

### 2. System & Architecture

**Human-in-the-Loop Architecture Control** AI can execute code changes but does not own architecture. Engineers at L3 must prevent:

- Cross-cutting edits outside requested scope.
- Introduction of inconsistent abstractions.
- Silent behavior changes in edge paths.

**Review and Guardrail Practices** L3 teams standardize safeguards:

- Branch-based isolation for generated changes.
- Mandatory review for critical surfaces (security, auth, payments, data migrations).
- CI gates as non-bypassable controls.

### 3. Process & Communication

**Operational Workflow** L3 turns prompting into a repeatable local workflow:

1. Prepare task packet (context + constraints).
2. Run agent execution.
3. Review diff for correctness and scope.
4. Request focused iterations.
5. Finalize PR with rationale and risk notes.

**Team Adoption Pattern** L3 users become internal examples for safe AI execution practices, helping other engineers move from ad hoc usage to constrained, reliable workflows.

---

## Definition of Done for L3-AI

L3 is operating correctly when agentic tooling reliably produces useful multi-file changes for bounded tasks, while human reviewers maintain architectural integrity and safety standards.

---

## Promotion Criteria → Multi-Repo Coordinator (L4-AI)

Promotion is indicated when usage shifts from **single-repo execution** to **organization-level standards and cross-repo coordination**:

| Capability | Evidence |
| :---- | :---- |
| **Safe task framing** | Consistently defines precise constraints that prevent scope drift. |
| **Execution quality** | Generated changes are high-signal, low-rework, and review-ready. |
| **Workflow repeatability** | Team adopts a repeatable prompt-review-iterate loop based on this engineer's practice. |
| **Cross-repo perspective** | Begins coordinating common patterns, migration guidance, and consistency across repositories. |
