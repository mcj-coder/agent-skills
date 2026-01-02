---
name: architecture-testing
description: >
  Use this skill whenever defining or reviewing architectural boundaries, 
  layering, or project dependency rules to ensure structural integrity and 
  prevent drift.
---

# Architecture Testing

## Intent

Automate the enforcement of architectural rules and boundaries to prevent "structural rot" and ensure that the system remains aligned with its design principles (e.g., Vertical Slices, Domain-Driven Design).

---

## When to Use

- Defining layer dependencies (e.g., Domain must not depend on Infrastructure).
- Enforcing naming conventions for projects or classes.
- Validating slice independence in a vertical-slice architecture.
- Ensuring specific patterns are followed (e.g., "Entities must use StronglyTypedId").
- Periodically reviewing solution structure hygiene.

---

## Precondition Failure Signal

- Architectural "shortcuts" are taken (e.g., Domain referencing Web).
- Naming conventions are inconsistent across the solution.
- Slices become tightly coupled, making independent deployment difficult.
- Compliance with architectural standards depends on manual review.

---

## Postcondition Success Signal

- Architectural rules are codified as automated tests (e.g., using NetArchTest for .NET).
- Violations are identified immediately during local build or CI execution.
- Rules are explicit, documented, and reproducible.
- Solution structure remains clean and aligned with the intended architecture.

---

## Process

1. **Source Review**: Audit the solution structure and identify the architectural rules that must be enforced.
2. **Implementation**:
   - Create an `ArchitectureTests` project at the top-level `tests/` directory.
   - Define test classes that use an architecture testing library (e.g., `ArchUnit`, `NetArchTest`) to express rules.
3. **Verification**: Run the architecture tests and verify they correctly identify a known violation (RED) and pass when rules are respected (GREEN).
4. **Documentation**: Document the architectural principles and the corresponding automated tests in an ADR.
5. **Review**: Tech Lead and Architecture Expert review the rules for alignment with the long-term design.

---

## Example Test / Validation

- **Rule**: Domain must not have dependencies on Infrastructure.
  - Test: `Types.InAssembly(domainAssembly).ShouldNot().HaveDependencyOn("Infrastructure").GetResult().IsSuccessful`
- **Rule**: Slices must be independent.
  - Test: `Types.InNamespace("Slices.A").ShouldNot().HaveDependencyOn("Slices.B")`

---

## Common Red Flags / Guardrail Violations

- "We'll just catch it in code review" (manual over automated).
- Adding `[Ignore]` to architecture tests to bypass rules.
- Defining rules that are too broad or restrictive, hindering legitimate development.
- Lack of architecture tests in a growing monorepo.

---

## Recommended Review Personas

- **Tech Lead** – validates architectural intent and boundary definitions.
- **Platform Engineer** – validates test execution and CI integration.

---

## Skill Priority

P2 – Consistency & Governance  
(Escalate to P1 if structural drift threatens correctness or P0 for security-critical boundaries.)

---

## Conflict Resolution Rules

- Architecture tests override individual developer/agent preferences for structure.
- If a rule blocks a legitimate design change, the rule must be updated and recorded via ADR.

---

## Conceptual Dependencies

- monorepo-structure-hygiene
- test-driven-development

---

## Classification

Governance
Core

---

## Notes

Architecture tests are the "unit tests for the solution structure." They are essential for long-term maintainability in monorepos.
