# Implement Superpowers Gap Recommendations Plan

> Status: Delivered
> Owner: Codex
> Date: 2026-01-02

## Goal

Implement the full set of gap recommendations from the Superpowers comparison to improve rigor, planning methodology, and composability of the skill library.

## Architecture

- Introduce missing workflow skills as focused, composable units.
- Refactor existing skills into smaller components where appropriate.
- Update repository documentation (README, AGENTS) to reflect new skills and workflow.
- Keep governance/security skills unchanged.

## Tech Stack

- Markdown skills under `skills/`
- Repository docs (`README.md`, `AGENTS.md`)
- Verification via `npm run verify`

## Assumptions

- New skills will follow the existing `SKILL.md` structure and templates.
- Splitting skills will preserve intent while increasing composability.
- Documentation updates must be verified by linting and spell check.

## Alternatives Considered

1. Add missing skills without refactoring existing ones (lower risk, weaker composability).
2. Full rewrite of workflow section (higher risk, larger review surface).
3. Incremental add + refactor in phases (chosen).

## Target Skill Set

New skills to add:

- `brainstorming`
- `writing-plans`
- `executing-plans`
- `subagent-driven-development`
- `dispatching-parallel-agents`
- `using-git-worktrees`
- `finishing-a-development-branch`
- `requesting-code-review`
- `receiving-code-review`
- `using-skill-library`
- `writing-skills`

Existing skills to refactor:

- `structured-review-workflow` (becomes wrapper referencing `requesting-code-review` + `receiving-code-review`).

Skills to remove:

- `task-planning-and-brainstorming` (replaced by `brainstorming` + `writing-plans`).

Conflict and priority notes:

- Process/discipline skills remain P1/P2 to override delivery pressure.
- Delivery coordination skills (parallel or subagent execution) remain P3.
- Wrapper skills must not override the postconditions of the composed skills.

## Task Checklist

| ID  | Task                                                                                                                         | Status | Verification                                     | Evidence                                                                                                                  |
| --- | ---------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| 1   | Define target skill set and mapping (new + split) and review for conflicts/priority.                                         | Done   | Target set and conflict notes documented.        | Target Skill Set section in this plan.                                                                                    |
| 2   | Create new workflow skills: `brainstorming`, `writing-plans`, `executing-plans`.                                             | Done   | New skill files created.                         | skills/brainstorming/SKILL.md; skills/writing-plans/SKILL.md; skills/executing-plans/SKILL.md                             |
| 2a  | Remove `task-planning-and-brainstorming` (replaced by `brainstorming` + `writing-plans`).                                    | Done   | Skill removed and references updated.            | skills/task-planning-and-brainstorming removed; docs updated.                                                             |
| 3   | Create execution orchestration skills: `subagent-driven-development`, `dispatching-parallel-agents`.                         | Done   | New skill files created.                         | skills/subagent-driven-development/SKILL.md; skills/dispatching-parallel-agents/SKILL.md                                  |
| 4   | Create workspace and closure skills: `using-git-worktrees`, `finishing-a-development-branch`.                                | Done   | New skill files created.                         | skills/using-git-worktrees/SKILL.md; skills/finishing-a-development-branch/SKILL.md                                       |
| 5   | Split review workflow: add `requesting-code-review` + `receiving-code-review`; keep `structured-review-workflow` as wrapper. | Done   | New skills added and wrapper updated.            | skills/requesting-code-review/SKILL.md; skills/receiving-code-review/SKILL.md; skills/structured-review-workflow/SKILL.md |
| 6   | Add bootstrap skill: `using-skill-library` (or agreed name) to formalize skill discovery.                                    | Done   | New skill file created.                          | skills/using-skill-library/SKILL.md                                                                                       |
| 7   | Add skill authoring discipline: `writing-skills` (or adapt `skill-creator`).                                                 | Done   | New skill file created.                          | skills/writing-skills/SKILL.md                                                                                            |
| 8   | Update `README.md` skills table and `AGENTS.md` workflow to reference new skills.                                            | Done   | Docs updated to include new skills and workflow. | README.md; AGENTS.md                                                                                                      |
| 9   | Run `npm run verify` and document results.                                                                                   | Done   | `npm run verify`                                 | Output logged on 2026-01-02.                                                                                              |

Notes:

- Status values: Planned, In Progress, Done, Aborted.
- When a task is Done, fill in Verification and Evidence (command output, link, or note).

## Progress Log

- 2026-01-02: Plan drafted for approval.
- 2026-01-02: Created new workflow, orchestration, workspace, review, bootstrap, and skill-authoring skills; wrappers updated in progress.
- 2026-01-02: Target skill set and conflict notes documented; execution started.
- 2026-01-02: README and AGENTS workflow updated to reference new skills.
- 2026-01-02: Removed task-planning-and-brainstorming and updated references.

## Finalization

> Outcome: Delivered
> Date: 2026-01-02

### Verification Summary

- `npm run verify`

### References

- docs/reports/2026-01-02-skills-gap-analysis-superpowers.md
