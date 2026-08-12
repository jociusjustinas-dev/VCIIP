import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { testimonials, type Testimonial } from "../content/testimonials";

export function TestimonialsCarousel() {
  const [active, setActive] = useState<Testimonial | null>(null);
  const marqueeCopies = [0, 1] as const;

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

  return (
    <section id="atsiliepimai" className="section-shell bg-background">
      <div className="site-container" data-reveal-group>
        <p className="eyebrow reveal-item">Atsiliepimai</p>
        <h2 className="section-heading reveal-item mt-4 max-w-3xl">Ką sako VCIIP bendruomenė</h2>
      </div>

      <div className="reveal-item mt-12 overflow-hidden max-[991px]:mt-10 max-[479px]:mt-8" data-reveal="fade">
        <div className="animate-marquee-testimonials flex w-max gap-5 max-[479px]:gap-3">
          {marqueeCopies.map((copyIndex) => (
            <div
              key={copyIndex}
              className="flex flex-none gap-5 max-[479px]:gap-3"
              aria-hidden={copyIndex > 0}
            >
              {testimonials.map((item) => (
                <button
                  key={`${copyIndex}-${item.id}`}
                  type="button"
                  onClick={() => setActive(item)}
                  className="flex h-[min(24rem,70vw)] w-[min(86vw,26rem)] flex-none flex-col justify-between bg-white p-8 text-left transition hover:bg-white max-[479px]:h-auto max-[479px]:min-h-[20rem] max-[479px]:p-6"
                >
                  <p className="m-0 line-clamp-7 font-display text-2xl font-bold leading-tight tracking-tight text-primary max-[479px]:text-xl">
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
          ))}
        </div>
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
