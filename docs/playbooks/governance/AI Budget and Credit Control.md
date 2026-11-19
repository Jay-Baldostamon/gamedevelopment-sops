# 💰 AI Budget and Credit Control Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | AI Budget and Credit Control Playbook |
| Purpose | Standardize how the Engineering Department sets, monitors, enforces, and reviews per-user AI credit budgets so that AI spend remains predictable, developer productivity is protected, SaaS GPU workloads are never degraded, and high-impact contributors are not blocked by arbitrary caps. |
| Owner | Engineering Lead / Direct Supervisor |
| Last Updated | 2026-07-20 |
| Review Cycle | Every 90 days |

> **Related playbook:** For approval routing, decision logging, expiry scheduling, and resubmission handling, follow the [Engineering Approval Escalation Playbook](./Engineering%20Approval%20Escalation.md). Phase 4 of this playbook delegates to it.

## Prerequisites
- [ ] GitHub Copilot Business plan is active for the organisation
- [ ] GitHub Budgets and Alerts is accessible to the billing owner or organisation admin
- [ ] All current and pending Copilot seats are listed and assigned to the correct team (Engineering or Product)
- [ ] Internal vLLM endpoint (`qwen3-coder:30b-a3b-q4_K_M`) is reachable and queue/rate-limit safeguards are in place
- [ ] SaaS GPU capacity monitoring is active and a kill switch exists for internal developer requests
- [ ] Each user's direct supervisor is identified and can approve temporary budget increases
- [ ] Engineering scorecard metrics (commits, PRs merged, issues closed, standups) are being tracked via the Engineering Department MCP

## Step-by-Step Checklist

### Phase 1: Configure Baseline Budgets

1. **Open** the GitHub organisation billing dashboard and navigate to **Budgets and Alerts**.
2. **Set** a per-user AI usage limit of **$20/month** for all Copilot Business seats.
   - This covers the $19/user/month licence value plus ~$1/user/month of controlled overage.
3. **Configure** an alert at **80% of each user's budget** to trigger an automatic email reminder.
4. **Confirm** that the aggregate monthly budget ceiling is calculated as:
   - Current (23 users): 23 × $20 = **$460/month**
   - Future (27 users post-September 1): 27 × $20 = **$540/month**
5. **Document** any CEO-approved exceptions to the $20 baseline before activation.
6. **Verify** that code completions and next edit suggestions are on the paid plan and are **not** billed against AI credits.

- [ ] $20/user budget is set in GitHub Budgets and Alerts
- [ ] 80% alert threshold is active for all seats
- [ ] Aggregate monthly ceiling is recorded
- [ ] Exceptions (if any) are documented before go-live

**IF a user is not yet provisioned in GitHub but is on the pending list, THEN add them to the budget policy before their seat is activated.**

---

### Phase 2: Apply Model Tiering

1. **Communicate** the model tiering policy to all users before the baseline period begins.
2. **Assign** each use case to the appropriate tier:

   | Tier | Use Case | Default Backend |
   | --- | --- | --- |
   | Tier 1 | Inline completion, everyday IDE productivity | GitHub Copilot |
   | Tier 2 | Chat, small edits, issue planning | GitHub Copilot within budget |
   | Tier 3 | Heavy agentic tasks, large repo scans, repeated planning | Copilot only if budget remains or approved |
   | Tier 4 | After budget cap / low-priority usage | Internal vLLM models |
   | Tier 5 | Critical work needing best model | Exception approval required |

3. **Confirm** that Tier 4 routes to the internal vLLM endpoint and that users have connection details.
4. **Remind** users that internal vLLM (Tier 4) is best suited for: low-priority coding help, summarisation, code explanation, simple implementation help, and first-pass task planning — and is **not** a full replacement for GitHub Copilot.

- [ ] Tiering policy is shared with all users
- [ ] Internal vLLM connection details are distributed
- [ ] Tier 4 limitations are understood by the team

---

### Phase 3: Monitor Usage and Enforce Thresholds

1. **Review** monthly AI credit usage per user from the GitHub billing dashboard.
2. **Act** on the following thresholds:

   | Usage Level | Action |
   | --- | --- |
   | 80% of budget used | Automatic reminder sent; user self-monitors |
   | 100% of approved budget | User switches to internal vLLM (Tier 4) by default |
   | Any usage above approved budget | Direct supervisor approval required before continuing on Copilot |

3. **Verify** at the end of each month that no user has incurred charges above their approved limit without prior supervisor sign-off.
4. **Check** SaaS GPU utilisation metrics whenever internal vLLM usage is elevated to confirm customer-facing workloads are not degraded.
5. **Escalate** to the Engineering Lead if SaaS GPU saturation is detected during developer AI usage.

- [ ] Monthly usage review is completed
- [ ] No unauthorised overages are present
- [ ] SaaS GPU health is confirmed after vLLM usage spikes

**IF a user consistently hits 100% before the end of the month for two or more consecutive months, THEN flag for early budget review in the next phase.**

**IF SaaS GPU utilisation exceeds the safe threshold during developer AI hours, THEN activate the kill switch to suspend internal vLLM developer requests immediately.**

---

### Phase 4: Process Temporary Budget Increase Requests

> **Follow the [Engineering Approval Escalation Playbook](./Engineering%20Approval%20Escalation.md)** for all justification intake, approval routing, decision recording, communication, expiry scheduling, and close-out steps.

**AI budget-specific rules for this playbook:**

Justification must fall within one of these approved categories before routing:
- Urgent production fix
- Sprint-critical work
- Large-scale refactor
- New engineer onboarding
- Architecture or research task
- Deadline-sensitive client deliverable

Approver for temporary increases: **direct supervisor** of the requesting user.

Once approved, activate by setting the temporary limit in GitHub Budgets and Alerts with an explicit expiry date, then remove the increase when the qualifying work ends.

- [ ] Justification maps to an approved category above
- [ ] Escalation playbook steps are followed
- [ ] Temporary limit is set in GitHub Budgets and Alerts with an expiry date
- [ ] Increase is removed when qualifying work ends or expiry is reached

**IF the request does not fall into an approved category, THEN deny at intake and suggest internal vLLM (Tier 4) for that work — do not route for approval.**

---

### Phase 5: Conduct the 3-Month Budget Review

1. **Pull** the following data for each user from the Engineering Department MCP scorecard:
   - Delivery volume (commits, PRs merged, issues closed)
   - Standup participation rate
   - PR review quality (where tracked)
   - Rework rate (where tracked)
   - AI credit usage per merged PR and per completed issue (add to scorecard if missing)
2. **Assess** whether AI usage correlates with meaningful output for each user.
3. **Classify** each user's budget outcome:
   - **Maintain $20/month** — usage is proportionate to output
   - **Increase limit** — high-impact contributor whose productivity justifies higher spend; roles include: senior engineers, tech leads, QA automation engineers, DevOps engineers, engineers on large refactors or architecture-heavy tasks, product users producing acceptance criteria
   - **Reduce limit** — usage does not correlate with output or responsible usage criteria
4. **Apply** updated per-user limits in GitHub Budgets and Alerts.
5. **Document** the rationale for any change from the $20 baseline.
6. **Schedule** the next review date (90 days from today).

- [ ] Scorecard data is pulled for all users
- [ ] AI ROI assessment is completed per user
- [ ] New per-user limits are set in GitHub Budgets and Alerts
- [ ] Rationale for each change is documented
- [ ] Next review date is scheduled

**IF an AI ROI indicator (e.g. AI usage per merged PR) is missing from the Engineering scorecard, THEN log a task to add it to the Engineering Department MCP before the next review cycle.**

---

### Phase 6: Validate SaaS GPU Protection (Ongoing)

1. **Confirm** that internal vLLM usage for developers is routed through the internal queue and subject to rate limits.
2. **Verify** the following safeguards are active at all times:
   - Internal request queue
   - Per-user and aggregate rate limits
   - Off-peak preference setting
   - Usage logging enabled
   - Kill switch tested and reachable
   - Maximum concurrent developer request cap enforced
   - Model availability disclaimer shown to users
3. **Assert** the priority rule: **customer-facing SaaS workloads always take priority over internal developer AI usage.**

- [ ] All vLLM safeguards are confirmed active
- [ ] Kill switch is reachable and tested
- [ ] Priority rule is documented and communicated to the team

## Common Mistakes & Fixes

| Common Mistake | Fix |
| --- | --- |
| Setting a per-user budget higher than $20 at initial rollout without CEO approval | Reset to $20 baseline; log any exceptions before applying them |
| Treating the $20 budget as a hard cap on the Copilot licence itself | Clarify that $19 is the licence cost and $1 is controlled overage — the $20 figure is an internal planning posture, not a licence downgrade |
| Routing users to internal vLLM for production-critical or security-sensitive work | Redirect to Tier 5 exception approval; vLLM fallback is for Tier 4 (low-priority, non-critical tasks) only |
| Approving temporary budget increases without a written justification or expiry date | Always document justification and set an expiry date before activating the increase |
| Allowing developer vLLM usage during peak SaaS GPU hours without checking capacity | Check SaaS GPU utilisation before enabling developer AI requests; activate kill switch if saturation is detected |
| Skipping the 3-month review because data is incomplete | Run the review with available data; log missing AI ROI indicators as tasks to add to the Engineering MCP scorecard |
| Failing to remove temporary budget increases after qualifying work ends | Set a calendar reminder at the time of approval to remove the increase on the agreed date |
| Assuming unused product-team AI credits carry over to engineers automatically | Reallocation of product-team capacity to engineers must be an explicit decision made during the monthly usage review |

## Success Criteria
- [ ] All users have a $20/month AI usage limit set in GitHub Budgets and Alerts
- [ ] 80% usage alerts are active for all seats
- [ ] No user has incurred charges above their approved limit without prior supervisor approval
- [ ] Internal vLLM is the default fallback for all Tier 4 usage, with safeguards confirmed active
- [ ] SaaS GPU customer workloads show no degradation attributable to internal developer AI usage
- [ ] The 3-month review has been completed and per-user limits reflect actual contribution and role
- [ ] AI ROI indicators are present in the Engineering scorecard (or a task is logged to add them)
- [ ] High-impact contributors are not blocked by the baseline cap

## Storage & Access

- **Location:** `engineering-sops/docs/playbooks/governance/AI Budget and Credit Control.md`
- **Who needs access:** Engineering Lead, all direct supervisors, HR/People Ops for performance tie-ins, and the GitHub billing owner
- **Always Open policy:** Keep this playbook open during monthly usage reviews, temporary increase decisions, and the 3-month budget review

## Quick Reference

| Scenario | Action |
| --- | --- |
| New user provisioned | Set $20/month limit before seat is activated |
| User hits 80% of budget | Automatic reminder; user self-monitors remaining usage |
| User hits 100% of budget | Route to internal vLLM (Tier 4) |
| User needs more than $20 | Direct supervisor reviews justification and approves a temporary increase with expiry date |
| SaaS GPU saturation detected | Activate kill switch; suspend developer vLLM requests |
| Production-critical fix after budget cap | Escalate to Tier 5 exception approval; do not use Tier 4 vLLM |
| 3-month review due | Pull Engineering MCP scorecard data and adjust per-user limits by contribution and role |

## Next review date

2026-10-20
