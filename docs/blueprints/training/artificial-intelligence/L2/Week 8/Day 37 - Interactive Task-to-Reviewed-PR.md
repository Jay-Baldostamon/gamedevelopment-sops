---
name: "Day 37 - Interactive Task-to-Reviewed-PR"
about: "Orchestrate one task-to-PR flow with approval checkpoints."
title: "Day 37: Interactive Task-to-Reviewed-PR - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 37: Interactive Task-to-Reviewed-PR

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Interactively take a complete platformer issue from requirements through implementation and Unity validation to a review-ready PR.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Work through one scoped task interactively, pausing for authorization before changes and checking the local Unity results. If a real PR is appropriate and authorized, leave it for independent human review.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-ISSUE-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Issue: YOUR-GITHUB-ISSUE-URL

Confirm the task requirements and acceptance criteria, then work one stage at a time: local plan, authorized implementation, focused Unity validation, and inspection of the diff. Pause for my approval before changes or external actions.

Create a linked PR and request independent review only if I explicitly authorize those project actions. Do not generate a training report or packet, submit a GitHub review, self-approve, merge, bypass CI, edit the issue body, or expose secrets.
```
## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.
