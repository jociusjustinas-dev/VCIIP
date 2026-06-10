import type { ReactNode } from "react";
import bioLogo from "../assets/logos/bio.svg";
import techLogo from "../assets/logos/tech.svg";

const footerNavigation = [
  { label: "Apie VCIIP", href: "#apie" },
  { label: "VCIIP Bio", href: "/ekosistema" },
  { label: "Investavimo procesas", href: "#kaip-isikurti" },
  { label: "Laisvi sklypai", href: "#sklypai" },
  { label: "Kontaktai", href: "#investuotojo-uzklausa" },
];

const partnerLinks = [
  { label: "Investuok Lietuvoje", href: "https://investlithuania.com/" },
  { label: "Go Vilnius", href: "https://www.govilnius.lt/" },
  { label: "Vilniaus miesto savivaldybė", href: "https://vilnius.lt/" },
];

type BrandVariant = "bio" | "tech";

export function Footer({ variant = "tech" }: { variant?: BrandVariant }) {
  const logo = variant === "bio" ? bioLogo : techLogo;
  const logoAlt = variant === "bio" ? "VCIIP BIO" : "VCIIP TECH";

  return (
    <footer className="relative bg-white p-2">
      <div className="rounded-2xl bg-white px-6 py-16 text-primary max-[479px]:px-4 max-[479px]:py-12">
        <div className="site-container">
          <div className="grid gap-12 border-b border-dashed border-primary/12 pb-14 lg:grid-cols-[minmax(260px,1.15fr)_0.72fr_0.9fr_0.82fr]" data-reveal-group>
            <div className="reveal-item flex max-w-md flex-col gap-8">
              <a href="#" aria-label="VCIIP" className="inline-flex w-fit">
                <img src={logo} alt={logoAlt} className="h-11 w-auto" />
              </a>
              <p className="m-0 text-base font-medium leading-[150%] text-muted">
                Vilniaus miesto inovacijų ir pramonės parkas, vystomas aukštos pridėtinės
                vertės inovacijų, gyvybės mokslų ir pažangios gamybos veikloms.
              </p>
            </div>

            <FooterColumn title="Navigacija">
              {footerNavigation.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Kontaktai">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p className="m-0 text-base font-medium leading-[150%] text-primary">
                    VšĮ „Northtown Vilnius“
                  </p>
                  <p className="m-0 text-base font-medium leading-[150%] text-muted">
                    [Adresas]
                  </p>
                  <a className="text-base font-medium leading-[150%] text-primary/68 hover:text-primary" href="mailto:info@vciip.lt">
                    info@vciip.lt
                  </a>
                  <a className="text-base font-medium leading-[150%] text-primary/68 hover:text-primary" href="tel:+370XXXXXXXX">
                    +370 XXX XXXXX
                  </a>
                </div>

                <div className="h-0 w-full border-b border-dashed border-primary/12" />

                <div className="flex flex-col gap-2">
                  <p className="m-0 text-base font-medium leading-[150%] text-primary">
                    [Vardas Pavardė]
                  </p>
                  <p className="m-0 text-sm font-medium leading-[150%] text-muted">
                    Direktorius
                  </p>
                  <a className="text-base font-medium leading-[150%] text-primary/68 hover:text-primary" href="mailto:vardas@vciip.lt">
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

          <div className="reveal-item flex items-center justify-between gap-6 pt-8 max-[767px]:flex-col max-[767px]:items-start">
            <p className="m-0 text-sm font-medium leading-[150%] text-primary/48">
              © 2026 VCIIP. Visos teisės saugomos.
            </p>

            <div className="flex flex-wrap gap-5">
              <FooterLink href="/privatumo-politika/">Privatumo politika</FooterLink>
              <FooterLink href="/slapuku-politika/">Slapukų politika</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="reveal-item flex flex-col gap-5">
      <p className="m-0 font-mono text-xs font-bold uppercase leading-4 tracking-[0.08em] text-primary/42">
        {title}
      </p>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="text-base font-medium leading-[150%] text-primary/68 transition-colors duration-200 hover:text-primary"
    >
      {children}
    </a>
  );
}
