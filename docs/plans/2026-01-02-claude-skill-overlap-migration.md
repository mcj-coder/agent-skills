# Claude Skill Overlap Migration Plan

## Goal

Improve the overlapping repo skills by adding concise, high-value guidance and referencing curated detail from Claude skills without bloating the main skill definitions.

## Architecture

- Keep SKILL.md concise and composable (DRY/YAGNI).

- Add a small "Key Practices" section to each overlapping skill.

- Add a short reference document per skill under `skills/<skill>/references/` and link it from Notes.

## Tech Stack

Markdown.

## Design Options (trade-offs)

1. Embed + reference: Add a short Key Practices section plus detailed reference docs. Balanced but slightly longer SKILL.md.

2. Reference-only: Keep SKILL.md minimal and move all details to references. Lowest context load, weaker at-a-glance guidance.

3. Curated extracts (selected): Add 3-5 high-value bullets to SKILL.md and short, focused reference files. Keeps context small and avoids YAGNI.

## Plan (bite-sized tasks)

1. Source review (RED)

   - Compare overlapping Claude and repo skills for missing required guidance.

   - Identify 3-5 key practices per skill to surface in SKILL.md.

2. Draft references (GREEN)

   - Create `skills/aspire-integration-testing/references/aspire-integration-testing.md`.

   - Create `skills/testcontainers-integration-tests/references/testcontainers-integration-tests.md`.

   - Create `skills/modern-csharp-coding-standards/references/modern-csharp-coding-standards.md`.

   - Keep each reference focused and concise (no large templates).

3. Update skills (GREEN)

   - Add "Key Practices" sections to the three SKILL.md files.

   - Update Notes to point to the new reference files.

4. Documentation checks (REFACTOR)

   - Ensure Markdown and spelling pass.

   - Add any required words to `cspell.json`.

5. Verification (COMMIT)

   - Run `npm run verify` and resolve issues.

## Files to change/add

- Update: skills/aspire-integration-testing/SKILL.md

- Update: skills/testcontainers-integration-tests/SKILL.md

- Update: skills/modern-csharp-coding-standards/SKILL.md

- Add: skills/aspire-integration-testing/references/aspire-integration-testing.md

- Add: skills/testcontainers-integration-tests/references/testcontainers-integration-tests.md

- Add: skills/modern-csharp-coding-standards/references/modern-csharp-coding-standards.md

- Possibly update: cspell.json

## Mandatory commands

- npm run verify

## Notes

- Keep all new content ASCII-only.

- Avoid duplicating full Claude skill content; only migrate missing, required detail.
