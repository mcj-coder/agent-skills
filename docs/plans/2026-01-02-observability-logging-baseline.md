# Observability Logging Baseline Skill Plan

> Status: Delivered
> Owner: Codex
> Date: 2026-01-02

## Goal

Add a new composable skill `observability-logging-baseline` that standardizes
structured logging and distributed tracing, enforces OWASP-aligned logging
hygiene, and mandates Correlation-Id propagation without interfering with W3C
trace context.

## Architecture

- Create a dedicated skill focused on logging + tracing baselines.
- Require a distinct Correlation-Id header that is propagated through logs and
  spans without replacing W3C trace context headers.
- Align security guidance with OWASP Logging Cheat Sheet.
- Keep the skill tech-agnostic and composable; reference existing skills for
  quality gates and security enforcement.

## Tech Stack

- Markdown skills under `skills/`
- Verification via `npm run verify`

## Assumptions

- Correlation-Id is a distinct, optional header in API definitions (separate from
  W3C trace context headers).
- Correlation-Id must be injected into logs and tracing spans.
- INFO logging is restricted in non-development environments per policy.
- Secret/PII logging is prohibited per OWASP guidance.

## Alternatives Considered

1. Extend `documentation-scaffold` or `repository-foundation-bootstrap` (rejected: scope too broad).
2. Embed logging/tracing guidance in multiple skills (rejected: duplication risk).
3. Create a single composable `observability-logging-baseline` skill (chosen).

## Task Checklist

| ID  | Task                                                                                                      | Status | Verification        | Evidence                                                |
| --- | --------------------------------------------------------------------------------------------------------- | ------ | ------------------- | ------------------------------------------------------- |
| 1   | Draft `skills/observability-logging-baseline/SKILL.md` using repo template and required rules.            | Done   | Skill file added.   | skills/observability-logging-baseline/SKILL.md          |
| 2   | Update `README.md` skills table to include the new skill.                                                 | Done   | README updated.     | README.md                                               |
| 3   | Run `npm run verify` and record results.                                                                  | Done   | `npm run verify`.   | Output logged on 2026-01-02.                            |
| 4   | Record review notes from Architecture, DevOps, Security, and Lead Developer perspectives before delivery. | Done   | Review notes saved. | docs/plans/2026-01-02-observability-logging-baseline.md |
| 5   | Collate and discuss review results with the user before marking the plan Delivered.                       | Done   | Discussion logged.  | docs/plans/2026-01-02-observability-logging-baseline.md |

Notes:

- Status values: Planned, In Progress, Done, Aborted.
- When a task is Done, fill in Verification and Evidence (command output, link, or note).

## Progress Log

- 2026-01-02: Plan drafted for new observability logging baseline skill.
- 2026-01-02: Skill drafted and README updated.
- 2026-01-02: Verification completed.
- 2026-01-02: Review notes captured.
- 2026-01-02: Collated review results approved by user.

## Review Notes

### Architecture

- Scope fits a cross-cutting baseline skill rather than a stack-specific guide.
- Correlation-Id is distinct from trace context and should remain optional in
  API definitions to avoid breaking changes.
- Log level semantics align with operational expectations.

### Platform/DevOps

- Structured logs + tracing support correlation for incident response.
- Emphasize non-production log verbosity as configurable but defaulting to
  INFO+ in non-development and WARNING+ for non-application sources.
- Ensure tracing propagation is standards-compliant across services.

### Security

- OWASP alignment is critical: no PII/secrets, sanitize or mask where needed.
- Correlation-Id should not be derived from sensitive values.
- Logging level guidance should prevent over-collection in production.

### Lead Developer

- Guidance is explicit and composable with existing skills.
- INFO logging boundaries reduce noise while preserving accountability.
- Correlation-Id generation rules are clear and implementable.

### Collated Summary (Discussed)

- Skill scope is appropriate and tech-agnostic.
- Correlation-Id guidance is explicit and keeps trace context intact.
- OWASP-aligned data minimization is enforced.
- Log level policy is clear and enforceable.

## Finalization

> Outcome: Delivered
> Date: 2026-01-02

### Verification Summary

- `npm run verify`

### References

- skills/writing-plans/SKILL.md
- skills/writing-skills/templates/skill_template.md
