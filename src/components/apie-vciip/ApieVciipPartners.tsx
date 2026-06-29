import { apieVciipPartners } from "../../content/apieVciip";

export function ApieVciipPartners() {
  return (
    <section className="relative bg-white section-shell">
      <div className="site-container px-6 max-[479px]:px-4">
        <div className="section-intro max-[479px]:mb-8" data-reveal-group>
          <div className="section-eyebrow-rule" />
          <p className="eyebrow reveal-item">{apieVciipPartners.eyebrow}</p>
          <h2 className="section-heading reveal-item max-w-3xl">{apieVciipPartners.title}</h2>
        </div>

        <div className="vilnius-partners-grid">
          {apieVciipPartners.partners.map((partner) => (
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
