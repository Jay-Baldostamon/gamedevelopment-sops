# 🚀 AWS CodeDeploy Setup and Deployment Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | AWS CodeDeploy Setup and Deployment |
| Purpose | Standardize EC2-first AWS CodeDeploy setup and release execution so deployments are repeatable, verifiable, and recoverable. |
| Owner | Engineering Platform Team |
| Last Updated | 2026-07-21 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] You have AWS IAM access to EC2, CodeDeploy, S3 (or artifact source), and CloudWatch logs.
- [ ] You have SSH or SSM access to the target EC2 host.
- [ ] You confirmed baseline host provisioning with [Server Initialization](Server%20Initialization.md).
- [ ] You confirmed domain prerequisites with [Domain Setup](Domain%20Setup.md) when public traffic is involved.
- [ ] You confirmed app authentication prerequisites with [Auth0 Setup](Auth0%20Setup.md) when Auth0-backed routes are included.
- [ ] You have a deployment artifact that includes `appspec.yml` (or app-specific variant) and executable hook scripts.
- [ ] You have an EC2 instance profile and CodeDeploy service role with least-privilege access.
- [ ] You verified security group and network routes permit agent communication to AWS endpoints.

## Step-by-Step Checklist
### Phase 1: Initialize EC2 Before CodeDeploy Setup
1. **Initialize** the EC2 host first (OS updates, base packages, runtime prerequisites, and app directories) by running [EC2 Deployment Host Initialization](EC2%20Deployment%20Host%20Initialization.md).
2. **Confirm** initialization is complete before attempting deployment setup.
3. **Open** the CodeDeploy setup flow only after the host is initialized.
4. **Use** CodeDeploy’s automatic setup path on EC2 so the deployment wiring is generated on-host instead of manually recreating each step.

**IF** EC2 initialization is incomplete, **THEN** stop and complete initialization first to avoid failed hooks and partial setup.

- [ ] EC2 host is initialized and reachable.
- [ ] Runtime prerequisites exist on-host.
- [ ] Automatic CodeDeploy setup path is selected after initialization.

### Phase 2: Configure CodeDeploy Application and Deployment Group
1. **Create** or **select** the target CodeDeploy application.
2. **Create** or **select** the deployment group for the environment.
3. **Bind** the deployment group to the correct EC2 instance(s) by tags or Auto Scaling group.
4. **Attach** the correct CodeDeploy service role.
5. **Set** deployment configuration (for example OneAtATime or rolling pattern aligned to environment risk).
6. **Configure** rollback and alarm behavior for failed deployments.

**IF** deployment group targeting is ambiguous, **THEN** use explicit instance tags and validate they match only intended hosts.

- [ ] Application and deployment group exist.
- [ ] Host targeting is deterministic.
- [ ] Rollback behavior is configured.

### Phase 3: Install and Validate the CodeDeploy Agent
1. **Install** and **validate** the CodeDeploy agent using [Ubuntu 26.04 CodeDeploy Agent Install and Recovery](Ubuntu%2026.04%20CodeDeploy%20Agent%20Install%20and%20Recovery.md) on Ubuntu 26.04 hosts.
2. **Enable** the `codedeploy-agent` service at boot.
3. **Verify** service health and polling activity.
4. **Capture** installation notes in deployment records.

**IF** package repair or upgrades remove the agent, **THEN** run the recovery steps from the Ubuntu 26.04 agent playbook before the next deployment.

- [ ] `codedeploy-agent` is active and enabled.
- [ ] Polling activity is visible in logs.
- [ ] Recovery path is documented for this host.

### Phase 4: Prepare App Hooks and Runtime Behavior
1. **Apply** [CodeDeploy Hook Runtime and Build Hardening](CodeDeploy%20Hook%20Runtime%20and%20Build%20Hardening.md) to ensure deterministic BeforeInstall/AfterInstall behavior.
2. **Confirm** `appspec` hook mapping points to the correct scripts and paths.
3. **Confirm** on-host package authentication (`.npmrc` or equivalent) exists when private dependencies are installed during hooks.
4. **Confirm** reverse proxy and TLS setup via [Domain Setup](Domain%20Setup.md) with the real upstream port used by the app process.

**IF** hook execution depends on environment variables, **THEN** export and validate those variables before install/build steps.

- [ ] Hook scripts are executable and mapped correctly.
- [ ] Private package auth exists on host.
- [ ] Reverse proxy upstream matches actual app port.

### Phase 5: Execute and Verify Deployment
1. **Start** the deployment from the configured artifact revision.
2. **Monitor** lifecycle events until completion or failure.
3. **Capture** failed hook output immediately when any lifecycle event fails.
4. **Verify** process state (for example PM2 process online) and app readiness endpoint.
5. **Verify** public HTTPS response when domain traffic is enabled.

**IF** deployment fails in build or route compilation, **THEN** validate environment export, dependency auth, and Prisma generation sequence before retrying.

- [ ] Deployment lifecycle reached success.
- [ ] App process is online.
- [ ] Upstream and public probes return expected response.

### Phase 6: Run Maintenance and Operational Guardrails
1. **Add** a maintenance checkpoint to verify `codedeploy-agent` after host-level package repairs.
2. **Retain** known-good agent installer artifacts for fast recovery on unsupported distro versions.
3. **Document** any host-specific caveats in deployment runbooks.
4. **Schedule** periodic health checks for agent status, TLS validity, and app process health.

**IF** the host runs Ubuntu 26.04, **THEN** treat agent re-verification as mandatory after apt repair/install operations.

- [ ] Maintenance checklist includes agent re-verification.
- [ ] Recovery artifact retention is documented.
- [ ] Operational caveats are recorded.

## Common Mistakes & Fixes
| Common Mistake | Fix |
| :-- | :-- |
| Attempting CodeDeploy setup before EC2 initialization | Run EC2 initialization first, then use CodeDeploy automatic setup flow. |
| Installing agent once and assuming it remains installed on Ubuntu 26.04 | Keep installer artifact and re-verify/reinstall after apt repair operations. |
| Hook scripts failing due to missing env export | Load and export required env values before dependency install and build commands. |
| Private package install fails during AfterInstall | Keep host-level `.npmrc` and verify auth before deployment retries. |
| Nginx returns 502 after successful deploy | Point upstream to the real app port and re-test HTTP/HTTPS path. |
| Build fails on API route data collection | Run Prisma generation before build and validate runtime env is present during build. |

## Success Criteria
- [ ] EC2 was initialized before CodeDeploy setup.
- [ ] CodeDeploy application, deployment group, and roles are configured correctly.
- [ ] `codedeploy-agent` is active, enabled, and polling.
- [ ] Hook scripts execute deterministically with env and dependency auth in place.
- [ ] Deployment completes with app process online and healthy.
- [ ] Public HTTPS response is valid when domain routing is enabled.
- [ ] Ubuntu 26.04 maintenance caveat is documented and operationalized.

## Storage & Access
Store this playbook in `docs/playbooks/platform-infrastructure/AWS CodeDeploy Setup and Deployment.md`.
Access is required for platform engineers, release engineers, and on-call engineers performing infrastructure-backed deployments.
Always Open policy: keep this playbook visible while preparing or executing CodeDeploy changes.

## Next review date
2026-10-19
