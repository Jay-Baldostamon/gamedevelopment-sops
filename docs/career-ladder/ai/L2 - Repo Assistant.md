## Repo Assistant (L2-AI) — Technical Specification of Role

### 1. Technical Execution

**Cross-File Comprehension** AI is used as a repository-aware analyst that can trace behavior across modules and summarize findings:

- Request/response flow tracing across handlers, services, and data access layers.
- Dependency and usage mapping for shared utilities.
- Change impact analysis before refactors.
- Root-cause hypotheses for bugs with likely fix surfaces.

**Planning-Grade Outputs** Engineers use AI to generate structured implementation plans, not just prose:

- Proposed file-level change list.
- Migration sequencing.
- Test impact checklist.
- Rollback considerations.

At L2, implementation is still primarily human-executed.

### 2. System & Architecture

**Repository Context Utilization** The key competency at L2 is using AI to reduce comprehension overhead in medium-to-large codebases:

- Faster onboarding to unfamiliar services.
- Better visibility into implicit coupling.
- Earlier detection of side effects during change planning.

**Known Failure Modes** L2 users must guard against:

- Confident but incomplete dependency analysis.
- Overlooking runtime behavior not visible in static code (feature flags, env behavior, dynamic imports).
- Assuming generated plans are production-ready without technical review.

### 3. Process & Communication

**Issue and PR Readiness** AI outputs should be transformed into reviewer-friendly artifacts:

1. Problem summary.
2. Scope and impacted systems.
3. Proposed approach and alternatives.
4. Test strategy and rollout notes.

**Team Leverage Pattern** L2 users improve team velocity by providing better initial analysis packets before implementation starts, reducing design churn during execution.

---

## Definition of Done for L2-AI

L2 is operating correctly when repo-aware AI consistently improves analysis quality, impact visibility, and implementation planning accuracy for non-trivial engineering changes.

---

## Promotion Criteria → Agentic IDE (L3-AI)

Promotion is indicated when usage shifts from **analysis support** to **bounded multi-file code execution by agentic tools**:

| Capability | Evidence |
| :---- | :---- |
| **Reliable impact analysis** | Produces accurate, reviewable cross-file dependency and risk assessments. |
| **Plan quality** | Delivers implementation plans that can be executed with minimal rework. |
| **Workflow integration** | Uses analysis outputs to drive ticket decomposition and review preparation. |
| **Execution readiness** | Can define precise constraints for AI tools to perform safe multi-file edits. |
