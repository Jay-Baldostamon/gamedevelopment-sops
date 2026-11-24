# Day 4: Unity setup and debugging

| Field | Value |
| --- | --- |
| Blueprint Name | Day 4 - Unity setup and debugging |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 4 moves the pitch out of the browser and into Unity, then teaches debugging as a fixed procedure instead of trial and error. The output is a project on the pinned Unity version, a note on the six editor panels, the core loop rebuilt with plain shapes, and a three-entry debug log.

The authoritative lesson is [Day 4 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-4--unity-setup-and-debugging); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Pre-flight installs done: the pinned Unity LTS version with **Windows Build Support**, Unity Hub signed in, VS Code set as External Script Editor, and the AI assistant signed in
* The project folder outside Google Drive, OneDrive and Dropbox
* The Day 3 pitch, build steps and prototype at hand
* A screen recorder ready, and a `Day 4` evidence folder

#### Rule for Today and Every Day After

**AI writes, you wire.** AI can write C# but cannot click inside the Unity editor. End every request for Unity work with: "Then give me click-by-click steps for everything I need to do in the Unity editor, including which object to select, which component to add, and what to drag into each field."

#### Daily Evidence Standard

* Today's evidence lives in the `Day 4` folder. The game repository starts on Day 6.
* The six-panel note and the debug log are files in that folder.
* The core-loop GIF and the clean Console screenshot are saved there too.
* A Console message you did not capture is not evidence; copy it while it is on screen.
* No standup post and no supervisor sign-off are required on this path.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Create the project

1. Unity Hub, new project on the pinned LTS version, with the template that matches your pitch view (Universal 2D or Universal 3D). Save it outside Google Drive, OneDrive and Dropbox.
2. Press Play on the empty scene and stop, which proves the install works.

### Phase 2: Learn the editor

1. Screenshot the editor and ask AI to label each panel.
2. Write in your own words what you use each of these six for: Hierarchy, Scene view, Game view, Inspector, Project, Console. Dock the Console where you can always see it.
3. Create a test C# script from the Project panel, confirm it opens in VS Code, then delete it inside Unity.

### Phase 3: Rebuild the core loop

1. Work one step per prompt: ask for the code and the editor steps, wire it yourself, press Play, check the Console, then take the next step.
2. Use plain shapes only: squares, circles, cubes, spheres.

### Phase 4: Debug in a fixed order

1. For your first three errors: copy the full Console message with file and line.
2. Ask "What details should I give you to help debug this Unity error?" before asking for the fix.
3. Give that context, apply the fix, and log a row: error, where it showed, root cause, prompt used, fix applied, status.
4. If something does not happen and the Console is empty, treat it as a wiring problem: script not attached, slot left empty, collider missing.
5. Play the core loop with zero red Console errors and save the scene.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Asking for the whole game in one prompt | Work one build step per prompt, wiring each before the next |
| Requesting code without editor steps | End every request with the click-by-click suffix |
| Reading a silent failure as a code bug | Check wiring first: script attached, slot filled, collider present |
| Asking for a fix before capturing the error | Copy the full Console message with file and line first |
| Guessing and re-running repeatedly | Change one thing per attempt, then press Play and read the Console |
| Importing sprites, models or audio now | Plain shapes only until after Day 10 |
| Leaving Play mode with red Console errors | Fix them before saving the scene or finishing the day |

#### Standards & Governance

* The editor work is yours; an AI-written script that is not wired is not a working game.
* Every Unity request ends with the click-by-click editor suffix, without exception.
* Debugging follows the fixed order: capture the message, ask what context is needed, apply, log, verify.
* Plain shapes only. Colour, materials, particles and camera movement open on Day 9.
* The day ends in Play mode with zero red Console errors and a saved scene.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Unity version | The pinned LTS version |
| Template | Universal 2D or Universal 3D, matching the pitch view |
| Project location | Outside Google Drive, OneDrive and Dropbox |
| Editor panels | Six named in your own words: Hierarchy, Scene, Game, Inspector, Project, Console |
| Build order | One step per prompt, wired and played before the next |
| Debug log | Three entries: error, location, root cause, prompt, fix, status |
| Console | Zero red errors in Play mode |
| Scene | Saved at the end of the day |

- Milestone: the project runs the pitch's core loop in plain shapes, the six-panel note and the three-entry debug log are saved, and a clean-Console screenshot plus a core-loop GIF are in the `Day 4` folder.

## Implementation Examples (if needed)

A debug-log row and the two prompts that produce it:

```text
Error: NullReferenceException at PlayerController.cs:42 | Shown: Console on Play | Cause: playerBody slot left empty in the Inspector | Prompt: "What details should I give you to help debug this Unity error?" then the full message | Fix: dragged the Rigidbody2D into the slot | Status: fixed
```

## End-of-Day Checklist

- [ ] The project runs the pinned Unity version with the template that matches my pitch.
- [ ] I can name the six editor panels and what each one is for.
- [ ] Scripts open in VS Code from Unity.
- [ ] The core loop from my pitch plays, built one step at a time with plain shapes.
- [ ] Every Unity request asked for click-by-click editor steps.
- [ ] The debug log has at least three entries with cause, prompt and fix.
- [ ] Play mode shows zero Console errors and the scene is saved.
