import { ArrowUpRight } from "lucide-react";

type DocumentItem = {
  label: string;
  href: string;
};

const rowClassName =
  "group flex items-center justify-between gap-6 border-b border-dashed px-6 py-5 transition last:border-b-0 max-[479px]:px-4 max-[479px]:py-4";

export function DocumentsDownloadList({
  items,
  className = "",
  tone = "light",
}: {
  items: readonly DocumentItem[];
  className?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={`border border-dashed ${
        isDark ? "border-white/20" : "border-primary/16"
      } ${className}`.trim()}
    >
      {items.map((item) => (
        <a
          key={`${item.label}-${item.href}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${rowClassName} ${
            isDark
              ? "border-white/14 text-white hover:bg-white/[0.05]"
              : "border-primary/14 text-primary hover:bg-primary/[0.03]"
          }`}
        >
          <span className="text-base font-semibold leading-snug">{item.label}</span>
          <ArrowUpRight
            size={18}
            aria-hidden="true"
            className={`shrink-0 transition ${
              isDark
                ? "text-white/45 group-hover:text-accent"
                : "text-primary/45 group-hover:text-accent"
            }`}
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
