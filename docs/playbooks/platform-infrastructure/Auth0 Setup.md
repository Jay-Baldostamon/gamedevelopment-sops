# 🔐 Auth0 Setup Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | "Auth0 Setup" |
| Purpose | To configure Auth0 for a two-frontend-one-API local setup in a repeatable, secure, and auditable way. |
| Owner | Engineering Platform Team |
| Last Updated | 2026-07-02 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] You have Admin access to the target Auth0 tenant.
- [ ] You have two frontend apps in your monorepo (Web on `localhost:3001`, Portal on `localhost:3003`).
- [ ] You have one backend API that validates JWTs.
- [ ] You have permission to rotate and store secrets in local env files.
- [ ] You confirmed each frontend app uses its own env file.

## Step-by-Step Checklist
### Phase 1: Create the Auth0 API (Resource Server)
1. Open **Auth0 Dashboard**.
2. Open **Applications > APIs**.
3. Select **Create API**.
4. Enter `SimplaCRM API` as Name.
5. Enter `https://api.simplacrm.com` as Identifier.
6. Select `RS256` as Signing Algorithm.
7. Enable **RBAC**.
8. Enable **Add Permissions in Access Token**.
9. Save the API.

- [ ] API exists with identifier `https://api.simplacrm.com`.
- [ ] Signing algorithm is `RS256`.
- [ ] RBAC and permissions-in-token are enabled.

### Phase 2: Create the Web Frontend Auth0 Application
1. Open **Applications > Applications**.
2. Select **Create Application**.
3. Select type **Regular Web Application**.
4. Enter `SimplaCRM Web Local` as Name.
5. Set **Allowed Callback URLs** to `http://localhost:3001/auth/callback`.
6. Set **Allowed Logout URLs** to `http://localhost:3001`.
7. Set **Allowed Web Origins** to `http://localhost:3001`.
8. Save application settings.
9. Authorize this app to call API audience `https://api.simplacrm.com`.

- [ ] Web app is created and saved.
- [ ] Callback/logout/origin values match `localhost:3001`.
- [ ] API authorization is granted.

### Phase 3: Create the Portal Frontend Auth0 Application
1. Open **Applications > Applications**.
2. Select **Create Application**.
3. Select type **Regular Web Application**.
4. Enter `SimplaCRM Portal Local` as Name.
5. Set **Allowed Callback URLs** to `http://localhost:3003/api/auth/callback`.
6. Set **Allowed Logout URLs** to `http://localhost:3003`.
7. Set **Allowed Web Origins** to `http://localhost:3003`.
8. Save application settings.
9. Authorize this app to call API audience `https://api.simplacrm.com`.

- [ ] Portal app is created and saved.
- [ ] Callback/logout/origin values match `localhost:3003`.
- [ ] API authorization is granted.

### Phase 4: Generate Session Secrets Per Frontend App
1. Generate a random 32-byte hex secret for Web:
   ```shell
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```
2. Generate another random 32-byte hex secret for Portal using the same command.
3. Store each generated value only in its matching app env file.

**IF** both frontend apps read from one shared env file, **THEN** use distinct variable names (for example `WEB_AUTH0_SECRET` and `PORTAL_AUTH0_SECRET`).  
**IF** each frontend app has its own env file, **THEN** both can use `AUTH0_SECRET` with different values.

- [ ] Two different secrets were generated.
- [ ] No secret value is reused between Web and Portal.

### Phase 5: Map Environment Variables
1. Set the Web app env values:
   ```env
   APP_BASE_URL=http://localhost:3001
   AUTH0_DOMAIN=your-tenant-domain
   AUTH0_CLIENT_ID=web-app-client-id
   AUTH0_CLIENT_SECRET=web-app-client-secret
   AUTH0_SECRET=web-session-secret
   AUTH0_AUDIENCE=https://api.simplacrm.com
   ```
2. Set the Portal app env values:
   ```env
   AUTH0_BASE_URL=http://localhost:3003
   AUTH0_ISSUER_BASE_URL=https://your-tenant-domain
   AUTH0_CLIENT_ID=portal-app-client-id
   AUTH0_CLIENT_SECRET=portal-app-client-secret
   AUTH0_SECRET=portal-session-secret
   AUTH0_AUDIENCE=https://api.simplacrm.com
   ```
3. Set the API env values:
   ```env
   AUTH0_DOMAIN=your-tenant-domain
   AUTH0_AUDIENCE=https://api.simplacrm.com
   ```
4. Confirm API config does **not** include `AUTH0_SECRET` for JWT validation.

- [ ] Web, Portal, and API env files are populated.
- [ ] Audience matches `https://api.simplacrm.com` across all services.
- [ ] API has no frontend session secret configuration.

### Phase 6: Rotate Exposed Credentials and Secrets
1. Rotate Web Auth0 application **Client Secret**.
2. Rotate Portal Auth0 application **Client Secret**.
3. Regenerate Web `AUTH0_SECRET`.
4. Regenerate Portal `AUTH0_SECRET`.
5. Replace old values in local env files and secret managers.

- [ ] Both Auth0 app client secrets are rotated.
- [ ] Both frontend session secrets are rotated.
- [ ] Old values are no longer used.

## Common Mistakes & Fixes
| Common Mistake | Fix |
| :-- | :-- |
| Using one `AUTH0_SECRET` value for both frontend apps | Generate and store one unique secret per app. |
| API identifier in Auth0 does not match `AUTH0_AUDIENCE` in env | Update either dashboard identifier or env so values match exactly. |
| Using SPA app type instead of Regular Web Application | Recreate the app as **Regular Web Application**. |
| Missing callback URL for the correct local port | Update callback/logout/origin URLs to the correct app port and path. |
| Adding `AUTH0_SECRET` to backend API env | Remove it; API JWT validation uses domain, audience, and JWKS/issuer flow. |
| Continuing to use credentials exposed in chat/history | Rotate all exposed Auth0 client secrets and frontend session secrets immediately. |

## Success Criteria
- [ ] One Auth0 API exists with RS256 and RBAC enabled.
- [ ] Two distinct Auth0 Regular Web Applications exist (Web and Portal).
- [ ] Web and Portal are both authorized for the same API audience.
- [ ] Web and Portal each use a unique `AUTH0_SECRET`.
- [ ] API validates JWTs with `AUTH0_DOMAIN` and `AUTH0_AUDIENCE` only.
- [ ] Rotated secrets are active and previously exposed values are retired.

## Storage & Access
Store this playbook in `docs/playbooks/platform-infrastructure/Auth0 Setup.md` in the engineering repository.
Access is required for platform engineers and application engineers owning authentication setup.
Always Open policy: keep this playbook visible while configuring Auth0.

## Next review date
2026-09-30
