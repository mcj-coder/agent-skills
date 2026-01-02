---
name: safe-brownfield-refactor
description: >
  Use this skill when improving structure, readability, or maintainability of
  existing code while preserving behaviour, public contracts, and quality gate
  outcomes.
---

# Safe Brownfield Refactor

## Intent

Improve internal structure without altering observable behaviour, public
contracts, or operational characteristics.

---

## When to Use

- Restructuring brownfield code for maintainability
- Simplifying complex code paths without changing outcomes
- Preparing code for future features by reducing incidental complexity

---

## Precondition Failure Signal

- Code is difficult to change safely due to structure/duplication
- Refactor attempts introduce behavioural drift or contract changes
- Tests are absent or insufficient to prove equivalence
- Build warnings/errors appear as a result of “cleanup”

---

## Postcondition Success Signal

- Behaviour is unchanged and verifiable through tests/validations
- Public contracts (APIs/interfaces) remain stable unless explicitly intended
- Quality gates remain green with zero new warnings
- Changes are minimal and aligned to the stated refactor intent

---

## Process

1. **Source Review**: Thoroughly understand the existing behavior, identifying the core logic and its side effects.
2. **Implementation**: Apply incremental changes to improve code quality, following DRY and YAGNI.
3. **Verification**: Execute the existing test suite and any new tests created to verify that behavior is preserved.
4. **Documentation**: Document the refactoring intent and any significant changes in the PR or an ADR if it involves structural patterns.
5. **Review**: Tech Lead and Domain Expert review the refactored code for correctness and adherence to standards.

---

## Example Test / Validation

- Introduce or identify a failing test that captures expected behaviour, then refactor to passing
- Run regression tests relevant to impacted components
- Verify public surface area remains unchanged (where applicable)
- Confirm no new warnings/errors are introduced

---

## Common Red Flags / Guardrail Violations

- “While I’m here…” scope expansion
- Changing public contracts during a “safe refactor”
- Suppressing warnings/lint rules to get green
- Large renames/moves without impact analysis
- Refactor without tests proving equivalence

---

## Recommended Review Personas

- **Domain Expert** – validates behaviour equivalence and edge cases
- **Tech Lead** – validates scope discipline and necessity
- **Platform Engineer** – validates build correctness and warnings discipline

---

## Skill Priority

P1 – Quality & Correctness

---

## Conflict Resolution Rules

- Must not proceed without a provable behavioural validation path
- Overrides Delivery/Optimisation pressures that push unsafe shortcuts
- If refactor touches boundaries, sequence after scoped-colocation and impact analysis

---

## Conceptual Dependencies

- incremental-change-impact
- quality-gate-enforcement
- scoped-colocation (as needed)

---

## Classification

Core

---

## Notes

Refactoring is only “safe” if equivalence is demonstrable, not assumed.
