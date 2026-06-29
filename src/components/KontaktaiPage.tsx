import { InvestorInquiry } from "./InvestorInquiry";
import { PageIntroHero } from "./PageIntroHero";

export function KontaktaiPage() {
  return (
    <main>
      <PageIntroHero
        eyebrow="Kontaktai"
        title="Susisiekite su VCIIP"
        intro="Padėsime įvertinti galimybes ir rasti jūsų veiklai tinkamiausią sprendimą VCIIP teritorijoje."
      />
      <InvestorInquiry showEyebrow={false} tone="light" />
    </main>
  );
}
