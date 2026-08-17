import { useState } from "react";

import { CtaArrow } from "./CtaArrow";
import { ParallaxImage } from "./ParallaxImage";

type CtaLink = {
  label: string;
  href: string;
};

type HighlightItem =
  | string
  | {
      label: string;
      detail?: string;
      /** Map legend / zone swatch color */
      color?: string;
    };

function normalizeHighlight(item: HighlightItem) {
  if (typeof item === "string") {
    return { label: item, detail: undefined as string | undefined, color: undefined as string | undefined };
  }
  return item;
}

type FeatureSplitHighlightsSectionProps = {
  id: string;
  eyebrow: string;
  title?: string;
  titleHighlight?: string;
  titleRest?: string;
  intro: string;
  highlights?: readonly HighlightItem[];
  note?: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  imageSrc?: string;
  /** Text/map placeholder instead of a photo */
  mediaPlaceholder?: string;
  /** Wider media column for map / territory visuals */
  wideMedia?: boolean;
  /** Put eyebrow/title/intro beside the photo instead of above it */
  contentBesideMedia?: boolean;
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
  mediaPlaceholder,
  wideMedia = false,
  contentBesideMedia = false,
}: FeatureSplitHighlightsSectionProps) {
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const normalizedHighlights = highlights.map(normalizeHighlight);
  const legendItems = normalizedHighlights.filter((item) => item.color);

  const heading = title ? (
    title
  ) : (
    <>
      {titleHighlight}
      <br />
      {titleRest}
    </>
  );

  const highlightsList =
    normalizedHighlights.length > 0 ? (
      <ul className="m-0 grid list-none gap-0 p-0">
        {normalizedHighlights.map((item) => (
          <li
            key={`${item.label}-${item.detail ?? ""}`}
            className="flex gap-3 border-t border-dashed border-primary/22 py-4 last:border-b sm:[&:last-child]:border-b"
          >
            {item.color ? (
              <span
                className="mt-1.5 h-3 w-3 shrink-0"
                style={{ background: item.color }}
                aria-hidden="true"
              />
            ) : null}
            <div className="flex min-w-0 flex-col gap-1">
              <p className="m-0 text-base font-semibold leading-snug text-primary">{item.label}</p>
              {item.detail ? (
                <p className="m-0 text-sm leading-relaxed text-muted">{item.detail}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    ) : null;

  const ctaGroup = (
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
                <CtaArrow href={primaryCta.href} />
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
  );

  const media = (
    <div
      className={`reveal-item relative overflow-hidden rounded-none ${
        mediaPlaceholder
          ? "border border-dashed border-primary/18 bg-background"
          : "bg-primary"
      } ${
        wideMedia
          ? "min-h-[28rem] max-[991px]:min-h-[22rem] max-[767px]:min-h-[18rem] max-[479px]:min-h-[14rem] lg:min-h-[34rem]"
          : "min-h-[420px] max-[991px]:min-h-[360px] max-[767px]:min-h-[320px] max-[479px]:min-h-[260px]"
      }`}
      data-reveal="scale"
    >
      {mediaPlaceholder ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
              Placeholder
            </span>
            <p className="m-0 max-w-sm text-base font-semibold leading-snug text-primary">
              {mediaPlaceholder}
            </p>
          </div>
          {legendItems.length > 0 ? (
            <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-x-5 gap-y-2 p-0">
              {legendItems.map((item) => (
                <li key={`legend-${item.label}`} className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 shrink-0" style={{ background: item.color }} aria-hidden="true" />
                  <span className="text-xs font-medium text-muted">{item.label}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : imageSrc ? (
        <>
          <ParallaxImage
            src={imageSrc}
            alt=""
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
          <div
            className={`absolute inset-0 ${
              wideMedia
                ? "bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_2%,transparent),color-mix(in_srgb,var(--color-primary)_18%,transparent))]"
                : "bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_4%,transparent),color-mix(in_srgb,var(--color-primary)_34%,transparent))]"
            }`}
          />
        </>
      ) : null}
    </div>
  );

  return (
    <section id={id} className="relative bg-white">
      <div className="relative overflow-hidden rounded-none bg-white section-shell">
        <div className="site-container">
          <div
            className="reveal-item mb-16 h-0 w-full border-b border-dashed border-primary/45 max-[991px]:mb-12"
            data-reveal="fade"
          />

          {contentBesideMedia ? (
            <div
              className={`grid items-stretch gap-8 ${
                wideMedia
                  ? "lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1.2fr)] lg:gap-12 xl:gap-14"
                  : "lg:grid-cols-[minmax(0,0.92fr)_minmax(0,0.78fr)] lg:gap-12 xl:gap-16"
              }`}
              data-reveal-group
            >
              <div className="reveal-item flex flex-col justify-between gap-10">
                <div className="flex flex-col items-start gap-5">
                  <p className="eyebrow">{eyebrow}</p>
                  <h2 className="section-heading max-w-xl">{heading}</h2>
                  <p className="m-0 max-w-xl whitespace-pre-line text-base font-normal leading-loose text-muted">
                    {intro}
                  </p>
                </div>

                <div className="flex flex-col gap-8">
                  {note ? (
                    <p className="m-0 max-w-lg text-sm font-medium leading-[150%] text-muted">{note}</p>
                  ) : null}
                  {ctaGroup}
                </div>
              </div>

              {media}
            </div>
          ) : (
            <>
              <div
                className="mb-16 grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.62fr)] max-[991px]:mb-12"
                data-reveal-group
              >
                <div className="flex flex-col items-start gap-7">
                  <p className="eyebrow reveal-item">{eyebrow}</p>
                  <h2 className="section-heading reveal-item max-w-4xl">{heading}</h2>
                </div>

                <p className="reveal-item m-0 max-w-xl justify-self-end whitespace-pre-line text-base font-normal leading-loose text-muted max-[479px]:text-base">
                  {intro}
                </p>
              </div>

              <div
                className={`grid items-stretch gap-8 ${
                  wideMedia
                    ? "lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1.2fr)] lg:gap-12 xl:gap-14"
                    : "xl:grid-cols-[minmax(0,0.92fr)_minmax(0,0.78fr)] xl:gap-16"
                }`}
                data-reveal-group
              >
                <div className="reveal-item flex flex-col gap-8">
                  {highlightsList}
                  {note ? (
                    <p className="m-0 max-w-lg text-sm font-medium leading-[150%] text-muted">
                      {note}
                    </p>
                  ) : null}
                </div>

                <div className="reveal-item flex flex-col gap-8">
                  {media}
                  {ctaGroup}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
