---
name: task-planning-and-brainstorming
description: >
  Use this skill before starting any creative work or multi-step implementation 
  to explore requirements, design alternatives, and document a detailed execution plan.
---

# Task Planning & Brainstorming

## Intent

Ensure that tasks are well-understood, architecturally sound, and broken down into actionable, bite-sized steps before implementation begins. This minimizes rework and provides a reviewable roadmap for the team.

---

## When to Use

- Before starting any new feature or component.
- When requirements are vague or complex.
- Before a multi-step refactoring or maintenance task.
- When a task requires coordination between multiple agents or roles.

---

## Precondition Failure Signal

- Implementation starts without a documented plan.
- Requirements are clarified "on the fly" during coding.
- The task is too large to track (no bite-sized steps).
- Only one design approach was considered without exploring alternatives.

---

## Postcondition Success Signal

- A validated design/plan exists in `docs/plans/YYYY-MM-DD-<name>.md`.
- The plan includes 2-3 design alternatives with trade-offs.
- The plan is broken into atomic tasks (2-5 minutes each).
- The plan includes per-task status and verification evidence for recovery and traceability.
- The user has approved the plan before execution.

---

## Process

1. **Source Review**: Audit current project state, relevant files, and recent commits.
2. **Brainstorming**:
   - Ask clarifying questions one at a time.
   - Propose 2-3 different approaches with trade-offs.
   - Present design in small sections (200-300 words) for incremental validation.
3. **Planning**:
    - Break the chosen design into bite-sized tasks (RED -> GREEN -> REFACTOR -> COMMIT).
    - Specify exact file paths and mandatory commands.
    - Include a mandatory plan header (Goal, Architecture, Tech Stack).
    - Use `templates/plan_template.md` and keep the Task Checklist updated with status + verification evidence.
    - Keep the Finalization section current so delivery or abortion is recoverable.
4. **Documentation**: Save the plan to `docs/plans/` and commit it.
5. **Review**: Tech Lead reviews the plan for architectural integrity and YAGNI adherence.

---

## Example Test / Validation

- **Requirement**: "Add user profiles".
- **Plan**: `docs/plans/2026-01-02-user-profiles.md`
- **Validation**: Verify the plan contains at least 3 discrete tasks with exact file paths and failing test examples.

---

## Common Red Flags / Guardrail Violations

- Asking multiple questions at once.
- Proposing only one design option ("Big Bang" design).
- Tasks are too broad (e.g., "Implement the API").
- Skipping the plan and jumping straight to `test-driven-development`.

---

## Recommended Review Personas

- **Tech Lead** – validates architectural intent and YAGNI.
- **Software Engineer** – validates task granularity and technical feasibility.

---

## Skill Priority

P2 – Consistency & Governance  
(Must precede all P0-P1 implementation work.)

---

## Conflict Resolution Rules

- This skill must be completed before any implementation skills are applied.
- If requirements change during execution, return to this skill to update the plan.

---

## Conceptual Dependencies

- test-driven-development (for task structure)
- architecture-testing (for design validation)

---

## Classification

Governance
Core

---

## Notes

The goal is to move the "thinking" phase out of the code and into a reviewable artifact.
Each task in the plan should be 2-5 minutes of focused effort.
