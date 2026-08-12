import { ArrowUpRight } from "lucide-react";

type ParkCard = {
  label: string;
  focus: string;
  description: string;
  href: string;
  ctaLabel: string;
};

type ParkPairCardsProps = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  bio: ParkCard;
  tech: ParkCard;
};

export function ParkPairCards({ title, description, primaryCta, bio, tech }: ParkPairCardsProps) {
  return (
    <section className="section-shell bg-primary text-white">
      <div className="site-container" data-reveal-group>
        <div className="mb-10 max-w-3xl">
          <h2 className="section-heading reveal-item text-white">{title}</h2>
          <p className="reveal-item m-0 mt-4 text-base leading-loose text-white/72">{description}</p>
          <a
            href={primaryCta.href}
            className="reveal-item mt-6 inline-flex min-h-12 items-center gap-2 bg-white px-5 py-3 text-base font-semibold leading-none text-primary transition hover:bg-accent hover:text-white"
          >
            {primaryCta.label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[bio, tech].map((park) => (
            <article key={park.label} className="reveal-item border border-white/16 bg-white/6 p-6">
              <p className="eyebrow eyebrow-on-dark m-0">{park.label}</p>
              <h3 className="heading-h3 mt-4 text-white">{park.focus}</h3>
              <p className="m-0 mt-3 text-base leading-loose text-white/72">{park.description}</p>
              <a
                href={park.href}
                className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-white transition hover:text-accent"
              >
                {park.ctaLabel}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
