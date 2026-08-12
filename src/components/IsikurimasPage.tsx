import { isikurimasContent } from "../content/isikurimas";
import { InvestorInquiry } from "./InvestorInquiry";
import { PageIntroHero } from "./PageIntroHero";

export function IsikurimasPage() {
  const { hero, criteria, process, experts, documents, application, contact } = isikurimasContent;

  return (
    <main>
      <PageIntroHero eyebrow="Įsikūrimas VCIIP" title={hero.title} intro={hero.description} spacing="loose" />

      <section id="atrankos-kriterijai" className="section-shell bg-white">
        <div className="site-container" data-reveal-group>
          <h2 className="section-heading reveal-item max-w-3xl">{criteria.title}</h2>
          <p className="reveal-item body-lead m-0 mt-5 max-w-3xl whitespace-pre-line text-muted">{criteria.description}</p>
        </div>
      </section>

      <section id="procesas" className="section-shell bg-background">
        <div className="site-container" data-reveal-group>
          <h2 className="section-heading reveal-item max-w-3xl">{process.title}</h2>
          <ol className="mt-10 grid gap-6 lg:grid-cols-2">
            {process.steps.map((step, index) => (
              <li key={step.title} className="reveal-item border-t border-dashed border-primary/22 pt-5">
                <p className="eyebrow m-0">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="heading-h3 mt-3 text-primary">{step.title}</h3>
                <p className="m-0 mt-3 whitespace-pre-line text-base leading-loose text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="prieziuros-ekspertu-grupe" className="section-shell bg-white">
        <div className="site-container" data-reveal-group>
          <h2 className="section-heading reveal-item max-w-3xl">{experts.title}</h2>
          <p className="reveal-item body-lead m-0 mt-5 max-w-3xl whitespace-pre-line text-muted">{experts.description}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experts.people.map((person) => (
              <li key={person.name} className="reveal-item border border-dashed border-primary/16 p-5">
                <p className="m-0 text-base font-semibold text-primary">{person.name}</p>
                <p className="m-0 mt-2 text-sm leading-loose text-muted">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="dokumentai" className="section-shell bg-background">
        <div className="site-container" data-reveal-group>
          <h2 className="section-heading reveal-item">{documents.title}</h2>
          <p className="reveal-item m-0 mt-4 max-w-2xl text-base leading-loose text-muted">{documents.note}</p>
        </div>
      </section>

      <section id="paraiska" className="section-shell bg-white">
        <div className="site-container" data-reveal-group>
          <h2 className="section-heading reveal-item max-w-3xl">{application.title}</h2>
          <p className="reveal-item body-lead m-0 mt-5 max-w-3xl text-muted">{application.description}</p>
          <ol className="mt-10 grid gap-6">
            {application.steps.map((step, index) => (
              <li key={step.title} className="reveal-item border-t border-dashed border-primary/22 pt-5">
                <p className="eyebrow m-0">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="heading-h3 mt-3 text-primary">{step.title}</h3>
                {step.body ? (
                  <p className="m-0 mt-3 whitespace-pre-line text-base leading-loose text-muted">{step.body}</p>
                ) : null}
                {"attachments" in step && Array.isArray(step.attachments) ? (
                  <ul className="mt-4 grid gap-2">
                    {step.attachments.map((item) => (
                      <li key={item} className="text-base leading-loose text-primary/78">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-shell bg-background">
        <div className="site-container mb-10" data-reveal-group>
          <h2 className="section-heading reveal-item">{contact.title}</h2>
          <p className="reveal-item m-0 mt-4 max-w-2xl whitespace-pre-line text-base leading-loose text-muted">
            {contact.body}
          </p>
        </div>
        <InvestorInquiry tone="light" eyebrow="Kontaktai" />
      </section>
    </main>
  );
}
