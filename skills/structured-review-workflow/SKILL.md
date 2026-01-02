---
name: structured-review-workflow
description: >
  Use this skill whenever requesting or receiving feedback on work to ensure 
  clear communication, objective validation, and efficient iteration.
---

# Structured Review Workflow

## Intent

Ensure that the review process is constructive, objective, and aligned with the repository's engineering standards. This skill formalizes how Software Engineers interact with Tech Leads, SREs, and other review personas to minimize "opinion-based" friction.

---

## When to Use

- Before submitting a Pull Request for "official" review.
- After receiving comments or requested changes on a PR.
- When seeking architectural guidance from a Tech Lead.
- During synchronous review sessions (pair programming).

---

## Precondition Failure Signal

- PRs are submitted without a clear summary of changes or verification evidence.
- Reviewer comments are ignored or dismissed without justification.
- Feedback leads to "defensive" behavior or over-correcting unrelated code.
- "LGTM" is given without checking against the skill's postconditions.

---

## Postcondition Success Signal

- Every review request includes a summary, verification evidence, and a checklist.
- Feedback is addressed point-by-point (Fix, Question, or Justified Refusal).
- Iterations focus on satisfying the skill's postconditions and the task goal.
- The `review_template.md` is used for formal validation.

---

## Process

1. **Requesting Review**:
   - Perform a self-review (VCS diff) and run `verification-and-handover`.
   - Provide a clear context: Goal, Impact, Verification Evidence, and Key Risks.
   - Point the reviewer to specific areas of concern.
2. **Receiving Feedback**:
   - Read all comments before responding.
   - Categorize feedback: Structural, Behavioural, or Stylistic.
   - For each item: Apply the fix, or provide an objective technical counter-argument.
   - Do not broaden scope beyond the original task to "satisfy" a reviewer unless it's a critical safety/integrity issue.
3. **Closing the Loop**:
   - Re-run verification after applying changes.
   - Notify the reviewer when all items are addressed.
4. **Review**: The Tech Lead validates that the review process itself followed the engineering standards.

---

## Example Test / Validation

- **Request**: "Please review feat-X. All tests pass (logs attached). I'm specifically concerned about the database migration in `V1__init.sql`."
- **Response**: "Applied the suggested null check in `UserService.cs`. I'm keeping the list as-is because [technical reason]."

---

## Common Red Flags / Guardrail Violations

- Submitting "Big Bang" PRs that cover multiple unrelated skills.
- Becoming defensive about stylistic preferences.
- Silently ignoring reviewer comments.
- Approving a PR because "it's already been too long" (Quality vs. Speed).

---

## Recommended Review Personas

- **Tech Lead** – validates process integrity and technical outcomes.
- **Software Engineer** – validates peer-level clarity and maintainability.

---

## Skill Priority

P2 – Consistency & Governance

---

## Conflict Resolution Rules

- Postcondition Success Signals from applied skills are the objective truth in any review conflict.
- Escalate to the Skill Priority Model (P0-P4) if reviewers disagree on priorities.

---

## Conceptual Dependencies

- verification-and-handover
- quality-gate-enforcement

---

## Classification

Governance
Core

---

## Notes

Reviews are about the code, not the person. Use the defined skills as the common language for feedback.
