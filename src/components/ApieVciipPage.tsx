import {
  apieVciipCta,
  apieVciipProcess,
  apieVciipStats,
} from "../content/apieVciip";
import { ApieVciipHero } from "./apie-vciip/ApieVciipHero";
import { ApieVciipOperator } from "./apie-vciip/ApieVciipOperator";
import { ApieVciipPartners } from "./apie-vciip/ApieVciipPartners";
import { ApieVciipTerritories } from "./apie-vciip/ApieVciipTerritories";
import { ApieVciipTimeline } from "./apie-vciip/ApieVciipTimeline";
import { InvestorInquiry } from "./InvestorInquiry";
import { ProofStats } from "./ProofStats";
import { SettleProcess } from "./SettleProcess";

export function ApieVciipPage() {
  return (
    <main className="bg-white">
      <ApieVciipHero />
      <ApieVciipTerritories />
      <ApieVciipTimeline />
      <ProofStats
        showTopDivider={false}
        sectionId={false}
        eyebrow={apieVciipStats.eyebrow}
        title={apieVciipStats.title}
        stats={apieVciipStats.items}
      />
      <SettleProcess
        id={apieVciipProcess.id}
        eyebrow={apieVciipProcess.eyebrow}
        title={apieVciipProcess.title}
        intro={apieVciipProcess.intro}
        steps={apieVciipProcess.steps}
        showImage={false}
        cta={apieVciipProcess.cta}
      />
      <ApieVciipPartners />
      <ApieVciipOperator />
      <InvestorInquiry
        tone="light"
        eyebrow={apieVciipCta.eyebrow}
        title={apieVciipCta.title}
        description={apieVciipCta.description}
      />
    </main>
  );
}
