# gamedevelopment-sops

The Level 1 training tracker for the studio's Unity game-development path, published as a static site:

**https://jay-baldastamon.github.io/gamedevelopment-sops/**

## What this repository contains

Everything tracked here either builds the tracker or deploys it. There is no separate documentation tree.

| Path | Purpose |
| --- | --- |
| `docs/blueprints/training/artificial-intelligence/app/` | Vite + React + TypeScript source for the tracker: views, progress state, tests, configs, and static assets |
| `docs/blueprints/training/artificial-intelligence/Tools-Only 80-Day Learning Plan.md` | The active curriculum. The app imports this file at build time and parses its Level 1 section |
| `.github/workflows/pages.yml` | Tests, lints, builds, and deploys the tracker to GitHub Pages on every push to `main` |
| `README.md`, `.gitignore` | Repository documentation and ignore rules |

## Where the content comes from

The tracker renders only Level 1: Days 1–20 of the learning plan.

- `app/src/curriculum.ts` imports the plan with `?raw` and parses it; nothing is duplicated in TypeScript.
- Day titles, lesson bodies, prerequisites, and per-day checklists all come from that Markdown file.
- The plan must keep exactly one `## Level 1` section containing one `### Week n` heading per week and one `#### Day n — Title` block per day, ordered 1-20 and placed in their numbered weeks. Missing, duplicate, unordered, misplaced, or incomplete lessons fail the build and the test suite explicitly.
- Two views consume that content: **Today** (the scheduled day, with previous/next paging and carryover) and **Curriculum** (the full L1 list).
- Progress — completed checklist items, dates, notes, and reviews — is stored in the browser under the `weekday-training-todo-v1` key. There is no backend, so the site is static and nothing is sent anywhere.

To change what learners see, edit the plan Markdown, not the app.

## Local development

From `docs/blueprints/training/artificial-intelligence/app`:

```bash
npm ci
npm run dev      # local dev server
npm test         # curriculum, progress, and scheduler suites
npm run lint     # oxlint
npm run build    # type-check and production build into dist/
npm run preview  # serve the production build
```

## Deployment

Pushing to `main` triggers `.github/workflows/pages.yml`, which runs `npm ci`, `npm test`, `npm run lint`, and `npm run build` in the app directory, then publishes `app/dist` to GitHub Pages. The Vite `base` is relative, so the build stays portable under the Pages URL. The workflow can also be dispatched manually.

## Working in this repository

- Keep the site self-contained under `app/`. The plan Markdown is the only file outside it that the build reads.
- `node_modules/`, `dist/`, and log files are gitignored — never commit build output or dependencies.
- Put tests beside the code they cover as `src/*.test.ts`; the Vitest config only collects that pattern.
- Make changes through branches and pull requests, and confirm `npm test`, `npm run lint`, and `npm run build` pass before merging.

## Note for learners

The tracker is a maintainer and review surface, not part of the active learning path. Running it requires software outside the training allowance; the Markdown plan is the sole active curriculum.