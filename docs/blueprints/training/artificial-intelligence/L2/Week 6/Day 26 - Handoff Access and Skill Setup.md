# Day 26: Handoff access and skill setup

| Field | Value |
| --- | --- |
| Blueprint Name | Day 26 - Handoff access and skill setup |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 26 prepares the handoff workflow for the rest of Week 6: issue and comment access are verified and the internal handoff skill loads in a fresh session. No handoff is drafted or posted today.

The authoritative lesson is [Day 26 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-26--handoff-access-and-skill-setup); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 25 passed, with the Day 25 rubric fully green
* One post-launch issue with explicit requirements and acceptance criteria
* The GitHub CLI signed in as you
* Read access to the issue, its comments, and the repository source

#### Continuity Rule

The issue body is authoritative all week. Today changes no issue content and writes no code; it only verifies access and installs the skill.

#### Daily Evidence Standard

* Evidence is the access result per capability, the installed skill location, and a fresh-session load result.
* A missing permission is escalated with one exact least-privilege request.
* No comment, label, branch, commit, or pull request is created today.
* No standup post and no supervisor sign-off are required on this path.

#### Secret Rule

Inspect the login without printing it. Never paste, print, or log tokens, cookies, or keys.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Verify access

1. Replace both variables, then send the prompt.
2. Confirm read access to the issue, its comments, and the repository source.
3. Confirm comment permission using safe checks only; do not create a test comment.

### Phase 2: Install and verify the skill

1. Install `engineering-sops-issue-development-handoff` with authenticated `gh api`.
2. Validate frontmatter, the exact skill name, a non-empty body, and the Dedup/Overlap Preflight section.
3. Open a fresh Hermes session and load the skill.

### Phase 3: Record readiness

1. Save the readiness summary with access evidence and any blocker.
2. Confirm the issue body and labels are unchanged.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-ISSUE-URL` | The full URL of the implementation-ready issue |

#### Copyable AI Prompt

```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Prepare my normal local Hermes setup for the Issue Development Handoff workflow on my Unity game repository. This is access and skill setup only: do not edit the issue, generate a handoff plan, post a comment, write code, create branches, commit, push, open pull requests, merge, modify CI, or change permissions.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Resolve the issue URL and verify the existing local `gh` login can read the issue, its comments, and the repository source.
2. Verify whether the existing login can add a comment to that issue. Do not create test comments.
3. If read or comment access is missing, state the exact least-privilege repository permission and provide one concise escalation message. Never request, print, paste, or log secrets.
4. Install `engineering-sops-issue-development-handoff` using authenticated `gh api` from `hurdman/engineering-sops`, branch `main`, file `.github/skills/engineering-sops-issue-development-handoff/SKILL.md`.
5. Save it as `engineering-sops-issue-development-handoff/SKILL.md` in the Hermes skills directory derived from current configuration; do not edit Hermes configuration files directly.
6. Validate YAML frontmatter, the exact skill name, a non-empty body, and that it defines the Dedup/Overlap Preflight with a classification and base-branch confirmation.
7. Start a fresh Hermes session and confirm the skill loads.
8. Return a readiness summary with the access results, the installed skill location, the fresh-session load result, and any blocker.

Keep secret redaction and normal command approvals enabled.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Creating a test comment to prove comment access | Use safe checks; do not mutate the issue |
| Installing from a raw URL | Use authenticated `gh api` from the source repository |
| Skipping the frontmatter check | Validate the name, frontmatter, and non-empty body |
| Editing the issue while "preparing" | Access and setup only |
| Requesting write access for comment permission | Ask only for the permission the workflow needs |
| Checking the skill in the current session only | Open a fresh session and load it |
| A blocker with no owner | Address the escalation to the repository administrator |

#### Standards & Governance

* The issue body is the source of truth and is not edited.
* Internal skills come from the authenticated source repository.
* Comment permission is verified without posting.
* A skill is installed only when a fresh session loads it.
* No code, branch, PR, or label change belongs to Day 26.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Issue access | Read the issue, comments, and source |
| Comment access | Confirmed without a test comment |
| Skill | `engineering-sops-issue-development-handoff` via `gh api` |
| Validation | Frontmatter, exact name, body, Dedup/Overlap Preflight |
| Session proof | Fresh session loads the skill |
| Mutations | None |

- Milestone: access is confirmed or blocked explicitly, the skill is installed and validated, and a fresh session loads it.

## End-of-Day Checklist

- [ ] The issue, its comments, and the repository source are readable.
- [ ] Comment permission is confirmed, or a specific least-privilege blocker is reported.
- [ ] `engineering-sops-issue-development-handoff` is installed from `gh api`.
- [ ] Frontmatter, exact name, non-empty body, and Dedup/Overlap Preflight are validated.
- [ ] A fresh session loads the skill.
- [ ] No handoff was drafted or posted and the issue is unchanged.
