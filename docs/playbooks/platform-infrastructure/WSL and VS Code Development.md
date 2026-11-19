# 🐧 WSL and VS Code Development Playbook

## DEFINE

| Field | Value |
| --- | --- |
| Playbook Name | WSL and VS Code Development |
| Purpose | Run repositories and local development servers inside WSL while using VS Code on Windows. |
| Owner | Engineering Platform Team |
| Last Updated | 2026-09-11 |
| Review Cycle | Every 90 days |

## Prerequisites

- [ ] Windows Subsystem for Linux 2 (WSL 2) is installed and an approved Ubuntu distribution is available.
- [ ] VS Code is installed on Windows.
- [ ] The VS Code **WSL** extension (`ms-vscode-remote.remote-wsl`) is installed.
- [ ] Git is installed inside the WSL distribution and your GitHub authentication works there.
- [ ] Required project runtimes are installed **inside WSL** (for example PHP, Composer, Node.js, and the package manager the repository uses).
- [ ] You have repository access and know the intended GitHub clone URL.
- [ ] You have enough Linux-home disk space for the checkout, dependencies, and generated files.

> This workstation's default distribution is `Ubuntu-26.04` on WSL 2. Run `wsl.exe -l -v` from Windows to confirm the name before using a different machine.

## Step-by-Step Checklist

### Phase 1: Start WSL and enter VS Code's WSL context

1. **Open** a WSL terminal from Windows Terminal, or run the following from a Windows terminal:

   ```bash
   wsl.exe -d Ubuntu-26.04
   ```

2. **Confirm** the terminal is Linux, not Git Bash, Command Prompt, or PowerShell:

   ```bash
   uname -a
   pwd
   ```

3. **Confirm** the essential project tools are resolved within WSL:

   ```bash
   git --version
   php --version
   composer --version
   ```

4. **Open** an existing WSL checkout in VS Code from that WSL terminal:

   ```bash
   cd ~/src/hurdman/example-repository
   code .
   ```

5. **Confirm** the bottom-left VS Code status indicator says `WSL: Ubuntu-26.04` (or the distribution actually selected).

**IF** the indicator does not say `WSL: ...`, **THEN** use Command Palette (`Ctrl+Shift+P`) → **WSL: Reopen Folder in WSL**. Do not run Linux project commands from a Windows-local VS Code terminal by mistake.

- [ ] The VS Code window is connected to the intended WSL distribution.
- [ ] The integrated terminal reports a Linux home path such as `/home/<linux-user>/...`.
- [ ] Git and required runtimes resolve from the WSL terminal.

### Phase 2: Clone a repository into the WSL Linux filesystem

1. **Create** an organization folder below the Linux home directory. Keep source code out of `/mnt/c`, `/mnt/d`, and other mounted Windows drives to avoid slow file watching, permissions mismatches, and unreliable dependency installs.

   ```bash
   mkdir -p ~/src/hurdman
   cd ~/src/hurdman
   ```

2. **Clone** the repository using the approved URL. Example for a Laravel project:

   ```bash
   git clone git@github.com:hurdman/bpc_crm.git
   cd bpc_crm
   ```

   If your account uses HTTPS instead of SSH, use the repository's HTTPS clone URL:

   ```bash
   git clone https://github.com/hurdman/bpc_crm.git
   cd bpc_crm
   ```

3. **Verify** that the checkout is in WSL's Linux filesystem and has the expected remote and branch:

   ```bash
   pwd
   git remote -v
   git status --short --branch
   ```

   Expected path shape: `/home/<linux-user>/src/hurdman/bpc_crm`.

4. **Open** the freshly cloned folder in the WSL-connected VS Code window:

   ```bash
   code .
   ```

5. **Install** dependencies using the repository's documented commands. A typical Laravel setup is:

   ```bash
   composer install
   cp .env.example .env
   php artisan key:generate
   ```

   Run frontend installation only when the repository requires it, using its pinned package manager (for example `npm ci`, `pnpm install --frozen-lockfile`, or `yarn install --immutable`). Do not copy `vendor`, `node_modules`, or lockfiles from a Windows checkout.

**IF** the repository already exists under `C:\...` or `/mnt/c/...`, **THEN** create a fresh clone under `~/src/...`; do not move a dependency-populated checkout between Windows and WSL.

- [ ] Repository path begins with `/home/`, not `/mnt/<drive>/`.
- [ ] `git remote -v` identifies the intended repository.
- [ ] VS Code reports the WSL distribution in its status indicator.
- [ ] Dependency installation completed with the WSL runtime.

### Phase 3: Run a Laravel instance from VS Code

1. **Open** VS Code's integrated terminal using **Terminal → New Terminal** and confirm it is a WSL terminal:

   ```bash
   pwd
   php --version
   ```

2. **Enter** the Laravel application's directory. In repositories with a separate backend directory, use that directory rather than the repository root:

   ```bash
   cd ~/src/hurdman/bpc_crm/backend
   ```

3. **Validate** configuration before starting the app:

   ```bash
   test -f .env && echo ".env found" || echo ".env is missing"
   php artisan about
   ```

4. **Start** Laravel on an explicit local port:

   ```bash
   php artisan serve --host=127.0.0.1 --port=8000
   ```

5. **Open** `http://localhost:8000` in a Windows browser. WSL 2 forwards a localhost service to Windows on current supported installations.

6. **Stop** the server with `Ctrl+C` in the terminal that started it when the instance is no longer needed.

**IF** port 8000 is already in use, **THEN** select another unused port and open that same port in the browser:

```bash
php artisan serve --host=127.0.0.1 --port=8001
```

- [ ] `php artisan about` runs from the intended application directory.
- [ ] The terminal reports the Laravel development server URL.
- [ ] The Windows browser receives the expected application response at the selected localhost URL.
- [ ] The server can be stopped cleanly with `Ctrl+C`.

### Phase 4: Run related local processes

1. **Use** a separate WSL terminal for each long-running process. Keep the command and port visible in its terminal tab.
2. **Start** the frontend development server from its documented directory and use its repository-pinned package manager. Typical examples are:

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. **Start** queue workers only when the task requires them. For a one-off Laravel worker:

   ```bash
   php artisan queue:work
   ```

4. **Run** Horizon only in a WSL-native Laravel checkout because it requires Unix process control (`pcntl`):

   ```bash
   php artisan horizon
   ```

5. **Verify** each process using its terminal output and the application's expected local URL or health endpoint. Stop each process with `Ctrl+C` when finished.

**IF** a command fails because a runtime or extension is missing, **THEN** install or correct it inside WSL; installing the Windows equivalent does not provide it to the Linux shell.

- [ ] Each long-running process has its own WSL terminal.
- [ ] Each process was started from the documented application directory.
- [ ] Local URLs and required workers respond as expected.

## Common Mistakes & Fixes

| Common Mistake | Fix |
| :-- | :-- |
| Cloning to `/mnt/c/Users/...` or another Windows-mounted drive | Clone again under `/home/<linux-user>/src/...` and reinstall dependencies there. |
| Opening a folder in normal Windows VS Code | Run `code .` from the WSL checkout or use **WSL: Reopen Folder in WSL**; verify the status indicator. |
| Installing PHP, Composer, Node, or Git only on Windows | Install and verify the required version inside the WSL distribution. Windows and WSL runtimes are separate. |
| Using Windows `vendor` or `node_modules` from WSL | Delete and reinstall dependencies in the WSL checkout using the WSL runtime. |
| Laravel cannot find `.env` or `APP_KEY` | Copy the approved `.env` template or obtain environment configuration through the approved secret process, then run `php artisan key:generate` when appropriate. Never commit `.env`. |
| Browser cannot reach `localhost:8000` | Confirm `php artisan serve` is still running, check its printed host and port, then try a different port. |
| Running Horizon from a Windows PHP checkout | Use a separate WSL-native clone; Horizon requires Unix `pcntl` and must not share `vendor/` with the Windows checkout. |

## Success Criteria

- [ ] The repository is cloned under the WSL Linux home filesystem, not a mounted Windows drive.
- [ ] VS Code is connected to the correct WSL distribution for the repository.
- [ ] Git, project runtimes, and dependencies execute from WSL.
- [ ] A Laravel instance starts with `php artisan serve` and is reachable from a Windows browser at its stated localhost URL.
- [ ] Long-running processes are separated into identifiable WSL terminals and stopped cleanly after use.
- [ ] No secrets, `.env` files, or generated dependency directories were copied between Windows and WSL checkouts.

## Storage & Access

Store this playbook in `docs/playbooks/platform-infrastructure/WSL and VS Code Development.md`.

Access is required for engineers who develop Windows-hosted projects using WSL. Always Open policy: keep this playbook visible while creating a first WSL checkout or diagnosing a Windows-versus-WSL runtime issue.

## Next review date

2026-12-10
