import { useEffect, useRef, useState } from "react";

import { stats } from "../content/site";

export function ProofStats({ showTopDivider = true }: { showTopDivider?: boolean }) {
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
    <section id="ekosistema" className="relative bg-white p-2">
      <div className="overflow-hidden rounded-none bg-background py-10 max-[991px]:py-8 max-[479px]:py-7">
        <div className="content-container px-6 max-[479px]:px-4">
          <div className="mb-8 flex flex-col gap-4 max-[479px]:mb-6" data-reveal-group>
            {showTopDivider ? (
              <div className="h-0 w-full border-b border-dashed border-primary/32" />
            ) : null}

            <p className="eyebrow reveal-item text-primary/72">VCIIP šiandien</p>

            <h2 className="reveal-item m-0 max-w-3xl font-display text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-tight tracking-tight text-primary">
              VCIIP formuoja pažangių industrijų ekosistemą Vilniuje.
            </h2>
          </div>

          <div
            className="grid border-t border-dashed border-primary/32 sm:grid-cols-2 lg:grid-cols-4"
            data-reveal-group
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                ref={(element) => {
                  tileRefs.current[index] = element;
                }}
                className="reveal-item flex flex-col gap-2 border-dashed border-primary/32 px-0 py-4 transition-all duration-700 ease-out max-sm:[&:not(:first-child)]:border-t sm:px-4 sm:[&:nth-child(even)]:border-l sm:[&:nth-child(n+3)]:border-t lg:[&:not(:first-child)]:border-l lg:[&:nth-child(n+3)]:border-t-0 lg:px-5"
                style={{
                  opacity: visibleTiles[index] ? 1 : 0,
                  transform: visibleTiles[index] ? "translateY(0)" : "translateY(12px)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="stat-value-banner">{stat.value}</div>
                <div className="text-sm font-medium leading-[1.6] text-primary/78">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
