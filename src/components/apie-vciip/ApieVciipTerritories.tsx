import { apieVciipTerritories } from "../../content/apieVciip";
import { GatewayDestinationCards } from "../GatewayDestinationCards";

export function ApieVciipTerritories() {
  return (
    <section className="relative overflow-hidden bg-primary text-white section-shell">
      <div className="site-container relative z-[2] px-6 max-[479px]:px-4">
        <div className="mb-12 flex flex-col gap-6 max-[479px]:mb-8" data-reveal-group>
          <p className="eyebrow eyebrow-on-dark reveal-item">{apieVciipTerritories.eyebrow}</p>
          <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.62fr)]">
            <h2 className="section-heading reveal-item max-w-4xl text-white">
              {apieVciipTerritories.title}
            </h2>
            <p className="reveal-item m-0 max-w-xl justify-self-end text-base font-normal leading-normal text-white/74">
              {apieVciipTerritories.intro}
            </p>
          </div>
        </div>

        <GatewayDestinationCards destinations={apieVciipTerritories.cards} reveal={false} />
      </div>
    </section>
  );
}
