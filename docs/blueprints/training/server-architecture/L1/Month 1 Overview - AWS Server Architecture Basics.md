# Month 1 Overview: AWS Server Architecture Basics

| Field          | Value                                          |
| -------------- | ---------------------------------------------- |
| Blueprint Name | Month 1 Overview - AWS Server Architecture Basics |
| Track          | server-architecture                            |
| Level          | month                                          |
| Owner          | Direct Supervisor / Infrastructure Lead        |
| Last Updated   | 2026-07-25                                     |
| Review Cycle   | Every 30 days                                  |
| Status         | active                                         |

Month 1 builds foundational competency in the AWS server architecture ecosystem used across engineering projects. Trainees learn how infrastructure is provisioned, deployed, routed, and observed — grounded in the organization's live platform-infrastructure playbooks. By the end of the month, a trainee should be able to describe every layer of a running EC2-hosted application and navigate the AWS console and CLI safely under supervision.

## What to Expect This Month

- **Week 1:** AWS account structure, IAM fundamentals, and the VPC/networking model — understanding how access and network isolation are enforced before any compute is provisioned
- **Week 2:** EC2 compute lifecycle, storage tiers (EBS, S3), and CodeDeploy deployment automation — following the [EC2 Deployment Host Initialization](../../../../playbooks/platform-infrastructure/EC2%20Deployment%20Host%20Initialization.md) and [AWS CodeDeploy Setup and Deployment](../../../../playbooks/platform-infrastructure/AWS%20CodeDeploy%20Setup%20and%20Deployment.md) playbooks
- **Week 3:** Domain routing, reverse proxy configuration, and TLS — covering Route 53 DNS records, Nginx upstream alignment, and certificate issuance as described in [AWS Route 53 Domain Routing](../../../../playbooks/platform-infrastructure/AWS%20Route%2053%20Domain%20Routing.md) and [Domain Setup](../../../../playbooks/platform-infrastructure/Domain%20Setup.md)
- **Week 4:** Observability, security hardening, and the project maturity framework — reading CloudWatch logs and metrics, reviewing security group rules, and placing infrastructure decisions in context using the [Engineering Architecture Levels & Project Maturity Framework](../../../../playbooks/platform-infrastructure/Engineering%20Architecture%20Levels%20%26%20Project%20Maturity%20Framework.md)

## Prerequisite Permissions

All practical exercises require a **dedicated sandbox AWS account or isolated sandbox VPC** — trainees must never operate against staging or production environments during Month 1.

Trainees must hold **AWS-Q1 operational qualification** (or be actively working toward it under supervision) as defined in the [AWS Operational Qualification and Access Framework](../../../../playbooks/platform-infrastructure/AWS%20Operational%20Qualification%20and%20Access%20Framework.md). This maps to **AWS-A1 supervised access** — no unilateral production authority.

The table below lists the **permission categories** required to complete Month 1 exercises. Each daily template will include the specific inline IAM policy that must be attached to the trainee's sandbox IAM user before that day's session begins.

| Permission Category       | Services Covered                              | Access Type | Required From |
| ------------------------- | --------------------------------------------- | ----------- | ------------- |
| Identity and access       | IAM (read-only), STS                          | Read        | Day 1         |
| Network inspection        | VPC, Subnets, Route Tables, Security Groups   | Read        | Day 1         |
| Compute — view            | EC2 (describe instances, AMIs, key pairs)     | Read        | Day 1         |
| Compute — sandbox launch  | EC2 (run, start, stop, terminate in sandbox VPC only) | Scoped write | Day 5  |
| Object storage            | S3 (read/write on designated training bucket) | Scoped write | Day 6        |
| Deployment agent          | CodeDeploy (describe apps, deployments, groups) | Read       | Day 8         |
| Deployment execution      | CodeDeploy (create deployment in sandbox group) | Scoped write | Day 9      |
| DNS inspection            | Route 53 (list hosted zones, list records)    | Read        | Day 11        |
| Logs and metrics          | CloudWatch Logs (read), CloudWatch Metrics (read) | Read   | Day 16        |
| Instance management       | SSM Session Manager (start session on sandbox instances) | Scoped write | Day 3 |

**Security baseline requirements (must be met before any access is granted):**

- [ ] Trainee has an individual company IAM identity — no shared credentials
- [ ] MFA is enrolled and enforced on the trainee IAM user
- [ ] Trainee is using a company-approved endpoint (EDR installed, disk encryption active)
- [ ] Trainee has acknowledged the credential handling policy (no plaintext secrets, no repo/Slack leakage)
- [ ] A named supervisor is assigned for all AWS-A1 supervised operations during Month 1

## Month 1 Success Criteria

- [ ] Trainee can describe the relationship between IAM users, roles, policies, and resource-level permissions
- [ ] Trainee can navigate a VPC and identify subnets, route tables, and security group rules for a running application
- [ ] Trainee has successfully initialized and connected to an EC2 instance in the sandbox environment
- [ ] Trainee has triggered at least one CodeDeploy deployment and diagnosed the hook execution logs
- [ ] Trainee can explain how a domain name resolves from Route 53 through Nginx to an application port
- [ ] Trainee can locate and read application and deployment logs in CloudWatch
- [ ] All day-level outputs are submitted in the assigned daily GitHub issue and referenced in Slack `#engineering-training-standups`
- [ ] Month 1 supervisor sign-off is completed confirming AWS-A1 readiness

## Month 1 Quality Gate Standard

- **Blocking:**
  - Day 5 sandbox EC2 connection validation (supervisor must witness or verify evidence)
  - Day 10 CodeDeploy deployment success with hook log review
  - Day 15 end-to-end DNS → Nginx → application trace exercise
  - Day 20 retrospective submission and supervisor transition readiness confirmation
- **Non-blocking:**
  - Additional reading of playbooks beyond the day's assigned scope
  - Optional exploration of AWS cost tooling, Savings Plans, or Reserved Instance pricing
  - Extended CloudWatch dashboard customization beyond required metrics

## Month 1 Operating Metrics

- Daily artifact completion rate across Slack standups and daily GitHub issues
- Number of supervised AWS console or CLI sessions completed vs. planned
- Number of blocked days caused by missing permissions, resolved vs. unresolved
- CodeDeploy deployment success rate during Week 2 exercises
- Supervisor sign-off timeliness on blocking gates

## Guiding Principle

The month is successful when the trainee can trace a live request from DNS through the load balancer and reverse proxy to application code — and confidently explain who has access to each layer and why. Understanding the system as a whole matters more than memorizing individual service APIs.
