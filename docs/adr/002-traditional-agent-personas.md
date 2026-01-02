# ADR 002: Traditional Agent Personas

## Status
Accepted

## Context
The original agent personas (Execution, Review, Change Impact, Release) were functional but disconnected from traditional software development roles. This made it difficult to map the "Review Personas" defined in individual skills to the agents performing the work.

## Decision
We have mapped the task-oriented agent personas to traditional software development roles:
- **Software Engineer**: Implementation and TDD (Execution).
- **Tech Lead / Senior Developer**: Governance and Architectural Integrity (Review).
- **Platform & DevOps Engineer**: Flow and CI/CD (Change Impact).
- **Release Manager / SRE**: Traceability and Operations (Release).
- **Security Reviewer**: Safety and Integrity.

## Alternatives Considered
- **Generic Personas**: Continue using "Agent A", "Agent B". Rejected as it lacks specialized context.

## Consequences
- **Positive**: Clearer ownership of skills and more recognizable roles for human/agent collaboration.
- **Negative**: May require agents to "switch" contexts more explicitly.

## Skill References
- `component-boundary-ownership`
- `quality-gate-enforcement`
- `static-analysis-security`
