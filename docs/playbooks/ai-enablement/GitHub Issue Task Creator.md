# 📝 GitHub Issue Task Creator Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | GitHub Issue Task Creator Playbook |
| Purpose | Standardize how the Product Team converts meeting notes, product requests, bug reports, and rough task ideas into well-structured GitHub issues using the org-wide GitHub Issue Task Creator agent instead of a manual planning workflow. |
| Owner | Product Team |
| Last Updated | 2026-08-11 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] You have access to the org-wide agent: **GitHub Issue Task Creator**  
- [ ] You can open the shared Copilot Space or agent entry point where **GitHub Issue Task Creator** is available  
- [ ] You know the target repository in `owner/repo` format  
- [ ] You have permission to create or update issues in the target repository if direct issue writing is needed  
- [ ] You have meeting notes, product notes, customer feedback, bug reports, or task requests ready  
- [ ] You know whether you want the agent to **draft only** or **create/update GitHub issues**  
- [ ] You have reviewed the team's priority system using the [GitHub Issue Priority Levels](../../planning-and-reporting/GitHub%20Issue%20Priority%20Levels.md) playbook (P1–P10)
- [ ] You know the team’s estimation method, if one exists  
- [ ] You know the target sprint, milestone, release, or due date, if relevant  
- [ ] You are prepared to answer concise clarification questions from the agent  
- [ ] You have this playbook open during the session

## Step-by-Step Checklist
### Phase 1: Define the Task Batch

1. **Collect** all rough notes, requests, or meeting takeaways into one working document.  
2. **Name** the task batch based on the meeting, product area, feature, bug group, or initiative.  
3. **Confirm** whether the agent should draft issues only or create/update GitHub issues.  
4. **Identify** the target repository in `owner/repo` format.  
5. **Identify** who will review the generated issue drafts.  
6. **Confirm** whether the request contains one task or multiple tasks.  
7. **Separate** unrelated tasks before sending them to the agent.  
- [ ] Source notes are collected  
- [ ] Task batch has a clear name  
- [ ] Target repository is confirmed  
- [ ] Draft-only or create/update mode is confirmed  
- [ ] Reviewer is identified  
- [ ] Tasks are separated if the batch contains multiple requests

**IF the target repository is unknown, THEN stop and confirm the correct `owner/repo` before continuing.**

**IF you only want a draft, THEN explicitly tell the agent not to create or update GitHub issues yet.**

---

### Phase 2: Clean and Prepare the Notes

1. **Combine** all notes into one cleaned working draft.  
2. **Group** notes by feature area, workflow, user role, product surface, or bug category.  
3. **Expand** shorthand into complete statements.  
4. **Remove** duplicate, completed, or irrelevant items.  
5. **Add** known business context.  
6. **Add** known user or customer impact.  
7. **Add** known scope boundaries.  
8. **Add** known dependencies.  
9. **Add** known due date, release, sprint, or milestone.  
10. **Mark** unknown non-critical values as `TBD`.  
- [ ] Notes are organized  
- [ ] Shorthand is expanded  
- [ ] Duplicates are removed  
- [ ] Business context is included  
- [ ] Scope boundaries are included where known  
- [ ] Dependencies are included where known  
- [ ] Unknown non-critical fields are marked `TBD`

**IF the notes do not explain what should be built, changed, or fixed, THEN rewrite them before sending them to the agent.**

**IF the notes do not explain why the task matters, THEN add the expected user or business outcome before sending them to the agent.**

---

### Phase 3: Open the GitHub Issue Task Creator Agent

1. **Open** the org-wide Copilot agent or Copilot Space where **GitHub Issue Task Creator** is available.  
2. **Confirm** the active agent is named **GitHub Issue Task Creator**.  
3. **Start** a new conversation for the task batch.  
4. **Keep** your cleaned source notes open in another tab or window.  
5. **Keep** this playbook open during the full session.  
- [ ] Correct agent is open  
- [ ] New conversation is started  
- [ ] Source notes are visible  
- [ ] This playbook is open

**IF the wrong agent or Space is open, THEN stop and switch to GitHub Issue Task Creator before continuing.**

---

### Phase 4: Provide Repository Context First

1. **Give** the repository in `owner/repo` format in the first message.  
2. **State** that the repository applies to the full conversation unless changed.  
3. **Do not** assume the agent can guess the repository.  
4. **Do not** finalize drafts without repository context.  
5. **Do not** request issue creation or updates without repository context.  
6. **Confirm** the repository again before any create/update action.

```
Repository for this thread: [owner/repo]

Use this repository for all issue drafts in this conversation unless I explicitly change it.

For now, draft only. Do not create or update GitHub issues until I explicitly ask you to.
```

- [ ] Repository is provided in `owner/repo` format  
- [ ] Repository is declared as thread-scoped  
- [ ] Agent is told whether to draft only or write  
- [ ] Repository is confirmed before create/update action

**IF the agent asks, “Which repository should I use? Please provide owner/repo (example: hurdman/geomap),” THEN reply with the exact target repository in `owner/repo` format.**

**IF the repository changes mid-thread, THEN clearly state the new repository before continuing.**

```
Change repository for this thread to: [new-owner/new-repo]

Use this repository for all following drafts and issue operations unless I change it again.
```

---

### Phase 5: Communicate Thread-Scoped and Task-Scoped Details

1. **Treat** repository as thread-scoped information.  
2. **Reuse** repository context only within the same conversation.  
3. **Treat** task title, scope, priority, assignee, due date, and acceptance criteria as task-scoped information.  
4. **Repeat** task-specific information when starting an unrelated task.  
5. **State** which details apply to the full batch.  
6. **State** which details apply only to a specific task.

```
The following details apply to the full batch:

Repository: [owner/repo]
Default status: To Do
Priority system: P1–P10 (see [GitHub Issue Priority Levels](../../planning-and-reporting/GitHub%20Issue%20Priority%20Levels.md) playbook)
Estimation method: [story points / hours / t-shirt size / TBD]
Target release: [release / sprint / milestone / TBD]

Task 1:
[Paste task notes]

Task 2:
[Paste task notes]

Task 3:
[Paste task notes]
```

- [ ] Repository is treated as thread-scoped  
- [ ] Task-specific details are not reused across unrelated tasks  
- [ ] Batch-wide defaults are clearly identified  
- [ ] Each task has its own notes

**IF a detail applies to every task, THEN place it under “full batch.”**

**IF a detail applies to only one task, THEN place it under that specific task.**

---

### Phase 6: Ask the Agent to Draft Issues

1. **Tell** the agent whether the request is draft-only or create/update.  
2. **Paste** the cleaned task notes.  
3. **Ask** the agent to use the required GitHub issue format.  
4. **Ask** the agent to ask concise clarification questions only for missing critical information.  
5. **Ask** the agent to use `TBD` for unknown non-critical fields.  
6. **Ask** the agent not to fabricate repository identity or critical facts.  
7. **Ask** the agent to separate confirmed facts from assumptions.

```
Repository for this thread: [owner/repo]

I want drafts only for now. Do not create or update GitHub issues yet.

Please convert the notes below into GitHub-ready issue drafts using the GitHub Issue Task Creator format.

Ask concise grouped clarification questions only for missing critical information.
Use TBD for unknown non-critical fields.
Do not fabricate repository identity or critical details.
Separate confirmed facts from assumptions.

Notes:
[paste cleaned notes here]
```

- [ ] Draft-only or write intent is stated  
- [ ] Repository is included  
- [ ] Cleaned notes are pasted  
- [ ] Agent is told to ask only for missing critical details  
- [ ] Agent is told to use `TBD` for non-critical unknowns  
- [ ] Agent is told not to fabricate critical facts

**IF you only want drafts, THEN include: “Do not create or update GitHub issues yet.”**

**IF you want the agent to improve existing issues, THEN provide issue numbers or links.**

```
Repository for this thread: [owner/repo]

I want to improve existing GitHub issues. Do not update them yet.

Please review the following issue numbers or links and propose improved issue bodies using the standard GitHub Issue Task Creator format.

Issues:
- [issue number or link]
- [issue number or link]

Use TBD for unknown non-critical fields.
Ask concise clarification questions only for missing critical information.
Do not update the issues until I explicitly approve the revised drafts.
```

---

### Phase 7: Verify the Required Issue Format

1. **Check** that every generated issue draft includes `Task Title`.  
2. **Check** that every generated issue draft includes `Task Description`.  
3. **Check** that every generated issue draft includes `Requirements`.  
4. **Check** that every generated issue draft includes `Assignees / Owners`.  
5. **Check** that every generated issue draft includes `Dependencies`.  
6. **Check** that every generated issue draft includes `Acceptance Criteria`.  
7. **Check** that every generated issue draft includes `Definition of Done (DoD)`.  
8. **Check** that every generated issue draft includes `Priority`.  
9. **Check** that every generated issue draft includes `Estimation`.  
10. **Check** that every generated issue draft includes `Status`.  
11. **Check** that every generated issue draft includes `Comments / Activity Log`.  
12. **Check** that every generated issue draft includes `Due Date / Target Release`.

```
### Task Title

[{target-module}:{ sub-module-if-applicable: }{short-description}] — e.g. `Emmy: Automation: AI sometimes puts spam emails into client folder` (Simplabots) or `Communications Center: chat cards don't display time` (BPC CRM). Start with the target module name (feature area, not the repository), add a colon plus sub-module when applicable, then a short, actionable description.

### Task Description

[What the task is, why it matters, and relevant context]

### Requirements

- [Functional requirement]
- [Non-functional requirement]
- [Business rule]
- [Constraint]
- [Relevant link to docs, design, ticket, prototype, or discussion]

### Assignees / Owners

- [Responsible person or team]
- TBD if unknown

### Dependencies

- Blocked by:
  - [Dependency or TBD]
- Blocks:
  - [Downstream task or TBD]
- Related:
  - [Related issue, system, workflow, or TBD]

### Acceptance Criteria

- [ ] Given [context], when [action], then [expected result]
- [ ] [Specific, testable completion condition]

### Definition of Done (DoD)

- [ ] Implementation or deliverable is complete
- [ ] Tests or validation are completed
- [ ] Documentation is updated, if applicable
- [ ] Code review or stakeholder review is complete
- [ ] Acceptance criteria are verified

### Priority

[P1 / P2 / P3 / P4 / P5 / P6 / P7 / P8 / P9 / P10]

See [GitHub Issue Priority Levels](../../planning-and-reporting/GitHub%20Issue%20Priority%20Levels.md) playbook for definitions.

[If recommended by the agent, include one-line blocking-impact rationale]

### Estimation

[Story points / hours / t-shirt size / TBD]

### Status

[To Do / In Progress / In Review / Done]

### Comments / Activity Log

## Common Mistakes & Fixes
| Common Mistake | Fix |
| :---- | :---- |
| Using a manual Plan/Agent workflow instead of the org-wide agent | Open **GitHub Issue Task Creator** and let the agent handle clarification-first drafting |
| Assuming the agent knows the repository | Provide `owner/repo` in the first message |
| Asking the agent to create issues too early | Use draft-only mode until the issue body is reviewed |
| Sending raw notes without cleanup | Organize notes by feature, workflow, user role, or product area first |
| Letting the agent fabricate critical details | Require clarification for missing critical information and use `TBD` for non-critical unknowns |
| Treating task-specific details as reusable across unrelated tasks | Repeat title, scope, priority, due date, and acceptance criteria for each unrelated task |
| Mixing assumptions with confirmed facts | Require separate confirmed facts, assumptions, and open questions |
| Skipping pre-write confirmation | Confirm repository, title, scope, and priority before create/update actions |
| Approving vague acceptance criteria | Rewrite acceptance criteria as testable checklist items or Given/When/Then statements |
| Forgetting to verify the final GitHub issue | Open the issue after creation/update and confirm repository, format, and metadata |
| Not saving session records | Store notes, clarifications, and issue links for traceability |

## Success Criteria
- [ ] Product Team uses **GitHub Issue Task Creator** instead of a manual Plan/Agent workflow  
- [ ] Repository is provided in `owner/repo` format before draft finalization  
- [ ] Repository is confirmed before any create/update action  
- [ ] The agent is told whether to draft only or create/update issues  
- [ ] Every generated or improved issue follows the required format  
- [ ] Priority uses P1–P10 with reference to [GitHub Issue Priority Levels](../../planning-and-reporting/GitHub%20Issue%20Priority%20Levels.md) playbook
- [ ] Critical details are confirmed instead of fabricated  
- [ ] Unknown non-critical details are marked `TBD`  
- [ ] Acceptance criteria are testable  
- [ ] Confirmed facts, assumptions, and open questions are separated  
- [ ] Created or updated issues are verified directly in GitHub  
- [ ] Source notes, clarification history, and issue links are stored centrally

## Storage & Access
Store this playbook in the central Product Team playbook library, internal wiki, or shared operations folder where Product Team members can access it during issue drafting and GitHub task creation sessions.

**Always Open Policy:** Keep this playbook open while preparing notes, communicating with **GitHub Issue Task Creator**, reviewing drafts, confirming critical fields, creating or updating GitHub issues, and verifying final output in GitHub. Do not rely on memory. Use the SOP live so repository context, task formatting, and issue quality remain consistent.

Use this playbook for:

- Product meeting follow-up  
- Customer feedback breakdown  
- Feature request conversion  
- Bug triage conversion  
- Existing issue cleanup  
- Sprint-ready task preparation  
- Product-to-engineering handoff

## Next review date
2026-11-11

## Confirmed Facts
- [Confirmed fact]

## Assumptions
- [Assumption or TBD]

## Open Questions
- [Open question or None]

### Due Date / Target Release

[YYYY-MM-DD / sprint / milestone / release target / TBD]
```

- [ ] All required sections are present  
- [ ] Acceptance criteria are testable  
- [ ] Definition of Done is separate from acceptance criteria  
- [ ] Priority uses P1–P9 if no team system is provided  
- [ ] Unknown non-critical fields use `TBD`  
- [ ] Confirmed facts and assumptions are separated

**IF the agent omits a required section, THEN ask it to regenerate the issue using the full required format.**

**IF the agent invents a critical detail, THEN correct it and ask the agent to move unsupported details into assumptions or open questions.**

---

### Phase 8: Answer Clarification Questions

1. **Read** every clarification question from the agent.  
2. **Answer** only the questions asked.  
3. **Group** related answers together.  
4. **Provide** exact wording for scope, business rules, and acceptance criteria.  
5. **Mark** unknown non-critical information as `TBD`.  
6. **Correct** wrong assumptions immediately.  
7. **Tell** the agent whether to continue drafting or prepare for issue creation/update.

```
Answers:

1. Repository:
[owner/repo]

2. Scope:
Included:
- [What is included]

Excluded:
- [What is excluded]

3. Business outcome:
[Expected user or business result]

4. Dependencies:
[Known dependencies or TBD]

5. Acceptance criteria:
- [ ] [Criterion 1]
- [ ] [Criterion 2]

6. Assignee / owner:
[Name/team or TBD]

7. Due date / target release:
[Date, sprint, milestone, or TBD]

Please update the draft using these answers.
Do not create or update the GitHub issue yet.
```

- [ ] Clarification questions are answered  
- [ ] Scope boundaries are clear  
- [ ] Business outcome is stated  
- [ ] Dependencies are clarified  
- [ ] Acceptance criteria are clarified  
- [ ] Unknown non-critical items are marked `TBD`

**IF the agent asks too many questions, THEN answer the critical questions first and mark optional unknowns as `TBD`.**

**IF the agent uses vague wording, THEN provide exact replacement wording.**

---

### Phase 9: Review Drafts Before Writing to GitHub

1. **Review** each issue draft from top to bottom.  
2. **Verify** the repository is correct.  
3. **Verify** the task title follows `{target-module}:{ sub-module-if-applicable: }{short-description}` and is brief and actionable.  
4. **Verify** the task description explains what, why, and context.  
5. **Verify** requirements include functional needs, non-functional needs, constraints, and business rules.  
6. **Verify** dependencies are listed.  
7. **Verify** acceptance criteria are testable.  
8. **Verify** Definition of Done is complete.  
9. **Verify** priority is present.  
10. **Verify** estimation is present or marked `TBD`.  
11. **Verify** status is present.  
12. **Verify** confirmed facts, assumptions, and open questions are separated.  
13. **Verify** due date or target release is present or marked `TBD`.  
14. **Approve** only drafts that are ready.  
- [ ] Repository is correct  
- [ ] All required sections are present  
- [ ] Critical details are not fabricated  
- [ ] Acceptance criteria are testable  
- [ ] Priority is present  
- [ ] Assumptions are clearly labeled  
- [ ] Open questions are documented  
- [ ] Draft is ready for GitHub

**IF a draft contains an inferred critical field, THEN confirm or correct it before allowing creation or update.**

**IF a draft is too broad, THEN ask the agent to split it into smaller GitHub issues.**

---

### Phase 10: Confirm Critical Fields Before Create or Update

1. **Confirm** the repository.  
2. **Confirm** the action type.  
3. **Confirm** the task title follows `{target-module}:{ sub-module-if-applicable: }{short-description}`.  
4. **Confirm** the task scope.  
5. **Confirm** the priority.  
6. **Confirm** the target issue number if updating an existing issue.  
7. **Give** explicit permission to create or update only after the draft is approved.

```
Before writing, confirm these critical fields:

Repository: [owner/repo]
Action: [Create new issue / Update existing issue #[number]]
Title: [approved title]
Scope: [approved scope summary]
Priority: [approved priority]

If these match the approved draft, proceed with the GitHub issue operation.
```

- [ ] Repository is confirmed  
- [ ] Action type is confirmed  
- [ ] Title is confirmed  
- [ ] Scope is confirmed  
- [ ] Priority is confirmed  
- [ ] Explicit write permission is given

**IF any critical field is wrong, THEN stop the write action and correct the field first.**

**IF the agent has not been explicitly asked to create or update an issue, THEN it should only return a draft.**

---

### Phase 11: Create or Update GitHub Issues

1. **Tell** the agent exactly which issue action to perform.  
2. **Provide** the repository in `owner/repo` format again.  
3. **Provide** the approved title, scope, and priority.  
4. **Paste** the approved issue body if needed.  
5. **Ask** the agent to proceed with the GitHub issue operation.  
6. **Wait** for the agent to return the issue identifier.  
7. **Read** the concise change summary.

```
Repository: [owner/repo]

Create a new GitHub issue using the approved draft below.

Critical fields confirmed:
Title: [approved title]
Scope: [approved scope]
Priority: [approved priority]

Approved issue body:
[paste approved issue body]
```

```
Repository: [owner/repo]

Update GitHub issue #[issue-number] using the approved revised issue body below.

Critical fields confirmed:
Title: [approved title]
Scope: [approved scope]
Priority: [approved priority]

Approved revised issue body:
[paste approved issue body]
```

- [ ] Correct repository is provided  
- [ ] Correct action is stated  
- [ ] Critical fields are confirmed  
- [ ] Approved issue body is provided  
- [ ] Agent returns issue identifier  
- [ ] Agent returns concise change summary

**IF the agent reports a permissions, missing fields, or write failure blocker, THEN copy the ready-to-submit draft and create or update the issue manually.**

---

### Phase 12: Verify the Final GitHub Issue

1. **Open** the created or updated GitHub issue.  
2. **Confirm** the issue is in the correct repository.  
3. **Confirm** the issue title matches the approved title.  
4. **Confirm** the issue body includes every required section.  
5. **Confirm** the priority is correct.  
6. **Confirm** the status is correct.  
7. **Confirm** assignees or owners are correct if known.  
8. **Confirm** due date, sprint, milestone, or target release is correct if known.  
9. **Confirm** the issue appears in the correct project board if automation is enabled.  
10. **Correct** any error immediately.  
- [ ] Issue exists in the correct repository  
- [ ] Issue title is correct  
- [ ] Issue body follows required format  
- [ ] Priority is correct  
- [ ] Status is correct  
- [ ] Metadata is correct  
- [ ] Project board placement is correct

**IF the issue body is missing required sections, THEN edit the issue immediately before assigning it to the team.**

**IF the issue was created in the wrong repository, THEN notify the Product Team lead and correct the mistake immediately.**

---

### Phase 13: Store the Session Record

1. **Save** the cleaned source notes.  
2. **Save** key clarification questions and answers.  
3. **Save** links to created or updated issues.  
4. **Record** unresolved open questions.  
5. **Record** repeated formatting or prompting problems.  
6. **Add** improvement ideas to the Product Team playbook backlog.

```
Task Batch:
[Name]

Repository:
[owner/repo]

Source:
[Meeting / customer request / internal planning / bug triage]

Created or Updated Issues:
- [Issue link]
- [Issue link]

Key Clarifications:
- [Question] → [Answer]

Open Questions:
- [Question or None]

Prompting Problems:
- [Problem or None]

Follow-Up Actions:
- [Action item or None]
```

- [ ] Source notes are saved  
- [ ] Clarifications are saved  
- [ ] Issue links are stored  
- [ ] Open questions are documented  
- [ ] SOP improvements are captured

**IF the same agent communication problem happens more than once, THEN update the standard prompt template.**

---
