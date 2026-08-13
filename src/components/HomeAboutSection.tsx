import { ArrowUpRight } from "lucide-react";

import { homeContent } from "../content/home";

export function HomeAboutSection() {
  const { about } = homeContent;

  return (
    <section id="apie" className="section-shell bg-white">
      <div className="site-container">
        <div
          className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12"
          data-reveal-group
        >
          <div>
            <p className="eyebrow reveal-item">Apie VCIIP</p>
            <h2 className="section-heading reveal-item mt-4 max-w-xl">{about.title}</h2>
          </div>

          <div>
            <p className="reveal-item body-lead m-0 whitespace-pre-line text-muted">{about.description}</p>
            <a
              href={about.cta.href}
              className="reveal-item mt-6 inline-flex items-center gap-2 text-base font-semibold text-primary transition hover:text-accent"
            >
              {about.cta.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div
          className="stats-divider-grid mt-16 sm:grid-cols-2 max-[991px]:mt-14 lg:mt-20 lg:grid-cols-4"
          data-reveal-group
        >
          {about.stats.map((stat) => (
            <div
              key={stat.label}
              className="reveal-item flex flex-col gap-3 px-0 py-6 sm:px-5 lg:px-6"
            >
              <div className="stat-value-banner">{stat.value}</div>
              <div className="text-base leading-loose text-primary/78">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
