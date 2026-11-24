# Day 29: Auto-post handoff

| Field | Value |
| --- | --- |
| Blueprint Name | Day 29 - Auto-post handoff |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 29 is the first L2 day that writes to the repository. For one explicitly authorized issue, Hermes generates a handoff, checks for an equivalent comment, and posts at most one new comment. The output is a verified comment URL.

The authoritative lesson is [Day 29 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-29--auto-post-handoff); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 28 passed, with a verified complete draft pattern
* Written authorization to comment on the issue
* The handoff skill loading in a fresh session
* Comment permission confirmed on Day 26

#### Continuity Rule

The only permitted mutation is one comment on the authorized issue. No code, branch, label, issue-body edit, pull request, CI change, or permission change.

#### Daily Evidence Standard

* Evidence is the comment URL or the existing-equivalent URL, the dedup classification, and the base branch.
* A duplicate handoff is a failure even if the text is good.
* The issue body, labels, and repository code are unchanged afterward.
* No standup post and no supervisor sign-off are required on this path.

#### Unity Rule

The posted handoff must require click-by-click editor steps and Play Mode checks; otherwise it is not implementation-ready.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Run the authorized auto-post

1. Replace both variables, then send the prompt.
2. Require the dedup classification before any post.
3. Stop the run if the issue has critical clarification gaps.

### Phase 2: Verify the result

1. Open the returned URL and confirm it is a new comment on the correct issue.
2. Confirm no equivalent comment already existed, or accept the existing URL.
3. Confirm the issue body, labels, and repository code are unchanged.

### Phase 3: Record the evidence

1. Save the URL, the classification, and the base branch with the day's evidence.
2. Note any clarification gap that still blocks implementation.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-ISSUE-URL` | The full URL of the authorized issue |

#### Copyable AI Prompt

```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-issue-development-handoff` in fully automated AUTO-POST mode. Do not ask for intermediate approval after the placeholder preflight. Read the issue and relevant repository context, then run the Dedup/Overlap Preflight: if a merged pull request already closes the issue (MERGED), stop and return its URL without posting; if an open pull request or branch already covers the scope (OPEN-OVERLAP), do not plan covered work; if the issue depends on a sibling's unmerged pull request (DEPENDENCY), record that the downstream branch will be based on that sibling; otherwise classify CLEAR. Record the classification and confirmed base branch in the handoff's Related Work section.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Extract the issue's requirements and acceptance criteria, and report critical clarification gaps instead of inventing them.
2. Gather repository evidence for the affected scripts, scenes, prefabs, and Unity checks.
3. Generate the required AI Development Handoff comment with a viable bounded development plan and one copy-pasteable `text` prompt that requires Unity editor steps and Play Mode acceptance checks.
4. Before posting, inspect existing issue comments for an equivalent handoff. If one exists for the same issue state, do not post a duplicate; return its URL.
5. Otherwise post exactly one comment with authenticated `gh issue comment` and verify the returned comment URL.

If the issue has critical clarification gaps, do not post an implementation-ready handoff; report the gaps instead. Do not edit the issue body, write code, create branches, commit, push, open pull requests, merge, change CI, change permissions, or expose secrets.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Posting without checking existing comments | Inspect for an equivalent handoff first |
| Posting twice after an unclear result | Verify the URL; if it is ambiguous, read the issue comments before any retry |
| Posting a handoff with guessed requirements | Report clarification gaps and post nothing |
| Editing the issue body to add context | Put context in the comment only |
| Treating the label or branch as part of today | Today's only mutation is one comment |
| Accepting an unverified URL | Open the URL and confirm the issue and comment identity |
| Losing the classification | Record MERGED, OPEN-OVERLAP, DEPENDENCY, or CLEAR with the URL |

#### Standards & Governance

* One authorized issue, one handoff comment, maximum.
* Duplicate detection precedes posting.
* Critical gaps stop the post.
* The issue body and labels stay unchanged.
* No code, branch, PR, CI, or permission change.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Authorization | Written, before the run |
| Preflight | Dedup/Overlap classification and base branch |
| Duplicate check | Existing comments inspected |
| Posting | Exactly one new comment |
| Verification | Comment URL opened and confirmed |
| Evidence | Scripts, scenes, and Unity checks named |
| Other mutations | None |

- Milestone: the verified comment URL, the classification, and the base branch are saved, or the existing-equivalent result and its blocker are recorded.

## End-of-Day Checklist

- [ ] Written authorization to comment existed before the run.
- [ ] The Dedup/Overlap classification and base branch are recorded.
- [ ] Existing comments were checked for an equivalent handoff.
- [ ] At most one new comment exists, and its URL is verified.
- [ ] The issue body, labels, and repository code are unchanged.
- [ ] No code, branch, commit, or pull request was created.
