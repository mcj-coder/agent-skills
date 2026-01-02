# AGENTS

This repository is a codified **skill library** for mixed human/agent teams used in local development and POC work,
with the goal of portability across multiple projects and adoption by teams.

## Operating context (authoritative summary)

- Primary stack: **.NET (backend)**, **JS/TS (frontend)**, **Azure**.
- Repository preference: **monorepo** hosting deployable components, infrastructure, CI/CD pipelines, and documentation.
- Work spans **greenfield and brownfield** projects; focus on establishing best practice development and guiding feature delivery.
- Engineering standards include:
  - Automated quality checks locally (hooks), linting, code style, SAST, code analysers, security linting
  - **Preference for automated enforcement** over manual reviewer behaviour using freely available open-source tools
  - Clean builds (**zero warnings and errors**)
  - Use latest **LTS** versions of key runtimes (e.g., .NET, Node.js, Python) with appropriate tooling
  - Default branch: `main`
  - Releases are **immutable**, **versioned**, and **tagged**
  - **Documentation as Code (DaC)**: All documentation (Markdown, ADRs, Plans) must be treated with the same rigor as source code (linted, spell-checked, verified, and reviewed).
  - **5-Tier Testing Strategy**: Implement and enforce `ArchitectureTest`, `UnitTest`, `SystemTest`, `ComponentE2E`, and `E2E` tiers according to the execution matrix.
  - Deployable components are versioned independently (semantic versioning + conventional commits)
  - During build and deployment, **only modified/impacted components** should be built/tested/deployed
  - Tags should be used in deployment records to track which component versions are deployed to environments
- Reuse strategy:
  - Reusable functionality is developed in an application repo until stable, then extracted into standalone repos and versioned independently.
  - Co-location is required at the **narrowest meaningful scope** (not just “same repo”).
  - Shared models/components reused across multiple slices should live outside slices in a dedicated shared library.
  - If functionality is referenced from another repo, confirm whether it is used by other projects/apps before attempting to move/colocate it.

## Skill design contract

Each skill must be:

1. **TDD-driven**: define an observable failing precondition and a demonstrable passing postcondition.
2. **Guardrail-enforced**: list red flags that indicate bypass/misapplication (e.g., skipping hooks, global suppressions).
3. **Independently reviewable**: specify review personas and what they validate.
4. **DRY/YAGNI compliant**: skills must be minimal, orthogonal, and non-duplicative. Avoid speculative skills.
5. **Conflict-aware**: declare priority and explicit conflict resolution rules.

### Skill priority model (canonical)

- **P0 – Safety & Integrity**
- **P1 – Quality & Correctness**
- **P2 – Consistency & Governance**
- **P3 – Delivery & Flow**
- **P4 – Optimisation & Convenience**

Conflict resolution:

- Higher priority wins; otherwise prefer narrower scope, then stronger guardrails; escalate if still ambiguous.

## Agent personas (recommended)

Agents (or humans acting in these roles) should behave as follows:

- **Software Engineer** (formerly Execution Agent)
  - Identifies and applies all relevant skills to a scoped task.
  - Must not broaden scope beyond the skills’ “When to Use” and the task statement.
  - Responsible for TDD-driven implementation and adhering to DRY/YAGNI.

- **Tech Lead / Senior Developer** (formerly Review Agent)
  - Reviews outputs independently using the skill’s review personas.
  - Must validate spirit and scope adherence, not just “green checks”.
  - Resolves architectural conflicts and skill priority escalations.

- **Platform & DevOps Engineer** (formerly Change Impact Agent)
  - Runs `incremental-change-impact` first and produces an explicit impacted/unimpacted set.
  - Validates build/test/deploy scope alignment and CI/CD conformance.

- **Release Manager / SRE** (formerly Release/Traceability Agent)
  - Ensures tag/version provenance and environment mappings are explicit and immutable.
  - Validates release plans and rollback paths.

- **Security Reviewer**
  - Validates threat/risk implications and security posture (P0 priority).
  - Ensures compliance with static analysis and dependency safety standards.

## How to resume in a new session (Planning & Execution)

When starting a new session (human or agent), do the following:

1. **Bootstrap Skills**: Apply `skills/using-skill-library/SKILL.md`.
   - Load the Skills table from `README.md`.
   - Read `docs/principles.md` for priority/conflict rules.
2. **Brainstorm**: Apply `skills/brainstorming/SKILL.md`.
   - Explore requirements and design alternatives.
   - Capture a validated design before planning.
3. **Plan**: Apply `skills/writing-plans/SKILL.md`.
   - Document a detailed implementation plan in `docs/plans/`.
   - **Present the plan and conflict recommendations to the user for a final decision before proceeding.**
4. **Assess Impact**: Apply `skills/incremental-change-impact/SKILL.md` to refine the plan based on the impacted set.
5. **Prepare Execution**: Apply `skills/using-git-worktrees/SKILL.md` when isolation is required.
6. **Execute**:
   - Use `skills/executing-plans/SKILL.md` for batch execution, or
     `skills/subagent-driven-development/SKILL.md` for per-task delegation.
   - **Follow the defined `Process` in each `SKILL.md`**, specifically ensuring thorough Source Review and Verification through tests.
   - For any bugs or failures encountered, apply `skills/systematic-debugging/SKILL.md`.
   - Document significant design decisions in `docs/adr/`.
7. **Review**:
   - Apply `skills/requesting-code-review/SKILL.md` and
     `skills/receiving-code-review/SKILL.md` (or `skills/structured-review-workflow/SKILL.md` as a wrapper).
8. **Verify & Handover**:
   - Apply `skills/verification-and-handover/SKILL.md` before claiming any task is complete.
   - Apply `skills/finishing-a-development-branch/SKILL.md` to integrate or close work safely.
9. **Record**: Document any new overlaps/conflicts discovered and resolve via the priority model.
