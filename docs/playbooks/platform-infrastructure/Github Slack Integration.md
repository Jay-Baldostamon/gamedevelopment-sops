# 🔔 GitHub + Slack Integration Setup Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | "Stay in the Loop: GitHub-to-Slack Notifications" |
| Purpose | To set up and configure the GitHub integration for Slack so that repository activity (issues, pull requests, commits, releases, deployments) is automatically posted to a designated Slack channel. |
| Owner | Alan Baldelobar |
| Last Updated | 2026-04-09 |
| Review Cycle | Every 90 days |

## Prerequisites
Before starting, ensure you have:

- [ ] Admin permissions in the Slack workspace (for initial app install) OR the GitHub app is already installed in the workspace  
- [ ] A GitHub account with access to the repository you want to subscribe to  
- [ ] A dedicated Slack channel created for notifications (e.g., \#projectname-dev-tracker)  
- [ ] The owner/repo name of the GitHub repository (e.g., hurdman/simplabots)

---

## Step-by-Step Checklist
### Phase 1: Install the GitHub App in Slack

1. **Check if the GitHub app is already installed** in your Slack workspace by typing /github help in any channel.  
     
   - **IF** you get a response with available commands, **THEN** skip to Phase 2\.  
   - **IF** you get no response, **THEN** proceed with installation.

   

2. **Go to the [GitHub integration for Slack](https://slack.github.com/)** page and click **Add to Slack**.  
     
3. **Follow the on-screen prompts** to authorize GitHub access to your Slack workspace.  
     
4. **Confirm installation** by typing /github help in any Slack channel — you should see a list of available commands.

---

### Phase 2: Connect Your GitHub Account

5. **Open a direct message** with the GitHub app in Slack.  
     
6. **Follow the welcome message prompts** to connect your GitHub account — this will redirect you to GitHub in your browser to authenticate and authorize the connection.  
     
7. **Verify connection** — Slack will display a confirmation message and a list of available commands once your account is linked.

**Note:** If you've previously connected but need to reconnect, use /github signin to restart the authentication workflow.

---

### Phase 3: Set Up the Notification Channel

8. **Navigate to the Slack channel** where you want GitHub notifications (e.g., \#projectname-dev-tracker).  
     
9. **Invite the GitHub app** to the channel:

```
/invite @github
```

10. **Subscribe the channel** to the target repository:

```
/github subscribe owner/repo
```

- Example: /github subscribe hurdman/simplabots  
11. **Verify subscription** — the GitHub app will confirm the subscription and list the default notification events that are now active.

---

### Phase 4: Configure Notification Preferences

12. **Review the default notifications** that are enabled automatically:

| Event | Description |
| :---- | :---- |
| issues | Opened, closed, or reopened issues |
| pulls | New or merged pull requests, drafts marked ready for review |
| commits | New commits on the default branch |
| releases | Published releases |
| deployments | Deployment status updates |

13. **Enable additional notifications** as needed:

```
/github subscribe owner/repo reviews comments workflows
```

Available optional events:

| Event | Description |
| :---- | :---- |
| reviews | Pull request reviews |
| workflows | Actions workflow runs |
| branches | Created or deleted branches |
| comments | New comments on issues and pull requests |
| discussions | Discussions created or answered |

14. **Disable any default notifications** you don't need:

```
/github unsubscribe owner/repo releases
```

15. **IF** you want to filter by label, **THEN** apply a label filter:

```
/github subscribe owner/repo +label:"your label"
```

16. **IF** you want commit notifications for a specific branch (not just default), **THEN** configure a branch filter:

```
/github subscribe owner/repo commits:dev
```

- Use commits:\* for all branches  
- Use commits:feature/\* for pattern matching

---

### Phase 5: Configure Threading and Broadcasting (Optional)

17. **Review threading settings** — by default, notifications for each issue or PR are grouped into threads.  
- **IF** you want to disable threading, **THEN** type /github settings in the channel and click **Disable** next to the threading option.  
18. **IF** you want comments and reviews to appear in the main channel (not just threads), **THEN** enable broadcasting:

```
/github subscribe owner/repo comments:"channel"
/github subscribe owner/repo reviews:"channel"
```

---

### Phase 6: Configure Workflow Notifications (Optional)

19. **IF** you want GitHub Actions workflow notifications, **THEN** subscribe to workflows:

```
/github subscribe owner/repo workflows
```

- You will be prompted to grant additional permissions on first setup.  
20. **Apply filters** to reduce noise (optional):

```
/github subscribe owner/repo workflows:{name:"CI" event:"pull_request" branch:"main"}
```

Available workflow filters:

| Filter | Description |
| :---- | :---- |
| name | Filter by workflow name |
| actor | Filter by the user who triggered the workflow |
| branch | Filter by branch name |
| event | Filter by trigger event (e.g., push, pull\_request) |

---

### Phase 7: Verify and Document

21. **Verify the full subscription list** for the channel:

```
/github subscribe list
```

22. **Trigger a test event** (e.g., create a test issue or push a commit) and confirm the notification appears in the Slack channel.  
      
23. **IF** notifications are not appearing, **THEN** check:  
      
- [ ] The GitHub app is invited to the channel (/invite @github)  
- [ ] Your GitHub account is connected (/github signin)  
- [ ] The repository name is correct (owner/repo format)  
- [ ] You have access to the repository on GitHub  
24. **Document the configuration** in your project's README or internal wiki:  
- Channel name and purpose  
- Repository subscribed  
- Events enabled/disabled  
- Any filters applied (label, branch, workflow)

---

## Common Mistakes & Fixes
| Mistake | Fix |
| :---- | :---- |
| Typing the repo name without the owner prefix | Always use owner/repo format (e.g., hurdman/simplabots, not just simplabots) |
| Forgetting to invite @github to the channel | Run /invite @github in the channel before subscribing |
| Getting notifications for all branches | Use commits:main or commits:dev to filter to specific branches |
| Too much noise from workflow notifications | Apply workflow filters for name, branch, or event |
| Mentions not working in notifications | Ensure your GitHub account is connected via /github signin — mentions only work in the most recently connected workspace |
| Not seeing comments in the channel | Comments go to threads by default — enable broadcasting with comments:"channel" if you want them in the main channel |

---

## Success Criteria
This playbook is complete when:

- [ ] The GitHub app is installed in the Slack workspace  
- [ ] Your GitHub account is connected to the Slack app  
- [ ] The target channel is subscribed to the correct repository  
- [ ] Notification events are configured to match team needs  
- [ ] A test notification has been received and confirmed in the channel  
- [ ] Configuration is documented for the team

---

*Next review date: 2026-07-08*

## Storage & Access
Store this playbook in `docs/playbooks` within the engineering repository.
Access is required for all engineers, team leads, and operations stakeholders involved in execution.
Always Open policy: keep this playbook visible while running the workflow.

## Next review date
2026-09-24

## Quick Reference: Key Commands
| Command | Description |
| :---- | :---- |
| /github subscribe owner/repo | Subscribe channel to a repository |
| /github unsubscribe owner/repo | Unsubscribe channel from a repository |
| /github subscribe owner/repo \[event\] | Enable a specific notification event |
| /github unsubscribe owner/repo \[event\] | Disable a specific notification event |
| /github subscribe list | List all active subscriptions for the channel |
| /github subscribe list features | View active label filters |
| /github settings | Open channel notification settings |
| /github help | Show all available commands |

---
