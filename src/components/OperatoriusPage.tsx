import { parkPairCta } from "../content/klientai";
import { operatoriusContent } from "../content/operatorius";
import { AdvantagesSection } from "./AdvantagesSection";
import { ApieVciipTimeline } from "./apie-vciip/ApieVciipTimeline";
import { HubSplitHero } from "./HubSplitHero";
import { ParkPairCards } from "./ParkPairCards";

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

      <section id={services.id} className="section-shell bg-background">
        <div className="site-container">
          <div
            className="mb-16 grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.62fr)] max-[991px]:mb-12"
            data-reveal-group
          >
            <div className="flex flex-col items-start gap-7">
              <div className="reveal-item h-0 w-full border-b border-dashed border-primary/45" />
              <p className="eyebrow reveal-item">{services.eyebrow}</p>
              <h2 className="section-heading reveal-item max-w-4xl">{services.title}</h2>
            </div>
            <p className="reveal-item m-0 max-w-xl justify-self-end text-base font-normal leading-loose text-muted">
              {services.intro}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3" data-reveal-group>
            {services.items.map((item) => (
              <article
                key={item.title}
                className="reveal-item border-t border-dashed border-primary/22 pt-5"
              >
                <h3 className="heading-h3 text-primary">{item.title}</h3>
                <p className="m-0 mt-3 text-base leading-loose text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AdvantagesSection
        id={areas.id}
        eyebrow={areas.eyebrow}
        title={areas.title}
        items={areas.items}
        imageSrc={areas.imageSrc}
      />

      <ApieVciipTimeline
        eyebrow={timeline.eyebrow}
        title={timeline.title}
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
