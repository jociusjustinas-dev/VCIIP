import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import {
  clientDisplayName,
  clientLogoScale,
  getClientProfile,
  klientaiClusters,
  klientaiCompanies,
  klientaiPageContent,
  parkPairCta,
  type ClientEntry,
  type ClientProfile,
} from "../content/klientai";
import { ParkPairCards } from "./ParkPairCards";

type ClientTab = "imones" | "klasteriai";

const TABS: { id: ClientTab; label: string }[] = [
  { id: "imones", label: "Įmonės" },
  { id: "klasteriai", label: "Klasteriai" },
];

function tabFromHash(hash = window.location.hash): ClientTab {
  return hash.replace("#", "") === "klasteriai" ? "klasteriai" : "imones";
}

function ClientCard({ item }: { item: ClientEntry }) {
  const profile: ClientProfile = getClientProfile(item);
  const excerpt = profile.sections
    .map((section) => section.body)
    .filter(Boolean)
    .join(" ");
  const title = clientDisplayName(item);
  const showLegalName = Boolean(item.legalName && item.legalName !== title);

  return (
    <article
      id={item.id}
      className="premises-card flex h-full flex-col overflow-hidden border border-primary/12 bg-background"
    >
      <div
        className="flex aspect-[16/10] items-center justify-center border-b border-primary/12 bg-white p-6"
        style={{ "--logo-scale": clientLogoScale(item.id) } as CSSProperties}
      >
        {item.logo ? (
          <img
            src={item.logo}
            alt={item.logoAlt ?? title}
            className="max-h-full max-w-[80%] object-contain"
            style={{ transform: "scale(var(--logo-scale, 1))" }}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="heading-h3 px-2 text-center text-primary">{title}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 max-[479px]:gap-3 max-[479px]:p-5">
        {profile.tags.length ? (
          <p className="m-0 text-xs font-semibold uppercase leading-snug tracking-[0.04em] text-primary/62">
            {profile.tags.join(" · ")}
          </p>
        ) : null}

        <div className="flex flex-col gap-1.5">
          <h3 className="heading-h3 m-0 text-primary">{title}</h3>
          {showLegalName ? <p className="m-0 text-sm leading-snug text-muted">{item.legalName}</p> : null}
        </div>

        {excerpt ? (
          <p className="m-0 line-clamp-4 text-base leading-relaxed text-muted">{excerpt}</p>
        ) : null}

        {profile.website ? (
          <a
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-auto w-full justify-center"
          >
            Daugiau informacijos
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        ) : (
          <span className="mt-auto" aria-hidden="true" />
        )}
      </div>
    </article>
  );
}

export function KlientaiPage() {
  const { hero, companies, clusters, institutions } = klientaiPageContent;
  const [tab, setTab] = useState<ClientTab>(() =>
    typeof window === "undefined" ? "imones" : tabFromHash(),
  );
  const viewportRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const items = tab === "klasteriai" ? klientaiClusters : klientaiCompanies;
  const gridLabel = tab === "klasteriai" ? clusters.title : companies.title;

  const selectTab = (next: ClientTab) => {
    setTab(next);
    const hash = next === "klasteriai" ? "#klasteriai" : "#imones";
    window.history.replaceState(null, "", `${window.location.pathname}${hash}`);
  };

  const updateScrollState = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const maxScrollLeft = viewport.scrollWidth - viewport.clientWidth;
    setCanPrev(viewport.scrollLeft > 4);
    setCanNext(viewport.scrollLeft < maxScrollLeft - 4);
  }, []);

  useEffect(() => {
    const onHash = () => setTab(tabFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    viewport.scrollTo({ left: 0 });
    updateScrollState();

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(viewport);
    viewport.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      resizeObserver.disconnect();
      viewport.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [tab, items, updateScrollState]);

  const scrollByCard = (direction: -1 | 1) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const card = viewport.querySelector(".premises-card");
    if (!(card instanceof HTMLElement)) return;

    const track = viewport.querySelector(".premises-cards");
    const styles = track instanceof HTMLElement ? getComputedStyle(track) : null;
    const gap = styles ? Number.parseFloat(styles.columnGap || styles.gap) || 0 : 0;

    viewport.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-white">
      <section className="relative bg-white pt-32 max-[991px]:pt-28 max-[479px]:pt-24">
        <div className="site-container pb-[5.5rem] max-[991px]:pb-16 max-[479px]:pb-12">
          <div
            className="flex items-end justify-between gap-6 border-b border-dashed border-primary/28 pb-10 pt-2 max-[479px]:gap-4"
            data-reveal-group
          >
            <h1 className="display-h1 reveal-item m-0 min-w-0">{hero.title}</h1>

            <div
              className="reveal-item flex w-fit shrink-0 gap-1 bg-background p-1"
              role="tablist"
              aria-label="Klientų grupės"
            >
              {TABS.map((item) => {
                const isActive = tab === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => selectTab(item.id)}
                    className={`px-5 py-2.5 text-sm font-semibold leading-none transition-colors duration-300 outline-none max-[479px]:px-4 ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-primary/62 hover:bg-primary/8 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="premises-cards-wrap reveal-item mt-12 max-[991px]:mt-10" data-reveal="fade">
            <div ref={viewportRef} className="premises-cards-viewport">
              <div className="premises-cards" role="tabpanel" aria-label={gridLabel}>
                {items.map((item) => (
                  <ClientCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div className="premises-cards-nav why-vilnius-carousel__nav">
              <button
                type="button"
                aria-label="Ankstesnė kortelė"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                className="why-vilnius-carousel__nav-btn"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Kita kortelė"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                className="why-vilnius-carousel__nav-btn"
              >
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id={institutions.id} className="section-shell bg-white">
        <div className="site-container" data-reveal-group>
          <div className="section-intro max-[479px]:mb-8">
            <div className="section-eyebrow-rule" />
            <h2 className="section-heading reveal-item max-w-3xl">{institutions.title}</h2>
          </div>
          <p className="reveal-item m-0 max-w-3xl text-base font-normal leading-loose text-muted">
            {institutions.note}
          </p>
        </div>
      </section>

      <ParkPairCards
        title={parkPairCta.title}
        description={parkPairCta.description}
        primaryCta={parkPairCta.primaryCta}
        bio={parkPairCta.bio}
        tech={parkPairCta.tech}
      />
    </main>
  );
}
