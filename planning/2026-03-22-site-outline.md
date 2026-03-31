# AEGIS Initiative — Site Outline

**Version:** 1.0
**Date:** March 22, 2026
**Status:** Planning / Pre-build

---

## Overview

This document defines the planned structure and content scope for the
aegis-initiative public website. The site serves as the public face of
the AEGIS Initiative organization — its PR, policy engagement, published
analysis, and press presence.

**Stack (planned):** Astro + Tailwind CSS + MDX
**Aesthetic:** Document-first, editorial, W3C/NIST-style
**RSS:** Master feed on day one. Split into Policy and Press feeds if volume warrants.

---

## Site Structure

### Home

- Mission statement
- Brief org description
- Current focus / what AEGIS is working on now
- Links to key sections
- RSS feed link

---

### About

- What AEGIS is
- The three-layer architecture (constitution / governance / initiative)
- Founding principles
- Non-partisan mandate
- **How We Work** — human-directed, AI-collaborated
  - Acknowledge the AI collaboration stack openly
  - Ken Sturrock — principal and founder
  - AI tools — ChatGPT, DALL-E, MidJourney, Claude.ai, Claude Code

---

### The Constitution

- Brief description of the AEGIS Constitution
- Link to aegis-constitution.com
- Version history and submission record
- NIST submission acknowledgment (submitted as independent position paper)

---

### Policy & Research

*Audience: policymakers, academics, standards bodies, researchers*

- Published papers (with DOI / Zenodo links where applicable)
- NIST submissions and public comments
- IEEE paper (when published)
- Policy responses and public comments
- Congressional engagement and open letters
- RSS feed

---

### Press

*Audience: journalists, LinkedIn followers, general public*

- Published articles (LinkedIn and other platforms)
- Press releases
- Media kit
  - Approved logos and marks
  - Brand usage guidelines
  - Press-ready images
  - Press contact
- RSS feed

---

### News & Updates

- Unified timestamped feed of all AEGIS activity
- New publications
- Policy developments AEGIS is responding to
- **Primary RSS feed** (master feed covering all content types)

---

### Contact

- General contact
- Press inquiries
- Policy engagement and collaboration requests

---

## Content Already Ready to Publish

The following documents are complete and ready to drop into the site on launch:

| Document | Section | Status |
|---|---|---|
| White House AI Framework Response | Press / Policy | Ready |
| NIST Formal Comment | Policy & Research | Ready (review pending) |
| Congressional Open Letter | Policy & Research | Ready (review pending) |
| AEGIS Constitution | The Constitution | Live at aegis-constitution.com |

---

## RSS Strategy

- **Master feed** — all publications, policy responses, press releases, and updates in a single feed. Launch with this.
- **Split feeds** (future) — separate Policy & Research and Press feeds if content volume warrants subscriber
segmentation.
- Every publication gets a timestamp, version number, and permanent URL on day one.

---

## Open Questions

- [ ] Domain for aegis-initiative site (aegis-initiative.org? aegisinitiative.org? subdomain of aegis-constitution.com?)
- [ ] Newsletter / mailing list (not yet — RSS first)
- [ ] Whether aegissystems.app gets repurposed as aegis-docs or retired
- [ ] Zenodo / DOI deposit workflow for published papers
- [ ] Whether aegis-platform warrants a product landing page as a subdomain of this site

---

## Related Repos

| Repo | Visibility | Purpose |
|---|---|---|
| aegis-initiative | Public | This site. Org home, PR, policy, press |
| aegis-constitution | Public | Canonical Digital Constitution |
| aegis-governance | Public | Governance enforcement architecture |
| aegis-docs | Public | Developer and operator documentation |
| aegis-sdk | Public | TypeScript/JS and Python client libraries |
| aegis | Private | Monorepo root, doctrine, ADRs |
| aegis-core | Private | Core application and governance runtime |
| aegis-platform | Private | Hosted platform and operator UI |
| aegis-labs | Private | R&D and experimental governance |
| aegis-ops | Private | CI/CD, infrastructure, deployment |
| aegis-brand | Private | Brand assets, logos, images, media kit |
