# CLAUDE.md — aegis-initiative

## Project
Org home and public-facing entry point for the AEGIS Initiative. This is the first thing contributors, researchers, policymakers, and the public see when they visit the AEGIS GitHub organization.

## Org Context
- GitHub Org: github.com/aegis-initiative
- IP Owner: Finnoybu IP LLC
- Parent Ecosystem: Finnoybu Holdings LLC
- Website: aegis-initiative.com
- Governance Domain: aegissystems.app

## This Repo's Role
This repository serves as the **public face** of the AEGIS Initiative. It contains:
- The org-level README (rendered on github.com/aegis-initiative)
- The `.github/profile/README.md` (GitHub org landing page)
- Brand assets, design system, and media kit (`brand/`)
- Public roadmap (`roadmap/`)
- Contributor onboarding and guidelines (`CONTRIBUTING.md`)
- Planning documents for the initiative website (`planning/`)
- Logo and wordmark assets (`assets/`)

This is a **presentation and onboarding** repo — it tells the world what AEGIS is, why it exists, and how to get involved. It does not contain runtime code, governance doctrine, or operational configs.

## Repo Structure
- /assets — Logo SVGs, wordmarks, and visual assets
- /brand — Design system, brand guidelines, UI kit, media kit (scaffolding)
- /roadmap — Public-facing project roadmap
- /planning — Internal planning documents (site outlines, content strategy)
- /.github/profile — GitHub org profile README
- CONTRIBUTING.md — Contributor onboarding and workflow
- README.md — Org-level public README

## Related Repos
- aegis — Governance doctrine, ADRs, cross-component specs (the canonical "what and why")
- aegis-constitution — Public governance charter, versioned and citeable
- aegis-core — Enforcement engine implementing governance runtime
- aegis-platform — Production platform, operator dashboard, API surface
- aegis-docs — Public documentation site
- aegis-ops — CI/CD, infrastructure, deployment (the operational "how")
- aegis-sdk — Client SDK (TypeScript, Python)
- aegis-labs — Research sandbox and experimental work

## Stack
Markdown, SVG — presentation and documentation repo (no runtime code)

## Key Conventions
- README.md at root is the org's public face — keep it polished and current
- CONTRIBUTING.md defines the contribution workflow for all AEGIS repos
- Roadmap is updated quarterly and kept in sync with the detailed roadmap in aegis
- Brand assets follow strict usage guidelines defined in brand/
- Branch: main is protected; all changes via PR with 1 required review
- Commit style: conventional commits (feat:, docs:, chore:, fix:)

## Content Guidelines
- Voice: authoritative, precise, accessible — avoid jargon where possible
- Audience: researchers, engineers, policymakers, security professionals, general public
- Always link to the constitution and governance repos for technical depth
- Trademark notice required on first use of AEGIS™ in any document

## Current Focus
- Scaffolding brand/ directory for design system and media kit
- Building out public roadmap
- Planning aegis-initiative.com website (Astro + Tailwind + MDX)
- Contributor onboarding documentation
