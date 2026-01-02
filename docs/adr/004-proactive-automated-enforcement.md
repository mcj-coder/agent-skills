# ADR 004: Proactive Automated Enforcement and Discovery

## Status
Accepted

## Context
The repository prioritizes automated standards enforcement over manual behavior (`automated-standards-enforcement`). However, there was a gap between the definition of these standards and their proactive implementation. Tooling was often considered an afterthought rather than a prerequisite for implementation.

## Decision
We will update the `automated-standards-enforcement` skill to mandate proactive tooling setup *before* implementation work begins. This includes:
1.  **Mandatory Discovery**: Using web searches to identify the most appropriate, cross-platform, and well-supported tools.
2.  **User-Driven Selection**: Presenting discovered options (including open-source alternatives) to the user for explicit approval before configuration.
3.  **Prerequisite Setup**: Ensuring automated gates are active before any code that they are meant to govern is committed.

## Alternatives Considered
- **Reactive Setup**: Adding tools only when manual reviews identify recurring issues. *Rejected because it allows low-quality code to enter the repository and increases the cost of remediation.*
- **Implicit Tooling**: Assuming the agent knows the "best" tool without discovery or user consultation. *Rejected to prevent bias and ensure the user's environment and preference are respected.*

## Consequences
- **Positive**: Higher initial quality, reduced reviewer burden, and explicit agreement on the "rules of the game" before coding starts.
- **Negative**: Slight increase in Phase 1 (Planning) time to perform discovery and obtain approval.
- **Risk**: Over-tooling for small projects (mitigated by YAGNI principles in the skill contract).

## Skill References
- `automated-standards-enforcement`
- `task-planning-and-brainstorming`
- `documentation-as-code`
