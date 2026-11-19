# gamedevelopment-sops

Version-controlled operating knowledge for a game development studio.

This repository is the home for how we build and ship games: production playbooks, engine and content pipeline standards, quality gates, live-ops runbooks, and the career ladders for every discipline. It replaces scattered Google Docs with a single GitHub source of truth so documentation can be versioned, reviewed, searched, and reused with AI-assisted workflows.

## Inspiration

This repository is inspired by, and a game-development adaptation of, [hurdman/engineering-sops](https://github.com/hurdman/engineering-sops). Its shape — playbooks, blueprints, career ladders, value engines, and schemas — comes from that repository and is retargeted to game production, where milestones, engine and content pipelines, playtesting, and live operations set the rhythm of the work.

## What belongs here

Use this repo for any game development documentation that should be kept current and discoverable, including:

- production operating procedures and playbooks (concept to launch to live ops),
- engine, systems, and content pipeline architecture standards,
- quality assurance, playtest, and progressive quality gate definitions,
- build, release, and platform certification processes,
- live-ops runbooks, incident response, and risk acceptance records,
- discipline career ladders, role expectations, and promotion criteria,
- review notes, prompts, schemas, and reusable templates,
- other internal documentation that needs durable version control.

## Repository Layout

- `docs/architecture/` - engine, backend, frontend, and data schema standards
- `docs/blueprints/` - multi-month training and enablement programs per discipline (backend, QA gates, engineering training)
- `docs/career-ladder/` - discipline progression, role expectations, and promotion gates (backend, frontend, AI)
- `docs/incident-response/` - dated incident assessments, retrospectives, risk acceptance, and response records
- `docs/operations/` - operational tracking data such as training progress
- `docs/playbooks/` - studio playbooks for AI enablement, data, delivery and quality, governance, incidents, people operations, planning and reporting, platform infrastructure, and QA
- `docs/state-of-engineering/` - periodic studio health and capability reports
- `docs/value-engines/` - operational frameworks describing how each part of the studio creates player value
- `archive/` - retired playbooks kept for historical reference
- `schemas/` - structured document schemas for blueprints, career ladders, playbooks, and issue templates
- `scripts/` - helper automation such as worktree provisioning
- `website/` - static site generator and GitHub Pages deployment for the documentation and training tracker
- `resources/images/` - screenshots and figures referenced by the documents

## Website

The documentation and the Level 1 training tracker are published together as a static site at **https://jay-baldostamon.github.io/gamedevelopment-sops/**.

- Every Markdown document in `docs/`, `schemas/`, `archive/`, and the repository README is rendered with navigation, section landing pages, and client-side search.
- The training tracker is built from `docs/blueprints/training/artificial-intelligence/app` and served at `/tracker/`.
- Pushing to `main` runs `.github/workflows/pages.yml`, which tests both projects, builds the site, and deploys it to GitHub Pages.
- See [`website/README.md`](website/README.md) for local build commands and deployment prerequisites.

## Why GitHub Instead of Google Docs

- Clear version history for specs that outlive a milestone
- Pull request review before a process or standard goes studio-wide
- Easier collaboration across art, design, engineering, QA, and production
- Better searchability and reuse across projects and teams
- Stronger support for AI-assisted drafting, review, and maintenance

## Working In This Repository

- Keep documents in Markdown unless a different format is clearly required.
- Prefer small, focused updates over large unreviewed rewrites.
- Treat important documentation like code: make changes through branches and pull requests when applicable.
- Keep content current, concise, and easy to scan.
- Name playbooks, gates, and ladder entries after the discipline they govern so they stay discoverable.

## Suggested Contribution Flow

1. Find the most relevant document or folder.
2. Update the content in a focused commit or pull request.
3. Review the change for accuracy, clarity, and consistency.
4. Link related documents when a topic spans multiple areas.

## Maintenance

If a document becomes stale, duplicate, or difficult to find, update this repository rather than creating a new Google Doc. When a process no longer reflects how we make games, retire it into `archive/` instead of deleting the history.
