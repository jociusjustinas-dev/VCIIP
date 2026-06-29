import { apieVciipTimeline } from "../../content/apieVciip";

export function ApieVciipTimeline() {
  return (
    <section className="relative bg-background section-shell">
      <div className="site-container px-6 max-[479px]:px-4">
        <div className="section-intro max-[479px]:mb-8" data-reveal-group>
          <p className="eyebrow reveal-item">{apieVciipTimeline.eyebrow}</p>
          <h2 className="section-heading reveal-item max-w-3xl">{apieVciipTimeline.title}</h2>
        </div>

        <div className="apie-vciip-timeline reveal-item" data-reveal="fade">
          {apieVciipTimeline.items.map((item, index) => (
            <div key={item.year} className="apie-vciip-timeline__item">
              <div className="apie-vciip-timeline__content">
                <p className="apie-vciip-timeline__year">{item.year}</p>
                <p className="apie-vciip-timeline__label">{item.label}</p>
              </div>
              {index < apieVciipTimeline.items.length - 1 ? (
                <span className="apie-vciip-timeline__arrow" aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
