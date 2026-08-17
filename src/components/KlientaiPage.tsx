import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";

import {
  clientLogoScale,
  getClientProfile,
  klientaiClusters,
  klientaiCompanies,
  klientaiPageContent,
  parkPairCta,
  type ClientEntry,
  type ClientProfile,
} from "../content/klientai";
import { PageIntroHero } from "./PageIntroHero";
import { ParkPairCards } from "./ParkPairCards";

function ClientLogo({ item }: { item: ClientProfile }) {
  if (!item.logo) return null;

  return (
    <div
      className="flex h-20 w-36 shrink-0 items-center justify-center border border-dashed border-primary/16 bg-white p-3 max-[479px]:h-16 max-[479px]:w-28"
      style={{ "--logo-scale": clientLogoScale(item.id) } as CSSProperties}
    >
      <img
        src={item.logo}
        alt={item.logoAlt ?? item.heading}
        className="max-h-full max-w-full object-contain"
        style={{ transform: `scale(var(--logo-scale, 1))` }}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function ClientProfileRow({ item }: { item: ClientProfile }) {
  return (
    <article
      id={item.id}
      className={`scroll-mt-28 gap-6 border-t border-dashed border-primary/18 py-10 last:border-b ${
        item.logo
          ? "grid md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10"
          : "flex flex-col"
      }`}
    >
      <ClientLogo item={item} />

      <div className="min-w-0">
        {item.tags.length ? (
          <p className="m-0 text-sm font-semibold leading-snug text-primary/68">{item.tags.join(" · ")}</p>
        ) : null}

        <h3 className={`heading-h3 text-primary ${item.tags.length ? "mt-3" : ""}`}>{item.heading}</h3>

        {item.sections.length ? (
          <div className="mt-6 flex flex-col gap-5">
            {item.sections.map((section, index) => (
              <div key={`${item.id}-section-${index}`}>
                {section.label ? (
                  <p className="m-0 text-base font-bold text-primary">{section.label}</p>
                ) : null}
                <p className={`m-0 text-base leading-loose text-muted ${section.label ? "mt-2" : ""}`}>
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        {item.website ? (
          <a
            href={item.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-primary transition hover:text-accent"
          >
            Daugiau informacijos
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

function ClientDirectorySection({
  id,
  title,
  items,
  className = "section-shell bg-white",
}: {
  id: string;
  title: string;
  items: readonly ClientEntry[];
  className?: string;
}) {
  return (
    <section id={id} className={className}>
      <div className="site-container">
        <div className="section-intro max-[479px]:mb-8" data-reveal-group>
          <div className="section-eyebrow-rule" />
          <h2 className="section-heading reveal-item max-w-3xl">{title}</h2>
        </div>

        <div className="reveal-item" data-reveal="fade">
          {items.map((item) => (
            <ClientProfileRow key={item.id} item={getClientProfile(item)} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function KlientaiPage() {
  const { hero, companies, clusters, institutions } = klientaiPageContent;

  return (
    <main className="bg-white">
      <PageIntroHero spacing="loose" eyebrow={hero.eyebrow} title={hero.title} />

      <ClientDirectorySection
        id={companies.id}
        title={companies.title}
        items={klientaiCompanies}
        className="bg-white pb-[5.5rem] max-[991px]:pb-16 max-[479px]:pb-12"
      />
      <ClientDirectorySection id={clusters.id} title={clusters.title} items={klientaiClusters} />

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
