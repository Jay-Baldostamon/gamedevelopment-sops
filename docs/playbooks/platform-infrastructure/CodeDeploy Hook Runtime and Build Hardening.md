# 🛠️ CodeDeploy Hook Runtime and Build Hardening Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | CodeDeploy Hook Runtime and Build Hardening |
| Purpose | Make CodeDeploy lifecycle hooks deterministic for Node/Next.js applications that build on-instance with private dependencies and generated artifacts. |
| Owner | Engineering Platform Team |
| Last Updated | 2026-07-21 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] You have an `appspec.yml` (or variant) committed with lifecycle hook declarations.
- [ ] You have access to edit and deploy lifecycle hook scripts.
- [ ] You have verified host runtime readiness using [EC2 Deployment Host Initialization](EC2%20Deployment%20Host%20Initialization.md).
- [ ] You have host-level `.env` and `.npmrc` (or equivalent) for build-time dependency and environment resolution.
- [ ] You know the process manager and service name used after deployment.

## Step-by-Step Checklist
### Phase 1: Validate Hook Mapping and Script Contract
1. **Review** `appspec` lifecycle mapping and confirm scripts point to valid file paths.
2. **Ensure** all hook scripts are executable by the deployment runtime user.
3. **Ensure** script shell mode and exit behavior are intentional and explicit.
4. **Define** deterministic ordering for cleanup, restore, dependency install, build, and restart.

**IF** multiple app variants use different `appspec` files, **THEN** validate hook mapping in each variant before release.

- [ ] Hook mapping paths are valid.
- [ ] Script execution permissions are correct.
- [ ] Lifecycle order is documented and deterministic.

### Phase 2: Harden BeforeInstall for Safe Directory Reset
1. **Preserve** required host files before any destructive cleanup (for example `.env`, `.npmrc`).
2. **Clear** the target deployment directory without deleting preserved assets.
3. **Restore** preserved files back into the target directory.
4. **Avoid** brittle command patterns that trigger false failures under strict shell mode.

**IF** cleanup logic can remove required runtime secrets or auth files, **THEN** stop and add explicit preserve/restore handling first.

- [ ] Required files are preserved and restored.
- [ ] Target directory resets predictably.
- [ ] BeforeInstall does not fail due to false-positive shell behavior.

### Phase 3: Harden AfterInstall for Build Reliability
1. **Resolve** runtime binary paths dynamically in the script context.
2. **Load** and **export** deployment environment variables from host `.env`.
3. **Install** dependencies in a reproducible mode aligned with lockfile policy.
4. **Generate** Prisma client (or equivalent generated artifacts) before build.
5. **Build** the application after dependencies and generation complete.
6. **Restart** and **save** process manager state (for example PM2 process and startup persistence).

**IF** build fails during API route data collection, **THEN** verify env export and generated artifacts are complete before rerunning build.

- [ ] Runtime binaries resolve inside hook shell.
- [ ] Env variables are exported before install/build.
- [ ] Generated artifacts exist before build.
- [ ] Process manager restart and persistence complete successfully.

### Phase 4: Validate Private Dependency and Route-Compile Risk
1. **Confirm** host-level package auth can access private registries.
2. **Run** dependency install in hook-equivalent environment and validate no auth failures.
3. **Validate** route compilation paths that depend on environment and generated clients.
4. **Capture** failure signatures and remediation notes for future runs.

**IF** private package fetch fails, **THEN** fix host auth configuration before re-triggering deployment.

- [ ] Private package install succeeds in hook context.
- [ ] Sensitive route compilation succeeds.
- [ ] Failure signatures and fixes are documented.

### Phase 5: Verify End-to-End Hook Outcome
1. **Deploy** using the updated hook set.
2. **Observe** lifecycle event sequence until completion.
3. **Probe** app process state and health endpoints.
4. **Confirm** public endpoint behavior if reverse proxy is enabled.

**IF** deployment completes but endpoint fails, **THEN** validate reverse proxy upstream port and process binding.

- [ ] Lifecycle events complete without hook errors.
- [ ] App process is online after deployment.
- [ ] Endpoint responses match expected behavior.

## Common Mistakes & Fixes
| Common Mistake | Fix |
| :-- | :-- |
| Hook script assumes interactive shell PATH | Resolve runtime binaries explicitly in hook script. |
| BeforeInstall deletes required host files | Preserve/restore `.env` and `.npmrc` explicitly. |
| Prisma or generated artifacts missing at build time | Run generation step before app build. |
| Private package auth exists only in CI | Keep host-level auth file for on-instance installs. |
| PM2 process restarts but is not persisted | Save PM2 process list/startup config after restart. |

## Success Criteria
- [ ] `appspec` hook mapping is valid and executable.
- [ ] BeforeInstall performs safe cleanup with file preservation.
- [ ] AfterInstall reliably installs, generates, builds, and restarts process.
- [ ] Private registry dependencies install successfully on-host.
- [ ] Sensitive route compilation and app startup complete without regression.

## Storage & Access
Store this playbook in `docs/playbooks/platform-infrastructure/CodeDeploy Hook Runtime and Build Hardening.md`.
Access is required for engineers who maintain deployment scripts and release automation.
Always Open policy: keep this playbook visible while editing or troubleshooting lifecycle hooks.

## Next review date
2026-10-19
