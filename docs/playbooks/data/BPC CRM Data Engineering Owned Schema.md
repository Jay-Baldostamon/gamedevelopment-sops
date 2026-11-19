# BPC CRM Data-Engineering-Owned Schema Playbook

## DEFINE

| Field | Value |
| --- | --- |
| Playbook Name | BPC CRM Data-Engineering-Owned Schema |
| Purpose | Define the operating model for a repository whose dedicated Data Engineering team owns production database design, DDL, schema execution, and MergeQuery optimization. |
| Applies To | **BPC CRM only** at present. This pattern may be adopted by additional repositories after an explicit decision and repository-specific documentation. |
| Primary Owners | BPC CRM Data Engineering for schema and data operations; application engineering for the application and MergeQuery integration contract. |
| Last Updated | 2026-09-08 |
| Review Cycle | Every 90 days and before onboarding another repository. |

## Operating model

BPC CRM's operational MySQL database is not application-migration-owned. The dedicated Data Engineering team has final authority over schema structure, DDL, indexes, constraints, data imports, backfills, physical foreign-key choices, and rollout execution.

This ownership exists because BPC CRM's dynamic MergeQuery platform relies on data engineers being able to maintain optimized schema and query access paths without treating application migration history as the production control plane.

Laravel files under `backend/database/migrations` remain useful as application/AI reference material. They are not evidence of deployed database state and must not be used to create, alter, roll back, seed, or validate the shared operational schema.

> **Scope guard:** Do not generalize this exception to other repositories. Standard application-managed migration playbooks remain in force elsewhere unless a repository is explicitly added to this operating model.

## Prerequisites

- [ ] Confirm the request targets BPC CRM.
- [ ] Read [`DATABASE_TABLE_CREATION_STANDARD.md`](https://github.com/hurdman/bpc_crm/blob/dev/docs/DATABASE_TABLE_CREATION_STANDARD.md) in the BPC CRM repository, or the current repository-local equivalent.
- [ ] Identify the business purpose, row grain, producer/consumer systems, affected MergeQueries, and deployment environment.
- [ ] Confirm the request has a Data Engineering owner or routing path.
- [ ] For a change to existing data, identify compatibility requirements, backfill/import needs, expected volume, and rollback/compensating-action plan.

## Workflow

### Phase 1: Create the schema contract

1. Describe what one row represents and which table is the canonical owner of each datum.
2. Specify every column: lower-case `snake_case` name, MySQL type, unsignedness where relevant, nullability, default, and human-readable `COMMENT`.
3. Define the primary key, business uniqueness rules, logical relationships, retention/deletion lifecycle, and required audit timestamps.
4. List expected application and MergeQuery access paths: joins, equality filters, range filters, search, sort, reports, import jobs, and expected cardinality.
5. Propose indexes from these access paths. Do not add indexes or physical foreign keys by habit.
6. Submit the contract and proposed DDL to Data Engineering. The team may alter implementation details to protect data integrity, import reliability, concurrency, and query performance.

### Phase 2: Data Engineering design and execution

1. Data Engineering validates type compatibility, table grain, duplicate-risk controls, index design, and query plans against realistic volumes.
2. Data Engineering decides whether a logical relationship needs a physical foreign key and, if so, its delete/update behavior.
3. Data Engineering owns deployment sequencing, locks/downtime assessment, backup strategy, DDL execution, imports/backfills, and live-schema verification.
4. Data Engineering records the final executed DDL/change reference and validation evidence in the schema change record or implementation PR.
5. Do not run Laravel migration, rollback, fresh, refresh, or seeding commands against BPC CRM operational environments.

### Phase 3: Application and MergeQuery integration

1. Wait for Data Engineering confirmation that the schema contract is deployed.
2. Update application models, services, validation, and MergeQueries to match the confirmed—not inferred—schema.
3. Test the actual MergeQuery parameters, returned data, metadata/UI behavior, and affected app flows.
4. Keep schema assumptions explicit in code comments or repository docs when the live schema differs from legacy migration references.
5. Report any schema mismatch to Data Engineering; do not patch it with ad hoc application DDL.

## BPC CRM table-creation baseline

Use the BPC CRM standard as the DDL review baseline:

- plural lower-case `snake_case` table names;
- a descriptive singular primary key such as `appointment_id`, or `id` for established generic/link-table patterns;
- matching key types and unsignedness across relationships;
- `InnoDB`, `utf8mb4`, and `utf8mb4_unicode_ci` defaults unless Data Engineering explicitly selects another supported option;
- explicit column comments and a table-level business-purpose comment;
- intentional `created_at`, `updated_at`, and optional `deleted_at` lifecycle timestamps;
- `DECIMAL` rather than floating-point types for money, rates, and precise quantities;
- named `uq_<table>_<business_key>` unique keys and `idx_<table>_<access_path>` lookup indexes; and
- no environment-specific `AUTO_INCREMENT` counter in source DDL.

See the repository standard for the canonical template and complete checklists: [`bpc_crm/docs/DATABASE_TABLE_CREATION_STANDARD.md`](https://github.com/hurdman/bpc_crm/blob/dev/docs/DATABASE_TABLE_CREATION_STANDARD.md).

## Decision table

| Situation | Correct action |
| --- | --- |
| A new BPC CRM table is needed | Write the schema contract and route the final DDL to Data Engineering. |
| Application code needs a model/table shape | Use the Data Engineering-confirmed schema contract; legacy Laravel migrations are secondary reference only. |
| A table change needs an index | Include query patterns and volumes; Data Engineering reviews and creates the final index. |
| A MergeQuery is slow or needs a new join path | Capture the query and `EXPLAIN` evidence; Data Engineering determines schema/index changes. |
| A local dev DB needs setup | Use a Data Engineering-provided snapshot/setup procedure; do not use Laravel migration history as source of truth. |
| Someone proposes `php artisan migrate --force` | Stop; this is not an approved BPC CRM operational schema path. Route to Data Engineering. |
| Another repository wants this model | Keep its current ownership model. Create an explicit repository-onboarding decision and local documentation before applying this playbook. |

## Prohibited actions

For BPC CRM operational databases, application engineers and AI assistants must not:

- generate, modify, or execute Laravel migrations as the schema-delivery mechanism;
- run `php artisan migrate`, `migrate:fresh`, `migrate:refresh`, `migrate:rollback`, or `db:seed` to manipulate operational schema or production-like shared data;
- use application code, `Schema::create`, `Schema::table`, or direct ad hoc DDL to bypass Data Engineering; or
- assume the Laravel migration directory is an authoritative schema inventory or deployment ledger.

## Success criteria

- [ ] The work is confirmed as BPC CRM and this exception is not applied to another repository by assumption.
- [ ] A complete schema contract and access-path rationale were provided to Data Engineering.
- [ ] Data Engineering owns the final DDL, physical design decisions, and execution.
- [ ] Final deployed-schema evidence is recorded before dependent application work is called complete.
- [ ] Application models and MergeQueries were tested against the confirmed schema contract.
- [ ] No application-managed migration or schema command was used for the operational change.

## Related playbooks

- [MySQL ERD Design](MySQL%20ERD%20Design.md) for entity, relationship, and type design.
- [MyQuery Navigation](MyQuery%20Navigation.md) for finding live BPC CRM MergeQueries.
- [MySQL Table Creation & Data Migration](MySQL%20Table%20Creation%20%26%20Data%20Migration.md) for Data Engineering-controlled DDL execution and data-import work.
- [Laravel Migrations and Seeding](Laravel%20Migrations%20and%20Seeding.md) for repositories that explicitly use application-managed Laravel migrations; it does not apply to BPC CRM operational schema changes.
