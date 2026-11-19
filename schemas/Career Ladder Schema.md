# Career Ladder Schema

## Purpose

This schema defines the standard structure for engineering career ladder documents in `docs/career-ladder/backend`.

It preserves the current Vanguard ladder pattern while making future ladder docs consistent, comparable, and easier to author.

## Scope

Use this schema for:

1. Backend IC progression levels (L1, L2, L3)
2. Backend IC track documents (L4-IC to L6-IC)
3. Backend EM track documents (L4-EM to L6-EM)
4. Promotion split documentation between IC and EM paths

Do not use this schema for playbooks or blueprints. Use `schemas/Playbook Schema.md` and `schemas/Blueprint Schema.md` for those document types.

## Required Naming and Path Rules

1. Store backend ladder docs under `docs/career-ladder/backend/`.
2. Use level-prefixed filenames:
   - `L1 - <Role>.md`
   - `L2 - <Role>.md`
   - `L3 - <Role>.md`
3. Use track subfolders for split ladders:
   - `docs/career-ladder/backend/Individual Contributor/`
   - `docs/career-ladder/backend/Engineering Manager/`
4. Track-level filenames must include both level and role title (for example: `L4 - Staff Engineer.md`).

## Ladder Document Types

1. Foundational ladder (L1-L2)
2. Transition ladder (L3 with split guidance)
3. IC track ladder (L4-IC+)
4. EM track ladder (L4-EM+)
5. Placeholder/seed ladder (allowed for future levels not yet fully authored)

## Section Schema by Document Type

### 1) Foundational Ladder (L1-L2)

Required section order:

1. `## <Role Name> (Lx) — Technical Specification of Role`
2. `### 1. Technical Execution`
3. `### 2. System & Architecture`
4. `### 3. Process & Communication`
5. `## Promotion Criteria → <Next Level>`

Rules:

1. Promotion criteria must include a capability/evidence matrix table.
2. At least one explicit policy statement should be present (for example: non-negotiable expectations).
3. Use concrete examples tied to the backend stack and operations.

### 2) Transition Ladder (L3)

Required section order:

1. `## <Role Name> (L3) — Technical Specification of Role`
2. `### 1. Technical Execution`
3. `### 2. System & Architecture`
4. `### 3. Process & Communication`
5. `### The Vanguard "Definition of Done" for an L3`
6. `## The L4 Promotion Split — Two Paths, Equal Standing`
7. `### Path A: <IC path>`
8. `### Path B: <EM path>`
9. `### Path Selection Criteria — Summary`

Rules:

1. The split must explicitly state equal standing and compensation parity between tracks.
2. Path Selection Criteria must be a comparison table.
3. Path descriptions should cover objective, responsibilities, relationship to code, and success metrics.

### 3) IC Track Ladder (L4-IC+)

Required section order:

1. `## <Role Name> (Lx-IC) — Technical Specification of Role`
2. `### 1. Technical Execution`
3. `### 2. System & Architecture`
4. `### 3. Process & Communication`
5. `## The "Definition of Done" for an Lx <Role>`
6. `## Promotion Criteria → <Next IC Level>` (required unless terminal role)

Rules:

1. Technical scope must emphasize leverage across multiple project units.
2. Include concrete ownership boundaries (escalation scope, architecture authority, or platform stewardship).
3. Include at least one measurable outcomes table or metrics framing.

### 4) EM Track Ladder (L4-EM+)

Required section order:

1. `## <Role Name> (Lx-EM) — Technical Specification of Role`
2. `### Role Positioning` (required from Director and above; optional at L4-EM)
3. `### 1. <Execution/Delivery domain>`
4. `### 2. <People/Strategy domain>`
5. `### 3. <Communication/Culture domain>`
6. `## The "Definition of Done" for an Lx <Role>`
7. `## Promotion Criteria → <Next EM Level>` (required unless terminal role)

Rules:

1. EM levels must measure impact through team/system throughput, not personal code output.
2. Include department-level metrics, planning, and accountability expectations appropriate to level.
3. Include explicit shielding/escalation/process ownership expectations.

### 5) Placeholder/Seed Ladder (Future Levels)

Allowed minimum structure:

1. `## <Role Name> (Lx-<Track>) — Technical Specification of Role`

Rules:

1. Placeholder docs are temporary and must be expanded to full schema before adoption.
2. Keep naming aligned with the corresponding track and level conventions.

## Promotion Gate & Measurability Requirements

Every non-terminal level (any level with a `## Promotion Criteria → <Next Level>` section) must define **measurable promotion gates**, not prose aspirations. A promotion must be decidable by a reviewer from documented evidence alone, without relying on subjective judgment or recency.

### 7) Promotion Gate Matrix (required for all non-terminal levels)

Each promotion criteria section must be backed by a gate matrix. The existing capability/evidence table is the prerequisite; the gate matrix makes it decidable.

Required columns:

| Gate | Capability | Evidence (artifact) | Hard bar (pass threshold) | Soft signal | Measurement source |
| :-- | :-- | :-- | :-- | :-- | :-- |
| G1 | ... | ... | ... | ... | ... |

Column rules:

1. **Gate:** Stable identifier per capability (G1, G2, ...), orderable top-to-bottom.
2. **Capability:** One competency from the promotion criteria table (for example: feature decomposition, schema design, deployment ownership).
3. **Evidence (artifact):** The concrete, reviewable artifact that proves the capability, for example a decomposition doc, a merged migration PR, a deployment record, or an incident write-up. Vague evidence such as "demonstrates" or "shows initiative" is not permitted.
4. **Hard bar (pass threshold):** The objective, numerical or threshold-based condition that must be met, with a defined meaning (for example: "3 features delivered end-to-end with tests; 0 of their PRs required re-decomposition by a Senior"). Every hard bar must define both its counting unit and its qualifying period. A hard bar expressed only as "consistently," "reliably," or "independently" is not permitted.
5. **Soft signal:** A supporting, non-blocking indicator the reviewer can use to disambiguate borderline cases (for example: improving timeline accuracy, declining review rework). Soft signals do not by themselves allow promotion.
6. **Measurement source:** Where the evidence is observed and logged (for example: GitHub PR review history, an incident log, a mentor log, CloudWatch/CodeDeploy event history).

### 8) Gate Taxonomy

1. **Hard gate (blocking):** A gate that denies promotion if unmet. All promotion-gate matrix rows are hard gates unless explicitly marked soft. A promotion passes only when **every** hard gate is met.
2. **Soft signal (non-blocking):** Context that informs, but cannot override, a hard gate determination.

**Mandatory hard-blocking gates (non-negotiable).** For any level carrying production ownership, the following must always be defined as blocking gates (with evidence in the vetting record):
- **Pipeline integrity ("Faraday Cage"):** No recorded direct push to `main`, skipped checks, circumvention of review, or unauthorized pipeline-config change within the observation window. Violation denies promotion regardless of other criteria.
- **Incident honesty:** No concealed or delayed production incident within the observation window. Concealing a failure is a terminable offense and therefore an automatic promotion deny.
- **Rollback/operational competence:** For levels with deployment authority, at least one documented clean rollback or equivalent recovery execution.

### 9) Decision Process (required for every promotion)

Every promotion criteria section must specify:

1. **Observation window:** The minimum qualifying period over which evidence is collected (for example: "≥8 consecutive weeks"). A window longer than the evaluation interval prevents recency bias.
2. **Evaluator(s):** The role(s) who apply the gate matrix (for example: "assessed by an L3/Senior plus the L4-EM"). Self-assessment is not sufficient.
3. **Evidence sources:** The artifacts and logs the evaluators consult.
4. **Decision rule:** A hard bar for the decision itself (for example: "pass when all G1–G5 hard gates are met over the observation window; one failed hard gate denies unless the candidate re-proves it in the following window").
5. **Vetting record:** Where the decision and supporting evidence are stored (for example: a promotion review doc or checklist tracked in the hiring/people process).

**IF** a level document contains a promotion criteria table, **THEN** it must also contain the gate matrix and the decision process defined above.

## Content Composition Rules

1. Use role-level language focused on observable behavior and accountability.
2. Prefer explicit examples over abstract statements.
3. Use tables for comparison, metrics, and promotion criteria.
4. Keep each section scoped to its domain (execution, system, process/people/culture).
5. Include non-negotiable policies where applicable.
6. Keep terminology consistent across adjacent levels.

## Validation Checklist (Author Self-Review)

- [ ] File path and filename follow ladder conventions.
- [ ] Document matches one schema type (Foundational, Transition, IC Track, EM Track, Placeholder).
- [ ] Required section order for that type is followed.
- [ ] Role title and level tag (Lx, Lx-IC, Lx-EM) are correct and consistent.
- [ ] Promotion criteria section exists for non-terminal levels.
- [ ] Every non-terminal level includes a Promotion Gate Matrix with evidence, hard bar, soft signal, and measurement source columns.
- [ ] Every hard bar defines a counting unit and qualifying period; no bar relies on "consistently," "reliably," or "independently" alone.
- [ ] Mandatory blocking gates (pipeline integrity, incident honesty, operational/rollback competence) are present where production ownership applies.
- [ ] Decision process specifies observation window, evaluator(s), evidence sources, decision rule, and a vetting record.
- [ ] Definition of Done exists for L3+ full documents.
- [ ] Tables are used for promotion criteria and path/metric comparisons where required.
- [ ] Language describes measurable expectations and ownership, not generic traits.
