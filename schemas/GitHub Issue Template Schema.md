# GitHub Issue Template Schema

## Purpose

This schema defines the standard structure for **GitHub Markdown issue templates** in this repository.

It follows GitHub's native issue template behavior for files in `.github/ISSUE_TEMPLATE/` and is intended for non-form templates (`.md`), not YAML issue forms.

## Scope

Use this schema for:

1. Markdown issue templates stored in `.github/ISSUE_TEMPLATE/*.md`
2. Day-based training issue templates (for example: `day-10.md`, `day-10-db.md`)
3. Other reusable issue drafts opened via GitHub's "New issue" template picker

Do not use this schema for:

1. GitHub Issue Forms (`.github/ISSUE_TEMPLATE/*.yml`)
2. Playbooks, blueprints, or career ladder documents

## GitHub Standards (Markdown Templates)

GitHub Markdown issue templates should use:

1. A YAML frontmatter block at the top of the file
2. A Markdown body below frontmatter
3. Storage path: `.github/ISSUE_TEMPLATE/`

Supported frontmatter keys for Markdown issue templates:

- `name` (template display name)
- `about` (template description shown in picker)
- `title` (prefilled issue title)
- `labels` (labels to apply)
- `assignees` (users to assign)

Rules:

1. `name` and `about` are required by this repo schema.
2. Keep frontmatter keys limited to GitHub-supported keys above for Markdown templates.
3. Use a single YAML document at file top, delimited by `---`.
4. Do not mix issue-form YAML fields (like `body:`, `type:`, `attributes:`) into Markdown templates.

## Required Naming and Path Rules

1. Store templates under `.github/ISSUE_TEMPLATE/`.
2. Use kebab-case filenames.
3. For daily templates, use:
   - `day-<n>.md`
   - `day-<n>-db.md` (lane-specific DB template)
4. Keep filenames stable once referenced in operations docs.

## Required Template Structure

### Standard templates

Unless the L2 AI-driven exception below applies, Markdown issue templates must follow this order:

1. Frontmatter block
2. H1 title
3. `## Next Session` — a short notice of the following session
4. Short objective/context paragraph
5. Execution sections/checklists
6. End-of-day (or completion) checklist

Recommended section layout:

1. `# <Template Title>`
2. `## Next Session`
3. `## Session: Preparation` (optional when needed)
4. `## Session: Core Execution`
5. `## Session: Quality and Reflection` (optional when needed)
6. `## Deliverables and Milestone` (optional when needed)
7. `## End-of-Day Checklist`

### Next-session notice

Every day-based training template must include `## Next Session` immediately after its H1 title (or, for standard templates, after the short objective/context paragraph and before the first execution section). Keep it to one short `Next:` sentence that names the following day and its topic.

Add a short preparation warning only when the following session depends on an artifact from the current session. For example: `Keep one assigned PR open; do not merge it today.` Do not turn this section into a checklist or a detailed preview. The final training day should state: `Next: Training complete.`

### L2 AI-driven training templates

L2 training issues intentionally minimize embedded reading and direct the engineer to use their existing local AI agent. These templates must contain **only** the following issue-body sections, in this order:

1. H1 title
2. `## Next Session` — one short next-day summary or dependency warning
3. `## Description` — a concise goal, scope, expected evidence, and any safety boundary
4. `## Variables to Change in the AI Prompt Before Sending` — a plain list of every `YOUR-*` placeholder the engineer must replace
5. `## AI Prompt` — one fenced plain-text block that can be copied as-is into the engineer's local AI

Rules:

1. Other than `## Next Session`, do not add execution checklists, reflection sections, duplicate instructions, or an end-of-day checklist to L2 templates.
2. The variables section is required. List every placeholder exactly once as a Markdown bullet (`- `) with its literal `YOUR-*` name in inline code. Do not put values, secrets, or prose instructions in this section.
3. The AI prompt must use every placeholder listed in the variables section, and must not introduce a `YOUR-*` placeholder that is absent from that section.
4. Put all actionable steps, constraints, verification commands, and expected reporting inside the copyable AI prompt.
5. Instruct the engineer to replace every listed placeholder before submitting the prompt.
6. State the deliverables and safety boundaries in `## Description` so supervisors can assess the issue without reading a long procedure.
7. Prompts that could encounter credentials must tell the AI not to request, reveal, paste, commit, or log secrets, and to pause for the engineer to complete interactive sign-in themselves.
8. Prompts must require the AI to use current official documentation for tool installation rather than assuming stale commands.
9. Keep the prompt in a `text` fence with no nested Markdown fences so it remains one-copy paste action.

## Frontmatter Schema (Repository Standard)

Use this baseline frontmatter:

```yaml
---
name: "Template Name"
about: "Short template description"
title: "Prefilled Title: <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---
```

Rules:

1. Keep `name` and `about` human-readable.
2. Keep `title` prefilled with placeholders where appropriate.
3. `labels` may be a comma-separated string (for example: `"training,db-lane"`).
4. Leave `assignees` empty unless assignment is always deterministic.

## Content Rules

1. Use checkbox tasks (`- [ ]`) for actionable items in standard templates; L2 AI-driven templates use the L2 structure above instead.
2. Keep instructions imperative and reviewable.
3. Keep one responsibility per checklist line when checklists are used.
4. Keep terminology consistent with corresponding blueprint day language.
5. Avoid secrets, credentials, and private tokens.
6. Keep AI prompts task-specific, bounded to the intended repository or local folder, and explicit about what must not be changed.
7. For day-based training templates, keep `## Next Session` to a short notification rather than a detailed future-session procedure.

## Optional Repository-Level GitHub Config

GitHub also supports `.github/ISSUE_TEMPLATE/config.yml` for:

1. Disabling blank issues
2. Adding contact links

If used, keep it aligned with org support channels and avoid conflicting guidance with Markdown templates.

## Validation Checklist (Author Self-Review)

### All templates

- [ ] File is under `.github/ISSUE_TEMPLATE/`.
- [ ] Filename follows repository naming convention.
- [ ] Frontmatter exists and includes `name` and `about`.
- [ ] Only GitHub-supported Markdown template frontmatter keys are used.
- [ ] Template body is valid Markdown (no issue-form YAML blocks).
- [ ] Content matches the intended lane/scope (shared/app/db) without cross-lane leakage.
- [ ] No secrets or private credentials are present.
- [ ] Day-based training templates include one concise `## Next Session` notice naming the following day; dependency warnings are included only when needed.

### Standard templates

- [ ] Checklists are present for execution/completion.

### L2 AI-driven training templates

- [ ] Body contains only the H1 title, `## Next Session`, `## Description`, `## Variables to Change in the AI Prompt Before Sending`, and `## AI Prompt` sections.
- [ ] Variables are listed once, with no values or secrets, and exactly match the `YOUR-*` placeholders used in the prompt.
- [ ] `## AI Prompt` is a single copyable `text` block.
- [ ] The prompt defines verification, expected evidence, and safe credential handling.
- [ ] The prompt uses current official documentation where installation or configuration details could change.
