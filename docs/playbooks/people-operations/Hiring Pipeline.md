# 🔥 Hiring Pipeline Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | "Hiring Pipeline (Frontend Developers)" |
| Purpose | Recruitment process to ensure consistency, efficiency, and quality in every hire. |
| Owner | Luis Patrick Villaruz |
| Last Updated | 2026-02-10 |
| Review Cycle | Every 90 days |

## Prerequisites
- [ ] Confirm required access and tools are ready.

## Step-by-Step Checklist
### 1. Role Definition & Tech Stack Alignment

Owner: Hiring Manager (HM) / Tech Lead

* Action: Define the specific framework requirements (e.g., React.js \+ Next.js vs. Vue.js) and the seniority level.
* Checklist:
  * Identify "Must-have" vs. "Nice-to-have" skills (e.g., TypeScript, Tailwind CSS, Unit Testing).
  * Define the primary project the candidate will join.
  * Draft the Job Description (JD) highlighting the specific stack.

### 2\. Sourcing & Talent Attraction

Owner: HR / Recruiter

* Action: Distribute the JD across chosen platforms and internal networks.
* Channels:
  * Job Boards: LinkedIn, Indeed, or niche sites like Dice/Glassdoor.
  * Referrals: Internal blast to the engineering team for recommendations.
  * Proactive: Searching GitHub or portfolio sites for high-quality frontend talent.

### 3\. Candidate Screening & Technical Evaluation

Owner: Tech Lead / Senior Frontend Developer

* Action: A multi-layered filter to ensure the candidate can actually build what they claim.
* Sub-Steps:
  * Initial Screen: Reviewing the Portfolio (looking for UI polish) and GitHub (clean code, commit history).
  * Technical Interview: A deep dive into frontend architecture, state management, and performance optimization.
  * Experience Audit: Verifying past achievements and conducting a preliminary background check.

### 4\. Leadership Final Review & Offer

Owner: CEO & HR

* Action: Ensure the candidate aligns with the company's long-term vision and finalize the business terms.
* Sub-Steps:
  * CEO Interview: Focus on "Culture Fit," soft skills, and career goals.
  * Salary Negotiation: Finalizing the compensation package.
  * Offer Letter: Official document sent via email including the start date and benefits.

### 5\. Team Integration & Onboarding

Owner: Project Manager / Team Lead

* Action: Transitioning the "Candidate" to a "Teammate."
* Checklist:
  * Tech Setup: Grant access to Repo (GitHub/GitLab), Slack, Jira, and Figma.
  * Project Briefing: Introduction to the current codebase and product roadmap.
  * Team Intro: A formal introduction meeting with the immediate dev team and designers.

---

### 🧪 Technical Screening Questionnaire

*Use these during Step 3 of your SOP to vet candidates for React or Vue.*

#### Category 1: Core JavaScript & Performance

1. The "Data Fetching" Question: "If a page is loading slowly because of a massive API response, how would you optimize the frontend to improve the user's perceived speed?"
   * *Look for:* Debouncing, skeleton loaders, memoization, or paginating the data.

2. The "Async" Question: "Explain the difference between Promise.all and a standard async/await loop. When would you use one over the other?"
   * *Look for:* Understanding of parallel vs. sequential execution.

#### Category 2: Framework Specifics (React/Next.js Focus)

1. The "Hooks" Question: "What is the danger of using a non-primitive value (like an object or array) inside a useEffect dependency array?"
   * *Look for:* Knowledge of referential equality and how it causes infinite re-render loops.

2. The "Server Components" Question (If using Next.js): "When should you use a Client Component
   versus a Server Component?"
   * *Look for:* SEO benefits, reduced bundle size for Server Components, and using Client Components only for interactivity (state/events).

#### Category 3: UI & CSS (The "Frontend" Touch)

1. The "Figma to Code" Question: "A designer gives you a layout that looks great on Desktop but is impossible on Mobile. How do you handle that conversation and technical implementation?"
   * *Look for:* Communication skills and "Mobile-first" CSS strategies.

2. The "Modern CSS" Question: "What is your preference between Tailwind CSS, Styled Components, or standard CSS Modules, and why?"
   * *Look for:* They should have a strong opinion based on maintainability and scalability.

---

###

### 📊 Interview Evaluation Rubric

Copy this into your internal notes to grade the candidate during the interview:

| Skill Area | Score (1-5) | Notes |
| :---- | :---- | :---- |
| Technical Depth |  | Did they explain the *logic*, or just recite syntax? |
| Problem Solving |  | If they got stuck, how did they debug the issue? |
| Cultural Fit |  | Would you want to work on a 2 AM bug fix with them? |
| Portfolio Quality |  | Is the code in their GitHub clean and documented? |

### OPTIONAL  🛠️ Part 1: Technical Assessment (Take-Home)

*Give the candidate 48–72 hours to complete this. It’s designed to test real-world frontend skills: API integration, state management, and UI polish.*

Project Title: The "Mini-Dashboard" Challenge Objective: Build a simple, responsive dashboard that fetches and displays data.

* The Task: \* Connect to a public API (e.g., [JSONPlaceholder](https://jsonplaceholder.typicode.com/) or the [Rick and Morty API](https://rickandmortyapi.com/)).
  * Display a list of items (cards or table).
  * Implement a Search/Filter functionality (client-side).
  * Create a Detail View (when an item is clicked).

* Technical Requirements:
  * Use the framework defined in Step 1 (React/Next.js or Vue.js).
  * Must be Mobile-Responsive.
  * Include at least one "Loading" state and an "Error" state.

* Bonus Points: \* Unit tests (Vitest/Jest).
  * Clean Folder Structure.
  * Accessibility (A11y) compliance.

## Common Mistakes & Fixes
| Common Mistake | Fix |
| --- | --- |
| Skipping prerequisites before execution. | Complete the prerequisite checklist before starting any phase. |

## Success Criteria
- [ ] Confirm all expected outcomes were completed and documented.

## Storage & Access
Store this playbook in `docs/playbooks` within the engineering repository.
Access is required for all engineers, team leads, and operations stakeholders involved in execution.
Always Open policy: keep this playbook visible while running the workflow.

## Next review date
2026-09-24
