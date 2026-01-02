# Brownfield Repo Standards Migration (Full Alignment)

> Status: Draft | Approved | In Progress | Delivered | Aborted
> Owner: Codex
> Date: 2026-01-02

## Goal

Bring the repository into full compliance with the skill library standards using a brownfield-safe, tooling-first approach with immediate enforcement after baseline remediation.

## Architecture

Repository-level standards alignment only. No product feature changes or public contract changes.

## Tech Stack

- Node.js LTS tooling (docs linting, spellcheck, hooks)
- Markdownlint CLI2, CSpell, Prettier, Husky, lint-staged
- GitHub Actions

## Assumptions

- Existing documentation and tooling are the primary surface area for this migration.
- No behavioral code changes are required for compliance unless a gate requires remediation.
- ADRs are required for structural/tooling decisions.
- Commit message enforcement expectations are updated in `skills/branching-strategy-and-conventions/SKILL.md` but still require verification.

## Alternatives Considered

1. Compliance-first sequencing (docs and CI first, structure later)
2. Structure-first sequencing (repo layout before tooling)
3. Tooling-first sequencing (recommended)

## Task Checklist

| ID  | Task                                                                                                                                                                                                                                           | Status | Verification                                  | Evidence                                                                                                             |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 1   | Impact analysis: RED: inventory current structure, tooling, docs, CI; GREEN: record impacted/unimpacted set in `docs/reports/2026-01-02-brownfield-impact.md`; REFACTOR: cross-check against `README.md` skills.                               | Done   | Note in report                                | `docs/reports/2026-01-02-brownfield-impact.md`                                                                       |
| 2   | Runtime/tooling validation: RED: confirm current pins in `.nvmrc`, `package.json`, `package-lock.json`; GREEN: align with approved LTS policy; REFACTOR: document in README or ADR.                                                            | Done   | `node --version`, `npm run verify`            | Node `v24.12.0`; `npm run verify` passed                                                                             |
| 3   | Automated standards enforcement tool selection: RED: identify missing gates (secret scanning, commit message validation, SAST if needed); GREEN: document tool options + recommendation in ADR; REFACTOR: confirm user approval before config. | Done   | ADR review + approval note                    | `docs/adr/006-commit-message-validation-and-secret-scanning.md` updated to secretlint after user approval            |
| 4   | Commit message policy skill update verification: RED: review `skills/branching-strategy-and-conventions/SKILL.md`; GREEN: ensure commit-msg enforcement is explicitly required; REFACTOR: verify wording with `writing-skills` expectations.   | Done   | `npm run verify`                              | Verification run passed after skill update                                                                           |
| 5   | Commit message validation enforcement: RED: identify current commit convention gaps; GREEN: add commit-msg hook + CI check using approved open-source tooling; REFACTOR: document rules in `README.md` and skill doc update.                   | Done   | `git commit -m "bad"`                         | Commit-msg hook blocked invalid commit via commitlint (type/subject empty).                                          |
| 6   | Local dev experience hardening: RED: stage a known markdown violation; GREEN: ensure `lint-staged` and Husky block only staged files; REFACTOR: align hook docs in `README.md`.                                                                | Done   | `npx lint-staged` (staged file)               | `lint-staged` failed on staged `docs/lint-staged-violation.md` due to cspell unknown word (typo marker).             |
| 7   | Baseline remediation: RED: run `npm run verify` to capture failures; GREEN: fix markdownlint/cspell violations; REFACTOR: ensure zero warnings/errors.                                                                                         | Done   | `npm run verify`                              | `npm run verify` passed (markdownlint + cspell) on 2026-01-02.                                                       |
| 8   | Documentation governance alignment: RED: check `AGENTS.md`, `README.md`, `docs/principles.md` for accuracy; GREEN: update docs to match repo state; REFACTOR: add ADRs for structural/tooling decisions.                                       | Done   | `npm run verify`                              | README aligned to CI trigger scope; `npm run verify` passed on 2026-01-02.                                           |
| 9   | CI/CD conformance: RED: review `.github/workflows/docs-quality.yml` against standards; GREEN: apply affected-only or path filters as appropriate; REFACTOR: ensure gates are blocking and consistent.                                          | Done   | Workflow diff review                          | Docs Quality now runs on PRs and pushes to `main` with path filters.                                                 |
| 10  | Quality gate activation & verification: RED: confirm all checks clean locally; GREEN: ensure hooks and CI are blocking; REFACTOR: record evidence in plan and reports.                                                                         | Done   | `npm run verify`, `npm run secretlint`, hooks | `npm run verify` and `npm run secretlint` passed; commit-msg and lint-staged hooks verified to block invalid inputs. |

Notes:

- Status values: Planned, In Progress, Done, Aborted.
- When a task is Done, fill in Verification and Evidence (command output, link, or note).

## Progress Log

- 2026-01-02: Draft plan created; pending reviews (Tech Lead, Platform/DevOps, Security).
- 2026-01-02: Plan updated to include commit message policy verification and enforcement.
- 2026-01-02: Completed task 1 (impact report). Tasks 2-6 require verification evidence per updated plan discipline.
- 2026-01-02: Updated tooling ADR to adopt secretlint for secret scanning (verification pending).
- 2026-01-02: `npm run verify` passed; commit-msg and lint-staged tests blocked by git permission error.
- 2026-01-02: `.git` ACL shows explicit DENY on write for SID S-1-5-21-2316274655-3280548523-2396653306-3954005083, blocking `git add`/`git commit`.
- 2026-01-02: Baseline remediation verification rerun; `npm run verify` passed with zero errors.
- 2026-01-02: Documentation updates re-verified; `npm run verify` still clean.
- 2026-01-02: Docs Quality workflow updated with path filters and `main` push trigger; README aligned.
- 2026-01-02: Secretlint verification run clean; hook enforcement still blocked by skipped tasks 5-6.
- 2026-01-02: Commit-msg hook verified with a failing commit message; commitlint blocked invalid commit.
- 2026-01-02: Lint-staged verified by staging a markdown violation; cspell blocked the staged file.
- 2026-01-02: Quality gates verified: `npm run verify`, `npm run secretlint`, commit-msg, and lint-staged enforcement confirmed.

## Finalization

> Outcome: Delivered | Aborted | Pending
> Date: 2026-01-02

### Verification Summary

-

### References

- `skills/repository-foundation-bootstrap/SKILL.md`
- `skills/incremental-change-impact/SKILL.md`
- `skills/safe-brownfield-refactor/SKILL.md`
- `skills/best-practice-introduction/SKILL.md`
- `skills/automated-standards-enforcement/SKILL.md`
- `skills/local-dev-experience/SKILL.md`
- `skills/runtime-tooling-validation/SKILL.md`
- `skills/quality-gate-enforcement/SKILL.md`
- `skills/documentation-as-code/SKILL.md`
- `skills/branching-strategy-and-conventions/SKILL.md`
- `skills/writing-skills/SKILL.md`
