export function PageIntroHero({
  eyebrow,
  title,
  intro,
  spacing = "default",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  spacing?: "default" | "loose";
}) {
  const spacingClass =
    spacing === "loose"
      ? "pt-32 max-[991px]:pt-28 max-[479px]:pt-24"
      : "pt-24 max-[991px]:pt-20 max-[479px]:pt-16";

  return (
    <section className={`relative bg-white p-2 ${spacingClass}`}>
      <div className="site-container px-6 max-[479px]:px-4">
        <div className="border-b border-dashed border-primary/28 pb-10 pt-2" data-reveal-group>
          <p className="eyebrow reveal-item text-primary/62">{eyebrow}</p>
          <h1 className="display-h1 reveal-item mt-5 max-w-4xl">{title}</h1>
          {intro ? (
            <p className="reveal-item body-lead m-0 mt-5 max-w-3xl text-muted max-[479px]:text-base">
              {intro}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
