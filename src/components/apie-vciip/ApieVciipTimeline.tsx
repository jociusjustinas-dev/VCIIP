import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { apieVciipTimeline } from "../../content/apieVciip";

const VISIBLE_SLOTS = 3.25;

export function ApieVciipTimeline() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    viewport.style.setProperty("--timeline-viewport", `${viewport.clientWidth}px`);

    const maxScrollLeft = viewport.scrollWidth - viewport.clientWidth;
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

    const slotWidth = viewport.clientWidth / VISIBLE_SLOTS;

    viewport.scrollBy({
      left: direction === "next" ? slotWidth : -slotWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-white section-shell">
      <div className="site-container">
        <div
          className="mb-10 flex items-end justify-between gap-6 max-[767px]:mb-8 max-[767px]:flex-col max-[767px]:items-start"
          data-reveal-group
        >
          <div className="section-intro m-0 max-[479px]:mb-0">
            <p className="eyebrow reveal-item">{apieVciipTimeline.eyebrow}</p>
            <h2 className="section-heading reveal-item max-w-3xl">{apieVciipTimeline.title}</h2>
          </div>

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
        </div>

        <div className="reveal-item apie-vciip-timeline" data-reveal="fade">
          <div
            ref={viewportRef}
            className="apie-vciip-timeline__viewport overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="apie-vciip-timeline__track">
              <div className="apie-vciip-timeline__row apie-vciip-timeline__row--years">
                {apieVciipTimeline.items.map((item) => (
                  <div key={`${item.year}-year`} className="apie-vciip-timeline__slot">
                    <p className="apie-vciip-timeline__year">{item.year}</p>
                  </div>
                ))}
              </div>

              <div className="apie-vciip-timeline__row apie-vciip-timeline__row--rail" aria-hidden="true">
                <span className="apie-vciip-timeline__rail-line" />
                {apieVciipTimeline.items.map((item) => (
                  <div key={`${item.year}-dot`} className="apie-vciip-timeline__slot apie-vciip-timeline__slot--rail">
                    <span className="apie-vciip-timeline__dot" />
                  </div>
                ))}
              </div>

              <div className="apie-vciip-timeline__row apie-vciip-timeline__row--labels">
                {apieVciipTimeline.items.map((item) => (
                  <div key={`${item.year}-label`} className="apie-vciip-timeline__slot">
                    <p className="apie-vciip-timeline__label">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
