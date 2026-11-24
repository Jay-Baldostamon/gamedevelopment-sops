# Day 6: Game repo setup

| Field | Value |
| --- | --- |
| Blueprint Name | Day 6 - Game repo setup |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 6 puts the game on GitHub safely and starts the documentation that later days depend on. The output is a private Unity repository with readable scene diffs, Git LFS for large files, three commits, a `README.md`, an `ASSETS.md` and a findings note on the GitHub tabs.

The authoritative lesson is [Day 6 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-6--game-repo-setup); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 5 passed, with every line of the Day 5 rubric at Yes
* Git (`git --version`), Git LFS (`git lfs version`) and GitHub Desktop installed and signed in
* A GitHub account that can create a private repository
* [Unity Repo Checklist](../../Resources/Unity%20Repo%20Checklist.md) open
* The Day 4 project, opening with zero Console errors

#### Continuity Rule

The repository holds the same game from Day 3 and Day 4. Do not start a new Unity project.

#### Daily Evidence Standard

* From today the **game repository is the record**. The project folder alone is no longer enough.
* Code evidence is commits with clear messages; work in progress is a branch.
* Screenshots and GIFs of behaviour go in the issue or pull request the day names, with a short note.
* `README.md` and `ASSETS.md` are the repository's documentation and stay in the repository root.
* No standup post and no supervisor sign-off are required on this path.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Prepare Unity

1. Set Asset Serialization to **Force Text** (Project Settings, Editor) and Version Control to **Visible Meta Files** (Project Settings, Version Control).
2. Save the scene and the project, then close Unity.

### Phase 2: Create the repository

1. In GitHub Desktop, add the folder that contains `Assets` as a local repository.
2. Create it with the Unity `.gitignore`.

### Phase 3: Set up Git LFS

1. Run `git lfs install`.
2. Add the `.gitattributes` rules from [Unity Repo Checklist](../../Resources/Unity%20Repo%20Checklist.md).
3. In Changes, confirm `Assets`, `Packages`, `ProjectSettings`, `.gitignore` and `.gitattributes` are listed while `Library`, `Temp`, `Logs` and `UserSettings` are not.
4. If `Library` is listed, fix the ignore before committing.

### Phase 4: First commit and documentation

1. Commit `chore: initial Unity project with core mechanic`.
2. Publish the repository as **private**.
3. Write `README.md` with the game name, one-line pitch, Unity version, how to open and play, controls and current status.
4. Write `ASSETS.md` with file, made by and date columns, then commit `docs: add README and asset log`.

### Phase 5: Prove the workflow

1. Make one small scene change and commit it.
2. On GitHub, check the scene diff is readable text rather than "binary file", which proves Force Text is on.
3. Write a findings note with one practical line per repository tab: Code, Issues, Pull requests, Actions, Projects, Security, Insights, Settings.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Committing `Library`, `Temp`, `Logs` or `UserSettings` | Fix the `.gitignore` before the first commit and re-check the Changes list |
| Publishing the repository as public | Publish private; the game and its notes stay internal |
| A scene that shows as "binary file" on GitHub | Set Asset Serialization to Force Text and Visible Meta Files, then commit again |
| Large art or audio failing to upload | Run `git lfs install` and add the `.gitattributes` rules first |
| One giant initial commit | Three commits: project, documentation, proof-of-workflow change |
| Vague commit messages | Say what changed: `chore: initial Unity project with core mechanic` |
| No `ASSETS.md` because there is no art yet | Create it now with the file, made by and date columns |
| Skipping the tab findings note | Write one practical line for each of the eight repository tabs |

#### Standards & Governance

* The repository is private from the first push; nothing internal is published.
* Unity settings come before the first commit, because fixing them later rewrites history.
* `Library` in the repository is a hard failure, not a warning: Unity rebuilds it on every machine.
* Documentation is part of the day, not a follow-up: `README.md` and `ASSETS.md` ship with the project.
* The readable scene diff is the proof that Force Text is on; a screenshot of it is the evidence.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Unity settings | Asset Serialization **Force Text**, Version Control **Visible Meta Files** |
| Repository | Private, created in GitHub Desktop with the Unity `.gitignore` |
| Large files | `git lfs install` plus the `.gitattributes` rules from the checklist |
| Ignored folders | `Library`, `Temp`, `Logs`, `UserSettings` absent from GitHub |
| Commits | Three: project, documentation, proof-of-workflow change |
| Documentation | `README.md` with six parts, `ASSETS.md` with three columns |
| Diff proof | A scene change shown as readable text on GitHub |
| Findings | One practical line for each of the eight repository tabs |

- Milestone: the private repository link, three commits, a readable scene diff, `README.md`, `ASSETS.md` and the tab findings note are saved, and the project is recoverable from GitHub alone.

## Implementation Examples (if needed)

`README.md` has six parts and nothing else:

```markdown
# Crate Dodge

One-screen arena where you dodge falling crates and catch coins. 30 coins or three hits ends the round.

Unity: 6000.x LTS (the studio's pinned version)
Open: Unity Hub, Add project from disk, open this folder, then open `Assets/Scenes/Main.unity`.
Play: Press Play. Left and right arrows or A and D move.
Status: Day 6: core loop in Unity
```

## End-of-Day Checklist

- [ ] Asset Serialization is Force Text and Version Control is Visible Meta Files.
- [ ] The repo is private and uses the Unity `.gitignore`.
- [ ] `.gitattributes` with the LFS rules is committed.
- [ ] `Library` does not appear on GitHub.
- [ ] `README.md` has all six parts and its controls are correct.
- [ ] `ASSETS.md` exists.
- [ ] Three commits are pushed and a scene change shows as readable text.
- [ ] The repository-tab findings note is saved.
