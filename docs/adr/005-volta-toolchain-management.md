# ADR 005: Volta for Node Toolchain Pinning

## Status

Accepted

## Context

Local Node versions drifted from the repo LTS policy, causing engine warnings
during installs and inconsistent developer environments. We need a repo-level
mechanism that keeps Node aligned with the chosen LTS without manual switching.

## Decision

Adopt Volta to manage the Node toolchain for this repository. Pin Node 24 LTS
via the `volta` block in `package.json`, while keeping `.nvmrc` and `engines`
in sync for non-Volta workflows.

## Alternatives Considered

- nvm-windows: manual switching per shell; higher chance of drift.
- Manual Node installs: no repo-level pinning; easy to diverge across machines.

## Consequences

- Developers must install Volta or use `.nvmrc`/`engines` manually.
- Volta auto-switches per project, reducing drift and engine warnings.
- Toolchain pinning is explicit in `package.json`.

## Skill References

- runtime-tooling-validation
- local-dev-experience
- documentation-as-code
