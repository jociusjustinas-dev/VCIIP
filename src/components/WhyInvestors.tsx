import { useState } from "react";
import { ChevronDown } from "lucide-react";
import vciipOverviewImage from "../assets/images/vciip-overview.jpg";
import { ParallaxImage } from "./ParallaxImage";

const investorReasons = [
  {
    title: "Paruošta infrastruktūra",
    body: "Aukšta elektros galia, vandens ir dujų pajėgumai, išvedžiotos gatvės. Specializuota infrastruktūra, kurios dažniausiai trūksta kitur, čia yra arba tikslingai plėtojama.",
  },
  {
    title: "Atrinkta ekosistema",
    body: "Operatorius atrenka aukštos pridėtinės vertės įmones. Įsikuriate tarp savo srities lyderių, kur visi orientuoti į tos pačios industrijos augimą.",
  },
  {
    title: "Operatoriaus pagalba",
    body: "Operatorius lydi nuo paraiškos iki pastato: konsultacijos, mentorystė ir pagalba derinant sprendimus su miestu bei valstybe.",
  },
];

export function WhyInvestors() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="kodel-vciip" className="relative bg-white p-2">
      <div className="relative overflow-hidden rounded-2xl bg-white py-24 max-[991px]:py-16 max-[479px]:py-12">
        <div className="site-container px-6 max-[479px]:px-4">
          <div className="grid items-stretch gap-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(460px,0.78fr)] lg:gap-24">
            <div className="flex flex-col gap-14">
              <div className="flex flex-col gap-8" data-reveal-group>
                <div className="h-0 w-full border-b border-dashed border-primary/45" />
                <p className="eyebrow reveal-item text-primary/62">
                  Kodėl VCIIP
                </p>
                <div className="flex flex-col gap-7">
                  <h2 className="section-heading reveal-item max-w-3xl">
                    <span className="heading-highlight">Kodėl investuotojai</span>
                    <br />
                    renkasi VCIIP
                  </h2>
                  <p className="reveal-item m-0 max-w-2xl text-xl font-medium leading-[150%] text-muted max-[479px]:text-base">
                    Inovatyviam verslui dažniausiai trūksta ne idėjų, o tinkamos vietos joms
                    įgyvendinti. VCIIP sprendžia tris pagrindines kliūtis.
                  </p>
                </div>
              </div>

              <div className="reveal-item flex flex-col gap-3 overflow-visible">
                {investorReasons.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <article
                      key={item.title}
                      className={`rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? "border-primary/12 bg-white shadow-[0_24px_70px_rgba(20,50,58,0.12)]"
                          : "border-transparent hover:bg-white"
                      }`}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenIndex(index)}
                        className="group flex w-full items-center gap-5 rounded-2xl px-5 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white max-[479px]:gap-4 max-[479px]:px-4"
                      >
                        <span
                          className={`flex size-11 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-bold text-primary transition-colors duration-300 group-hover:border-accent group-hover:bg-accent ${
                            isOpen
                              ? "border-accent bg-accent"
                              : "border-primary/18 bg-white"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1 text-xl font-medium leading-[1.2] text-primary max-[479px]:text-lg">
                          {item.title}
                        </span>
                        <ChevronDown
                          size={22}
                          aria-hidden="true"
                          className={`shrink-0 text-primary/70 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="m-0 max-w-2xl px-5 pb-6 pl-[5.25rem] text-lg font-medium leading-[150%] text-muted max-[479px]:pl-4 max-[479px]:text-base">
                          {item.body}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="reveal-item relative h-full min-h-[520px] overflow-hidden rounded-2xl bg-primary max-[991px]:h-[520px] max-[767px]:h-[420px] max-[479px]:h-[340px]" data-reveal="scale">
              <ParallaxImage
                src={vciipOverviewImage}
                alt=""
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,50,58,0.06),rgba(20,50,58,0.46))]" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(circle_at_50%_100%,rgba(0,255,187,0.2),rgba(20,50,58,0)_62%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
