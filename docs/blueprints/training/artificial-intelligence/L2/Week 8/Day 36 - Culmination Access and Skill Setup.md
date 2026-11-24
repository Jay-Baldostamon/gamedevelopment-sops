# Day 36: Culmination access and skill setup

| Field | Value |
| --- | --- |
| Blueprint Name | Day 36 - Culmination access and skill setup |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 36 prepares the full task lifecycle. The task is validated as externally authored and complete, the access it needs is verified, and the culmination skill loads with its prerequisites. Nothing is executed today.

The authoritative lesson is [Day 36 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-36--culmination-access-and-skill-setup); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 35 passed, with the Day 35 rubric fully green
* A task issue authored by someone else, with explicit requirements and acceptance criteria
* Written authorization to run it later this week
* The connection between the issue and its Project item, if one exists

#### Continuity Rule

Setup only. No handoff, label, branch, code, PR, review, or Project change today. A task without usable requirements stops the week here.

#### Daily Evidence Standard

* Evidence is the task validation, the per-capability access result, the installed skill location, and a fresh-session load result.
* An incomplete task is reported as a blocker, not repaired by you.
* No standup post and no supervisor sign-off are required on this path.

#### Secret Rule

Inspect the login without printing it. Never paste, print, or log credentials.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Validate the task and access

1. Replace both variables, then send the prompt.
2. Confirm the issue was authored by someone other than you and has usable requirements and acceptance criteria.
3. Verify comment, label, branch, PR, review-request, and Project-status access.

### Phase 2: Install and verify the skill

1. Install `engineering-sops-task-to-reviewed-pr` with authenticated `gh api`.
2. Validate frontmatter, the exact name, a non-empty body, and its prerequisite skills.
3. Open a fresh session and load the skill with all prerequisites.

### Phase 3: Record readiness

1. Save the access results, the skill location, and the blockers.
2. Confirm the issue, labels, Project item, and repository are unchanged.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-ISSUE-URL` | The full URL of the externally authored task issue |

#### Copyable AI Prompt

```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Prepare my normal local Hermes setup for the Task-to-Reviewed-PR workflow on my Unity game repository. This is access and skill setup only: do not create a handoff, add labels, write code, create branches, commit, push, create a pull request, request review, change Project status, or submit any review.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the issue was authored by someone other than me and has usable requirements and acceptance criteria. If either is missing, stop and report the gap.
2. Verify least-privilege access for issue comments, labels, repository branches, pull-request creation, review requests, and the existing Project item Status update. State the exact permission missing and one escalation message.
3. Install `engineering-sops-task-to-reviewed-pr` using authenticated `gh api` from `hurdman/engineering-sops`, branch `main`, file `.github/skills/engineering-sops-task-to-reviewed-pr/SKILL.md`. Save it as `engineering-sops-task-to-reviewed-pr/SKILL.md` in the Hermes skills directory derived from current configuration.
4. Validate YAML frontmatter, the exact skill name, a non-empty body, and its prerequisite skills.
5. Start a fresh Hermes session and confirm the skill loads with all prerequisites.
6. Return readiness evidence with the access results, installed skill location, fresh-session result, and exact blockers.

Never print secrets or request merge, administration, workflow, or organization-wide access.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Using a task you wrote yourself | Ask a producer, Scrum Master, or training lead to author it |
| Starting with vague acceptance criteria | Report the gap and stop; do not fill it in |
| Executing "while setting up" | Setup only; execution starts on Day 37 |
| Requesting merge access for the workflow | Ask only for comment, label, branch, PR, review, and Project access |
| Skipping the prerequisite check | Load the skill with all prerequisites in a fresh session |
| Ignoring a missing Project item | Report it as the exact blocker |
| Losing the access evidence | Record each capability's result |

#### Standards & Governance

* The task is externally authored; its requirements are authoritative.
* Missing requirements block the week.
* Setup never mutates the issue, labels, branch, PR, or Project.
* Least privilege covers exactly the lifecycle capabilities.
* A skill is installed only when a fresh session loads it with prerequisites.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Task | Authored by someone else, with requirements and criteria |
| Access | Comments, labels, branches, PR, review, Project |
| Skill | `engineering-sops-task-to-reviewed-pr` via `gh api` |
| Prerequisites | All load in a fresh session |
| Mutations | None |

- Milestone: the task is validated, access is confirmed or blocked explicitly, and the skill loads with its prerequisites.

## End-of-Day Checklist

- [ ] The task issue was authored by someone else and has explicit requirements and acceptance criteria.
- [ ] Comment, label, branch, PR, review-request, and Project-status access is confirmed or blocked explicitly.
- [ ] `engineering-sops-task-to-reviewed-pr` is installed and validated.
- [ ] A fresh session loads the skill and its prerequisites.
- [ ] No handoff, label, code, branch, PR, review, or Project change was made.
