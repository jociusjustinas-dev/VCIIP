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

/** Approved primary menu order from Excel (Home is not a header item). */
export const primaryNavItems: NavLink[] = [
  { label: "Apie VCIIP", href: "/apie-vciip" },
  { label: "VCIIP Bio", href: "/ekosistema" },
  { label: "VCIIP Tech", href: "/tech" },
  { label: "Įsikūrimas VCIIP", href: "/isikurimas" },
  { label: "Operatorius", href: "/operatorius" },
  { label: "Klientai", href: "/klientai" },
  { label: "Kontaktai", href: "/kontaktai" },
];

/** @deprecated Prefer primaryNavItems — kept for in-page Bio anchors during migration */
export const bioNavGroup: NavGroup = {
  id: "bio",
  label: "VCIIP Bio",
  pageHref: "/ekosistema",
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
  pageHref: "/tech",
  items: [
    { label: "Apie VCIIP Tech", href: "apie" },
    { label: "Sklypai", href: "sklypai" },
    { label: "Patalpos", href: "patalpos" },
    { label: "Privalumai", href: "privalumai" },
  ],
};

/** @deprecated Replaced by primaryNavItems */
export const sharedNavItems: NavLink[] = primaryNavItems;

export function getHubHrefFromPath(currentPath: string) {
  const path = currentPath.replace(/\/$/, "") || "/";

  if (path === "/ekosistema" || path === "/bio") return "/ekosistema";
  if (path === "/tech") return "/tech";
  return "/";
}

export function getBrandVariantFromPath(currentPath: string): "vciip" | "bio" | "tech" {
  const path = currentPath.replace(/\/$/, "") || "/";

  if (path === "/ekosistema" || path === "/bio") return "bio";
  if (path === "/tech") return "tech";
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

  return path === "/ekosistema" || path === "/bio" || usesVciipIndexTheme(path);
}

/** @deprecated Use getHubHrefFromPath instead */
export function getHubHref(variant: "vciip" | "bio" | "tech") {
  if (variant === "bio") return "/ekosistema";
  if (variant === "tech") return "/tech";
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
