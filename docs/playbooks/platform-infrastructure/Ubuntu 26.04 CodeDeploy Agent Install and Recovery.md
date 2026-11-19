# 🧰 Ubuntu 26.04 CodeDeploy Agent Install and Recovery Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Ubuntu 26.04 CodeDeploy Agent Install and Recovery |
| Purpose | Provide a repeatable install and recovery path for `codedeploy-agent` on Ubuntu 26.04 where package support and apt dependency behavior may be unstable. |
| Owner | Engineering Platform Team |
| Last Updated | 2026-07-21 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] You have sudo access to the Ubuntu 26.04 EC2 instance.
- [ ] You have outbound network access from the host to AWS CodeDeploy/agent package endpoints.
- [ ] You have systemd available and functioning on the host.
- [ ] You have a known installer source and local retention path for the agent package artifact.
- [ ] You reviewed [AWS CodeDeploy Setup and Deployment](AWS%20CodeDeploy%20Setup%20and%20Deployment.md).

## Step-by-Step Checklist
### Phase 1: Install Agent with Ubuntu 26.04 Workaround Path
1. **Fetch** the CodeDeploy agent package using the approved forced-package method for Ubuntu 26.04.
2. **Install** the package and required runtime dependencies.
3. **Retain** the installer artifact in a persistent host path for reuse.
4. **Record** package version and source in deployment notes.

**IF** standard package install fails due to distro support constraints, **THEN** use the approved workaround install method and continue only after explicit service validation.

- [ ] Agent package is installed.
- [ ] Installer artifact is retained on-host.
- [ ] Installed version and source are recorded.

### Phase 2: Enable and Validate Service Health
1. **Start** the `codedeploy-agent` service.
2. **Enable** the service for boot-time startup.
3. **Validate** active service status via systemd.
4. **Review** agent logs for command poller activity.

**IF** service is active but no poller activity appears, **THEN** verify IAM role permissions and outbound network routes.

- [ ] Service is active.
- [ ] Service is enabled at boot.
- [ ] Poller activity is visible in logs.

### Phase 3: Recover Agent After Apt Repair or Dependency Churn
1. **Check** whether apt repair/install operations removed `codedeploy-agent`.
2. **Reinstall** from the retained local installer artifact when the package is missing.
3. **Restart** and **re-enable** the service after reinstall.
4. **Re-validate** service state and poller logs.

**IF** host-level package repair was run, **THEN** treat agent status verification as mandatory before the next deployment.

- [ ] Agent presence is confirmed after package operations.
- [ ] Service is restored and enabled.
- [ ] Poller health is reconfirmed.

### Phase 4: Add Ongoing Operational Guardrails
1. **Insert** an explicit "re-verify CodeDeploy agent" step in maintenance and deployment checklists.
2. **Schedule** periodic checks for service status and log activity.
3. **Escalate** recurring package-removal behavior for long-term platform remediation planning.
4. **Document** Ubuntu 26.04 caveat in environment runbooks.

**IF** agent removal repeats across maintenance windows, **THEN** prioritize migration to a fully supported host baseline or managed deployment target.

- [ ] Maintenance checklist includes agent re-verification.
- [ ] Recurring caveat is documented and visible.
- [ ] Escalation path is defined for repeated removals.

## Common Mistakes & Fixes
| Common Mistake | Fix |
| :-- | :-- |
| Assuming one-time agent install is permanent | Re-verify agent after apt repair/install operations. |
| Losing installer artifact after first install | Retain package artifact in persistent host path for fast reinstall. |
| Declaring readiness from service status only | Confirm both active status and poller log activity. |
| Reinstalling agent but forgetting enable-at-boot | Run service enable step after reinstall and verify persistence. |
| Running deployment immediately after package repair | Perform agent reinstall/validation checkpoint first. |

## Success Criteria
- [ ] Agent is installed through the approved Ubuntu 26.04 path.
- [ ] `codedeploy-agent` is active, enabled, and polling.
- [ ] Installer artifact is retained for rapid recovery.
- [ ] Agent recovery process is proven after package maintenance.
- [ ] Operational checklists include mandatory post-maintenance agent verification.

## Storage & Access
Store this playbook in `docs/playbooks/platform-infrastructure/Ubuntu 26.04 CodeDeploy Agent Install and Recovery.md`.
Access is required for platform, infrastructure, and release engineers who manage Ubuntu-based deployment targets.
Always Open policy: keep this playbook visible while installing, repairing, or validating CodeDeploy agent state.

## Next review date
2026-10-19
