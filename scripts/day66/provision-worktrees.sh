#!/usr/bin/env bash
# Day 66 draft — worktree provisioning script (draft for review, NOT yet the deliverable)
# Design: Decision 2B — per-tree .env with per-tree migration-test DB creds (no symlinks),
# per-tree node_modules, per-tree migrations.
#
# .env convention (per user, 2026-10-16):
#   - .env lives at the repo root of each app:
#       bpc_crm  -> <tree>/backend/.env AND <tree>/frontend/.env
#       geomap   -> <tree>/.env
#   - The template is the repo's committed .env.example; the script stamps a
#     per-tree block on top of it. No committed per-tree template exists, so the
#     per-tree values are generated at provision time (password via openssl rand,
#     never printed, never logged).
#
# Usage:
#   ./provision-worktrees.sh bpc_crm 3            # provision trees wt1..wt3
#   ./provision-worktrees.sh bpc_crm wt2          # (re)provision a single tree (idempotent)
#   DRY_RUN=1 ./provision-worktrees.sh geomap 2   # print actions, do nothing
#
# Required env (never hardcoded, never echoed):
#   MYSQL_ADMIN_USER / MYSQL_ADMIN_PASS   account allowed to CREATE DATABASE/USER
#                                         on the dev MySQL instance. Supplied by
#                                         the operator at run time; with --create-db
#                                         the script prints the exact SQL it will
#                                         run (no secret values) and asks for ok.
#
# Retention: trees are NOT auto-deleted. `prune` removes finished trees on demand:
#   ./provision-worktrees.sh bpc_crm prune            # interactive: pick trees to drop
#   ./provision-worktrees.sh bpc_crm prune --all      # drop ALL trees for this repo
#   ./provision-worktrees.sh bpc_crm prune wt2 wt3    # drop specific trees
# Prune removes the worktree, its branch, its migration-test DB (DROP DATABASE +
# DROP USER, y/N confirmed with SQL printed, no secret values), and any DB_SYNC
# dump/import leftovers under the tree dir. Never touches the primary clone.
#
# Secrets rule: this script never prints DB passwords. Verification compares
# hashes/diff-ness only.

set -euo pipefail

REPO_NAME="${1:?usage: provision-worktrees.sh <repo> <count|tree-id>}"
TREES="${2:?usage: provision-worktrees.sh <repo> <count|tree-id>}"
DRY_RUN="${DRY_RUN:-0}"
CREATE_DB="${CREATE_DB:-0}"

PRIMARY_CLONE="/home/ubuntu/repos/${REPO_NAME}"
WORKTREE_ROOT="/home/ubuntu/worktrees/${REPO_NAME}"
DISK_BUDGET_GB=500
MIN_FREE_GB_PER_TREE=6   # node_modules + vendor + migration-test DB headroom

# ---- per-repo .env shape ----------------------------------------------------
# tree_env_files <repo>  -> list of .env paths (relative to tree root)
tree_env_files() {
  case "$1" in
    bpc_crm) echo "backend/.env frontend/.env" ;;
    geomap)  echo ".env" ;;
    *) echo "ERROR: unknown repo $1 — add its .env layout here" >&2; return 1 ;;
  esac
}

# per-tree DB names/usernames
tree_db_name()  { echo "${REPO_NAME}_wt${TREE_ID}" | tr '-' '_'; }
tree_db_user()  { echo "$(echo "$REPO_NAME" | tr '-' '_' | cut -c1-8)_wt${TREE_ID}"; }

# ---- prune (manual retention; nothing auto-deletes) --------------------------
prune_tree() {
  local tid="$1"
  local TREE_DIR="${WORKTREE_ROOT}/wt${tid}"
  TREE_ID="$tid"
  [[ -d "$TREE_DIR" || -d "$PRIMARY_CLONE/.git/worktrees/wt${tid}" ]] || { echo "wt${tid}: nothing to prune"; return 0; }

  echo "== prune wt${tid} =="
  # find the per-tree DB name from the stamped .env (never prints the password)
  local dbname=""
  for rel in $(tree_env_files "$REPO_NAME"); do
    if [[ -f "$TREE_DIR/$rel" ]]; then
      dbname=$(grep -m1 '^DB_DATABASE=' "$TREE_DIR/$rel" | cut -d= -f2)
      [[ -n "$dbname" ]] && break
    fi
  done

  if [[ -d "$TREE_DIR" ]]; then
    # uncommitted changes are a stop signal — never silently destroy work
    if [[ -n "$(git -C "$TREE_DIR" status --porcelain 2>/dev/null)" ]]; then
      echo "  ABORT: wt${tid} has uncommitted changes — commit or discard first."
      return 1
    fi
    echo "  git worktree remove + delete branch worktree/wt${tid}"
    [[ "$DRY_RUN" == 1 ]] || {
      git -C "$PRIMARY_CLONE" worktree remove --force "$TREE_DIR"
      git -C "$PRIMARY_CLONE" branch -D "worktree/wt${tid}" 2>/dev/null || true
    }
  fi

  if [[ -n "$dbname" && "$CREATE_DB" == 1 ]]; then
    : "${MYSQL_ADMIN_USER:?set MYSQL_ADMIN_USER}"; : "${MYSQL_ADMIN_PASS:?set MYSQL_ADMIN_PASS}"
    echo "  [drop-db] would run:"
    echo "    DROP DATABASE IF EXISTS \`${dbname}\`;"
    echo "    DROP USER IF EXISTS '<per-tree user>'@'127.0.0.1';"
    read -r -p "  run these? [y/N] " ok
    [[ "$ok" == "y" ]] && mysql -h127.0.0.1 -u"$MYSQL_ADMIN_USER" -p"$MYSQL_ADMIN_PASS" <<SQL
DROP DATABASE IF EXISTS \`${dbname}\`;
DROP USER IF EXISTS '$(echo "$REPO_NAME" | tr '-' '_' | cut -c1-8)_wt${tid}'@'127.0.0.1';
FLUSH PRIVILEGES;
SQL
  else
    [[ -n "$dbname" ]] && echo "  note: DB \`${dbname}\` left in place (run with CREATE_DB=1 to drop it)"
  fi
  echo "  wt${tid} pruned."
}

if [[ "${3:-}" == "prune" || "$TREES" == "prune" ]]; then
  DRY_RUN="${DRY_RUN:-0}"
  if [[ "$TREES" == "prune" ]]; then
    shift 2 2>/dev/null || true
    targets=("$@")
    if [[ "${targets[0]:-}" == "--all" ]]; then
      mapfile -t targets < <(ls -d "${WORKTREE_ROOT}"/wt* 2>/dev/null | sed 's/.*wt//')
    elif [[ ${#targets[@]} -eq 0 ]]; then
      echo "existing trees:"; ls -d "${WORKTREE_ROOT}"/wt* 2>/dev/null || echo "  none"
      read -r -p "tree id(s) to prune (e.g. '1 3'): " -a targets
    fi
  else
    targets=("${@:3:1}")
  fi
  for t in "${targets[@]}"; do prune_tree "$t"; done
  echo "worktree disk usage now:"
  du -sh "$WORKTREE_ROOT" 2>/dev/null || true
  exit 0
fi

# ---- refresh-baseline mode ---------------------------------------------------
# Day 67: the dev-synced DB baseline. `refresh` re-applies dev's committed
# migrations (migrate deploy — idempotent) to geomap_dev and to every existing
# tree DB. Run after migration-bearing PRs land on dev.
if [[ "$TREES" == "refresh" ]]; then
  if [[ "$REPO_NAME" != "geomap" ]]; then echo "refresh is geomap-only for now"; exit 1; fi
  command -v node >/dev/null || { echo "node not found"; exit 1; }
  # 1) the baseline itself
  BASELINE_ENV="/etc/mysql/geomap_dev.env"   # 0600, written at baseline creation
  if [[ -r "$BASELINE_ENV" ]]; then
    set -a; source "$BASELINE_ENV"; set +a
    (cd "$PRIMARY_CLONE" && DATABASE_URL="mysql://${MYSQL_USER}:${MYSQL_PASS}@127.0.0.1:3306/geomap_dev?charset=utf8mb4" \
      ./node_modules/.bin/prisma migrate deploy && echo "baseline geomap_dev refreshed")
  else
    # baseline creds are root-only (0600) — escalate just for the baseline step
    echo "baseline creds root-only; running baseline refresh via sudo"
    sudo -E env "PATH=$PATH" bash -c "set -a; source $BASELINE_ENV; cd $PRIMARY_CLONE && DATABASE_URL=\"mysql://\${MYSQL_USER}:\${MYSQL_PASS}@127.0.0.1:3306/geomap_dev?charset=utf8mb4\" ./node_modules/.bin/prisma migrate deploy && echo 'baseline geomap_dev refreshed'"
  fi
  # 2) every existing tree
  shopt -s nullglob
  for tree_dir in "$WORKTREE_ROOT"/wt*; do
    [[ -f "$tree_dir/.env" ]] || continue
    (cd "$tree_dir" && ./node_modules/.bin/prisma migrate deploy && echo "  ${tree_dir##*/} refreshed")
  done
  exit 0
fi

# ---- resolve tree list ------------------------------------------------------
TREE_IDS=()
if [[ "$TREES" =~ ^[0-9]+$ ]]; then
  for i in $(seq 1 "$TREES"); do TREE_IDS+=("$i"); done
else
  TREE_IDS+=("${TREES#wt}")
fi

# ---- pre-flight -------------------------------------------------------------
command -v git >/dev/null || { echo "git not found"; exit 1; }
[[ -d "$PRIMARY_CLONE/.git" ]] || { echo "primary clone missing: $PRIMARY_CLONE"; exit 1; }

FREE_GB=$(df --output=avail -BG / | tail -1 | tr -dc '0-9')
NEED_GB=$(( ${#TREE_IDS[@]} * MIN_FREE_GB_PER_TREE ))
if (( FREE_GB < NEED_GB )); then
  echo "ABORT: / has ${FREE_GB}G free; need >= ${NEED_GB}G for ${#TREE_IDS[@]} tree(s)."
  echo "Resolve the EBS pre-flight first (growpart /dev/nvme0n1 1 + resize2fs)."
  exit 1
fi
echo "pre-flight ok: / has ${FREE_GB}G free (budget ${DISK_BUDGET_GB}G/engineer)"

mkdir -p "$WORKTREE_ROOT"

# ---- stamping ---------------------------------------------------------------
# Stamps a per-tree block into $1 (a .env file). Idempotent: if the marker block
# exists, existing per-tree values are reused verbatim (no clobber, no re-gen).
stamp_tree_block() {
  local envfile="$1" tree_id="$2" dbname="$3" dbuser="$4"
  local marker="# --- day66 per-tree block ---"

  if grep -qF "$marker" "$envfile"; then
    echo "  .env already stamped (reusing existing per-tree creds): $envfile"
    return 0
  fi

  local dbpass
  dbpass=$(openssl rand -hex 16)   # generated, never printed

  # inherit the environment's real DB host/port from the primary clone's .env
  # (values are copied, never printed) — falls back to 127.0.0.1:3306
  local dbhost="127.0.0.1" dbport="3306" src
  src="$PRIMARY_CLONE/backend/.env"; [[ -f "$src" ]] || src="$PRIMARY_CLONE/.env"
  if [[ -f "$src" ]]; then
    dbhost=$(grep -m1 '^DB_HOST=' "$src" | cut -d= -f2 || true); [[ -z "$dbhost" ]] && dbhost="127.0.0.1"
    dbport=$(grep -m1 '^DB_PORT=' "$src" | cut -d= -f2 || true);  [[ -z "$dbport" ]] && dbport="3306"
  fi

  {
    echo ""
    echo "$marker"
    echo "TREE_ID=$tree_id"
    echo "DB_DATABASE=$dbname"
    echo "DB_USERNAME=$dbuser"
    echo "DB_PASSWORD=$dbpass"
    echo "DB_HOST=$dbhost"
    echo "DB_PORT=$dbport"
  } >> "$envfile"

  # Repo-specific rewrite: geomap uses a single DATABASE_URL plus a shadow DB
  # (required by `prisma migrate dev`). The real password IS written here —
  # this is the tree's private .env; it is only ever verified by fingerprint.
  if [[ "$REPO_NAME" == "geomap" ]]; then
    sed -i "s|^DATABASE_URL=.*|DATABASE_URL=\"mysql://${dbuser}:${dbpass}@127.0.0.1:3306/${dbname}?charset=utf8mb4\"|" "$envfile"
    grep -q '^SHADOW_DATABASE_URL=' "$envfile" || \
      echo "SHADOW_DATABASE_URL=\"mysql://${dbuser}:${dbpass}@127.0.0.1:3306/${dbname}_shadow?charset=utf8mb4\"" >> "$envfile"
  fi
}

# geomap baseline refresh: apply dev's committed migrations (migrate deploy) so
# every tree starts from the SAME current-dev schema. Idempotent by design.
refresh_tree_from_baseline() {
  local tree_dir="$1"
  if command -v node >/dev/null && [[ -x "$tree_dir/node_modules/.bin/prisma" ]]; then
    (cd "$tree_dir" && DATABASE_URL="$(grep -m1 '^DATABASE_URL=' .env | cut -d= -f2- | tr -d '\"')" \
      ./node_modules/.bin/prisma migrate deploy)
  else
    echo "  SKIP baseline refresh: node/prisma not available in $tree_dir"
  fi
}

# bpc_crm frontend talks to the backend API, not the DB directly — its block
# carries the tree id and backend URL only (no DB creds in frontend/.env).
stamp_frontend_block() {
  local envfile="$1" tree_id="$2"
  local marker="# --- day66 per-tree block ---"
  grep -qF "$marker" "$envfile" && { echo "  .env already stamped: $envfile"; return 0; }
  { echo ""; echo "$marker"; echo "TREE_ID=$tree_id";
    echo "BACKEND_API_URL=http://127.0.0.1:800$(echo "$tree_id" | tail -c 1)"; } >> "$envfile"
}

# ---- provisioning loop ------------------------------------------------------
for tid in "${TREE_IDS[@]}"; do
  TREE_ID="$tid"
  TREE_DIR="${WORKTREE_ROOT}/wt${TREE_ID}"
  BRANCH="worktree/wt${TREE_ID}"
  echo "== tree wt${TREE_ID} =="

  if [[ ! -e "$TREE_DIR/.git" ]]; then   # .git is a FILE in a linked worktree
    [[ "$DRY_RUN" == 1 ]] && echo "  [dry-run] git worktree add -b $BRANCH $TREE_DIR" || {
      git -C "$PRIMARY_CLONE" worktree add -b "$BRANCH" "$TREE_DIR"
    }
  else
    echo "  worktree exists (idempotent skip)"
  fi

  [[ "$DRY_RUN" == 1 ]] && continue

  # 1) .env: seed from committed .env.example when one exists, then stamp the
  #    per-tree block. No .env.example -> start empty (per-tree block only);
  #    NEVER copy the primary clone's real .env (would duplicate live secrets).
  for rel in $(tree_env_files "$REPO_NAME"); do
    envpath="$TREE_DIR/$rel"
    if [[ ! -f "$envpath" ]]; then
      mkdir -p "$(dirname "$envpath")"
      if [[ -f "${envpath%.env}.env.example" ]]; then
        cp "${envpath%.env}.env.example" "$envpath"
      else
        : > "$envpath"
        echo "  note: no .env.example for $rel — .env seeded with per-tree block only"
      fi
    fi
  done

  DB_NAME=$(tree_db_name); DB_USER=$(tree_db_user)
  if [[ "$REPO_NAME" == "geomap" ]]; then
    # geomap needs a DB pair: main + shadow (used only by `prisma migrate dev`)
    DB_SHADOW_NAME="${DB_NAME}_shadow"
  fi
  if [[ "$REPO_NAME" == "bpc_crm" ]]; then
    stamp_tree_block  "$TREE_DIR/backend/.env"  "$TREE_ID" "$DB_NAME" "$DB_USER"
    stamp_frontend_block "$TREE_DIR/frontend/.env" "$TREE_ID"
  else
    stamp_tree_block  "$TREE_DIR/.env" "$TREE_ID" "$DB_NAME" "$DB_USER"
  fi

  # 2) optional DB creation — explicit opt-in, prints SQL but no secret values
  if [[ "$CREATE_DB" == 1 ]]; then
    : "${MYSQL_ADMIN_USER:?set MYSQL_ADMIN_USER}"; : "${MYSQL_ADMIN_PASS:?set MYSQL_ADMIN_PASS}"
    echo "  [create-db] would run:"
    echo "    CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;"
    [[ -n "${DB_SHADOW_NAME:-}" ]] && echo "    CREATE DATABASE IF NOT EXISTS \`${DB_SHADOW_NAME}\`;"
    echo "    CREATE USER IF NOT EXISTS '${DB_USER}'@'127.0.0.1' IDENTIFIED BY <generated>;"
    echo "    GRANT ALL PRIVILEGES ON \`${DB_NAME}\`.* TO '${DB_USER}'@'127.0.0.1';"
    [[ -n "${DB_SHADOW_NAME:-}" ]] && echo "    GRANT ALL PRIVILEGES ON \`${DB_SHADOW_NAME}\`.* TO '${DB_USER}'@'127.0.0.1';"
    read -r -p "  run these? [y/N] " ok
    if [[ "$ok" == "y" ]]; then
      # read the per-tree password from the tree's own stamped block
      dbpw_src="$TREE_DIR/backend/.env"
      [[ -f "$dbpw_src" && "$(grep -c '^DB_PASSWORD=' "$dbpw_src" 2>/dev/null || true)" != "0" ]] || dbpw_src="$TREE_DIR/.env"
      tree_dbpass=$(grep -m1 '^DB_PASSWORD=' "$dbpw_src" | cut -d= -f2)
      mysql -h127.0.0.1 -u"$MYSQL_ADMIN_USER" -p"$MYSQL_ADMIN_PASS" <<SQL
CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;
CREATE USER IF NOT EXISTS '${DB_USER}'@'127.0.0.1' IDENTIFIED BY '${tree_dbpass}';
GRANT ALL PRIVILEGES ON \`${DB_NAME}\`.* TO '${DB_USER}'@'127.0.0.1';
SQL
      if [[ -n "${DB_SHADOW_NAME:-}" ]]; then
        mysql -h127.0.0.1 -u"$MYSQL_ADMIN_USER" -p"$MYSQL_ADMIN_PASS" <<SQL
CREATE DATABASE IF NOT EXISTS \`${DB_SHADOW_NAME}\`;
GRANT ALL PRIVILEGES ON \`${DB_SHADOW_NAME}\`.* TO '${DB_USER}'@'127.0.0.1';
SQL
      fi
    fi
  fi

  # 3) isolated node_modules / vendor (no symlinks) — skipped with a note when
  #    the toolchain isn't installed on this VM
  if [[ -f "$TREE_DIR/backend/composer.json" && ! -d "$TREE_DIR/backend/vendor" ]]; then
    if command -v composer >/dev/null; then (cd "$TREE_DIR/backend" && composer install --no-interaction)
    else echo "  SKIP vendor install: composer not installed on this VM"; fi
  fi
  if [[ -f "$TREE_DIR/package.json" && ! -d "$TREE_DIR/node_modules" ]]; then
    if command -v npm >/dev/null; then (cd "$TREE_DIR" && npm install)
    else echo "  SKIP npm install: npm not installed on this VM"; fi
  fi
  if [[ -f "$TREE_DIR/backend/package.json" && ! -d "$TREE_DIR/backend/node_modules" ]]; then
    if command -v npm >/dev/null; then (cd "$TREE_DIR/backend" && npm install)
    else echo "  SKIP backend npm install: npm not installed on this VM"; fi
  fi

  # 4) per-tree migrations against its own DB
  if command -v php >/dev/null && [[ "$REPO_NAME" == "bpc_crm" && -f "$TREE_DIR/backend/artisan" ]]; then
    (cd "$TREE_DIR/backend" && php artisan migrate --force)
  elif ! command -v php >/dev/null; then
    echo "  SKIP migrations: php not installed on this VM (install php-cli + composer to enable)"
  fi
  # geomap: prisma is the sanctioned schema path — refresh every tree from the
  # dev baseline with `migrate deploy` (idempotent; same migrations as geomap_dev)
  if [[ "$REPO_NAME" == "geomap" ]]; then
    if [[ "$CREATE_DB" == 1 ]]; then
      refresh_tree_from_baseline "$TREE_DIR"
    else
      echo "  SKIP baseline refresh (DB not created this run — rerun with CREATE_DB=1)"
    fi
  fi
done

# ---- verification (no secret values) ---------------------------------------
echo "== verification =="
for tid in "${TREE_IDS[@]}"; do
  TREE_DIR="${WORKTREE_ROOT}/wt${tid}"
  for rel in $(tree_env_files "$REPO_NAME"); do
    f="$TREE_DIR/$rel"
    [[ -f "$f" ]] || { echo "MISSING: $f"; continue; }
    [[ -L "$f" ]] && echo "FAIL: $f is a symlink" || echo "ok: $f is a real file"
    grep -q "^DB_USERNAME=" "$f" 2>/dev/null && echo "  per-tree user: $(grep '^DB_USERNAME=' "$f" | cut -d= -f2)"
    sha256sum "$f" | cut -c1-16 | xargs -I{} echo "  fingerprint: {} ($rel wt${tid})"
  done
  [[ -L "$TREE_DIR/node_modules" ]] && echo "FAIL: wt${tid} node_modules is a symlink" \
    || [[ -d "$TREE_DIR/node_modules" ]] && echo "ok: wt${tid} node_modules isolated"
done
echo "done. disk usage of tree root:"
du -sh --exclude=.git "$WORKTREE_ROOT" 2>/dev/null || true
