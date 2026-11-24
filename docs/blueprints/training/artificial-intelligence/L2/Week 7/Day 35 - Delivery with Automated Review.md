# Day 35: Delivery with automated review

| Field | Value |
| --- | --- |
| Blueprint Name | Day 35 - Delivery with automated review |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 35 joins the two halves: an authorized issue is delivered, then the prescribed AI review runs against the new pull request. The output is a reviewed, unmerged PR with honest results for the human reviewer.

The authoritative lesson is [Day 35 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-35--delivery-with-automated-review); this blueprint is its expanded execution form.

**Gate:** blocking. Score it with [Rubrics](../../Resources/Rubrics.md) → Day 35. Week 8 does not start until every line is Yes.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 34 passed
* A valid handoff on a fourth authorized issue
* Written authorization for automated delivery and review
* The pinned Unity project and a recorder

#### Continuity Rule

The run may deliver and review; it may not submit the review, approve, merge, bypass CI, or edit the issue body. The verdict is input to a human decision.

#### Daily Evidence Standard

* Evidence is the PR, the Unity validation record, the AI review report, and your verification of each blocking finding.
* Blocked checks are reported as blocked.
* No standup post and no supervisor sign-off are required on this path.

#### Unity Validation Rule

Reproduce the delivery's Play Mode claim on the branch, read the Console, and confirm the GIF exists before accepting the review.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Deliver and review

1. Replace both variables, then send the prompt.
2. Confirm the delivery evidence before reading the review section.
3. Confirm the review names its routing and verdict.

### Phase 2: Verify the review

1. Re-check every blocking finding against the issue, the diff, and the Unity result.
2. Remove or downgrade findings you cannot reproduce.
3. Confirm the review was not submitted, approved, or merged.

### Phase 3: Hand it over

1. Record the PR URL, the verdict, the verified findings, and the blocked checks.
2. Name the human reviewer and the exact decision they must make.
3. Score the Day 35 rubric.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-ISSUE-URL` | The full URL of the authorized issue |

#### Copyable AI Prompt

```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-issue-to-pr` in AUTO-REVIEW mode. Do not ask for intermediate approval after the placeholder preflight. Confirm a valid Week 6 handoff, honor its Dedup/Overlap classification when choosing the base, then complete full delivery: confirm `ai-automation`, implement within the issue's acceptance criteria, validate in Unity with real Play Mode results, commit, push, create a pull request with `Closes #<issue-number>`, verify the link, request review, and set and verify Project Status `For Review`.

Then automatically run both `github-code-review` and `engineering-sops-pr-review` on the new pull request. Follow the repository's normal routing and return the evidence-backed verdict, requirements and acceptance-criteria coverage, Unity validation results, verified findings, blocked checks, and suggested GitHub review text.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

For every scene, prefab, or Inspector change during delivery, give me click-by-click editor steps naming the object, the component, and the reference to drag into each field.

Do not submit an approval or review, merge, bypass CI, edit the issue body, or expose secrets.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Reading the review before the delivery evidence | Verify the PR and Unity result first |
| Accepting findings you cannot reproduce | Re-check against the issue, diff, and Play Mode |
| Submitting the suggested review | Report it and leave submission to the human |
| Merging because the verdict is clean | A clean verdict is still a human decision |
| Hiding a blocked check | Report blocked checks as blocked |
| Treating a style note as blocking | Require a failed requirement or criterion |
| No named reviewer | State who must decide and what they must decide |

#### Standards & Governance

* Delivery and review are authorized; merge and approval are not.
* Every blocking finding traces to a requirement or acceptance criterion.
* Unity validation is reproduced, not trusted.
* Blocked checks are explicit.
* The human reviewer owns the decision.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Mode | AUTO-REVIEW |
| Delivery | Scoped, validated, linked PR |
| Project | `For Review` verified or blocker reported |
| Review | Both skills, routed verdict |
| Findings | Reproduced and requirement-backed |
| Submission | None |
| Gate | Day 35 rubric all Yes |

- Milestone: the PR, the AI review report, the verified findings, the named human decision, and the rubric score are saved.

## End-of-Day Checklist

- [ ] Delivery used a valid handoff and stayed inside the issue's acceptance criteria.
- [ ] The PR carries a verified `Closes #<issue-number>`, a review request, and verified `For Review` status or its exact blocker.
- [ ] Unity validation ran on the delivered branch and the real result is recorded.
- [ ] The prescribed AI review ran and its verdict is stated with evidence.
- [ ] I verified each blocking finding against the issue, diff, and Unity result.
- [ ] Blocked checks are reported as blocked.
- [ ] No review was submitted and nothing was approved or merged.
- [ ] The Day 35 rubric is scored with every line at Yes.
