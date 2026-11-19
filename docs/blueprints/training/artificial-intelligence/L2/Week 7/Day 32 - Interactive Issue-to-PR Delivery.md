---
name: "Day 32 - Interactive Issue-to-PR Delivery"
about: "Deliver one handoff-backed issue with approval checkpoints."
title: "Day 32: Interactive Issue-to-PR Delivery - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 32: Interactive Issue-to-PR Delivery

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Interactively deliver one approved gameplay issue through a scoped branch, Unity validation, linked PR, review request, and the required project status.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Use one valid Week 6 handoff to deliver an issue through a PR interactively. Hermes must use `engineering-sops-issue-to-pr`, ask for approval before every next delivery stage, and never merge.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-ISSUE-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Issue: YOUR-GITHUB-ISSUE-URL

Use `engineering-sops-issue-to-pr` in INTERACTIVE mode. Confirm the valid Week 6 handoff first. Honor its Dedup/Overlap classification when choosing the base: if MERGED, stop and report the already-delivered PR; if OPEN-OVERLAP, do not create a parallel PR (close any redundant newer PR as superseded pointing at the existing one, without deleting its branch); if DEPENDENCY, create the issue branch as a child of the sibling branch, never committing onto or pushing to the sibling; if CLEAR, branch from the confirmed base. Complete only the current stage, show real evidence, then ask: "Approve the next step?" Do not continue until I explicitly approve.

Use these stages: handoff preflight; `ai-automation` label; branch and implementation plan; proposed edits; validation; commit; push; PR creation and linked-issue verification; review request; Project Status `For Review` update and verification.

Do not merge, bypass CI, expose secrets, or edit the issue body. Inspect actual project results and blockers locally; do not create or submit a training report.
```
## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.
