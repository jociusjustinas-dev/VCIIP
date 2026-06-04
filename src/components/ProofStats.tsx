import { useEffect, useRef, useState } from "react";

import { stats } from "../content/site";

export function ProofStats() {
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [highlightVisible, setHighlightVisible] = useState(false);
  const [visibleTiles, setVisibleTiles] = useState<boolean[]>(stats.map(() => false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHighlightVisible(true);
          headingObserver.disconnect();
        }
      },
      { threshold: 0.55 },
    );

    if (headingRef.current) {
      headingObserver.observe(headingRef.current);
      observers.push(headingObserver);
    }

    tileRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleTiles((previous) => {
              const next = [...previous];
              next[index] = true;
              return next;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section id="ekosistema" className="relative bg-white py-20 max-[991px]:py-16 max-[479px]:py-12">
      <div className="site-container relative z-[2] px-6 max-[479px]:px-4">
        <div className="mb-24 flex flex-col gap-8 max-[991px]:mb-12 max-[479px]:mb-8" data-reveal-group>
          <div className="h-0 w-full border-b border-dashed border-primary/48" />

          <p className="eyebrow reveal-item text-primary/72">
            VCIIP šiandien
          </p>

          <h2 ref={headingRef} className="section-heading reveal-item max-w-4xl">
            VCIIP formuoja pažangių industrijų{" "}
            <span
              className={`heading-highlight-animated -ml-2 -mr-2 px-2 py-1 ${
                highlightVisible ? "is-visible" : ""
              }`}
            >
              <span className="relative z-[1]">ekosistemą Vilniuje</span>
            </span>
            .
          </h2>
        </div>

        <div className="flex flex-col gap-8" data-reveal-group>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(element) => {
                tileRefs.current[index] = element;
              }}
              className="reveal-item grid gap-8 border-t border-dashed border-primary/48 pt-8 transition-all duration-700 ease-out max-[479px]:grid-cols-1 sm:grid-cols-2"
              style={{
                opacity: visibleTiles[index] ? 1 : 0,
                transform: visibleTiles[index] ? "translateY(0)" : "translateY(32px)",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex flex-col items-start justify-between font-sans text-2xl font-medium leading-[1.16] tracking-normal text-primary max-[479px]:text-xl">
                {stat.label}
              </div>

              <div className="font-sans text-[104px] font-medium leading-[0.96] tracking-normal text-primary max-[991px]:text-[64px] max-[767px]:text-[56px] max-[479px]:text-[12.5vw]">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
