<p align="center">
  <img src="https://img.shields.io/badge/ip--owner-Finnoybu%20IP%20LLC-blueviolet?style=flat-square" alt="IP Owner">
  <a href="https://github.com/aegis-initiative"><img
  src="https://img.shields.io/badge/org-aegis--initiative-0084e7?style=flat-square&logo=github" alt="Org"></a>
  <a href="https://aegis-initiative.com"><img
  src="https://img.shields.io/badge/domain-aegis--initiative.com-0084e7?style=flat-square" alt="Domain"></a>
  <img src="https://img.shields.io/badge/visibility-public-lightgrey?style=flat-square" alt="Public">
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/AEGIS_wordmark_dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/AEGIS_wordmark_light.svg">
    <img src="assets/AEGIS_wordmark.svg" width="200" alt="AEGIS™">
  </picture>
</p>

<p align="center">
  <strong>Architectural Enforcement & Governance of Intelligent Systems</strong>
</p>

<p align="center">
  <em>Capability without constraint is not intelligence™</em>
</p>

---

## What is AEGIS™?

AEGIS™ is a governance architecture that enforces **deterministic
constitutional governance over AI-generated actions** before they
interact with operational infrastructure.

Modern AI safety primarily addresses model behavior — what AI *says*. AEGIS addresses what AI *does*.

As AI systems gain the ability to write and execute code, interact
with APIs, control infrastructure, and operate as autonomous agents,
alignment training alone is no longer sufficient. A model that behaves
well most of the time can still cause catastrophic outcomes if granted
unrestricted operational capabilities.

AEGIS introduces a **governance runtime layer** between AI reasoning and system execution:

```
AI Agent
   │
   ▼
AEGIS Governance Gateway
   │
   ▼
Decision Engine
 ├ Capability Authorization
 ├ Authority Verification
 ├ Risk Evaluation
 └ Policy Enforcement
   │
   ▼
Tool Proxy Layer
   │
   ▼
External Systems
```

**AI systems may propose actions. AEGIS™ evaluates those actions. Only approved actions execute.**

---

## The Governance Gap

Current AI safety approaches govern what AI *says*, not what AI *does*.

When AI systems begin interacting with real infrastructure — databases, networks, financial systems, security tools —
alignment alone is insufficient. AEGIS addresses this gap by making governance a **runtime property of the system**, not
merely a training-time guideline.

This mirrors the transformation that occurred in computing security: from trusted programs operating freely to enforced
process isolation, sandboxing, and role-based access control.

Artificial intelligence has not yet undergone this transition. AEGIS is the architecture to make it happen.

---

## The AEGIS Ecosystem

| Repository | Purpose | Domain |
|---|---|---|
| [aegis](https://github.com/aegis-initiative/aegis) | Governance doctrine, ADRs, cross-component specs | aegis-initiative.com |
| [aegis-constitution](https://github.com/aegis-initiative/aegis-constitution) | Canonical governance charter — public, versioned, citeable | aegissystems.app |
| [aegis-core](https://github.com/aegis-initiative/aegis-core) | Enforcement engine — risk scoring, mediation, policy runtime | aegis-platform.net |
| [aegis-platform](https://github.com/aegis-initiative/aegis-platform) | Production platform — operator dashboard, API surface | aegis-platform.net |
| [aegis-docs](https://github.com/aegis-initiative/aegis-docs) | Public documentation site | aegis-docs.com |
| [aegis-labs](https://github.com/aegis-initiative/aegis-labs) | Research sandbox and experimental work | aegis-labs.dev |
| [aegis-ops](https://github.com/aegis-initiative/aegis-ops) | CI/CD, infrastructure, deployment, runbooks | — |
| [aegis-sdk](https://github.com/aegis-initiative/aegis-sdk) | Client SDK for npm and PyPI | aegis-docs.com |

---

## Core Principles

**Capability without constraint is not intelligence™**

AEGIS is built on eight constitutional articles:

- **Bounded Capability** — AI systems may only access explicitly defined capabilities
- **Authority Verification** — All actions must be attributable to a verified actor
- **Deterministic Enforcement** — Governance rules are enforced by architecture, not model compliance
- **Risk Evaluation** — Actions are assessed for operational impact before execution
- **Auditability** — All actions produce immutable audit records
- **Human Override** — Escalation pathways ensure humans retain authority over high-impact decisions
- **Least Privilege** — Systems receive only the capabilities required for their task
- **Constitutional Supremacy** — Governance architecture takes precedence over model reasoning

Read the full constitution: [aegis-constitution](https://github.com/aegis-initiative/aegis-constitution)

---

## Notable Milestones

- **2026-03-05** — AEGIS™ publicly released as an open governance architecture for intelligent systems
- **2026-03-07** — AEGIS™ submitted as an unsolicited position statement to the NIST AI Risk Management Framework

---

## Contributing

AEGIS is an open governance architecture. Contributions are welcome from researchers, engineers, security professionals,
policy teams, and anyone committed to building safer AI systems.

- Read [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- Review open [RFCs](https://github.com/aegis-initiative/aegis/tree/main/rfc) to propose architectural improvements
- Join [GitHub Discussions](https://github.com/aegis-initiative/aegis-initiative/discussions) to engage with the
community
- Report issues via the appropriate repo's issue tracker

---

## IP & Trademark

AEGIS Initiative is operated by **AEGIS Operations LLC**.

AEGIS™ and **"Capability without constraint is not intelligence™"** are trademarks of **Finnoybu IP LLC**, used under
license by **AEGIS Operations LLC**.

Use of AEGIS™ marks in derivative works must not imply endorsement without explicit written permission.
