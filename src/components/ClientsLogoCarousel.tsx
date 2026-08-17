import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";

import {
  clientDisplayName,
  clientLogoScale,
  klientaiAll,
  parseClientDescription,
  type ClientEntry,
} from "../content/klientai";
import { CtaArrow } from "./CtaArrow";

function ClientModalContent({ item }: { item: ClientEntry }) {
  const { sections, website } = parseClientDescription(item.description);
  const href = item.website ?? website;
  const visibleSections = sections.filter((section) => section.body.trim());

  return (
    <>
      {visibleSections.length > 0 ? (
        <div className="mt-6 flex flex-col gap-6">
          {visibleSections.map((section, index) => (
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
      ) : null}

      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary group mt-8"
        >
          <span className="h-5 overflow-hidden py-px">
            <span className="flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-1/2">
              {["Daugiau informacijos", "Daugiau informacijos"].map((label, index) => (
                <span key={index} className="flex h-5 items-center gap-2">
                  {label}
                  <CtaArrow href={href} />
                </span>
              ))}
            </span>
          </span>
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
  const [slide, setSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [stepPx, setStepPx] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

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

  useEffect(() => {
    const measure = () => {
      const width = window.innerWidth;
      const nextVisible = width <= 639 ? 2 : width <= 991 ? 3 : 4;
      setVisibleCount(nextVisible);

      if (!trackRef.current) return;
      const card = trackRef.current.firstElementChild as HTMLElement | null;
      if (!card) return;
      const gap = Number.parseFloat(getComputedStyle(trackRef.current).columnGap || getComputedStyle(trackRef.current).gap) || 0;
      setStepPx(card.offsetWidth + gap);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const maxSlide = Math.max(0, klientaiAll.length - visibleCount);

  useEffect(() => {
    setSlide((current) => Math.min(current, maxSlide));
  }, [maxSlide]);

  const handlePrev = () => {
    setSlide((current) => Math.max(0, current - 1));
  };

  const handleNext = () => {
    setSlide((current) => Math.min(maxSlide, current + 1));
  };

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

        <div className="clients-logo-slider reveal-item" data-reveal="fade">
          <div className="clients-logo-slider__viewport">
            <div
              ref={trackRef}
              className="clients-logo-slider__track"
              style={{
                transform: stepPx ? `translateX(-${slide * stepPx}px)` : undefined,
              }}
            >
              {klientaiAll.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item)}
                  className="clients-logo-slider__item"
                  aria-label={`Plačiau apie ${clientDisplayName(item)}`}
                >
                  <span
                    className="clients-logo-slider__logo-wrap"
                    style={{ "--logo-scale": clientLogoScale(item.id) } as CSSProperties}
                  >
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.logoAlt ?? clientDisplayName(item)}
                        className="clients-logo-slider__logo"
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

          <div className="why-vilnius-carousel__nav">
            <button
              type="button"
              aria-label="Ankstesni klientai"
              onClick={handlePrev}
              disabled={slide === 0}
              className="why-vilnius-carousel__nav-btn"
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Kiti klientai"
              onClick={handleNext}
              disabled={slide >= maxSlide}
              className="why-vilnius-carousel__nav-btn"
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="/klientai"
            className="inline-flex items-center gap-2 text-base font-semibold text-primary transition hover:text-accent"
          >
            Žiūrėti visus
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
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
