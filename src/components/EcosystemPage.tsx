import {
  bioAdvantages,
  bioClients,
  bioCta,
  bioInfrastructure,
  bioLocation,
  bioPremises,
  bioProcess,
  bioStats,
  bioTerritory,
} from "../content/bio";
import { ApplicationCtaSection } from "./ApplicationCtaSection";
import { ClientsLogoCarousel } from "./ClientsLogoCarousel";
import { EcosystemHero } from "./EcosystemHero";
import { FeatureSplitHighlightsSection } from "./FeatureSplitHighlightsSection";
import { InfrastructureListSection } from "./InfrastructureListSection";
import { InvestorInquiry } from "./InvestorInquiry";
import { KodelVilniusCityLocation } from "./kodel-vilnius/KodelVilniusCityLocation";
import { PremisesCardsSection } from "./PremisesCardsSection";
import { ProofStats } from "./ProofStats";
import { SettleProcess } from "./SettleProcess";
import { WhyVilniusCarousel } from "./WhyVilniusCarousel";

export function EcosystemPage() {
  return (
    <main className="bg-white">
      <EcosystemHero />

      <ProofStats
        showTopDivider={false}
        sectionId={false}
        eyebrow={bioStats.eyebrow}
        title={bioStats.title}
        description={bioStats.description}
        stats={bioStats.items}
      />

      <FeatureSplitHighlightsSection
        id={bioTerritory.id}
        eyebrow={bioTerritory.eyebrow}
        title={bioTerritory.title}
        intro={bioTerritory.intro}
        highlights={bioTerritory.highlights}
        primaryCta={bioTerritory.primaryCta}
        secondaryCta={bioTerritory.secondaryCta}
        mediaPlaceholder={bioTerritory.mediaPlaceholder}
        wideMedia
      />

      <PremisesCardsSection
        id={bioPremises.id}
        eyebrow={bioPremises.eyebrow}
        title={bioPremises.title}
        items={bioPremises.items}
      />

      <WhyVilniusCarousel
        id="privalumai"
        eyebrow={bioAdvantages.eyebrow}
        title={bioAdvantages.title}
        items={bioAdvantages.items}
      />

      <InfrastructureListSection
        id={bioInfrastructure.id}
        eyebrow={bioInfrastructure.eyebrow}
        title={bioInfrastructure.title}
        items={bioInfrastructure.items}
        imageSrc={bioInfrastructure.imageSrc}
        imageAlt={bioInfrastructure.imageAlt}
      />

      <ClientsLogoCarousel title={bioClients.title} description={bioClients.description} />

      <SettleProcess
        id={bioProcess.id}
        eyebrow={bioProcess.eyebrow}
        title={bioProcess.title}
        intro={bioProcess.intro}
        cta={bioProcess.cta}
        tone="light"
        imageSrc={bioProcess.imageSrc}
        imageAlt={bioProcess.imageAlt}
      />

      <KodelVilniusCityLocation
        id={bioLocation.id}
        eyebrow={bioLocation.eyebrow}
        title={bioLocation.title}
        intro={bioLocation.intro}
        legend={bioLocation.legend}
      />

      <ApplicationCtaSection
        title={bioCta.applicationTitle}
        description={bioCta.applicationDescription}
        cta={bioCta.applicationCta}
      />

      <InvestorInquiry
        tone="light"
        eyebrow="Kontaktai"
        title={bioCta.contactTitle}
        description={bioCta.contactDescription}
        showContactIntro={false}
      />
    </main>
  );
}
