import { CtaArrow } from "./CtaArrow";

type ApplicationCtaSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

export function ApplicationCtaSection({
  eyebrow = "",
  title,
  description,
  cta,
}: ApplicationCtaSectionProps) {
  return (
    <section className="section-shell bg-primary text-white">
      <div className="site-container">
        <div className="application-cta" data-reveal-group>
          <div className="application-cta__rule reveal-item" />
          <div className="application-cta__row reveal-item">
            <div className="application-cta__content">
              {eyebrow ? <p className="eyebrow eyebrow-on-dark">{eyebrow}</p> : null}
              <h2 className={`section-heading max-w-2xl text-white ${eyebrow ? "mt-4" : ""}`}>{title}</h2>
              <p className="m-0 mt-4 max-w-xl text-base leading-loose text-white/72">{description}</p>
            </div>
            <a
              href={cta.href}
              className="application-cta__button"
              {...(cta.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {cta.label}
              <CtaArrow href={cta.href} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
