import { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const marqueeItems = [
  {
    logo: "BIOGENA",
    description: "Gyvybės mokslų komandos, kuriančios aukštos vertės sprendimus.",
  },
  {
    logo: "NOVA LABS",
    description: "Tyrimų ir eksperimentinės plėtros aplinka spartesniam augimui.",
  },
  {
    logo: "TECHNIKA",
    description: "Pažangios gamybos įmonės, ieškančios paruoštos infrastruktūros.",
  },
  {
    logo: "HELIX",
    description: "Inovacijų komandos, kurioms svarbi stipri ir atrinkta ekosistema.",
  },
  {
    logo: "ORBITA",
    description: "Augančios industrijos, kurioms reikia vietos laboratorijoms ir gamybai.",
  },
];

export function EcosystemMarquee() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const marqueeContent = Array.from({ length: 2 }, (_, copyIndex) => (
    <div
      key={copyIndex}
      className="flex flex-none"
      aria-hidden={copyIndex > 0}
    >
      {marqueeItems.map((item) => (
        <div
          key={`${copyIndex}-${item.logo}`}
          className="mr-5 flex h-[240px] w-[380px] flex-none snap-start flex-col justify-between overflow-hidden rounded-none bg-primary px-7 py-6 text-white max-[767px]:h-[220px] max-[767px]:w-[320px] max-[479px]:mr-3 max-[479px]:h-[200px] max-[479px]:w-[280px]"
        >
          <p className="m-0 max-w-[330px] text-base leading-loose text-white/78">
            {item.description}
          </p>
          <div className="flex items-end justify-between gap-6">
            <span className="font-display text-4xl font-bold leading-none tracking-tight text-white max-[767px]:text-3xl max-[479px]:text-[1.875rem]">
              {item.logo}
            </span>
            <span className="mb-1 size-3 shrink-0 rounded-none bg-accent" />
          </div>
        </div>
      ))}
    </div>
  ));

  const scrollCarousel = (direction: "previous" | "next") => {
    carouselRef.current?.scrollBy({
      left: direction === "next" ? 460 : -460,
      behavior: "smooth",
    });
  };

  return (
    <section id="ekosistema-verta-atsirasti" className="relative bg-white">
      <div className="relative overflow-hidden bg-white section-shell text-primary">
        <div className="site-container relative z-[2] px-6 max-[479px]:px-4">
          <div className="mb-10 grid items-end gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.58fr)] max-[479px]:mb-8" data-reveal-group>
            <h2 className="section-heading reveal-item max-w-4xl">
              <span className="heading-highlight">Ekosistema,</span>
              <br />
              kurioje verta atsirasti
            </h2>

            <div className="reveal-item flex max-w-xl flex-col items-start gap-7 justify-self-end">
              <p className="m-0 text-base font-normal leading-loose text-muted max-[479px]:text-base">
                Įsikūrę VCIIP, atsiduriate tarp savo srities lyderių. Bendra aplinka skatina
                bendradarbiavimą, dalijimąsi žiniomis ir spartesnį augimą.
              </p>

              <a
                href="/ekosistema/"
                className="group inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-none bg-accent px-5 py-3 text-base font-semibold leading-none text-white transition hover:bg-primary hover:text-white"
              >
                <span className="h-5 overflow-hidden py-px">
                  <span className="flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-1/2">
                    {["Pažinti visą ekosistemą", "Pažinti visą ekosistemą"].map(
                      (label, index) => (
                        <span key={index} className="flex h-5 items-center gap-2">
                          {label}
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </span>
                      ),
                    )}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="reveal-item relative z-[1] w-full overflow-hidden" data-reveal="fade">
          <div
            ref={carouselRef}
            className="overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="animate-marquee-ecosystem flex w-max snap-x snap-mandatory">
              {marqueeContent}
            </div>
          </div>
        </div>

        <div className="reveal-item site-container relative z-[2] mt-8 flex justify-end gap-3 px-6 max-[479px]:justify-start max-[479px]:px-4">
          <button
            type="button"
            aria-label="Ankstesnės kortelės"
            onClick={() => scrollCarousel("previous")}
            className="flex size-12 items-center justify-center rounded-none border border-primary/16 bg-white text-primary transition hover:border-accent hover:bg-accent hover:text-white"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Kitos kortelės"
            onClick={() => scrollCarousel("next")}
            className="flex size-12 items-center justify-center rounded-none border border-primary/16 bg-white text-primary transition hover:border-accent hover:bg-accent hover:text-white"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
