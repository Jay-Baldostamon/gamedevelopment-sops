---
name: "Day 31 - Issue-to-PR Access and Skill Setup"
about: "Confirm delivery access and install the issue-to-PR skill."
title: "Day 31: Issue-to-PR Access and Skill Setup - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 31: Issue-to-PR Access and Skill Setup

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Configure issue-to-PR delivery for the Unity repository, including least-privilege access and validation commands appropriate to the recorded Unity version.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Prepare the normal local Hermes setup for end-to-end issue delivery. Confirm the existing GitHub login can read the issue and Week 6 handoff, create branches and PRs, request review, add `ai-automation`, and update the existing issue Project item to `For Review`. Then install and verify `engineering-sops-issue-to-pr`. Do not implement an issue yet.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-ISSUE-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Issue: YOUR-GITHUB-ISSUE-URL

Prepare my normal local Hermes setup for Issue-to-PR delivery. Do not implement the issue, add labels, create branches, commit, push, create a PR, request review, update Project status, edit the issue, or change repository configuration. Confirm the Week 6 handoff records its Dedup/Overlap classification and confirmed base branch before any delivery starts; report it if that classification is missing.

First validate the placeholders. Then verify access to read the issue/comments and repository, create a branch and PR, request review, add the existing `ai-automation` label, and read/update the issue's existing Project item to `For Review`. Do not create test artifacts.

Install `engineering-sops-issue-to-pr` from authenticated `gh api` access to `hurdman/engineering-sops`, branch `main`, file `.github/skills/engineering-sops-issue-to-pr/SKILL.md`. Save it to the normal Hermes skills directory, validate its frontmatter and body, then verify a fresh Hermes session can load it.

Return access results, installed skill location, fresh-session load result, and exact least-privilege blockers. Do not expose secrets.
```
## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.

