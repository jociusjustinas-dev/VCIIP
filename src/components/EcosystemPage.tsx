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
      <section id="lokacija" className="relative bg-white">
        <ProofStats />
      </section>
      <EcosystemMarquee />
      <FeatureTabsSection {...bioTabsContent} />
      <FeatureSplitHighlightsSection {...bioGrowthContent} />
    </main>
  );
}
