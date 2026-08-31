import { useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import modernOfficeImage from "../assets/images/modern-office-work.png";
import { ParallaxImage } from "./ParallaxImage";

type AdvantageItem = {
  title: string;
  body: string;
  href?: string;
};

export function AdvantagesSection({
  id = "privalumai",
  eyebrow = "Privalumai",
  title,
  items,
  imageSrc = modernOfficeImage,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  items: readonly AdvantageItem[];
  imageSrc?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [stableMinHeight, setStableMinHeight] = useState<number>();
  const leftColRef = useRef<HTMLDivElement>(null);
  const bodyRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const measure = () => {
      const left = leftColRef.current;
      if (!left || window.innerWidth < 992) {
        setStableMinHeight(undefined);
        return;
      }

      const previousMinHeight = left.style.minHeight;
      left.style.minHeight = "0px";

      const bodyHeights = bodyRefs.current.map((element) => element?.offsetHeight ?? 0);
      const maxBodyHeight = Math.max(0, ...bodyHeights);
      const openBodyHeight = openIndex == null ? 0 : (bodyHeights[openIndex] ?? 0);
      const nextHeight = Math.ceil(left.offsetHeight - openBodyHeight + maxBodyHeight);

      left.style.minHeight = previousMinHeight;
      setStableMinHeight((current) => (current === nextHeight ? current : nextHeight));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items, openIndex]);

  return (
    <section id={id} className="relative section-shell bg-white">
      <div className="site-container">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div
            ref={leftColRef}
            className="flex min-w-0 flex-col justify-between gap-16 max-[991px]:gap-12"
            style={stableMinHeight ? { minHeight: stableMinHeight } : undefined}
          >
            <div className="flex flex-col gap-6" data-reveal-group>
              <div className="h-0 w-full border-b border-dashed border-primary/45" />
              {eyebrow ? <p className="eyebrow reveal-item">{eyebrow}</p> : null}
              <h2 className="section-heading reveal-item max-w-3xl">{title}</h2>
            </div>

            <div className="reveal-item mt-2 flex w-full flex-col">
              {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <article key={item.title} className="w-full border-b border-dashed border-primary/18 last:border-b-0">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="group flex w-full items-center gap-4 py-5 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      <span
                        className={`min-w-0 flex-1 font-display text-xl font-bold leading-tight tracking-tight transition-colors duration-300 max-[479px]:text-lg ${
                          isOpen ? "text-accent" : "text-primary group-hover:text-accent"
                        }`}
                      >
                        {item.title}
                      </span>
                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        className={`shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 text-accent"
                            : "text-primary/45 group-hover:text-accent"
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div
                        ref={(element) => {
                          bodyRefs.current[index] = element;
                        }}
                        className="max-w-2xl pb-6"
                      >
                        <p className="m-0 whitespace-pre-line text-base leading-loose text-muted">{item.body}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-primary transition hover:text-accent"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Skaityti daugiau
                            <ArrowUpRight size={16} aria-hidden="true" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div
            className="reveal-item relative min-h-[420px] overflow-hidden rounded-none bg-primary max-[991px]:min-h-[380px] max-[767px]:min-h-[320px] max-[479px]:min-h-[280px] lg:h-full lg:min-h-0"
            data-reveal="scale"
          >
            <ParallaxImage
              src={imageSrc}
              alt=""
              className="absolute inset-0 h-full w-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_8%,transparent),color-mix(in_srgb,var(--color-primary)_48%,transparent))]" />
          </div>
        </div>
      </div>
    </section>
  );
}
