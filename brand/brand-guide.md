# AEGIS Brand Guide

> Official brand usage guidelines for the AEGIS Initiative.
> All brand assets are owned by Finnoybu IP LLC.

---

## Trademark

**AEGIS** is a trademark of Finnoybu IP LLC. Use the trademark symbol (TM) on first mention in any document, page, or context:

- First use: **AEGIS(TM)** or **AEGIS™**
- Subsequent uses in the same document: **AEGIS** (no symbol needed)
- In HTML: `AEGIS&trade;` or the Unicode character `™`

Never use "Aegis" or "aegis" in running text when referring to the brand. The name is always fully capitalized: **AEGIS**.

---

## Logo

The AEGIS logo consists of two elements:

1. **Shield** -- the outer protective outline (rendered in brand gray `--color-brand-gray`)
2. **Diamond** -- the inner geometric form (rendered in accent blue `--color-accent`)

The shield represents protection and governance. The diamond represents clarity and precision.

### Logo Assets

Source assets are in the branding kit. Repository-ready SVGs are in `assets/`:

| File | Usage |
|------|-------|
| `assets/AEGIS_logo_aegis-initiative.svg` | Full-color logo for general use |

### Logo Variants

| Variant | Shield | Diamond | Background |
|---------|--------|---------|------------|
| Full color | `#777777` (brand gray) | `#0084e7` (brand blue) | Transparent / light |
| Dark background | `#999999` | `#4da6f0` | Dark (`#161616`) |
| Monochrome black | `#161616` | `#161616` | Light backgrounds |
| Monochrome white | `#ffffff` | `#ffffff` | Dark backgrounds |

Source files for monochrome variants are in the branding kit under `Monochrome Logo File/`.

### Minimum Size

- **Digital:** 24px height minimum
- **Print:** 12mm height minimum
- The logo must remain legible; the diamond detail inside the shield is the limiting factor

### Clear Space

Maintain a clear space around the logo equal to the height of the diamond element (approximately 60% of total logo
height). No text, graphics, or other logos should intrude into this space.

```
    ┌─────────────────────┐
    │     clear space      │
    │   ┌─────────────┐   │
    │   │   /\  shield │   │
    │   │  /  \        │   │
    │   │ / <> \       │   │
    │   │ \    /       │   │
    │   │  \  /        │   │
    │   │   \/         │   │
    │   └─────────────┘   │
    │     clear space      │
    └─────────────────────┘
```

---

## Wordmark

The AEGIS wordmark combines the logo with the "AEGIS" text set alongside. It is the preferred representation when
horizontal space allows.

### Wordmark Assets

| File | Usage |
|------|-------|
| `assets/AEGIS_wordmark.svg` | Full-color wordmark (default) |
| `assets/AEGIS_wordmark_dark.svg` | For use on dark backgrounds |
| `assets/AEGIS_wordmark_light.svg` | Light/white variant |

### Wordmark Variants

| Variant | Text + Shield | Diamond | Background |
|---------|--------------|---------|------------|
| Default | Brand gray (`#777777` / `--color-brand-gray`) | Accent blue (`--color-accent`) | Light |
| Dark background | Light gray / white | Light blue (`#4da6f0`) | Dark |
| Light (white) | White | White | Dark or colored backgrounds |

### Minimum Size

- **Digital:** 80px width minimum (wordmark must be legible)
- **Print:** 30mm width minimum

---

## Logo Misuse

Do not:

- Rotate, skew, or distort the logo or wordmark
- Change the relative proportions of shield and diamond
- Apply drop shadows, gradients, or effects not defined in this guide
- Place the logo on busy or low-contrast backgrounds
- Recreate the logo in a different typeface
- Separate the diamond from the shield
- Use the logo as a pattern or texture

---

## Color Usage

Refer to [design-tokens.md](design-tokens.md) for the complete color palette.

### Primary Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Brand Black | `#161616` | Text, dark backgrounds |
| Brand Gray | `#777777` | Shield, borders, muted elements |
| Brand Blue | `#0084e7` | Diamond, accent, interactive elements |

### Accessibility-Adjusted Values

In UI contexts (websites, applications), brand colors are adjusted for WCAG 2.1 AA compliance:

- Brand Blue becomes `#0062a5` on light backgrounds (7:1 contrast)
- Brand Gray becomes `#595959` for text on light backgrounds (7:1 contrast)
- Brand Blue becomes `#4da6f0` on dark backgrounds

Always use the CSS custom properties (`--color-accent`, `--color-brand-gray`, etc.) rather than raw hex values so themes
are respected automatically.

---

## Typography

### Primary Fonts

| Role | Family | Source |
|------|--------|--------|
| Headings | **IBM Plex Sans** | Google Fonts / self-hosted variable WOFF2 |
| Body | **Poppins** | Google Fonts / self-hosted static WOFF2 |

### Supplementary Fonts (Branding Kit)

The branding kit includes these additional families for print, marketing, and extended use:

- **Barlow Condensed** -- condensed headlines, data-dense layouts
- **Inter** -- UI alternative, system-font substitute
- **Open Sans** -- general-purpose web alternative
- **Univers** -- print and formal documents

### Usage Rules

- Headings are always set in **IBM Plex Sans** at weight 400 (regular)
- Body text is set in **Poppins** at weight 300 (light) by default
- Never use more than two type families in a single layout
- Minimum body text size: 14px (mobile), 16px (desktop)

---

## Favicon and Icons

The branding kit includes six icon variants (`Icon 1` through `Icon 6`) in AI, JPG, PNG, and SVG formats. The primary
favicon uses the shield+diamond mark as an SVG (`favicon.svg`).

A 16x16 brand icon is also available in the branding kit under `Brand Icon (16 by 16)/`.

---

## Social and OG Images

- Open Graph image: `1200x630` at `/OG_image.png`
- The branding kit includes a full social media kit under `Social Media Kit/` and `Social Media Post/`
- Email signature templates are in `Email Signature/`

---

## File Naming Convention

Brand asset files follow this pattern:

```
AEGIS_{type}_{variant}.{ext}
```

Examples:

- `AEGIS_logo_aegis-initiative.svg`
- `AEGIS_wordmark.svg`
- `AEGIS_wordmark_dark.svg`
- `AEGIS_wordmark_light.svg`
