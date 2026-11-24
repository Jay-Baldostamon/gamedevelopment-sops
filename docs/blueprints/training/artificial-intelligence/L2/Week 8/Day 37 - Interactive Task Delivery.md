# Day 37: Interactive task delivery

| Field | Value |
| --- | --- |
| Blueprint Name | Day 37 - Interactive task delivery |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 37 runs the whole lifecycle on one externally authored task, pausing at every external mutation. The output is a complete evidence chain ending with a named human reviewer.

The authoritative lesson is [Day 37 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-37--interactive-task-delivery); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 36 passed, with the culmination skill and prerequisites loading in a fresh session
* A validated task issue with explicit requirements and acceptance criteria
* Written authorization for the run
* The pinned Unity project with a clean working tree

#### Continuity Rule

The issue body remains authoritative through every stage. The handoff, branch, PR, label, review request, and Project status are created only within the task's scope.

#### Daily Evidence Standard

* Evidence is the per-stage approval log, the handoff URL, the PR URL, the validation record, the AI review report, and the named reviewer.
* The PR stays unmerged and unapproved.
* No standup post and no supervisor sign-off are required on this path.

#### Unity Validation Rule

Wire every scene and Inspector change yourself from the supplied steps, then play the acceptance behavior, read the Console, and capture the GIF.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Approve each stage

1. Replace both variables, then send the prompt.
2. Approve each stage only after the real evidence is shown.
3. Stop if the handoff classification says the work is already delivered or covered.

### Phase 2: Keep the work verifiable

1. Perform each Unity edit from the supplied steps.
2. Validate in Play Mode and record the result.
3. Reject edits outside the task's acceptance criteria.

### Phase 3: Hand over to the human reviewer

1. Confirm the PR is unmerged and unapproved.
2. Confirm `For Review` status or its exact blocker.
3. Name the human reviewer and the decision they must make.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-ISSUE-URL` | The full URL of the externally authored task issue |

#### Copyable AI Prompt

```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-task-to-reviewed-pr` in INTERACTIVE mode for this task issue in my Unity game repository. The issue body is authoritative for requirements, scope, and acceptance criteria.

Confirm the requirements and acceptance criteria are sufficient before starting. If they are not, stop and report the gap.

Complete only the current stage, show real evidence, then ask "Approve the next step?" and wait for explicit approval.

Stages: issue and handoff preflight; handoff generation and posting; `ai-automation` label; branch and implementation plan; code edits; Unity validation; commit; push; pull-request creation and link verification; review request; Project Status `For Review`; AI review report; final human-review handoff.

For every scene, prefab, or Inspector change, give me click-by-click editor steps naming the object, the component, and the reference to drag into each field. State the Play Mode check for each acceptance criterion, run it, and report the real result including Console errors.

Do not submit a GitHub review, approve, merge, bypass CI, edit the issue body, or expose secrets.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Starting with an incomplete task | Stop and report the gap before the first mutation |
| Approving several stages at once | One stage, one approval, one evidence check |
| Letting the agent design beyond the task | Map every edit to an acceptance criterion |
| Skipping the handoff URL | Record it; the packet needs the full chain |
| Treating the AI review as the final review | It is input; the human reviewer decides |
| Merging at the end | Leave the PR open |
| No named reviewer | State who must decide and what they must decide |

#### Standards & Governance

* The task issue bounds every stage.
* Approval precedes each external mutation.
* Handoff, branch, PR, label, review request, and status form a traceable chain.
* Unity validation is reproducible evidence.
* The final decision belongs to a human reviewer.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Mode | Interactive culmination |
| Task | Externally authored, with requirements and criteria |
| Chain | Handoff, label, branch, PR, review request, status |
| Validation | Play Mode, Console, GIF |
| Review | AI report only, not submitted |
| Merge | Never |
| Reviewer | Named human |

- Milestone: the complete lifecycle evidence, the AI review report, and the named human reviewer are saved.

## End-of-Day Checklist

- [ ] Requirements and acceptance criteria were confirmed before the run.
- [ ] Each stage was approved explicitly before the next one started.
- [ ] The handoff was posted once, with its URL.
- [ ] Delivery stayed inside the task's acceptance criteria.
- [ ] Unity validation ran with real results and evidence.
- [ ] The PR is linked, review was requested, and `For Review` is verified or blocked explicitly.
- [ ] The AI review report is included and not submitted as a review.
- [ ] The PR is unmerged and unapproved, and the human reviewer is named.
