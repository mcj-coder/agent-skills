---
name: release-tagging-plan
description: >
  Use this skill when preparing immutable releases to define the exact component
  versions and tags that map source to built artifacts and deployments for
  traceability.
---

# Release Composition & Tagging Plan

## Intent
Plan immutable releases with tags that reliably identify the source state used
to build and deploy each component version.

---

## When to Use
- Before creating a release for any component
- Before deploying to environments where traceability is required
- When reviewing release automation conventions

---

## Precondition Failure Signal
- Releases cannot be traced to a specific source state
- Tags are missing, inconsistent, or mutable
- Multiple different sources produce the “same” release version
- Environment deployments are not linked to component tags/versions

---

## Postcondition Success Signal
- Each release version maps to a specific tag and source state
- Tags are immutable and consistent across components
- Release composition is explicit for multi-component changes
- Deployment inputs reference tags/versions, not floating branches

---

## Example Test / Validation
- Given a release version, verify a unique tag points to the source used
- Verify deployment records can map environments to component versions/tags
- Confirm that re-running a build from the tag yields the same source inputs

---

## Common Red Flags / Guardrail Violations
- Deploying from main without a tag
- Re-tagging or moving tags after release
- “Latest” deployments that lack explicit version references
- Bundling multiple components into one tag without a clear scheme

---

## Recommended Review Personas
- **Release/Platform Engineer** – validates traceability and immutability
- **Tech Lead** – validates release scope and component mapping
- **Security Reviewer** – validates integrity of release provenance (where applicable)

---

## Skill Priority
P0 – Safety & Integrity

---

## Conflict Resolution Rules
- Overrides all lower-priority skills
- No deployment without tag-based traceability unless explicitly escalated
- If tag scheme conflicts exist, default to the most traceable and component-scoped approach

---

## Conceptual Dependencies
- incremental-change-impact
- semantic-version-impact

---

## Classification
Core  
Governance

---

## Notes
If you cannot answer “what code built this release?” the release process is broken.
