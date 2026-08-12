import { homeContent } from "../content/home";
import homeAdvantagesImage from "../assets/images/home-advantages.jpg";
import { ApplicationCtaSection } from "./ApplicationCtaSection";
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
      <AdvantagesSection
        title={advantages.title}
        items={advantages.items}
        imageSrc={homeAdvantagesImage}
      />

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
