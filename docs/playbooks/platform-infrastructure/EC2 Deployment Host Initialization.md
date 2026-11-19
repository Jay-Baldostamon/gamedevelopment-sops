# 🧱 EC2 Deployment Host Initialization Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | EC2 Deployment Host Initialization |
| Purpose | Prepare an EC2 deployment host so CodeDeploy automatic setup and lifecycle hooks run reliably without manual firefighting. |
| Owner | Engineering Platform Team |
| Last Updated | 2026-07-21 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] You have SSH or SSM access to the target EC2 instance.
- [ ] You have sudo privileges on the instance.
- [ ] You have approved instance sizing, networking, and security group configuration.
- [ ] You have repository access and target deployment directory definition.
- [ ] You confirmed DNS ownership and routing authority for target domains.
- [ ] You reviewed [Server Initialization](Server%20Initialization.md) and [Domain Setup](Domain%20Setup.md).

## Step-by-Step Checklist
### Phase 1: Confirm Baseline Reachability and Routing
1. **Verify** the EC2 instance is reachable by SSH or SSM.
2. **Confirm** the application repository path exists or can be created.
3. **Validate** DNS A/AAAA records point to the instance public IP when public routing is needed.
4. **Confirm** security group and host firewall allow required inbound ports.

**IF** DNS does not resolve to the target host, **THEN** stop and correct DNS before deployment cutover.

- [ ] Host is reachable.
- [ ] Repository path is available.
- [ ] DNS routes to expected public IP.

### Phase 2: Prepare Runtime and Process Tooling
1. **Install** the required Node.js version on-host.
2. **Enable** Corepack and package manager tooling used by the app.
3. **Install** PM2 (or approved process manager) for persistent app process control.
4. **Ensure** binaries are resolvable in non-interactive shell contexts used by deployment hooks.
5. **Verify** process manager can start and persist the target app process name.

**IF** runtime binaries are available only in interactive profile scripts, **THEN** move to a system-wide PATH location used by hook execution.

- [ ] Node runtime exists at expected version.
- [ ] Corepack and package tooling are available.
- [ ] PM2 process control works for the app.

### Phase 3: Prepare Deployment Path and Preserved Host Files
1. **Create** or **confirm** the deployment root directory with correct ownership.
2. **Place** persistent environment file(s) at approved host location (for example root `.env`).
3. **Place** host-level package auth file(s) (for example `.npmrc`) when private packages are required.
4. **Protect** persistent files from destructive cleanup in lifecycle hooks.
5. **Document** preserved file paths for hook script reference.

**IF** private dependencies are used, **THEN** host-level package auth must be present before first deployment.

- [ ] Deployment directory is owned correctly.
- [ ] `.env` persistence strategy is defined.
- [ ] `.npmrc` or equivalent auth file is in place.

### Phase 4: Validate Reverse Proxy and App Port Alignment
1. **Install** and **configure** Nginx using [Domain Setup](Domain%20Setup.md).
2. **Point** the Nginx upstream to the real application listening port.
3. **Enable** TLS issuance and HTTP-to-HTTPS redirect where applicable.
4. **Probe** local upstream and public HTTPS endpoint responses.

**IF** app listens on a non-default port, **THEN** update Nginx upstream to that exact port before certificate and cutover verification.

- [ ] Nginx config syntax passes.
- [ ] Upstream points to actual app port.
- [ ] HTTPS probe returns expected app response.

### Phase 5: Hand Off to CodeDeploy Setup
1. **Confirm** all baseline checks are complete.
2. **Record** host initialization evidence in deployment notes.
3. **Proceed** with [AWS CodeDeploy Setup and Deployment](AWS%20CodeDeploy%20Setup%20and%20Deployment.md) and choose automatic setup on the initialized host.

**IF** any baseline item is incomplete, **THEN** resolve it before enabling deployment automation.

- [ ] Host initialization evidence captured.
- [ ] CodeDeploy setup handoff is ready.

## Common Mistakes & Fixes
| Common Mistake | Fix |
| :-- | :-- |
| Starting CodeDeploy before host runtime is ready | Complete runtime and PATH preparation first. |
| Relying on CI-only package auth | Keep auth config on host for on-instance dependency installation. |
| Clearing deployment directory without preserving env/auth files | Preserve and restore required host files in hook workflow. |
| Assuming app listens on port 3000 by default | Probe actual app listener and set reverse proxy upstream accordingly. |
| Performing deployment before DNS propagation | Validate DNS resolution to target host before public verification. |

## Success Criteria
- [ ] Host is reachable and deployment path is prepared.
- [ ] Node, Corepack, and PM2 are installed and non-interactive hook-safe.
- [ ] Persistent `.env` and package auth files are present and documented.
- [ ] Nginx and TLS are configured against the real app upstream port.
- [ ] Host is explicitly ready for CodeDeploy automatic setup.

## Storage & Access
Store this playbook in `docs/playbooks/platform-infrastructure/EC2 Deployment Host Initialization.md`.
Access is required for platform and release engineers responsible for server bootstrap and deployment readiness.
Always Open policy: keep this playbook visible while preparing any new EC2 deployment host.

## Next review date
2026-10-19
