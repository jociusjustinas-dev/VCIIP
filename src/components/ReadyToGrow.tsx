import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Droplets, Flame, Network, Zap } from "lucide-react";
import vciipOverviewImage from "../assets/images/vciip-overview.jpg";

const infrastructureStats = [
  {
    value: ">30 MW",
    label: "elektros galios",
    title: "Elektros galios",
    Icon: Zap,
    className: "left-[8%] top-[32%]",
  },
  {
    value: ">75 m³/h",
    label: "vandens",
    title: "Vandens pajėgumai",
    Icon: Droplets,
    className: "right-[10%] top-[26%]",
  },
  {
    value: "2000 m³/h",
    label: "dujų",
    title: "Dujų pajėgumai",
    Icon: Flame,
    className: "left-[13%] bottom-[26%]",
  },
  {
    value: ">3 km",
    label: "komunikacijų",
    title: "Komunikacijos",
    Icon: Network,
    className: "right-[18%] top-[48%]",
  },
];

const plotHotspot = {
  value: "0,57-5,03 ha",
  title: "Sklypai",
  className: "left-[38%] top-[55%]",
};

const clampProgress = (value: number) => Math.min(1, Math.max(0, value));

const phaseProgress = (progress: number, start: number, end: number) =>
  clampProgress((progress - start) / (end - start));

export function ReadyToGrow() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyWrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [stickyProgress, setStickyProgress] = useState(0);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth < 768);

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    const element = stickyWrapRef.current;
    if (!element) return;

    let rafId = 0;

    const updateProgress = () => {
      const rect = element.getBoundingClientRect();
      const scrollableDistance = Math.max(1, rect.height - window.innerHeight);
      const nextProgress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
      setStickyProgress(nextProgress);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const imageProgress = Math.min(1, stickyProgress / 0.24);
  const exitProgress = phaseProgress(stickyProgress, 0.985, 1);
  const imageWidth = isMobile ? 100 : 68 + imageProgress * 32 - exitProgress * 6;
  const imageHeight = 64 + imageProgress * 36 - exitProgress * 10;
  const framePadding = isMobile ? 0 : 24 * (1 - imageProgress) + 24 * exitProgress;
  const frameRadius = isMobile ? 16 : 24 * (1 - imageProgress) + 24 * exitProgress;
  const introIn = phaseProgress(stickyProgress, 0.38, 0.46);
  const introOut = phaseProgress(stickyProgress, 0.54, 0.64);
  const introOpacity = isMobile ? 1 : introIn * (1 - introOut);
  const introTranslateY = isMobile ? 0 : 36 * (1 - introIn) - 120 * introOut;
  const overlayLift = phaseProgress(stickyProgress, 0.62, 0.76);
  const mainOverlayOpacity = isMobile ? 0.64 : 0.7 - overlayLift * 0.28;
  const ctaIn = isMobile ? 1 : phaseProgress(stickyProgress, 0.92, 0.955);

  const hotspotStyle = (index: number) => {
    const hotspotIn = phaseProgress(stickyProgress, 0.64 + index * 0.04, 0.72 + index * 0.04);
    const opacity = hotspotIn;
    const translateY = 22 * (1 - hotspotIn);

    return {
      opacity,
      transform: `translateY(${translateY}px) scale(${0.96 + hotspotIn * 0.04})`,
      transition: `opacity 900ms cubic-bezier(0.16,1,0.3,1) ${index * 120}ms, transform 900ms cubic-bezier(0.16,1,0.3,1) ${index * 120}ms, background-color 500ms ease-out`,
    };
  };

  return (
    <section ref={sectionRef} id="paruoshta-augti" className="relative bg-white pt-24 max-[991px]:pt-16 max-[479px]:pt-12">
      <div className="mb-12 overflow-hidden pb-8 pt-4 max-[479px]:mb-8 max-[479px]:pb-5">
        <div
          className={`flex w-max transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible ? "translate-x-0" : "-translate-x-1/3"
          }`}
        >
          <div className="animate-marquee-ecosystem flex w-max">
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={index}
                className="mr-10 flex flex-none items-center gap-10 max-[479px]:mr-6 max-[479px]:gap-6"
              >
                <h2 className="m-0 font-sans text-[clamp(4.75rem,12vw,13rem)] font-medium leading-[1.05] tracking-[-0.035em] text-primary max-[479px]:text-[3.5rem]">
                  Paruošta augti
                </h2>
                <span className="mt-5 size-6 flex-none rounded-full bg-accent max-[767px]:size-4 max-[479px]:mt-3 max-[479px]:size-3" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={stickyWrapRef} className="relative h-[700vh] bg-white max-[767px]:h-auto max-[767px]:pb-12">
        <div
          className="sticky top-0 flex h-screen items-center justify-center overflow-hidden max-[767px]:relative max-[767px]:h-auto max-[767px]:px-4 max-[767px]:py-0"
          style={{ padding: `${framePadding}px` }}
        >
          <div
            className="relative overflow-hidden bg-primary max-[767px]:min-h-[820px] max-[767px]:w-full max-[479px]:min-h-[760px]"
            style={{
              width: `${imageWidth}%`,
              height: isMobile ? "auto" : `${imageHeight}vh`,
              borderRadius: `${frameRadius}px`,
            }}
          >
          <img
            src={vciipOverviewImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,50,58,0.44),rgba(20,50,58,0.28)_42%,rgba(20,50,58,0.78))]"
            style={{ opacity: mainOverlayOpacity }}
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,255,187,0.16),rgba(20,50,58,0)_48%)]"
            style={{ opacity: 1 - overlayLift * 0.45 }}
          />

          <div
            className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center px-8 text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] max-[479px]:px-5"
            style={{
              opacity: introOpacity,
              transform: `translateY(${introTranslateY}px)`,
            }}
          >
            <p className="m-0 max-w-4xl text-[clamp(2rem,4.2vw,4.8rem)] font-medium leading-[1.08] tracking-[-0.04em] text-white">
              Liepkalnio teritorijoje plėtojami išskirtiniai inžinerinės infrastruktūros
              pajėgumai, pritaikyti reikliausioms inovacijų ir gamybos veikloms.
            </p>
          </div>

          {infrastructureStats.map(({ value, label, title, className }, index) => (
            <button
              type="button"
              key={label}
              className={`group absolute ${className} flex w-fit items-center overflow-hidden rounded-2xl border border-white/55 bg-white/94 px-3 py-1.5 text-left text-primary backdrop-blur-md transition-colors duration-500 ease-out hover:bg-white focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent max-[767px]:hidden`}
              style={{
                ...hotspotStyle(index),
              }}
            >
              <span className="grid size-7 flex-none place-items-center text-accent">
                <span className="text-[32px] font-medium leading-none transition-transform duration-500 ease-out group-hover:rotate-45 group-focus-visible:rotate-45">
                  +
                </span>
              </span>
              <span className="mx-3 h-5 w-px flex-none bg-primary/12" />

              <span className="flex min-w-0 flex-col pr-4">
                <span className="whitespace-nowrap font-mono text-[11px] font-bold uppercase leading-[130%] tracking-[0.18em] text-primary">
                  {title}
                </span>
                <span className="grid max-h-0 max-w-0 overflow-hidden opacity-0 transition-[max-height,max-width,opacity,margin] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:mt-1.5 group-hover:max-h-10 group-hover:max-w-[180px] group-hover:opacity-100 group-focus-visible:mt-1.5 group-focus-visible:max-h-10 group-focus-visible:max-w-[180px] group-focus-visible:opacity-100">
                  <span className="translate-y-1 whitespace-nowrap text-[24px] font-medium leading-none tracking-[-0.04em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0">
                    {value}
                  </span>
                </span>
              </span>
            </button>
          ))}

          <button
            type="button"
            className={`group absolute ${plotHotspot.className} z-[2] hidden w-fit items-center overflow-hidden rounded-2xl border border-white/55 bg-white/94 px-3 py-1.5 text-left text-primary backdrop-blur-md transition-colors duration-500 ease-out hover:bg-white focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:flex`}
            style={{
              ...hotspotStyle(infrastructureStats.length),
            }}
          >
            <span className="grid size-7 flex-none place-items-center text-accent">
              <span className="text-[32px] font-medium leading-none transition-transform duration-500 ease-out group-hover:rotate-45 group-focus-visible:rotate-45">
                +
              </span>
            </span>
            <span className="mx-3 h-5 w-px flex-none bg-primary/12" />
            <span className="flex min-w-0 flex-col pr-4">
              <span className="whitespace-nowrap font-mono text-[11px] font-bold uppercase leading-[130%] tracking-[0.18em] text-primary">
                {plotHotspot.title}
              </span>
              <span className="grid max-h-0 max-w-0 overflow-hidden opacity-0 transition-[max-height,max-width,opacity,margin] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:mt-1.5 group-hover:max-h-10 group-hover:max-w-[180px] group-hover:opacity-100 group-focus-visible:mt-1.5 group-focus-visible:max-h-10 group-focus-visible:max-w-[180px] group-focus-visible:opacity-100">
                <span className="translate-y-1 whitespace-nowrap text-[24px] font-medium leading-none tracking-[-0.04em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0">
                  {plotHotspot.value}
                </span>
              </span>
            </span>
          </button>

          <div className="pointer-events-none absolute inset-x-5 top-[330px] hidden grid-cols-2 gap-4 max-[767px]:grid max-[479px]:top-[320px] max-[479px]:grid-cols-1">
            {infrastructureStats.map(({ value, label, title, Icon }, index) => (
              <div
                key={`mobile-${label}`}
                className="pointer-events-auto flex flex-col gap-4 rounded-2xl border border-white/18 bg-white/12 p-5 text-white backdrop-blur-md"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 700ms ease-out ${260 + index * 130}ms, transform 700ms ease-out ${260 + index * 130}ms`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-xl bg-white text-accent">
                    <span className="text-2xl font-medium leading-none transition-transform duration-500 ease-out group-hover:rotate-45">
                      +
                    </span>
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase leading-[130%] tracking-[0.14em] text-white/72">
                    {title}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <Icon size={18} aria-hidden="true" className="text-accent" />
                  <span className="text-[30px] font-medium leading-none tracking-[-0.04em]">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            className="absolute bottom-12 left-1/2 z-[3] flex w-[min(660px,calc(100%-2rem))] justify-center opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] max-[767px]:inset-x-5 max-[767px]:bottom-8 max-[767px]:w-auto"
            style={{
              opacity: ctaIn,
              transform: isMobile ? `translateY(${28 * (1 - ctaIn)}px)` : `translate(-50%, ${120 * (1 - ctaIn)}px)`,
              transitionDelay: ctaIn > 0 ? "80ms" : "0ms",
            }}
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#sklypai"
                className="group inline-flex min-h-14 w-fit items-center justify-center overflow-hidden rounded-full bg-accent px-7 py-4 text-lg font-semibold leading-none text-primary transition hover:bg-white max-[479px]:min-h-12 max-[479px]:px-5 max-[479px]:py-3 max-[479px]:text-base"
              >
                <span className="h-5 overflow-hidden py-px">
                  <span className="flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-1/2">
                    {["Žiūrėti, kas laisva", "Žiūrėti, kas laisva"].map((label, index) => (
                      <span key={index} className="flex h-5 items-center gap-2">
                        {label}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </span>
                    ))}
                  </span>
                </span>
              </a>
              <a
                href="#kontaktai"
                className="inline-flex min-h-14 w-fit items-center justify-center rounded-full border border-white/42 bg-white/10 px-7 py-4 text-lg font-semibold leading-none text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-primary max-[479px]:min-h-12 max-[479px]:px-5 max-[479px]:py-3 max-[479px]:text-base"
              >
                Susisiekti
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
