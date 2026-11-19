---
name: "Day 38 - Local Task Workflow Dry Run"
about: "Plan the Unity task workflow without mutating files or remote state."
title: "Day 38: Local Task Workflow Dry Run"
labels: "training"
assignees: ''
---

# Day 38: Local Task Workflow Dry Run

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Echo the full Unity task-to-PR plan without changing files, proving the task scope and test/build path are understood.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Inspect the task and produce a local execution plan without editing files, posting comments, or changing project state. The earlier workflow's ECHO mode performs real delivery, so it is not a dry run.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-ISSUE-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Issue: YOUR-GITHUB-ISSUE-URL

Inspect the task and repository read-only. Identify acceptance criteria, affected Unity files, implementation steps, focused tests, build prerequisites, and the independent review required if a real PR is later authorized. Surface unclear requirements or unavailable checks locally.

Do not invoke a delivery mode, change files or project status, post comments, create a PR, submit a review, generate a training report, expose secrets, or claim unrun tests passed.
```
## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.
