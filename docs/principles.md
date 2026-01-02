# Principles

## Canonical Skill Priority Model

Skills must declare a priority and obey conflict rules.

- **P0 – Safety & Integrity**: security, immutability, provenance, traceability, data integrity.
- **P1 – Quality & Correctness**: behavioural correctness, clean builds, contract stability, test validity.
- **P2 – Consistency & Governance**: repository conventions, versioning discipline, pipeline conformance.
- **P3 – Delivery & Flow**: incremental execution, developer experience improvements.
- **P4 – Optimisation & Convenience**: ergonomics and non-critical improvements.

### Conflict resolution
1. Higher priority wins.
2. If equal priority: prefer narrower scope.
3. If scope equal: prefer stronger guardrails.
4. If still ambiguous: escalate to a Tech Lead review.

## Multi-Skill Application
A single task may require the application of multiple skills. It is the responsibility of the agent (or human) to:
- Identify the complete set of relevant skills before starting execution.
- Analyze how these skills interact and identify any conflicts.
- Present a clear plan to the user, including conflict resolution recommendations based on the priority model.
- Obtain user approval for the proposed plan before applying the skills.

## Scoped Colocation
The library assumes a “narrowest meaningful scope” colocation principle:
keep slice-local functionality together; extract shared functionality only when
reuse across multiple slices/projects is proven and stable.

## Architectural Design Decisions (ADR)
Architectural changes or significant design decisions must be documented as Architecture Decision Records (ADR) in `docs/adr/`.
- Use `templates/adr_template.md` as a starting point.
- ADRs provide a historical record of why decisions were made, helping to prevent "re-deciding" and ensuring context is preserved.
- Reference relevant skills in the ADR to demonstrate alignment with the library's principles.

## Process Adherence
Every skill defines a mandatory `Process` section.
- Agents and humans must follow these steps to ensure quality and minimize hallucinations.
- **Source Review** and **Verification** are non-negotiable steps to guarantee that changes are grounded in evidence and verified by tests.

## Evidence-Driven Workflow
The repository enforces an evidence-driven workflow to minimize subjectivity and errors:
- **Root Cause over Symptoms**: No fix may be proposed without identifying the root cause via `systematic-debugging`.
- **Evidence before Claims**: No status or completion claim may be made without fresh verification output via `verification-and-handover`.
- **Automated over Manual**: Automated tooling takes precedence over manual/agent analysis via `automated-standards-enforcement`.
