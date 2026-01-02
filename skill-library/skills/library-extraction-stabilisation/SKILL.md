---
name: library-extraction-stabilisation
description: >
  Use this skill when reusable functionality has stabilised and is used by
  multiple components, to extract it into a dedicated library with clear
  ownership, versioning expectations, and minimal surface area.
---

# Library Extraction & Stabilisation

## Intent
Extract stable, proven reusable functionality into a dedicated library while
preserving slice integrity, minimizing coupling, and supporting independent
versioning and immutability.

---

## When to Use
- Functionality is used by multiple components/slices
- The behaviour and API surface are stable
- Ownership and release process can be defined
- Duplication has become costly and justified extraction exists

---

## Precondition Failure Signal
- Multiple slices duplicate the same stable logic/models
- Shared behaviour is inconsistent across components
- “Shared” code exists inside one slice and is imported informally by others
- Extraction is attempted without proven reuse or stability

---

## Postcondition Success Signal
- Shared functionality exists in a dedicated library outside slices
- Library surface area is minimal and intentionally designed
- Consumers are explicit and traceable
- Versioning and release expectations are documented and reviewable

---

## Example Test / Validation
- Demonstrate existing duplication or multi-consumer usage as failing state
- After extraction, consumers depend on the library and tests pass
- Verify no new cross-slice coupling or unrelated dependencies were introduced

---

## Common Red Flags / Guardrail Violations
- Extracting for hypothetical reuse (YAGNI violation)
- Creating a “mega-library” that mixes concerns
- Expanding surface area beyond what consumers need
- Introducing breaking changes without explicit intent and versioning narrative

---

## Recommended Review Personas
- **Tech Lead** – validates necessity, scope, and API discipline
- **Domain Expert** – validates behaviour and consumer expectations
- **Platform Engineer** – validates packaging/release traceability expectations (conceptually)

---

## Skill Priority
P2 – Consistency & Governance

---

## Conflict Resolution Rules
- Must not proceed without proven reuse and stability
- Prefer extracting minimal shared primitives over broad shared frameworks
- If extraction conflicts with delivery, explicitly defer with tracked debt rather than doing a partial extraction

---

## Conceptual Dependencies
- incremental-change-impact
- component-boundary-ownership
- scoped-colocation

---

## Classification
Governance

---

## Notes
Extraction is a governance decision as much as a code change. Minimise surface area.
