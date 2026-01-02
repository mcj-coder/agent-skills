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
- Tool configuration remains consistent across tools and components (see `automated-standards-enforcement`)
- Local runtime/tooling versions are checked against repo pins, and any drift is resolved or documented

---

## Process

1. **Source Review**: Inventory all runtimes and build tools currently used in the repository and compare them against the repo pins.
2. **Discovery**: Confirm the latest LTS versions from authoritative sources and confirm the repo-specific target with the user.
3. **Decision**: Record the repo-specific LTS baseline in tooling files (e.g., `.nvmrc`, `package.json` engines).
4. **Implementation**: Upgrade or align runtimes and tools to the required versions.
5. **Verification**: Run build and test for all components to ensure the updated tooling doesn't introduce regressions.
6. **Documentation**: Document the required runtime and tool versions in the repository's root documentation or an ADR for major upgrades.
7. **Review**: Platform Engineer and Tech Lead review the tooling changes for consistency and stability.

---

## Example Test / Validation

- Demonstrate a failing build/check due to unsupported version, then align to pass
- Verify impacted components build/test under the approved versions
- Confirm version policy is reflected consistently in component configuration
- Record the LTS source and confirmation used for the repo decision

---

## Common Red Flags / Guardrail Violations

- "It works on my machine" version choices
- Pinning bespoke versions per component without justification
- Upgrading runtimes as part of unrelated feature work without impact analysis
- Downgrading standards to accommodate drift
- Ignoring engine warnings or local version mismatches without a repo decision

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
