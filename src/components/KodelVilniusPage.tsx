import { PageIntroHero } from "./PageIntroHero";
import { ProofStats } from "./ProofStats";
import { VilniusEcosystem } from "./VilniusEcosystem";

export function KodelVilniusPage() {
  return (
    <main>
      <PageIntroHero
        eyebrow="VCIIP"
        title="Kodėl Vilnius"
        intro="Vilnius – viena patraukliausių vietų Baltijos regione inovatyviam verslui kurtis ir augti. VCIIP integruota į miesto ekosistemą, paslaugas ir ilgalaikę plėtrą."
      />
      <ProofStats />
      <VilniusEcosystem />
    </main>
  );
}
