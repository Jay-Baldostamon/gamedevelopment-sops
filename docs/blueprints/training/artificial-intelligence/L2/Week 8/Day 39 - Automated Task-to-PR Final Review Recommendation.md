---
name: "Day 39 - Local Unity Review Practice"
about: "Verify gameplay findings and review boundaries locally."
title: "Day 39: Local Unity Review Practice"
labels: "training"
assignees: ''
---

# Day 39: Local Unity Review Practice

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Review a Unity change locally, distinguishing verified gameplay defects from subjective design suggestions.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Practice a read-only review of another author's authorized change or a disposable example. Verify findings against the actual code and local checks; no reviewer recommendation or training report is required.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-ISSUE-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Issue: YOUR-GITHUB-ISSUE-URL
Inspect the task, scoped diff, scene and prefab references, and available tests read-only. Check each potential finding against the project; distinguish a reproducible defect from a subjective suggestion and identify any unrun checks.

Do not modify code or project state, submit a review, self-approve, merge, bypass CI, generate a training report, or expose secrets. A real PR still requires the independent reviewer specified by the project.
```
## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.
