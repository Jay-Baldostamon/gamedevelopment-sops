# Day 32: Interactive delivery

| Field | Value |
| --- | --- |
| Blueprint Name | Day 32 - Interactive delivery |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 32 delivers one handoff-backed issue end to end, one stage at a time. The output is a linked, reviewed pull request with real Unity validation, left unmerged for independent review.

The authoritative lesson is [Day 32 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-32--interactive-delivery); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 31 passed, with the delivery skill loading in a fresh session
* A valid Week 6 handoff on the issue
* Written authorization to deliver
* The pinned Unity project with a clean working tree

#### Continuity Rule

The handoff's dedup classification decides the base. MERGED stops the run, OPEN-OVERLAP forbids a parallel pull request, DEPENDENCY branches from the sibling, and CLEAR uses the confirmed base. The issue body still wins any conflict.

#### Daily Evidence Standard

* Evidence is the per-stage approval log, the PR URL, the issue link, the review request, the Project status result, and the Unity validation record.
* The PR stays unmerged and unapproved.
* No standup post and no supervisor sign-off are required on this path.

#### Unity Validation Rule

Perform every scene, prefab, and Inspector change from the agent's click-by-click steps. Play the affected behavior, confirm zero red Console errors, and capture a GIF for the pull request.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Approve the stages

1. Replace both variables, then send the prompt.
2. Approve each stage only after its real evidence is shown: handoff preflight, label, branch and plan, edits, validation, commit, push, PR, review request, Project status.
3. Stop on a classification that says the work is already delivered or covered.

### Phase 2: Hold the Unity line

1. Wire each scene or Inspector change yourself from the supplied steps.
2. Validate in Play Mode and record the real result.
3. Reject implementation outside the issue's acceptance criteria.

### Phase 3: Leave it open for review

1. Verify `Closes #<issue-number>` in the PR body.
2. Verify the review request and the Project status.
3. Confirm the PR is unmerged and unapproved.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-ISSUE-URL` | The full URL of the authorized issue |

#### Copyable AI Prompt

```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-issue-to-pr` in INTERACTIVE mode for my Unity game repository.

Confirm the valid Week 6 handoff first. Honor its Dedup/Overlap classification when choosing the base: if MERGED, stop and report the already-delivered pull request; if OPEN-OVERLAP, do not create a parallel pull request (close any redundant newer pull request as superseded, pointing at the existing one, without deleting its branch); if DEPENDENCY, create the issue branch as a child of the sibling branch, never committing onto or pushing to the sibling; if CLEAR, branch from the confirmed base.

Complete only the current stage, show real evidence, then ask "Approve the next step?" and wait for explicit approval.

Use these stages: handoff preflight; `ai-automation` label; branch and implementation plan; proposed edits; Unity validation; commit; push; pull request creation and linked-issue verification; review request; Project Status `For Review` update and verification.

For every scene, prefab, or Inspector change, give me click-by-click editor steps naming the object to select, the component to add, and the reference to drag into each field. State the Play Mode check that proves each acceptance criterion, run it, and report the real result including Console errors. Do not implement anything outside the issue's acceptance criteria.

Do not merge, bypass CI, expose secrets, or edit the issue body. At the end, provide the full final report required by the skill.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Branching before checking the handoff | Run the handoff preflight stage first |
| Creating a parallel PR when one already covers the scope | OPEN-OVERLAP: do not create a parallel pull request |
| Committing onto a sibling branch | Create the issue branch as its child and push only there |
| Implementing beyond the handoff | Map each edit to an acceptance criterion |
| Letting the agent claim Play Mode passed | Run the Play Mode check yourself and record the result |
| Skipping the Project status update | Verify `For Review`, or report the exact blocker |
| Merging or approving to "finish" | Leave both to the human reviewer |

#### Standards & Governance

* The issue body and valid handoff bound the work.
* Approval is required before each external mutation.
* Unity validation is real evidence, not a summary sentence.
* `Closes #<issue-number>`, review request, and Project status make the work traceable.
* The PR is never merged or self-approved.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Mode | Interactive, stage by stage |
| Base | Dedup classification and confirmed base |
| Label | `ai-automation` |
| Validation | Pinned Unity, Play Mode, Console, GIF |
| PR | `Closes #<issue-number>`, review requested |
| Project | `For Review` verified or blocker reported |
| Merge | Never |

- Milestone: the pull request, its verified links and status, and the Unity validation evidence are saved, and the PR is unmerged.

## End-of-Day Checklist

- [ ] Delivery started only after the handoff was confirmed valid.
- [ ] The dedup classification chose the base, and MERGED or OPEN-OVERLAP stopped the run.
- [ ] Every change maps to an issue acceptance criterion.
- [ ] Unity editor steps were supplied for each scene or Inspector change and wired by me.
- [ ] Play Mode validation ran and the real result, including Console state, is recorded.
- [ ] The PR contains `Closes #<issue-number>` and an explicit review request.
- [ ] Project status is verified as `For Review`, or the exact blocker is reported.
- [ ] The PR is unmerged and unapproved.
