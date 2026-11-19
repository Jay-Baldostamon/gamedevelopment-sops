---
name: "Day 26 - Issue Development Handoff Access and Skill Setup"
about: "Confirm handoff access and install the issue-development skill."
title: "Day 26: Issue Development Handoff Access and Skill Setup - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 26: Issue Development Handoff Access and Skill Setup

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Configure the issue-development handoff workflow for Unity tasks and ensure its context covers project version, target scene/assets, acceptance criteria, and validation.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Prepare the normal local Hermes setup to turn completed GitHub issues into AI development-handoff comments. Confirm the existing GitHub login can read the assigned issue and repository and has permission to add issue comments. Then install and verify the internal `engineering-sops-issue-development-handoff` skill. Do not generate or post a handoff comment yet.

Local checks: repository and issue access, comment permission or a specific blocker, the installed skill location, and whether a fresh Hermes session can load it.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-ISSUE-URL`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Issue: YOUR-GITHUB-ISSUE-URL

Prepare my normal local Hermes setup for the Issue Development Handoff workflow. This is access and skill setup only: do not edit the issue, generate a handoff plan, post a comment, write application code, create branches, commit, push, open PRs, merge, modify CI, or change permissions.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Resolve the issue URL and verify the existing local `gh` login can read the issue, its comments, and the repository source.
2. Verify whether the existing login can add a comment to that issue. Use safe validation where possible; do not create test comments.
3. If read or comment access is missing, state the exact least-privilege repository permission needed and provide a concise escalation message. Do not request, print, paste, or log secrets.
4. Install `engineering-sops-issue-development-handoff` using authenticated `gh api` from `hurdman/engineering-sops`, branch `main`, file `.github/skills/engineering-sops-issue-development-handoff/SKILL.md`.
5. Save it in the normal local Hermes skills directory as `engineering-sops-issue-development-handoff/SKILL.md`. Derive the Hermes directory from current configuration; do not edit Hermes configuration files directly.
6. Validate YAML frontmatter, exact skill name, non-empty body, and that it defines the Dedup/Overlap Preflight (classification plus base-branch confirmation). Start a fresh Hermes session and confirm the skill can load.
7. Return a concise readiness summary with access results, installed skill location, fresh-session load result, and any blocker.

Keep secret redaction and normal command approvals enabled.
```

## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.
