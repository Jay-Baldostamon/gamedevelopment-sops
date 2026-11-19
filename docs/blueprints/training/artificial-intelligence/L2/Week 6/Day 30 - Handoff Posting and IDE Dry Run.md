---
name: "Day 30 - Handoff Posting and IDE Dry Run"
about: "Post a handoff and test its prompt in the local IDE."
title: "Day 30: Handoff Posting and IDE Dry Run - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 30: Handoff Posting and IDE Dry Run

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Dry-run a posted Unity handoff in the IDE: inspect project files and produce a plan only; do not edit scripts, scenes, prefabs, or assets.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Run the issue-development-handoff skill in **auto-post mode**, then test the generated copy-pasteable AI development prompt in the trainee's own local IDE. This is a Week 7 preparation dry run: the IDE agent must inspect and plan only. Do not permit application code edits, branches, commits, pushes, pull requests, merges, CI changes, permission changes, or secret exposure.

Local checks: an authorized project handoff, the IDE's issue/repository understanding and implementation plan, prompt gaps, and confirmation that no code was changed.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-FOLDER-PATH`
- `YOUR-GITHUB-ISSUE-URL`
- `YOUR-LOCAL-IDE-AI-NAME`

## AI Prompt

```text
Repository Folder: YOUR-GITHUB-FOLDER-PATH
GitHub Issue: YOUR-GITHUB-ISSUE-URL
Local IDE AI: YOUR-LOCAL-IDE-AI-NAME

Use `engineering-sops-issue-development-handoff` in fully automated AUTO-POST mode. Do not ask for intermediate approval after placeholder validation. First run the Dedup/Overlap Preflight and record the classification plus confirmed base branch in the handoff's Related Work section: if a merged PR already closes the issue (MERGED), stop and return its URL without drafting; if an open PR/branch already covers the scope (OPEN-OVERLAP), do not plan covered work; if the issue depends on a sibling's unmerged PR (DEPENDENCY), record that the downstream branch will be based on that sibling. Then generate and post exactly one non-duplicate AI Development Handoff comment as defined by the skill, and return the posted comment URL.

After posting, extract the Copy-Paste AI Development Prompt from that comment. Open my local IDE AI named above and submit that prompt for a PLAN-ONLY dry run.

The IDE AI dry run must:
1. Read the issue and inspect the named repository.
2. Confirm its understanding of requirements, acceptance criteria, boundaries, repository context, likely files, and validation.
3. Return a bounded implementation plan and concise clarification questions, if needed.
4. Make no application-code edits and do not create branches, commit, push, open PRs, merge, change CI, change permissions, or expose secrets.

Inspect the IDE plan, prompt gaps, and repository state locally. Do not create a training report or submit progress evidence.
```

## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.
