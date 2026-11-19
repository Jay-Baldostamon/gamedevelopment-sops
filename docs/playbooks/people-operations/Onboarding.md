# 🚀 Engineering Onboarding Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Engineering Onboarding — “Launch Sequence” |
| Purpose | Get a new developer fully set up with company communication tools, GitHub access, local development environment, database access, and delivery workflow so they can contribute safely and independently on Day 1. This playbook exists because onboarding is repeated frequently, is difficult to delegate without errors, and creates breakdowns when handled inconsistently. |
| Owner | Eliseo Alcaraz |
| Last Updated | 2026-05-18 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] New hire has received their **@hurdman.net email** credentials  
- [ ] New hire has a **company-approved computer** with admin/install privileges  
- [ ] New hire knows their **official start date**  
- [ ] Team Lead has been notified of the new hire’s start date  
- [ ] Team Lead is ready to send **Slack**, **GitHub Organization**, and **repository** access  
- [ ] Team Lead has required **environment credentials** ready to share securely  
- [ ] New hire has a stable internet connection  
- [ ] New hire has access to a password manager or secure method to store credentials  
- [ ] This playbook is **open and visible** before onboarding begins

## Step-by-Step Checklist
### Phase 1: Prepare Access & Communication

1. **Sign in** to your company email using your assigned **@hurdman.net** account.  
2. **Verify** you can send and receive email successfully.  
3. **Download** the Slack desktop application.  
4. **Download** the Slack mobile application.  
5. **Do not use** the browser version of Slack as your primary workspace app.  
6. **Create** or **sign in** to Slack using your **@hurdman.net** email address only.  
7. **Wait** for the invitation to the **Hurdman Streampage** Slack workspace.  
8. **IF** the Slack invite does not arrive within **1 hour**, **THEN** message **Joseph in HR** from your company email.  
9. **Open** Slack and complete your profile.  
10. **Enter** your full professional name.  
11. **Enter** your exact job title.  
12. **Add** your contact information.  
13. **Upload** a clear professional profile photo.  
14. **Join** the required Slack channels for your role.  
15. **Verify** you can access `#team-feasibility`.  
16. **Verify** you can access `#ai-agents`.  
17. **Verify** you can access `#simplabots-feasibility`.  
18. **Enable** Slack notifications during your working hours.  
19. **Set** your Slack status whenever you are unavailable.  
- [ ] Company email works correctly  
- [ ] Slack desktop app is installed  
- [ ] Slack mobile app is installed  
- [ ] Slack uses **@hurdman.net** email only  
- [ ] Slack profile is complete  
- [ ] Core channels are visible and accessible

### Phase 2: Configure Git & GitHub

**Policy Reference:** Follow the [GitHub Identity and Access Policy](GitHub%20Identity%20and%20Access%20Policy.md) before creating or submitting any GitHub account for access.

1. **Watch** the Git basics overview assigned by the team.  
2. **Download** and install Git for your operating system.  
3. **Open** Terminal, PowerShell, or your shell application.  
4. **Configure** your global Git username.

```shell
git config --global user.name "Your Full Name"
```

5. **Configure** your global Git email.

```shell
git config --global user.email "yourname@hurdman.net"
```

6. **Verify** your Git configuration.

```shell
git config --global --list
```

7. **Confirm** that `user.name` is correct.  
8. **Confirm** that `user.email` uses your **@hurdman.net** address.  
9. **Create** a GitHub account if you do not already have one.  
10. **Sign in** to GitHub.  
11. **Add** your **@hurdman.net** email address in GitHub.  
12. **Verify** your **@hurdman.net** email address in GitHub.  
13. **Send** your GitHub username to your Team Lead in Slack.  
14. **Wait** for the invitation to the **Hurdman GitHub Organization**.  
15. **IF** the GitHub Organization invite does not arrive within **24 hours**, **THEN** message your Team Lead in Slack.  
16. **Accept** the GitHub Organization invitation.  
17. **Open** the organization page.  
18. **Verify** you can view the **SimplaBots** repository.  
- [ ] Git is installed  
- [ ] Global Git config is correct  
- [ ] GitHub account includes verified **@hurdman.net** email  
- [ ] GitHub Organization invite is accepted  
- [ ] SimplaBots repository is visible

### Phase 3: Install Required Development Tools

1. **Download** and install **VS Code** as the preferred IDE.  
2. **IF** you use Windows, **THEN** follow the approved Windows installation guide.  
3. **IF** you use Ubuntu Linux, **THEN** install VS Code with:

```shell
sudo apt install code
```

4. **IF** you use another Linux distribution, **THEN** use the correct package manager or ask a teammate using the same distro.  
5. **Open** VS Code after installation completes.  
6. **Sign in** to GitHub inside VS Code if prompted.  
7. **Notify** your Team Lead to enable all required **GitHub Copilot models** for your account.  
8. **Download** and install **PostgreSQL**.  
9. **Download** and install **pgAdmin4**.  
10. **Open** pgAdmin4.  
11. **Create** a local PostgreSQL server connection in pgAdmin4.  
12. **Set** a secure password for the PostgreSQL user.  
13. **Store** that password securely.  
14. **Create** a new database for the SimplaBots project.  
- [ ] VS Code opens successfully  
- [ ] GitHub sign-in works in VS Code  
- [ ] Copilot access request has been sent  
- [ ] PostgreSQL is installed  
- [ ] pgAdmin4 is installed  
- [ ] Local database is created

### Phase 4: Clone the Repository & Configure Local Environment

1. **Open** GitHub and navigate to the **SimplaBots** repository.  
2. **Click** the green **`<> Code`** button.  
3. **Copy** the repository URL using **HTTPS** unless your team requires SSH.  
4. **Open** your terminal.  
5. **Navigate** to your local projects directory.

```shell
cd /path/to/your/projects
```

6. **Clone** the repository.

```shell
git clone [PASTE_URL_HERE]
```

7. **Open** VS Code.  
8. **Click** **File → Open Folder**.  
9. **Select** the `simplabots` project folder.  
10. **Open** the integrated terminal in VS Code.  
11. **Install** project dependencies.

```shell
npm install
```

12. **Create** a `.env` file in the project root.  
13. **Add** the required database connection values to `.env`.

```
DATABASE_URL=postgresql://postgres:<user>:<password>@localhost:5432/<databasename>
DIRECT_URL=postgresql://postgres:<user>:<password>@localhost:5432/<databasename>
```

14. **Replace** `<user>`, `<password>`, and `<databasename>` with your actual values.  
15. **Request** any missing API keys or environment secrets from your Team Lead through Slack.  
16. **Verify** the `.env` file is saved in the project root.  
17. **Verify** the `.env` file is not committed to source control.

**IF** you are unsure whether the project uses a sample environment file, **THEN** check for files like `.env.example` or ask your Team Lead before continuing.

- [ ] Repository is cloned locally  
- [ ] Project opens in VS Code  
- [ ] `npm install` completes successfully  
- [ ] `.env` exists in the project root  
- [ ] Database credentials are entered correctly  
- [ ] Sensitive credentials are stored securely

### Phase 5: Run Database Setup & Application Initialization

1. **Open** the integrated terminal in the project root.  
2. **Run** the database migration command.

```shell
npx prisma migrate deploy
```

3. **Run** the Prisma type generation command.

```shell
npx prisma generate
```

4. **Run** the seed command.

```shell
npx prisma db seed
```

5. **Start** the application using the project’s standard local run command.  
6. **Verify** the application starts without errors.  
7. **Verify** the database connection succeeds.  
8. **Verify** seeded data is available if the application requires it.

**IF** `npx prisma migrate deploy` fails, **THEN** review the error output first before resetting the database.  
**IF** the failure is caused by incorrect credentials, **THEN** fix the `.env` file and rerun the command.  
**IF** the local database is broken and your Team Lead confirms reset is safe, **THEN** run:

```shell
npx prisma migrate reset
npx prisma db seed
```

**Reference Commands**

| Command | When to Use |
| :---- | :---- |
| `npx prisma migrate deploy` | Apply existing migrations to your local database |
| `npx prisma generate` | Regenerate Prisma client/types after schema or migration changes |
| `npx prisma db seed` | Load seed data into the database |
| `npx prisma migrate reset` | Reset the local database only when a reset is confirmed safe |
| `npx prisma migrate dev --name <name>` | Create a new migration for schema changes you are developing |
| `npx prisma migrate resolve --rolled-back <migration>` | Mark a failed migration as rolled back |
| `npx prisma migrate resolve --applied <migration>` | Mark a migration as already applied |

- [ ] Prisma migration completes successfully  
- [ ] Prisma generate completes successfully  
- [ ] Seed completes successfully  
- [ ] App starts locally  
- [ ] No startup errors remain unresolved

### Phase 6: Learn the Task & Branch Workflow

1. **Navigate** to the **Projects** tab in the SimplaBots repository.  
2. **Open** the **Feasibility Board**.  
3. **Find** tasks assigned to your name.  
4. **Assign yourself** to the issue you are currently working on.  
5. **IF** your Team Lead gives you a task that does not exist on the board, **THEN** create a new issue first.  
6. **Create** a new branch for each task.

```shell
git checkout -b your-branch-name
```

7. **Do not push** directly to `main`.  
8. **Do not push** directly to `develop`.  
9. **Make** your code changes on your task branch only.  
10. **Test** your changes locally.  
11. **Push** your branch to GitHub.

```shell
git push origin your-branch-name
```

12. **Open** a Pull Request targeting `develop`.  
13. **Set** yourself as the PR assignee.  
14. **Assign** your Team Lead or a peer as reviewer.  
15. **Wait** for review and approval.  
16. **Do not merge** your own PR unless your Team Lead explicitly authorizes it.  
- [ ] Feasibility Board is accessible  
- [ ] Current task is assigned  
- [ ] New branch was created correctly  
- [ ] Branch was pushed to GitHub  
- [ ] PR targets `develop`  
- [ ] Reviewer is assigned

### Phase 7: Meetings, Reporting & Daily Communication

1. **Confirm** your recurring meeting schedule with your Team Lead.  
2. **Attend** all scheduled engineering meetings.  
3. **Track** your completed work before the end of each shift.  
4. **Post** your daily standup update in the designated Slack channel every day after your shift by **07:00 AM**.  
5. **Use** the approved standup format exactly.

```
✅ Finished:
  - Implemented [Feature X]
  - Fixed bug [Link to Ticket/PR]

📅 Planned (Tomorrow):
  - Connecting [Feature X] to Database
  - Reviewing PR #123

🚫 Blockers:
  - None / Waiting for AWS creds / Need clarification on UI
```

6. **Tag** your Team Lead immediately if you are blocked.  
7. **Keep** your update brief, specific, and relevant to actual work completed.

**IF** you miss the standup deadline, **THEN** post immediately and notify your Team Lead directly.

- [ ] Meeting schedule is known  
- [ ] Daily standup channel is known  
- [ ] First standup was posted in correct format  
- [ ] Team Lead knows about any blockers

### Phase 8: Final Onboarding Verification

1. **Review** each completed phase.  
2. **Confirm** all required software is installed.  
3. **Confirm** all required accounts are active.  
4. **Confirm** local development environment works end to end.  
5. **Confirm** you can communicate, code, push, and request review without assistance.  
6. **Notify** your Team Lead that onboarding is complete.  
- [ ] Slack works  
- [ ] Git works  
- [ ] GitHub works  
- [ ] VS Code works  
- [ ] Database works  
- [ ] Local app works  
- [ ] PR workflow works  
- [ ] Standup workflow works  
- [ ] Team Lead has been notified of completion

## Common Mistakes & Fixes
| Mistake | Fix |
| :---- | :---- |
| Used a personal email instead of **@hurdman.net** for Slack or GitHub | Update the account email immediately and re-verify access with the correct company email |
| Relied on Slack in the browser only | Install the desktop and mobile apps and enable notifications |
| Git config shows the wrong email | Re-run `git config --global user.email "yourname@hurdman.net"` and verify again |
| Cannot see the SimplaBots repository | Confirm the GitHub Organization invite was accepted and message the Team Lead if access is still missing |
| `.env` has invalid database credentials | Recheck username, password, host, port, and database name against pgAdmin4 |
| Prisma migration failed | Read the error, fix config issues first, and only reset the DB if the Team Lead confirms it is safe |
| Worked without assigning the issue first | Open the issue immediately and assign yourself before continuing |
| Pushed directly to `main` or `develop` | Notify the Team Lead immediately and follow instructions to revert or correct the change |
| Opened a PR without a reviewer | Edit the PR and assign the Team Lead or approved reviewer immediately |
| Missed the daily standup deadline | Post the update immediately and notify the Team Lead directly |
| Kept onboarding steps in memory instead of following the document | Reopen the playbook and continue with the checklist under the Always Open Policy |

## Success Criteria
- [ ] Slack desktop and mobile apps are installed  
- [ ] Slack profile is complete and core channels are joined  
- [ ] Git is installed and configured with the correct **@hurdman.net** email  
- [ ] GitHub account is verified and added to the Hurdman organization  
- [ ] SimplaBots repository is visible and accessible  
- [ ] VS Code is installed and usable  
- [ ] GitHub Copilot access has been enabled or requested  
- [ ] PostgreSQL and pgAdmin4 are installed  
- [ ] Local database is created and accessible  
- [ ] Repository is cloned locally  
- [ ] Dependencies install successfully  
- [ ] `.env` is configured correctly  
- [ ] Prisma migration and seed commands complete successfully  
- [ ] Application runs locally without errors  
- [ ] Feasibility Board is accessible  
- [ ] First branch is created correctly  
- [ ] First PR is opened or ready to open  
- [ ] First daily standup is posted in the correct format  
- [ ] Team Lead confirms the developer is ready to contribute

## Storage & Access
**Location:** Central company knowledge base such as **Google Drive**, **Notion**, or **GitHub Wiki**  
**Access:** All engineering team members, Team Leads, and new hires

**Always Open Policy:** Keep this playbook open and visible during onboarding and every time a new developer is being set up. Do not rely on memory. Follow each step in order, check each box as you complete it, and update the playbook whenever a gap, mistake, or unclear instruction is discovered.

**Training Use:** Use this playbook to train new hires, cross-train teammates, and reduce interruptions, repeated mistakes, and knowledge hoarding.

**Central Storage Reminder:** Store this playbook in one shared location only, and ensure the latest version is the version used during execution.

**Next review date:** 2026-07-01

## Next review date
2026-09-24
