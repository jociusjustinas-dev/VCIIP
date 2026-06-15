export function PageIntroHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative bg-white p-2 pt-28 max-[991px]:pt-24 max-[479px]:pt-20">
      <div className="site-container px-6 max-[479px]:px-4">
        <div className="border-b border-dashed border-primary/28 pb-12 pt-4" data-reveal-group>
          <p className="eyebrow reveal-item text-primary/62">{eyebrow}</p>
          <h1 className="section-heading reveal-item mt-6 max-w-4xl text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.06]">
            {title}
          </h1>
          {intro ? (
            <p className="reveal-item m-0 mt-6 max-w-3xl text-xl font-medium leading-[150%] text-muted max-[479px]:text-base">
              {intro}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
