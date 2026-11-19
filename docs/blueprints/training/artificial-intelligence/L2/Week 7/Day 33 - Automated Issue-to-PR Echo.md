---
name: "Day 33 - Automated Issue-to-PR Echo"
about: "Deliver an issue through a PR, then echo delivery results."
title: "Day 33: Automated Issue-to-PR Echo - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 33: Automated Issue-to-PR Echo

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Run an explicitly authorized automated Unity issue-to-PR delivery and inspect its actual changes and validation locally.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Run a valid Week 6 handoff through fully automated issue-to-PR delivery. Hermes creates and links the PR, requests review, and updates the issue to `For Review`, then returns the full result. The trainee manually runs the installed AI review skills afterward.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-ISSUE-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Issue: YOUR-GITHUB-ISSUE-URL

Use `engineering-sops-issue-to-pr` in ECHO mode. Do not ask for intermediate approval after placeholder validation. Confirm the Week 6 handoff. Honor its Dedup/Overlap classification when choosing the base: if MERGED, stop and report the already-delivered PR; if OPEN-OVERLAP, do not create a parallel PR (close any redundant newer PR as superseded pointing at the existing one, without deleting its branch); if DEPENDENCY, create the issue branch as a child of the sibling branch, never committing onto or pushing to the sibling; if CLEAR, branch from the confirmed base. Then complete full issue delivery: confirm `ai-automation`, implement and validate, commit, push, create a PR with `Closes #<issue-number>`, verify the link, request review, and set/verify Project Status `For Review`.

Inspect the actual delivery result and blockers locally without creating a training report. Do NOT automatically run `github-code-review` or `engineering-sops-pr-review`; I will run the AI review skills manually afterward. Never merge, bypass CI, edit the issue body, or expose secrets.
```
## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.
