# 🔥 Hotfix Process Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | "Code Red: Production Hotfix" |
| Purpose | To safely and quickly resolve production-impacting incidents while maintaining communication, documentation, and code integrity. |
| Owner | Alan Baldelobar |
| Last Updated | 2026-01-16 |
| Review Cycle | Every 90 days |

## Prerequisites
Before starting, ensure you have:

- [ ] Access to production logs and monitoring dashboards  
- [ ] Permission to create branches and deploy to staging/production  
- [ ] Access to incident communication channels (Slack)  
- [ ] Knowledge of current production tag/commit  
- [ ] Access to the `coming_soon` feature flag system (for Agent toggle)

---

## Step-by-Step Checklist
### Phase 1: Identify and Qualify the Incident

1. **Confirm production impact** by checking against severity definitions:  
     
   - **Critical**: Service down, data loss, or security breach  
   - **High**: Major feature broken, significant user impact  
   - **Medium**:  Degraded performance, workaround available

   

2. **IF** severity is Critical or High, **THEN** proceed with the hotfix process. **IF** severity is Medium or lower, **THEN** follow standard release process instead.  
     
3. **Capture incident details** in the incident tracking system:  
     
   - Error messages (exact text)  
   - Relevant log entries with timestamps  
   - Affected endpoints/services  
   - Number of users impacted  
   - Time incident was first detected

   

4. **Create an incident issue** in GitHub with label `hotfix` and `production-incident`.

---

### Phase 2: Stabilize and Communicate

5. **Apply immediate mitigation** (choose applicable option):  
     
   - **Option A**: Set `coming_soon` flag to `true` to disable affected Agent  
   - **Option B**: Rollback to previous stable deployment  
   - **Option C**: Scale down/isolate affected service

   

6. **Verify mitigation is active** by checking production dashboards for error rate reduction.  
     
7. **Send internal notification** to `#incidents` channel with this template:

```
🚨 HOTFIX IN PROGRESS
Issue: [Link to incident issue]
Impact: [Brief description]
Mitigation: [Action taken]
ETA: [Estimated resolution time]
Point of contact: [Your name]
```

8. **Update stakeholders list** in incident issue (tag relevant team leads).

---

### Phase 3: Create Hotfix Branch

9. **Identify current production tag/commit** by running:

```shell
git fetch --tags
git describe --tags --abbrev=0 origin/production
```

10. **Create hotfix branch** from production:

```shell
git checkout -b hotfix/<short-description> <production-tag>
```

    - Use lowercase, hyphen-separated names (e.g., `hotfix/fix-auth-timeout`)

    

11. **Link branch to incident issue** by adding branch name to the issue description.

---

### Phase 4: Implement the Fix

12. **Scope the change** — fix ONLY the immediate issue.  
      
    - **DO NOT** refactor surrounding code  
    - **DO NOT** add unrelated improvements

    

13. **Write the fix** with minimal lines changed.  
      
14. **Add regression test(s)** that:  
      
    - Fail when the bug is present  
    - Pass when the fix is applied

    

15. **Commit with descriptive message**:

```shell
git commit -m "hotfix: [description] - fixes #[issue-number]"
```

---

### Phase 5: Validate

16. **Run full test suite locally**:

```shell
npm test   # or equivalent for your stack
```

17. **IF** tests fail, **THEN** fix failing tests before proceeding.  
      
18. **Deploy to staging environment**:

```shell
### Use your deployment command for staging
deploy --env=staging --branch=hotfix/<short-description>
```

19. **Sanity check impacted flows** manually:  
      
    - [ ] Reproduce original error scenario — confirm it's resolved  
    - [ ] Test adjacent functionality — confirm no regressions  
    - [ ] Check logs for new errors

    

17. **Get peer review** — minimum one approval required before production deploy.

---

### Phase 6: Deploy to Production

21. **Merge hotfix branch into production branch**:

```shell
git checkout production
git merge hotfix/<short-description>
git push origin production
```

22. **Trigger production deployment** via CI/CD pipeline.  
      
23. **Monitor production dashboards** for 15 minutes post-deploy:  
      
    - Error rates returning to baseline  
    - Response times normal  
    - No new alerts triggered

    

24. **IF** deployment causes new issues, **THEN** immediately rollback and return to Phase 2\.  
      
25. **Merge hotfix back into main/develop**:

```shell
git checkout main
git merge hotfix/<short-description>
git push origin main
```

26. **Remove mitigation** (if applied in Phase 2):  
      
    - Set `coming_soon` flag back to `false`, OR  
    - Confirm rollback is no longer active

    

27. **Send resolution notification** to `#incidents`:

```
✅ HOTFIX COMPLETE
Issue: [Link to incident issue]
Resolution: [Brief description of fix]
Deployed at: [Timestamp]
Monitoring:  Stable for 15+ minutes
```

---

### Phase 7: Post-Incident Review

28. **Schedule post-incident review** within 48 hours of resolution.  
      
29. **Document in incident issue**:  
      
    - **Root Cause**: Why did this happen?  
    - **Resolution**: What fixed it?  
    - **Timeline**: Key events with timestamps  
    - **Impact**: Users affected, duration of outage

    

30. **Create follow-up tasks** as separate issues:  
      
    - [ ] Add/improve monitoring or alerts  
    - [ ] Implement guardrails to prevent recurrence  
    - [ ] Refactor underlying code if needed  
    - [ ] Update related playbooks if process gaps found

    

29. **Close incident issue** with final summary comment.

---

## Common Mistakes & Fixes
| Mistake | Fix |
| :---- | :---- |
| Skipping staging deployment to "save time" | Always deploy to staging — production surprises cost more time |
| Making additional "while I'm here" changes | Scope creep increases risk — create separate issues for improvements |
| Forgetting to merge back to main/develop | Set calendar reminder immediately after production deploy |
| Not updating stakeholders during long fixes | Send status updates every 30 minutes for Critical incidents |
| Closing incident without follow-up tasks | Use the post-incident checklist — prevention \> reaction |

---

## Success Criteria
This playbook is complete when:

- [ ] Production error rates have returned to baseline  
- [ ] Hotfix is deployed to production AND merged back to main/develop  
- [ ] Internal notification confirms resolution  
- [ ] Incident issue contains root cause documentation  
- [ ] Follow-up tasks are created and assigned  
- [ ] Post-incident review is scheduled or completed

---

*Next review date: 2026-04-16*

## Storage & Access
Store this playbook in `docs/playbooks` within the engineering repository.
Access is required for all engineers, team leads, and operations stakeholders involved in execution.
Always Open policy: keep this playbook visible while running the workflow.

## Next review date
2026-09-24
