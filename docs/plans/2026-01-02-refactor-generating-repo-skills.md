# Refactor Generating Repo Skills

> Status: Delivered
> Owner: Codex
> Date: 2026-01-02

## Goal

Decompose the two large, .NET-specific skills in `C:\Users\mcj\.claude\skills\` into composable, generic skills in this repo, aligned to `AGENTS.md` (while remaining compatible with `CLAUDE.md` where needed). Remove duplication by reusing existing skills and explicitly map any remaining domain-specific guidance into targeted, small skills.
Ensure the resulting skills support both brownfield migration and greenfield bootstrapping.

## Architecture

- Break monolithic “generate repo” skills into focused, reusable skills.
- Reuse existing skills for runtime validation, quality gates, documentation-as-code, planning, and testing strategies.
- Align repository guidance to `AGENTS.md` as the canonical assistant context file (with optional compatibility notes for `CLAUDE.md`).
- Document deprecations for the `.claude` skills (without editing them unless requested).

## Tech Stack

- Markdown skills under `skills/`
- Verification via `npm run verify`

## Assumptions

- We should create new generic skills in this repo and avoid editing files under `C:\Users\mcj\.claude\skills\` unless explicitly requested.
- `AGENTS.md` is the canonical assistant context file for this repo; skills should note compatibility with `CLAUDE.md` where relevant.
- Existing skills (e.g., `documentation-as-code`, `runtime-tooling-validation`, `quality-gate-enforcement`, `writing-plans`) should be referenced rather than duplicated.

## Alternatives Considered

1. Keep the `.claude` skills as-is and only add a short note here (rejected: leaves monoliths unaddressed).
2. Merge both `.claude` skills into a single new mega-skill (rejected: not composable).
3. Decompose into focused skills in this repo and cross-reference existing skills (chosen).

## Extraction Notes (Source Review)

**`generating-aspire-monorepo` responsibilities**

- Prerequisite checks (dotnet/node/docker/git).
- Phase-driven workflow: requirements -> components -> git init -> tooling -> plan -> solution -> config -> walking skeleton.
- BDD scenario capture and validation.
- 5-tier testing strategy and coverage thresholds.
- Monorepo affected-only execution guidance.
- .NET-specific patterns (AppHost/ServiceDefaults, vertical slices vs clean architecture).
- Package version strategy (latest from package manager).
- Commit sequencing guidance.

**`generating-production-ready-app-repo` responsibilities**

- Tech stack LTS validation via web lookup.
- CLI-first scaffolding (avoid manual config files).
- Husky + lint-staged hooks, commitlint, commitizen.
- Language-specific lint-staged examples.
- Monorepo orchestration (Nx/Turbo + affected-only scripts).
- Documentation-first scaffolding (CLAUDE.md, README, ADRs, playbooks, .env.example).
- Distributed app patterns (health/alive, API versioning, observability, secrets hygiene).

## Mapping & Gap Analysis

### Existing skills to reuse

- `runtime-tooling-validation` for LTS validation and toolchain consistency.
- `local-dev-experience` + `automated-standards-enforcement` for hooks and enforcement.
- `documentation-as-code` for doc quality gates.
- `writing-plans` + `brainstorming` for requirements/planning gates.
- `test-driven-development` + `architecture-testing` + `contract-consistency-validation`.
- `selective-build-test` for affected-only execution.
- `greenfield-baseline` and `safe-brownfield-refactor` for creation vs migration.
- `quality-gate-enforcement` for zero-warning verification.
- `scoped-colocation` and `component-boundary-ownership`.

### Gaps to cover with new composable skills

- Repo-level bootstrap that works for both greenfield and brownfield migrations.
- Documentation scaffold with `AGENTS.md` as canonical (and `CLAUDE.md` compatibility).
- Monorepo orchestration setup (Nx/Turbo) without embedding language specifics.
- Walking skeleton delivery that is tech-agnostic and references existing testing skills.

## Proposed New Skills

- `repository-foundation-bootstrap`
- `documentation-scaffold`
- `monorepo-orchestration-setup`
- `walking-skeleton-delivery`

## Task Checklist

| ID  | Task                                                                                                                                 | Status | Verification        | Evidence                                                                                                                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Review both `.claude` skills and extract distinct responsibilities, constraints, and overlaps.                                       | Done   | Notes in plan.      | docs/plans/2026-01-02-refactor-generating-repo-skills.md                                                                                                                         |
| 2   | Map extracted responsibilities to existing skills; identify gaps requiring new skills.                                               | Done   | Updated mapping.    | docs/plans/2026-01-02-refactor-generating-repo-skills.md                                                                                                                         |
| 3   | Draft new composable skills (minimal scope, generic) to cover gaps, with AGENTS.md-first guidance and CLAUDE.md compatibility notes. | Done   | New skill files.    | skills/repository-foundation-bootstrap/SKILL.md; skills/documentation-scaffold/SKILL.md; skills/monorepo-orchestration-setup/SKILL.md; skills/walking-skeleton-delivery/SKILL.md |
| 4   | Update `README.md` skills table and any cross-references to include new skills and deprecations.                                     | Done   | README updated.     | README.md                                                                                                                                                                        |
| 5   | Strengthen secrets-handling enforcement in core skills (automated standards, local dev, quality gates, security analysis).           | Done   | Skill updates.      | skills/automated-standards-enforcement/SKILL.md; skills/local-dev-experience/SKILL.md; skills/quality-gate-enforcement/SKILL.md; skills/static-analysis-security/SKILL.md        |
| 6   | Remove plan verification script and references; rely on manual plan review.                                                          | Done   | Repo updated.       | scripts/verify-plans.js; skills/writing-plans/SKILL.md; skills/writing-plans/scripts/verify-plans.js; skills/documentation-as-code/SKILL.md; package.json                        |
| 7   | Run `npm run verify` and record results.                                                                                             | Done   | `npm run verify`.   | Output logged on 2026-01-02 (post secrets/verify removal).                                                                                                                       |
| 8   | Record review notes from Architecture, DevOps, Security, and Lead Developer perspectives before delivery.                            | Done   | Review notes saved. | docs/plans/2026-01-02-refactor-generating-repo-skills.md                                                                                                                         |
| 9   | Collate and discuss review results with the user before marking the plan Delivered.                                                  | Done   | Discussion logged.  | docs/plans/2026-01-02-refactor-generating-repo-skills.md                                                                                                                         |

Notes:

- Status values: Planned, In Progress, Done, Aborted.
- When a task is Done, fill in Verification and Evidence (command output, link, or note).

## Progress Log

- 2026-01-02: Plan drafted for decomposing `.claude` generator skills into composable repo skills.
- 2026-01-02: New composable skills added, README updated, verification passed.
- 2026-01-02: Review notes captured and verification rerun.
- 2026-01-02: Secret scanning enforcement added; plan verification removed; verification rerun.
- 2026-01-02: Collated review results approved by user.

## Review Notes

### Architecture

- Decomposition is appropriately repo-level and avoids .NET-specific coupling.
- Recommendation: clarify that `repository-foundation-bootstrap` is repo-level,
  not a replacement for component-level `greenfield-baseline` (implemented).
- Recommendation: ensure walking-skeleton scope is explicitly approved
  to prevent feature creep (implemented).
- Secrets enforcement should be codified in core quality-gate skills (implemented).
- Removal of plan verification increases reliance on manual review; ensure review
  gating remains explicit.

### Platform/DevOps

- Monorepo orchestration should explicitly align with CI/CD and affected-only
  execution to avoid full-repo runs (implemented).
- Confirm orchestration coordinates existing tooling rather than replacing it
  (already in skill intent/notes).
- Secret scanning must be wired into CI gates and local hooks consistently
  (implemented).

### Security

- Bootstrap skills should acknowledge security checks when posture changes
  and avoid enabling gates on dirty baselines (implemented).
- Documentation should include safe handling of local secrets where relevant
  (implemented in documentation scaffold).
- Secret scanning must be mandatory in CI and not bypassed by convenience
  flags (implemented in quality gate + automated standards).

### Lead Developer

- Skill set is composable and minimal; avoid re-embedding stack-specific guidance.
- Ensure review personas are called out and user approval is required for
  minimal-slice scope (implemented in walking-skeleton).
- Removing plan verification is acceptable if manual review remains explicit
  and recorded in the plan.

### Collated Summary (Discussed)

- All reviewer recommendations have been incorporated into the new skills,
  including mandatory secret scanning and CI gate enforcement.
- Plan verification removal is acceptable with explicit manual review gating.
- No outstanding conflicts identified; proceed to discussion for delivery gate.

## Finalization

> Outcome: Delivered
> Date: 2026-01-02

### Verification Summary

- `npm run verify`

### References

- C:\Users\mcj\.claude\skills\generating-aspire-monorepo\SKILL.md
- C:\Users\mcj\.claude\skills\generating-production-ready-app-repo\SKILL.md
- skills/writing-plans/SKILL.md
- skills/documentation-as-code/SKILL.md
