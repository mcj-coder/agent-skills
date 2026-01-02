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

## Scoped Colocation
The library assumes a “narrowest meaningful scope” colocation principle:
keep slice-local functionality together; extract shared functionality only when
reuse across multiple slices/projects is proven and stable.
