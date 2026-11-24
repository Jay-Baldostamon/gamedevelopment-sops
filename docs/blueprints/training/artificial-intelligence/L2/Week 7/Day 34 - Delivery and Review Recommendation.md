# Day 34: Delivery and review recommendation

| Field | Value |
| --- | --- |
| Blueprint Name | Day 34 - Delivery and review recommendation |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 34 delivers an authorized issue and stops one step short of review: it recommends the correctly routed review mode and returns the exact prompt, without running it.

The authoritative lesson is [Day 34 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-34--delivery-and-review-recommendation); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 33 passed, with one delivery and one manual review completed
* A valid handoff on a third authorized issue
* The repository's review routing known or discoverable from the installed skill

#### Continuity Rule

Delivery is authorized; review is not. The run must not run, simulate, or submit the review it recommends.

#### Daily Evidence Standard

* Evidence is the PR URL, the verified links and status, and the exact recommended review prompt.
* A recommendation without the next prompt is incomplete.
* No standup post and no supervisor sign-off are required on this path.

#### Unity Validation Rule

Delivery still requires real Play Mode validation; recommendation does not replace it.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Deliver

1. Replace both variables, then send the prompt.
2. Verify the PR, the issue link, the review request, and the Project status.

### Phase 2: Recommend, do not run

1. Read the mode the installed routing selects for this repository.
2. Check the recommended mode fits the evidence and the project.
3. Copy the exact next review prompt with this run's values filled in.

### Phase 3: Record

1. Save the delivery evidence and the recommendation separately.
2. Confirm no review was run, submitted, or simulated.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-ISSUE-URL` | The full URL of the authorized issue |

#### Copyable AI Prompt

```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-issue-to-pr` in AUTO mode. Do not ask for intermediate approval after the placeholder preflight. Confirm a valid Week 6 handoff, honor its Dedup/Overlap classification when choosing the base, and complete the full delivery: `ai-automation`, scoped implementation, real Unity validation, commit, push, a pull request with `Closes #<issue-number>`, verified issue link, review request, and verified Project Status `For Review` or its exact blocker.

Then recommend the review action only. State the mode the installed repository routing selects, and return the exact next review prompt I should paste, with its placeholders already filled from this run. Do not run that review, submit a GitHub review, approve, merge, bypass CI, edit the issue body, or expose secrets.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Report the PR URL, requirements and acceptance-criteria coverage, the Unity validation steps and real results, blocked checks, the recommended review mode with its reason, and the exact next prompt.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Running the review "to save time" | Recommend only; the review is the next day's exercise |
| Guessing the routing mode | Read it from the installed skill or repository policy |
| Returning a template with placeholders | Fill the prompt with this run's PR and paths |
| Combining recommendation with a verdict | No verdict today; only the mode and the prompt |
| Ignoring a blocked Project status | Report it beside the PR evidence |
| Recommending gap-resolve without authorization | Match the mode to the repository's routing and your authorization |

#### Standards & Governance

* Delivery is authorized; review is recommended and deferred.
* The recommendation matches the installed routing.
* The next prompt is complete and copy-pasteable.
* No review, approval, merge, CI bypass, or issue-body edit.
* Blocked checks are reported as blocked.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Mode | AUTO delivery, then recommend only |
| Delivery | Full scoped delivery with real validation |
| PR | Issue link and review request verified |
| Project | `For Review` or exact blocker |
| Recommendation | Routing mode with a reason |
| Next prompt | Exact, ready to paste |
| Review | Not run |

- Milestone: the delivered PR, its verified status, the recommended review mode, and the exact next prompt are saved.

## End-of-Day Checklist

- [ ] Delivery completed with a verified issue link and review request.
- [ ] Project status is verified as `For Review`, or the exact blocker is reported.
- [ ] The recommended review mode matches the installed routing.
- [ ] The exact next review prompt is written and ready to paste.
- [ ] The review was not run, submitted, or simulated.
- [ ] Nothing was merged, approved, or edited outside the issue scope.
