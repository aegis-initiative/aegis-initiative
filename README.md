<picture>
  <source media="(prefers-color-scheme: dark)"  srcset="https://raw.githubusercontent.com/aegis-initiative/.github/main/profile/assets/hero-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/aegis-initiative/.github/main/profile/assets/hero-light.svg">
  <img src="https://raw.githubusercontent.com/aegis-initiative/.github/main/profile/assets/hero-dark.svg" alt="AEGIS — Architectural Enforcement & Governance Intelligence System" width="100%">
</picture>

<br>

[![License](https://img.shields.io/badge/License-Apache_2.0-0084e7?style=flat-square)](https://opensource.org/licenses/Apache-2.0)
[![NIST AI RMF](https://img.shields.io/badge/NIST-AI_RMF_Aligned-0a1628?style=flat-square&labelColor=0084e7)](https://airc.nist.gov/Home)
[![Standard](https://img.shields.io/badge/Type-Open_Standard-111d35?style=flat-square&labelColor=0084e7)](https://github.com/aegis-initiative)
[![IP](https://img.shields.io/badge/IP-Finnoybu_IP_LLC-111d35?style=flat-square)](https://finnoybu.com)

---

**AEGIS** is an open standard for AI governance, policy enforcement, and architectural integrity. It provides enterprises and public institutions with a rigorous, auditable framework for deploying AI responsibly — at scale, across jurisdictions.

This is not a product. It is governance infrastructure: machine-readable doctrine, enforcement schemas, and a runtime engine designed to make AI policy deterministic and auditable at the architectural level.

---

### Architecture

AEGIS is organized as a four-layer enforcement stack. Each layer has a defined scope, interface contract, and governance primitives that downstream layers consume.

```
┌─────────────────────────────────────────────────────────┐
│  LAYER 4 · PLATFORM      Management, API, Reporting     │
├─────────────────────────────────────────────────────────┤
│  LAYER 3 · ENGINE        Runtime Enforcement & Audit    │
├─────────────────────────────────────────────────────────┤
│  LAYER 2 · SCHEMA        Machine-Readable Policy Defs   │
├─────────────────────────────────────────────────────────┤
│  LAYER 1 · DOCTRINE      Foundational Governance Canon  │
└─────────────────────────────────────────────────────────┘
```

---

### Repositories

| Repository | Layer | Description |
|---|---|---|
| [`aegis-doctrine`](https://github.com/aegis-initiative/aegis-doctrine) | 1 · Doctrine | Foundational governance canon and authoritative policy reference |
| [`aegis-schema`](https://github.com/aegis-initiative/aegis-schema) | 2 · Schema | Machine-readable schemas for policies, risk classifications, and rules |
| [`aegis-engine`](https://github.com/aegis-initiative/aegis-engine) | 3 · Engine | Runtime policy evaluation, drift detection, and audit event emission |
| [`aegis-audit`](https://github.com/aegis-initiative/aegis-audit) | 3 · Engine | Immutable audit trail infrastructure and log schema |
| [`aegis-platform`](https://github.com/aegis-initiative/aegis-platform) | 4 · Platform | Management console, API gateway, and operator surface |
| [`aegis-sdk`](https://github.com/aegis-initiative/aegis-sdk) | 4 · Platform | Client SDK and integration libraries |
| [`aegis-infra`](https://github.com/aegis-initiative/aegis-infra) | 4 · Platform | Infrastructure-as-code, deployment templates, and CI/CD |
| [`aegis-docs`](https://github.com/aegis-initiative/aegis-docs) | 4 · Platform | Full documentation site source |
| [`.github`](https://github.com/aegis-initiative/.github) | — | Org profile, issue templates, and contribution standards |

---

<sub>© Finnoybu IP LLC · AEGIS is a trademark of Finnoybu IP LLC · <a href="https://opensource.org/licenses/Apache-2.0">Apache 2.0</a></sub>
