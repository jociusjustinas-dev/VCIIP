import {
  techAdvantages,
  techClients,
  techCta,
  techInfrastructure,
  techLocation,
  techPremises,
  techProcess,
  techStats,
  techTerritory,
} from "../content/tech";
import { ApplicationCtaSection } from "./ApplicationCtaSection";
import { ClientsLogoCarousel } from "./ClientsLogoCarousel";
import { FeatureSplitHighlightsSection } from "./FeatureSplitHighlightsSection";
import { InfrastructureListSection } from "./InfrastructureListSection";
import { InvestorInquiry } from "./InvestorInquiry";
import { KodelVilniusCityLocation } from "./kodel-vilnius/KodelVilniusCityLocation";
import { ProofStats } from "./ProofStats";
import { SettleProcess } from "./SettleProcess";
import { TechHero } from "./TechHero";
import { WhyVilniusCarousel } from "./WhyVilniusCarousel";

export function TechPage() {
  return (
    <main className="bg-white">
      <TechHero />

      <ProofStats
        showTopDivider={false}
        sectionId={false}
        eyebrow={techStats.eyebrow}
        title={techStats.title}
        description={techStats.description}
        stats={techStats.items}
      />

      <FeatureSplitHighlightsSection
        id={techTerritory.id}
        eyebrow={techTerritory.eyebrow}
        title={techTerritory.title}
        intro={techTerritory.intro}
        highlights={techTerritory.highlights}
        primaryCta={techTerritory.primaryCta}
        secondaryCta={techTerritory.secondaryCta}
        imageSrc={techTerritory.imageSrc}
        wideMedia
      />

      <FeatureSplitHighlightsSection
        id={techPremises.id}
        eyebrow={techPremises.eyebrow}
        title={techPremises.title}
        intro={techPremises.intro}
        highlights={techPremises.highlights}
        primaryCta={techPremises.primaryCta}
        secondaryCta={techPremises.secondaryCta}
        imageSrc={techPremises.imageSrc}
      />

      <WhyVilniusCarousel
        id="privalumai"
        eyebrow={techAdvantages.eyebrow}
        title={techAdvantages.title}
        items={techAdvantages.items}
      />

      <InfrastructureListSection
        id={techInfrastructure.id}
        eyebrow={techInfrastructure.eyebrow}
        title={techInfrastructure.title}
        items={techInfrastructure.items}
        imageSrc={techInfrastructure.imageSrc}
        imageAlt={techInfrastructure.imageAlt}
      />

      <ClientsLogoCarousel title={techClients.title} description={techClients.description} />

      <SettleProcess
        id={techProcess.id}
        eyebrow={techProcess.eyebrow}
        title={techProcess.title}
        intro={techProcess.intro}
        cta={techProcess.cta}
        tone="light"
      />

      <KodelVilniusCityLocation
        id={techLocation.id}
        eyebrow={techLocation.eyebrow}
        title={techLocation.title}
        intro={techLocation.intro}
        legend={techLocation.legend}
      />

      <ApplicationCtaSection
        title={techCta.applicationTitle}
        description={techCta.applicationDescription}
        cta={techCta.applicationCta}
      />

      <InvestorInquiry
        tone="light"
        eyebrow="Kontaktai"
        title={techCta.contactTitle}
        description={techCta.contactDescription}
        showContactIntro={false}
      />
    </main>
  );
}
