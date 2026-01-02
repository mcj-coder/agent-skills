---
name: verification-and-handover
description: >
  Use this skill whenever claiming a task is complete, a bug is fixed, or 
  preparing to handover/submit work to ensure all success criteria are met with evidence.
---

# Verification & Handover

## Intent
Ensure that all completed work is objectively verified through evidence before any claims of success or completion are made. This eliminates "false greens," prevents broken builds, and ensures high-quality handovers between team members.

---

## When to Use
- Before committing code or creating a Pull Request.
- Before claiming a bug is fixed or a requirement is met.
- Before moving to the next task in a plan.
- Whenever about to express "satisfaction" with the current state.

---

## Precondition Failure Signal
- "Should work now" or "Seems fixed" (claims without evidence).
- Committing without running the full test suite for impacted components.
- Linter or build errors discovered *after* claiming completion.
- Requirements checklist is missing or incomplete.

---

## Postcondition Success Signal
- The "Iron Law": EVIDENCE BEFORE CLAIMS.
- Every claim is accompanied by fresh, specific verification output (e.g., test results, build logs).
- A final line-by-line requirements check has been performed.
- Compilation and quality gates (LTS, zero-warnings) are verified green.

---

## Process
1. **Identify**: What command or check proves the current claim?
2. **Execute**: Run the FULL command (fresh, complete). Do not rely on previous runs or partial checks.
3. **Analyze**: Read the full output. Check exit codes and failure counts.
4. **Verify**: Does the output explicitly confirm the claim?
5. **Document**: State the claim WITH the supporting evidence (or a reference to it).
6. **Handover**: For final completion, perform a "VCS check" (diff review) to ensure no unintended changes or debug code are included.

---

## Example Test / Validation
- **Claim**: "Tests pass".
- **Evidence**: `[Run: npm run test:all] -> 34/34 pass, 0 fail. (exit 0)`.
- **Claim**: "Requirement X met".
- **Evidence**: `[Checklist: Item X verified against implementation in UserService.cs:45]`.

---

## Common Red Flags / Guardrail Violations
- Expressing satisfaction before verification ("Perfect!", "Done!").
- Trusting "Agent success" reports without checking the VCS diff.
- Relying on partial verification (e.g., "Linter passed, so build will pass").
- Skipping verification because of "time pressure" or exhaustion.

---

## Recommended Review Personas
- **Tech Lead** – validates the checklist against requirements.
- **Platform Engineer** – validates that build/test evidence is complete and reproducible.

---

## Skill Priority
P1 – Quality & Correctness

---

## Conflict Resolution Rules
- Verification is non-negotiable and cannot be skipped for delivery speed.
- If verification fails, return to the appropriate implementation or debugging skill immediately.

---

## Conceptual Dependencies
- quality-gate-enforcement
- task-planning-and-brainstorming (for checklist validation)

---

## Classification
Governance
Core
Operational

---

## Notes
Claiming work is complete without verification is a failure of honesty and professional discipline. Evidence is the only currency in engineering.
