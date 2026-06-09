import { bioTabsContent } from "../content/ecosystem";
import { EcosystemHero } from "./EcosystemHero";
import { EcosystemMarquee } from "./EcosystemMarquee";
import { FeatureTabsSection } from "./FeatureTabsSection";
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
      <FeatureTabsSection {...bioTabsContent} />
      <InvestorInquiry />
    </main>
  );
}
