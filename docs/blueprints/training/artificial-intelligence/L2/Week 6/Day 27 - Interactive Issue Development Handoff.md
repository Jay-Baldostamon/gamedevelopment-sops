---
name: "Day 27 - Interactive Issue Development Handoff"
about: "Create an issue development handoff with approval checkpoints."
title: "Day 27: Interactive Issue Development Handoff - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 27: Interactive Issue Development Handoff

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Generate an interactive development handoff for a small platformer feature and verify its plan names the right C# scripts, scenes/prefabs, and tests.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Use the skill installed on Day 26 to create one issue-based AI development handoff interactively. Hermes must inspect the issue requirements and acceptance criteria, inspect relevant repository context, draft a viable bounded development plan, and create a copy-pasteable AI development prompt. It must ask for explicit approval before each next checkpoint and must not post the comment unless separately approved.

Local checks: issue baseline, repository context, bounded implementation plan, the proposed handoff, learner approvals at each checkpoint, and no issue/comment mutation unless separately approved.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-ISSUE-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Issue: YOUR-GITHUB-ISSUE-URL

Use `engineering-sops-issue-development-handoff` for ONE interactive training run. Do not modify, patch, reinstall, or update the skill. For this run only, complete each checkpoint, show its real output, and ask: "Approve the next step?" Do not proceed until I explicitly approve.

1. Preflight: confirm the skill, issue access, and repository identity, and run the Dedup/Overlap Preflight (classify MERGED / OPEN-OVERLAP / DEPENDENCY / CLEAR and confirm the base branch), reflected in the handoff's Related Work section; if the work is already merged or covered by an open PR, report instead of drafting.
2. Issue baseline: extract confirmed objective, requirements, acceptance criteria, scope boundaries, dependencies, and clarification gaps.
3. Repository context: inspect only relevant patterns, files/modules, and supported validation commands.
4. Development plan: propose a bounded evidence-based implementation plan; do not invent architecture or file paths.
5. Handoff draft: produce the required AI Development Handoff comment with one copy-pasteable `text` prompt.
6. Posting decision: show the final draft and ask separately whether I want it posted. Do not post without explicit approval.

The issue body remains authoritative. Do not edit the issue, write code, create branches, commit, push, open a PR, merge, change CI, change permissions, or expose secrets.
```

## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.
