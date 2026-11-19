# 🏗️ MySQL ERD Design Playbook

## DEFINE
| Field | Value |
| --- | --- |
| Playbook Name | MySQL ERD Design & Normalization |
| Purpose | To ensure data integrity, eliminate redundancy, and provide a visual source of truth for developers before schema implementation. |
| Owner | Alexander de la Serna Jr. |
| Last Updated | 2026-06-26 |
| Review Cycle | Every 90 Days |

## Prerequisites
- [ ] * Access to the Project Requirements Document (PRD) or User Stories.
- [ ] * Design tool installed/logged in (e.g., MySQL Workbench).
- [ ] * List of core business entities (e.g., Users, Orders, Products).
- [ ] ---

## Step-by-Step Checklist
### Phase 1: Entity Identification

1. **List** all "Nouns" from the project requirements.  
2. **Filter** out nouns that are actually attributes (e.g., "Email" is an attribute of "User").  
3. **Group** related nouns into core Tables.  
4. **Identify** the Primary Key (PK) for every table (Always use id with AUTO\_INCREMENT unless a specific UUID strategy is required).

### 

### Phase 2: Relationship Mapping

1. **Draw** lines between related tables.  
2. **Define** Cardinality for every connection:  
   * **IF** one record relates to many, **THEN** use a One-to-Many (1:N) relationship.  
   * **IF** many records relate to many, **THEN** create a Join/Junction table.  
3. **Place** Foreign Keys (FK) on the "Many" side of the relationship.  
4. **Verify** Referential Integrity:  
   * **IF** a parent record is deleted, **THEN** decide between ON DELETE CASCADE or ON DELETE SET NULL.

### Phase 3: Attribute Refinement & Data Typing

1. **Assign** MySQL-specific data types to every column.  
   * Use VARCHAR(255) for general text.  
   * Use INT or BIGINT for IDs.  
   * Use DECIMAL(10,2) for currency (Never use FLOAT for money).  
2. **Mark** mandatory fields as NOT NULL.  
3. **Add** created\_at and updated\_at timestamps to every table.

---

## Common Mistakes & Fixes
| Mistake | Fix |
| :---- | :---- |
| Using FLOAT for financial data. | Always use DECIMAL to avoid rounding errors. |
| Forgetting Junction tables for Many-to-Many. | Create a third table (e.g., student\_courses) to link the two. |
| Circular Dependencies. | Re-evaluate the hierarchy; one entity must be the "parent." |
| Redundant data (Normalization failure). | Ensure each piece of data is stored in exactly one place. |

---

### 

### 

###

## Success Criteria
- [ ] * Every table has a Primary Key.
- [ ] * No Many-to-Many relationships exist without a Junction table.
- [ ] * All data types are optimized (e.g., no TEXT fields where VARCHAR suffices).
- [ ] * The ERD is exportable to a .sql DDL script.
- [ ] ---

## Storage & Access
**Always Open Policy:** Keep this ERD open during the CREATE TABLE phase of development. Store the source file in the /docs/db-schema folder of the main repository.

**Next Review Date:** May 12, 2026

## Next review date
2026-09-24
