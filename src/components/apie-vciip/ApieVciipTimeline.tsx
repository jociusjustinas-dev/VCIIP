import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { apieVciipTimeline } from "../../content/apieVciip";

export function ApieVciipTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    setCanScrollPrev(track.scrollLeft > 4);
    setCanScrollNext(track.scrollLeft < maxScrollLeft - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollTimeline = (direction: "previous" | "next") => {
    const track = trackRef.current;
    if (!track) return;

    const milestone = track.querySelector<HTMLElement>(".apie-vciip-timeline__milestone");
    const scrollAmount = milestone ? milestone.offsetWidth : track.clientWidth * 0.75;

    track.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-background section-shell">
      <div className="site-container px-6 max-[479px]:px-4">
        <div className="section-intro max-[479px]:mb-8" data-reveal-group>
          <p className="eyebrow reveal-item">{apieVciipTimeline.eyebrow}</p>
          <h2 className="section-heading reveal-item max-w-3xl">{apieVciipTimeline.title}</h2>
        </div>

        <div className="reveal-item apie-vciip-timeline" data-reveal="fade">
          <div
            ref={trackRef}
            className="apie-vciip-timeline__viewport overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="apie-vciip-timeline__track">
              {apieVciipTimeline.items.map((item, index) => (
                <article key={item.year} className="apie-vciip-timeline__milestone">
                  <p className="apie-vciip-timeline__year">{item.year}</p>

                  <div className="apie-vciip-timeline__connector" aria-hidden="true">
                    <span className="apie-vciip-timeline__dot" />
                    {index < apieVciipTimeline.items.length - 1 ? (
                      <span className="apie-vciip-timeline__line" />
                    ) : null}
                  </div>

                  <p className="apie-vciip-timeline__label">{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          {(canScrollPrev || canScrollNext) && (
            <div className="apie-vciip-timeline__controls">
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
          )}
        </div>
      </div>
    </section>
  );
}
