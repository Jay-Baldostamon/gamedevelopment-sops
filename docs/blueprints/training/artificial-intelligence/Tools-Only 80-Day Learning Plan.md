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

Level 2 adds the local Hermes agent and the authenticated GitHub CLI to the tools above. You work on the game you shipped on Day 20: the game repository is the assigned repository, and its post-launch issues are the authoritative tasks. Every day gives one copyable prompt; the prompt is the exercise, and the evidence is what the run actually produced.

L2 moves from controlled review, to handoff, to authorized delivery, to a full task-to-reviewed-PR run. Across all four weeks the issue body stays authoritative, AI review never replaces human review or CI, and no workflow merges, self-approves, or hides a blocked check. **L2 exits on Day 40** when the capstone packet exists and names the one human decision still required.

### Entry expectations and safety rules

L2 assumes you finished L1 and can run, debug, and explain your own game. It teaches control of agent workflows, not game development.

**Pre-flight (finish before Day 21).** Do not start Day 21 with an item below unchecked.

- Day 20 passed: `v1.0` is released and the post-launch issues exist in the game repository.
- The game repository is private and your GitHub account can read its issues, pull requests, branches, and check results.
- The GitHub CLI (`gh`) is installed and signed in as you. You complete every sign-in yourself.
- At least one post-launch issue has explicit requirements and acceptance criteria. If every issue is vague, rewrite one before Day 26; L2 never invents the missing requirements later.
- The pinned Unity version opens the game project, and a second folder or Git worktree is available for reviewing a PR branch without mixing branches in one project.
- Hermes is available to install from its current official documentation.
- A screen recorder is ready for Unity validation evidence.

**Authority and scope.**

- The issue body is authoritative for requirements, scope, and acceptance criteria. A handoff, plan, or AI suggestion never overrides it.
- One authorized task at a time. Do not create, split, or edit issues during an L2 exercise unless the day says so.
- Do not write game code on Days 21–24 or 26–30. The only write path before delivery is the Day 25 gap-resolve remediation, limited to a verified acceptance-criteria gap on an authorized branch.
- Weeks 5–7 use your own post-launch issues. The Week 8 task must be authored by someone else — your producer, Scrum Master, or training lead — so its requirements are independent of you.
- Already-delivered or overlapping work is reported, never re-planned.

**Safety boundary (every day).** Never merge a pull request, approve your own work, bypass or disable CI, edit an issue body, change repository permissions, change CI configuration, or expose a secret. If a sign-in or credential prompt appears, complete it yourself. Never paste passwords, tokens, cookies, private keys, or personal data into a prompt, comment, or commit.

**Evidence standard.** Each day ends with the stated output: a local evidence note, a comment URL, a PR URL, a commit, a check result, or a Play Mode recording. "The AI said it passed" is not evidence. Report blocked checks as blocked. A reviewer must be able to reach the same conclusion from the evidence alone.

**Unity validation rule.** A change counts as validated only when someone opened the affected branch in the pinned Unity version, played the changed behavior, and read the Console. Record the steps, the observed result, and a screenshot or GIF with the PR or comment the day names.

**Roles.** The final decision on delivered work belongs to a human reviewer. Where a day says EM, use the assigned Engineering Manager; if you are the EM, another EM performs the final review.

### Interaction modes

Each L2 exercise runs in one named mode. The mode is a per-run instruction in the prompt; it never edits, reinstalls, or replaces an installed skill.

| Mode | What the agent may do | What it must not do |
| --- | --- | --- |
| Interactive | One checkpoint at a time, with explicit approval before each next step | Continue without approval |
| Inform-only | Inspect, validate read-only, and report | Change files, commit, push, submit a review, merge |
| Gap-resolve | Fix only verified acceptance-criteria gaps on an explicitly authorized branch, validate, commit, and push the minimal remediation | Refactor, add unverified changes, or act when no gap exists |
| Echo | Produce the complete draft or delivery artifact for you to inspect and post or keep | Post, submit, or merge without separate authorization |
| Auto-post / auto-review | Post exactly one non-duplicate handoff, or run the prescribed review, for an explicitly authorized task | Duplicate a comment, submit an approval, or merge |
| Recommend-only | Read and recommend the correctly routed next action and its exact prompt | Run that action |

### AI collaboration habit for L2

Reuse one prompt contract, omitting fields that do not apply:

```text
Goal: the one outcome for this run.
Context: game repository folder, issue or PR, base branch, and the Unity behavior at stake.
Boundary: the mode, what may change, and the explicit never-list.
Check: the Unity validation that must be run and reported, with real results.
Report: the exact headings, requirements coverage, findings, blockers, and next human action.
```

Repeat the placeholders back before acting. If any value still contains a `YOUR-` placeholder or is unclear, stop and ask. Ask for missing facts instead of guessing a file, scene, API, or requirement.

### Week 5 — Hermes review setup and practice

Milestone this week: **Review-ready setup** (Day 25 gate) — Hermes launches without help, least-privilege review access is confirmed, both review skills load in a fresh session, and the three review modes are practiced on real game-repository pull requests.

#### Day 21 — Hermes setup
**Objective:** Install Hermes locally, launch its desktop UI, and keep a reliable way to reopen it.

**Preparation:** Day 20 passed, the game project opens in the pinned Unity version, official Hermes documentation reachable, and a `Day 21` evidence folder created.

##### Phase 1 — Install from current guidance
1. Replace `YOUR-OS` and `YOUR-GAME-REPO-FOLDER`, then send the prompt below.
2. Require the agent to repeat both values and stop on a placeholder.
3. Read the numbered steps before running them, and note every step that downloads software or changes the machine.

##### Phase 2 — Finish setup yourself
1. Complete any sign-in or credential prompt yourself, and pause the agent while you do.
2. Never paste a token, key, or password into the chat, the issue, or the prompt.

##### Phase 3 — Verify and record
1. Launch the UI, confirm it opened, close it, and reopen it once from the operating system's launcher.
2. Record the installed version, the exact launch command or launcher, and any blocker in the `Day 21` folder.

##### Copyable prompt
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

**Deliverables:** the local install, a launch record, and the blocker note.
- [ ] Hermes is installed locally from the current official guidance.
- [ ] I completed every sign-in or credential prompt myself.
- [ ] The Hermes desktop UI opened.
- [ ] I reopened it once from the operating system launcher.
- [ ] The launch command or launcher and the installed version are recorded.
- [ ] Any blocker is written down as the exact failing step.

#### Day 22 — Review access and skills
**Objective:** Verify least-privilege review access to the game repository and install both review skills.

**Preparation:** Day 21 passed, `gh` signed in, the game repository private, and at least one pull request available to review on Days 23–25. Do not review it today.

##### Phase 1 — Verify access
1. Replace the placeholders and send the prompt below.
2. Confirm read access to pull-request metadata and diffs, linked issues, source and branches, and check results.
3. Prefer read-only repository, pull-request, issue, and checks access. Do not request write, merge, administration, workflow, or organization-wide access.

##### Phase 2 — Install both skills
1. Confirm the public `github-code-review` skill is available, and install it only through the supported Hermes skills command.
2. Install `engineering-sops-pr-review` from `.github/skills/engineering-sops-pr-review/SKILL.md` in `hurdman/engineering-sops`, branch `main`, using authenticated `gh api` rather than a raw URL.
3. Validate YAML frontmatter, the exact skill name, and a non-empty body before calling it installed.

##### Phase 3 — Prove a fresh session loads them
1. Open a fresh Hermes session and load both skills.
2. Record the access result, both skill locations, the fresh-session result, and any escalation blocker.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Game Repository: YOUR-GITHUB-REPOSITORY

Prepare my existing local Hermes installation for automated pull-request reviews of my Unity game repository. Use current official Hermes documentation and my existing local GitHub configuration as the source of truth. This is access and skill setup only: do not review a pull request, change repository code, push commits, merge anything, change CI settings, or create a separate Hermes profile.

First, repeat the repository folder and GitHub repository. If either value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Inspect the existing local GitHub login and the repository remote without printing credentials. Confirm whether the current access can read pull-request metadata and diffs, linked issues, repository source and branches, and check or CI status.
2. Identify the least-privilege access a reviewer needs: read-only repository access plus read-only pull-request, issue, and checks access. Do not request write, merge, administration, workflow, or broad organization access unless a specific review requirement cannot be met without it.
3. If required read access is missing, state the exact repository or organization permission needed, why it is needed, and one concise escalation message. Pause while I complete interactive sign-in or obtain administrator approval. Never ask me to paste, print, or log secrets.
4. Verify the resulting access with safe read-only checks and report the real results.
5. Inspect whether the public `github-code-review` skill is available. If it is missing, install it through the supported Hermes skills command or approved skill source. Do not invent a skill URL or use an unapproved source.
6. Install `engineering-sops-pr-review` using authenticated `gh api` from `hurdman/engineering-sops`, branch `main`, file `.github/skills/engineering-sops-pr-review/SKILL.md`. Save it as `engineering-sops-pr-review/SKILL.md` in the Hermes skills directory derived from current configuration; do not hard-code a path or edit Hermes configuration directly.
7. Validate that the file starts with YAML frontmatter, has `name: engineering-sops-pr-review`, and has a non-empty body.
8. Start a fresh Hermes session and verify that both `github-code-review` and `engineering-sops-pr-review` are available and load.
9. Return a "Review access and skills readiness" summary: account and repository verified, review-relevant access confirmed, any extra access requested with its reason, safe checks and their real results, installed skill names and locations, the fresh-session load result, and remaining blockers.

Keep secret redaction and normal command approvals enabled. Limit the work to read-only access validation and installing the two review skills.
```

**Deliverables:** the access result, both installed skills, and the fresh-session proof.
- [ ] The GitHub account and game repository are verified without printing credentials.
- [ ] Review-relevant read access is confirmed, or a specific least-privilege blocker is reported.
- [ ] `github-code-review` is installed and its location recorded.
- [ ] `engineering-sops-pr-review` is installed from `gh api` with valid frontmatter and a non-empty body.
- [ ] A fresh Hermes session loads both skills.
- [ ] No review was performed and no repository state changed.

#### Day 23 — Interactive review
**Objective:** Review one game-repository pull request step by step, with approval at every checkpoint and evidence verified in Unity.

**Preparation:** Day 22 passed, a pull request that changes C# and a scene or prefab, the PR branch fetchable into a second folder or worktree, the pinned Unity version, and a recorder.

##### Phase 1 — Run the checkpoints
1. Replace the placeholders and send the prompt below.
2. Complete each checkpoint only after the previous one is approved: preflight, PR context, requirements baseline, diff review, validation, findings, verdict.
3. Do not accept "looks fine" as a validated checkpoint; require the real result.

##### Phase 2 — Validate in Unity
1. Open the PR branch in a second project folder or worktree, never mixed with the main branch.
2. Play the affected behavior, read the Console, and capture a GIF of the result.
3. If the check cannot run, record the exact reason; do not substitute a code-reading opinion.

##### Phase 3 — Decide findings
1. Keep only findings grounded in a linked requirement, the diff, or the validation output.
2. Separate blocking gaps from suggestions, and state the verdict with its evidence.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
Pull Request: YOUR-PR-NUMBER-OR-URL

Use my normal local Hermes setup and the review access and skills prepared on Day 22 to perform ONE interactive, evidence-based review of my Unity game repository.

This is a one-time training interaction override only. Do not modify, reinstall, patch, update, replace, or save changes to `github-code-review` or `engineering-sops-pr-review`. For this review only, follow their normal rules but pause after every step and ask me to approve the next step.

First, repeat the repository folder and pull request. If either value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Use these checkpoints in order. Complete only the current checkpoint, show its real result, then ask "Approve the next step?" and wait for explicit approval.

1. Skill and repository preflight: confirm both skills load, identify the repository from its remote, and state the mode selected by `engineering-sops-pr-review`. Stop with the exact blocker if a skill is unavailable or the repository is unclassified.
2. PR context: title, description, author, actual base branch, head branch, linked issues, changed files, and current checks. Do not assume the base branch is `main`.
3. Requirements baseline: read every linked issue and extract its explicit requirements and acceptance criteria. State anything missing, vague, or unavailable; never invent a requirement.
4. Diff and code review: read the complete diff and surrounding scripts. Check C# correctness, Unity lifecycle use (`Awake`/`Start`, `Update`, `FixedUpdate`), serialized-field wiring, scene and prefab changes, input and collision regressions, performance, error handling, documentation, and evidence quality.
5. Unity validation plan: propose the exact checks — open the PR branch in the pinned Unity version, play the affected behavior, confirm zero red Console errors, capture a screenshot or GIF — and wait for approval before running them. Report the real result.
6. Findings and permitted remediation: report only findings grounded in a requirement, the source, the diff, or the validation output. Do not change files unless this repository is routed to gap-resolve and I separately approve a minimal fix.
7. Verdict and review text: state Approve, Request Changes, or Comment with its evidence, and draft the GitHub review text without submitting it.

Never merge, alter CI settings, change repository permissions, or expose secrets. Human review and CI remain required before merge.
```

**Deliverables:** the checkpoint log, requirements coverage, the Unity validation record, verified findings, the verdict, and the draft review text.
- [ ] Every checkpoint was approved explicitly before the next one started.
- [ ] The real base branch, head branch, linked issues, and checks are recorded.
- [ ] Requirements and acceptance criteria come from the linked issue, with gaps stated instead of invented.
- [ ] The diff was reviewed for C#, scene, and prefab behavior.
- [ ] Unity Play Mode validation ran on the PR branch and its real result is recorded.
- [ ] Every finding names its requirement, location, impact, and fix direction.
- [ ] The verdict is stated with evidence.
- [ ] No review was submitted and nothing was merged or changed in repository settings.

#### Day 24 — Inform-only review
**Objective:** Run one fully automated read-only review and verify its findings against real Unity evidence.

**Preparation:** Day 23 complete, a pull request available, and a second project folder or worktree for the branch. Decide before starting that this run may not change anything.

##### Phase 1 — Run the read-only review
1. Replace the placeholders and send the prompt below.
2. Confirm the agent states the normal repository mode and the inform-only override.
3. Do not answer intermediate questions; the run must return one final report.

##### Phase 2 — Verify before believing
1. Re-run or inspect each blocking finding yourself: the requirement it names, the file and line, and the Unity behavior.
2. Delete any finding you cannot reproduce or ground in the issue, diff, or Console output.

##### Phase 3 — Prove no mutation
1. Confirm the working tree is unchanged, no branch or commit was created, and no review was submitted.
2. Record the report and your verification in the issue or PR the day names.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
Pull Request: YOUR-PR-NUMBER-OR-URL

Use my normal local Hermes setup and the review skills prepared on Day 22 to perform ONE fully automated, evidence-based review of my Unity game repository.

This is a one-time training mode override only. Do not modify, reinstall, patch, or save changes to `github-code-review` or `engineering-sops-pr-review`. For this review only, override the normal repository routing and treat the repository as INFORM-ONLY regardless of its normal classification.

Do not pause for intermediate approval after the placeholder preflight. Complete the full review and return one final report.

First, repeat the repository folder and pull request. If either value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm both review skills are installed and available. If either is unavailable, stop and return the exact Day 22 remediation.
2. Identify the repository from its remote, state its normal routing classification, then state that this training review is overridden to inform-only.
3. Gather PR metadata: title, description, author, actual base branch, head branch, linked issues, changed files, and current checks.
4. Read every linked issue and extract explicit requirements and acceptance criteria. Report a missing or vague baseline instead of inventing requirements.
5. Read the complete diff and surrounding scripts. Review C# correctness, Unity lifecycle use, serialized-field wiring, scene and prefab changes, input and collision regressions, performance, error handling, and evidence quality.
6. Run safe read-only Unity validation: open the PR branch in the pinned Unity version, play the affected behavior, check the Console, and capture a screenshot or GIF. Report the exact steps and real results. Do not modify the worktree for formatting, dependency installation, generated files, or any other reason.
7. Report only grounded findings. Every blocking finding must name the failed requirement or acceptance criterion, the file and line when available, the impact, and a concrete fix direction.
8. Do not modify code, change the worktree, create commits, push, resolve gaps locally, merge, alter CI settings, change repository permissions, or submit a GitHub review.
9. Return one report with these headings exactly: Skill Availability; Repository Mode and Training Override; PR Context; Requirements and Acceptance-Criteria Coverage; Unity Validation Performed; Verified Findings; Verdict; Suggested GitHub Review Text.

If a verified blocking gap exists, the suggested text must request changes. If no verified blocking gap exists, report the zero-gap outcome honestly. Do not submit the suggested text. Never expose secrets.
```

**Deliverables:** the review report, your verification of each blocking finding, and proof that nothing changed.
- [ ] Both skills were confirmed available before the review started.
- [ ] The report states the normal mode and the inform-only override.
- [ ] Requirements coverage comes from the linked issue, with gaps stated.
- [ ] Unity validation ran on the PR branch and the real result is recorded.
- [ ] Every blocking finding names a requirement, location, impact, and fix direction.
- [ ] I verified each blocking finding myself and removed unreproducible ones.
- [ ] The working tree is unchanged and no branch, commit, review, or merge was created.

#### Day 25 — Gap-resolve review
**Objective:** Practice the gap-resolve route on an authorized branch, fixing only verified acceptance-criteria gaps and proving the fix in Unity.

**Gate:** blocking. Score it with `Resources/Rubrics.md` → Day 25. L2 does not continue to Week 6 until every line is Yes.

**Preparation:** Day 24 passed, written authorization to write to the training branch, a PR branch checked out in a second project folder or worktree, and a verified gap or a genuine zero-gap expectation.

##### Phase 1 — Confirm the mode and the gap
1. Replace the placeholders and send the prompt below.
2. Confirm the agent states the gap-resolve override and updates the branch from its actual base before changing anything.
3. Require a verified gap before any edit: the failed acceptance criterion, the location, and the behavior.

##### Phase 2 — Fix only what is verified
1. Approve only the minimal remediation for the verified gap. Reject refactors, style sweeps, and unrelated changes.
2. Validate in Unity: play the affected behavior, confirm zero red Console errors, and capture a GIF.
3. If the fix fails validation, do not commit; report the failure instead.

##### Phase 3 — Push only validated work
1. Commit and push only the validated gap-resolution change to the PR branch.
2. If no verified gap exists, create nothing and record the zero-gap result.
3. Confirm the PR remains unmerged and unapproved.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
Pull Request: YOUR-PR-NUMBER-OR-URL

Use my normal local Hermes setup and the review skills prepared on Day 22 to perform ONE fully automated, evidence-based review of my Unity game repository.

This is a one-time training mode override only. Do not modify, reinstall, patch, or save changes to `github-code-review` or `engineering-sops-pr-review`. For this review only, override the normal repository routing and treat the repository as GAP-RESOLVE regardless of its normal classification.

Do not pause for intermediate approval after the placeholder preflight. Complete the full review and return one final report.

First, repeat the repository folder and pull request. If either value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm both review skills are installed and available. If either is unavailable, stop and return the exact Day 22 remediation.
2. Identify the repository from its remote, state its normal routing classification, then state that this training review is overridden to gap-resolve.
3. Gather PR metadata: title, description, author, actual base branch, head branch, linked issues, changed files, and current checks.
4. Read every linked issue and extract explicit requirements and acceptance criteria. Report a missing or vague baseline instead of inventing requirements.
5. Update the PR branch from its actual base branch before changing anything. If a merge conflict occurs, resolve it in favor of the PR's intended functionality, then verify the result against the requirements.
6. Read the complete diff and surrounding scripts. Review C# correctness, Unity lifecycle use, serialized-field wiring, scene and prefab changes, input and collision regressions, performance, error handling, and evidence quality.
7. Fix only verified requirement or acceptance-criteria gaps. Preserve scope, avoid unrelated refactors, and create no change when no verified gap exists.
8. Validate in Unity: open the branch in the pinned Unity version, play the affected behavior, confirm zero red Console errors, and capture a screenshot or GIF. Report the exact steps and real results.
9. If a verified gap was fixed and validation passes, commit and push only the validated gap-resolution change to the PR branch. If no verified gap exists or validation fails, create and push nothing, and report why.
10. Do not merge, alter CI settings, change repository permissions, or submit a GitHub review.
11. Return one report with these headings exactly: Skill Availability; Repository Mode and Training Override; PR Context; Requirements and Acceptance-Criteria Coverage; Verified Findings; Changes Made; Unity Validation Performed; Commit and Push Result; Verdict; Suggested GitHub Review Text.

Report only findings grounded in requirements, source, diff, or validation output. Do not submit the suggested text. Never expose secrets.
```

**Deliverables:** the gap analysis, the validated remediation or the zero-gap result, the commit and push result, and the rubric score.
- [ ] The gap-resolve override is stated and the installed skills are unchanged.
- [ ] The branch was updated from its actual base before any edit.
- [ ] Every change maps to a verified acceptance-criteria gap and nothing else.
- [ ] Unity Play Mode validation ran after the change and the real result is recorded.
- [ ] A commit was pushed only because validation passed, or nothing was pushed and the reason is recorded.
- [ ] The PR is still unmerged and unapproved.
- [ ] The Day 25 rubric is scored with every line at Yes.

### Week 6 — Issue development handoff

Milestone this week: **Handoff-ready** (Day 30 gate) — one issue-grounded handoff with a dedup classification, a copy-pasteable prompt, and a plan-only IDE dry run that mutated nothing.

The issue body stays authoritative all week. A handoff is an execution aid: it translates the issue for an AI assistant, and it never rewrites, extends, or replaces the issue.

#### Day 26 — Handoff access and skill setup
**Objective:** Confirm issue and comment access and install the internal handoff skill.

**Preparation:** Day 25 passed, one implementation-ready post-launch issue with explicit requirements and acceptance criteria, and `gh` signed in. Do not draft a handoff today.

##### Phase 1 — Verify access
1. Replace the placeholders and send the prompt below.
2. Confirm read access to the issue, its comments, and the repository source, plus permission to add an issue comment.
3. Use safe checks only; do not create a test comment.

##### Phase 2 — Install and verify the skill
1. Install `engineering-sops-issue-development-handoff` from `hurdman/engineering-sops` with authenticated `gh api`.
2. Validate YAML frontmatter, the exact skill name, a non-empty body, and that the skill defines its Dedup/Overlap Preflight.
3. Open a fresh session and load the skill.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Prepare my normal local Hermes setup for the Issue Development Handoff workflow on my Unity game repository. This is access and skill setup only: do not edit the issue, generate a handoff plan, post a comment, write code, create branches, commit, push, open pull requests, merge, modify CI, or change permissions.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Resolve the issue URL and verify the existing local `gh` login can read the issue, its comments, and the repository source.
2. Verify whether the existing login can add a comment to that issue. Do not create test comments.
3. If read or comment access is missing, state the exact least-privilege repository permission and provide one concise escalation message. Never request, print, paste, or log secrets.
4. Install `engineering-sops-issue-development-handoff` using authenticated `gh api` from `hurdman/engineering-sops`, branch `main`, file `.github/skills/engineering-sops-issue-development-handoff/SKILL.md`.
5. Save it as `engineering-sops-issue-development-handoff/SKILL.md` in the Hermes skills directory derived from current configuration; do not edit Hermes configuration files directly.
6. Validate YAML frontmatter, the exact skill name, a non-empty body, and that it defines the Dedup/Overlap Preflight with a classification and base-branch confirmation.
7. Start a fresh Hermes session and confirm the skill loads.
8. Return a readiness summary with the access results, the installed skill location, the fresh-session load result, and any blocker.

Keep secret redaction and normal command approvals enabled.
```

**Deliverables:** the access result, the installed skill, and the fresh-session proof.
- [ ] The issue, its comments, and the repository source are readable.
- [ ] Comment permission is confirmed, or a specific least-privilege blocker is reported.
- [ ] `engineering-sops-issue-development-handoff` is installed from `gh api`.
- [ ] Frontmatter, exact name, non-empty body, and Dedup/Overlap Preflight are validated.
- [ ] A fresh session loads the skill.
- [ ] No handoff was drafted or posted and the issue is unchanged.

#### Day 27 — Interactive handoff
**Objective:** Draft one bounded, issue-grounded handoff with approval checkpoints, and post it only with separate approval.

**Preparation:** Day 26 passed, the target issue implementation-ready, and the Unity checks it needs identified well enough to name them.

##### Phase 1 — Establish authority and overlap
1. Replace the placeholders and send the prompt below.
2. Approve each checkpoint only after reading its real output: issue baseline, dedup classification, repository evidence, draft.
3. Require a clarification-gap list instead of guessed requirements.

##### Phase 2 — Review the draft
1. Check every requirement and acceptance criterion traces to the issue body.
2. Check the embedded prompt requires click-by-click Unity editor steps and states Play Mode acceptance checks.
3. Reject any invented file path, scene, API, architecture decision, or dependency.

##### Phase 3 — Decide on posting
1. Show the complete comment and decide separately whether to post it.
2. If authorized, post exactly one comment and record its URL. Otherwise keep the draft as evidence.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-issue-development-handoff` in INTERACTIVE mode for one implementation-ready issue in my Unity game repository.

The issue body is authoritative for requirements, scope, and acceptance criteria. Do not rewrite the issue, write game code, create branches, commit, push, or open a pull request.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Complete only the current checkpoint, show its real result, then ask "Approve the next step?" and wait for explicit approval.

1. Issue preflight: read the issue and its comments, extract requirements and acceptance criteria, and list clarification gaps. Do not guess.
2. Dedup/Overlap Preflight: classify as MERGED, OPEN-OVERLAP, DEPENDENCY, or CLEAR, and confirm the base branch. If MERGED, stop and report the delivered PR; if OPEN-OVERLAP, do not plan covered work.
3. Repository evidence: name the scripts, scenes, prefabs, and assets the work would touch, and the Unity checks that can prove each acceptance criterion in Play Mode.
4. Draft handoff: the bounded development plan plus one copy-pasteable `text` prompt. The prompt must require click-by-click Unity editor steps for everything I must wire, and must state the Play Mode acceptance checks and the evidence to capture.
5. Posting: show the complete comment and ask for separate approval. Post exactly one comment with `gh issue comment` only if I approve, then return its URL.

Do not edit the issue body, change labels, change CI, change permissions, or expose secrets.
```

**Deliverables:** the checkpoint log, the approved draft, and either the comment URL or the retained draft with its gaps.
- [ ] Requirements and acceptance criteria are quoted or closely traced to the issue body.
- [ ] The Dedup/Overlap classification and confirmed base branch are recorded.
- [ ] Repository evidence names the scripts, scenes, and Unity checks involved.
- [ ] The embedded prompt requires Unity editor steps and Play Mode acceptance checks.
- [ ] No requirement, path, scene, or API was invented; gaps are listed.
- [ ] I approved each checkpoint explicitly.
- [ ] At most one comment was posted, with its URL, or nothing was posted.

#### Day 28 — Echo handoff
**Objective:** Generate a complete handoff draft in echo mode without posting it, then decide manually whether to post.

**Preparation:** Day 27 complete, and the same or an equivalent implementation-ready issue.

##### Phase 1 — Generate the draft
1. Replace the placeholders and send the prompt below.
2. Require the full comment, the dedup classification, and the base branch in the output.
3. Do not let the run post anything.

##### Phase 2 — Verify the draft
1. Compare every requirement and acceptance criterion with the issue body.
2. Verify the embedded prompt's Unity editor steps and Play Mode checks are complete.
3. Post the comment manually only if you are authorized, and record the URL.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-issue-development-handoff` in ECHO mode. Do not ask for intermediate approval after the placeholder preflight. Read the issue and relevant repository context, run the Dedup/Overlap Preflight, and produce the complete AI Development Handoff comment — but DO NOT post it.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Extract the issue's requirements and acceptance criteria and list any clarification gaps instead of inventing them.
2. Classify related work as MERGED, OPEN-OVERLAP, DEPENDENCY, or CLEAR, and confirm the base branch.
3. Gather repository evidence: the scripts, scenes, prefabs, and Unity checks the work would touch.
4. Return the complete handoff comment in a fenced block, including the bounded development plan and one copy-pasteable `text` prompt with Unity editor steps and Play Mode acceptance checks.
5. End with the exact manual action I must take to post it.

Do not post the comment, edit the issue body, write code, create branches, commit, push, open a pull request, change CI, change permissions, or expose secrets.
```

**Deliverables:** the complete draft, the gap list, and either the manually posted URL or the decision not to post.
- [ ] The run returned a complete handoff comment and posted nothing.
- [ ] Requirements and acceptance criteria trace to the issue body.
- [ ] The dedup classification and base branch are stated.
- [ ] Clarification gaps are listed instead of guessed.
- [ ] The embedded prompt includes Unity editor steps and Play Mode acceptance checks.
- [ ] I posted it manually only if authorized, and the URL is recorded.

#### Day 29 — Auto-post handoff
**Objective:** Generate and auto-post at most one non-duplicate handoff for an explicitly authorized issue.

**Preparation:** Day 28 passed, written authorization to comment on the issue, and a final read of the issue's requirements.

##### Phase 1 — Run the authorized auto-post
1. Replace the placeholders and send the prompt below.
2. Require the dedup classification before any post, and confirm no equivalent comment already exists.

##### Phase 2 — Verify the result
1. Open the returned URL and confirm it is the new comment on the correct issue.
2. Confirm the issue body, labels, and repository code are unchanged.
3. If the run reported an existing equivalent comment, accept that URL as the result.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-issue-development-handoff` in fully automated AUTO-POST mode. Do not ask for intermediate approval after the placeholder preflight. Read the issue and relevant repository context, then run the Dedup/Overlap Preflight: if a merged pull request already closes the issue (MERGED), stop and return its URL without posting; if an open pull request or branch already covers the scope (OPEN-OVERLAP), do not plan covered work; if the issue depends on a sibling's unmerged pull request (DEPENDENCY), record that the downstream branch will be based on that sibling; otherwise classify CLEAR. Record the classification and confirmed base branch in the handoff's Related Work section.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Extract the issue's requirements and acceptance criteria, and report critical clarification gaps instead of inventing them.
2. Gather repository evidence for the affected scripts, scenes, prefabs, and Unity checks.
3. Generate the required AI Development Handoff comment with a viable bounded development plan and one copy-pasteable `text` prompt that requires Unity editor steps and Play Mode acceptance checks.
4. Before posting, inspect existing issue comments for an equivalent handoff. If one exists for the same issue state, do not post a duplicate; return its URL.
5. Otherwise post exactly one comment with authenticated `gh issue comment` and verify the returned comment URL.

If the issue has critical clarification gaps, do not post an implementation-ready handoff; report the gaps instead. Do not edit the issue body, write code, create branches, commit, push, open pull requests, merge, change CI, change permissions, or expose secrets.
```

**Deliverables:** the verified comment URL or the existing-equivalent result, plus the classification and base branch.
- [ ] Written authorization to comment existed before the run.
- [ ] The Dedup/Overlap classification and base branch are recorded.
- [ ] Existing comments were checked for an equivalent handoff.
- [ ] At most one new comment exists, and its URL is verified.
- [ ] The issue body, labels, and repository code are unchanged.
- [ ] No code, branch, commit, or pull request was created.

#### Day 30 — Plan-only IDE dry run
**Objective:** Run the posted handoff's prompt in the IDE for a plan only, and prove that nothing changed.

**Gate:** blocking. Score it with `Resources/Rubrics.md` → Day 30. Week 7 does not start until every line is Yes.

**Preparation:** Day 29 complete with a posted handoff, the game project open in the pinned Unity version, and a clean working tree.

##### Phase 1 — Set the boundary
1. Replace the placeholders and send the prompt below to Copilot Chat in the IDE.
2. Confirm the assistant repeats the plan-only boundary and stops if the handoff is missing.
3. Run `git status` before the first prompt and record the output.

##### Phase 2 — Produce the plan
1. Require ordered steps, files and scenes, Unity editor wiring, Play Mode acceptance checks, risks, and open questions.
2. Reject any step that assumes a requirement the issue does not state.
3. If the handoff conflicts with the issue body, stop and report the conflict.

##### Phase 3 — Prove no mutation
1. Run `git status` again and compare it with the first result.
2. Confirm no branch, commit, PR, comment, label, or Project change exists.
3. Score the Day 30 rubric.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use the posted AI Development Handoff comment on this issue as the plan-only instruction set for my IDE assistant.

Read-only and plan-only boundary: do not create, edit, move, or delete any file; do not create a branch, commit, push, open a pull request, post a comment, change labels, or update Project status. Do not install packages or change project settings.

First, repeat the issue URL and the handoff comment URL. If either is a YOUR- placeholder or the handoff is missing, stop and ask me.

Then:
1. Restate the issue requirements and acceptance criteria from the issue body.
2. Read the repository context needed to plan: relevant scripts, scenes, prefabs, and project settings.
3. Return a bounded implementation plan with ordered steps, files and scenes to change, the Unity editor wiring I must do, the Play Mode acceptance checks, risks, and open questions.
4. Report the `git status` result from the start and end of the run as proof that nothing changed.
5. If the handoff conflicts with the issue body, stop and report the conflict instead of choosing.

Do not implement anything. Do not expose secrets.
```

**Deliverables:** the bounded plan, the open questions, the before-and-after `git status`, and the rubric score.
- [ ] The plan-only boundary was stated before planning began.
- [ ] Requirements and acceptance criteria come from the issue body.
- [ ] The plan names the files and scenes to change and the editor wiring required.
- [ ] Every acceptance criterion has a Play Mode check.
- [ ] Open questions and conflicts are reported instead of guessed.
- [ ] `git status` is identical before and after, and no branch, commit, PR, comment, or label changed.
- [ ] The Day 30 rubric is scored with every line at Yes.

### Week 7 — Issue-to-PR delivery

Milestone this week: **Delivery and review** (Day 35 gate) — one authorized issue delivered as a linked, reviewed PR with real Unity validation and an evidence-based AI review, left unmerged.

Delivery starts only from a valid handoff. The `ai-automation` label, `Closes #<issue-number>` link, review request, and `For Review` status make the work traceable; none of them authorizes a merge.

#### Day 31 — Delivery access and skill setup
**Objective:** Verify only the access delivery needs and install the internal issue-to-PR skill.

**Preparation:** Day 30 passed, a valid handoff exists on the issue, and written authorization to deliver that issue.

##### Phase 1 — Verify delivery access
1. Replace the placeholders and send the prompt below.
2. Confirm the issue and handoff are readable, and that the login can branch, open a PR, request review, add `ai-automation`, and update the connected Project item.
3. Do not request merge, administration, workflow, or organization-wide access.

##### Phase 2 — Install and verify the skill
1. Install `engineering-sops-issue-to-pr` from `hurdman/engineering-sops` with authenticated `gh api`.
2. Validate frontmatter, the exact name, a non-empty body, and its Dedup/Overlap handling.
3. Open a fresh session and confirm the skill and its prerequisites load.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Prepare my normal local Hermes setup for the Issue-to-PR Delivery workflow on my Unity game repository. This is access and skill setup only: do not implement code, create a branch, commit, push, open a pull request, request review, change labels or Project status, merge, change CI, or change permissions.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the issue carries a valid Week 6 AI Development Handoff comment. If it does not, stop and report that blocker.
2. Verify the existing `gh` login can read the issue and handoff, create branches and pull requests on this repository, request review, add the `ai-automation` label, and update the linked Project item to `For Review` when a Project is connected.
3. State the exact least-privilege permission for anything missing and give one concise escalation message. Do not request merge, administration, workflow, or organization-wide access. Never print secrets.
4. Install `engineering-sops-issue-to-pr` using authenticated `gh api` from `hurdman/engineering-sops`, branch `main`, file `.github/skills/engineering-sops-issue-to-pr/SKILL.md`. Save it as `engineering-sops-issue-to-pr/SKILL.md` in the Hermes skills directory derived from current configuration.
5. Validate YAML frontmatter, the exact skill name, a non-empty body, and that it handles the Dedup/Overlap classifications.
6. Start a fresh Hermes session and confirm the skill loads with its prerequisite skills.
7. Return a readiness summary with the access results, installed skill location, fresh-session result, and any blocker.

Keep secret redaction and normal command approvals enabled.
```

**Deliverables:** the access result, the installed skill, and the fresh-session proof.
- [ ] A valid Week 6 handoff exists on the issue.
- [ ] Read access to the issue and handoff is confirmed.
- [ ] Branch, PR, review-request, label, and Project-status access is confirmed or blocked explicitly.
- [ ] No merge, administration, workflow, or organization-wide access was requested.
- [ ] `engineering-sops-issue-to-pr` is installed and validated.
- [ ] A fresh session loads the skill with its prerequisites.
- [ ] No code, branch, commit, PR, label, or Project change was made.

#### Day 32 — Interactive delivery
**Objective:** Deliver one handoff-backed issue through implementation, Unity validation, and an issue-linked PR, with approval at every stage.

**Preparation:** Day 31 passed, a valid handoff, written authorization to deliver, and the pinned Unity project with a clean working tree.

##### Phase 1 — Approve the stages
1. Replace the placeholders and send the prompt below.
2. Approve each stage only after reading its real evidence: handoff preflight, label, branch and plan, edits, validation, commit, push, PR, review request, Project status.
3. Stop the run if the handoff's dedup classification says MERGED or OPEN-OVERLAP.

##### Phase 2 — Hold the Unity line
1. Require click-by-click editor steps for every scene or Inspector change, and perform the wiring yourself.
2. Play the changed behavior, confirm zero red Console errors, and capture a GIF for the PR.
3. Reject any implementation step outside the issue's acceptance criteria.

##### Phase 3 — Leave it open for review
1. Verify `Closes #<issue-number>` in the PR body, the review request, and the Project status.
2. Confirm the PR is unmerged and unapproved.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-issue-to-pr` in INTERACTIVE mode for my Unity game repository.

Confirm the valid Week 6 handoff first. Honor its Dedup/Overlap classification when choosing the base: if MERGED, stop and report the already-delivered pull request; if OPEN-OVERLAP, do not create a parallel pull request (close any redundant newer pull request as superseded, pointing at the existing one, without deleting its branch); if DEPENDENCY, create the issue branch as a child of the sibling branch, never committing onto or pushing to the sibling; if CLEAR, branch from the confirmed base.

Complete only the current stage, show real evidence, then ask "Approve the next step?" and wait for explicit approval.

Use these stages: handoff preflight; `ai-automation` label; branch and implementation plan; proposed edits; Unity validation; commit; push; pull request creation and linked-issue verification; review request; Project Status `For Review` update and verification.

For every scene, prefab, or Inspector change, give me click-by-click editor steps naming the object to select, the component to add, and the reference to drag into each field. State the Play Mode check that proves each acceptance criterion, run it, and report the real result including Console errors. Do not implement anything outside the issue's acceptance criteria.

Do not merge, bypass CI, expose secrets, or edit the issue body. At the end, provide the full final report required by the skill.
```

**Deliverables:** the PR, the validation evidence, and the verified links and status.
- [ ] Delivery started only after the handoff was confirmed valid.
- [ ] The dedup classification chose the base, and MERGED or OPEN-OVERLAP stopped the run.
- [ ] Every change maps to an issue acceptance criterion.
- [ ] Unity editor steps were supplied for each scene or Inspector change and wired by me.
- [ ] Play Mode validation ran and the real result, including Console state, is recorded.
- [ ] The PR contains `Closes #<issue-number>` and an explicit review request.
- [ ] Project status is verified as `For Review`, or the exact blocker is reported.
- [ ] The PR is unmerged and unapproved.

#### Day 33 — Automated delivery, then manual review
**Objective:** Run authorized delivery in echo mode, then run the review workflow yourself on the delivered PR.

**Preparation:** Day 32 passed, a valid handoff for a second authorized issue, and authorization for automated delivery.

Echo performs the delivery. It is not a no-mutation dry run.

##### Phase 1 — Run the delivery
1. Replace the placeholders and send the prompt below.
2. Verify the PR, its issue link, its review request, and its Project status from the returned evidence.

##### Phase 2 — Review it manually
1. Run the Day 23 interactive review, or the Day 24 inform-only review, against the new PR.
2. Record the verdict and the findings you verified yourself.
3. Do not submit an approval or merge.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-issue-to-pr` in ECHO mode. Do not ask for intermediate approval after the placeholder preflight. Confirm a valid Week 6 handoff, honor its Dedup/Overlap classification when choosing the base, and complete the full delivery: confirm `ai-automation`, implement within the issue's acceptance criteria, validate in Unity with real Play Mode results, commit, push, create a pull request with `Closes #<issue-number>`, verify the link, request review, and set and verify Project Status `For Review`.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

For every scene, prefab, or Inspector change, give me click-by-click editor steps naming the object, the component, and the reference to drag into each field. State the Play Mode check for each acceptance criterion, run it, and report the real result including Console errors.

Return the complete delivery evidence required by the skill, including the pull request URL, the verified issue link, the review request, the Project status result or its exact blocker, and any blocked check.

Do not merge, submit a review, approve the pull request, bypass CI, edit the issue body, or expose secrets.
```

**Deliverables:** the delivered PR with verified links, and a separate verified review result.
- [ ] Automated delivery started only after the handoff was confirmed valid.
- [ ] The PR contains `Closes #<issue-number>` and an explicit review request.
- [ ] Project status is verified as `For Review`, or the exact blocker is reported.
- [ ] Unity validation results in the delivery evidence are real and referenced.
- [ ] I ran the review workflow manually against the new PR.
- [ ] The review verdict and findings were verified by me.
- [ ] Nothing was submitted, approved, or merged.

#### Day 34 — Delivery and review recommendation
**Objective:** Deliver an authorized issue and recommend the correctly routed review mode without running it.

**Preparation:** Day 33 passed, a valid handoff for a third authorized issue, and the repository's review routing known.

##### Phase 1 — Deliver
1. Replace the placeholders and send the prompt below.
2. Verify the PR, the issue link, the review request, and the Project status.

##### Phase 2 — Recommend, do not run
1. Identify the review mode the installed routing selects for this repository.
2. Write the exact next review prompt for that mode, ready to paste.
3. Do not run it, submit it, or edit any skill.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-issue-to-pr` in AUTO mode. Do not ask for intermediate approval after the placeholder preflight. Confirm a valid Week 6 handoff, honor its Dedup/Overlap classification when choosing the base, and complete the full delivery: `ai-automation`, scoped implementation, real Unity validation, commit, push, a pull request with `Closes #<issue-number>`, verified issue link, review request, and verified Project Status `For Review` or its exact blocker.

Then recommend the review action only. State the mode the installed repository routing selects, and return the exact next review prompt I should paste, with its placeholders already filled from this run. Do not run that review, submit a GitHub review, approve, merge, bypass CI, edit the issue body, or expose secrets.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Report the PR URL, requirements and acceptance-criteria coverage, the Unity validation steps and real results, blocked checks, the recommended review mode with its reason, and the exact next prompt.
```

**Deliverables:** the PR evidence and the exact recommended review prompt.
- [ ] Delivery completed with a verified issue link and review request.
- [ ] Project status is verified as `For Review`, or the exact blocker is reported.
- [ ] The recommended review mode matches the installed routing.
- [ ] The exact next review prompt is written and ready to paste.
- [ ] The review was not run, submitted, or simulated.
- [ ] Nothing was merged, approved, or edited outside the issue scope.

#### Day 35 — Delivery with automated review
**Objective:** Deliver an authorized issue and run the prescribed AI review, leaving the result for the human reviewer.

**Gate:** blocking. Score it with `Resources/Rubrics.md` → Day 35. Week 8 does not start until every line is Yes.

**Preparation:** Day 34 passed, a valid handoff for a fourth authorized issue, and written authorization for automated delivery and review.

##### Phase 1 — Deliver and review
1. Replace the placeholders and send the prompt below.
2. Confirm delivery evidence before accepting the review section of the report.

##### Phase 2 — Verify the review
1. Re-check every blocking finding against the issue, the diff, and the Unity result.
2. Confirm the review was not submitted, approved, or merged.

##### Phase 3 — Hand it over
1. Record the PR URL, the review verdict, the verified findings, and the blocked checks for the human reviewer.
2. Score the Day 35 rubric.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-issue-to-pr` in AUTO-REVIEW mode. Do not ask for intermediate approval after the placeholder preflight. Confirm a valid Week 6 handoff, honor its Dedup/Overlap classification when choosing the base, then complete full delivery: confirm `ai-automation`, implement within the issue's acceptance criteria, validate in Unity with real Play Mode results, commit, push, create a pull request with `Closes #<issue-number>`, verify the link, request review, and set and verify Project Status `For Review`.

Then automatically run both `github-code-review` and `engineering-sops-pr-review` on the new pull request. Follow the repository's normal routing and return the evidence-backed verdict, requirements and acceptance-criteria coverage, Unity validation results, verified findings, blocked checks, and suggested GitHub review text.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

For every scene, prefab, or Inspector change during delivery, give me click-by-click editor steps naming the object, the component, and the reference to drag into each field.

Do not submit an approval or review, merge, bypass CI, edit the issue body, or expose secrets.
```

**Deliverables:** the PR, the AI review report, the human-review handover, and the rubric score.
- [ ] Delivery used a valid handoff and stayed inside the issue's acceptance criteria.
- [ ] The PR carries a verified `Closes #<issue-number>`, a review request, and verified `For Review` status or its exact blocker.
- [ ] Unity validation ran on the delivered branch and the real result is recorded.
- [ ] The prescribed AI review ran and its verdict is stated with evidence.
- [ ] I verified each blocking finding against the issue, diff, and Unity result.
- [ ] Blocked checks are reported as blocked.
- [ ] No review was submitted and nothing was approved or merged.
- [ ] The Day 35 rubric is scored with every line at Yes.

### Week 8 — Task-to-reviewed-PR culmination

Milestone this week: **Level 2 capstone** (Day 40 gate) — one task carried from authoritative requirements through handoff, delivery, Unity validation, AI review, and a final packet that leaves only the human decision.

The task must be authored by someone other than you — your producer, Scrum Master, or training lead — so the requirements are genuinely authoritative. The workflow may create the handoff, branch, commit, PR, review request, `ai-automation` label, and `For Review` status. It never merges, self-approves, bypasses CI, or replaces the final human review.

#### Day 36 — Culmination access and skill setup
**Objective:** Confirm orchestration access and install the culmination skill without running a task.

**Preparation:** Day 35 passed, a task issue authored by someone else with explicit requirements and acceptance criteria, and written authorization to run it later this week.

##### Phase 1 — Validate the task and access
1. Replace the placeholders and send the prompt below.
2. Confirm the issue has usable requirements and acceptance criteria before any workflow starts.
3. Verify access for issue comments, labels, branches, pull requests, review requests, and the connected Project item status.

##### Phase 2 — Install and verify the skill
1. Install `engineering-sops-task-to-reviewed-pr` from `hurdman/engineering-sops` with authenticated `gh api`.
2. Validate frontmatter, the exact name, a non-empty body, and its prerequisite skills.
3. Open a fresh session and load the skill with its prerequisites.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Prepare my normal local Hermes setup for the Task-to-Reviewed-PR workflow on my Unity game repository. This is access and skill setup only: do not create a handoff, add labels, write code, create branches, commit, push, create a pull request, request review, change Project status, or submit any review.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the issue was authored by someone other than me and has usable requirements and acceptance criteria. If either is missing, stop and report the gap.
2. Verify least-privilege access for issue comments, labels, repository branches, pull-request creation, review requests, and the existing Project item Status update. State the exact permission missing and one escalation message.
3. Install `engineering-sops-task-to-reviewed-pr` using authenticated `gh api` from `hurdman/engineering-sops`, branch `main`, file `.github/skills/engineering-sops-task-to-reviewed-pr/SKILL.md`. Save it as `engineering-sops-task-to-reviewed-pr/SKILL.md` in the Hermes skills directory derived from current configuration.
4. Validate YAML frontmatter, the exact skill name, a non-empty body, and its prerequisite skills.
5. Start a fresh Hermes session and confirm the skill loads with all prerequisites.
6. Return readiness evidence with the access results, installed skill location, fresh-session result, and exact blockers.

Never print secrets or request merge, administration, workflow, or organization-wide access.
```

**Deliverables:** the task validation, the access result, and the installed skill.
- [ ] The task issue was authored by someone else and has explicit requirements and acceptance criteria.
- [ ] Comment, label, branch, PR, review-request, and Project-status access is confirmed or blocked explicitly.
- [ ] `engineering-sops-task-to-reviewed-pr` is installed and validated.
- [ ] A fresh session loads the skill and its prerequisites.
- [ ] No handoff, label, code, branch, PR, review, or Project change was made.

#### Day 37 — Interactive task delivery
**Objective:** Run the complete task lifecycle interactively, pausing at every external mutation and leaving the PR for human review.

**Preparation:** Day 36 passed, a validated task issue, written authorization, and the pinned Unity project in a clean state.

##### Phase 1 — Approve each stage
1. Replace the placeholders and send the prompt below.
2. Approve each stage only after its real evidence is shown: preflight, handoff, label, branch and plan, edits, validation, commit, push, PR, review request, Project status, AI review report.
3. Stop the run on a dedup classification that says the work is already delivered.

##### Phase 2 — Keep the work verifiable
1. Require Unity editor steps for each scene or Inspector change and perform the wiring yourself.
2. Play the acceptance behavior, confirm zero red Console errors, and capture the GIF.
3. Reject edits outside the task's acceptance criteria.

##### Phase 3 — Hand over to the human reviewer
1. Confirm the PR is unmerged and unapproved and that Project status is `For Review` or its blocker is reported.
2. Name the human reviewer who must decide.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-task-to-reviewed-pr` in INTERACTIVE mode for this task issue in my Unity game repository. The issue body is authoritative for requirements, scope, and acceptance criteria.

Confirm the requirements and acceptance criteria are sufficient before starting. If they are not, stop and report the gap.

Complete only the current stage, show real evidence, then ask "Approve the next step?" and wait for explicit approval.

Stages: issue and handoff preflight; handoff generation and posting; `ai-automation` label; branch and implementation plan; code edits; Unity validation; commit; push; pull-request creation and link verification; review request; Project Status `For Review`; AI review report; final human-review handoff.

For every scene, prefab, or Inspector change, give me click-by-click editor steps naming the object, the component, and the reference to drag into each field. State the Play Mode check for each acceptance criterion, run it, and report the real result including Console errors.

Do not submit a GitHub review, approve, merge, bypass CI, edit the issue body, or expose secrets.
```

**Deliverables:** the complete lifecycle evidence and the named human reviewer.
- [ ] Requirements and acceptance criteria were confirmed before the run.
- [ ] Each stage was approved explicitly before the next one started.
- [ ] The handoff was posted once, with its URL.
- [ ] Delivery stayed inside the task's acceptance criteria.
- [ ] Unity validation ran with real results and evidence.
- [ ] The PR is linked, review was requested, and `For Review` is verified or blocked explicitly.
- [ ] The AI review report is included and not submitted as a review.
- [ ] The PR is unmerged and unapproved, and the human reviewer is named.

#### Day 38 — Automated task delivery echo
**Objective:** Run the full lifecycle automatically and return the complete evidence packet for human review.

**Preparation:** Day 37 passed, another validated task issue, and authorization for automated orchestration.

##### Phase 1 — Run the orchestration
1. Replace the placeholders and send the prompt below.
2. Confirm the issue's requirements before the run starts.

##### Phase 2 — Read the packet
1. Verify the handoff URL, PR URL, requirements coverage, Unity validation results, AI review verdict, and blocked checks.
2. Confirm the PR is unmerged, unapproved, and that the final human action is stated.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-task-to-reviewed-pr` in ECHO mode. Do not ask for intermediate approval after the placeholder preflight. Confirm the issue has sufficient requirements and acceptance criteria authored by someone other than me, then generate and post the non-duplicate handoff, deliver the task through a validated linked pull request, request review, set and verify `For Review`, and run `github-code-review` with `engineering-sops-pr-review`.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

State the Play Mode check for each acceptance criterion and report the real result, including Console errors, for every scene or Inspector change.

Return the full final report required by the skill, including the handoff URL, PR URL, requirements and acceptance-criteria coverage, Unity validation results, AI review verdict and verified findings, blocked checks, and the exact final human-review action required.

Do not submit a GitHub review, self-approve, merge, bypass CI, rewrite the issue body, or expose secrets.
```

**Deliverables:** the handoff and PR, the validated packet, and the stated human action.
- [ ] The issue's requirements and acceptance criteria were sufficient before the run.
- [ ] Exactly one non-duplicate handoff was generated and posted.
- [ ] Delivery stayed in scope and the PR is linked with a review request and `For Review` or its blocker.
- [ ] Unity validation results are real and recorded.
- [ ] The AI review verdict and findings are evidence-backed.
- [ ] Blocked checks are reported.
- [ ] Nothing was submitted, approved, merged, or edited outside scope.
- [ ] The exact final human action is stated.

#### Day 39 — Final review recommendation
**Objective:** Run the orchestration automatically and state exactly who must perform the final review.

**Preparation:** Day 38 passed, another validated task issue, and your initiator role known.

##### Phase 1 — Run and recommend
1. Replace the placeholders, including `YOUR-INITIATOR-ROLE`, and send the prompt below.
2. Confirm the packet and the final reviewer requirement.

##### Phase 2 — Check the accountability rule
1. If you are the EM, the recommendation must name a different EM.
2. Otherwise the recommendation must name an EM.
3. Confirm no review was submitted or approval recorded.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL
Initiator Role: YOUR-INITIATOR-ROLE

Use `engineering-sops-task-to-reviewed-pr` in RECOMMEND FINAL REVIEW mode. Do not ask for intermediate approval after the placeholder preflight. Confirm the task issue has requirements and acceptance criteria authored by someone other than me, complete the valid issue-to-handoff-to-PR-to-AI-review workflow, and return the final human review recommendation.

If Initiator Role is EM, state that another EM must conduct the final review. Otherwise state that an EM must conduct it.

First, repeat the repository folder, issue URL, and initiator role. If any value contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Include the handoff URL, PR URL, AI review verdict, verified findings, Unity validation evidence, blocked checks, and the exact final reviewer action.

Do not submit a GitHub review, self-approve, merge, bypass CI, rewrite the issue body, or expose secrets.
```

**Deliverables:** the completed packet and the explicit final reviewer assignment.
- [ ] The initiator role was stated and repeated before the run.
- [ ] The workflow completed from issue through handoff, PR, and AI review.
- [ ] The final reviewer is named and satisfies the accountability rule.
- [ ] The packet includes the PR, verdict, findings, Unity evidence, and blocked checks.
- [ ] No review was submitted and nothing was approved or merged.

#### Day 40 — Level 2 capstone
**Objective:** Run the full culmination and leave only the final human decision.

**Gate:** blocking. Score it with `Resources/Rubrics.md` → Day 40. L2 is complete only when every line is Yes.

**Preparation:** Day 39 passed, a final validated task issue, and authorization for the full run.

##### Phase 1 — Run the culmination
1. Replace the placeholders, including `YOUR-INITIATOR-ROLE`, and send the prompt below.
2. Do not intervene after the placeholder check; the run is the measured exercise.

##### Phase 2 — Assemble the capstone packet
1. Collect the issue URL, handoff URL, PR URL, requirements coverage, Unity validation results, AI review verdict and findings, blocked checks, and the exact final decision needed.
2. Confirm the PR is unmerged and unapproved and the named reviewer satisfies the accountability rule.

##### Phase 3 — Score and close
1. Score the Day 40 rubric against the packet alone.
2. Save the packet with the game repository evidence the day names.

##### Copyable prompt
```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL
Initiator Role: YOUR-INITIATOR-ROLE

Use `engineering-sops-task-to-reviewed-pr` in FULL CULMINATION mode. Do not ask for intermediate approval after the placeholder preflight. Confirm the task issue was authored by someone other than me and has sufficient requirements and acceptance criteria, generate and post one valid non-duplicate handoff, deliver the task through a validated linked pull request, request review, set and verify `For Review`, and run the installed AI review workflow.

First, repeat the repository folder, issue URL, and initiator role. If any value contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Leave the pull request unmerged and unapproved. Produce a final review packet containing the issue and handoff URLs, the PR URL, requirements and acceptance-criteria coverage, Unity validation steps and real results including Console errors, the AI review verdict and verified findings, blocked checks, and the exact final decision needed.

If Initiator Role is EM, require final review by another EM; otherwise require final review by an EM. Do not self-approve, merge, bypass CI, rewrite the issue body, or expose secrets.
```

**Deliverables:** the full capstone packet and the rubric score.
- [ ] The task issue was authored by someone else and has requirements and acceptance criteria.
- [ ] Exactly one non-duplicate handoff was posted and linked in the packet.
- [ ] The PR is linked to the issue, review was requested, and `For Review` is verified or its blocker reported.
- [ ] Delivery stayed inside scope and every acceptance criterion has a result.
- [ ] Unity validation evidence is real, including Console state.
- [ ] The AI review verdict and findings are evidence-backed and not submitted as a review.
- [ ] Blocked checks are reported as blocked.
- [ ] The reviewer satisfies the accountability rule, and the packet names the exact final decision.
- [ ] Nothing was merged or self-approved.
- [ ] The Day 40 rubric is scored with every line at Yes.

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

The program is complete when the learner can independently plan a bounded Unity change, use Copilot and Gemini without surrendering judgment, inspect the C# implementation, and verify the behavior in Unity. For Level 2 it is also complete when the learner can run controlled Hermes review, handoff, and delivery workflows without bypassing human review or CI. Only the tools named in Approved Tools and Boundaries are part of the plan; no training submission and no supervisor sign-off are required.
