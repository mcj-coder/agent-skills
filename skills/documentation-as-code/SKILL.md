---
name: documentation-as-code
description: >
  Use this skill whenever creating, modifying, or reviewing documentation
  (Markdown, ADRs, PLANS, READMEs) to ensure it is treated with the same rigor
  as source code: linted, spell-checked, verified, and reviewed.
---

# Documentation as Code (DaC)

## Intent

Treat documentation as a first-class engineering artifact. This ensures that
technical documentation is accurate, maintainable, follows consistent standards,
and is verified before being declared complete.

The goal is to eliminate "stale" or "hallucinated" documentation by enforcing
the same quality gates used for production code.

---

## When to Use

- Creating or updating `SKILL.md` files.
- Drafting Architecture Decision Records (ADRs).
- Writing implementation plans in `docs/plans/`.
- Modifying `README.md` or other repository-level documentation.
- Documenting APIs or system architectures.

---

## Precondition Failure Signal

- Documentation contains spelling or grammatical errors.
- Markdown formatting is inconsistent or violates repository linting rules.
- Documentation references non-existent code, files, or outdated patterns.
- Documentation is committed without independent review.
- No automated checks (linters/spell-checkers) have been run against the text.

---

## Postcondition Success Signal

- Documentation is free of spelling and grammar errors (verified by automated tools).
- Markdown conforms to repository linting standards.
- Technical claims in documentation are verified against the actual source code.
- Documentation has been reviewed by the applicable personas (e.g., Tech Lead, Domain Expert).
- Review feedback has been incorporated and validated.
- All documentation checks are clean (zero warnings and errors; see `quality-gate-enforcement`).
- Plans in `docs/plans/` use `templates/plan_template.md` and include task status and verification evidence.
- Documentation language is explicitly configured (user-confirmed), while code constructs remain en-US.

---

## Process

1. **Source Review**: Inspect the source code or system being documented to ensure the documentation reflects current reality.
2. **Implementation**: Draft or update the documentation following the repository's templates and style guides.
   - Confirm the documentation/comment language with the user and configure CSpell language settings accordingly.
3. **Automated Verification**:
    - Run Markdown linters to ensure structural correctness.
    - Run spell-checkers to identify typos.
    - Fix all warnings and errors (see `quality-gate-enforcement`).
    - If the repository includes plan verification (for example, `npm run verify:plans`), run it and resolve all failures.
4. **Human/Agent Verification**:
    - Verify that all internal links and file references are valid.
    - Confirm that code snippets in documentation are correct and, if possible, tested.
5. **Review**:
    - Use sub-agent calls or peer review to request validation from applicable personas (e.g., Tech Lead for ADRs).
    - Incorporate feedback and re-verify.

---

## Example Test / Validation

- Run `markdownlint` and `cspell` (or equivalent) and confirm zero errors.
- Verify all file paths and symbols referenced in the documentation exist in the current branch.
- Provide a review summary from a Tech Lead persona confirming the accuracy of the content.

---

## Common Red Flags / Guardrail Violations

- "It's just a typo, I'll fix it in the next PR."
- Committing large blocks of documentation without running a spell-checker.
- Documentation that contradicts the actual implementation (hallucinations).
- Skipping the review phase for "simple" documentation updates.
- Using non-standard formatting that breaks automated rendering or linting.

---

## Recommended Review Personas

- **Tech Lead** – validates technical accuracy and alignment with architectural principles.
- **Software Engineer** – validates clarity, usability, and correctness of examples.
- **Platform Engineer** – validates formatting standards and automation conformance.

---

## Skill Priority

P2 – Consistency & Governance  
(Escalate to P1 where documentation defines critical safety or security protocols.)

---

## Conflict Resolution Rules

- Documentation rigor must not be sacrificed for delivery speed.
- If documentation conflicts with the code it describes, the code is the source of truth; update documentation to match.
- Automated linting/spelling errors take precedence over stylistic preferences.

---

## Conceptual Dependencies

- automated-standards-enforcement
- verification-and-handover
- task-planning-and-brainstorming

---

## Classification

Core  
Governance

---

## Notes

Documentation is the "UI" of the codebase for other developers and agents. High-quality documentation reduces onboarding time and prevents architectural drift.
