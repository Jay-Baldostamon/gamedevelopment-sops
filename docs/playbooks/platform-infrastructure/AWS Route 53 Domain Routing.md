# 🌐 AWS Route 53 Domain Routing Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | AWS Route 53 Domain Routing |
| Purpose | Configure Route 53 DNS records so an approved domain routes reliably to an EC2 instance IP or an AWS load balancer endpoint. |
| Owner | Engineering Platform Team |
| Last Updated | 2026-07-21 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] You have a formal domain requisition/approval from the Product department.
- [ ] You completed [Server Initialization](Server%20Initialization.md) for the target host/environment.
- [ ] You have AWS IAM access to Route 53 hosted zones and record management.
- [ ] You identified the target endpoint: EC2 public IP or ALB/NLB DNS name.
- [ ] You have access to validate public DNS propagation (`dig`, `nslookup`, or equivalent).
- [ ] You reviewed [Domain Setup](Domain%20Setup.md) for Nginx/TLS follow-through.

## Step-by-Step Checklist
### Phase 1: Confirm Domain and Target Inputs
1. **Confirm** Product-approved domain requisition details (domain/subdomain, environment, owner).
2. **Confirm** the hosted zone exists in the correct AWS account.
3. **Identify** the final routing target (EC2 public IP or load balancer DNS endpoint).
4. **Document** TTL and rollback owner before making changes.

**IF** the domain requisition is missing or unapproved, **THEN** stop and secure Product approval first.

- [ ] Domain requisition is approved and recorded.
- [ ] Correct hosted zone is identified.
- [ ] Target endpoint is confirmed.

### Phase 2: Create Route 53 Record
1. **Open** Route 53 hosted zone for the target domain.
2. **Create** the required DNS record for the hostname (for example `paige.simplabots.com`).
3. **Use** `A` record to EC2 public IP when routing directly to one instance.
4. **Use** `A` (Alias) record to ALB/NLB DNS name when routing through a load balancer.
5. **Set** TTL according to environment policy (lower for rollout windows, higher for stable routes).
6. **Save** the record and capture the change ID.

**IF** using a load balancer, **THEN** prefer Route 53 Alias to the ALB/NLB endpoint instead of hardcoding IPs.

- [ ] Record is created with correct type and target.
- [ ] TTL is set intentionally.
- [ ] Change ID is captured.

### Phase 3: Validate DNS Resolution and Reachability
1. **Query** DNS from a public resolver and confirm returned value matches expected target.
2. **Verify** the hostname resolves globally after propagation window.
3. **Probe** the endpoint over HTTP/HTTPS and confirm expected app response.
4. **Record** validation results in deployment notes.

**IF** DNS resolves correctly but app is unreachable, **THEN** troubleshoot server/listener/security group/reverse proxy before changing DNS again.

- [ ] DNS resolution matches expected endpoint.
- [ ] Public probe returns expected response.
- [ ] Validation evidence is documented.

### Phase 4: Operate and Maintain
1. **Review** DNS records after infrastructure changes (instance replacement, LB migration, environment cutover).
2. **Update** records immediately when endpoint ownership changes.
3. **Retire** stale records to avoid drift and ambiguous routing.
4. **Re-verify** records after major deployment or network topology changes.

**IF** routing target is ephemeral (single EC2 public IP), **THEN** plan migration to load balancer alias for stability.

- [ ] Active records map to current infrastructure.
- [ ] Stale records are removed.
- [ ] Post-change verification is completed.

## Common Mistakes & Fixes
| Common Mistake | Fix |
| :-- | :-- |
| Creating DNS without Product-approved domain requisition | Require documented Product approval before Route 53 changes. |
| Pointing production DNS to the wrong AWS account/hosted zone | Verify account and hosted zone ownership before record creation. |
| Using EC2 IP when an ALB should be used | Use Route 53 Alias to the load balancer for resilient routing. |
| Treating DNS success as application success | Validate DNS resolution and actual HTTP/HTTPS application response. |
| Leaving old records active after topology changes | Remove stale records and re-verify authoritative resolution. |

## Success Criteria
- [ ] Product domain requisition is approved and traceable.
- [ ] Server initialization prerequisite is complete.
- [ ] Route 53 record points to the correct EC2 IP or load balancer target.
- [ ] Public DNS resolution validates against expected endpoint.
- [ ] Application endpoint is reachable using the routed domain.
- [ ] Record ownership and maintenance notes are documented.

## Storage & Access
Store this playbook in `docs/playbooks/platform-infrastructure/AWS Route 53 Domain Routing.md`.
Access is required for platform, infrastructure, and release engineers managing DNS cutovers.
Always Open policy: keep this playbook visible while creating or modifying production-facing DNS records.

## Next review date
2026-10-19
