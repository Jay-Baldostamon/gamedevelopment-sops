# Rubrics

Pass/fail scorecards for the gate days in Level 1.

Every line is Yes or No. No "mostly". **Pass means every line is Yes.** One No means fix it and re-score.

Score what the evidence shows, not what the day's note says. You may score your own work, but a reviewer must be able to reach the same result from the evidence alone. If they cannot, the gate is not passed.

Sign-off line to paste under every rubric:

```
Scored by: <name> — Date: YYYY-MM-DD — Result: PASS / NOT YET
```

---

## Day 3 — Pitch Scope Check

- [ ] The pitch fits on one page
- [ ] It names the one main thing the player does (the player action)
- [ ] It describes the core loop in three steps or fewer
- [ ] It says how you win and how you lose
- [ ] A full playthrough would take 10 minutes or less
- [ ] It has one level or arena only
- [ ] It uses none of: multiplayer, mobile, open world, save system, extra game modes
- [ ] After reading it once, someone else can explain the core loop back correctly

## Day 5 — C# Literacy (gate)

- [ ] The script is from the game and the explained section is 50–100 lines
- [ ] The video is 30 minutes or less and shows the code in VS Code
- [ ] Every line is explained in the author's own words, not read aloud from an AI explanation
- [ ] `Awake`/`Start`, `Update` and `FixedUpdate` are explained correctly wherever they appear
- [ ] Each variable's contents are explained, including which ones appear in the Inspector
- [ ] At least one `if` condition is explained, including what happens on each side
- [ ] The written line-by-line document matches the video
- [ ] Asked "what happens if you change this number?", the prediction was written before testing and the GIF shows the result

## Day 10 — Prototype and Recovery Drill (gate)

- [ ] The game enters Play mode with zero Console errors
- [ ] The core loop from the Day 3 pitch plays from start to an end state
- [ ] Everything on the Day 8 Must-Have list is in the game
- [ ] The commit history shows 5 or more commits with messages that say what changed
- [ ] Evidence shows the broken state after deleting the main scene or player script and its `.meta`
- [ ] Evidence shows the Git steps used to restore it
- [ ] After restoring, the game plays again (GIF or video)
- [ ] The demo video is posted and is 5 minutes or less

## Day 14 — Ticket Readiness

- [ ] The title says what will change, in plain words
- [ ] The summary explains the player's problem, not only the solution
- [ ] There are 3–6 acceptance criteria
- [ ] Each criterion can be settled by playing the game
- [ ] No criterion uses vague words like "better", "nicer" or "more fun" without saying how you would see it
- [ ] The files or scenes likely to change are listed
- [ ] It says what is not included
- [ ] Someone else could start work from this ticket without asking a question

## Day 15 — Alpha Milestone (gate)

- [ ] A title screen exists and starts the game
- [ ] The core loop is playable
- [ ] A win state exists and the player is told they won
- [ ] A lose state exists and the player is told they lost
- [ ] Restart works from both win and lose without quitting the game
- [ ] Pause works
- [ ] Zero Console errors during a full playthrough
- [ ] At least one ticket → branch → pull request → review → merge chain is fully linked
- [ ] The demo video is posted and is 5 minutes or less

## Day 18 — Beta Milestone (gate)

- [ ] The QA checklist from [Playtest and QA Templates](Playtest%20and%20QA%20Templates.md) is fully green
- [ ] Every Fix-now playtest item is closed
- [ ] Every remaining playtest item is marked Post-launch or Won't fix
- [ ] A Windows build runs on a second machine or profile
- [ ] No new features were added after the Day 17 pull request
- [ ] `ASSETS.md` lists every asset in the game

## Day 20 — Ship (gate)

- [ ] The repository has a `v1.0` tag
- [ ] A release named `v1.0` has the Windows build attached as a zip
- [ ] That zip was installed and played start to finish
- [ ] Release notes say what the game is, the controls and the known issues
- [ ] A gameplay video of 2 minutes or less is posted
- [ ] The post-launch list exists as repository issues
- [ ] The retrospective is posted
