---
name: "Day 22 - Review Access and Skills"
about: "Set up GitHub review access and install Hermes review skills."
title: "Day 22: Review Access and Skills - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 22: Review Access and Skills

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Verify least-privilege review access and loadable skills using Unity-specific review examples (C#, scenes, prefabs, assets, and build/test evidence).

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Prepare the local Hermes installation for automated pull-request reviews. First, confirm that the existing local GitHub login has the least-privilege access needed to read pull requests, linked issues, repository source and branches, and check results. Then install and verify the baseline `github-code-review` skill and the organization’s internal `engineering-sops-pr-review` skill. Do not create a separate Hermes profile: use the learner’s normal local Hermes setup. Do not review a pull request yet; Days 23–25 are the review-practice days.

Local checks: authenticated GitHub account and repository identity, review-relevant read access or a specific blocker, installed skill locations, and whether a fresh Hermes session can load them. Do not paste API keys, tokens, passwords, cookies, or SSH private keys into the issue, prompt, console output, or source control.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-REPOSITORY`

## AI Prompt

```text
Main GitHub Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Repository for Review Access: YOUR-GITHUB-REPOSITORY

Prepare my existing local Hermes installation for automated pull-request reviews. Use current official Hermes documentation and my existing local GitHub configuration as the source of truth. This is access and skill setup only: do not review a pull request, modify repository code, push commits, merge anything, change CI settings, or create a separate Hermes profile.

First, repeat the repository folder and GitHub repository you will use. If either value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Inspect the existing local GitHub login and the repository remote without printing credentials. Confirm whether the current access can read:
   - pull-request metadata and diffs;
   - linked issues;
   - repository source code and branches;
   - pull-request checks or CI status.
2. Identify the least-privilege access needed for a reviewer. Prefer read-only repository access and read-only pull-request, issue, and checks/status access. Do not request repository write, merge, administration, workflow modification, or broad organization access unless a specific review requirement cannot be met without it.
3. If required read access is missing, explain the exact repository or organization permission needed and why. Guide me through the official interactive GitHub authorization or organization-access process. Do not ask me to paste, reveal, print, store in source control, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets. Pause while I complete interactive sign-in or obtain administrator approval.
4. Verify resulting access with safe, read-only checks. If access remains incomplete, provide a concise escalation message I can send to the repository administrator that requests only the required permission.
5. Use the current official Hermes skill-management guidance to inspect whether the public `github-code-review` skill is available. If it is missing, install it through the supported Hermes skills command or approved skill source. Do not invent a skill URL or use an unapproved source.
6. Install the internal `engineering-sops-pr-review` skill using the authenticated local GitHub CLI (`gh`), not `raw.githubusercontent.com`. The source may be private, and a direct raw URL does not automatically inherit my `gh` login.
   - Use `gh api` with the existing logged-in account to retrieve this exact file from the Engineering SOPs repository and `main` branch: `.github/skills/engineering-sops-pr-review/SKILL.md` in `hurdman/engineering-sops`.
   - Save it in the normal local Hermes skills directory as `engineering-sops-pr-review/SKILL.md`. Derive the Hermes home and skills directory from current Hermes configuration; do not assume a hard-coded path and do not edit Hermes configuration files directly.
   - Validate that the retrieved file starts with YAML frontmatter, has `name: engineering-sops-pr-review`, and has non-empty body content before treating it as installed.
7. Start a fresh normal Hermes session and verify that both `github-code-review` and `engineering-sops-pr-review` are available and can be loaded.
8. Return a concise "Review access and skills readiness" summary containing:
   - GitHub account and repository identity verified;
   - current review-relevant access confirmed;
   - minimum additional access requested, if any, with reason;
   - safe checks performed and their real results;
   - installed skill names and locations;
   - confirmation that a fresh Hermes session can load both skills;
   - remaining blockers, if any.

Keep secret redaction and normal command approvals enabled. Keep all work limited to read-only access validation and installing the two review skills into the normal local Hermes setup.
```

## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.
