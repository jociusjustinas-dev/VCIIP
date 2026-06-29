import { AvailablePlotsSection } from "./AvailablePlotsSection";
import { MediaNewsSection } from "./MediaNewsSection";
import { EcosystemMarquee } from "./EcosystemMarquee";
import { EcosystemSplit } from "./EcosystemSplit";
import { GatewayHero } from "./GatewayHero";
import { TechHero } from "./TechHero";
import { InvestorInquiry } from "./InvestorInquiry";
import { ProofStats } from "./ProofStats";
import { SettleProcess } from "./SettleProcess";
import { VilniusEcosystem } from "./VilniusEcosystem";
import { WhyInvestors } from "./WhyInvestors";

export function InvestmentLandingPage({ variant = "tech" }: { variant?: "index" | "tech" }) {
  const showFullTechSections = variant === "tech";

  return (
    <main>
      {variant === "index" ? <GatewayHero /> : <TechHero />}
      <ProofStats />
      {variant === "index" && <EcosystemSplit />}
      {variant === "index" && <MediaNewsSection />}
      {showFullTechSections && (
        <>
          <WhyInvestors />
          <EcosystemMarquee />
          <AvailablePlotsSection />
          <SettleProcess />
          <VilniusEcosystem />
        </>
      )}
      <InvestorInquiry tone={variant === "index" ? "light" : "dark"} />
    </main>
  );
}
