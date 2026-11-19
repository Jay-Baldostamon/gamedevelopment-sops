# Engineering Playbooks Guide (By Level and Discipline)

Use this as a **use-case table of contents** for SOPs in this folder.  
Pick your level first, then your discipline, then the situation you are in.

## Project-specific SOPs

Use these first when the workflow is tied to a named tool, repository pattern, or project-specific database process.

### BPC CRM

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Connecting GitHub Copilot Desktop to the engineering MCP endpoint | [GitHub Copilot Desktop MCP Server Connection](ai-enablement/github-copilot-desktop/GitHub%20Copilot%20Desktop%20MCP%20Server%20Connection.md) | [GitHub Copilot Desktop Installation and Setup](ai-enablement/github-copilot-desktop/GitHub%20Copilot%20Desktop%20Installation%20and%20Setup.md) |
| Creating or changing BPC CRM operational tables, indexes, or data structures | [BPC CRM Data-Engineering-Owned Schema](data/BPC%20CRM%20Data%20Engineering%20Owned%20Schema.md) | [MySQL ERD Design](data/MySQL%20ERD%20Design.md) |
| Navigating MyQuery to inspect or query BPC CRM data | [MyQuery Navigation](data/MyQuery%20Navigation.md) | [BPC CRM Data-Engineering-Owned Schema](data/BPC%20CRM%20Data%20Engineering%20Owned%20Schema.md) |
| Running Laravel migrations, rollbacks, or seed refreshes in a repository that explicitly uses application-managed schema | [Laravel Migrations and Seeding](data/Laravel%20Migrations%20and%20Seeding.md) | [MySQL Table Creation & Data Migration](data/MySQL%20Table%20Creation%20%26%20Data%20Migration.md) |
| Building BPC CRM mergequeries with Copilot Desktop | [BPC CRM Mergequery Builder Skill](ai-enablement/github-copilot-desktop/BPC%20CRM%20Mergequery%20Builder%20Skill.md) | [MyQuery Navigation](data/MyQuery%20Navigation.md) |
| Verifying whether a DB-centric GitHub issue is actually resolved | [DB Issue Verifier Agent](ai-enablement/github-copilot-desktop/DB%20Issue%20Verifier%20Agent.md) | [MyQuery Navigation](data/MyQuery%20Navigation.md) |

### SimplaBots

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Setting up Auth0 for Web, Portal, and API in local development | [Auth0 Setup](platform-infrastructure/Auth0%20Setup.md) | [Backend Architecture Standards](platform-infrastructure/Backend%20Architecture%20Standards.md) |
| Routing an approved domain in Route 53 to EC2 or a load balancer | [AWS Route 53 Domain Routing](platform-infrastructure/AWS%20Route%2053%20Domain%20Routing.md) | [Domain Setup](platform-infrastructure/Domain%20Setup.md) |
| Preparing a new EC2 host so CodeDeploy setup can run safely | [EC2 Deployment Host Initialization](platform-infrastructure/EC2%20Deployment%20Host%20Initialization.md) | [Server Initialization](platform-infrastructure/Server%20Initialization.md) |
| Running AWS CodeDeploy setup and first deployment on EC2 | [AWS CodeDeploy Setup and Deployment](platform-infrastructure/AWS%20CodeDeploy%20Setup%20and%20Deployment.md) | [CodeDeploy Hook Runtime and Build Hardening](platform-infrastructure/CodeDeploy%20Hook%20Runtime%20and%20Build%20Hardening.md) |
| Stabilizing CodeDeploy lifecycle hooks for on-instance Node/Next.js builds | [CodeDeploy Hook Runtime and Build Hardening](platform-infrastructure/CodeDeploy%20Hook%20Runtime%20and%20Build%20Hardening.md) | [Domain Setup](platform-infrastructure/Domain%20Setup.md) |
| Recovering CodeDeploy agent reliability on Ubuntu 26.04 after apt maintenance | [Ubuntu 26.04 CodeDeploy Agent Install and Recovery](platform-infrastructure/Ubuntu%2026.04%20CodeDeploy%20Agent%20Install%20and%20Recovery.md) | [AWS CodeDeploy Setup and Deployment](platform-infrastructure/AWS%20CodeDeploy%20Setup%20and%20Deployment.md) |
| Determining the correct infrastructure tier for a new or evolving project | [Engineering Architecture Levels & Project Maturity Framework](platform-infrastructure/Engineering%20Architecture%20Levels%20%26%20Project%20Maturity%20Framework.md) | [Backend Architecture Standards](platform-infrastructure/Backend%20Architecture%20Standards.md) |
| Defining AWS qualification, least-privilege access, and operational authorization boundaries | [AWS Operational Qualification and Access Framework](platform-infrastructure/AWS%20Operational%20Qualification%20and%20Access%20Framework.md) | [Server Initialization](platform-infrastructure/Server%20Initialization.md) |
| Responding to a failed beta deployment caused by a database migration | [Beta Migration DB Failure](delivery-and-quality/Beta%20Migration%20DB%20Failure.md) | [CI-CD Deployment](delivery-and-quality/CI-CD%20Deployment.md) |
| Running daily QA planning, execution, and handoff | [QA Daily Testing Process](quality-assurance/QA%20Daily%20Testing%20Process.md) | [Playwright Reproduction and Debugging](quality-assurance/Playwright%20Reproduction%20and%20Debugging.md) |
| Intaking and resolving a QA-reported issue as a Development Engineer | [Development Engineer QA Issue Intake](quality-assurance/Development%20Engineer%20QA%20Issue%20Intake.md) | [Playwright Reproduction and Debugging](quality-assurance/Playwright%20Reproduction%20and%20Debugging.md) |
| Triaging a rollout regression alert from the bug tracker and coordinating dev + QA ownership | [Rollout Regression Alert Triage](quality-assurance/Rollout%20Regression%20Alert%20Triage.md) | [QA Failure Evidence Review](quality-assurance/QA%20Failure%20Evidence%20Review.md) |

## Role and level quick jump

| Career Ladder | Suggested guide section |
| :-- | :-- |
| [Backend L1 - Junior Engineer](../career-ladder/backend/L1%20-%20Junior%20Engineer.md) / [Frontend L1 - Junior Engineer](../career-ladder/frontend/L1%20-%20Junior%20Engineer.md) | [L1 - Junior Engineer](#l1---junior-engineer) |
| [Backend L2 - Mid-level Engineer](../career-ladder/backend/L2%20-%20Mid-level%20Engineer.md) / [Frontend L2 - Mid-level Engineer](../career-ladder/frontend/L2%20-%20Mid-level%20Engineer.md) | [L2 - Mid-level Engineer](#l2---mid-level-engineer) |
| [Backend L3 - Senior Engineer](../career-ladder/backend/L3%20-%20Senior%20Engineer.md) | [L3 - Senior Engineer](#l3---senior-engineer) |
| [Backend L4 - Staff Engineer](../career-ladder/backend/Individual%20Contributor/L4%20-%20Staff%20Engineer.md) / [Backend L4 - Engineering Manager](../career-ladder/backend/Engineering%20Manager/L4%20-%20Engineering%20Manager.md) | [L4 - Staff / Engineering Manager](#l4---staff--engineering-manager) |
| [Backend L5 - Principal Engineer](../career-ladder/backend/Individual%20Contributor/L5%20-%20Principal%20Engineer.md) / [Backend L5 - Director of Engineering](../career-ladder/backend/Engineering%20Manager/L5%20-%20Director%20of%20Engineering.md) | [L5 - Principal / Director](#l5---principal--director) |
| [Backend L6 - Chief Architect](../career-ladder/backend/Individual%20Contributor/L6%20-%20Chieft%20Architect.md) / [Backend L6 - Head of Engineering](../career-ladder/backend/Engineering%20Manager/L6%20-%20Head%20of%20Engineering.md) | [L6 - Org-level Leadership](#l6---org-level-leadership) |

---

## L1 - Junior Engineer

### Backend

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Blocked while debugging and need better prompts for AI help | [AI Prompt Engineering](ai-enablement/AI%20Prompt%20Engineering.md) | [Incident Response](incident-response/Incident%20Response.md) |
| Creating your first issue/task from requirement notes | [GitHub Issue Task Creator](ai-enablement/GitHub%20Issue%20Task%20Creator.md) | [Technical Feasibility Assessment](delivery-and-quality/Technical%20Feasibility%20Assessment.md) |
| Drafting a PR description in VS Code using Copilot agent workflows | [PR Description Creator Agent (VS Code)](ai-enablement/PR%20Description%20Creator%20Agent%20(VS%20Code).md) | [GitHub Pull Request](delivery-and-quality/GitHub%20Pull%20Request.md) |
| Opening or updating a PR | [GitHub Pull Request](delivery-and-quality/GitHub%20Pull%20Request.md) | [CI-CD Deployment](delivery-and-quality/CI-CD%20Deployment.md) |
| Asked to follow backend architecture conventions | [Backend Architecture Standards](platform-infrastructure/Backend%20Architecture%20Standards.md) | [SOP Creation](governance/SOP%20Creation.md) |
| Asked to join sprint planning and standups | [Sprint Planning](planning-and-reporting/Sprint%20Planning.md) | [Engineering Standups via Slack](planning-and-reporting/Engineering%20Standups%20via%20Slack.md) |
| Blocked by another team and need the approved routing path | [Cross-Team Escalation & Unblocking Protocol](planning-and-reporting/Cross-Team%20Escalation%20and%20Unblocking.md) | [Team Lead Absence Coverage](planning-and-reporting/Team%20Lead%20Absence%20Coverage.md) |
| Setting up your password manager to comply with the security policy | [Vaultwarden Password Manager Setup](platform-infrastructure/Vaultwarden%20Password%20Manager%20Setup.md) | [Onboarding](people-operations/Onboarding.md) |
| Setting up your personal OpenRouter API key for AI coding tools | [OpenRouter Personal API Key](ai-enablement/OpenRouter%20Personal%20Key%20Setup.md) | [AI Prompt Engineering](ai-enablement/AI%20Prompt%20Engineering.md) |
| Earning time off the weekly #ai-fun-share with an approved AI prototype | [AI Fun Share Prototype Exemption](planning-and-reporting/AI%20Fun%20Share%20Prototype%20Exemption.md) | [Sprint Planning](planning-and-reporting/Sprint%20Planning.md) |

### Frontend

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Debugging UI issues and need better AI-assisted triage | [AI Prompt Engineering](ai-enablement/AI%20Prompt%20Engineering.md) | [Incident Response](incident-response/Incident%20Response.md) |
| Drafting a PR description in VS Code using Copilot agent workflows | [PR Description Creator Agent (VS Code)](ai-enablement/PR%20Description%20Creator%20Agent%20(VS%20Code).md) | [GitHub Pull Request](delivery-and-quality/GitHub%20Pull%20Request.md) |
| Preparing your first frontend PR | [GitHub Pull Request](delivery-and-quality/GitHub%20Pull%20Request.md) | [CI-CD Deployment](delivery-and-quality/CI-CD%20Deployment.md) |
| Creating implementation tasks from design/product notes | [GitHub Issue Task Creator](ai-enablement/GitHub%20Issue%20Task%20Creator.md) | [Technical Feasibility Assessment](delivery-and-quality/Technical%20Feasibility%20Assessment.md) |
| Joining team planning rituals | [Sprint Planning](planning-and-reporting/Sprint%20Planning.md) | [Engineering Standups via Slack](planning-and-reporting/Engineering%20Standups%20via%20Slack.md) |
| Blocked by another team and need the approved routing path | [Cross-Team Escalation & Unblocking Protocol](planning-and-reporting/Cross-Team%20Escalation%20and%20Unblocking.md) | [Team Lead Absence Coverage](planning-and-reporting/Team%20Lead%20Absence%20Coverage.md) |
| Setting up your password manager to comply with the security policy | [Vaultwarden Password Manager Setup](platform-infrastructure/Vaultwarden%20Password%20Manager%20Setup.md) | [Onboarding](people-operations/Onboarding.md) |
| Setting up your personal OpenRouter API key for AI coding tools | [OpenRouter Personal API Key](ai-enablement/OpenRouter%20Personal%20Key%20Setup.md) | [AI Prompt Engineering](ai-enablement/AI%20Prompt%20Engineering.md) |
| Earning time off the weekly #ai-fun-share with an approved AI prototype | [AI Fun Share Prototype Exemption](planning-and-reporting/AI%20Fun%20Share%20Prototype%20Exemption.md) | [Sprint Planning](planning-and-reporting/Sprint%20Planning.md) |

### Database

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Exploring an unfamiliar schema or tracing table relationships | [MyQuery Navigation](data/MyQuery%20Navigation.md) | [MySQL ERD Design](data/MySQL%20ERD%20Design.md) |
| Designing a new schema/table structure | [MySQL ERD Design](data/MySQL%20ERD%20Design.md) | [MySQL Table Creation & Data Migration](data/MySQL%20Table%20Creation%20&%20Data%20Migration.md) |
| Running Laravel migrations, rollbacks, and seed refreshes | [Laravel Migrations and Seeding](data/Laravel%20Migrations%20and%20Seeding.md) | [MySQL Table Creation & Data Migration](data/MySQL%20Table%20Creation%20&%20Data%20Migration.md) |
| Executing a table creation or data migration | [MySQL Table Creation & Data Migration](data/MySQL%20Table%20Creation%20&%20Data%20Migration.md) | [GitHub Pull Request](delivery-and-quality/GitHub%20Pull%20Request.md) |
| Deploying/extracting QRF data | [QRF Deployment and Extraction](data/QRF%20Deployment%20and%20Extraction.md) | [Incident Response](incident-response/Incident%20Response.md) |
| Setting up your password manager to comply with the security policy | [Vaultwarden Password Manager Setup](platform-infrastructure/Vaultwarden%20Password%20Manager%20Setup.md) | [Onboarding](people-operations/Onboarding.md) |
| Setting up your personal OpenRouter API key for AI coding tools | [OpenRouter Personal API Key](ai-enablement/OpenRouter%20Personal%20Key%20Setup.md) | [AI Prompt Engineering](ai-enablement/AI%20Prompt%20Engineering.md) |
| Earning time off the weekly #ai-fun-share with an approved AI prototype | [AI Fun Share Prototype Exemption](planning-and-reporting/AI%20Fun%20Share%20Prototype%20Exemption.md) | [Sprint Planning](planning-and-reporting/Sprint%20Planning.md) |

---

## L2 - Mid-level Engineer

### Backend

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Scoping medium-complexity work before implementation | [Technical Feasibility Assessment](delivery-and-quality/Technical%20Feasibility%20Assessment.md) | [Sprint Planning](planning-and-reporting/Sprint%20Planning.md) |
| Running deployment and release ownership | [CI-CD Deployment](delivery-and-quality/CI-CD%20Deployment.md) | [Hotfix Process](delivery-and-quality/Hotfix%20Process.md) |
| Improving team quality bar through reviews | [GitHub Pull Request](delivery-and-quality/GitHub%20Pull%20Request.md) | [SOP Creation](governance/SOP%20Creation.md) |
| Standardizing architecture decisions in your area | [Backend Architecture Standards](platform-infrastructure/Backend%20Architecture%20Standards.md) | [Technical Feasibility Assessment](delivery-and-quality/Technical%20Feasibility%20Assessment.md) |

### Frontend

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Breaking larger features into scoped implementation tasks | [Technical Feasibility Assessment](delivery-and-quality/Technical%20Feasibility%20Assessment.md) | [GitHub Issue Task Creator](ai-enablement/GitHub%20Issue%20Task%20Creator.md) |
| Leading peer review and merge quality | [GitHub Pull Request](delivery-and-quality/GitHub%20Pull%20Request.md) | [CI-CD Deployment](delivery-and-quality/CI-CD%20Deployment.md) |
| Handling high-priority bugfixes after release | [Hotfix Process](delivery-and-quality/Hotfix%20Process.md) | [Incident Response](incident-response/Incident%20Response.md) |

### Database

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Reviewing schema change impact before migration | [MySQL ERD Design](data/MySQL%20ERD%20Design.md) | [Technical Feasibility Assessment](delivery-and-quality/Technical%20Feasibility%20Assessment.md) |
| Running non-trivial migrations and deployment steps | [MySQL Table Creation & Data Migration](data/MySQL%20Table%20Creation%20&%20Data%20Migration.md) | [CI-CD Deployment](delivery-and-quality/CI-CD%20Deployment.md) |
| Building reliable extraction/deployment flows | [QRF Deployment and Extraction](data/QRF%20Deployment%20and%20Extraction.md) | [MyQuery Navigation](data/MyQuery%20Navigation.md) |

---

## L3 - Senior Engineer

### Backend

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Defining delivery approach for multi-team work | [Technical Feasibility Assessment](delivery-and-quality/Technical%20Feasibility%20Assessment.md) | [Sprint Planning](planning-and-reporting/Sprint%20Planning.md) |
| Owning production incidents and escalation flow | [Incident Response](incident-response/Incident%20Response.md) | [Hotfix Process](delivery-and-quality/Hotfix%20Process.md) |
| Enforcing deployment and PR quality gates | [CI-CD Deployment](delivery-and-quality/CI-CD%20Deployment.md) | [GitHub Pull Request](delivery-and-quality/GitHub%20Pull%20Request.md) |
| Creating or updating standards for others to follow | [SOP Creation](governance/SOP%20Creation.md) | [Backend Architecture Standards](platform-infrastructure/Backend%20Architecture%20Standards.md) |

### Frontend

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Leading release readiness and rollback decisions | [CI-CD Deployment](delivery-and-quality/CI-CD%20Deployment.md) | [Hotfix Process](delivery-and-quality/Hotfix%20Process.md) |
| Defining review quality expectations for team | [GitHub Pull Request](delivery-and-quality/GitHub%20Pull%20Request.md) | [SOP Creation](governance/SOP%20Creation.md) |
| Escalation owner during incidents affecting customer UI | [Incident Response](incident-response/Incident%20Response.md) | [Engineering Standups via Slack](planning-and-reporting/Engineering%20Standups%20via%20Slack.md) |

### Database

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Leading high-risk schema evolution | [MySQL Table Creation & Data Migration](data/MySQL%20Table%20Creation%20&%20Data%20Migration.md) | [Incident Response](incident-response/Incident%20Response.md) |
| Setting standards for data modeling and query hygiene | [MySQL ERD Design](data/MySQL%20ERD%20Design.md) | [SOP Creation](governance/SOP%20Creation.md) |
| Guiding analysts/engineers on query navigation and extraction | [MyQuery Navigation](data/MyQuery%20Navigation.md) | [QRF Deployment and Extraction](data/QRF%20Deployment%20and%20Extraction.md) |

---

## L4 - Staff / Engineering Manager

### Backend

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Turning recurring technical work into org standards | [SOP Creation](governance/SOP%20Creation.md) | [Backend Architecture Standards](platform-infrastructure/Backend%20Architecture%20Standards.md) |
| Leading team operating cadence and planning quality | [Sprint Planning](planning-and-reporting/Sprint%20Planning.md) | [Engineering Standups via Slack](planning-and-reporting/Engineering%20Standups%20via%20Slack.md) |
| Coaching promotions and role transitions | [Engineer Promotion Process](people-operations/Engineer%20Promotion%20Process.md) | [Cross Discipline Transition](people-operations/Cross%20Discipline%20Transition.md) |
| Screening intern and OJT applicants before acceptance | [Intern and OJT Screening](people-operations/Intern%20and%20OJT%20Screening.md) | [AI Training Manual](ai-enablement/AI%20Training%20Manual.md) |

### Frontend

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Setting expectations for frontend quality and release flow | [GitHub Pull Request](delivery-and-quality/GitHub%20Pull%20Request.md) | [CI-CD Deployment](delivery-and-quality/CI-CD%20Deployment.md) |
| Running team rituals and improving execution | [Sprint Planning](planning-and-reporting/Sprint%20Planning.md) | [Engineering Standups via Slack](planning-and-reporting/Engineering%20Standups%20via%20Slack.md) |
| Growing team members across levels/disciplines | [Engineer Promotion Process](people-operations/Engineer%20Promotion%20Process.md) | [Cross Discipline Transition](people-operations/Cross%20Discipline%20Transition.md) |
| Screening intern and OJT applicants before acceptance | [Intern and OJT Screening](people-operations/Intern%20and%20OJT%20Screening.md) | [AI Training Manual](ai-enablement/AI%20Training%20Manual.md) |

### Database

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Establishing shared database development standards | [MySQL ERD Design](data/MySQL%20ERD%20Design.md) | [SOP Creation](governance/SOP%20Creation.md) |
| Managing data-process handovers across roles | [Cross Discipline Transition](people-operations/Cross%20Discipline%20Transition.md) | [Onboarding](people-operations/Onboarding.md) |
| Formalizing migration/release operating patterns | [MySQL Table Creation & Data Migration](data/MySQL%20Table%20Creation%20&%20Data%20Migration.md) | [CI-CD Deployment](delivery-and-quality/CI-CD%20Deployment.md) |
| Screening intern and OJT applicants before acceptance | [Intern and OJT Screening](people-operations/Intern%20and%20OJT%20Screening.md) | [AI Training Manual](ai-enablement/AI%20Training%20Manual.md) |

---

## L5 - Principal / Director

### Backend

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Defining multi-quarter execution strategy | [Sprint Planning](planning-and-reporting/Sprint%20Planning.md) | [Technical Feasibility Assessment](delivery-and-quality/Technical%20Feasibility%20Assessment.md) |
| Institutionalizing standards and team-wide practices | [SOP Creation](governance/SOP%20Creation.md) | [Engineering Standups via Slack](planning-and-reporting/Engineering%20Standups%20via%20Slack.md) |
| Improving organizational structure and staffing quality | [Hiring Pipeline](people-operations/Hiring%20Pipeline.md) | [Engineer Promotion Process](people-operations/Engineer%20Promotion%20Process.md) |
| Approving intern and OJT screening outcomes | [Intern and OJT Screening](people-operations/Intern%20and%20OJT%20Screening.md) | [AI Training Manual](ai-enablement/AI%20Training%20Manual.md) |

### Frontend

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Aligning frontend delivery model with org-level goals | [Sprint Planning](planning-and-reporting/Sprint%20Planning.md) | [SOP Creation](governance/SOP%20Creation.md) |
| Hardening engineering quality and release consistency | [CI-CD Deployment](delivery-and-quality/CI-CD%20Deployment.md) | [GitHub Pull Request](delivery-and-quality/GitHub%20Pull%20Request.md) |
| Building stronger hiring/promotion engine | [Hiring Pipeline](people-operations/Hiring%20Pipeline.md) | [Engineer Promotion Process](people-operations/Engineer%20Promotion%20Process.md) |
| Approving intern and OJT screening outcomes | [Intern and OJT Screening](people-operations/Intern%20and%20OJT%20Screening.md) | [AI Training Manual](ai-enablement/AI%20Training%20Manual.md) |

### Database

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Scaling data operating model across teams | [SOP Creation](governance/SOP%20Creation.md) | [MySQL ERD Design](data/MySQL%20ERD%20Design.md) |
| Aligning data standards with hiring and role growth | [Hiring Pipeline](people-operations/Hiring%20Pipeline.md) | [Cross Discipline Transition](people-operations/Cross%20Discipline%20Transition.md) |
| Approving intern and OJT screening outcomes | [Intern and OJT Screening](people-operations/Intern%20and%20OJT%20Screening.md) | [AI Training Manual](ai-enablement/AI%20Training%20Manual.md) |

---

## L6 - Org-level Leadership

### Backend / Frontend / Database

| If you are... | Use this SOP first | Then check |
| :-- | :-- | :-- |
| Standardizing org-wide engineering operating system | [SOP Creation](governance/SOP%20Creation.md) | [Sprint Planning](planning-and-reporting/Sprint%20Planning.md) |
| Controlling engineering spend and non-routine procurement decisions | [Engineering Spend Control](governance/Engineering%20Spend%20Control.md) | [SOP Creation](governance/SOP%20Creation.md) |
| Governing infrastructure tier progression for new and scaling products | [Engineering Architecture Levels & Project Maturity Framework](platform-infrastructure/Engineering%20Architecture%20Levels%20%26%20Project%20Maturity%20Framework.md) | [Engineering Spend Control](governance/Engineering%20Spend%20Control.md) |
| Driving reliability and incident culture across teams | [Incident Response](incident-response/Incident%20Response.md) | [Hotfix Process](delivery-and-quality/Hotfix%20Process.md) |
| Designing onboarding/offboarding governance for scale | [Onboarding](people-operations/Onboarding.md) | [Offboarding and Deprovisioning](people-operations/Offboarding%20and%20Deprovisioning.md) |
| Strengthening engagement and retention programs | [Workplace Improvement Program](people-operations/Workplace%20Improvement%20Program.md) | [Engineer Promotion Process](people-operations/Engineer%20Promotion%20Process.md) |
| Governing intern and OJT acceptance standards | [Intern and OJT Screening](people-operations/Intern%20and%20OJT%20Screening.md) | [Hiring Pipeline](people-operations/Hiring%20Pipeline.md) |
