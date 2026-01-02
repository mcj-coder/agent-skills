---
name: task-planning-and-brainstorming
description: >
  Use this skill when both design validation and detailed planning are required
  in a single workflow, and you need a wrapper to coordinate those steps.
---

# Task Planning & Brainstorming

## Intent

Coordinate brainstorming and planning so requirements are validated and then
converted into an execution plan without skipping either step.

---

## When to Use

- When you need both a validated design and a detailed plan.
- When coordinating multiple agents or sessions.
- When unsure whether brainstorming or planning should come first.

---

## Precondition Failure Signal

- Planning starts without a validated design.
- Implementation starts without a plan.
- Design or plan is skipped because the task "seems small".

---

## Postcondition Success Signal

- A validated design exists (from `brainstorming`).
- An approved plan exists in `docs/plans/YYYY-MM-DD-<name>.md` (from `writing-plans`).
- The plan includes atomic tasks with verification evidence and status tracking.

---

## Process

1. **Apply `brainstorming`**: Validate the design and record it.
2. **Apply `writing-plans`**: Convert the design into a plan using the template.
3. **Review**: Tech Lead validates both artefacts and confirms readiness.

---

## Example Test / Validation

- **Requirement**: "Add user profiles".
- **Design**: `docs/designs/2026-01-02-user-profiles.md`
- **Plan**: `docs/plans/2026-01-02-user-profiles.md`
- **Validation**: Design approved; plan includes 3+ tasks with exact paths and tests.

---

## Common Red Flags / Guardrail Violations

- Skipping brainstorming because requirements "seem clear".
- Skipping planning because design "seems complete".
- Tasks remain vague or large.

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

- brainstorming
- writing-plans

---

## Classification

Governance
Core

---

## Notes

The goal is to move the "thinking" phase out of the code and into a reviewable artifact.
Each task in the plan should be 2-5 minutes of focused effort.
