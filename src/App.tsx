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
  const isBioPage = currentPath === "/ekosistema" || currentPath === "/bio";
  const brandVariant = isBioPage ? "bio" : "tech";

  return (
    <div className={isBioPage ? "legacy-green-page" : undefined}>
      <SmoothScroll />
      <ScrollReveal />
      <Navigation variant={brandVariant} />
      {!isBioPage && <StrategyBadge active={isStrategyPage} />}
      {isStrategyPage ? (
        <StrategyPage />
      ) : isBioPage ? (
        <EcosystemPage />
      ) : (
        <HomePage />
      )}
      <Footer variant={brandVariant} />
    </div>
  );
}

export default App;
