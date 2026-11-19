## AI as Search/Explainer (L0-AI) — Technical Specification of Role

### 1. Technical Execution

**Prompt-to-Insight Usage** The engineer uses AI as an external reasoning partner, not a coding agent. Core activity is converting vague technical questions into answerable prompts and extracting useful guidance:

- Error diagnosis prompts: stack trace + runtime context + recent change summary.
- Concept clarification prompts: framework pattern comparisons, protocol behavior, and API semantics.
- Solution ideation prompts: multiple implementation options with explicit trade-offs.

At L0, no repo access is assumed. The AI output is reference guidance, not production-ready implementation.

**Manual Translation into Work Items** The engineer must convert AI suggestions into concrete tasks:

1. Validate the recommendation against the real stack.
2. Identify affected files and dependencies manually.
3. Implement changes manually.
4. Verify behavior manually.

### 2. System & Architecture

**No Shared Context Boundary** AI has no trusted, persistent understanding of the codebase. This creates predictable constraints:

- Naming and architectural conventions are frequently guessed.
- Suggestions may conflict with internal abstractions.
- Security-critical or compliance-sensitive logic can be incorrect.

Because of this, L0 usage is strongest for general patterns and weakest for context-heavy architecture decisions.

**Knowledge Hygiene** Engineers at L0 explicitly treat AI output as unverified input. Required behavior:

- Cross-check against official docs and existing code.
- Reject suggestions that bypass team standards.
- Avoid copy-pasting multi-file changes without local comprehension.

### 3. Process & Communication

**Question Quality Discipline** Quality of outcomes depends on question quality. Engineers should include:

- Problem statement.
- Constraints (framework, version, environment).
- Expected vs. actual behavior.
- What has already been attempted.

**Escalation Posture** AI is used to shorten discovery time, not to bypass peer review. If uncertainty remains after initial exploration, escalate through normal engineering channels.

---

## Definition of Done for L0-AI

L0 is operating correctly when AI shortens analysis time for routine debugging and research, while implementation quality remains fully governed by human engineering practices.

---

## Promotion Criteria → AI Autocomplete (L1-AI)

Promotion is indicated when usage shifts from **answer retrieval** to **editor-integrated execution acceleration**:

| Capability | Evidence |
| :---- | :---- |
| **Structured prompting** | Consistently produces high-quality, context-rich prompts that return actionable outputs with minimal follow-up. |
| **Critical filtering** | Reliably identifies hallucinations or non-applicable suggestions before implementation. |
| **Manual implementation reliability** | Converts AI guidance into correct code changes without introducing regressions. |
| **Workflow readiness** | Begins integrating AI into coding flow beyond chat-only usage (editor completions, test stubs, boilerplate generation). |
