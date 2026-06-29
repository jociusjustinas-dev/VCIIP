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

export const bioNavGroup: NavGroup = {
  id: "bio",
  label: "VCIIP Bio",
  pageHref: "/ekosistema",
  items: [
    { label: "Apie VCIIP Bio", href: "apie" },
    { label: "Lokacija", href: "lokacija" },
    { label: "Patalpos nuomai", href: "patalpos" },
  ],
};

export const techNavGroup: NavGroup = {
  id: "tech",
  label: "VCIIP Tech",
  pageHref: "/tech",
  items: [
    { label: "Apie", href: "apie" },
    { label: "Sklypai", href: "sklypai" },
    { label: "Kaip įsikurti", href: "kaip-isikurti" },
    { label: "Lokacija", href: "lokacija" },
  ],
};

export const sharedNavItems: NavLink[] = [
  { label: "Kodėl Vilnius", href: "/kodel-vilnius/" },
  { label: "Apie VCIIP", href: "/apie-vciip/" },
  { label: "Naujienos", href: "/naujienos/" },
];

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

export const stats = [
  { value: "200 mln. €", label: "pritraukta investicijų" },
  { value: "30+", label: "kompanijų ir organizacijų" },
  { value: "9/10", label: "operatoriaus paslaugų vertinimas" },
  { value: "nuo 2018", label: "veikiantis inovacijų parkas Vilniuje" },
];

export const processSteps = [
  "Įvertinimas",
  "Pokalbis",
  "Planavimas",
  "Įsikūrimas",
];
