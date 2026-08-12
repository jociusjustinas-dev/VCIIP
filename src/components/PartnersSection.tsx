import type { PartnerLogo } from "../content/partners";

type PartnersSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  partners: readonly PartnerLogo[];
};

export function PartnersSection({ id, eyebrow, title, intro, partners }: PartnersSectionProps) {
  return (
    <section id={id} className="relative bg-white section-shell">
      <div className="site-container">
        {intro ? (
          <div className="vilnius-partners-intro max-[767px]:mb-8" data-reveal-group>
            <div className="section-eyebrow-rule" />
            <div className="vilnius-partners-intro__row">
              <div className="vilnius-partners-intro__title-col">
                <p className="eyebrow reveal-item">{eyebrow}</p>
                <h2 className="section-heading reveal-item">{title}</h2>
              </div>
              <p className="vilnius-partners-intro__body reveal-item">{intro}</p>
            </div>
          </div>
        ) : (
          <div className="section-intro max-[479px]:mb-8" data-reveal-group>
            <div className="section-eyebrow-rule" />
            <p className="eyebrow reveal-item">{eyebrow}</p>
            <h2 className="section-heading reveal-item max-w-3xl">{title}</h2>
          </div>
        )}

        <div className="reveal-item vilnius-partners-grid" data-reveal="fade">
          {partners.map((partner) => (
            <a
              key={partner.label}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="vilnius-partners-grid__item"
              aria-label={partner.label}
            >
              <span className="vilnius-partners-grid__logo-wrap">
                <img
                  src={partner.logo}
                  alt={partner.logoAlt}
                  className="vilnius-partners-grid__logo"
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
