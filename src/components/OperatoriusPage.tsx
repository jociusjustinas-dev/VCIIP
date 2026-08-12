import { parkPairCta } from "../content/klientai";
import { operatoriusContent } from "../content/operatorius";
import { AdvantagesSection } from "./AdvantagesSection";
import { ApieVciipTimeline } from "./apie-vciip/ApieVciipTimeline";
import { HubSplitHero } from "./HubSplitHero";
import { ParkPairCards } from "./ParkPairCards";
import { WhyVilniusCarousel } from "./WhyVilniusCarousel";

export function OperatoriusPage() {
  const { hero, services, areas, timeline } = operatoriusContent;

  return (
    <main className="bg-white">
      <HubSplitHero
        id="operatorius"
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        media={{ type: "image", src: hero.imageSrc, alt: hero.imageAlt }}
      />

      <WhyVilniusCarousel
        id={services.id}
        eyebrow={services.eyebrow}
        title={services.title}
        intro={services.intro}
        items={services.items}
        tone="gradient"
        showNumbers
      />

      <AdvantagesSection
        id={areas.id}
        eyebrow={areas.eyebrow}
        title={areas.title}
        items={areas.items}
        imageSrc={areas.imageSrc}
      />

      <ApieVciipTimeline
        eyebrow={timeline.eyebrow}
        title={
          <>
            Operatoriaus
            <br />
            įsitraukimas VCIIP plėtroje
          </>
        }
        items={timeline.items}
      />

      <ParkPairCards
        title={parkPairCta.title}
        description={parkPairCta.description}
        primaryCta={parkPairCta.primaryCta}
        bio={parkPairCta.bio}
        tech={parkPairCta.tech}
      />
    </main>
  );
}
