---
name: "Day 23 - Interactive Automated Reviewing"
about: "Practice one review interactively with Hermes, step by step."
title: "Day 23: Interactive Automated Reviewing - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 23: Interactive Automated Reviewing

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Practice an interactive review of a Unity gameplay change, validating each finding against source, Inspector/scene behavior, and the project?s tests.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Use the review-ready local Hermes setup prepared on Day 22 for one guided, evidence-based pull-request review. This is a **one-time training override**, not a change to either installed skill. Hermes must follow the review workflow step by step and ask for your approval before every next step. The normal `engineering-sops-pr-review` routing policy remains installed and unchanged; this day changes only the interaction style for this single review.

Local checks: interactive checkpoints, the selected repository mode, PR scope and requirements coverage, actual validation results, verified findings, and any permitted changes.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-PR-NUMBER-OR-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
Pull Request: YOUR-PR-NUMBER-OR-URL

Use my normal local Hermes setup and the review access and skills prepared on Day 22 to perform ONE interactive, evidence-based pull-request review.

IMPORTANT: This is a one-time training interaction override only. Do NOT modify, reinstall, patch, update, replace, or save changes to `github-code-review` or `engineering-sops-pr-review`. Do NOT treat this prompt as a skill update. Keep both installed skills unchanged. For this review only, follow their normal review and routing rules but pause after every step and ask me to explicitly approve the next step before proceeding.

First, repeat the repository folder and pull request. If either value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Use these checkpoints in order. Complete only the current checkpoint, show its real result, then ask: "Approve the next step?" Do not proceed until I explicitly approve.

1. Skill and repository preflight
   - Confirm both `github-code-review` and `engineering-sops-pr-review` are installed and available in the current Hermes setup.
   - Identify the repository from its Git remote and state the mode selected by `engineering-sops-pr-review`.
   - If either skill is unavailable or the repository is unclassified, report the exact blocker and stop.

2. PR context
   - Gather title, description, author, actual base branch, head branch, linked issues, changed files, and current checks.
   - Do not assume the base branch is `main`.

3. Requirements baseline
   - Read linked issues and extract explicit requirements and acceptance criteria.
   - State any missing, vague, or unavailable baseline; do not invent requirements.

4. Diff and surrounding-code review
   - Read the complete diff and inspect surrounding code where needed.
   - Review correctness, regressions, security/authentication/authorization, input validation, error handling, performance, maintainability, documentation, and tests.

5. Validation plan and execution
   - Before running validation, show the exact safe checks you propose and wait for approval.
   - After approval, run the applicable checks required by the repository mode and report exact commands and real results.

6. Findings and permitted remediation
   - Report only findings grounded in requirements, source code, diff, or validation output.
   - For an inform-only repository, do not modify the worktree, commit, push, or resolve gaps locally.
   - For a gap-resolve repository, do not make a change until you have presented the verified gap, minimal remediation plan, and received explicit approval for that remediation step. Then follow the installed routing skill's validation, commit, and push requirements.

7. Verdict and review text
   - Present the evidence-backed verdict: Approve, Request Changes, or Comment.
   - Draft suggested GitHub review text, but do not submit it unless I separately and explicitly approve submission.

At every checkpoint, do not merge anything, alter CI settings, change repository permissions, or expose credentials. Do not request, print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets. Human review and CI remain required before merge.
```

## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.
