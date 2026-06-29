import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { ParallaxImage } from "./ParallaxImage";

type AccordionItem = {
  title: string;
  body: string;
};

type FeatureAccordionSectionProps = {
  id: string;
  eyebrow: string;
  titleHighlight: string;
  titleRest: string;
  intro: string;
  items: AccordionItem[];
  imageSrc: string;
};

export function FeatureAccordionSection({
  id,
  eyebrow,
  titleHighlight,
  titleRest,
  intro,
  items,
  imageSrc,
}: FeatureAccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="relative bg-white p-2">
      <div className="relative overflow-hidden rounded-none bg-white section-shell">
        <div className="site-container px-6 max-[479px]:px-4">
          <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(460px,0.78fr)] lg:gap-16">
            <div className="flex min-w-0 w-full flex-col gap-10">
              <div className="flex flex-col gap-8" data-reveal-group>
                <div className="h-0 w-full border-b border-dashed border-primary/45" />
                <p className="eyebrow reveal-item text-primary/62">{eyebrow}</p>
                <div className="flex flex-col gap-7">
                  <h2 className="section-heading reveal-item max-w-3xl">
                    <span className="heading-highlight">{titleHighlight}</span>
                    <br />
                    {titleRest}
                  </h2>
                  <p className="reveal-item m-0 max-w-2xl text-lg font-medium leading-[1.58] text-muted max-[479px]:text-base">
                    {intro}
                  </p>
                </div>
              </div>

              <div className="reveal-item flex w-full flex-col gap-3">
                {items.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <article
                      key={item.title}
                      className={`group w-full rounded-none border transition-all duration-300 ${
                        isOpen
                          ? "border-primary/12 bg-white shadow-[0_24px_70px_color-mix(in_srgb,var(--color-primary)_12%,transparent)]"
                          : "border-transparent hover:border-primary/12 hover:bg-white hover:shadow-[0_24px_70px_color-mix(in_srgb,var(--color-primary)_12%,transparent)]"
                      }`}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenIndex(index)}
                        className="flex w-full items-center gap-5 px-5 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white max-[479px]:gap-4 max-[479px]:px-4"
                      >
                        <span
                          className={`flex size-11 shrink-0 items-center justify-center rounded-none border font-mono text-xs font-bold transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white ${
                            isOpen
                              ? "border-accent bg-accent text-white"
                              : "border-primary/18 bg-white text-primary"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1 text-xl font-medium leading-[1.2] text-primary max-[479px]:text-lg">
                          {item.title}
                        </span>
                        <ChevronDown
                          size={22}
                          aria-hidden="true"
                          className={`shrink-0 text-primary/70 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="m-0 max-w-2xl px-5 pb-6 pl-[5.25rem] text-lg font-medium leading-[150%] text-muted max-[479px]:pl-4 max-[479px]:text-base">
                          {item.body}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div
              className="reveal-item relative h-full min-h-[420px] overflow-hidden rounded-none bg-primary max-[991px]:h-[420px] max-[767px]:h-[360px] max-[479px]:h-[300px]"
              data-reveal="scale"
            >
              <ParallaxImage
                src={imageSrc}
                alt=""
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_6%,transparent),color-mix(in_srgb,var(--color-primary)_46%,transparent))]" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(circle_at_50%_100%,color-mix(in_srgb,var(--color-accent)_20%,transparent),color-mix(in_srgb,var(--color-primary)_0%,transparent)_62%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
