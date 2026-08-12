import { kontaktaiContent } from "../content/kontaktai";
import { HubSplitHero } from "./HubSplitHero";
import { InvestorInquiry } from "./InvestorInquiry";

function personInitials(name: string) {
  return name
    .replace(/^Dr\.\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function KontaktaiPage() {
  const { hero, operator, form, people } = kontaktaiContent;

  return (
    <main className="bg-white">
      <HubSplitHero
        id="kontaktai"
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        media={{ type: "image", src: hero.imageSrc, alt: hero.imageAlt }}
      />

      <section id={operator.id} className="section-shell bg-white">
        <div className="site-container">
          <div
            className="reveal-item mb-14 h-0 w-full border-b border-dashed border-primary/45 max-[991px]:mb-10"
            data-reveal="fade"
          />

          <div
            className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16"
            data-reveal-group
          >
            <div className="reveal-item flex flex-col gap-5">
              <p className="eyebrow m-0">{operator.eyebrow}</p>
              <h2 className="section-heading max-w-xl">{operator.title}</h2>
            </div>

            <div className="reveal-item">
              <p className="m-0 font-display text-2xl font-bold leading-snug tracking-tight text-primary max-[479px]:text-xl">
                {operator.organization}
              </p>
              <ul className="m-0 mt-6 grid list-none gap-0 p-0">
                <li className="border-t border-dashed border-primary/22 py-4">
                  <p className="eyebrow m-0">Adresas</p>
                  <p className="m-0 mt-2 text-base leading-loose text-muted">{operator.address}</p>
                </li>
                <li className="border-t border-dashed border-primary/22 py-4">
                  <p className="eyebrow m-0">Telefonas</p>
                  <a
                    className="mt-2 inline-block text-base font-semibold leading-loose text-primary hover:text-accent"
                    href={`tel:${operator.phone.replace(/\s/g, "")}`}
                  >
                    {operator.phone}
                  </a>
                </li>
                <li className="border-t border-b border-dashed border-primary/22 py-4">
                  <p className="eyebrow m-0">El. paštas</p>
                  <a
                    className="mt-2 inline-block text-base font-semibold leading-loose text-primary hover:text-accent"
                    href={`mailto:${operator.email}`}
                  >
                    {operator.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <InvestorInquiry
        tone="dark"
        eyebrow={form.eyebrow}
        title={
          <>
            Papasakokite
            <br />
            apie savo planus
          </>
        }
        description={form.description}
        showContact={false}
      />

      <section id={people.id} className="section-shell bg-white">
        <div className="site-container">
          <div
            className="mb-14 grid items-end gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] max-[991px]:mb-10"
            data-reveal-group
          >
            <div className="reveal-item flex flex-col gap-5">
              <div className="h-0 w-full border-b border-dashed border-primary/45" />
              <p className="eyebrow m-0">{people.eyebrow}</p>
              <h2 className="section-heading max-w-xl">{people.title}</h2>
            </div>
          </div>

          <ul
            className="m-0 grid list-none gap-10 p-0 sm:grid-cols-2 lg:gap-16"
            data-reveal-group
          >
            {people.items.map((person) => (
              <li key={person.email} className="reveal-item flex flex-col gap-5 sm:flex-row sm:gap-7">
                <div className="relative aspect-[4/5] w-full max-w-[200px] shrink-0 overflow-hidden border border-dashed border-primary/16 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_4%,white),color-mix(in_srgb,var(--color-primary)_10%,white))] max-[479px]:max-w-none">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <span className="font-display text-3xl font-bold tracking-tight text-primary/45">
                      {personInitials(person.name)}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">
                      Foto
                    </span>
                  </div>
                </div>

                <div className="flex min-w-0 flex-col gap-2 pt-1">
                  <p className="m-0 font-display text-xl font-bold leading-snug tracking-tight text-primary">
                    {person.name}
                  </p>
                  <p className="m-0 text-sm leading-relaxed text-muted">{person.role}</p>
                  <a
                    className="mt-2 text-base font-semibold leading-loose text-primary hover:text-accent"
                    href={`mailto:${person.email}`}
                  >
                    {"emailDisplay" in person && person.emailDisplay
                      ? person.emailDisplay
                      : person.email}
                  </a>
                  <a
                    className="text-base font-medium leading-loose text-muted hover:text-accent"
                    href={`tel:${person.phoneHref}`}
                  >
                    {person.phone}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
