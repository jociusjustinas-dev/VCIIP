import { useEffect, useState, type CSSProperties } from "react";

import {
  clientDisplayName,
  clientLogoScale,
  getClientProfile,
  klientaiClusters,
  klientaiCompanies,
  klientaiPageContent,
  parkPairCta,
  type ClientEntry,
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

function ClientLogoTile({ item }: { item: ClientEntry }) {
  const profile = getClientProfile(item);
  const title = clientDisplayName(item);
  const href = profile.website;
  const className = "klientai-logo-grid__item";
  const style = { "--logo-scale": clientLogoScale(item.id) } as CSSProperties;

  const content = (
    <span className="klientai-logo-grid__logo-wrap" style={style}>
      {item.logo ? (
        <img
          src={item.logo}
          alt={item.logoAlt ?? title}
          className="klientai-logo-grid__logo"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="klientai-logo-grid__fallback">{title}</span>
      )}
    </span>
  );

  if (href) {
    return (
      <a
        id={item.id}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`${title} — atidaryti svetainę`}
      >
        {content}
      </a>
    );
  }

  return (
    <div id={item.id} className={className} aria-label={title}>
      {content}
    </div>
  );
}

export function KlientaiPage() {
  const { hero, companies, clusters, institutions } = klientaiPageContent;
  const [tab, setTab] = useState<ClientTab>(() =>
    typeof window === "undefined" ? "imones" : tabFromHash(),
  );
  const items = tab === "klasteriai" ? klientaiClusters : klientaiCompanies;
  const gridLabel = tab === "klasteriai" ? clusters.title : companies.title;

  const selectTab = (next: ClientTab) => {
    setTab(next);
    const hash = next === "klasteriai" ? "#klasteriai" : "#imones";
    window.history.replaceState(null, "", `${window.location.pathname}${hash}`);
  };

  useEffect(() => {
    const onHash = () => setTab(tabFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

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

          <div
            className="klientai-logo-grid reveal-item mt-12 max-[991px]:mt-10"
            role="tabpanel"
            aria-label={gridLabel}
            data-reveal="fade"
          >
            {items.map((item) => (
              <ClientLogoTile key={item.id} item={item} />
            ))}
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
