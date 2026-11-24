# Day 30: Plan-only IDE dry run

| Field | Value |
| --- | --- |
| Blueprint Name | Day 30 - Plan-only IDE dry run |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 30 proves the posted handoff is useful before anyone writes code. The handoff's prompt runs in the IDE for a plan only, and the day's evidence is the plan plus proof that nothing changed.

The authoritative lesson is [Day 30 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-30--plan-only-ide-dry-run); this blueprint is its expanded execution form.

**Gate:** blocking. Score it with [Rubrics](../../Resources/Rubrics.md) → Day 30. Week 7 does not start until every line is Yes.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 29 passed, with a posted handoff comment
* The game project open in the pinned Unity version
* A clean working tree, recorded with `git status`
* Copilot Chat in the IDE, and the handoff comment open

#### Continuity Rule

Plan only. No file, branch, commit, PR, comment, label, or Project change. The run reads the repository to plan; it does not implement anything.

#### Daily Evidence Standard

* Evidence is the bounded plan, the open questions, and the before-and-after `git status`.
* A plan that omits editor steps or Play Mode checks is not complete.
* No standup post and no supervisor sign-off are required on this path.

#### Unity Rule

The plan must name the scripts and scenes to change, the Inspector wiring you will do, and the Play Mode check for each acceptance criterion.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Set the boundary

1. Run `git status` and save the output.
2. Replace both variables, then send the prompt to Copilot Chat.
3. Confirm the assistant repeats the read-only boundary and stops if the handoff is missing.

### Phase 2: Produce the plan

1. Require ordered steps, files and scenes, editor wiring, Play Mode checks, risks, and open questions.
2. Reject any step based on a requirement the issue does not state.
3. If the handoff conflicts with the issue body, stop and report the conflict.

### Phase 3: Prove no mutation

1. Run `git status` again and compare it with the starting output.
2. Confirm no branch, commit, PR, comment, label, or Project change exists.
3. Score the Day 30 rubric.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-ISSUE-URL` | The full URL of the issue with the posted handoff |

#### Copyable AI Prompt

```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use the posted AI Development Handoff comment on this issue as the plan-only instruction set for my IDE assistant.

Read-only and plan-only boundary: do not create, edit, move, or delete any file; do not create a branch, commit, push, open a pull request, post a comment, change labels, or update Project status. Do not install packages or change project settings.

First, repeat the issue URL and the handoff comment URL. If either is a YOUR- placeholder or the handoff is missing, stop and ask me.

Then:
1. Restate the issue requirements and acceptance criteria from the issue body.
2. Read the repository context needed to plan: relevant scripts, scenes, prefabs, and project settings.
3. Return a bounded implementation plan with ordered steps, files and scenes to change, the Unity editor wiring I must do, the Play Mode acceptance checks, risks, and open questions.
4. Report the `git status` result from the start and end of the run as proof that nothing changed.
5. If the handoff conflicts with the issue body, stop and report the conflict instead of choosing.

Do not implement anything. Do not expose secrets.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Letting the assistant start editing files | Restate the plan-only boundary; stop the run if an edit appears |
| Forgetting the starting `git status` | Capture it before the first prompt |
| A plan with no editor wiring | Require object, component, and field steps |
| Acceptance criteria with no Play Mode check | Add the check or report the criterion as unproven |
| Treating a handoff conflict as a choice | Stop and report the conflict |
| "No changes" as a claim | Compare the before-and-after `git status` output |
| Using this run to preview code changes | Plan only; implementation needs separate authorization |

#### Standards & Governance

* Plan-only means zero mutation, local or remote.
* The issue body wins every conflict with the handoff.
* Every acceptance criterion has an observable Play Mode check.
* The posted handoff is used as written; today does not revise it.
* No code, branch, PR, comment, label, or Project change.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Mode | Plan-only in the IDE |
| Baseline | Issue requirements and acceptance criteria |
| Plan | Steps, files, scenes, editor wiring, checks |
| Evidence | Before-and-after `git status` |
| Mutations | None |
| Gate | Day 30 rubric all Yes |

- Milestone: the bounded plan, open questions, identical before-and-after working tree, and the rubric score are saved.

## End-of-Day Checklist

- [ ] The plan-only boundary was stated before planning began.
- [ ] Requirements and acceptance criteria come from the issue body.
- [ ] The plan names the files and scenes to change and the editor wiring required.
- [ ] Every acceptance criterion has a Play Mode check.
- [ ] Open questions and conflicts are reported instead of guessed.
- [ ] `git status` is identical before and after, and no branch, commit, PR, comment, or label changed.
- [ ] The Day 30 rubric is scored with every line at Yes.
