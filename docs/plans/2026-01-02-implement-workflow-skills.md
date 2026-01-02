# Implement Workflow Skills Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Bridge the gap between the engineering-focused library and the Claude workflow skills by implementing 4 new high-level workflow skills.

**Architecture:** Create 4 new skills in `skills/` using the standard `SKILL.md` format, but incorporating the rigid "Iron Laws" and phases from the Claude source. Update `README.md` and `AGENTS.md` to integrate these into the core agent workflow.

**Tech Stack:** Markdown, Git.

---

### Task 1: Create `task-planning-and-brainstorming` Skill

**Files:**
- Create: `skills/task-planning-and-brainstorming/SKILL.md`

**Step 1: Write the failing test**
(Note: For documentation-only skills, verification is through manual inspection and user review of the drafted skill.)

**Step 2: Implement `task-planning-and-brainstorming`**
Combine `brainstorming` and `writing-plans` into a single skill that covers the "Setup" and "Plan" phases. Ensure it mandates the `docs/plans/` folder and specific plan header.

**Step 3: Verification**
Verify the skill defines:
- "One question at a time" rule.
- Mandatory 2-3 options before settling.
- Mandatory plan format (2-5 min tasks).
- Precondition/Postcondition signals.

**Step 4: Commit**
```bash
git add skills/task-planning-and-brainstorming/SKILL.md
git commit -m "feat: add task-planning-and-brainstorming skill"
```

---

### Task 2: Create `systematic-debugging` Skill

**Files:**
- Create: `skills/systematic-debugging/SKILL.md`

**Step 1: Implement `systematic-debugging`**
Adapt the Claude `systematic-debugging` skill. Include the 4 phases and the "3-fix limit" rule.

**Step 2: Verification**
Verify the skill defines:
- The "Iron Law": NO FIXES WITHOUT ROOT CAUSE.
- The 4 Phases: Root Cause, Pattern, Hypothesis, Implementation.
- The 3-fix limit and architectural escalation.

**Step 3: Commit**
```bash
git add skills/systematic-debugging/SKILL.md
git commit -m "feat: add systematic-debugging skill"
```

---

### Task 3: Create `verification-and-handover` Skill

**Files:**
- Create: `skills/verification-and-handover/SKILL.md`

**Step 1: Implement `verification-and-handover`**
Adapt `verification-before-completion` and include "handover" (PR/Completion) requirements.

**Step 2: Verification**
Verify the skill defines:
- The "Iron Law": EVIDENCE BEFORE CLAIMS.
- The Gate Function steps.
- Common failure list.

**Step 3: Commit**
```bash
git add skills/verification-and-handover/SKILL.md
git commit -m "feat: add verification-and-handover skill"
```

---

### Task 4: Create `structured-review-workflow` Skill

**Files:**
- Create: `skills/structured-review-workflow/SKILL.md`

**Step 1: Implement `structured-review-workflow`**
Combine `requesting-code-review` and `receiving-code-review` logic. Focus on how agents interact with the Tech Lead/Senior Developer personas.

**Step 2: Verification**
Verify the skill defines:
- Self-review requirements before requesting.
- How to provide clear context to reviewers.
- How to process feedback without becoming defensive or over-correcting.

**Step 3: Commit**
```bash
git add skills/structured-review-workflow/SKILL.md
git commit -m "feat: add structured-review-workflow skill"
```

---

### Task 5: Integrate into Core Documentation

**Files:**
- Modify: `README.md`
- Modify: `AGENTS.md`
- Modify: `docs/principles.md`

**Step 1: Update README.md**
Add the 4 new skills to the skill inventory table.

**Step 2: Update AGENTS.md**
Update the "How to resume in a new session" workflow to explicitly reference these new skills (especially Planning and Verification).

**Step 3: Update principles.md**
Add a principle about "Evidence-Driven Workflow" (from Systematic Debugging and Verification).

**Step 4: Commit**
```bash
git add README.md AGENTS.md docs/principles.md
git commit -m "chore: integrate workflow skills into core documentation"
```
