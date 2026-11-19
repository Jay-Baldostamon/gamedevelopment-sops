> Archived notice: This playbook was moved to archive to remove duplicate active PR process guidance.
>
> Active canonical SOP: `docs/playbooks/delivery-and-quality/GitHub Pull Request.md`

# 🔥 Code Review Playbook

## DEFINE

| Field         | Value                                                                                                                                                                                                                               |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playbook Name | "Code Review (Frontend Developers)"                                                                                                                                                                                                 |
| Purpose       | To ensure high-quality code, maintain system security, and foster knowledge sharing across the engineering team. This SOP aims to prevent "merge conflict hell" and provide a clear path to resolution for all Pull Requests (PRs). |
| Owner         | Luis Patrick Villaruz                                                                                                                                                                                                               |
| Last Updated  | 2026-02-10                                                                                                                                                                                                                          |
| Review Cycle  | Every 90 days                                                                                                                                                                                                                       |

## Prerequisites

- [ ] Confirm required access and tools are ready.

## Step-by-Step Checklist

### 1\. Objective

To ensure high-quality code, maintain system security, and foster knowledge sharing across the engineering team. This SOP aims to prevent "merge conflict hell" and provide a clear path to resolution for all Pull Requests (PRs).

### 2\. Pre-Submission Checklist (The Author)

Before requesting a review, the author must ensure the PR is "Review-Ready" to respect the reviewers' time and minimize conflicts.

- Atomic PRs: Keep PRs under 400 lines of code. Large features should be broken into smaller, incremental PRs or hidden behind feature flags.
- Conflict Prevention: Rebase or merge the target branch (e.g., main) into your feature branch daily.
- Self-Review: Read through your own diff on GitHub. Add comments to explain complex logic or non-obvious trade-offs.
- Green CI: All automated tests, linters, and build checks must pass before tagging reviewers.

### 3\. The GitHub Workflow

We utilize a Two-Reviewer Rule for all production-bound code.

1. Draft Stage: Open your PR as a Draft while still working. This signals to others that the code is changing and not ready for a formal review.
2. Assignment: Once ready, mark as "Ready for Review" and assign two reviewers.
   - _Tip:_ Use GitHub Code Owners for sensitive directories to ensure the right experts are tagged.
3. SLA: Reviewers are expected to provide an initial response (Approve, Comment, or Request Changes) within 24 business hours.
4. Labels: Use the following labels to communicate status:
   - WIP: Work in progress.
   - Ready for Review: Needs eyes.
   - Needs Revision: Changes requested by a reviewer.
   - Urgent: Critical hotfixes (requires immediate attention).

### 4\. Reviewer Guidelines

Reviewers should split their focus to ensure total coverage:

| Focus Area             | Description                                                                     |
| :--------------------- | :------------------------------------------------------------------------------ |
| Logic & Requirements   | Does the code solve the specific business problem? Are there edge cases missed? |
| Security & Performance | Are there SQL injection risks, exposed secrets, or inefficient loops?           |
| Maintainability        | Is the code readable? Is there unnecessary complexity?                          |

Note on Tone: Use "Inquiry-based" feedback. Instead of "Fix this," try "What happens if this input is null?" Use the nit: prefix for non-blocking style suggestions.

### 5\. Conflict & Dispute Resolution

To prevent PRs from stalling, we follow these escalation rules:

### Large-Scale Conflicts

- If a PR has significant merge conflicts, the Author is responsible for the rebase.
- If the conflict involves logic overlap with another active developer, a 5-minute sync call is mandatory to align on the architectural direction.

### Technical Deadlocks

- The 5-Comment Rule: If a single thread exceeds 5 back-and-forth comments, move the conversation to a call or Slack. Summarize the conclusion in the PR.
- The Tie-Breaker: If the two assigned reviewers disagree, or the author disagrees with a reviewer, tag a Senior Engineer or Tech Lead as a third neutral party to make the final call.
- Preference vs. Correctness: If the disagreement is about personal coding style (preference) and not a bug or security risk (correctness), the Tech Lead will default to the Author’s choice to maintain velocity.

---

### 🚀 Implementation Tip: GitHub "Blocks"

In your GitHub Repository Settings, I recommend enabling "Dismiss stale pull request approvals when new commits are pushed." This ensures that if a major conflict resolution changes the logic of the PR, the two reviewers must re-verify the code, preventing accidental bugs from creeping in during a messy rebase.

---

### 6\. Definition of "Done"

A PR is considered ready to merge only when:

1. It has at least 2 Approvals.
2. All "Request Changes" comments have been resolved or addressed.
3. All merge conflicts are resolved.
4. Merge Strategy: Use Squash and Merge to keep the main branch history clean and easy to revert if necessary.

---

### OPTIONAL

📝 GitHub Pull Request Template (Reviewer Checklist)

### 📖 Description

Fixes \# (issue)

### 🛠️ Type of Change

- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 🧹 Refactor / Style / Docs

---

### 👨‍💻 Author's Self-Checklist

- [ ] No Conflicts: I have rebased/merged the target branch into this branch today.
- [ ] Size: This PR is under 400 lines (or I have a good reason why it isn't).
- [ ] Tests: Unit tests are included, and all CI checks are passing.
- [ ] Self-Review: I have reviewed my own diff and added explanatory comments where needed.

---

### 🧐 Reviewer Focus Guide

_As per our SOP, we require 2 reviewers. Please coordinate your focus:_

### Reviewer 1: Logic & Requirements

- [ ] Does this meet the business requirements of the ticket?
- [ ] Are there edge cases (nulls, empty strings, timeouts) missed?
- [ ] Are the tests meaningful and covering the new logic?

### Reviewer 2: Architecture & Standards

- [ ] Does this follow our company coding standards/style?
- [ ] Are there any security risks or performance bottlenecks?
- [ ] Is the code readable and maintainable for the next person?

---

### ⚖️ Dispute Resolution Reminder

If a thread exceeds 5 comments, please hop on a quick sync call. If a deadlock occurs, tag the @Tech-Lead as the tie-breaker.

---

### How to implement this:

1. Save the code above as a file named pull_request_template.md inside a .github/ folder in your main branch.
2. Automate Reviewers: If you want to automate who gets tagged, look into creating a CODEOWNERS file in that same folder.
3. Enforce it: Go to Settings \> Branches in GitHub and add a Branch Protection Rule for main. Check "Require a pull request before merging" and set "Required approvals" to 2\.

---

## Common Mistakes & Fixes

| Common Mistake                           | Fix                                                            |
| ---------------------------------------- | -------------------------------------------------------------- |
| Skipping prerequisites before execution. | Complete the prerequisite checklist before starting any phase. |

## Success Criteria

- [ ] Confirm all expected outcomes were completed and documented.

## Storage & Access

Store this playbook in `docs/playbooks` within the engineering repository.
Access is required for all engineers, team leads, and operations stakeholders involved in execution.
Always Open policy: keep this playbook visible while running the workflow.

## Next review date

2026-09-24
