import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import processWarmRoomImage from "../assets/images/process-warm-room.png";
import { ParallaxImage } from "./ParallaxImage";

type ProcessCta = {
  label: string;
  href: string;
};

type ProcessStep = {
  number: string;
  title: string;
  body: string;
  cta?: ProcessCta;
};

const defaultSettleSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Įvertinimas.",
    body: "Aptariame jūsų veiklos planą, poreikius ir tinkamumą VCIIP kryptims.",
  },
  {
    number: "02",
    title: "Pokalbis.",
    body: "Pristatome galimybes: sklypus, infrastruktūrą, sąlygas ir paramą.",
  },
  {
    number: "03",
    title: "Planavimas.",
    body: "Kartu parenkame sklypą ir suderiname sprendimus su miestu bei valstybe.",
  },
  {
    number: "04",
    title: "Įsikūrimas.",
    body: "Lydime per statybas ir veiklos pradžią, teikiame nuolatinį palaikymą.",
  },
];

function StepCtaLink({ cta }: { cta: ProcessCta }) {
  return (
    <a
      href={cta.href}
      className="mt-4 inline-flex w-fit items-center gap-2 text-base font-semibold text-primary transition hover:text-accent"
      onClick={(event) => event.stopPropagation()}
      {...(cta.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {cta.label}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

export function SettleProcess({
  id = "kaip-isikurti",
  eyebrow = "Procesas",
  title = (
    <>
      Kaip įsikurti
      <br />
      VCIIP
    </>
  ),
  intro = "Aiškus kelias nuo pirmo kontakto iki veiklos pradžios. Operatorius lydi kiekviename žingsnyje.",
  steps = defaultSettleSteps,
  showImage = true,
  cta = { label: "Sužinokite daugiau", href: "#kontaktai" },
  tone = "muted",
  variant = "list",
  imageSrc = processWarmRoomImage,
  afterSteps,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: string;
  steps?: readonly ProcessStep[];
  showImage?: boolean;
  cta?: ProcessCta | null;
  tone?: "light" | "muted";
  variant?: "list" | "accordion";
  imageSrc?: string;
  afterSteps?: ReactNode;
}) {
  const isLight = tone === "light";
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [stableMinHeight, setStableMinHeight] = useState<number>();
  const leftColRef = useRef<HTMLDivElement>(null);
  const bodyRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (variant !== "accordion") return;

    const measure = () => {
      const left = leftColRef.current;
      if (!left || window.innerWidth < 992) {
        setStableMinHeight(undefined);
        return;
      }

      const previousMinHeight = left.style.minHeight;
      left.style.minHeight = "0px";

      const bodyHeights = bodyRefs.current.map((element) => element?.offsetHeight ?? 0);
      const maxBodyHeight = Math.max(0, ...bodyHeights);
      const openBodyHeight = openIndex == null ? 0 : (bodyHeights[openIndex] ?? 0);
      const nextHeight = Math.ceil(left.offsetHeight - openBodyHeight + maxBodyHeight);

      left.style.minHeight = previousMinHeight;
      setStableMinHeight((current) => (current === nextHeight ? current : nextHeight));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [variant, steps, openIndex]);

  if (variant === "accordion") {
    return (
      <section
        id={id}
        className={`relative section-shell ${isLight ? "bg-white" : "bg-background"}`}
      >
        <div className="site-container">
          <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div
              ref={leftColRef}
              className="flex min-w-0 flex-col justify-between gap-16 max-[991px]:gap-12"
              style={stableMinHeight ? { minHeight: stableMinHeight } : undefined}
            >
              <div className="flex flex-col gap-6" data-reveal-group>
                <div className="h-0 w-full border-b border-dashed border-primary/45" />
                <p className="eyebrow reveal-item">{eyebrow}</p>
                <h2 className="section-heading reveal-item max-w-xl">{title}</h2>
                {intro ? (
                  <p className="reveal-item m-0 max-w-xl text-base font-normal leading-loose text-muted">
                    {intro}
                  </p>
                ) : null}
              </div>

              <div className="reveal-item mt-2 flex w-full flex-col">
                {steps.map((step, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <article
                      key={step.number}
                      className="w-full border-b border-dashed border-primary/18 first:border-t last:border-b-0"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="group flex w-full items-start gap-5 py-5 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                      >
                        <span
                          className={`shrink-0 font-display text-sm font-bold uppercase leading-tight tracking-wide transition-colors duration-300 ${
                            isOpen ? "text-accent" : "text-accent/70 group-hover:text-accent"
                          }`}
                        >
                          {step.number}
                        </span>
                        <span
                          className={`min-w-0 flex-1 font-display text-xl font-bold leading-tight tracking-tight transition-colors duration-300 max-[479px]:text-lg ${
                            isOpen ? "text-accent" : "text-primary group-hover:text-accent"
                          }`}
                        >
                          {step.title}
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isOpen ? "max-h-[48rem] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div
                          ref={(element) => {
                            bodyRefs.current[index] = element;
                          }}
                          className="max-w-2xl pb-6 pl-[calc(0.875rem+1.25rem)] max-[479px]:pl-0"
                        >
                          <p className="m-0 whitespace-pre-line text-base leading-loose text-muted">
                            {step.body}
                          </p>
                          {step.cta ? <StepCtaLink cta={step.cta} /> : null}
                        </div>
                      </div>
                    </article>
                  );
                })}

                {cta ? (
                  <div className="pt-10">
                    <a
                      href={cta.href}
                      className="group inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-none bg-primary px-5 py-3 text-base font-semibold leading-none text-white transition hover:bg-accent hover:text-white"
                    >
                      <span className="h-5 overflow-hidden py-px">
                        <span className="flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-1/2">
                          {[cta.label, cta.label].map((label, index) => (
                            <span key={index} className="flex h-5 items-center gap-2">
                              {label}
                              <ArrowUpRight size={16} aria-hidden="true" />
                            </span>
                          ))}
                        </span>
                      </span>
                    </a>
                  </div>
                ) : null}

                {afterSteps ? <div className="pt-10">{afterSteps}</div> : null}
              </div>
            </div>

            {showImage ? (
              <div
                className="reveal-item relative min-h-[420px] overflow-hidden rounded-none bg-primary max-[991px]:min-h-[380px] max-[767px]:min-h-[320px] max-[479px]:min-h-[280px] lg:h-full lg:min-h-0"
                data-reveal="scale"
              >
                <ParallaxImage
                  src={imageSrc}
                  alt=""
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_8%,transparent),color-mix(in_srgb,var(--color-primary)_48%,transparent))]" />
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`relative overflow-hidden section-shell ${isLight ? "bg-white" : "bg-background"}`}
    >
      <div className="site-container">
        <div
          className="mb-20 grid items-end gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.62fr)] max-[991px]:mb-14"
          data-reveal-group
        >
          <div className="flex flex-col items-start gap-7">
            <p className="eyebrow reveal-item">{eyebrow}</p>
            <h2 className="section-heading reveal-item max-w-4xl">{title}</h2>
          </div>

          <p className="reveal-item m-0 max-w-xl justify-self-end text-base font-normal leading-loose text-muted max-[479px]:text-base">
            {intro}
          </p>
        </div>

        <div
          className={`grid items-stretch gap-10 max-[991px]:gap-12 ${
            showImage
              ? "xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:gap-16"
              : "lg:grid-cols-1"
          }`}
          data-reveal-group
        >
          {showImage ? (
            <div
              className={`reveal-item relative h-full min-h-[260px] overflow-hidden rounded-none max-[767px]:min-h-[320px] max-[991px]:min-h-[360px] lg:min-h-0 ${
                isLight ? "bg-white" : "bg-background"
              }`}
              data-reveal="scale"
            >
              <img
                src={imageSrc}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_2%,transparent),color-mix(in_srgb,var(--color-primary)_34%,transparent))]" />
            </div>
          ) : null}

          <div className="reveal-item border-t border-dashed border-primary/18" data-reveal="fade">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group grid gap-8 border-b border-dashed border-primary/18 py-8 text-primary transition-colors duration-300 hover:border-primary/34 max-[767px]:gap-4 max-[479px]:grid-cols-1 sm:grid-cols-[minmax(180px,0.74fr)_minmax(0,1fr)]"
              >
                <div className="flex flex-col gap-4">
                  <span className="font-display text-sm font-bold uppercase leading-tight tracking-wide text-accent transition-colors duration-300 group-hover:text-accent">
                    {step.number}
                  </span>
                  <h3 className="heading-h3 text-primary">{step.title}</h3>
                </div>

                <div className="flex gap-5">
                  <span className="mt-2 size-2.5 shrink-0 rounded-none bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-[479px]:hidden" />
                  <div className="flex min-w-0 flex-col gap-4">
                    <p className="m-0 whitespace-pre-line text-base leading-loose text-muted">
                      {step.body}
                    </p>
                    {step.cta ? <StepCtaLink cta={step.cta} /> : null}
                  </div>
                </div>
              </article>
            ))}

            {cta ? (
              <div className="pt-10">
                <a
                  href={cta.href}
                  className="group inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-none bg-primary px-5 py-3 text-base font-semibold leading-none text-white transition hover:bg-accent hover:text-white"
                >
                  <span className="h-5 overflow-hidden py-px">
                    <span className="flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-1/2">
                      {[cta.label, cta.label].map((label, index) => (
                        <span key={index} className="flex h-5 items-center gap-2">
                          {label}
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </span>
                      ))}
                    </span>
                  </span>
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
