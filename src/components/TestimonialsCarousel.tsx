import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { testimonials, type Testimonial } from "../content/testimonials";

export function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Testimonial | null>(null);

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
    trackRef.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  };

  return (
    <section id="atsiliepimai" className="section-shell bg-background">
      <div className="site-container" data-reveal-group>
        <p className="eyebrow reveal-item">Atsiliepimai</p>
        <h2 className="section-heading reveal-item mt-4 max-w-3xl">Ką sako VCIIP bendruomenė</h2>
      </div>

      <div className="reveal-item mt-10 overflow-hidden" data-reveal="fade">
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto px-[max(1rem,calc((100%-min(100%-2rem,1800px))/2+var(--page-gutter)))] pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item)}
              className="flex w-[min(86vw,340px)] shrink-0 flex-col gap-5 border border-primary/12 bg-white p-6 text-left transition hover:border-primary/28"
            >
              <p className="m-0 line-clamp-5 text-base leading-loose text-muted">{item.excerpt}</p>
              <div className="mt-auto flex items-center gap-3 border-t border-dashed border-primary/14 pt-4">
                {item.photo ? (
                  <img src={item.photo} alt="" className="size-12 object-cover" />
                ) : (
                  <span className="grid size-12 place-items-center bg-primary/8 font-display text-sm font-bold text-primary">
                    {item.name.slice(0, 1)}
                  </span>
                )}
                <div>
                  <p className="m-0 text-sm font-semibold text-primary">{item.name}</p>
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

      <div className="site-container mt-6 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Ankstesni atsiliepimai"
          onClick={() => scrollBy(-1)}
          className="flex size-12 items-center justify-center border border-primary/16 bg-white text-primary transition hover:border-accent hover:bg-accent hover:text-white"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          aria-label="Kiti atsiliepimai"
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
