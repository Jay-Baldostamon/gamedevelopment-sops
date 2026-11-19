# 🖥️ GitHub Copilot Desktop Installation and Setup Playbook

## DEFINE

| Field | Value |
| --- | --- |
| Playbook Name | GitHub Copilot Desktop Installation and Setup Playbook |
| Purpose | Standardize how team members install the GitHub Copilot desktop app, sign in with GitHub, connect projects, and select the right session setup for daily engineering work. |
| Owner | AI Enablement Team |
| Last Updated | 2026-06-29 |
| Review Cycle | Every 90 days |

## Prerequisites

- [ ] You have a paid GitHub Copilot plan
- [ ] If you use Copilot Business or Enterprise, your admin enabled the Copilot CLI policy
- [ ] Git is installed on your machine
- [ ] You can sign in to your GitHub account

## Step-by-Step Checklist

### Phase 1: Install the GitHub Copilot Desktop App

1. **Open** the GitHub Copilot desktop download page: https://github.com/features/ai/github-app  
2. **Download** the installer for your operating system (macOS, Linux, or Windows).  
3. **Run** the installer and complete installation.  
4. **Launch** the GitHub Copilot app.

- [ ] Download page opened
- [ ] Correct installer downloaded
- [ ] App installed
- [ ] App launched

**IF installation is blocked by device policy, THEN contact IT or your administrator before continuing.**

---

### Phase 2: Sign In and Connect Your GitHub Account

1. **Click** **Sign in to GitHub** in the app.  
2. **Complete** browser authentication and authorize the app.  
3. **Return** to the app after successful sign in.  
4. **If using GitHub Enterprise Server**, choose **Use GitHub Enterprise** and enter your server URL.  
5. **Complete** the onboarding prompts (theme and initial repository selection, or skip and add later).

- [ ] GitHub sign in completed
- [ ] App authorized
- [ ] Onboarding finished

**IF sign in fails, THEN confirm your Copilot plan access and organization policy settings.**

---

### Phase 3: Add a Project

1. **Click** the **+** button beside **Sessions**.  
2. Under **Add project from**, choose one source type:  
   - **Local folder or repository**
   - **GitHub repository**
   - **Repository URL**
3. **Select** the target project and let the app finish setup.

- [ ] Project source type selected
- [ ] Repository/folder linked
- [ ] Project visible in Sessions

#### Source Type Differences

| Option | What it means | Best use |
| --- | --- | --- |
| Local folder or repository | Use code already on your machine (existing folder or cloned repo). | You already have the project locally and want immediate work. |
| GitHub repository | Pick from GitHub and clone directly through app integration. | Standard GitHub-hosted repos in your account/org. |
| Repository URL | Clone using any Git URL. | Non-GitHub remotes, private mirror URLs, or direct URL-based clone flow. |

---

### Phase 4: Start a Chat or Session

1. **Use Quick chats** (sidebar) for brainstorming without creating a branch/worktree.  
2. **Use Sessions** when you want the agent to change code in an isolated workspace.  
3. **Choose** mode and runtime location before sending your main task prompt.

- [ ] Quick chat flow understood
- [ ] Session flow understood
- [ ] Mode selected
- [ ] Runtime location selected

---

## Quick Feature Summary (GitHub Copilot App)

### Chats (What are chats?)

- **Quick chats** are lightweight, saved conversations for Q&A and idea exploration.
- They do **not** create a dedicated branch or worktree.
- Use quick chats to clarify scope before opening a coding session.

### How to Add a Project

1. Click **+** beside **Sessions**.
2. Choose **Local folder or repository**, **GitHub repository**, or **Repository URL**.
3. Select the target and wait for setup to complete.

### Session Mode Differences

| Mode | Behavior | When to use |
| --- | --- | --- |
| Interactive | Collaborative flow; agent suggests and waits for your input frequently. | You want tight steering and frequent checkpoints. |
| Plan | Agent proposes a plan first; you approve before execution. | You want to validate scope/approach before code changes. |
| Autopilot | Agent runs autonomously (implements, tests, iterates) with minimal prompts. | Task is clear and you want maximum automation. |

### Where Session Is Running: Differences

| Location | What runs where | Tradeoff |
| --- | --- | --- |
| New worktree | Isolated local git worktree + branch for the session. | Safest local isolation for parallel tasks. |
| Local repository | Works directly in your selected local repo checkout. | Fastest if you intentionally work in an existing checkout; less isolation. |
| Cloud | Runs in GitHub-hosted cloud sandbox (public preview). | Offloads local compute and enables device-independent continuation; usage-governed and preview constraints apply. |

## Success Criteria

- [ ] GitHub Copilot desktop app is installed from the official download page
- [ ] GitHub account sign-in is complete and working
- [ ] At least one project is connected
- [ ] Team member can explain source-type options and mode differences
- [ ] Team member can choose between new worktree, local repo, and cloud runtime for a session
