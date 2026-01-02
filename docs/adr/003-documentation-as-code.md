# ADR 003: Documentation as Code (DaC)

## Status
Accepted

## Context
Documentation in software projects often becomes stale, contains typos, or contradicts the actual implementation. This leads to "hallucinations" by both human developers and LLM agents, increasing the risk of architectural drift and errors. Previously, documentation was treated as a secondary artifact with less rigor than source code.

## Decision
We will implement a "Documentation as Code" (DaC) approach. This means:
1. All technical documentation (Markdown, ADRs, Plans, READMEs) must be treated with the same engineering rigor as source code.
2. Mandatory automated checks: All documentation must be spell-checked and linted.
3. Mandatory verification: Technical claims must be verified against the implementation.
4. Mandatory review: Documentation must be reviewed by applicable personas (e.g., Tech Lead) before being declared complete.
5. A new skill `documentation-as-code` has been added to codify these requirements.

## Alternatives Considered
- **Manual Review Only**: Rejected as it is inconsistent and prone to human error (typos, formatting).
- **No Documentation Standard**: Rejected as it leads to low-quality, unreliable documentation that hampers agent effectiveness.

## Consequences
- **Positive**: Higher quality documentation, reduced architectural drift, and more reliable context for agents.
- **Negative**: Increased overhead for documentation updates due to the requirement for automated checks and reviews.

## Skill References
- `documentation-as-code` (Primary)
- `automated-standards-enforcement`
- `verification-and-handover`
- `task-planning-and-brainstorming`
