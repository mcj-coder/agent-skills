# Skill Library (Claude-style)

This repository codifies a reusable library of engineering skills for mixed human/agent teams.
Skills are written to be **TDD-driven**, **guardrail-enforced**, **independently reviewable**, and
consistent with **DRY** and **YAGNI**.

## Repository layout

- `skills/<skill-name>/SKILL.md` - one skill per folder (kebab-case)
- Template assets are co-located with their owning skills under `skills/*/templates/`.
- `docs/` - shared governance principles and standards

## Skills

| Skill                              | When to use                                                                                                                                                                                                                                         |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `scoped-colocation`                | Use this skill whenever defining, modifying, or reviewing structure and boundaries to ensure related code, tests, docs, templates, and scripts are co-located at the narrowest meaningful scope, with shared extraction only when reuse is proven.  |
| `incremental-change-impact`        | Use this skill whenever a change is proposed or reviewed to determine which components, slices, libraries, tests, builds, and deployments are affected, ensuring only necessary work is performed and unintended side effects are identified early. |
| `selective-build-test`             | Use this skill whenever preparing local or CI execution to build and test only the impacted components identified by change impact analysis, while preserving quality gates and correctness.                                                        |
| `safe-brownfield-refactor`         | Use this skill when improving structure, readability, or maintainability of existing code while preserving behaviour, public contracts, and quality gate outcomes.                                                                                  |
| `greenfield-baseline`              | Use this skill when creating a new component or service to establish repository-conformant structure, quality gates, and traceability practices from the first commit.                                                                              |
| `repository-foundation-bootstrap`  | Use this skill when bootstrapping a new repository or migrating an existing repo to conform to this skill library's standards, ensuring a clean, minimal foundation before feature work begins.                                                     |
| `quality-gate-enforcement`         | Use this skill whenever validating changes before merge, release, or deployment to ensure all required quality checks pass without suppression, bypass, or degraded standards.                                                                      |
| `local-dev-experience`             | Use this skill when establishing or refining local developer workflows (hooks, linting, formatting, validation) to prevent non-compliant changes from being committed or merged.                                                                    |
| `static-analysis-security`         | Use this skill whenever changes affect security posture, dependencies, authentication/authorization, data handling, or when introducing or modifying analysis checks to prevent risk from entering the codebase.                                    |
| `runtime-tooling-validation`       | Use this skill when introducing, upgrading, or reviewing runtimes and build tooling to ensure approved LTS versions and consistent tooling policies are applied across components.                                                                  |
| `component-boundary-ownership`     | Use this skill when deciding where functionality should live (slice-local vs shared), ensuring clear ownership, minimal coupling, and correct placement aligned to reuse evidence and deployment boundaries.                                        |
| `library-extraction-stabilisation` | Use this skill when reusable functionality has stabilised and is used by multiple components, to extract it into a dedicated library with clear ownership, versioning expectations, and minimal surface area.                                       |
| `semantic-version-impact`          | Use this skill whenever changes affect a deployable component or library to determine the correct semantic version bump based on conventional commits, scope, and observed impact.                                                                  |
| `release-tagging-plan`             | Use this skill when preparing immutable releases to define the exact component versions and tags that map source to built artifacts and deployments for traceability.                                                                               |
| `incremental-deployment`           | Use this skill when deploying to ensure only modified and impacted components are deployed, with explicit version/tag inputs and environment traceability preserved.                                                                                |
| `environment-traceability`         | Use this skill whenever deploying or auditing environments to ensure each environment can be mapped to explicit component versions and tags, preserving immutable provenance.                                                                       |
| `ci-cd-conformance`                | Use this skill when creating or changing pipelines to ensure they conform to monorepo standards: incremental execution, immutable releases, tag-based deployments, and required quality gates.                                                      |
| `best-practice-introduction`       | Use this skill when introducing new standards, tooling, or practices to plan a safe, incremental rollout that preserves delivery while strengthening governance and quality.                                                                        |
| `automated-standards-enforcement`  | Use this skill whenever establishing, reviewing, or modifying engineering standards to prefer automated tooling (linters, SAST, architectural unit tests) over manual developer or agent behavior for enforcement.                                  |
| `technical-debt-prioritisation`    | Use this skill when assessing brownfield areas to identify, classify, and prioritise technical debt in a way that supports delivery goals and reduces risk over time.                                                                               |
| `change-risk-rollback`             | Use this skill whenever a change is intended for release or deployment to assess operational risk, identify failure modes, and ensure rollback paths are explicit and realistic.                                                                    |
| `using-skill-library`              | Use this skill at the start of any session to load the skill inventory, apply trigger rules, and establish the required planning workflow.                                                                                                          |
| `brainstorming`                    | Use this skill before any creative or multi-step work to clarify intent, explore alternatives, and produce a validated design or specification.                                                                                                     |
| `writing-plans`                    | Use this skill when a multi-step task has a validated design and you need a detailed, reviewable implementation plan before touching code.                                                                                                          |
| `executing-plans`                  | Use this skill when you have an approved implementation plan and need to execute it in batches with review checkpoints.                                                                                                                             |
| `subagent-driven-development`      | Use this skill when executing an approved plan with independent tasks that can be delegated to separate agents in the current session.                                                                                                              |
| `dispatching-parallel-agents`      | Use this skill when you have multiple independent tasks or failures that can be investigated in parallel without shared state.                                                                                                                      |
| `using-git-worktrees`              | Use this skill when starting feature work that needs isolation or when an approved plan should be executed in a clean, separate workspace.                                                                                                          |
| `finishing-a-development-branch`   | Use this skill when implementation is complete and you need to decide how to integrate, keep, or discard a development branch.                                                                                                                      |
| `systematic-debugging`             | Use this skill whenever encountering any bug, test failure, or unexpected behaviour to identify root cause before proposing fixes.                                                                                                                  |
| `verification-and-handover`        | Use this skill whenever claiming a task is complete, a bug is fixed, or preparing to handover/submit work to ensure all success criteria are met with evidence.                                                                                     |
| `requesting-code-review`           | Use this skill when requesting review for completed work to ensure the reviewer has context, evidence, and clear focus areas.                                                                                                                       |
| `receiving-code-review`            | Use this skill when receiving review feedback to ensure changes are applied with technical rigor and verified evidence.                                                                                                                             |
| `structured-review-workflow`       | Use this skill when you need an end-to-end review workflow that coordinates both requesting and receiving feedback.                                                                                                                                 |
| `documentation-as-code`            | Use this skill whenever creating, modifying, or reviewing documentation (Markdown, ADRs, PLANS, READMEs) to ensure it is treated with the same rigor as source code: linted, spell-checked, verified, and reviewed.                                 |
| `documentation-scaffold`           | Use this skill when bootstrapping or migrating a repository to ensure the minimum documentation set (including AGENTS.md) is created and aligned before implementation work proceeds.                                                               |
| `observability-logging-baseline`   | Use this skill when adding or standardizing application logging and distributed tracing to ensure structured logs, OWASP-aligned security hygiene, and Correlation-Id propagation across the system.                                                |
| `test-driven-development`          | Use this skill whenever implementing any feature or bugfix to ensure behaviour is defined by tests before implementation.                                                                                                                           |
| `aspire-integration-testing`       | Use this skill whenever implementing or reviewing cross-component integration tests or smoke tests for .NET Aspire applications to ensure distributed system integrity.                                                                             |
| `testcontainers-integration-tests` | Use this skill whenever implementing or reviewing integration tests that require real infrastructure (databases, queues, caches) for single-component validation.                                                                                   |
| `architecture-testing`             | Use this skill whenever defining or reviewing architectural boundaries, layering, or project dependency rules to ensure structural integrity and prevent drift.                                                                                     |
| `contract-consistency-validation`  | Use this skill whenever modifying public interfaces, APIs, or shared contracts to ensure compatibility, consistency with Semantic Versioning, and prevention of breaking changes.                                                                   |
| `modern-csharp-coding-standards`   | Use this skill whenever writing or reviewing C# code to ensure use of modern language features, high performance, and robust API design.                                                                                                            |
| `monorepo-orchestration-setup`     | Use this skill when configuring or migrating a monorepo to support affected-only builds/tests via an orchestration tool (e.g., Nx or Turborepo).                                                                                                    |
| `walking-skeleton-delivery`        | Use this skill when a new system or migration needs a minimal end-to-end slice that proves architecture, contracts, and quality gates before full feature build-out.                                                                                |
| `writing-skills`                   | Use this skill when creating or updating any `SKILL.md` to ensure the skill is test-driven, guardrail-enforced, and reviewable.                                                                                                                     |

## Deprecations (External Skills)

- `C:\Users\mcj\.claude\skills\generating-aspire-monorepo` (replaced by composable repo skills in this library).
- `C:\Users\mcj\.claude\skills\generating-production-ready-app-repo` (replaced by composable repo skills in this library).

## Development

- Node.js LTS 24 (see `.nvmrc`, enforced via `package.json` engines).
- Install dependencies: `npm install` (CI uses `npm ci`).
- Local verification: `npm run verify` (markdownlint + cspell).
- Pre-commit: Husky runs `lint-staged` on staged Markdown files.
- CI: GitHub Actions runs the same `npm run verify` gate on PRs and `main`.
- Branch protection: require the `Docs Quality` status check on `main` before merge.

## Contributing

1. Create `skills/<new-skill-name>/SKILL.md` using `skills/writing-skills/templates/skill_template.md`.
2. Ensure `SKILL.md` frontmatter contains **only** `name` and `description`.
3. Ensure the skill defines: failing precondition -> applied skill -> passing postcondition.
4. Include red flags, review personas, priority, and conflict resolution rules.
