import { useEffect, useRef, useState } from "react";

import { stats as defaultStats } from "../content/site";

type StatItem = {
  value: string;
  label: string;
};

export function ProofStats({
  showTopDivider = true,
  sectionId = "ekosistema",
  eyebrow = "VCIIP šiandien",
  title = "VCIIP formuoja pažangių industrijų ekosistemą Vilniuje.",
  description,
  stats = defaultStats,
}: {
  showTopDivider?: boolean;
  sectionId?: string | false;
  eyebrow?: string;
  title?: string;
  description?: string;
  stats?: StatItem[];
}) {
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleTiles, setVisibleTiles] = useState<boolean[]>(stats.map(() => false));
  const columnCount = Math.min(Math.max(stats.length, 1), 4);
  const desktopColsClass =
    columnCount === 1
      ? "lg:grid-cols-1"
      : columnCount === 2
        ? "lg:grid-cols-2"
        : columnCount === 3
          ? "lg:grid-cols-3"
          : "lg:grid-cols-4";

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
    <section
      {...(sectionId ? { id: sectionId } : {})}
      className="relative bg-white section-shell"
    >
      <div className="site-container relative z-[2]">
        <div className="section-intro max-[479px]:mb-8" data-reveal-group>
          {showTopDivider ? <div className="section-eyebrow-rule" /> : null}

          <p className="eyebrow reveal-item">{eyebrow}</p>

          {description ? (
            <div className="reveal-item mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-16">
              <h2 className="section-heading m-0 max-w-xl">{title}</h2>
              <p className="m-0 max-w-xl text-base leading-loose text-muted lg:max-w-md xl:max-w-lg">
                {description}
              </p>
            </div>
          ) : (
            <h2 className="section-heading reveal-item max-w-3xl">{title}</h2>
          )}
        </div>

        <div
          className={`stats-divider-grid sm:grid-cols-2 ${desktopColsClass}`}
          data-reveal-group
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(element) => {
                tileRefs.current[index] = element;
              }}
              className="reveal-item flex flex-col gap-3 px-0 py-6 transition-all duration-700 ease-out sm:px-5 lg:px-6"
              style={{
                opacity: visibleTiles[index] ? 1 : 0,
                transform: visibleTiles[index] ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="stat-value-banner">{stat.value}</div>
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
