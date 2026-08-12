import { ArrowUpRight } from "lucide-react";

type DocumentItem = {
  label: string;
  href: string;
};

export function DocumentsListSection({
  id = "dokumentai",
  title,
  items,
}: {
  id?: string;
  title: string;
  items: readonly DocumentItem[];
}) {
  return (
    <section id={id} className="section-shell bg-white">
      <div className="site-container" data-reveal-group>
        <div className="section-intro max-[479px]:mb-8">
          <div className="section-eyebrow-rule" />
          <h2 className="section-heading reveal-item max-w-3xl">{title}</h2>
        </div>

        <div className="reveal-item mt-10 border border-dashed border-primary/16">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 border-b border-dashed border-primary/14 px-6 py-5 text-primary transition last:border-b-0 hover:bg-primary/[0.03] max-[479px]:px-4 max-[479px]:py-4"
            >
              <span className="text-base font-semibold leading-snug">{item.label}</span>
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="shrink-0 text-primary/45 transition group-hover:text-accent"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
