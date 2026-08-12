import { useState, type ReactNode } from "react";
import {
  Building2,
  GraduationCap,
  MapPinned,
  Network,
  Receipt,
} from "lucide-react";

import modernOfficeImage from "../assets/images/modern-office-work.png";
import { ParallaxImage } from "./ParallaxImage";

type AdvantageItem = {
  title: string;
  body: string;
  href?: string;
};

const advantageIcons: ReactNode[] = [
  <MapPinned key="map" size={22} aria-hidden="true" />,
  <Network key="network" size={22} aria-hidden="true" />,
  <Building2 key="building" size={22} aria-hidden="true" />,
  <GraduationCap key="grad" size={22} aria-hidden="true" />,
  <Receipt key="receipt" size={22} aria-hidden="true" />,
];

export function AdvantagesSection({
  id = "privalumai",
  eyebrow = "Privalumai",
  title,
  items,
  imageSrc = modernOfficeImage,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  items: readonly AdvantageItem[];
  imageSrc?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="relative section-shell bg-white">
      <div className="site-container">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="flex min-w-0 flex-col justify-between gap-10">
            <div className="flex flex-col gap-6" data-reveal-group>
              <div className="h-0 w-full border-b border-dashed border-primary/45" />
              <p className="eyebrow reveal-item">{eyebrow}</p>
              <h2 className="section-heading reveal-item max-w-xl">{title}</h2>
            </div>

            <div className="reveal-item flex w-full flex-col">
              {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <article key={item.title} className="w-full border-b border-dashed border-primary/18 last:border-b-0">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="group flex w-full items-center gap-5 py-5 text-left outline-none transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white max-[479px]:gap-4"
                    >
                      <span
                        className={`flex size-10 shrink-0 items-center justify-center transition-colors duration-300 ${
                          isOpen ? "text-accent" : "text-primary/55 group-hover:text-accent"
                        }`}
                      >
                        {advantageIcons[index] ?? advantageIcons[0]}
                      </span>
                      <span className="min-w-0 flex-1 font-display text-xl font-bold leading-tight tracking-tight text-primary max-[479px]:text-lg">
                        {item.title}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="m-0 max-w-2xl pb-6 pl-[3.75rem] text-base leading-loose text-muted max-[479px]:pl-0">
                        {item.body}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div
            className="reveal-item relative min-h-[420px] overflow-hidden rounded-none bg-primary max-[991px]:min-h-[380px] max-[767px]:min-h-[320px] max-[479px]:min-h-[280px] lg:min-h-full"
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
        </div>
      </div>
    </section>
  );
}
