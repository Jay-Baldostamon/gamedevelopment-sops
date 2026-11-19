# 📘 SOP Creation Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Meta SOP: How to Create Standard Operating Procedures |
| Purpose | To standardize the process of creating new SOPs by conducting a recorded walkthrough session, generating a transcript, and using AI to produce a formatted SOP document, ensuring every SOP includes both written instructions and video/transcript references for additional context. |
| Owner | Alan Baldelobar |
| Last Updated | 2026-06-24 |
| Review Cycle | Every 90 days |

## Prerequisites
Before starting, ensure you have:

- [ ] A clear topic or process that needs to be documented as an SOP
- [ ] A participant to walk through the process with (the "learner" — this person's questions and confusion points will improve the SOP's clarity)
- [ ] A video conferencing tool with recording and transcription enabled (e.g., Google Meet with Gemini notes, Zoom, etc.)
- [ ] Access to an AI tool for SOP generation (e.g., GitHub Copilot Chat, ChatGPT, or equivalent)
- [ ] At least one previously completed SOP to use as the formatting reference template
- [ ] A storage location for the final SOP, recording, and transcript (e.g., GitHub repo, Google Drive, internal wiki)

---

## Step-by-Step Checklist
### Phase 1: Prepare for the Walkthrough Session

1. **Identify the SOP topic** — define what process, workflow, or setup the SOP will cover.

2. **Outline key points** you intend to cover during the walkthrough. This does not need to be detailed — a rough bullet list is sufficient to ensure you don't forget critical steps.
   - Example outline:
     - Prerequisites / what the learner needs before starting
     - Core steps in order
     - Common mistakes you've encountered
     - How to verify it worked

3. **Select your walkthrough partner** — choose someone who is unfamiliar enough with the topic that they will ask clarifying questions.
   - **Why this matters:** The learner's questions reveal gaps in your explanation that would also be gaps in the written SOP. A walkthrough to someone who already knows the process produces a weaker SOP.

4. **Schedule the session** and confirm recording/transcription tools are working before the meeting starts.

---

### Phase 2: Conduct the Recorded Walkthrough

5. **Start the recording and transcription** before beginning the walkthrough.
   - Verify the recording indicator is active.
   - Verify the AI notetaker/transcription service has joined (if applicable).

6. **Walk through the process live**, performing each step in real time while narrating what you're doing and why.
   - **Demonstrate, don't just describe** — show the actual screens, commands, clicks, and outputs whenever possible.
   - **Explain the "why" behind each step**, not just the "what" — this context is what differentiates a useful SOP from a bare checklist.

7. **Encourage the learner to ask questions** at any point. When they do:
   - Answer thoroughly — these answers often become the "Notes," "Tips," or "Common Mistakes" sections of the final SOP.
   - If a question reveals a prerequisite you forgot to mention, call it out explicitly: _"Good question — that's actually a prerequisite I should have mentioned upfront."_

8. **Call out common mistakes and edge cases** as you encounter them naturally during the walkthrough.

9. **Summarize the key takeaways** at the end of the session before stopping the recording.

10. **Stop the recording** and confirm both the video file and transcript are saved/accessible.

---

### Phase 3: Collect and Organize Source Materials

11. **Gather all outputs** from the walkthrough session:
    - [ ] Video recording file or link
    - [ ] AI-generated transcript (e.g., Gemini notes, Fireflies, Otter, etc.)
    - [ ] AI-generated summary and action items (if available)
    - [ ] Your own rough notes or outline from Phase 1

12. **Review the AI-generated transcript and summary** for accuracy.
    - **IF** the AI summary has errors (especially in action items), **THEN** correct them manually or note the corrections for the AI generation step.
    - **IF** the transcription tool restricts copying, **THEN** use the inspect method: right-click → Inspect → store element as global variable → run `temp1.innerText` in console.

13. **Identify the reference SOP** you will use as the formatting template — select a previously completed SOP that best matches the complexity and style of the new one.

---

### Phase 4: Generate the SOP via AI

14. **Open your AI tool** (GitHub Copilot Chat in IDE, or equivalent).

15. **Provide the AI with three inputs:**
    a. **The format reference** — paste or attach the sample SOP and instruct the AI to follow its structure:

```
Use the following SOP as a formatting reference. Match its structure,
tone, and level of detail:
[paste reference SOP]
```

    b. **The source content** — paste the transcript, summary, and any corrected notes:

```
Generate a new SOP based on the following walkthrough transcript
and notes. Before generating, ask me for any details you need
to clarify:
[paste transcript and notes]
```

    c. **Explicit instruction to ask questions first** — this prevents the AI from making assumptions about ambiguous parts of the transcript.

16. **Answer the AI's clarification questions** — review each one carefully, as they often catch ambiguities from the verbal walkthrough that would be confusing in written form.

17. **Review the AI-generated draft** for:
    - [ ] Structural accuracy — does it follow the reference SOP's format?
    - [ ] Content accuracy — do the steps match what was actually demonstrated?
    - [ ] Completeness — are all phases, prerequisites, and edge cases covered?
    - [ ] Common mistakes — were the learner's questions and your answers captured as tips or fixes?
    - [ ] Terminology — does it use the correct project/domain-specific terms?

18. **Iterate with the AI** to correct any issues — provide specific feedback on what needs to change rather than regenerating from scratch.

---

### Phase 5: Attach Supporting References

19. **Add links to the recording and transcript** near the top of the SOP so readers can access the original walkthrough for additional context.
    - Place these in the DEFINE table, in a dedicated "References" section, or directly after the DEFINE block:

| Resource               | Link                   |
| :--------------------- | :--------------------- |
| Walkthrough Recording  | `[link to video]`      |
| Walkthrough Transcript | `[link to transcript]` |

20. **IF** specific sections of the SOP correspond to specific timestamps in the recording, **THEN** add timestamp references inline so readers can jump to the relevant video segment for a visual demonstration.
    - Example: _"For a visual walkthrough of this step, see \[Recording at 00:12:04\]."_

---

### Phase 6: Review, Publish, and Maintain

21. **Self-review the final SOP** end-to-end by mentally (or physically) walking through each step to verify the instructions are followable.

22. **Have the walkthrough partner review the SOP** — they are the ideal first reviewer because they saw the process live and can flag anything that was demonstrated but not captured in writing.

23. **Publish the SOP** to the designated storage location (GitHub repo, internal wiki, shared drive).

24. **Share with the team** and communicate that the new SOP is available.

25. **Set the review date** — calculate based on the review cycle (default: 90 days from publication).

---

## Common Mistakes & Fixes
| Mistake                                                   | Fix                                                                                                                                                             |
| :-------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Walking through the process alone without a learner       | Always have a participant — their questions reveal blind spots and missing context that you'd otherwise skip over                                               |
| Forgetting to start the recording or transcription        | Verify both recording and transcription are active before beginning — check for the recording indicator on screen                                               |
| Trusting the AI transcript/summary without review         | Always cross-reference AI-generated transcripts against your own memory of the session — AI frequently misattributes speakers or misrepresents action items     |
| Giving the AI the transcript without a format reference   | Always provide a sample SOP as the format template — without it, the AI will invent its own structure, creating inconsistency across your SOPs                  |
| Skipping the "ask me for clarification" step              | Always instruct the AI to ask questions before generating — verbal walkthroughs contain ambiguities that are fine in conversation but confusing in written form |
| Generating the SOP but not attaching the video/transcript | The recording and transcript are the SOP's safety net — always link them so readers have a fallback when the written instructions aren't enough                 |
| Never reviewing or updating the SOP after publication     | Set and respect the review cycle — processes change, tools update, and an outdated SOP is worse than no SOP                                                     |
| Over-perfecting the transcript before AI input            | The transcript doesn't need to be clean — focus on correcting factual errors and let the AI handle restructuring                                                |

---

## Success Criteria
This playbook is complete when:

- [ ] The walkthrough session was recorded with transcription enabled
- [ ] The recording and transcript have been saved and are accessible
- [ ] Source materials were reviewed for accuracy before AI generation
- [ ] A format reference SOP was provided to the AI alongside the source content
- [ ] The AI's clarification questions were answered before the draft was generated
- [ ] The generated SOP was reviewed for structural, content, and terminological accuracy
- [ ] Recording and transcript links are embedded in the final SOP
- [ ] The SOP has been reviewed by the walkthrough partner
- [ ] The SOP is published and shared with the team
- [ ] The next review date is set

---

## Storage & Access
Store this playbook in the department playbook library in this repository so it is accessible to documentation owners and reviewers.

Recommended storage locations:

- `docs/playbooks/governance/`
- Team documentation index (if maintained)

Always Open Policy: Keep this playbook visible while conducting walkthroughs, collecting source material, and generating the final SOP draft.

Use this playbook for:

- Creating brand-new SOPs
- Rebuilding outdated SOPs through a fresh walkthrough
- Training new documentation owners on SOP authoring standards

---

## Next review date
2026-09-22

## Quick Reference: SOP Creation Workflow
| Phase             | Key Action                                                                         | Output                        |
| :---------------- | :--------------------------------------------------------------------------------- | :---------------------------- |
| **1\. Prepare**   | Outline key points, select walkthrough partner                                     | Rough topic outline           |
| **2\. Record**    | Conduct live walkthrough with recording \+ transcription on                        | Video recording \+ transcript |
| **3\. Collect**   | Gather recording, transcript, summary, and notes                                   | Organized source materials    |
| **4\. Generate**  | Feed format reference \+ source content to AI, answer clarifications, review draft | SOP draft document            |
| **5\. Reference** | Attach video and transcript links to the SOP                                       | SOP with supporting media     |
| **6\. Publish**   | Review, publish, share, and set review date                                        | Final SOP live for the team   |

---

## SOP Quality Checklist
Before publishing, verify the SOP meets these standards:

- [ ] **DEFINE table** is complete (name, purpose, owner, last updated, review cycle)
- [ ] **Prerequisites** list everything needed before starting
- [ ] **Steps are numbered and sequential** — a reader can follow them in order without jumping around
- [ ] **IF/THEN conditionals** are used for decision points and optional steps
- [ ] **Common Mistakes & Fixes** table captures real pitfalls observed during the walkthrough
- [ ] **Quick Reference** section provides an at-a-glance summary for experienced users
- [ ] **Success Criteria** defines what "done" looks like
- [ ] **Recording and transcript links** are attached and accessible
- [ ] **Review date** is set based on the review cycle

---
