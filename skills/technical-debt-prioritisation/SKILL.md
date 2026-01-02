---
name: technical-debt-prioritisation
description: >
  Use this skill when assessing brownfield areas to identify, classify, and
  prioritise technical debt in a way that supports delivery goals and reduces
  risk over time.
---

# Technical Debt Identification & Prioritisation

## Intent

Identify technical debt and prioritise remediation based on risk and value,
rather than preference or aesthetics.

---

## When to Use

- Before major feature work in fragile areas
- After recurring defects or incidents
- During periodic maintenance planning
- When planning refactor investments

---

## Precondition Failure Signal

- Debt is discussed vaguely without concrete examples
- Refactors are proposed without value/risk justification
- Teams repeatedly trip over the same fragile areas
- “Cleanup” work grows without measurable outcomes

---

## Postcondition Success Signal

- Debt items are specific, scoped, and tied to observable impacts
- Priorities reflect risk reduction and delivery enablement
- Remediation work is incremental and testable
- Items have clear entry/exit criteria

---

## Process

1. **Source Review**: Conduct a codebase audit or interview stakeholders to identify areas of technical debt.
2. **Implementation**: Classify the identified debt based on its impact on delivery, quality, and maintainability.
3. **Verification**: Verify the prioritization against the current project roadmap and resource availability.
4. **Documentation**: Record the technical debt inventory and prioritization; use an ADR for significant debt that will not be remediated in the short term.
5. **Review**: Tech Lead and Platform Engineer review the technical debt assessment and remediation plan.

---

## Example Test / Validation

- Produce a debt backlog with severity, impact, and evidence
- Identify at least one debt item with a failing signal that can be made to pass
- Confirm prioritisation rationale is reviewable and reproducible

---

## Common Red Flags / Guardrail Violations

- “Rewrite it all” proposals without evidence
- Treating stylistic preferences as top-priority debt
- Unbounded refactor initiatives
- Ignoring user/business impact in favour of internal neatness

---

## Recommended Review Personas

- **Tech Lead** – validates prioritisation and delivery alignment
- **Domain Expert** – validates functional risk and pain points
- **Platform Engineer** – validates operational/build/deploy risks

---

## Skill Priority

P4 – Optimisation & Convenience  
(Escalate to P1 when debt creates correctness risks.)

---

## Conflict Resolution Rules

- Prefer minimal, high-leverage fixes over sweeping rewrites (YAGNI)
- If debt competes with delivery, prioritise items that reduce immediate risk
- Avoid duplicating remediation approaches; consolidate patterns (DRY)

---

## Conceptual Dependencies

- incremental-change-impact (for scoping remediation work)

---

## Classification

Operational

---

## Notes

Debt management is continuous. The goal is risk reduction with measurable outcomes.
