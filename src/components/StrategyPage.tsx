import { strategyItems } from "../content/strategy";
import type { StrategyItem } from "../content/strategy";
import type { ReactNode } from "react";

const sectionLinks = strategyItems
  .filter((item) => item.type === "h1" && "text" in item)
  .map((item) => ({
    label: (item as { text: string }).text,
    href: `#${slugify((item as { text: string }).text)}`,
  }));

export function StrategyPage() {
  return (
    <main className="bg-white p-2">
      <section className="relative overflow-hidden rounded-none bg-background pb-24 pt-36 max-[991px]:pb-16 max-[479px]:pt-28">
        <div className="site-container px-6 max-[479px]:px-4">
          <div className="mb-20 border-b border-dashed border-primary/28 pb-12">
            <div className="flex max-w-5xl flex-col items-start gap-7">
              <p className="eyebrow text-primary/62">Strategija</p>
              <h1 className="section-heading max-w-5xl text-[clamp(3rem,7vw,7.8rem)] leading-[1.04]">
                VCIIP svetainės strateginis dokumentas
              </h1>
            </div>
          </div>

          <div className="grid items-start gap-14 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="sticky top-28 hidden rounded-none border border-primary/10 bg-white/70 p-4 backdrop-blur lg:block">
              <p className="m-0 mb-4 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary/44">
                Turinys
              </p>
              <nav className="flex flex-col gap-1" aria-label="Strategijos turinys">
                {sectionLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-none px-3 py-2 text-sm font-semibold leading-[130%] text-primary/62 transition hover:bg-accent hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </aside>

            <article className="min-w-0">
              <StrategyContent items={strategyItems} />
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

function StrategyContent({ items }: { items: StrategyItem[] }) {
  const nodes: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (!listItems.length) return;

    nodes.push(
      <ul
        key={`list-${nodes.length}`}
        className="my-5 grid list-none gap-3 pl-5"
      >
        {listItems.map((text, index) => (
          <li
            key={`${text}-${index}`}
            className={`relative text-lg leading-[150%] before:absolute before:-left-5 before:top-[0.7rem] before:size-2 before:rounded-none before:bg-accent max-[479px]:text-base ${
              isColonLeadIn(text) ? "font-semibold text-primary" : "font-medium text-muted"
            }`}
          >
            {text}
          </li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  items.forEach((item, index) => {
    if (item.type === "list") {
      listItems.push(item.text);
      return;
    }

    flushList();

    if (item.type === "h1") {
      nodes.push(
        <h2
          key={`${item.type}-${index}`}
          id={slugify(item.text)}
          className="section-heading mt-24 scroll-mt-28 border-t border-dashed border-primary/28 pt-12 first:mt-0 first:border-t-0 first:pt-0"
        >
          {item.text}
        </h2>,
      );
      return;
    }

    if (item.type === "h2") {
      nodes.push(
        <h3
          key={`${item.type}-${index}`}
          className="mt-14 text-[36px] font-medium leading-[1.14] tracking-[-0.02em] text-primary max-[767px]:text-[30px]"
        >
          {item.text}
        </h3>,
      );
      return;
    }

    if (item.type === "h3") {
      nodes.push(
        <h4
          key={`${item.type}-${index}`}
          className="mt-9 font-mono text-sm font-semibold uppercase leading-[140%] tracking-[0.14em] text-primary/58"
        >
          {item.text}
        </h4>,
      );
      return;
    }

    if (item.type === "table") {
      nodes.push(
        <div
          key={`${item.type}-${index}`}
          className="my-8 overflow-hidden rounded-none border border-primary/12 bg-white"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <tbody>
                {item.rows.map((row, rowIndex) => (
                  <tr
                    key={`${row.join("-")}-${rowIndex}`}
                    className={rowIndex === 0 ? "bg-primary text-white" : "border-t border-primary/10"}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={`${cell}-${cellIndex}`}
                        className={`p-5 align-top text-base font-medium leading-[145%] ${
                          rowIndex === 0
                            ? "text-white"
                            : cellIndex === 0
                              ? "font-mono text-sm uppercase tracking-[0.12em] text-primary/58"
                              : isColonLeadIn(cell)
                                ? "font-semibold text-primary"
                                : "text-muted"
                        }`}
                      >
                        {cell || " "}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>,
      );
      return;
    }

    nodes.push(
      <p
        key={`${item.type}-${index}`}
        className={`m-0 mt-5 max-w-5xl text-lg leading-[160%] max-[479px]:text-base ${
          isColonLeadIn(item.text) ? "font-semibold text-primary" : "font-medium text-muted"
        }`}
      >
        {item.text}
      </p>,
    );
  });

  flushList();

  return <div>{nodes}</div>;
}

function isColonLeadIn(value: string) {
  return value.trim().endsWith(":");
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
