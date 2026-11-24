# Day 9: Rules versus game feel

| Field | Value |
| --- | --- |
| Blueprint Name | Day 9 - Rules versus game feel |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 9 separates what the game does from how it looks and reacts, so a change can never be blamed on the wrong cause. The output is a before GIF, a tuning list, two feel-only looks with changed-file screenshots, one rules-only tuning change behind a single Inspector-editable place, a written lesson and an asset request list.

The authoritative lesson is [Day 9 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-9--rules-versus-game-feel); this blueprint is its expanded execution form.

**Rules** are speeds, scores, damage, spawn timing, win and lose conditions. **Feel** is colours, materials, particles, camera movement and screen shake. Changed in one prompt, you cannot tell which change broke what.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 8 complete, with the cut merged and `main` clean
* The game playing on `main` with zero Console errors
* `ASSETS.md` present in the repository root
* A recorder for GIFs, and a written tuning list to compare against

#### Allowed Today

Colours, materials, background colour, built-in particles, camera movement and shake, scaling or flashing on hit.

#### Not Until After Day 10

Imported sprites and models, sound, music, menus.

#### Daily Evidence Standard

* The repository is the record: two feel branches and one rules branch, each with its own commit.
* Every GIF is recorded against the branch it describes, before merging.
* Changed-file screenshots are the proof that a branch changed only what it claimed.
* The written lesson and the asset request list are saved in the `Day 9` folder and recorded in `ASSETS.md`.
* No standup post and no supervisor sign-off are required on this path.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Lock the baseline

1. Record a before GIF and confirm zero Console errors.
2. Write down the tuning numbers: speeds, spawn rate, damage, score per pickup and timers.

### Phase 2: Two feel-only looks

1. Branch `feature/day9-feel-a` and prompt feel only: "Change only how the game looks and reacts. Do not change speeds, scores, timings, collisions or win and lose conditions. Give me click-by-click editor steps."
2. Play it, then screenshot the changed-file list, which must contain no rules script.
3. Branch `feature/day9-feel-b` from `main` with a clearly different look and the same checks.
4. Merge the look that fits your core purpose and leave the other unmerged.

### Phase 3: One rules-only change

1. Branch `feature/day9-rules-tuning` and ask AI to move the tuning numbers into one ScriptableObject you can edit in the Inspector without touching visuals.
2. Confirm the game feels identical, change one number, record a GIF, and screenshot the changed-file list, which must contain no visuals file.
3. Write five to ten lines on what goes wrong when rules and feel change in one prompt, and whether AI touched a file you told it not to.

### Phase 4: Asset request

1. Write the asset request list for your Must-Have features: ten items or fewer, each with size, facing, style and priority (Must or Nice).
2. Add a line to `ASSETS.md` recording the request list and its date.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| One prompt that changes rules and feel together | One branch per intent; restate the boundary in every prompt |
| Changing a tuning number inside a feel branch | Rules changes only on `feature/day9-rules-tuning` |
| Touching visuals in the rules branch | The changed-file screenshot must show no visuals file |
| Merging both looks | Merge the one that fits the core purpose and leave the other unmerged |
| Starting without a before GIF | Record the before GIF and the tuning list first |
| Tuning numbers spread across scripts | Move them into one ScriptableObject editable in the Inspector |
| Importing art, sound or menus today | Only the allowed list today; assets land after Day 10 |
| Skipping the asset request | Ten items or fewer, each with size, facing, style and priority |

#### Standards & Governance

* Rules and feel never change in the same prompt or the same branch; that separation is the whole lesson.
* The feel comparison is fair only if both looks start from `main` with the same rules.
* The rules change is proven by identical feel plus one edited Inspector value.
* Everything you cannot yet add goes into the asset request instead of into the game.
* The written lesson is your own analysis, including any file AI touched that it was told not to.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Before GIF | Recorded with zero Console errors |
| Tuning list | Speeds, spawn rate, damage, score per pickup, timers |
| Look A | `feature/day9-feel-a`, feel only, GIF plus changed-file screenshot |
| Look B | `feature/day9-feel-b` from `main`, clearly different, same checks |
| Merge | One look merged, the other left unmerged |
| Rules change | `feature/day9-rules-tuning`, tuning in one Inspector-editable place |
| Tuning proof | Identical feel, one number changed, GIF, no visuals file |
| Lesson | Five to ten lines on mixed changes and any stray file touched |
| Asset request | Ten items or fewer with size, facing, style, priority, recorded in `ASSETS.md` |

- Milestone: the before GIF, tuning list, two feel branches with evidence, one merged look, the merged rules tuning, the written lesson and the asset request list are saved, and the game still plays on `main` with zero Console errors.

## Implementation Examples (if needed)

A tuning list and the two changed-file proofs it anchors:

```text
Tuning (baseline): move speed 6, spawn rate 1 per 0.9s, damage 1, score per coin 1, round 90s.

feature/day9-feel-a changed: Main.unity, PlayerMaterial.mat
feature/day9-rules-tuning changed: GameTuning.asset, GameTuning.cs, Spawner.cs
```

## End-of-Day Checklist

- [ ] The before GIF and the tuning list are saved.
- [ ] Look A and Look B are both feel-only, each with a GIF and a changed-file screenshot.
- [ ] One look is merged and the other is left unmerged.
- [ ] The tuning numbers live in one place that is editable in the Inspector.
- [ ] One tuning number was changed, with a GIF and no visuals file touched.
- [ ] I can explain what a ScriptableObject is in my own words.
- [ ] The five-to-ten-line lesson is written.
- [ ] The asset request list has ten items or fewer and is saved.
