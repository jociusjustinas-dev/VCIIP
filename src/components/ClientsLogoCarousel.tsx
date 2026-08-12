import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { clientDisplayName, klientaiAll, type ClientEntry } from "../content/klientai";

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

        <div className="reveal-item vilnius-partners-grid" data-reveal="fade">
          {klientaiAll.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item)}
              className="vilnius-partners-grid__item"
              aria-label={`Plačiau apie ${clientDisplayName(item)}`}
            >
              <span className="vilnius-partners-grid__logo-wrap">
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
            className="modal-scale relative max-h-[85svh] w-full max-w-2xl overflow-auto bg-white p-6 shadow-2xl max-[479px]:p-5"
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
            <p className="eyebrow m-0 pr-12">{active.kind === "cluster" ? "Klasteris" : "Įmonė"}</p>
            <h3 className="heading-h3 mt-3 text-primary">{clientDisplayName(active)}</h3>
            {active.legalName ? <p className="m-0 mt-2 text-sm text-muted">{active.legalName}</p> : null}
            {active.categories.length ? (
              <p className="m-0 mt-3 text-sm font-semibold text-primary/70">{active.categories.join(" · ")}</p>
            ) : null}
            <p className="m-0 mt-5 whitespace-pre-line text-base leading-loose text-muted">{active.description}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
