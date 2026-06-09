import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import ecosystemBioImage from "../assets/images/ecosystem-bio.jpeg";
import { ParallaxImage } from "./ParallaxImage";

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
      className="relative overflow-hidden bg-white pb-16 pt-28 max-[991px]:pb-12 max-[991px]:pt-24 max-[479px]:pb-10 max-[479px]:pt-20"
    >
      <div className="site-container relative z-[2] px-6 max-[479px]:px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2 max-[991px]:grid-cols-1">
          <div className="relative z-[2] flex flex-col items-start gap-6" data-reveal-group>
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

          <div
            className="reveal-item relative h-[min(560px,calc(100svh-11rem))] overflow-hidden rounded-2xl bg-primary max-[991px]:mt-2 max-[991px]:h-[min(420px,calc(100svh-10rem))] max-[479px]:h-[min(280px,calc(100svh-9rem))]"
            data-reveal="scale"
          >
            <ParallaxImage
              src={ecosystemBioImage}
              alt=""
              className="absolute inset-0 h-full w-full"
              loading="eager"
              strength={48}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_4%,transparent),color-mix(in_srgb,var(--color-primary)_28%,transparent))]" />
          </div>
        </div>
      </div>
    </section>
  );
}
