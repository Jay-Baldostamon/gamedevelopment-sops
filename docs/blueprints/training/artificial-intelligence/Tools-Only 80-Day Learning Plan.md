# Tools-Only 80-Day Learning Plan

This is the active learning plan. It keeps the 80-day progression while replacing activities that require software outside the learner's approved tools.

## Approved Tools and Boundaries

For all levels, use:

1. **Unity Game Engine** for the game, scenes, scripts in Play Mode, and in-editor checks.
2. **GitHub Copilot AI** inside either **VS Code** or **Visual Studio Community** for code assistance.
3. **Gemini AI** for planning, explanation, comparison, and review.

**Level 2 exception (Days 21–40 only):** The L2 curriculum also uses the local **Hermes Agent** and its named Engineering SOPs skills. Use GitHub and the authenticated GitHub CLI (`gh`) only for the access, issue, review, handoff, and pull-request workflows explicitly required by the L2 lessons. Use official Hermes documentation for Hermes setup. Do not install or rely on other software or services for these exercises.

Hermes and GitHub actions must stay within the assigned, authorized repository and task. Use least-privilege access; perform sign-in yourself without sharing credentials. Follow each lesson's interaction mode: interactive requires approval at its checkpoints, inform-only and dry-run modes make no mutations, and automated writes are allowed only for explicitly authorized tasks under the relevant skill. Never merge, self-approve, bypass CI, alter permissions, or expose secrets. Outside Level 2, the Hermes/GitHub exception does not apply.

Work in the existing Unity project, or create one only through a project-creation flow already available in Unity. Do not add Unity packages for this curriculum; use Play Mode and existing project checks. Keep planning notes and checklists in Markdown files edited in the chosen IDE. Never paste passwords, access tokens, private keys, personal data, or confidential project material into an AI.

## How to use this plan

- Complete one numbered day at a time, in order. The whole 80 days use a single Unity 2D C# platformer project.
- In the IDE, ask Copilot for code help and inspect every suggested change yourself. Use Gemini to plan, explain, challenge assumptions, or review selected non-sensitive snippets.
- Use Unity to make scene and asset changes, run the game in Play Mode, and inspect its Console and built-in tools.
- Record only the day's stated output in the IDE. No external reporting, submissions, or sign-offs are required.
- If an exercise asks for a capability that is not already available in one of the three allowed tools, skip that capability and complete the stated local alternative. Do not add software.

## Level 1 — Foundations (Days 1–20)

### Entry expectations and safe practice

You can already build a simple 2D or FPS game. L1 introduces AI into that existing Unity skill set; it is not a Unity beginner course. Familiar movement, pickup, and pause behaviors keep the gameplay difficulty low so you can practice prompting, context selection, code understanding, and verification. Continue one small desktop 2D platformer. Use placeholder assets and the project's recorded Unity Editor version and existing input approach; do not upgrade the project or add packages.

Day 2 establishes the playable baseline: a scene that runs with a player, a platform to stand on, horizontal movement, and one grounded jump, plus a short script you can inspect. Reuse your existing project and keep it continuous through Day 5, adding one system per day instead of rebuilding. Day 6 extends that build; it is not a setup day. If setup is blocked, resolve the blocker before claiming the dependent exercises complete.

Practice defects and recovery in a disposable scene with a separate test component, not a shared gameplay script or prefab. Make scene/Inspector changes in Unity outside Play Mode, script changes in the IDE, and save before checking behavior. Preserve scene, prefab, and `.meta` references. Do not share confidential code or assets with either AI.

For each implementation, record expected versus actual Play Mode results, including a normal case and a relevant failure/boundary case. Check for new relevant Console errors and use existing project tests if available. AI agreement is not evidence; inspect the actual code, Inspector values, and runtime behavior. Mark missing checks as blocked and unproven claims as unverified.

**L1 outcome:** choose an appropriate AI interaction or direct Unity action, supply focused context, explain accepted AI code, prove the cause of a small bug, and independently deliver and verify two bounded tasks: Task A on Day 15 and Task B on Day 19. The Week 1 build — controller, enemy, buffs, and level — prepares you for those tasks. No chat quotas, arbitrary script lengths, reports, or supervisor sign-offs are needed.

### AI collaboration habit

Choose the interaction to fit the problem, not to maximize AI use:

- **Copilot inline completion:** a small, predictable code edit whose intent you already understand. Read the suggestion before accepting it.
- **Copilot Chat in the IDE:** an explanation, investigation, or bounded change that needs selected code context. Request a plan or explanation before edits when the cause or scope is unclear.
- **Gemini:** a behavior specification, alternative plan, or skeptical review using only the non-sensitive context you provide. It cannot see your project or Inspector; explicitly label missing context.
- **Direct Unity action without AI:** a familiar scene or Inspector edit you already know how to make. AI is optional here; Unity still verifies the result.

L1 does not require autonomous agents or external delivery workflows. If inline completion is unavailable, use Copilot Chat for the same small suggestion and inspect it before applying it; do not install another tool.

Use the smallest relevant non-sensitive code slice plus the callback, call site, or Inspector facts needed to answer the question. If an answer depends on an unseen helper or reference, inspect it and add only the missing context. Do not paste the entire project or ask AI to guess missing objects, APIs, or settings. For confidential material, use a disposable non-sensitive example rather than sharing the original.

Reuse this short prompt structure, omitting fields that do not apply:

```text
Goal: one behavior or question.
Context: relevant code and observed scene/Inspector facts.
Expected / actual: inputs and behavior, plus relevant Console evidence.
Constraints: existing Editor/input approach; no new packages or unrelated changes.
Request: explanation, hypotheses, plan, review, or a bounded suggestion.
Unknowns and check: ask for missing facts; state what I will inspect or run in Unity.
```

Before accepting a change, compare it with the requested scope and explain it yourself. After applying it, save and check normal, boundary, and adjacent behavior in Unity. Keep the useful prompt and decision with the day's existing output; do not create a separate report or prompt quota.

### Week 1 — AI and code foundations

#### Day 1 — Meet Gemini and brief the game
1. In [Gemini](https://gemini.google.com), start with: "I'm a game developer building a 2D side-scroller in Unity. Ask me five questions before suggesting anything." Answer all five.
2. Send five prompts, one each for: concept, movement feel, patrol enemy, two power-ups, level readability. Each needs a goal, the context Gemini cannot see, and the output shape you want.
3. Extend the best prompt into a one-page game-design brief: concept, movement set, one patrol enemy, two power-ups, first level purpose. Cut anything you did not ask for.
4. Confirm Unity, GitHub Copilot, and the Unity CLI are installed before Day 2.

**Output:** five prompts, the brief, and the prompt change that helped most.
- [ ] I wrote and sent five distinct game-development prompts, and one became a scoped brief that Days 2–5 can build from.

#### Day 2 — Set up Unity and build the player controller
Prerequisite: Unity, GitHub Copilot, and the Unity CLI installed.

1. Open the Week 1 project and confirm the Editor version from `ProjectSettings/ProjectVersion.txt`.
2. Ask Copilot: "Write a 2D Mario-style PlayerController: horizontal input, one grounded jump, gravity, and a ground check with Physics2D.OverlapCircle. Use the existing input approach and no new packages."
3. Inspector: moveSpeed 5, jumpForce 11, gravityScale 3, ground check radius 0.15, Ground layer mask.
4. Platform: a 2D square scaled to 8 × 0.5 at ground level, player spawned above it.
5. Play: the player lands, moves, and jumps once. Jumping again in the air does nothing. Console clean.

**Output:** the controller, the platform, the path you took, and the Play Mode results.
- [ ] The player moves, lands on a real platform, and jumps only from the ground, and I can explain the controller I accepted.

#### Day 3 — Build a patrolling enemy
1. Ask Copilot: "Write an EnemyPatrol: moves on X at an exposed speed, flips at a wall or a ledge using a ground check ahead of it."
2. Ask Copilot: "Add contact rules: a side hit kills the player and reloads the level; a hit from above kills the enemy. Tell them apart with the player's fall velocity."
3. Inspector: speed 2, ledge check offset 0.5, stomp threshold −0.5.
4. Place the enemy on a platform with a ledge at each end.
5. Play: walk in → reset; land on top → enemy dies, player lives; full patrol → turns at both ledges, never falls.

**Output:** the enemy script, the Inspector values, the three results.
- [ ] The enemy patrols without falling, side contact resets the game, and a stomp removes the enemy.

#### Day 4 — Add two power-ups
1. Ask Copilot: "Write a PowerUp pickup: triggers on player contact, exposes type, duration, and effect values, and disables itself after collection."
2. Invulnerable and faster: duration 8s, speed ×1.5, enemy and spike contact do nothing while active.
3. Big player: scale ×1.5, jump ×1.4, absorbs one killing hit, then reverts and ends.
4. Place one of each in the level.
5. Play each: collect, confirm the effect, take the hit it should absorb, confirm it ends, confirm normal play returns.

**Output:** both buffs, their duration and value settings, before/during/after results.
- [ ] Both power-ups activate on pickup, change what they claim to, and expire without breaking normal play.

#### Day 5 — Design and build a level
1. Ask Copilot Chat: "Describe this game from these scripts: concept, core loop, controls, entities, rules. Mark anything not in the code as unknown."
2. Correct the description against the build until it is accurate.
3. Give Gemini the corrected description and the scene size; ask for a level: platform layout, enemy positions, power-up placement, one-line reason each. Limit: one enemy type, two buffs.
4. Build it in Unity from existing parts; cut anything you have not built.
5. Play start to reset: completable, both buffs reachable, at least one enemy avoided or stomped.

**Output:** the design summary, the Gemini level, the built level, the correction.
- [ ] The level uses only existing systems, plays from start to reset, and I recorded where the written design had to change.

### Week 2 — Build a small Unity feature

#### Day 6 — Camera that follows the player
1. Ask Copilot: "Write a camera script that follows the player's X with Lerp smoothing, keeps Y fixed, and exposes follow speed."
2. Attach it to Main Camera; set Target = Player, Y = 0, Follow Speed = 5.
3. Play the whole level: the player stays on screen and the camera does not jitter.
4. Console: no new errors.

**Output:** the camera script, its Inspector values, and the play result.
- [ ] The camera follows the player across the whole level without jitter and gameplay is unchanged.

#### Day 7 — Add a goal and a win state
1. Add a flag sprite at the level end with a BoxCollider2D set to Is Trigger.
2. Ask Copilot: "Write a GoalTrigger: on player contact, stop player input and set a `Level complete` state. Fire once only."
3. Check the collider is a trigger and the player carries the Player tag.
4. Play three cases: reach the goal (win), die to an enemy (reset, not win), reach the goal with a buff active (still win).
5. Console: no new errors.

**Output:** the goal object, the trigger script, the three results.
- [ ] Reaching the goal wins, dying still resets, and a buff does not block the win.

#### Day 8 — First movement improvement
1. Pick one rule from the Day 1 brief the build does not satisfy, such as variable jump height.
2. Ask Gemini to critique the rule against the current controller in three sentences.
3. Ask Copilot: "Change the jump so releasing the jump button cuts upward velocity to 50%."
4. Inspect the suggestion for unrelated edits, invented APIs, and new packages.
5. Play: a tap gives a low jump, holding gives full height, and the jump still starts from the ground only.

**Output:** the change, the normal and boundary results, and why the accepted code fits.
- [ ] The new rule works and existing movement still behaves as before.

#### Day 9 — Control feature creep
1. Ask Gemini for 10 improvements the game could take.
2. Sort all 10 into essential, later, and out-of-scope; one reason each.
3. Reject at least two even if Gemini calls them easy. Defer UI frameworks, save systems, audio, and multiplayer by default.
4. Implement one tiny refinement only.
5. Play it, then play the level once more for regressions.

**Output:** the sorted list and the one refinement you shipped.
- [ ] I shipped one small refinement and can defend two rejections.

#### Day 10 — Gameplay versus presentation
1. Pick one effect: enemy squash on stomp, a spark on buff pickup, or a flash on damage.
2. Ask Gemini: "Smallest Unity-only way to add this effect with no new packages and no gameplay change."
3. Decide accept, reject, or defer, and record why.
4. Build it with SpriteRenderer tint, a particle system, or an Animation clip.
5. Play: the effect appears, and movement, enemy, and buffs behave exactly as before.

**Output:** the prompt, the decision and reason, and the effect result. A verified no-code solution is valid.
- [ ] The effect is visible and gameplay behavior is unchanged.

### Week 3 — Plan, implement, and review

#### Day 11 — Map the build and add a spike hazard
1. Map the level scene: object → script → Inspector references, for player, platforms, enemy, pickups, goal, camera.
2. Give Copilot only the player and enemy scripts: "Explain the path from input to death and reset, and name the method that reloads the level."
3. Ask Copilot: "Write the spike trigger script that calls that reload method on player contact."
4. Spikes: sprite plus a BoxCollider2D set to Is Trigger, placed on the level floor.
5. Play four cases: walk in (death and reset), jump over (no death), buff active (no death), buff expired (death).

**Output:** the map, the spike script and object, the four results.
- [ ] Spikes kill and reset through the existing death path, except while the buff is active.

#### Day 12 — Coins, a counter, and the task brief
1. Write the Task A brief: +1 per coin, no second award on re-contact, count resets on death, exclusions, unknowns.
2. Ask Copilot: "Write a Coin: on player contact add 1 to the score, then disable the coin so it cannot award twice."
3. Build the prefab: sprite plus a CircleCollider2D set to Is Trigger, with the script attached.
4. Place 10 coins across the platform layout.
5. Play: all 10 give 10, dying resets the count to 0, and no coin awards twice.

**Output:** the brief, the prefab, the results.
- [ ] Each coin awards exactly once and the count resets on death.

#### Day 13 — HUD, lives, and a review you verify
1. Ask Copilot: "Write a HUD script with two UI labels, coins and lives, lives starting at 3."
2. Build a Canvas set to Screen Space Overlay with both labels top-left, and assign the references.
3. Wire each death to remove one life and update the label.
4. Give Gemini the counter and lives scripts; ask what could double-count or desync the HUD.
5. Record each claim as evidence, check, and verdict; fix only verified ones.

**Output:** the HUD, the claim list, the fixes.
- [ ] The HUD matches the actual values, and every review claim is verified or rejected with a reason.

#### Day 14 — Checkpoint and respawn
1. Ask Copilot: "Write a Checkpoint: on player contact, set the respawn position once and change the sprite colour."
2. Add two checkpoint flags with trigger colliders, one per half of the level.
3. Death places the player at the last active checkpoint; with none, at the level start.
4. At 0 lives, restart the level from the start with 3 lives and no active checkpoint.
5. Play: die before any checkpoint, die after one, die three times.

**Output:** the checkpoints and the three results.
- [ ] Death returns to the last checkpoint, and 0 lives restarts the level cleanly.

#### Day 15 — Task A delivery
1. Play start to goal with all four systems active.
2. Check every Task A criterion from Day 12 against the observed result.
3. Regression: camera, win state, stomp, both buffs.
4. Ask Copilot to explain any failure before changing code; fix one cause at a time.
5. Record two defects with the evidence that confirmed each, and one thing the brief missed.

**Output:** the criteria results, the two defects, the gap.
- [ ] Task A meets its criteria and regression checks, and I can explain the accepted code.

### Week 4 — Finish the game

#### Day 16 — Build Level 2
1. Duplicate the level scene and save it as `Level2`.
2. Keep the player, camera, HUD, and checkpoint objects; change only the layout: platforms, spikes, enemies, coins.
3. Ask Copilot: "List every hardcoded position and direct object reference in this scene that would break if the layout changed."
4. Play start to goal: reachable, 10 coins collectible, at least one spike and one enemy in the path.
5. Fix what breaks inside `Level2` only; leave Level 1 untouched.

**Output:** the Level 2 scene and its play result.
- [ ] Level 2 is playable start to goal from existing parts, and Level 1 still plays.

#### Day 17 — Level progression
1. Ask Copilot: "Write a LevelManager: on goal contact load the next scene by build index, and on the last level load the ending scene."
2. Add both level scenes to Build Settings in order.
3. Ask Copilot to carry coins and lives across scene loads, and to reset them only on a new game.
4. Play: finish Level 1 → Level 2 loads with the same coins and lives.
5. Play: die in Level 2 → you respawn in Level 2, not Level 1.

**Output:** the level manager and both play results.
- [ ] Finishing a level loads the next one with coins and lives intact, and death stays in the current level.

#### Day 18 — Challenge the level and ending design
1. Write the Task B brief: a harder but finishable Level 3, an ending screen showing the final score, exclusions, unknowns.
2. Build Level 3 from the same parts; make the spike and enemy placement the hardest you can still finish.
3. Ask Copilot: "Write an ending screen Canvas that shows the final score and a restart button."
4. Give Gemini the brief; ask for concerns tied to a criterion or supplied evidence. Accept, reject, or defer each with a reason.
5. Play: finish Level 3 → the ending shows the correct total; restart → Level 1 with score 0.

**Output:** the brief, the decision list, the ending screen.
- [ ] I defended or revised the Task B design from evidence rather than AI confidence.

#### Day 19 — Scoreboard and Task B delivery
1. Implement Task B from the Day 18 brief.
2. Ask Copilot: "Score = coins collected + 10 per remaining life."
3. Ask Copilot: "Write a top-five scoreboard saved in PlayerPrefs, sorted high to low, one entry per finished run."
4. Show the scoreboard on the ending screen and after a game over.
5. Play: a new score appears in order, only five are kept, and the list survives closing and reopening the game.

**Output:** the score, the scoreboard, the test results.
- [ ] The scoreboard saves, sorts, and keeps five entries across restarts.

#### Day 20 — Full playthrough and retrospective
1. Play all three levels start to finish without debugging in the Console.
2. Record total time, deaths, final score, and one bug you found.
3. Confirm both tasks' results before claiming the two-task outcome.
4. Reuse one effective prompt from your notes, add its context and check, and keep it for the next task.
5. Write one paragraph: what Copilot did well and where you had to verify it.

**Output:** the playthrough record, the two-task status, the reusable prompt.
- [ ] I played all three levels and reported both tasks from actual results.

## Level 2 — Controlled AI-assisted delivery (Days 21–40)

Level 2 adds Hermes and bounded GitHub workflows to the core tools above. Progress from learning review skills to handoff generation, authorized issue-to-PR delivery, and a final locally verified task. Issue requirements remain authoritative; AI review never replaces independent human review or CI.

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
Deliver one polished platformer improvement with observable criteria, scoped AI assistance, and Unity Play Mode verification. **Output:** a playable result and concise evidence note.

#### Day 79 — Retrospective on quality
Review the capstone and the 80-day notes. Ask Gemini for questions, then identify one process strength, one limitation, and one next learning goal. **Output:** a short retrospective.

#### Day 80 — Final Unity validation
Reopen the capstone scene in Unity, exercise its main behavior and failure case in Play Mode, and explain the code without AI. **Output:** a final checklist with passed, failed, and unavailable checks stated accurately.

## Completion standard

The program is complete when the learner can independently plan a bounded Unity change, use Copilot and Gemini without surrendering judgment, inspect the C# implementation, and verify the behavior in Unity. No external software, cloud workflow, source-control service, training submission, or supervisor sign-off is part of this plan.
