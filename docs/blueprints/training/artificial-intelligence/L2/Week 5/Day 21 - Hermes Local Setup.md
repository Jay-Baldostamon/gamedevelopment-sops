---
name: "Day 21 - Hermes Local Setup"
about: "Set up Hermes locally and verify the desktop UI can launch."
title: "Day 21: Hermes Local Setup - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 21: Hermes Local Setup

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Set up the local agent workflow against the Unity game repository and confirm it can inspect the project structure without exposing editor licenses, tokens, or private assets.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

The goal today is to set up Hermes locally. Use the existing local AI you used for Days 11–19 rather than following a long manual installation guide. Declare your operating system and main GitHub repository folder, replace the variables below in the copyable prompt, and submit it to that AI. Complete the setup from current official Hermes documentation, open the Hermes UI, and retain the non-secret command or reliable launcher method for opening it again.

Local checks: confirm that the Hermes UI opens, the launcher works, and any blocker is visible. Do not paste API keys, tokens, passwords, or other secrets into the issue or prompt; complete any interactive sign-in yourself.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-OS`
- `YOUR-GITHUB-FOLDER-PATH`

## AI Prompt

```text
Operating System: YOUR-OS
Main GitHub Repository Folder: YOUR-GITHUB-FOLDER-PATH

I need you to install and verify Hermes Agent locally. Use the current official Hermes Agent documentation as the source of truth, especially its installation and desktop-app instructions. Do not assume old installation commands are still correct.

First, repeat the operating system and repository folder you will use. If either value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it before doing anything else.

Then:
1. Inspect the current official Hermes installation guidance for my operating system. Prefer the official Hermes Desktop installer when it is the recommended path for that operating system; otherwise use the documented supported installation path.
2. Explain the exact installation steps in a short, numbered sequence. Tell me before any step that downloads software or changes my machine.
3. Help me complete the installation. Do not ask me to paste, reveal, store in source control, or log passwords, API keys, tokens, or other secrets. If a sign-in or credential prompt appears, pause and tell me to complete it myself.
4. Verify the Hermes CLI is available if the official installation path provides it. Then launch the Hermes desktop UI by running `hermes desktop` in a terminal, and tell me how to confirm that it opened successfully. If the command is unavailable after a documented desktop-only installation, use the installed application launcher and report that blocker rather than substituting another CLI command.
5. After it works, return a concise "Successful local setup" summary containing:
   - the installed Hermes version, if available;
   - the exact non-secret console command `hermes desktop` that launches the Hermes desktop UI, or the documented desktop-only launcher blocker if that command was unavailable;
   - how to launch it again from the operating system's app launcher;
   - for Windows: how to right-click the Hermes icon and pin it to Start or the taskbar;
   - for Linux: the equivalent desktop-launcher or favorite/pin action for my detected desktop environment;
   - for macOS: the equivalent way to keep Hermes in the Dock;
   - any prerequisite, permission, or problem that still needs my action.

Keep all work limited to installing and verifying Hermes. Do not modify repositories, global development configuration, shell profiles, or unrelated software unless the current official Hermes instructions require it and you explain why first.
```

## Game Data Lane

Apply this shared lesson to approved mock player-save or progression data. Use local validation only; do not query unrelated production systems or mutate a live schema.
