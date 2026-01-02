---
name: quality-gate-enforcement
description: >
  Use this skill whenever validating changes before merge, release, or
  deployment to ensure all required quality checks pass without suppression,
  bypass, or degraded standards.
---

# Quality Gate Enforcement

## Intent
Ensure changes meet required quality standards (clean builds, lint/style,
analysis) without bypasses, suppressions, or silent degradations.

---

## When to Use
- Before merging changes to main
- Before tagging or releasing any component
- Before deploying to any environment
- When introducing or modifying quality checks

---

## Precondition Failure Signal
- Build warnings or errors occur
- Lint/style violations exist
- Analysis or security checks report findings
- Checks were bypassed or disabled for convenience

---

## Postcondition Success Signal
- All required checks pass
- Builds are clean (zero warnings/errors per repo policy)
- No global suppressions were introduced without explicit approval
- Evidence is reviewable and reproducible

---

## Example Test / Validation
- Run the required quality suite for impacted components and confirm pass
- Verify no new suppressions or bypass configurations were introduced
- Confirm failures are remediated rather than hidden

---

## Common Red Flags / Guardrail Violations
- Skipping hooks/checks “to save time”
- Globally disabling lint rules or warnings
- Marking checks “non-blocking” to get green
- Accepting new warnings as “known issues” without approval

---

## Recommended Review Personas
- **Tech Lead** – validates standards adherence and no hidden degradations
- **Platform/DevOps Engineer** – validates checks match policy and are enforced
- **Security Reviewer** – validates security-related gate outcomes (where applicable)

---

## Skill Priority
P1 – Quality & Correctness  
(Escalate to P0 when security/integrity gates are involved.)

---

## Conflict Resolution Rules
- Overrides Delivery/Optimisation skills when they suggest bypasses
- Any suppression requires explicit escalation and documentation
- Scope of checks may be reduced via selective-build-test, but standards cannot

---

## Conceptual Dependencies
- incremental-change-impact
- selective-build-test (optional for scoping)

---

## Classification
Core  
Governance

---

## Notes
Green by suppression is a failure. Green by compliance is success.
