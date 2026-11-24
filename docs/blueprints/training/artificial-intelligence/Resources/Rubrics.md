# Rubrics

Pass/fail scorecards for the gate days in Level 1 and Level 2.

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

## Day 25 — Review Modes (gate)

- [ ] Hermes launches locally and both `github-code-review` and `engineering-sops-pr-review` load in a fresh session
- [ ] The interactive review required explicit approval at every checkpoint before the next step
- [ ] The inform-only review made no working-tree, commit, push, branch, review, CI, permission, or merge change
- [ ] The gap-resolve review changed only verified acceptance-criteria gaps and pushed only after Unity validation passed
- [ ] Every review tied its findings to a linked requirement, the diff, or real Unity Play Mode and Console results
- [ ] No finding was accepted without reproducing it
- [ ] The installed skills were unchanged and no GitHub review was submitted
- [ ] No pull request was merged or self-approved

## Day 30 — Handoff Readiness (gate)

- [ ] The issue, its comments, and the repository source are readable, and comment access is confirmed or blocked explicitly
- [ ] `engineering-sops-issue-development-handoff` loads in a fresh session with a valid Dedup/Overlap Preflight
- [ ] One handoff is grounded in the issue body, with clarification gaps listed instead of invented
- [ ] The Dedup/Overlap classification and confirmed base branch are recorded
- [ ] The embedded prompt requires click-by-click Unity editor steps and Play Mode acceptance checks
- [ ] At most one comment was posted and its URL is verified
- [ ] The issue body and repository code are unchanged
- [ ] The plan-only dry run left `git status` identical and created no branch, commit, pull request, comment, label, or Project change

## Day 35 — Delivery and Review (gate)

- [ ] Delivery started only from a valid Week 6 handoff
- [ ] Every change maps to an issue acceptance criterion, and the dedup classification chose the base
- [ ] Unity Play Mode validation ran on the delivered branch and the real result, including Console state, is recorded
- [ ] The pull request contains `Closes #<issue-number>` and an explicit review request
- [ ] Project status is verified as `For Review`, or the exact blocker is reported
- [ ] The prescribed AI review ran and its verdict is backed by requirements, diff, or validation evidence
- [ ] Every blocking finding was verified, and blocked checks are reported as blocked
- [ ] No review was submitted, no approval was recorded, and the pull request is unmerged

## Day 40 — Level 2 Capstone (gate)

- [ ] The task issue was authored by someone else and states requirements and acceptance criteria
- [ ] Exactly one non-duplicate handoff was posted and used
- [ ] Delivery stayed inside scope and every acceptance criterion has a stated result
- [ ] Unity validation evidence is real and includes Console state
- [ ] The pull request is linked, review was requested, and `For Review` is verified or its blocker is reported
- [ ] The AI review verdict and findings are evidence-backed and were not submitted as a review
- [ ] Blocked checks are reported as blocked
- [ ] The final reviewer satisfies the accountability rule: another EM when the initiator is an EM
- [ ] The packet names the exact final decision needed
- [ ] Nothing was merged or self-approved
