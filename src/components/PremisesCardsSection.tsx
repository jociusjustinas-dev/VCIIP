import { ArrowUpRight } from "lucide-react";

import { ParallaxImage } from "./ParallaxImage";

type PremiseItem = {
  title: string;
  body: string;
  availability: string;
  imageSrc: string;
};

export function PremisesCardsSection({
  id = "patalpos",
  eyebrow,
  title,
  items,
  cta,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  items: readonly PremiseItem[];
  cta: { label: string; href: string };
}) {
  return (
    <section id={id} className="section-shell bg-white">
      <div className="site-container">
        <div className="section-intro max-[479px]:mb-8" data-reveal-group>
          <div className="section-eyebrow-rule" />
          <p className="eyebrow reveal-item">{eyebrow}</p>
          <h2 className="section-heading reveal-item max-w-3xl">{title}</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 max-[991px]:mt-10">
          {items.map((item) => (
            <article
              key={item.title}
              className="reveal-item flex flex-col overflow-hidden border border-dashed border-primary/16 bg-background"
              data-reveal="fade"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-primary">
                <ParallaxImage
                  src={item.imageSrc}
                  alt=""
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,color-mix(in_srgb,var(--color-primary)_42%,transparent))]" />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6 max-[479px]:p-5">
                <h3 className="heading-h3 m-0 text-primary">{item.title}</h3>
                <p className="m-0 text-base leading-loose text-muted">{item.body}</p>
                <p className="m-0 mt-auto border-t border-dashed border-primary/16 pt-4 text-sm font-semibold text-accent">
                  {item.availability}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal-item mt-10" data-reveal="fade">
          <a href={cta.href} className="btn-primary">
            {cta.label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
