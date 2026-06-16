import { ApieVciipPage } from "./components/ApieVciipPage";
import { EcosystemPage } from "./components/EcosystemPage";
import { Footer } from "./components/Footer";
import { HashScroll } from "./components/HashScroll";
import { HomePage } from "./components/HomePage";
import { KodelVilniusPage } from "./components/KodelVilniusPage";
import { Navigation } from "./components/Navigation";
import { ScrollReveal } from "./components/ScrollReveal";
import { SmoothScroll } from "./components/SmoothScroll";
import { StrategyPage } from "./components/StrategyPage";
import { TechPage } from "./components/TechPage";
import { getBrandVariantFromPath, getHubHrefFromPath, usesLegacyGreenTheme, usesVciipIndexTheme } from "./content/site";

function App() {
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  const isStrategyPage = currentPath === "/strategija";
  const isTechHub = currentPath === "/tech";
  const isBioHub = currentPath === "/ekosistema" || currentPath === "/bio";
  const isKodelVilniusPage = currentPath === "/kodel-vilnius";
  const isApieVciipPage = currentPath === "/apie-vciip";
  const brandVariant = getBrandVariantFromPath(currentPath);
  const hubHref = getHubHrefFromPath(currentPath);
  const pageThemeClass = usesLegacyGreenTheme(currentPath) ? "legacy-green-page" : undefined;
  const useTealLogo = usesVciipIndexTheme(currentPath);

  return (
    <div className={pageThemeClass}>
      <SmoothScroll />
      <HashScroll pathname={currentPath} />
      <ScrollReveal />
      <Navigation variant={brandVariant} hubHref={hubHref} tealLogo={useTealLogo} />
      {isStrategyPage ? (
        <StrategyPage />
      ) : isBioHub ? (
        <EcosystemPage />
      ) : isTechHub ? (
        <TechPage />
      ) : isKodelVilniusPage ? (
        <KodelVilniusPage />
      ) : isApieVciipPage ? (
        <ApieVciipPage />
      ) : (
        <HomePage />
      )}
      <Footer variant={brandVariant} hubHref={hubHref} tealLogo={useTealLogo} />
    </div>
  );
}

export default App;
