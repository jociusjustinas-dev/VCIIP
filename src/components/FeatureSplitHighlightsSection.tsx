import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { ParallaxImage } from "./ParallaxImage";

type CtaLink = {
  label: string;
  href: string;
};

type FeatureSplitHighlightsSectionProps = {
  id: string;
  eyebrow: string;
  title?: string;
  titleHighlight?: string;
  titleRest?: string;
  intro: string;
  highlights?: string[];
  note?: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  imageSrc: string;
};

export function FeatureSplitHighlightsSection({
  id,
  eyebrow,
  title,
  titleHighlight,
  titleRest,
  intro,
  highlights = [],
  note,
  primaryCta,
  secondaryCta,
  imageSrc,
}: FeatureSplitHighlightsSectionProps) {
  const [primaryHovered, setPrimaryHovered] = useState(false);

  return (
    <section id={id} className="relative bg-white">
      <div className="relative overflow-hidden rounded-none bg-white section-shell">
        <div className="site-container">
          <div
            className="reveal-item mb-16 h-0 w-full border-b border-dashed border-primary/45 max-[991px]:mb-12"
            data-reveal="fade"
          />

          <div
            className="mb-16 grid items-end gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.62fr)] max-[991px]:mb-12"
            data-reveal-group
          >
            <div className="flex flex-col items-start gap-7">
              <p className="eyebrow reveal-item">{eyebrow}</p>
              <h2 className="section-heading reveal-item max-w-4xl">
                {title ? (
                  title
                ) : (
                  <>
                    {titleHighlight}
                    <br />
                    {titleRest}
                  </>
                )}
              </h2>
            </div>

            <p className="reveal-item m-0 max-w-xl justify-self-end text-base font-normal leading-loose text-muted max-[479px]:text-base">
              {intro}
            </p>
          </div>

          <div
            className="grid items-stretch gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,0.78fr)] xl:gap-16"
            data-reveal-group
          >
            <div className="reveal-item flex flex-col justify-between gap-10">
              {highlights.length > 0 ? (
                <ul className="m-0 grid list-none gap-0 p-0">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="border-t border-dashed border-primary/22 py-4 text-base leading-loose text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className={`flex flex-col gap-8 ${highlights.length === 0 ? "mt-auto" : ""}`}>
                {note ? (
                  <p className="m-0 max-w-lg text-sm font-medium leading-[150%] text-muted">
                    {note}
                  </p>
                ) : null}

                <div className="flex flex-wrap gap-3 max-[479px]:flex-col">
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

                  <a
                    href={secondaryCta.href}
                    className="inline-flex min-h-12 w-fit items-center justify-center rounded-none border border-primary/18 px-5 py-3 text-base font-semibold leading-none text-primary transition hover:border-accent hover:text-accent"
                  >
                    {secondaryCta.label}
                  </a>
                </div>
              </div>
            </div>

            <div
              className="reveal-item relative min-h-[420px] overflow-hidden rounded-none bg-primary max-[991px]:min-h-[360px] max-[767px]:min-h-[320px] max-[479px]:min-h-[260px]"
              data-reveal="scale"
            >
              <ParallaxImage
                src={imageSrc}
                alt=""
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_4%,transparent),color-mix(in_srgb,var(--color-primary)_34%,transparent))]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
