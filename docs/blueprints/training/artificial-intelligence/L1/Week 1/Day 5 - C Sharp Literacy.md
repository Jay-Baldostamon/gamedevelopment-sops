# Day 5: C# literacy

| Field | Value |
| --- | --- |
| Blueprint Name | Day 5 - C# literacy |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 5 proves you understand the code AI wrote for you, because code you cannot read is code you cannot debug or review. The goal is what **you** can explain, not a polished teaching style and not a gameplay demonstration.

**Gate:** blocking. Score the recording and document against [Rubrics](../../Resources/Rubrics.md) → Day 5. Any No means repeating the day with a new recording before Day 6, and Week 2 does not start until this passes.

The authoritative lesson is [Day 5 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-5--c-literacy); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* The Day 4 project opening and playing with zero Console errors
* VS Code opening your scripts from Unity
* A recorder with a microphone
* [Rubrics](../../Resources/Rubrics.md) open at Day 5
* A `Day 5` evidence folder for the document, the video link, the prediction and the GIF

#### Minimum Recording Requirements (Day 5)

* Record the **VS Code code view only**: no gameplay, no browser, no editor walkthrough
* Keep text readable; 100% zoom or higher if the font is small
* Make the microphone audio clear
* Save or export in a common format (`.mp4` recommended)
* Keep the video **30 minutes or less**
* Upload the video to a shareable location and put the link beside the supporting document in the `Day 5` folder

#### Things to Avoid (Hard Rules)

* Do **not** show gameplay or a browser click-through
* Do **not** read an AI explanation aloud; every line is explained in your own words
* Do **not** chase imported code, helper classes or other scripts
* Do **not** record before the line-by-line document exists
* Do **not** describe what the game does instead of what the code does

#### Daily Evidence Standard

* Today's evidence lives in the `Day 5` folder. The game repository starts on Day 6.
* The line-by-line document is a single file using `Line <n> | <code> | <what it does and why>`.
* The video link, the written prediction and the prediction GIF are saved there too.
* The rubric is scored from the video and document alone.
* No standup post and no supervisor sign-off are required on this path.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Select the scope

1. Pick one script from your game, usually the player controller.
2. Pick one continuous 50–100 line section. Do not chase other scripts.

### Phase 2: Study it until you can answer

1. Which object is the script attached to?
2. Which fields show in the Inspector (`public`, `[SerializeField]`)?
3. When do `Awake`/`Start`, `Update`, `FixedUpdate` and `OnTriggerEnter` run, where they appear?
4. What does each variable hold?
5. What does each `if` decide on both sides?
6. Why is it written that way, such as `Time.deltaTime`, or movement in `FixedUpdate` but input in `Update`?

### Phase 3: Write and record

1. Write the supporting document, one entry per line: `Line <n> | <code> | <what it does and why>`.
2. Record 30 minutes or less in VS Code code view only, in your own words. Start by naming the script, the object it is attached to, and its Inspector fields.
3. Do not show gameplay, and do not read an AI explanation aloud.

### Phase 4: Test your understanding

1. Change one number. Write your prediction before testing it.
2. Post the prediction and a GIF of what happened.
3. Score yourself against [Rubrics](../../Resources/Rubrics.md) → Day 5. Any No means repeating the day with a new recording before Day 6.

### Phase 5: Record demo 1

1. Record a gameplay video of five minutes or less that states your one-line pitch and plays the core mechanic.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Explaining several scripts or the whole project | Exactly one script, one continuous 50–100 line section |
| Choosing ten lines because they are easy | The explained section must be 50–100 lines |
| Starting with the first line and no context | Open by naming the script, its object and its Inspector fields |
| Reading a generated explanation aloud | Say it in your own words; AI text is not your understanding |
| Showing gameplay in the literacy video | Code view only; gameplay belongs in demo 1 |
| Deep-diving imported or helper code | Stop at the call's intent inside the selected section |
| Changing a number with no prediction | Write the prediction first, then test and record the GIF |
| Skipping the rubric because the video felt fine | Score every line; any No means a new recording |

#### Standards & Governance

* This is a comprehension check, not a feature demo; the Day 4 build already covers behaviour.
* Scope control is mandatory: one script, one 50–100 line section, nothing imported.
* Your own words are required, because the point is debugging and reviewing code you did not write.
* Day 5 is a blocking gate: Week 2 does not start until every rubric line is Yes.
* Demo 1 is a separate five-minute gameplay recording and does not replace the literacy video.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Scope | One script from the game, one continuous 50–100 line section |
| Supporting document | One entry per line: `Line <n> | <code> | <what it does and why>` |
| Video | 30 minutes or less, VS Code code view only, your own words |
| Opening | Script name, attached object, Inspector fields |
| Coverage | `Awake`/`Start`, `Update`, `FixedUpdate`, each variable, at least one `if` |
| Prediction | One number changed, predicted in writing before testing, with a GIF |
| Demo 1 | Gameplay video, five minutes or less |
| Gate | [Rubrics](../../Resources/Rubrics.md) → Day 5, all Yes |

- Milestone: the line-by-line document, the literacy video, the written prediction with its GIF and demo 1 are saved in the `Day 5` folder, and Day 5 of the rubric scores Yes on every line, which opens Week 2.

## Implementation Examples (if needed)

The supporting document is the recording script, one line per selected line of code:

```text
Line 12 | [SerializeField] private float moveSpeed = 6f; | Speed in units per second. Serialized so it appears in the Inspector and I can tune it without editing code.
Line 18 | private Rigidbody2D body; | Cache of the Rigidbody2D, so the script does not search the object for it every frame.
Line 25 | body = GetComponent<Rigidbody2D>(); | Looked up once in Awake, before the first frame, because every later frame depends on it.
Line 31 | float move = Input.GetAxisRaw("Horizontal"); | Reads left and right input once per frame as -1, 0 or 1. Input is read in Update, not in FixedUpdate.
Line 33 | if (move != 0) { facing = Mathf.Sign(move); } | Decides which way the sprite faces: right when input is positive, left when negative, unchanged at 0.
```

## End-of-Day Checklist

- [ ] The script is from my game and the explained section is 50–100 lines.
- [ ] The video is 30 minutes or less and shows code only, in my own words.
- [ ] I explained when `Awake`/`Start`, `Update` and `FixedUpdate` run.
- [ ] I explained what each variable holds and which ones show in the Inspector.
- [ ] I explained at least one `if` and what happens on both sides.
- [ ] The line-by-line document matches the video.
- [ ] The prediction was written before testing and the GIF shows the result.
- [ ] Demo 1 is posted and is five minutes or less.
