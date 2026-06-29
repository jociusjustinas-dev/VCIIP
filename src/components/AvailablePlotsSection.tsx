import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

import vciipOverviewImage from "../assets/images/vciip-overview.jpg";
import { plotsSectionCopy } from "../content/plots";
import { fetchPlots, getDefaultPlotId } from "../lib/plots";
import type { Plot, PlotStatus } from "../types/plot";

const statusLabels: Record<PlotStatus, string> = {
  available: "Laisvas",
  reserved: "Rezervuotas",
  planned: "Planuojamas",
};

const infrastructureItems = [
  { key: "electric" as const, label: "Elektra" },
  { key: "water" as const, label: "Vanduo" },
  { key: "gas" as const, label: "Dujos" },
  { key: "communications" as const, label: "Komunikacijos" },
];

function PlotStatusBadge({ status }: { status: PlotStatus }) {
  return (
    <span className={`plot-status plot-status--${status}`}>
      <span className="plot-status__dot" aria-hidden="true" />
      {statusLabels[status]}
    </span>
  );
}

function PlotDetailCard({
  plot,
  onSelectCta,
}: {
  plot: Plot;
  onSelectCta: () => void;
}) {
  return (
    <article className="plot-detail-card">
      <div className="plot-detail-card__header">
        <h3 className="plot-detail-card__title">{plot.name}</h3>
        <PlotStatusBadge status={plot.status} />
      </div>

      <dl className="plot-detail-card__meta">
        <div className="plot-detail-card__row">
          <dt>Plotas</dt>
          <dd>{plot.area}</dd>
        </div>
        <div className="plot-detail-card__row">
          <dt>Paskirtis</dt>
          <dd>{plot.purpose.join(" · ")}</dd>
        </div>
      </dl>

      <div className="plot-detail-card__infra">
        <p className="plot-detail-card__label">Infrastruktūra</p>
        <ul className="plot-detail-card__infra-list">
          {infrastructureItems.map(({ key, label }) => (
            <li key={key} className={plot.infrastructure[key] ? "is-available" : "is-unavailable"}>
              {plot.infrastructure[key] ? (
                <Check size={14} aria-hidden="true" />
              ) : (
                <span className="plot-detail-card__dash" aria-hidden="true">
                  —
                </span>
              )}
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="plot-detail-card__actions">
        <a
          href={plot.ctaHref}
          className="group inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-none bg-primary px-5 py-3 text-base font-semibold leading-none text-white transition hover:bg-accent"
          onClick={onSelectCta}
        >
          <span className="h-5 overflow-hidden py-px">
            <span className="flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-1/2">
              {[plotsSectionCopy.primaryCta, plotsSectionCopy.primaryCta].map((label, index) => (
                <span key={index} className="flex h-5 items-center gap-2">
                  {label}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              ))}
            </span>
          </span>
        </a>

        {plot.planDownloadUrl ? (
          <a
            href={plot.planDownloadUrl}
            className="inline-flex min-h-12 w-fit items-center justify-center rounded-none border border-primary/18 px-5 py-3 text-base font-semibold leading-none text-primary transition hover:border-accent hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            {plotsSectionCopy.secondaryCta}
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function AvailablePlotsSection() {
  const [plots, setPlots] = useState<Plot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activePlotId, setActivePlotId] = useState("");
  const [hoveredPlotId, setHoveredPlotId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetchPlots()
      .then((nextPlots) => {
        if (!isMounted) return;
        setPlots(nextPlots);
        setActivePlotId(getDefaultPlotId(nextPlots));
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const highlightedPlotId = hoveredPlotId ?? activePlotId;

  const highlightedPlot = useMemo(
    () => plots.find((plot) => plot.id === highlightedPlotId) ?? plots[0],
    [plots, highlightedPlotId],
  );

  if (isLoading) {
    return (
      <section id="sklypai" className="plot-section relative bg-white section-shell">
        <div className="site-container px-6 max-[479px]:px-4">
          <div className="plot-section__intro" data-reveal-group>
            <p className="eyebrow reveal-item">{plotsSectionCopy.eyebrow}</p>
            <h2 className="section-heading reveal-item max-w-4xl">{plotsSectionCopy.title}</h2>
            <p className="reveal-item body-lead m-0 max-w-3xl text-muted">{plotsSectionCopy.intro}</p>
          </div>
          <div className="plot-section__loading" aria-hidden="true">
            <div className="plot-section__loading-map" />
            <div className="plot-section__loading-panel" />
          </div>
        </div>
      </section>
    );
  }

  if (!highlightedPlot) return null;

  return (
    <section id="sklypai" className="plot-section relative bg-white section-shell">
      <div className="site-container px-6 max-[479px]:px-4">
        <div className="plot-section__intro" data-reveal-group>
          <p className="eyebrow reveal-item">{plotsSectionCopy.eyebrow}</p>
          <h2 className="section-heading reveal-item max-w-4xl">{plotsSectionCopy.title}</h2>
          <p className="reveal-item body-lead m-0 max-w-3xl text-muted">{plotsSectionCopy.intro}</p>
        </div>

        <div className="plot-section__workspace reveal-item" data-reveal="fade">
          <div className="plot-section__map-wrap">
            <div className="plot-section__map">
              <img
                src={vciipOverviewImage}
                alt="VCIIP TECH teritorijos schema"
                className="plot-section__map-image"
              />

              {plots.map((plot) => {
                const isActive = plot.id === activePlotId;
                const isHighlighted = plot.id === highlightedPlotId;

                return (
                  <button
                    key={plot.id}
                    type="button"
                    className={`plot-marker plot-marker--${plot.status} ${
                      isHighlighted ? "is-highlighted" : ""
                    } ${isActive ? "is-active" : ""}`}
                    style={{ left: plot.mapPosition.left, top: plot.mapPosition.top }}
                    aria-label={`${plot.name}, ${statusLabels[plot.status]}`}
                    aria-pressed={isActive}
                    onMouseEnter={() => setHoveredPlotId(plot.id)}
                    onMouseLeave={() => setHoveredPlotId(null)}
                    onFocus={() => setHoveredPlotId(plot.id)}
                    onBlur={() => setHoveredPlotId(null)}
                    onClick={() => setActivePlotId(plot.id)}
                  >
                    <span>{plot.letter}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="plot-section__panel">
            <PlotDetailCard plot={highlightedPlot} onSelectCta={() => setActivePlotId(highlightedPlot.id)} />
          </div>
        </div>

        <div className="plot-section__table-wrap reveal-item" data-reveal="fade">
          <table className="plot-table">
            <thead>
              <tr>
                <th scope="col">Sklypas</th>
                <th scope="col">Plotas</th>
                <th scope="col">Paskirtis</th>
                <th scope="col">Statusas</th>
              </tr>
            </thead>
            <tbody>
              {plots.map((plot) => {
                const isActive = plot.id === activePlotId;

                return (
                  <tr key={plot.id} className={isActive ? "is-active" : undefined}>
                    <td>
                      <button
                        type="button"
                        className="plot-table__button"
                        onClick={() => setActivePlotId(plot.id)}
                        aria-pressed={isActive}
                      >
                        {plot.letter}
                      </button>
                    </td>
                    <td>{plot.area}</td>
                    <td>{plot.purpose.join(", ")}</td>
                    <td>
                      <PlotStatusBadge status={plot.status} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <p className="plot-section__disclaimer">{plotsSectionCopy.disclaimer}</p>
        </div>

        <div className="plot-section__bottom reveal-item" data-reveal="fade">
          <div className="plot-section__bottom-divider" />
          <h3 className="heading-h3 m-0 text-primary">{plotsSectionCopy.bottomTitle}</h3>
          <p className="m-0 max-w-3xl text-base font-normal leading-loose text-muted">
            {plotsSectionCopy.bottomText}
          </p>
          <a
            href={plotsSectionCopy.bottomCtaHref}
            className="group inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-none bg-primary px-5 py-3 text-base font-semibold leading-none text-white transition hover:bg-accent"
          >
            <span className="h-5 overflow-hidden py-px">
              <span className="flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-1/2">
                {[plotsSectionCopy.bottomCta, plotsSectionCopy.bottomCta].map((label, index) => (
                  <span key={index} className="flex h-5 items-center gap-2">
                    {label}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                ))}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
