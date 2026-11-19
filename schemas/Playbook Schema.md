# Playbook Schema

## Purpose

This schema defines the standard structure for Engineering Department playbooks. It is optimized for consistency, reviewability, and AI-assisted drafting.

Primary reference style:

- AI Training Manual Playbook
- Hurdman AI VS Code Connection Playbook

## Required Section Order

All new playbooks should follow this order:

1. Title (`# ... Playbook`)
2. `## DEFINE`
3. `## Prerequisites`
4. `## Step-by-Step Checklist`
5. `## Common Mistakes & Fixes`
6. `## Success Criteria`
7. `## Storage & Access`
8. `## Next review date`

## Section Schema

### 1) Title

- Format: `# [emoji optional] [Playbook Name]`
- Must clearly identify the workflow being documented.

### 2) DEFINE

Use a two-column markdown table.

Required fields:

- Playbook Name
- Purpose
- Owner
- Last Updated (`YYYY-MM-DD`)
- Review Cycle (for example: `Every 90 days`)

Recommended style:

- Use clear operational language.
- Keep purpose scoped to one repeatable process.

### 3) Prerequisites

- Use checkbox list format (`- [ ] ...`).
- Include access/tooling requirements before execution begins.
- Include explicit blockers where applicable.

Optional conditional rule format:

- `IF [condition], THEN [action].`

### 4) Step-by-Step Checklist

- Organize by phases using headings:
  - `### Phase 1: ...`
  - `### Phase 2: ...`
- Inside each phase:
  - Use numbered implementation steps.
  - Start each step with an action verb.
  - Include post-phase checkbox validation list.
- Add decision logic as explicit IF/THEN statements when branching is needed.

Recommended action verbs:

- Confirm
- Open
- Select
- Enter
- Validate
- Review
- Publish
- Escalate

### 5) Common Mistakes & Fixes

- Use a two-column markdown table:
  - Common Mistake
  - Fix
- Include realistic failure modes observed in execution.

### 6) Success Criteria

- Use checkbox list format.
- Each item must be objectively verifiable.
- Criteria should map directly to steps in the checklist.

### 7) Storage & Access

- State where the playbook should live.
- State who needs access.
- Include an "Always Open" policy if execution should be done with the playbook visible.

### 8) Next review date

- Add as its own section.
- Use `YYYY-MM-DD` format.

## Optional Sections

Add only when useful:

- Prompt Template
- Quick Reference
- KPI Tracker
- References / Screenshots
- Troubleshooting Notes

## Writing Rules

- Prefer concise, imperative instructions.
- Keep one intent per step.
- Avoid mixing unrelated scopes in one phase.
- Use checklists for anything that needs verification.
- Do not include secrets, tokens, or private credentials in examples.

## Validation Checklist (Author Self-Review)

- [ ] Section order matches this schema.
- [ ] DEFINE table includes all required fields.
- [ ] Prerequisites and Success Criteria are checklists.
- [ ] Steps are phase-based and action-oriented.
- [ ] At least one IF/THEN rule exists where decisions are possible.
- [ ] Common Mistakes & Fixes is present.
- [ ] Storage & Access is present.
- [ ] Next review date is present and formatted as `YYYY-MM-DD`.
