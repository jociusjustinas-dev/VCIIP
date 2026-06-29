import { ArrowUpRight } from "lucide-react";

import { kodelVilniusCta } from "../../content/kodelVilnius";

export function KodelVilniusCta() {
  return (
    <section className="relative bg-primary section-shell text-white">
      <div className="site-container px-6 max-[479px]:px-4">
        <div
          className="grid items-end gap-8 border-t border-dashed border-white/20 pt-10 lg:grid-cols-[minmax(0,0.95fr)_auto] lg:gap-12"
          data-reveal-group
        >
          <div className="flex max-w-3xl flex-col gap-5">
            <h2 className="section-heading reveal-item text-white">{kodelVilniusCta.title}</h2>
            <p className="reveal-item m-0 text-base leading-loose text-white/72">{kodelVilniusCta.description}</p>
          </div>

          <div className="reveal-item flex flex-wrap gap-3 max-[767px]:w-full">
            {kodelVilniusCta.links.map((link, index) => {
              const isPrimary = index === kodelVilniusCta.links.length - 1;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={
                    isPrimary
                      ? "group inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-none bg-white px-5 py-3 text-base font-semibold leading-none text-primary transition hover:bg-accent hover:text-white max-[767px]:w-full"
                      : "inline-flex min-h-12 w-fit items-center justify-center rounded-none border border-white/24 px-5 py-3 text-base font-semibold leading-none text-white transition hover:border-white hover:bg-white/8 max-[767px]:w-full"
                  }
                >
                  {isPrimary ? (
                    <span className="flex items-center gap-2">
                      {link.label}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  ) : (
                    link.label
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
