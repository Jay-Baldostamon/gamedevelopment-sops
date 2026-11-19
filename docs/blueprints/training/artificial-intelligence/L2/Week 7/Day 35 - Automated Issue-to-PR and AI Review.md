---
name: "Day 35 - Automated Issue-to-PR and AI Review"
about: "Deliver an issue through a PR and automatically run AI review."
title: "Day 35: Automated Issue-to-PR and AI Review - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 35: Automated Issue-to-PR and AI Review

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Deliver and AI-review one Unity change; verify its issue link, Editor/test/build evidence, reviewer routing, and no self-approval or merge.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Run the complete issue-to-PR delivery workflow from a valid Week 6 handoff, then automatically run the installed AI review skills against the newly created PR. Delivery and review must stay evidence-based; Hermes must not merge, approve its own PR, bypass CI, or hide blockers.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-ISSUE-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Issue: YOUR-GITHUB-ISSUE-URL

Use `engineering-sops-issue-to-pr` in AUTO-REVIEW mode. Do not ask for intermediate approval after placeholder validation. Confirm a valid Week 6 handoff. Honor its Dedup/Overlap classification when choosing the base: if MERGED, stop and report the already-delivered PR; if OPEN-OVERLAP, do not create a parallel PR (close any redundant newer PR as superseded pointing at the existing one, without deleting its branch); if DEPENDENCY, create the issue branch as a child of the sibling branch, never committing onto or pushing to the sibling; if CLEAR, branch from the confirmed base. Then complete full delivery: confirm `ai-automation`, implement and validate, commit, push, create a PR with `Closes #<issue-number>`, verify the link, request review, and set/verify Project Status `For Review`.

Then automatically run both `github-code-review` and `engineering-sops-pr-review` on the new PR. Follow the repository's normal routing policy and return the review's evidence-backed verdict, requirements/acceptance-criteria coverage, validation results, verified findings, and suggested GitHub review text.

Do not submit an approval or review unless explicitly instructed after the report. Never merge, bypass CI, edit the issue body, or expose secrets.
```
## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.

