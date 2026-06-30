import { ArrowUpRight } from "lucide-react";

import { GatewayDestinationCards } from "../GatewayDestinationCards";
import { kodelVilniusCta } from "../../content/kodelVilnius";

export function KodelVilniusCta() {
  return (
    <section className="relative bg-primary section-shell text-white">
      <div className="site-container">
        <div
          className="grid items-start gap-10 border-t border-dashed border-white/20 pt-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-12"
          data-reveal-group
        >
          <div className="flex max-w-xl flex-col gap-5">
            <h2 className="section-heading reveal-item text-white">{kodelVilniusCta.title}</h2>
            <p className="reveal-item m-0 text-base leading-loose text-white/72">{kodelVilniusCta.description}</p>
            <a
              href={kodelVilniusCta.contactHref}
              className="reveal-item group inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-none bg-white px-5 py-3 text-base font-semibold leading-none text-primary transition hover:bg-accent hover:text-white max-[479px]:w-full"
            >
              <span className="flex items-center gap-2">
                Susisiekti
                <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </a>
          </div>

          <GatewayDestinationCards className="reveal-item lg:gap-4" />
        </div>
      </div>
    </section>
  );
}
