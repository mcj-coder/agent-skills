# Skills Gap Analysis: Agent-Skills vs Superpowers

Date: 2026-01-02

## Scope

Compare the skills in this repo (`skills/`) against `.tmp/superpowers/skills` to identify overlaps, gaps, and improvements, with a focus on:

- A more rigorous development process and planning methodology.
- Higher composability (smaller, orthogonal skills with clear dependencies).

## Method

- Read all `SKILL.md` files in both sets.
- Group skills by workflow stage.
- Compare coverage, rigor, and composability.

## Inventory Summary

### Superpowers (14 skills)

- Strong workflow scaffolding: design, planning, execution, verification, review, and closure.
- Explicit multi-agent orchestration and parallelization.
- Strong anti-rationalization language for discipline skills.

### Agent-Skills (30 skills)

- Strong governance and monorepo practices (quality gates, traceability, versioning, security).
- Domain-specific engineering standards (.NET, Azure, CI/CD).
- Core workflow skills exist but are more consolidated.

## Overlap and Coverage Matrix

| Workflow Stage                      | Superpowers                                       | Agent-Skills                                      | Notes                                                                                                   |
| ----------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Session bootstrap / skill discovery | `using-superpowers`                               | AGENTS.md guidance only                           | Superpowers has an explicit skill; repo relies on docs and conventions.                                 |
| Brainstorming / design              | `brainstorming`                                   | `task-planning-and-brainstorming`                 | Agent-Skills combines design + plan; Superpowers keeps design distinct and enforces 1-question cadence. |
| Planning                            | `writing-plans`                                   | `task-planning-and-brainstorming` + plan template | Superpowers mandates detailed per-task steps and an execution handoff.                                  |
| Plan execution (same session)       | `subagent-driven-development`                     | None                                              | Gap: no skill for plan execution discipline or multi-agent review loops.                                |
| Plan execution (separate session)   | `executing-plans`                                 | None                                              | Gap: no structured batch execution with checkpoints.                                                    |
| Parallel investigations             | `dispatching-parallel-agents`                     | None                                              | Gap: no explicit parallelization guidance.                                                              |
| Isolated workspace                  | `using-git-worktrees`                             | None                                              | Gap: no formal isolation + baseline verification workflow.                                              |
| Completion / integration            | `finishing-a-development-branch`                  | None                                              | Gap: no explicit closure workflow for merge/PR/cleanup.                                                 |
| TDD                                 | `test-driven-development`                         | `test-driven-development`                         | Both enforce RED-GREEN-REFACTOR; Superpowers adds stronger anti-rationalization framing.                |
| Debugging                           | `systematic-debugging`                            | `systematic-debugging`                            | Similar; Superpowers adds explicit "Iron Law" and more pressure scenarios.                              |
| Verification                        | `verification-before-completion`                  | `verification-and-handover`                       | Similar core rule; Superpowers has stricter "no claims" language.                                       |
| Code review                         | `requesting-code-review`, `receiving-code-review` | `structured-review-workflow`                      | Agent-Skills consolidates both; Superpowers splits to be more composable.                               |
| Skill authoring                     | `writing-skills`                                  | Templates + system `skill-creator`                | No repo skill enforcing TDD for skills.                                                                 |

## Strengths Unique to Agent-Skills

- Monorepo governance and incremental execution:
  - `incremental-change-impact`, `selective-build-test`, `ci-cd-conformance`.
- Release and traceability:
  - `release-tagging-plan`, `environment-traceability`, `incremental-deployment`.
- Quality and security:
  - `quality-gate-enforcement`, `static-analysis-security`.
- Architecture and boundaries:
  - `architecture-testing`, `scoped-colocation`, `component-boundary-ownership`.

These are not present in Superpowers and should be preserved.

## Gaps Against Desired Direction

### 1. Rigorous execution workflow is not explicit

There is no dedicated skill that:

- Executes plans in batches with review checkpoints.
- Manages plan status updates and evidence per task.
- Defines a clear end-of-branch closure process.

### 2. Composability is reduced by consolidated skills

- `task-planning-and-brainstorming` combines brainstorming + plan writing.
- `structured-review-workflow` combines requesting + receiving review.

This makes it harder to compose workflows and reuse components independently.

### 3. Multi-agent and parallelization patterns are missing

- No equivalent to `subagent-driven-development` or `dispatching-parallel-agents`.
- No defined review loop for subagent work.

### 4. Workspace isolation and baseline verification are missing

Superpowers has a structured worktree setup + clean baseline verification.
Agent-Skills has no equivalent.

### 5. Skill authoring discipline is not formalized in-repo

Superpowers enforces TDD for skills themselves. Agent-Skills relies on templates and conventions but not a skill-level workflow.

## Recommendations (Prioritized)

### P1 / P2: Make planning and execution composable

1. Split `task-planning-and-brainstorming` into:
   - `brainstorming` (design/spec discovery, one-question cadence, 2-3 options).
   - `writing-plans` (detailed plan tasks with RED-GREEN-REFACTOR steps).
1. Introduce `executing-plans`:
   - Batch execution with checkpoints and explicit stop conditions.
   - Requires updating plan task status + evidence.

### P2: Add explicit closure workflow

1. Add `finishing-a-development-branch`:
   - Verify tests, present merge/PR/keep/discard options, clean up worktrees.

### P2 / P3: Add composable review skills

1. Split `structured-review-workflow` into:
   - `requesting-code-review`
   - `receiving-code-review`
   - Keep `structured-review-workflow` as a higher-level wrapper that composes them.

### P2 / P3: Add multi-agent coordination skills

1. Add `subagent-driven-development` (same-session execution + review loops).
1. Add `dispatching-parallel-agents` (multiple independent investigations).

### P2: Add workspace isolation skill

1. Add `using-git-worktrees` (isolation + baseline verification).

### P2: Add session bootstrap / skill discovery skill

1. Add `using-skill-library` (or similar) to enforce skill lookup before actions.
   - This can encode the AGENTS.md startup steps as a first-class skill.

### P2: Add skill authoring discipline

1. Add `writing-skills` (or adapt system `skill-creator`) to enforce TDD for skill changes.

### P1: Strengthen discipline language in core skills

1. Align `verification-and-handover`, `test-driven-development`, and
   `systematic-debugging` with explicit anti-rationalization patterns.

## Quick Wins

- Add `requesting-code-review` and `receiving-code-review` by splitting the current review skill.
- Add `executing-plans` using the Superpowers structure, adapted to the repo plan template.
- Update plan template to include explicit task steps with commands and expected outputs.

## Proposed Next Steps

1. Confirm which recommendations to implement first.
1. Create new skills in priority order, following `documentation-as-code`.
1. Update README.md skills table and AGENTS.md workflow once new skills exist.
