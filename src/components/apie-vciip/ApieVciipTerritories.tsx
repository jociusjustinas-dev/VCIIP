import { apieVciipTerritories } from "../../content/apieVciip";
import { GatewayDestinationCards } from "../GatewayDestinationCards";

export function ApieVciipTerritories() {
  return (
    <section className="relative bg-white section-shell">
      <div className="site-container px-6 max-[479px]:px-4">
        <div className="vilnius-partners-intro max-[767px]:mb-8" data-reveal-group>
          <div className="section-eyebrow-rule" />
          <div className="vilnius-partners-intro__row">
            <div className="vilnius-partners-intro__title-col">
              <p className="eyebrow reveal-item">{apieVciipTerritories.eyebrow}</p>
              <h2 className="section-heading reveal-item">{apieVciipTerritories.title}</h2>
            </div>
            <p className="vilnius-partners-intro__body reveal-item">{apieVciipTerritories.intro}</p>
          </div>
        </div>

        <GatewayDestinationCards destinations={apieVciipTerritories.cards} reveal={false} />
      </div>
    </section>
  );
}
