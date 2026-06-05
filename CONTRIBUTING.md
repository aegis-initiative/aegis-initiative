# Contributing to the AEGIS Initiative

Thanks for contributing. This document covers the conventions shared across every repo in the [`aegis-initiative`](https://github.com/aegis-initiative) organization, and how to start a new repo from the canonical structural template.

## Workflow (every repo)

1. Branch from `main` (`main` is protected on all repos).
2. Use [conventional commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `ci:`).
3. Open a pull request using the repo's `PULL_REQUEST_TEMPLATE.md`; fill in Summary / Why / Validation / Related.
4. Wait for required checks and one review before merge. Squash-merge is the default.

## Starting a new repo from the template

Every repo in the org follows one **canonical outer layout** with archetype-specific sub-templates (see [Issue #30](https://github.com/aegis-initiative/aegis-initiative/issues/30)). To bootstrap a new repo:

1. **Use the template repo.** Create from [`aegis-initiative/aegis-template`](https://github.com/aegis-initiative/aegis-template) via the *Use this template* button — it provides the outer shape (`sites/`, `services/`, `packages/`, `docs/`, `scripts/`, `.github/`).
2. **Apply the shared baseline + an archetype.** The canonical templates live in [`aegis-ops/templates/`](https://github.com/aegis-initiative/aegis-ops/tree/main/templates):
   - `templates/_shared/` — repo-wide baseline (`.github/` workflows, CODEOWNERS, dependabot, issue/PR templates, README/CLAUDE/CONTRIBUTING skeletons, LICENSE matrix, VERSION policy).
   - `templates/archetypes/` — one sub-template per role: `astro-site`, `nextjs-app`, `typescript-package`, `python-package`, `fastapi-service`, `docs-research`, `governance-spec`.
   - Run `aegis-ops/scripts/bootstrap-structural-template.sh` to apply the shared baseline plus a chosen archetype to a target directory.
3. **Place code by archetype.** Web surfaces go in `sites/<name>/`, runtime services in `services/<name>/`, published libraries in `packages/<name>/`. No runtime code at the repo root.
4. **License per the matrix.** Pick the license from `templates/_shared/LICENSE-MATRIX.md` (Apache 2.0 / BSL 1.1 / CC-BY-SA-4.0 / Proprietary).
5. **Record the mapping.** Add the repo and its archetype→destination to `aegis-ops/templates/rollout-map.yml`.

## Conventions

- **Branch protection:** `main` requires a PR + 1 review (admin bypass permitted for solo-maintainer work during pre-ratification).
- **Versioning:** CalVer for sites and spec repos, SemVer for code packages (see `aegis-ops/templates/_shared/VERSION-POLICY.md`).
- **CLAUDE.md:** each repo carries a role-specific `CLAUDE.md` following the shared skeleton; keep its registry pointers current in the same commit as structural changes.
