import { EcosystemMarquee } from "./EcosystemMarquee";
import { EcosystemSplit } from "./EcosystemSplit";
import { Hero } from "./Hero";
import { InvestorInquiry } from "./InvestorInquiry";
import { ProofStats } from "./ProofStats";
import { ReadyToGrow } from "./ReadyToGrow";
import { SettleProcess } from "./SettleProcess";
import { VilniusEcosystem } from "./VilniusEcosystem";
import { WhyInvestors } from "./WhyInvestors";

export function InvestmentLandingPage() {
  return (
    <main>
      <Hero />
      <ProofStats />
      <EcosystemSplit />
      <WhyInvestors />
      <EcosystemMarquee />
      <SettleProcess />
      <ReadyToGrow />
      <VilniusEcosystem />
      <InvestorInquiry />
    </main>
  );
}
