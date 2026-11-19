# 🤖 AI Prompt Engineering Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | "Prompt Right the First Time: Copilot Agent Prompt Engineering" |
| Purpose | To provide a structured, repeatable process for crafting high-quality prompts for GitHub Copilot coding agents — reducing hallucinations, improving output accuracy, and ensuring all necessary context is provided before an agent session begins. |
| Owner | Alan Baldelobar |
| Last Updated | 2026-04-10 |
| Review Cycle | Every 90 days |

## Prerequisites
Before starting, ensure you have:

- [ ] Access to a GitHub repository where the Copilot coding agent is enabled  
- [ ] A clear task or feature request to implement (bug fix, new feature, refactor, etc.)  
- [ ] Familiarity with the relevant area of the codebase — OR — willingness to use the Guided Requirements Gathering approach (Phase 2B)  
- [ ] Any related design documents, issue descriptions, or acceptance criteria on hand  
- [ ] Knowledge of the project's tech stack, framework, and key libraries

---

## Step-by-Step Checklist
### Phase 1: Choose Your Approach

1. **Determine which prompting approach fits your situation** using the decision tree below:  
     
   - **IF** you know the codebase well, have clear requirements, and the change is isolated → **THEN** use **Approach \#1: Direct Comprehensive Prompt** (skip to Phase 2A).  
   - **IF** requirements are unclear, you're working in unfamiliar code, or the change is high-stakes/complex → **THEN** use **Approach \#2: Guided Requirements Gathering** (skip to Phase 2B).  
   - **IF** you've completed a similar task before and saved a template → **THEN** use **Approach \#1** with your saved template (skip to Phase 2A).

---

### Phase 2A: Build a Direct Comprehensive Prompt

2. **Gather Code Context** — identify all files and paths relevant to the task:  
     
   - [ ] All files to be modified or created (use full folder paths)  
   - [ ] Related components/modules that interact with the target area  
   - [ ] Configuration files that affect the feature  
   - [ ] Type definitions/interfaces used

   

   Example:

```
Files to modify/create in: src/app/(authenticated)/(superadmin)/feasibility/*
Related: src/lib/auth.ts, src/types/feasibility.d.ts
```

3. **Document Technical Specifications:**  
     
   - [ ] Framework and version (e.g., Next.js 14, React 18\)  
   - [ ] Key libraries and their roles  
   - [ ] Architecture patterns to follow (e.g., Server Components, App Router)  
   - [ ] Database schema (if applicable)  
   - [ ] API contracts/endpoints involved  
   - [ ] Authentication/authorization requirements

   

4. **Define Feature Requirements:**  
     
   - [ ] What the feature should do (user stories or acceptance criteria)  
   - [ ] Edge cases to handle  
   - [ ] Error handling expectations  
   - [ ] Validation rules  
   - [ ] UI/UX requirements (if applicable)

   

5. **Write Agent-Specific Instructions:**  
     
   - [ ] Custom agent prompts (if using a specialized agent)  
   - [ ] Output format expectations  
   - [ ] Constraints — explicitly state what NOT to change  
   - [ ] Testing requirements  
   - [ ] Code style/conventions to follow

   

6. **Add Context and Constraints:**  
     
   - [ ] Why this change is needed  
   - [ ] What problems it solves  
   - [ ] Existing limitations to work within  
   - [ ] Dependencies on other features/PRs  
   - [ ] Migration considerations (if applicable)

   

7. **Assemble the prompt** using the template in the Quick Reference section below, then proceed to **Phase 3**.

---

### Phase 2B: Use Guided Requirements Gathering

8. **Provide an initial context dump** to the Copilot agent with what you know:

```
I need to [task description].

Known context:
- Location: [file paths, if known]
- Purpose: [brief description]
- Stack: [if known]

What else do you need to know?
```

9. **Let the AI guide requirements gathering** — respond to clarifying questions about:  
     
   - [ ] Technical stack details  
   - [ ] Specific metrics or data needed  
   - [ ] Output formats  
   - [ ] Integration points  
   - [ ] Edge cases

   

10. **Validate before launching the agent session** — confirm with the AI:  
      
    - [ ] All relevant files and folders have been identified  
    - [ ] Requirements are clearly stated  
    - [ ] Success criteria are defined  
    - [ ] The AI confirms it has everything needed to proceed

    

11. **Proceed to Phase 3\.**

---

### Phase 3: Apply Anti-Hallucination Techniques

12. **Be specific about what exists** — reference exact file paths and implementations:  
      
    - ❌ `"Use the authentication system"`  
    - ✅ `"Use the existing authentication in src/lib/auth.ts which uses NextAuth with JWT tokens"`

    

13. **Explicitly state constraints** — include all of the following that apply:  
      
    - `"Do NOT modify [files/patterns]"`  
    - `"Follow the existing pattern in [file]"`  
    - `"Maintain backward compatibility with [feature]"`

    

14. **Point to examples from the codebase** instead of describing patterns abstractly:  
      
    - ✅ `"Follow the same pattern as the user dashboard in src/app/dashboard/page.tsx"`  
    - ✅ `"Use the same data-fetching structure as src/lib/api/users.ts"`

    

15. **Specify what to preserve:**  
      
    - [ ] Existing database queries  
    - [ ] Default configurations  
    - [ ] File locations for prompts or templates  
    - [ ] Current API contracts

    

13. **Include error scenarios:**  
      
    - `"Handle case where [X] is undefined"`  
    - `"Gracefully degrade if API fails"`  
    - `"Validate input before processing"`

---

### Phase 4: Submit and Monitor

18. **Submit the prompt** to the Copilot coding agent (e.g., via `@copilot` in an issue, or through the Copilot chat agent session).  
      
19. **Review the agent's output** against your requirements:  
      
    - [ ] All acceptance criteria met  
    - [ ] No unintended file modifications  
    - [ ] Constraints were respected  
    - [ ] Error handling is implemented as specified  
    - [ ] Code follows the existing patterns referenced

    

18. **IF** the output contains hallucinations or errors, **THEN** check:  
      
    - [ ] Was the file path provided correctly and completely?  
    - [ ] Were constraints explicitly stated (not assumed)?  
    - [ ] Was the tech stack and framework version specified?  
    - [ ] Were examples from the codebase referenced instead of described abstractly?

    

19. **Iterate if needed** — refine the prompt by adding missing context identified in step 19, then resubmit.

---

### Phase 5: Document and Save

21. **IF** this is a new type of task, **THEN** save the final working prompt as a reusable template in your team's prompt library.  
      
22. **Document the configuration** in your project's internal wiki or repository:  
      
    - Task type (feature, bug fix, refactor, integration)  
    - Prompt template used  
    - Key context that was required  
    - Any lessons learned (what caused hallucinations, what fixed them)

    

23. **Share the template** with your team so similar future tasks can use Approach \#1 directly.

---

## Common Mistakes & Fixes
| Mistake | Fix |
| :---- | :---- |
| Describing patterns abstractly instead of pointing to existing code | Always reference exact file paths: `"Follow the pattern in src/lib/api/users.ts"` |
| Not stating what the agent should NOT change | Add explicit constraints: `"Do NOT modify src/lib/auth.ts or any database migration files"` |
| Omitting the tech stack or framework version | Always include: `"Next.js 14, React 18, TypeScript 5, Prisma ORM"` |
| Assuming the agent knows your project conventions | Specify conventions explicitly or point to a style guide / example file |
| Providing vague requirements like "make it work" | Write measurable acceptance criteria: `"Returns a 200 with a JSON array of user objects when GET /api/users is called"` |
| Skipping error handling instructions | Always include at least: `"Handle undefined inputs, API failures, and unauthorized access"` |
| Not validating output against constraints | Review the diff specifically for files you said NOT to modify |
| Using one giant prompt for a multi-system change | Break complex tasks into smaller, focused prompts — one per component or integration point |

---

## Success Criteria
- [ ] [Measurable outcome 1]
- [ ] [Measurable outcome 2]
- [ ] [Testing requirement]
```

---

This playbook is complete when:

- [ ] An approach has been selected (Direct or Guided)  
- [ ] All five context categories are addressed (Code, Tech Specs, Requirements, Agent Instructions, Constraints)  
- [ ] Anti-hallucination techniques have been applied to the prompt  
- [ ] The agent's output has been reviewed against acceptance criteria  
- [ ] The working prompt has been saved as a reusable template (if new task type)  
- [ ] Configuration and lessons learned are documented for the team

---

*Next review date: 2026-07-09*

## Storage & Access
Store this playbook in `docs/playbooks` within the engineering repository.
Access is required for all engineers, team leads, and operations stakeholders involved in execution.
Always Open policy: keep this playbook visible while running the workflow.

## Next review date
2026-09-24

## Quick Reference: Prompt Template
```

## Task
[Clear, specific description of what needs to be done]

## Location
Files to modify/create in: [full folder path]

## Existing Code Context
- File 1: [full path] — [purpose]
- File 2: [full path] — [purpose]

## Technical Stack
- Framework: [e.g., Next.js 14, React 18]
- Key Libraries: [list with versions]
- Patterns: [e.g., Server Components, App Router]
- Database: [if applicable]

## Requirements
1. [Specific requirement with acceptance criteria]
2. [Edge case handling]
3. [Validation rules]

## Constraints
- DO NOT change: [list of files/patterns]
- MUST follow pattern from: [file reference]
- MUST maintain: [backward compatibility, etc.]

## Error Handling
- Handle: [scenario 1]
- Handle: [scenario 2]
- Gracefully degrade if: [scenario 3]

## Quick Reference: Decision Tree
| Situation | Approach | Starting Phase |
| :---- | :---- | :---- |
| Know the codebase, clear requirements, isolated change | Approach \#1 — Direct Comprehensive Prompt | Phase 2A |
| Unclear requirements, unfamiliar code, or high-stakes | Approach \#2 — Guided Requirements Gathering | Phase 2B |
| Similar to a past task with a saved template | Approach \#1 — Reuse template | Phase 2A |
| Complex multi-system feature (first time) | Approach \#2, then save as template | Phase 2B |

---
