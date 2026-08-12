import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type WhyItem = {
  title: string;
  body: string;
};

const CARD_VARIANTS = ["accent", "soft", "primary"] as const;

function NavButtons({
  slide,
  maxSlide,
  onPrev,
  onNext,
  className = "",
}: {
  slide: number;
  maxSlide: number;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}) {
  return (
    <div className={`why-vilnius-carousel__nav ${className}`.trim()}>
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
  title,
  items,
}: {
  title: string;
  items: readonly WhyItem[];
}) {
  const [slide, setSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [stepPx, setStepPx] = useState(0);

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
    <section id="kodel-vilnius" className="section-shell bg-white">
      <div className="site-container">
        <div data-reveal-group>
          <div className="section-eyebrow-rule reveal-item" />
          <div className="why-vilnius-carousel__header reveal-item">
            <div className="why-vilnius-carousel__heading">
              <p className="eyebrow">Kodėl Vilnius?</p>
              <h2 className="section-heading mt-4 max-w-3xl">{title}</h2>
            </div>
            <NavButtons
              slide={slide}
              maxSlide={maxSlide}
              onPrev={handlePrev}
              onNext={handleNext}
              className="why-vilnius-carousel__nav--header"
            />
          </div>
        </div>

        <div className="why-vilnius-carousel__viewport reveal-item" data-reveal="fade">
          <div
            ref={trackRef}
            className="why-vilnius-carousel__track"
            style={{
              transform: stepPx ? `translateX(-${slide * stepPx}px)` : undefined,
            }}
          >
            {items.map((item, index) => (
              <article
                key={item.title}
                className={`why-vilnius-carousel__card why-vilnius-carousel__card--${CARD_VARIANTS[index % CARD_VARIANTS.length]}`}
              >
                <div className="why-vilnius-carousel__card-top">
                  <p className="why-vilnius-carousel__card-label">{item.title}</p>
                  <p className="why-vilnius-carousel__card-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <p className="why-vilnius-carousel__card-body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        <NavButtons
          slide={slide}
          maxSlide={maxSlide}
          onPrev={handlePrev}
          onNext={handleNext}
          className="why-vilnius-carousel__nav--footer"
        />
      </div>
    </section>
  );
}
