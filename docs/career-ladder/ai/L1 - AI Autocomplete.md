## AI Autocomplete (L1-AI) — Technical Specification of Role

### 1. Technical Execution

**Inline Acceleration** The engineer uses AI directly in the editor to reduce low-value typing and improve implementation speed for routine work:

- DTO and mapper generation.
- CRUD handler scaffolding.
- Test boilerplate (`describe/it` blocks, fixtures, basic assertions).
- Refactor assistance for repetitive rename/extract patterns.

The engineer remains the primary author. AI suggestions are accepted selectively and edited for correctness.

**Comprehension Requirement** Every accepted suggestion must pass a comprehension check:

1. Can the engineer explain what the code does?
2. Can they explain why this pattern is appropriate here?
3. Can they identify edge cases not handled by the suggestion?

Failure on these checks means the suggestion should be rejected or rewritten.

### 2. System & Architecture

**Local Context, Limited Global Reasoning** L1 tools are strong on nearby file context but weak on full-repo architecture. Typical risk areas:

- Inconsistent use of shared abstractions.
- Duplicate logic where internal helpers already exist.
- Test coverage focused on happy path only.

At this level, architecture decisions are still human-owned and review-driven.

**Safe Scope Boundary** L1 usage should be biased toward low-risk tasks:

- Acceptable: scaffolding, repetitive transforms, straightforward unit tests.
- Caution: auth flows, payment logic, migration scripts, and infra/security code.

### 3. Process & Communication

**Review Quality Expectations** PRs authored with autocomplete should explicitly preserve team standards:

- No hidden logic shifts via blind acceptance.
- No unexplained dependency additions.
- No bypass of linting/test requirements.

**Personal Productivity Baseline** The engineer is expected to show measurable improvement in coding throughput for routine tickets while maintaining or improving defect rate.

---

## Definition of Done for L1-AI

L1 is operating correctly when engineers deliver routine implementation work faster through autocomplete, without degrading code quality, test discipline, or adherence to team conventions.

---

## Promotion Criteria → Repo Assistant (L2-AI)

Promotion is indicated when usage shifts from **line-level acceleration** to **cross-file investigation and planning**:

| Capability | Evidence |
| :---- | :---- |
| **Responsible acceptance** | Consistently edits/rejects poor suggestions rather than accepting output blindly. |
| **Quality stability** | Maintains review quality and test integrity while increasing delivery speed. |
| **Prompt maturity** | Uses chat context to request targeted code explanations tied to repo patterns. |
| **Cross-file reasoning readiness** | Begins asking repo-level questions and converting results into concrete implementation plans. |
