import { kontaktaiContent } from "../content/kontaktai";
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
  const { hero, operator, people } = kontaktaiContent;

  return (
    <main className="bg-white">
      <InvestorInquiry
        id="kontaktai"
        tone="light"
        spacing="page"
        showContact={false}
        leftSlot={
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <p className="eyebrow m-0">{hero.eyebrow}</p>
              <h1 className="display-h1 m-0 max-w-xl text-primary">{hero.title}</h1>
              <p className="m-0 max-w-xl text-base font-normal leading-loose text-muted">
                {hero.description}
              </p>
            </div>

            <div id={operator.id} className="flex flex-col gap-5 border-t border-dashed border-primary/22 pt-8">
              <div className="flex flex-col gap-2">
                <p className="eyebrow m-0">{operator.eyebrow}</p>
                <h2 className="heading-h3 m-0 text-primary">{operator.title}</h2>
              </div>
              <div>
                <p className="m-0 font-display text-xl font-bold leading-snug tracking-tight text-primary">
                  {operator.organization}
                </p>
                <ul className="m-0 mt-4 grid list-none gap-0 p-0">
                  <li className="border-t border-dashed border-primary/18 py-3">
                    <p className="m-0 text-sm leading-relaxed text-muted">{operator.address}</p>
                  </li>
                  <li className="border-t border-dashed border-primary/18 py-3">
                    <a
                      className="text-base font-semibold leading-relaxed text-primary hover:text-accent"
                      href={`tel:${operator.phone.replace(/\s/g, "")}`}
                    >
                      {operator.phone}
                    </a>
                  </li>
                  <li className="border-t border-b border-dashed border-primary/18 py-3">
                    <a
                      className="text-base font-semibold leading-relaxed text-primary hover:text-accent"
                      href={`mailto:${operator.email}`}
                    >
                      {operator.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        }
      />

      <section id={people.id} className="section-shell bg-white">
        <div className="site-container">
          <div className="mb-12 flex flex-col gap-5 max-[991px]:mb-8" data-reveal-group>
            <div className="reveal-item h-0 w-full border-b border-dashed border-primary/45" />
            <p className="eyebrow reveal-item m-0">{people.eyebrow}</p>
            <h2 className="section-heading reveal-item max-w-xl">{people.title}</h2>
          </div>

          <ul
            className="m-0 grid list-none gap-10 p-0 sm:grid-cols-2 lg:gap-16"
            data-reveal-group
          >
            {people.items.map((person) => (
              <li key={person.email} className="reveal-item flex flex-col gap-5 sm:flex-row sm:gap-7">
                <div className="relative aspect-[4/5] w-full max-w-[160px] shrink-0 overflow-hidden border border-dashed border-primary/16 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_4%,white),color-mix(in_srgb,var(--color-primary)_10%,white))] max-[479px]:max-w-none">
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
