# Branching Strategy and Conventions Skill Plan

> Status: In Progress
> Owner: Codex
> Date: 2026-01-02

## Goal

Add a new composable skill `branching-strategy-and-conventions` that defines
GitHub Flow-style feature branching, enforces conventional commits, and
documents merge and worktree practices with traceability expectations.

## Architecture

- Create a dedicated skill for branching strategy and commit conventions.
- Enforce no commits on `main` and fast-forward or rebase-only merges.
- Define transient task branches when parallel work is done via worktrees.
- Require conventional commit messages with concise titles and optional ticket
  identifiers for traceability.

## Tech Stack

- Markdown skills under `skills/`
- Verification via `npm run verify`

## Assumptions

- Default branch remains `main`.
- Feature branches are required for all work (no direct commits to `main`).
- Feature branches produce pre-release semantic versions.
- Merge commits are disallowed; only fast-forward or rebase-based merges.

## Alternatives Considered

1. GitFlow with long-lived release branches (rejected: unnecessary complexity).
2. Trunk-based with direct commits to `main` (rejected: conflicts with policy).
3. GitHub Flow with feature branches and strict merge policy (chosen).

## Task Checklist

| ID  | Task                                                                                                      | Status | Verification        | Evidence                                                    |
| --- | --------------------------------------------------------------------------------------------------------- | ------ | ------------------- | ----------------------------------------------------------- |
| 1   | Draft `skills/branching-strategy-and-conventions/SKILL.md` using repo template and policy rules.          | Done   | Skill file added.   | skills/branching-strategy-and-conventions/SKILL.md          |
| 2   | Update `README.md` skills table to include the new skill.                                                 | Done   | README updated.     | README.md                                                   |
| 3   | Run `npm run verify` and record results.                                                                  | Done   | `npm run verify`.   | Output logged on 2026-01-02.                                |
| 4   | Record review notes from Architecture, DevOps, Security, and Lead Developer perspectives before delivery. | Done   | Review notes saved. | docs/plans/2026-01-02-branching-strategy-and-conventions.md |
| 5   | Collate and discuss review results with the user before marking the plan Delivered.                       | Done   | Discussion logged.  | docs/plans/2026-01-02-branching-strategy-and-conventions.md |

Notes:

- Status values: Planned, In Progress, Done, Aborted.
- When a task is Done, fill in Verification and Evidence (command output, link, or note).

## Progress Log

- 2026-01-02: Plan drafted for branching strategy and conventions skill.
- 2026-01-02: Skill drafted and README updated.
- 2026-01-02: Verification completed.

## Review Notes

### Architecture

- GitHub Flow is appropriate for this repo; avoids long-lived branches.
- Fast-forward/rebase-only merges preserve linear history and traceability.
- Feature branches producing pre-release versions aligns with release policy.

### Platform/DevOps

- Enforce commit conventions via hooks and CI to avoid drift.
- Branch protection should prevent direct commits to `main` and disallow merge commits.
- Worktree task branches reduce coordination risk for parallel execution.

### Security

- Traceability via ticket identifiers supports auditability.
- Avoid including sensitive data in commit messages.

### Lead Developer

- Concise conventional commits reduce review noise.
- Task branch guidance is clear and actionable for parallel work.

### Collated Summary (Discussed)

- Policy is simple and enforceable with existing tooling.
- Fast-forward/rebase rule reduces merge complexity.
- Ticket traceability is explicit and minimal.

## Finalization

> Outcome: Delivered
> Date: 2026-01-02

### Verification Summary

- `npm run verify`

### References

- skills/writing-plans/SKILL.md
- skills/writing-skills/templates/skill_template.md
