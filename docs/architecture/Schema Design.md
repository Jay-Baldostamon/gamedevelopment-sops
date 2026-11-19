# Schema Design Standards

**Status:** Target State  
**Audience:** Backend Engineers, Data Engineers, Anyone authoring `CREATE TABLE` / migrations  
**Purpose:** Define the required standards for designing, naming, typing, and relating database tables so that the CRM schema stays consistent, normalized, migratable, and safe as multiple engineers add tables in parallel.

## 1\. Philosophy

Schema design standards are not cosmetic. The database is the longest-lived part of the system. Application code is rewritten often; tables and their data outlive every framework choice we make. A column typed wrong, a missing constraint, or a duplicated table becomes permanent technical debt that every future feature inherits.

These standards exist to ensure that:

- the schema remains understandable across teams,  
- tables, keys, and columns follow one predictable pattern,  
- relationships are explicit and enforceable,  
- money, identity, and tenant data are stored correctly,  
- data integrity does not depend on application code remembering to be careful,  
- multiple engineers can add tables in parallel without producing duplicates, drift, or conflicting designs.

These standards are **normative**. They describe the target state engineers build toward. They formalize the rules already implied by the *MySQL ERD Design* and *MySQL Table Creation* playbooks.

---

## 2\. Applicability Markers

Each rule may include one or more of the following markers:

- **\[ALL\]** — applies to every table  
- **\[CRM\]** — applies to the dynamic, mergequery-driven CRM data model  
- **\[LOOKUP\]** — applies to lookup / register / list / status / "dropdown-like" tables  
- **\[JUNCTION\]** — applies to many-to-many link tables  
- **\[FINANCIAL\]** — applies to money, payment, billing, and tax tables  
- **\[TENANT\]** — applies to tables scoped to a company/office/tenant  
- **\[PII\]** — applies to tables holding personal, contact, credential, or cardholder data

If a rule is marked **\[ALL\]**, it is mandatory regardless of table type.

---

## 3\. Non-Negotiable Principles

### 3.1 One concept, one table

**\[ALL\]**

Every concept must have exactly one authoritative table. Duplicate or near-duplicate tables are prohibited.

**Pattern check (current debt):** `permissions`, `contact_phones`, and `user_permission` each appear **twice** in the current dump with conflicting definitions (e.g., `user_permission.user_id` is `BIGINT UNSIGNED` in one version and `varchar(30)` in another). The `roles` / `users_roles` pair and the `role` SET column on `users` represent **three** competing role models. This is exactly what this standard forbids.

Before creating a table, search the schema for an existing table that owns the concept. Extend it; do not fork it.

### 3.2 Normalize first, denormalize only on purpose

**\[ALL\]**

Each fact is stored in exactly one place. Redundant columns that copy data from a parent table are prohibited unless the denormalization is deliberate, documented, and justified by a real read pattern.

**Pattern check:** `offices.company_name`, `account_types.payment_term`, `services.service_category` (alongside `service_category_id`), and `appointments.technician` / `appointments.salesman` stored as free-text strings instead of foreign keys are denormalizations. Where they exist for legacy/mergequery reasons, they must be marked as such (see §11), not treated as the default pattern for new tables.

### 3.3 Relationships must be explicit

**\[ALL\]**

If a column references another table, that relationship must be expressed as a real key with a defined cardinality and a defined delete behavior — not left as an undocumented integer.

### 3.4 The schema must be self-describing and migratable

**\[ALL\]**

Every table must be creatable from a clean, valid DDL script, tracked through the `migrations` table, and described well enough that an engineer who has never seen it can understand each column from its `COMMENT`.

### 3.5 The database protects the data, not just the application

**\[ALL\]**

Integrity rules (types, nullability, uniqueness, valid ranges) must be enforced at the database level wherever practical. "The app validates it" is not a substitute for a constraint.

---

## 4\. Naming Standards

### 4.1 Tables

**\[ALL\]**

- `snake_case`, lowercase, **plural** for entity tables: `accounts`, `contacts`, `locations`, `payments`.  
- Junction tables: singular-or-plural parent \+ plural child, alphabetical where neutral: `account_contacts`, `account_locations`, `appointment_bids`.  
- Lookup/register tables describing a list of options use a consistent suffix. **Standardize on `_list` for new lookup tables** (existing mix of `services_list`, `areas_list`, `phone_types`, `account_status_lists` is legacy drift to be avoided going forward).  
- No spaces, no capital letters, no reserved words as bare identifiers.

### 4.2 Primary keys

**\[ALL\]**

One rule, no exceptions for new tables:

- The primary key is a single auto-increment column.  
- Name it `id` **or** `<singular_table>_id`, and **pick one convention per system and hold it**.

**Pattern check:** Current tables mix `id` (`accounts` uses `account_id`, `users` uses `id`, `offices` uses `offices_id`). `offices_id` is doubly wrong — it is plural *and* inconsistent. New tables must not invent a third style. The Target State convention is **`<singular_table>_id`** (e.g., `office_id`, `contact_id`, `payment_id`) because it makes joins self-documenting.

### 4.3 Foreign keys

**\[ALL\]**

- A foreign key column is named exactly after the primary key it points to: a column referencing `accounts.account_id` is `account_id`.  
- The index/constraint name must describe the real column. Copy-paste index names are prohibited.

**Pattern check:** `account_locations` declares `KEY contact_id_foreign (location_id)` — the index is named for `contact_id` but indexes `location_id`. `bids` does the same (`KEY contact_id_foreign (location_id)`). These mislead every future reader and must not be replicated.

### 4.4 Columns

**\[ALL\]**

- `snake_case`, singular, descriptive.  
- Booleans are prefixed `is_` / `has_` (`is_active`, `is_primary`, `is_default`). Avoid using `state` as a stand-in boolean; if a column is a yes/no flag, name it like one.  
- Standard audit columns are named exactly `created_at`, `updated_at`, `deleted_at`.

### 4.5 Constraints and indexes

**\[ALL\]**

- Foreign keys: `fk_<table>_<referenced_table>`.  
- Unique keys: `uk_<table>_<column(s)>`.  
- Plain indexes: `idx_<table>_<column(s)>`.

---

## 5\. Data Type Standards

### 5.1 Identifiers

**\[ALL\]**

- Primary and foreign keys are `INT UNSIGNED` (or `BIGINT UNSIGNED` for high-volume tables such as `notes`, `change_audit`, `attendance_logs`).  
- **A foreign key must match the exact type and signedness of the key it references.**

**Pattern check:** `user_permission.user_id` is `BIGINT UNSIGNED` but `users.id` is `INT UNSIGNED`. A FK type mismatch like this prevents a valid foreign-key constraint and risks silent join/index problems. Pick the parent's type and match it.

### 5.2 Money

**\[FINANCIAL\] \[ALL\]**

- Currency is always `DECIMAL(10,2)` (or wider precision where justified). **Never `FLOAT`, never `VARCHAR`, never `DOUBLE` for money.** This is also explicit in the ERD playbook.

**Pattern check:** `bids.quoted_price varchar(100)` and `appointment_services.quoted_price double` violate this. Compare with the correct `appointments.amount decimal(10,2)`.

### 5.3 Text

**\[ALL\]**

- Short, bounded strings: `VARCHAR(n)` sized to the real maximum.  
- General free text where length is unknown but bounded: `VARCHAR(255)`.  
- Long form content: `TEXT` only when the value genuinely can exceed a few hundred characters (`notes.content`, `description`). Do not use `TEXT` where `VARCHAR` suffices (ERD playbook success criterion).

### 5.4 Booleans, enums, and sets

**\[ALL\]**

- Booleans: `TINYINT(1)` with an `is_`/`has_` name and an explicit default.  
- Constrained value lists: `ENUM` is acceptable for **stable, code-controlled** sets (`vaults.type`, `attendance.status`). For **user-editable** sets, use a `[LOOKUP]` table and an FK instead of an `ENUM`.  
- `SET` is permitted only for genuinely small, fixed tag groups (`account_contacts.contact_tags`).

### 5.5 Dates and times

**\[ALL\]**

- Timestamps stored as MySQL `TIMESTAMP` / `DATETIME`, in MySQL-native `YYYY-MM-DD` form (Table Creation playbook, Phase 2). Never store dates as locale strings.

**Pattern check:** `appointments.start_time varchar(50)` stores time as free text. New time columns must use a real time/datetime type unless there is a documented reason.

### 5.6 Type sanity

**\[ALL\]**

- Don't store identifiers that may have leading zeros or exceed integer range as `INT`.

**Pattern check:** `payment_methods.last_four_digit int` will drop the leading zero of a card ending in `0123`. Card last-four and ZIP/postal codes must be `CHAR`/`VARCHAR` (compare the correct `vaults.last_4_digit char(4)`).

---

## 6\. Keys, Constraints, and Referential Integrity

### 6.1 Every table has a primary key

**\[ALL\]**

No table ships without a single, valid, auto-increment primary key.

**Pattern check:** `payments.payment_id` has no `AUTO_INCREMENT`. `service_product_lists.service_product_list_id` has `DEFAULT '0'` and no auto-increment — effectively no usable PK. These are defects.

### 6.2 Foreign keys must be declared, not implied

**\[ALL\]**

A referenced relationship must use a real `FOREIGN KEY` constraint with `ON DELETE` / `ON UPDATE` behavior, except where the **\[CRM\]** dynamic/mergequery model explicitly forbids it (see §10).

**Pattern check:** Almost every current relationship is only a plain `KEY` (e.g., `account_contacts.account_id`), not a constraint. Only `user_permission` and `user_google_tokens` declare real FKs. New non-CRM tables must declare the constraint.

### 6.3 Delete behavior must be a decision

**\[ALL\]**

For every foreign key, explicitly choose:

- `ON DELETE CASCADE` for owned children that cannot exist without the parent,  
- `ON DELETE SET NULL` for optional references,  
- `RESTRICT` for protected references.

Soft-delete (`deleted_at`) does not replace this decision; it complements it.

### 6.4 Uniqueness must be enforced

**\[ALL\]**

Natural keys that must be unique get a `UNIQUE KEY` (e.g., `users.email`, `permissions.permission_code`, junction `uk_account_contact (account_id, contact_id)`). Do not rely on application code to prevent duplicates.

---

## 7\. Standard Columns and Soft Deletes

### 7.1 Audit timestamps are mandatory

**\[ALL\]**

Every table includes:

```sql
`created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
`updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
```

This mirrors the ERD playbook ("Add `created_at` and `updated_at` to every table").

### 7.2 Soft delete is the default for business data

**\[ALL\]**

Business/entity tables include `deleted_at timestamp NULL DEFAULT NULL`. Pure lookup rows may use a hard delete or an `is_active` flag, but must be consistent within the table.

**Pattern check:** `communication_letters` and `appointment_services` omit `deleted_at`/audit columns that comparable tables have. New tables follow the standard set.

### 7.3 Soft-deleted rows must be filtered consistently

**\[ALL\] \[CRM\]**

Any query, view, or mergequery that reads a soft-deletable table must filter `deleted_at IS NULL` unless intentionally reporting on deleted history. (See the existing account/contact manifest query as the reference pattern.)

---

## 8\. Lookup, Register, and Status Tables

### 8.1 Use the shared lookup pattern

**\[LOOKUP\]**

Editable option lists (statuses, types, categories, registers) follow one shape: surrogate PK, the value/label columns, `description`, an active flag (`is_active` / `state`), `display_tooltip` where relevant, and standard audit/soft-delete columns. Follow the consistent register tables (`account_types`, `phone_types`, `frequency_list`) as the template.

### 8.2 Centralize trivial dropdowns

**\[LOOKUP\] \[CRM\]**

Simple value lists should use the existing centralized `dropdown` table rather than a new bespoke table, unless the list needs its own columns/behavior. Do not create a new one-column table where `dropdown` already serves.

### 8.3 Reference lookups by ID, not by copied string

**\[LOOKUP\] \[ALL\]**

When a row points at a lookup value, store the lookup's `id`. Carrying a redundant text copy (e.g., `account_types.payment_term` next to `payment_term_list_id`) is denormalization and must be justified per §11.

---

## 9\. Junction (Many-to-Many) Tables

### 9.1 Many-to-many requires a junction table

**\[JUNCTION\] \[ALL\]**

No M:N relationship may be modeled with comma-separated lists or repeated columns. Create a dedicated link table (both playbooks require this). `account_contacts`, `account_locations`, `appointment_bids`, and `account_vaults` are the reference pattern.

### 9.2 Junction tables carry their own integrity

**\[JUNCTION\]**

A junction table must define:

- both foreign keys (typed to match their parents),  
- a `UNIQUE KEY` on the pair to prevent duplicate links,  
- indexes on each FK,  
- correctly named FK indexes (see the §4.3 mislabeling defect).

---

## 10\. CRM / Dynamic Mergequery Data Model

### 10.1 The dynamic model is a sanctioned exception

**\[CRM\]**

Per the Backend Architecture Standards, the CRM's mergequery-driven architecture is an approved exception to strict schema-managed persistence. Foreign-key constraints may be intentionally omitted where they conflict with the dynamic query/mergequery engine — but the *naming, typing, and documentation* standards in this document still apply.

### 10.2 Polymorphic references must be explicit and indexed

**\[CRM\]**

Tables that attach to many parents via `parent_table` \+ `parent_id` (`notes`, `change_audit`, `attachments`, `communication_notes`) are permitted, but:

- the polymorphic pair must be indexed together (`idx_parent (parent_table, parent_id)`),  
- `parent_id` must use a type compatible with the keys it references (note `notes.parent_id varchar(50)` vs integer PKs — document this),  
- the set of allowed `parent_table` values must be documented in the column comment.

### 10.3 Mergequery-owned tables are platform infrastructure

**\[CRM\]**

The `mergequery` table and metadata-driven register/report tables (`registers`, `reports`) are platform infrastructure. Do not bypass them with scattered bespoke tables, and **do not modify protected tables** marked as such (e.g., the `dropdown` "DO NOT TOUCH" note) without explicit owner approval.

---

## 11\. Denormalization and Legacy Exceptions

### 11.1 Denormalization must be labeled

**\[ALL\]**

Any redundant/denormalized column must carry a `COMMENT` stating it is denormalized and why (e.g., `'Redundant string for quick UI grouping'` as seen on `services.service_category`). Unlabeled redundancy is treated as a defect.

### 11.2 Legacy/temporary tables must be marked

**\[ALL\]**

Tables that are deprecated, temporary, or duplicated must say so in their `COMMENT` and in the migration, with a removal plan. The dump's `#deprecated`, "Temp table", and `DUPLICATE` annotations are good intent but belong **in the schema**, not in side comments.

---

## 12\. Security and Sensitive Data

### 12.1 Never store prohibited cardholder data

**\[PII\] \[FINANCIAL\]**

Full card numbers, full magnetic data, and **CVV/CVV2 are never stored**, encrypted or otherwise (PCI-DSS). Store only a gateway token and the last four digits.

**Pattern check (must fix):** `vaults.routingcvv2 char(30) COMMENT 'CVV number'` stores CVV and is prohibited. `payment_methods.nmi_vault_id` (tokenized) is the correct pattern; `vaults` must be brought in line.

### 12.2 Credentials and tokens are isolated and typed

**\[PII\]**

Auth secrets live in dedicated tables (`user_google_tokens`, `users.password`) with appropriate types and real constraints. Tokens are `TEXT`/`VARCHAR`, never integers, and access is restricted.

### 12.3 PII tables are soft-deletable and auditable

**\[PII\]**

Contact/account/location tables retain `deleted_at` and are covered by `change_audit` for sensitive changes, consistent with the Backend Architecture audit requirements.

---

## 13\. Character Set, Collation, and Engine

### 13.1 One engine, one charset, one collation

**\[ALL\]**

All tables use `ENGINE=InnoDB`, `DEFAULT CHARSET=utf8mb4`, `COLLATE=utf8mb4_unicode_ci`. Mixing collations breaks joins and comparisons.

**Pattern check:** `service_product_lists` uses `utf8mb4_0900_ai_ci` while every other table uses `utf8mb4_unicode_ci`. This inconsistency is prohibited; align it.

### 13.2 Encoding must be consistent end to end

**\[ALL\]**

Source data import and the database must both be `utf8mb4` (Table Creation playbook). No `latin1` round-trips.

---

## 14\. DDL Quality and Migrations

### 14.1 DDL must be valid and reviewed

**\[ALL\]**

Every `CREATE TABLE` must parse and run cleanly. Syntax defects are blockers.

**Pattern check (live defects in the current dump):**

- `vaults.main tinyint(1) DEFAULT '0 COMMENT ...` — unterminated string literal.  
- `guarantee_scope` — `PRIMARY KEY (`\_id`)` references a non-existent column and has a trailing comma.  
- `price_list_commercial.price_list varchar(50 CHARACTER SET ...` — missing closing paren.  
- `setup.code smallint(6)\ NOT NULL` — stray backslash.  
- `call_pool_solicit` — duplicate `idx_account_name` definition and a missing comma before `KEY idx_service_type`.  
- `service_list` / `service_treatments` — indexes reference columns that don't exist (`service_category_id`, `equipment_options_id`).

None of these would survive review under this standard.

### 14.2 Parent-then-child creation order

**\[ALL\]**

Migrations create parent tables before child tables and add foreign keys in dependency order (Table Creation playbook, Phase 1).

### 14.3 All schema changes go through migrations

**\[ALL\]**

Schema changes are tracked in the `migrations` table. No out-of-band manual `ALTER`s in production without a corresponding migration.

### 14.4 Auto-increment hygiene after imports

**\[ALL\]**

After manual/bulk imports, reset `AUTO_INCREMENT` to `MAX(id)+1` (Table Creation playbook) to avoid collisions.

---

## 15\. Integrity Verification After Migration

**\[ALL\]**

After any data load (Table Creation playbook, Phase 3):

- source vs. destination record counts match,  
- no orphan child rows exist for declared relationships,  
- no `NULL`s in `NOT NULL` columns,  
- a sample read confirms correct encoding and types.

---

## 16\. Definition of Done for a New Table

A table is not done unless:

- it has a single auto-increment PK following the chosen `<singular>_id` convention,  
- all columns are typed correctly (money `DECIMAL`, ids `*INT UNSIGNED`, dates native, card/zip as strings),  
- foreign keys are declared with explicit delete behavior (or the \[CRM\] exception is documented),  
- FK/unique/index names are correct and not copy-pasted,  
- `created_at` / `updated_at` (and `deleted_at` for business data) are present,  
- `utf8mb4` \+ `utf8mb4_unicode_ci` \+ InnoDB,  
- every column has a meaningful `COMMENT`; denormalized/legacy columns are labeled,  
- no duplicate of an existing concept is introduced,  
- no prohibited sensitive data (e.g., CVV) is stored,  
- the DDL parses, runs, and is delivered as a migration in dependency order.

---

## 17\. Explicit Prohibitions

The following are prohibited unless formally approved as an exception:

- duplicate or near-duplicate tables for one concept (`permissions`, `contact_phones`, `user_permission`),  
- competing models for the same concept (the three role systems),  
- tables with no usable primary key (`payments`, `service_product_lists`),  
- `FLOAT`/`VARCHAR`/`DOUBLE` for money (`bids.quoted_price`, `appointment_services.quoted_price`),  
- integer columns for leading-zero identifiers (`payment_methods.last_four_digit`),  
- storing CVV or full card data (`vaults.routingcvv2`),  
- foreign keys whose type does not match the referenced key (`user_permission.user_id`),  
- mislabeled FK indexes (`account_locations`, `bids`),  
- inconsistent engine/charset/collation (`service_product_lists`),  
- many-to-many modeled with delimited strings instead of a junction table,  
- unlabeled denormalized columns,  
- invalid/unparseable DDL shipped to any environment,  
- manual production schema changes without a migration.

---

## 18\. Exceptions Process

Exceptions must be explicit, documented, and limited. A valid exception states:

- the standard being broken,  
- why it is necessary,  
- why the standard approach is insufficient (e.g., the \[CRM\] mergequery constraint),  
- data-integrity and security risk,  
- mitigation and monitoring plan,  
- whether the exception is temporary or permanent.

"Faster to ship" is not a valid schema exception. Schema mistakes are the most expensive mistakes we make, because the data persists.

---

## 19\. Final Standard

The schema must be engineered so that no single person is required as the living ERD. If a new table can only be designed correctly after asking one specific engineer "how do we usually do IDs / money / tenancy / soft deletes here," the schema is not yet sufficiently standardized.

Every table an engineer adds should look like it was designed by the same hand as the table next to it.  
