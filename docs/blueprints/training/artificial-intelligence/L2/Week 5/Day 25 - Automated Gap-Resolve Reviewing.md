---
name: "Day 25 - Automated Gap-Resolve Reviewing"
about: "Run a fully automated gap-resolve PR review with Hermes."
title: "Day 25: Automated Gap-Resolve Reviewing - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 25: Automated Gap-Resolve Reviewing

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Practice bounded gap resolution on a small, approved Unity defect; keep changes limited to the issue and inspect actual Editor, test, and build results locally.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Run an evidence-based pull-request review using the local Hermes setup and review skills prepared on Day 22. Use **gap-resolve** only on a training branch whose owner explicitly authorizes changes; otherwise stop after read-only review. Limit any authorized remediation to verified acceptance-criteria gaps. Do not modify either installed skill; human review and CI remain required before merge.

Local checks: skill availability, PR scope and acceptance-criteria coverage, verified gaps, actual validation results, and any authorized changes. No training report is required.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-PR-NUMBER-OR-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Pull Request: YOUR-PR-NUMBER-OR-URL

Use my normal local Hermes setup and the review skills prepared on Day 22 to perform ONE fully automated, evidence-based pull-request review.

IMPORTANT: Do NOT modify, reinstall, patch, update, replace, or save changes to `github-code-review` or `engineering-sops-pr-review`. Use GAP-RESOLVE only if the repository owner explicitly authorizes changes to this training branch; otherwise perform read-only review and stop. Never bypass repository permissions or review controls.

After placeholder validation and explicit authorization for the approved training branch, complete the bounded review and inspect findings and actual results locally.

First, repeat the repository folder and pull request. If either value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm both `github-code-review` and `engineering-sops-pr-review` are installed and available in the current Hermes setup. If either is unavailable, stop and return the exact remediation required from Day 22.
2. Identify the repository and its normal routing classification. Use gap-resolve only with the repository owner's explicit authorization; otherwise stop after the read-only review.
3. Gather PR metadata: title, description, author, actual base branch, head branch, linked issues, changed files, and current checks. Do not assume the base branch is `main`.
4. Read every linked issue and extract explicit requirements and acceptance criteria. If the baseline is missing or vague, report that fact and do not invent requirements.
5. Update the PR branch from its actual base branch before making changes. If a merge conflict occurs, resolve it in favor of the PR's intended functionality, then verify the result against the extracted requirements and acceptance criteria.
6. Read the complete diff and surrounding code where needed. Review correctness, regressions, security/authentication/authorization, input validation, error handling, performance, maintainability, documentation, and test coverage.
7. Fix only verified requirement or acceptance-criteria gaps. Preserve scope, avoid unrelated refactors, and do not create a change when no verified gap exists.
8. Run applicable Unity Edit Mode/Play Mode tests, a desktop build when relevant, and `git diff --check`. Inspect exact commands and real results; do not commit generated Unity caches.
9. If a verified gap was fixed and validation passes, commit and push only the validated gap-resolution changes to the PR branch. If no verified gap exists or validation fails, do not create or push a commit; report why.
10. Do not merge anything, alter CI settings, change repository permissions, or submit a GitHub review.
11. Inspect verified findings, changes, and actual validation results locally. Do not create a training report or submit a GitHub review.

Use the verdict rules from the installed review skills. Report only findings grounded in requirements, source code, diff, or validation output. Do not submit the suggested text; human review and CI remain required before merge. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.
