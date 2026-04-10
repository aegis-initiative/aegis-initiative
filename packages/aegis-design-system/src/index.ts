// AEGIS Design System — Main Entry Point
//
// Tokens (JS constants):
//   import { brand, light, dark, spacing, fontFamily } from '@aegis-initiative/design-system';
//
// CSS (import in your layout or global styles):
//   import '@aegis-initiative/design-system/css/tokens.css';
//   import '@aegis-initiative/design-system/css/reset.css';
//   import '@aegis-initiative/design-system/css/fonts.css';
//
// Astro components (import individually):
//   import Aside from '@aegis-initiative/design-system/components/Aside.astro';

export * from "./tokens/index.js";
export { components } from "./components/index.js";
export type { ComponentName } from "./components/index.js";
