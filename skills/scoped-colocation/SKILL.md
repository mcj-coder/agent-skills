---
name: scoped-colocation
description: >
  Use this skill whenever defining, modifying, or reviewing any interface,
  class, service, or component to ensure all related code, tests, documentation,
  and dependencies are co-located at the narrowest meaningful scope, with shared
  functionality extracted only when reuse across multiple slices or projects is
  proven.
---

# Scoped Colocation & Vertical-Slice Architecture

## Intent
Ensure deliverable functionality is organised as atomic vertical slices, with
related interfaces, classes, services, tests, documentation, and supporting
artifacts co-located at the narrowest meaningful scope.

This skill exists to preserve clarity, traceability, and ownership; enable
independent build/test/deploy; prevent duplication and architectural drift; and
apply DRY/YAGNI via disciplined reuse boundaries.

---

## When to Use
- Creating or modifying any interface, class, service, or component
- Introducing new functionality (greenfield or brownfield)
- Reviewing boundaries, reuse decisions, or folder/namespace structure
- Extracting shared libraries or consolidating duplicated functionality

---

## Precondition Failure Signal
- Related definitions dispersed across unrelated folders/namespaces
- Tests or documentation detached from the functionality they validate
- A slice cannot be built/tested/deployed independently
- Shared functionality duplicated across multiple slices
- Functionality from another repository moved/modified without confirming other consumers
- “Common/shared/utils” areas accumulate unrelated responsibilities

---

## Postcondition Success Signal
- Slice-local definitions are co-located in a common folder and namespace/module
- Each slice contains what it needs to build/test/deploy independently
- Shared functionality reused across multiple slices/projects lives outside slices in a dedicated library
- No duplicated shared functionality exists across slices
- External reuse scope is understood and documented before relocation/modification
- Boundaries are minimal, intentional, and traceable

---

## Process
1. **Source Review**: Inspect the current file structure and identify where related logic, tests, and documentation are located.
2. **Implementation**: Move related files into the same directory or slice-local structure.
3. **Verification**: Run tests for the moved components to ensure all dependencies are correctly resolved.
4. **Documentation**: Document the component's internal structure and boundaries in its local `README.md`.
5. **Review**: Tech Lead and Platform Engineer review the colocation and boundary decisions.

---

## Example Test / Validation
- Given a change set, identify the slice and verify code/tests/docs are co-located
- Build and test the slice in isolation
- Verify shared models/services are not duplicated across slices
- Confirm external reuse scope before moving/modifying referenced functionality

---

## Common Red Flags / Guardrail Violations
- “We’ll tidy this up later”
- Splitting related code “for reuse” without evidence
- Duplicating shared models/services instead of extracting a library
- Creating broad “common/core/utils” folders without clear ownership
- Moving code from another repo without validating downstream consumers
- Expanding slice scope beyond what is required for the change

---

## Recommended Review Personas
- **Tech Lead** – validates boundaries, scope discipline, and architectural intent
- **Architecture/Domain Expert** – validates reuse decisions and cohesion
- **Platform/DevOps Engineer** – validates independent build/test/deploy assumptions
- **QA/Tester** – validates slice completeness and tests aligned to behaviour

---

## Skill Priority
P1 – Quality & Correctness  
(Escalate to P0 if release traceability/immutability or deployment guarantees are compromised.)

---

## Conflict Resolution Rules
- Narrowest-scope colocation overrides convenience-based grouping
- Shared extraction requires demonstrable reuse; otherwise keep slice-local
- External reuse ambiguity requires escalation before relocation/modification
- Overrides Delivery/Optimisation skills when they push scope-broadening or shortcuts

---

## Conceptual Dependencies
- incremental-change-impact
- library-extraction-stabilisation
- ci-cd-conformance

---

## Classification
Core  
Governance

---

## Notes
This skill is intentionally strict. Violations often indicate systemic drift
rather than a local choice.
