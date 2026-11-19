# 📌 GitHub Issue Task Creator Agent (GitHub Copilot Desktop) Playbook

## DEFINE

| Field | Value |
| --- | --- |
| Playbook Name | GitHub Issue Task Creator Agent (GitHub Copilot Desktop) Playbook |
| Purpose | Standardize how team members use the **GitHub Issue Task Creator** agent in GitHub Copilot Desktop to turn rough notes into high-quality GitHub issue drafts, then create or update issues safely. |
| Owner | AI Enablement Team |
| Last Updated | 2026-07-07 |
| Review Cycle | Every 90 days |

## Prerequisites

- [ ] You are signed in to GitHub Copilot Desktop
- [ ] The **GitHub Issue Task Creator** agent is available in your Copilot environment
- [ ] You know the target repository in `owner/repo` format
- [ ] You have source notes ready (meeting notes, feature requests, bug notes, or customer feedback)
- [ ] You know whether this run is **draft-only** or **create/update GitHub issue**

## Step-by-Step Checklist

### Phase 1: Open Copilot Desktop and Start the Correct Agent

1. **Open** GitHub Copilot Desktop.
2. **Start** a new chat or session for issue drafting work.
3. **Select** the agent named **GitHub Issue Task Creator**.
4. **Confirm** the active agent before sending notes.

- [ ] New chat/session started
- [ ] GitHub Issue Task Creator selected
- [ ] Wrong agent is not active

**IF the wrong agent is active, THEN switch to GitHub Issue Task Creator before continuing.**

---

### Phase 2: Send Repository Context First

1. **Send** repository context in your first message.
2. **Set** whether the run is draft-only or write-enabled.
3. **Keep** repository context thread-scoped unless you explicitly change it.

Use this starter prompt:

```text
Repository for this thread: [owner/repo]

Use this repository for all issue drafts in this conversation unless I explicitly change it.

For now, draft only. Do not create or update GitHub issues until I explicitly ask you to.
```

- [ ] Repository provided in `owner/repo`
- [ ] Draft-only or write-enabled mode stated
- [ ] Thread scope for repository stated

---

### Phase 3: Provide Task Notes and Ask for Structured Drafts

1. **Paste** cleaned notes for one task or a clear batch of related tasks.
2. **Ask** the agent to output GitHub-ready issue format.
3. **Require** concise clarification questions only for missing critical details.
4. **Require** `TBD` for unknown non-critical fields.

Prompt template:

```text
Repository for this thread: [owner/repo]

Please convert the notes below into GitHub-ready issue drafts.

Ask concise grouped clarification questions only for missing critical information.
Use TBD for unknown non-critical fields.
Do not fabricate critical details.
Separate confirmed facts from assumptions.

Notes:
[paste cleaned notes here]
```

- [ ] Notes pasted
- [ ] Clarification behavior defined
- [ ] Non-critical unknowns set to `TBD`

---

### Phase 4: Review and Refine Drafts in Copilot Desktop

1. **Review** each draft in chat before any write action.
2. **Check** for required sections, and that the Task Title follows `{target-module}:{ sub-module-if-applicable: }{short-description}` (e.g. `Emmy: Automation: ...`, `Communications Center: ...`):
   - Task Title
   - Task Description
   - Requirements
   - Dependencies
   - Acceptance Criteria
   - Definition of Done
   - Priority
   - Estimation
   - Status
   - Due Date / Target Release
3. **Answer** clarification questions and request a revised draft as needed.

- [ ] Required sections present
- [ ] Acceptance criteria are testable
- [ ] Critical details are confirmed, not guessed

**IF critical fields are unclear, THEN keep draft-only mode and resolve those fields first.**

---

### Phase 5: Create or Update the GitHub Issue

1. **Reconfirm** repository, action type, title, and scope.
2. **Give** explicit permission to write.
3. **Ask** the agent to create a new issue or update a specific issue number.

Create template:

```text
Repository: [owner/repo]

Create a new GitHub issue using the approved draft below.

Critical fields confirmed:
Title: [approved title]
Scope: [approved scope]
Priority: [approved priority]

Approved issue body:
[paste approved issue body]
```

Update template:

```text
Repository: [owner/repo]

Update GitHub issue #[issue-number] using the approved revised issue body below.

Critical fields confirmed:
Title: [approved title]
Scope: [approved scope]
Priority: [approved priority]

Approved revised issue body:
[paste approved issue body]
```

- [ ] Repository reconfirmed
- [ ] Correct action (create/update) stated
- [ ] Agent returned issue reference

---

### Phase 6: Verify Final Output

1. **Open** the created/updated issue in GitHub.
2. **Confirm** repository, title, body structure, and key metadata.
3. **Fix** any mismatch immediately.

- [ ] Issue exists in correct repository
- [ ] Draft content transferred correctly
- [ ] Metadata is correct

## Common Mistakes & Fixes

| Mistake | Fix |
| --- | --- |
| Starting with notes before repository context | Always send `owner/repo` in the first message. |
| Using write mode too early | Keep draft-only mode until the draft is approved. |
| Asking for multiple unrelated issues in one ambiguous block | Split unrelated tasks into separate sections or separate runs. |
| Accepting guessed critical details | Ask the agent to move unknowns to `TBD` or open questions. |
| Skipping post-write verification | Open the GitHub issue and verify all required fields. |

## Success Criteria

- [ ] Team member can start GitHub Issue Task Creator in Copilot Desktop
- [ ] Repository context is provided first and remains explicit
- [ ] Draft-only workflow is used before issue write actions
- [ ] Final created/updated issue matches approved draft quality

## Reference

For the full enterprise workflow and expanded controls, use:  
`docs/playbooks/ai-enablement/GitHub Issue Task Creator.md`
