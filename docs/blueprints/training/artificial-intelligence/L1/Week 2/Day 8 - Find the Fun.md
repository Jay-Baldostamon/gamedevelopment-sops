# Day 8: Find the fun

| Field | Value |
| --- | --- |
| Blueprint Name | Day 8 - Find the fun |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 8 decides what the game actually needs, and removes something, before more features pile on. The output is two sets of play notes, a one-sentence core purpose, a Must-Have and Nice-to-Have split with reasons, one cut merged to `main`, and a line on what the cut changed.

The authoritative lesson is [Day 8 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-8--find-the-fun); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 7 complete, with all six upgrades merged and `main` clean
* The Day 3 pitch at hand, to compare the game against what it promised
* One other person available for five minutes of observed play
* A notes file in the `Day 8` folder for both play sessions

#### Daily Evidence Standard

* The repository is the record: the cut happens on `chore/day8-cuts` and is merged.
* Both play notes, the core purpose sentence and the sorted lists are saved in the `Day 8` folder.
* A decision without a cited moment is an opinion: point at what you saw or played.
* The after-cut line is written after playing the reduced build, not before.
* No standup post and no supervisor sign-off are required on this path.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Play and notice

1. Play your game for ten minutes straight. Note the most engaged moment, the most bored moment, and any upgrade you had forgotten was there.
2. Ask someone to play for five minutes while you watch in silence. Note what they did first, where they leaned in and where they got lost. Do not explain anything.

### Phase 2: Inventory the upgrades

1. For each of the six: what it adds, whether it appeared in the fun moments, and what risk or cost it carries.

### Phase 3: Define the purpose

1. Write: "This game exists to make the player feel ___ by ___."
2. Note whether it changed since Day 3 and why.

### Phase 4: Categorise and cut

1. Sort every upgrade into Must-Have or Nice-to-Have with a one-line reason. No maybe pile.
2. At least one must be Nice-to-Have, or the purpose is too broad.
3. Remove or park at least one Nice-to-Have on branch `chore/day8-cuts` and merge it.
4. Play for three minutes and write one line on whether the cut made the game better, worse or the same, and why.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Explaining the game while the other person plays | Watch in silence and write down what they do |
| Playing alone only | Both sessions are required: ten minutes alone, five minutes observed |
| Keeping a "maybe" pile | Force every upgrade into Must-Have or Nice-to-Have with a one-line reason |
| Marking everything Must-Have | At least one upgrade must be Nice-to-Have or the purpose is too broad |
| Cutting something because it was hard to build | Cut on evidence from the play notes, not on effort |
| Cutting a Must-Have feature | Cut or park a Nice-to-Have; Must-Haves are what Day 10 checks |
| Describing the cut without testing it | Merge `chore/day8-cuts`, play three minutes, then write the line |
| Leaving the purpose sentence vague | Fill both blanks: the feeling and the mechanism that produces it |

#### Standards & Governance

* Day 8 is a decision day, not a build day: only the cut changes the game.
* Observed play outranks self-report; the person who never saw the game is the better witness.
* The core purpose is one sentence in the required format and is checked against every upgrade.
* Everything in Must-Have is what Day 10 must show working, so the list sets the Prototype scope.
* Cutting something is a success condition, not a failure.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Self-play | Ten minutes alone, with high and low moments noted |
| Observed play | Five minutes watched in silence, notes saved |
| Inventory | All six upgrades: what it adds, fun moments, risk or cost |
| Core purpose | One sentence: "This game exists to make the player feel ___ by ___." |
| Sorting | Must-Have or Nice-to-Have, one-line reason each, no maybe pile |
| Cut | At least one Nice-to-Have removed or parked on `chore/day8-cuts`, merged |
| After-cut line | Better, worse or the same, with the reason |
| Destination | Day 10 must show every Must-Have working |

- Milestone: both play notes, the core purpose, the two sorted lists with reasons, the merged cut and the after-cut line are saved, and the Must-Have list is the Prototype scope for Day 10.

## Implementation Examples (if needed)

The purpose sentence and a sorted inventory row:

```text
Core purpose: This game exists to make the player feel quick and precise by forcing fast left-right choices as patterns speed up.

Upgrade: chasing enemy
Adds: a second thing to watch while dodging.
Appeared in fun moments: yes - the observed player leaned forward the first time it appeared.
Risk: it can corner the player with no escape, which reads as unfair.
Decision: Must-Have - the tension it creates is the core purpose.
```

## End-of-Day Checklist

- [ ] I played for ten minutes and noted my high and low moments.
- [ ] Someone played for five minutes while I watched in silence, and I saved those notes.
- [ ] All six upgrades are inventoried.
- [ ] The core purpose is written in the required format.
- [ ] Every upgrade is Must-Have or Nice-to-Have with a one-line reason.
- [ ] At least one upgrade is Nice-to-Have.
- [ ] At least one Nice-to-Have was removed or parked on a branch and merged.
- [ ] The after-cut line is written.
