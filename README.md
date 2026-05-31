<p align="center">
  <a href="https://aegis-initiative.com"><img src="https://img.shields.io/badge/site-aegis--initiative.com-0084e7?style=flat-square" alt="Site"></a>
  <a href="https://github.com/aegis-initiative"><img src="https://img.shields.io/badge/org-aegis--initiative-0084e7?style=flat-square&logo=github" alt="Org"></a>
  <img src="https://img.shields.io/badge/license-Apache--2.0-green?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/status-active-success?style=flat-square" alt="Status">
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/AEGIS_wordmark_dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/AEGIS_wordmark_light.svg">
    <img src="assets/AEGIS_wordmark.svg" width="200" alt="AEGIS™">
  </picture>
</p>

<p align="center">
  <em>Capability without constraint is not intelligence™</em>
</p>

# AEGIS Initiative

> The public home of the AEGIS Initiative — project roadmap, research output, press presence, and the front door to the AEGIS ecosystem.

## What it is

This repository hosts [aegis-initiative.com](https://aegis-initiative.com) — the public-facing website for the AEGIS Initiative, plus the `@aegis-initiative/design-system` npm package that every AEGIS site consumes. It's the org's front door: a visitor who lands here should understand what AEGIS is, why it exists, who's behind it, and where to go next.

AEGIS™ (Architectural Enforcement & Governance of Intelligent Systems) is a governance architecture that enforces deterministic constitutional governance over AI-generated actions before they interact with operational infrastructure. Modern AI safety primarily addresses what AI *says*. AEGIS addresses what AI *does*.

## Why it exists

As AI systems gain the ability to write and execute code, interact with APIs, control infrastructure, and operate as autonomous agents, alignment training alone is no longer sufficient. A model that behaves well most of the time can still cause catastrophic outcomes if granted unrestricted operational capabilities.

AEGIS introduces a **governance runtime layer** between AI reasoning and system execution — capability authorization, authority verification, risk evaluation, and policy enforcement, implemented in architecture rather than left to model compliance. This repo is where the non-technical and semi-technical audiences enter the ecosystem: journalists, policy teams, prospective partners, and researchers evaluating whether AEGIS fits their problem.

## Get started

**Visit the site:** [aegis-initiative.com](https://aegis-initiative.com)

**Read the constitution:** [aegis-constitution.com](https://aegis-constitution.com)

**Explore the technical specs:** [aegis-governance.com](https://aegis-governance.com)

**Browse developer docs:** [aegis-docs.com](https://aegis-docs.com)

## Use

The **design system package** is published on npm and consumed by every public AEGIS Astro site:

```bash
npm install @aegis-initiative/design-system
```

Gallery and component reference: [aegis-initiative.com/ecosystem/design-system/](https://aegis-initiative.com/ecosystem/design-system/)

## Develop

Local development of the site:

```bash
git clone https://github.com/aegis-initiative/aegis-initiative.git
cd aegis-initiative
npm --prefix sites/initiative install
npm --prefix sites/initiative run dev
```

Local development of the design system package:

```bash
cd packages/aegis-design-system
npm run build
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines, branch conventions, and the PR review process.

## How it fits the ecosystem

The AEGIS Initiative spans multiple repositories, each with a defined role:

| Repository | Role | Domain |
|---|---|---|
| [aegis-initiative](https://github.com/aegis-initiative/aegis-initiative) | Org home, public roadmap, design system | [aegis-initiative.com](https://aegis-initiative.com) |
| [aegis-constitution](https://github.com/aegis-initiative/aegis-constitution) | Canonical governance charter | [aegis-constitution.com](https://aegis-constitution.com) |
| [aegis-governance](https://github.com/aegis-initiative/aegis-governance) | Technical specifications, ATX-1 threat matrix, RFCs | [aegis-governance.com](https://aegis-governance.com) |
| [aegis-core](https://github.com/aegis-initiative/aegis-core) | Enforcement engine — AGP-1 runtime | — |
| [aegis-platform](https://github.com/aegis-initiative/aegis-platform) | Operator dashboard, API surface | [aegis-platform.net](https://aegis-platform.net) |
| [aegis-sdk](https://github.com/aegis-initiative/aegis-sdk) | TypeScript + Python client libraries | — |
| [aegis-docs](https://github.com/aegis-initiative/aegis-docs) | Developer documentation | [aegis-docs.com](https://aegis-docs.com) |
| [aegis-federation](https://github.com/aegis-initiative/aegis-federation) | Cross-domain machine discovery protocol | [aegis-federation.com](https://aegis-federation.com) |
| [aegis-labs](https://github.com/aegis-initiative/aegis-labs) | Research sandbox, adversarial testing | — |

## License

Apache-2.0 for code in this repository. The `@aegis-initiative/design-system` package is Apache-2.0. See [LICENSE](LICENSE).

The AEGIS ecosystem uses a dual-licensing matrix: Apache-2.0 for permissive code, BSL-1.1 for enforcement runtimes (aegis-core, aegis-sdk), CC-BY-SA-4.0 for documentation and specifications, and proprietary licensing for the commercial platform.

## Related

- [Contribute](CONTRIBUTING.md) — how to propose changes and engage with the project
- [Discussions](https://github.com/aegis-initiative/aegis-initiative/discussions) — community engagement
- [Roadmap](https://aegis-initiative.com/ecosystem/roadmap/) — what's planned and in progress
- [Press](https://aegis-initiative.com/press/) — publications, milestones, and media kit

---

<sub>AEGIS™ and *"Capability without constraint is not intelligence™"* are trademarks of the AEGIS Initiative, used under license by AEGIS Operations LLC. Use of AEGIS™ marks in derivative works must not imply endorsement without explicit written permission.</sub>
