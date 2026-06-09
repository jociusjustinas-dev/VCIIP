import ecosystemBioImage from "../assets/images/ecosystem-bio.jpeg";
import { bioEnvironmentContent } from "../content/ecosystem";
import { EcosystemHero } from "./EcosystemHero";
import { EcosystemMarquee } from "./EcosystemMarquee";
import { FeatureAccordionSection } from "./FeatureAccordionSection";
import { InvestorInquiry } from "./InvestorInquiry";
import { ProofStats } from "./ProofStats";

export function EcosystemPage() {
  return (
    <main>
      <EcosystemHero />
      <div id="ekosistema-turinys">
        <ProofStats />
      </div>
      <EcosystemMarquee />
      <FeatureAccordionSection {...bioEnvironmentContent} imageSrc={ecosystemBioImage} />
      <InvestorInquiry />
    </main>
  );
}
