import { kodelVilniusAdvantages } from "../../content/kodelVilnius";

export function KodelVilniusAdvantages() {
  return (
    <section className="relative bg-white section-shell">
      <div className="site-container">
        <div className="section-intro max-[479px]:mb-8" data-reveal-group>
          <p className="eyebrow reveal-item">{kodelVilniusAdvantages.eyebrow}</p>
          <h2 className="section-heading reveal-item max-w-3xl">{kodelVilniusAdvantages.title}</h2>
        </div>

        <div
          className="stats-divider-grid sm:grid-cols-2 lg:grid-cols-4"
          data-reveal-group
        >
          {kodelVilniusAdvantages.items.map((item) => (
            <article
              key={item.number}
              className="reveal-item flex flex-col gap-3 px-0 py-6 sm:px-5 lg:px-6"
            >
              <div className="stat-value-banner">{item.title}</div>
              <p className="m-0 text-base leading-loose text-primary/78">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
