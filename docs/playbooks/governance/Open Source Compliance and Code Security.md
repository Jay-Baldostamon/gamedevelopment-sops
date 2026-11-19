# 🔒 Open Source Compliance & Code Security Playbook

## DEFINE

| Field | Value |
| --- | --- |
| Playbook Name | Open Source Compliance & Code Security Playbook |
| Purpose | Standardize how the engineering team evaluates open source licenses, enforces automated dependency scanning, applies AI data leakage guardrails, and secures repositories and code so that compliance and security obligations are met consistently and traceably. |
| Owner | Engineering Lead |
| Last Updated | 2026-07-24 |
| Review Cycle | Every 90 days |

## Prerequisites

- [ ] You have access to the organization's GitHub repositories and CI pipeline configuration
- [ ] You know which package manager(s) are in use for each service (npm, pip, cargo, go modules, etc.)
- [ ] A license-checking tool is available in CI (e.g., `license-checker`, `licensee`, or the GitHub Dependency Graph)
- [ ] Secret scanning is enabled at the organization level in GitHub Advanced Security
- [ ] You have reviewed the current list of approved AI tools and their data-retention clauses
- [ ] You have offboarding access rights to revoke repository membership for departing engineers

## Step-by-Step Checklist

### Phase 1: Apply the Open Source License Allowlist / Blocklist

1. **Confirm** which dependency is under review and which license it declares (check `package.json`, `pyproject.toml`, `go.mod`, or equivalent manifest).
2. **Classify** the license against the three tiers below:

   | Tier | Licenses | Action |
   | --- | --- | --- |
   | 🟢 Green — Auto-approved | MIT, Apache 2.0, BSD-2-Clause, BSD-3-Clause, ISC | No additional review required; proceed with adoption. |
   | 🟡 Yellow — Requires Review | LGPL (any version), MPL 2.0, CDDL | Submit to Engineering Lead for legal review before adoption; document decision in the procurement tracker. |
   | 🔴 Red — Strictly Blocked | AGPL (any version), GPL v2, GPL v3, SSPL, CC-BY-NC (non-commercial variants) | Do not adopt. If already present, open a removal ticket immediately and escalate to the Engineering Lead. |

3. **Document** the license classification decision in the pull request description or ticket whenever a new dependency is added.
4. **Escalate** any ambiguous or dual-licensed package to the Engineering Lead before merging.

- [ ] Dependency license identified and classified
- [ ] Green licenses adopted without further review
- [ ] Yellow licenses submitted for legal sign-off before adoption
- [ ] Red licenses blocked and escalation raised if already present
- [ ] Decision recorded in PR description or procurement tracker

**IF a package has multiple licenses (dual-licensed), THEN classify by the most restrictive license present.**

**IF a Yellow license is approved after legal review, THEN document the approved use case, date, and reviewer name in the procurement tracker before merging.**

---

### Phase 2: Enforce Automated Dependency Scanning (CI Gate)

1. **Confirm** that a license-checking step exists in the CI pipeline for every repository that ships production code.
2. **Configure** the scanning tool to use the three-tier classification from Phase 1:
   - Map Red licenses to a hard-fail exit code that blocks merge to `main`.
   - Map Yellow licenses to a build warning that requires a manual override approval from the Engineering Lead.
   - Map Green licenses to a passing status check with no interruption.
3. **Validate** the scan runs on every pull request targeting `main` or any release branch — not only on scheduled runs.
4. **Review** the scan output for any new packages added in the PR diff, including transitive dependencies.
5. **Escalate** any CI failure caused by a Red license to the Engineering Lead before the PR is rebased or overridden.

- [ ] License-checking CI step present and running on every PR
- [ ] Red licenses produce a hard build failure
- [ ] Yellow licenses produce a warning and require manual override
- [ ] Transitive dependencies are included in the scan scope
- [ ] CI failure escalation path is documented

**IF a repository does not yet have a license-scanning CI step, THEN opening a new dependency PR in that repository is blocked until the step is added.**

**IF a transitive dependency triggers a Red license failure, THEN evaluate whether a compatible alternative top-level dependency resolves the transitive pull before adding an explicit exclusion.**

---

### Phase 3: Apply AI & Data Leakage Guardrails

1. **Confirm** that any AI assistant or coding tool in use by the team is accessed through a company-managed account with a zero-data-retention or non-training contractual clause.
2. **Enable** public code matching and attribution filters on all AI assistant configurations — do not disable these filters for convenience.
3. **Verify** that no AI tool configuration routes prompts to an unapproved external endpoint (check IDE extensions, browser plugins, and CLI tools separately).
4. **Enforce** the following prohibitions across all AI tool usage:

   | Prohibited Action | Reason |
   | --- | --- |
   | Pasting proprietary source code into a public or unapproved AI endpoint | Risk of training data exposure or IP leakage |
   | Submitting secrets, API keys, or tokens to any AI prompt | Credential exposure and compliance breach |
   | Including client PII (names, emails, IDs) in any AI prompt | Privacy and regulatory obligation |
   | Using personal accounts for AI tools where work code is shared | Zero-data-retention clauses do not cover personal plans |

5. **Report** any suspected data leakage incident immediately to the Engineering Lead and follow the Incident Response playbook.

- [ ] All AI tools use company-managed accounts with zero-data-retention or non-training clauses
- [ ] Public code matching / attribution filters are ON
- [ ] No unapproved external endpoints are in use by any AI tool or extension
- [ ] Prohibited actions list is communicated to all engineers
- [ ] Leakage incident reporting path is known to the team

**IF an engineer uses a personal account to access an AI tool for work purposes, THEN treat it as a policy violation and immediately revoke the connection and review any prompt history where available.**

**IF a suspected data leakage event occurs, THEN stop all further use of the implicated tool immediately and escalate to the Engineering Lead before resuming work.**

---

### Phase 4: Enforce Repository & Code Security

1. **Confirm** that all production and work-related code resides in organization-owned repositories — personal forks used for active development that are not promptly merged constitute a policy exception.
2. **Enable** secret scanning at the organization level and confirm that push protection is active so credentials are blocked before they reach the remote.
3. **Add** a pre-commit hook to every active repository that runs secret detection locally (e.g., `detect-secrets`, `gitleaks`) before any commit is pushed.
4. **Execute** offboarding revocation on the same day an engineer's last day is confirmed:
   - Remove the engineer from all organization teams and repositories.
   - Revoke any personal access tokens or OAuth apps the engineer issued under their account.
   - Confirm removal is logged in the offboarding record.
5. **Audit** repository membership quarterly to identify stale access — remove any engineer who has left or changed roles without a corresponding access update.

- [ ] All active code is in organization-owned repositories
- [ ] Secret scanning and push protection are active at the organization level
- [ ] Pre-commit secret detection hooks are installed in all active repositories
- [ ] Offboarding revocation runs on the engineer's last day with a written log
- [ ] Quarterly repository membership audit is scheduled

**IF a secret is detected in a commit that has already been pushed, THEN rotate the credential immediately, remove it from git history using `git filter-repo`, and file an incident report.**

**IF an engineer has not had any repository activity in 90 days, THEN flag the access for review and remove it unless a clear business reason is documented.**

## Common Mistakes & Fixes

| Common Mistake | Fix |
| --- | --- |
| Assuming a "permissive" license is automatically Green without checking the exact SPDX identifier | Always match against the exact license identifier in the allowlist — do not rely on descriptions or package author summaries. |
| Scanning only direct dependencies and missing transitive Red licenses | Configure the scanning tool to include the full dependency tree, not just top-level packages. |
| Disabling public code matching in AI tools to reduce interruptions | Keep matching ON; route inconvenient results to the Engineering Lead for review rather than disabling the control. |
| Storing work code in a personal fork for convenience | All active development branches must live in organization-owned repos; personal forks may only be used for ephemeral experimentation with no production code present. |
| Delaying offboarding access revocation by even one business day | Revoke access on the last confirmed day — treat same-day revocation as a hard requirement, not a best effort. |
| Treating a Yellow-license approval as permanent | Yellow approvals are use-case-specific; a new use of the same library in a different service requires a fresh review. |
| Relying on CI secret scanning as the only control | Pre-commit hooks are the primary control; CI scanning is a secondary gate. Both must be present. |

## Success Criteria

- [ ] Every dependency added to a production codebase has a recorded license classification (Green / Yellow / Red)
- [ ] No Red-licensed package is present in any production repository
- [ ] Every CI pipeline targeting `main` or a release branch has a passing license-scan gate
- [ ] All AI tools in use by the team are on company-managed accounts with zero-data-retention or non-training clauses
- [ ] Public code matching and attribution filters are confirmed ON for all AI tool configurations
- [ ] Secret scanning and push protection are active at the GitHub organization level
- [ ] Pre-commit secret detection hooks are installed in all active repositories
- [ ] All engineer access is revoked on the last day of employment with a written log entry
- [ ] Quarterly repository membership audits are completed on schedule

## Storage & Access

- **Location:** `docs/playbooks/governance/Open Source Compliance and Code Security.md`
- **Who needs access:** All engineers, team leads, the Engineering Lead, and any compliance or legal reviewers involved in license approvals
- **Always Open policy:** Keep this playbook visible when reviewing a PR that adds new dependencies, onboarding a new AI tool, or executing an engineer offboarding

## Next review date

2026-10-24
