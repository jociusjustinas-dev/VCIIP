import { useState } from "react";

import { ParallaxImage } from "./ParallaxImage";

type TabItem = {
  label: string;
  title: string;
  intro: string;
  items: string[];
  image: string;
};

type FeatureTabsSectionProps = {
  id: string;
  eyebrow: string;
  titleHighlight: string;
  titleRest: string;
  intro: string;
  tablistLabel: string;
  tabs: TabItem[];
};

export function FeatureTabsSection({
  id,
  eyebrow,
  titleHighlight,
  titleRest,
  intro,
  tablistLabel,
  tabs,
}: FeatureTabsSectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <section id={id} className="relative bg-white p-2">
      <div className="relative overflow-hidden rounded-none bg-white section-shell">
        <div className="site-container px-6 max-[479px]:px-4">
          <div
            className="section-intro mx-auto mb-14 w-full max-w-5xl gap-7 items-center text-center max-[767px]:mb-10 max-[767px]:items-start max-[767px]:text-left"
            data-reveal-group
          >
            <div className="section-eyebrow-rule" />
            <p className="eyebrow reveal-item">{eyebrow}</p>
            <h2 className="section-heading reveal-item max-w-4xl">
              {titleHighlight}
              <br />
              {titleRest}
            </h2>
            <p className="reveal-item m-0 max-w-3xl text-base font-normal leading-loose text-muted max-[479px]:text-base">
              {intro}
            </p>
          </div>

          <div className="reveal-item mb-16 flex justify-center max-[767px]:mb-10 max-[767px]:justify-start">
            <div
              className="flex max-w-full gap-1 overflow-x-auto rounded-none bg-background p-1 [scrollbar-width:none] max-[479px]:w-full [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label={tablistLabel}
            >
              {tabs.map((item, index) => {
                const isActive = activeTab === index;

                return (
                  <button
                    key={item.label}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(index)}
                    className={`flex-none rounded-none px-8 py-4 text-left text-base font-normal leading-none transition-colors duration-300 outline-none max-[767px]:px-6 max-[479px]:px-5 ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-primary/62 hover:bg-primary/8 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(360px,1fr)] max-[767px]:grid-cols-1 max-[479px]:gap-6"
            data-reveal-group
          >
            <div className="reveal-item flex min-h-[420px] flex-col justify-between gap-10 rounded-none bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-accent)_20%,transparent),color-mix(in_srgb,var(--color-accent)_4%,transparent))] p-8 max-[991px]:min-h-0 max-[767px]:p-7 max-[479px]:gap-6 max-[479px]:p-6">
              <div className="flex max-w-3xl flex-col gap-7">
                <p className="m-0 font-display text-sm font-bold uppercase leading-tight tracking-wide text-primary/52">
                  {String(activeTab + 1).padStart(2, "0")}
                </p>
                <h3 className="heading-h3 text-primary">
                  {tab.title}
                </h3>
                <p className="m-0 text-base font-normal leading-loose text-primary/78 max-[479px]:text-base">
                  {tab.intro}
                </p>
              </div>

              <ul className="m-0 grid list-none grid-cols-2 gap-x-10 p-0 max-[991px]:grid-cols-1">
                {tab.items.map((item) => (
                  <li
                    key={item}
                    className="border-t border-dashed border-primary/22 py-4 text-base leading-loose text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="reveal-item relative min-h-[420px] overflow-hidden rounded-none bg-primary max-[991px]:min-h-[360px] max-[767px]:order-first max-[767px]:min-h-[320px] max-[479px]:min-h-[260px]"
              data-reveal="scale"
            >
              <ParallaxImage
                src={tab.image}
                alt=""
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_4%,transparent),color-mix(in_srgb,var(--color-primary)_34%,transparent))]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
