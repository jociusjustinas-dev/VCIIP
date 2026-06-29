import { ProofStats } from "./ProofStats";
import { WhyInvestors } from "./WhyInvestors";

export function ApieVciipPage() {
  return (
    <main className="bg-white pt-24 max-[991px]:pt-20 max-[479px]:pt-16">
      <ProofStats showTopDivider={false} />
      <WhyInvestors />
    </main>
  );
}
