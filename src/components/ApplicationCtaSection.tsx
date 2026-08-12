import { ArrowUpRight } from "lucide-react";

type ApplicationCtaSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

export function ApplicationCtaSection({
  eyebrow = "Įsikūrimas",
  title,
  description,
  cta,
}: ApplicationCtaSectionProps) {
  return (
    <section className="section-shell bg-white">
      <div className="site-container">
        <div className="application-cta" data-reveal-group>
          <div className="section-eyebrow-rule reveal-item" />
          <div className="application-cta__row reveal-item">
            <div className="application-cta__content">
              <p className="eyebrow">{eyebrow}</p>
              <h2 className="section-heading mt-4 max-w-2xl">{title}</h2>
              <p className="m-0 mt-4 max-w-xl text-base leading-loose text-muted">{description}</p>
            </div>
            <a href={cta.href} className="btn-primary application-cta__button">
              {cta.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
