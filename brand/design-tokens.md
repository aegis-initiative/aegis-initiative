# AEGIS Design Tokens

> Source of truth for all AEGIS visual design token values and their rationale.

This document specifies the design tokens that define the AEGIS visual system.
The values here are implemented in the [`@aegis-initiative/design-system`][package]
package — any change to a token value should be made in this document first,
then reflected in the package files:

- CSS custom properties: [`packages/aegis-design-system/src/css/tokens.css`][tokens-css]
- JS/TS constants: [`packages/aegis-design-system/src/tokens/`][tokens-ts]
- Font face declarations: [`packages/aegis-design-system/src/css/fonts.css`][fonts-css]

When consuming tokens in an AEGIS site, always use the CSS custom properties
(`var(--color-accent)`) or the TypeScript constants, **not** the raw hex values
in this document. The raw values are for reference and rationale only.

[package]: ../packages/aegis-design-system/
[tokens-css]: ../packages/aegis-design-system/src/css/tokens.css
[tokens-ts]: ../packages/aegis-design-system/src/tokens/
[fonts-css]: ../packages/aegis-design-system/src/css/fonts.css

---

## Color Palette

### Core Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Brand Black | `#161616` | Primary text, dark backgrounds |
| Brand Gray | `#777777` | Shield outline, header borders, muted chrome |
| Brand Blue | `#0084e7` | Raw brand blue (base reference, not used directly in UI) |

### Light Theme

| Token | Hex | Role |
|-------|-----|------|
| `--color-bg` | `#ffffff` | Page background |
| `--color-bg-subtle` | `#f5f5f5` | Subtle background (cards, panels) |
| `--color-bg-muted` | `#eeeeee` | Muted background (kbd, tags) |
| `--color-border` | `#d4d4d4` | Standard borders |
| `--color-border-subtle` | `#e8e8e8` | Light borders (hr, table rows) |
| `--color-text` | `#161616` | Primary text (brand black) |
| `--color-text-secondary` | `#595959` | Secondary text (7:1 on white) |
| `--color-text-muted` | `#595959` | Muted text (7:1 on white) |
| `--color-accent` | `#0062a5` | Links, active states (7:1 on white) |
| `--color-accent-brand` | `#0062a5` | Brand accent alias |
| `--color-accent-low` | `#e8f4fd` | Accent tint (hover backgrounds) |
| `--color-accent-high` | `#005ea2` | Accent dark (hover links) |
| `--color-brand-gray` | `#595959` | Brand gray adjusted for accessibility (7:1 on white) |

#### Light Chrome

| Token | Hex | Role |
|-------|-----|------|
| `--header-bg` | `#fafafa` | Header background |
| `--header-border` | `#777777` | Header border (brand gray) |
| `--header-text` | `#707070` | Header text (5:1 on #fafafa) |
| `--header-text-muted` | `#707070` | Muted header text |
| `--sidebar-bg` | `#ffffff` | Sidebar background |
| `--subheader-bg` | `#005a9e` | Subheader bar (dark accent) |
| `--subheader-text` | `#ffffff` | Subheader text |

#### Light Search

| Token | Hex | Role |
|-------|-----|------|
| `--search-modal-bg` | `rgba(10, 22, 40, 0.5)` | Modal overlay |
| `--search-dialog-bg` | `#ffffff` | Dialog background |
| `--search-border` | `#d4d4d4` | Dialog border |
| `--search-accent` | `#0062a5` | Search highlights |
| `--search-text` | `#161616` | Search text |
| `--search-shortcut-bg` | `#eeeeee` | Keyboard shortcut badges |

### Dark Theme

| Token | Hex | Role |
|-------|-----|------|
| `--color-bg` | `#161616` | Page background (brand black) |
| `--color-bg-subtle` | `#1e1e1e` | Subtle background |
| `--color-bg-muted` | `#2a2a2a` | Muted background |
| `--color-border` | `#3a3a3a` | Standard borders |
| `--color-border-subtle` | `#2a2a2a` | Subtle borders |
| `--color-text` | `#e8e8e8` | Primary text |
| `--color-text-secondary` | `#b0b0b0` | Secondary text |
| `--color-text-muted` | `#888888` | Muted text |
| `--color-accent` | `#4da6f0` | Links, active states (lighter blue for dark bg) |
| `--color-accent-brand` | `#0084e7` | Brand blue (true brand value) |
| `--color-accent-low` | `#0d2640` | Accent tint (hover backgrounds) |
| `--color-accent-high` | `#4da6f0` | Accent bright |
| `--color-brand-gray` | `#999999` | Brand gray (dark mode) |

#### Dark Chrome

| Token | Hex | Role |
|-------|-----|------|
| `--header-bg` | `#000000` | Header background |
| `--header-border` | `#000000` | Header border |
| `--header-text` | `#e8e8e8` | Header text |
| `--header-text-muted` | `#999999` | Muted header text |
| `--sidebar-bg` | `#161616` | Sidebar background |
| `--subheader-bg` | `#005ea2` | Subheader bar |
| `--subheader-text` | `#ffffff` | Subheader text |

#### Dark Search

| Token | Hex | Role |
|-------|-----|------|
| `--search-modal-bg` | `rgba(10, 22, 40, 0.7)` | Modal overlay |
| `--search-dialog-bg` | `#161616` | Dialog background |
| `--search-border` | `#3a3a3a` | Dialog border |
| `--search-accent` | `#4da6f0` | Search highlights |
| `--search-text` | `#e8e8e8` | Search text |
| `--search-shortcut-bg` | `#2a2a2a` | Keyboard shortcut badges |

### Aside Semantic Colors

Used by the `<Aside>` component for contextual callouts.

| Type | Light Border | Light BG | Dark Border | Dark BG |
|------|-------------|----------|-------------|---------|
| Doctrine (blue) | `--color-accent` | `#E9F0F8` | `#73b3e7` | `#162e51` |
| Application (green) | `#006B2D` | `#E9F8EF` | `#73E7A3` | `#16512F` |
| Constraint (amber) | `#855400` | `#F8F2E9` | `#E7BC73` | `#513B16` |
| Prohibition (red) | `#A5000B` | `#F8E9EA` | `#EC8E94` | `#51161A` |

---

## Typography

### Font Families

| Role | Family | Fallback Stack | Source |
|------|--------|---------------|--------|
| Headings | IBM Plex Sans | `system-ui, sans-serif` | Variable font (wdth + wght axes, 100-700) |
| Body | Poppins | `system-ui, sans-serif` | Static weights (300, 400, 500, 600) |

Both families are self-hosted as WOFF2 files. The branding kit also includes Barlow Condensed, Inter, Open Sans, and
Univers as supplementary brand fonts.

### Font Weights

#### IBM Plex Sans (Headings)

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | `400` | All headings (h1-h6), breadcrumb labels |

#### Poppins (Body)

| Weight | Value | Usage |
|--------|-------|-------|
| Light | `300` | Default body text |
| Regular | `400` | Body emphasis, search results |
| Medium | `500` | Active ToC links, PrevNext titles |
| Semi-Bold | `600` | Aside titles, labels, breadcrumb current page, table headers |

### Type Scale

Base font size: `14px` (mobile), `16px` (560px+).

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| `h1` | `2.5rem` | 400 | 1.3 | 0.01em |
| `h2` | `2rem` | 400 | 1.3 | 0.01em |
| `h3` | `1.5rem` | 400 | 1.3 | 0.01em |
| Body | `1rem` | 300 | 1.7 | -- |
| Small / ToC rail | `0.8125rem` | -- | 1.4 | -- |
| Caption / H3 ToC | `0.75rem` | -- | -- | -- |
| Footnotes | `0.875rem` | -- | 1.5 | -- |
| Breadcrumb | `0.8125rem` | 600 | -- | 0.02em |
| Aside title | `1.25rem` | 600 | -- | 0.02em |
| PrevNext label | `0.75rem` | 600 | -- | 0.06em (uppercase) |

### Font Loading Strategy

- **Preload** critical fonts: IBM Plex Sans variable, Poppins Light
- **`font-display: swap`** on all faces
- All font files served from `/fonts/` directory

---

## Spacing

Extracted from the constitution layout. Not yet formalized into a scale; these are the recurring values.

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | `0.25rem` (4px) | List item gap, tight padding |
| `sm` | `0.5rem` (8px) | Table cell padding, small gaps |
| `md` | `1rem` (16px) | Paragraph margin, general padding |
| `lg` | `1.5rem` (24px) | Section margins, list indent, hr margins |
| `xl` | `2rem` (32px) | Main content padding, h2 margin-top |
| `2xl` | `3rem` (48px) | PrevNext margin-top, watermark padding |

---

## Breakpoints

| Name | Width | Layout Change |
|------|-------|---------------|
| Mobile | `< 560px` | Base font 14px, home breadcrumb hidden |
| Tablet | `560px` | Base font 16px, full breadcrumb |
| Desktop | `1024px` | Fixed sidebar (320px), search bar visible, desktop PrevNext |
| Wide | `1367px` | Fixed ToC rail (320px), main content offset right |

---

## Border Radius

| Usage | Value |
|-------|-------|
| Search trigger | `0.5rem` |
| PrevNext cards | `8px` |
| ToC dropdown | `6px` |
| Search results | `0.3125rem` (scaled) |
| Keyboard shortcuts | `0.25rem` |

---

## Shadows

| Usage | Value |
|-------|-------|
| ToC dropdown | `0 4px 16px rgba(0, 0, 0, 0.15)` |
| Search modal | `0 8px 40px rgba(0, 0, 0, 0.35)` |

---

## Z-Index Scale

| Layer | Value | Element |
|-------|-------|---------|
| ToC rail | `30` | Right-side ToC |
| ToC dropdown | `200` | Mobile/tablet ToC overlay |
| Search modal | Browser `<dialog>` | Top layer |

---

## Accessibility

All color pairings meet WCAG 2.1 AA standards:

- Body text on background: `#161616` on `#ffffff` = 16.5:1
- Secondary text on background: `#595959` on `#ffffff` = 7:1
- Accent on background: `#0062a5` on `#ffffff` = 7:1
- Header text on header: `#707070` on `#fafafa` = 5:1
- Dark mode text on background: `#e8e8e8` on `#161616` = 12.6:1
- Dark mode accent on background: `#4da6f0` on `#161616` = 7.3:1
