import { EcosystemHero } from "./EcosystemHero";
import { EcosystemSplit } from "./EcosystemSplit";
import { InvestorInquiry } from "./InvestorInquiry";
import { ProofStats } from "./ProofStats";

export function EcosystemPage() {
  return (
    <main>
      <EcosystemHero />
      <div id="ekosistema-turinys">
        <ProofStats />
      </div>
      <EcosystemSplit />
      <InvestorInquiry />
    </main>
  );
}
