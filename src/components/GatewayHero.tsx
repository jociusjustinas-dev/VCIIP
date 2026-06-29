import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import vciipOverviewImage from "../assets/images/vciip-overview.jpg";

const metadata = ["Nuo 2018", "Valstybei svarbus ekonomikos projektas", "30+ organizacijų"];

const destinations = [
  {
    href: "/bio",
    title: "VCIIP BIO",
    subtitle: "Gyvybės mokslai ir inovacijos",
    text: "Veikianti ekosistema Vismaliukuose, skirta gyvybės mokslų, tyrimų ir inovacijų organizacijoms.",
    cta: "Plačiau apie BIO",
  },
  {
    href: "/tech",
    title: "VCIIP TECH",
    subtitle: "Technologijos ir pažangi gamyba",
    text: "Nauja plėtros teritorija Liepkalnyje, skirta pažangiai gamybai, technologijoms ir investicijoms.",
    cta: "Plačiau apie TECH",
  },
] as const;

export function GatewayHero() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="apie-vciip" ref={sectionRef} className="relative bg-white p-2 text-white">
      <div
        data-nav-theme="dark"
        className="relative z-[1] flex min-h-[calc(100svh-16px)] flex-col overflow-hidden rounded-none pb-14 pt-32 max-[991px]:pb-12 max-[479px]:pt-28"
      >
        <img
          src={vciipOverviewImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-primary)_68%,transparent)_0%,color-mix(in_srgb,var(--color-primary)_38%,transparent)_34%,color-mix(in_srgb,var(--color-primary)_8%,transparent)_68%,transparent_100%)]" />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,transparent_38%,color-mix(in_srgb,var(--color-primary)_58%,transparent)_100%)]" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_44%,color-mix(in_srgb,var(--color-primary)_24%,transparent)_100%)]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[58%] bg-primary/10 backdrop-blur-[2px] [mask-image:linear-gradient(90deg,black_0%,rgba(0,0,0,0.55)_44%,transparent_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[34%] bg-primary/8 backdrop-blur-[1.5px] [mask-image:linear-gradient(0deg,black_0%,transparent_100%)]" />

        <div className="site-container relative z-[2] flex flex-1 px-6 max-[479px]:px-4">
          <div
            className="grid w-full items-end gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.82fr)] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(440px,0.88fr)]"
            data-reveal-group
          >
            <div className="flex max-w-[920px] flex-col items-start gap-8 max-[991px]:gap-6">
              <ul
                className="reveal-item flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white/62 max-[479px]:text-[0.66rem]"
                aria-label="VCIIP faktai"
              >
                {metadata.map((item, index) => (
                  <li key={item} className="flex items-center gap-3">
                    {index > 0 && <span className="size-1 rounded-[4px] bg-white/28" aria-hidden="true" />}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h1 className="reveal-item max-w-[920px] font-sans text-[clamp(2.65rem,5.1vw,5.75rem)] font-medium leading-[1.1] tracking-normal text-white">
                <span
                  className={`heading-highlight-animated -ml-6 -mr-4 py-1 pl-6 pr-4 backdrop-blur-[1px] ${
                    visible ? "is-visible" : ""
                  }`}
                >
                  <span className="relative z-[1]">Inovacijų ekosistema</span>
                </span>
                <span className="block">augimui Vilniuje.</span>
              </h1>

              <p className="reveal-item m-0 max-w-[720px] text-lg font-medium leading-[150%] text-white/82 md:text-xl">
                VCIIP jungia dvi specializuotas teritorijas – gyvybės mokslų ekosistemą Vismaliukuose
                ir technologijų bei pažangios gamybos plėtros teritoriją Liepkalnyje.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-4 xl:grid-cols-2">
              {destinations.map((destination, index) => (
                <a
                  key={destination.href}
                  href={destination.href}
                  data-reveal="scale"
                  data-reveal-delay={`${index * 110}ms`}
                  className="reveal-item group flex min-h-[248px] flex-col justify-between gap-5 overflow-hidden rounded-none bg-white/20 p-6 text-white backdrop-blur-md transition duration-300 hover:bg-white/26 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-primary/20 max-[479px]:min-h-[220px] max-[479px]:p-5"
                >
                  <div className="flex flex-col gap-3">
                    <h2 className="m-0 font-sans text-[1.35rem] font-semibold leading-[1.15] tracking-normal text-white">
                      {destination.title}
                    </h2>
                    <p className="m-0 font-mono text-[0.68rem] font-semibold uppercase leading-[1.3] tracking-[0.1em] text-white/58">
                      {destination.subtitle}
                    </p>
                    <p className="m-0 text-base font-medium leading-[150%] text-white/74">
                      {destination.text}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold leading-none text-white/88 transition group-hover:text-white group-focus-visible:text-white">
                    {destination.cta}
                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
