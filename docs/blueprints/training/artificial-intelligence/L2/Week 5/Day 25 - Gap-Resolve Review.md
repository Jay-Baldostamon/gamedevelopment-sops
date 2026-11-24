# Day 25: Gap-resolve review

| Field | Value |
| --- | --- |
| Blueprint Name | Day 25 - Gap-resolve review |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 25 practices the only review mode that may write: gap-resolve. Hermes may fix verified acceptance-criteria gaps on an explicitly authorized branch, validate them in Unity, and push only the validated remediation. If no verified gap exists, it changes nothing.

The authoritative lesson is [Day 25 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-25--gap-resolve-review); this blueprint is its expanded execution form.

**Gate:** blocking. Score it with [Rubrics](../../Resources/Rubrics.md) → Day 25. Week 6 does not start until every line is Yes.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 24 passed
* Written authorization to write to the training branch
* The PR branch checked out in a second project folder or worktree
* A verified gap, or a genuine expectation that no gap exists
* A clean working tree recorded with `git status`

#### Continuity Rule

This is a one-time training mode override. The repository is treated as gap-resolve for this review only. The installed skills stay unchanged, and the PR stays open for human review.

#### Daily Evidence Standard

* Evidence is the gap analysis, the validation result, the commit and push result, and the verdict.
* A fix exists only when a verified acceptance criterion failed and the fix passed validation.
* If validation fails, nothing is committed and the failure is recorded.
* No standup post and no supervisor sign-off are required on this path.

#### Unity Validation Rule

Play the affected behavior on the updated branch in the pinned Unity version. Confirm zero red Console errors and capture a GIF. A failed check stops the commit.

#### Secret Rule

Keep secret redaction and command approvals on. Never print, paste, or log credentials.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Confirm the mode and the gap

1. Replace both variables, then send the prompt.
2. Confirm the run states the gap-resolve override and updates the branch from its actual base before editing.
3. Require a verified gap before any change: the failed criterion, the location, and the observed behavior.

### Phase 2: Fix only what is verified

1. Approve only the minimal remediation for that gap.
2. Reject refactors, style sweeps, and anything outside the failed criterion.
3. Validate in Unity and record the real result.

### Phase 3: Push only validated work

1. If validation passes, commit and push only the validated change.
2. If validation fails or no gap exists, create nothing and report why.
3. Confirm the PR remains unmerged and unapproved.
4. Score the Day 25 rubric.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-PR-NUMBER-OR-URL` | The pull request number or full URL |

#### Copyable AI Prompt

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

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Editing before proving the gap | Name the failed acceptance criterion and observed behavior first |
| Bundling a refactor into the fix | Change only what the verified gap requires |
| Pushing when validation failed | Commit nothing and report the failure |
| Writing on a branch you are not authorized to change | Confirm written authorization before the run |
| Skipping the branch update from base | Update from the actual base, then re-check the behavior |
| Claiming a gap exists to have something to fix | Accept and record the zero-gap result |
| Submitting a review or merging | Report the verdict and leave both to a human |

#### Standards & Governance

* Gap-resolve is authorized per run, per branch, and only for verified gaps.
* Validation comes before the commit, never after.
* The minimal remediation is the whole diff.
* The installed skills and routing policy stay unchanged.
* No merge, CI change, permission change, or secret exposure.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Mode | Fully automated gap-resolve override |
| Authorization | Written, for this branch and this run |
| Branch update | From the actual base before edits |
| Change scope | Verified acceptance-criteria gap only |
| Validation | Pinned Unity, Play Mode, Console, GIF |
| Commit and push | Only when validation passes |
| PR state | Unmerged, unapproved |

- Milestone: the gap analysis, the validated remediation or zero-gap result, the commit and push result, and the rubric score are saved.

## End-of-Day Checklist

- [ ] The gap-resolve override is stated and the installed skills are unchanged.
- [ ] The branch was updated from its actual base before any edit.
- [ ] Every change maps to a verified acceptance-criteria gap and nothing else.
- [ ] Unity Play Mode validation ran after the change and the real result is recorded.
- [ ] A commit was pushed only because validation passed, or nothing was pushed and the reason is recorded.
- [ ] The PR is still unmerged and unapproved.
- [ ] The Day 25 rubric is scored with every line at Yes.
