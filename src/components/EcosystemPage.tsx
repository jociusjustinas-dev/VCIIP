import { bioApieIntro, bioGrowthContent, bioTabsContent } from "../content/ecosystem";
import { EcosystemHero } from "./EcosystemHero";
import { FeatureSplitHighlightsSection } from "./FeatureSplitHighlightsSection";
import { FeatureTabsSection } from "./FeatureTabsSection";
import { ProofStats } from "./ProofStats";

export function EcosystemPage() {
  return (
    <main>
      <EcosystemHero />
      <ProofStats showTopDivider={false} sectionId={false} />
      <section className="relative bg-white pb-16 max-[479px]:pb-14">
        <div className="site-container px-6 max-[479px]:px-4" data-reveal-group>
          <p className="reveal-item body-lead m-0 max-w-3xl text-muted">{bioApieIntro}</p>
        </div>
      </section>
      <FeatureTabsSection {...bioTabsContent} />
      <FeatureSplitHighlightsSection {...bioGrowthContent} />
    </main>
  );
}
