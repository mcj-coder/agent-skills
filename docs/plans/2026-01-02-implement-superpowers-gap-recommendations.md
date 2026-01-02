# Implement Superpowers Gap Recommendations Plan

> Status: Draft | Approved | In Progress | Delivered | Aborted
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

## Task Checklist

| ID  | Task                                                                                                                         | Status  | Verification | Evidence |
| --- | ---------------------------------------------------------------------------------------------------------------------------- | ------- | ------------ | -------- |
| 1   | Define target skill set and mapping (new + split) and review for conflicts/priority.                                         | Planned |              |          |
| 2   | Create new workflow skills: `brainstorming`, `writing-plans`, `executing-plans`.                                             | Planned |              |          |
| 3   | Create execution orchestration skills: `subagent-driven-development`, `dispatching-parallel-agents`.                         | Planned |              |          |
| 4   | Create workspace and closure skills: `using-git-worktrees`, `finishing-a-development-branch`.                                | Planned |              |          |
| 5   | Split review workflow: add `requesting-code-review` + `receiving-code-review`; keep `structured-review-workflow` as wrapper. | Planned |              |          |
| 6   | Add bootstrap skill: `using-skill-library` (or agreed name) to formalize skill discovery.                                    | Planned |              |          |
| 7   | Add skill authoring discipline: `writing-skills` (or adapt `skill-creator`).                                                 | Planned |              |          |
| 8   | Update `README.md` skills table and `AGENTS.md` workflow to reference new skills.                                            | Planned |              |          |
| 9   | Run `npm run verify` and document results.                                                                                   | Planned |              |          |

Notes:

- Status values: Planned, In Progress, Done, Aborted.
- When a task is Done, fill in Verification and Evidence (command output, link, or note).

## Progress Log

- 2026-01-02: Plan drafted for approval.

## Finalization

> Outcome: Pending
> Date: 2026-01-02

### Verification Summary

-

### References

- docs/reports/2026-01-02-skills-gap-analysis-superpowers.md
