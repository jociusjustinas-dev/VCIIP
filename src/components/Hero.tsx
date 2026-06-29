import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MapPinned, Play, X } from "lucide-react";
import vciipOverviewImage from "../assets/images/vciip-overview.jpg";

export function Hero() {
  const [visible, setVisible] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVideoOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [videoOpen]);

  return (
    <section id="apie-vciip-tech" ref={sectionRef} className="relative bg-white text-white">
      <div
        data-nav-theme="dark"
        className="relative z-[1] flex min-h-[100svh] flex-col overflow-hidden rounded-none pb-14 pt-32"
      >
        <img
          src={vciipOverviewImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-primary)_68%,transparent)_0%,color-mix(in_srgb,var(--color-primary)_38%,transparent)_34%,color-mix(in_srgb,var(--color-primary)_8%,transparent)_68%,transparent_100%)]" />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,transparent_38%,color-mix(in_srgb,var(--color-primary)_58%,transparent)_100%)]" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_44%,color-mix(in_srgb,var(--color-primary)_24%,transparent)_100%)]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[58%] bg-primary/10 backdrop-blur-[2px] [mask-image:linear-gradient(90deg,black_0%,rgba(0,0,0,0.55)_44%,transparent_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[34%] bg-primary/8 backdrop-blur-[1.5px] [mask-image:linear-gradient(0deg,black_0%,transparent_100%)]" />

        <div className="site-container relative z-[2] flex flex-1 px-6 max-[479px]:px-4">
          <div
            className="grid min-h-[calc(100svh-8rem-4.5rem)] w-full items-end gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(560px,0.72fr)]"
            data-reveal-group
          >
            <div className="flex max-w-[1160px] flex-col items-start">
              <h1 className="display-h1 reveal-item max-w-[980px] text-white max-[991px]:mb-6">
                <span
                  className={`heading-highlight-animated -ml-6 -mr-4 py-1 pl-6 pr-4 backdrop-blur-[1px] ${
                    visible ? "is-visible" : ""
                  }`}
                >
                  <span className="relative z-[1]">Vilniaus inovacijų</span>
                </span>
                <span className="block">
                  pramonės parkas
                </span>
              </h1>
            </div>

            <div className="flex max-w-[680px] flex-col items-start gap-6 lg:justify-self-end" data-reveal-group>
              <div className="reveal-item mb-[60px] w-[252px] self-end overflow-hidden rounded-none bg-white/20 p-2 text-center text-white backdrop-blur-md max-[479px]:mb-8 max-[479px]:w-[180px]" data-reveal="scale">
                <button
                  type="button"
                  className="relative flex h-[126px] w-full items-center justify-center overflow-hidden rounded-none bg-primary max-[479px]:h-[92px]"
                  style={{
                    backgroundImage: "url('https://i.ytimg.com/vi/RfuIt1vlqP4/maxresdefault.jpg')",
                    backgroundPosition: "50% 48%",
                    backgroundSize: "145%",
                  }}
                  onClick={() => setVideoOpen(true)}
                  aria-label="Žiūrėti pristatymą"
                >
                  <span className="grid size-12 place-items-center rounded-none bg-white text-primary transition-transform hover:scale-105 max-[479px]:size-8">
                    <Play size={18} fill="currentColor" aria-hidden="true" />
                  </span>
                </button>

                <div className="mt-2 font-mono text-xs font-bold uppercase leading-4 tracking-[0.08em] text-white">
                  Žiūrėti pristatymą
                </div>
              </div>

              <p className="reveal-item body-lead text-white/82">
                Pirmasis ir vienintelis parkas Vilniuje, skirtas aukštos pridėtinės vertės
                inovacijoms. Paruošta infrastruktūra, valstybės parama ir operatoriaus pagalba
                viso proceso metu.
              </p>

              <div className="reveal-item flex flex-col gap-3 sm:flex-row">
                <a
                  href="#kontaktai"
                  className="relative flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-none bg-white px-5 py-3 text-base font-semibold leading-none text-primary transition hover:bg-accent hover:text-white"
                  onMouseEnter={() => setBtnHovered(true)}
                  onMouseLeave={() => setBtnHovered(false)}
                >
                  <span className="h-5 overflow-hidden py-px">
                    <span
                      className="flex flex-col transition-transform duration-200 ease-out"
                      style={{ transform: btnHovered ? "translateY(-50%)" : "translateY(0%)" }}
                    >
                      {["Susisiekti", "Susisiekti"].map((label, index) => (
                        <span key={index} className="flex h-5 items-center gap-2">
                          {label}
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </span>
                      ))}
                    </span>
                  </span>
                </a>

                <a
                  href="#sklypai"
                  className="inline-flex min-h-10 w-fit items-center gap-2 rounded-none border border-white/28 px-5 py-2 text-base font-semibold text-white transition hover:border-accent hover:text-accent"
                >
                  <MapPinned size={17} aria-hidden="true" />
                  Žiūrėti sklypus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {videoOpen && (
        <div
          className="modal-fade fixed inset-0 z-[1000] grid place-items-center bg-primary/86 px-4 py-8 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="VCIIP video"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="modal-scale relative w-full max-w-5xl overflow-hidden rounded-none border border-white/16 bg-black shadow-2xl shadow-black/40"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-none bg-white text-primary transition hover:bg-accent hover:text-white"
              onClick={() => setVideoOpen(false)}
              aria-label="Uždaryti video"
            >
              <X size={20} aria-hidden="true" />
            </button>

            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/RfuIt1vlqP4?autoplay=1&rel=0"
                title="VCIIP video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
