# Day 21: Hermes setup

| Field | Value |
| --- | --- |
| Blueprint Name | Day 21 - Hermes setup |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 21 installs the agent every later L2 day depends on. The output is a working local Hermes installation, one proven launch path, and an honest blocker note if it fails.

The authoritative lesson is [Day 21 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-21--hermes-setup); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 20 passed, with `v1.0` released and the post-launch issues filed in the game repository
* The game project opens in the pinned Unity version
* Current official Hermes documentation reachable
* A `Day 21` evidence folder and a screen recorder

#### Continuity Rule

Nothing in the game changes today. Day 21 installs tooling only: no branch, no commit, no code.

#### Daily Evidence Standard

* The install record lives in the `Day 21` folder.
* Evidence is the installed version, the exact launch command or launcher, a screenshot of the open UI, and the blocker note.
* A launch you cannot repeat from a clean start is not a proven setup.
* No standup post and no supervisor sign-off are required on this path.

#### Secret Rule

Complete every sign-in or credential prompt yourself. Never paste a password, token, API key, cookie, or private key into the prompt, the chat, the issue, or a file.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Install from current guidance

1. Replace `YOUR-OS` and `YOUR-GAME-REPO-FOLDER` in the prompt, then send it.
2. Confirm the agent repeats both values and stops if either still contains a placeholder.
3. Read the numbered steps before running them, and note every step that downloads software or changes the machine.

### Phase 2: Finish setup yourself

1. Pause the agent at any sign-in and complete it yourself.
2. Do not let the agent store credentials in the repository or a shell profile.

### Phase 3: Verify and record

1. Launch the desktop UI, confirm it opened, then close it.
2. Reopen it once from the operating system's launcher without help.
3. Record the installed version, the launch command or launcher, and any blocker.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-OS` | The operating system you are installing on, such as `Windows 11` |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository from Day 6 |

#### Copyable AI Prompt

```text
Operating System: YOUR-OS
Game Repository Folder: YOUR-GAME-REPO-FOLDER

Install and verify Hermes Agent locally using current official Hermes documentation. Do not assume older install commands are still correct.

Before doing anything, repeat the operating system and repository folder back to me. If either value still contains a YOUR- placeholder, stop and ask me to replace it.

Then:
1. State the official installation path for my operating system and give the exact steps as a short numbered list. Warn me before any step that downloads software or changes this machine.
2. Help me complete the installation. If a sign-in or credential prompt appears, pause and tell me to complete it myself. Never ask me to paste, reveal, store in source control, or log passwords, API keys, tokens, or other secrets.
3. Launch the Hermes desktop UI with `hermes desktop` and tell me how to confirm it opened. If a documented desktop-only installation makes that command unavailable, use the installed application launcher and report that blocker instead of substituting another command.
4. Return a "Successful local setup" summary with the installed version, the exact non-secret launch command or the verified launcher, how to launch it again from my operating system, and any prerequisite or permission that still needs my action.

Limit the work to installing and verifying Hermes. Do not modify repositories, shell profiles, global development configuration, or unrelated software.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Copying an old install command from a blog or memory | Use the current official documentation as the only source |
| Pasting a token or API key to get past a prompt | Stop the agent and complete the sign-in yourself |
| Calling the setup done because the command exited | Launch the UI, close it, and reopen it from the launcher |
| Installing extra tools to make it work | Report the blocker instead of adding software |
| Letting the agent edit shell profiles or repositories | Limit the work to installing and verifying Hermes |
| No evidence of the launch | Screenshot the open UI and record the exact launch path |
| A vague blocker such as "it failed" | Record the exact failing step and its error text |

#### Standards & Governance

* Current official Hermes documentation is the only installation source.
* Secrets never enter prompts, issues, files, or console output.
* The launch path must work twice: once from the agent, once from the operating system.
* Tooling only: no repository, code, or project change belongs to Day 21.
* A blocker is an acceptable result when it is specific and reproducible.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Installation source | Current official Hermes documentation |
| Sign-in | Completed by you, never shared |
| Launch | `hermes desktop` or the documented launcher |
| Repeat launch | Proven once from the operating system launcher |
| Evidence | Version, launch path, UI screenshot, blocker note |
| Scope | No repository or project change |

- Milestone: Hermes is installed, launches, reopens from the operating system, and the evidence or the exact blocker is recorded.

## End-of-Day Checklist

- [ ] Hermes is installed locally from the current official guidance.
- [ ] I completed every sign-in or credential prompt myself.
- [ ] The Hermes desktop UI opened.
- [ ] I reopened it once from the operating system launcher.
- [ ] The launch command or launcher and the installed version are recorded.
- [ ] Any blocker is written down as the exact failing step.
