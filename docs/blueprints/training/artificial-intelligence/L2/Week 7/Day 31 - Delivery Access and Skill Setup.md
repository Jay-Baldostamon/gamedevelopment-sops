# Day 31: Delivery access and skill setup

| Field | Value |
| --- | --- |
| Blueprint Name | Day 31 - Delivery access and skill setup |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 31 verifies only the access delivery needs and installs the internal issue-to-PR skill. No branch, commit, or pull request is created today.

The authoritative lesson is [Day 31 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-31--delivery-access-and-skill-setup); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 30 passed, with the Day 30 rubric fully green
* A valid Week 6 handoff posted on the issue
* Written authorization to deliver that issue
* The `ai-automation` label available, or the exact reason it is not

#### Continuity Rule

Access and skill setup only. Delivery starts on Day 32; today changes no issue, branch, label, or Project item.

#### Daily Evidence Standard

* Evidence is the access result per delivery capability, the installed skill location, and a fresh-session load result.
* Missing access is escalated with one exact least-privilege request.
* No standup post and no supervisor sign-off are required on this path.

#### Secret Rule

Inspect the login without printing it. Never paste, print, or log tokens, cookies, or keys.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Verify delivery access

1. Replace both variables, then send the prompt.
2. Confirm the issue and handoff are readable.
3. Confirm branch creation, PR creation, review request, `ai-automation`, and connected Project status access.
4. Do not request merge, administration, workflow, or organization-wide access.

### Phase 2: Install and verify the skill

1. Install `engineering-sops-issue-to-pr` from `hurdman/engineering-sops` with authenticated `gh api`.
2. Validate frontmatter, the exact name, a non-empty body, and its Dedup/Overlap handling.
3. Open a fresh session and load the skill with its prerequisites.

### Phase 3: Record readiness

1. Save the readiness summary with the per-capability results.
2. Confirm nothing in the repository or Project changed.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-ISSUE-URL` | The full URL of the issue with the valid handoff |

#### Copyable AI Prompt

```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Prepare my normal local Hermes setup for the Issue-to-PR Delivery workflow on my Unity game repository. This is access and skill setup only: do not implement code, create a branch, commit, push, open a pull request, request review, change labels or Project status, merge, change CI, or change permissions.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm the issue carries a valid Week 6 AI Development Handoff comment. If it does not, stop and report that blocker.
2. Verify the existing `gh` login can read the issue and handoff, create branches and pull requests on this repository, request review, add the `ai-automation` label, and update the linked Project item to `For Review` when a Project is connected.
3. State the exact least-privilege permission for anything missing and give one concise escalation message. Do not request merge, administration, workflow, or organization-wide access. Never print secrets.
4. Install `engineering-sops-issue-to-pr` using authenticated `gh api` from `hurdman/engineering-sops`, branch `main`, file `.github/skills/engineering-sops-issue-to-pr/SKILL.md`. Save it as `engineering-sops-issue-to-pr/SKILL.md` in the Hermes skills directory derived from current configuration.
5. Validate YAML frontmatter, the exact skill name, a non-empty body, and that it handles the Dedup/Overlap classifications.
6. Start a fresh Hermes session and confirm the skill loads with its prerequisite skills.
7. Return a readiness summary with the access results, installed skill location, fresh-session result, and any blocker.

Keep secret redaction and normal command approvals enabled.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Delivering "while checking access" | Setup only; delivery starts on Day 32 |
| Requesting merge access to open a PR | Ask only for branch, PR, review-request, label, and Project access |
| Ignoring the missing handoff | Confirm the valid Week 6 handoff first |
| Assuming Project status access | Verify the connected Project item explicitly |
| Installing from a raw URL | Use authenticated `gh api` from the source repository |
| Skipping the fresh-session check | Load the skill and its prerequisites in a new session |
| Adding the `ai-automation` label today | Label changes belong to delivery |

#### Standards & Governance

* Delivery requires a valid handoff, not just an issue.
* Least privilege covers exactly the delivery capabilities.
* Internal skills come from the authenticated source repository.
* A skill is installed only when a fresh session loads it.
* No branch, PR, label, or Project change today.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Handoff | Valid Week 6 handoff confirmed |
| Access | Branch, PR, review request, label, Project status |
| Skill | `engineering-sops-issue-to-pr` via `gh api` |
| Validation | Frontmatter, exact name, body, Dedup/Overlap |
| Session proof | Fresh session loads skill and prerequisites |
| Mutations | None |

- Milestone: delivery access is confirmed or blocked explicitly, the skill is installed and validated, and a fresh session loads it.

## End-of-Day Checklist

- [ ] A valid Week 6 handoff exists on the issue.
- [ ] Read access to the issue and handoff is confirmed.
- [ ] Branch, PR, review-request, label, and Project-status access is confirmed or blocked explicitly.
- [ ] No merge, administration, workflow, or organization-wide access was requested.
- [ ] `engineering-sops-issue-to-pr` is installed and validated.
- [ ] A fresh session loads the skill with its prerequisites.
- [ ] No code, branch, commit, PR, label, or Project change was made.
