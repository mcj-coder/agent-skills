# Repo Standards Gap Remediation

> Status: Delivered
> Owner: Codex
> Date: 2026-02-01

## Goal

Close the repo‑vs‑standards gaps identified in the gap analysis: enforce default‑branch guardrails, add CI secret scanning, document CI/CD scope (no release/deploy workflows), and define per‑skill tag conventions on `main`.

## Architecture

Documentation, CI/hook changes, and Nx monorepo tooling to support per‑skill versioning and tags. No runtime or behavioural code changes.

## Tech Stack

- PowerShell
- Husky (git hooks)
- GitHub Actions
- Secretlint
- Nx (monorepo orchestration + release)

## Assumptions

- Branch protection is configured in the hosting platform, but repo evidence must document expected settings.
- Per‑skill versioning will be represented by Nx release tags on `main`.

## Alternatives Considered

1. Implement minimal guardrails and documentation (selected) to close current gaps.
2. Build full release/deploy pipelines with tag‑based deployments (more complete, higher effort).
3. Add per‑skill changelogs and manifests (more traceability, not required now).
4. Custom per‑skill semver scripts (lighter, but not portable).

## Task Checklist

|ID|Task|Status|Verification|Evidence|
|---|---|---|---|---|
|1|Impact analysis (RED/GREEN/REFACTOR): list impacted files (hooks, workflows, README/AGENTS/skills docs, Nx config) and unimpacted areas; record in plan and update report if needed.|Done|Impacted/unimpacted list recorded|Plan notes|
|2|Nx bootstrap (RED/GREEN/REFACTOR): add Nx to the repo, define each `skills/<name>` as a project, and configure Nx release for independent versioning and tags (`skill/<name>/vX.Y.Z`).|Done|`npx nx graph` runs; `npx nx release --dry-run` shows per-skill tags|`npx nx graph --file=.tmp/nx-graph.json`; dry-run verified for `architecture-testing` (full repo dry-run timed out).|
|3|Default-branch guardrail (RED/GREEN/REFACTOR): add a Husky `pre-commit` check that blocks commits on `main` (or default branch) and document expected branch protection settings in README/AGENTS.|Done|Docs updated|`.husky/pre-commit`, `README.md`, `AGENTS.md`|
|4|CI secret scanning (RED/GREEN/REFACTOR): add a GitHub Actions job to run `npm run secretlint` on PRs and `main` pushes (path filtered).|Done|Workflow file added|`.github/workflows/secretlint.yml`|
|5|CI/CD scope documentation (RED/GREEN/REFACTOR): document that this repo has no release/deploy workflows and that tag-based deployment is out of scope for now; add explicit note in README and/or AGENTS.|Done|Docs updated|`README.md`, `AGENTS.md`|
|6|Nx release tagging workflow (RED/GREEN/REFACTOR): add a CI workflow that runs Nx release on `main` merges and pushes tags.|Done|Workflow file added|`.github/workflows/nx-release.yml`|
|7|Per-skill tag policy (RED/GREEN/REFACTOR): document Nx release usage, tag format, and when tags should be created; update relevant skill/docs.|Done|Docs updated and verified|`README.md`|
|8|Verification + commit (RED/GREEN/REFACTOR): run `npm run verify`; run `npx nx release --dry-run` (sample project); fix lint/spell issues; commit on feature branch with conventional commit (no commits to `main`).|Done|`npm run verify` clean; dry-run clean|`npm run verify` passed; `npx nx release --dry-run --projects=architecture-testing` verified.|

Notes:

- Status values: Planned, In Progress, Done, Aborted.
- When a task is Done, fill in Verification and Evidence (command output, link, or note).

## Impact Notes

Impacted: `package.json`, `package-lock.json`, `nx.json`, `skills/**/project.json`, `skills/**/package.json`, `.husky/pre-commit`, `.github/workflows/secretlint.yml`, `.github/workflows/nx-release.yml`, `README.md`, `AGENTS.md`, `.gitignore`, `cspell.json`, `docs/plans/2026-02-01-repo-standards-gap-remediation.md`.
Unimpacted: runtime code, deployable components, application features.

## Progress Log

- 2026-02-01: Draft remediation plan created.
- 2026-02-01: Nx bootstrap completed; graph generated and single-project release dry-run verified.
- 2026-02-01: Guardrail, secretlint, CI/CD scope, and tag policy documentation updated.
- 2026-02-01: Verification complete (`npm run verify`, `nx release --dry-run`).

## Finalisation

> Outcome: Delivered
> Date: 2026-02-01

### Verification Summary

- `npm run verify`
- `npx nx graph --file=.tmp/nx-graph.json --watch=false`
- `npx nx release --dry-run --projects=architecture-testing --verbose`

### References

- `docs/reports/2026-02-01-repo-standards-gap-analysis.md`
- `skills/branching-strategy-and-conventions/SKILL.md`
- `skills/local-dev-experience/SKILL.md`
- `skills/static-analysis-security/SKILL.md`
- `skills/ci-cd-conformance/SKILL.md`
- `skills/quality-gate-enforcement/SKILL.md`
- `skills/monorepo-orchestration-setup/SKILL.md`
