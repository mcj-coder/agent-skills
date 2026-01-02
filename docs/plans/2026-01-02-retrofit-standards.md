# Retrofit Repo Standards Plan

> Status: Draft
> Owner: TBD
> Date: 2026-01-02

## Goal

Bring the repository up to the standards defined in the skills, including local and CI enforcement for documentation quality, runtime/tooling alignment, and clear developer workflow guidance.

## Architecture

- Documentation as code remains the primary artifact, with local hooks and CI checks enforcing markdown linting and spell checks.
- Runtime/tooling policy is pinned and documented at the repo root (Node LTS).
- CI pipelines provide a reproducible quality gate that mirrors local checks.

## Tech Stack

Markdown, Node.js LTS, Husky, lint-staged, markdownlint-cli2, cspell, GitHub Actions.

## Design Options (trade-offs)

1. Minimal retrofit (local-only): Fix hooks, document verification commands, pin Node LTS. Fast, low friction, but no shared enforcement.
2. Full enforcement (local + CI): Add CI gate for markdown linting and spell checks. Strong enforcement and traceability, slightly more setup and adoption friction.
3. Phased enforcement: Add CI in warn-only or allow-failure mode first, then switch to blocking after baseline remediation. Reduces disruption, adds short-term complexity.

## Plan (bite-sized tasks)

1. Source review and impact (RED)
   - Confirm current hook config, runtime tooling, and docs quality tooling.
   - Identify impacted files for changes and new files.
2. Runtime/tooling alignment (GREEN)
   - Add Node LTS pin (e.g., .nvmrc and package.json engines).
   - Document runtime/tooling expectations in README.
3. Local enforcement hardening (GREEN)
   - Fix .husky/pre-commit to use standard Husky shim and lint-staged.
   - Ensure local commands match CI (npm run verify).
4. CI quality gate (GREEN)
   - Add GitHub Actions workflow to run npm ci and npm run verify on PRs and main.
   - Keep workflow scoped to documentation checks.
5. Documentation updates (REFACTOR)
   - Update README with a concise Development and Verification section.
   - Remove non-ASCII characters to comply with ASCII-default rule.
6. Verification (COMMIT)
   - Run npm run verify (markdownlint + cspell).
   - Fix any lint/spell issues until zero warnings.
   - Capture evidence for handover.

## Task Checklist

|ID|Task|Status|Verification|Evidence|
|---|---|---|---|---|
|1|Source review and impact|Planned|||
|2|Runtime/tooling alignment|Planned|||
|3|Local enforcement hardening|Planned|||
|4|CI quality gate|Planned|||
|5|Documentation updates|Planned|||
|6|Verification run|Planned|||

## Files to change/add

- Add: .nvmrc
- Update: package.json
- Update: .husky/pre-commit
- Add: .github/workflows/docs-quality.yml
- Update: README.md
- Possibly update: cspell.json (only if new words are required)

## Mandatory commands

- npm run verify

## Notes

- If baseline failures are large, propose a phased rollout (Option 3) instead of blocking CI immediately.

## Progress Log

- 2026-01-02: Template retrofit; no execution recorded.

## Finalization

> Outcome: Pending
> Date: TBD

### Verification Summary

- Not executed; template retrofit only.

### References

- docs/plans/2026-01-02-retrofit-standards.md
