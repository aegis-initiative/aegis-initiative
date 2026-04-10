/**
 * AEGIS Design System — Color Tokens
 *
 * Core brand colors and themed palettes as JS constants.
 * Use these for programmatic access (e.g., chart colors, dynamic styles).
 * For CSS, prefer the custom properties in tokens.css.
 */

/** Raw brand reference values (not theme-adjusted). */
export const brand = {
  black: "#161616",
  gray: "#777777",
  blue: "#0084e7",
} as const;

/** Light theme palette — WCAG 2.1 AA compliant. */
export const light = {
  bg: "#ffffff",
  bgSubtle: "#f5f5f5",
  bgMuted: "#eeeeee",

  border: "#d4d4d4",
  borderSubtle: "#e8e8e8",

  text: "#161616",
  textSecondary: "#595959",
  textMuted: "#595959",

  accent: "#0062a5",
  accentBrand: "#0062a5",
  accentLow: "#e8f4fd",
  accentHigh: "#005ea2",

  brandGray: "#595959",

  headerBg: "#fafafa",
  headerBorder: "#777777",
  headerText: "#707070",
  headerTextMuted: "#707070",
  sidebarBg: "#ffffff",
  subheaderBg: "#005a9e",
  subheaderText: "#ffffff",

  searchModalBg: "rgba(10, 22, 40, 0.5)",
  searchDialogBg: "#ffffff",
  searchBorder: "#d4d4d4",
  searchAccent: "#0062a5",
  searchText: "#161616",
  searchShortcutBg: "#eeeeee",
} as const;

/** Dark theme palette — WCAG 2.1 AA compliant. */
export const dark = {
  bg: "#161616",
  bgSubtle: "#1e1e1e",
  bgMuted: "#2a2a2a",

  border: "#3a3a3a",
  borderSubtle: "#2a2a2a",

  text: "#e8e8e8",
  textSecondary: "#b0b0b0",
  textMuted: "#888888",

  accent: "#4da6f0",
  accentBrand: "#0084e7",
  accentLow: "#0d2640",
  accentHigh: "#4da6f0",

  brandGray: "#999999",

  headerBg: "#000000",
  headerBorder: "#000000",
  headerText: "#e8e8e8",
  headerTextMuted: "#999999",
  sidebarBg: "#161616",
  subheaderBg: "#005ea2",
  subheaderText: "#ffffff",

  searchModalBg: "rgba(10, 22, 40, 0.7)",
  searchDialogBg: "#161616",
  searchBorder: "#3a3a3a",
  searchAccent: "#4da6f0",
  searchText: "#e8e8e8",
  searchShortcutBg: "#2a2a2a",
} as const;

/** Aside semantic colors (keyed by aside type). */
export const aside = {
  doctrine: {
    light: { border: "#0062a5", bg: "#e9f0f8", text: "#0062a5" },
    dark: { border: "#73b3e7", bg: "#162e51", text: "#73b3e7" },
  },
  application: {
    light: { border: "#006b2d", bg: "#e9f8ef", text: "#006b2d" },
    dark: { border: "#73e7a3", bg: "#16512f", text: "#73e7a3" },
  },
  constraint: {
    light: { border: "#855400", bg: "#f8f2e9", text: "#855400" },
    dark: { border: "#e7bc73", bg: "#513b16", text: "#e7bc73" },
  },
  prohibition: {
    light: { border: "#a5000b", bg: "#f8e9ea", text: "#a5000b" },
    dark: { border: "#ec8e94", bg: "#51161a", text: "#ec8e94" },
  },
} as const;
