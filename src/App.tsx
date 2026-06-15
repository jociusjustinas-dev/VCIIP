import { EcosystemPage } from "./components/EcosystemPage";
import { Footer } from "./components/Footer";
import { HashScroll } from "./components/HashScroll";
import { HomePage } from "./components/HomePage";
import { Navigation } from "./components/Navigation";
import { ScrollReveal } from "./components/ScrollReveal";
import { SmoothScroll } from "./components/SmoothScroll";
import { StrategyBadge } from "./components/StrategyBadge";
import { StrategyPage } from "./components/StrategyPage";
import { TechPage } from "./components/TechPage";
import { getBrandVariantFromPath, getHubHrefFromPath } from "./content/site";

function App() {
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  const isStrategyPage = currentPath === "/strategija";
  const isTechHub = currentPath === "/tech";
  const isBioHub = currentPath === "/ekosistema" || currentPath === "/bio";
  const brandVariant = getBrandVariantFromPath(currentPath);
  const hubHref = getHubHrefFromPath(currentPath);

  return (
    <div className={isBioHub ? "legacy-green-page" : undefined}>
      <SmoothScroll />
      <HashScroll pathname={currentPath} />
      <ScrollReveal />
      <Navigation variant={brandVariant} hubHref={hubHref} />
      {!isBioHub && <StrategyBadge active={isStrategyPage} />}
      {isStrategyPage ? (
        <StrategyPage />
      ) : isBioHub ? (
        <EcosystemPage />
      ) : isTechHub ? (
        <TechPage />
      ) : (
        <HomePage />
      )}
      <Footer variant={brandVariant} hubHref={hubHref} />
    </div>
  );
}

export default App;
