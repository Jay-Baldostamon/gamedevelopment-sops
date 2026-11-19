# 🔑 OpenRouter Personal API Key — Setup & Usage Playbook

## DEFINE

| Field | Value |
| --- | --- |
| Playbook Name | OpenRouter Personal API Key — Setup & Usage |
| Purpose | Give every engineer a personal OpenRouter API key so they can use hosted AI models (`deepseek-v4-flash`, and any other OpenRouter model) directly from their tools, scripts, and coding assistants, while keeping the company's AI spend capped and attributable per engineer. Keys are issued with a **$20/month budget** that resets monthly, and are distributed via a secure, time-limited Vaultwarden share link. |
| Owner | Alan Baldelobar |
| Last Updated | 2026-09-30 |
| Review Cycle | Every 90 days |

## Why This Matters

Your **personal OpenRouter API key** is a `sk-or-v1-…` credential that lets you call hosted AI models (`deepseek-v4-flash`, Claude, GPT, and others) directly — no per-seat software install, no waiting on a shared endpoint. It is how you build, test, and automate with AI on real tasks.

- **Budget:** every key has a **$20/month spending limit** that **resets automatically** at the start of each month.
- **Distribution:** your key is sent as a **Vaultwarden share link in Slack that auto-deletes after 7 days** — save it immediately.
- **Attribution:** your key is tied to your GitHub handle (`engineering-{yourhandle}`) so usage and cost can be tracked back to you.
- **Never shared:** each engineer has their own key; yours is personal and must not be given to teammates (see Common Mistakes).

When your monthly limit runs out, you stop getting responses until the reset — budget your heavy usage accordingly rather than expecting the key to keep working past the cap.

## Prerequisites

- [ ] You received your personal OpenRouter key via a **Vaultwarden share link in Slack** (auto-deletes after 7 days)
- [ ] You saved the key to your **Vaultwarden vault** before the share link expired
- [ ] You have a tool or terminal where you intend to use the key (VS Code custom endpoint, a script, or curl)
- [ ] You have internet access to reach `https://openrouter.ai`

---

## Step-by-Step Checklist

### Phase 1: Securely Receive and Save Your Key

1. **Open** the Vaultwarden share link sent to you in Slack (it is the one tied to your name).
2. **Immediately copy** the `sk-or-v1-…` key value from the shared item.
3. **Save it into your own Vaultwarden vault** as a new login item named e.g. `OpenRouter API Key`.
4. **Do NOT** paste the key into a chat, a commit, a `.env` you plan to commit, or any plain-text file outside your local machine.

- [ ] Share link opened
- [ ] Key copied
- [ ] Key saved to my Vaultwarden vault
- [ ] Key is **not** pasted into any shared surface

**IF the share link is already expired, THEN message @Alan** — the link auto-deletes after 7 days and a fresh one must be issued. This is expected, not a fault.

---

### Phase 2: Verify Your Key Works (Quick API Check)

1. **Open** a terminal on your machine.
2. **Run** the following against the OpenRouter API to confirm the key is valid and shows your remaining budget:

```bash
curl https://openrouter.ai/api/v1/key \
  -H "Authorization: Bearer YOUR_SK_OR_V1_KEY_HERE"
```

3. **Confirm** the response returns your key details (label `engineering-{yourhandle}`, usage, and `limit` = `20`).

- [ ] API call returned my key details
- [ ] `label` shows `engineering-{yourhandle}`
- [ ] `limit` is `20` (monthly budget)

**IF you get a `401 Unauthorized`, THEN you may have an expired or mistyped key — re-copy it from your vault and try again.**

---

### Phase 3: Use Your Key in Your Tooling

Your key works anywhere that accepts an **OpenAI-compatible** `Authorization: Bearer` header. Point the tool at OpenRouter's base URL `https://openrouter.ai/api/v1` with your key.

#### In a Script or CLI

```bash
curl https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer YOUR_SK_OR_V1_KEY_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "deepseek/deepseek-v4-flash-0731",
    "messages": [{"role": "user", "content": "Hello, confirm you are connected via OpenRouter."}]
  }'
```

- [ ] Script/CLI call returned a model response

#### In a VS Code Custom AI Endpoint

When configuring a Custom Endpoint / custom model in VS Code:

1. **Set** the endpoint URL to `https://openrouter.ai/api/v1`.
2. **Paste** your `sk-or-v1-…` key into the API Key field.
3. **Use** the OpenRouter model id (e.g. `deepseek/deepseek-v4-flash-0731`) in the model configuration.
4. **Send** a test prompt to confirm the connection.

- [ ] Endpoint URL set to `https://openrouter.ai/api/v1`
- [ ] My personal key is in the API Key field
- [ ] Test prompt returned a response

> **Tip:** Model IDs on OpenRouter are namespaced, e.g. `deepseek/deepseek-v4-flash-0731`. Copy the exact model ID from https://openrouter.ai/models rather than guessing.

---

### Phase 4: Track Your Usage and Budget

1. **Open** https://openrouter.ai and sign in.
2. **Navigate** to your API key list / usage page for `engineering-{yourhandle}`.
3. **Review** how much of your **$20 monthly allowance** you have used.
4. **Budget** heavy AI work (long batch runs, big scripts) early in the month or across days so you do not hit the cap mid-task.

- [ ] I can see my key's usage on openrouter.ai
- [ ] I know roughly how much of my $20 monthly limit I have used
- [ ] I avoid exhausting the whole budget in one long job

**IF you exhaust the monthly limit, THEN the key stops returning responses — wait for the monthly reset rather than pasting in someone else's key.**

---

## Common Mistakes & Fixes

| Mistake | Fix |
| :-- | :-- |
| Letting the Vaultwarden share link expire before saving the key | Save the key into your own vault immediately on receipt; ask @Alan for a fresh link if it expired |
| Pasting your key into a commit or shared `.env` | Keep it only in your local vault / a git-ignored local file; never commit `sk-or-v1-…` values |
| Giving your key to a teammate | Each engineer gets their own key — sharing breaks per-engineer cost attribution and the $20 budget is per person |
| Using the wrong model ID | Copy the exact namespaced ID (e.g. `deepseek/deepseek-v4-flash-0731`) from openrouter.ai/models |
| Pointing the tool at the wrong URL | Use `https://openrouter.ai/api/v1` (OpenAI-compatible), not a custom company endpoint |
| Hitting the $20 cap mid-task | Monitor usage on openrouter.ai and spread heavy work out; the limit resets monthly |
| Thinking the key's expiry is permanent | Monthly **spend** resets automatically every month — the key itself stays valid unless revoked |

---

## Success Criteria

- [ ] I received and saved my personal OpenRouter key before the 7-day share link expired
- [ ] My key is stored in my Vaultwarden vault and never committed or pasted into a shared surface
- [ ] A quick API check returns my key details with `label = engineering-{myhandle}` and `limit = 20`
- [ ] I used the key successfully in at least one tool (script/CLI, VS Code custom endpoint, or other)
- [ ] I know how to check my monthly usage and stay within my $20 budget

---

## Storage & Access

**Location:** `docs/playbooks/ai-enablement/` in this repository.

**Access:** All engineering team members who receive a personal OpenRouter key from the AI Administrator.

**Always Open Policy:** Keep this playbook open while setting up and using your key. Follow each phase in order, check each box, and update the playbook whenever a new edge case or mistake is discovered.

**Help:** If your key is missing, expired, or you hit an unexpected error, message @Alan in Slack or ask in the **engineering-support** channel.

**Next review date:** 2026-12-29

## Next review date

2026-12-29