# Day 7: Six mechanic upgrades

| Field | Value |
| --- | --- |
| Blueprint Name | Day 7 - Six mechanic upgrades |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 7 grows the game in controlled steps: six upgrades, one branch each, tested and merged before the next one starts. The output is six merged branches with GIFs and documentation rows, and a clean three-minute run on `main`.

The authoritative lesson is [Day 7 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-7--six-mechanic-upgrades); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 6 complete, with the private repository published
* The project opening with zero Console errors
* GitHub Desktop signed in to the game repository
* A recorder for GIFs, and a place to record the six documentation rows
* The Day 3 pitch, to check each upgrade still serves the same game

#### Daily Evidence Standard

* The repository is the record: one branch and one commit per upgrade, plus one merge into `main`.
* Each upgrade has a GIF recorded against the build it changed, not recorded at the end of the day.
* The six documentation rows live beside the day's notes in the repository or the day's ticket.
* A Console error seen during testing is fixed before the branch is merged.
* No standup post and no supervisor sign-off are required on this path.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Plan the six

1. List six upgrades, each one new mechanic or one improvement a player would notice: an enemy or obstacle type, a pickup, a score counter, difficulty that ramps, a second ability, a timer, a hazard.
2. Each must be buildable and testable in about an hour, plain shapes only.
3. Ask AI which is biggest and which could be split, then order the list from safest to riskiest and save it before building.

### Phase 2: Build one upgrade per branch

1. Repeat this loop six times: switch to `main` and fetch; create `feature/day7-upgrade-N-<short-name>`; prompt for that one upgrade and demand the editor steps; wire it; play the new upgrade and everything before it; check the Console; fix errors; record a GIF; commit `feat: <what changed>`; merge into `main`; play once more on `main`.

### Phase 3: Document and stabilise

1. Record one row per upgrade: branch, what changed, why it adds something for the player, evidence and status.
2. On `main` with all six merged, play at least three minutes using every upgrade.
3. Fix every red Console error and read every warning once.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Building all six on one branch | One `feature/day7-upgrade-N-<short-name>` branch per upgrade |
| Merging before testing the new upgrade | Play the new upgrade and everything before it, then merge |
| Starting upgrade N+1 before N is merged | Merge into `main` and play once on `main` first |
| Testing only the new upgrade | Play the earlier mechanics too, because upgrades break each other |
| Recording all six GIFs at the end of the day | Record each GIF against the branch that produced it |
| Vague commit messages | Use `feat: <what changed>`, for example `feat: add chasing enemy` |
| Never reading the warnings | Read every warning once and fix the red errors |
| Skipping the planning step | Order the six from safest to riskiest and save the list before building |

#### Standards & Governance

* One upgrade per branch, one merge per upgrade; the sequence is the point of the day.
* Every upgrade is tested against the mechanics already on `main`, not in isolation.
* Each upgrade must be buildable and testable in about an hour with plain shapes.
* AI is asked which upgrade is biggest and which could be split, so scope is decided before building.
* The day ends on `main`, with all six merged and three minutes of play showing zero Console errors.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Upgrades | Six, planned and ordered safest to riskiest before building |
| Size | Each buildable and testable in about an hour, plain shapes only |
| Branch per upgrade | `feature/day7-upgrade-N-<short-name>` |
| Test each upgrade | The new upgrade plus every earlier mechanic |
| Merge order | Merged into `main` before the next upgrade begins |
| Evidence | Six GIFs, one per upgrade |
| Documentation | Six rows: branch, what changed, player value, evidence, status |
| Final run | Three minutes on `main`, zero Console errors |

- Milestone: six branches are merged with six GIFs and six documentation rows, and three minutes of play on `main` uses every upgrade with zero Console errors.

## Implementation Examples (if needed)

The loop is the same six times; only the upgrade name changes:

```text
1. GitHub Desktop: switch to main, fetch origin.
2. New branch: feature/day7-upgrade-1-spike-hazard
3. Prompt: "Add a spike hazard that costs a life on contact. Then give me click-by-click steps for everything I need to do in the Unity editor."
4. Wire it, press Play, play the spike and the movement that existed before it, read the Console.
5. Record spike-hazard.gif. Commit "feat: add spike hazard that costs a life".
6. Merge into main, play once on main, then start upgrade 2.
```

## End-of-Day Checklist

- [ ] Six upgrades are planned, ordered and saved before building.
- [ ] Six `feature/day7-upgrade-*` branches were created and pushed.
- [ ] Each upgrade was tested against the earlier mechanics before merging.
- [ ] Each upgrade was merged into `main` before the next one began.
- [ ] Six documentation rows exist, each with a GIF.
- [ ] Three minutes of play on `main` shows zero Console errors.
