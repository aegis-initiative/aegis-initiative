/**
 * AEGIS Design System — Surface Tokens (radii, shadows, z-index)
 */

export const borderRadius = {
  sm: "0.25rem",
  md: "0.3125rem",
  lg: "0.5rem",
  card: "8px",
  dropdown: "6px",
} as const;

export const shadow = {
  dropdown: "0 4px 16px rgba(0, 0, 0, 0.15)",
  modal: "0 8px 40px rgba(0, 0, 0, 0.35)",
} as const;

export const zIndex = {
  tocRail: 30,
  tocDropdown: 200,
} as const;
