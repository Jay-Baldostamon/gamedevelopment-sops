# 🔐 Vaultwarden Password Manager — Team Setup & Compliance Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Vaultwarden Password Manager — Team Setup & Compliance |
| Purpose | Move every team member onto an approved password manager for work credentials before the Cyber Security Insurance compliance deadline, either by joining the self-hosted company Vaultwarden instance at `identity.hurdman.com` or by using an already-approved personal/professional manager. This playbook exists because the rollout is company-wide, timeboxed, and verification must be consistent so compliance is provable in the admin dashboard. |
| Owner | Alan Baldelobar |
| Last Updated | 2026-09-23 |
| Review Cycle | Every 90 days |

## Why This Matters
The company is required to use an approved password manager for work-related credentials to comply with our **Cyber Security Insurance** policy. Storing passwords in plain-text files, relying on browser auto-fill without a master password, or re-using simple passwords is an unacceptable security risk.

- **Compliance Deadline:** October 1st
- **Recommended option:** Self-hosted company vault at `identity.hurdman.com` (Vaultwarden, free and company-controlled)
- **Allowed alternative:** An existing approved manager (Bitwarden, 1Password, Dashlane, Norton, etc.)

Every team member must complete setup **before October 1st**.

## Prerequisites
- [ ] You have a **@hurdman.net** company email address
- [ ] You have a supported browser installed (Firefox or any Chromium-based browser such as Chrome, Edge, or Brave)
- [ ] You can reach `identity.hurdman.com` from your network
- [ ] You have access to the **engineering-support** channel (for the Vaultwarden invite route)
- [ ] You know your company login credentials for any work accounts you use daily

---

## Step-by-Step Checklist

### Phase 1: Choose Your Route

1. **Decide** which option you will use:
   - **Option A (Recommended):** Self-hosted company Vaultwarden at `identity.hurdman.com`.
   - **Option B:** An existing approved manager you already trust (Bitwarden, 1Password, Dashlane, Norton, etc.).

   **IF** you already actively use a reputable password manager **THEN** Option B is the faster path. **IF** you want a free, company-controlled vault that auto-marks you compliant, **THEN** choose Option A.

2. **Pros and cons for the team:**
   | Option | Pros | Compliance verification |
   | :-- | :-- | :-- |
   | A — Vaultwarden (recommended) | Free, company-controlled, auto-marks you compliant when the invite activates | Automatic via admin dashboard |
   | B — Existing manager | No new tool to learn, keeps your current workflow | Manual — send a redacted screenshot to @Alan |

---

### Phase 2 (Option A): Join the Company Vaultwarden

1. **Send a request** in the **engineering-support** channel asking to have your **@hurdman.net** work email invited into the Vaultwarden instance at `identity.hurdman.com`.
2. **Wait** for the invite email from Vaultwarden. **IF** it does not arrive within **1 business day**, **THEN** follow up in engineering-support.
3. **Open** the invite link in your browser (or open the web vault directly at `https://identity.hurdman.com`).
4. **Create** your master password. Use a long, unique passphrase you can remember — it is the encryption key for your entire vault and **cannot be recovered** by support.
5. **Confirm** your account is active and you can sign in at the web vault.
   - Account activation **automatically marks you as compliant** in the admin dashboard — no further verification step needed.

---

### Phase 3 (Option A): Install the Browser Extension

1. **Open** the extension page for your browser:
   - **Firefox:** [Bitwarden Password Manager](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/)
   - **Chromium (Chrome/Edge/Brave):** [Bitwarden Password Manager](https://chromewebstore.google.com/detail/bitwarden-password-manage/nngceckbapebfimnlniiiahkandclblb)
2. **Add** the extension to your browser.
3. **Open** the extension (click the icon in your browser toolbar).
4. **Select** the **self-hosted** option when prompted for the server type.
5. **Enter** the **Server URL**: `https://identity.hurdman.com`
   - **Do NOT** fill in the other custom "environment" suffix fields (API, Identity, Notifications) unless forced — the single Server URL is sufficient.
6. **Sign in** with your **@hurdman.net** email and the master password you created in Phase 2.
7. **Verify** the extension connects to the vault and you can see your logins.

**IF** the extension shows an auth/sync error after entering the Server URL, **THEN** re-check that the Server URL is exactly `https://identity.hurdman.com` (no trailing `/api`), then ask in engineering-support.

---

### Phase 4 (Option A): Migrate Passwords Into the Vault

1. **Open** the vault (extension or web vault at `https://identity.hurdman.com`).
2. **Add** each work credential as a login item, or **import** them from your browser/current storage using the vault's import tool.
3. **Replace** any weak or re-used passwords with strong ones using the built-in generator (long, random, unique per site).
4. **Enable** the extension's auto-fill so your saved logins populate on the sites you use.
5. **Verify** each critical work site you use autofills correctly.

**Refuse to store work credentials in plain text** — if a login is not in your manager, it is not compliant.

---

### Phase 5 (Option B): Use an Existing Approved Manager

1. **Confirm** your existing manager is one of the approved tools (Bitwarden, 1Password, Dashlane, Norton, or another reputable dedicated manager).
2. **Take** a screenshot of your **active browser extension** or your **work vault folder** showing it is in use.
3. **Redact** any sensitive details (actual passwords, personal data, or non-work items) in the screenshot.
4. **Send** the redacted screenshot as a **direct message to @Alan** to confirm compliance.
5. **Verify** with @Alan that you are marked compliant.

**IF** you are not certain your current tool qualifies, **THEN** ask in engineering-support before the deadline rather than assuming.

---

### Phase 6: Verify Compliance

- [ ] You are signed into your chosen manager with a strong master password
- [ ] Your work credentials are stored in the manager (not in plain text)
- [ ] If **Option A:** your @hurdman.net account is active in the Vaultwarden web vault (auto-marks you compliant in the admin dashboard)
- [ ] If **Option B:** you have sent @Alan a redacted screenshot and received confirmation
- [ ] Browser extension auto-fill works on at least one work site

---

## Common Mistakes & Fixes
| Mistake | Fix |
| :---- | :---- |
| Filled in all the "custom environment" fields instead of just the Server URL | Only set **Server URL** = `https://identity.hurdman.com`; leaving extra suffix fields wrong breaks auth |
| Entered the Server URL with `/api` or a trailing slash | Use exactly `https://identity.hurdman.com` with **no** suffix |
| Used a weak or short master password | Set a long unique passphrase — it is your vault's encryption key and is not recoverable if lost |
| Signed up to Vaultwarden with a personal email instead of **@hurdman.net** | Use only your **@hurdman.net** email so you are matched to the company org and marked compliant |
| Sent an un-redacted screenshot for Option B | Redact all passwords and personal data before sending to @Alan |
| Kept work passwords in plain text or browser-only autofill | Move all work credentials into your approved manager; plain-text storage is non-compliant |
| Missed the deadline | Complete setup before **October 1st** and follow up if verification is unconfirmed |

---

## Success Criteria
- [ ] Every team member has an approved password manager configured **before October 1st**
- [ ] Option A users are active in the Vaultwarden vault and auto-marked compliant
- [ ] Option B users have supplied a redacted screenshot and been confirmed compliant by @Alan
- [ ] Work credentials are stored in the manager and auto-fill on work sites
- [ ] No team member relies on plain-text files or re-used simple passwords for work credentials

---

## Storage & Access
**Location:** `docs/playbooks/platform-infrastructure/` in this repository.

**Access:** All engineering team members (the rollout is company-wide and is referenced from Engineering Onboarding and general security onboarding).

**Always Open Policy:** Keep this playbook open and visible during setup. Follow each phase in order, check each box, and update the playbook whenever a step, mistake, or edge case is discovered.

**Help:** If you need help migrating passwords or setting up Vaultwarden, reach out in the **engineering-support** channel.

**Next review date:** 2026-12-22

## Next review date
2026-12-22