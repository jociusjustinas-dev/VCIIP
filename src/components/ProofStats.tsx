import { useEffect, useRef, useState } from "react";

import { stats } from "../content/site";

export function ProofStats() {
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleTiles, setVisibleTiles] = useState<boolean[]>(stats.map(() => false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

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
    <section id="ekosistema" className="relative bg-white section-shell">
      <div className="site-container relative z-[2] px-6 max-[479px]:px-4">
        <div className="mb-10 flex flex-col gap-5 max-[479px]:mb-8" data-reveal-group>
          <div className="h-0 w-full border-b border-dashed border-primary/48" />

          <p className="eyebrow reveal-item text-primary/72">VCIIP šiandien</p>

          <h2 className="section-heading reveal-item max-w-3xl">
            VCIIP formuoja pažangių industrijų ekosistemą Vilniuje.
          </h2>
        </div>

        <div className="grid border-t border-dashed border-primary/48 sm:grid-cols-2 lg:grid-cols-4" data-reveal-group>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(element) => {
                tileRefs.current[index] = element;
              }}
              className="reveal-item flex flex-col gap-3 border-dashed border-primary/48 px-0 py-6 transition-all duration-700 ease-out max-sm:[&:not(:first-child)]:border-t sm:px-5 sm:[&:nth-child(even)]:border-l sm:[&:nth-child(n+3)]:border-t lg:[&:not(:first-child)]:border-l lg:[&:nth-child(n+3)]:border-t-0 lg:px-6"
              style={{
                opacity: visibleTiles[index] ? 1 : 0,
                transform: visibleTiles[index] ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="stat-value text-primary">{stat.value}</div>
              <div className="text-base leading-loose text-primary/78">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
