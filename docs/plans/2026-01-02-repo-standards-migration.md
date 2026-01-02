# Repo Standards Migration Plan

> Status: Draft
> Owner: TBD
> Date: 2026-01-02

## Goal

Reread the repo skills and bring the repository into compliance with the standards they require, using a structured, evidence-backed migration.

## Architecture

- Use skill-driven remediation: identify gaps per skill, prioritize by skill priority model, and fix in incremental, reviewable steps.
- Apply policies once and reference them to avoid duplication (DRY/YAGNI).
- Treat documentation as code throughout.

## Tech Stack

Markdown, Node.js LTS, Husky, lint-staged, markdownlint-cli2, cspell, Git.

## Design Options (trade-offs)

1. Full compliance sweep in one pass: fastest closure, higher risk of large diff.
2. Phased compliance by priority tier (P0 -> P4): controlled risk, more commits.
3. Targeted remediation for known gaps first, then sweep: balances risk and speed.

## Plan (bite-sized tasks)

1. Source review and inventory (RED)
   - Read all repo skills and extract explicit requirements.
   - Build a gap list grouped by priority and scope.
2. Impact analysis (RED)
   - Apply `incremental-change-impact` to the expected changes.
3. Remediation plan (GREEN)
   - Order fixes by priority (P0/P1 first).
   - Define concrete changes, files, and commands.
4. Execute fixes (GREEN)
   - Apply changes in small, reviewable units.
   - Update or add ADRs when policy exceptions are required.
5. Verification (COMMIT)
   - Run `npm run verify` and any other required checks.
   - Ensure zero warnings/errors across all checks.

## Task Checklist

|ID|Task|Status|Verification|Evidence|
|---|---|---|---|---|
|1|Source review and inventory|Planned|||
|2|Impact analysis|Planned|||
|3|Remediation plan|Planned|||
|4|Execute fixes|Planned|||
|5|Verification run|Planned|||

## Files to change/add

- TBD after gap analysis.

## Mandatory commands

- npm run verify

## Notes

- Any exception requires explicit user approval and ADR.
- Keep all changes ASCII-only unless the file already uses Unicode.

## Progress Log

- 2026-01-02: Template retrofit; no execution recorded.

## Finalization

> Outcome: Pending
> Date: TBD

### Verification Summary

- Not executed; template retrofit only.

### References

- docs/plans/2026-01-02-repo-standards-migration.md
