# Brand Assets & Design System

This directory documents the AEGIS Initiative's brand identity and design decisions.
The design system is implemented in the [`@aegis-initiative/design-system`][package]
package at [`packages/aegis-design-system/`][package-path].

[package]: https://github.com/aegis-initiative/aegis-initiative/tree/main/packages/aegis-design-system
[package-path]: ../packages/aegis-design-system/

## Where things live

**This directory (`brand/`)** — design *decisions* and *rationale*:

- [`brand-guide.md`](brand-guide.md) — Trademark usage, logo clear space, permitted marks
- [`design-tokens.md`](design-tokens.md) — Token values and the rationale behind each choice
- [`component-library.md`](component-library.md) — Component catalog and usage patterns

**Package (`packages/aegis-design-system/`)** — design *implementation*:

- `src/css/tokens.css` — CSS custom properties (light + dark theme)
- `src/css/reset.css` — Base reset + typography
- `src/css/fonts.css` — `@font-face` declarations
- `src/tokens/` — JS/TS token constants (colors, typography, spacing, breakpoints, surfaces)
- `src/components/` — Reusable Astro components

The brand documents are the source of truth for *what* and *why*; the package is the
source of truth for *how*. When they conflict, update the package to match the
brand docs, then bump the package version.

## Consuming the design system

Sites inside this monorepo consume the package directly:

```json
{
  "dependencies": {
    "@aegis-initiative/design-system": "file:../aegis-initiative/packages/aegis-design-system"
  }
}
```

Once published to a registry, external consumers can install via:

```bash
npm install @aegis-initiative/design-system
```

Import CSS in your layout:

```css
@import '@aegis-initiative/design-system/css/fonts.css';
@import '@aegis-initiative/design-system/css/tokens.css';
@import '@aegis-initiative/design-system/css/reset.css';
```

Import components directly by path:

```astro
---
import AegisLogo from '@aegis-initiative/design-system/components/AegisLogo.astro';
import Aside from '@aegis-initiative/design-system/components/Aside.astro';
---
```

For full consumer documentation, see the [package README][package-readme].

[package-readme]: ../packages/aegis-design-system/README.md

## Contributing

To change a token or component:

1. Update the rationale in the relevant `brand/*.md` file
2. Update the implementation in `packages/aegis-design-system/src/`
3. Bump the package version in `packages/aegis-design-system/package.json`
4. Open a PR referencing both changes

## Usage

All AEGIS brand assets are proprietary to **Finnoybu IP LLC**. Use of AEGIS™ marks,
logos, or brand elements in derivative works requires explicit written permission.
See [`brand-guide.md`](brand-guide.md) for trademark rules and the org-level
[LICENSE](../LICENSE) for full terms.
