import type { ReactNode } from "react";
import bioLogo from "../assets/logos/bio.svg";
import { FacebookIcon, LinkedinIcon } from "./FooterSocialIcons";
import vciipLogo from "../assets/logos/logo-dark.svg";
import vciipLogoTeal from "../assets/logos/logo-teal-dark.svg";
import techLogo from "../assets/logos/tech.svg";
import type { BrandVariant } from "./Navigation";

const footerNavigation = [
  { label: "VCIIP Bio", href: "/ekosistema" },
  { label: "VCIIP Tech", href: "/tech" },
  { label: "Kodėl Vilnius", href: "/kodel-vilnius" },
  { label: "Naujienos", href: "/naujienos" },
  { label: "Investavimo procesas", href: "/tech#kaip-isikurti" },
  { label: "Laisvi sklypai", href: "/tech#sklypai" },
  { label: "Kontaktai", href: "/kontaktai" },
];

const partnerLinks = [
  { label: "Investuok Lietuvoje", href: "https://investlithuania.com/" },
  { label: "Go Vilnius", href: "https://www.govilnius.lt/" },
  { label: "Vilniaus miesto savivaldybė", href: "https://vilnius.lt/" },
];

const socialLinks = [
  { label: "VCIIP Facebook", href: "https://www.facebook.com/VCIIP/", Icon: FacebookIcon },
  {
    label: "VCIIP LinkedIn",
    href: "https://www.linkedin.com/company/vilnius-city-innovation-industrial-park/",
    Icon: LinkedinIcon,
  },
] as const;

type FooterBrandVariant = BrandVariant;

const brandLogos: Record<FooterBrandVariant, { src: string; alt: string }> = {
  vciip: { src: vciipLogo, alt: "VCIIP" },
  bio: { src: bioLogo, alt: "VCIIP BIO" },
  tech: { src: techLogo, alt: "VCIIP TECH" },
};

export function Footer({
  variant = "vciip",
  hubHref = "/",
  tealLogo = false,
}: {
  variant?: FooterBrandVariant;
  hubHref?: string;
  tealLogo?: boolean;
}) {
  const logo =
    tealLogo && variant === "vciip"
      ? { src: vciipLogoTeal, alt: "VCIIP" }
      : brandLogos[variant];

  return (
    <footer className="relative border-t border-dashed border-primary/12 bg-white">
      <div className="site-container py-14 text-primary max-[767px]:py-12 max-[479px]:py-10">
          <div className="grid gap-8 border-b border-dashed border-primary/12 pb-8 md:grid-cols-2 xl:grid-cols-[minmax(220px,1.1fr)_0.72fr_0.9fr_0.82fr] xl:gap-10">
            <div className="flex max-w-md flex-col gap-4">
              <a href={hubHref} aria-label={logo.alt} className="inline-flex w-fit">
                <img src={logo.src} alt={logo.alt} className="h-9 w-auto" />
              </a>
              <p className="m-0 text-sm font-medium leading-[1.55] text-muted">
                Vilniaus miesto inovacijų ir pramonės parkas, vystomas aukštos pridėtinės
                vertės inovacijų, gyvybės mokslų ir pažangios gamybos veikloms.
              </p>
              <div className="flex items-center gap-2.5">
                {socialLinks.map(({ label, href, Icon }) => (
                  <FooterSocialLink key={href} href={href} label={label} Icon={Icon} />
                ))}
              </div>
            </div>

            <FooterColumn title="Navigacija">
              {footerNavigation.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Kontaktai">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <p className="m-0 text-sm font-medium leading-[1.5] text-primary">
                    VšĮ „Northtown Vilnius“
                  </p>
                  <p className="m-0 text-sm font-medium leading-[1.5] text-muted">
                    [Adresas]
                  </p>
                  <a className="text-sm font-medium leading-[1.5] text-primary/68 hover:text-primary" href="mailto:info@vciip.lt">
                    info@vciip.lt
                  </a>
                  <a className="text-sm font-medium leading-[1.5] text-primary/68 hover:text-primary" href="tel:+370XXXXXXXX">
                    +370 XXX XXXXX
                  </a>
                </div>

                <div className="h-0 w-full border-b border-dashed border-primary/12" />

                <div className="flex flex-col gap-1.5">
                  <p className="m-0 text-sm font-medium leading-[1.5] text-primary">
                    [Vardas Pavardė]
                  </p>
                  <p className="m-0 text-xs font-medium leading-[1.5] text-muted">
                    Direktorius
                  </p>
                  <a className="text-sm font-medium leading-[1.5] text-primary/68 hover:text-primary" href="mailto:vardas@vciip.lt">
                    vardas@vciip.lt
                  </a>
                </div>
              </div>
            </FooterColumn>

            <FooterColumn title="Partneriai / Nuorodos">
              {partnerLinks.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </FooterColumn>
          </div>

          <div className="flex items-center justify-between gap-4 pt-6 max-[767px]:flex-col max-[767px]:items-start">
            <p className="m-0 text-xs font-medium leading-[1.5] text-primary/48">
              © 2026 VCIIP. Visos teisės saugomos.
            </p>

            <div className="flex flex-wrap gap-4">
              <FooterLink href="/privatumo-politika/">Privatumo politika</FooterLink>
              <FooterLink href="/slapuku-politika/">Slapukų politika</FooterLink>
            </div>
          </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="m-0 font-display text-sm font-bold uppercase leading-tight tracking-wide text-primary/42">
        {title}
      </p>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-medium leading-[1.5] text-primary/68 transition-colors duration-200 hover:text-primary"
    >
      {children}
    </a>
  );
}

function FooterSocialLink({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: typeof FacebookIcon;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group inline-flex size-10 shrink-0 items-center justify-center rounded-none border border-[#c5c5cb] bg-white text-primary transition-colors duration-150 hover:border-accent hover:bg-accent hover:text-white"
    >
      <Icon className="block size-3" />
    </a>
  );
}
