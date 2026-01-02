# AGENTS

This repository is a codified **skill library** for mixed human/agent teams used in local development and POC work,
with the goal of portability across multiple projects and adoption by teams.

## Operating context (authoritative summary)

- Primary stack: **.NET (backend)**, **JS/TS (frontend)**, **Azure**.
- Repository preference: **monorepo** hosting deployable components, infrastructure, CI/CD pipelines, and documentation.
- Work spans **greenfield and brownfield** projects; focus on establishing best practice development and guiding feature delivery.
- Engineering standards include:
  - Automated quality checks locally (hooks), linting, code style, SAST, code analysers, security linting
  - Clean builds (**zero warnings and errors**)
  - Use latest **LTS** versions of key runtimes (e.g., .NET, Node.js, Python) with appropriate tooling
  - Default branch: `main`
  - Releases are **immutable**, **versioned**, and **tagged**
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

- **Execution Agent**
  - Applies a single skill to a scoped task.
  - Must not broaden scope beyond the skill’s “When to Use” and the task statement.

- **Review Agent**
  - Reviews outputs independently using the skill’s review personas.
  - Must validate spirit and scope adherence, not just “green checks”.

- **Change Impact Agent**
  - Runs `incremental-change-impact` first and produces an explicit impacted/unimpacted set.

- **Release/Traceability Agent**
  - Ensures tag/version provenance and environment mappings are explicit and immutable.

## How to resume in a new session

When starting a new session (human or agent), do the following:

1. Read `README.md` to understand skill inventory.
2. Read `docs/principles.md` for priority/conflict rules.
3. For the current task, start with `skills/incremental-change-impact/SKILL.md`.
4. Select the next skill(s) based on the impacted set and stated intent.
5. Apply skills one at a time; require independent review for each skill output.
6. Record any overlaps/conflicts discovered and resolve via the canonical priority model.
