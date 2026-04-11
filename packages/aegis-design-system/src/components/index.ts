// Re-export component paths for documentation/discoverability.
// Astro components are imported directly by path:
//   import Aside from '@aegis-initiative/design-system/components/Aside.astro';

export const components = [
  "Aside",
  "AegisLogo",
  "AegisWordmark",
  "Breadcrumb",
  "Footer",
  "Header",
  "PrevNext",
  "Search",
] as const;

export type ComponentName = (typeof components)[number];
