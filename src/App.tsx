import { Hero } from "./components/Hero";
import { EcosystemSplit } from "./components/EcosystemSplit";
import { EcosystemMarquee } from "./components/EcosystemMarquee";
import { Footer } from "./components/Footer";
import { InvestorInquiry } from "./components/InvestorInquiry";
import { Navigation } from "./components/Navigation";
import { ProofStats } from "./components/ProofStats";
import { ReadyToGrow } from "./components/ReadyToGrow";
import { ScrollReveal } from "./components/ScrollReveal";
import { SettleProcess } from "./components/SettleProcess";
import { SmoothScroll } from "./components/SmoothScroll";
import { StrategyBadge } from "./components/StrategyBadge";
import { StrategyPage } from "./components/StrategyPage";
import { VilniusEcosystem } from "./components/VilniusEcosystem";
import { WhyInvestors } from "./components/WhyInvestors";

function App() {
  const isStrategyPage = window.location.pathname.replace(/\/$/, "") === "/strategija";

  return (
    <>
      <SmoothScroll />
      <ScrollReveal />
      <Navigation />
      <StrategyBadge active={isStrategyPage} />
      {isStrategyPage ? (
        <StrategyPage />
      ) : (
        <main>
          <Hero />
          <ProofStats />
          <EcosystemSplit />
          <WhyInvestors />
          <EcosystemMarquee />
          <SettleProcess />
          <ReadyToGrow />
          <VilniusEcosystem />
          <InvestorInquiry />
        </main>
      )}
      <Footer />
    </>
  );
}

export default App;
