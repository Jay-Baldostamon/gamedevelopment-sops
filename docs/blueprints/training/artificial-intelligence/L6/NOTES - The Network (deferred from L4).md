# NOTES: The Network (deferred from L4)

> **Status: notes, not a blueprint.** This is a record of thinking as of 2026-10-20. There is no L6 blueprint yet. L5 has not been decided either — the leading candidate is a "manual" SDLC theme (deliberately low-automation: the engineer drives every step, Hermes assists). Nothing here is committed scope.

## What was deferred, and why

L4 as originally drafted (Weeks 15–16) assumed the month's second half would multiply the single cloud VM into a network: instances 2, 3, then ~10, sharing one org brain with isolated per-engineer identity. In October 2026 we decided to **defer the whole multi-instance theme to a later level (~L6)** so engineers get real usage time on a single cloud VM first. The multi-instance material is preserved below and in git history — it was already written, so L6 starts from drafted content, not a blank page.

Reasons, in the words of the decision:

- Cloud-based development is new to the team; one VM per engineer is already a big change. Multiply before anyone is comfortable operating one and the failure modes compound.
- The peer-coordination prerequisites kept not being ready in practice: Day 70's cross-engineer half ran as verified-by-construction because no peer instance was available.
- The fleet cost line (~$1,050/mo for ten t3.large) disappears from L4's scope; per-instance cost is measured for real first (Day 71's actual-cost report grounds the eventual extrapolation).

## Deferred content (from L4 Weeks 15–16 as originally drafted)

Moved wholesale or in part to L6:

1. **Spin instances 2 and 3** (former L4 Week 15 Day 71) — provision per-engineer instances from a standard template AMI; shared skills monorepo pinned at provision; per-engineer `gh` identity via device flow; private per-engineer memory repos (never shared); Day-61 systemd user service per instance; IP-tracker workbench registration + SG allow-list; per-engineer relay pickup isolation (401 no-key / 403 wrong-owner). Full original text: git history of `Week 15/Day 71 - Spin Instances 2 and 3.md` (+ DB Lane).
2. **Cross-instance isolation verification** (former cross-instance half of L4 Week 15 Day 75) — instance A cannot read instance B's memory, keys, or diffs; org brain is the only shared surface. The within-VM half stayed in L4.
3. **Scale to ~10 instances** (former scale half of L4 Week 16 Day 76) — fleet budget (~$1,050/mo, Savings Plan → ~$800–900), one VM per engineer, all projects as worktrees inside it, fleet-health registration. The backup/restore half stayed in L4 (moved to Day 71) and the upgrade machinery stayed (now Day 76).
4. **Fleet framing** of the surrounding days — fleet-wide health dashboard, network-wide unattended rehearsal, fleet metrics in the retrospective. The single-VM versions stay in L4; the fleet dimension re-enters at L6.

## What L6 inherits (already proven at single-VM scale by then)

The L6 prerequisites will already exist from L4's single-VM month: hub-side deterministic claiming, per-engineer relay keys, worktree-per-job allocation with collision tracking, snapshot/restore, a stamped baseline AMI + skills pin (Day 71 refresh), and the two-layer upgrade machinery (Day 76). The network day then *multiplies a proven unit* instead of debugging isolation while inventing it — which is genuinely easier than it looked from L4's perspective.

## Open questions for when L6 is designed

- Level ordering: does the network land at L6, or does something else? Depends on what L5 turns out to be ("manual" SDLC is the current candidate — decided separately).
- Instance count: the old draft said ~10; revisit against actual per-instance cost data by then.
- Peer onboarding: the first fleet members may be the L4 graduates themselves — the "peer instance" problem that blocked Day 70's cross-engineer half may resolve simply by having cohort-mates finish L4.
- Fleet-health dashboard and wipe-on-leave policies scale-check against real headcount, not the draft's assumptions.
