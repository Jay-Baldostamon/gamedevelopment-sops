---
name: "Day 29 - Automated Issue Development Handoff Posting"
about: "Generate and auto-post one issue development handoff."
title: "Day 29: Automated Issue Development Handoff Posting - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 29: Automated Issue Development Handoff Posting

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Post one deduplicated handoff for an approved Unity issue, preserving its acceptance criteria and Unity-specific implementation boundaries.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Run the issue-development-handoff skill fully automatically in **auto-post mode**. Hermes reads the issue and relevant repository context, generates a viable bounded development plan and copy-pasteable AI prompt, checks for an equivalent existing handoff comment, and posts exactly one new comment only when no equivalent comment exists.

Local checks: a posted or existing equivalent project handoff, issue-supported requirements and acceptance criteria, repository context, and no code or issue-body mutation.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-ISSUE-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Issue: YOUR-GITHUB-ISSUE-URL

Use `engineering-sops-issue-development-handoff` in fully automated AUTO-POST mode. Do not ask for intermediate approval after placeholder validation. Read the issue and relevant repository context, then run the Dedup/Overlap Preflight: if a merged PR already closes the issue (MERGED), stop and return its URL without posting; if an open PR/branch already covers the scope (OPEN-OVERLAP), do not plan covered work; if the issue depends on a sibling's unmerged PR (DEPENDENCY), record that the downstream branch will be based on that sibling; otherwise classify CLEAR. Record the classification and confirmed base branch in the handoff's Related Work section. Then generate the required AI Development Handoff comment with a viable bounded development plan and one copy-pasteable `text` prompt, and post it automatically.

Before posting, inspect existing issue comments for an equivalent handoff. If one already exists for the same issue state, do not post a duplicate; return its URL. Otherwise post exactly one comment with authenticated `gh issue comment` and verify the returned comment URL or identifier.

Do not edit the issue body, write code, create branches, commit, push, open PRs, merge, change CI, change permissions, or expose secrets. If the issue has critical clarification gaps, do not post an implementation-ready handoff; report the gaps instead.
```

## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.
