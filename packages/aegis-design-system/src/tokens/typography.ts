/**
 * AEGIS Design System — Typography Tokens
 */

export const fontFamily = {
  heading: '"IBM Plex Sans", system-ui, sans-serif',
  body: '"Poppins", system-ui, sans-serif',
} as const;

export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
} as const;

export const fontSize = {
  h1: "2.5rem",
  h2: "2rem",
  h3: "1.5rem",
  asideTitle: "1.25rem",
  body: "1rem",
  footnote: "0.875rem",
  small: "0.8125rem",
  caption: "0.75rem",
} as const;

export const lineHeight = {
  heading: 1.3,
  body: 1.7,
  footnote: 1.5,
  small: 1.4,
} as const;

export const letterSpacing = {
  heading: "0.01em",
  breadcrumb: "0.02em",
  asideTitle: "0.02em",
  prevNextLabel: "0.06em",
} as const;

/** Base font size by breakpoint. */
export const baseFontSize = {
  mobile: "14px",
  desktop: "16px",
} as const;
