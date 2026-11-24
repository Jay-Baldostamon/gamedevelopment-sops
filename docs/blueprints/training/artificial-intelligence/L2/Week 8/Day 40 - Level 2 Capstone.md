# Day 40: Level 2 capstone

| Field | Value |
| --- | --- |
| Blueprint Name | Day 40 - Level 2 capstone |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 40 is the measured L2 exercise: one externally authored task carried the whole way by the culmination workflow, leaving only a human decision. The output is the capstone packet and the rubric score.

The authoritative lesson is [Day 40 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-40--level-2-capstone); this blueprint is its expanded execution form.

**Gate:** blocking. Score it with [Rubrics](../../Resources/Rubrics.md) → Day 40. L2 is complete only when every line is Yes.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 39 passed
* A final validated task issue authored by someone else
* Authorization for the full run
* Your initiator role written down exactly
* The pinned Unity project and a recorder

#### Continuity Rule

After the placeholder check, the run is not interrupted. The workflow may create the handoff, label, branch, commit, PR, review request, and status. It may not merge, self-approve, bypass CI, rewrite the issue body, or expose secrets.

#### Daily Evidence Standard

* Evidence is the complete packet: issue and handoff URLs, PR, requirements coverage, Unity validation, AI review verdict and findings, blocked checks, and the exact final decision.
* The reviewer must satisfy the accountability rule.
* No standup post and no supervisor sign-off are required on this path.

#### Unity Validation Rule

Every acceptance criterion has a real Play Mode result, including the Console state. A blocked Unity check is reported as blocked.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Run the culmination

1. Replace all three variables, then send the prompt.
2. Do not intervene after the placeholder check; the run is the measured exercise.

### Phase 2: Assemble the packet

1. Collect the issue and handoff URLs, the PR URL, and the coverage table.
2. Collect the Unity validation steps and results, the AI review verdict and findings, and the blocked checks.
3. Confirm the PR is unmerged and unapproved and the reviewer satisfies the accountability rule.

### Phase 3: Score and close

1. Score the Day 40 rubric against the packet alone.
2. Save the packet with the game repository evidence.

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

Use `engineering-sops-task-to-reviewed-pr` in FULL CULMINATION mode. Do not ask for intermediate approval after the placeholder preflight. Confirm the task issue was authored by someone other than me and has sufficient requirements and acceptance criteria, generate and post one valid non-duplicate handoff, deliver the task through a validated linked pull request, request review, set and verify `For Review`, and run the installed AI review workflow.

First, repeat the repository folder, issue URL, and initiator role. If any value contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Leave the pull request unmerged and unapproved. Produce a final review packet containing the issue and handoff URLs, the PR URL, requirements and acceptance-criteria coverage, Unity validation steps and real results including Console errors, the AI review verdict and verified findings, blocked checks, and the exact final decision needed.

If Initiator Role is EM, require final review by another EM; otherwise require final review by an EM. Do not self-approve, merge, bypass CI, rewrite the issue body, or expose secrets.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Stepping in mid-run to "help" | The run is measured; intervene only on a placeholder or a stop condition |
| A packet without the handoff URL | Require the full chain |
| Acceptance criteria without results | Report each result, including blocked checks |
| Trusting the AI review as approval | It is evidence, not the decision |
| Merging to "complete" L2 | L2 completes with the packet and a human decision |
| Naming yourself when you are the EM | Another EM performs the final review |
| Scoring from memory | Score the rubric from the packet alone |

#### Standards & Governance

* The task issue is externally authored and authoritative.
* The full chain is traceable: issue, handoff, branch, PR, review request, status.
* Unity validation is real and per criterion.
* Blocked checks are explicit.
* Final review is human, and merge is never automatic.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Mode | FULL CULMINATION |
| Task | Externally authored, with requirements and criteria |
| Chain | Handoff, label, branch, PR, review, status |
| Validation | Per criterion, Play Mode, Console state |
| Review | AI verdict plus findings, not submitted |
| Packet | Every required element present |
| Decision | Human reviewer, accountability rule |
| Gate | Day 40 rubric all Yes |

- Milestone: the capstone packet is complete, the human decision is named, and the Day 40 rubric is fully green.

## End-of-Day Checklist

- [ ] The task issue was authored by someone else and has requirements and acceptance criteria.
- [ ] Exactly one non-duplicate handoff was posted and linked in the packet.
- [ ] The PR is linked to the issue, review was requested, and `For Review` is verified or its blocker reported.
- [ ] Delivery stayed inside scope and every acceptance criterion has a result.
- [ ] Unity validation evidence is real, including Console state.
- [ ] The AI review verdict and findings are evidence-backed and not submitted as a review.
- [ ] Blocked checks are reported as blocked.
- [ ] The reviewer satisfies the accountability rule, and the packet names the exact final decision.
- [ ] Nothing was merged or self-approved.
- [ ] The Day 40 rubric is scored with every line at Yes.
