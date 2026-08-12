import { ArrowUpRight } from "lucide-react";

type DocumentItem = {
  label: string;
  href: string;
};

const rowClassName =
  "group flex items-center justify-between gap-6 border-b border-dashed border-primary/14 px-6 py-5 text-primary transition last:border-b-0 max-[479px]:px-4 max-[479px]:py-4";

export function DocumentsDownloadList({
  items,
  className = "",
}: {
  items: readonly DocumentItem[];
  className?: string;
}) {
  return (
    <div className={`border border-dashed border-primary/16 ${className}`.trim()}>
      {items.map((item) => (
        <a
          key={`${item.label}-${item.href}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${rowClassName} hover:bg-primary/[0.03]`}
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
  );
}

export function DocumentsListSection({
  id = "dokumentai",
  title,
  items,
  tone = "light",
}: {
  id?: string;
  title: string;
  items: readonly DocumentItem[];
  tone?: "light" | "muted";
}) {
  return (
    <section id={id} className={`section-shell ${tone === "muted" ? "bg-background" : "bg-white"}`}>
      <div className="site-container" data-reveal-group>
        <div className="section-intro max-[479px]:mb-8">
          <div className="section-eyebrow-rule" />
          <h2 className="section-heading reveal-item max-w-3xl">{title}</h2>
        </div>

        <div className="reveal-item mt-10">
          <DocumentsDownloadList items={items} />
        </div>
      </div>
    </section>
  );
}
