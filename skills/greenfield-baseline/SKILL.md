---
name: greenfield-baseline
description: >
  Use this skill when creating a new component or service to establish
  repository-conformant structure, quality gates, and traceability practices
  from the first commit.
---

# Greenfield Baseline Establishment

## Intent
Create a compliant baseline for new components/services so delivery starts on
stable foundations: structure, standards, quality gates, and traceability.

---

## When to Use
- Starting a new service/component/library within the monorepo
- Introducing a new deployable unit or infrastructure module
- Bootstrapping a new vertical slice area

---

## Precondition Failure Signal
- New components lack consistent structure or ownership boundaries
- No clear path to build/test/deploy independently
- Missing or inconsistent quality checks from day one
- Versioning and tagging expectations are undefined

---

## Postcondition Success Signal
- New component follows repo conventions and scoped-colocation
- Build/test/deploy pathway is explicit and independently runnable
- Quality gates are defined and expected to pass
- Versioning/release expectations are documented for the component

---

## Process
1. **Source Review**: Review the component requirements and monorepo standards to ensure the new component is correctly placed and named.
2. **Implementation**: Scaffold the new component using standard templates, including boilerplate for tests and CI/CD.
3. **Verification**: Execute the local quality gates (hooks, linting, tests) to ensure the baseline is clean and passing.
4. **Documentation**: Document the new component's purpose and initial architecture in its `README.md` and an ADR if it's a significant new service.
5. **Review**: Tech Lead and Platform Engineer review the new component for conformance and architectural alignment.

---

## Example Test / Validation
- New component can be built/tested in isolation
- Quality checks run and are configured to fail on violations
- Documentation exists describing how to build/test/deploy the component

---

## Common Red Flags / Guardrail Violations
- “We’ll add tests/linting later”
- Copying inconsistent templates from older projects without validation
- Creating a component that cannot be built/tested independently
- Introducing non-standard structure without explicit decision

---

## Recommended Review Personas
- **Tech Lead** – validates conventions, scope, and long-term maintainability
- **Platform/DevOps Engineer** – validates independent build/test/deploy pathway
- **Security Reviewer** – validates baseline security posture expectations

---

## Skill Priority
P2 – Consistency & Governance

---

## Conflict Resolution Rules
- Must not sacrifice baseline quality gates for speed
- If standards conflict with legacy constraints, explicitly document the deviation
- Prefer minimal baseline; avoid speculative scaffolding (YAGNI)

---

## Conceptual Dependencies
- scoped-colocation
- quality-gate-enforcement (conceptual alignment)

---

## Classification
Governance  
Operational

---

## Notes
Establishing the baseline early prevents expensive retrofits.
