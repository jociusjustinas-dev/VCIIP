import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

import bioLogo from "../assets/logos/bio.svg";
import bioLogoWhite from "../assets/logos/bio-white.svg";
import techLogo from "../assets/logos/tech.svg";
import techLogoWhite from "../assets/logos/tech-white.svg";
import {
  bioNavGroup,
  resolveNavHref,
  sharedNavItems,
  techNavGroup,
  type NavGroup,
  type NavLink,
} from "../content/site";

export type NavPageContext = "tech" | "bio" | "other";
type BrandVariant = "bio" | "tech";

type NavTone = {
  border: string;
  menuText: string;
  iconText: string;
  logo: string;
  cta: string;
};

const brandLogos: Record<BrandVariant, { dark: string; light: string; alt: string }> = {
  bio: { dark: bioLogo, light: bioLogoWhite, alt: "VCIIP BIO" },
  tech: { dark: techLogo, light: techLogoWhite, alt: "VCIIP TECH" },
};

export function Navigation({
  pageContext = "tech",
  variant = "tech",
}: {
  pageContext?: NavPageContext;
  variant?: BrandVariant;
}) {
  const [onDarkSurface, setOnDarkSurface] = useState(true);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"bio" | "tech" | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<"bio" | "tech" | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const logos = brandLogos[variant];

  const activeGroupId = pageContext === "bio" ? "bio" : pageContext === "tech" ? "tech" : null;

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

  useEffect(() => {
    if (!mobileMenuOpen) setMobileExpanded(null);
  }, [mobileMenuOpen]);

  const navTone: NavTone = onDarkSurface
    ? {
        border: "border-white/28",
        menuText: "text-white hover:bg-white/10",
        iconText: "text-white",
        logo: logos.light,
        cta: "bg-white text-primary hover:bg-accent hover:text-white",
      }
    : {
        border: "border-primary/28",
        menuText: "text-primary hover:bg-white",
        iconText: "text-primary",
        logo: logos.dark,
        cta: "bg-primary text-white hover:bg-accent hover:text-white",
      };

  const stickyTone: NavTone = {
    border: "border-primary/14",
    menuText: "text-primary hover:bg-primary/6",
    iconText: "text-primary",
    logo: logos.dark,
    cta: "bg-primary text-white hover:bg-accent hover:text-white",
  };

  const renderNavItems = (tone: NavTone, options: { sticky?: boolean } = {}) => {
    const isLightDropdown = options.sticky || !onDarkSurface;

    return (
      <>
        {[bioNavGroup, techNavGroup].map((group) => {
          const isActiveGroup = activeGroupId === group.id;

          if (isActiveGroup) {
            return (
              <NavFlatGroup
                key={group.id}
                group={group}
                tone={tone}
                onNavigate={() => setMobileMenuOpen(false)}
              />
            );
          }

          return (
            <NavDropdown
              key={group.id}
              group={group}
              tone={tone}
              isLight={isLightDropdown}
              isOpen={openDropdown === group.id}
              onOpen={() => setOpenDropdown(group.id)}
              onClose={() => setOpenDropdown(null)}
            />
          );
        })}

        {sharedNavItems.map((item) => (
          <NavAnchor
            key={item.href}
            href={resolveNavHref("/", item.href)}
            className={tone.menuText}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </NavAnchor>
        ))}
      </>
    );
  };

  const renderNavBar = (
    tone: NavTone,
    options: { sticky?: boolean; hidden?: boolean } = {},
  ) => (
    <div className="site-container px-6 max-[479px]:px-4">
      <div
        className={`relative mx-auto flex items-center justify-between gap-3 border-b py-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] max-[991px]:gap-2 max-[991px]:py-3 ${
          options.sticky
            ? `rounded-b-2xl border-solid bg-white/78 px-5 shadow-[0_18px_54px_color-mix(in_srgb,var(--color-primary)_12%,transparent)] backdrop-blur-xl ${tone.border}`
            : `border-dashed ${tone.border}`
        } ${options.hidden ? "-translate-y-4 opacity-0" : "translate-y-0 opacity-100"}`}
      >
        <div className="flex min-w-0 flex-1 items-center gap-12 max-[991px]:gap-2.5">
          <button
            className={`hidden shrink-0 items-center border-0 bg-transparent p-0 transition-colors max-[991px]:flex ${tone.iconText}`}
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-expanded={mobileMenuOpen}
            aria-label="Atidaryti navigaciją"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <a
            href="/"
            className="flex min-w-0 items-center max-[991px]:max-w-[min(100%,10.5rem)] max-[479px]:max-w-[min(100%,8.75rem)]"
            aria-label={`${logos.alt} pradinis puslapis`}
          >
            <img
              src={tone.logo}
              alt={logos.alt}
              className="h-8 w-auto max-w-full object-contain object-left transition-opacity max-[991px]:h-7 max-[479px]:h-[1.625rem]"
              width="193"
              height="63"
            />
          </a>

          <nav
            className="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto max-[991px]:hidden"
            aria-label="Pagrindinė navigacija"
          >
            {renderNavItems(tone, { sticky: options.sticky })}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2 max-[479px]:gap-1.5">
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
            className={`hidden min-h-12 shrink-0 items-center justify-center rounded-full bg-accent px-5 py-3 text-base font-semibold leading-none text-white transition hover:bg-primary min-[992px]:inline-flex`}
            href={resolveNavHref("/", "sklypai")}
            aria-label="Prieinami sklypai"
          >
            Prieinami sklypai
          </a>

          <a
            className={`group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full border px-5 py-3 text-base font-semibold leading-none transition max-[991px]:min-h-10 max-[991px]:px-3.5 max-[991px]:py-2 max-[991px]:text-sm max-[479px]:min-h-9 max-[479px]:px-3 ${
              options.sticky || !onDarkSurface
                ? "border-primary/18 bg-white text-primary hover:bg-primary hover:text-white"
                : "border-white/32 bg-transparent text-white hover:bg-white hover:text-primary"
            }`}
            href={resolveNavHref("/", "investuotojo-uzklausa")}
            aria-label="Susisiekti"
          >
            <span className="h-5 overflow-hidden py-px max-[400px]:hidden">
              <span className="flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-1/2">
                {["Susisiekti", "Susisiekti"].map((label, index) => (
                  <span key={index} className="flex h-5 items-center gap-2">
                    {label}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                ))}
              </span>
            </span>
            <ArrowUpRight size={18} className="hidden max-[400px]:block" aria-hidden="true" />
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
        <div className="pointer-events-auto fixed inset-x-0 top-0 z-[997] hidden max-h-[89svh] overflow-auto bg-white px-6 pb-6 pt-[4.75rem] shadow-2xl shadow-primary/16 max-[991px]:block max-[479px]:px-4 max-[479px]:pt-[4.5rem]">
          <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 border-y border-primary/16 bg-background px-6 py-3 max-[479px]:gap-2 max-[479px]:px-4">
            <a href="/" aria-label="VCIIP pradinis puslapis" className="inline-flex min-w-0 max-w-[min(100%,10rem)]">
              <img src={logos.dark} alt={logos.alt} className="h-7 w-auto max-w-full object-contain object-left max-[479px]:h-[1.625rem]" />
            </a>
            <div className="flex shrink-0 items-center gap-2">
              <a
                className="inline-flex min-h-9 items-center justify-center rounded-full bg-primary px-3.5 py-2 text-sm font-semibold leading-none text-white"
                href={resolveNavHref("/", "investuotojo-uzklausa")}
                onClick={() => setMobileMenuOpen(false)}
              >
                Susisiekti
              </a>
              <button
                className="inline-flex size-9 items-center justify-center rounded-full border border-primary/14 text-primary"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Uždaryti navigaciją"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="my-5 h-px w-full bg-primary/16" />

          {[bioNavGroup, techNavGroup].map((group) => {
            const isActiveGroup = activeGroupId === group.id;
            const isExpanded = mobileExpanded === group.id;

            if (isActiveGroup) {
              return (
                <div key={group.id} className="mb-4">
                  <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary/42">
                    {group.label}
                  </p>
                  <div className="flex flex-col gap-1">
                    {group.items.map((item) => (
                      <MobileNavLink
                        key={item.href}
                        item={item}
                        pageHref={group.pageHref}
                        onNavigate={() => setMobileMenuOpen(false)}
                      />
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div key={group.id} className="mb-2 border-b border-primary/10 pb-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-2 text-base font-bold leading-[150%] text-primary"
                  onClick={() => setMobileExpanded((current) => (current === group.id ? null : group.id))}
                  aria-expanded={isExpanded}
                >
                  {group.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>
                {isExpanded && (
                  <div className="flex flex-col gap-1 pb-2 pl-3">
                    {group.items.map((item) => (
                      <MobileNavLink
                        key={item.href}
                        item={item}
                        pageHref={group.pageHref}
                        onNavigate={() => setMobileMenuOpen(false)}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {sharedNavItems.map((item) => (
            <MobileNavLink
              key={item.href}
              item={item}
              pageHref="/"
              onNavigate={() => setMobileMenuOpen(false)}
            />
          ))}

          <a
            href={resolveNavHref("/", "sklypai")}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-base font-semibold leading-none text-white"
          >
            Prieinami sklypai
          </a>
        </div>
      )}
    </div>
  );
}

function NavAnchor({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`shrink-0 rounded-full px-3 py-1.5 text-sm font-semibold leading-[150%] transition ${className}`}
    >
      {children}
    </a>
  );
}

function NavFlatGroup({
  group,
  tone,
  onNavigate,
}: {
  group: NavGroup;
  tone: NavTone;
  onNavigate?: () => void;
}) {
  return (
    <>
      {group.items.map((item) => (
        <NavAnchor
          key={item.href}
          href={resolveNavHref(group.pageHref, item.href)}
          className={tone.menuText}
          onClick={onNavigate}
        >
          {item.label}
        </NavAnchor>
      ))}
    </>
  );
}

function NavDropdown({
  group,
  tone,
  isLight,
  isOpen,
  onOpen,
  onClose,
}: {
  group: NavGroup;
  tone: NavTone;
  isLight: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative shrink-0" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold leading-[150%] transition ${tone.menuText}`}
        onClick={() => (isOpen ? onClose() : onOpen())}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {group.label}
        <ChevronDown
          size={14}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          className={`absolute left-0 top-[calc(100%+0.35rem)] z-[50] min-w-[13.5rem] overflow-hidden rounded-2xl border p-1.5 shadow-[0_18px_48px_color-mix(in_srgb,var(--color-primary)_18%,transparent)] ${
            isLight ? "border-primary/12 bg-white/95" : "border-white/16 bg-primary/95"
          } backdrop-blur-xl`}
        >
          {group.items.map((item) => (
            <a
              key={item.href}
              href={resolveNavHref(group.pageHref, item.href)}
              className={`block rounded-xl px-3 py-2.5 text-sm font-semibold leading-[140%] transition ${
                isLight
                  ? "text-primary/72 hover:bg-primary/6 hover:text-primary"
                  : "text-white/88 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNavLink({
  item,
  pageHref,
  onNavigate,
}: {
  item: NavLink;
  pageHref: string;
  onNavigate: () => void;
}) {
  return (
    <a
      href={resolveNavHref(pageHref, item.href)}
      onClick={onNavigate}
      className="block py-2 text-base font-semibold leading-[150%] text-primary/82"
    >
      {item.label}
    </a>
  );
}
