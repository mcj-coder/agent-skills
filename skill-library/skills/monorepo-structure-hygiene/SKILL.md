---
name: monorepo-structure-hygiene
description: >
  Use this skill periodically or when large changes occur to ensure the monorepo
  remains coherent, with clear boundaries, minimal duplication, and consistent
  patterns aligned to the operating contract.
---

# Monorepo Structure & Hygiene Review

## Intent
Prevent structural entropy in the monorepo by ensuring boundaries, ownership,
and conventions remain coherent over time.

---

## When to Use
- Periodic maintenance reviews
- After significant refactors or reorganisations
- When onboarding new teams or adding multiple components
- When duplication and “common” folders start to proliferate

---

## Precondition Failure Signal
- Repeated patterns implemented inconsistently across components
- “Common/shared/utils” areas grow without clear ownership
- Boundaries between slices blur and coupling increases
- Repo navigation becomes difficult and inconsistent

---

## Postcondition Success Signal
- Clear, consistent patterns and boundaries across components
- Duplication is reduced or extracted appropriately
- Ownership and intent are clear at folder/module level
- Changes remain aligned with scoped-colocation and DRY/YAGNI

---

## Example Test / Validation
- Identify inconsistencies and demonstrate a reduction in duplicated patterns
- Verify slices remain independently buildable/testable/deployable after changes
- Confirm new structure improves discoverability without broadening scope

---

## Common Red Flags / Guardrail Violations
- Large “restructure everything” initiatives without clear triggers
- Introducing new conventions without documenting or socialising them
- Consolidating unrelated components just to reduce folder count
- Breaking slice independence for aesthetic organisation

---

## Recommended Review Personas
- **Tech Lead** – validates conventions, boundaries, and prioritisation
- **Architecture/Domain Expert** – validates cohesion/coupling impacts
- **Platform Engineer** – validates build/test/deploy implications

---

## Skill Priority
P2 – Consistency & Governance

---

## Conflict Resolution Rules
- Prefer minimal, incremental hygiene improvements over sweeping re-orgs (YAGNI)
- Do not compromise slice independence to “tidy” structure
- If hygiene conflicts with delivery deadlines, record and schedule explicitly

---

## Conceptual Dependencies
- scoped-colocation
- incremental-change-impact

---

## Classification
Governance

---

## Notes
Hygiene work must be justified and scoped; otherwise it becomes churn.
