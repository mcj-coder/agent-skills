---
name: best-practice-introduction
description: >
  Use this skill when introducing new standards, tooling, or practices to plan a
  safe, incremental rollout that preserves delivery while strengthening
  governance and quality.
---

# Best-Practice Introduction Planning

## Intent
Introduce new practices in a controlled way that teams can adopt without
destabilising delivery, while preserving enforceable standards.

---

## When to Use
- Introducing new linters, formatters, analyzers, or checks
- Rolling out architectural conventions or repo policy updates
- Standardising patterns across multiple components/teams

---

## Precondition Failure Signal
- New practices are proposed without adoption plan
- Rollout would break existing components immediately
- Teams bypass standards because they feel imposed or unclear
- “Big bang” changes create churn and resistance

---

## Postcondition Success Signal
- Rollout plan is incremental, scoped, and reviewable
- Adoption phases are clear with measurable checkpoints
- Exceptions are documented and time-bounded
- Standards become enforceable rather than aspirational

---

## Example Test / Validation
- Demonstrate an initial failing signal (policy gap) and a phased path to passing
- Validate that early phases do not block delivery while still enforcing progress
- Confirm measurable criteria exist for moving between phases

---

## Common Red Flags / Guardrail Violations
- Introducing standards without team communication and documentation
- Making everything mandatory immediately without remediation runway
- Creating permanent exceptions “for now”
- Adding overlapping tools/checks that duplicate intent (DRY violation)

---

## Recommended Review Personas
- **Tech Lead** – validates intent, scope, and adoption practicality
- **Platform Engineer** – validates enforcement feasibility and maintenance costs
- **Developer Representative** – validates usability without weakening policy

---

## Skill Priority
P2 – Consistency & Governance

---

## Conflict Resolution Rules
- Prefer incremental adoption over big-bang changes (YAGNI)
- Avoid duplicating existing checks/tools; consolidate intent (DRY)
- If enforcement would block delivery, define phased enforcement explicitly

---

## Conceptual Dependencies
- monorepo-structure-hygiene
- quality-gate-enforcement

---

## Classification
Governance

---

## Notes
Adoption is part of engineering. Unadopted standards are unimplemented standards.
