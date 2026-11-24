# Playtest and QA Templates

Three templates:

1. **Playtest finding** — Day 16, for problems you find in a build you did not write
2. **Triage table** — Day 17, for sorting the findings you received
3. **QA checklist** — Day 18, for your own Windows build before Beta

---

## 1. Playtest Finding Template (Day 16)

**Before you file anything:** play the build for 20 minutes with screen recording on. Do not ask how it works. Getting confused is useful information. File at least five findings, one problem each.

Title format: `[Playtest] <what happened in a few words>`

```markdown
## What happened
<What you saw. One or two sentences.>

## What I expected
<What you thought would happen.>

## How to make it happen again
1. <step>
2. <step>
3. <step>
(or: "Happened once, couldn't repeat it")

## Type
<pick one> Bug / Confusing / Not fun / Too hard / Too easy / Idea

## Severity
<pick one>
- Blocker: I couldn't keep playing
- Major: it spoiled the game but I could continue
- Minor: I noticed it but it didn't matter much

## Evidence
<Timestamp in the recording, or a GIF or screenshot>

## Build
<Release name or date of the build you played>
```

Good findings describe **what you experienced**, not what to build. "I didn't notice I was taking damage" is better than "add a red flash".

At least one of your five findings must be something you **liked**. Type it `Idea` and say what to keep.

## 2. Triage Table (Day 17)

Sort every finding you received. Every item gets exactly one decision. Post the table with the day's evidence.

```markdown
| Finding | Severity | Decision | Reason (one line) |
| --- | --- | --- | --- |
| #12 Couldn't tell I was hit | Major | Fix now | Players lose without knowing why |
| #13 Wants a second level | Minor | Post-launch | Outside the 10-minute scope |
| #14 Dislikes the blue floor | Minor | Wont fix | Replaced by the next art pass |
```

Decisions:

- **Fix now** — goes in today's pull request. Every blocker must be Fix now. Pick at most five in total.
- **Post-launch** — label it `post-launch`. This becomes your Level 2 backlog.
- **Won't fix** — label it `wontfix` and say why in a comment. It is fine to say no.

## 3. QA Checklist (Day 18)

Run this on a **Windows build**, not inside the Unity editor. Copy it into the day's evidence and tick each line. Beta requires every line ticked.

```markdown
### Start
- [ ] The build opens without a crash
- [ ] The title screen shows the game name
- [ ] Starting the game works with the control shown on screen

### Play
- [ ] A new player can tell what to do within 30 seconds (shown on screen, not explained by you)
- [ ] Every control described in the README works
- [ ] The player can always tell their status (health, score, time or progress)
- [ ] Nothing lets the player leave the play area or get stuck

### End states
- [ ] Winning is possible, and the win screen appears
- [ ] Losing is possible, and the lose screen appears
- [ ] Restart from the win screen fully resets the game
- [ ] Restart from the lose screen fully resets the game
- [ ] Restarting 3 times in a row still works

### Pause and quit
- [ ] Pause stops everything
- [ ] Resume continues correctly
- [ ] The player can quit to the title screen
- [ ] The player can close the game

### Stability
- [ ] A full 10-minute session has no crash or freeze
- [ ] The game stays smooth the whole time (no long stutters)
- [ ] Played in the Unity editor, a full run shows zero Console errors

### Housekeeping
- [ ] README controls match the game
- [ ] ASSETS.md lists every asset
- [ ] Every Fix-now playtest item is closed
```

If a line fails, fix it and re-run the **whole** section it belongs to, not only that line.
