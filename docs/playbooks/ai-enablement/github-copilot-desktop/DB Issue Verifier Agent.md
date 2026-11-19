# 🧪 DB Issue Verifier Agent (GitHub Copilot Desktop) Playbook

## DEFINE

| Field | Value |
| --- | --- |
| Playbook Name | DB Issue Verifier Agent (GitHub Copilot Desktop) Playbook |
| Purpose | Standardize how team members use the **DB Issue Verifier** agent in GitHub Copilot Desktop to verify whether DB-centric GitHub issues are resolved with evidence. |
| Owner | AI Enablement Team |
| Last Updated | 2026-07-15 |
| Review Cycle | Every 90 days |

## Prerequisites

- [ ] You are signed in to GitHub Copilot Desktop
- [ ] Engineering MCP server connection is configured: [GitHub Copilot Desktop MCP Server Connection](GitHub%20Copilot%20Desktop%20MCP%20Server%20Connection.md)
- [ ] The **DB Issue Verifier** agent is available in your Copilot environment
- [ ] You have the target issue URL/number and repository (`owner/repo`)
- [ ] You have (or can confirm) an allowlisted MyQuery `connection` and `database`
- [ ] You know the verification window (`startDate`, `endDate`)

**IF the Engineering MCP server is not configured, THEN complete the MCP connection playbook first before running DB Issue Verifier.**

## Step-by-Step Checklist

### Phase 1: Start a Dedicated Verification Session

1. **Open** GitHub Copilot Desktop.
2. **Start** a fresh chat/session for one issue verification scope.
3. **Select** the **DB Issue Verifier** agent.
4. **Confirm** the active agent before sending issue context.

- [ ] New chat/session created for verification scope
- [ ] DB Issue Verifier selected
- [ ] Wrong agent is not active

**IF the wrong agent is active, THEN switch to DB Issue Verifier before continuing.**

---

### Phase 2: Provide Verification Context Up Front

1. **Send** issue and repository context first.
2. **Provide** source context (`connection`, `database`) and date range.
3. **Include** expected acceptance criteria if known (mergecodes, handlers, action values, variables).
4. **State** that unknown non-critical details should be listed as blockers, not guessed.

Use this starter prompt:

```text
Use DB Issue Verifier for issue: [issue URL or owner/repo#issue]

Repository: [owner/repo]
MyQuery source:
- connection: [connection]
- database: [database]
Date range:
- startDate: [YYYY-MM-DD]
- endDate: [YYYY-MM-DD]

Expected acceptance criteria (if known):
- mergecodes: [...]
- handlers: [...]
- action values: [...]
- required variables: [...]

Return:
1) verdict + confidence
2) covered vs uncovered criteria
3) blockers + next actions
4) evidence citations
```

- [ ] Issue and repository provided
- [ ] Source and date range provided
- [ ] Acceptance criteria included or explicitly marked unknown

---

### Phase 3: Run Evidence-Based Verification

1. **Ask** the agent to validate allowlisted sources and run assessment.
2. **Require** evidence-backed coverage for mergecodes/handlers/action values/variables.
3. **Require** SQL definition-row checks when history rows are incomplete.
4. **Request** result-set diff analysis only when baseline/candidate row sets are available.

Prompt add-on:

```text
Please verify using standard DB Issue Verifier workflow:
- validate source allowlist
- run assess_mergequery_updates
- if SQL evidence is incomplete, fetch mergequery definition rows and reassess
- if baseline/candidate result rows are provided, run keyed result-set diff analysis

Do not claim full resolution without evidence for critical acceptance criteria.
```

- [ ] Allowlist validation performed
- [ ] Coverage assessment returned
- [ ] Definition-row evidence used when needed
- [ ] Diff evidence used when data available

---

### Phase 4: Review Verdict and Resolve Gaps

1. **Review** the returned verdict:
   - `likely-resolved`
   - `partial`
   - `not-resolved`
2. **Confirm** confidence aligns with evidence quality.
3. **Check** uncovered criteria and unknown variables/action values.
4. **Capture** blockers and convert them into follow-up tasks.

- [ ] Verdict is explicit
- [ ] Confidence is justified by evidence
- [ ] Uncovered criteria are listed
- [ ] Blockers and next actions are concrete

**IF critical criteria are uncovered, THEN treat the issue as `partial` or `not-resolved` and run follow-up verification after updates.**

---

### Phase 5: Record the Verification Decision

1. **Summarize** final status in your issue/PR thread with cited evidence.
2. **Link** key evidence references (history rows, definition rows, result diffs, provided SQL snippets).
3. **Store** unresolved items as actionable follow-up tasks.

- [ ] Final status posted with evidence references
- [ ] Evidence links retained
- [ ] Follow-up tasks created for open gaps

## Common Mistakes & Fixes

| Mistake | Fix |
| --- | --- |
| Starting without issue/repo context | Always start with issue URL/number and `owner/repo`. |
| Using vague acceptance criteria | Provide expected mergecodes, handlers, action values, and variables when known. |
| Treating missing evidence as resolved | Keep verdict at `partial`/`not-resolved` until critical criteria are covered. |
| Skipping SQL definition-row checks | Require definition evidence when history rows do not contain enough SQL detail. |
| Missing blockers in final output | Force explicit blockers + next actions in every verdict. |

## Success Criteria

- [ ] Team member can run DB Issue Verifier in GitHub Copilot Desktop
- [ ] Verification context is provided in a complete, reusable format
- [ ] Final verdict is evidence-cited and confidence-rated
- [ ] Uncovered acceptance criteria are explicitly tracked as follow-up work

## Reference

- `C:\Users\lordk\Documents\GitHub\.github-private\agents\db-issue-verifier\AGENTS.md` (canonical agent behavior reference)
