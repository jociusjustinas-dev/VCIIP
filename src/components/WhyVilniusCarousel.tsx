import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

type WhyItem = {
  title: string;
  body: string;
  href?: string;
  ctaLabel?: string;
};

function NavButtons({
  slide,
  maxSlide,
  onPrev,
  onNext,
}: {
  slide: number;
  maxSlide: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="why-vilnius-carousel__nav">
      <button
        type="button"
        aria-label="Ankstesnė kortelė"
        onClick={onPrev}
        disabled={slide === 0}
        className="why-vilnius-carousel__nav-btn"
      >
        <ChevronLeft size={22} aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Kita kortelė"
        onClick={onNext}
        disabled={slide >= maxSlide}
        className="why-vilnius-carousel__nav-btn"
      >
        <ChevronRight size={22} aria-hidden="true" />
      </button>
    </div>
  );
}

export function WhyVilniusCarousel({
  id = "kodel-vilnius",
  eyebrow = "Kodėl Vilnius?",
  title,
  intro,
  items,
  tone = "light",
  showNumbers = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  items: readonly WhyItem[];
  tone?: "light" | "gradient";
  showNumbers?: boolean;
}) {
  const [slide, setSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [stepPx, setStepPx] = useState(0);
  const isGradient = tone === "gradient";

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const card = trackRef.current.firstElementChild as HTMLElement | null;
      if (!card) return;
      const gap = Number.parseFloat(getComputedStyle(trackRef.current).gap) || 0;
      setStepPx(card.offsetWidth + gap);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items.length]);

  const maxSlide = Math.max(0, items.length - 1);

  const handlePrev = () => {
    setSlide((current) => Math.max(0, current - 1));
  };

  const handleNext = () => {
    setSlide((current) => Math.min(maxSlide, current + 1));
  };

  return (
    <section
      id={id}
      className={`section-shell ${isGradient ? "why-vilnius-carousel--gradient" : "bg-white"}`}
    >
      <div className="site-container">
        <div data-reveal-group>
          <div className="section-eyebrow-rule reveal-item" />
          {intro ? (
            <div className="why-vilnius-carousel__header why-vilnius-carousel__header--split reveal-item">
              <div>
                <p className="eyebrow">{eyebrow}</p>
                <h2 className="section-heading mt-4 max-w-3xl">{title}</h2>
              </div>
              <p className="m-0 max-w-xl text-base font-normal leading-loose text-muted">{intro}</p>
            </div>
          ) : (
            <div className="why-vilnius-carousel__header reveal-item">
              <p className="eyebrow">{eyebrow}</p>
              <h2 className="section-heading mt-4 max-w-3xl">{title}</h2>
            </div>
          )}
        </div>

        <div className="why-vilnius-carousel__viewport reveal-item" data-reveal="fade">
          <div
            ref={trackRef}
            className="why-vilnius-carousel__track"
            style={{
              transform: stepPx ? `translateX(-${slide * stepPx}px)` : undefined,
            }}
          >
            {items.map((item, index) => {
              const hasCta = Boolean(item.href);

              return (
              <article
                key={item.title}
                className={`why-vilnius-carousel__card ${
                  isGradient ? "why-vilnius-carousel__card--on-gradient" : ""
                }`}
              >
                <div className={`flex w-full flex-col ${hasCta ? "gap-6" : "min-h-0 flex-1 justify-between gap-6"}`}>
                  <div className="flex flex-col gap-6">
                    {showNumbers ? (
                      <span className="font-display text-sm font-bold uppercase tracking-wide text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    ) : null}
                    <h3 className="why-vilnius-carousel__card-title">{item.title}</h3>
                    {hasCta ? (
                      <p className="why-vilnius-carousel__card-body">{item.body}</p>
                    ) : null}
                  </div>
                  {!hasCta ? (
                    <p className="why-vilnius-carousel__card-body">{item.body}</p>
                  ) : null}
                </div>
                {hasCta ? (
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-base font-semibold text-primary transition hover:text-accent"
                  >
                    {item.ctaLabel ?? "Skaityti daugiau"}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ) : null}
              </article>
              );
            })}
          </div>
        </div>

        <NavButtons slide={slide} maxSlide={maxSlide} onPrev={handlePrev} onNext={handleNext} />
      </div>
    </section>
  );
}
