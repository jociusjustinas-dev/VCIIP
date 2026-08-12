import {
  apieVciipAdvantages,
  apieVciipDocuments,
  apieVciipStats,
  apieVciipVision,
} from "../content/apieVciip";
import { parkPairCta } from "../content/klientai";
import { AdvantagesSection } from "./AdvantagesSection";
import { ApieVciipHero } from "./apie-vciip/ApieVciipHero";
import { ApieVciipOperator } from "./apie-vciip/ApieVciipOperator";
import { ApieVciipPartners } from "./apie-vciip/ApieVciipPartners";
import { ApieVciipTimeline } from "./apie-vciip/ApieVciipTimeline";
import { DocumentsListSection } from "./DocumentsListSection";
import { ParkPairCards } from "./ParkPairCards";
import { ProofStats } from "./ProofStats";
import { WhyVilniusCarousel } from "./WhyVilniusCarousel";

export function ApieVciipPage() {
  return (
    <main className="bg-white">
      <ApieVciipHero />

      <ProofStats
        showTopDivider={false}
        sectionId={false}
        eyebrow={apieVciipStats.eyebrow}
        title={apieVciipStats.title}
        stats={apieVciipStats.items}
      />

      <WhyVilniusCarousel
        id="privalumai"
        eyebrow={apieVciipAdvantages.eyebrow}
        title={apieVciipAdvantages.title}
        items={apieVciipAdvantages.items}
      />

      <AdvantagesSection
        id="vizija"
        eyebrow={apieVciipVision.eyebrow}
        title={apieVciipVision.title}
        items={apieVciipVision.blocks}
      />

      <ApieVciipPartners />
      <ApieVciipTimeline />

      <DocumentsListSection title={apieVciipDocuments.title} items={apieVciipDocuments.items} />

      <ApieVciipOperator />

      <ParkPairCards
        title={parkPairCta.title}
        description={parkPairCta.description}
        primaryCta={parkPairCta.primaryCta}
        bio={parkPairCta.bio}
        tech={parkPairCta.tech}
      />
    </main>
  );
}
