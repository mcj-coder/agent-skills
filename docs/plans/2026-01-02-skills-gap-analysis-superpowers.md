# Skills Gap Analysis Plan (Superpowers vs Agent-Skills)

> Status: Delivered
> Owner: Codex
> Date: 2026-01-02

## Goal

Produce a gap analysis comparing this repository's skills to `.tmp/superpowers/skills`, with recommendations to improve skill coverage, enforce a rigorous development process and planning methodology, and increase composability.

## Architecture

- Build a normalized inventory of both skill sets (name, intent/trigger, process, guardrails, review personas, dependencies).
- Map overlaps, gaps, and conflicts, focusing on workflow rigor and composability.
- Produce a written gap analysis report and a concise summary for the user.

## Tech Stack

- Markdown documentation (docs).
- PowerShell + Python for inventory extraction.

## Assumptions

- Superpowers skills live at `.tmp/superpowers/skills/*/SKILL.md`.
- The gap analysis output should be preserved in-repo for continuity.
- "Composability" means smaller, orthogonal skills with explicit dependencies and minimal overlap.

## Alternatives Considered

1. One-to-one name matching only (fast, misses semantic overlaps).
2. Full textual comparison (slow, noisy).
3. Hybrid matrix: inventory + semantic mapping + workflow evaluation (chosen).

## Task Checklist

| ID  | Task                                                                                                                 | Status | Verification                                | Evidence                                                                               |
| --- | -------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------- | -------------------------------------------------------------------------------------- |
| 1   | Inventory both skill sets and extract key fields (name, trigger, process, guardrails, dependencies).                 | Done   | Reviewed `SKILL.md` files in both sets.     | Notes from review and inventory summary in report.                                     |
| 2   | Map overlaps, gaps, and conflicts with a capability matrix (process, planning, composability, verification, review). | Done   | Created overlap and coverage matrix.        | docs/reports/2026-01-02-skills-gap-analysis-superpowers.md                             |
| 3   | Draft gap analysis report with recommendations and quick wins.                                                       | Done   | Report drafted in docs/reports.             | docs/reports/2026-01-02-skills-gap-analysis-superpowers.md                             |
| 4   | Provide concise summary in chat and link to the report path.                                                         | Done   | Summary delivered in chat with report path. | Chat response on 2026-01-02 (after plan marked complete; see Progress Log correction). |

Notes:

- Status values: Planned, In Progress, Done, Aborted.
- When a task is Done, fill in Verification and Evidence (command output, link, or note).

## Progress Log

- 2026-01-02: Plan delivered with report and verification.
- 2026-01-02: Correction logged — plan was marked complete before summary was posted; summary delivered afterward and evidence updated.

## Finalization

> Outcome: Delivered
> Date: 2026-01-02

### Verification Summary

- `npm run verify`

### References

- docs/plans/2026-01-02-skills-gap-analysis-superpowers.md
