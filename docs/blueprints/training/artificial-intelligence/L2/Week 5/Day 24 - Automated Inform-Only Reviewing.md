---
name: "Day 24 - Automated Inform-Only Reviewing"
about: "Run a fully automated read-only PR review with Hermes."
title: "Day 24: Automated Inform-Only Reviewing - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 24: Automated Inform-Only Reviewing

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Run an inform-only review of a Unity pull request; produce evidence-backed findings without modifying gameplay code, scenes, assets, or the branch.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Run a fully automated, evidence-based pull-request review using the local Hermes setup and review skills prepared on Day 22. For this exercise, use **inform-only** mode. Inspect actual findings locally without modifying code, changing the worktree, committing, pushing, merging, changing CI, or changing repository permissions. Do not modify either installed skill.

Local checks: skill availability, PR scope and acceptance-criteria coverage, actual validation results, and verified findings. No training report is required.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-PR-NUMBER-OR-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Pull Request: YOUR-PR-NUMBER-OR-URL

Use my normal local Hermes setup and the review skills prepared on Day 22 to perform ONE fully automated, evidence-based pull-request review.

IMPORTANT: This is a one-time training mode override only. Do NOT modify, reinstall, patch, update, replace, or save changes to `github-code-review` or `engineering-sops-pr-review`. Do NOT treat this prompt as a skill update. Keep both installed skills unchanged. For this review only, override the normal repository routing and treat the assigned repository as INFORM-ONLY, regardless of its normal classification.

Do not pause for intermediate approval after placeholder validation. Complete the read-only review and show verified findings and actual validation results locally.

First, repeat the repository folder and pull request. If either value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm both `github-code-review` and `engineering-sops-pr-review` are installed and available in the current Hermes setup. If either is unavailable, stop and return the exact remediation required from Day 22.
2. Identify the repository from its Git remote. State its normal routing classification, then state clearly that this one training review is overridden to inform-only.
3. Gather PR metadata: title, description, author, actual base branch, head branch, linked issues, changed files, and current checks. Do not assume the base branch is `main`.
4. Read every linked issue and extract explicit requirements and acceptance criteria. If the baseline is missing or vague, report that fact and do not invent requirements.
5. Read the complete diff and surrounding code where needed. Review correctness, regressions, security/authentication/authorization, input validation, error handling, performance, maintainability, documentation, and test coverage.
6. Run safe, read-only, applicable validation and report the exact commands and real results. Do not modify the worktree for formatting, dependency installation, generated files, or any other reason.
7. Report only findings grounded in requirements, source code, diff, or validation output. Every blocking finding must name the failed requirement or acceptance criterion, file and line when available, impact, and concrete fix direction.
8. Do not modify code, change the worktree, create commits, push changes, resolve gaps locally, merge, alter CI settings, change repository permissions, or submit a GitHub review.
9. Inspect verified findings, coverage, and actual test results locally. Do not create a training report or submit a GitHub review.

Use the verdict rules from the installed review skills. If a verified blocking gap exists, the suggested text must be a Request Changes review. If no verified blocking gap exists, report the zero-gap outcome honestly. Do not submit the suggested text; human review and CI remain required before merge. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets.
```

## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.
