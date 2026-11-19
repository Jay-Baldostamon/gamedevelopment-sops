# 🧾 PR Description Creator Agent (VS Code) Playbook

## DEFINE

| Field | Value |
| --- | --- |
| Playbook Name | PR Description Creator Agent (VS Code) Playbook |
| Purpose | Standardize how team members use the **pr-description-creator** agent in VS Code to generate reviewer-ready PR descriptions with consistent structure and clear evidence from actual branch changes. |
| Owner | AI Enablement Team |
| Last Updated | 2026-07-14 |
| Review Cycle | Every 90 days |

## Prerequisites

- [ ] VS Code is installed and open
- [ ] GitHub Copilot Chat is enabled in VS Code
- [ ] The `pr-description-creator` agent is available in your Copilot environment
- [ ] You are inside the repository and branch that will be used for the pull request
- [ ] You know the intended base branch (for example: `main` or `develop`)

## Step-by-Step Checklist

### Phase 1: Open VS Code in the Correct Branch Context

1. **Open** the target repository in VS Code.
2. **Confirm** your active branch is the branch you want to open as a PR.
3. **Check** that your intended base branch is known before drafting.

- [ ] Repository is open in VS Code
- [ ] Active feature branch is correct
- [ ] Base branch is identified

**IF your base branch is unclear, THEN confirm it with the tech lead/reviewer before generating the PR description.**

---

### Phase 2: Start the Agent and Set Prompt Scope

1. **Open** Copilot Chat in VS Code.
2. **Select** the `pr-description-creator` agent.
3. **Send** a short context prompt with branch intent and base branch.

Use this starter prompt:

```text
Use pr-description-creator to draft a PR description for my current branch.
Base branch: [main or develop]

Please return exactly:
## Why
## What Changes
## Notes for Reviewers

Use only evidence from the current diff and commits. If confidence is limited, state what is missing.
```

- [ ] pr-description-creator selected
- [ ] Base branch provided
- [ ] Required headings explicitly requested

---

### Phase 3: Review the Draft Before Pasting to GitHub

1. **Validate** that the draft is factual and tied to observed code changes.
2. **Check** that `Why`, `What Changes`, and `Notes for Reviewers` are all present.
3. **Ask** for one revision if the summary is too broad, too vague, or misses risk/test focus.

- [ ] All three required sections are present
- [ ] Description is evidence-based (not speculative)
- [ ] Reviewer guidance and risk focus are included

**IF key impacts are missing, THEN ask the agent for a revised draft focused on behavior change, risk areas, and test focus.**

---

### Phase 4: Paste Into PR and Finalize

1. **Open** your PR creation/edit screen in GitHub.
2. **Paste** the approved draft into the PR description body.
3. **Do** a final human pass for release notes, migration notes, and rollout context.

- [ ] Draft pasted into PR body
- [ ] Critical context is accurate
- [ ] Description is reviewer-ready

---

## Desktop App Compatibility Note

The `Why / What Changes / Notes for Reviewers` structure is currently inherent in the GitHub Copilot Desktop app behavior for this agent.

If desktop formatting evolves into a more involved template in the future, team members who previously relied on the default desktop format should begin using the `pr-description-creator` agent workflow explicitly (as documented in this playbook) to keep PR descriptions consistent and review-ready.

## Common Mistakes & Fixes

| Mistake | Fix |
| --- | --- |
| Drafting without specifying base branch | Always provide the base branch in the first prompt. |
| Accepting generic summaries | Ask for a revision tied to concrete diff evidence and reviewer risk focus. |
| Missing one of the required headings | Require exact headings: `Why`, `What Changes`, `Notes for Reviewers`. |
| Treating Desktop defaults as permanent behavior | Follow this agent playbook if formatting expectations change. |

## Success Criteria

- [ ] Team member can run `pr-description-creator` from VS Code
- [ ] PR description includes `Why`, `What Changes`, and `Notes for Reviewers`
- [ ] Content is evidence-based and reviewer-focused
- [ ] Team can preserve consistent PR description quality even if Desktop defaults change
