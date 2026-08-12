import { ArrowUpRight } from "lucide-react";

type AdvantageItem = {
  title: string;
  body: string;
  href?: string;
};

export function AdvantagesSection({
  id = "privalumai",
  eyebrow = "Privalumai",
  title,
  items,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  items: readonly AdvantageItem[];
}) {
  return (
    <section id={id} className="section-shell bg-white">
      <div className="site-container" data-reveal-group>
        <p className="eyebrow reveal-item">{eyebrow}</p>
        <h2 className="section-heading reveal-item mt-4 max-w-3xl">{title}</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="reveal-item flex flex-col border-t border-dashed border-primary/22 pt-5">
              <h3 className="heading-h3 text-primary">{item.title}</h3>
              <p className="m-0 mt-3 flex-1 text-base leading-loose text-muted">{item.body}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-primary transition hover:text-accent"
                >
                  Skaityti daugiau
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
