import { useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type CtaLink = {
  label: string;
  href: string;
};

type HubSplitHeroProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  media:
    | { type: "video"; src: string }
    | { type: "image"; src: string; alt?: string };
};

export function HubSplitHero({
  id,
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  media,
}: HubSplitHeroProps) {
  const [primaryHovered, setPrimaryHovered] = useState(false);

  return (
    <section
      id={id}
      className="relative min-h-[100svh] bg-white [--hero-pad:7rem] max-[991px]:[--hero-pad:6rem] max-[479px]:[--hero-pad:5rem]"
      style={{
        paddingTop: "var(--hero-pad)",
        paddingBottom: "var(--hero-pad)",
      }}
    >
      <div className="site-container px-6 max-[479px]:px-4">
        <div
          className="grid w-full gap-8 max-[991px]:grid-cols-1 lg:grid-cols-2 lg:items-stretch lg:gap-10"
          style={{ minHeight: "calc(100svh - (var(--hero-pad) * 2))" }}
        >
          <div className="relative z-[2] flex flex-col justify-center gap-6 py-2" data-reveal-group>
            <p className="eyebrow reveal-item text-primary/72">{eyebrow}</p>

            <div className="max-w-[600px]">
              <h1 className="reveal-item display-h1 m-0 text-primary">{title}</h1>
            </div>

            <p className="reveal-item body-lead m-0 max-w-xl text-muted">{description}</p>

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

          <div
            className="reveal-item relative min-h-[min(400px,50svh)] overflow-hidden rounded-none bg-primary max-[991px]:min-h-[min(360px,45svh)] max-[479px]:min-h-[min(280px,40svh)] lg:min-h-0 lg:h-full"
            data-reveal="scale"
          >
            {media.type === "video" ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                aria-hidden="true"
              >
                <source src={media.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={media.src}
                alt={media.alt ?? ""}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_4%,transparent),color-mix(in_srgb,var(--color-primary)_28%,transparent))]" />
          </div>
        </div>
      </div>
    </section>
  );
}
