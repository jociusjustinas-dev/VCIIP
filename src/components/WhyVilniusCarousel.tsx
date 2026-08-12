import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type WhyItem = {
  title: string;
  body: string;
};

export function WhyVilniusCarousel({
  title,
  items,
}: {
  title: string;
  items: readonly WhyItem[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: -1 | 1) => {
    trackRef.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  };

  return (
    <section id="kodel-vilnius" className="section-shell bg-background">
      <div className="site-container" data-reveal-group>
        <p className="eyebrow reveal-item">Kodėl Vilnius?</p>
        <h2 className="section-heading reveal-item mt-4 max-w-3xl">{title}</h2>
      </div>

      <div className="reveal-item mt-10 overflow-hidden" data-reveal="fade">
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto px-[max(1rem,calc((100%-min(100%-2rem,1800px))/2+var(--page-gutter)))] pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <article
              key={item.title}
              className="flex w-[min(86vw,360px)] shrink-0 flex-col border border-primary/12 bg-white p-6"
            >
              <h3 className="heading-h3 text-primary">{item.title}</h3>
              <p className="m-0 mt-3 text-base leading-loose text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="site-container mt-6 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Ankstesnės kortelės"
          onClick={() => scrollBy(-1)}
          className="flex size-12 items-center justify-center border border-primary/16 bg-white text-primary transition hover:border-accent hover:bg-accent hover:text-white"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          aria-label="Kitos kortelės"
          onClick={() => scrollBy(1)}
          className="flex size-12 items-center justify-center border border-primary/16 bg-white text-primary transition hover:border-accent hover:bg-accent hover:text-white"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
