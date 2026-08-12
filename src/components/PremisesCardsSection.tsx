import { ArrowUpRight, ExternalLink } from "lucide-react";

import { ParallaxImage } from "./ParallaxImage";

type PremiseContact = {
  name: string;
  role?: string;
  email: string;
  emailDisplay?: string;
  phone: string;
  phoneHref?: string;
};

type PremiseItem = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt?: string;
  /** Available free area display value, e.g. "~3230 kv. m." */
  availableArea: string;
  /** When false, shows occupied status instead of available. */
  isAvailable?: boolean;
  link?: { label: string; href: string };
  contact: PremiseContact;
};

function AvailabilityRow({
  availableArea,
  isAvailable,
}: {
  availableArea: string;
  isAvailable: boolean;
}) {
  return (
    <div className="flex items-end justify-between gap-4 border-t border-primary/12 pt-4">
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold uppercase tracking-[0.04em] text-muted">
          Laisvų patalpų
        </span>
        <span
          className={`inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.03em] ${
            isAvailable ? "text-primary" : "text-muted"
          }`}
        >
          <span
            className="h-2.5 w-2.5 shrink-0"
            style={{ background: isAvailable ? "#00bdae" : "color-mix(in srgb, var(--color-primary) 28%, transparent)" }}
            aria-hidden="true"
          />
          {isAvailable ? "Laisva" : "Užimta"}
        </span>
      </div>
      <p className="m-0 text-right text-xl font-semibold leading-none text-primary max-[479px]:text-lg">
        {availableArea}
      </p>
    </div>
  );
}

export function PremisesCardsSection({
  id = "patalpos",
  eyebrow,
  title,
  items,
  cta,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  items: readonly PremiseItem[];
  cta: { label: string; href: string };
}) {
  return (
    <section id={id} className="section-shell bg-white">
      <div className="site-container">
        <div className="section-intro max-[479px]:mb-8" data-reveal-group>
          <div className="section-eyebrow-rule" />
          <p className="eyebrow reveal-item">{eyebrow}</p>
          <h2 className="section-heading reveal-item max-w-3xl">{title}</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 max-[991px]:mt-10">
          {items.map((item) => {
            const isAvailable = item.isAvailable ?? true;
            const phoneHref = item.contact.phoneHref ?? item.contact.phone.replace(/\s+/g, "");
            const emailDisplay = item.contact.emailDisplay ?? item.contact.email;

            return (
              <article
                key={item.title}
                className="reveal-item flex flex-col overflow-hidden border border-primary/12 bg-background"
                data-reveal="fade"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-primary">
                  <ParallaxImage
                    src={item.imageSrc}
                    alt={item.imageAlt ?? item.title}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,color-mix(in_srgb,var(--color-primary)_55%,transparent))]" />
                </div>

                <div className="flex flex-1 flex-col gap-5 p-6 max-[479px]:gap-4 max-[479px]:p-5">
                  <div className="flex flex-col gap-3">
                    <h3 className="heading-h3 m-0 text-primary">{item.title}</h3>
                    <p className="m-0 text-base leading-loose text-muted">{item.body}</p>
                  </div>

                  <AvailabilityRow availableArea={item.availableArea} isAvailable={isAvailable} />

                  {item.link ? (
                    <div className="flex flex-col gap-1.5 border-t border-primary/12 pt-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.04em] text-muted">
                        Nuoroda
                      </span>
                      <a
                        href={item.link.href}
                        className="inline-flex w-fit items-center gap-2 text-base font-semibold text-primary transition hover:text-accent"
                        {...(item.link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {item.link.label}
                        {item.link.href.startsWith("http") ? (
                          <ExternalLink size={15} aria-hidden="true" />
                        ) : (
                          <ArrowUpRight size={15} aria-hidden="true" />
                        )}
                      </a>
                    </div>
                  ) : null}

                  <div className="mt-auto flex flex-col gap-1.5 border-t border-primary/12 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.04em] text-muted">
                      Kontaktai
                    </span>
                    <p className="m-0 text-base font-semibold text-primary">{item.contact.name}</p>
                    {item.contact.role ? (
                      <p className="m-0 text-sm leading-snug text-muted">{item.contact.role}</p>
                    ) : null}
                    <a
                      className="text-sm font-medium text-primary/72 transition hover:text-accent"
                      href={`mailto:${item.contact.email}`}
                    >
                      {emailDisplay}
                    </a>
                    <a
                      className="text-sm font-medium text-primary/72 transition hover:text-accent"
                      href={`tel:${phoneHref}`}
                    >
                      {item.contact.phone}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="reveal-item mt-10" data-reveal="fade">
          <a href={cta.href} className="btn-primary">
            {cta.label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
