---
name: contract-consistency-validation
description: >
  Use this skill whenever modifying public interfaces, APIs, or shared contracts 
  to ensure compatibility, consistency with Semantic Versioning, and prevention 
  of breaking changes.
---

# Public Interface & Contract Consistency

## Intent
Ensure that changes to public contracts (APIs, shared models, library interfaces) are intentional, documented, and correctly versioned. This prevents accidental breaking changes and ensures that dependent services/consumers can upgrade safely.

---

## When to Use
- Modifying an existing API endpoint or adding a new one.
- Changing shared DTOs or models used across components.
- Updating public interfaces in a shared library.
- Before a semantic version bump decision.
- Reviewing "Public Interface/Contract Consistency" as part of a pre-commit check.

---

## Precondition Failure Signal
- Breaking changes (e.g., removing a field, changing a type) are introduced without a major version bump.
- API documentation (e.g., Swagger/OpenAPI) is out of sync with the implementation.
- Contract snapshots are missing or outdated.
- Consumers break unexpectedly after a "patch" or "minor" update.

---

## Postcondition Success Signal
- Contract snapshots (e.g., Swagger JSON, snapshot files) reflect the current implementation.
- Breaking changes are identified and trigger an explicit major version bump (SemVer).
- Additive changes trigger a minor version bump.
- Internal-only changes trigger a patch version bump.
- Consistency between implementation and documented contract is verified.

---

## Process
1. **Source Review**: Inspect the current public contract (e.g., `docs/contracts/`) and identify the proposed changes.
2. **Implementation**: 
   - Apply changes to the interface/API.
   - Generate a new contract snapshot (e.g., `dotnet swagger tofile`).
3. **Verification**: 
   - Compare the new snapshot with the previous version to identify the nature of the change (Breaking, Additive, Internal).
   - Use automated tools to verify contract compatibility where available.
4. **Documentation**: Update the contract documentation and record the versioning decision in an ADR if it involves a breaking change.
5. **Review**: Tech Lead and Domain Expert review the contract changes for compatibility and intent.

---

## Example Test / Validation
- **Validation**: Compare current Swagger JSON with the committed snapshot. 
  - If field removed -> BREAKING -> Major version.
  - If field added -> ADDITIVE -> Minor version.
- **Validation**: Ensure all public DTOs follow the "Record" pattern (immutability) to prevent accidental side effects.

---

## Common Red Flags / Guardrail Violations
- "It's just a small change, they won't notice" (ignoring SemVer).
- Changing a field type instead of adding a new field.
- Forgetting to update snapshots after a change.
- Manual versioning without a contract impact narrative.

---

## Recommended Review Personas
- **Tech Lead** – validates semantic versioning alignment and contract design.
- **Platform Engineer** – validates snapshot generation and CI enforcement.
- **Domain Expert** – validates impact on external consumers.

---

## Skill Priority
P1 – Quality & Correctness  
(Escalate to P0 if contracts are critical for cross-repo/cross-team integration.)

---

## Conflict Resolution Rules
- Contract consistency overrides delivery speed for public-facing interfaces.
- SemVer rules are non-negotiable for libraries and shared components.

---

## Conceptual Dependencies
- semantic-version-impact
- quality-gate-enforcement
- test-driven-development

---

## Classification
Governance
Core

---

## Notes
Treat your public API as a contract. Once published, you must respect the versioning rules to maintain consumer trust.
