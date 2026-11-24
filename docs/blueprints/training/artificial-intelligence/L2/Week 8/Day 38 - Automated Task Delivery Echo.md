# Day 38: Automated task delivery echo

| Field | Value |
| --- | --- |
| Blueprint Name | Day 38 - Automated task delivery echo |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 38 runs the full lifecycle without intermediate approvals and returns the complete packet for human review. The output is a delivered, reviewed task with every claim attached to evidence.

The authoritative lesson is [Day 38 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-38--automated-task-delivery-echo); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 37 passed
* Another validated task issue authored by someone else
* Authorization for automated orchestration
* The pinned Unity project and a recorder

#### Continuity Rule

The run may create the handoff, branch, commit, PR, label, review request, and status. It may not submit a review, approve, merge, bypass CI, or edit the issue body.

#### Daily Evidence Standard

* Evidence is the handoff and PR URLs, requirements coverage, Unity validation results, the AI review verdict, blocked checks, and the stated human action.
* A missing heading means the packet is incomplete.
* No standup post and no supervisor sign-off are required on this path.

#### Unity Validation Rule

Reproduce the Play Mode claim on the delivered branch before accepting the packet.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Run the orchestration

1. Replace both variables, then send the prompt.
2. Confirm the issue's requirements were sufficient before the run started.

### Phase 2: Read the packet

1. Verify the handoff URL, the PR URL, and the issue link.
2. Verify the Unity validation results and Console state.
3. Verify the AI review verdict and the blocked checks.

### Phase 3: Confirm the human action

1. Confirm the PR is unmerged and unapproved.
2. State the exact final human action required.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-ISSUE-URL` | The full URL of the externally authored task issue |

#### Copyable AI Prompt

```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-task-to-reviewed-pr` in ECHO mode. Do not ask for intermediate approval after the placeholder preflight. Confirm the issue has sufficient requirements and acceptance criteria authored by someone other than me, then generate and post the non-duplicate handoff, deliver the task through a validated linked pull request, request review, set and verify `For Review`, and run `github-code-review` with `engineering-sops-pr-review`.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

State the Play Mode check for each acceptance criterion and report the real result, including Console errors, for every scene or Inspector change.

Return the full final report required by the skill, including the handoff URL, PR URL, requirements and acceptance-criteria coverage, Unity validation results, AI review verdict and verified findings, blocked checks, and the exact final human-review action required.

Do not submit a GitHub review, self-approve, merge, bypass CI, rewrite the issue body, or expose secrets.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Starting with a self-authored task | Use one authored by someone else |
| Accepting a packet with missing headings | Require the full report structure |
| Trusting Unity results without reproducing them | Play the branch and check the Console |
| Letting the run submit the review | Echo reports; it does not submit |
| Merging because the packet looks complete | Leave the decision to the human reviewer |
| Ignoring blocked checks | Report them explicitly |
| A packet with no next action | State the exact human decision required |

#### Standards & Governance

* Automated orchestration is authorized per task.
* Every claim in the packet has an attached URL or validation record.
* Unity results are reproduced.
* No review submission, approval, merge, CI bypass, or issue-body edit.
* The human action is explicit.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Mode | ECHO culmination |
| Preflight | Externally authored, sufficient requirements |
| Chain | Handoff, label, branch, PR, review, status |
| Validation | Play Mode result per criterion, Console state |
| Packet | Every required heading present |
| Merge | Never |

- Milestone: the complete packet with URLs, coverage, validation, verdict, blocked checks, and the stated human action is saved.

## End-of-Day Checklist

- [ ] The issue's requirements and acceptance criteria were sufficient before the run.
- [ ] Exactly one non-duplicate handoff was generated and posted.
- [ ] Delivery stayed in scope and the PR is linked with a review request and `For Review` or its blocker.
- [ ] Unity validation results are real and recorded.
- [ ] The AI review verdict and findings are evidence-backed.
- [ ] Blocked checks are reported.
- [ ] Nothing was submitted, approved, merged, or edited outside scope.
- [ ] The exact final human action is stated.
