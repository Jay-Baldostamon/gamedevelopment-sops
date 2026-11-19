# 🖥️ Server Initialization Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | Server Initialization |
| Purpose | Ensure consistent, secure, and scalable server infrastructure setup from scratch. Prevents security gaps, configuration drift, and deployment failures that occur when infrastructure is provisioned inconsistently. |
| Owner | Alan Francis Baldelobar |
| Last Updated | 2026-02-09 |
| Review Cycle | Every 90 days |

## Prerequisites
Before starting this playbook, verify:

- [ ] Cloud provider account access with appropriate IAM permissions
- [ ] Budget and resource quotas approved for the environment
- [ ] Architecture review completed and documented
- [ ] Naming conventions and tagging standards defined
- [ ] Secrets management system available (e.g., AWS Secrets Manager, HashiCorp Vault)
- [ ] Monitoring and logging platform accounts ready (e.g., Datadog, CloudWatch, ELK)
- [ ] CI/CD pipeline exists or is planned
- [ ] Security team approval for network design and access controls

---

## Step-by-Step Checklist
### Phase 1: Infrastructure Design

**1\. Define environment strategy**

- [ ] Document whether using per-tenant, per-environment (dev/staging/prod), or hybrid approach
- [ ] Record decision in infrastructure documentation (e.g., Confluence, Notion, or repo README)
- [ ] **IF** multi-tenant, **THEN** plan for tenant isolation (separate VPCs, namespaces, or accounts)

**2\. Select cloud provider and regions**

- [ ] Choose primary cloud provider (AWS, Azure, GCP, etc.)
- [ ] Select primary region based on user location, compliance, and latency requirements
- [ ] **IF** high availability required, **THEN** select secondary region for disaster recovery
- [ ] Document region selection with justification

**3\. Decide on compute architecture**

- [ ] Choose: Containerization (Docker/Kubernetes), VMs (EC2/Compute Engine), or Serverless (Lambda/Cloud Functions)
- [ ] Document choice with rationale (cost, scalability, team expertise)
- [ ] **IF** containers chosen, **THEN** proceed to container-specific steps in Phase 4

---

### Phase 2: Provisioning Approach

**4\. Select Infrastructure as Code (IaC) tool**

- [ ] Choose tool: Terraform, Pulumi, CloudFormation, or other
- [ ] Set up IaC repository with version control (Git)
- [ ] Configure remote state storage (e.g., S3 \+ DynamoDB for Terraform, cloud storage for others)
- [ ] Enable state file encryption and access controls

**5\. Define base IaC modules**

- [ ] Create module for **networking** (VPC, subnets, route tables)
- [ ] Create module for **security groups/firewall rules**
- [ ] Create module for **storage** (block storage, object storage, databases)
- [ ] Create module for **compute** (instances, clusters, node pools)
- [ ] Store modules in versioned repository with clear README documentation

**6\. Establish code review process**

- [ ] Require peer review for all IaC changes
- [ ] Set up automated linting and validation (e.g., `terraform validate`, `tflint`)
- [ ] Document approval workflow in team documentation

---

### Phase 3: Baseline Security & Networking

**7\. Design VPC/VNet structure**

- [ ] Create VPC/VNet with CIDR block documented
- [ ] Define public subnets (for load balancers, bastion hosts)
- [ ] Define private subnets (for application servers, databases)
- [ ] Define isolated subnets (for sensitive data processing, if applicable)
- [ ] Configure route tables and NAT gateways/instances

**8\. Configure firewalls and security groups**

- [ ] Create security group for **load balancers** (allow HTTP/HTTPS from internet)
- [ ] Create security group for **application servers** (allow traffic only from load balancers)
- [ ] Create security group for **databases** (allow traffic only from application servers)
- [ ] Enable logging for all security group rule violations

**9\. Set up ingress/egress rules**

- [ ] Define ingress rules for public-facing services
- [ ] Restrict egress to only required external services (API endpoints, package registries)
- [ ] **IF** WAF needed, **THEN** configure AWS WAF, Cloudflare, or equivalent with OWASP rule sets
- [ ] Document all rules in network diagram

**10\. Configure load balancers**

- [ ] Provision application load balancer (ALB) or network load balancer (NLB)
- [ ] Configure SSL/TLS certificates (use AWS ACM, Let's Encrypt, or corporate CA)
- [ ] Set up health check endpoints
- [ ] Enable access logs to S3 or equivalent

**11\. Establish access control mechanisms**

- [ ] **For SSH access:** Set up bastion host or AWS Systems Manager Session Manager (no direct SSH)
- [ ] **For VPN:** Configure VPN gateway if remote access required
- [ ] **For dashboards:** Enable SSO (SAML, OAuth) for monitoring/logging platforms
- [ ] Create and document emergency access procedures ("break glass" accounts)

---

### Phase 4: Server / Cluster Setup

#### IF using VMs:

**12\. Prepare base VM images**

- [ ] Choose base OS image (Ubuntu LTS, Amazon Linux 2, RHEL, etc.)
- [ ] Create custom AMI/image with hardening applied:  
       - [ ] Disable root login  
       - [ ] Remove unnecessary packages  
       - [ ] Configure automatic security updates  
       - [ ] Install base monitoring/logging agents
- [ ] Version and tag image in cloud provider catalog

**13\. Apply configuration management**

- [ ] Choose tool: Ansible, Chef, Puppet, or cloud-init
- [ ] Write playbooks/recipes for:  
       - [ ] User account creation and SSH key distribution  
       - [ ] Firewall configuration (ufw, iptables)  
       - [ ] Application dependencies installation
- [ ] Test configuration on staging instance
- [ ] Store configuration code in version control

#### IF using containers:

**14\. Prepare base container images**

- [ ] Choose base image (Alpine, Debian Slim, distroless, etc.)
- [ ] Create Dockerfile with:  
       - [ ] Minimal layers  
       - [ ] Non-root user defined  
       - [ ] Security scanning integrated (Trivy, Snyk)
- [ ] Push to private container registry (ECR, GCR, ACR, Harbor)
- [ ] Tag images with version and commit SHA

**15\. Set up container orchestrator**

- [ ] **IF Kubernetes:** Provision cluster using EKS, GKE, AKS, or self-managed  
       - [ ] Define node pools with resource limits  
       - [ ] Configure autoscaling (HPA, Cluster Autoscaler)  
       - [ ] Install ingress controller (NGINX, Traefik, ALB Ingress)  
       - [ ] Set up Helm for package management
- [ ] **IF ECS/Fargate:** Define task definitions and services
- [ ] Apply RBAC policies and service accounts
- [ ] Enable Pod Security Standards or equivalent

**16\. Bootstrap cluster essentials**

- [ ] Install cert-manager for certificate automation
- [ ] Deploy secrets management integration (External Secrets Operator, CSI driver)
- [ ] Configure network policies for pod-to-pod communication
- [ ] Set resource quotas and limit ranges per namespace

---

### Phase 5: Runtime Environment

**17\. Install required runtimes**

- [ ] Install language runtimes (Node.js, Python, Java, Go, etc.) with specific versions documented
- [ ] Install database clients if needed
- [ ] **IF** using containers, **THEN** ensure runtimes are in container images, not on host

**18\. Install monitoring agents**

- [ ] Deploy metrics collection agent (Datadog, Prometheus node exporter, CloudWatch agent)
- [ ] Verify agent is reporting data to monitoring platform
- [ ] Configure custom metrics if applicable

**19\. Install logging agents**

- [ ] Deploy log forwarding agent (Fluentd, Logstash, CloudWatch Logs agent)
- [ ] Configure log rotation and retention policies
- [ ] Verify logs appearing in centralized platform (ELK, Splunk, CloudWatch Logs)

**20\. Install security agents**

- [ ] Deploy endpoint protection (CrowdStrike, Wiz, Falco for containers)
- [ ] Enable vulnerability scanning
- [ ] Configure intrusion detection alerts

**21\. Configure deployment targets**

- [ ] Integrate with CI/CD platform (GitHub Actions, GitLab CI, Jenkins, CircleCI)
- [ ] Create deployment scripts or Helm charts
- [ ] Set up deployment credentials in CI/CD secrets
- [ ] Define deployment stages (dev → staging → prod)
- [ ] Test manual deployment to server/cluster

```shell
### Example deployment script integration test
./deploy.sh --environment staging --version v1.0.0 --dry-run
```

---

### Phase 6: Observability & Backups

**22\. Set up metrics pipeline**

- [ ] Configure application-level metrics (response time, error rates, throughput)
- [ ] Configure infrastructure metrics (CPU, memory, disk, network)
- [ ] Create initial dashboards for system health
- [ ] **IF** using Kubernetes, **THEN** deploy kube-state-metrics and metrics-server

**23\. Set up log aggregation**

- [ ] Verify all application logs flowing to central platform
- [ ] Create log parsing rules for structured logs (JSON)
- [ ] Set up initial log-based alerts (error rate spikes, critical errors)

**24\. Define backup and restore strategy**

- [ ] **For databases:** Configure automated snapshots (daily minimum)
- [ ] **For stateful data:** Set up volume snapshots or object storage replication
- [ ] Document restore procedure with RTO/RPO targets
- [ ] **Test restore process** on non-production environment

**25\. Configure health checks**

- [ ] Create `/health` or `/readiness` endpoints in application
- [ ] Configure load balancer health checks pointing to these endpoints
- [ ] Set health check intervals (e.g., every 30 seconds)
- [ ] Configure failure thresholds before marking service unhealthy

**26\. Set up alerting**

- [ ] Create alerts for:  
       - [ ] Service downtime (health check failures)  
       - [ ] High error rates (\>5% of requests)  
       - [ ] Resource exhaustion (CPU \>80%, memory \>85%, disk \>90%)  
       - [ ] Security events (unauthorized access attempts)
- [ ] Configure alert routing to on-call team (PagerDuty, Opsgenie, Slack)

---

### Phase 7: Validation

**27\. Deploy hello world application**

- [ ] Create simple "hello world" service:

```
### Example Dockerfile for validation
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80
```

- [ ] Deploy to newly initialized server/cluster
- [ ] Verify service is accessible via load balancer DNS/IP
- [ ] Check logs are appearing in logging platform
- [ ] Check metrics are appearing in monitoring platform

**28\. Test basic endpoints**

- [ ] Send HTTP GET request to load balancer endpoint
- [ ] Verify response code 200 and expected content
- [ ] Test SSL/TLS certificate validity
- [ ] Verify response headers include security headers (if configured)

```shell
### Example validation commands
curl -I https://your-loadbalancer-dns.com
curl https://your-loadbalancer-dns.com/health
```

**29\. Perform load testing**

- [ ] Use load testing tool (Apache Bench, wrk, k6, Locust)
- [ ] Run sustained load test (e.g., 100 req/sec for 5 minutes)
- [ ] Verify autoscaling triggers if configured
- [ ] Check no errors occur during load test
- [ ] Review metrics during test (latency percentiles, error rates)

```shell
### Example load test with wrk
wrk -t12 -c400 -d30s https://your-loadbalancer-dns.com
```

**30\. Conduct security review**

- [ ] **Port scanning:** Verify only necessary ports exposed (443, 80, or specific application ports)
- [ ] **Credential audit:** Ensure no hardcoded credentials in code or configuration
- [ ] **Access review:** Verify IAM roles follow least privilege principle
- [ ] **Secret management:** Confirm all secrets stored in secrets manager, not plaintext
- [ ] **Network isolation:** Test that private subnets cannot be accessed from internet
- [ ] **Logging audit:** Verify security events (login attempts, API calls) are logged

**31\. Document the deployment**

- [ ] Update architecture diagrams with actual deployed infrastructure
- [ ] Document all endpoints, credentials storage locations, and access procedures
- [ ] Create runbook for common operational tasks (restart service, scale up/down, access logs)
- [ ] Share documentation with engineering and operations teams
- [ ] **IF** production environment, **THEN** schedule post-deployment review meeting

---

## Common Mistakes & Fixes
| Mistake                                                              | Fix                                                                                                             |
| :------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| Hardcoding credentials in IaC files                                  | Always use secrets manager references or encrypted variables; add pre-commit hooks to scan for secrets          |
| Skipping VPC/subnet planning, leading to IP exhaustion               | Design CIDR blocks with future growth in mind; use /16 or /20 for VPCs, reserve space for expansion             |
| Opening security groups to 0.0.0.0/0 for SSH/RDP                     | Restrict to VPN IP ranges or bastion hosts only; use SSM Session Manager for AWS                                |
| Not testing backup restore procedures                                | Schedule quarterly disaster recovery drills; document restore time and steps                                    |
| Deploying without health checks, causing downtime during deployments | Always implement `/health` endpoints before first deployment; test with load balancer before production traffic |
| Forgetting to enable logging/monitoring before launch                | Make observability setup mandatory in Phase 6; add verification steps to validation phase                       |
| Using outdated or unpatched base images                              | Automate image scanning in CI/CD; rebuild base images monthly or when CVEs announced                            |
| Not documenting architecture decisions                               | Create ADR (Architecture Decision Record) template; require ADR for major infrastructure choices                |
| Skipping load testing, discovering performance issues in production  | Make load testing mandatory for all new infrastructure; set performance baselines in staging                    |
| Granting overly broad IAM permissions                                | Start with no permissions; add only what's needed based on actual errors; use IAM policy simulator to test      |

---

## Success Criteria
Initialization is complete when:

- [ ] All IaC code is version controlled, peer-reviewed, and successfully applied
- [ ] Infrastructure passes automated security scanning (no critical vulnerabilities)
- [ ] Test application successfully deployed and accessible via load balancer
- [ ] Health checks return healthy status
- [ ] Metrics and logs flowing to monitoring platforms for all components
- [ ] Load testing shows acceptable performance (meets defined SLA targets)
- [ ] Security review completed with no high-risk findings
- [ ] Backup and restore tested successfully
- [ ] All access is restricted to authorized personnel via SSO/VPN/bastion
- [ ] Documentation published and reviewed by at least two team members
- [ ] Runbook created for operational tasks
- [ ] Team trained on accessing and troubleshooting the new infrastructure

---

**Next Review Date:** 2026-05-10

## Storage & Access
Store this playbook in `docs/playbooks` within the engineering repository.
Access is required for all engineers, team leads, and operations stakeholders involved in execution.
Always Open policy: keep this playbook visible while running the workflow.

## Next review date
2026-09-24
