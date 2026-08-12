/** Vite `base` (e.g. `/` or `/VCIIP/`). Always has a trailing slash when non-root. */
export function getBaseUrl(): string {
  return import.meta.env.BASE_URL || "/";
}

/**
 * Prefix a root-relative app path with the Vite base (needed for GitHub Pages).
 * Leaves absolute http(s), mailto, tel, hash-only, and already-prefixed paths alone.
 */
export function withBase(href: string): string {
  if (!href) return href;
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#") ||
    href.startsWith("data:") ||
    href.startsWith("//")
  ) {
    return href;
  }

  const base = getBaseUrl();
  if (base === "/") return href;

  const basePath = base.replace(/\/$/, "") || "";
  const hashIndex = href.indexOf("#");
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
  const withoutHash = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const queryIndex = withoutHash.indexOf("?");
  const query = queryIndex >= 0 ? withoutHash.slice(queryIndex) : "";
  const pathname = queryIndex >= 0 ? withoutHash.slice(0, queryIndex) : withoutHash;

  if (pathname === basePath || pathname.startsWith(`${basePath}/`)) {
    return href;
  }

  if (!pathname.startsWith("/")) {
    return `${base}${href}`.replace(/\/{2,}/g, "/");
  }

  const suffix = pathname === "/" ? "" : pathname;
  return `${basePath}${suffix}${query}${hash}` || basePath || "/";
}

/** App path without the Vite base prefix (`/operatorius`, `/`, …). */
export function getAppPath(pathname = typeof window !== "undefined" ? window.location.pathname : "/"): string {
  const basePath = getBaseUrl().replace(/\/$/, "");
  let path = pathname;

  if (basePath && (path === basePath || path.startsWith(`${basePath}/`))) {
    path = path.slice(basePath.length) || "/";
  }

  return path.replace(/\/$/, "") || "/";
}
