import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { testimonials, type Testimonial } from "../content/testimonials";

type DragState = {
  active: boolean;
  pointerId: number | null;
  startX: number;
  scrollLeft: number;
  moved: boolean;
};

const AUTO_SCROLL_SPEED = 88;
const DRAG_THRESHOLD = 8;

function CarouselNav({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="why-vilnius-carousel__nav">
      <button
        type="button"
        aria-label="Ankstesnis atsiliepimas"
        onClick={onPrev}
        className="why-vilnius-carousel__nav-btn"
      >
        <ChevronLeft size={22} aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Kitas atsiliepimas"
        onClick={onNext}
        className="why-vilnius-carousel__nav-btn"
      >
        <ChevronRight size={22} aria-hidden="true" />
      </button>
    </div>
  );
}

function TestimonialCard({
  item,
  onOpen,
}: {
  item: Testimonial;
  onOpen: (item: Testimonial) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      aria-haspopup="dialog"
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
  );
}

export function TestimonialsCarousel() {
  const [active, setActive] = useState<Testimonial | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const loopWidthRef = useRef(0);
  const dragState = useRef<DragState>({
    active: false,
    pointerId: null,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });
  const loopItems = [...testimonials, ...testimonials];

  const normalizeLoopPosition = () => {
    const track = trackRef.current;
    const loopWidth = loopWidthRef.current;
    if (!track || loopWidth <= 0) return;

    while (track.scrollLeft >= loopWidth) {
      track.scrollLeft -= loopWidth;
    }

    while (track.scrollLeft < 0) {
      track.scrollLeft += loopWidth;
    }
  };

  const measureLoopWidth = () => {
    const track = trackRef.current;
    if (!track) return;

    loopWidthRef.current = track.scrollWidth / 2;
    normalizeLoopPosition();
  };

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

    window.setTimeout(normalizeLoopPosition, 320);
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
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const drag = dragState.current;
    if (!track || !drag.active || drag.pointerId !== event.pointerId) return;

    const delta = event.clientX - drag.startX;
    if (!drag.moved) {
      if (Math.abs(delta) < DRAG_THRESHOLD) return;

      drag.moved = true;
      track.setPointerCapture(event.pointerId);
      track.classList.add("is-dragging");
    }

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

    normalizeLoopPosition();

    window.setTimeout(() => {
      drag.moved = false;
    }, 0);
  };

  const handleCardClick = (item: Testimonial) => {
    if (dragState.current.moved) return;
    setActive(item);
  };

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.lenis?.stop();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  useLayoutEffect(() => {
    measureLoopWidth();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", measureLoopWidth);
    return () => window.removeEventListener("resize", measureLoopWidth);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || active) return;

    let frameId = 0;
    let lastTimestamp = 0;
    let paused = false;

    const tick = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;

      const shouldPause =
        paused ||
        isHovered ||
        dragState.current.active ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!shouldPause) {
        const deltaSeconds = (timestamp - lastTimestamp) / 1000;
        track.scrollLeft += AUTO_SCROLL_SPEED * deltaSeconds;
        normalizeLoopPosition();
      }

      lastTimestamp = timestamp;
      frameId = window.requestAnimationFrame(tick);
    };

    const onVisibilityChange = () => {
      paused = document.hidden;
      lastTimestamp = 0;
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [active, isHovered]);

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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {loopItems.map((item, index) => (
            <TestimonialCard
              key={`${item.id}-${index}`}
              item={item}
              onOpen={handleCardClick}
            />
          ))}
        </div>
      </div>

      <div className="site-container">
        <CarouselNav onPrev={() => scrollByCard(-1)} onNext={() => scrollByCard(1)} />
      </div>

      {active
        ? createPortal(
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
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
