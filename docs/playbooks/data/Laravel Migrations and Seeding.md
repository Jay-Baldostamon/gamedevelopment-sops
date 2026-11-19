# 🧱 Laravel Migrations and Seeding Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Laravel Migrations and Seeding |
| Purpose | To manage database schema changes and seed data in a repeatable, reviewable way using Laravel 13 migrations and seeders. |
| Owner | Backend Engineering |
| Last Updated | 2026-07-01 |
| Review Cycle | Every 90 Days |

## Prerequisites
- [ ] Confirm access to the target Laravel repository and the correct database connection.
- [ ] Confirm the local or shared database can be reset, migrated, or restored safely.
- [ ] Confirm `php artisan` is available and the application boots locally.
- [ ] Review the change request and identify whether the work is schema-only, seed-only, or both.
- [ ] Confirm any destructive migration path has a backup or rollback plan.

## Step-by-Step Checklist

### Phase 1: Assess the change
1. **Confirm** the goal of the change: new table, table update, data backfill, test data refresh, or full reset.
2. **Identify** whether the migration must be reversible with a meaningful `down()` method.
3. **Decide** whether seeding belongs in `DatabaseSeeder` or in a dedicated seeder class.
4. **IF** the change affects production data, **THEN** review downtime, locking, and rollback risk before writing the migration.

### Phase 2: Build the migration
1. **Generate** the migration with `php artisan make:migration`.
2. **Implement** `up()` and `down()` with the Laravel schema builder.
3. **Use** `Schema::create()` for new tables and `Schema::table()` for updates.
4. **Add** indexes, foreign keys, and column modifiers explicitly.
5. **Keep** destructive operations guarded and deliberate.
6. **IF** the migration targets a non-default connection, **THEN** set the migration connection explicitly.
7. **IF** the migration should not run yet, **THEN** implement `shouldRun()` rather than removing the file.
8. **Validate** the migration order and naming before committing.

### Phase 3: Build the seeders
1. **Generate** dedicated seeders with `php artisan make:seeder`.
2. **Place** shared orchestration in `DatabaseSeeder`.
3. **Use** model factories for bulk test data instead of manual inserts when possible.
4. **Call** additional seeders from `DatabaseSeeder` when the dataset should be split by domain.
5. **Mute** model events with `WithoutModelEvents` when seeding should not trigger observers or listeners.
6. **IF** seed data depends on real identifiers or fixed reference rows, **THEN** seed those rows first and keep the order deterministic.

### Phase 4: Run and verify
1. **Run** `php artisan migrate` to apply pending migrations.
2. **Check** `php artisan migrate:status` to confirm the expected migration state.
3. **Run** `php artisan db:seed` or `php artisan db:seed --class=...` for targeted seeding.
4. **Use** `php artisan migrate:fresh --seed` only when a full rebuild is intended.
5. **Use** `php artisan migrate:refresh --seed` only when the database should be rebuilt from migrations and seeds.
6. **IF** the environment is production, **THEN** require explicit confirmation and use `--force` only when approved.
7. **IF** multiple servers may run migrations during deployment, **THEN** use `migrate --isolated`.
8. **Validate** the schema, seed counts, and critical app flows after the run.

## Common Mistakes & Fixes
| Common Mistake | Fix |
| --- | --- |
| Writing a migration without a real `down()` path. | Make rollback behavior explicit before merging. |
| Seeding production with non-production-safe data. | Separate test/demo seeders from reference seeders and gate destructive runs with `--force`. |
| Putting large seed payloads in `DatabaseSeeder` directly. | Split data into dedicated seed classes and call them in order. |
| Using raw inserts when factories would better express the dataset. | Prefer factories for repeatable bulk data and relationship creation. |
| Running migrations without checking destructive impact. | Review the schema diff, backup needs, and rollback plan first. |

## Success Criteria
- [ ] All intended migrations run successfully in the target environment.
- [ ] Rollback behavior is defined and works for the change set.
- [ ] Seeders produce the expected dataset without manual fixes.
- [ ] `migrate:status` matches the expected state after execution.
- [ ] Production-only safeguards are respected for destructive commands.

## Storage & Access
Store this playbook in `docs/playbooks/data` in the engineering repository.
Access is required for backend engineers, database-facing engineers, and reviewers who approve schema or seed changes.
Always Open policy: keep this playbook visible when planning or executing Laravel schema and seed work.

## Next review date
2026-09-29
