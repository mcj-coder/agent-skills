# Prettier + Markdownlint Integration Plan

> Status: Delivered
> Owner: TBD
> Date: 2026-01-02

## Goal

Ensure markdown formatting and line endings are auto-fixed on commit, with markdownlint as the final formatter, and update skills so tooling setup is applied automatically.

## Architecture

- Use Prettier to normalize LF line endings.
- Run markdownlint with --fix after Prettier to enforce repository-specific rules.
- Update relevant skills to require tool setup and ordering.

## Tech Stack

Node.js, lint-staged, Prettier, markdownlint-cli2.

## Alternatives Considered

1. Markdownlint-only: no line-ending fixes; warnings persist.
2. Prettier-only: easy fixes but formatting rules may diverge from markdownlint.
3. Prettier then markdownlint --fix (recommended): Prettier normalizes LF; markdownlint enforces rules last.

## Plan (bite-sized tasks)

1. Source review (RED)
   - Confirm current lint-staged, markdownlint, and spell-check configuration.
2. Tooling update (GREEN)
   - Add Prettier with endOfLine LF and preserve wrapping.
   - Update lint-staged to run Prettier then markdownlint --fix.
3. Skill updates (GREEN)
   - Update tooling-related skills to require the Prettier + markdownlint ordering.
4. Verification (COMMIT)
   - Run npm install.
   - Run npm run verify.

## Task Checklist

| ID  | Task             | Status | Verification                   | Evidence                              |
| --- | ---------------- | ------ | ------------------------------ | ------------------------------------- |
| 1   | Source review    | Done   | Config review                  | package.json, .markdownlint-cli2.yaml |
| 2   | Tooling update   | Done   | Prettier + lint-staged updated | package.json, .prettierrc             |
| 3   | Skill updates    | Done   | Skill updated                  | skills/local-dev-experience/SKILL.md  |
| 4   | Verification run | Done   | npm run verify                 | npm run verify (2026-01-02)           |

## Progress Log

- 2026-01-02: Tooling updated, skill guidance refined, verification complete.

## Finalization

> Outcome: Delivered
> Date: 2026-01-02

### Verification Summary

- npm run verify

### References

- docs/plans/2026-01-02-prettier-linting-integration.md
