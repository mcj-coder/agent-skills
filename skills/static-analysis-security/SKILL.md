---
name: static-analysis-security
description: >
  Use this skill whenever changes affect security posture, dependencies,
  authentication/authorization, data handling, or when introducing or modifying
  analysis checks to prevent risk from entering the codebase.
---

# Static Analysis & Security Posture Review

## Intent

Identify and prevent security risks and policy violations from entering the
codebase, and ensure analysis signals are treated as first-class.

---

## When to Use

- Changes affecting authn/authz, secrets, cryptography, or data handling
- Introducing new dependencies or updating critical ones
- Modifying analysis/security lint configurations
- Before release/deployment of sensitive components

---

## Precondition Failure Signal

- Analysis reports findings (SAST/dependency/security lint)
- Security-related warnings are suppressed or down-ranked
- Risky patterns are introduced without justification
- Threat model assumptions are implicit or unclear

---

## Postcondition Success Signal

- Findings are remediated or explicitly risk-accepted via escalation
- No blanket suppressions were added for convenience
- Security-sensitive changes have clear rationale and boundaries
- Evidence of checks is reviewable and reproducible

---

## Process

1. **Source Review**: Scan the codebase and dependencies for security vulnerabilities and policy violations using static analysis tools.
2. **Implementation**: Fix security issues or document a clear risk acceptance for false positives.
3. **Verification**: Re-run the security scans to verify that all findings have been addressed or documented.
4. **Documentation**: Document any risk acceptances or significant security decisions in an ADR.
5. **Review**: Security Reviewer and Tech Lead review the scan results and remediation actions.

---

## Example Test / Validation

- Demonstrate the issue triggers a failing analysis signal, then remediate to passing
- Verify suppressions are scoped, justified, and approved where unavoidable
- Confirm dependency updates do not introduce known critical risks (conceptually)

---

## Common Red Flags / Guardrail Violations

- “False positive, suppress it globally”
- Reducing severity to get green
- Introducing dependency without understanding its security implications
- Handling secrets in code/config without clear policy alignment

---

## Recommended Review Personas

- **Security Reviewer** – validates threat/risk implications and mitigations
- **Tech Lead** – validates scope, necessity, and policy alignment
- **Platform Engineer** – validates enforcement and reproducibility of checks

---

## Skill Priority

P0 – Safety & Integrity

---

## Conflict Resolution Rules

- Overrides all lower-priority skills
- No bypass without explicit risk acceptance and documentation
- If security posture is unclear, escalate before proceeding

---

## Conceptual Dependencies

- incremental-change-impact
- quality-gate-enforcement

---

## Classification

Core  
Governance

---

## Notes

Treat security signals as integrity constraints, not optional quality improvements.
