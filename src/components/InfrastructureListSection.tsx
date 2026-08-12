export function InfrastructureListSection({
  id = "infrastruktura",
  eyebrow,
  title,
  items,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  items: readonly string[];
}) {
  return (
    <section id={id} className="section-shell bg-background">
      <div className="site-container" data-reveal-group>
        <div className="section-intro max-[479px]:mb-8">
          <div className="section-eyebrow-rule" />
          <p className="eyebrow reveal-item">{eyebrow}</p>
          <h2 className="section-heading reveal-item max-w-3xl">{title}</h2>
        </div>

        <ul className="reveal-item m-0 mt-10 grid list-none gap-0 border border-dashed border-primary/16 bg-white p-0 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="border-b border-dashed border-primary/14 px-6 py-5 text-base leading-loose text-primary last:border-b-0 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 max-[479px]:px-4 max-[479px]:py-4"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
