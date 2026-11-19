# Blueprint Schema

## Purpose

This schema defines the standard structure for blueprint documents in `docs/blueprints`.

It is designed to keep blueprint content:

- consistent across tracks (for example: quality assurance, training)
- easy to navigate from timeline to month/week/day detail
- reviewable by engineering leaders and contributors
- AI-friendly for drafting, updates, and validation

## Scope

Use this schema for:

- program-level blueprint overviews
- month-level and week-level roadmap documents
- day-level execution blueprints
- blueprint track README/index files

Do not use this schema for playbooks. Use `schemas/Playbook Schema.md` for playbook content.

## Blueprint Document Types

Blueprints are organized as a hierarchy.

1. Track README (index and navigation)
2. Program timeline overview
3. Month overview
4. Week overview
5. Day (or multi-day) execution blueprint

Each document type has required sections below.

## Required Naming and Path Rules

- Store all blueprint content under `docs/blueprints/<track>/...`
- Keep hierarchy explicit (for example: `Month 1/Week 1/Day 1 - ...`)
- Use title-aligned file names.
- Prefer one topic per file.
- Use markdown `.md` files only.

Recommended filename patterns:

- `README.md`
- `<Track or Program> Timeline Overview - <Topic>.md`
- `Month <N> Overview - <Topic>.md`
- `Week <N> Overview - <Topic>.md`
- `Day <N> - <Topic>.md`
- `Days <N>-<N> - <Topic>.md`

## Common Frontmatter Block (Recommended)

Add this near the top of each non-README blueprint.

| Field          | Requirement             | Example                             |
| -------------- | ----------------------- | ----------------------------------- |
| Blueprint Name | Required                | Week 2 Overview - Advanced Patterns |
| Track          | Required                | quality-assurance                   |
| Level          | Required                | timeline, month, week, day          |
| Owner          | Required                | QA Lead                             |
| Last Updated   | Required (`YYYY-MM-DD`) | 2026-06-26                          |
| Review Cycle   | Required                | Every 30 days                       |
| Status         | Recommended             | draft, active, archived             |

## Section Schema by Document Type

### 1) Track README

Required sections:

1. `# <Track Name>`
2. Short context sentence (source and purpose)
3. Link list to major artifacts, ordered chronologically:
   - timeline overview
   - month overviews
   - week overviews
   - day documents
   - resources

Rules:

- All links must be relative and valid.
- Keep list order consistent with timeline order.

### 2) Program Timeline Overview

Required section order:

1. `# <Timeline Title>`
2. Purpose/context intro
3. `## Timeline Summary`
4. `## Progressive Gate Matrix` (or equivalent decision matrix)
5. `## Month-by-Month Focus`
6. `## Guiding Principle`

Rules:

- Describe progression by month/phase in plain language.
- Include a matrix table with at least:
  - timeline/phase
  - gate level
  - blocking threshold
  - objective

### 3) Month Overview

Required section order:

1. `# Month <N> Overview: <Topic>`
2. Context paragraph for month objective
3. `## What to Expect This Month`
4. `## Month <N> Success Criteria`
5. `## Month <N> Quality Gate Standard`
6. `## Month <N> Operating Metrics`
7. `## Guiding Principle`

Rules:

- Include a week-by-week preview under "What to Expect".
- Success criteria should be a checklist.
- Distinguish blocking vs non-blocking outcomes.

### 4) Week Overview

Required section order:

1. `# Week <N> Overview: <Topic>`
2. Week objective paragraph
3. `## What to Expect This Week`
4. `## Week <N> Success Criteria`
5. `## Guiding Principle`

Rules:

- Include daily focus bullets/headings in sequence.
- Success criteria should be a checklist tied to expected week outputs.

### 5) Day (or Multi-Day) Execution Blueprint

Required section order:

1. `# Day <N>: <Topic>` or `# Days <N>-<N>: <Topic>`
2. Execution context paragraph
3. One or more session blocks (for example: `### Session: ...`)
4. Deliverables/milestone section
5. Implementation examples (if needed)
6. End-of-day checklist

Rules:

- Use imperative language for actions.
- Split learning context from executable instructions.
- Use checklists for advisor/leader validation.
- If code is shown, keep it minimal and directly tied to the session objective.

## Writing Rules

- Prefer concise, operational language.
- Keep each section scoped to one planning layer (timeline/month/week/day).
- Make progression explicit (what changes from prior phase).
- Use checklists for verifiable outcomes.
- Avoid tool/version noise unless required for execution.
- Do not include secrets, credentials, or private tokens.

## Consistency Rules

- Keep terminology stable across files in one track.
- Keep gate labels and severity language consistent.
- Keep day/week numbering continuous and non-overlapping.
- Update README links when files are renamed or added.

## Validation Checklist (Author Self-Review)

- [ ] File is in the correct `docs/blueprints/<track>/...` path.
- [ ] Document type matches one schema type (README, timeline, month, week, day).
- [ ] Required section order for that type is followed.
- [ ] Naming pattern matches timeline/month/week/day convention.
- [ ] Checklists are used for success criteria or end-of-day validation.
- [ ] Tables are used where matrix decisions are needed.
- [ ] Terms for gates/severity are consistent with neighboring files.
- [ ] No secrets or private credentials are present.
- [ ] `Last Updated` is present and formatted `YYYY-MM-DD` (when metadata block is used).
