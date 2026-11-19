---
name: "Day 28 - Automated Echo Issue Development Handoff"
about: "Generate a handoff comment for manual issue posting."
title: "Day 28: Automated Echo Issue Development Handoff - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 28: Automated Echo Issue Development Handoff

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Run an echo-only handoff for a Unity issue and verify the proposed implementation and validation without changing the repository.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Run the issue-development-handoff skill fully automatically in **echo mode**. Hermes reads the issue and repository context, produces the complete comment-ready AI Development Handoff, and returns it in chat. The trainee manually copies and pastes the generated comment into the GitHub issue. Hermes must not post a comment.

Local checks: one complete handoff, the actual project comment if posting is authorized, and no automated issue mutation.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-ISSUE-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Issue: YOUR-GITHUB-ISSUE-URL

Use `engineering-sops-issue-development-handoff` in fully automated ECHO mode. Do not ask for intermediate approval after placeholder validation. Read the issue and relevant repository context, then run the Dedup/Overlap Preflight: if a merged PR already closes the issue (MERGED), stop and return its URL without drafting; if an open PR/branch already covers the scope (OPEN-OVERLAP), do not plan covered work; if the issue depends on a sibling's unmerged PR (DEPENDENCY), record that the downstream branch will be based on that sibling; otherwise classify CLEAR. Record the classification and confirmed base branch in the handoff's Related Work section. Then generate a viable bounded development plan and return exactly one complete AI Development Handoff comment draft for me to copy and paste manually into the issue.

Do not post any GitHub comment, edit the issue, write code, create branches, commit, push, open PRs, merge, change CI, change permissions, or expose secrets. Do not invent requirements, acceptance criteria, files, architecture, APIs, schemas, or dependencies. If the issue is underspecified, include exact clarification gaps in the draft instead of claiming it is ready.

After the draft, remind me to manually paste it into the issue and return the resulting comment URL for my records.
```

## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.
