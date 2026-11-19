# 🧱 Beta Migration DB Failure Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Beta Migration DB Failure Playbook |
| Purpose | Standardize how the team handles a failed beta deployment migration gate so the error is routed back to the originating PR, assigned to the responsible developer, and fixed safely before another rollout attempt. |
| Owner | Alan Baldelobar |
| Last Updated | 2026-07-08 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] Confirm you have access to the failing GitHub Actions run and Slack alert
- [ ] Confirm you can open the deployment PR and the originating feature PR
- [ ] Confirm you can view the migration file, schema diff, and workflow logs
- [ ] Confirm you know who authored the migration change
- [ ] Confirm a team lead is available if rollback or manual DB recovery is required

## Step-by-Step Checklist
### Phase 1: Detect and Freeze the Rollout

1. **Treat** the beta deployment as blocked as soon as the migration gate fails.
2. **Do not** re-run the deployment blindly.
3. **Confirm** the failure is specifically from the throwaway DB clone migration step.
4. **Capture** the Slack alert, workflow run URL, failing job name, and timestamp.
5. **Copy** the exact migration name, database error code, and database error message from the logs.

**IF the failure happened only in the throwaway DB clone gate, THEN prefer a code fix before any database intervention.**

**IF the failure reached a shared staging database and partially applied changes, THEN stop and involve a team lead before any manual recovery action.**

Evidence checklist:

- [ ] Workflow run URL captured
- [ ] Failing job name captured
- [ ] Migration name captured
- [ ] Database error code captured
- [ ] Exact database error message captured
- [ ] Slack alert or screenshot captured

### Phase 2: Triage the Migration Error

1. **Open** the failing migration file and the related schema change.
2. **Identify** the originating PR that introduced the migration.
3. **Identify** the developer who authored or merged that PR.
4. **Classify** the failure type before choosing a fix path.

Common failure classes:

| Failure class | Typical signal | Default action |
| --- | --- | --- |
| Duplicate object | `already exists`, Postgres `42701`, duplicate column/table/index | Update or remove the redundant migration logic |
| Invalid dependency order | Missing table, relation, enum, or extension | Reorder or split the migration safely |
| Data backfill failure | Constraint violation, nullability issue, transform error | Fix the data migration logic or split schema and data steps |
| Environment drift | DB already differs from expected migration history | Confirm actual DB state and involve a team lead before manual recovery |

Example from current failure:

```text
Migration: 20260617172035_migrate_action
Code: 42701
Error: column "brandColorsSnapshot" of relation "AdCampaign" already exists
```

This usually means the migration is trying to add a column that is already present in the target schema, so the PR owner should update, remove, or replace the migration after confirming the intended database state.

### Phase 3: Route the Failure Back to the Originating PR

1. **Comment** on the same GitHub PR that introduced the migration.
2. **Assign** the PR back to the same developer who authored the erroneous migration.
3. **Tag** a team lead only when the recovery path is unclear, risky, or needs manual DB intervention.
4. **Link** the failing beta deployment run in the PR comment so the context stays attached to the original change.
5. **Request** that the PR description or follow-up commit explains the chosen recovery path: fix, rollback, or removal.

PR comment template:

```markdown
## Beta migration gate failed

- Workflow: [link to failing run]
- Migration: `20260617172035_migrate_action`
- Database code: `42701`
- Error: `column "brandColorsSnapshot" of relation "AdCampaign" already exists`

This migration failed in the beta throwaway DB clone gate. Please update this PR with the recovery approach and push the required fix before re-running deployment.

Expected owner: @[developer]
Escalation: Tag a team lead if this needs rollback, `prisma migrate resolve`, or manual DB intervention.
```

Ownership rules:

- [ ] Originating PR has a failure comment
- [ ] Same developer is assigned
- [ ] Team lead is tagged only if needed
- [ ] Recovery path is stated on the PR

### Phase 4: Choose the Recovery Path

1. **Prefer fix-forward** when the bad migration has not been safely applied to a shared environment.
2. **Use rollback or migration resolution** only when the migration touched a shared database state and the team lead agrees with the exact recovery steps.
3. **Remove** the migration only if the schema change is redundant and removing it will not break migration history expectations.

Recovery options:

| Option | Use when | Typical action |
| --- | --- | --- |
| Fix the migration | The intent is still correct but the SQL is unsafe or duplicated | Adjust the migration or replace it with a safe follow-up |
| Roll back the migration | A partially applied change must be reversed in a shared DB | Use the approved rollback path and document commands used |
| Remove the migration | The DB already matches the desired state and the migration is unnecessary | Remove or supersede the redundant migration in the PR |

Decision guardrails:

- **Do not** edit a migration that has already been successfully applied in a shared environment unless the team explicitly agrees on the history change.
- **Do not** run `prisma migrate resolve` as a shortcut unless the team lead agrees and the exact command is documented in the PR.
- **Do not** retry beta deployment until the migration owner has pushed the corrective change.

### Phase 5: Validate the Fix

1. **Re-run** the migration test on the throwaway DB clone.
2. **Confirm** the failing migration now applies cleanly.
3. **Confirm** no new migration failure appears behind it.
4. **Update** the same PR comment with the fix summary and rerun result.
5. **Proceed** with beta deployment only after the migration gate is green.

Validation checklist:

- [ ] Migration test re-run passed
- [ ] No new migration failure replaced the old one
- [ ] Originating PR was updated
- [ ] Deployment was retried only after the fix landed

### Phase 6: Close Out and Learn

1. **Record** the root cause on the same PR or linked issue.
2. **Capture** whether the problem came from duplicate DDL, schema drift, unsafe backfill, or review gap.
3. **Create** follow-up work if tooling or review guardrails need improvement.
4. **Update** related playbooks when the current process missed an important step.

Closeout checklist:

- [ ] Root cause documented
- [ ] Fix path documented
- [ ] Follow-up work created if needed
- [ ] Related playbooks updated if process gaps were found

## Common Mistakes & Fixes
| Mistake | Fix |
| --- | --- |
| Re-running beta deploy without understanding the migration error | Stop and classify the failure first |
| Discussing the fix only in Slack | Put the failure comment on the originating PR so the context stays with the code |
| Reassigning the work to someone new immediately | Assign it back to the original developer first, then add lead support only when needed |
| Using manual DB recovery for a throwaway clone failure | Prefer code correction unless shared DB state was changed |
| Applying `migrate resolve` without documentation | Record the reason, approver, and command in the PR |

## Success Criteria
- [ ] Migration failures are routed back to the originating PR
- [ ] The same developer owns the first-pass fix
- [ ] Team leads are involved only when the recovery is risky or unclear
- [ ] Beta deploy is retried only after the migration gate passes
- [ ] The final PR history explains the root cause and fix

## Storage & Access
Store this playbook in `docs/playbooks` within the engineering repository.
Access is required for developers, reviewers, and team leads supporting deployments and database changes.
Always Open policy: keep this playbook visible while resolving beta migration failures.

## Next review date
2026-10-06
