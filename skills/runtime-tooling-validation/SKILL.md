---
name: runtime-tooling-validation
description: >
  Use this skill when introducing, upgrading, or reviewing runtimes and build
  tooling to ensure approved LTS versions and consistent tooling policies are
  applied across components.
---

# Runtime & Tooling Currency Validation

## Intent
Maintain consistency and currency of runtimes/tooling (LTS policy) to reduce
risk, avoid fragmentation, and keep builds predictable.

---

## When to Use
- Upgrading .NET/Node/Python/tooling versions
- Introducing new components that depend on runtime versions
- Reviewing inconsistencies across the monorepo

---

## Precondition Failure Signal
- Components use non-approved or inconsistent runtime versions
- Tooling is pinned inconsistently across components
- Builds are unreliable across environments due to version drift
- Upgrades are performed ad hoc without compatibility consideration

---

## Postcondition Success Signal
- Approved LTS versions are used consistently per policy
- Version policies are explicit and traceable
- Components remain buildable/testable under the chosen versions
- No unnecessary divergence is introduced

---

## Process
1. **Source Review**: Inventory all runtimes and build tools currently used in the repository and compare them against the approved versions.
2. **Implementation**: Upgrade or align runtimes and tools to the required versions (e.g., .NET 8, Node 20 LTS).
3. **Verification**: Run build and test for all components to ensure the updated tooling doesn't introduce regressions.
4. **Documentation**: Document the required runtime and tool versions in the repository's root documentation or an ADR for major upgrades.
5. **Review**: Platform Engineer and Tech Lead review the tooling changes for consistency and stability.

---

## Example Test / Validation
- Demonstrate a failing build/check due to unsupported version, then align to pass
- Verify impacted components build/test under the approved versions
- Confirm version policy is reflected consistently in component configuration

---

## Common Red Flags / Guardrail Violations
- “It works on my machine” version choices
- Pinning bespoke versions per component without justification
- Upgrading runtimes as part of unrelated feature work without impact analysis
- Downgrading standards to accommodate drift

---

## Recommended Review Personas
- **Platform Engineer** – validates standardisation and environment parity
- **Tech Lead** – validates policy alignment and scope
- **Domain Expert** – validates compatibility risks for critical components

---

## Skill Priority
P2 – Consistency & Governance

---

## Conflict Resolution Rules
- Prefer standardisation unless a justified exception exists
- Exceptions require explicit documentation and review
- Upgrades must be scoped; avoid bundling with unrelated work (YAGNI)

---

## Conceptual Dependencies
- incremental-change-impact

---

## Classification
Governance  
Operational

---

## Notes
Tooling drift is a compounding cost. Prevent it early and consistently.
