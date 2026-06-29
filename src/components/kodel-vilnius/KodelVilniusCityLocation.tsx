import vciipOverviewImage from "../../assets/images/vciip-overview.jpg";
import { kodelVilniusCityLocation } from "../../content/kodelVilnius";

export function KodelVilniusCityLocation() {
  return (
    <section className="relative bg-white section-shell">
      <div className="site-container px-6 max-[479px]:px-4">
        <div
          className="mb-10 grid items-end gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] max-[767px]:mb-8"
          data-reveal-group
        >
          <div className="flex flex-col gap-5">
            <div className="h-0 w-full border-b border-dashed border-primary/28" />
            <p className="eyebrow reveal-item">{kodelVilniusCityLocation.eyebrow}</p>
            <h2 className="section-heading reveal-item max-w-3xl">{kodelVilniusCityLocation.title}</h2>
          </div>

          <p className="reveal-item m-0 max-w-xl text-base leading-loose text-muted lg:justify-self-end">
            {kodelVilniusCityLocation.intro}
          </p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.55fr)] lg:gap-10">
          <div
            className="reveal-item relative min-h-[320px] overflow-hidden rounded-none border border-primary/12 bg-primary max-[767px]:min-h-[280px] lg:min-h-[480px]"
            data-reveal="scale"
          >
            <img
              src={vciipOverviewImage}
              alt="VCIIP teritorijos žemėlapis Vilniuje"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_8%,transparent),color-mix(in_srgb,var(--color-primary)_42%,transparent))]" />

            {kodelVilniusCityLocation.pins.map((pin) => (
              <div
                key={pin.label}
                className="vilnius-city-pin"
                style={{ left: pin.left, top: pin.top }}
              >
                <span className="vilnius-city-pin__dot" aria-hidden="true" />
                <span className="vilnius-city-pin__label">{pin.label}</span>
              </div>
            ))}
          </div>

          <div className="reveal-item flex flex-col justify-center gap-6 border border-primary/12 p-6 lg:p-8" data-reveal="fade">
            <p className="m-0 text-base leading-loose text-muted">{kodelVilniusCityLocation.connectivity}</p>
            <ul className="m-0 grid list-none gap-0 p-0">
              {kodelVilniusCityLocation.pins.map((pin) => (
                <li
                  key={pin.label}
                  className="border-t border-dashed border-primary/16 py-3 text-sm font-medium leading-relaxed text-primary"
                >
                  {pin.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
