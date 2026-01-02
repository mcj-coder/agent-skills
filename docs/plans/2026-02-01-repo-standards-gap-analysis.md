# Repo Standards Gap Analysis (Skills-Triggered)

> Status: In Progress
> Owner: Codex
> Date: 2026-02-01

## Goal

Analyse the current repository state against the standards implied by skills that would have triggered naturally during repo population, and document gaps with evidence.

## Architecture

Documentation-only change. No runtime or behavioural code changes.

## Tech Stack

- PowerShell
- ripgrep (`rg`)
- Markdownlint CLI2, CSpell (via `npm run verify`)

## Assumptions

- en-GB spelling is configured for CSpell.
- Only skills in `skills/**/SKILL.md` are considered, using front matter and `When to Use` to determine trigger relevance.
- The report will live in `docs/reports/2026-02-01-repo-standards-gap-analysis.md`.

## Alternatives Considered

1. Full manual audit against skills triggers (selected) for accuracy and evidence quality.
2. Automated extraction + manual validation (faster, but more tooling overhead).
3. Sampling-based review (fastest, weakest evidence).

## Task Checklist

|ID|Task|Status|Verification|Evidence|
|---|---|---|---|---|
|1|Impact analysis (RED/GREEN/REFACTOR): inventory skills, identify which would have triggered during repo population, and list impacted/unimpacted areas in the report header.|Done|Report scope notes include impacted/unimpacted set|`docs/reports/2026-02-01-repo-standards-gap-analysis.md`|
|2|Report scaffold (RED/GREEN/REFACTOR): create the report with summary + per-skill table template (trigger rationale, required standards, repo evidence, gap status).|Done|Report file exists with headers and table template|`docs/reports/2026-02-01-repo-standards-gap-analysis.md`|
|3|Trigger review (RED/GREEN/REFACTOR): read front matter + `When to Use` for each skill to decide if it would trigger for repo population; record rationale in the report.|Done|All relevant skills marked with trigger rationale|`docs/reports/2026-02-01-repo-standards-gap-analysis.md`|
|4|Standards gap analysis (RED/GREEN/REFACTOR): for each triggered skill, compare required standards against repo state (configs, docs, CI, hooks) and capture evidence + gaps.|Done|Table populated with evidence and gap status|`docs/reports/2026-02-01-repo-standards-gap-analysis.md`|
|5|Findings and recommendations (RED/GREEN/REFACTOR): summarise top gaps, recurring issues, and priority fixes with references to evidence.|Done|Summary section completed|`docs/reports/2026-02-01-repo-standards-gap-analysis.md`|
|6|Verification + commit (RED/GREEN/REFACTOR): run `npm run verify`; fix lint/spell issues; commit on feature branch with a conventional commit (no commits to `main`).|Done|`npm run verify` clean|`npm run verify` passed after adding en-GB words to `cspell.json`.|

Notes:

- Status values: Planned, In Progress, Done, Aborted.
- When a task is Done, fill in Verification and Evidence (command output, link, or note).

## Progress Log

- 2026-02-01: Draft plan created for repo standards gap analysis.
- 2026-02-01: Impact scope documented and report scaffold created.
- 2026-02-01: Trigger review completed and recorded in the report.
- 2026-02-01: Standards gap analysis and findings recorded in the report.
- 2026-02-01: Verification complete; `npm run verify` clean.

## Finalisation

> Outcome: Delivered | Aborted | Pending
> Date: 2026-02-01

### Verification Summary

-

### References

- `AGENTS.md`
- `skills/using-skill-library/SKILL.md`
- `skills/writing-plans/SKILL.md`
- `skills/documentation-as-code/SKILL.md`
- `skills/incremental-change-impact/SKILL.md`
- `skills/using-git-worktrees/SKILL.md`
