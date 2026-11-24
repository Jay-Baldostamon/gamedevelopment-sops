# Tools-Only 80-Day Learning Plan

This is the active learning plan. It keeps the 80-day progression while replacing activities that require software outside the learner's approved tools.

## Approved Tools and Boundaries

For all levels, use:

1. **Unity Game Engine** for the game, scenes, scripts in Play Mode, and in-editor checks.
2. **GitHub Copilot AI** inside either **VS Code** or **Visual Studio Community** for code assistance.
3. **Gemini AI** for planning, explanation, comparison, and review.

**Level 1 additions (Days 1–20 only):**

- **Google AI Studio Apps** on Days 2–3, for the throwaway browser prototype used for prompt practice and the pitch.
- **Git, Git LFS and GitHub Desktop** with one **private GitHub repository** from Day 6, for saving, branching, recovering and reviewing the game.

Level 1 uses no project boards, CI pipelines, automated agents, messaging tools or cloud services. Issue tracking stays inside the game repository and covers only task tickets and playtest findings.

**Level 2 exception (Days 21–40 only):** The L2 curriculum also uses the local **Hermes Agent** and its named Engineering SOPs skills. Use GitHub and the authenticated GitHub CLI (`gh`) only for the access, issue, review, handoff, and pull-request workflows explicitly required by the L2 lessons. Use official Hermes documentation for Hermes setup. Do not install or rely on other software or services for these exercises.

Hermes and GitHub actions must stay within the assigned, authorized repository and task. Use least-privilege access; perform sign-in yourself without sharing credentials. Follow each lesson's interaction mode: interactive requires approval at its checkpoints, inform-only and dry-run modes make no mutations, and automated writes are allowed only for explicitly authorized tasks under the relevant skill. Never merge, self-approve, bypass CI, alter permissions, or expose secrets. Outside Level 2, the Hermes allowance and the `gh` CLI exception do not apply; Level 1's repository access stops at its own game repo, with no command-line GitHub automation.

Work in the existing Unity project, or create one only through a project-creation flow already available in Unity. Do not add Unity packages for this curriculum; use Play Mode and existing project checks. Keep planning notes and checklists in Markdown files edited in the chosen IDE. Never paste passwords, access tokens, private keys, personal data, or confidential project material into an AI.

## How to use this plan

- Complete one numbered day at a time, in order. The whole 80 days use one Unity project.
- In the IDE, ask Copilot for code help and inspect every suggested change yourself. Use Gemini to plan, explain, challenge assumptions, or review selected non-sensitive snippets.
- Use Unity to make scene and asset changes, run the game in Play Mode, and inspect its Console and built-in tools.
- Keep each day's evidence with its stated output. Before Day 6 that is your project folder; from Day 6 it is the game repository: commits for code, branches for work in progress, and GIFs or notes in the ticket or pull request the day names. No separate reports or supervisor sign-offs are required.
- If an exercise asks for a capability outside the approved tools, skip that capability and complete the stated local alternative. Do not add software.

## Level 1 — Foundations (Days 1–20)

### Entry expectations and safe practice

L1 introduces AI-assisted game development to someone who can already build a small 2D or 3D game. It is not a Unity beginner course. You finish with one small game, released internally as v1.0.

**Pre-flight (finish before Day 1).** Nothing in it teaches a skill; it removes the blockers that would otherwise eat Day 4. Do not start Day 1 with an item below unchecked.

- Company email works, and Gemini and Google AI Studio Apps open with it.
- Unity Hub installed and signed in, the studio's pinned Unity LTS version installed with **Windows Build Support**, and the license activated.
- VS Code installed with the Unity extension and your AI assistant signed in. In Unity, External Script Editor is set to VS Code.
- Git (`git --version`), Git LFS (`git lfs version`) and GitHub Desktop installed; a GitHub account that can create a private repository.
- A screen recorder that produces video and GIFs.
- At least 40 GB free disk space, and the project folder is **not** inside Google Drive, OneDrive or Dropbox — sync tools corrupt Unity projects.

**One game.** The game you pitch on Day 3 is the same game through Day 20. Do not switch games after the pitch is locked.

**Scope rules (apply through Day 20).** A full playthrough takes 10 minutes or less. One level or arena. Windows PC, keyboard and mouse. Not allowed: multiplayer, mobile, open world, save systems, or more than one game mode. It must be fun with plain shapes; if the idea needs great art to work, pick another idea.

**AI writes, you wire.** AI can write C# but cannot click inside the Unity editor. A Unity game is half code and half editor setup: objects in a scene, components on them, values in boxes, references dragged into slots. Every request for Unity work ends with: "Then give me click-by-click steps for everything I need to do in the Unity editor, including which object to select, which component to add, and what to drag into each field."

**Plain shapes first.** No imported art, models, sound or music until after Day 10. Color, materials, simple particles and camera movement are allowed from Day 9. Every asset that enters the repository later gets a row in `ASSETS.md`: file, who or what made it, date.

**Evidence, not claims.** Each day ends with its stated output. Before Day 6 keep the output in your project folder; from Day 6 keep it with the game: commits for code, branches for work in progress, GIFs and notes in the issue or PR that the day names. AI agreement is not evidence. Play the build, read the Console, and record what actually happened. A game counts as working only when a person has played it.

**Gates.** Days 3, 5, 10, 14, 15, 18 and 20 are gates. Score them with the criteria published in [Rubrics](Resources/Rubrics.md). You may score your own work, but the evidence must let a reviewer reach the same conclusion without asking you anything. If it does not, the gate is not passed.

**Milestones.** Pitch (Day 3), Prototype (Day 10), Alpha (Day 15), Beta (Day 18), v1.0 (Day 20).

### AI collaboration habit

Choose the interaction to fit the problem, not to maximize AI use:

- **Copilot inline completion:** a small, predictable code edit whose intent you already understand. Read the suggestion before accepting it.
- **Copilot Chat in the IDE:** an explanation, investigation, or bounded change that needs selected code context. Request a plan or explanation before edits when the cause or scope is unclear.
- **Gemini:** a behavior specification, alternative plan, or skeptical review using only the non-sensitive context you provide. It cannot see your project, scene or Inspector; explicitly label missing context.
- **Direct Unity action without AI:** a familiar scene or Inspector edit you already know how to make. AI is optional here; Unity still verifies the result.

If inline completion is unavailable, use Copilot Chat for the same small suggestion and inspect it before applying it; do not install another tool.

Use the smallest relevant non-sensitive code slice plus the call site or Inspector facts needed to answer the question. Do not paste the whole project or ask AI to guess missing objects, APIs, or settings. For confidential material, use a disposable non-sensitive example rather than the original.

Reuse this short prompt structure, omitting fields that do not apply:

```text
Goal: one behavior or question.
Context: relevant code and observed scene/Inspector facts.
Expected / actual: inputs and behavior, plus relevant Console evidence.
Constraints: existing Editor/input approach; no new packages or unrelated changes.
Request: explanation, hypotheses, plan, review, or a bounded suggestion.
Editor steps: click-by-click steps for anything I must wire in Unity.
Unknowns and check: ask for missing facts; state what I will inspect or run in Unity.
```

Before accepting a change, compare it with the requested scope and explain it yourself. After applying it, save and check normal, boundary, and adjacent behavior in Unity. Keep the useful prompt and decision with the day's output; do not create a separate report.

### Week 1 — AI fluency and Unity entry

Milestone this week: **Pitch** (Day 3) — one page plus a browser prototype of the core loop. Days 1–3 are shared AI discipline; Days 4–5 put the pitch into Unity and prove you can read the code.

#### Day 1 — Exposure: game ideas
**Objective:** Get comfortable talking with AI, using games as the topic, and start the habit of keeping evidence.

**Preparation:** Pre-flight complete, and Gemini opens with your company email.

##### Phase 1 — Set up
1. Log in to [Gemini](https://gemini.google.com/app) with your company email.
2. Create a `Day 1` folder in your workspace for today's evidence.

##### Phase 2 — Run five threads
1. Create five separate chats, one topic each:
   - **A game you love.** Ask why it is fun, push back on the answer, and ask what the one core thing the player does is.
   - **Mechanics.** Ask for 10 simple mechanics, pick one, then ask how it could be twisted into something new.
   - **Small games.** Ask what makes a game finishable in 10 minutes still feel complete.
   - **Game feel.** Ask what "juice" or game feel means and how a plain game becomes satisfying.
   - **Your ideas.** Give three rough game ideas and ask which is smallest to build and why.
2. Send at least five prompts in each chat.
3. Push back at least once per thread: "why?", "what is the downside?", "give me a smaller version".
4. Do not pick your Day 3 game today. Day 1 is exposure, not selection.

##### Phase 3 — Capture evidence
1. For each thread, screenshot your first prompt and the final answer.
2. Write one line per thread: what the answer gave you and what it missed.

##### Phase 4 — Keep moving when blocked
1. State the topic, what you finished, and ask for the next step: "Today I am learning to work with AI so I can build a Unity game. I have finished five chats about game ideas and mechanics. What should I practise next?"

**Deliverables:** five threads, ten screenshots, and five gap notes.
- [ ] I opened Gemini with my company email.
- [ ] Five separate chats exist, one topic each.
- [ ] Each chat has at least five of my prompts and five AI answers.
- [ ] I pushed back at least once in every chat.
- [ ] Each chat has a first-prompt screenshot, a final-answer screenshot, and a one-line gap note.
- [ ] I did not choose my Day 3 game yet.

#### Day 2 — Prompt engineering: tiny browser game
**Objective:** Train prompt engineering by building a tiny browser game, focusing on iteration quality and expected-versus-actual analysis.

**Preparation:** Day 1 complete, and Google AI Studio Apps opens in your browser.

##### Phase 1 — Build the game with prompts
1. Open [Google AI Studio Apps](https://aistudio.google.com/apps).
2. Build this game with prompts only: "The player moves left and right along the bottom of the screen. Good and bad objects fall from the top. Catching a good object adds a point. Touching a bad object costs a life. Three lives. The game shows score and lives, ends at zero lives, and can be restarted."
3. Run at least eight prompt cycles. A cycle is: prompt, play the result, note what is wrong, prompt again.

##### Phase 2 — Record what the prompts did
1. Keep a numbered prompt log of every prompt in order.
2. Write your pain points: what repeatedly broke or was hard to control.
3. Write a what's-missing list with at least five entries in the form `Prompt #4: expected X, got Y`.
4. Capture a GIF or screenshot of the game being played.

##### Phase 3 — Reflect with Gemini
1. Paste the pain points and gaps into Gemini and ask what caused them and how the weak prompts should be rewritten.
2. Write your three prompting rules for tomorrow in your own words.

**Deliverables:** the prototype, the prompt log, the pain points, five expected-versus-actual entries, the reflection, three rules, and game evidence.
- [ ] The game runs in AI Studio Apps.
- [ ] I completed at least eight prompt cycles and played the result after each one.
- [ ] The prompt log lists every prompt in order.
- [ ] The what's-missing list has at least five "expected X, got Y" entries.
- [ ] Pain points are written down.
- [ ] The Gemini reflection is saved.
- [ ] Three prompting rules are written in my own words.

#### Day 3 — Decomposition: your game pitch
**Objective:** Turn a game idea into a one-page pitch, then into buildable steps and a playable browser prototype.

**Scope rules for the rest of L1:** a full playthrough takes 10 minutes or less; one level or arena; Windows PC, keyboard and mouse; not allowed — multiplayer, mobile, open world, save systems, extra game modes; the game must be fun with plain shapes.

##### Phase 1 — Choose the idea (timeboxed)
1. Choose your idea inside a four-hour limit. If you reach four hours, take the smallest idea on your list.
2. Check the idea against the scope rules before writing anything.

##### Phase 2 — Write the one-page pitch
1. Fill every heading: one line; player action (one verb); core loop (three steps or fewer); win; lose; why it is fun; 10-minute scope; not in this game (three things); view (2D top-down, 2D side-on, 3D third-person, 3D first-person).
2. Break only the core loop into four to eight numbered build steps.

##### Phase 3 — Prototype the core loop
1. Write the initial prompt using your Day 2 rules.
2. Build the core loop in AI Studio with plain shapes. Stop when you can answer: "Is the core loop fun for 60 seconds?"
3. If it is not fun, change the pitch now. After today the game is locked for Day 20.
4. Record a walkthrough of 15 minutes or less: read the pitch, play the prototype, say what works and what does not.

##### Phase 4 — Scope check
1. Ask someone to read the pitch once and explain the core loop back to you. If they cannot, rewrite the pitch.

**Deliverables:** the locked game, the pitch, the build steps, the initial prompt, a GIF of the prototype, and the walkthrough link.
- [ ] The pitch fits on one page and every heading is filled.
- [ ] It names one player action, a core loop of three steps or fewer, and how I win and lose.
- [ ] A playthrough would take 10 minutes or less in one level or arena.
- [ ] It uses none of: multiplayer, mobile, open world, save systems, extra game modes.
- [ ] The core loop is playable in a plain-shape browser prototype and is fun for 60 seconds.
- [ ] After one read, someone else explains the core loop back correctly.
- [ ] The game is locked for the rest of L1.

#### Day 4 — Unity setup and debugging
**Objective:** Get the pitch's core mechanic running in Unity, and learn to debug it with AI instead of guessing.

**Preparation:** Pre-flight installs done, the project folder outside any synced drive, and a screen recorder ready.

**Rule for today and every day after:** AI writes, you wire. End every request for Unity work with "Then give me click-by-click steps for everything I need to do in the Unity editor, including which object to select, which component to add, and what to drag into each field."

##### Phase 1 — Create the project
1. Unity Hub, new project on the pinned LTS version, with the template that matches your pitch view (Universal 2D or Universal 3D). Save it outside Google Drive, OneDrive and Dropbox.
2. Press Play on the empty scene and stop, which proves the install works.

##### Phase 2 — Learn the editor
1. Screenshot the editor and ask AI to label each panel.
2. Write in your own words what you use each of these six for: Hierarchy, Scene view, Game view, Inspector, Project, Console. Dock the Console where you can always see it.
3. Create a test C# script from the Project panel, confirm it opens in VS Code, then delete it inside Unity.

##### Phase 3 — Rebuild the core loop
1. Work one step per prompt: ask for the code and the editor steps, wire it yourself, press Play, check the Console, then take the next step.
2. Use plain shapes only: squares, circles, cubes, spheres.

##### Phase 4 — Debug in a fixed order
1. For your first three errors: copy the full Console message with file and line.
2. Ask "What details should I give you to help debug this Unity error?" before asking for the fix.
3. Give that context, apply the fix, and log a row: error, where it showed, root cause, prompt used, fix applied, status.
4. If something does not happen and the Console is empty, treat it as a wiring problem: script not attached, slot left empty, collider missing.
5. Play the core loop with zero red Console errors and save the scene.

**Deliverables:** the project, the six-panel note, the debug log with three entries, a GIF of the core loop, and a clean Console screenshot.
- [ ] The project runs the pinned Unity version with the template that matches my pitch.
- [ ] I can name the six editor panels and what each one is for.
- [ ] Scripts open in VS Code from Unity.
- [ ] The core loop from my pitch plays, built one step at a time with plain shapes.
- [ ] Every Unity request asked for click-by-click editor steps.
- [ ] The debug log has at least three entries with cause, prompt and fix.
- [ ] Play mode shows zero Console errors and the scene is saved.

#### Day 5 — C# literacy
**Objective:** Prove you understand the code AI wrote for you, because code you cannot read is code you cannot debug or review.

**Gate:** blocking. You do not start Week 2 until this passes.

**Preparation:** Day 4 project running, VS Code opening your scripts, and a recorder with a microphone.

##### Phase 1 — Select the scope
1. Pick one script from your game, usually the player controller.
2. Pick one continuous 50–100 line section. Do not chase other scripts.

##### Phase 2 — Study it until you can answer
1. Which object is the script attached to?
2. Which fields show in the Inspector (`public`, `[SerializeField]`)?
3. When do `Awake`/`Start`, `Update`, `FixedUpdate` and `OnTriggerEnter` run, where they appear?
4. What does each variable hold?
5. What does each `if` decide on both sides?
6. Why is it written that way, such as `Time.deltaTime`, or movement in `FixedUpdate` but input in `Update`?

##### Phase 3 — Write and record
1. Write the supporting document, one entry per line: `Line <n> | <code> | <what it does and why>`.
2. Record 30 minutes or less in VS Code code view only, in your own words. Start by naming the script, the object it is attached to, and its Inspector fields.
3. Do not show gameplay, and do not read an AI explanation aloud.

##### Phase 4 — Test your understanding
1. Change one number. Write your prediction before testing it.
2. Post the prediction and a GIF of what happened.
3. Score yourself against `Resources/Rubrics.md` → Day 5. Any No means repeating the day with a new recording before Day 6.

##### Phase 5 — Record demo 1
1. Record a gameplay video of five minutes or less that states your one-line pitch and plays the core mechanic.

**Deliverables:** the scope, the line-by-line document, the video link, the prediction and its GIF, demo 1, and the rubric result.
- [ ] The script is from my game and the explained section is 50–100 lines.
- [ ] The video is 30 minutes or less and shows code only, in my own words.
- [ ] I explained when `Awake`/`Start`, `Update` and `FixedUpdate` run.
- [ ] I explained what each variable holds and which ones show in the Inspector.
- [ ] I explained at least one `if` and what happens on both sides.
- [ ] The line-by-line document matches the video.
- [ ] The prediction was written before testing and the GIF shows the result.
- [ ] Demo 1 is posted and is five minutes or less.

### Week 2 — Prototype ownership and scope control

Milestone this week: **Prototype** (Day 10) — the core loop playable from start to an end state in plain shapes, and proven recoverable.

#### Day 6 — Game repo setup
**Objective:** Put the game on GitHub safely, keep it private, and write the first project documentation.

**Preparation:** Day 5 passed, and Git, Git LFS and GitHub Desktop installed.

**Continuity rule:** the repository holds the same game from Day 3 and Day 4. Do not start a new project.

##### Phase 1 — Prepare Unity
1. Set Asset Serialization to **Force Text** (Project Settings, Editor) and Version Control to **Visible Meta Files** (Project Settings, Version Control).
2. Save the scene and the project, then close Unity.

##### Phase 2 — Create the repository
1. In GitHub Desktop, add the folder that contains `Assets` as a local repository.
2. Create it with the Unity `.gitignore`.

##### Phase 3 — Set up Git LFS
1. Run `git lfs install`.
2. Add the `.gitattributes` rules from `Resources/Unity Repo Checklist.md`.
3. In Changes, confirm `Assets`, `Packages`, `ProjectSettings`, `.gitignore` and `.gitattributes` are listed while `Library`, `Temp`, `Logs` and `UserSettings` are not.
4. If `Library` is listed, fix the ignore before committing.

##### Phase 4 — First commit and documentation
1. Commit `chore: initial Unity project with core mechanic`.
2. Publish the repository as **private**.
3. Write `README.md` with the game name, one-line pitch, Unity version, how to open and play, controls and current status.
4. Write `ASSETS.md` with file, made by and date columns, then commit `docs: add README and asset log`.

##### Phase 5 — Prove the workflow
1. Make one small scene change and commit it.
2. On GitHub, check the scene diff is readable text rather than "binary file", which proves Force Text is on.
3. Write a findings note with one practical line per repository tab: Code, Issues, Pull requests, Actions, Projects, Security, Insights, Settings.

**Deliverables:** the private repo link, three commits, the readable scene diff, `README.md`, `ASSETS.md`, and the tab findings.
- [ ] Asset Serialization is Force Text and Version Control is Visible Meta Files.
- [ ] The repo is private and uses the Unity `.gitignore`.
- [ ] `.gitattributes` with the LFS rules is committed.
- [ ] `Library` does not appear on GitHub.
- [ ] `README.md` has all six parts and its controls are correct.
- [ ] `ASSETS.md` exists.
- [ ] Three commits are pushed and a scene change shows as readable text.
- [ ] The repository-tab findings note is saved.

#### Day 7 — Six mechanic upgrades
**Objective:** Grow the game in controlled steps: one upgrade per branch, tested and merged before the next one.

**Preparation:** Day 6 complete, the project opens with zero Console errors, and GitHub Desktop is signed in.

##### Phase 1 — Plan the six
1. List six upgrades, each one new mechanic or one improvement a player would notice: an enemy or obstacle type, a pickup, a score counter, difficulty that ramps, a second ability, a timer, a hazard.
2. Each must be buildable and testable in about an hour, plain shapes only.
3. Ask AI which is biggest and which could be split, then order the list from safest to riskiest and save it before building.

##### Phase 2 — Build one upgrade per branch
1. Repeat this loop six times: switch to `main` and fetch; create `feature/day7-upgrade-N-<short-name>`; prompt for that one upgrade and demand the editor steps; wire it; play the new upgrade and everything before it; check the Console; fix errors; record a GIF; commit `feat: <what changed>`; merge into `main`; play once more on `main`.

##### Phase 3 — Document and stabilise
1. Record one row per upgrade: branch, what changed, why it adds something for the player, evidence and status.
2. On `main` with all six merged, play at least three minutes using every upgrade.
3. Fix every red Console error and read every warning once.

**Deliverables:** six merged branches, six GIFs, six documentation rows, and a clean three-minute run.
- [ ] Six upgrades are planned, ordered and saved before building.
- [ ] Six `feature/day7-upgrade-*` branches were created and pushed.
- [ ] Each upgrade was tested against the earlier mechanics before merging.
- [ ] Each upgrade was merged into `main` before the next one began.
- [ ] Six documentation rows exist, each with a GIF.
- [ ] Three minutes of play on `main` shows zero Console errors.

#### Day 8 — Find the fun
**Objective:** Decide what the game actually needs, and cut something, before more features pile on.

**Preparation:** Day 7 complete with six upgrades merged, and your Day 3 pitch at hand.

##### Phase 1 — Play and notice
1. Play your game for ten minutes straight. Note the most engaged moment, the most bored moment, and any upgrade you had forgotten was there.
2. Ask someone to play for five minutes while you watch in silence. Note what they did first, where they leaned in and where they got lost. Do not explain anything.

##### Phase 2 — Inventory the upgrades
1. For each of the six: what it adds, whether it appeared in the fun moments, and what risk or cost it carries.

##### Phase 3 — Define the purpose
1. Write: "This game exists to make the player feel ___ by ___."
2. Note whether it changed since Day 3 and why.

##### Phase 4 — Categorise and cut
1. Sort every upgrade into Must-Have or Nice-to-Have with a one-line reason. No maybe pile.
2. At least one must be Nice-to-Have, or the purpose is too broad.
3. Remove or park at least one Nice-to-Have on branch `chore/day8-cuts` and merge it.
4. Play for three minutes and write one line on whether the cut made the game better, worse or the same, and why.

**Deliverables:** both play notes, the core purpose, the sorted lists with reasons, the cut, and the after-cut line.
- [ ] I played for ten minutes and noted my high and low moments.
- [ ] Someone played for five minutes while I watched in silence, and I saved those notes.
- [ ] All six upgrades are inventoried.
- [ ] The core purpose is written in the required format.
- [ ] Every upgrade is Must-Have or Nice-to-Have with a one-line reason.
- [ ] At least one upgrade is Nice-to-Have.
- [ ] At least one Nice-to-Have was removed or parked on a branch and merged.
- [ ] The after-cut line is written.

#### Day 9 — Rules versus game feel
**Objective:** Keep what the game does separate from how it looks and reacts, so a change can never be blamed on the wrong cause.

**Rules** are speeds, scores, damage, spawn timing, win and lose conditions. **Feel** is colours, materials, particles, camera movement and screen shake. Changed in one prompt, you cannot tell which change broke what.

**Allowed today:** colours, materials, background colour, built-in particles, camera movement and shake, scaling or flashing on hit. **Not until after Day 10:** imported sprites and models, sound, music, menus.

**Preparation:** Day 8 complete, the game plays on `main` with zero Console errors, and `ASSETS.md` exists.

##### Phase 1 — Lock the baseline
1. Record a before GIF and confirm zero Console errors.
2. Write down the tuning numbers: speeds, spawn rate, damage, score per pickup and timers.

##### Phase 2 — Two feel-only looks
1. Branch `feature/day9-feel-a` and prompt feel only: "Change only how the game looks and reacts. Do not change speeds, scores, timings, collisions or win and lose conditions. Give me click-by-click editor steps."
2. Play it, then screenshot the changed-file list, which must contain no rules script.
3. Branch `feature/day9-feel-b` from `main` with a clearly different look and the same checks.
4. Merge the look that fits your core purpose and leave the other unmerged.

##### Phase 3 — One rules-only change
1. Branch `feature/day9-rules-tuning` and ask AI to move the tuning numbers into one ScriptableObject you can edit in the Inspector without touching visuals.
2. Confirm the game feels identical, change one number, record a GIF, and screenshot the changed-file list, which must contain no visuals file.
3. Write five to ten lines on what goes wrong when rules and feel change in one prompt, and whether AI touched a file you told it not to.

##### Phase 4 — Asset request
1. Write the asset request list for your Must-Have features: ten items or fewer, each with size, facing, style and priority (Must or Nice).
2. Add a line to `ASSETS.md` recording the request list and its date.

**Deliverables:** the before GIF, the tuning list, two look GIFs with changed-file screenshots, the tuning-change GIF, the lesson, and the asset list.
- [ ] The before GIF and the tuning list are saved.
- [ ] Look A and Look B are both feel-only, each with a GIF and a changed-file screenshot.
- [ ] One look is merged and the other is left unmerged.
- [ ] The tuning numbers live in one place that is editable in the Inspector.
- [ ] One tuning number was changed, with a GIF and no visuals file touched.
- [ ] I can explain what a ScriptableObject is in my own words.
- [ ] The five-to-ten-line lesson is written.
- [ ] The asset request list has ten items or fewer and is saved.

#### Day 10 — Prototype and recovery drill
**Objective:** Finish the Prototype, then prove you can get it back after it breaks.

**Gate:** blocking. You do not start Week 3 until the restored build passes.

**Preparation:** Day 9 complete, the game pushed to GitHub, and a recorder ready.

##### Phase 1 — Finish the Prototype
1. A Prototype means the core loop plays from start to an end state in plain shapes. Tick every Day 8 Must-Have that is in the game and build what is missing, one branch per item.
2. Make sure the game has an end state (win, lose or time up, shown on screen) and a restart that works without leaving Play mode.

##### Phase 2 — Stabilise
1. On `main`, play five minutes and reach the end state twice.
2. Fix everything until the Console is clean, then set `README.md` to "Day 10: Prototype".
3. Confirm five or more commits with clear messages (`feat: add chasing enemy`, not `update`) and screenshot the history.

##### Phase 3 — Break it on purpose
1. Before breaking anything, confirm GitHub Desktop shows no local changes.
2. Delete your main scene and its `.meta` file, or your player script and its `.meta`.
3. Let Unity reload, then document the broken state: a Unity screenshot, a GitHub Desktop screenshot of the deleted files, and one sentence on how you can tell it is broken.

##### Phase 4 — Recover it
1. Restore both files from Git, using Discard changes in GitHub Desktop or the restore command AI explains before you run it. Do not retype or regenerate them.
2. Play to the end state and record a GIF of it working again.
3. Write two sentences: what Git just did for you, and what would have happened without it.

##### Phase 5 — Demo and score
1. Record demo 2: five minutes or less with the core purpose, the loop to the end state, one Inspector tuning change, and what you cut on Day 8.
2. Score yourself against `Resources/Rubrics.md` → Day 10.

**Deliverables:** the prototype, the commit history, the broken-state evidence, the recovery steps, the working-again GIF, the reflection, and demo 2.
- [ ] Every Day 8 Must-Have is in the game and working.
- [ ] The game reaches an end state and can restart.
- [ ] Five minutes of play shows zero Console errors and `README.md` says "Day 10: Prototype".
- [ ] The commit history shows five or more clear commits.
- [ ] The broken state is documented after deleting a file and its `.meta`.
- [ ] The Git restore steps are documented.
- [ ] The game plays again after restoring, with a GIF.
- [ ] The two-sentence reflection is written.
- [ ] Demo 2 is posted and is five minutes or less.

### Week 3 — Workflow ownership

Milestone this week: **Alpha** (Day 15) — feature complete, with a title screen, play, win, lose and restart.

#### Day 11 — Onboard the build and plan the milestones
**Objective:** Prove you can pick up a repository you did not write and turn it into a dated milestone plan.

**Preparation:** Day 10 passed, and the repo cloned locally.

##### Phase 1 — Read the repository
1. Read `ProjectVersion.txt`, `manifest.json`, the scene list, the scripts and `README.md`.
2. Write what each owns and mark what you cannot explain.

##### Phase 2 — Run a fresh clone
1. Clone the repository into a second folder and get it running using only `README.md`.
2. Fix the README wherever it is wrong or missing a step.

##### Phase 3 — Plan the milestones
1. Write the plan to Day 20 — Alpha on Day 15, Beta on Day 18, v1.0 on Day 20 — and say what each milestone must contain.
2. Map every Day 8 Must-Have to the day it lands, and list what will not make it.

##### Phase 4 — Test feasibility
1. Check the game shell (title, pause, win, lose, restart) for feasibility. Name the scripts, scenes, references and risks.

**Deliverables:** the onboarding map, the fresh-clone run record, the README fixes, the milestone plan, and the feasibility note.
- [ ] I mapped every scene, prefab and script to what it owns, marking unknowns.
- [ ] A fresh clone runs from the README alone, and I fixed every gap I hit.
- [ ] The milestone plan names Pitch, Prototype, Alpha, Beta and v1.0 with their contents.
- [ ] Every Day 8 Must-Have is scheduled to a day, and the cut list is written.
- [ ] The game-shell feasibility note names scripts, scenes, references and risks.

#### Day 12 — First task: the game shell
**Objective:** Deliver one pre-written ticket end to end: ticket, branch, acceptance criteria, pull request.

**Preparation:** Day 11 complete, and the Game Shell Ticket ready in `Resources/Game Shell Ticket.md`.

##### Phase 1 — Start from the ticket
1. Paste the Game Shell Ticket into your repository as a task ticket, replacing `<your game>`, and ask AI for a plan before any code.
2. Branch `feature/day12-game-shell` and capture the before state: the game drops straight into play with no way to restart.

##### Phase 2 — Implement one criterion at a time
1. Implement one acceptance criterion, then press Play.
2. Test restart twice in a row; restart bugs hide behind a value that was never reset.
3. Run the full path — title, play, lose, restart, play, win, title — with zero Console errors.

##### Phase 3 — Submit
1. Commit, push, and open a pull request that links the ticket.
2. Post one GIF per acceptance criterion.

**Deliverables:** the ticket, the plan, the pull request, seven labelled GIFs, and a clean Console screenshot.
- [ ] The Game Shell Ticket is in the repo with every acceptance criterion.
- [ ] AI produced a plan before any code was written.
- [ ] Each acceptance criterion was implemented and played in turn.
- [ ] Restart was tested twice in a row.
- [ ] The full title, play, lose, restart, play, win, title path shows zero Console errors.
- [ ] The pull request links to the ticket and carries one GIF per criterion.

#### Day 13 — Review a change you did not write
**Objective:** Run a review that separates real defects from opinions, with evidence for every finding.

**Preparation:** Day 12 complete with an open pull request, or an earlier commit you can review as if a stranger wrote it.

##### Phase 1 — Set the standard
1. Read the ticket first and turn its acceptance criteria into a checklist.

##### Phase 2 — Find findings
1. Read the diff without running it and list only defects or acceptance-criteria gaps, each with the evidence that supports it.

##### Phase 3 — Verify and fix
1. Check every claim in the editor and in Play mode, and reject anything you cannot reproduce.
2. Fix only the verified ones on a branch and re-run the criteria.

##### Phase 4 — State the verdict
1. Leave findings with file and line references.
2. Write the verdict: approved, approved with fixes, or changes requested.

**Deliverables:** the criteria checklist, the findings with verdicts, the fixes, the re-run, and the verdict.
- [ ] I turned the ticket's acceptance criteria into a checklist.
- [ ] Findings are limited to defects and acceptance-criteria gaps, each with evidence.
- [ ] Every finding was checked in the editor and Play mode and marked verified or rejected.
- [ ] Only verified findings were fixed, on a branch.
- [ ] The criteria were re-run after the fixes.
- [ ] A verdict is written: approved, approved with fixes, or changes requested.

#### Day 14 — Producer request to ticket
**Objective:** Turn a vague request into a ticket someone else could start without asking a question.

**Preparation:** Day 13 complete, and a request to work from in `Resources/Producer Request Cards.md`.

##### Phase 1 — Take the request
1. Take one vague request about your game: use a producer card, or have someone play and say what felt wrong.
2. Ask up to three questions and record the answers the way a player would give them, not the way a developer would.

##### Phase 2 — Write the ticket
1. Ask AI to interview you before it writes anything, and do not let it invent facts.
2. Write the ticket: title, summary of the player's problem, three to six acceptance criteria, the files likely to change, and what is not included.

##### Phase 3 — Check it
1. Confirm each criterion names an observable behaviour and a case.
2. Check it against the Day 14 rubric: plain title, problem before solution, checkable criteria, no vague words, one day of work, no new game mode.

**Deliverables:** the request, the three questions and answers, the ticket, and the rubric check.
- [ ] The request came from someone else or from a producer card, not from me.
- [ ] Up to three questions were asked and answered the way a player would answer.
- [ ] The ticket has a plain title, the player's problem, 3 to 6 criteria, the files and the exclusions.
- [ ] Every criterion can be settled by playing the game.
- [ ] No criterion uses vague words without saying how you would see it.
- [ ] The Day 14 rubric passes.

#### Day 15 — End-to-end delivery to Alpha
**Objective:** Deliver your own ticket and finish Alpha: title, play, win, lose, restart, pause.

**Gate:** blocking. Alpha is accepted only when every criterion and the regression pass are clean.

**Preparation:** Day 14 complete with an accepted ticket.

##### Phase 1 — Deliver the ticket
1. Branch, plan first, and implement one acceptance criterion at a time.

##### Phase 2 — Complete Alpha
1. A title screen starts the game.
2. The core loop is playable, with a win state, a lose state, restart from both, and pause.
3. A full run shows zero Console errors.

##### Phase 3 — Regress and submit
1. Run the regression list: every Day 8 Must-Have and every Day 7 upgrade still works.
2. Open one pull request that links the ticket and post evidence per acceptance criterion.
3. Record demo 3: five minutes or less, ticket to result, plus the regression pass.

**Deliverables:** the pull request, the Alpha checklist, the regression results, and demo 3.
- [ ] The ticket was delivered on a branch with a plan before code.
- [ ] Alpha has a title screen, play, win, lose, restart from both, and pause.
- [ ] A full run shows zero Console errors.
- [ ] The regression pass covers every Day 7 upgrade and every Day 8 Must-Have.
- [ ] One pull request links the ticket and carries evidence per criterion.
- [ ] Demo 3 is posted and is five minutes or less.

### Week 4 — Playtest, polish and ship

Milestone this week: **Beta** (Day 18) and **v1.0** (Day 20) — content complete with a green QA checklist, then released internally.

#### Day 16 — Playtest swap
**Objective:** Find out what a new player actually experiences, and file it as evidence instead of opinions.

**Preparation:** Day 15 passed, a build that runs, and screen recording on.

##### Phase 1 — Play a build you did not write
1. Play for 20 minutes with the recording on. With no teammate, play your own build on a machine or profile you have not used, after a day away, and treat it as new.
2. Do not ask how anything works. Confusion is the data.

##### Phase 2 — File findings
1. File at least five findings with the playtest template in `Resources/Playtest and QA Templates.md`, one problem each, with type, severity and evidence.
2. At least one finding must be something you liked, typed as Idea.

##### Phase 3 — Triage what you received
1. Ask the other player to file findings on your build; with no other player, file them against your own build from the recording and mark them self-observed.
2. Sort everything you received into Fix now, Post-launch or Won't fix, with exactly one decision per item.

**Deliverables:** five filed findings with evidence, the findings you received, and the triage table.
- [ ] I played a build I did not write for 20 minutes with the recording on.
- [ ] At least five findings are filed with type, severity and evidence.
- [ ] At least one finding is something I liked, typed as Idea.
- [ ] Everything I received is triaged into Fix now, Post-launch or Won't fix.
- [ ] Every blocker is on the Fix-now list.

#### Day 17 — Playtest fixes and juice
**Objective:** Close the playtest problems that matter and add feedback where the game felt flat, without touching the rules for feel's sake.

**Preparation:** Day 16 complete with a triage table.

##### Phase 1 — Fix what matters
1. Take the Fix-now list: at most five items, and every blocker included.
2. Branch `fix/day17-playtest`, ask AI for a plan first, and fix one item per commit with its evidence.

##### Phase 2 — Add juice
1. Add juice for the findings that said it felt flat: hit flash, screen shake, particle pop, or a number popup.
2. Keep rules and feel in separate commits.

##### Phase 3 — Prove and submit
1. Re-check each fixed item against its finding and record the before and after GIF.
2. Open a pull request, and mark the Post-launch items as the Level 2 backlog.
3. Freeze features after this pull request: no new features between here and v1.0.

**Deliverables:** the fixes, the juice changes, the before-and-after evidence, the pull request, and the post-launch list.
- [ ] The Fix-now list has at most five items and every blocker.
- [ ] Each fix is its own commit with evidence.
- [ ] Juice changes are in separate commits from rules changes.
- [ ] Before-and-after evidence exists for every fixed item.
- [ ] A pull request is open and the post-launch list is saved.
- [ ] The feature freeze is in place.

#### Day 18 — Review 2 and the QA pass
**Objective:** Move from "it works for me" to Beta: a Windows build that passes a full QA checklist.

**Gate:** blocking. Beta passes only with a fully green QA checklist on a Windows build.

**Preparation:** Day 17 pull request open, and a Windows build target configured.

##### Phase 1 — Review the pull request
1. Review your Day 17 pull request against its ticket: findings with file and line references, verified in Play mode.

##### Phase 2 — Run the QA pass
1. Build for Windows and run the QA checklist from `Resources/Playtest and QA Templates.md` on the build, not inside the editor.
2. Fix every failing line and re-run the whole section it belongs to, not only that line.

##### Phase 3 — Close out
1. Confirm every Fix-now playtest item is closed and `ASSETS.md` lists every asset.
2. Write the Beta statement: content complete, features frozen, QA green.

**Deliverables:** the review findings, the Windows build, the green QA checklist, and the Beta statement.
- [ ] The Day 17 pull request was reviewed with verified findings.
- [ ] A Windows build was produced.
- [ ] The QA checklist is fully green on that build.
- [ ] Every failing section was re-run after its fix, not only the failing line.
- [ ] Every Fix-now finding is closed.
- [ ] `ASSETS.md` lists every asset and the Beta statement is written.

#### Day 19 — Playtest debrief
**Objective:** Watch a real first-time player and turn what you saw into tasks, not guesses.

**Preparation:** Day 18 passed, a Beta build, and someone who has not seen the game.

##### Phase 1 — Run the session
1. Record a session with someone who has not seen the game. Ask them to play and talk aloud, and do not explain anything.

##### Phase 2 — Capture raw notes
1. Capture hesitation, first actions, quotes and where they stopped.
2. Split every note into problem statement, proposed solution, and evidence.

##### Phase 3 — Write tasks
1. Turn the notes into up to three tasks using a plan-mode prompt that asks for missing details and does not invent facts.
2. Reject any task that is a solution demand without a problem statement.

##### Phase 4 — Set the v1.0 boundary
1. Decide what goes into v1.0 and what goes on the post-launch list.

**Deliverables:** the session notes, the problem-versus-solution table, up to three tasks, and the v1.0 cut line.
- [ ] A session was recorded with someone who had not seen the game.
- [ ] Raw notes capture hesitation, first actions, quotes and where they stopped.
- [ ] Every note is split into problem, proposed solution and evidence.
- [ ] Up to three tasks are written, with missing details requested rather than invented.
- [ ] Solution demands without a problem statement were rejected.
- [ ] The v1.0 cut line is written.

#### Day 20 — Ship v1.0 and retrospective
**Objective:** Release v1.0 internally with a playable build, then grade the training itself.

**Gate:** blocking. L1 exits when the release exists, a build installed from it played start to finish, and the retrospective is posted.

**Preparation:** Day 19 complete with a v1.0 cut line.

##### Phase 1 — Finish the scope
1. Finish the v1.0 scope: only debrief items inside the cut line, each committed separately.

##### Phase 2 — Release
1. Tag `v1.0` and create a release with the Windows build zip attached.
2. Write release notes covering what the game is, the controls and the known issues.

##### Phase 3 — Verify the release
1. Install from the release zip and re-run the QA checklist on that build.
2. Confirm the README controls still match.
3. Record demo 4: two minutes or less, playing the released build.

##### Phase 4 — Retrospective
1. Write five keepers, five upgrades, the day it clicked, the tooling friction, the human-versus-AI balance, and a 1–10 confidence score with reasoning.
2. Write the post-launch list as repository issues.
3. Reuse one effective prompt from your notes, add its context and check, and keep it for the next task.

**Deliverables:** the v1.0 release, the release notes, demo 4, the retrospective, and the post-launch list.
- [ ] The v1.0 scope is finished, with each change in its own commit.
- [ ] A `v1.0` tag and release exist with the Windows zip attached.
- [ ] The release notes cover what the game is, the controls and the known issues.
- [ ] The zip was installed and the QA checklist re-run on that build.
- [ ] Demo 4 is posted and is two minutes or less.
- [ ] The retrospective covers keepers, upgrades, the aha day, friction, AI balance and a reasoned score.
- [ ] The post-launch list exists as repository issues and one reusable prompt is saved.

## Level 2 — Controlled AI-assisted delivery (Days 21–40)

Level 2 adds the Hermes agent and the authenticated GitHub CLI to the tools above. Progress from learning review skills to handoff generation, authorized issue-to-PR delivery, and a final locally verified task. Issue requirements remain authoritative; AI review never replaces independent human review or CI.

### Week 5 — Hermes review setup and practice

#### Day 21 — Hermes setup
Install Hermes using current official guidance, launch it, and record a reliable way to reopen it. Complete any sign-in yourself. **Output:** a verified local setup or a clearly stated blocker.

#### Day 22 — Review access and skills
Verify least-privilege access to an assigned repository and install the baseline and internal review skills. Confirm both load in a fresh Hermes session. **Output:** access and skill readiness results.

#### Day 23 — Interactive review
Review one assigned PR step by step, verifying findings against requirements, the diff, and available Unity evidence. Get approval at each checkpoint. **Output:** an evidence-based review and findings decision.

#### Day 24 — Inform-only review
Run an automated read-only review. Do not alter the worktree, submit a review, commit, push, or merge. **Output:** verified findings and actual validation results.

#### Day 25 — Gap-resolve review
Practice the gap-resolve route only on an explicitly authorized training branch; fix only verified acceptance-criteria gaps and validate them. Otherwise, remain read-only. **Output:** validated minimal remediation or the verified no-change result.

### Week 6 — Issue development handoff

#### Day 26 — Handoff access and skill setup
Verify access to one assigned, implementation-ready issue and install the internal handoff skill. Do not draft or post a handoff yet. **Output:** access and fresh-session skill readiness.

#### Day 27 — Interactive handoff
Use Hermes to inspect the issue and repository context, then draft a bounded handoff with approval checkpoints. **Output:** an approved draft; posting requires separate explicit approval.

#### Day 28 — Echo handoff
Generate a complete handoff draft without posting it; manually post it only if authorized. **Output:** one issue-grounded draft and any unresolved clarification gaps.

#### Day 29 — Auto-post handoff
For an authorized issue, check for duplicates and post at most one handoff comment. **Output:** the verified comment URL or the existing equivalent/comment blocker.

#### Day 30 — Plan-only IDE dry run
Run the handoff prompt in the IDE for a plan only. Do not change files or remote state. **Output:** a bounded plan, open questions, and confirmation that no mutation occurred.

### Week 7 — Issue-to-PR delivery

#### Day 31 — Delivery access and skill setup
Verify only the access needed for an assigned issue-to-PR task and install the internal delivery skill. **Output:** access and fresh-session skill readiness.

#### Day 32 — Interactive delivery
Deliver one valid handoff-backed issue through implementation, Unity validation, and an issue-linked PR, with approval at each external or implementation checkpoint. **Output:** verified delivery evidence; leave the PR unmerged for independent review.

#### Day 33 — Automated delivery, then manual review
Run authorized delivery in the skill's ECHO mode, then manually run the review workflow. ECHO here performs delivery; it is not a no-mutation dry run. **Output:** a validated PR and a separate review result.

#### Day 34 — Delivery and review recommendation
Deliver an authorized issue, then recommend the correctly routed review mode without running it. **Output:** PR evidence and the exact next review prompt.

#### Day 35 — Delivery with automated review
Run authorized delivery followed by the prescribed AI review. Do not submit a review, approve, or merge. **Output:** PR and evidence-based review results for the required human reviewer.

### Week 8 — Independent task culmination

#### Day 36 — Local preflight
Read the assigned task and project context without changing files or remote state. **Output:** requirements, available Unity checks, and blockers.

#### Day 37 — Interactive task execution
Plan and implement one authorized scoped task with approval before changes and external actions. Validate it in Unity; create a PR only when explicitly authorized. **Output:** actual local validation and, if applicable, an unmerged PR for independent review.

#### Day 38 — Read-only dry run
Produce an implementation and validation plan without invoking a delivery mode or mutating local or remote state. **Output:** a bounded plan and unresolved questions.

#### Day 39 — Read-only review practice
Review an authorized change or disposable example; verify candidate findings locally and distinguish defects from subjective suggestions. **Output:** a no-mutation review record.

#### Day 40 — Level 2 capstone
Complete one scoped task through requirements, implementation, local validation, and evidence-based review practice. Use an authorized PR and independent human review when the project requires one; never merge or self-approve. **Output:** the task, acceptance-criteria results, validation evidence, review findings, and remaining blockers.

## Level 3 — Repeatable, human-controlled workflows (Days 41–60)

### Week 9 — Consistent review habits

#### Day 41 — Build a reusable review prompt
Write a reusable Gemini prompt for reviewing a non-sensitive Unity script, including scope, evidence requirements, and a no-edit boundary. **Output:** a prompt that asks for findings, evidence, and uncertainty.

#### Day 42 — Make review steps repeatable
Use the prompt on two scripts in separate manual sessions. Compare findings and verify them in the IDE or Unity. **Output:** a repeatability note showing which findings persisted.

#### Day 43 — Route findings by action
Sort review findings into fix now, investigate, or reject. Ask Copilot to explain one item from each category; verify before acting. **Output:** a decision table with evidence.

#### Day 44 — Perform a daily review
Manually review one small Unity change using the reusable prompt and acceptance criteria. **Output:** a bounded review summary; no unattended automation.

#### Day 45 — Calibrate novelty
Give Gemini a mix of routine and unfamiliar behavior questions. Decide which need human investigation and explain why. **Output:** a personal escalation rule for uncertain or high-impact findings.

### Week 10 — Generate and select work

#### Day 46 — Find a useful task
Observe the Unity project in Play Mode and identify one reproducible issue or improvement. Ask Gemini for candidate tasks, then select only one you can verify locally. **Output:** a short task brief.

#### Day 47 — Clarify before acting
Ask Gemini to identify ambiguities and dependencies in the selected brief. Resolve them yourself or mark them as blockers. **Output:** a clarified brief with no assumed requirements.

#### Day 48 — Order the work
Use Gemini to propose a dependency order for the task. Confirm that each step is possible in the Unity project and chosen IDE. **Output:** an ordered plan with a clear stopping point.

#### Day 49 — Complete one planned task
Implement the first bounded task from Day 48 with Copilot, then verify it in Play Mode. **Output:** evidence for each acceptance criterion and any blocker.

#### Day 50 — Recover from a blocked step
Use a disposable change to practice pausing, undoing the last local edit in the IDE or Unity, and returning to the last verified behavior. **Output:** the cause, recovery action, and retest result.

### Week 11 — Unity event-driven behavior

#### Day 51 — Specify a gameplay event
Write a behavior spec for one event, such as a collectible being picked up. Ask Gemini to identify event conditions, outcomes, and failure cases. **Output:** a spec with observable criteria.

#### Day 52 — Implement the event
Use Copilot to implement the event behavior in the Unity project. Verify it by triggering the event in Play Mode. **Output:** a demonstrated event and a plain-language explanation.

#### Day 53 — Check duplicate and missing events
In Unity, test that the event is not handled twice and that invalid triggering does not produce an unintended result. Ask Gemini for additional cases. **Output:** actual results for each case.

#### Day 54 — Handle event failure
Choose one event failure case, implement a minimal safe response with Copilot, and verify normal behavior still works. **Output:** failure and normal-path results.

#### Day 55 — Rehearse the event workflow
Repeat the spec, plan, implementation, and review sequence for a second small event. **Output:** a completed checklist and one improvement to the workflow.

### Week 12 — Integrate and reflect

#### Day 56 — Assemble a multi-step game flow
Combine two verified Unity behaviors into one small player flow. Ask Gemini to identify state-transition gaps and Copilot to explain relevant code. **Output:** a flow map and Play Mode results.

#### Day 57 — Multi-session practice
Split one feature into two work sessions. At the end of the first, write a concise continuation note in the IDE; resume from it without using external scheduling or storage tools. **Output:** the note and verified continuation.

#### Day 58 — Complete an integrated feature
Implement and verify a small feature using the complete human-controlled workflow. **Output:** acceptance-criteria results, code explanation, and known limitations.

#### Day 59 — Tune the AI workflow
Review where Gemini or Copilot gave incomplete, incorrect, or useful assistance during Level 3. Refine one prompt and retest it on a safe example. **Output:** before/after prompts and a measured difference.

#### Day 60 — Level 3 demonstration
Choose a Unity task and demonstrate planning, scoped implementation, review, and local verification without unattended agents or external services. **Output:** a complete local evidence note.

## Level 4 — Advanced Unity quality and independent practice (Days 61–80)

### Week 13 — Project understanding and safe AI use

#### Day 61 — Unity project quality audit
Inspect scenes, scripts, and assets related to one gameplay path. Ask Gemini to suggest risks, then verify them yourself. **Output:** a prioritized list of evidence-backed observations.

#### Day 62 — Protect project information
Create a safe-context checklist for using Copilot and Gemini. Classify example prompts as safe or unsafe without sharing actual secrets or private material. **Output:** a checklist that excludes credentials and unrelated data.

#### Day 63 — Create a personal prompt guide
Write a small Markdown guide in the IDE with reusable prompts for planning, code explanation, review, and debugging. **Output:** four prompts that require evidence and preserve human approval.

#### Day 64 — Keep secrets out of AI context
Review a sample prompt for sensitive content using invented placeholder values only. Ask Gemini to identify unsafe inclusions; do not paste actual credentials. **Output:** a sanitized example and prevention checklist.

#### Day 65 — Practice human approval gates
Ask Gemini and Copilot to propose a multi-step Unity change. Approve, revise, or stop each step yourself; apply no change without reviewing it. **Output:** a decision log and verified final scope.

### Week 14 — Unity organization and data

#### Day 66 — Organize a scene
Use Unity to organize one scene's objects and component responsibilities. Ask Copilot to explain any script touched. **Output:** a scene that remains understandable and works in Play Mode.

#### Day 67 — Save and load game state
Implement a small local player-progress save/load behavior using only capabilities already present in Unity and the project. Do not use a database or install a package. **Output:** a Play Mode demonstration of save, reload, and invalid-data handling.

#### Day 68 — Compare alternative designs
Ask Gemini and Copilot separately to explain two approaches for one Unity feature. Compare simplicity, project fit, and testability; choose one yourself. **Output:** a reasoned decision and a small verified implementation or prototype.

#### Day 69 — Reduce coupling
Ask Gemini to identify unnecessary dependencies in one gameplay behavior. Use Copilot to propose a small refactor and verify behavior before and after in Unity. **Output:** a focused change with unchanged acceptance results.

#### Day 70 — Integrated feature
Implement one feature that touches a scene and related C# behavior. Keep the change local to Unity and the IDE; manually check normal and failure paths. **Output:** an integrated feature and actual Play Mode results.

### Week 15 — Performance, reliability, and review

#### Day 71 — Reversible Unity experiment
Create a safe, reversible experiment in a test scene. Compare before/after behavior, then restore the intended scene state using Unity's own editing controls. **Output:** the experiment, observation, and restoration check.

#### Day 72 — Make a design decision
Ask Gemini to present tradeoffs for a real Unity design choice. Check its assumptions against the project and document your decision. **Output:** a decision note with evidence and rejected alternatives.

#### Day 73 — Use Unity's built-in Profiler
Use the Profiler already included in Unity to observe one Play Mode scenario. If it is unavailable in the current setup, record that and use visible behavior checks; do not install software. **Output:** one observation and one evidence-based optimization candidate.

#### Day 74 — Improve a measured bottleneck
Ask Copilot for a minimal optimization for the candidate from Day 73. Compare behavior and available Unity measurements before and after. **Output:** results; keep the change only if it preserves behavior and improves the observed issue.

#### Day 75 — Check save/load reliability
Use Unity Play Mode to test save/load success, missing data, and malformed or unsupported values for the Day 67 feature. **Output:** test results and a safe behavior for each case.

### Week 16 — Capstone and independent operation

#### Day 76 — Plan a safe refactor
Choose a small Unity improvement and ask Gemini for a staged plan with checkpoints. Ask Copilot to explain the relevant code before editing. **Output:** a plan that can be stopped after each verified step.

#### Day 77 — Rehearse the full workflow
Run the plan manually: clarify, implement with Copilot, inspect, and verify in Unity. Do not schedule unattended work. **Output:** a completed checklist and actual test results.

#### Day 78 — Complete the capstone
Deliver one polished improvement to your own game with observable criteria, scoped AI assistance, and Unity Play Mode verification. **Output:** a playable result and concise evidence note.

#### Day 79 — Retrospective on quality
Review the capstone and the 80-day notes. Ask Gemini for questions, then identify one process strength, one limitation, and one next learning goal. **Output:** a short retrospective.

#### Day 80 — Final Unity validation
Reopen the capstone scene in Unity, exercise its main behavior and failure case in Play Mode, and explain the code without AI. **Output:** a final checklist with passed, failed, and unavailable checks stated accurately.

## Completion standard

The program is complete when the learner can independently plan a bounded Unity change, use Copilot and Gemini without surrendering judgment, inspect the C# implementation, and verify the behavior in Unity. No external software, cloud workflow, source-control service, training submission, or supervisor sign-off is part of this plan.
