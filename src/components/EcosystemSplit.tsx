import { ArrowUpRight } from "lucide-react";
import ecosystemBioImage from "../assets/images/ecosystem-bio.jpeg";
import ecosystemTechImage from "../assets/images/ecosystem-tech.jpg";
import { ParallaxImage } from "./ParallaxImage";

export function EcosystemSplit() {
  return (
    <section className="relative bg-white p-2" id="lokacija">
      <div className="relative overflow-hidden rounded-2xl bg-primary py-20 text-white max-[991px]:py-16 max-[479px]:py-12">
        <div className="site-container relative z-[2] px-6 max-[479px]:px-4">
          <div className="mb-20 flex flex-col gap-12 px-4 max-[767px]:px-0 max-[479px]:mb-12" data-reveal-group>
            <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.62fr)]">
              <h2 className="section-heading reveal-item max-w-4xl text-white">
                Du parkai.
                <br />
                <span className="heading-highlight">
                  Viena ekosistema.
                </span>
              </h2>
              <p className="reveal-item m-0 max-w-xl justify-self-end text-xl font-medium leading-[150%] text-white/74 max-[479px]:text-base">
                VCIIP – tai dvi viena kitą papildančios teritorijos: veikianti ekosistema
                Vismaliukuose ir nauja plėtra Liepkalnyje.
              </p>
            </div>
          </div>

          <div className="flex gap-8 max-[767px]:flex-col" data-reveal-group>
            <div className="w-1/2 px-4 max-[767px]:w-full max-[767px]:px-0">
              <div className="reveal-item flex h-full max-w-[620px] flex-col items-start justify-between gap-16 max-[767px]:gap-10">
                <div className="flex w-full flex-col gap-8">
                  <div className="h-0 w-full border-b border-dashed border-white/48" />
                  <p className="font-mono text-xs font-bold uppercase leading-4 tracking-[0.08em] text-white/72">
                    BIO
                  </p>
                  <h3 className="m-0 max-w-xl font-sans text-[48px] font-medium leading-[1.08] tracking-normal text-white max-[991px]:text-[40px] max-[767px]:text-[32px]">
                    Veikianti ekosistema
                  </h3>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="m-0 max-w-xl text-xl font-medium leading-[145%] text-white/72 max-[479px]:text-base">
                    Vismaliukų teritorijoje jau veikia 30+ inovatyvių kompanijų ir gyvybės
                    mokslų klasteris. Tai įrodymas, kad VCIIP modelis veikia ir kuria realią
                    vertę.
                  </p>

                  <a
                    href="/ekosistema/"
                    className="group inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-full bg-white px-5 py-3 text-base font-semibold leading-none text-primary transition hover:bg-accent hover:text-white"
                  >
                    <span className="h-5 overflow-hidden py-px">
                      <span className="flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-1/2">
                        {["Pažinti ekosistemą", "Pažinti ekosistemą"].map((label, index) => (
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

            <div className="flex w-1/2 items-center justify-end px-4 max-[767px]:w-full max-[767px]:px-0">
              <div className="reveal-item relative w-full overflow-hidden rounded-2xl bg-primary" data-reveal="scale">
                <ParallaxImage
                  src={ecosystemBioImage}
                  alt=""
                  className="h-[640px] w-full max-[991px]:h-[500px] max-[767px]:h-[400px] max-[479px]:h-[250px]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_4%,transparent),color-mix(in_srgb,var(--color-primary)_34%,transparent))]" />
              </div>
            </div>
          </div>

          <div className="mt-32 flex gap-8 max-[991px]:mt-24 max-[767px]:mt-16 max-[767px]:flex-col-reverse" data-reveal-group>
            <div className="flex w-1/2 items-center justify-start px-4 max-[767px]:w-full max-[767px]:px-0">
              <div className="reveal-item relative w-full overflow-hidden rounded-2xl bg-primary" data-reveal="scale">
                <ParallaxImage
                  src={ecosystemTechImage}
                  alt=""
                  className="h-[640px] w-full max-[991px]:h-[500px] max-[767px]:h-[400px] max-[479px]:h-[250px]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary)_2%,transparent),color-mix(in_srgb,var(--color-primary)_30%,transparent))]" />
              </div>
            </div>

            <div className="flex w-1/2 justify-end px-4 max-[767px]:w-full max-[767px]:px-0">
              <div className="reveal-item flex h-full max-w-[620px] flex-col items-start justify-between gap-16 max-[767px]:gap-10">
                <div className="flex w-full flex-col gap-8">
                  <div className="h-0 w-full border-b border-dashed border-white/48" />
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="m-0 font-mono text-xs font-bold uppercase leading-4 tracking-[0.08em] text-white/72">
                      TECH
                    </p>
                    <span className="availability-badge">
                      Prieinama dabar
                    </span>
                  </div>
                  <h3 className="m-0 max-w-xl font-sans text-[48px] font-medium leading-[1.08] tracking-normal text-white max-[991px]:text-[40px] max-[767px]:text-[32px]">
                    Naujos galimybės Liepkalnyje
                  </h3>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="m-0 max-w-xl text-xl font-medium leading-[145%] text-white/72 max-[479px]:text-base">
                    Beveik 39 ha nauja teritorija su plėtojama inžinerine infrastruktūra.
                    Vieta jūsų gamybai, laboratorijoms ar tyrimų centrui.
                  </p>

                  <a
                    href="/sklypai/"
                    className="group inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-full bg-white px-5 py-3 text-base font-semibold leading-none text-primary transition hover:bg-accent hover:text-white"
                  >
                    <span className="h-5 overflow-hidden py-px">
                      <span className="flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-1/2">
                        {["Prieinami sklypai", "Prieinami sklypai"].map((label, index) => (
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
      </div>
    </section>
  );
}
