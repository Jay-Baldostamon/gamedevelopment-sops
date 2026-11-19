---
name: "Day 61 - Provision the Cloud Hermes VM"
about: "Provision instance 1 from the standard template and supervise it with systemd."
title: "Day 61: Provision the Cloud Hermes VM - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 61: Provision the Cloud Hermes VM

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Provision an approved build/automation worker for the Unity project, documenting editor-version availability, disk/cache needs, license handling, and safe teardown.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Provision your **first cloud Hermes VM** from the org's standard template and stand up the single supervision point that keeps it running unattended. This is the machine that carries your L3 orchestrator from "runs on my laptop" to "always-up on the cloud." Key facts from the resolved L4 plan:

- **Instance:** `t3.large` (2 vCPU / 8 GB) per engineer, ~$105/mo — one VM per engineer runs ALL your projects as worktrees inside it (not a VM per project).
- **No public ingress:** no elastic IPs; the VM is reachable only by IP-allow-listed sources (the IP-tracker is next day).
- **Supervision:** ONE `systemd` **user** service runs both `hermes serve` (the headless remote gateway the desktop app drives) and the cron ticker (your L3 orchestrator) — as the **engineer's OS account**, not root, so ownership and isolation stay per-engineer. On a headless box neither survives on its own; one service supervises both, starts at boot, restarts on crash.
- **Auth for the desktop app** is username/password over the trusted tailnet — never expose a password-protected backend to the public internet.

## Variables to Change in the AI Prompt Before Sending

- `YOUR-INSTANCE-NAME` (e.g. `hermes-<your-handle>`)
- `YOUR-AMI-ID` (the org's standard L4 template AMI)
- `YOUR-SG-NAME` (the security group; may already exist from the template)
- `YOUR-VM-HOST` (the VM's hostname / Tailscale IP as reachable by you)
- `YOUR-ENGINEER-OS-USER` (the OS account the service will run as, e.g. `ubuntu`)
- `YOUR-HERMES-CONFIG-PATH` (path to the VM's Hermes config / profile)
- `YOUR-GATEWAY-PORT` (e.g. `9119`)
- `YOUR-CHEAP-VISION-MODEL` (a cheap vision-capable OpenRouter model id for side-task image analysis, e.g. `xiaomi/mimo-v2.6-flash` $0.12/$0.28 — see gotcha 9; note `xiaomi/mimo-v2.5` is deprecated as of 2026-10-21)

## AI Prompt

```text
Instance Name: YOUR-INSTANCE-NAME
AMI ID: YOUR-AMI-ID
Security Group: YOUR-SG-NAME
VM Host: YOUR-VM-HOST
Engineer OS User: YOUR-ENGINEER-OS-USER
Hermes Config Path: YOUR-HERMES-CONFIG-PATH
Gateway Port: YOUR-GATEWAY-PORT
Vision Model: YOUR-CHEAP-VISION-MODEL

Provision my first cloud Hermes VM from the org's standard L4 template and supervise it with a single systemd user service, then verify it is reachable from my desktop workbench.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. Provision the instance: launch YOUR-INSTANCE-NAME from YOUR-AMI-ID as a t3.large in the org's VPC with YOUR-SG-NAME, no public IP / no EIP. Tag it Owner=Engineering. Confirm it reaches running state.
2. Confirm only minimal required ports are open (Tailscale/private host reach only) and there is NO public ingress.
3. Install/verify Hermes on the VM using the current official Hermes documentation (do not assume install commands). Set up the config at YOUR-HERMES-CONFIG-PATH for the remote-gateway role.
4. Create ONE systemd USER service (running as YOUR-ENGINEER-OS-USER) that starts `hermes serve --host <VM's private/Tailscale host> --port YOUR-GATEWAY-PORT` AND your cron ticker on boot, restarts on crash, and runs as the engineer's OS account (not root). Enable it to start at boot.
5. Verify: the service is active, survives a `systemctl --user restart`, and `hermes serve` is listening on YOUR-GATEWAY-PORT bound only to the private/Tailscale interface.
6. From my desktop workbench, add the VM as a remote gateway at YOUR-VM-HOST:YOUR-GATEWAY-PORT and confirm I can reach the agent (username/password over the trusted tailnet only; never expose this to the public internet).
7. **Pin the VM's default model to the cheapest-recommended coding model RIGHT AFTER the key lands** — do NOT leave the template's default (e.g. a flagship model) running, it will burn the OpenRouter budget fast (see Gotcha 8). Once YOUR-OPENROUTER-KEY is injected, set `model.default` to the current top coding pick and install the weekly auto-sync, before doing any heavy work on the box.
8. **When creating the per-engineer OpenRouter key, set its credit-limit reset to Monthly — never "Never."** A key limit with no reset is a hard wall the VM hits mid-month with no self-recovery (real incident, instance 1: a $50/mo limit stayed exhausted after usage dropped, silently degrading the gateway). In the OpenRouter key settings choose a monthly reset cycle matching the budget (e.g. $50/mo, resets monthly), so spend pressure resets with the calendar instead of requiring manual unblocking.
9. **Pin the auxiliary vision route to a cheap vision-capable model so `vision_analyze` works (`auxiliary.vision.provider` + `.model`).** Hermes side tasks (vision, compression, web_extract, ...) do NOT ride the main conversation model — each resolves its own **auxiliary** model. The VM's main model (e.g. a deepseek chat model) is text-only, so with the default `provider: auto, model: ''` the vision task auto-resolves to the main model id and fails with `RuntimeError: No LLM provider configured for task=vision provider=auto` (verified on instance 1, 2026-10-21). Fix with the same key that lands above: `hermes config set auxiliary.vision.provider openrouter` + `hermes config set auxiliary.vision.model YOUR-CHEAP-VISION-MODEL` (cheap dedicated multimodal id like `xiaomi/mimo-v2.6-flash` at $0.12/$0.28 — the `xiaomi/mimo-v2.5` example in older notes is deprecated as of 2026-10-21 — NOT the generic `openrouter/auto` router, heavier than a single image-analysis task needs). `delegation.model` is the WRONG knob: it routes only subagents, never in-session side tasks. Verify by actually calling `vision_analyze` on a real image (config readback proves the write, not the route).

Show me: the instance launch metadata, the systemd unit file, the listening socket, the gateway connection from the desktop app, the pinned model + sync config, and a successful `vision_analyze` call result on a real image.

Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets. Do not expose any backend to the public internet. Do not use a shared model credential — my own key is injected in a later day.
```

## Proven on the supervisor's live test (gotchas)

Verified on instance 1; these bit during the E2E:

1. **`hermes serve` REFUSES to bind a non-loopback address until an auth provider is configured.** The boot log says *"no unauthenticated public-dashboard option"* and exits 1 in a loop. To bind the private/Tailscale IP (required for the desktop workbench to reach it), you must set `dashboard.basic_auth.username` + `password_hash` first. Username/password is only for a trusted LAN/VPN/Tailscale audience — never expose it publicly.

2. **The basic-auth password hash is pure-stdlib scrypt** — no Hermes dependency needed to compute it. Format: `scrypt$N$R$P$<salt_b64>$<dk_b64>` with `n=2^14, r=8, p=1, dklen=32`, 16-byte salt. Compute locally with `hashlib.scrypt(pw.encode(), salt=salt, n=16384, r=8, p=1, dklen=32, maxmem=0)`, base64 the salt and derived key.

3. **NEVER pass the scrypt hash through any shell layer — its `$` separators get eaten** by bash as positional params (`scrypt$16384$8$1$...` becomes `scrypt<...>`). `hermes config set` with an embedded `$` value also corrupts it. The reliable route: embed the hash inside a Python patch script that edits `config.yaml` directly, then base64-encode the WHOLE script and decode+run it on the box — the shell never sees a `$`.

4. **Verify the auth actually took before restarting:** grep the exact `password_hash` line from `config.yaml` and confirm it still carries the `scrypt$16384$8$1$...` separators. A mangled value reads `scrypt6384...` with `$16384$8$1$` gone.

5. **The engineer's OS user's `~/.config` gets left root-owned by this day's systemd setup**, which BLOCKS the very next day's `gh auth login` (`mkdir ~/.config/gh: permission denied`). Fix it as part of Day 61 so Day 62 starts clean: `chown <engineer>.<engineer> <home>/.config && chmod 700 <home>/.config` (keep its `systemd/` subdir owned by the engineer). Day 62 re-states this, but landing it here avoids the trap entirely.

6. **The gateway rejects your public Host unless `dashboard.public_url` is set — the desktop "connects" by IP but can never log in.** `hermes serve --host <private-IP>` binds to the private/Tailscale interface, and the dashboard's Host-header guard (`GHSA-ppp5-vxwm-4cf7`, anti-DNS-rebinding) only accepts the **bound hostname** or a host declared in `dashboard.public_url`. When the desktop adds the VM as a remote gateway at the *public* IP (e.g. `http://3.89.69.88:9119`), the app sends `Host: 3.89.69.88:9119`, which the box answers with `400 Invalid Host header` on every real endpoint — `/api/status`, `/login`, `/api/ws`. The `GET /` **root path misleadingly returns a 302** (the SPA catch-all fires before the Host check), so "reachable" looks fine while login is broken.
   - **Fix:** `hermes config set dashboard.public_url "http://<PUBLIC_IP>:<PORT>"` then **restart** `hermes.service` (two flagged/user-authorized actions). `public_url` is the documented "Remote URL `http://VM_IP:9119`" mechanism; it doubles as the OAuth redirect base, which is inert here because this gateway uses basic-auth.
   - **Verify instead of trusting a 302:** probe `/api/status` and `/login` at the public Host — both must return 200/JSON, not `400 Invalid Host header`. Confirm password auth round-trips with `POST /auth/password-login` (JSON body `{"provider":"basic","username":"...","password":"..."}`) → 200 `{"ok":true}` + session cookie, then `GET /api/auth/me` with that cookie.
   - **Note (Day 62 interaction):** the SG allow-list writing is real, but a *public-IP reachable* gateway is still only as public as its SG rules (IP-tracker workbench allow-list, no broad ingress). `public_url` does NOT open the box harder — it only tells the gateway to trust that Host.

7. **`systemctl restart hermes.service` never changes the instance's public IP.** The IP is AWS-assigned at the ENI/instance level (auto-assigned, no EIP); a process restart does not touch the network. The IP changes **only** on instance stop/start (or EIP attach). If a restart appears to "change the IP," it didn't — verify the address is unchanged rather than chasing DNS (and note the instance has no EIP, so its public IP WILL move on stop/start; there is no durable public hostname).

8. **Bake the model-pinning + weekly model sync into Day 61, not later — the default model is the cost leak.** The L4 template's `model.default` may be a flagship (e.g. `anthropic/claude-opus-4.6`) that burns the per-engineer OpenRouter budget fast with no delivery benefit. Real incident (2026-10-16, instance 1): the VM blew past a **$50/mo** OpenRouter key limit ($64.35 used) largely on model cost + an over-eager poll cadence. Two fixes to land at/right after provisioning:
   - **Pin the model as the first cost move:** after the per-engineer key is injected, set `hermes config set model.default <top-coding-pick>` (verified: `z-ai/glm-5.3-flash`, AA coding 71.5, $/MTok well under a flagship). Confirm with `hermes config get model.default`. This alone removes the flagship premium.
   - **Make it a weekly sync, single source of truth — never a second copy of the pick logic.** EngineeringMCP exposes `GET https://engineering.hurdman.com/api/llm/leader?metric=coding` (key-auth, same PendingTaskApiKey rail) returning the report's guarded value-leader computed by the SAME `eligibleForPick`/`leaderFor` code the report page uses (score floor + `:batch/:nitro/:extended/:online` endpoint exclusion). The VM polls this weekly and applies it. A one-shot script `~/.hermes/scripts/apply_top_coding_model.py` (poll → `hermes config set model.default`) registered as a no-agent cron (e.g. every Mon 04:45, after the hub's 04:00 `llm-analysis-sync`) keeps the VM on the report's pick with zero drift. TWO pitfall notes: (a) the AA indexes ride in OpenRouter's `benchmarks.artificial_analysis` and prices in `pricing` are **per-token** (×1e6 for per-MTok) — get both right if you ever reimplement, or just poll the endpoint; (b) the leader endpoint applies `eligibleForPick` guards, so it never returns a sub-floor cheap model (raw `leaderFor` will — e.g. `inclusionai/ling-3.0-flash` at coding 50.6 < 60).
   - **Set the key's credit-limit reset to Monthly, not "Never"** — a no-reset limit is a one-way wall: once spent, the key stays exhausted even when the calendar month ends, and the VM silently degrades (seen on instance 1: the $50/mo limit was never set to recycle). Monthly reset ties spend control to the budget cycle; the limit is the guardrail, not a kill switch.
   - **Match the poll cadence to real delivery volume — a 5-minute orchestrator poll is ~1,400+ requests/day even when idle.** Each 5-min orchestrator run is a multi-LLM-call agent loop (stranded scan + relay poll + decision poll + review search ≈ 5-9 requests per run × 288 runs/day ≈ 1,400-1,600/day), so it burns budget on nothing when the relay is empty. Steady-state cadence of **every 15-30m** costs ~3-6× less with no delivery loss. Proven on the same box: the request count aligned almost exactly with `170 runs × ~8.6 req` — NOT a doubled scheduler (checked: 0 duplicate same-instant fires), just the cadence. If you ever suspect "doubling," check `~/.hermes/cron/executions.db` for runs sharing the same `claimed_at` before assuming a bug.

## Game Data Lane

Use the [game-data variant](Day%2061%20-%20Provision%20the%20Cloud%20Hermes%20VM%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

