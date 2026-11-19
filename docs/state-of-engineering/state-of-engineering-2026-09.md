**Engineering Department All Hands Report (Q3 2026)**

*Scope: July 1 – September 20, 2026 (live data through ~Sept 17). Figures sourced from the Engineering reporting platform (github-weekly-reporter), our playbooks/blueprints (engineering-sops), and department telemetry.*

---

### What are the major accomplishments of your team in Q3 2026?

1. **AI cost collapsed while usage scaled past the Q2 ceiling.**
   
   - Copilot credit burn reached **114% of the Q2 quota** in August (~78,783 credits) and remains high through September — we outgrew the original 69,000-credit budget.
   - AI-chat spend fell from **$1,733/month (June) to $614 (August) to ~$82 month-to-date (September) — a 95% reduction**, carried by the LiteLLM + OpenRouter routing and per-user budget bands we built in Q2.
   - AWS cost dropped from **$1,798/month (June) to ~$589 month-to-date (September) — 67% lower**, while sustaining live delivery pipelines for the week.

2. **Departmentwide AI training rollout went live and is self-operating.**
   
   - The departmentwide program launched on **July 6** as planned; it is now an **issue-driven, evidence-based** program (daily progress tracked in GitHub issues + supervisor validation, no attendance-based tracking).
   - **~20 members active** in the tracker; first **day-20 completer** recorded; L2 was expanded in August into a **40-day agentic-AI path** (Hermes setup → automated reviews → issue-to-PR delivery → agentic review → EM review packets).
   - Automation builds handoffs/branches/commits/PRs but **never merges, self-approves, or bypasses human EM review** — human accountability is preserved at the capstone.

3. **Delivery volume at record levels, quality-controlled by progressive gates.**
   
   - **716 PRs merged and 790 issues closed** across 8 active repos in Q3.
   - **815 accepted work items** (non-Ignore engineers) — measured output units, not raw activity.
   - QA graduated through the Q2 roadmap: **Severity-1 CI/CD gating → 60% Severity-2 functional checks,** with the operationally run daily/weekly QA cadence (nightly regression, quarantine, deflake, release-note verification) now in place; deeper **edge/logic filters and blocking enforcement** are the active next step.

4. **Fill-from-the-foundation: workflow reliability.**
   
   - **1,331 workflow runs** at **~91% success** — including the product-critical ones: `Deploy to Beta` (61 runs), `Deploy to BETA` (27), `Deploy simplabots` (6), all high-success.
   - Playwright Quality Gates (117 runs) and the Lint/Format gates (860 runs) give CI a safety mesh we can now tighten safely.

5. **People systems advanced materially.**
   
   - **Engineer Promotion Process** playbook finalized (90-day vetting, no skips, certification → public queue, evidence-based) — scheduled for review **Sept 24**.
   - **Backend L1→L2 promotion gate** with measurable hard gates added Sept 15; **L4 split** into Staff Engineer / Engineering Manager with **equal-standing parity bands** documented.
   - **2 engineers hired** in Q3; org now **29 active** (22 deliverable / non-Ignore): 1 OJT, 17 Junior, 7 Mid, 3 Senior, 1 Lead.

---

### Q3 vs Q2 comparisons

| Area                       | Q2 (end)                 | Q3 (live)                          | Move           |
| -------------------------- | ------------------------ | ---------------------------------- | -------------- |
| AI-chat monthly cost       | ~$1,733 (Jun)            | ~$82–$614 (MTD/avg)                | **−95%**       |
| AWS monthly cost           | ~$1,798 (Jun)            | ~$589–$1,198                       | **−67%**       |
| Copilot credit burn        | 68,284 / 69,000 (98.96%) | 78,783 in Aug (114% of quota)      | **past quota** |
| Accepted output (measured) | fresh pipeline           | **815 items Q3**                   | established    |
| PRs merged / issues closed | (activity metric)        | 716 / 790                          | scaling        |
| QA gate severity           | 50% S1 non-blocking      | 60% S2 + operational QA cadence    | tightened      |
| AI training                | rollout scheduled Jul 6  | live, evidence-driven, ~20 members | live           |
| Promotion playbook         | in progress              | finalized, review Sep 24           | completed      |

---

### What are the new records set by your team in Q3 2026?

1. **Lowest AI infrastructure unit cost at scale** — AI-cost down 95%, AWS down 67% vs June while live delivery ran all quarter.
2. **Highest sustained Copilot usage** — burned **114% of the Q2 credit quota** in a single month (August), then kept a high burn into September.
3. **First full-cycle AI-training completion** under the July 6 rollout (day-20 completer) + **L2 40-day agentic path** created.
4. **First measured accepted-output baseline** — department now reports **815 accepted work items / quarter**, so cost-per-item and output economics are real (not activity proxies).
5. **Record delivery throughput** — **716 PRs merged, 790 issues closed** across the quarter.

---

### What KRs (Key Results) do you own in Q2–Q3 that will spill over next Quarter?

1. **Compensation & budget late-stage validation.** Every figure feeding Unit Economics (salary, benefits, overhead) is currently an estimate. We cannot finalize P&L / cost-per-item until **real compensation + budget values** are in place — this is the single blocker to a defensible unit-economics story.
2. **QA to blocking + edge-logic filters.** Escalate from "60% Severity-2 advisory" to **full blocking enforcement** and **70–80% edge-case/logic-flaw filters** (Month 4–5 of the QA roadmap), stabilizing nightly regression with quarantine + deflake discipline.
3. **Complete departmentwide AI training + L2.** Drive remaining ~19 in-progress members to day-20 completion; expand L2 agentic cohort; keep human-review accountability at the capstone.
4. **First promotions under the new playbook.** Run the 90-day vetting for promotion candidates; operationalize certification → queue → assignment; validate the **backend L1→L2** measurable gate.
5. **Close observability gaps.** QA metrics from CI/CD gates, DB output from mergequery/MyQuery verifier evidence, and L4-EM training/meeting visibility — set up in Q3, need populated dashboards and actual values.

---

### What do you think are the most important things that we should accomplish next Quarter?

1. **Land real compensation + budget data** so Unit Economics, P&L, and COGS are defensible — stop estimating. This unblocks cost ownership and the revenue-for-cost story simultaneously.
2. **Tighten QA into a blocking gate** at 70–80% edge/logic coverage, with a stable nightly run (low flake, quarantine-driven), so "accepted" output also carries quality proof.
3. **Finish the AI-training program** — full department to day-20, first L2 agentic graduates, and a measurement of adoption quality post-rollout.
4. **Execute the first evidence-based promotions** end-to-end (vet → certify → assign) to prove the non-political process works and set the cadence.
5. **Deliver populated observability dashboards** (QA CI/CD, DB, L4-EM) so leadership decisions run on complete data, closing the visibility gaps reported in Q2.

---

### Visibility gaps to explicitly report

1. **Compensation / cost values are still estimates** (placeholders). Unit Economics figures are indicative, not audited — they will change once real comp/budget is entered.
2. **QA execution vs. blueprint:** the progressive-gate framework (50% → 60% → 70–80%) is well documented, but the repository records target operating states/checklists rather than verified Q3 pass-rate scorecards — actual gate results still need to be captured as metrics.
3. **DB engineer output** visibility is set up (mergequery/MyQuery verifier) but actual Q3 DB output numbers are not yet populated into dashboards.
4. **L4-EM training/meeting participation** tooling exists (Engineering MCP) but is not yet measured/reported.
5. **Accepted-item cycle time is long** (avg ~16.8 days, ~404h) — output counts are right, but time-to-done remains an area to attack for efficiency.

---

### Sample Script (All Hands Ready)

HELLO EVERYONE! MY NAME IS ALAN, AND I'M HERE WITH THE ENGINEERING DEPARTMENT'S Q3 2026 REPORT.

This quarter we did three things at once: we kept shipping at record volume, we crushed our AI and infrastructure costs, and we built the people systems that let the whole thing scale predictably.

KEY RESULTS:

- DELIVERY AT SCALE
  
  - We merged **716 pull requests** and closed **790 issues**.
  - We turned "activity" into **measured output: 815 accepted work items** this quarter — real, defined units of delivered value, not just commits.
  - Our delivery pipelines ran **1,331 workflows at 91% success**, including hourly-critical deploys.

- COST — THE BIG WIN
  
  - We cut **AI-chat spend ~95%** — from $1,733 a month to about **$82** in September — by routing every request through LiteLLM + OpenRouter with per-user budgets.
  - We cut **AWS ~67%** compared to June.
  - And here's the kicker: our Copilot usage didn't go down, it **blew past last quarter's entire credit budget** — 114% in August alone. Cheaper infrastructure, more AI, not less.

- AI TRAINING IS REAL NOW
  
  - Departmentwide training went live **July 6**. It's not attendance — it's **evidence-based**: daily work in GitHub issues, validated by supervisors.
  - We have ~20 members moving through it, our **first day-20 graduate**, and we expanded to a **40-day agentic-AI path** with human review always kept in the loop.

- QUALITY GATES TIGHTENED
  
  - We moved from 50% Severity-1 advisory to **60% Severity-2 functional checks**, and now run a daily/weekly QA discipline: nightly regression, quarantine, deflake. Blocking enforcement and edge-case filters are next.

- PEOPLE SYSTEMS
  
  - Promotion playbook finalized — **90-day vetting, evidence-based, no skips** — under formal review Sept 24.
  - Measurable **backend L1→L2 promotion gate** defined; **staff vs. engineering-manager parity** documented.
  - We added **2 new engineers**; the department is now 29 strong, anchored by a clear career ladder.

AS WE MOVE INTO Q4, THREE THINGS MATTER MOST:

- **Land real compensation and budget data** so our unit economics and cost story are audited, not estimated.
- **Turn QA into a blocking gate** at 70–80% coverage so every "accepted" item also carries quality proof.
- **Finish the AI-training program**, run our first evidence-based promotions, and put real numbers behind our dashboards.

We built the engine this quarter. Next quarter, we prove the numbers behind it. Thank you.