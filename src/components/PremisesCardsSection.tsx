import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import { CtaArrow } from "./CtaArrow";

function PremiseCardCta({ label, href }: { label: string; href: string }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className="btn-primary mt-auto w-full justify-center"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
      {isExternal ? <ExternalLink size={16} aria-hidden="true" /> : <CtaArrow href={href} />}
    </a>
  );
}

type PremiseContact = {
  name: string;
  role?: string;
  email: string;
  emailDisplay?: string;
  phone: string;
  phoneHref?: string;
};

type PremiseImage = {
  src: string;
  alt?: string;
};

type PremiseItem = {
  title: string;
  body: string;
  images: readonly PremiseImage[];
  /** Available free area display value, e.g. "~3230 kv. m." */
  availableArea: string;
  /** When false, shows occupied status instead of available. */
  isAvailable?: boolean;
  link?: { label: string; href: string };
  contact: PremiseContact;
};

function AvailabilityRow({
  availableArea,
  isAvailable,
}: {
  availableArea: string;
  isAvailable: boolean;
}) {
  return (
    <div className="flex items-end justify-between gap-4 border-t border-primary/12 pt-4">
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold uppercase tracking-[0.04em] text-muted">
          Laisvų patalpų
        </span>
        <span
          className={`inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.03em] ${
            isAvailable ? "text-primary" : "text-muted"
          }`}
        >
          <span
            className="h-2.5 w-2.5 shrink-0"
            style={{
              background: isAvailable
                ? "#00bdae"
                : "color-mix(in srgb, var(--color-primary) 28%, transparent)",
            }}
            aria-hidden="true"
          />
          {isAvailable ? "Laisva" : "Užimta"}
        </span>
      </div>
      <p className="m-0 text-right text-xl font-semibold leading-none text-primary max-[479px]:text-lg">
        {availableArea}
      </p>
    </div>
  );
}

function PremiseImageSlider({
  images,
  label,
}: {
  images: readonly PremiseImage[];
  label: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images.length;

  useEffect(() => {
    if (count <= 1 || paused) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [count, paused]);

  if (count === 0) {
    return <div className="relative aspect-[4/3] bg-primary" />;
  }

  const goPrev = () => setIndex((current) => (current - 1 + count) % count);
  const goNext = () => setIndex((current) => (current + 1) % count);

  return (
    <div
      className="group/slider relative aspect-[4/3] overflow-hidden bg-primary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      {images.map((image, imageIndex) => (
        <img
          key={`${image.src}-${imageIndex}`}
          src={image.src}
          alt={image.alt ?? `${label} nuotrauka ${imageIndex + 1}`}
          loading={imageIndex === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out ${
            imageIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_62%,rgb(0_0_0_/0.28))]" />

      {count > 1 ? (
        <>
          <button
            type="button"
            aria-label={`Ankstesnė ${label} nuotrauka`}
            onClick={goPrev}
            className="absolute left-3 top-1/2 z-[2] flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-white text-primary shadow-[0_6px_18px_rgb(0_0_0_/0.18)] transition hover:bg-accent hover:text-white max-[479px]:left-2 max-[479px]:h-8 max-[479px]:w-8 lg:opacity-0 lg:group-hover/slider:opacity-100 lg:group-focus-within/slider:opacity-100"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={`Kita ${label} nuotrauka`}
            onClick={goNext}
            className="absolute right-3 top-1/2 z-[2] flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-white text-primary shadow-[0_6px_18px_rgb(0_0_0_/0.18)] transition hover:bg-accent hover:text-white max-[479px]:right-2 max-[479px]:h-8 max-[479px]:w-8 lg:opacity-0 lg:group-hover/slider:opacity-100 lg:group-focus-within/slider:opacity-100"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>

          <div className="absolute bottom-3 left-1/2 z-[2] flex -translate-x-1/2 items-center gap-1.5">
            {images.map((image, dotIndex) => (
              <button
                key={`dot-${image.src}-${dotIndex}`}
                type="button"
                aria-label={`${label} nuotrauka ${dotIndex + 1}`}
                aria-current={dotIndex === index}
                onClick={() => setIndex(dotIndex)}
                className={`h-1.5 shadow-[0_1px_4px_rgb(0_0_0_/0.35)] transition-all ${
                  dotIndex === index ? "w-5 bg-accent" : "w-1.5 bg-white/90 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function PremiseCard({ item }: { item: PremiseItem }) {
  const isAvailable = item.isAvailable ?? true;
  const phoneHref = item.contact.phoneHref ?? item.contact.phone.replace(/\s+/g, "");
  const emailDisplay = item.contact.emailDisplay ?? item.contact.email;

  return (
    <article className="premises-card flex h-full flex-col overflow-hidden border border-primary/12 bg-background">
      <PremiseImageSlider images={item.images} label={item.title} />

      <div className="flex flex-1 flex-col gap-5 p-6 max-[479px]:gap-4 max-[479px]:p-5">
        <div className="flex flex-col gap-3">
          <h3 className="heading-h3 m-0 text-primary">{item.title}</h3>
          <p className="m-0 text-base leading-loose text-muted">{item.body}</p>
        </div>

        <AvailabilityRow availableArea={item.availableArea} isAvailable={isAvailable} />

        <div className="flex flex-col gap-1.5 border-t border-primary/12 pt-4">
          <span className="text-xs font-semibold uppercase tracking-[0.04em] text-muted">Kontaktai</span>
          <p className="m-0 text-base font-semibold text-primary">{item.contact.name}</p>
          {item.contact.role ? (
            <p className="m-0 text-sm leading-snug text-muted">{item.contact.role}</p>
          ) : null}
          <a
            className="text-sm font-medium text-primary/72 transition hover:text-accent"
            href={`mailto:${item.contact.email}`}
          >
            {emailDisplay}
          </a>
          <a className="text-sm font-medium text-primary/72 transition hover:text-accent" href={`tel:${phoneHref}`}>
            {item.contact.phone}
          </a>
        </div>

        {item.link ? <PremiseCardCta label={item.link.label} href={item.link.href} /> : null}
      </div>
    </article>
  );
}

export function PremisesCardsSection({
  id = "patalpos",
  eyebrow,
  title,
  items,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  items: readonly PremiseItem[];
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const maxScrollLeft = viewport.scrollWidth - viewport.clientWidth;
    setCanPrev(viewport.scrollLeft > 4);
    setCanNext(viewport.scrollLeft < maxScrollLeft - 4);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

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
  }, [items, updateScrollState]);

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
    <section id={id} className="section-shell bg-white">
      <div className="site-container">
        <div className="section-intro max-[479px]:mb-8" data-reveal-group>
          <div className="section-eyebrow-rule" />
          <p className="eyebrow reveal-item">{eyebrow}</p>
          <h2 className="section-heading reveal-item max-w-3xl">{title}</h2>
        </div>

        <div className="premises-cards-wrap reveal-item mt-12 max-[991px]:mt-10" data-reveal="fade">
          <div ref={viewportRef} className="premises-cards-viewport">
            <div className="premises-cards">
              {items.map((item) => (
                <PremiseCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div className="premises-cards-nav why-vilnius-carousel__nav">
            <button
              type="button"
              aria-label="Ankstesnė patalpų kortelė"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              className="why-vilnius-carousel__nav-btn"
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Kita patalpų kortelė"
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
  );
}
