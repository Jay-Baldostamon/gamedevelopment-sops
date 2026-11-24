# Day 33: Automated delivery and manual review

| Field | Value |
| --- | --- |
| Blueprint Name | Day 33 - Automated delivery and manual review |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 33 separates the two halves of the workflow: Hermes delivers automatically in echo mode, then you review the result manually. Echo performs the delivery; it is not a no-mutation dry run.

The authoritative lesson is [Day 33 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-33--automated-delivery-then-manual-review); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 32 passed
* A valid handoff on a second authorized issue
* Authorization for automated delivery
* The pinned Unity project and a recorder

#### Continuity Rule

The automated run may branch, commit, push, open a PR, label, and update the Project item. It may not merge, submit a review, or edit the issue body. The review half is yours and happens after delivery.

#### Daily Evidence Standard

* Evidence is the delivery report, the PR URL, the verified issue link, the Project status, and a separate review record you produced.
* A review you did not run yourself is not evidence.
* No standup post and no supervisor sign-off are required on this path.

#### Unity Validation Rule

The delivery report's Unity claims are checked against the branch: play the behavior, read the Console, and confirm the GIF exists.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Run the delivery

1. Replace both variables, then send the prompt.
2. Verify the PR, its issue link, its review request, and its Project status from the returned evidence.
3. Confirm the Unity validation result is real and reproducible.

### Phase 2: Review it manually

1. Run the Day 23 interactive review or the Day 24 inform-only review against the new PR.
2. Record the verdict and the findings you verified yourself.
3. Do not submit an approval or merge.

### Phase 3: Record both halves

1. Save the delivery report and the review record separately.
2. State any blocked check from either half.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-ISSUE-URL` | The full URL of the authorized issue |

#### Copyable AI Prompt

```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-issue-to-pr` in ECHO mode. Do not ask for intermediate approval after the placeholder preflight. Confirm a valid Week 6 handoff, honor its Dedup/Overlap classification when choosing the base, and complete the full delivery: confirm `ai-automation`, implement within the issue's acceptance criteria, validate in Unity with real Play Mode results, commit, push, create a pull request with `Closes #<issue-number>`, verify the link, request review, and set and verify Project Status `For Review`.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

For every scene, prefab, or Inspector change, give me click-by-click editor steps naming the object, the component, and the reference to drag into each field. State the Play Mode check for each acceptance criterion, run it, and report the real result including Console errors.

Return the complete delivery evidence required by the skill, including the pull request URL, the verified issue link, the review request, the Project status result or its exact blocker, and any blocked check.

Do not merge, submit a review, approve the pull request, bypass CI, edit the issue body, or expose secrets.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Treating echo as a dry run | Echo delivers; expect branch, commit, PR, label, and status changes |
| Letting the agent review its own delivery | Run the review yourself after delivery |
| Submitting the review because it looks right | Report the verdict; a human submits and decides |
| Skipping the issue link check | Open the PR and confirm `Closes #<issue-number>` |
| Accepting a Unity claim without playing the build | Reproduce the check on the branch |
| Calling a blocked status fine | Report the exact blocker |
| One combined report for both halves | Keep delivery evidence and review evidence separate |

#### Standards & Governance

* Automated delivery is explicitly authorized, issue by issue.
* The review half is human-run.
* Unity validation must be reproducible from the branch.
* No merge, review submission, CI bypass, or issue-body edit.
* Blocked checks are reported as blocked.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Mode | ECHO delivery, then your manual review |
| Delivery | Branch, commit, push, PR, label, status |
| PR | `Closes #<issue-number>` and review request |
| Project | `For Review` or exact blocker |
| Review | Run by you, verdict with evidence |
| Merge | Never |

- Milestone: the delivered PR with verified links and a separate verified review record are saved.

## End-of-Day Checklist

- [ ] Automated delivery started only after the handoff was confirmed valid.
- [ ] The PR contains `Closes #<issue-number>` and an explicit review request.
- [ ] Project status is verified as `For Review`, or the exact blocker is reported.
- [ ] Unity validation results in the delivery evidence are real and referenced.
- [ ] I ran the review workflow manually against the new PR.
- [ ] The review verdict and findings were verified by me.
- [ ] Nothing was submitted, approved, or merged.
