# ADR 001: Mandatory Multi-Skill Application and Process Adherence

## Status
Accepted

## Context
Initial use of the skill library was single-skill focused and lacked concrete steps for execution, leading to potential inconsistency and "hallucinations" in agent behavior. We needed a way to ensure that all relevant engineering standards are applied to every task and that every action is grounded in source evidence and verified.

## Decision
We have introduced two major architectural principles:
1. **Multi-Skill Application**: Agents must identify and apply *all* relevant skills for a task, rather than just one. This includes a mandatory planning phase where conflicts are resolved via a priority model and approved by the user.
2. **Process Adherence**: Every skill must define a mandatory `Process` section including Source Review, Implementation, Verification, Documentation, and Review steps.

## Alternatives Considered
- **Status Quo**: Continue applying single skills. Rejected because it misses the holistic nature of engineering standards.
- **Informal Processes**: Rely on agent "intuition". Rejected because it increases the risk of hallucinations and non-compliant outcomes.

## Consequences
- **Positive**: Increased consistency, better alignment with user intent, and more reliable outcomes.
- **Negative**: Increased upfront planning time and overhead for documentation.

## Skill References
- `quality-gate-enforcement`
- `monorepo-structure-hygiene`
- `best-practice-introduction`
