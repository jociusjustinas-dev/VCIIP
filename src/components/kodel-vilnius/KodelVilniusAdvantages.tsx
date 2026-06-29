import { kodelVilniusAdvantages } from "../../content/kodelVilnius";

export function KodelVilniusAdvantages() {
  return (
    <section className="relative bg-white section-shell">
      <div className="site-container px-6 max-[479px]:px-4">
        <div className="mb-10 flex flex-col gap-5 max-[767px]:mb-8" data-reveal-group>
          <div className="h-0 w-full border-b border-dashed border-primary/28" />
          <p className="eyebrow reveal-item">{kodelVilniusAdvantages.eyebrow}</p>
          <h2 className="section-heading reveal-item max-w-3xl">{kodelVilniusAdvantages.title}</h2>
        </div>

        <div className="reveal-item vilnius-advantages-grid" data-reveal="fade">
          {kodelVilniusAdvantages.items.map((item) => (
            <article key={item.number} className="vilnius-advantages-grid__item">
              <span className="vilnius-advantages-grid__number">{item.number}</span>
              <h3 className="heading-h3 text-primary">{item.title}</h3>
              <p className="m-0 text-base leading-loose text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
