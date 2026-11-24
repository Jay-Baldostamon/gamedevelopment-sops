# Day 2: Prompt engineering: tiny browser game

| Field | Value |
| --- | --- |
| Blueprint Name | Day 2 - Prompt engineering: tiny browser game |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 2 trains prompt engineering by building a throwaway browser game with prompts only, then analysing what the prompts did and did not control. The output is a prototype, a numbered prompt log, pain points, at least five expected-versus-actual entries, a reflection and three rules carried into Day 3.

The authoritative lesson is [Day 2 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-2--prompt-engineering-tiny-browser-game); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 1 complete, with the five threads and their evidence saved
* Google AI Studio Apps access: <https://aistudio.google.com/apps>
* Gemini access: <https://gemini.google.com/app>
* A recorder that produces GIFs, and a `Day 2` evidence folder
* A blank prompt-log file, so the first prompt is written down as it is sent

#### Daily Evidence Standard

* Today's evidence lives in the `Day 2` folder. The game repository does not exist yet.
* The prompt log, pain points, what's-missing list, reflection and three rules are separate files in that folder.
* Game evidence is a GIF or screenshot of the prototype being played, plus the AI Studio Apps link.
* A prompt that produced nothing usable is still evidence; record it and move on.
* No standup post and no supervisor sign-off are required on this path.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Build the game with prompts

1. Open [Google AI Studio Apps](https://aistudio.google.com/apps).
2. Build this game with prompts only: "The player moves left and right along the bottom of the screen. Good and bad objects fall from the top. Catching a good object adds a point. Touching a bad object costs a life. Three lives. The game shows score and lives, ends at zero lives, and can be restarted."
3. Run at least eight prompt cycles. A cycle is: prompt, play the result, note what is wrong, prompt again.

### Phase 2: Record what the prompts did

1. Keep a numbered prompt log of every prompt in order.
2. Write your pain points: what repeatedly broke or was hard to control.
3. Write a what's-missing list with at least five entries in the form `Prompt #4: expected X, got Y`.
4. Capture a GIF or screenshot of the game being played.

### Phase 3: Reflect with Gemini

1. Paste the pain points and gaps into Gemini and ask what caused them and how the weak prompts should be rewritten.
2. Write your three prompting rules for tomorrow in your own words.

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Treating the day as website delivery | Re-centre on the prompt process; the prototype is throwaway |
| Sending one large prompt and stopping | Run eight cycles of prompt, play, note and prompt again |
| Not playing the result after a prompt | Play after every prompt; the observation is the input to the next prompt |
| Vague what's-missing entries | Use the `Prompt #N: expected X, got Y` form with the prompt number |
| Submitting a screenshot only | Submit the prompt log, pain points, what's-missing list, reflection and rules as well |
| Ending the day without rules | Write three prompting rules in your own words and carry them into Day 3 |

#### Standards & Governance

* Process quality is what counts, not the prototype: the game may look rough and still be a good day.
* The prompt log is complete or it does not count; a skipped prompt breaks the expected-versus-actual chain.
* Every gap entry names the prompt that caused it, so the reflection has something concrete to fix.
* Three prompting rules in your own words are mandatory, because they write the Day 3 initial prompt.
* The approved tool set for today is AI Studio Apps and Gemini; do not install or add anything else.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Build task | Falling-object catching game in AI Studio Apps, prompts only |
| Prompt cycles | At least eight, each played and noted |
| Prompt log | Numbered, in order, every prompt |
| Gap analysis | At least five `Prompt #N: expected X, got Y` entries |
| Pain points | List of what repeatedly broke or was hard to control |
| Reflection | Gemini analysis of causes and rewrites |
| Rules | Three prompting rules in your own words |
| Evidence location | `Day 2` folder in the workspace |

- Milestone: the throwaway prototype, its prompt log, the pain points, five gap entries, the reflection and three rules are saved in the `Day 2` folder and ready for the Day 3 pitch.

## Implementation Examples (if needed)

A prompt-log entry and the gap entries it produces:

```text
#4 - "Add a score that appears in the top corner."
Observed: the score drew, but it sat behind the falling objects.

Prompt #4: expected the score to stay readable, got it layered behind falling objects.
Prompt #6: expected three lives to end the game, got lives counting into negatives.
```

## End-of-Day Checklist

- [ ] The game runs in AI Studio Apps.
- [ ] I completed at least eight prompt cycles and played the result after each one.
- [ ] The prompt log lists every prompt in order.
- [ ] The what's-missing list has at least five "expected X, got Y" entries.
- [ ] Pain points are written down.
- [ ] The Gemini reflection is saved.
- [ ] Three prompting rules are written in my own words.
