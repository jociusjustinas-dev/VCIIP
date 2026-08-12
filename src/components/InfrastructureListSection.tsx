import { ParallaxImage } from "./ParallaxImage";

export function InfrastructureListSection({
  id = "infrastruktura",
  eyebrow,
  title,
  items,
  imageSrc,
  imageAlt = "",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  items: readonly string[];
  imageSrc: string;
  imageAlt?: string;
}) {
  return (
    <section id={id} className="section-shell bg-background">
      <div className="site-container">
          <div
            className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 xl:gap-16"
            data-reveal-group
          >
          <div className="flex flex-col gap-8 max-[479px]:gap-6">
            <div className="section-intro mb-0 max-[479px]:mb-0">
              <div className="section-eyebrow-rule" />
              <p className="eyebrow reveal-item">{eyebrow}</p>
              <h2 className="section-heading reveal-item max-w-xl">{title}</h2>
            </div>

            <ul className="reveal-item m-0 grid list-none gap-0 border-t border-dashed border-primary/22 p-0 sm:grid-cols-2 sm:gap-x-8 lg:gap-x-10">
              {items.map((item) => (
                <li
                  key={item}
                  className="border-b border-dashed border-primary/22 py-4 text-base leading-loose text-primary last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 max-[479px]:py-3.5"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="reveal-item relative min-h-[28rem] overflow-hidden rounded-none bg-primary max-[991px]:min-h-[22rem] max-[767px]:min-h-[18rem] max-[479px]:min-h-[14rem] lg:min-h-full"
            data-reveal="scale"
          >
            <ParallaxImage
              src={imageSrc}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_4%,transparent),color-mix(in_srgb,var(--color-primary)_28%,transparent))]" />
          </div>
        </div>
      </div>
    </section>
  );
}
