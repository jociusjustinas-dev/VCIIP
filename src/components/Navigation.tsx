import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import logoDark from "../assets/logos/logo-dark.svg";
import logoLight from "../assets/logos/logo-light.svg";
import { navItems } from "../content/site";

export function Navigation() {
  const [onDarkSurface, setOnDarkSurface] = useState(true);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTheme = () => {
      const x = window.innerWidth / 2;
      const y = 42;
      const elements = document.elementsFromPoint(x, y);
      const surface = elements.find((element) => !navRef.current?.contains(element));

      setOnDarkSurface(Boolean(surface?.closest('[data-nav-theme="dark"]')));
      setStickyVisible(window.scrollY > 96);
    };

    updateTheme();
    window.addEventListener("scroll", updateTheme, { passive: true });
    window.addEventListener("resize", updateTheme);
    return () => {
      window.removeEventListener("scroll", updateTheme);
      window.removeEventListener("resize", updateTheme);
    };
  }, []);

  const navTone = onDarkSurface
    ? {
        border: "border-white/28",
        menuText: "text-white hover:bg-white/10",
        iconText: "text-white",
        logo: logoLight,
        cta: "bg-white text-primary hover:bg-accent hover:text-primary",
      }
    : {
        border: "border-primary/28",
        menuText: "text-primary hover:bg-white",
        iconText: "text-primary",
        logo: logoDark,
        cta: "bg-primary text-white hover:bg-accent hover:text-primary",
      };

  const stickyTone = {
    border: "border-primary/14",
    menuText: "text-primary hover:bg-primary/6",
    iconText: "text-primary",
    logo: logoDark,
    cta: "bg-primary text-white hover:bg-accent hover:text-primary",
  };

  const renderNavBar = (
    tone: typeof navTone,
    options: { sticky?: boolean; hidden?: boolean } = {},
  ) => (
    <div className="site-container px-6 max-[479px]:px-4">
      <div
        className={`relative mx-auto flex items-center justify-between border-b py-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          options.sticky
            ? `rounded-b-2xl border-solid bg-white/78 px-5 shadow-[0_18px_54px_rgba(20,50,58,0.12)] backdrop-blur-xl ${tone.border}`
            : `border-dashed ${tone.border}`
        } ${options.hidden ? "-translate-y-4 opacity-0" : "translate-y-0 opacity-100"}`}
      >
        <div className="flex items-center gap-12 max-[991px]:gap-4">
          <button
            className={`hidden items-center border-0 bg-transparent p-0 transition-colors max-[991px]:flex ${tone.iconText}`}
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-expanded={mobileMenuOpen}
            aria-label="Atidaryti navigaciją"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <a href="#" className="flex h-9 items-center" aria-label="VCIIP pradinis puslapis">
            <img
              src={tone.logo}
              alt="VCIIP"
              className="h-8 w-auto transition-opacity"
              width="193"
              height="63"
            />
          </a>

          <nav className="flex items-center gap-1 max-[991px]:hidden" aria-label="Pagrindinė navigacija">
            {navItems.slice(0, 5).map((item) => (
              <a
                key={item.href}
                className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold leading-[150%] transition ${tone.menuText}`}
                href={item.href}
              >
                <span>{item.label}</span>
                {item.label === "Sklypai" && (
                  <span
                    className={`availability-badge text-[0.55rem] ${
                      options.sticky || !onDarkSurface ? "availability-badge-dark" : ""
                    }`}
                  >
                    Prieinama dabar
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div
            className={`hidden items-center rounded-full border p-1 max-[991px]:hidden sm:flex ${
              options.sticky || !onDarkSurface
                ? "border-primary/14 bg-primary/5"
                : "border-white/22 bg-white/10"
            }`}
            aria-label="Kalbos pasirinkimas"
          >
            <a
              href="#"
              aria-current="true"
              className={`rounded-full px-3 py-2 font-mono text-xs font-semibold uppercase leading-none tracking-[0.08em] transition ${
                options.sticky || !onDarkSurface
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              }`}
            >
              LT
            </a>
            <a
              href="#"
              className={`rounded-full px-3 py-2 font-mono text-xs font-semibold uppercase leading-none tracking-[0.08em] transition ${
                options.sticky || !onDarkSurface
                  ? "text-primary/52 hover:text-primary"
                  : "text-white/62 hover:text-white"
              }`}
            >
              EN
            </a>
          </div>

          <a
            className={`group inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3 text-base font-semibold leading-none transition ${tone.cta}`}
            href="#kontaktai"
          >
            <span className="h-5 overflow-hidden py-px">
              <span className="flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-1/2">
                {["Susisiekti", "Susisiekti"].map((label, index) => (
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
  );

  return (
    <div ref={navRef} className="pointer-events-none fixed inset-x-0 top-0 z-[999] w-full">
      <div
        className={`absolute inset-x-0 top-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] max-[479px]:top-3 ${
          stickyVisible ? "-translate-y-5 opacity-0" : "translate-y-0 opacity-100"
        } ${stickyVisible ? "pointer-events-none" : "pointer-events-auto"}`}
        aria-hidden={stickyVisible}
      >
        {renderNavBar(navTone, { hidden: stickyVisible })}
      </div>

      <div
        className={`absolute inset-x-0 top-0 transition-all delay-100 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          stickyVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        } ${stickyVisible ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!stickyVisible}
      >
        {renderNavBar(stickyTone, { sticky: true, hidden: !stickyVisible })}
      </div>

      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-0 top-0 z-[997] hidden max-h-[89svh] overflow-auto bg-white px-6 pb-6 pt-28 shadow-2xl shadow-primary/16 max-[991px]:block max-[479px]:px-4">
          <div className="absolute inset-x-0 top-0 flex items-center justify-between border-y border-primary/16 bg-background px-6 py-3 max-[479px]:px-4">
            <div>
              <p className="text-base font-bold leading-[150%] text-primary">VCIIP</p>
              <a className="text-sm font-semibold leading-[142%] text-primary underline" href="#kontaktai">
                Pradėti pokalbį
              </a>
            </div>
            <div className="grid h-16 w-28 place-items-center rounded-md bg-primary text-accent">
              <span className="font-mono text-xs font-black uppercase tracking-[0.08em]">Vilnius</span>
            </div>
          </div>

          <a className="block text-base font-bold leading-[150%] text-primary" href="#">
            VCIIP
          </a>

          <div className="my-5 h-px w-full bg-primary/16" />

          {navItems.slice(0, 5).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center justify-between gap-3 py-1 text-base font-bold leading-[150%] text-primary"
            >
              <span>{item.label}</span>
              {item.label === "Sklypai" && (
                <span className="availability-badge availability-badge-dark text-[0.55rem]">
                  Prieinama dabar
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
