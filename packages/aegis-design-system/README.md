# @aegis-initiative/design-system

Shared design tokens, CSS custom properties, and Astro components for the AEGIS Initiative ecosystem.

## Install

```bash
# npm (from registry, once published)
npm install @aegis-initiative/design-system

# git dependency (before npm publish)
npm install aegis-initiative/aegis-initiative#main
```

Or add directly to `package.json`:

```json
{
  "dependencies": {
    "@aegis-initiative/design-system": "file:../aegis-initiative/packages/aegis-design-system"
  }
}
```

## Usage

### CSS Custom Properties

Import in your global layout or Astro component to get the full AEGIS token set. Tokens adapt automatically to light/dark themes via the `[data-theme]` attribute.

```css
/* In a global stylesheet or <style is:global> block */
@import '@aegis-initiative/design-system/css/tokens.css';
@import '@aegis-initiative/design-system/css/reset.css';
@import '@aegis-initiative/design-system/css/fonts.css';
```

Then use tokens in your CSS:

```css
.card {
  background: var(--color-bg-subtle);
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

.link {
  color: var(--color-accent);
}
```

### JS/TS Token Constants

For programmatic access (charts, dynamic styles, tooling):

```ts
import { brand, light, dark, spacing, fontFamily } from '@aegis-initiative/design-system';

console.log(brand.blue);        // "#0084e7"
console.log(light.accent);      // "#0062a5"
console.log(dark.accent);       // "#4da6f0"
console.log(spacing.md);        // "1rem"
console.log(fontFamily.heading); // '"IBM Plex Sans", system-ui, sans-serif'
```

Available token modules:

| Import | Contents |
|--------|----------|
| `@aegis-initiative/design-system/tokens/colors` | `brand`, `light`, `dark`, `aside` |
| `@aegis-initiative/design-system/tokens/typography` | `fontFamily`, `fontWeight`, `fontSize`, `lineHeight`, `letterSpacing`, `baseFontSize` |
| `@aegis-initiative/design-system/tokens/spacing` | `spacing`, `spacingPx` |
| `@aegis-initiative/design-system/tokens/breakpoints` | `breakpoints`, `mediaQueries` |
| `@aegis-initiative/design-system/tokens/surfaces` | `borderRadius`, `shadow`, `zIndex` |

### Astro Components

Import components individually:

```astro
---
import Aside from '@aegis-initiative/design-system/components/Aside.astro';
import AegisLogo from '@aegis-initiative/design-system/components/AegisLogo.astro';
import AegisWordmark from '@aegis-initiative/design-system/components/AegisWordmark.astro';
import Breadcrumb from '@aegis-initiative/design-system/components/Breadcrumb.astro';
import PrevNext from '@aegis-initiative/design-system/components/PrevNext.astro';
---

<Aside type="doctrine">
  <p>Core governance principle.</p>
</Aside>

<AegisLogo size={48} />

<AegisWordmark height={28} />

<Breadcrumb
  homeLabel="AEGIS Docs"
  items={[
    { label: 'Guides', href: '/guides' },
    { label: 'Getting Started' },
  ]}
/>

<PrevNext
  prev={{ label: 'Introduction', href: '/intro' }}
  next={{ label: 'Configuration', href: '/config' }}
/>
```

## Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Aside` | `type: 'doctrine' \| 'application' \| 'constraint' \| 'prohibition'` | Colored callout with AEGIS shield icon |
| `AegisLogo` | `size?: number` (default: 32) | Shield + diamond logo mark |
| `AegisWordmark` | `height?: number`, `width?: number` | Full logo + "AEGIS" text |
| `Breadcrumb` | `items: {label, href?}[]`, `homeLabel?: string`, `homeHref?: string` | Navigation breadcrumbs |
| `PrevNext` | `prev?: {label, href}`, `next?: {label, href}` | Previous/next page navigation |

## CSS Class Convention

Components use **unprefixed class names** (e.g., `.aside`, `.breadcrumb`, `.prev-next`) rather than
`aegis-` prefixed names. These components are consumed exclusively inside AEGIS Astro sites, which
use Astro's scoped styles. Namespace collisions are not a practical risk, and unprefixed classes
avoid migration friction for existing consumers.

If a component's CSS must be global (e.g., Search.astro overriding Pagefind UI), it uses element-id
specificity (`#aegis__search`) rather than class-name prefixing.

## Font Files

This package does **not** ship font files. Copy the WOFF2 files from any existing AEGIS site's `public/fonts/` directory into your own `public/fonts/`:

- `ibmplexsans-variablefont_wdthwght-webfont.woff2`
- `ibmplexsans-italic-variablefont_wdthwght-webfont.woff2`
- `poppins-light-webfont.woff2`
- `poppins-lightitalic-webfont.woff2`
- `poppins-regular-webfont.woff2`
- `poppins-italic-webfont.woff2`
- `poppins-medium-webfont.woff2`
- `poppins-mediumitalic-webfont.woff2`
- `poppins-semibold-webfont.woff2`
- `poppins-semibolditalic-webfont.woff2`

## Theme Support

Set `data-theme="light"` or `data-theme="dark"` on your `<html>` element. Use `data-theme="auto"` with the FOUC-prevention script:

```html
<script>
  const stored = localStorage.getItem("aegis-theme");
  const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.dataset.theme = stored || preferred;
</script>
```

## Contributing

Design tokens are defined in the brand guide at `brand/design-tokens.md`. When updating tokens:

1. Update `brand/design-tokens.md` (source of truth)
2. Update `src/css/tokens.css` (CSS custom properties)
3. Update `src/tokens/*.ts` (JS constants)
4. Bump the package version

## License

Apache-2.0. Brand assets are proprietary to Finnoybu IP LLC.
