# Month 4 Overview: L4 Cloud Hermes Network (L3 × ~10 instances)

> **Retired overview:** Do not use the historical guidance below. Follow the [Tools-Only 80-Day Learning Plan](../Tools-Only%2080-Day%20Learning%20Plan.md), which replaces this overview and its legacy lesson links and uses only Unity, GitHub Copilot inside VS Code or Visual Studio Community, and Gemini.

## Unity Game-Development Track Context

This level or week uses the same desktop 2D C# action-platformer on the current Unity LTS release. The Unity gameplay lane covers scripts, scenes, prefabs, assets, tests, and builds. The former DB lane is now the game data lane for player profiles, save slots, checkpoints, collectibles, unlocks, and leaderboard contracts.

For L3/L4, scheduling, agents, and cloud workers support the Unity repository and build/test pipeline. Use only approved mock or game-specific data, not CRM or unrelated production systems. If a fixture is unavailable, identify the blocker locally and keep the work design-only. Preserve authorization, independent review for actual PRs, and secret-handling controls; no training reports or supervisor sign-offs are required.

| Field | Value |
| --- | --- |
| Blueprint Name | Month 4 Overview - L4 Cloud Hermes Network |
| Track | training |
| Level | month |
| Owner | Direct Supervisor / Training Team |
| Last Updated | 2026-10-02 |
| Review Cycle | Every 30 days |
| Status | **draft / architecture proposal** |

> **Forward reference.** This Month 4 overview is a provisional architecture draft.
> L3 Day 60 now closes with local workflow validation rather than a written handoff.
> Multi-instance material remains deferred until the simulator spiral is validated.

---

## The thesis

L3 took one engineer's local Hermes from "runs on a schedule, pages on novelty" to "an
assembled orchestrator that claims, offloads durable delivery jobs, recovers stranded
claims, respects per-repo serialization, and pages only at genuinely novel forks". L4 keeps
that orchestrator **unchanged in behavior** and answers one question:

> **How do we run ~10 Hermes instances at once, all sharing one organizational brain, all
> working the same repositories from the cloud — without losing per-engineer isolation or
> reintroducing the shared-worktree collisions we deliberately serialized against in L3?**

> **Week 14 update.** Hub-side claiming may route authorized project work. Unity worktrees
> isolate checkouts and generated project state, but not every shared resource. Retain the
> existing concurrency guard until actual tests and project-owner approval justify a change.

> **Week 15 update (2026-10-20).** The multi-instance theme is **deferred to a later level
> (~L6)**: L4 stays **single-VM** for Weeks 15–16. Week 15 becomes "One VM, Hardened and
> Observable" (resilience: snapshots + rehearsed restore + AMI refresh + real cost data;
> hub-side decisions; instance-health dashboard; local Unity profiling; within-VM isolation
> verification). Week 16 covers unattended operation, local Unity validation, and a read-only
> offboarding-policy review. The multi-instance material — spin instances 2/3, cross-instance
> isolation, scale to ~10, fleet framing — is preserved as **notes** in
> `../L6/NOTES - The Network (deferred from L4).md`, not a blueprint; L5 (candidate theme:
> "manual" SDLC) and L6 are undecided. The single-VM skills L4 builds — hub-side claiming,
> worktree-per-job allocation, snapshot/restore, stamped baselines, upgrade machinery —
> are exactly what the eventual network multiplies, so nothing is lost by the deferral.

The managers of the network are three design decisions, each with a firm recommendation:

1. **How skills are retained network-wide** → a skills git repo as the single source of truth.
2. **Where the instances physically run** → Hermes instances live on cloud VMs; work happens on a
   shared cloud checkout via **git worktrees** (the exact thing deferred from L3 Week 12 to L4).
3. **Role of `ssh EngineeringMCP`** → stays the coordination hub (relay, keys, pickup); it does
   NOT become the executor. **OpenClaw is out of scope for L4** (see below).

---

## Decision 1 — Retaining skills across the network

The whole "retain skills from one Hermes across the whole network" worry dissolves once you
recognize **skills are already files, already under git** (`engineering-sops` is the proof).
The network does not *replicate* a brain; it *provisions* N instances from one source of truth.

**Split by invalidation scope:**

| Layer | What lives here | Shared or per-engineer | Propagation |
| --- | --- | --- | --- |
| Org skills | procedures, policy, SOPs (already in `engineering-sops`) | **shared, read-mostly** | one git repo; every instance pulls on boot |
| Config | routing policy, manager routing, defaults | shared via git; per-instance `.env` overrides | git + deploy-time env |
| Per-engineer memory | `MEMORY.md`, `USER.md`, learned domain facts | **per-engineer, private** | each engineer's own git config repo (private branch) |
| Per-engineer autonomy/customizations | VM experiments, customized skills, personal workflows | **per-engineer, private** | engineer-owned; never force-merged into the shared repo |
| Secrets / keys | relay keys, Slack tokens, SSH keys | per-engineer, never shared | injected at deploy, never committed, hash-at-rest |

**Autonomy is preserved by design (Decision 1, user-confirmed).** The shared skills repo is the
*training baseline* every engineer starts from — not a cage. Each engineer is free to
experiment, improve, and customize their own Hermes VM at leisure (their private skills, memory,
workflows, experiments). If it's faster or slower, that's their own experience and prerogative
to learn more. The rule is one-way: engineers may pull the shared baseline and build on it; they
are never forced to push a customization back, and nothing private or experimental is folded
into the shared repo without the engineer's opt-in. This keeps org knowledge uniform at the
baseline while preserving exactly the individual autonomy L1–L3 already taught.

**Model:** a *skills monorepo* (org skills + config) that every Hermes instance checks out,
plus a *private per-engineer memory repo* that only that instance mounts. "Retention" is by
construction: all instances start from the same revision of the org repo, so org knowledge is
uniform, while each engineer keeps their private learned facts. This mirrors what L1–L3
already do and extends it mechanically — no bespoke sync daemon.

**Accountability for promotion (Decision 1, resolved).** Most skills and all learned facts stay
per-engineer; promotion to the shared repo is deliberate and **gated** — initially only the head of
engineering promotes, later (on explicit go-ahead) the QA automation team once ready. The promote-able
set is skills the Levelled trainings themselves generate (e.g. L3 and L4 skills) — durable,
org-general procedures, not experiments or personal facts.

---

## Decision 2 — Where the instances run (and worktrees become load-bearing)

Two candidate models:

**(A) "Hermes stays local, operations remote"** — the current L3 arrangement scaled: engineer's
Hermes stays on their laptop; everything executed via `ssh`/`scp`/worktrees on a cloud server.
- Pros: no new runtime; matches today.
- Cons: a laptop is a poor multi-tenant host; 10 engineers × 10 laptops can't all run a 24/7
  orchestrator reliably; crisis-on-laptop = whole network stalled; secrets sprawl to every
  laptop. **This does not scale to 10.**

**(B) "Instances live on the cloud; work shares a cloud checkout via worktrees"** (recommended)
- Each engineer's Hermes runs as a cloud VM/container (provisioned from a standard template).
- **Git worktrees** give each Unity job an isolated checkout and index; each job also needs
  separate generated `Library`, `Temp`, build-output, and mock-fixture state.
- Keep existing serialization guards until shared resources, licenses, and actual concurrent
  behavior have been tested and an owner approves any change.
- Hermes process model is unchanged — the durable one-shot delivery `cronjob` pattern (proven
  in L3) runs identically inside each VM.

**The collision model.** Separate Git indexes reduce checkout contention, but do not prove
isolation of Unity caches, build outputs, licenses, fixtures, or shared services. Exercise the
actual resources locally and retain the existing guard when a check is blocked or a collision
occurs. Any guard change requires explicit project-owner approval.

**Tradeoff:** separate Unity caches and build outputs consume disk and import time. Measure
those costs using the actual project and an agreed local budget; never copy live credentials,
production player data, or another tree's generated state.

**Recommendation: (B).** "Hermes stays local" is a single-tenant truth; the network question is
inherently multi-tenant, and the cloud VM + worktree is the only honest way to run ~10
instances on shared repos.

**Engineer → Hermes communication (resolves the "ssh CLI is clunky" worry).** Hermes's desktop
app natively supports **multi-gateway connections**: one desktop app can register the local
runtime AND any number of remote gateways (HTTP(S) over LAN/Tailscale/internet, SSH hosts, or
Hermes Cloud) and switch between them side-by-side, with each `(gateway, profile)` as its own
agent. So the engineer keeps the **exact L1–L3 workbench UI** — the desktop app they already
know (L2's first success criterion is "launch the UI") — pointed at their cloud VM's
`hermes serve` backend. No one types into an SSH chat prompt as their daily driver.

Per-VM setup (mechanically what the plan provisions):
- Backend: `hermes serve --host 0.0.0.0 --port 9119` (or bind the machine's Tailscale IP so only
  the tailnet reaches it), run under systemd so it survives reboots.
- Auth: **model access is per-engineer — each engineer uses their own OpenRouter API key on
  their VM (keys are never shared; this is the org standard, see the AI-enablement / OpenRouter
  Personal Key playbook).** Nous Portal is optional (Hermes treats it as just another provider)
  and this org does not use it. Backend/gateway login for the desktop app: **username/password
  over the trusted tailnet/Tailscale** — no OAuth provider needed since instances are not exposed
  to the open internet. Never expose a password-protected backend to the public internet.
- Secrets live in the engineer's own VM `.env` (0600); no shared credential is baked into any
  image or cloned onto more than one VM.
- In the app: Settings → Gateways → add *Remote gateway* → enter the VM's URL → sign in. Profiles
  point at their backend, so switching profile = switching which VM the app drives.
- `ssh` remains the **admin path only** (provisioning, troubleshooting), not the daily interface.

This also means instances keep streaming in the background while the engineer looks at another
gateway — the fleet rail scales from 2 to ~10 without turning each backend into a separate
clunky surface.

---

## Decision 3 — Role of `ssh EngineeringMCP`, and OpenClaw

- `ssh EngineeringMCP` remains exactly what it is today: the always-up **coordination hub** —
  GitHub webhook → pending-tasks relay, per-engineer `ptk_…` keys, admin key issuance. It is
  the *router*, not the *workers*.
- **OpenClaw is out of scope for L4.** OpenClaw is a chat-to-agent gateway whose core model is
  "talk to the agent in chat and it acts." That contradicts the L3 posture you enforced
  (inform-only pager, local Hermes is the workbench, no inbound path to a laptop). It would
  also require re-harnessing the L1–L3 training investment onto a different agent runtime.
  Revisit only in a later level for *operator-facing chat* (engineers messaging their agent
  from their phone) — a product decision, not infrastructure. `ssh EngineeringMCP` already
  covers the coordination; OpenClaw covers a different surface (interactive chat) that L4 does
  not need.

---

## Week-by-week skeleton (L4 = Month 4, Weeks 13–16, Days 61–80)

Each day: standard + DB-lane issue-template file, exactly like L3. Provisional:

- **Focus 5 (Week 13, Days 61–65): Cloud provisioning & brain.** Provision one cloud VM from a
  standard template; skills-monorepo check-in/check-out; per-engineer memory repo mount; secret
  injection; get instance 1's orchestrator running unattended on the cloud.
- **Focus 6 (Week 14, Days 66–70): Unity worktrees.** Provision isolated checkouts and caches,
  verify the Editor/package and mock-save baseline, and test authorized concurrent jobs. Retain
  guards until observed isolation and project-owner approval justify a change.
- **Focus 7 (Week 15, Days 71–75): One VM, hardened and observable.** Rehearse resilience,
  hub-side decisions, health visibility, local Unity profiling, and within-VM isolation.
- **Focus 8 (Week 16, Days 76–80): Unattended operation and local validation.** Exercise upgrades,
  unattended operation, and the worktree tradeoff; finish with local Unity checks and a read-only
  offboarding-policy review.

## Month 4 Success Criteria (provisional)

- [ ] A skills monorepo is the single source of truth for org skills; every instance boots
      from the same revision (verify by diff, not by claim).
- [ ] Each engineer's memory/secrets stay private; no org skill, config, or secret leaked
      between instances (verify: instance A cannot read instance B's memory/key).
- [ ] Authorized Unity worktree jobs are tested for actual checkout, index, cache, fixture, and
      build-output collisions; unavailable cross-instance checks remain unverified.
- [ ] `ssh EngineeringMCP` relay continues to route pickups for all instances; per-engineer keys
      still 401/403 correctly.
- [ ] The authorized single VM runs routine work quietly and escalates genuinely novel or blocked work.
- [ ] Worktree provisioning isolates Unity-generated state and mock fixture paths without copying secrets.

## Quality Gate / Operating Metrics

Reuse L3's gates (inform-only boundary, evidence, least-privilege keys, no self-merge/no DDL-by-agent).
Add network-specific gates:

- Shared-brain drift (instances on different skill revisions) → target zero.
- Cross-instance leakage (secret / diff / memory) → target zero.
- Worktree collision rate → target zero; any collision = blocker before scaling further.
- Worktree resource cost (disk and import time for isolated Unity caches) → measured locally.

## Guiding Principle

L4 applies L3's automation principles to one authorized cloud instance and isolated Unity
worktrees. Multi-instance work remains deferred; inform-only review, authorization, and
non-bypassable human/CI controls remain in force.

## Game Data Lane

The game data lane interleaves the same arc using approved mock player-save or progression data.
Keep fixture state and Unity-generated caches isolated per worktree; inspect validation locally.
Do not post training evidence, execute DDL, or mutate a live schema.

## Open questions to resolve before this becomes a blueprint

> Decision log is in the appendix below. Resolved decisions are bolded with their answer;
> everything not bolded is still open.

**Decisions resolved:**
- **A. Model/provider per VM — `openrouter` (per-engineer key, never shared).** This org does not
  use Nous Portal. Hermes treats Nous as just another provider; each engineer already holds their
  own OpenRouter API key (org standard, distributed via Vaultwarden + the OpenAI Personal Key /
  AI-enablement playbook). Each VM uses that engineer's own OpenRouter key in its `.env` (0600).
  No shared model credential exists across the fleet. Backend/gateway login is username/password
  over the tailnet — no OAuth provider required since instances are not internet-exposed.
- **Provisioning target — dedicated EC2 per engineer.** Provisionally confirms the repurposed
  per-tenant pattern (mirrors planned SMB-customer-per-tenant).
- **Concurrency guards.** Worktrees isolate Git indexes, not all Unity or service resources.
  Keep existing guards until actual isolation tests and explicit owner approval support a change.
- **Per-engineer pager — replaced by a central delivery queue on `ssh EngineeringMCP`.** The L4 ×10
  fleet does NOT provision one Artemis bot per engineer. A single Artemis bot (the org's existing,
  already-installed one) delivers pages to every engineer's DM, drained from a per-engineer-keyed
  delivery endpoint on the hub (401 no-key / 403 if `engineer` ≠ key owner — same boundary as the
  pickup relay). Zero per-engineer Slack setup; message format, routing, and scopes update in one
  place. Isolation is preserved by self-only enqueue, not by bot-per-engineer. (See Decision 3 /
  pager note. L3 uses the same central pager — per-engineer bots were never viable because
  workspace app install is admin-gated, so per-engineer would mean the supervisor maintaining
  one app per engineer. Centralization is the rule from L3 onward.)
- **Skill/memory split (Decision 1) — default private; promotion is gated.** Most skills and all
  learned facts stay **per-engineer** by default. Org-wide promotion to the shared skills repo is
  deliberate and **gated**: initially only the head of engineering promotes; later (on explicit
  go-ahead) the QA automation team may also promote once ready. In practice the promote-able set is
  **skills generated by the Levelled trainings themselves** (e.g. L3 and L4 skills) — durable,
  org-general procedures — not individual experiments or learned domain facts, which remain private.
- **Worktree provisioning (Decision 2B).** Use distinct Git indexes, Unity `Library`/`Temp`
  and build-output paths, and approved mock fixtures. Verify the actual Editor/package baseline,
  measure disk use, and never copy live credentials or mutate a shared database.
- **Per-engineer GitHub identity on each VM (Decision 3) — `gh` OAuth (device flow), egress-locked
  to the engineer's live IP.** Each VM runs GitHub CLI; the engineer authenticates ONCE via
  `gh auth login` (device/browser flow — their own OAuth identity, secrets never cross chat). This
  makes the VM act exactly as the engineer: their stamp on PRs, their own repo permissions, no
  per-VM token provisioning, no 50-fine-grained-token cap. Not a Classic PAT (grab-bag, whole-account)
  and NOT a GitHub App/token (machine identity + installation-wide permissions would break
  "act as themselves" and per-engineer isolation). **Egress is locked to the engineer's live IP** via
  an IP-tracker page on `ssh EngineeringMCP` (heartbeat every minute ⇒ updates the VM's security
  group, like AlanServiceGroup; retains a few past IPs so churn-y ISPs survive while the engineer
  stays on the page). Security caveat accepted: a compromised VM = the engineer's own standing gh
  access — the SG defends cross-engineer/brute-force access, not a pop from the already-trusted IP;
  recovery is revoke/decommission (`gh auth logout` + clear `hosts.yml`) on any suspicion. FG-PAT is
  the documented fallback for "can't use `gh` / want repo-scoped".
- **Fleet admin & incident path (resolved with Decision 3).** The head of engineering (and later a
  SecOps officer) holds **ssh access to every engineer VM** for monitoring and fallback — offboarding,
  `gh auth logout`/credential-decommission on a suspicious engineer, or escalation. Offboarding/rogue
  recovery ladder: (1) revoke / `gh auth logout`; (2) ssh in to investigate/remediate; (3) **nuclear:
  terminate the EC2 instance** if no other option. Accepts that a compromised engineer machine = a
  compromise of their whole system until company-provisioned laptops land (~3 months out); interim
  controls are password managers + antivirus + IP-locked egress + this revoke/terminate ladder.
- **Secret injection (Decision 5).** An authorized Unity build worker uses the approved secret
  store and least-privilege access. Protect any environment file with OS permissions; never bake
  credentials into an image or include privileged keys, license data, or signing material in a
  player build, repository, or log. Local mock-fixture exercises do not require production keys.
- **VM scheduler (Decision 7) — one `systemd` user service runs `hermes serve` + the cron ticker
  as that engineer.** `hermes serve` is the headless backend (JSON-RPC/WebSocket gateway) that lets
  the desktop app drive the VM's agent remotely; the cron ticker keeps the L3 orchestrator firing on
  schedule. On a headless box neither survives on its own (they die with the ssh session/reboot), so
  a single `systemd` **user** service supervises both — starts at boot, restarts on crash, and runs
  **as the engineer's OS account** (their identity, their `$HOME`/env, their permissions), consistent
  with per-engineer isolation. Rationale: `serve` is long-running and must stay up for the fleet rail;
  running as the engineer (not root) avoids wrong-owner/file-ownership fights and is the security
  default. No competing schedulers — one source of supervision.
- **Decision Inbox / answer channel (Decision 8) — answers are hub-side, outbound-posting +
  polling; the IP tracker is workbench-only.** The VM orchestrator, on a novel/vague fork, writes the
  local decision file (L3 A+B unchanged) AND syncs the question OUTBOUND to the EngineeringMCP hub.
  The engineer answers on a hub page (an "Agents needing your decision" box beside the IP indicator)
  — a plain textbox, NO LLM in the decision path (cheaper and more faithful: a human answer is typed
  straight to the file, never rephrased/drifted by a model). The next orchestrator run polls the answer
  back outbound, posts it as the issue comment, and resumes. TWO separate channels: (1) the desktop
  workbench → VM goes through the VM's security group (IP-locked); (2) decision answers → hub page
  need NO VM access and work from any device/phone (hub auth only). The IP tracker therefore tracks
  workbench machines ONLY, never phone/mobile IPs — a mobile session answers questions only and never
  writes to the SG. Keep ≤5 past IPs per engineer (risk surface, not an AWS limit — an SG holds 60
  inbound + 60 outbound rules, /ENI caps are 1,000 rules / 5 SGs, so the ceiling is never the issue);
  each retained old IP is standing surface, and stale IPs should shrink on logout/terminate.
- **Instance capacity and budget (Decision 9).** Use one authorized VM for this level and
  measure the actual CPU, memory, storage, and cost of its Unity import/build workload.
  Confirm Editor licensing and platform requirements before running Unity there; if the VM
  cannot support a check, mark it blocked rather than claiming success. Keep only approved
  mock data and right-size storage from observed `Library`, build-output, and worktree usage.
- **IP strategy (Decision 10) — IP-tracker as the source of truth; no EIPs / no public ingress.**
  No elastic IPs; VMs reachable only by whitelisted live IPs, with the EngineeringMCP IP-tracker page
  as the authoritative inbound allow-list (heartbeat → SG). Access model: each engineer may reach
  THEIR OWN VM; the Director (head of engineering) holds access to ALL VMs for monitoring/fallback,
  plus a future SecOps officer (same as the Decision 3 admin-surface). Tailscale remains available as
  an outbound mesh for the workbench, but the SG/IP-tracker is the inbound gate.
- **Skills-repo propagation (Decision 13) — git pull at provision + on a deploy schedule,
  version-pinned (default, confirmed).** Instances pull the shared skills monorepo at provision and
  re-pull on a deploy schedule; the version is pinned so instances boot from a known revision (verify
  by diff, per the success criteria). No bespoke sync daemon.
- **Retire/rebuild on engineer leave (Decision 14) — supervisor takeover week, then complete wipe
  (not repurpose-with-data).** On an engineer leaving: the EM/Direct Supervisor takes over the VM for
  ~1 week to finish any in-flight updates OR submit a decision superseding them with new work, then
  the VM is **completely wiped** — deliberately NOT snapshot-and-repurpose, because a clean wipe is
  the lower risk of credential/key leakage. (Snapshot only if preservation is ever explicitly wanted;
  default is wipe.)
- **Backup (Decision 15) — periodic EBS snapshots + single-VM restore (default, confirmed).**
  Scheduled EBS snapshots per VM with a documented single-VM restore path; retention bounded (and
  reconcile with the wipe-on-leave policy — backups are for crash/fault recovery, not engineer-retain).
- **Training reporting scope (Decision 11).** Management activity packets and weekly training
  reports are not part of this curriculum. Actual project PRs still require the appropriate
  independent review and CI checks; local validation must not be presented as a substitute.
- **Dead-VM visibility (Decision 12) — surface the existing poll signal on `ssh EngineeringMCP` as a
  passive, login-viewable dashboard; no realtime paging.** The always-up relay already sees each
  engineer's polling (pickups / pager enqueue). Keep it there and expose a "fleet health / last
  polled" report dashboard on EngineeringMCP that anyone who can log in may view. It is NOT realtime
  paging — a report gauge is enough. A reasonable concern threshold: **~1 week without a poll** — it
  signals either something is broken or there is no remaining work (both worth a human look), not a
  minutes-level alarm.
- **Upgrades (Decision 16) — two-layer: a fleet-stamped stable baseline + per-engineer autonomy
  above it, rolled via config management; breaking changes are the only forced-coordination point.**
  Config management (Ansible-style, idempotent/declarative) drives a **stable baseline** — a pinned
  Hermes version and OS baseline that the head of engineering (or a future server admin) advances
  deliberately. Engineers keep **full control over their own VM above that baseline**: they may run
  whatever Hermes/OS/skills version they want, install anything, update to the latest on their own —
  the fleet playbook never stamps over their private customizations (their layer is exempt from
  fleet convergence, mirroring Decision 1 autonomy). **Skill/process rollouts are NOT force-pushed.**
  The only forced-coordination event is a **breaking / non-backwards-compatible** change: announced
  ~1 week ahead so every engineer scans their own VM for custom functionality that might break and
  gets their affairs in order, then the change is triggered centrally via config management after the
  window. Non-breaking updates ride normal per-engineer autonomy. Division of labor: head of
  engineering (and later EMs, per the Decision 11 capability-transfer goal) run the playbook — it
  keeps the kernel consistent without recreating a single bus factor.

**Still open:**
1. ~~Skill memory split~~ → **resolved: default private; promotion gated** (see resolved list above).
2. ~~Worktree strategy (Decision 2B)~~ → **resolved: isolate Unity caches, outputs, and mock
   fixtures; retain guards until tested and approved** (see resolved list above).
3. ~~Per-engineer GitHub identity on each VM~~ → **resolved: `gh` OAuth (device flow) + IP-locked
   SG egress; FG-PAT as fallback** (see resolved list above).
4. ~~Per-engineer relay key issuance on each VM~~ → **resolved:** reuse the L3 `ptk_` + admin
   issuance flow (no change).
5. ~~Secret injection~~ → **resolved: SSM → `.env` 0600 at first boot (hygiene); real security =
   per-engineer keys + budget limits + trackability, no secrets in browser** (see resolved above).
6. ~~Per-engineer pager~~ → **resolved: central delivery queue.** (See resolved list above.) Each VM
   pages through `ssh EngineeringMCP`'s single Artemis bot via a per-engineer-keyed enqueue, not a
   per-engineer bot.
7. ~~VM scheduler~~ → **resolved: single `systemd` user service runs `hermes serve` + cron ticker as
   that engineer** (see resolved above).
8. ~~Decision Inbox location + write-through~~ → **resolved: answers are hub-side (no VM access,
   phone/any-device OK); outbound post + poll; IP tracker is workbench-only, ≤5 past IPs**
   (see resolved above).
9. ~~Instance type + fleet budget~~ → **resolved: t3.large/eng, multi-project worktrees on one VM,
   ~$105/mo each ~$1,050/mo fleet** (see resolved above).
10. ~~IP strategy~~ → **resolved: no EIPs/no public ingress; IP-tracker page is the SG inbound
    allow-list; Tailscale = outbound workbench mesh** (see resolved above).
11. ~~Cross-engineer work visibility~~ → **resolved: dedicated supervisor/EM VM (Option A) reads
    GitHub directly; also a capability-transfer goal to de-risk the bus factor** (see resolved
    above).
12. ~~Dead-VM visibility~~ → **resolved: passive login-viewable fleet-health dashboard on
    EngineeringMCP reusing the poll signal; no realtime paging; ~1 week no-poll = concern**
    (see resolved above).
13. ~~Skills-repo propagation~~ → **resolved: git pull at provision + deploy schedule,
    version-pinned (default)** (see resolved above).
14. ~~Retire/rebuild a VM (engineer leaves)~~ → **resolved: supervisor takeover week, then complete
    wipe (default), not repurpose-with-data** (see resolved above).
15. ~~Backup~~ → **resolved: periodic EBS snapshots + single-VM restore (default)** (see resolved
    above).
16. ~~Upgrades~~ → **resolved: two-layer — fleet-stamped stable baseline via config management +
    per-engineer autonomy; only breaking changes force central rollout (1-wk notice then CM)**
    (see resolved above).
