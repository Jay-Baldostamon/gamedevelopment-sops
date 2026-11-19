# scripts/day66 — BPC CRM worktree provisioner

`provision-worktrees.sh` is the executable artifact of
`docs/blueprints/training/artificial-intelligence/L4/Week 14/Day 66 - Worktree Provisioning Script.md`.

## What it does
- Creates `N` git worktrees of a primary clone (`/home/ubuntu/repos/<repo>` → `/home/ubuntu/worktrees/<repo>/wt1..N`) with per-tree branches `worktree/wtN`.
- Stamps each tree's `.env` from the repo's committed `.env.example` with per-tree DB name/user (generated password is written only into the tree `.env`, never printed).
- Isolates per-tree `node_modules`/`vendor` (no symlinks into the primary clone).
- `prune` mode with an uncommitted-changes stop signal; retention is manual — nothing auto-deletes.
- Disk budget check: refuses to provision if the 500 GB budget is exceeded.

## Usage
    ./provision-worktrees.sh bpc_crm 3            # provision wt1..wt3
    ./provision-worktrees.sh bpc_crm wt2          # (re)provision one tree (idempotent)
    DRY_RUN=1 ./provision-worktrees.sh geomap 2   # print actions, do nothing
    ./provision-worktrees.sh bpc_crm prune wt2    # drop specific trees

## VM prerequisites (live on the VM, never committed)
- MySQL server + account `provisioner`@localhost (scoped to `<repo>_wt%` DBs), password in `/etc/mysql/provisioner.env` (root:root, 0600) — sourced as `MYSQL_ADMIN_USER`/`MYSQL_ADMIN_PASS`.
- Schema population is NOT migrations for BPC CRM: import the DB (or structure-only) dump per the Day 66 doc (dump is the source of truth; mixed-collation import gotcha documented there).
- PHP 8.4+ CLI + extensions, Composer, Node/npm on PATH.

## Day 67 — geomap (migrations repo) extension
geomap IS a migrations repo: Prisma migrations are the sanctioned schema path (no hand-written DDL).
- Per tree the provisioner stamps `DATABASE_URL` **and** `SHADOW_DATABASE_URL` (required by `prisma migrate dev`) into `<tree>/.env`, and with `CREATE_DB=1` creates the DB **pair** `geomap_wtN` + `geomap_wtN_shadow` (one per-tree user, granted on both).
- After provisioning each tree is refreshed from the dev baseline with `prisma migrate deploy` — every tree starts from the same committed-migration state as `geomap_dev`.
- **Baseline**: `geomap_dev` on the local MySQL 8.4 (127.0.0.1:3306), created once and kept in sync with dev's committed migrations. Per-tree creds for it live in `/etc/mysql/geomap_dev.env` (root-only, 0600).
- **Baseline refresh** (run after migration-bearing PRs land on dev):
      ./provision-worktrees.sh geomap refresh
  Re-applies dev's migrations to `geomap_dev` and every existing tree DB via `migrate deploy` — idempotent ("No pending migrations to apply." on a no-op).
- Provisioner grant scope needed: `GRANT ALL ON geomap%.*` (in addition to `bpc_crm_wt%`).

## Verified on
- Ubuntu 26.04, PHP 8.5.4, Composer 2.9.5, Laravel 12.69.2 (`bpc_crm`, 3 trees + idempotent re-provision + real prune).
- Ubuntu 26.04, Node 26.7.0, Prisma 6.19.3, Next.js 16 (`geomap`, 2 trees + DB pairs, 28/28 migrations identical across `geomap_dev`/wt1/wt2, throwaway migration applied on top of each tree, `next build` (wt1) + `next dev` HTTP 200 (wt2), idempotent re-provision + idempotent `refresh`).
