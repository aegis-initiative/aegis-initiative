/**
 * AEGIS Design System — Breakpoint Tokens
 */

/** Named breakpoints in pixels. */
export const breakpoints = {
  mobile: 0,
  tablet: 560,
  desktop: 1024,
  wide: 1367,
} as const;

/** Media query strings for each breakpoint (min-width). */
export const mediaQueries = {
  tablet: "(min-width: 560px)",
  desktop: "(min-width: 1024px)",
  wide: "(min-width: 1367px)",
} as const;
