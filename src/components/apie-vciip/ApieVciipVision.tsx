import { apieVciipVision } from "../../content/apieVciip";

export function ApieVciipVision() {
  return (
    <section className="section-shell bg-background">
      <div className="site-container" data-reveal-group>
        <div className="section-intro max-[479px]:mb-8">
          <div className="section-eyebrow-rule" />
          <p className="eyebrow reveal-item">{apieVciipVision.eyebrow}</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {apieVciipVision.blocks.map((block) => (
            <article
              key={block.title}
              className="reveal-item border border-dashed border-primary/16 bg-white p-6 max-[479px]:p-5"
            >
              <h3 className="heading-h3 m-0 text-primary">{block.title}</h3>
              <p className="m-0 mt-4 whitespace-pre-line text-base leading-loose text-muted">{block.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
