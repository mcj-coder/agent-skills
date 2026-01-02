# Strengthen Quality Gates and Config Consistency Plan

> Status: Draft
> Owner: TBD
> Date: 2026-01-02

## Goal

Clarify that all verification warnings/errors are treated as failures unless explicitly approved, and require tool configuration consistency across the repo without duplicating policy text across skills.

## Architecture

- Make `quality-gate-enforcement` the authoritative source for zero warnings/errors across all checks.
- Reference that policy from other skills that invoke verification.
- Make `automated-standards-enforcement` the authoritative source for tool configuration consistency.
- Reference the consistency policy from other skills that touch tooling or local workflows.

## Tech Stack

Markdown.

## Design Options (trade-offs)

1. Central policy + references: one authoritative statement per policy with cross-skill references. Minimal duplication, clear ownership.
2. Per-skill copies: duplicate the same policy text in every skill. Clear locally but high DRY violations.
3. ADR-only: move policy to ADRs and link from skills. Lowest skill text, but harder to apply at point of use.

## Plan (bite-sized tasks)

1. Source review (RED)
   - Identify skills that must reference zero-warning policy and config consistency policy.
2. Update authoritative skills (GREEN)
   - Add explicit zero-warning policy and escalation requirements to `quality-gate-enforcement`.
   - Add explicit tool configuration consistency policy to `automated-standards-enforcement`.
3. Add references (GREEN)
   - Reference the zero-warning policy from skills that run or validate checks (e.g., documentation-as-code, verification-and-handover, local-dev-experience).
   - Reference the consistency policy from tooling-related skills (e.g., runtime-tooling-validation, local-dev-experience).
4. Verification (COMMIT)
   - Run `npm run verify` and resolve issues.

## Task Checklist

|ID|Task|Status|Verification|Evidence|
|---|---|---|---|---|
|1|Source review|Planned|||
|2|Update authoritative skills|Planned|||
|3|Add references|Planned|||
|4|Verification run|Planned|||

## Files to change

- Update: skills/quality-gate-enforcement/SKILL.md
- Update: skills/automated-standards-enforcement/SKILL.md
- Update: skills/documentation-as-code/SKILL.md
- Update: skills/verification-and-handover/SKILL.md
- Update: skills/local-dev-experience/SKILL.md
- Update: skills/runtime-tooling-validation/SKILL.md
- Possibly update: cspell.json

## Mandatory commands

- npm run verify

## Notes

- Keep policies single-sourced and referenced to avoid DRY violations.
- Any exception requires explicit user permission and ADR.

## Progress Log

- 2026-01-02: Template retrofit; no execution recorded.

## Finalization

> Outcome: Pending
> Date: TBD

### Verification Summary

- Not executed; template retrofit only.

### References

- docs/plans/2026-01-02-strengthen-quality-config-consistency.md
