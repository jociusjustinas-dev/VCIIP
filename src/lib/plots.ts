import { fallbackPlots } from "../content/plots";
import type { Plot, PlotInfrastructure, PlotStatus } from "../types/plot";

import { stripHtml } from "./wordpress";

const DEFAULT_PLOTS_ENDPOINT = import.meta.env.DEV
  ? "/wp-json/wp/v2/sklypai"
  : "https://vciip.lt/wp-json/wp/v2/sklypai";

type WpPlotPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  acf?: Record<string, unknown>;
  meta?: Record<string, unknown>;
};

function getPlotsEndpoint() {
  return (import.meta.env.VITE_WORDPRESS_PLOTS_URL ?? DEFAULT_PLOTS_ENDPOINT).replace(/\/$/, "");
}

function normalizeStatus(value: unknown): PlotStatus {
  const raw = String(value ?? "").toLowerCase();

  if (raw.includes("rezerv") || raw === "reserved" || raw === "orange") return "reserved";
  if (raw.includes("plan") || raw === "planned" || raw === "gray" || raw === "grey") return "planned";
  return "available";
}

function parsePurpose(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(/[,;|]/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function parseInfrastructure(value: unknown): PlotInfrastructure {
  const items = Array.isArray(value)
    ? value.map((item) => String(item).toLowerCase())
    : typeof value === "string"
      ? value.toLowerCase().split(/[,;|]/)
      : [];

  const has = (keyword: string) => items.some((item) => item.includes(keyword));

  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    const record = value as Record<string, unknown>;
    return {
      electric: Boolean(record.electric ?? record.elektra),
      water: Boolean(record.water ?? record.vanduo),
      gas: Boolean(record.gas ?? record.dujos),
      communications: Boolean(record.communications ?? record.komunikacijos),
    };
  }

  return {
    electric: has("elektr") || items.length === 0,
    water: has("vand") || items.length === 0,
    gas: has("duj") || items.length === 0,
    communications: has("komun") || items.length === 0,
  };
}

function readField(post: WpPlotPost, keys: string[]) {
  for (const key of keys) {
    const acfValue = post.acf?.[key];
    if (acfValue !== undefined && acfValue !== null && acfValue !== "") return acfValue;

    const metaValue = post.meta?.[key];
    if (metaValue !== undefined && metaValue !== null && metaValue !== "") return metaValue;
  }

  return undefined;
}

function mapPlot(post: WpPlotPost): Plot | null {
  const letter = String(readField(post, ["svg_id", "raidė", "raide", "letter"]) ?? "").trim();
  const area = String(readField(post, ["plotas", "area"]) ?? "").trim();
  const purpose = parsePurpose(readField(post, ["paskirtis", "purpose"]));
  const status = normalizeStatus(readField(post, ["statusas", "status"]));
  const infrastructure = parseInfrastructure(readField(post, ["infrastruktura", "infrastructure"]));
  const mapLeft = String(readField(post, ["map_left", "map_x", "x"]) ?? "").trim();
  const mapTop = String(readField(post, ["map_top", "map_y", "y"]) ?? "").trim();
  const ctaHref = String(readField(post, ["cta", "cta_url", "cta_href"]) ?? "/kontaktai?interest=tech").trim();
  const planDownloadUrl = String(readField(post, ["plan_url", "plan_download_url"]) ?? "").trim() || null;
  const title = stripHtml(post.title.rendered);
  const resolvedLetter = letter || title.replace(/[^A-Za-z0-9]/g, "").slice(-1).toUpperCase();

  if (!resolvedLetter || !area) return null;

  return {
    id: post.slug || `plot-${post.id}`,
    letter: resolvedLetter,
    name: title || `Sklypas ${resolvedLetter}`,
    area,
    purpose: purpose.length > 0 ? purpose : ["Technologijos"],
    status,
    infrastructure,
    mapPosition: {
      left: mapLeft.includes("%") ? mapLeft : `${mapLeft || "50"}%`,
      top: mapTop.includes("%") ? mapTop : `${mapTop || "50"}%`,
    },
    ctaHref: ctaHref.startsWith("/") || ctaHref.startsWith("http") ? ctaHref : `/kontaktai?interest=tech`,
    planDownloadUrl,
  };
}

export function getDefaultPlotId(plots: Plot[]) {
  return plots.find((plot) => plot.status === "available")?.id ?? plots[0]?.id ?? "";
}

export async function fetchPlots(): Promise<Plot[]> {
  try {
    const params = new URLSearchParams({
      per_page: "100",
      orderby: "menu_order",
      order: "asc",
    });

    const response = await fetch(`${getPlotsEndpoint()}?${params.toString()}`, {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Plots API responded with ${response.status}`);
    }

    const posts = (await response.json()) as WpPlotPost[];
    const mapped = posts.map(mapPlot).filter((plot): plot is Plot => Boolean(plot));

    if (mapped.length > 0) return mapped;
  } catch {
    // Fall through to static fallback content.
  }

  return fallbackPlots;
}
