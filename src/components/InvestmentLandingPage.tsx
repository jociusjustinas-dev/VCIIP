import { AvailablePlotsSection } from "./AvailablePlotsSection";
import { InvestorInquiry } from "./InvestorInquiry";
import { ProofStats } from "./ProofStats";
import { SettleProcess } from "./SettleProcess";
import { TechHero } from "./TechHero";
import { VilniusEcosystem } from "./VilniusEcosystem";
import { WhyInvestors } from "./WhyInvestors";

/** Tech landing only — Home uses dedicated HomePage composition from Excel. */
export function InvestmentLandingPage({ variant = "tech" }: { variant?: "index" | "tech" }) {
  if (variant === "index") {
    return null;
  }

  return (
    <main>
      <TechHero />
      <ProofStats />
      <WhyInvestors />
      <AvailablePlotsSection />
      <SettleProcess />
      <VilniusEcosystem />
      <InvestorInquiry tone="dark" />
    </main>
  );
}
