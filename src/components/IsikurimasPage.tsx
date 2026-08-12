import { ArrowUpRight } from "lucide-react";

import { isikurimasContent } from "../content/isikurimas";
import { ApplicationCtaSection } from "./ApplicationCtaSection";
import { DocumentsListSection } from "./DocumentsListSection";
import { HubSplitHero } from "./HubSplitHero";
import { InvestorInquiry } from "./InvestorInquiry";
import { SettleProcess } from "./SettleProcess";

function CriteriaList({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; detail?: string }[];
}) {
  return (
    <div>
      <p className="eyebrow m-0">{title}</p>
      <ul className="m-0 mt-5 grid list-none gap-0 p-0">
        {items.map((item) => (
          <li
            key={item.label}
            className="border-t border-dashed border-primary/22 py-4 last:border-b"
          >
            <p className="m-0 text-base font-semibold leading-snug text-primary">{item.label}</p>
            {item.detail ? (
              <p className="m-0 mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function IsikurimasPage() {
  const { hero, criteria, process, experts, documents, application, inquiry } = isikurimasContent;

  return (
    <main className="bg-white">
      <HubSplitHero
        id="isikurimas"
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        media={{ type: "image", src: hero.imageSrc, alt: hero.imageAlt }}
      />

      <section id={criteria.id} className="relative section-shell bg-white">
        <div className="site-container">
          <div
            className="reveal-item mb-16 h-0 w-full border-b border-dashed border-primary/45 max-[991px]:mb-12"
            data-reveal="fade"
          />

          <div
            className="mb-16 grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.62fr)] max-[991px]:mb-12"
            data-reveal-group
          >
            <div className="flex flex-col items-start gap-7">
              <p className="eyebrow reveal-item">{criteria.eyebrow}</p>
              <h2 className="section-heading reveal-item max-w-4xl">{criteria.title}</h2>
            </div>
            <p className="reveal-item m-0 max-w-xl justify-self-end text-base font-normal leading-loose text-muted">
              {criteria.intro}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16" data-reveal-group>
            <div className="reveal-item">
              <CriteriaList title={criteria.investorsTitle} items={criteria.investors} />
            </div>
            <div className="reveal-item">
              <CriteriaList title={criteria.projectsTitle} items={criteria.projects} />
            </div>
          </div>
        </div>
      </section>

      <ApplicationCtaSection
        eyebrow={criteria.cta.eyebrow}
        title={criteria.cta.title}
        description={criteria.cta.description}
        cta={{ label: criteria.cta.label, href: criteria.cta.href }}
      />

      <SettleProcess
        id={process.id}
        eyebrow={process.eyebrow}
        title={process.title}
        intro={process.intro}
        steps={process.steps}
        cta={process.cta}
        tone="muted"
        variant="accordion"
        showImage
      />

      <section id={experts.id} className="section-shell bg-white">
        <div className="site-container">
          <div
            className="mb-16 grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.62fr)] max-[991px]:mb-12"
            data-reveal-group
          >
            <div className="flex flex-col items-start gap-7">
              <p className="eyebrow reveal-item">{experts.eyebrow}</p>
              <h2 className="section-heading reveal-item max-w-4xl">{experts.title}</h2>
            </div>
            <p className="reveal-item m-0 max-w-xl justify-self-end text-base font-normal leading-loose text-muted">
              {experts.intro}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16" data-reveal-group>
            <div className="reveal-item">
              <p className="eyebrow m-0">Kompetencija</p>
              <ul className="m-0 mt-5 grid list-none gap-0 p-0">
                {experts.competencies.map((item) => (
                  <li
                    key={item}
                    className="border-t border-dashed border-primary/22 py-4 text-base leading-loose text-muted last:border-b"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
              {experts.people.map((person) => (
                <li
                  key={person.name}
                  className="reveal-item border border-dashed border-primary/16 p-5"
                >
                  <p className="m-0 text-base font-semibold text-primary">{person.name}</p>
                  <p className="m-0 mt-2 text-sm leading-loose text-muted">{person.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <DocumentsListSection
        id={documents.id}
        title={documents.title}
        items={documents.items}
        tone="muted"
      />

      <section id={application.id} className="section-shell bg-white">
        <div className="site-container">
          <div
            className="mb-16 grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.62fr)] max-[991px]:mb-12"
            data-reveal-group
          >
            <div className="flex flex-col items-start gap-7">
              <p className="eyebrow reveal-item">{application.eyebrow}</p>
              <h2 className="section-heading reveal-item max-w-4xl">{application.title}</h2>
            </div>
            <p className="reveal-item m-0 max-w-xl justify-self-end text-base font-normal leading-loose text-muted">
              {application.description}
            </p>
          </div>

          <div className="reveal-item border-t border-dashed border-primary/18" data-reveal="fade">
            {application.steps.map((step) => (
              <article
                key={step.number}
                className="group grid gap-8 border-b border-dashed border-primary/18 py-8 text-primary transition-colors duration-300 hover:border-primary/34 max-[767px]:gap-4 max-[479px]:grid-cols-1 sm:grid-cols-[minmax(180px,0.74fr)_minmax(0,1fr)]"
              >
                <div className="flex flex-col gap-4">
                  <span className="font-display text-sm font-bold uppercase leading-tight tracking-wide text-accent">
                    {step.number}
                  </span>
                  <h3 className="heading-h3 text-primary">{step.title}</h3>
                </div>

                <div className="flex gap-5">
                  <span className="mt-2 size-2.5 shrink-0 rounded-none bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-[479px]:hidden" />
                  <div className="flex min-w-0 flex-col gap-4">
                    {step.body ? (
                      <p className="m-0 whitespace-pre-line text-base leading-loose text-muted">
                        {step.body}
                      </p>
                    ) : null}

                    {"attachments" in step && Array.isArray(step.attachments) ? (
                      <ul className="m-0 grid list-none gap-0 p-0">
                        {step.attachments.map((item) => (
                          <li
                            key={item}
                            className="border-t border-dashed border-primary/16 py-3 text-base leading-loose text-primary/82 last:border-b"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {"cta" in step && step.cta ? (
                      <a
                        href={step.cta.href}
                        className="inline-flex w-fit items-center gap-2 text-base font-semibold text-primary transition hover:text-accent"
                        {...(step.cta.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {step.cta.label}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InvestorInquiry
        tone="light"
        eyebrow={inquiry.eyebrow}
        title={inquiry.title}
        description={inquiry.description}
        showContactIntro={false}
      />
    </main>
  );
}
