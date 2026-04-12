// AEGIS Design System — build-time utilities
//
// Import via the `./build` subpath export:
//
//   import { readSiteVersion } from "@aegis-initiative/design-system/build";
//
// Kept in a dedicated subpath to make the split between runtime
// concerns (tokens, components) and build-time concerns (version
// resolution, future additions) explicit.

export {
  readSiteVersion,
  readSiteVersionFile,
} from "./version.js";

export type {
  SiteVersion,
  ResolveSiteVersionOptions,
} from "./version.js";
