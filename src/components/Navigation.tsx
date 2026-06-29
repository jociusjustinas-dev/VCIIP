import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

import bioLogo from "../assets/logos/bio.svg";
import bioLogoWhite from "../assets/logos/bio-white.svg";
import vciipLogo from "../assets/logos/logo-dark.svg";
import vciipLogoTeal from "../assets/logos/logo-teal-dark.svg";
import vciipLogoTealWhite from "../assets/logos/logo-teal-light.svg";
import vciipLogoWhite from "../assets/logos/logo-light.svg";
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
import { scrollToHash } from "../utils/scrollToSection";

export type BrandVariant = "vciip" | "bio" | "tech";

type NavTone = {
  border: string;
  menuText: string;
  iconText: string;
  logo: string;
  cta: string;
};

const brandLogos: Record<BrandVariant, { dark: string; light: string; alt: string }> = {
  vciip: { dark: vciipLogo, light: vciipLogoWhite, alt: "VCIIP" },
  bio: { dark: bioLogo, light: bioLogoWhite, alt: "VCIIP BIO" },
  tech: { dark: techLogo, light: techLogoWhite, alt: "VCIIP TECH" },
};

const vciipTealLogos = { dark: vciipLogoTeal, light: vciipLogoTealWhite, alt: "VCIIP" };

export function Navigation({
  variant = "vciip",
  hubHref = "/",
  tealLogo = false,
}: {
  variant?: BrandVariant;
  hubHref?: string;
  tealLogo?: boolean;
}) {
  const [onDarkSurface, setOnDarkSurface] = useState(true);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<"bio" | "tech" | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const logos =
    tealLogo && variant === "vciip" ? vciipTealLogos : brandLogos[variant];
  const contactHref = resolveNavHref(
    variant === "bio" ? "/ekosistema" : variant === "tech" ? "/tech" : "/",
    "investuotojo-uzklausa",
  );

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const normalizePath = (path: string) => path.replace(/\/$/, "") || "/";
    const targetPath = normalizePath(new URL(hubHref, window.location.origin).pathname);
    const currentPath = normalizePath(window.location.pathname);

    if (targetPath !== currentPath) return;

    event.preventDefault();

    const heroId =
      variant === "bio"
        ? "apie-vciip-bio"
        : variant === "tech"
          ? "apie-vciip-tech"
          : "apie-vciip";

    if (heroId && document.getElementById(heroId)) {
      scrollToHash(`#${heroId}`);
      return;
    }

    window.lenis?.scrollTo(0, { immediate: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  const renderNavItems = (tone: NavTone, options: { sticky?: boolean } = {}) => (
    <>
      {[bioNavGroup, techNavGroup].map((group) => (
        <NavDropdown key={group.id} group={group} tone={tone} />
      ))}

      {sharedNavItems.map((item) => (
        <NavAnchor
          key={item.href}
          href={item.href}
          className={tone.menuText}
          onClick={() => setMobileMenuOpen(false)}
        >
          {item.label}
        </NavAnchor>
      ))}
    </>
  );

  const activeTone = stickyVisible ? stickyTone : navTone;
  const activeSticky = stickyVisible;

  const renderNavBar = (tone: NavTone, options: { sticky?: boolean } = {}) => (
    <div className="site-container px-6 max-[479px]:px-4">
      <div
        className={`relative mx-auto flex items-center justify-between gap-3 border-b py-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] max-[991px]:gap-2 max-[991px]:py-3 ${
          options.sticky
            ? `rounded-b-none border-solid bg-white/78 px-5 shadow-[0_18px_54px_color-mix(in_srgb,var(--color-primary)_12%,transparent)] backdrop-blur-xl ${tone.border}`
            : `border-dashed ${tone.border}`
        }`}
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
            href={hubHref}
            onClick={handleLogoClick}
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
            className="flex min-w-0 flex-1 items-center gap-0.5 overflow-visible max-[991px]:hidden"
            aria-label="Pagrindinė navigacija"
          >
            {renderNavItems(tone, { sticky: options.sticky })}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2 max-[479px]:gap-1.5">
          <div
            className={`hidden items-center rounded-none border p-1 max-[991px]:hidden sm:flex ${
              options.sticky || !onDarkSurface
                ? "border-primary/14 bg-primary/5"
                : "border-white/22 bg-white/10"
            }`}
            aria-label="Kalbos pasirinkimas"
          >
            <a
              href="#"
              aria-current="true"
              className={`rounded-none px-3 py-2 font-mono text-xs font-semibold uppercase leading-none tracking-[0.08em] transition ${
                options.sticky || !onDarkSurface
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              }`}
            >
              LT
            </a>
            <a
              href="#"
              className={`rounded-none px-3 py-2 font-mono text-xs font-semibold uppercase leading-none tracking-[0.08em] transition ${
                options.sticky || !onDarkSurface
                  ? "text-primary/52 hover:text-primary"
                  : "text-white/62 hover:text-white"
              }`}
            >
              EN
            </a>
          </div>

          <a
            className={`group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-none px-5 py-3 text-base font-semibold leading-none transition max-[991px]:min-h-10 max-[991px]:px-3.5 max-[991px]:py-2 max-[991px]:text-sm max-[479px]:min-h-9 max-[479px]:px-3 ${tone.cta}`}
            href={contactHref}
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
    <div ref={navRef} className="pointer-events-auto fixed inset-x-0 top-0 z-[999] w-full">
      <div
        className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          stickyVisible ? "translate-y-0" : "translate-y-2 max-[479px]:translate-y-3"
        }`}
      >
        {renderNavBar(activeTone, { sticky: activeSticky })}
      </div>

      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-0 top-0 z-[997] hidden max-h-[89svh] overflow-auto bg-white px-6 pb-6 pt-[4.75rem] shadow-2xl shadow-primary/16 max-[991px]:block max-[479px]:px-4 max-[479px]:pt-[4.5rem]">
          <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 border-y border-primary/16 bg-background px-6 py-3 max-[479px]:gap-2 max-[479px]:px-4">
            <a
              href={hubHref}
              onClick={handleLogoClick}
              aria-label={`${logos.alt} pradinis puslapis`}
              className="inline-flex min-w-0 max-w-[min(100%,10rem)]"
            >
              <img src={logos.dark} alt={logos.alt} className="h-7 w-auto max-w-full object-contain object-left max-[479px]:h-[1.625rem]" />
            </a>
            <div className="flex shrink-0 items-center gap-2">
              <a
                className="inline-flex min-h-9 items-center justify-center rounded-none bg-primary px-3.5 py-2 text-sm font-semibold leading-none text-white"
                href={contactHref}
                onClick={() => setMobileMenuOpen(false)}
              >
                Susisiekti
              </a>
              <button
                className="inline-flex size-9 items-center justify-center rounded-none border border-primary/14 text-primary"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Uždaryti navigaciją"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="my-5 h-px w-full bg-primary/16" />

          {[bioNavGroup, techNavGroup].map((group) => {
            const isExpanded = mobileExpanded === group.id;

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
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold leading-[150%] text-primary/82"
            >
              {item.label}
            </a>
          ))}
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
      className={`shrink-0 rounded-none px-3 py-1.5 text-sm font-semibold leading-[150%] transition ${className}`}
    >
      {children}
    </a>
  );
}

function NavDropdown({
  group,
  tone,
}: {
  group: NavGroup;
  tone: NavTone;
}) {
  const [open, setOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number; width: number } | null>(
    null,
  );
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const updateMenuPosition = () => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return null;

    const next = {
      top: rect.bottom + 4,
      left: rect.left,
      width: Math.max(rect.width, 216),
    };

    setMenuPosition(next);
    return next;
  };

  const handleOpen = () => {
    clearCloseTimeout();
    updateMenuPosition();
    setOpen(true);
  };

  const handleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
      setMenuPosition(null);
    }, 180);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    clearCloseTimeout();

    if (open) return;

    updateMenuPosition();
    setOpen(true);
  };

  useLayoutEffect(() => {
    if (!open) return;

    updateMenuPosition();

    const handleLayoutChange = () => updateMenuPosition();
    window.addEventListener("scroll", handleLayoutChange, { passive: true });
    window.addEventListener("resize", handleLayoutChange);

    return () => {
      window.removeEventListener("scroll", handleLayoutChange);
      window.removeEventListener("resize", handleLayoutChange);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (triggerRef.current?.contains(target) || menuRef.current?.contains(target)) return;
      setOpen(false);
      setMenuPosition(null);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setMenuPosition(null);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    return () => clearCloseTimeout();
  }, []);

  const handleItemClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    setMenuPosition(null);

    const url = new URL(href, window.location.origin);
    const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
    const targetPath = url.pathname.replace(/\/$/, "") || "/";

    if (url.hash && targetPath === currentPath) {
      event.preventDefault();
      window.history.pushState(null, "", `${targetPath === "/" ? "/" : targetPath}${url.hash}`);
      scrollToHash(url.hash);
    }
  };

  const menuPanel = (
    <div
      ref={menuRef}
      className="overflow-hidden rounded-none border border-primary/12 bg-white p-1.5 shadow-[0_18px_48px_color-mix(in_srgb,var(--color-primary)_18%,transparent)]"
      style={{ minWidth: menuPosition?.width }}
    >
      {group.items.map((item) => (
        <a
          key={item.href}
          href={resolveNavHref(group.pageHref, item.href)}
          className="block rounded-none px-3 py-2.5 text-sm font-semibold leading-[140%] text-primary/72 transition hover:bg-primary/6 hover:text-primary"
          onClick={(event) => handleItemClick(event, resolveNavHref(group.pageHref, item.href))}
        >
          {item.label}
        </a>
      ))}
    </div>
  );

  return (
    <div className="relative shrink-0">
      <button
        ref={triggerRef}
        type="button"
        className={`inline-flex cursor-pointer items-center gap-0.5 rounded-none border-0 bg-transparent px-3 py-1.5 text-sm font-semibold leading-[150%] transition ${tone.menuText}`}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={`nav-menu-${group.id}`}
        onPointerEnter={handleOpen}
        onPointerLeave={handleClose}
        onClick={handleClick}
      >
        {group.label}
        <ChevronDown
          size={14}
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open &&
        menuPosition &&
        createPortal(
          <div
            id={`nav-menu-${group.id}`}
            role="menu"
            className="fixed z-[10001]"
            style={{ top: menuPosition.top - 8, left: menuPosition.left, paddingTop: 8 }}
            onPointerEnter={handleOpen}
            onPointerLeave={handleClose}
          >
            {menuPanel}
          </div>,
          document.body,
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
  const href = resolveNavHref(pageHref, item.href);

  return (
    <a
      href={href}
      onClick={(event) => {
        const url = new URL(href, window.location.origin);
        const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
        const targetPath = url.pathname.replace(/\/$/, "") || "/";

        if (url.hash && targetPath === currentPath) {
          event.preventDefault();
          window.history.pushState(null, "", `${targetPath === "/" ? "/" : targetPath}${url.hash}`);
          scrollToHash(url.hash);
        }

        onNavigate();
      }}
      className="block py-2 text-base font-semibold leading-[150%] text-primary/82"
    >
      {item.label}
    </a>
  );
}
