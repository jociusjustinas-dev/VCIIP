import { EcosystemPage } from "./components/EcosystemPage";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { Navigation } from "./components/Navigation";
import { ScrollReveal } from "./components/ScrollReveal";
import { SmoothScroll } from "./components/SmoothScroll";
import { StrategyBadge } from "./components/StrategyBadge";
import { StrategyPage } from "./components/StrategyPage";

function App() {
  const currentPath = window.location.pathname.replace(/\/$/, "");
  const isStrategyPage = currentPath === "/strategija";
  const isLegacyGreenPage = currentPath === "/ekosistema";
  const brandVariant = isLegacyGreenPage ? "bio" : "tech";

  return (
    <div className={isLegacyGreenPage ? "legacy-green-page" : undefined}>
      <SmoothScroll />
      <ScrollReveal />
      <Navigation variant={brandVariant} />
      {!isLegacyGreenPage && <StrategyBadge active={isStrategyPage} />}
      {isStrategyPage ? (
        <StrategyPage />
      ) : isLegacyGreenPage ? (
        <EcosystemPage />
      ) : (
        <HomePage />
      )}
      <Footer variant={brandVariant} />
    </div>
  );
}

export default App;
