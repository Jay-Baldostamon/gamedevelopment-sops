# 🏗️ MySQL Table Creation & Data Migration Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | MySQL Schema Deployment & Data Import |
| Purpose | To transition from design to production while maintaining data integrity and referential constraints. |
| Owner | Alexander de la Serna Jr. |
| Last Updated | 2026-06-26 |
| Review Cycle | Every 90 Days |

## Prerequisites
- [ ] * Finalized ERD with all Data Types and Nullability defined.
- [ ] * Sanitized Client Data (CSV, JSON, or SQL dump).
- [ ] * Database credentials with `CREATE` and `INSERT` privileges.
- [ ] * Backup of any existing target database.
- [ ] ---

## Step-by-Step Checklist
### Phase 1: Schema Implementation

1. **Generate** the SQL DDL script from your ERD tool.  
2. **Execute** `CREATE TABLE` statements for "Parent" tables first (those with no Foreign Keys).  
3. **Execute** `CREATE TABLE` for "Child" tables (those that reference the Parents).  
4. **Verify** the schema structure using the following command:

```
DESCRIBE table_name;
```

5. **IF** using MySQL Workbench, **THEN** use the "Forward Engineer" wizard to automate this.

### Phase 2: Data Preparation & Mapping

1. **Open** client data and ensure column headers match your MySQL table names exactly.  
2. **Verify** Date formats:  
   * **IF** date is `MM/DD/YYYY`, **THEN** convert to MySQL standard `YYYY-MM-DD`.  
3. **Check** for "Empty" values:  
   * **IF** a column is `NOT NULL`, **THEN** ensure no empty strings or nulls exist in the source data.  
4. **Cleanse** special characters (e.g., smart quotes or emojis) that might break `latin1` or `utf8mb4` encodings.

### Phase 3: Integrity Verification

1. **Count** records in the source file vs. the new MySQL table.  
2. **Check** for "Orphan" records:  
   * **IF** a child record exists without a matching parent, **THEN** flag for manual review.  
3. **Run** a sample query to ensure data displays correctly (no broken encodings).

---

## Common Mistakes & Fixes
| Mistake | Fix |
| :---- | :---- |
| Mismatched character encoding. | Ensure both CSV and Database are set to `utf8mb4`. |
| Auto-increment conflicts. | Reset auto-increment to `MAX(id) + 1` after manual imports. |
| Truncated data. | Ensure `VARCHAR` lengths in schema accommodate the longest client string. |
|  |  |

---

## Success Criteria
- [ ] * All tables created with correct constraints (PK, FK, Unique).
- [ ] * Record counts match between client source and DB.
- [ ] * No `NULL` values in restricted columns.
- [ ] * All Foreign Key constraints are active and valid.
- [ ] ---

## Storage & Access
**Always Open Policy:** Keep the Data Mapping document open during Phase 2\. All migration scripts must be saved in a dedicated shared folder.

**Next Review Date:** May 12, 2026

## Next review date
2026-09-24
