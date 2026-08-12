import { ArrowUpRight } from "lucide-react";

import { homeContent } from "../content/home";

export function HomeAboutSection() {
  const { about } = homeContent;

  return (
    <section id="apie" className="section-shell bg-white">
      <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end" data-reveal-group>
        <div>
          <p className="eyebrow reveal-item">Apie VCIIP</p>
          <h2 className="section-heading reveal-item mt-4 max-w-3xl">{about.title}</h2>
          <p className="reveal-item body-lead m-0 mt-5 max-w-3xl whitespace-pre-line text-muted">{about.description}</p>
          <a
            href={about.cta.href}
            className="reveal-item mt-6 inline-flex items-center gap-2 text-base font-semibold text-primary transition hover:text-accent"
          >
            {about.cta.label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {about.stats.map((stat) => (
            <div key={stat.label} className="reveal-item border-t border-dashed border-primary/22 pt-4">
              <p className="stat-value-banner m-0">{stat.value}</p>
              <p className="m-0 mt-2 text-base leading-loose text-primary/78">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
