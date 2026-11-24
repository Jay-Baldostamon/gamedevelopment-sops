# Day 23: Interactive review

| Field | Value |
| --- | --- |
| Blueprint Name | Day 23 - Interactive review |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 23 reviews one real game-repository pull request as a guided exercise: one checkpoint at a time, approval before every next step, and findings verified in Unity rather than asserted. The output is an evidence-based review and a verdict.

The authoritative lesson is [Day 23 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-23--interactive-review); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 22 passed, with both review skills loading in a fresh session
* A pull request in the game repository that changes C# and a scene or prefab
* The PR branch fetchable into a second project folder or Git worktree
* The pinned Unity version and a screen recorder
* A clean working tree on the main branch

#### Continuity Rule

This is a one-time training interaction override. The installed review skills stay unchanged, and the repository's routing policy is not edited. Only the interaction style changes for this single review.

#### Daily Evidence Standard

* Evidence is the checkpoint log with each approval, the requirements the review used, the Unity validation record, and the verdict.
* Every finding names its requirement, location, impact, and fix direction.
* No review is submitted, nothing is merged, and no repository setting changes.
* No standup post and no supervisor sign-off are required on this path.

#### Unity Validation Rule

Open the PR branch in a separate folder or worktree, in the pinned Unity version. Play the affected behavior, read the Console, and capture a GIF. A check you could not run is reported as not run, never replaced by a code-reading opinion.

#### Secret Rule

Keep secret redaction and command approvals on. Never print, paste, or log credentials.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Run the checkpoints

1. Replace both variables, then send the prompt.
2. Approve each checkpoint only after reading its real output: preflight, PR context, requirements baseline, diff review, validation, findings, verdict.
3. Stop if a skill is missing or the repository is unclassified; report the exact blocker.

### Phase 2: Validate in Unity

1. Switch the second project folder to the PR branch, or open the existing worktree. Never mix branches in the main project folder.
2. Play the behavior the change claims to affect, and read the Console.
3. Capture a GIF or screenshots of the observed result.

### Phase 3: Decide findings

1. Keep only findings grounded in a linked requirement, the diff, or the validation output.
2. Separate blocking gaps from suggestions.
3. State Approve, Request Changes, or Comment with the evidence behind it.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-PR-NUMBER-OR-URL` | The pull request number or full URL |

#### Copyable AI Prompt

```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
Pull Request: YOUR-PR-NUMBER-OR-URL

Use my normal local Hermes setup and the review access and skills prepared on Day 22 to perform ONE interactive, evidence-based review of my Unity game repository.

This is a one-time training interaction override only. Do not modify, reinstall, patch, update, replace, or save changes to `github-code-review` or `engineering-sops-pr-review`. For this review only, follow their normal rules but pause after every step and ask me to approve the next step.

First, repeat the repository folder and pull request. If either value still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Use these checkpoints in order. Complete only the current checkpoint, show its real result, then ask "Approve the next step?" and wait for explicit approval.

1. Skill and repository preflight: confirm both skills load, identify the repository from its remote, and state the mode selected by `engineering-sops-pr-review`. Stop with the exact blocker if a skill is unavailable or the repository is unclassified.
2. PR context: title, description, author, actual base branch, head branch, linked issues, changed files, and current checks. Do not assume the base branch is `main`.
3. Requirements baseline: read every linked issue and extract its explicit requirements and acceptance criteria. State anything missing, vague, or unavailable; never invent a requirement.
4. Diff and code review: read the complete diff and surrounding scripts. Check C# correctness, Unity lifecycle use (`Awake`/`Start`, `Update`, `FixedUpdate`), serialized-field wiring, scene and prefab changes, input and collision regressions, performance, error handling, documentation, and evidence quality.
5. Unity validation plan: propose the exact checks — open the PR branch in the pinned Unity version, play the affected behavior, confirm zero red Console errors, capture a screenshot or GIF — and wait for approval before running them. Report the real result.
6. Findings and permitted remediation: report only findings grounded in a requirement, the source, the diff, or the validation output. Do not change files unless this repository is routed to gap-resolve and I separately approve a minimal fix.
7. Verdict and review text: state Approve, Request Changes, or Comment with its evidence, and draft the GitHub review text without submitting it.

Never merge, alter CI settings, change repository permissions, or expose secrets. Human review and CI remain required before merge.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Approving "next step" without reading the output | Read each checkpoint's real result before approving |
| Assuming the base branch is `main` | Read the actual base branch from the PR |
| Reviewing code without the linked issue | Extract the requirements and acceptance criteria first |
| Treating a silent console as proof | Check wiring and the claimed behavior in Play Mode |
| Testing on the main branch folder | Use a second folder or worktree for the PR branch |
| Accepting style preferences as defects | Tie every blocking finding to a requirement |
| Submitting the review text | Draft it and leave submission to the human decision |

#### Standards & Governance

* The issue body is the requirements baseline; gaps are reported, not filled.
* Every checkpoint needs explicit approval before the next one runs.
* Findings must be reproducible from the issue, diff, or Unity evidence.
* The installed skills and routing policy stay unchanged.
* No merge, CI change, permission change, or secret exposure.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Mode | Interactive with approval at each checkpoint |
| Baseline | Linked issue requirements and acceptance criteria |
| Diff review | C#, scene, prefab, and adjacent behavior |
| Validation | Pinned Unity, Play Mode, Console, GIF |
| Findings | Requirement, location, impact, fix direction |
| Verdict | Approve, Request Changes, or Comment, with evidence |
| Submission | None |

- Milestone: the checkpoint log, requirements coverage, Unity validation record, verified findings, verdict, and draft review text are saved.

## End-of-Day Checklist

- [ ] Every checkpoint was approved explicitly before the next one started.
- [ ] The real base branch, head branch, linked issues, and checks are recorded.
- [ ] Requirements and acceptance criteria come from the linked issue, with gaps stated instead of invented.
- [ ] The diff was reviewed for C#, scene, and prefab behavior.
- [ ] Unity Play Mode validation ran on the PR branch and its real result is recorded.
- [ ] Every finding names its requirement, location, impact, and fix direction.
- [ ] The verdict is stated with evidence.
- [ ] No review was submitted and nothing was merged or changed in repository settings.
