import { isikurimasContent } from "../content/isikurimas";
import { ApplicationGuideSection } from "./ApplicationGuideSection";
import { CtaArrow } from "./CtaArrow";
import { DocumentsListSection } from "./DocumentsListSection";
import { HubSplitHero } from "./HubSplitHero";
import { InvestorInquiry } from "./InvestorInquiry";
import { SettleProcess } from "./SettleProcess";

function personInitials(name: string) {
  return name
    .replace(/^Dr\.\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

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

          <div className="mt-10 max-[479px]:mt-8">
            <a
              href={criteria.cta.href}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {criteria.cta.label}
              <CtaArrow href={criteria.cta.href} />
            </a>
          </div>
        </div>
      </section>

      <SettleProcess
        id={process.id}
        eyebrow=""
        title={process.title}
        intro={process.intro}
        steps={process.steps}
        cta={process.cta}
        tone="muted"
        variant="accordion"
        showImage
        imageSrc={process.imageSrc}
        imageAlt={process.imageAlt}
      />

      <section id={experts.id} className="section-shell bg-white">
        <div className="site-container">
          <div
            className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16 xl:gap-20"
            data-reveal-group
          >
            <div className="reveal-item flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="h-0 w-full border-b border-dashed border-primary/45" />
                <h2 className="section-heading max-w-xl">{experts.title}</h2>
                <p className="m-0 max-w-xl text-base font-normal leading-loose text-muted">
                  {experts.intro}
                </p>
              </div>

              <div>
                <p className="eyebrow m-0">Kompetencija</p>
                <ul className="m-0 mt-5 grid list-none gap-0 p-0">
                  {experts.competencies.map((item) => (
                    <li
                      key={item.title}
                      className="border-t border-dashed border-primary/22 py-4 last:border-b"
                    >
                      <p className="m-0 text-base font-semibold leading-snug text-primary">
                        {item.title}
                      </p>
                      <p className="m-0 mt-2 text-sm leading-loose text-muted">{item.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ul className="reveal-item m-0 grid list-none grid-cols-2 gap-x-6 gap-y-10 p-0 max-[479px]:gap-x-4 max-[479px]:gap-y-8 sm:grid-cols-3">
              {experts.people.map((person) => (
                <li key={person.name} className="flex min-w-0 flex-col gap-4">
                  <div className="relative aspect-[4/5] overflow-hidden border border-dashed border-primary/16 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_4%,white),color-mix(in_srgb,var(--color-primary)_10%,white))]">
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <span className="font-display text-3xl font-bold tracking-tight text-primary/45 max-[479px]:text-2xl">
                        {personInitials(person.name)}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">
                        Foto
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="m-0 font-display text-lg font-bold leading-snug tracking-tight text-primary max-[479px]:text-base">
                      {person.name}
                    </p>
                    <p className="m-0 text-sm leading-relaxed text-muted">{person.role}</p>
                  </div>
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

      <ApplicationGuideSection
        id={application.id}
        eyebrow={application.eyebrow}
        title={application.title}
        description={application.description}
        steps={application.steps}
      />

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
