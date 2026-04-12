# AEGIS Component Library

> Catalog of shared Astro components in the AEGIS design system.
> Source: [`packages/aegis-design-system/src/components/`](../packages/aegis-design-system/src/components/)

Components are published as part of the [`@aegis-initiative/design-system`][package]
package and consumed by all AEGIS sites via direct path imports:

```astro
---
import Aside from '@aegis-initiative/design-system/components/Aside.astro';
import AegisLogo from '@aegis-initiative/design-system/components/AegisLogo.astro';
---
```

For installation, CSS imports, and package-level docs, see the
[package README](../packages/aegis-design-system/README.md).

[package]: ../packages/aegis-design-system/

## Components at a glance

| Component | Package | Purpose |
|-----------|---------|---------|
| [`Aside`](#aside) | ✓ | Contextual callout box (doctrine/application/constraint/prohibition) |
| [`Breadcrumb`](#breadcrumb) | ✓ | Horizontal breadcrumb navigation |
| [`PrevNext`](#prevnext) | ✓ | Sequential page navigation (previous/next cards) |
| [`AegisLogo`](#aegislogo) | ✓ | Inline SVG shield+diamond mark |
| [`AegisWordmark`](#aegiswordmark) | ✓ | Inline SVG wordmark (logo + "AEGIS" text) |
| [`Header`](#header) | ✓ | Site header chrome (logo, search, theme toggle) |
| [`Footer`](#footer) | ✓ | Site footer (author, copyright, legal links) |
| [`Search`](#search) | ✓ | Full-text site search powered by Pagefind |
| [`TableOfContents`](#tableofcontents) | — | Rail + dropdown "On this page" navigation (per-site, see #7) |

The detailed sections below document the components in depth. `Header`, `Footer`,
and `Search` were added to the package after the initial audit and are
documented in the [package README](../packages/aegis-design-system/README.md).

---

## Aside

Contextual callout box with a colored left border, background tint,
and AEGIS shield icon. Used to highlight governance-specific content
types.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `type` | `'doctrine' \| 'application' \| 'constraint' \| 'prohibition'` | Yes | -- | Determines color scheme and label |

### Visual Variants

| Type | Label | Light Colors | Dark Colors | Semantic Meaning |
|------|-------|-------------|-------------|------------------|
| `doctrine` | Doctrine | Blue border + `#E9F0F8` bg | `#73b3e7` border + `#162e51` bg | Core governance principles |
| `application` | Application | `#006B2D` border + `#E9F8EF` bg | `#73E7A3` border + `#16512F` bg | How doctrine is applied |
| `constraint` | Constraint | `#855400` border + `#F8F2E9` bg | `#E7BC73` border + `#513B16` bg | Limitations and boundaries |
| `prohibition` | Prohibition | `#A5000B` border + `#F8E9EA` bg | `#EC8E94` border + `#51161A` bg | Explicitly forbidden actions |

### Usage

```astro
---
import Aside from '@aegis-initiative/design-system/components/Aside.astro';
---

<Aside type="doctrine">
  <p>This is a core governance principle that applies across all AEGIS systems.</p>
</Aside>

<Aside type="prohibition">
  <p>Autonomous systems must not override human decisions without explicit authorization.</p>
</Aside>
```


---

## Breadcrumb

Horizontal breadcrumb navigation bar. Displays a configurable home
label (hidden on mobile) followed by a configurable trail of links.
The current page (last item) renders as plain text with
`aria-current="page"`.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | `BreadcrumbItem[]` | Yes | -- | Array of breadcrumb segments |

#### BreadcrumbItem

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | `string` | Yes | Display text |
| `href` | `string` | No | Link URL (omit for current page) |

### Usage

```astro
---
import Breadcrumb from '@aegis-initiative/design-system/components/Breadcrumb.astro';
---

<Breadcrumb items={[
  { label: 'Articles', href: '/articles' },
  { label: 'Article I' },
]} />
```

### Behavior

- Home link label and href are configurable via `homeLabel` and `homeHref` props
- Home link hidden below 560px to save space
- Chevron separators rendered as inline SVGs
- Last item renders as `<span>` (not a link)


---

## PrevNext

Sequential navigation links displayed at the bottom of content pages.
Renders as two cards (Previous / Next) with directional chevron icons.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prev` | `NavItem` | No | -- | Previous page link |
| `next` | `NavItem` | No | -- | Next page link |

#### NavItem

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | `string` | Yes | Page title |
| `href` | `string` | Yes | Link URL |

### Usage

```astro
---
import PrevNext from '@aegis-initiative/design-system/components/PrevNext.astro';
---

<PrevNext
  prev={{ label: 'Preamble', href: '/preamble' }}
  next={{ label: 'Article II', href: '/articles/article-ii' }}
/>
```

### Behavior

- Renders nothing if neither `prev` nor `next` is provided
- Cards are stacked vertically on mobile, side-by-side on desktop (1024px+)
- Each card shows a "Previous"/"Next" label in uppercase with the page title below
- Hover state: accent border + accent-low background
- Focus state: 2px accent outline


---

## Search

Full-text search powered by Pagefind. Includes a trigger button (desktop
only), a full-screen modal dialog, Pagefind UI integration, and a recent
searches panel with local storage persistence.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `placeholder` | `string` | No | `'Search'` | Input placeholder text |
| `showImages` | `boolean` | No | `false` | Show result thumbnails |

### Usage

```astro
---
import Search from '@aegis-initiative/design-system/components/Search.astro';
---

<Search placeholder="Search the constitution..." />
```

### Behavior

- **Trigger button:** Visible at 1024px+ in the header bar. Shows search
  icon, "Search" label, and `Ctrl+K` / `Cmd+K` shortcut badge
- **Keyboard shortcut:** `Ctrl+K` / `Cmd+K` toggles the modal. Platform auto-detected
- **Modal:** Full-screen on mobile, centered 40rem dialog on desktop (50rem+)
- **Recent searches:** Stored in `localStorage` under
  `aegis-recent-searches`. Max 5 entries. Shown when input is empty.
  Individual entries can be removed
- **Results:** Pagefind UI with tree-diagram sub-results (vertical + horizontal branch lines)
- **Mobile integration:** Pairs with a `#search-open` button in Header.astro for mobile trigger

### Dependencies

- `@pagefind/default-ui` (CSS imported in frontmatter)
- Pagefind index built at `/pagefind/` during site build


---

## TableOfContents

Dual-mode table of contents: a fixed right rail on wide screens
(1367px+) and a dropdown panel on mid-width screens (1024-1366px).
Headings are extracted client-side from `.main-content h2` elements.

### Props

None. All content is generated client-side via DOM traversal.

### Usage

```astro
---
import TableOfContents from '../components/TableOfContents.astro';
---

<!-- Included in DocLayout.astro; renders automatically -->
<TableOfContents />
```

> **Note:** `TableOfContents` is not yet part of the design system package —
> each site currently maintains its own copy in `src/components/`. Migration
> to the shared package is tracked in
> [aegis-initiative#7](https://github.com/aegis-initiative/aegis-initiative/issues/7).

### Behavior

- **Rail mode** (1367px+): Fixed right sidebar, 320px wide. Vertical
  border-left with active indicator
- **Dropdown mode** (1024-1366px): A button labeled "On this page" is
  injected into the header tools area. Clicking it toggles a dropdown
  overlay
- **Hidden** below 1024px (no ToC on mobile)
- **Scroll spy:** IntersectionObserver highlights the current heading. Root margin: `-10% 0px -80% 0px`
- **Auto-ID:** If a heading lacks an `id`, one is generated from its text content
- **Click behavior:** Scrolls to the HR above the heading (if present), accounting for fixed header height
- H3 headings are indented with smaller font size


---

## AegisLogo

Inline SVG rendering of the AEGIS shield+diamond logo mark. Colors are
driven by CSS custom properties, so the logo automatically adapts to
light/dark themes.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `number` | No | `32` | Height in pixels. Width is calculated from the original aspect ratio (443.721:478.328) |

### SVG Structure

- `#shield` path: filled with `var(--color-brand-gray)`
- `#diamond` path: filled with `var(--color-accent)`
- `aria-hidden="true"` -- decorative element

### Usage

```astro
---
import AegisLogo from '@aegis-initiative/design-system/components/AegisLogo.astro';
---

<AegisLogo size={48} />
```


---

## AegisWordmark

Inline SVG rendering of the full AEGIS wordmark (logo + "AEGIS" text).
Like AegisLogo, colors are driven by CSS custom properties for automatic
theme adaptation.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `height` | `number` | No | `32` | Height in pixels |
| `width` | `number` | No | Calculated | Width in pixels. If omitted, calculated from height using aspect ratio (450.101:645.785) |

### SVG Structure

- `#wordmark` path: "AEGIS" letterforms, filled with `var(--color-brand-gray)`
- `#shield` path: filled with `var(--color-brand-gray)`
- `#diamond` path: filled with `var(--color-accent)`
- `aria-hidden="true"` -- decorative element

### Usage

```astro
---
import AegisWordmark from '@aegis-initiative/design-system/components/AegisWordmark.astro';
---

<!-- Footer watermark -->
<AegisWordmark height={720} />

<!-- Compact header use -->
<AegisWordmark height={28} />
```

