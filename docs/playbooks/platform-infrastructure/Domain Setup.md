# 🔐 Domain Setup Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | "Domain Setup" |
| Purpose | To configure Nginx and obtain/renew SSL certificates using Certbot in a safe, repeatable, and auditable way. |
| Owner | Alan Baldelobar |
| Last Updated | 2026-02-18 |
| Review Cycle | Every 90 days |

## Prerequisites
Before starting, ensure you have:

- [ ] **Server is already provisioned** (OS installed, SSH working)
- [ ] **Nginx installed** and running
- [ ] **Access to the server** (SSH keys or credentials confirmed)
- [ ] **Domain DNS record configured** (A/AAAA pointing to server IP)
- [ ] **Firewall allows HTTP/HTTPS** (ports 80 and 443 open)
- [ ] **Sudo/root access** on the server
- [ ] **Access to deployment paths** (where web content is served)

---

## Step-by-Step Checklist
### Phase 1: Validate DNS and Server Readiness

1. **Confirm DNS resolves to the server IP**:

```shell
dig +short your-domain.com
```

2. **Verify Nginx is running**:

```shell
sudo systemctl status nginx
```

3. **Check ports are open** (HTTP/HTTPS):

```shell
sudo ss -tulpn | grep -E ':(80|443)\b'
```

---

### Phase 2: Initial Nginx HTTP Setup (Before Certbot)

4. **Create initial Nginx server block (HTTP only)**. Example:

```
server {
    listen 80;
    server_name your-domain.com;

    location / {
        root /var/www/your-app;
        try_files $uri $uri/ /index.html;
    }
}
```

5. **Enable the site and reload Nginx**:

```shell
sudo ln -s /etc/nginx/sites-available/your-domain.conf /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

6. **Verify site is reachable over HTTP**:
   - Visit: `http://your-domain.com`
   - Or run:

```shell
curl -I http://your-domain.com
```

---

### Phase 3: Run Certbot (SSL Issuance)

7. **Install Certbot (if needed)**:

```shell
sudo apt update
sudo apt install certbot python3-certbot-nginx
```

8. **Issue and install certificate**:

```shell
sudo certbot --nginx -d your-domain.com
```

9. **Verify Certbot modified Nginx**:
   - It should create HTTPS server block(s)
   - It should add HTTP → HTTPS redirect

---

### Phase 4: Post‑Certbot Validation

10. **Test Nginx config and reload**:

```shell
sudo nginx -t && sudo systemctl reload nginx
```

11. **Verify HTTPS response**:

```shell
curl -I https://your-domain.com
```

12. **Check certificate details**:

```shell
sudo certbot certificates
```

---

### Phase 5: Auto-Renewal

13. **Verify renewal timer exists**:

```shell
systemctl list-timers | grep certbot
```

14. **Test renewal flow (dry run)**:

```shell
sudo certbot renew --dry-run
```

---

## Common Mistakes & Fixes
| Mistake                            | Fix                                                    |
| :--------------------------------- | :----------------------------------------------------- |
| DNS not pointing to server         | Fix DNS A/AAAA record and wait for propagation         |
| Port 80 blocked                    | Open firewall (UFW / security group)                   |
| Certbot fails validation           | Ensure HTTP works and domain resolves correctly        |
| Nginx config errors                | Run `sudo nginx -t` and fix syntax                     |
| SSL works but HTTP not redirecting | Re-run certbot with `--nginx` or add redirect manually |

---

## Success Criteria
This playbook is complete when:

- [ ] Nginx serves site content on HTTPS
- [ ] HTTP redirects to HTTPS
- [ ] Certbot shows valid certificates
- [ ] Auto-renewal is enabled and dry‑run passes

---

_Next review date: 2026-05-19_

## Storage & Access
Store this playbook in `docs/playbooks` within the engineering repository.
Access is required for all engineers, team leads, and operations stakeholders involved in execution.
Always Open policy: keep this playbook visible while running the workflow.

## Next review date
2026-09-24
