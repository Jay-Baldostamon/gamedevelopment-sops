# Day 27: Interactive handoff

| Field | Value |
| --- | --- |
| Blueprint Name | Day 27 - Interactive handoff |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 27 turns one implementation-ready issue into a bounded handoff, one checkpoint at a time. The output is an approved draft whose embedded prompt an AI assistant can execute inside Unity, plus either a single posted comment or a retained draft.

The authoritative lesson is [Day 27 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-27--interactive-handoff); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 26 passed, with the handoff skill loading in a fresh session
* One implementation-ready post-launch issue
* The repository context needed to name affected scripts, scenes, and prefabs
* Authorization to comment on the issue, if you intend to post

#### Continuity Rule

The issue body stays authoritative. The handoff translates it for an AI assistant; it never rewrites, extends, or replaces the issue. Today writes no game code.

#### Daily Evidence Standard

* Evidence is the checkpoint log, the dedup classification and base branch, the draft, and either the comment URL or the retained draft with its gaps.
* Clarification gaps are listed; requirements are never invented.
* No code, branch, commit, or pull request is created today.
* No standup post and no supervisor sign-off are required on this path.

#### Unity Rule

Every acceptance criterion in the handoff must be provable in Play Mode. The embedded prompt must require click-by-click editor steps for any scene, prefab, or Inspector change.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Establish authority and overlap

1. Replace both variables, then send the prompt.
2. Approve each checkpoint only after reading its real output: issue baseline, dedup classification, repository evidence, draft.
3. Require a clarification-gap list instead of guessed requirements.

### Phase 2: Review the draft

1. Trace every requirement and acceptance criterion to the issue body.
2. Confirm the embedded prompt requires Unity editor steps and Play Mode acceptance checks.
3. Reject invented file paths, scenes, APIs, architecture decisions, or dependencies.

### Phase 3: Decide on posting

1. Read the complete comment before deciding.
2. If authorized, approve posting exactly one comment and record its URL.
3. Otherwise keep the draft as the day's evidence.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-ISSUE-URL` | The full URL of the target issue |

#### Copyable AI Prompt

```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-issue-development-handoff` in INTERACTIVE mode for one implementation-ready issue in my Unity game repository.

The issue body is authoritative for requirements, scope, and acceptance criteria. Do not rewrite the issue, write game code, create branches, commit, push, or open a pull request.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Complete only the current checkpoint, show its real result, then ask "Approve the next step?" and wait for explicit approval.

1. Issue preflight: read the issue and its comments, extract requirements and acceptance criteria, and list clarification gaps. Do not guess.
2. Dedup/Overlap Preflight: classify as MERGED, OPEN-OVERLAP, DEPENDENCY, or CLEAR, and confirm the base branch. If MERGED, stop and report the delivered PR; if OPEN-OVERLAP, do not plan covered work.
3. Repository evidence: name the scripts, scenes, prefabs, and assets the work would touch, and the Unity checks that can prove each acceptance criterion in Play Mode.
4. Draft handoff: the bounded development plan plus one copy-pasteable `text` prompt. The prompt must require click-by-click Unity editor steps for everything I must wire, and must state the Play Mode acceptance checks and the evidence to capture.
5. Posting: show the complete comment and ask for separate approval. Post exactly one comment with `gh issue comment` only if I approve, then return its URL.

Do not edit the issue body, change labels, change CI, change permissions, or expose secrets.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Filling a vague acceptance criterion with an assumption | List it as a clarification gap and stop |
| Posting in the same approval as the draft | Show the draft, then ask separately about posting |
| Planning work already merged or in another open PR | Run the Dedup/Overlap Preflight and record the classification |
| A handoff with code but no editor steps | Require object, component, and field wiring instructions |
| Criteria proved by "looks correct" | Name the Play Mode check for each criterion |
| Inventing a scene or file path | Use repository evidence and list unknowns |
| Editing the issue body to make the handoff fit | Leave the issue unchanged |

#### Standards & Governance

* The issue body is authoritative; the handoff is an execution aid.
* Dedup/Overlap classification and the confirmed base branch are mandatory.
* One comment maximum, and only with separate approval.
* Acceptance criteria are Play Mode-provable, or they are reported as gaps.
* No code, branch, PR, label, or issue-body change.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Mode | Interactive with approval at each checkpoint |
| Baseline | Issue requirements and acceptance criteria |
| Dedup/Overlap | MERGED, OPEN-OVERLAP, DEPENDENCY, or CLEAR |
| Evidence | Scripts, scenes, prefabs, Unity checks |
| Embedded prompt | Editor steps plus Play Mode checks |
| Posting | Separate approval, one comment |
| Issue body | Unchanged |

- Milestone: the checkpoint log, approved draft, and either the comment URL or the retained draft with its gaps are saved.

## End-of-Day Checklist

- [ ] Requirements and acceptance criteria are quoted or closely traced to the issue body.
- [ ] The Dedup/Overlap classification and confirmed base branch are recorded.
- [ ] Repository evidence names the scripts, scenes, and Unity checks involved.
- [ ] The embedded prompt requires Unity editor steps and Play Mode acceptance checks.
- [ ] No requirement, path, scene, or API was invented; gaps are listed.
- [ ] I approved each checkpoint explicitly.
- [ ] At most one comment was posted, with its URL, or nothing was posted.
