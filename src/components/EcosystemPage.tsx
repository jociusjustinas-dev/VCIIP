import { bioGrowthContent, bioTabsContent } from "../content/ecosystem";
import { EcosystemHero } from "./EcosystemHero";
import { EcosystemMarquee } from "./EcosystemMarquee";
import { FeatureSplitHighlightsSection } from "./FeatureSplitHighlightsSection";
import { FeatureTabsSection } from "./FeatureTabsSection";
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
      <FeatureSplitHighlightsSection {...bioGrowthContent} />
    </main>
  );
}
