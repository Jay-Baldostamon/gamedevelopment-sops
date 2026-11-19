# 🌿 Git Worktrees Playbook

## DEFINE

| Field | Value |
| --- | --- |
| Playbook Name | Git Worktrees Playbook |
| Purpose | Standardize how engineers create, switch, rename, and remove Git worktrees so parallel branch work stays isolated and predictable — whether working through GitHub Desktop (GUI) or Windows Command Prompt (CLI). |
| Owner | Engineering Team |
| Last Updated | 2026-07-20 |
| Review Cycle | Every 90 days |

## Prerequisites

**Common to both platforms**
- [ ] You understand which branch the new worktree should start from
- [ ] You have local disk space available for an additional checkout
- [ ] You are working in a repository where local worktrees are allowed by team policy

**GitHub Desktop only**
- [ ] GitHub Desktop is installed and signed in
- [ ] The target repository has already been added to GitHub Desktop

**Command Prompt only**
- [ ] Git is installed and available in `cmd.exe`
- [ ] The repository already exists on your machine and is in a clean or intentionally managed state
- [ ] You have permission to create local branches and push them to the remote when needed
- [ ] You have a parent folder where sibling worktree folders can be created

---

## Step-by-Step Checklist

> Choose the section that matches your tool. Both platforms achieve the same outcome — pick based on your preference or environment.

---

### GitHub Desktop

#### Phase 1: Confirm repository readiness

1. **Open** GitHub Desktop and select the target repository.
2. **Confirm** whether the repository already has linked worktrees.
3. **Review** the current branch and uncommitted changes before opening another checkout.

- [ ] Correct repository selected
- [ ] Current branch reviewed
- [ ] Current local changes understood

**IF the repository has no linked worktrees yet, THEN expect the Worktree dropdown to be hidden until the first linked worktree is created.**

#### Phase 2: Create the first or next worktree

1. **Create** the first linked worktree via **Repository > New Worktree...** or by right-clicking the **Repository** dropdown and selecting **New Worktree...**.
2. **Use** the **Worktree** dropdown for all subsequent worktrees after the first one exists.
3. **Enter** a clear value in **Worktree name**.
4. **Set** the **Branch name** field using one of these rules:
   - Leave blank to create a new branch with the same name as the worktree.
   - Enter an existing local branch to check it out in the new worktree.
   - Enter a remote branch name to create a new local branch from that remote reference.
5. **Review** the generated path shown in the dialog.
6. **Click** **Create Worktree**.

- [ ] Worktree name entered
- [ ] Branch behavior intentionally selected
- [ ] Generated path reviewed
- [ ] New worktree created successfully

**IF you want the safest default, THEN leave the branch field blank and let GitHub Desktop create a new branch that matches the worktree name.**

#### Phase 3: Switch between worktrees

1. **Open** the **Worktree** dropdown in the repository toolbar.
2. **Select** the worktree you want to activate.
3. **Confirm** GitHub Desktop switched the working directory to the selected path.
4. **Use** the filter field in the dropdown when many worktrees exist.

- [ ] Active worktree switched successfully
- [ ] Expected path and branch are visible

#### Phase 4: Rename linked worktrees when naming becomes unclear

1. **Open** the **Worktree** dropdown.
2. **Right-click** the linked worktree you want to rename.
3. **Select** **Rename...**.
4. **Enter** the new worktree name and confirm it.

- [ ] Linked worktree renamed

**IF the worktree is the main worktree, THEN do not attempt to rename it — GitHub Desktop only allows renaming linked worktrees.**

#### Phase 5: Delete linked worktrees after use

1. **Open** the **Worktree** dropdown.
2. **Right-click** the linked worktree you no longer need.
3. **Select** **Delete...** and confirm the action.
4. **Use** the force-delete option only when GitHub Desktop reports an error and you have already confirmed the changes are safe to discard.

- [ ] Unneeded linked worktree deleted
- [ ] Deletion prompt preference understood

**IF deletion fails because the worktree has uncommitted changes, THEN commit the work, move it elsewhere, or intentionally discard it before forcing deletion.**

#### Phase 6: Manage deletion prompts

1. **Open** the prompts settings in GitHub Desktop:
   - Windows: **File > Options > Prompts**
   - macOS: **GitHub Desktop > Settings > Prompts**
2. **Select** or **deselect** **Removing worktrees** based on your preferred confirmation behavior.

- [ ] Prompt setting reviewed

---

### Command Prompt (Windows)

#### Phase 1: Inspect the current repository state

1. **Open** Command Prompt.
2. **Change** into the main repository checkout.

   ```bat
   cd C:\path\to\repo
   ```

3. **Review** active worktrees.

   ```bat
   git worktree list
   ```

4. **Review** the current branch and local changes before creating another checkout.

   ```bat
   git status
   ```

- [ ] Main repository path confirmed
- [ ] Existing worktrees reviewed
- [ ] Current branch and working tree status understood

**IF the current checkout contains unfinished work, THEN leave it in place and create a separate worktree instead of stashing or mixing tasks together.**

#### Phase 2: Create a new worktree

1. **Choose** a sibling folder name that clearly matches the task or branch.
2. **Create** a new worktree and branch from the base branch you want to start from.

   ```bat
   git worktree add ..\repo-feature-login -b feature-login main
   ```

3. **Use** the existing branch name instead of `-b` when the branch already exists and is not checked out elsewhere.

   ```bat
   git worktree add ..\repo-hotfix hotfix-123
   ```

4. **List** worktrees again to confirm the new checkout was registered.

   ```bat
   git worktree list
   ```

- [ ] New worktree folder created
- [ ] Target branch attached to the new worktree
- [ ] `git worktree list` shows the new entry

**IF Git reports that the branch is already checked out in another worktree, THEN create a different branch name or switch to the existing worktree instead of forcing a duplicate checkout.**

#### Phase 3: Work inside the new checkout

1. **Change** into the new worktree folder.

   ```bat
   cd ..\repo-feature-login
   ```

2. **Confirm** the active branch and path.

   ```bat
   git status
   ```

3. **Make** your changes, commit them, and push the branch as usual.
4. **Return** to the main checkout or another worktree when you need to change context.

- [ ] Active worktree path verified
- [ ] Expected branch verified
- [ ] Task work stayed isolated from the other checkout

#### Phase 4: Clean up completed worktrees

1. **Return** to the main repository checkout or any other safe checkout.
2. **Remove** a linked worktree after its work is complete and no uncommitted changes remain.

   ```bat
   git worktree remove ..\repo-feature-login
   ```

3. **Prune** stale metadata if a worktree folder was removed manually or is no longer valid.

   ```bat
   git worktree prune
   ```

4. **Review** the final state.

   ```bat
   git worktree list
   ```

- [ ] Completed worktree removed cleanly
- [ ] Stale metadata pruned when needed
- [ ] Remaining worktrees still point to valid paths

**IF `git worktree remove` fails because the worktree is dirty, THEN commit, move, or intentionally discard those changes before retrying.**

#### Phase 5: Use supporting commands when needed

1. **Move** a linked worktree if the folder needs to be relocated.

   ```bat
   git worktree move ..\repo-feature-login ..\repo-feature-login-archive
   ```

2. **Lock** a worktree that lives on removable or occasionally unavailable storage.

   ```bat
   git worktree lock ..\repo-feature-login
   ```

3. **Unlock** a previously locked worktree before removing or moving it.

   ```bat
   git worktree unlock ..\repo-feature-login
   ```

- [ ] Optional maintenance commands understood

---

## Common Mistakes & Fixes

| Tool | Common Mistake | Fix |
| --- | --- | --- |
| GitHub Desktop | Looking for the Worktree dropdown before any linked worktree exists | Use **Repository > New Worktree...** first; the dropdown appears only after the first linked worktree is created. |
| GitHub Desktop | Leaving the branch choice ambiguous | Decide whether you want a new branch, an existing local branch, or a remote-based branch before clicking **Create Worktree**. |
| GitHub Desktop | Trying to rename or delete the main worktree | Only rename or delete linked worktrees; keep the original repository checkout intact. |
| GitHub Desktop | Deleting a worktree without reviewing uncommitted changes | Check the worktree state first and only force-delete when you intentionally want to discard local work. |
| GitHub Desktop | Losing track of which worktree is active | Use the **Worktree** dropdown to confirm the selected path and branch before editing files. |
| Command Prompt | Creating the new worktree inside the current repo folder | Create it as a sibling path such as `..\repo-feature-login` so it remains a separate checkout. |
| Command Prompt | Reusing a branch that is already checked out in another worktree | Use a new branch name or switch to the worktree that already owns that branch. |
| Command Prompt | Deleting the worktree folder in File Explorer and skipping cleanup | Run `git worktree prune` from a valid checkout to remove stale worktree metadata. |
| Command Prompt | Trying to remove a worktree with uncommitted changes | Commit, move, or intentionally discard the changes first, then run `git worktree remove` again. |
| Command Prompt | Forgetting which folder maps to which branch | Run `git worktree list` before starting work or cleanup. |

## Success Criteria

**GitHub Desktop**
- [ ] You can create the first worktree from the Repository menu
- [ ] You can create additional worktrees from the Worktree dropdown
- [ ] You can switch between linked worktrees and confirm the active branch/path
- [ ] You can rename linked worktrees when needed
- [ ] You can delete a completed linked worktree without affecting the main checkout

**Command Prompt**
- [ ] You can list all active worktrees from Command Prompt
- [ ] You can create a new worktree with its own branch from the correct starting point
- [ ] You can enter the new worktree and confirm the expected branch is active
- [ ] You can remove completed worktrees without breaking the main checkout
- [ ] You can prune stale worktree metadata when paths become invalid

## Storage & Access

- **Location:** `docs/playbooks/delivery-and-quality/Git Worktrees.md`
- **Who needs access:** All engineers working with local repositories
- **Always Open policy:** Keep this playbook visible while creating or removing worktrees until the workflow becomes routine

## Next review date

2026-10-20
