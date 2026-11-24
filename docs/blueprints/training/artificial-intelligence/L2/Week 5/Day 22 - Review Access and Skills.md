# Day 22: Review access and skills

| Field | Value |
| --- | --- |
| Blueprint Name | Day 22 - Review access and skills |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 22 prepares Hermes to review pull requests on the game repository: least-privilege access is verified and both review skills load in a fresh session. No pull request is reviewed today.

The authoritative lesson is [Day 22 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-22--review-access-and-skills); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 21 passed, with Hermes launching reliably
* The GitHub CLI installed and signed in as you
* The game repository private, with at least one pull request to review on Days 23–25
* Read access to issues, pull requests, branches, and check results

#### Continuity Rule

The game and its code do not change today. This is access and skill setup only: no review, no branch, no commit, no repository setting change.

#### Daily Evidence Standard

* Evidence is the authenticated account and repository, the access result per capability, both installed skill locations, and a fresh-session load result.
* An escalation blocker must name the exact permission and why it is needed.
* No standup post and no supervisor sign-off are required on this path.

#### Secret Rule

Never print, paste, or log credentials, tokens, cookies, or private keys. Inspect the login without revealing it, and complete sign-in yourself.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Verify access

1. Replace both prompt variables, then send the prompt.
2. Confirm read access to pull-request metadata and diffs, linked issues, source and branches, and check or CI status.
3. Accept read-only access; do not request write, merge, administration, workflow, or organization-wide access.

### Phase 2: Install both skills

1. Confirm the public `github-code-review` skill is available, and install it only through the supported Hermes skills command.
2. Install `engineering-sops-pr-review` from `.github/skills/engineering-sops-pr-review/SKILL.md` in `hurdman/engineering-sops`, branch `main`, using authenticated `gh api`.
3. Validate the YAML frontmatter, the exact skill name, and a non-empty body.

### Phase 3: Prove a fresh session

1. Open a fresh Hermes session.
2. Load both skills and record the result.
3. Save the readiness summary with the access evidence.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-GITHUB-REPOSITORY` | The game repository as `owner/name` |

#### Copyable AI Prompt

```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Game Repository: YOUR-GITHUB-REPOSITORY

Prepare my existing local Hermes installation for automated pull-request reviews of my Unity game repository. Use current official Hermes documentation and my existing local GitHub configuration as the source of truth. This is access and skill setup only: do not review a pull request, change repository code, push commits, merge anything, change CI settings, or create a separate Hermes profile.

First, repeat the repository folder and GitHub repository. If either value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Inspect the existing local GitHub login and the repository remote without printing credentials. Confirm whether the current access can read pull-request metadata and diffs, linked issues, repository source and branches, and check or CI status.
2. Identify the least-privilege access a reviewer needs: read-only repository access plus read-only pull-request, issue, and checks access. Do not request write, merge, administration, workflow, or broad organization access unless a specific review requirement cannot be met without it.
3. If required read access is missing, state the exact repository or organization permission needed, why it is needed, and one concise escalation message. Pause while I complete interactive sign-in or obtain administrator approval. Never ask me to paste, print, or log secrets.
4. Verify the resulting access with safe read-only checks and report the real results.
5. Inspect whether the public `github-code-review` skill is available. If it is missing, install it through the supported Hermes skills command or approved skill source. Do not invent a skill URL or use an unapproved source.
6. Install `engineering-sops-pr-review` using authenticated `gh api` from `hurdman/engineering-sops`, branch `main`, file `.github/skills/engineering-sops-pr-review/SKILL.md`. Save it as `engineering-sops-pr-review/SKILL.md` in the Hermes skills directory derived from current configuration; do not hard-code a path or edit Hermes configuration directly.
7. Validate that the file starts with YAML frontmatter, has `name: engineering-sops-pr-review`, and has a non-empty body.
8. Start a fresh Hermes session and verify that both `github-code-review` and `engineering-sops-pr-review` are available and load.
9. Return a "Review access and skills readiness" summary: account and repository verified, review-relevant access confirmed, any extra access requested with its reason, safe checks and their real results, installed skill names and locations, the fresh-session load result, and remaining blockers.

Keep secret redaction and normal command approvals enabled. Limit the work to read-only access validation and installing the two review skills.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Asking for write or admin access "just in case" | Request only the read access a reviewer needs |
| Downloading the internal skill from a raw URL | Use authenticated `gh api` so the login applies to a private source |
| Accepting a skill without checking it | Validate frontmatter, the exact name, and a non-empty body |
| Treating a fresh terminal as a fresh session | Open a new Hermes session and load both skills |
| Reviewing a pull request today | Access and setup only; reviews start on Day 23 |
| Printing the token while "checking" the login | Inspect identity without revealing credentials |
| Reporting access without evidence | Record each capability's result or its exact blocker |

#### Standards & Governance

* Least privilege is the default: read-only repository, pull-request, issue, and checks access.
* Internal skills come from the authenticated source repository, never a guessed URL.
* A skill is installed only when a fresh session loads it.
* No repository, issue, or pull-request mutation belongs to Day 22.
* Access blockers are escalated with one exact permission request.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | **Requirement** |
| --- | --- |
| Access | Read-only repository, PR, issue, and checks |
| Public skill | `github-code-review` from a supported source |
| Internal skill | `engineering-sops-pr-review` via `gh api` |
| Validation | Frontmatter, exact name, non-empty body |
| Session proof | Fresh session loads both skills |
| Mutations | None |

- Milestone: access is verified or blocked explicitly, both skills are installed, and a fresh session loads them.

## End-of-Day Checklist

- [ ] The GitHub account and game repository are verified without printing credentials.
- [ ] Review-relevant read access is confirmed, or a specific least-privilege blocker is reported.
- [ ] `github-code-review` is installed and its location recorded.
- [ ] `engineering-sops-pr-review` is installed from `gh api` with valid frontmatter and a non-empty body.
- [ ] A fresh Hermes session loads both skills.
- [ ] No review was performed and no repository state changed.
