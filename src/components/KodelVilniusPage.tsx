import { ProofStats } from "./ProofStats";
import { VilniusEcosystem } from "./VilniusEcosystem";

export function KodelVilniusPage() {
  return (
    <main className="pt-24 max-[991px]:pt-20 max-[479px]:pt-16">
      <ProofStats />
      <VilniusEcosystem />
    </main>
  );
}
