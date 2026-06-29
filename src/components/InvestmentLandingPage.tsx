import { MediaNewsSection } from "./MediaNewsSection";
import { EcosystemMarquee } from "./EcosystemMarquee";
import { EcosystemSplit } from "./EcosystemSplit";
import { GatewayHero } from "./GatewayHero";
import { TechHero } from "./TechHero";
import { InvestorInquiry } from "./InvestorInquiry";
import { ProofStats } from "./ProofStats";
import { ReadyToGrow } from "./ReadyToGrow";
import { SettleProcess } from "./SettleProcess";
import { VilniusEcosystem } from "./VilniusEcosystem";
import { WhyInvestors } from "./WhyInvestors";

export function InvestmentLandingPage({ variant = "tech" }: { variant?: "index" | "tech" }) {
  const showFullTechSections = variant === "tech";

  return (
    <main>
      {variant === "index" ? <GatewayHero /> : <TechHero />}
      <ProofStats />
      <EcosystemSplit />
      {variant === "index" && <MediaNewsSection />}
      {showFullTechSections && (
        <>
          <WhyInvestors />
          <EcosystemMarquee />
          <SettleProcess />
          <ReadyToGrow />
          <VilniusEcosystem />
        </>
      )}
      <InvestorInquiry tone={variant === "index" ? "light" : "dark"} />
    </main>
  );
}
