# Day 28: Echo handoff

| Field | Value |
| --- | --- |
| Blueprint Name | Day 28 - Echo handoff |
| Track | training |
| Level | day |
| Owner | Game Training Lead |
| Last Updated | 2026-11-24 |
| Review Cycle | Every 30 days |
| Status | active |

Day 28 generates a complete handoff without posting it. The output is a full comment you can read, verify, and post yourself only if you are authorized.

The authoritative lesson is [Day 28 of the Tools-Only 80-Day Learning Plan](../../Tools-Only%2080-Day%20Learning%20Plan.md#day-28--echo-handoff); this blueprint is its expanded execution form.

### Session: Preparation

#### Prerequisites

Before starting, confirm you have:

* Day 27 passed
* An implementation-ready issue with explicit requirements and acceptance criteria
* The handoff skill loading in a fresh session
* Authorization to comment, if you intend to post

#### Continuity Rule

Echo means produce, not publish. The run must not comment, edit the issue, or touch the repository. The decision to post is yours and happens after the run.

#### Daily Evidence Standard

* Evidence is the complete draft, the clarification-gap list, the dedup classification, and either the manually posted URL or the decision not to post.
* The draft must be complete enough to post without editing, or it is not finished.
* No standup post and no supervisor sign-off are required on this path.

#### Unity Rule

The embedded prompt must require click-by-click editor steps for every Unity change and a Play Mode check for every acceptance criterion.

### Session: Core Execution

#### Step-by-Step Checklist

### Phase 1: Generate the draft

1. Replace both variables, then send the prompt.
2. Require the full comment, the classification, and the base branch in the output.
3. Confirm the run posted nothing.

### Phase 2: Verify the draft

1. Compare every requirement with the issue body.
2. Check the embedded prompt's editor steps and Play Mode checks are complete.
3. Confirm no file path, scene, or API was invented.

### Phase 3: Decide on posting

1. Post manually only if authorized.
2. Record the URL, or record why you did not post.

#### Prompt Variables

| Variable | Replace with |
| --- | --- |
| `YOUR-GAME-REPO-FOLDER` | The absolute path to the game repository |
| `YOUR-ISSUE-URL` | The full URL of the target issue |

#### Copyable AI Prompt

```text
Game Repository Folder: YOUR-GAME-REPO-FOLDER
GitHub Issue: YOUR-ISSUE-URL

Use `engineering-sops-issue-development-handoff` in ECHO mode. Do not ask for intermediate approval after the placeholder preflight. Read the issue and relevant repository context, run the Dedup/Overlap Preflight, and produce the complete AI Development Handoff comment — but DO NOT post it.

First, repeat the repository folder and issue URL. If either contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Extract the issue's requirements and acceptance criteria and list any clarification gaps instead of inventing them.
2. Classify related work as MERGED, OPEN-OVERLAP, DEPENDENCY, or CLEAR, and confirm the base branch.
3. Gather repository evidence: the scripts, scenes, prefabs, and Unity checks the work would touch.
4. Return the complete handoff comment in a fenced block, including the bounded development plan and one copy-pasteable `text` prompt with Unity editor steps and Play Mode acceptance checks.
5. End with the exact manual action I must take to post it.

Do not post the comment, edit the issue body, write code, create branches, commit, push, open a pull request, change CI, change permissions, or expose secrets.
```

### Session: Quality and Reflection

#### Common Mistakes & Fixes

| **Mistake** | **Fix** |
| --- | --- |
| Accepting a partial draft | Require the complete comment in one fenced block |
| Posting because the draft looked good | Posting is a separate, manual, authorized decision |
| Skipping the dedup classification | Require the classification and base branch every time |
| Missing editor steps in the prompt | Reject the draft until object, component, and field steps exist |
| Criteria without a Play Mode check | Add the observable check or report the criterion as unproven |
| Editing the issue to match the draft | Leave the issue body unchanged |
| No decision recorded | Record either the posted URL or why nothing was posted |

#### Standards & Governance

* Echo produces; it never publishes.
* The draft is complete or it is not evidence.
* The issue body remains authoritative and untouched.
* Posting requires authorization and happens outside the run.
* No code, branch, commit, or pull request.

## Deliverables and Milestone

#### Quick Reference: Key Actions

| **Action** | Requirement |
| --- | --- |
| Mode | Echo: complete draft, no posting |
| Baseline | Issue requirements and acceptance criteria |
| Draft | Full comment in one fenced block |
| Embedded prompt | Unity editor steps and Play Mode checks |
| Dedup/Overlap | Classification and base branch stated |
| Posting | Manual, only if authorized |

- Milestone: the complete draft, the gap list, and either the posted URL or the decision not to post are saved.

## End-of-Day Checklist

- [ ] The run returned a complete handoff comment and posted nothing.
- [ ] Requirements and acceptance criteria trace to the issue body.
- [ ] The dedup classification and base branch are stated.
- [ ] Clarification gaps are listed instead of guessed.
- [ ] The embedded prompt includes Unity editor steps and Play Mode acceptance checks.
- [ ] I posted it manually only if authorized, and the URL is recorded.
