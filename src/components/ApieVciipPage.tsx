import { PageIntroHero } from "./PageIntroHero";
import { ProofStats } from "./ProofStats";
import { WhyInvestors } from "./WhyInvestors";

export function ApieVciipPage() {
  return (
    <main>
      <PageIntroHero
        eyebrow="VCIIP"
        title="Apie VCIIP"
        intro="Vilniaus miesto inovacijų ir pramonės parkas – pirmasis ir vienintelis inovacijoms skirtas pramonės parkas sostinėje, orientuotas į aukštos pridėtinės vertės veiklas."
      />
      <ProofStats />
      <WhyInvestors />
    </main>
  );
}
