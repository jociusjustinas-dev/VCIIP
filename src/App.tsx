import { useEffect } from "react";

import { ApieVciipPage } from "./components/ApieVciipPage";
import { EcosystemPage } from "./components/EcosystemPage";
import { Footer } from "./components/Footer";
import { HashScroll } from "./components/HashScroll";
import { HomePage } from "./components/HomePage";
import { IsikurimasPage } from "./components/IsikurimasPage";
import { KontaktaiPage } from "./components/KontaktaiPage";
import { Navigation } from "./components/Navigation";
import { NewsPage } from "./components/NewsPage";
import { NewsPostPage } from "./components/NewsPostPage";
import { OperatoriusPage } from "./components/OperatoriusPage";
import { ScrollReveal } from "./components/ScrollReveal";
import { SmoothScroll } from "./components/SmoothScroll";
import { StrategyPage } from "./components/StrategyPage";
import { TechPage } from "./components/TechPage";
import { getBrandVariantFromPath, getHubHrefFromPath, usesLegacyGreenTheme, usesVciipIndexTheme } from "./content/site";

function Redirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
}

function App() {
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  const isStrategyPage = currentPath === "/strategija";
  const isTechHub = currentPath === "/tech";
  const isBioHub = currentPath === "/ekosistema" || currentPath === "/bio";
  const isKontaktaiPage = currentPath === "/kontaktai";
  const isKodelVilniusPage = currentPath === "/kodel-vilnius";
  const isApieVciipPage = currentPath === "/apie-vciip";
  const isIsikurimasPage = currentPath === "/isikurimas";
  const isOperatoriusPage = currentPath === "/operatorius";
  const isNewsPage = currentPath === "/naujienos";
  const newsPostSlug = currentPath.startsWith("/naujienos/")
    ? currentPath.slice("/naujienos/".length).split("/")[0]
    : null;
  const isNewsPostPage = Boolean(newsPostSlug);
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
      {isKodelVilniusPage ? (
        <Redirect to="/#kodel-vilnius" />
      ) : isStrategyPage ? (
        <StrategyPage />
      ) : isBioHub ? (
        <EcosystemPage />
      ) : isTechHub ? (
        <TechPage />
      ) : isKontaktaiPage ? (
        <KontaktaiPage />
      ) : isApieVciipPage ? (
        <ApieVciipPage />
      ) : isIsikurimasPage ? (
        <IsikurimasPage />
      ) : isOperatoriusPage ? (
        <OperatoriusPage />
      ) : isNewsPostPage && newsPostSlug ? (
        <NewsPostPage slug={newsPostSlug} />
      ) : isNewsPage ? (
        <NewsPage />
      ) : (
        <HomePage />
      )}
      <Footer variant={brandVariant} hubHref={hubHref} tealLogo={useTealLogo} />
    </div>
  );
}

export default App;
