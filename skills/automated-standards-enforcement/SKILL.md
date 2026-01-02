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
Tool configuration must be consistent across tools and components to avoid
conflicting rules or drift (e.g., aligning editor, formatter, and VCS settings).
When standards change, any resulting warnings or inconsistencies must be
resolved immediately so enforcement can be activated without exceptions.

---

## When to Use

- Proactively, before starting any implementation that introduces new patterns or standards.
- Establishing new coding standards or architectural rules.
- Reviewing existing development practices for potential automation.
- Configuring quality gates for CI/CD or local development.
- Selecting tools for linting, static analysis (SAST), or architectural unit tests.
- When manual review is identified as a recurring bottleneck or source of inconsistency.

---

## Precondition Failure Signal

- Tooling is added as an afterthought or only when requested by a reviewer.
- Standards are enforced primarily via "gentleman's agreements" or manual PR review.
- Compliance is inconsistent across different developers or agents.
- Quality gates rely on qualitative statements (e.g., "LGTM") rather than quantitative signals.
- Tooling is non-existent, platform-specific, or poorly documented.
- Non-opensource tools are used without explicit permission or consideration of alternatives.
- Tool configuration is inconsistent across tools or components (conflicting rules or defaults).
- Standards or tooling changes introduce new warnings that are left unresolved.

---

## Postcondition Success Signal

- Automated tooling is configured and active _before_ implementation work begins.
- Standards are codified in configuration files for automated tools.
- Violations are identified automatically during local development or CI execution.
- Tooling is cross-platform (e.g., works on Windows, Linux, macOS).
- Open-source tools are used by default; non-opensource tools have documented user permission and identified alternatives.
- Enforcement is objective, reproducible, and documented.
- Tool configuration is aligned across tools and components to prevent drift.
- New or changed standards are applied with no outstanding warnings.

---

## Process

1. **Source Review & Discovery**:
   - Identify standards or rules that require enforcement.
   - Perform a **Web Search** to discover the most appropriate, cross-platform, and well-supported tools for the task.
   - Prioritize open-source tools with active community support.
2. **User Selection**:
   - Present the discovered tool options to the user, highlighting trade-offs, licensing, and open-source alternatives.
   - Obtain explicit user approval for the selected tool before proceeding with configuration.
3. **Implementation & Baseline Remediation**:
   - Configure the approved tools (e.g., `.editorconfig`, linters, SAST, ArchUnit.NET).
   - Align related configuration across tools (e.g., editor, formatter, VCS, CI) to avoid conflicting rules.
   - **Crucial**: Before activating any enforcement gates (e.g., pre-commit hooks, CI blocking), remediate the baseline so the existing codebase meets the new standard and emits no warnings.
   - If the baseline is too large for immediate remediation, define a "warn-only" period or a scoped rollout, but never activate a blocking gate on a dirty baseline without an explicit transition plan.
4. **Gate Activation**:
   - Once the baseline is clean or a transition plan is approved, activate the enforcement gates (hooks, CI blocking).
   - Ensure configuration is version-controlled and shared.
5. **Verification**:
   - Demonstrate that the tool correctly identifies a violation of the standard and that the violation blocks the quality gate.
   - Verify that the current codebase passes the new gate without errors.
6. **Documentation**:
   - Document the chosen tools, their configuration, and the rationale for their selection in the repo or an ADR.
   - For non-opensource tools, record the explicit user permission and the alternatives considered.
7. **Review**:
   - Tech Lead and Platform Engineer review the automation setup for coverage, maintenance cost, and alignment with the operating contract.

---

## Example Test / Validation

- Introduce a code pattern that violates a standard and verify the automated tool fails the build/check.
- Verify the tool runs successfully on different operating systems.
- Confirm that the tool configuration is version-controlled and shared.
- Provide evidence of open-source status or user permission for the selected tools.

---

## Common Red Flags / Guardrail Violations

- Activating enforcement gates (e.g., git hooks) on a "dirty" baseline, causing immediate workflow blockage.
- "We'll just catch it in code review" (preferring behavior over tooling).
- Using proprietary tools when viable open-source alternatives exist.
- Selecting tools that only work on one operating system.
- Introducing tools with poor documentation or low community support.
- Silencing automated warnings to bypass enforcement rather than fixing the underlying issue.
- Leaving Git or package-management warnings unresolved after a standards change.

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
