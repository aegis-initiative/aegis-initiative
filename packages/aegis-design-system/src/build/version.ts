// AEGIS Design System — build-time version resolver
//
// Reads a committed `VERSION` file at the repo root and returns the
// release tag recorded there. Intended to be called from each site's
// `astro.config.mjs` at build time so the Header component's
// `AEGIS_VERSION` env var always matches the most recent release
// tag cut by the nightly rollup.
//
// Why a file and not git tags:
//   1. Works under shallow clones (Cloudflare Pages default).
//   2. No shell, no globs, no cross-platform quoting issues.
//   3. Release notes, VERSION file, and release tag are committed
//      together in the nightly rollup commit — they never disagree.
//   4. Auditable via `git log VERSION`.
//   5. Usable by tools that don't speak git (CI steps, Docker builds,
//      deploy scripts that read raw JSON).
//
// VERSION file shape:
//
//   {
//     "tag": "v26.4.11",
//     "commit": "14bf3eb",
//     "released_at": "2026-04-12T10:29:29Z"
//   }
//
// Only the `tag` field is required for this function. Additional
// fields are free-form metadata the site can read directly if
// needed.

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export interface SiteVersion {
  tag: string;
  commit?: string;
  released_at?: string;
  [key: string]: unknown;
}

export interface ResolveSiteVersionOptions {
  /**
   * Directory to resolve the VERSION file from.
   *
   * Defaults to `process.cwd()`, which is the site's repo root at
   * build time. Override for monorepos or when running from a
   * subdirectory.
   */
  cwd?: string;

  /**
   * Fallback value when the VERSION file is missing, unreadable,
   * or malformed.
   *
   * Defaults to `"dev"`.
   */
  fallback?: string;

  /**
   * Name of the VERSION file at the repo root.
   *
   * Defaults to `"VERSION"`. Override if a site uses a different
   * filename (unusual).
   */
  filename?: string;
}

/**
 * Read the full VERSION file contents as a parsed JSON object.
 *
 * Returns `null` if the file is missing or cannot be parsed.
 * Use `readSiteVersion()` if you only need the tag string.
 *
 * @example
 * ```ts
 * import { readSiteVersionFile } from "@aegis-initiative/design-system/build";
 *
 * const version = readSiteVersionFile();
 * if (version) {
 *   console.log(version.tag, version.commit, version.released_at);
 * }
 * ```
 */
export function readSiteVersionFile(
  options: ResolveSiteVersionOptions = {},
): SiteVersion | null {
  const cwd = options.cwd ?? process.cwd();
  const filename = options.filename ?? "VERSION";

  try {
    const raw = readFileSync(resolve(cwd, filename), "utf8");
    const parsed = JSON.parse(raw);
    if (typeof parsed === "object" && parsed !== null && typeof parsed.tag === "string") {
      return parsed as SiteVersion;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Resolve the site's release tag at build time.
 *
 * Reads the `VERSION` file at the repo root and returns the `tag`
 * field. Falls back to `"dev"` (or a caller-supplied default) if
 * the file is missing, unparseable, or lacks a tag.
 *
 * Typical usage in `astro.config.mjs`:
 *
 * ```js
 * import { readSiteVersion } from "@aegis-initiative/design-system/build";
 *
 * process.env.AEGIS_VERSION = readSiteVersion();
 *
 * export default defineConfig({ ... });
 * ```
 *
 * The mutation of `process.env.AEGIS_VERSION` before Astro/Vite
 * loads its env files ensures the Header component's
 * `import.meta.env.AEGIS_VERSION` read returns the correct value.
 *
 * @example
 * ```ts
 * readSiteVersion();                           // → "v26.4.11"
 * readSiteVersion({ fallback: "unreleased" }); // → "unreleased" if VERSION missing
 * readSiteVersion({ cwd: "/custom/path" });    // → read from a non-cwd directory
 * ```
 */
export function readSiteVersion(
  options: ResolveSiteVersionOptions = {},
): string {
  const fallback = options.fallback ?? "dev";
  const parsed = readSiteVersionFile(options);
  return parsed?.tag ?? fallback;
}
