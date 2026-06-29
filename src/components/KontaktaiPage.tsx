import { InvestorInquiry } from "./InvestorInquiry";

export function KontaktaiPage() {
  return (
    <main className="pt-24 max-[991px]:pt-20 max-[479px]:pt-16">
      <InvestorInquiry showEyebrow={false} tone="light" />
    </main>
  );
}
