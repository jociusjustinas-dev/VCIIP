import { useEffect, useState, type CSSProperties } from "react";
import { X } from "lucide-react";

import {
  clientDisplayName,
  clientLogoScale,
  klientaiAll,
  parseClientDescription,
  type ClientEntry,
} from "../content/klientai";

function ClientModalContent({ item }: { item: ClientEntry }) {
  const { sections, website } = parseClientDescription(item.description);
  const href = item.website ?? website;

  return (
    <>
      <div className="mt-6 flex flex-col gap-6">
        {sections.map((section, index) => (
          <div key={`${item.id}-section-${index}`}>
            {section.label ? (
              <p className="m-0 text-base font-bold text-primary">{section.label}</p>
            ) : null}
            <p className={`m-0 text-base leading-relaxed text-muted ${section.label ? "mt-2" : ""}`}>
              {section.body}
            </p>
          </div>
        ))}
      </div>

      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8"
        >
          Daugiau informacijos
        </a>
      ) : null}
    </>
  );
}

export function ClientsLogoCarousel({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [active, setActive] = useState<ClientEntry | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="klientai" className="section-shell bg-white">
      <div className="site-container">
        <div className="vilnius-partners-intro max-[767px]:mb-8" data-reveal-group>
          <div className="section-eyebrow-rule" />
          <div className="vilnius-partners-intro__row">
            <div className="vilnius-partners-intro__title-col">
              <p className="eyebrow reveal-item">Klientai</p>
              <h2 className="section-heading reveal-item">{title}</h2>
            </div>
            <p className="vilnius-partners-intro__body reveal-item">{description}</p>
          </div>
        </div>

        <div className="reveal-item vilnius-partners-grid vilnius-partners-grid--clients" data-reveal="fade">
          {klientaiAll.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item)}
              className="vilnius-partners-grid__item"
              aria-label={`Plačiau apie ${clientDisplayName(item)}`}
            >
              <span
                className="vilnius-partners-grid__logo-wrap"
                style={{ "--logo-scale": clientLogoScale(item.id) } as CSSProperties}
              >
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={item.logoAlt ?? clientDisplayName(item)}
                    className="vilnius-partners-grid__logo"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="text-center font-display text-sm font-bold leading-tight tracking-tight text-primary">
                    {clientDisplayName(item)}
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="modal-fade fixed inset-0 z-[1000] grid place-items-center bg-primary/80 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={clientDisplayName(active)}
          onClick={() => setActive(null)}
        >
          <div
            className="modal-scale relative max-h-[85svh] w-full max-w-3xl overflow-auto bg-white p-6 shadow-2xl max-[479px]:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 grid size-10 place-items-center border border-primary/12 text-primary transition hover:bg-accent hover:text-white"
              onClick={() => setActive(null)}
              aria-label="Uždaryti"
            >
              <X size={18} />
            </button>

            <div className="flex items-start gap-5 pr-12 max-[479px]:flex-col max-[479px]:gap-4">
              {active.logo ? (
                <div className="flex h-20 w-32 shrink-0 items-center justify-center border border-dashed border-primary/16 bg-white p-3 max-[479px]:h-16 max-[479px]:w-28">
                  <img
                    src={active.logo}
                    alt={active.logoAlt ?? clientDisplayName(active)}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ) : null}

              <div className="min-w-0">
                <p className="eyebrow m-0">{active.kind === "cluster" ? "Klasteris" : "Įmonė"}</p>
                <h3 className="heading-h3 mt-3 text-primary">{clientDisplayName(active)}</h3>
                {active.legalName ? <p className="m-0 mt-2 text-sm text-muted">{active.legalName}</p> : null}
                {active.categories.length ? (
                  <p className="m-0 mt-3 text-sm font-semibold text-primary/70">{active.categories[0]}</p>
                ) : null}
              </div>
            </div>

            <ClientModalContent item={active} />
          </div>
        </div>
      ) : null}
    </section>
  );
}
