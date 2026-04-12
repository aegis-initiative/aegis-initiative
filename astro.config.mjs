// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { readSiteVersion } from '@aegis-initiative/design-system/build';

// Version is read from the committed VERSION file at the repo root.
// The Header component in @aegis-initiative/design-system reads
// `import.meta.env.AEGIS_VERSION`, which is populated here before
// Astro/Vite loads its env files.
//
// Note: this site hosts the design-system monorepo but its own
// release cadence is independent of the package version — this
// VERSION file tracks the site, not the package.
process.env.AEGIS_VERSION = readSiteVersion();

// https://astro.build/config
export default defineConfig({
  site: 'https://aegis-initiative.com',
  integrations: [mdx()],
});
