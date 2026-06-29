import type { NewsPost } from "../types/news";

import placeholderImage from "../assets/images/vciip-overview.jpg";

const DEFAULT_API_BASE = import.meta.env.DEV
  ? "/wp-json/wp/v2"
  : "https://vciip.lt/wp-json/wp/v2";

type WpEmbeddedMedia = {
  source_url?: string;
};

type WpPost = {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: WpEmbeddedMedia[];
  };
};

function getApiBase() {
  return (import.meta.env.VITE_WORDPRESS_API_URL ?? DEFAULT_API_BASE).replace(/\/$/, "");
}

export function decodeHtmlEntities(value: string) {
  if (typeof document === "undefined") {
    return value
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
      .replace(/&hellip;/g, "…")
      .replace(/&[a-z]+;/gi, "");
  }

  const element = document.createElement("textarea");
  element.innerHTML = value;
  return element.value;
}

export function stripHtml(value: string) {
  return decodeHtmlEntities(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

export function truncateExcerpt(value: string, maxLength = 160) {
  const plain = stripHtml(value);
  if (plain.length <= maxLength) return plain;

  const truncated = plain.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  const safe = lastSpace > maxLength * 0.6 ? truncated.slice(0, lastSpace) : truncated;

  return `${safe.trim()}…`;
}

function getFeaturedImageUrl(post: WpPost) {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
}

function mapPost(post: WpPost): NewsPost {
  return {
    id: post.id,
    title: stripHtml(post.title.rendered),
    excerpt: truncateExcerpt(post.excerpt.rendered),
    date: post.date,
    url: post.link,
    imageUrl: getFeaturedImageUrl(post),
  };
}

function isLithuanianPost(post: WpPost) {
  try {
    return new URL(post.link).hostname === "vciip.lt";
  } catch {
    return post.link.includes("vciip.lt");
  }
}

export function getNewsImageUrl(imageUrl: string | null) {
  return imageUrl ?? placeholderImage;
}

export const fallbackNewsPosts: NewsPost[] = [
  {
    id: 1,
    title: "Pažangiausias Baltijos regione ląstelių terapijos centras kuriasi VCIIP",
    excerpt:
      "Pažangiausia Baltijos regione ląstelių terapijos infrastruktūra kuriasi Vilniuje. Northway Biotech grupės įmonė stato naują inovatyvių ląstelių terapijos centrą VCIIP teritorijoje.",
    date: "2026-06-02T12:00:00",
    url: "https://vciip.lt/2026/06/02/pazangiausias-baltijos-regione-lasteliu-terapijos-centras-kuriasi-vciip/",
    imageUrl: null,
  },
  {
    id: 2,
    title: "Vilniaus miesto inovacijų pramonės parkas ir „Bio City“ – tarp 10 patraukliausių investicinių projektų",
    excerpt:
      "VCIIP ir „Bio City“ pripažinti vienu iš patraukliausių Vidurio ir Rytų Europos investicinių projektų, sustiprindami parko matomumą tarptautinėje investuotojų erdvėje.",
    date: "2026-05-12T12:00:00",
    url: "https://vciip.lt/2026/05/12/vilniaus-miesto-inovaciju-pramones-parkas-ir-bio-city-tarp-10-patraukliausiu-investiciniu-projektu-vidurio-ir-rytu-europoje/",
    imageUrl: null,
  },
  {
    id: 3,
    title: "VCIIP išlieti pamatai pirmajai Europoje „Pentasweet“ saldaus baltymo gamyklai",
    excerpt:
      "Vilniaus miesto inovacijų pramonės parke prasidėjo viena didžiausių pastarųjų metų biotechnologijų investicijų – 65 mln. eurų vertės brazeino gamyklos statybos.",
    date: "2026-02-04T12:00:00",
    url: "https://vciip.lt/2026/02/04/vciip-islieti-pamatai-pirmajai-europoje-pentasweet-saldaus-baltymo-gamyklai/",
    imageUrl: null,
  },
];

export async function fetchLatestNewsPosts(limit = 3): Promise<NewsPost[]> {
  try {
    const params = new URLSearchParams({
      per_page: String(Math.max(limit * 2, 6)),
      _embed: "1",
      orderby: "date",
      order: "desc",
    });

    const response = await fetch(`${getApiBase()}/posts?${params.toString()}`, {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error(`WordPress API responded with ${response.status}`);
    }

    const posts = (await response.json()) as WpPost[];
    const mapped = posts.filter(isLithuanianPost).slice(0, limit).map(mapPost);

    if (mapped.length > 0) return mapped;
  } catch {
    // Fall through to static fallback content.
  }

  return fallbackNewsPosts.slice(0, limit);
}

export function formatNewsDate(date: string) {
  return new Intl.DateTimeFormat("lt-LT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
