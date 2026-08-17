import { CtaArrow } from "./CtaArrow";

import bioLogoWhite from "../assets/logos/bio-white.svg";
import techLogoWhite from "../assets/logos/tech-white.svg";
import parkBioImage from "../assets/images/park-bio.jpg";
import parkTechImage from "../assets/images/park-tech.jpg";
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
              <CtaArrow href={href} />
            </span>
          ))}
        </span>
      </span>
    </a>
  );
}

function ParkColumn({
  park,
  logoSrc,
  imageSrc,
  badge,
}: {
  park: ParkCard;
  logoSrc: string;
  imageSrc: string;
  badge?: string;
}) {
  return (
    <article className="park-pair-card reveal-item group/image relative overflow-hidden bg-primary" data-reveal="scale">
      <ParallaxImage
        src={imageSrc}
        alt=""
        className="park-pair-card__image h-[420px] w-full max-[991px]:h-[360px] max-[767px]:h-[320px] max-[479px]:h-[280px]"
        loading="lazy"
      />

      <div className="park-pair-card__overlay park-pair-card__overlay--gradient pointer-events-none absolute inset-0" />
      <div className="park-pair-card__overlay park-pair-card__overlay--tint pointer-events-none absolute inset-0 max-[767px]:opacity-0" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 max-[479px]:p-5 lg:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <img
            src={logoSrc}
            alt={park.label}
            className="h-7 w-auto max-w-[9.5rem] object-contain object-left max-[479px]:h-[1.625rem]"
          />
          {badge ? <span className="availability-badge availability-badge--plain">{badge}</span> : null}
        </div>

        <h3 className="heading-split m-0 mt-5 max-w-md text-white max-[479px]:mt-4">{park.focus}</h3>

        <div className="park-pair-card__reveal mt-4 max-[767px]:mt-4">
          <div className="park-pair-card__reveal-inner">
            <p className="m-0 text-base font-normal leading-normal text-white/88">{park.description}</p>
            <div className="mt-5 max-[767px]:mt-4">
              <SlideCta href={park.href} label={park.ctaLabel} />
            </div>
          </div>
        </div>
      </div>
    </article>
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

        <div
          className="grid gap-10 border-t border-dashed border-white/22 pt-10 max-[767px]:gap-12 lg:grid-cols-2 lg:gap-0"
          data-reveal-group
        >
          <div className="lg:pr-10 xl:pr-14">
            <ParkColumn park={bio} logoSrc={bioLogoWhite} imageSrc={parkBioImage} />
          </div>

          <div className="border-dashed border-white/22 max-[767px]:border-t max-[767px]:pt-12 lg:border-l lg:pl-10 xl:pl-14">
            <ParkColumn
              park={tech}
              logoSrc={techLogoWhite}
              imageSrc={parkTechImage}
              badge={showTechAvailability ? "Prieinama dabar" : undefined}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
