import { useRef } from "react";

import { GatewayDestinationCards } from "./GatewayDestinationCards";
import vciipOverviewImage from "../assets/images/vciip-overview.jpg";

const metadata = ["Nuo 2018", "Valstybei svarbus ekonomikos projektas", "30+ organizacijų"];

export function GatewayHero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="apie-vciip" ref={sectionRef} className="relative bg-white text-white">
      <div
        data-nav-theme="dark"
        className="relative z-[1] flex min-h-[100svh] flex-col overflow-hidden rounded-none pb-14 pt-32 max-[991px]:pb-12 max-[479px]:pt-28"
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
            className="grid w-full items-end gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.82fr)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(440px,0.88fr)]"
            data-reveal-group
          >
            <div className="flex max-w-[920px] flex-col items-start gap-6 max-[991px]:gap-5">
              <ul
                className="reveal-item flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-sm font-bold uppercase leading-tight tracking-wide text-white/82"
                aria-label="VCIIP faktai"
              >
                {metadata.map((item, index) => (
                  <li key={item} className="flex items-center gap-3">
                    {index > 0 && <span className="size-1 rounded-none bg-white/28" aria-hidden="true" />}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h1 className="display-h1 reveal-item max-w-[920px] text-white">
                Inovacijų ekosistema
                <span className="block">augimui Vilniuje.</span>
              </h1>

              <p className="reveal-item body-lead m-0 max-w-[720px] text-white/82">
                VCIIP jungia dvi specializuotas teritorijas – gyvybės mokslų ekosistemą Vismaliukuose
                ir technologijų bei pažangios gamybos plėtros teritoriją Liepkalnyje.
              </p>
            </div>

            <GatewayDestinationCards className="lg:grid-cols-1 xl:grid-cols-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
