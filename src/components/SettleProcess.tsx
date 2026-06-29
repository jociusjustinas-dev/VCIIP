import { ArrowUpRight } from "lucide-react";

import processWarmRoomImage from "../assets/images/process-warm-room.png";

const settleSteps = [
  {
    number: "01",
    title: "Įvertinimas.",
    body: "Aptariame jūsų veiklos planą, poreikius ir tinkamumą VCIIP kryptims.",
  },
  {
    number: "02",
    title: "Pokalbis.",
    body: "Pristatome galimybes: sklypus, infrastruktūrą, sąlygas ir paramą.",
  },
  {
    number: "03",
    title: "Planavimas.",
    body: "Kartu parenkame sklypą ir suderiname sprendimus su miestu bei valstybe.",
  },
  {
    number: "04",
    title: "Įsikūrimas.",
    body: "Lydime per statybas ir veiklos pradžią, teikiame nuolatinį palaikymą.",
  },
];

export function SettleProcess() {
  return (
    <section id="kaip-isikurti" className="relative bg-white p-2">
      <div className="relative overflow-hidden rounded-none bg-background py-24 max-[991px]:py-16 max-[479px]:py-12">
        <div className="site-container px-6 max-[479px]:px-4">
          <div
            className="mb-20 grid items-end gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.62fr)] max-[991px]:mb-14"
            data-reveal-group
          >
            <div className="flex flex-col items-start gap-7">
              <p className="eyebrow reveal-item text-primary/62">Procesas</p>
              <h2 className="section-heading reveal-item max-w-4xl">
                <span className="heading-highlight">Kaip įsikurti</span>
                <br />
                VCIIP
              </h2>
            </div>

            <p className="reveal-item m-0 max-w-xl justify-self-end text-xl font-medium leading-[150%] text-muted max-[479px]:text-base">
              Aiškus kelias nuo pirmo kontakto iki veiklos pradžios. Operatorius lydi
              kiekviename žingsnyje.
            </p>
          </div>

          <div
            className="grid items-start gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(540px,1fr)] lg:gap-28 max-[991px]:gap-12"
            data-reveal-group
          >
            <div
              className="reveal-item sticky top-28 min-h-[620px] overflow-hidden rounded-none bg-background max-[991px]:static max-[991px]:min-h-[420px] max-[767px]:min-h-[360px] max-[479px]:min-h-[280px]"
              data-reveal="scale"
            >
              <img
                src={processWarmRoomImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_2%,transparent),color-mix(in_srgb,var(--color-primary)_34%,transparent))]" />
            </div>

            <div className="reveal-item border-t border-dashed border-primary/18" data-reveal="fade">
              {settleSteps.map((step) => (
                <article
                  key={step.number}
                  className="group grid gap-8 border-b border-dashed border-primary/18 py-8 text-primary transition-colors duration-300 hover:border-primary/34 max-[767px]:gap-4 max-[479px]:grid-cols-1 sm:grid-cols-[minmax(180px,0.74fr)_minmax(0,1fr)]"
                >
                  <div className="flex flex-col gap-4">
                    <span className="font-mono text-xs font-normal uppercase leading-none tracking-[0.16em] text-primary/46 transition-colors duration-300 group-hover:text-accent">
                      {step.number}
                    </span>
                    <h3 className="m-0 text-[28px] font-medium leading-[1.08] tracking-[-0.02em] max-[767px]:text-[24px]">
                      {step.title}
                    </h3>
                  </div>

                  <div className="flex gap-5">
                    <span className="mt-2 size-2.5 shrink-0 rounded-[4px] bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-[479px]:hidden" />
                    <p className="m-0 text-lg font-medium leading-[150%] text-muted max-[479px]:text-base">
                      {step.body}
                    </p>
                  </div>
                </article>
              ))}

              <div className="pt-10">
                <a
                  href="#kontaktai"
                  className="group inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-[4px] bg-primary px-5 py-3 text-base font-semibold leading-none text-white transition hover:bg-accent hover:text-white"
                >
                  <span className="h-5 overflow-hidden py-px">
                    <span className="flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-1/2">
                      {["Sužinokite daugiau", "Sužinokite daugiau"].map((label, index) => (
                        <span key={index} className="flex h-5 items-center gap-2">
                          {label}
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </span>
                      ))}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
