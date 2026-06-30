import { useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type CtaLink = {
  label: string;
  href: string;
};

type HubSplitHeroProps = {
  id?: string;
  className?: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  showEyebrowRule?: boolean;
  media:
    | { type: "video"; src: string }
    | { type: "image"; src: string; alt?: string };
};

export function HubSplitHero({
  id,
  className = "",
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  showEyebrowRule = false,
  media,
}: HubSplitHeroProps) {
  const [primaryHovered, setPrimaryHovered] = useState(false);

  return (
    <section id={id} className={`hub-split-hero relative ${className}`.trim()}>
      <div className="site-container">
        <div className="hub-split-hero__grid">
          <div className="hub-split-hero__content" data-reveal-group>
            {showEyebrowRule ? <div className="section-eyebrow-rule reveal-item" /> : null}
            <p className="eyebrow reveal-item">{eyebrow}</p>

            <div className="max-w-[600px]">
              <h1 className="reveal-item display-h1 m-0 text-primary">{title}</h1>
            </div>

            <p className="reveal-item m-0 max-w-xl text-base font-normal leading-loose text-muted">
              {description}
            </p>

            <div className="reveal-item flex flex-wrap gap-3 max-[479px]:flex-col">
              <a
                href={primaryCta.href}
                className="group inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-none bg-accent px-5 py-3 text-base font-semibold leading-none text-white transition hover:bg-primary hover:text-white"
                onMouseEnter={() => setPrimaryHovered(true)}
                onMouseLeave={() => setPrimaryHovered(false)}
              >
                <span className="h-5 overflow-hidden py-px">
                  <span
                    className="flex flex-col transition-transform duration-200 ease-out"
                    style={{ transform: primaryHovered ? "translateY(-50%)" : "translateY(0%)" }}
                  >
                    {[primaryCta.label, primaryCta.label].map((label, index) => (
                      <span key={index} className="flex h-5 items-center gap-2">
                        {label}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </span>
                    ))}
                  </span>
                </span>
              </a>

              {secondaryCta ? (
                <a
                  href={secondaryCta.href}
                  className="inline-flex min-h-12 w-fit items-center justify-center rounded-none border border-primary/18 px-5 py-3 text-base font-semibold leading-none text-primary transition hover:border-accent hover:text-accent"
                >
                  {secondaryCta.label}
                </a>
              ) : null}
            </div>
          </div>

          <div className="hub-split-hero__media reveal-item" data-reveal="scale">
            {media.type === "video" ? (
              <video autoPlay loop muted playsInline aria-hidden="true">
                <source src={media.src} type="video/mp4" />
              </video>
            ) : (
              <img src={media.src} alt={media.alt ?? ""} />
            )}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_4%,transparent),color-mix(in_srgb,var(--color-primary)_28%,transparent))]" />
          </div>
        </div>
      </div>
    </section>
  );
}
