# Day 10: Prototype and recovery drill

| Field | Value |
| --- | --- |
| Blueprint Name | Day 10 - Prototype and recovery drill |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 10 finishes the Prototype and then proves you can get it back after it breaks. The output is a Prototype played to an end state, a clean five-minute run, a documented broken state, the Git steps that restored it, a working-again GIF, a two-sentence reflection and demo 2.

**Gate:** blocking. Score the work against [Rubrics](../../Resources/Rubrics.md) → Day 10. Week 3 does not start until the restored build passes.

The authoritative lesson is [Day 10 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-10--prototype-and-recovery-drill); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 9 complete, with the rules tuning merged and the feel branches settled
* The game pushed to GitHub, with `main` matching the local project
* [Rubrics](../../Resources/Rubrics.md) open at Day 10
* A recorder ready for GIFs and demo 2
* The Day 8 Must-Have list and the Day 3 pitch at hand

#### Daily Evidence Standard

* The repository is the record: commits for the build, screenshots for the broken state, and the restore visible on GitHub Desktop.
* Delete nothing before confirming GitHub Desktop shows no local changes.
* The broken state, the restore steps and the working-again GIF are saved in the `Day 10` folder or the day's issue.
* You may score your own work, but the evidence must let a reviewer reach the same result alone.
* No standup post and no supervisor sign-off are required on this path.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Finish the Prototype

1. A Prototype means the core loop plays from start to an end state in plain shapes. Tick every Day 8 Must-Have that is in the game and build what is missing, one branch per item.
2. Make sure the game has an end state (win, lose or time up, shown on screen) and a restart that works without leaving Play mode.

### Phase 2: Stabilise

1. On `main`, play five minutes and reach the end state twice.
2. Fix everything until the Console is clean, then set `README.md` to "Day 10: Prototype".
3. Confirm five or more commits with clear messages (`feat: add chasing enemy`, not `update`) and screenshot the history.

### Phase 3: Break it on purpose

1. Before breaking anything, confirm GitHub Desktop shows no local changes.
2. Delete your main scene and its `.meta` file, or your player script and its `.meta`.
3. Let Unity reload, then document the broken state: a Unity screenshot, a GitHub Desktop screenshot of the deleted files, and one sentence on how you can tell it is broken.

### Phase 4: Recover it

1. Restore both files from Git, using Discard changes in GitHub Desktop or the restore command AI explains before you run it. Do not retype or regenerate them.
2. Play to the end state and record a GIF of it working again.
3. Write two sentences: what Git just did for you, and what would have happened without it.

### Phase 5: Demo and score

1. Record demo 2: five minutes or less with the core purpose, the loop to the end state, one Inspector tuning change, and what you cut on Day 8.
2. Score yourself against [Rubrics](../../Resources/Rubrics.md) → Day 10.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Retyping or regenerating the deleted files | Restore from Git so the recovery is the proof |
| Breaking the project with local changes uncommitted | Confirm GitHub Desktop shows no local changes first |
| Deleting the file but leaving its `.meta` | Delete both, or Unity re-imports a new asset instead of restoring yours |
| A game with no end state | Win, lose or time up, shown on screen, with a working restart |
| Vague commit messages in the history | Use `feat: add chasing enemy`, never `update` |
| Saving the build with red Console errors | Fix them until five minutes of play is clean |
| Skipping the rubric because the build works | Score every line; a reviewer must reach the same result from the evidence |
| Missing demo 2 or overrunning five minutes | Record the final demo against the restored build and keep it under five minutes |

#### Standards & Governance

* The Prototype is judged against the Day 8 Must-Have list, not against new ideas.
* Recovery is done through Git; hand-repairing files proves nothing about version control.
* Both files come back together, the asset and its `.meta`, so Unity sees the same asset.
* Day 10 is a blocking gate: Week 3 does not start until the restored build passes every rubric line.
* Demo 2 is the end-of-week evidence: core purpose, loop to the end state, one tuning change, the Day 8 cut.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Prototype | Core loop plays start to end state in plain shapes |
| Must-Haves | Every Day 8 Must-Have ticked and working |
| End state | Win, lose or time up on screen, plus a restart without leaving Play mode |
| Stability | Five minutes of play, end state reached twice, zero Console errors |
| README | Set to "Day 10: Prototype" |
| History | Five or more commits with clear messages, screenshotted |
| Break | One file and its `.meta` deleted with no local changes pending |
| Recover | Restored from Git, with the steps documented |
| Evidence | Broken-state screenshots and a working-again GIF |
| Demo 2 | Five minutes or less, posted |
| Gate | [Rubrics](../../Resources/Rubrics.md) → Day 10, all Yes |

- Milestone: **Prototype**. The prototype works from start to an end state, the commit history is screenshotted, the broken state and its recovery are documented with a working-again GIF, demo 2 is posted, and Day 10 of the rubric scores Yes on every line.

## Implementation Examples (if needed)

The restore is two commands after the deletion, and AI explains them before you run them:

```text
git status
git restore Assets/Scenes/Main.unity Assets/Scenes/Main.unity.meta
```

In GitHub Desktop the same recovery is a single step: right-click the deleted files under Changes and choose Discard changes.

## End-of-Day Checklist

- [ ] Every Day 8 Must-Have is in the game and working.
- [ ] The game reaches an end state and can restart.
- [ ] Five minutes of play shows zero Console errors and `README.md` says "Day 10: Prototype".
- [ ] The commit history shows five or more clear commits.
- [ ] The broken state is documented after deleting a file and its `.meta`.
- [ ] The Git restore steps are documented.
- [ ] The game plays again after restoring, with a GIF.
- [ ] The two-sentence reflection is written.
- [ ] Demo 2 is posted and is five minutes or less.
