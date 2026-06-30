import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { apieVciipTimeline } from "../../content/apieVciip";

export function ApieVciipTimeline() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  const updateScrollState = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const maxScrollLeft = viewport.scrollWidth - viewport.clientWidth;
    const overflow = maxScrollLeft > 8;

    setHasOverflow(overflow);
    setCanScrollPrev(viewport.scrollLeft > 4);
    setCanScrollNext(viewport.scrollLeft < maxScrollLeft - 4);
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
  }, [updateScrollState]);

  const scrollTimeline = (direction: "previous" | "next") => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const milestone = viewport.querySelector<HTMLElement>(".apie-vciip-timeline__milestone");
    const scrollAmount = milestone ? milestone.offsetWidth : viewport.clientWidth * 0.8;

    viewport.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-background section-shell">
      <div className="site-container px-6 max-[479px]:px-4">
        <div
          className="mb-10 flex items-end justify-between gap-6 max-[767px]:mb-8 max-[767px]:flex-col max-[767px]:items-start"
          data-reveal-group
        >
          <div className="section-intro m-0 max-[479px]:mb-0">
            <p className="eyebrow reveal-item">{apieVciipTimeline.eyebrow}</p>
            <h2 className="section-heading reveal-item max-w-3xl">{apieVciipTimeline.title}</h2>
          </div>

          {(hasOverflow || apieVciipTimeline.items.length > 3) ? (
            <div className="apie-vciip-timeline__controls reveal-item">
              <button
                type="button"
                aria-label="Ankstesni metai"
                onClick={() => scrollTimeline("previous")}
                disabled={!canScrollPrev}
                className="apie-vciip-timeline__control"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Vėlesni metai"
                onClick={() => scrollTimeline("next")}
                disabled={!canScrollNext}
                className="apie-vciip-timeline__control"
              >
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </div>

        <div className="reveal-item apie-vciip-timeline" data-reveal="fade">
          <div
            ref={viewportRef}
            className="apie-vciip-timeline__viewport overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="apie-vciip-timeline__track">
              <div className="apie-vciip-timeline__rail" aria-hidden="true">
                <span className="apie-vciip-timeline__rail-line" />
              </div>

              {apieVciipTimeline.items.map((item) => (
                <article key={item.year} className="apie-vciip-timeline__milestone">
                  <p className="apie-vciip-timeline__year">{item.year}</p>
                  <span className="apie-vciip-timeline__dot" aria-hidden="true" />
                  <p className="apie-vciip-timeline__label">{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
