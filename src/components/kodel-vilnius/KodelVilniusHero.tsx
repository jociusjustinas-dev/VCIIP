import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import vilniusImage from "../../assets/images/vilnius.webp";
import { kodelVilniusHero } from "../../content/kodelVilnius";

export function KodelVilniusHero() {
  const [primaryHovered, setPrimaryHovered] = useState(false);

  return (
    <section className="relative bg-white section-shell pt-24 max-[991px]:pt-20 max-[479px]:pt-16">
      <div className="site-container px-6 max-[479px]:px-4">
        <div
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12"
          data-reveal-group
        >
          <div className="flex flex-col items-start gap-6">
            <p className="eyebrow reveal-item">{kodelVilniusHero.eyebrow}</p>
            <h1 className="display-h1 reveal-item m-0 max-w-xl text-primary">{kodelVilniusHero.title}</h1>
            <p className="reveal-item body-lead m-0 max-w-xl text-muted">{kodelVilniusHero.description}</p>

            <div className="reveal-item flex flex-wrap gap-3 max-[479px]:flex-col">
              <a
                href={kodelVilniusHero.primaryCta.href}
                className="group inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-none bg-accent px-5 py-3 text-base font-semibold leading-none text-white transition hover:bg-primary hover:text-white"
                onMouseEnter={() => setPrimaryHovered(true)}
                onMouseLeave={() => setPrimaryHovered(false)}
              >
                <span className="h-5 overflow-hidden py-px">
                  <span
                    className="flex flex-col transition-transform duration-200 ease-out"
                    style={{ transform: primaryHovered ? "translateY(-50%)" : "translateY(0%)" }}
                  >
                    {[kodelVilniusHero.primaryCta.label, kodelVilniusHero.primaryCta.label].map(
                      (label, index) => (
                        <span key={index} className="flex h-5 items-center gap-2">
                          {label}
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </span>
                      ),
                    )}
                  </span>
                </span>
              </a>

              <a
                href={kodelVilniusHero.secondaryCta.href}
                className="inline-flex min-h-12 w-fit items-center justify-center rounded-none border border-primary/18 px-5 py-3 text-base font-semibold leading-none text-primary transition hover:border-accent hover:text-accent"
              >
                {kodelVilniusHero.secondaryCta.label}
              </a>
            </div>
          </div>

          <div
            className="reveal-item relative min-h-[280px] overflow-hidden rounded-none bg-primary max-[767px]:min-h-[240px] lg:min-h-[420px]"
            data-reveal="scale"
          >
            <img
              src={vilniusImage}
              alt="Vilniaus miesto panorama"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_4%,transparent),color-mix(in_srgb,var(--color-primary)_28%,transparent))]" />
          </div>
        </div>
      </div>
    </section>
  );
}
