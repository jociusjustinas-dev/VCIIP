import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { homeContent } from "../content/home";

const heroImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80";

export function HomeHero() {
  const { hero } = homeContent;
  const [primaryHovered, setPrimaryHovered] = useState(false);

  return (
    <section id="titulinis" className="relative bg-white text-white">
      <div
        data-nav-theme="dark"
        className="relative z-[1] flex min-h-[100svh] flex-col overflow-hidden pb-14 pt-32 max-[991px]:pb-12 max-[479px]:pt-28"
      >
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-primary)_72%,transparent)_0%,color-mix(in_srgb,var(--color-primary)_42%,transparent)_42%,transparent_100%)]" />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,transparent_40%,color-mix(in_srgb,var(--color-primary)_55%,transparent)_100%)]" />

        <div className="site-container relative z-[2] flex flex-1 items-end">
          <div className="flex max-w-4xl flex-col items-start gap-6" data-reveal-group>
            <p className="reveal-item eyebrow eyebrow-on-dark">{hero.eyebrow}</p>
            <ul
              className="reveal-item flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-sm font-bold uppercase leading-tight tracking-wide text-white/82"
              aria-label="VCIIP auditorijos"
            >
              {hero.audienceLine.split("—").map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  {index > 0 ? <span className="size-1 bg-white/28" aria-hidden="true" /> : null}
                  <span>{item.trim()}</span>
                </li>
              ))}
            </ul>
            <h1 className="display-h1 reveal-item max-w-4xl text-white">{hero.title}</h1>
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
        </div>
      </div>
    </section>
  );
}
