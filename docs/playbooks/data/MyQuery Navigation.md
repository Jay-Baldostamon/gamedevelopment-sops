# 🔍 MyQuery Navigation Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | MyQuery Access & Basic Commands |
| Purpose | To enable non-database users to securely access the MyQuery interface and execute basic commands without risking production data. |
| Owner | Systems Administrator |
| Last Updated | 2026-06-26 |
| Review Cycle | 90 Days |

## Prerequisites
- [ ] Active company Slack/Email account to contact administrators.
- [ ] Web browser (Chrome or Firefox recommended).
- [ ] Basic understanding of the specific database name you need to access.

## Step-by-Step Checklist
### Phase 1: Credential Acquisition
1. **Contact** Nathan or Alan via Slack or Email to request MyQuery credentials.
2. **Specify** the reason for access (e.g., "Need to create a new mergecode").
3. **Store** the provided username and password in a secure password manager.

### Phase 2: System Login & Initialization
1. **Navigate** to the URL: `https://myquery.hurdman.org/web/`
2. **Enter** your assigned credentials into the login fields.
3. **Click** Login.
4. **Verify** you are on the `hurdmantest` server.
   - **IF** the screen shows `Connected to hurdmantest`, **THEN** proceed to Phase 3\.
   - **IF** you receive a connection error, **THEN** refresh the page or contact Alan.

### Phase 3: Server & Database Selection
1. **Type** the connection command into the terminal line:

```sql
connect [server name]
```

2. **Press** Enter.
3. **Type** the following command to see available environments:

```sql
show databases
```

4. **Press** Enter.
5. **Identify** your target database from the list.
6. **Type** the selection command:

```sql
use [database name]
```

7. **Press** Enter.

### Phase 4: Execution & Help
1. **Type** your SQL query or mergecode command.
2. **Press** Enter to execute.
3. **IF** you are unsure of a command syntax, **THEN** type:

```sql
help
```

4. **Review** the pre-populated help options on the screen for advanced functions.

---

## Common Mistakes & Fixes
| Error/Mistake                       | Fix                                                                           |
| :---------------------------------- | :---------------------------------------------------------------------------- |
| Running queries on the wrong server | Always check the prompt prefix before typing; use `connect [name]` to switch. |
| Forgetting to use the `use` command | If you get a "No database selected" error, type `use [database_name]`.        |
| Typos in database names             | Use `show databases` to copy/paste the exact name.                            |
| Locked account                      | If login fails 3 times, contact Nathan to reset your credentials.             |

## Success Criteria
- [ ] User is successfully logged into the web interface.
- [ ] The terminal reflects the correct server and database name.
- [ ] The user can successfully run a `help` command or a basic `SELECT` query.

## Storage & Access
**Always Open Policy:** Keep this playbook open in a side tab whenever you are using MyQuery. Do not rely on memory for syntax or server names to prevent accidental data errors.

## Next review date
2026-09-24
