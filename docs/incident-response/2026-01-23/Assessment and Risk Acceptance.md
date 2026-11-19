# Incident Report: Deployment Desynchronization Between App Servers

**Incident date:** 2026-01-22  
**Reported by:** alanoutrank  
**Service:** Simplabots (Next.js app)  
**Environment:** Production (2 EC2 instances behind ALB)

---

## 1. Summary

On 2026-01-22 we identified a **deployment desynchronization issue** between the two production EC2 instances serving the Simplabots application. Each instance was independently running `npm run build` during deployment, which led to **non-identical build artifacts** (specifically the `.next` directory). As a result, clients could receive different versions of JavaScript bundles depending on which instance handled the request, causing intermittent runtime errors and inconsistent client behavior.

We are implementing a new deployment pipeline using **GitHub Actions → S3 artifact → AWS CodeDeploy** to ensure a **single, canonical build** is produced and distributed identically to all servers.

---

## 2. Impact

- **User impact:**
  - Some users received stale or mismatched frontend assets (e.g. different versions of `.next` bundles).
  - This manifested as:
    - Intermittent client-side errors.
    - Occasional broken navigation or unexpected UI states.
    - Hard-to-reproduce bugs depending on which EC2 instance the load balancer routed to.

- **Scope:**
  - All production traffic behind the ALB was potentially affected.
  - Impact occurred during and after deployments where both servers rebuilt independently.

- **Duration:**
  - The behavior likely existed since we moved to multi-instance deployments, but it was explicitly diagnosed on **2026-01-22**.

---

## 3. Root Cause

### Technical root cause

1. **Per-instance builds:**

- Each EC2 instance ran `npm install` / `npm run build` directly on the server during deployment.
- Factors like:
  - Different dependency resolution at install time,
  - Node module nondeterminism,
  - Potential environment differences,
- led to **different `.next` build outputs** between the two instances.

2. **No shared build artifact:**

- There was no centralized build step producing a single artifact.
- The ALB routed traffic to instances that were not guaranteed to serve the **same exact compiled assets**.

3. **Static asset hashing & caching:**

- Next.js uses content hashing in filenames (e.g. `page-<hash>.js`).
- If instance A and instance B produce different hashes for the same logical route, a client that loads HTML from one node and JS from another can hit 404s or get incompatible bundle versions.

### Contributing factors

- Lack of a CI/CD pipeline that builds once and deploys the result to all servers.
- Reliance on ad-hoc deployment scripts and manual steps rather than a standardized deployment system (e.g. CodeDeploy with artifacts).
- No guardrails or checks to ensure `.next` directories are identical across servers.

---

## 4. Detection

- Symptoms were observed as **intermittent client-side issues** that were not easily reproducible in a single-environment test setup.
- Investigation showed differences in generated build artifacts between the two EC2 instances.
- The pattern correlated with deployments, suggesting a build/desync problem rather than pure application logic bugs.

---

## 5. Resolution / Mitigation

### Short-term mitigation (2026-01-22)

- Identified that per-instance builds (`npm run build` on each server) were the source of nondeterminism.
- Planned to stop building on each EC2 instance and instead build once centrally.

### Long-term solution (in progress)

We are implementing a **centralized, artifact-based deployment pipeline**:

1. **Centralized build with GitHub Actions (CI):**

- New workflow: `.github/workflows/deploy-simplabots.yml`.
- Manually triggered on the `main` branch (weekly rollout target).
- Steps:
  1. Check out `main`.
  2. Set up Node 22.
  3. Configure private registries (e.g. Font Awesome) via `.npmrc`.
  4. Run `npm ci` and `npm run build` **once** in CI.
  5. Zip repo + build output (including `.next`) into `simplabots-app.zip`.

2. **Artifact storage in S3:**

- New private S3 bucket: `simplabots-deploy-artifacts` (us-east-1).
- CI uploads `simplabots-app.zip` to S3:
  - `s3://simplabots-deploy-artifacts/simplabots-app.zip`.

3. **Deployment orchestration with AWS CodeDeploy:**

- CodeDeploy application: `simplabots-app`.
- Deployment group: `simplabots-prod`.
- Targets:
  - Two EC2 instances (production) selected by tags (e.g. `App=simplabots`).
- CodeDeploy downloads the **same ZIP** from S3 to each server and unpacks it into `/home/ubuntu/simplabots`.

4. **AppSpec and hook script:**

- `appspec.yml` at repo root describes:
  - Copying files from the ZIP to `/home/ubuntu/simplabots`.
  - Running an `AfterInstall` hook script.
- `scripts/after_install.sh` (executable on each EC2 instance) is responsible for:
  - Running DB migrations (`npx prisma migrate deploy`, `npx prisma generate`).
  - Restarting the Node/PM2 process with the new build.
- **Importantly, the hook script does not re-run `npm run build` on the EC2 instances**, avoiding per-instance divergence.

5. **IAM & security:**

- Minimal IAM policy for the GitHub Actions role:
  - `s3:PutObject` / `s3:GetObject` on `simplabots-deploy-artifacts/*`.
  - `codedeploy:CreateDeployment` / `codedeploy:GetDeployment`.
  - Existing SSM/EC2 permissions kept for other operations.
- Sensitive values (e.g. `DATABASE_URL`, `FA_NPM_TOKEN`, AWS keys) stored as **GitHub Secrets**, never committed.

6. **Environment variables in CI:**

- `DATABASE_URL` provided via GitHub Actions secrets so that `next build` can complete successfully in CI without failing on missing env variables.
- Node heap increased via `NODE_OPTIONS=--max_old_space_size=4096` to avoid OOM during `next build` on the GitHub runner.

With this design, **every production instance receives the exact same build artifacts** from a single canonical source.

---

## 6. Prevention

To prevent similar issues going forward:

1. **Always-Artifact Deployments**

- All future production deployments will:
  - Build once in CI.
  - Ship the resulting artifact (ZIP) through S3/CodeDeploy.
- No more `npm run build` on production EC2 instances.

2. **Standardized Deployment Process**

- Deployments are triggered through the GitHub Actions workflow only.
- Manual server-side deployments are discouraged except in emergencies.

3. **Configuration Management**

- `appspec.yml` and hooks (`scripts/after_install.sh`) are tracked in Git and versioned along with application code.

4. **Monitoring & Logging**

- CodeDeploy deployments monitored via AWS console and logs.
- On failure, deployment is rolled back or fixed before being marked successful.

5. **Documentation**

- This incident report and the new deployment procedure will be documented in the project’s internal docs (and/or repo README) so the team understands:
  - Why we no longer build on servers.
  - How to safely trigger deployments.

---

## 7. Lessons Learned

- Running builds independently on multiple servers seems simple but can introduce subtle nondeterminism and difficult-to-diagnose bugs.
- Even small-scale applications benefit from a proper CI/CD pipeline that:
  - Builds once,
  - Produces an immutable artifact,
  - Deploys that artifact uniformly across all instances.
- The cost of adding S3 + CodeDeploy + Actions is negligible compared to the reliability gain.

---

## 8. Status

- **2026-01-22:** Root cause (desynced per-instance builds) identified; new artifact-based deployment design agreed.
- **2026-01-23+:** GitHub Actions workflow, S3 bucket, CodeDeploy application & deployment group, `appspec.yml`, and hooks implemented and tested.
- **Current status:** New pipeline being used for production deployments. Desync issue is considered **resolved**, with mitigations in place to prevent recurrence.
