import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { testimonials, type Testimonial } from "../content/testimonials";

type DragState = {
  active: boolean;
  pointerId: number | null;
  startX: number;
  scrollLeft: number;
  moved: boolean;
};

function CarouselNav({
  canScrollPrev,
  canScrollNext,
  onPrev,
  onNext,
}: {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="why-vilnius-carousel__nav">
      <button
        type="button"
        aria-label="Ankstesnis atsiliepimas"
        onClick={onPrev}
        disabled={!canScrollPrev}
        className="why-vilnius-carousel__nav-btn"
      >
        <ChevronLeft size={22} aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Kitas atsiliepimas"
        onClick={onNext}
        disabled={!canScrollNext}
        className="why-vilnius-carousel__nav-btn"
      >
        <ChevronRight size={22} aria-hidden="true" />
      </button>
    </div>
  );
}

export function TestimonialsCarousel() {
  const [active, setActive] = useState<Testimonial | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<DragState>({
    active: false,
    pointerId: null,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  const updateScrollState = () => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScrollPrev(track.scrollLeft > 4);
    setCanScrollNext(track.scrollLeft < maxScroll - 4);
  };

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
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>(".testimonial-card");
    if (!card) return;

    const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;
    track.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const track = trackRef.current;
    if (!track) return;

    dragState.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
      moved: false,
    };

    track.setPointerCapture(event.pointerId);
    track.classList.add("is-dragging");
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const drag = dragState.current;
    if (!track || !drag.active || drag.pointerId !== event.pointerId) return;

    const delta = event.clientX - drag.startX;
    if (Math.abs(delta) > 4) drag.moved = true;

    track.scrollLeft = drag.scrollLeft - delta;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const drag = dragState.current;
    if (!track || !drag.active || drag.pointerId !== event.pointerId) return;

    drag.active = false;
    drag.pointerId = null;
    track.classList.remove("is-dragging");

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    window.setTimeout(() => {
      drag.moved = false;
    }, 0);

    updateScrollState();
  };

  const handleCardClick = (item: Testimonial) => {
    if (dragState.current.moved) return;
    setActive(item);
  };

  return (
    <section id="atsiliepimai" className="section-shell bg-white">
      <div className="site-container" data-reveal-group>
        <p className="eyebrow reveal-item">Atsiliepimai</p>
        <h2 className="section-heading reveal-item mt-4 max-w-3xl">Ką sako VCIIP bendruomenė</h2>
      </div>

      <div className="reveal-item mt-12 max-[991px]:mt-10 max-[479px]:mt-8" data-reveal="fade">
        <div
          ref={trackRef}
          className="testimonials-carousel__track"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          {testimonials.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleCardClick(item)}
              className="testimonial-card flex h-[min(24rem,70vw)] w-[min(86vw,26rem)] flex-none flex-col justify-between p-8 text-left max-[479px]:h-auto max-[479px]:min-h-[20rem] max-[479px]:p-6"
            >
              <p className="m-0 line-clamp-7 text-xl font-normal leading-normal text-primary/82 max-[479px]:text-lg">
                {item.excerpt}
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-dashed border-primary/14 pt-5">
                {item.photo ? (
                  <img src={item.photo} alt="" className="size-12 shrink-0 object-cover" loading="lazy" />
                ) : (
                  <span className="grid size-12 shrink-0 place-items-center bg-primary/8 font-display text-sm font-bold text-primary">
                    {item.name.slice(0, 1)}
                  </span>
                )}
                <div className="min-w-0">
                  <p className="m-0 text-base font-semibold text-primary">{item.name}</p>
                  <p className="m-0 text-sm text-muted">
                    {item.company}
                    {item.role ? `, ${item.role}` : ""}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="site-container">
        <CarouselNav
          canScrollPrev={canScrollPrev}
          canScrollNext={canScrollNext}
          onPrev={() => scrollByCard(-1)}
          onNext={() => scrollByCard(1)}
        />
      </div>

      {active ? (
        <div
          className="modal-fade fixed inset-0 z-[1000] grid place-items-center bg-primary/80 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Atsiliepimas"
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
            <div className="flex items-center gap-3 pr-12">
              {active.photo ? <img src={active.photo} alt="" className="size-14 object-cover" /> : null}
              <div>
                <p className="m-0 text-base font-semibold text-primary">{active.name}</p>
                <p className="m-0 text-sm text-muted">
                  {active.company}
                  {active.role ? `, ${active.role}` : ""}
                </p>
              </div>
            </div>
            <p className="m-0 mt-6 text-base leading-loose text-muted">{active.quote}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
