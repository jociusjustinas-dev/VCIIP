import { homeContent } from "../content/home";
import { ApplicationCtaSection } from "./ApplicationCtaSection";
import { AdvantagesSection } from "./AdvantagesSection";
import { ClientsLogoCarousel } from "./ClientsLogoCarousel";
import { HomeAboutSection } from "./HomeAboutSection";
import { HomeHero } from "./HomeHero";
import { InfrastructureListSection } from "./InfrastructureListSection";
import { InvestorInquiry } from "./InvestorInquiry";
import { KodelVilniusCityLocation } from "./kodel-vilnius/KodelVilniusCityLocation";
import { MediaNewsSection } from "./MediaNewsSection";
import { ParkPairCards } from "./ParkPairCards";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { WhyVilniusCarousel } from "./WhyVilniusCarousel";

export function HomePage() {
  const { advantages, parks, clients, whyVilnius, cta, location, infrastructure } = homeContent;

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

      <InfrastructureListSection
        id={infrastructure.id}
        eyebrow={infrastructure.eyebrow}
        title={infrastructure.title}
        items={infrastructure.items}
        imageSrc={infrastructure.imageSrc}
        imageAlt={infrastructure.imageAlt}
      />

      <KodelVilniusCityLocation
        id={location.id}
        eyebrow={location.eyebrow}
        title={location.title}
        intro={location.intro}
        legend={location.legend}
      />

      <TestimonialsCarousel />
      <ClientsLogoCarousel title={clients.title} description={clients.description} />
      <WhyVilniusCarousel title={whyVilnius.title} items={whyVilnius.items} />
      <MediaNewsSection />

      <ApplicationCtaSection
        title={cta.applicationTitle}
        description={cta.applicationDescription}
        cta={cta.applicationCta}
      />

      <InvestorInquiry
        tone="light"
        eyebrow="Kontaktai"
        title={cta.contactTitle}
        description="Susisiekite tiesiogiai su VCIIP operatoriumi."
        showContactIntro={false}
      />
    </main>
  );
}
