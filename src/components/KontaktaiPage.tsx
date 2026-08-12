import { kontaktaiContent } from "../content/kontaktai";
import { InvestorInquiry } from "./InvestorInquiry";
import { PageIntroHero } from "./PageIntroHero";

export function KontaktaiPage() {
  const { hero, operator, people } = kontaktaiContent;

  return (
    <main className="bg-white">
      <PageIntroHero eyebrow="Kontaktai" title={hero.title} intro={hero.description} spacing="loose" />

      <section className="pb-8">
        <div className="site-container grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]" data-reveal-group>
          <div className="reveal-item border border-dashed border-primary/16 p-6">
            <p className="eyebrow m-0">{operator.title}</p>
            <p className="m-0 mt-4 text-lg font-semibold text-primary">{operator.organization}</p>
            <p className="m-0 mt-3 text-base leading-loose text-muted">{operator.address}</p>
            <p className="m-0 mt-2 text-base leading-loose text-muted">Tel. {operator.phone}</p>
            <a className="mt-2 inline-block text-base font-semibold text-primary hover:text-accent" href={`mailto:${operator.email}`}>
              {operator.email}
            </a>
          </div>

          <div className="reveal-item grid gap-4 sm:grid-cols-2">
            {people.map((person) => (
              <article key={person.email} className="border border-dashed border-primary/16 p-5">
                <p className="m-0 text-base font-semibold text-primary">{person.name}</p>
                <p className="m-0 mt-1 text-sm text-muted">{person.role}</p>
                <a className="mt-3 block text-sm font-semibold text-primary hover:text-accent" href={`mailto:${person.email}`}>
                  {person.email}
                </a>
                <a className="mt-1 block text-sm text-muted hover:text-accent" href={`tel:${person.phone.replace(/\s/g, "")}`}>
                  {person.phone}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InvestorInquiry eyebrow="Parašykite mums" tone="light" />
    </main>
  );
}
