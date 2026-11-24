# Training tracker status

This tracker is not part of the active learning path. Running it requires software outside the training allowance. Do not install dependencies, start the tracker, or use its browser interface for training.

Use the Markdown [Tools-Only 80-Day Learning Plan](../Tools-Only%2080-Day%20Learning%20Plan.md) as the sole active curriculum. It uses Unity, GitHub Copilot inside VS Code or Visual Studio Community, Gemini, Google AI Studio Apps on Days 2–3, and Git with GitHub Desktop and one private GitHub repository from Day 6.

## Maintainer integration

For maintainers validating the existing app, it tracks only L1: Days 1–20 of the active plan. Day titles, lesson bodies, prerequisites, and checklists come from the active plan's Level 1 section, and no other level is indexed or rendered. Days 1–10 of that section follow the Game Developer Foundations blueprints (exposure, prompt engineering, pitch, Unity setup and debugging, C# literacy, game repo setup, six mechanic upgrades, find the fun, rules versus game feel, prototype and recovery drill). Missing, duplicate, unordered, misplaced, or incomplete active L1 sections fail explicitly.

Saved day ids keep the historical `l1-<week>-<day>-shared` shape so existing completion, dates, notes, and reviews stay attached. Stored progress from earlier versions is accepted and the retired `lane` field is ignored, because the tracker no longer offers lane or level selection.

Each day carries its own checklist: Days 1–10 have six to nine items and Days 11–20 have five to seven. A day counts as complete only when every item on it is checked, and toggling an item always rewrites the array at the day's current checklist length.

The Today view opens on the scheduled day and carries a pager: **Previous** and **Next** step one day at a time, a **Back to today** button appears once you leave the scheduled day, and the meta row labels the position as `CARRYOVER`, `EARLIER DAY` or `AHEAD OF SCHEDULE`. Any displayed day can be worked on, so a trainee who finishes early can start the next day immediately; the sidebar counter still shows the scheduled day. Selecting Today in the sidebar returns the pager to the scheduled day.

Progress checklist version 4 archives version 3 L1 checks in `retiredChecks`, keeps older `legacyChecks`, and starts the revised multi-item checklists unchecked. Historical completion, dates, and notes remain intact. The tracker explains that historical completion is not evidence for revised exercises.

Existing maintainer validation commands are `npm test -- src/curriculum.test.ts src/progress.test.ts`, `npm run build`, and `npm run lint`. These are not learner requirements and do not expand the curriculum's approved tools.
