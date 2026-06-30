import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { apieVciipOperator } from "../../content/apieVciip";

export function ApieVciipOperator() {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <section className="relative bg-white section-shell">
      <div className="site-container px-6 max-[479px]:px-4">
        <div
          className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(300px,0.72fr)] lg:gap-16"
          data-reveal-group
        >
          <div className="reveal-item flex flex-col gap-8">
            <div className="flex max-w-2xl flex-col gap-7">
              <p className="eyebrow">{apieVciipOperator.eyebrow}</p>
              <h2 className="section-heading m-0">{apieVciipOperator.title}</h2>
              <p className="m-0 text-base leading-loose text-muted">{apieVciipOperator.description}</p>
            </div>

            <ul className="m-0 max-w-xl list-none p-0">
              {apieVciipOperator.highlights.map((item) => (
                <li
                  key={item}
                  className="border-t border-dashed border-primary/22 py-4 text-base leading-loose text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={apieVciipOperator.cta.href}
              className="group inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-none bg-primary px-5 py-3 text-base font-semibold leading-none text-white transition hover:bg-accent hover:text-white"
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
            >
              <span className="h-5 overflow-hidden py-px">
                <span
                  className="flex flex-col transition-transform duration-200 ease-out"
                  style={{ transform: ctaHovered ? "translateY(-50%)" : "translateY(0%)" }}
                >
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

          <div className="apie-vciip-operator-logo reveal-item" data-reveal="scale">
            <p className="apie-vciip-operator-logo__placeholder">Northtown Vilnius logotipas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
