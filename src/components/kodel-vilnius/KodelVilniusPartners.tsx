import { kodelVilniusPartners } from "../../content/kodelVilnius";

export function KodelVilniusPartners() {
  return (
    <section className="relative bg-white section-shell">
      <div className="site-container px-6 max-[479px]:px-4">
        <div className="mb-10 flex max-w-3xl flex-col gap-5 max-[767px]:mb-8" data-reveal-group>
          <div className="h-0 w-full border-b border-dashed border-primary/28" />
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
              <img
                src={partner.logo}
                alt={partner.logoAlt}
                className="vilnius-partners-grid__logo"
                loading="lazy"
                decoding="async"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
