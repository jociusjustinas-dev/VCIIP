import { useState } from "react";
import { ArrowUpRight, Award } from "lucide-react";
import { CtaArrow } from "./CtaArrow";

import homeHeroImage from "../assets/images/home-hero.jpg";
import realFdiLogo from "../assets/logos/partners/real-fdi.png";
import { homeContent } from "../content/home";
import { getAwardVariant } from "../lib/awardVariant";

export function HomeHero() {
  const { hero } = homeContent;
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const { award } = hero;
  const showAwardCard = getAwardVariant() === "a";

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
                          <CtaArrow href="#apie" />
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

            {showAwardCard ? (
              <a
                href={award.href}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-item group flex w-full flex-col gap-4 border border-white/24 bg-[color-mix(in_srgb,var(--color-primary)_42%,transparent)] p-6 text-white backdrop-blur-md transition-colors duration-300 hover:border-accent max-[991px]:max-w-md lg:max-w-[20rem] lg:justify-self-end max-[479px]:p-5"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-accent">
                    <Award size={16} strokeWidth={2} aria-hidden="true" />
                    {award.label}
                  </span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-white/60 transition-colors duration-300 group-hover:text-accent"
                  />
                </span>
                <span className="font-display text-4xl font-bold leading-none tracking-tight">{award.rank}</span>
                <span className="text-base font-semibold leading-snug text-white/92">{award.title}</span>
                <span className="flex items-center gap-3 border-t border-dashed border-white/28 pt-4 text-sm leading-snug text-white/68">
                  <span className="inline-flex shrink-0 bg-white px-2 py-1">
                    <img src={realFdiLogo} alt="Real FDI" className="h-6 w-auto" width="102" height="45" />
                  </span>
                  {award.source}
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
