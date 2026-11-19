---
name: "Day 36 - Local Workflow Preflight"
about: "Check the Unity project and tools for a scoped task."
title: "Day 36: Local Workflow Preflight"
labels: "training"
assignees: ''
---

# Day 36: Local Workflow Preflight

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Set up the full task-to-reviewed-PR workflow on the game repository with explicit boundaries for C#, scenes, assets, packages, and builds.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Prepare the local tools for a scoped Unity task. Check the task's requirements, project access, Unity version, and available tests without executing the task or generating a training report.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-ISSUE-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Issue: YOUR-GITHUB-ISSUE-URL

Check the repository and task read-only. Validate the placeholders and identify the requirements, acceptance criteria, Unity version, relevant scenes/scripts, available tests, and exact missing access or tooling.

Do not install tools, create a handoff, write code, change project status, submit a review, expose secrets, or generate a training report.
```
## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.
