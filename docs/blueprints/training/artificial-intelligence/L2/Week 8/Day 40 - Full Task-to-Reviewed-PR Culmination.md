---
name: "Day 40 - Full Task-to-Reviewed-PR Culmination"
about: "Run a scoped Unity task through local validation and applicable project review."
title: "Day 40: Full Task-to-Reviewed-PR Culmination - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 40: Full Task-to-Reviewed-PR Culmination

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Complete an approved Unity task through implementation and local validation; use a linked PR and independent review when project work requires them.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Run the Week 8 culminating workflow from a scoped task through implementation, Unity validation, and a read-only review. Do not create a training packet or progress report.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-ISSUE-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Issue: YOUR-GITHUB-ISSUE-URL
Confirm the task's requirements and acceptance criteria. Plan and implement only the authorized Unity scope, run the available focused tests and Play Mode or build checks, and inspect the diff and actual results.

If a real project PR is explicitly authorized, create it with the required issue link and request the independent human review required by the repository. Leave it unmerged. Do not generate or submit a training packet, self-approve, bypass CI, rewrite the issue body, or expose secrets. Surface unavailable checks as blockers.
```
## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.
