import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import ecosystemBioImage from "../assets/images/ecosystem-bio.jpeg";
import { ParallaxImage } from "./ParallaxImage";

const metadataItems = [
  "30+ organizacijų",
  "Gyvybės mokslų klasteris",
  "Vilnius",
];

export function EcosystemHero() {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = headingRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ekosistema-hero"
      className="relative overflow-hidden bg-white py-[84px] max-[991px]:py-16 max-[479px]:py-12"
    >
      <div className="site-container relative z-[2] px-6 max-[479px]:px-4">
        <div
          className="pointer-events-none absolute rounded-full border border-dashed border-primary/30 outline outline-1 outline-dashed outline-primary/30 max-[991px]:size-[640px] max-[991px]:-left-[86px] max-[991px]:-top-[206px] max-[479px]:size-[360px] max-[479px]:-left-[110px] max-[479px]:-top-[104px] size-[1024px] -left-[240px] -top-[540px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-[45%] top-[60%] hidden size-64 rounded-full border border-dashed border-primary/30 max-[991px]:hidden"
          aria-hidden="true"
        />

        <div className="grid gap-8 lg:grid-cols-2 max-[991px]:grid-cols-1">
          <div
            className="relative z-[2] flex flex-col justify-between gap-10 pt-[52px] max-[479px]:gap-8 max-[479px]:pt-6"
            data-reveal-group
          >
            <div className="flex flex-col items-start gap-6">
              <p className="eyebrow reveal-item text-primary/72">VCIIP BIO</p>

              <div className="max-w-[600px]">
                <h1
                  ref={headingRef}
                  className="reveal-item m-0 font-sans text-[clamp(2.75rem,5vw,4.5rem)] font-medium leading-[1.06] tracking-normal text-primary max-[991px]:text-[64px] max-[767px]:text-[56px] max-[479px]:text-[13vw]"
                >
                  Gyvybės mokslų{" "}
                  <span
                    className={`heading-highlight-animated -ml-2 -mr-2 px-2 py-1 ${
                      headingVisible ? "is-visible" : ""
                    }`}
                  >
                    <span className="relative z-[1]">ekosistema</span>
                  </span>{" "}
                  Vilniuje.
                </h1>
              </div>

              <p className="reveal-item m-0 max-w-xl text-xl font-medium leading-[150%] text-muted max-[479px]:text-base">
                VCIIP BIO teritorijoje jau šiandien veikia gyvybės mokslų, tyrimų ir inovacijų
                organizacijos, formuojančios vieną stipriausių ekosistemų regione.
              </p>

              <div
                className="reveal-item inline-flex flex-wrap items-center gap-2 rounded-2xl px-3 py-1.5 pl-1 backdrop-blur-xl"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, color-mix(in srgb, var(--color-accent) 24%, transparent), color-mix(in srgb, var(--color-accent) 6%, transparent))",
                }}
              >
                <span className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-white text-accent">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M7.9987 1.33203L10.0587 5.50536L14.6654 6.1787L11.332 9.42537L12.1187 14.012L7.9987 11.8454L3.8787 14.012L4.66536 9.42537L1.33203 6.1787L5.9387 5.50536L7.9987 1.33203Z" />
                  </svg>
                </span>
                <p className="m-0 text-base font-medium leading-[150%] text-primary max-[479px]:text-sm">
                  {metadataItems.map((item, index) => (
                    <span key={item}>
                      {index > 0 && (
                        <span className="px-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary/36">
                          /
                        </span>
                      )}
                      <span>{item}</span>
                    </span>
                  ))}
                </p>
              </div>

              <div className="reveal-item flex flex-wrap gap-3 max-[479px]:flex-col">
                <a
                  href="#ekosistema-turinys"
                  className="group inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-full bg-accent px-5 py-3 text-base font-semibold leading-none text-white transition hover:bg-primary hover:text-white"
                  onMouseEnter={() => setPrimaryHovered(true)}
                  onMouseLeave={() => setPrimaryHovered(false)}
                >
                  <span className="h-5 overflow-hidden py-px">
                    <span
                      className="flex flex-col transition-transform duration-200 ease-out"
                      style={{ transform: primaryHovered ? "translateY(-50%)" : "translateY(0%)" }}
                    >
                      {["Tyrinėti ekosistemą", "Tyrinėti ekosistemą"].map((label, index) => (
                        <span key={index} className="flex h-5 items-center gap-2">
                          {label}
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </span>
                      ))}
                    </span>
                  </span>
                </a>

                <a
                  href="#kontaktai"
                  className="inline-flex min-h-12 w-fit items-center justify-center rounded-full border border-primary/18 px-5 py-3 text-base font-semibold leading-none text-primary transition hover:border-accent hover:text-accent"
                >
                  Susisiekti
                </a>
              </div>
            </div>

            <p className="reveal-item m-0 max-w-lg text-sm font-medium leading-[150%] text-muted">
              VCIIP BIO vystoma kaip ilgalaikė aplinka gyvybės mokslų, tyrimų ir inovacijų
              organizacijoms.
            </p>
          </div>

          <div
            className="reveal-item relative h-[930px] overflow-hidden rounded-2xl bg-primary max-[991px]:h-[500px] max-[479px]:h-[350px]"
            data-reveal="scale"
          >
            <ParallaxImage
              src={ecosystemBioImage}
              alt=""
              className="absolute inset-0 h-full w-full"
              loading="eager"
              strength={72}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_4%,transparent),color-mix(in_srgb,var(--color-primary)_28%,transparent))]" />
          </div>
        </div>
      </div>
    </section>
  );
}
