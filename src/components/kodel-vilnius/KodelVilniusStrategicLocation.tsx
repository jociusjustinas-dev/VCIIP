import { kodelVilniusStrategicLocation } from "../../content/kodelVilnius";

function EuropeLocationMap() {
  const { markers } = kodelVilniusStrategicLocation;

  return (
    <div className="vilnius-europe-map" aria-hidden="true">
      <svg viewBox="0 0 640 420" className="h-full w-full" role="img">
        <rect width="640" height="420" fill="var(--color-background)" />
        <path
          d="M120 120 C180 80, 280 70, 360 90 C430 108, 500 130, 540 180 C560 220, 520 280, 460 310 C380 350, 260 340, 180 300 C120 270, 90 210, 120 120 Z"
          fill="color-mix(in srgb, var(--color-primary) 6%, white)"
          stroke="color-mix(in srgb, var(--color-primary) 18%, transparent)"
          strokeWidth="1.5"
        />
        <path
          d="M300 150 L420 170 L460 240 L380 290 L250 260 Z"
          fill="color-mix(in srgb, var(--color-primary) 10%, white)"
          stroke="color-mix(in srgb, var(--color-primary) 22%, transparent)"
          strokeWidth="1.5"
        />
        <path
          d="M180 180 C220 160, 280 165, 320 190 C350 210, 340 250, 300 270 C250 295, 200 270, 180 230 Z"
          fill="color-mix(in srgb, var(--color-accent) 12%, white)"
          stroke="color-mix(in srgb, var(--color-accent) 40%, transparent)"
          strokeWidth="1.5"
        />
        <path
          d="M250 190 L430 210"
          stroke="color-mix(in srgb, var(--color-accent) 55%, transparent)"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        {markers.map((marker) => (
          <g key={marker.id} transform={`translate(${marker.x * 6.4} ${marker.y * 4.2})`}>
            <rect x="-5" y="-5" width="10" height="10" fill="var(--color-accent)" />
            <text
              x="12"
              y="4"
              fill="var(--color-primary)"
              fontFamily="var(--font-display)"
              fontSize="11"
              fontWeight="700"
            >
              {marker.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function KodelVilniusStrategicLocation() {
  return (
    <section className="relative bg-white section-shell">
      <div className="site-container px-6 max-[479px]:px-4">
        <div
          className="mb-10 grid items-end gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] max-[767px]:mb-8"
          data-reveal-group
        >
          <div className="flex flex-col gap-5">
            <div className="h-0 w-full border-b border-dashed border-primary/28" />
            <p className="eyebrow reveal-item">{kodelVilniusStrategicLocation.eyebrow}</p>
            <h2 className="section-heading reveal-item max-w-3xl">{kodelVilniusStrategicLocation.title}</h2>
          </div>
        </div>

        <div
          className="grid items-stretch gap-8 border border-primary/12 lg:grid-cols-2 lg:gap-0"
          data-reveal-group
        >
          <div className="reveal-item border-b border-primary/12 p-6 max-[991px]:min-h-[280px] lg:border-b-0 lg:border-r lg:p-8">
            <EuropeLocationMap />
          </div>

          <div className="reveal-item flex flex-col" data-reveal="fade">
            {kodelVilniusStrategicLocation.arguments.map((item, index) => (
              <article
                key={item.title}
                className={`flex flex-col gap-2 border-b border-dashed border-primary/16 px-6 py-6 lg:px-8 ${
                  index === kodelVilniusStrategicLocation.arguments.length - 1 ? "border-b-0" : ""
                }`}
              >
                <h3 className="heading-h3 text-primary">{item.title}</h3>
                <p className="m-0 text-base leading-loose text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
