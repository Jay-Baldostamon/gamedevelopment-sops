# gamedevelopment-sops

The training tracker and lesson blueprints for the studio's Unity game-development path, published as a static site:

**https://jay-baldastamon.github.io/gamedevelopment-sops/**

Reference repository: **https://github.com/hurdman/engineering-sops**

## What this repository contains

Everything tracked here either builds the tracker, deploys it, or documents the Level 1 and Level 2 curriculum.

| Path | Purpose |
| --- | --- |
| `docs/blueprints/training/artificial-intelligence/app/` | Vite + React + TypeScript source for the tracker: views, progress state, tests, configs, and static assets |
| `docs/blueprints/training/artificial-intelligence/Tools-Only 80-Day Learning Plan.md` | The active curriculum. The app imports this file at build time and parses its Level 1 and Level 2 sections; Levels 3–4 remain day summaries |
| `docs/blueprints/training/artificial-intelligence/L1/Week 1/`, `L1/Week 2/` | Expanded Day 1–10 execution blueprints in the reference repository's day-lesson design. Nothing reads them at build time |
| `docs/blueprints/training/artificial-intelligence/L2/Week 5/` … `L2/Week 8/` | Expanded Days 21–40 execution blueprints for controlled AI-assisted delivery, each with its copyable Hermes prompt. Nothing reads them at build time |
| `docs/blueprints/training/artificial-intelligence/Resources/` | Rubrics and checklists the day blueprints and the plan link to |
| `.github/workflows/pages.yml` | Tests, lints, builds, and deploys the tracker to GitHub Pages on every push to `main` |
| `README.md`, `.gitignore` | Repository documentation and ignore rules |

## Where the content comes from

The tracker renders Levels 1 and 2: Days 1–40 of the learning plan.

- `app/src/curriculum.ts` imports the plan with `?raw` and parses both level sections; nothing is duplicated in TypeScript.
- Day titles, lesson bodies, prerequisites, copyable prompts, and per-day checklists all come from that Markdown file.
- The plan must keep exactly one `## Level 1` section with Days 1–20 in Weeks 1–4, and one `## Level 2` section with Days 21–40 in Weeks 5–8, each day ordered and inside its numbered week. Level 2 must also keep its entry rules and interaction-modes headings. Missing, duplicate, unordered, misplaced, or incomplete lessons fail the build and the test suite explicitly.
- Two views consume that content: **Today** (one continuous weekday schedule across all 40 days, with previous/next paging and carryover) and **Curriculum** (level tabs for the full L1 or L2 list).
- Progress — completed checklist items, dates, notes, and reviews — is stored in the browser under the `weekday-training-todo-v1` key, with `l1-<week>-<day>-shared` and `l2-<week>-<day>-shared` day ids. There is no backend, so the site is static and nothing is sent anywhere.
- The sidebar shows per-level completion, and the level tabs work at every viewport width.

To change what learners see in the tracker, edit the plan Markdown, not the app.

The `L1/Week 1` and `L1/Week 2` day files are the expanded, phase-by-phase form of the same lessons for Days 1–10, written in the reference repository's day-blueprint design. They exist for reading and review; the tracker parses only the plan, and the plan remains the single source of curriculum content. When a day changes, change the plan first and mirror it in the day blueprint.

The `L2/Week 5` through `L2/Week 8` files are the expanded execution form of Days 21–40. L2 continues in the same game repository and treats the Day 20 post-launch issues as authoritative tasks: review modes, issue-development handoffs, issue-to-PR delivery, and the task-to-reviewed-PR capstone. Every L2 day carries one copyable Hermes prompt, a Unity validation rule, and a checklist that mirrors its plan lesson. The tracker parses and renders both levels; the day blueprints remain reading material.

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
- Keep each L2 day blueprint's checklist identical to its plan lesson; the plan stays authoritative when the two disagree.
- Make changes through branches and pull requests, and confirm `npm test`, `npm run lint`, and `npm run build` pass before merging.

## Note for learners

The tracker is a maintainer and review surface, not part of the active learning path. Running it requires software outside the training allowance; the Markdown plan is the sole active curriculum.

Level 1 uses only the plan's approved tools. Days 21–40 add the local Hermes agent and the authenticated GitHub CLI, as the plan's Level 2 exception states; no other tooling is part of the path.