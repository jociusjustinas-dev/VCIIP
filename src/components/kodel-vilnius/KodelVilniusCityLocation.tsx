import { kodelVilniusCityLocation } from "../../content/kodelVilnius";

function LegendSymbol({ type }: { type: string }) {
  return <span className={`vilnius-map-legend__symbol vilnius-map-legend__symbol--${type}`} aria-hidden="true" />;
}

export function KodelVilniusCityLocation() {
  return (
    <section className="relative bg-white section-shell">
      <div className="site-container px-6 max-[479px]:px-4">
        <div
          className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-14"
          data-reveal-group
        >
          <div className="reveal-item vilnius-city-map" data-reveal="scale">
            <img
              src={kodelVilniusCityLocation.mapSrc}
              alt={kodelVilniusCityLocation.mapAlt}
              className="block h-auto w-full"
            />
          </div>

          <div className="reveal-item flex flex-col gap-8" data-reveal="fade">
            <div className="flex flex-col gap-5">
              <div className="h-0 w-full border-b border-dashed border-primary/48 lg:hidden" />
              <p className="eyebrow">{kodelVilniusCityLocation.eyebrow}</p>
              <h2 className="section-heading max-w-xl">{kodelVilniusCityLocation.title}</h2>
              <p className="m-0 text-base leading-loose text-muted">{kodelVilniusCityLocation.intro}</p>
            </div>

            <ul className="vilnius-map-legend m-0 list-none p-0">
              {kodelVilniusCityLocation.legend.map((item) => (
                <li key={item.label} className="vilnius-map-legend__item">
                  <span className="vilnius-map-legend__label">{item.label}</span>
                  <LegendSymbol type={item.symbol} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
