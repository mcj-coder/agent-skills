# Repo Standards Gap Analysis

Date: 2026-02-01
Owner: Codex

## Scope and Impact

Impacted (planned changes): `docs/reports/2026-02-01-repo-standards-gap-analysis.md`, `docs/plans/2026-02-01-repo-standards-gap-analysis.md`.
Reviewed (no changes): repo configuration, CI/CD workflows, hooks, docs, and `skills/**/SKILL.md` for trigger decisions.
Unimpacted: runtime code and deployable components (no application code changes).

## Summary

- 15 skills would have triggered during repo population based on front matter and `When to Use`.
- Most repo standards are enforced via hooks and CI for documentation quality and commit conventions.
- Key gaps: no automated guardrail to block commits on `main`, no CI enforcement for secret scanning, and limited CI/CD traceability controls (no tag-based release/deploy pipelines).

## Findings and Recommendations

- Add a `pre-commit` or `pre-push` guardrail to block commits or pushes to `main`, and document required branch protection settings (status checks, no direct pushes, no merge commits).
- Add a CI job for `npm run secretlint` to make security scanning reproducible and enforceable.
- Document CI/CD scope exceptions explicitly (no release/deploy pipelines) or add tag-based release/deploy workflows if required by operating context.

## Triggered Skills and Gaps

| Skill | Trigger rationale (from front matter + When to Use) | Required standards | Repo evidence | Gap status | Notes |
| --- | --- | --- | --- | --- | --- |
| repository-foundation-bootstrap | Bootstrapping a new repository or migrating a repo to this library's standards. | Baseline documented, brownfield path planned, ADRs for tooling/structure, zero-warning verification. | `docs/plans/2026-01-02-brownfield-standards-migration.md`, `docs/reports/2026-01-02-brownfield-impact.md`, `docs/adr/006-commit-message-validation-and-secret-scanning.md`, `npm run verify` in `README.md`. | Pass | Baseline and migration evidence are present. |
| documentation-scaffold | Starting a new repository or migrating a repo missing/inconsistent docs. | `AGENTS.md` present, README setup/verification, ADRs for decisions, doc checks pass. | `AGENTS.md`, `README.md` (Development/Contributing), `docs/adr/*.md`, `npm run verify` in `README.md`. | Pass | Meets minimum doc scaffold expectations. |
| documentation-as-code | Creating/updating README, plans, ADRs, or SKILL docs. | Linting and spell checks enforced, docs treated as code with CI gate. | `.markdownlint-cli2.yaml`, `.markdownlint.json`, `cspell.json`, `package.json` scripts, `.github/workflows/docs-quality.yml`, `.husky/pre-commit`. | Pass | Automated checks are in place for docs. |
| writing-skills | Creating or modifying any `SKILL.md` during repo population. | Use skill template and enforce front matter constraints. | `skills/writing-skills/templates/skill_template.md`, `README.md` Contributing section. | Pass | Template and guidance exist; enforcement is manual. |
| writing-plans | Producing multi-step plans in `docs/plans/`. | Plan template used and stored in `docs/plans/`. | `skills/writing-plans/templates/plan_template.md`, `docs/plans/2026-01-02-brownfield-standards-migration.md`. | Pass | Plans follow template and are stored in repo. |
| incremental-change-impact | Any change set (docs/config/tooling) during repo setup. | Impact analysis documented with impacted/unimpacted set. | `docs/reports/2026-01-02-brownfield-impact.md`. | Pass | Explicit impact report exists. |
| automated-standards-enforcement | Establishing tooling, linting, and quality gates for standards. | Prefer automated enforcement via hooks/CI over manual review. | `.husky/pre-commit`, `.husky/commit-msg`, `package.json` lint-staged config, `.github/workflows/docs-quality.yml`, `.github/workflows/commitlint.yml`. | Pass | Automated gates exist for docs and commits. |
| local-dev-experience | Introducing hooks, linting, formatting, and staged-only checks. | Husky + lint-staged for staged-only checks; local verification commands. | `.husky/pre-commit`, `package.json` lint-staged config, `npm run verify` in `README.md`. | Pass | Staged-only hooks and local verify are configured. |
| runtime-tooling-validation | Introducing/validating Node/tooling versions and policy. | LTS version pinned and enforced. | `.nvmrc`, `package.json` engines, `volta` node pin. | Pass | Runtime policy is explicit and consistent. |
| static-analysis-security | Introducing or modifying security linting (e.g., secret scanning). | Security scans run and are reproducible; evidence recorded. | `.secretlintrc.json`, `.secretlintignore`, `package.json` `secretlint` script, lint-staged `secretlint`. | Gap | No CI job runs `secretlint`; enforcement is local only. |
| ci-cd-conformance | Creating/modifying CI workflows to meet monorepo standards. | Incremental execution, quality gates, immutable releases, tag-based deployments. | `.github/workflows/docs-quality.yml` uses path filters; `commitlint.yml` enforces commit conventions. | Partial | Quality gates exist; no release/deploy pipelines or tag-based deployment evidence (scope may be N/A). |
| branching-strategy-and-conventions | Defining branching strategy and commit conventions. | No direct commits to `main`, commitlint enforced, branch protection, pre-commit guardrail for default branch. | `.husky/commit-msg`, `.github/workflows/commitlint.yml`, `README.md` branch protection note. | Gap | No automated guardrail to block commits on `main`; branch protection enforcement not verifiable in repo. |
| quality-gate-enforcement | Ensuring checks run and block before merge/tag/deploy. | Required checks block merges and releases with zero warnings. | `.github/workflows/docs-quality.yml`, `.github/workflows/commitlint.yml`, `npm run verify`. | Partial | Secret scanning not enforced in CI; quality gates limited to docs/commit linting. |
| best-practice-introduction | Introducing new standards/tooling with safe rollout. | Incremental rollout plan and ADRs for tooling decisions. | `docs/plans/2026-01-02-brownfield-standards-migration.md`, `docs/adr/006-commit-message-validation-and-secret-scanning.md`. | Pass | Rollout plan and ADRs exist. |
| using-git-worktrees | Multi-step work or need for isolation during repo setup. | Worktree location is defined and ignored; usage documented. | `.gitignore` includes `.worktrees/`, `AGENTS.md` step 5. | Pass | Worktree policy is documented and supported. |
