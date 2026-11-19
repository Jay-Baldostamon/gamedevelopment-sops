# 🧩 BPC CRM Mergequery Builder Skill Playbook

## DEFINE

| Field | Value |
| --- | --- |
| Playbook Name | BPC CRM Mergequery Builder Skill Playbook |
| Purpose | Standardize how team members use the `/mergequery-builder` skill in GitHub Copilot Desktop to generate and deploy BPC CRM mergequeries. |
| Owner | AI Enablement Team |
| Last Updated | 2026-06-29 |
| Review Cycle | Every 90 days |

## Prerequisites

- [ ] You are signed in to GitHub Copilot Desktop
- [ ] The BPC CRM skill is available in chat
- [ ] You can access MyQuery at https://myquery.hurdman.org/web/
- [ ] You can access BPC CRM at https://beta.pestcontroltrack.com

## Step-by-Step Checklist

### Phase 1: Generate the Mergequery in GitHub Copilot Desktop

1. **Open** a chat in GitHub Copilot Desktop.
2. **Run** the skill with your request:

```text
/mergequery-builder <describe exactly what you need>
```

Example:

```text
/mergequery-builder I need a mergequery that can pull all accounts with 2 or more contacts that have at least 1 phone number
```

- [ ] Skill command sent
- [ ] Request is specific and complete

---

### Phase 2: Provide Table Schema When Prompted

When Copilot asks for table creation statements:

1. **Open** https://myquery.hurdman.org/web/.
2. **Run**:

```sql
show create table {table-name}
```

3. **Copy** the full `CREATE TABLE ...` output.
4. **Paste** it back into the same GitHub Copilot Desktop chat.

- [ ] `show create table` executed
- [ ] Full schema copied
- [ ] Schema pasted into chat

**IF multiple tables are requested, THEN repeat for each table and send all requested schemas before continuing.**

---

### Phase 3: Capture the AI Mergequery Response

1. **Wait** for Copilot to return the mergequery SQL.
2. **Copy** the full mergequery block.

Sample output format:

```sql
# Author: copilot
||
table<!-- (title: Accounts with 2+ Contact Phones)(pagination:100)(refresh:true) -->
||
SELECT
 a.account_id AS 'Account ID<!-- (hidden)(primary) -->',
 a.account_name AS 'Account Name',
 COUNT(DISTINCT c.contact_id) AS 'Contacts With Phone'
FROM accounts a
INNER JOIN account_contacts ac
 ON ac.account_id = a.account_id
 AND ac.deleted_at IS NULL
INNER JOIN contacts c
 ON c.contact_id = ac.contact_id
 AND c.deleted_at IS NULL
INNER JOIN contact_phones cp
 ON cp.contact_id = c.contact_id
 AND cp.deleted_at IS NULL
 AND cp.phone_number IS NOT NULL
 AND TRIM(cp.phone_number) <> ''
WHERE a.deleted_at IS NULL
GROUP BY a.account_id, a.account_name
HAVING COUNT(DISTINCT c.contact_id) >= 2
ORDER BY a.account_name ASC;
```

- [ ] Full SQL block copied
- [ ] Includes table metadata line and query body

---

### Phase 4: Create the Mergequery in MyQuery

1. **In MyQuery**, run:

```text
new
```

2. **Add** the mergequery title.
3. **Add** a clear description.
4. **Paste** the full mergequery SQL into the main text area.
5. **Save** the new mergequery.

- [ ] `new` command opened mergequery form
- [ ] Title added
- [ ] Description added
- [ ] SQL pasted
- [ ] Mergequery saved

---

### Phase 5: Validate in BPC CRM

1. **Log in** to https://beta.pestcontroltrack.com.
2. **Open** the mergequery URL using your saved title:

```text
https://beta.pestcontroltrack.com/reports/mergecode/{mergequery.title}
```

3. **Confirm** results load as expected.

- [ ] CRM login successful
- [ ] Mergequery page opens
- [ ] Output matches requested logic

## Common Mistakes & Fixes

| Mistake | Fix |
| --- | --- |
| Prompt is too vague | Include exact entities, filters, and thresholds in the `/mergequery-builder` request. |
| Partial schema pasted | Always paste the full `CREATE TABLE` statement from MyQuery. |
| SQL copied without metadata lines | Copy the entire response block, including `table<!-- ... -->` metadata. |
| Wrong mergequery URL | Use `https://beta.pestcontroltrack.com/reports/mergecode/{mergequery.title}` with the exact saved title. |

## Success Criteria

- [ ] Mergequery generated with `/mergequery-builder`
- [ ] Required schema supplied from MyQuery when prompted
- [ ] Mergequery created and saved with `new` in MyQuery
- [ ] Query opens and runs in BPC CRM via mergecode URL
