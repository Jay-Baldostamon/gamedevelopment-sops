# 🤖 AI Training Manual Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | AI Training Manual Playbook |
| Purpose | Standardize how OJTs are trained to become AI-assisted developers with strong fundamentals in prompting, setup, debugging, code literacy, Git/GitHub workflows, scope control, and AI-assisted task creation. This matters because the process is repeated frequently, is difficult to delegate consistently, and creates breakdowns when expectations, evidence, or workflow discipline are inconsistent. |
| Owner | Direct Supervisor / Training Program Owner |
| Last Updated | 2026-05-18 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] Confirm this training process is used for repeated OJT onboarding or capability-building
- [ ] Assign one playbook owner responsible for accuracy
- [ ] Confirm the OJT has required tool access
- [ ] Confirm the Direct Supervisor is assigned
- [ ] Confirm file storage location for daily artifacts
- [ ] Confirm GitHub access is available
- [ ] Confirm local development environment requirements are known
- [ ] Confirm standup format and submission channel are defined
- [ ] Confirm blocking days and pass/fail gates are understood
- [ ] Confirm artifact naming convention is understood: `YYYY-MM-DD`

## Step-by-Step Checklist
### Phase 1: Define the Training Scope

1. **Name** the training process as `AI Training Manual Playbook`.
2. **State** the purpose of the program in one sentence.
3. **Assign** the Direct Supervisor as the reviewer for pass/fail days.
4. **Assign** one playbook owner responsible for maintaining this document.
5. **Confirm** the program philosophy before training begins.
6. **Document** that the program optimizes for process over polish in the early phase.
7. **Document** that every day requires evidence, not verbal status only.
8. **Document** that connected training days continue in one project track where applicable.
9. **Document** that AI is used as a copilot, not as an autopilot.
10. **Document** that blocking gates must be passed before progression.

- [ ] Playbook owner is named
- [ ] Supervisor is named
- [ ] OJT understands the program philosophy
- [ ] Pass/fail expectations are visible

### Phase 2: Set Roles, Tools, and Standards

1. **Assign** OJT responsibilities.
2. **Assign** Direct Supervisor responsibilities.
3. **Create** the daily folder using the required naming format.
4. **Store** artifacts in the daily folder root unless another location is explicitly required.
5. **Require** standups to include links to all required outputs.
6. **Require** documentation to remain concise and easy to parse.
7. **Instruct** the OJT to escalate blockers early.
8. **Prohibit** committing secrets such as `.env`, API keys, or tokens.
9. **Confirm** the tools and systems used in training.

- [ ] OJT knows daily deliverables
- [ ] Supervisor knows review responsibilities
- [ ] Folder naming convention is followed
- [ ] Secret-handling rules are acknowledged

### Phase 3: Run the Weekly Learning Arc

1. **Train** Week 1 on foundation skills.
2. **Train** Week 2 on ownership and control skills.
3. **Train** Week 3 on exposure and team workflow skills.

#### Week 1 Focus

1. **Teach** AI interaction habits.
2. **Teach** prompt engineering.
3. **Teach** expectation-vs-actual analysis.
4. **Teach** decomposition into buildable prompts.
5. **Teach** local setup.
6. **Teach** first debugging process.
7. **Repeat** code literacy function walkthroughs daily until passed.

#### Week 2 Focus

1. **Teach** project publication to GitHub.
2. **Teach** branch-based upgrade workflow.
3. **Teach** feature creep control.
4. **Teach** MVP prioritization.
5. **Teach** frontend vs backend separation.
6. **Run** a version control capstone where the OJT breaks and recovers a workflow safely.

#### Week 3 Focus

1. **Teach** feasibility repository setup from config analysis.
2. **Assign** a real issue implementation.
3. **Require** a pull request for the issue work.
4. **Teach** AI-assisted review.
5. **Teach** QA and merge discipline.
6. **Teach** business need to structured GitHub issue creation.

- [ ] Weekly objectives are defined
- [ ] Connected project continuity is maintained
- [ ] Blocking competencies are identified in advance

### Phase 4: Execute the Daily Workflow

1. **Understand** the day’s objective.
2. **Prepare** the required environment and tools.
3. **Execute** the task with AI in structured phases.
4. **Validate** the output using runtime and quality checks.
5. **Document** all required artifacts.
6. **Post** standup links.
7. **Submit** work for supervisor review when required.

**IF the day is connected to a previous project day, THEN continue in the same project track.**

**IF the OJT is blocked by access, license, or dependency issues, THEN ping and escalate according to the day rules.**

- [ ] Objective is clear before work starts
- [ ] Environment is ready
- [ ] Validation was completed before standup
- [ ] Standup contains all required links

### Phase 5: Apply the AI Usage Framework

1. **Use** AI for planning before coding.

2. **Use** AI for stack inference from project files.

3. **Use** AI for debug strategy.

4. **Use** AI for context framing.

5. **Use** AI for refactoring suggestions.

6. **Use** AI for pull request review support.

7. **Use** AI for structuring tasks with summaries, acceptance criteria, and files involved.

8. **Do not use** AI for blind execution.

9. **Do not use** AI to skip required SOP steps.

10. **Do not use** AI to mix unrelated scopes in one prompt.

11. **Do not use** AI to bypass review and QA gates.

12. **Write** one intent per prompt.

13. **Include** constraints in every prompt.

14. **Include** acceptance criteria in every prompt.

15. **Request** a changed-file summary in every coding prompt.

16. **Request** a verification checklist in every coding prompt.

```
Prompt Template:
Task: [single task]
Constraints: [technical/business constraints]
Acceptance Criteria:
- [criterion 1]
- [criterion 2]
Return:
- Changed-file summary
- Verification checklist
- Risks or assumptions
```

- [ ] Prompts contain one clear intent
- [ ] Acceptance criteria are explicit
- [ ] AI output is validated against runtime behavior

### Phase 6: Follow the Debugging Protocol

1. **Check** the VS Code terminal first.
2. **Check** the Browser DevTools Console second.
3. **Check** the Browser DevTools Network tab third.
4. **Capture** the exact error message.
5. **Ask** AI what additional diagnostic context should be included.
6. **Re-prompt** AI with the full context.
7. **Log** the error, cause, fix, and result.

```
Bug Resolution Log Template
Error:
Cause:
Fix:
Result:
Evidence Link:
```

**IF the first fix attempt fails, THEN add more runtime evidence before prompting again.**

**IF the issue is caused by missing access or dependencies, THEN escalate immediately to the supervisor.**

- [ ] Error text is captured exactly
- [ ] Root cause is documented
- [ ] Fix is tested
- [ ] Result is logged with evidence

### Phase 7: Enforce Git and GitHub Workflow Discipline

1. **Use** descriptive commit messages.
2. **Isolate** work by branch when required.
3. **Open** pull requests instead of committing directly to protected primary branches.
4. **Wait** for CI/CD checks to pass before merging.
5. **Validate** Copilot suggestions against issue acceptance criteria.
6. **Include** pull request evidence and links in standups.

**IF the workflow requires branch-based work, THEN do not commit directly to `main` or `master`.**

**IF CI/CD checks fail, THEN fix the failure before requesting merge approval.**

```
Commit Message Template
type(scope): short summary

Examples:
feat(auth): add login form validation
fix(api): handle null response in user service
docs(training): update standup artifact rules
```

- [ ] Branch workflow was followed
- [ ] PR was opened when required
- [ ] CI/CD passed before merge
- [ ] Standup includes PR evidence

### Phase 8: Control Scope and Prioritize MVP

1. **Classify** requirements into Must-Have and Nice-to-Have.
2. **Prioritize** the MVP scope first.
3. **Separate** frontend and backend concerns when planning work.
4. **Reject** scope expansion that is not required for the current objective.
5. **Document** tradeoffs when deprioritizing items.

**IF a requested addition is not required to meet the day objective, THEN move it to Nice-to-Have.**

```
Feature Prioritization Template

Must-Have
- [item]

Nice-to-Have
- [item]

Deferred Reason
- [reason]
```

- [ ] MVP is clearly defined
- [ ] Nice-to-Have items are separated
- [ ] Scope creep is documented and controlled

### Phase 9: Produce and Review Artifacts

1. **Capture** screenshots of before, after, or running app states as required.
2. **Create** markdown logs for commands, findings, and pain points.
3. **Attach** pull request, issue, or repository links where required.
4. **Record** walkthrough videos when required.
5. **Verify** that all artifacts are reviewer-friendly.
6. **Link** all artifacts in the standup update.

```
Standup Update Template

Today’s Objective:
Status:
Artifacts:
- [link 1]
- [link 2]
Blockers:
Next Step:
```

- [ ] Artifacts are minimal but complete
- [ ] Artifacts are reproducible
- [ ] Reviewer can verify progress quickly
- [ ] Standup links work

### Phase 10: Apply Pass/Fail and Blocking Rules

1. **Mark** version control recovery as a blocking day.
2. **Mark** issue-to-PR execution as a blocking day.
3. **Mark** review, QA, and merge discipline as a blocking day.
4. **Repeat** code literacy walkthroughs until passed.
5. **Pause** progression when a blocking competency is not passed.
6. **Require** supervisor validation before advancing after a blocking day.

**IF a blocking day is failed, THEN do not advance to the next stage.**

**IF code literacy is not yet passed, THEN continue daily line-by-line walkthrough practice.**

- [ ] Blocking competencies are tracked
- [ ] Failed blocking days stop progression
- [ ] Recurring competencies continue until passed

### Phase 10b: Exit Gates (Test-Out for Skippable Competencies)

Some blocking competencies have a **test-out gate** so an OJT who already meets the skill can prove it in one sitting instead of repeating the full daily track. Exit gates are **manual and temporary** — they are never run by the daily training automation.

- **Which days are skippable:** Week 1 code literacy (`exit-gate-week-1.md`) and Week 2 version-control capstone (`exit-gate-week-2.md`). More gates (e.g. Week 3/Week 4) may be added later.
- **Who triggers it:** only the **Direct Supervisor** spawns the exit-gate issue, and only at the OJT's explicit request. The OJT does not open one themselves.
- **How it's spawned:** the Supervisor creates the issue **manually** from the template `.github/ISSUE_TEMPLATE/exit-gate-week-<N>.md`. These templates are named to stay outside the daily automation: the filename is not `day-*.md`, the title does not contain `Day <N>`, and the label is `training-exit-gate` (not the daily `training` label), so the automation never auto-creates or auto-advances them.
- **One attempt, pass/fail, no iteration:** the gate is a single assessment, not an exercise to repeat.
  - **PASS** → the Supervisor retitles the issue to `Exit Gate - Week <N> (PASSED)` and closes it directly. The OJT continues from their actual current training position.
  - **FAIL** → the Supervisor closes the issue directly and the OJT **returns to their previous daily training work** (the recurring Day 5 or Day 10 day) and repeats it until passed.
- **Do not route an exit-gate issue through the For Review → Done board flow.** Close it directly on pass/fail, otherwise the daily advance automation may interpret the move as a completed day and fire an unrelated next-day issue.

- [ ] Exit gates are only spawned manually by the Direct Supervisor on request
- [ ] Exit-gate issues use `exit-gate-week-<N>.md` templates (not `day-*.md`), no `Day <N>` in the title, `training-exit-gate` label
- [ ] Exit gates are pass/fail, one attempt, no iteration
- [ ] On FAIL, OJT returns to the previous daily training day and repeats until passed
- [ ] Exit-gate issues are closed directly, never via the For Review → Done board flow

### Phase 11: Maintain Governance and Improvement

1. **Keep** training documentation modular.
2. **Avoid** creating overloaded mega-docs.
3. **Preserve** continuity across connected days.
4. **Prefer** clarity and repeatability over complexity.
5. **Update** SOP examples every sprint or month.
6. **Maintain** a reusable templates library.
7. **Track** optional KPIs weekly if useful.

```
Recommended Templates Library
- Pain points log
- Expected vs actual output
- Bug resolution log
- Feature prioritization (MVP)
- Setup command log
- PR review evidence log
- Task creation refinement doc
- Code literacy line-by-line script
```

```
Optional KPI Tracker
- Standup completeness rate
- First-pass pass/fail rate on blocking days
- Average debug turnaround
- PR cycle time
- AC compliance quality
- Frequency of scope violations
```

- [ ] Templates are centrally available
- [ ] Governance rules are documented
- [ ] Improvement loop exists

## Common Mistakes & Fixes
| Common Mistake                                     | Fix                                                         |
| :------------------------------------------------- | :---------------------------------------------------------- |
| OJT gives verbal status without evidence           | Require links to artifacts in every standup                 |
| OJT uses AI output without verification            | Require runtime validation and acceptance criteria checks   |
| Work expands beyond the day objective              | Classify items into Must-Have and Nice-to-Have before build |
| OJT commits directly to protected branch           | Require branch workflow and PR-based review                 |
| Debugging starts with guessing instead of evidence | Check terminal, console, and network in order               |
| Errors are reported vaguely                        | Capture exact error text and log cause, fix, and result     |
| Progression happens without competency proof       | Enforce blocking day pass/fail gates                        |
| Documentation becomes hard to use                  | Keep docs concise, modular, and reviewer-friendly           |
| Sensitive files are committed                      | Reinforce no-secrets rule and check before commit           |
| Training becomes disconnected day to day           | Continue the same project track across connected days       |

## Success Criteria
- [ ] OJT completes daily objectives with evidence
- [ ] Standups consistently include all required links
- [ ] OJT uses AI with clear prompts, constraints, and acceptance criteria
- [ ] OJT validates outputs against runtime behavior
- [ ] OJT follows branching and PR workflow correctly
- [ ] Blocking competencies are passed before advancement
- [ ] Code literacy improves through repeated walkthroughs
- [ ] Scope creep is actively controlled
- [ ] Debugging follows a repeatable evidence-first process
- [ ] Training artifacts are clear, reproducible, and easy to review

## Storage & Access
Store this playbook in a central digital location that the OJT and Direct Supervisor can both access.

Recommended storage options:

- Shared Google Drive folder
- Team SOP repository
- Internal wiki or knowledge base
- Shared training operations folder

**Always Open Policy:** Keep this playbook open and visible whenever training is being delivered or evaluated. Use it during execution, not only during onboarding. Use it for new-hire training, cross-training, supervisor reviews, and error correction. If a mistake happens, check whether the playbook existed, whether it was followed, and whether it needs updating.

**Upload Reminder:** Store playbooks centrally, use them for training, and keep them open during execution.

**Next review date:** 2026-07-01

## Next review date
2026-09-24
