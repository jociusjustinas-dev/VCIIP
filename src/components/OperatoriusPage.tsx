import { parkPairCta } from "../content/klientai";
import { operatoriusContent } from "../content/operatorius";
import { HubSplitHero } from "./HubSplitHero";
import { ParkPairCards } from "./ParkPairCards";

export function OperatoriusPage() {
  const { hero, services, areas, timeline } = operatoriusContent;

  return (
    <main>
      <HubSplitHero
        id="operatorius"
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        primaryCta={{ label: hero.cta.label, href: hero.cta.href }}
        secondaryCta={{ label: "Susisiekti", href: "/kontaktai" }}
        media={{
          type: "image",
          src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
          alt: "Operatoriaus biuro ir konsultacijų aplinka",
        }}
      />

      <section className="section-shell bg-white">
        <div className="site-container" data-reveal-group>
          <h2 className="section-heading reveal-item max-w-3xl">{services.title}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.items.map((item) => (
              <article key={item.title} className="reveal-item border-t border-dashed border-primary/22 pt-5">
                <h3 className="heading-h3 text-primary">{item.title}</h3>
                <p className="m-0 mt-3 text-base leading-loose text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-background">
        <div className="site-container" data-reveal-group>
          <h2 className="section-heading reveal-item max-w-3xl">{areas.title}</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {areas.items.map((item) => (
              <article key={item.title} className="reveal-item border border-dashed border-primary/16 bg-white p-6">
                <h3 className="heading-h3 text-primary">{item.title}</h3>
                <p className="m-0 mt-3 whitespace-pre-line text-base leading-loose text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="site-container" data-reveal-group>
          <h2 className="section-heading reveal-item max-w-3xl">{timeline.title}</h2>
          <div className="mt-10 grid gap-4">
            {timeline.items.map((item) => (
              <div
                key={item.year}
                className="reveal-item grid gap-3 border-t border-dashed border-primary/18 py-5 md:grid-cols-[7rem_minmax(0,1fr)]"
              >
                <p className="m-0 font-display text-xl font-bold text-accent">{item.year}</p>
                <p className="m-0 text-base leading-loose text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
