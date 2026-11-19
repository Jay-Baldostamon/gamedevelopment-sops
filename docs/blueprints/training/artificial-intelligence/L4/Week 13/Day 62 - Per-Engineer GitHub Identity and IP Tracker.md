---
name: "Day 62 - Per-Engineer GitHub Identity and IP Tracker"
about: "Authenticate the VM as yourself via gh device flow and configure the IP tracker."
title: "Day 62: Per-Engineer GitHub Identity and IP Tracker - <Engineer Name> - <YYYY-MM-DD>"
labels: "training"
assignees: ''
---

# Day 62: Per-Engineer GitHub Identity and IP Tracker

## Unity Game-Development Assignment

**Project baseline:** Continue one desktop 2D action-platformer in C# using the current Unity LTS release. Keep the game, repository, and issue history continuous across days.

**Unity outcome for this day:** Set up per-engineer identities and access records for the Unity repository and build services; grant only the permissions needed for assigned work.

**Validation and scope:** Use the Unity Editor, Play Mode, Unity Test Framework, and a desktop build when relevant to the task. Inspect actual results locally and identify any unavailable checks or blockers. Preserve scene, prefab, and `.meta` references; keep changes within authorized task scope; never commit secrets, licensed private assets, or generated `Library`/`Temp` output. Use approved mock game data, not unrelated production systems. Actual PRs still require the appropriate authorization, CI checks, and independent human review. No training reports or supervisor sign-offs are required.

## Description

Give the VM **your** GitHub identity and lock its egress to **your live IP**. This is what makes a cloud VM "act exactly as the engineer" — its own stamp on PRs, its own repo permissions, no per-VM token provisioning, no shared credential. From the resolved L4 plan:

- **`gh` OAuth (device flow), once per engineer on the VM.** You authenticate interactively via `gh auth login` (device/browser flow) — your own OAuth identity; secrets never cross chat. This is NOT a Classic PAT (whole-account grab-bag) and NOT a GitHub App/token (machine identity would break "act as yourself" and per-engineer isolation). FG-PAT is the documented fallback only for "can't use `gh` / want repo-scoped."
- **Egress is locked to your live IP** via the **IP-tracker page on EngineeringMCP**: it heartbeats every minute and updates the VM's security group (like AlanServiceGroup), retaining a few past IPs so churn-y ISPs survive while you stay on the page.
- **Security caveat (accepted):** a compromised VM = your own standing gh access; the SG defends cross-engineer/brute-force access, not a pop from an already-trusted IP. Recovery is revoke/decommission (`gh auth logout` + clear `hosts.yml`) on any suspicion.
- The IP-tracker tracks **workbench machines only**, never phone/mobile IPs; keep ≤5 past IPs per engineer (standing surface, shrinks on logout/terminate).

## Variables to Change in the AI Prompt Before Sending

- `YOUR-GITHUB-HANDLE`
- `YOUR-VM-HOST`
- `YOUR-IP-TRACKER-URL` (the EngineeringMCP IP-tracker page / its update endpoint)
- `YOUR-WORKBENCH-CURRENT-IP` (your live IP to allow-list first)
- `YOUR-PAST-IP-LIMIT` (default 5)

## AI Prompt

```text
GitHub Handle: YOUR-GITHUB-HANDLE
VM Host: YOUR-VM-HOST
IP Tracker URL: YOUR-IP-TRACKER-URL
Current Workbench IP: YOUR-WORKBENCH-CURRENT-IP
Past IP Limit: YOUR-PAST-IP-LIMIT

Make my cloud VM act as me on GitHub and lock its egress to my live IP.

First, repeat all values. If any still contains a YOUR- placeholder or is unclear, stop and ask me to replace it.

Then:
1. On the VM, run `gh auth login` and complete the DEVICE/BROWSER flow yourself (my interactive OAuth identity; never paste or log any token). Confirm `gh auth status` shows MY handle YOUR-GITHUB-HANDLE and a token with repo + read:org scope. Do NOT use a Classic PAT and do NOT install a GitHub App/token for this.
2. Confirm the VM's `~/.config/gh/hosts.yml` exists but you do NOT print, log, or commit it.
3. Register YOUR-WORKBENCH-CURRENT-IP in the IP-tracker (YOUR-IP-TRACKER-URL) as my workbench machine, and confirm it updates the VM's security group to allow-list that IP. Keep at most YOUR-PAST-IP-LIMIT past IPs (default 5) — each retained old IP is standing surface and should shrink on logout/terminate.
4. Confirm the IP-tracker page marks my IP as a WORKBENCH machine (not a phone/mobile IP) — mobile sessions answer decisions only and never write to the security group.
5. From the VM, verify `gh api user --jq .login` returns YOUR-GITHUB-HANDLE, proving the VM is me.
6. Verify egress: the VM can reach GitHub only while my IP is allow-listed; confirm the security group has no broad public ingress and no other engineer's IPs.

Show me: `gh auth status` output (handle + scopes, redacting any token value), the IP-tracker entry, the security-group allow-list, and the `gh api user` verification.

Do not print, paste, commit, or log passwords, API keys, tokens, cookies, SSH private keys, or other secrets. Do not widen the security group beyond my workbench IPs. Do not take destructive action.
```

## Proven on the supervisor's live test (gotchas — do these in this order)

Verified 2026-10-14 on instance 1; each of these blocked the day until handled. Bake them into the run, don't discover them again:

1. **Install `gh` first — the bare AMI has NO `gh`.** `which gh` came up empty on the freshly-provisioned box. Install as root: `sudo apt-get update && sudo apt-get install -y gh` (candidate `gh` is in the Ubuntu 26.04 amd64 apt repos — no third-party repo needed). Confirm with `gh --version`.

2. **`/home/ubuntu/.config` is root-owned right after Day 61** (the systemd user setup left the parent owned by root), so `gh auth login` fails with `mkdir /home/ubuntu/.config/gh: permission denied` even though the browser code was accepted. Fix BEFORE auth: `sudo chown ubuntu:ubuntu /home/ubuntu/.config && sudo chmod 700 /home/ubuntu/.config` (leave the `systemd/` subdir it already owns alone). Then re-run `gh auth login`.

3. **Run the flow as the ENGINEER OS USER (`ubuntu`), not root.** The token must land in `/home/ubuntu/.config/gh/hosts.yml` — the `hermes.service` gateway runs under `ubuntu`, and a root-owned token is useless to it. `gh auth status` must show the config path under the engineer user's home.

4. **The interactive browser step belongs in the engineer's own SSH session, not relayed through SSM.** `AWS-RunShellScript` over SSM does not stream the interactive prompt and gh's "Press Enter to open browser" hangs with no TTY. Have the engineer **ssh into the box themselves** and run the flow — they complete the one-time code in their workbench browser either way, so the human step is identical and far less fiddly.

5. **The local SSH key filename does not have to match the EC2 key-pair label.** The box's `authorized_keys` carried the public key tagged `hurdmanec2`, but the local PEM lived at `C:/Users/lordk/Documents/.ssh/hurdmantest-ec2.pem` (same RSA key, different label). Instead of guessing, match by public key: `ssh-keygen -y -f <local.pem>` and compare to `authorized_keys`. Use a native forward-slash path, e.g. `-i C:/Users/lordk/Documents/.ssh/hurdmantest-ec2.pem`.

6. **The SG must allow your workbench IP before `ssh`/`gh` can reach the box at all** — this is the IP-tracker's job (register via the page first, then the reconcile adds your `/32`).

7. **Requesting GitHub Copilot review via the REST API uses `copilot-pull-request-reviewer[bot]`, NOT `copilot`.** Verified on PR #3654 (2026-10-16): requesting the reviewer login `copilot` via `POST /pulls/{n}/requested_reviewers` returns HTTP 200 but is a **silent no-op** — GitHub accepts the call and adds nothing. The correct login is `copilot-pull-request-reviewer[bot]`, which returns `201 Created` and actually requests Copilot. Two verification gotchas on top: (a) Copilot is a **bot, not a user**, so it never appears in `requested_reviewers.users` — an empty users list does NOT mean the request failed; confirm via the issue timeline (`GET /issues/{n}/timeline` shows `review_requested` with `requested_reviewer.login == "Copilot"`), and (b) your octokit/REST client must send the reviewers as a real JSON array — `gh api --field reviewers='["..."]'` stringifies it and 422s; use `--input -` with a JSON body. This is the reviewer for the L4 executive-override path (single-engineer E2E, Copilot reviews instead of the supervisor); the normal path keeps the supervisor, so don't wire Copilot there.

### Concrete: SSH in and authenticate gh (what the engineer does)

    # from the workbench — note the real .pem filename (see gotcha 5)
    ssh -i C:/Users/lordk/Documents/.ssh/hurdmantest-ec2.pem ubuntu@<VM_PUBLIC_IP>

    # once inside, as ubuntu
    gh auth login --hostname github.com --git-protocol https
    #   choose:  GitHub.com -> HTTPS -> Login with a web browser
    #   enter the one-time code shown into https://github.com/login/device

    # verify the VM IS the engineer (all three should hold)
    gh auth status                 # account = alanoutrank, config under /home/ubuntu/.config/gh
    gh api user --jq .login        # prints the handle
    cat /home/ubuntu/.config/gh/hosts.yml   # exists; NEVER print/log the token value

## Game Data Lane

Use the [game-data variant](Day%2062%20-%20Per-Engineer%20GitHub%20Identity%20and%20IP%20Tracker%20-%20DB%20Lane.md) for this day. Work only with approved mock game data and do not mutate a live schema.

