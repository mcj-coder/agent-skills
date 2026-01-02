---
name: local-dev-experience
description: >
  Use this skill when establishing or refining local developer workflows (hooks,
  linting, formatting, validation) to prevent non-compliant changes from being
  committed or merged.
---

# Local Developer Experience Hardening

## Intent
Improve local feedback loops and enforce standards early to reduce CI churn and
prevent policy violations from reaching main.

---

## When to Use
- Introducing or refining git hooks, local validation, or formatting
- Reducing CI failures caused by avoidable local issues
- Standardising developer workflows across teams

---

## Precondition Failure Signal
- Frequent CI failures due to basic style/lint/build issues
- Developers regularly bypass local checks
- Inconsistent local formatting or tooling behaviour across machines
- Hooks or local checks are unreliable or unclear

---

## Postcondition Success Signal
- Local checks fail fast and predictably on violations
- Developers can run the same checks locally as CI expects (conceptually)
- Bypass paths are controlled and require explicit approval
- Documentation explains the local workflow and expectations

---

## Example Test / Validation
- Introduce a known lint/style violation and confirm local checks fail
- Confirm bypass mechanisms are not trivial or undocumented
- Confirm local checks align with quality-gate-enforcement expectations

---

## Common Red Flags / Guardrail Violations
- Allowing easy skipping of hooks without approval
- Making checks advisory because “developers complained”
- Divergence between local and CI expectations
- Global suppressions introduced to reduce local noise

---

## Recommended Review Personas
- **Tech Lead** – validates standards and adoption practicality
- **Platform Engineer** – validates consistency and reproducibility
- **Developer Representative** – validates clarity and usability without weakening policy

---

## Skill Priority
P3 – Delivery & Flow  
(Must not weaken P1/P0 standards.)

---

## Conflict Resolution Rules
- Cannot reduce standards; may improve ergonomics and speed
- If usability conflicts with enforcement, escalate rather than silently weaken gates
- Prefer fewer, reliable checks over many flaky ones (DRY/YAGNI)

---

## Conceptual Dependencies
- quality-gate-enforcement

---

## Classification
Operational

---

## Notes
Developer experience is leverage, but only if it enforces the right behaviour.
