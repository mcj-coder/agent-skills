# CSpell Language Policy Plan

> Status: Delivered
> Owner: TBD
> Date: 2026-01-02

## Goal

Allow documentation and comments to use a user-confirmed native language at runtime (not hardcoded), while keeping code constructs aligned to en-US. Ensure the default skill behavior asks for the documentation language before configuring CSpell.

## Architecture

- Use CSpell language settings with overrides so documentation can use a user-confirmed language (e.g., en-GB) while code identifiers remain en-US.
- Update skills to require confirming the docs/comments language before applying changes.
- Keep configuration explicit and documented for portability.

## Tech Stack

Markdown, JSON.

## Alternatives Considered

1. Global en-GB: Simple but hardcodes a locale and fails portability.
2. Per-repo language prompt + CSpell overrides (recommended): Slightly more setup, portable.
3. Per-file `cspell:language` directives: Very flexible but manual and error-prone.

## Plan (bite-sized tasks)

1. Source review (RED)
   - Inspect current `cspell.json` usage and any existing language settings.
   - Identify doc vs code file patterns to target with CSpell overrides.
2. Define language policy (GREEN)
   - Decide default docs/comment language per user confirmation.
   - Keep code constructs in en-US (global or override).
3. Update CSpell config (GREEN)
   - Add language overrides for documentation files (Markdown, possibly comments) using a user-specified locale.
   - Keep base language for code identifiers en-US.
4. Update skills (GREEN)
   - Amend `documentation-as-code` to require confirming doc language before edits.
   - Amend any relevant tooling skill (if needed) to reference the language policy.
5. Verification (COMMIT)
   - Run `npm run verify` and resolve any issues.

## Task Checklist

|ID|Task|Status|Verification|Evidence|
|---|---|---|---|---|
|1|Source review|Done|Reviewed config + plan|cspell.json, docs/plans/2026-01-02-cspell-language-policy.md|
|2|Define language policy|Done|User-confirmed doc language|Chat confirmation (2026-01-02)|
|3|Update CSpell config|Done|Config updated|cspell.json|
|4|Update skills|Done|Skill updated|skills/documentation-as-code/SKILL.md|
|5|Verification run|Done|npm run verify|npm run verify (2026-01-02)|

## Progress Log

- 2026-01-02: Language policy confirmed, config/skill updates applied, verification complete.

## Finalization

> Outcome: Delivered
> Date: 2026-01-02

### Verification Summary

- npm run verify

### References

- docs/plans/2026-01-02-cspell-language-policy.md
