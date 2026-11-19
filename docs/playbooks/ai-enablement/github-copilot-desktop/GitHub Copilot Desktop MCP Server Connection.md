# 🔌 GitHub Copilot Desktop MCP Server Connection Playbook

## DEFINE

| Field | Value |
| --- | --- |
| Playbook Name | GitHub Copilot Desktop MCP Server Connection Playbook |
| Purpose | Standardize how team members add an MCP server in GitHub Copilot Desktop and authenticate it using the `x-api-key` header. |
| Owner | AI Enablement Team |
| Last Updated | 2026-07-15 |
| Review Cycle | Every 90 days |

## Prerequisites

- [ ] You are signed in to GitHub Copilot Desktop
- [ ] You have the MCP server URL
- [ ] You have the API key from the Engineering Chief Architect

## Step-by-Step Checklist

### Phase 1: Open MCP Server Settings

1. **Open** GitHub Copilot Desktop.
2. **Click** the **cog icon** at the lower-left corner (**red box**).
3. In Settings, **click** **MCP servers** in the left panel (**orange box**).
4. In the MCP servers page, **click** **Add server**.

- [ ] Settings opened
- [ ] MCP servers page opened
- [ ] Add server form opened

**![][image1]**

---

### Phase 2: Configure the Server

1. **Set** a clear **Server name** (example: `engineering-mcp`).
2. **Set** transport to **HTTP**.
3. **Paste** the MCP endpoint URL in **URL** (example: `https://mcp.hurdman.com/mcp`).

- [ ] Server name entered
- [ ] HTTP selected
- [ ] URL entered

---

### Phase 3: Add Authentication Header (`x-api-key`)

1. In **Headers**, **click** **Add header**.
2. **Enter** header name: `x-api-key`.
3. **Enter** header value: the API key provided by the **Engineering Chief Architect**.
4. **Click** **Save**.

- [ ] `x-api-key` header added
- [ ] API key value entered
- [ ] Server saved

**IF connection fails, THEN re-check the URL, key value, and that HTTP is selected before escalating.**

---

## Verification

1. Confirm the server appears under **Configured servers**.
2. Open a new chat/session and verify MCP-backed tools are available.

- [ ] Server listed in Configured servers
- [ ] MCP tools visible in session

## Common Mistakes & Fixes

| Mistake | Fix |
| --- | --- |
| Adding header name with wrong casing or typo | Use exact header name: `x-api-key`. |
| Using an outdated key | Request a fresh key from the Engineering Chief Architect. |
| Wrong transport selected | Set transport to **HTTP** for this endpoint. |
| Wrong endpoint path | Use the exact MCP URL provided by the platform owner. |

## Success Criteria

- [ ] Team member can open Settings → MCP servers and add a new server
- [ ] `x-api-key` header is configured correctly
- [ ] Server saves successfully and MCP tools are available in-session

[image1]: /resources/images/github-copilot-mcp.png
