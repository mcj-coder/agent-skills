# ADR 006: Commit Message Validation and Secret Scanning Enforcement

## Status

Proposed

## Context

The brownfield migration requires automated enforcement of commit message conventions and secret scanning. Current repository configuration lacks commit message validation and secret scanning in local hooks and CI. The updated `branching-strategy-and-conventions` skill now explicitly requires commit message enforcement via hooks and CI, so we must select tooling that is cross-platform, open-source by default, and compatible with Node-based tooling already in use.

## Decision

Adopt:

- Commit message validation with `commitlint` running via a Husky `commit-msg` hook, using the conventional commit ruleset.
- Secret scanning with `secretlint` using both local enforcement (hook integration) and CI enforcement via an npm-based CLI run.

Implementation details will be added after user approval, including the specific configuration files and CI workflow additions.

## Alternatives Considered

1. `gitlint` (Python-based) for commit message validation.
2. A custom regex-based commit-msg hook.
3. `gitleaks` for secret scanning (official action requires an org license key).
4. `trufflehog` for secret scanning.
5. GitHub Advanced Security secret scanning (non-open-source, requires paid licensing).

## Consequences

- Adds Node-based dependencies for commit message validation and secret scanning, aligning with the existing Node toolchain.
- Secretlint requires Node.js 20+ (compatible with the repo's Node 24 LTS baseline).
- Secret scanning can run cross-platform via the npm CLI and does not require an org license key.
- Local hooks and CI will block commits/PRs that do not meet the enforced standards.

## Skill References

- `skills/automated-standards-enforcement/SKILL.md`
- `skills/local-dev-experience/SKILL.md`
- `skills/branching-strategy-and-conventions/SKILL.md`
- `skills/quality-gate-enforcement/SKILL.md`
