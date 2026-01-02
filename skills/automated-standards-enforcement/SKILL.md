---
name: automated-standards-enforcement
description: >
  Use this skill whenever establishing, reviewing, or modifying engineering
  standards to prefer automated tooling (linters, SAST, architectural unit tests)
  over manual developer or agent behavior for enforcement.
---

# Automated Standards Enforcement

## Intent
Prefer using freely available, cross-platform, and well-supported automated
tooling to enforce coding standards and development practices. The goal is to
minimize reliance on subjective human/agent analysis and review, reducing
hallucinations and ensuring consistent, objective enforcement of quality and
safety gates.

---

## When to Use
- Establishing new coding standards or architectural rules.
- Reviewing existing development practices for potential automation.
- Configuring quality gates for CI/CD or local development.
- Selecting tools for linting, static analysis (SAST), or architectural unit tests.
- When manual review is identified as a recurring bottleneck or source of inconsistency.

---

## Precondition Failure Signal
- Standards are enforced primarily via "gentleman's agreements" or manual PR review.
- Compliance is inconsistent across different developers or agents.
- Quality gates rely on qualitative statements (e.g., "LGTM") rather than quantitative signals.
- Tooling is non-existent, platform-specific, or poorly documented.
- Non-opensource tools are used without explicit permission or consideration of alternatives.

---

## Postcondition Success Signal
- Standards are codified in configuration files for automated tools.
- Violations are identified automatically during local development or CI execution.
- Tooling is cross-platform (e.g., works on Windows, Linux, macOS).
- Open-source tools are used by default; non-opensource tools have documented user permission and identified alternatives.
- Enforcement is objective, reproducible, and documented.

---

## Process
1. **Source Review**: Audit current standards and identify rules that are currently enforced manually. Search for existing open-source tools that can automate these checks.
2. **Implementation**: Configure and integrate selected tools (e.g., `.editorconfig`, linters, SAST, ArchUnit.NET) into the development workflow.
3. **Verification**: Demonstrate that the tool correctly identifies a violation of the standard and that the violation blocks the quality gate.
4. **Documentation**: Document the chosen tools, their configuration, and the rationale for their selection (including open-source status) in the repo or an ADR. If non-opensource tools are used, record explicit user permission and the alternatives considered.
5. **Review**: Tech Lead and Platform Engineer review the automation setup for coverage, maintenance cost, and alignment with the operating contract.

---

## Example Test / Validation
- Introduce a code pattern that violates a standard and verify the automated tool fails the build/check.
- Verify the tool runs successfully on different operating systems.
- Confirm that the tool configuration is version-controlled and shared.
- Provide evidence of open-source status or user permission for the selected tools.

---

## Common Red Flags / Guardrail Violations
- "We'll just catch it in code review" (preferring behavior over tooling).
- Using proprietary tools when viable open-source alternatives exist.
- Selecting tools that only work on one operating system.
- Introducing tools with poor documentation or low community support.
- Silencing automated warnings to bypass enforcement rather than fixing the underlying issue.

---

## Recommended Review Personas
- **Platform Engineer** – validates tool selection, cross-platform support, and CI integration.
- **Tech Lead** – validates that the automated rules accurately reflect the intended engineering standards.
- **Security Reviewer** – validates the effectiveness and coverage of SAST and security-related tooling.

---

## Skill Priority
P2 – Consistency & Governance
(Escalate to P1 when automation is critical for correctness or P0 for security enforcement.)

---

## Conflict Resolution Rules
- Automated enforcement takes precedence over manual/agent analysis.
- If an automated tool produces excessive false positives, prioritize tuning the tool or selecting an alternative over reverting to manual review.
- Open-source tools are preferred; if a non-opensource tool is proposed, it must be escalated for explicit user approval with a comparison to open-source alternatives.

---

## Conceptual Dependencies
- quality-gate-enforcement
- local-dev-experience
- static-analysis-security

---

## Classification
Core
Governance

---

## Notes
The intent is to make standards "un-ignorable" by baking them into the tooling that developers and agents use every day.
