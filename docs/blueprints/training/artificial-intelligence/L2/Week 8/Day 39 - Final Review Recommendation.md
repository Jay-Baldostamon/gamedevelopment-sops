# Day 39: Final review recommendation

| Field | Value |
| --- | --- |
| Blueprint Name | Day 39 - Final review recommendation |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 39 runs the full lifecycle and answers one question precisely: who must perform the final review. The accountability rule is simple — if the initiator is an EM, a different EM reviews.

The authoritative lesson is [Day 39 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-39--final-review-recommendation); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 38 passed
* Another validated task issue authored by someone else
* Your initiator role written down exactly
* The culmination skill loading in a fresh session

#### Continuity Rule

The run may deliver and review; it may not submit the review, approve, merge, bypass CI, or edit the issue body. The recommendation is the day's product.

#### Daily Evidence Standard

* Evidence is the completed packet, the AI review verdict, and the explicit final reviewer assignment.
* The reviewer must satisfy the accountability rule, not merely be named.
* No standup post and no supervisor sign-off are required on this path.

#### Unity Validation Rule

The packet's Unity evidence must be reproducible on the delivered branch.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Run and recommend

1. Replace all three variables, then send the prompt.
2. Confirm the role was repeated back before the run started.
3. Confirm the packet and the recommendation.

### Phase 2: Check the accountability rule

1. If you are the EM, the recommendation names a different EM.
2. Otherwise the recommendation names an EM.
3. Confirm no review was submitted and no approval recorded.

### Phase 3: Record

1. Save the recommendation with the packet.
2. State the exact final reviewer action.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-ISSUE-URL` | The full URL of the externally authored task issue |
| `YOUR-INITIATOR-ROLE` | Your role for this task, such as `Engineer` or `EM` |

#### Copyable AI Prompt

```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL
Initiator Role: YOUR-INITIATOR-ROLE

Use `engineering-sops-task-to-reviewed-pr` in RECOMMEND FINAL REVIEW mode. Do not ask for intermediate approval after the placeholder preflight. Confirm the task issue has requirements and acceptance criteria authored by someone other than me, complete the valid issue-to-handoff-to-PR-to-AI-review workflow, and return the final human review recommendation.

If Initiator Role is EM, state that another EM must conduct the final review. Otherwise state that an EM must conduct it.

First, repeat the repository folder, issue URL, and initiator role. If any value contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Include the handoff URL, PR URL, AI review verdict, verified findings, Unity validation evidence, blocked checks, and the exact final reviewer action.

Do not submit a GitHub review, self-approve, merge, bypass CI, rewrite the issue body, or expose secrets.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Leaving the role as a placeholder | Replace and confirm it is repeated back |
| Naming yourself as the final reviewer | Another EM reviews when the initiator is an EM |
| Naming a reviewer with no stated action | Say exactly what they must decide |
| Submitting the AI review | Report it; the human decides |
| Treating a clean verdict as approval | Approval is a human action |
| Skipping the packet detail | Include the PR, verdict, findings, Unity evidence, and blocked checks |

#### Standards & Governance

* The final reviewer satisfies the accountability rule.
* The packet is complete before the recommendation.
* AI review is input, never approval.
* No review submission, approval, merge, CI bypass, or issue-body edit.
* The reviewer action is specific.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Mode | RECOMMEND FINAL REVIEW |
| Role | Stated and repeated back |
| Packet | PR, verdict, findings, Unity evidence, blocked checks |
| Reviewer | EM, or another EM when the initiator is an EM |
| Action | Exact final decision |
| Submission | None |

- Milestone: the completed packet, the explicit reviewer assignment, and the exact final action are saved.

## End-of-Day Checklist

- [ ] The initiator role was stated and repeated before the run.
- [ ] The workflow completed from issue through handoff, PR, and AI review.
- [ ] The final reviewer is named and satisfies the accountability rule.
- [ ] The packet includes the PR, verdict, findings, Unity evidence, and blocked checks.
- [ ] No review was submitted and nothing was approved or merged.
