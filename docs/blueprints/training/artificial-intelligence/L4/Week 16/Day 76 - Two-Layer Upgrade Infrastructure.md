---
name: "Day 76 - Two-Layer Upgrade Infrastructure"
about: "Build the fleet-stamped stable baseline and the scripted update path behind the Day 78 upgrade policy."
title: "Day 76: Two-Layer Upgrade Infrastructure - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 76: Two-Layer Upgrade Infrastructure

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Define a two-layer upgrade policy for the Unity editor/package baseline and build-worker tooling, with a stable tested baseline and a reversible update path.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Week 16 works with **one VM** (the multi-instance network was deferred — see `../L6/NOTES - The Network (deferred from L4).md`). Day 78 declares the **two-layer upgrade policy in effect** (Decision 16: a fleet-stamped stable baseline via config management, per-engineer autonomy above it, breaking changes as the only forced-coordination point with ~1 week notice). This day builds the machinery that makes that declaration true rather than aspirational, at fleet-of-one scale:

1. **The stamped baseline.** Make the skills monorepo pin + refreshed base AMI (Day 71) the explicit "stable baseline": a recorded, named revision pair (AMI ID + skills commit) that a fresh instance can be provisioned from and that the running instance can be compared against.
2. **The hub stability table as arbiter.** `engineering.hurdman.com` hosts a table of `revision → {status: stable | testing | revoked, stamped_by, date}`; the pilot stamps the initial `stable` row manually (fleet-of-one — there is no one else to stamp it). VMs do not decide locally: the update script polls this table before applying anything and upgrades only when the table marks the target revision `stable`. A table that is unreachable or returns an unexpected shape must fail SAFE (refuse the upgrade, report, stay on baseline).
3. **The scripted update path.** One script, run on the VM, that: polls the stability table, fetches the skills repo, reports current HEAD vs baseline, applies the update, revives the Day-61 systemd service, and reports what changed. Dry-run mode first. Rehearsed, not just written.
4. **Failed-state service revival (documented, inspect-only).** The most common post-upgrade failure mode is not a crash loop — `Restart=on-failure` already covers those — but a unit that exhausted its start-rate limit and sits in `failed` state. Recovery is `systemctl --user reset-failed hermes.service && systemctl --user start hermes.service` (idempotent; start on an active unit is a no-op, and the ExecStartPre refetch of boot secrets is why the manual start usually succeeds where the exhausted loop failed). The update script's restart step does this instead of a bare restart and logs the pre/post unit state. No standalone watchdog timer is required at fleet-of-one; the hub's fleet-health polls already detect a down service.
5. **The breaking-change process.** Rehearse a harmless baseline change in an explicitly authorized environment, verify it, and confirm the private layer remains untouched. Treat the notice period as simulated; a real breaking change still needs actual advance notice.

Day 79 uses local observations to evaluate the tradeoff. Day 80 validates the Unity project locally.

**Honest scope note:** the full poll → decide → upgrade flow against a genuinely NEWER release cannot be exercised while the VM already runs the latest version. This day verifies the pieces that are verifiable (table endpoint exists and returns the expected shape; the script reads it and refuses when status ≠ `stable`; the sample change is rehearsed end-to-end) and explicitly marks the upgrade-via-table happy path as rehearsed-via-sample-change, not exercised against a real release.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-INSTANCE-NAME`
- `YOUR-SKILLS-MONOREPO-URL`
- `YOUR-SKILLS-PINNED-REVISION` (the current stable baseline revision)
- `YOUR-BASELINE-AMI-ID` (from Day 71's refresh)
- `YOUR-SAMPLE-CHANGE` (a harmless baseline change to rehearse with, e.g. a doc-only skills update)
- `YOUR-HUB-STABILITY-URL` (the engineering.hurdman.com endpoint serving the revision stability table)
- `YOUR-HERMES-SERVICE-UNIT` (e.g. `hermes.service`)

## AI Prompt

```text
Instance Name: YOUR-INSTANCE-NAME
Skills Monorepo URL: YOUR-SKILLS-MONOREPO-URL
Stable Baseline Revision: YOUR-SKILLS-PINNED-REVISION
Baseline AMI ID: YOUR-BASELINE-AMI-ID
Sample Change: YOUR-SAMPLE-CHANGE
Hub Stability URL: YOUR-HUB-STABILITY-URL
Hermes Service Unit: YOUR-HERMES-SERVICE-UNIT

Build the two-layer upgrade infrastructure for my VM (fleet of one).

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Record the stamped baseline: YOUR-SKILLS-PINNED-REVISION + YOUR-BASELINE-AMI-ID, written to a baseline file on the VM and echoed to the run log. Confirm `git rev-parse HEAD` on the local skills checkout equals the pin right now.
2. The hub stability table is the arbiter: YOUR-HUB-STABILITY-URL serves revision → status (stable | testing | revoked, stamped_by, date). I have stamped the initial stable row. Do NOT decide locally: the update script must poll this table before applying anything and upgrade only when the table marks the target revision stable. If the table is unreachable or returns an unexpected shape, the script must fail SAFE: refuse the upgrade, report, stay on baseline.
3. Write the update script: poll the stability table first; then fetch the skills repo, diff HEAD vs the baseline revision, apply the update (default), revive the Day-61 systemd user service, report files changed and service status. Include a --dry-run mode that reports without changing anything. Store it with the VM's other operational scripts.
4. Service revival semantics: the unit uses Restart=on-failure, so crash loops self-heal; the common post-upgrade failure is instead a start-rate-limited unit sitting in `failed` state. The script's restart step must use `systemctl --user reset-failed YOUR-HERMES-SERVICE-UNIT && systemctl --user start YOUR-HERMES-SERVICE-UNIT` (idempotent; the ExecStartPre boot-secret refetch is why this succeeds where the exhausted loop failed) and log pre/post unit state. Do NOT install a standalone watchdog timer; the hub's fleet-health polls already detect a down service. Document these semantics in the run log — inspect-only, no timer.
5. Test the script's dry-run mode against the current state (should report "at baseline" or the actual delta, plus the table's verdict) — verify by output, not claim.
6. With explicit authorization, rehearse YOUR-SAMPLE-CHANGE in an approved environment, verify the service restarted and the change landed, then record the new operational baseline. Label the notice period simulated rather than claiming advance notice occurred. A real breaking change still requires the actual notice period. Note that the current-release path is a rehearsal, not proof of an upgrade to a newer release.
7. Show the autonomy layer is intact: one per-engineer-private skill or memory file, untouched by the update, still readable and still private (not pushed to the shared repo).
8. Confirm the failure path: what the script does when the fetch fails, the table is unreachable/marks the revision not-stable, or the service fails to restart (rollback or clear failure state — pick one, implement it, and demonstrate it once).

Show me: the baseline record, the table poll output with the script's verdict, the script + dry-run output, the rehearsed update with its notice and verification, the untouched private layer, and the demonstrated failure path.

Do not force-push or rewrite shared history. Do not push per-engineer private content to the shared repo. Do not take destructive action.
```

## Game Data Lane

Use the [game-data variant](Day%2076%20-%20Two-Layer%20Upgrade%20Infrastructure%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.
