import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { klientaiCompanies, type ClientEntry } from "../content/klientai";

export function ClientsLogoCarousel({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<ClientEntry | null>(null);
  const items = [...klientaiCompanies, ...klientaiCompanies];

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

  const scrollBy = (direction: -1 | 1) => {
    trackRef.current?.scrollBy({ left: direction * 280, behavior: "smooth" });
  };

  return (
    <section id="klientai" className="section-shell bg-white">
      <div className="site-container" data-reveal-group>
        <p className="eyebrow reveal-item">Klientai</p>
        <h2 className="section-heading reveal-item mt-4 max-w-3xl">{title}</h2>
        <p className="reveal-item body-lead m-0 mt-5 max-w-3xl text-muted">{description}</p>
      </div>

      <div className="reveal-item mt-10 overflow-hidden" data-reveal="fade">
        <div
          ref={trackRef}
          className="flex gap-3 overflow-x-auto px-[max(1rem,calc((100%-min(100%-2rem,1800px))/2+var(--page-gutter)))] pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, index) => (
            <button
              key={`${item.id}-${index}`}
              type="button"
              onClick={() => setActive(item)}
              className="flex h-28 w-[220px] shrink-0 items-center justify-center border border-primary/12 bg-background px-5 text-center transition hover:border-primary/28 hover:bg-white"
              aria-label={`Plačiau apie ${item.name}`}
            >
              <span className="font-display text-lg font-bold leading-tight tracking-tight text-primary">
                {item.name.replace(/^</, "").replace(/>$/, "")}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="site-container mt-6 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Ankstesni klientai"
          onClick={() => scrollBy(-1)}
          className="flex size-12 items-center justify-center border border-primary/16 bg-white text-primary transition hover:border-accent hover:bg-accent hover:text-white"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          aria-label="Kiti klientai"
          onClick={() => scrollBy(1)}
          className="flex size-12 items-center justify-center border border-primary/16 bg-white text-primary transition hover:border-accent hover:bg-accent hover:text-white"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {active ? (
        <div
          className="modal-fade fixed inset-0 z-[1000] grid place-items-center bg-primary/80 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
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
            <h3 className="heading-h3 mt-3 text-primary">{active.name}</h3>
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
