# Day 24: Inform-only review

| Field | Value |
| --- | --- |
| Blueprint Name | Day 24 - Inform-only review |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 24 runs one fully automated read-only review. Hermes inspects, validates, and reports, and nothing else. The output is a report you verified yourself plus proof that no local or remote state changed.

The authoritative lesson is [Day 24 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-24--inform-only-review); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 23 complete
* A pull request available, with its branch fetchable into a second folder or worktree
* The pinned Unity version and a recorder
* A clean working tree recorded with `git status`

#### Continuity Rule

This is a one-time training mode override. The repository is treated as inform-only for this review regardless of its normal routing. The installed skills stay unchanged.

#### Daily Evidence Standard

* Evidence is the report, your verification of each blocking finding, the before-and-after working-tree state, and the Unity result.
* A finding you cannot reproduce is deleted, not kept as a suggestion.
* No review is submitted, nothing is committed, and nothing is merged.
* No standup post and no supervisor sign-off are required on this path.

#### Unity Validation Rule

Open the PR branch in a separate folder or worktree in the pinned Unity version. Play the affected behavior and read the Console. Formatting, package installation, and generated files are not allowed, even as "harmless" changes.

#### Secret Rule

Keep secret redaction and command approvals on. Never print, paste, or log credentials.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Run the read-only review

1. Replace both variables, then send the prompt.
2. Confirm the report states the normal repository mode and the inform-only override.
3. Do not answer intermediate questions; the run must return one final report.

### Phase 2: Verify the findings

1. Inspect or re-run each blocking finding yourself: the requirement, the file and line, and the Unity behavior.
2. Remove any finding you cannot ground in the issue, diff, or Console output.
3. Confirm the verdict matches the verified findings.

### Phase 3: Prove no mutation

1. Compare `git status` with the starting state.
2. Confirm no branch, commit, review, or merge exists.
3. Save the report and your verification with the day's evidence.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-PR-NUMBER-OR-URL` | The pull request number or full URL |

#### Copyable AI Prompt

```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
Pull Request: YOUR-PR-NUMBER-OR-URL

Use my normal local Hermes setup and the review skills prepared on Day 22 to perform ONE fully automated, evidence-based review of my Unity game repository.

This is a one-time training mode override only. Do not modify, reinstall, patch, or save changes to `github-code-review` or `engineering-sops-pr-review`. For this review only, override the normal repository routing and treat the repository as INFORM-ONLY regardless of its normal classification.

Do not pause for intermediate approval after the placeholder preflight. Complete the full review and return one final report.

First, repeat the repository folder and pull request. If either value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Confirm both review skills are installed and available. If either is unavailable, stop and return the exact Day 22 remediation.
2. Identify the repository from its remote, state its normal routing classification, then state that this training review is overridden to inform-only.
3. Gather PR metadata: title, description, author, actual base branch, head branch, linked issues, changed files, and current checks.
4. Read every linked issue and extract explicit requirements and acceptance criteria. Report a missing or vague baseline instead of inventing requirements.
5. Read the complete diff and surrounding scripts. Review C# correctness, Unity lifecycle use, serialized-field wiring, scene and prefab changes, input and collision regressions, performance, error handling, and evidence quality.
6. Run safe read-only Unity validation: open the PR branch in the pinned Unity version, play the affected behavior, check the Console, and capture a screenshot or GIF. Report the exact steps and real results. Do not modify the worktree for formatting, dependency installation, generated files, or any other reason.
7. Report only grounded findings. Every blocking finding must name the failed requirement or acceptance criterion, the file and line when available, the impact, and a concrete fix direction.
8. Do not modify code, change the worktree, create commits, push, resolve gaps locally, merge, alter CI settings, change repository permissions, or submit a GitHub review.
9. Return one report with these headings exactly: Skill Availability; Repository Mode and Training Override; PR Context; Requirements and Acceptance-Criteria Coverage; Unity Validation Performed; Verified Findings; Verdict; Suggested GitHub Review Text.

If a verified blocking gap exists, the suggested text must request changes. If no verified blocking gap exists, report the zero-gap outcome honestly. Do not submit the suggested text. Never expose secrets.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Letting the run install packages or format files | Forbid every worktree change, including "harmless" ones |
| Accepting a finding you cannot reproduce | Verify the requirement, location, and behavior yourself |
| Skipping the Unity check because the diff looks small | Play the affected behavior anyway, or report it as not run |
| Reading the report as the evidence | Verify the findings against the issue, diff, and Console |
| Treating a suggestion as blocking | Keep only requirement-backed gaps as blocking |
| Submitting the suggested review text | Leave submission to the human reviewer |
| Forgetting to compare `git status` | Record it before and after and compare |

#### Standards & Governance

* Inform-only means zero local or remote mutation.
* Every blocking finding names its failed requirement and a fix direction.
* A zero-gap result is reported honestly, not padded with preferences.
* The installed skills and routing policy stay unchanged.
* No review submission, approval, merge, CI change, permission change, or secret exposure.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Mode | Fully automated, inform-only override |
| Skills | Both loaded before the review starts |
| Baseline | Linked issue requirements and acceptance criteria |
| Validation | Read-only Unity Play Mode and Console |
| Findings | Reproduced and requirement-backed only |
| Report | The nine required headings |
| Mutations | None |

- Milestone: the review report, your verification, and the unchanged working tree are saved.

## End-of-Day Checklist

- [ ] Both skills were confirmed available before the review started.
- [ ] The report states the normal mode and the inform-only override.
- [ ] Requirements coverage comes from the linked issue, with gaps stated.
- [ ] Unity validation ran on the PR branch and the real result is recorded.
- [ ] Every blocking finding names a requirement, location, impact, and fix direction.
- [ ] I verified each blocking finding myself and removed unreproducible ones.
- [ ] The working tree is unchanged and no branch, commit, review, or merge was created.
