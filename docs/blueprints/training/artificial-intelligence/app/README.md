# Training tracker status

This tracker is not part of the active learning path. Running it requires software outside the strict three-tool allowance. Do not install dependencies, start the tracker, or use its browser interface for training.

Use the Markdown [Tools-Only 80-Day Learning Plan](../Tools-Only%2080-Day%20Learning%20Plan.md) as the sole active curriculum. It uses only Unity, GitHub Copilot inside VS Code or Visual Studio Community, and Gemini.

## Maintainer integration

For maintainers validating the existing app, it tracks only L1: Days 1–20 of the active plan. Day titles, lesson bodies, prerequisites, and checklists come from the active plan's Level 1 section, and no other level is indexed or rendered. Missing, duplicate, unordered, misplaced, or incomplete active L1 sections fail explicitly.

Saved day ids keep the historical `l1-<week>-<day>-shared` shape so existing completion, dates, notes, and reviews stay attached. Stored progress from earlier versions is accepted and the retired `lane` field is ignored, because the tracker no longer offers lane or level selection.

Progress checklist version 3 archives previous L1 checks in `retiredChecks`, retains older `legacyChecks`, and starts revised exercise checks unchecked. Historical completion, dates, and notes remain intact. The tracker explains that historical completion is not evidence for revised exercises.

Existing maintainer validation commands are `npm test -- src/curriculum.test.ts src/progress.test.ts`, `npm run build`, and `npm run lint`. These are not learner requirements and do not expand the curriculum's approved tools.
