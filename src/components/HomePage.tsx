import { ArrowUpRight } from "lucide-react";

import { homeContent } from "../content/home";
import { AdvantagesSection } from "./AdvantagesSection";
import { ClientsLogoCarousel } from "./ClientsLogoCarousel";
import { HomeAboutSection } from "./HomeAboutSection";
import { HomeHero } from "./HomeHero";
import { InvestorInquiry } from "./InvestorInquiry";
import { MediaNewsSection } from "./MediaNewsSection";
import { ParkPairCards } from "./ParkPairCards";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { WhyVilniusCarousel } from "./WhyVilniusCarousel";

export function HomePage() {
  const { advantages, parks, clients, whyVilnius, cta } = homeContent;

  return (
    <main>
      <HomeHero />
      <HomeAboutSection />
      <AdvantagesSection title={advantages.title} items={advantages.items} />

      <div id="parkai">
        <ParkPairCards
          title="Du parkai. Viena ekosistema."
          description="VCIIP jungia dvi specializuotas teritorijas – VCIIP Bio Antakalnyje ir VCIIP Tech Liepkalnyje."
          primaryCta={{ label: "Sužinoti daugiau", href: "/apie-vciip" }}
          bio={parks.bio}
          tech={parks.tech}
        />
      </div>

      <TestimonialsCarousel />
      <ClientsLogoCarousel title={clients.title} description={clients.description} />
      <WhyVilniusCarousel title={whyVilnius.title} items={whyVilnius.items} />
      <MediaNewsSection />

      <section className="section-shell bg-white">
        <div className="site-container grid gap-8 lg:grid-cols-2 lg:items-end" data-reveal-group>
          <div>
            <h2 className="section-heading reveal-item">{cta.applicationTitle}</h2>
            <p className="reveal-item m-0 mt-4 max-w-xl text-base leading-loose text-muted">
              {cta.applicationDescription}
            </p>
          </div>
          <div className="reveal-item flex justify-start lg:justify-end">
            <a
              href={cta.applicationCta.href}
              className="inline-flex min-h-12 items-center gap-2 bg-accent px-5 py-3 text-base font-semibold leading-none text-white transition hover:bg-primary"
            >
              {cta.applicationCta.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <InvestorInquiry
        tone="light"
        eyebrow="Kontaktai"
        title={cta.contactTitle}
        description="Susisiekite tiesiogiai su VCIIP operatoriumi. Gediminas Pauliukevičius, VšĮ Northtown Vilnius direktorius."
      />
    </main>
  );
}
