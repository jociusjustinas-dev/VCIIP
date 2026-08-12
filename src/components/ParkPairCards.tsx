import { ArrowUpRight } from "lucide-react";

import bioLogoWhite from "../assets/logos/bio-white.svg";
import techLogoWhite from "../assets/logos/tech-white.svg";
import ecosystemBioImage from "../assets/images/ecosystem-bio.jpeg";
import ecosystemTechImage from "../assets/images/ecosystem-tech.jpg";
import { ParallaxImage } from "./ParallaxImage";

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
  primaryCta?: { label: string; href: string };
  bio: ParkCard;
  tech: ParkCard;
  id?: string;
  showTechAvailability?: boolean;
};

function SlideCta({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-none bg-white px-5 py-3 text-base font-semibold leading-none text-primary transition hover:bg-accent hover:text-white"
    >
      <span className="h-5 overflow-hidden py-px">
        <span className="flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-1/2">
          {[label, label].map((text, index) => (
            <span key={index} className="flex h-5 items-center gap-2">
              {text}
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          ))}
        </span>
      </span>
    </a>
  );
}

export function ParkPairCards({
  title,
  description,
  primaryCta,
  bio,
  tech,
  id,
  showTechAvailability = true,
}: ParkPairCardsProps) {
  const titleLines = title.includes("\n")
    ? title.split("\n")
    : title === "Du parkai. Viena ekosistema."
      ? ["Du parkai.", "Viena ekosistema."]
      : [title];

  return (
    <section className="relative overflow-hidden bg-primary text-white section-shell" id={id}>
      <div className="site-container relative z-[2]">
        <div className="mb-12 flex flex-col gap-6 max-[479px]:mb-8" data-reveal-group>
          <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.62fr)]">
            <h2 className="section-heading reveal-item max-w-4xl text-white">
              {titleLines.map((line, index) => (
                <span key={line}>
                  {index > 0 ? <br /> : null}
                  {line.trim()}
                </span>
              ))}
            </h2>
            <div className="reveal-item justify-self-start lg:justify-self-end">
              <p className="m-0 max-w-xl text-base font-normal leading-normal text-white/74">{description}</p>
              {primaryCta ? (
                <div className="mt-6">
                  <SlideCta href={primaryCta.href} label={primaryCta.label} />
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="grid items-center gap-6 max-[767px]:gap-8 lg:grid-cols-2" data-reveal-group>
          <div className="flex items-center max-[767px]:w-full">
            <div className="reveal-item flex max-w-[620px] flex-col items-start gap-5 max-[767px]:gap-4">
              <div className="flex w-full flex-col gap-4">
                <img
                  src={bioLogoWhite}
                  alt={bio.label}
                  className="h-7 w-auto max-w-[9.5rem] object-contain object-left max-[479px]:h-[1.625rem]"
                />
                <h3 className="heading-split max-w-xl text-white">{bio.focus}</h3>
              </div>

              <div className="flex flex-col gap-4">
                <p className="m-0 max-w-xl text-base font-normal leading-normal text-white/72">{bio.description}</p>
                <SlideCta href={bio.href} label={bio.ctaLabel} />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end max-[767px]:w-full">
            <div className="reveal-item relative w-full overflow-hidden rounded-none bg-primary" data-reveal="scale">
              <ParallaxImage
                src={ecosystemBioImage}
                alt=""
                className="h-[420px] w-full max-[991px]:h-[360px] max-[767px]:h-[300px] max-[479px]:h-[220px]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_4%,transparent),color-mix(in_srgb,var(--color-primary)_34%,transparent))]" />
            </div>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-6 max-[991px]:mt-14 max-[767px]:mt-12 max-[767px]:gap-8 lg:grid-cols-2" data-reveal-group>
          <div className="flex items-center justify-start max-[767px]:order-2 max-[767px]:w-full lg:order-none">
            <div className="reveal-item relative w-full overflow-hidden rounded-none bg-primary" data-reveal="scale">
              <ParallaxImage
                src={ecosystemTechImage}
                alt=""
                className="h-[420px] w-full max-[991px]:h-[360px] max-[767px]:h-[300px] max-[479px]:h-[220px]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_2%,transparent),color-mix(in_srgb,var(--color-primary)_30%,transparent))]" />
            </div>
          </div>

          <div className="flex items-center justify-end max-[767px]:order-1 max-[767px]:w-full lg:order-none">
            <div className="reveal-item flex max-w-[620px] flex-col items-start gap-5 max-[767px]:gap-4">
              <div className="flex w-full flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <img
                    src={techLogoWhite}
                    alt={tech.label}
                    className="h-7 w-auto max-w-[9.5rem] object-contain object-left max-[479px]:h-[1.625rem]"
                  />
                  {showTechAvailability ? <span className="availability-badge">Prieinama dabar</span> : null}
                </div>
                <h3 className="heading-split max-w-xl text-white">{tech.focus}</h3>
              </div>

              <div className="flex flex-col gap-4">
                <p className="m-0 max-w-xl text-base font-normal leading-normal text-white/72">{tech.description}</p>
                <SlideCta href={tech.href} label={tech.ctaLabel} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
