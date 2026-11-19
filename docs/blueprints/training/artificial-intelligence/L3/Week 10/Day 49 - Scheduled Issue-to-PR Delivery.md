---
name: "Day 49 - Scheduled Issue-to-PR Delivery"
about: "Deliver a claimed task through to a reviewed PR on a schedule."
title: "Day 49: Scheduled Issue-to-PR Delivery - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 49: Scheduled Issue-to-PR Delivery

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Schedule issue-to-PR delivery for one bounded Unity improvement and require Unity tests/build evidence and human review before merge.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Combine Week 9's scheduling, Week 10's task generation/claim, and the L2 issue-to-PR skill into one **scheduled delivery run**: from a claimed task (Day 47), generate the handoff if needed, scope the implementation, build and validate, and open a linked PR with a review request — all started by the schedule rather than by hand. This is the largest autonomy step so far: the pipeline selects, assigns, delivers to your pager, and you act, then the delivery itself runs back to back without re-prompting.

Keep L2's non-negotiable gates: the PR must be a scoped implementation of the authoritative issue, include `Closes #<issue-number>`, request review, and set `For Review` only after the PR exists. No workflow merges, self-approves, bypasses CI, or rewrites issue bodies.

> **Pitfall — don't chase the "Development: none yet" ghost.** The closing-keyword auto-link is established the moment a PR targets the repo's **default branch** with `Closes #<issue>` in the body. But until the PR is *merged*, GitHub's `Development` sidebar widget and the `closingIssuesReferences` API field can show **"none yet" / empty** even though the link is real (backend attributable, only manually-linked issues can be unlinked). There is nothing you can do to force it earlier, and you should not edit the body, re-tag, or re-link to fix a non-problem. The definitive verification is the merge: if the base was the default branch, the issue auto-closes as COMPLETED. Treat a pre-merge "none yet" as expected staleness, not a defect.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-ISSUE-URL` (the claimed task)

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Issue: YOUR-GITHUB-ISSUE-URL

Run a SCHEDULED issue-to-PR delivery for the claimed task YOUR-GITHUB-ISSUE-URL, completing it as an autonomous sequence.

First, repeat the repository folder and issue URL. If either still contains a YOUR- placeholder or is unclear, stop and ask me to replace it. Confirm the task is claimed (Day 47) and has explicit requirements/acceptance criteria; if not, stop and report the blocker.

Run the FULL automatic path without pausing for intermediate approval after placeholder validation:
1. Load the applicable skills (issue-development-handoff as needed, issue-to-PR, and the routing rules for this repository). Confirm the repo routing mode for the DELIVERY work: this day does real implementation, so normal delivery mutation (branch, commit, push, open PR) is expected. There is no "inform-only" delivery repo — inform-only describes only the REVIEW step (Days 41-45), never the authored work.
2. Dedup/Overlap preflight on the issue (MERGED: stop and report; OPEN-OVERLAP: do not duplicate; DEPENDENCY: base on the sibling; CLEAR: confirmed base) and confirm the base branch.
3. Generate or reuse a valid handoff, scope the implementation to the acceptance criteria, build and validate (typecheck, lint, focused tests, git diff --check), and commit to a scoped branch.
4. Open a linked PR with `Closes #<issue-number>`, request review, and set the linked Project item to `For Review` only after the PR exists and is verified. Do not review or approve this PR yourself — it is YOUR work and must be reviewed by another engineer's reviewer (their Days 41-45), a manual reviewer, or guided human review.
5. Report the exact PR URL, validation results, base-branch decision, and any blocked or unrun checks. Leave the PR unmerged and unapproved by me; the review gate is external and mandatory.

APPROVAL MODE: this scheduled run executes under `approvals.cron_mode: deny`. Non-destructive delivery (branch, commit, push, gh pr create/review, typecheck, lint) is allowed. DO NOT use `git push --force`, `git reset --hard`, force branch deletion, or any other destructive command — they are blocked by the allowlist and must not be attempted or bypassed. If the repository genuinely needs a force-push (e.g. a DIRTY-branch rebuild), do NOT try it; stop, report the exact blocked command and the reason, and recommend a supervisor decision to allowlist the specific `git force push` pattern for that repo. An approval-wall is a reportable blocker, never something to work around.

Do not merge, self-approve, review your own PR, bypass CI, rewrite the issue body, or expose secrets. A scheduled run may expose its actual operational result and blockers locally; do not create a training report.
```

## Game Data Lane

Use the [game-data variant](Day%2049%20-%20Scheduled%20Issue-to-PR%20Delivery%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.
