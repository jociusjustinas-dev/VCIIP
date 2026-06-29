import { ArrowUpRight } from "lucide-react";

import { apieVciipOperator } from "../../content/apieVciip";

export function ApieVciipOperator() {
  return (
    <section className="relative bg-background section-shell">
      <div className="site-container px-6 max-[479px]:px-4">
        <div
          className="mb-12 grid items-end gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.62fr)] max-[991px]:mb-10"
          data-reveal-group
        >
          <div className="flex flex-col items-start gap-7">
            <p className="eyebrow reveal-item">{apieVciipOperator.eyebrow}</p>
            <h2 className="section-heading reveal-item max-w-3xl">{apieVciipOperator.title}</h2>
          </div>
        </div>

        <div
          className="grid items-start gap-10 border-t border-dashed border-primary/18 pt-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.68fr)] lg:gap-16"
          data-reveal-group
        >
          <div className="reveal-item flex flex-col gap-8">
            <p className="m-0 max-w-2xl text-base leading-loose text-muted">
              {apieVciipOperator.description}
            </p>

            <div className="flex flex-col gap-2 border-t border-dashed border-primary/16 pt-7">
              <h3 className="heading-h3 m-0 text-primary">{apieVciipOperator.name}</h3>
              <p className="m-0 text-sm font-medium leading-[150%] text-muted">{apieVciipOperator.role}</p>
              <a
                className="text-base font-medium leading-[150%] text-primary/72 hover:text-accent"
                href={`mailto:${apieVciipOperator.email}`}
              >
                {apieVciipOperator.email}
              </a>
              <a
                className="text-base font-medium leading-[150%] text-primary/72 hover:text-accent"
                href={`tel:${apieVciipOperator.phone.replace(/\s/g, "")}`}
              >
                {apieVciipOperator.phone}
              </a>
            </div>

            <a
              href={apieVciipOperator.cta.href}
              className="group inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-none bg-primary px-5 py-3 text-base font-semibold leading-none text-white transition hover:bg-accent hover:text-white"
            >
              <span className="h-5 overflow-hidden py-px">
                <span className="flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-1/2">
                  {[apieVciipOperator.cta.label, apieVciipOperator.cta.label].map((label, index) => (
                    <span key={index} className="flex h-5 items-center gap-2">
                      {label}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  ))}
                </span>
              </span>
            </a>
          </div>

          <div
            className="apie-vciip-operator-photo reveal-item"
            data-reveal="scale"
            role="img"
            aria-label="VCIIP operatoriaus nuotrauka"
          >
            <p className="apie-vciip-operator-photo__label">Operatoriaus nuotrauka</p>
          </div>
        </div>
      </div>
    </section>
  );
}
