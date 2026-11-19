# Month 3 Overview: L3 Scheduled and Autonomous Agentic Advancement

> **Retired overview:** Do not use the historical guidance below. Follow the [Tools-Only 80-Day Learning Plan](../Tools-Only%2080-Day%20Learning%20Plan.md), which replaces this overview and its legacy lesson links and uses only Unity, GitHub Copilot inside VS Code or Visual Studio Community, and Gemini.

## Unity Game-Development Track Context

This level or week uses the same desktop 2D C# action-platformer on the current Unity LTS release. The Unity gameplay lane covers scripts, scenes, prefabs, assets, tests, and builds. The former DB lane is now the game data lane for player profiles, save slots, checkpoints, collectibles, unlocks, and leaderboard contracts.

For L3/L4, scheduling, agents, and cloud workers support the Unity repository and build/test pipeline. Use only approved mock or game-specific data, not CRM or unrelated production systems. If a fixture is unavailable, identify the blocker locally and keep the work design-only. Preserve authorization, independent review for actual PRs, and secret-handling controls; no training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Month 3 Overview - L3 Scheduled and Autonomous Agentic Advancement |
| Track | training |
| Level | month |
| Owner | Direct Supervisor / Training Team |
| Last Updated | 2026-09-29 |
| Review Cycle | Every 30 days |
| Status | draft |

Month 3 advances L2 engineers into scheduled, autonomous agentic work. Where L2 had the engineer launch Hermes and stay in the loop, L3 has Hermes **run on a schedule** and page the engineer **only when a result is novel**. The engineer's attention becomes the scarce resource: routine work runs unattended, and only genuinely novel handling escalates to a human—via the org's **shared, org-wide inform-only Artemis Slack pager**, which routes each page to the intended engineer's DM (not a per-engineer bot).

The work is deliberately automation-first: each lesson gives the engineer a concise objective and a copyable prompt, with local validation instead of training submissions.

## What to Expect This Month

- Focus 1 (Week 9): Establish the foundations of autonomous work—routing onto the org's shared inform-only Artemis Slack pager, local Hermes scheduling, notification-routing discipline, an unattended daily automated review, and the routine-vs-novel escalation threshold.
- Focus 2 (Week 10): Turn scheduled daily review into scheduled task delivery—task generation and claim via the pager, cohort/level-based assignment routing, and a scheduled issue-to-handoff-to-PR pipeline with stale/blocked-task recovery.
- Focus 3 (Week 11): Move from fixed schedules to event-driven automation, including pickup, backstop recovery, and a local rehearsal.
- Focus 4 (Week 12): Assemble the workflow, rehearse unattended operation, tune escalation, and validate delivery, review, and recovery locally.
- Throughout: The pager pages to *act at the local Hermes*, never asks the engineer to act from Slack. Keep scope explicit, preserve secrets, inspect AI-generated work, retain real validation evidence, and keep human review and CI as merge gates.

## Month 3 Success Criteria

- [ ] Engineer is routed on the org's shared inform-only Artemis pager so pages DM them specifically, with only `chat:write` and `im:write` scopes and no input/read/listen surface.
- [ ] Engineer's local Hermes runs scheduled jobs (daemonized/recurring) that they can locate in a run log without launching Hermes by hand.
- [ ] Engineer holds and can state an enforced notification-routing truth table; no secret, diff, schema detail, or full finding ever reached the pager.
- [ ] A daily automated inform-only review, and later scheduled task/PR delivery, runs unattended and records real evidence.
- [ ] Engineer applies the routine-vs-novel threshold and pages only on novel results; escalation points to a locally-resolvable run ID.
- [ ] Scheduled and event-driven delivery complete with verified evidence; stale or blocked runs escalate instead of stalling silently.
- [ ] Engineer validates the culminating delivery, review, and recovery paths locally.
- [ ] Agent-generated work remains bounded to the assigned repository/task/DB scope; human review and CI remain mandatory before merge; schema/DBA execution remains human-owned.

## Month 3 Quality Gate Standard

- Blocking:
  - The pager is inform-only and DM-only: write scopes only, no event subscriptions, no reading, no channels, no socket mode, no slash commands.
  - The pager/page discipline holds: messages are `IDENTIFIER is STATUS — reason`; acting on a page happens at the local Hermes, not from Slack.
  - Secrets, diffs, schema details, connection info, and full findings never cross the wire.
  - Scheduled and event-driven runs record real validation evidence in a run log the engineer can locate.
  - Routine-vs-novel classification is explicit and applied; routine runs complete quietly, novel runs page conformingly.
  - Stuck or blocked runs escalate to a human rather than stalling silently.
  - Inform-only and delivery runs respect repository routing and mutation boundaries; delivery PRs use verified issue links and `For Review` only after the PR exists.
  - No workflow merges, self-approves, bypasses CI, rewrites issue bodies, or executes DDL.
- Non-blocking:
  - Optional further pager/automation customization and exploration beyond required workflows.

## Month 3 Operating Metrics

- Pager provisioning and DM-only compliance rate
- Scheduled job readiness and autonomous run rate
- Unattended-to-escalation ratio
- Escalation precision and recall (novel results paged; routine results quiet)
- Notification-routing violation rate (target: zero — no secret/full-detail on the wire)
- Scheduled/event-driven delivery completion rate
- Stuck-run escalation latency (no silent stalls)
- Validation pass rate and blocked-check transparency
- False-positive novelty classification rate
- Scope-drift and mutation-boundary incidence in agent-run work

## Guiding Principle

Month 3 is successful when an engineer can hand the *initiation* of review and delivery work to a schedule, the *escalation* decision to a novelty threshold, and reserve their own attention for the novel, ambiguous, or blocked. Autonomy grows while the inform-only boundary, evidence, least-privilege pager, and non-bypassable human and CI controls stay intact.

## Game Data Lane

**L3 Scheduled and Autonomous Agentic Advancement (Game Data Lane).** Use the provided game-data variants for Weeks 9-12 with approved mock player data, the same scheduling and routing principles, and local validation. Do not query unrelated production systems, execute DDL, or mutate a live schema.
