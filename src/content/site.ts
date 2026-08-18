export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  id: "bio" | "tech";
  label: string;
  pageHref: string;
  items: NavLink[];
};

export const BIO_HUB_PATH = "/vciip-bio";
export const TECH_HUB_PATH = "/vciip-tech";
export const BIO_HUB_ALIASES = [BIO_HUB_PATH, "/ekosistema", "/bio"] as const;
export const TECH_HUB_ALIASES = [TECH_HUB_PATH, "/tech"] as const;

function normalizeAppPath(currentPath: string) {
  return currentPath.replace(/\/$/, "") || "/";
}

export function isBioHubPath(currentPath: string) {
  return (BIO_HUB_ALIASES as readonly string[]).includes(normalizeAppPath(currentPath));
}

export function isTechHubPath(currentPath: string) {
  return (TECH_HUB_ALIASES as readonly string[]).includes(normalizeAppPath(currentPath));
}

/** Approved primary menu order from Excel (Home is not a header item). */
export const primaryNavItems: NavLink[] = [
  { label: "Apie VCIIP", href: "/apie-vciip" },
  { label: "VCIIP Bio", href: BIO_HUB_PATH },
  { label: "VCIIP Tech", href: TECH_HUB_PATH },
  { label: "Įsikūrimas VCIIP", href: "/isikurimas" },
  { label: "Operatorius", href: "/operatorius" },
  { label: "Klientai", href: "/klientai" },
  { label: "Kontaktai", href: "/kontaktai" },
];

/** @deprecated Prefer primaryNavItems — kept for in-page Bio anchors during migration */
export const bioNavGroup: NavGroup = {
  id: "bio",
  label: "VCIIP Bio",
  pageHref: BIO_HUB_PATH,
  items: [
    { label: "Apie VCIIP Bio", href: "apie" },
    { label: "Sklypai", href: "sklypai" },
    { label: "Patalpos", href: "patalpos" },
    { label: "Privalumai", href: "privalumai" },
  ],
};

/** @deprecated Prefer primaryNavItems — kept for in-page Tech anchors during migration */
export const techNavGroup: NavGroup = {
  id: "tech",
  label: "VCIIP Tech",
  pageHref: TECH_HUB_PATH,
  items: [
    { label: "Apie VCIIP Tech", href: "apie" },
    { label: "Sklypai", href: "sklypai" },
    { label: "Patalpos", href: "patalpos" },
    { label: "Privalumai", href: "privalumai" },
  ],
};

/** @deprecated Replaced by primaryNavItems */
export const sharedNavItems: NavLink[] = primaryNavItems;

export function getHubHrefFromPath(_currentPath: string) {
  return "/";
}

export function getBrandVariantFromPath(currentPath: string): "vciip" | "bio" | "tech" {
  if (isBioHubPath(currentPath)) return "bio";
  if (isTechHubPath(currentPath)) return "tech";
  return "vciip";
}

export function usesVciipIndexTheme(currentPath: string) {
  const path = currentPath.replace(/\/$/, "") || "/";

  return (
    path === "/" ||
    path === "/kodel-vilnius" ||
    path === "/apie-vciip" ||
    path === "/kontaktai" ||
    path === "/isikurimas" ||
    path === "/operatorius" ||
    path === "/klientai" ||
    path === "/naujienos" ||
    path.startsWith("/naujienos/")
  );
}

export function usesLegacyGreenTheme(currentPath: string) {
  const path = currentPath.replace(/\/$/, "") || "/";

  return isBioHubPath(path) || usesVciipIndexTheme(path);
}

/** @deprecated Use getHubHrefFromPath instead */
export function getHubHref(variant: "vciip" | "bio" | "tech") {
  if (variant === "bio") return BIO_HUB_PATH;
  if (variant === "tech") return TECH_HUB_PATH;
  return "/";
}

export function resolveNavHref(pageHref: string, anchor: string) {
  if (anchor.startsWith("/") || anchor.startsWith("#")) return anchor;
  return `${pageHref}#${anchor}`;
}

/** Home / Apie shared headline stats from Excel Titulinis */
export const stats = [
  { value: "281+ mln. €", label: "pritraukta investicijų" },
  { value: "30+", label: "investuotojų" },
  { value: "700+", label: "naujų darbo vietų" },
];

export const processSteps = [
  "Paraiškos pateikimas",
  "Paraiškos vertinimas",
  "Sprendimas",
  "Sutarčių pasirašymas",
  "Įsikūrimas",
];
