import { kodelVilniusPartners } from "../../content/kodelVilnius";

export function KodelVilniusPartners() {
  return (
    <section className="relative bg-white section-shell">
      <div className="site-container px-6 max-[479px]:px-4">
        <div className="section-intro max-w-3xl max-[767px]:mb-8" data-reveal-group>
          <div className="section-eyebrow-rule" />
          <p className="eyebrow reveal-item">{kodelVilniusPartners.eyebrow}</p>
          <h2 className="section-heading reveal-item">{kodelVilniusPartners.title}</h2>
          <p className="reveal-item m-0 text-base leading-loose text-muted">{kodelVilniusPartners.intro}</p>
        </div>

        <div className="reveal-item vilnius-partners-grid" data-reveal="fade">
          {kodelVilniusPartners.partners.map((partner) => (
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
