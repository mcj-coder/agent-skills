# Skill Library (Claude-style)

This repository codifies a reusable library of engineering skills for mixed human/agent teams.
Skills are written to be **TDD-driven**, **guardrail-enforced**, **independently reviewable**, and
consistent with **DRY** and **YAGNI**.

## Repository layout

- `skills/<skill-name>/SKILL.md` — one skill per folder (kebab-case)
- `templates/` — canonical templates for new skills and reviews
- `docs/` — shared governance principles and standards

## Skills

| Skill | When to use |
|------|-------------|
| `scoped-colocation` | Use this skill whenever defining, modifying, or reviewing any interface, class, service, or component to ensure all related code, tests, documentation, and dependencies are co-located at the narrowest meaningful scope, with shared functionality extracted only when reuse across multiple slices or projects is proven. |
| `incremental-change-impact` | Use this skill whenever a change is proposed or reviewed to determine which components, slices, libraries, tests, builds, and deployments are affected, ensuring only necessary work is performed and unintended side effects are identified early. |
| `selective-build-test` | Use this skill whenever preparing local or CI execution to build and test only the impacted components identified by change impact analysis, while preserving quality gates and correctness. |
| `safe-brownfield-refactor` | Use this skill when improving structure, readability, or maintainability of existing code while preserving behaviour, public contracts, and quality gate outcomes. |
| `greenfield-baseline` | Use this skill when creating a new component or service to establish repository-conformant structure, quality gates, and traceability practices from the first commit. |
| `quality-gate-enforcement` | Use this skill whenever validating changes before merge, release, or deployment to ensure all required quality checks pass without suppression, bypass, or degraded standards. |
| `local-dev-experience` | Use this skill when establishing or refining local developer workflows (hooks, linting, formatting, validation) to prevent non-compliant changes from being committed or merged. |
| `static-analysis-security` | Use this skill whenever changes affect security posture, dependencies, authentication/authorization, data handling, or when introducing or modifying analysis checks to prevent risk from entering the codebase. |
| `runtime-tooling-validation` | Use this skill when introducing, upgrading, or reviewing runtimes and build tooling to ensure approved LTS versions and consistent tooling policies are applied across components. |
| `monorepo-structure-hygiene` | Use this skill periodically or when large changes occur to ensure the monorepo remains coherent, with clear boundaries, minimal duplication, and consistent patterns aligned to the operating contract. |
| `component-boundary-ownership` | Use this skill when deciding where functionality should live (slice-local vs shared), ensuring clear ownership, minimal coupling, and correct placement aligned to reuse evidence and deployment boundaries. |
| `library-extraction-stabilisation` | Use this skill when reusable functionality has stabilised and is used by multiple components, to extract it into a dedicated library with clear ownership, versioning expectations, and minimal surface area. |
| `semantic-version-impact` | Use this skill whenever changes affect a deployable component or library to determine the correct semantic version bump based on conventional commits, scope, and observed impact. |
| `release-tagging-plan` | Use this skill when preparing immutable releases to define the exact component versions and tags that map source to built artifacts and deployments for traceability. |
| `incremental-deployment` | Use this skill when deploying to ensure only modified and impacted components are deployed, with explicit version/tag inputs and environment traceability preserved. |
| `environment-traceability` | Use this skill whenever deploying or auditing environments to ensure each environment can be mapped to explicit component versions and tags, preserving immutable provenance. |
| `ci-cd-conformance` | Use this skill when creating or changing pipelines to ensure they conform to monorepo standards: incremental execution, immutable releases, tag-based deployments, and required quality gates. |
| `best-practice-introduction` | Use this skill when introducing new standards, tooling, or practices to plan a safe, incremental rollout that preserves delivery while strengthening governance and quality. |
| `technical-debt-prioritisation` | Use this skill when assessing brownfield areas to identify, classify, and prioritise technical debt in a way that supports delivery goals and reduces risk over time. |
| `change-risk-rollback` | Use this skill whenever a change is intended for release or deployment to assess operational risk, identify failure modes, and ensure rollback paths are explicit and realistic. |

## Contributing

1. Create `skills/<new-skill-name>/SKILL.md` using `templates/skill_template.md`.
2. Ensure `SKILL.md` frontmatter contains **only** `name` and `description`.
3. Ensure the skill defines: failing precondition → applied skill → passing postcondition.
4. Include red flags, review personas, priority, and conflict resolution rules.
