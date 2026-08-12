import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import homeHeroImage from "../assets/images/home-hero.jpg";
import { homeContent } from "../content/home";

export function HomeHero() {
  const { hero } = homeContent;
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const audienceItems = hero.audienceLine.split("—").map((item) => item.trim());

  return (
    <section id="titulinis" className="relative bg-white text-white">
      <div
        data-nav-theme="dark"
        className="relative z-[1] flex min-h-[100svh] flex-col overflow-hidden pb-14 pt-32 max-[991px]:pb-12 max-[479px]:pt-28"
      >
        <img
          src={homeHeroImage}
          alt="VCIIP teritorija miško apsuptyje, Vilniaus horizonte"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-primary)_68%,transparent)_0%,color-mix(in_srgb,var(--color-primary)_38%,transparent)_34%,color-mix(in_srgb,var(--color-primary)_8%,transparent)_68%,transparent_100%)]" />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,transparent_38%,color-mix(in_srgb,var(--color-primary)_58%,transparent)_100%)]" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_44%,color-mix(in_srgb,var(--color-primary)_24%,transparent)_100%)]" />

        <div className="site-container relative z-[2] flex flex-1 items-end">
          <div
            className="grid w-full items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.55fr)] lg:gap-14"
            data-reveal-group
          >
            <div className="flex max-w-4xl flex-col items-start gap-6">
              <p className="reveal-item eyebrow eyebrow-on-dark">{hero.eyebrow}</p>
              <h1 className="display-h1 reveal-item max-w-4xl text-white">
                Aukštųjų technologijų
                <br />
                plėtrai Vilniuje
              </h1>
              <p className="reveal-item m-0 max-w-2xl text-base font-normal leading-[1.55] text-white/82">
                {hero.description}
              </p>
              <div className="reveal-item flex flex-wrap gap-3 max-[479px]:flex-col">
                <a
                  href="#apie"
                  className="group relative inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-none bg-white px-5 py-3 text-base font-semibold leading-none text-primary transition hover:bg-accent hover:text-white"
                  onMouseEnter={() => setPrimaryHovered(true)}
                  onMouseLeave={() => setPrimaryHovered(false)}
                >
                  <span className="h-5 overflow-hidden py-px">
                    <span
                      className="flex flex-col transition-transform duration-200 ease-out"
                      style={{ transform: primaryHovered ? "translateY(-50%)" : "translateY(0%)" }}
                    >
                      {["Apie VCIIP", "Apie VCIIP"].map((label, index) => (
                        <span key={index} className="flex h-5 items-center gap-2">
                          {label}
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </span>
                      ))}
                    </span>
                  </span>
                </a>

                <a
                  href="/kontaktai"
                  className="inline-flex min-h-12 w-fit items-center justify-center rounded-none border border-white/28 px-5 py-3 text-base font-semibold leading-none text-white transition hover:border-accent hover:text-accent"
                >
                  Susisiekti
                </a>
              </div>
            </div>

            <ul
              className="reveal-item m-0 flex w-full list-none flex-col border-t border-dashed border-white/28 p-0 max-[991px]:max-w-md lg:max-w-[16rem] lg:justify-self-end"
              aria-label="VCIIP auditorijos"
            >
              {audienceItems.map((item) => (
                <li
                  key={item}
                  className="border-b border-dashed border-white/28 py-4"
                >
                  <span className="font-display text-sm font-bold uppercase leading-tight tracking-wide text-white/88">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
