# Refactor Monorepo Structure Hygiene Skill Plan

> Status: Delivered
> Owner: Codex
> Date: 2026-01-02

## Goal

Refactor and consolidate `monorepo-structure-hygiene` into `scoped-colocation`,
align intent to file co-location at the appropriate scope, and colocate
templates/scripts with the skills that own them (including installing
`verify-plans.js` via the owning skill).

## Architecture

- Merge `monorepo-structure-hygiene` into `scoped-colocation`.
- Update skill intent and process to enforce colocation at relevant scope (monorepo, shared lib, vertical slice, API version).
- Move `templates/` assets into the owning skill folders and update references.
- Move `scripts/verify-plans.js` into the owning skill and define an installation step to place it at the repo root.
- Update all references across docs and skills.

## Tech Stack

- Markdown skills under `skills/`
- Templates/scripts moved into skill folders
- PowerShell for file moves
- Verification via `npm run verify`

## Assumptions

- `documentation-as-code` and/or `writing-plans` are the owners for plan templates and plan verification.
- We can introduce a small install step in the owning skill to place `verify-plans.js` at repo root for CI/husky use.

## Alternatives Considered

1. Keep templates centralized and add cross-links only (low change, weaker colocation).
2. Move only templates, keep scripts centralized (partial).
3. Full colocation with install step for scripts (chosen).

## Task Checklist

| ID  | Task                                                                           | Status | Verification                                                                                                 | Evidence                                                                                             |
| --- | ------------------------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| 1   | Confirm owning skills for templates and verify script.                         | Done   | Owners confirmed (`writing-plans`, `documentation-as-code`, `structured-review-workflow`, `writing-skills`). | Plan updates in this file.                                                                           |
| 2   | Merge `monorepo-structure-hygiene` into `scoped-colocation` and update intent. | Done   | Skill updated and old skill removed.                                                                         | skills/scoped-colocation/SKILL.md; skills/monorepo-structure-hygiene removed.                        |
| 3   | Relocate templates into owning skill folder(s) and update references.          | Done   | Templates moved and references updated.                                                                      | skills/\*/templates; README.md; docs/principles.md; skill references.                                |
| 4   | Relocate `verify-plans.js` into owning skill and add install instructions.     | Done   | Script moved and install note added.                                                                         | skills/writing-plans/scripts/verify-plans.js; scripts/verify-plans.js; skills/writing-plans/SKILL.md |
| 5   | Update README/AGENTS/docs references to new skill name and locations.          | Done   | References updated.                                                                                          | README.md; AGENTS.md; ADRs; skills.                                                                  |
| 6   | Request review from Lead Developer and Architect personas.                     | Done   | Reviews completed and accepted; collated results recorded.                                                   | Lead Developer + Architect review notes in Progress Log (2026-01-02).                                |
| 7   | Run `npm run verify` and record results.                                       | Done   | `npm run verify`                                                                                             | Output logged on 2026-01-02.                                                                         |

Notes:

- Status values: Planned, In Progress, Done, Aborted.
- When a task is Done, fill in Verification and Evidence (command output, link, or note).

## Progress Log

- 2026-01-02: Plan drafted for approval.
- 2026-01-02: Lead Developer review (accepted):
  - Recommendation: add re-install note for verify-plans.js when updated.
  - Recommendation: document install/refresh step when plan verification is required.
- 2026-01-02: Architect review (accepted):
  - Recommendation: keep scoped-colocation as single source of truth for structure and colocation.
  - Recommendation: require shared asset installs to be traceable to owning skills.
- 2026-01-02: Next steps agreed:
  - Implement review recommendations (done).
  - Create follow-up plan for review-gate enforcement (see References).

## Finalization

> Outcome: Delivered
> Date: 2026-01-02

### Verification Summary

- `npm run verify`

### References

- skills/scoped-colocation/SKILL.md
- skills/writing-plans/templates/plan_template.md
- scripts/verify-plans.js
- docs/plans/2026-01-02-review-gate-followup.md
