# Days 41-45: Playwright Failure Issue Lifecycle Automation Implementation

Days 41-45 convert the Week 9 strategy into repeatable implementation and operating behavior for SimplaBots (`hurdman/simplabots`) using `.github/workflows/playwright.yml`.

The execution goal is to ensure that Playwright failures create exactly one actionable issue per deterministic test key, repeated failures do not duplicate issues, and issues auto-close only after the exact same key is observed and passed in a later run.

### Session: Day 41 - Lock Workflow Contract and Output Shape

Confirm the workflow-level contract before script logic changes:

- permissions include:
  - `contents: read`
  - `issues: write`
- Playwright gates write JSON reports to one shared directory:
  - `PLAYWRIGHT_JSON_OUTPUT_DIR=test-results/json`
- each gate uses a unique JSON report name to avoid overwrites:
  - `smoke.json`
  - `idor.json`
  - `regression.json`
  - `quarantine.json`
- reporter includes JSON output (`html,json` or `json`)
- post-test automation step runs with `if: always()`

SimplaBots-specific gate contract:

- pull_request and push paths run smoke + IDOR gates
- schedule and workflow_dispatch run regression + quarantine advisory gate
- issue lifecycle automation runs after test execution regardless of pass/fail

### Session: Day 42 - Implement Deterministic Keying and Robust Report Parsing

Implement a deterministic issue title format and treat it as the lifecycle key:

`[Playwright Failure] {project} :: {file} :: {full test title}`

Parsing rules:

- read all `*.json` files under `test-results/json`
- skip unreadable or malformed JSON and emit a warning
- recursively collect all specs in nested suites
- normalize full title using Playwright title path when available
- derive file and line from `spec.location` (fallback to known alternatives)

Failure classification rules:

- fail if `test.status === "unexpected"`
- fail if any result status is one of:
  - `failed`
  - `timedOut`
  - `interrupted`
- observed pass if test is expected and has a passed result

Required data structures:

- `failures`: records for current failed keys with issue payload data
- `observedTitles`: all keys observed in this run
- `observedPassedTitles`: keys observed and passed in this run

### Session: Day 43 - Build Create-Only-Missing Issue Flow

Implement issue creation flow with dedupe:

1. ensure `automation-test` label exists (create if missing)
2. list open issues with `automation-test`
3. map open issues by title (`openByTitle`)
4. de-duplicate in-run failures by key
5. create issues only for failure keys not present in `openByTitle`

Issue body requirements:

- `### Failing Test`
  - project
  - file and line
  - full title
- `### Failure Details`
  - error message block, truncated to safe length
- `### CI Context`
  - event
  - branch
  - commit SHA
  - run URL

### Session: Day 44 - Add Close-Only-on-Observed-Pass Hardening

Implement close flow for existing open automation issues:

- iterate open `automation-test` issues by title
- close only when all checks pass:
  - title is not currently failing
  - title is in `observedTitles`
  - title is in `observedPassedTitles`

Required hardening behavior:

- do not close issues for tests not executed in current run
- do not close issues for filtered-out gates
- do not close issues on partial observation
- add a closure comment with CI context for traceability

### Session: Day 45 - Validate Lifecycle Scenarios and Team Runbook Readiness

Validate three required scenarios against real or controlled CI runs:

1. new failure for a new key creates one `automation-test` issue
2. repeated failure for same key does not create a duplicate open issue
3. later observed pass for same key closes the corresponding open issue

Operational readiness checks:

- verify warnings appear (not hard-fail) for broken JSON files
- verify multi-gate outputs do not overwrite one another
- verify fork PR write constraints are documented for repo contributors

SimplaBots caveat:

- fork-based pull requests may have restricted token permissions that block issue writes depending on GitHub repository settings and event security model

## Deliverables and Milestones

By the end of Day 45, the trainee should have:

- one production-ready issue automation step in `playwright.yml` with `if: always()`
- deterministic keying implemented and unchanged across gates
- deduplicated create behavior tied to open `automation-test` issues by title
- hardening logic that closes only on observed pass for the same key
- scenario evidence for create, dedupe, and close lifecycle behavior
- contributor-facing notes for fork PR token limitations

## Implementation Examples

Example deterministic key helper:

```js
function toIssueTitle(project, relFile, fullTitle) {
  return `[Playwright Failure] ${project} :: ${relFile} :: ${fullTitle}`;
}
```

Example close guard:

```js
const shouldClose =
  !failedTitleSet.has(title) &&
  observedTitles.has(title) &&
  observedPassedTitles.has(title);
```

Example minimal issue body scaffold:

```md
### Failing Test
- Project: <project>
- File: <relative-file>:<line>
- Title: <full-title>

### Failure Details
```text
<error-message>
```

### CI Context
- Event: <event>
- Branch: <branch>
- Commit: <sha>
- Run: <run-url>
```

## End-of-Week Checklist

- [ ] Workflow permissions include `contents: read` and `issues: write`
- [ ] All Playwright gates emit JSON into `test-results/json` with unique filenames
- [ ] Automation step executes with `if: always()`
- [ ] Deterministic issue title format is stable and unchanged
- [ ] Label bootstrap (`automation-test`) is present and functional
- [ ] New failures create issues with required body fields
- [ ] Repeat failures do not create duplicate open issues
- [ ] Issues close only when key is observed and passed in a later run
- [ ] Broken JSON files are skipped with warnings, not silent failure
- [ ] Fork PR token limitation is documented in repo notes
