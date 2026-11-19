---
name: "Day 34 - Automated Issue-to-PR Review Recommendation"
about: "Deliver an issue through a PR and recommend AI review."
title: "Day 34: Automated Issue-to-PR Review Recommendation - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 34: Automated Issue-to-PR Review Recommendation

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Produce a review recommendation for a Unity PR, checking gameplay behavior, C# quality, scene/prefab integrity, asset metadata, tests, and build evidence.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Run full automated issue-to-PR delivery from a valid Week 6 handoff. After delivery, Hermes must recommend the appropriate AI review workflow and provide the exact next prompt, but it must not run the review itself.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-ISSUE-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Issue: YOUR-GITHUB-ISSUE-URL

Use `engineering-sops-issue-to-pr` in RECOMMEND REVIEW mode. Do not ask for intermediate approval after placeholder validation. Complete full delivery only after confirming a valid Week 6 handoff, and honor its Dedup/Overlap classification when choosing the base: if MERGED, stop and report the already-delivered PR; if OPEN-OVERLAP, do not create a parallel PR (close any redundant newer PR as superseded pointing at the existing one, without deleting its branch); if DEPENDENCY, create the issue branch as a child of the sibling branch, never committing onto or pushing to the sibling; if CLEAR, branch from the confirmed base. Then perform label, implementation, validation, commit, push, linked PR, review request, and verified Project Status `For Review`.

After delivery, identify the repository's normal routing from `engineering-sops-pr-review` and recommend running both `github-code-review` and `engineering-sops-pr-review` against the created PR. Provide the exact copy-pasteable next prompt and explain whether the review is inform-only or gap-resolve. Do not run either AI review skill yourself. Never merge, bypass CI, edit the issue body, or expose secrets.
```
## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.

