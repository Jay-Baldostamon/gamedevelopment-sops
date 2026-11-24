# Training tracker status

This tracker is not part of the active learning path. Running it requires software outside the training allowance. Do not install dependencies, start the tracker, or use its browser interface for training.

Use the Markdown [Tools-Only 80-Day Learning Plan](../Tools-Only%2080-Day%20Learning%20Plan.md) as the sole active curriculum. It uses Unity, GitHub Copilot inside VS Code or Visual Studio Community, Gemini, Google AI Studio Apps on Days 2–3, and Git with GitHub Desktop and one private GitHub repository from Day 6.

## Maintainer integration

For maintainers validating the existing app, it tracks Levels 1 and 2: Days 1–40 of the active plan. Day titles, lesson bodies, prerequisites, copyable prompts, and checklists come from the plan's two level sections. Level 1 (Days 1–20, Weeks 1–4) follows the Game Developer Foundations blueprints (exposure, prompt engineering, pitch, Unity setup and debugging, C# literacy, game repo setup, six mechanic upgrades, find the fun, rules versus game feel, prototype and recovery drill). Level 2 (Days 21–40, Weeks 5–8) covers Hermes setup, review modes, issue handoffs, issue-to-PR delivery, and the task-to-reviewed-PR capstone. Missing, duplicate, unordered, misplaced, or incomplete level sections fail explicitly.

Saved day ids keep the historical `l1-<week>-<day>-shared` shape for Level 1 and use `l2-<week>-<day>-shared` for Level 2, so existing completion, dates, notes, and reviews stay attached. Stored progress from earlier versions is accepted and the retired `lane` field is ignored.

Each day carries its own checklist: Days 1–10 have six to nine items, Days 11–20 have five to seven, and Days 21–40 have five to ten. A day counts as complete only when every item on it is checked, and toggling an item always rewrites the array at the day's current checklist length.

The Today view opens on the scheduled day of one continuous 40-day weekday schedule and carries a pager: **Previous** and **Next** step one day at a time, a **Back to today** button appears once you leave the scheduled day, and the meta row labels the position as `CARRYOVER`, `EARLIER DAY` or `AHEAD OF SCHEDULE`. Any displayed day can be worked on, so a trainee who finishes early can start the next day immediately; the sidebar counter still shows the scheduled day. Selecting Today in the sidebar returns the pager to the scheduled day.

The Curriculum view has L1/L2 tabs, and the sidebar track list shows per-level completion; both remain available at every viewport width. Selecting a level opens that level's 20 days, while dates still come from the continuous schedule.

Progress checklist version 4 archives version 3 L1 checks in `retiredChecks`, keeps older `legacyChecks`, and starts the revised multi-item checklists unchecked. Historical completion, dates, and notes remain intact. The tracker explains that historical completion is not evidence for revised exercises.

Existing maintainer validation commands are `npm test -- src/curriculum.test.ts src/progress.test.ts`, `npm run build`, and `npm run lint`. These are not learner requirements and do not expand the curriculum's approved tools.
