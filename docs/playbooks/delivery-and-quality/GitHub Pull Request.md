# GitHub Pull Request (PR) – Team Standard Operating Procedure (SOP)

## DEFINE

| Field         | Value                                                                                                                                                                                                                               |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playbook Name | GitHub Pull Request                                                                                                                                                                                                                 |
| Purpose       | This SOP defines the standard, consistent process for creating, reviewing, and merging GitHub Pull Requests (PRs). Adhering to this process ensures clarity, quality control, and predictable delivery across the engineering team. |
| Owner         | Jeremy Bacuta, Luis Patrick Villaruz                                                                                                                                                                                                |
| Last Updated  | 2026-06-26                                                                                                                                                                                                                          |
| Review Cycle  | Every 90 days                                                                                                                                                                                                                       |

## Prerequisites

- [ ] Confirm required access and tools are ready.

## Step-by-Step Checklist

### 1\. Purpose

This SOP defines the standard, consistent process for creating, reviewing, and merging GitHub Pull Requests (PRs). Adhering to this process ensures clarity, proper documentation, and quality control for all code changes.

### 2\. Scope

This SOP applies to all developers and team leads contributing code to company repositories hosted on GitHub.

### 3\. Definitions

| Term                  | Definition                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **PR (Pull Request)** | A formal request to merge code changes from one branch (typically a feature branch) into another (the base branch). |
| **Base Branch**       | The target branch for the merge (`dev`).                                                                            |
| **Feature Branch**    | A branch created for a specific task, feature development, or bug fix.                                              |
| **Reviewer**          | A designated team member responsible for evaluating the code, providing feedback, and approving the PR.             |

### 4\. Roles & Responsibilities

#### Developer (PR Author)

- Create and manage feature branches.
- Create, update, and respond to feedback on Pull Requests.
- Ensure the PR is complete, tested, and ready for review and subsequent merge.

#### Reviewer

- Review PRs for correctness, quality, and scope alignment.
- Provide first review response within the defined SLA.
- Approve or request changes with clear, actionable feedback.

### 5\. PR Workflow Steps

### 5.1 Create a Feature Branch

- **Starting Point:** Always branch off the **latest** version of the base branch (e.g., `dev`).
- **Naming Convention (Based on GitHub Project/Issue):**
  - **Pattern:** `{issue-id}-{short-description-of-change}`
  - **Example:** `1111-user-login-validation` or simply `1111`

### 5.2 Synchronize with Base Branch

Before opening the PR:

- Pull the latest changes from the base branch to your local environment.
- Merge or Rebase your feature branch onto the base branch.
- Resolve any merge conflicts locally and ensure all tests pass.
- For long-running branches, synchronize with the base branch daily to reduce conflict risk.

### 5.3 Create the Pull Request

When creating the PR on GitHub:

- **Base Branch Selection:** Select the correct target base branch (e.g., `dev`).
- **Title:** Provide a clear, concise PR title. This should often align with the associated Issue title.
- **Draft First:** Open the PR as **Draft** until your pre-review checklist is complete.
- **Description:** Use the required PR description format below.

```markdown
## Why

[Why this change is needed and what problem it solves]

## What changed

- [Key code/config/documentation changes]

## Notes

- [Scope boundaries, rollout details, or anything reviewers should know]
```

### 5.4 Pre-Review Gate (Author)

Before changing the PR from Draft to Ready for Review:

- Complete self-review of the full diff.
- Ensure all required tests and CI checks are passing.
- Confirm the PR scope matches the linked issue.

### 5.5 Assign Reviewers and Mark Ready for Review

- Mark the PR as **Ready for Review** only after Section 5.4 is complete.
- Assign the designated team lead or a peer developer as reviewer.
- A minimum of **1 approval** is required before merge.

### 5.6 Reviewer SLA

- Reviewers are expected to provide an initial response (Approve, Comment, or Request Changes) within **24 business hours**.

### 5.7 Assignees

- Do not manually assign yourself to the PR. The engineer who opens the PR is tracked as the author, so authorship — not the Assignees field — drives the metrics.
- If co-developing, assign other contributing developers.

### 5.8 Development Reference

- Link the associated GitHub issue by referencing its ID (e.g., `#1111`) in the description to ensure proper tracking and closure.

### 5.9 Move Issue to "For Review"

- Assign your direct supervisor as a reviewer on the PR.
- Once the PR is created and all mandatory checks (like linking the issue and ensuring the feature branch is updated) are complete, the PR Author must manually move the associated GitHub Issue/card on the project board into the "For Review" or equivalent column. This signals to the team and Reviewer that the task is ready for evaluation.

### 5.10 Reviewer AI-Assisted Copilot Check

Before approving the PR, the reviewer must run an AI-assisted validation comment in the PR thread.

- Open the linked issue in the PR Development sidebar.
- Copy the issue's **Task Description**, **Requirements**, and **Acceptance Criteria** sections.
- In the PR comment box, run the review prompt below.
- Compare Copilot findings against the PR diff and issue acceptance criteria before final approval.

```markdown
@copilot Make sure this PR accomplishes the Acceptance Criteria and Requirements below:

# Task Description

[Paste from linked issue]

# Requirements

- [Paste from linked issue]

# Acceptance Criteria

- [ ] [Paste from linked issue]
```

Source format for issue sections: `docs/playbooks/ai-enablement/GitHub Issue Task Creator.md`.

### 6\. PR Submission Checklist

Before submitting the PR for review, ensure the following:

- The code changes are complete and adhere strictly to the scope of the associated issue.
- The feature branch has been recently synced and is up to date with the base branch (Section 5.2).
- The PR is initially opened as Draft and only moved to Ready for Review after Section 5.4 is complete.
- All local and automated tests (if applicable) pass without errors.
- The PR description follows the required `Why / What changed / Notes` format.
- The code adheres to all team coding standards and style guides.
- The linked issue includes Task Description, Requirements, and Acceptance Criteria sections for reviewer validation.

### 7\. Merge Readiness

Once the PR is open:

- Monitor Continuous Integration (CI) and build checks. Address any failures immediately.
- If additional fixes or scope changes are required, update the PR branch and push changes.
- Ensure all required checks are passing before merge.
- Ensure reviewer AI-assisted Copilot check (Section 5.10) has been completed and validated against the linked issue.
- Ensure at least **1 approval** is present before merge.
- Ensure all "Request Changes" comments are resolved or addressed.
- Resolve all merge conflicts before merge.
- Use **Squash and Merge** unless repository branch protection enforces a different merge strategy.

### 8\. Best Practices

- **Focus:** One PR should equal one logical feature or fix.
- **Size:** Keep PRs small and focused (target under 400 lines where practical) to facilitate quicker and more thorough review.
- **Updates:** Update the PR description immediately if the scope or implementation changes.
- **Lifespan:** Avoid long-lived feature branches; merge completed work as soon as possible.

### 9\. Common Mistakes to Avoid

- Submitting extremely large, unfocused PRs.
- Ignoring or delaying responses to reviewer comments.
- Merging the PR without the required code approvals.

### 10\. References

- GitHub Pull Requests Documentation
- Project Contribution Guidelines (Link to internal document)
- Archived duplicate SOP: `archive/playbooks/delivery-and-quality/Code Review.md`

_Versioning works by assigning a unique identifier (like 1.0.0) to each state of the document. Major changes increment the first number (e.g., 2.0.0), minor changes increment the second (e.g., 1.1.0), and small fixes increment the third (e.g., 1.0.1)._

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
