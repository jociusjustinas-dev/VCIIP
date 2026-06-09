import { EcosystemHero } from "./EcosystemHero";
import { InvestorInquiry } from "./InvestorInquiry";
import { ProofStats } from "./ProofStats";

export function EcosystemPage() {
  return (
    <main>
      <EcosystemHero />
      <div id="ekosistema-turinys">
        <ProofStats />
      </div>
      <InvestorInquiry />
    </main>
  );
}
